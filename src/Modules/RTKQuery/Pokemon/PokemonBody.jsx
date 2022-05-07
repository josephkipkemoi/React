import React, { useState } from "react";
import './PokemonBody.css';
import { Link, useLocation } from "react-router-dom";
import { useGetPaginatedPokemonCharactersQuery } from "../../../Services/Hooks/PokemonHook";
import { Button, Spinner, Row, Col } from "react-bootstrap";
import { PropTypes } from 'prop-types';


export default function PokemonBody() {
    const location = useLocation();
 
    const RenderBody = () => {
         
        if(location.pathname.includes('Characters')) {
            return  <PokemonCharacters/>
        }
   
    }

    return (
        <> 
          <RenderBody/>
        </>
    )
}

const PokemonCharacters = () => {

    const offsetCount = !localStorage.getItem('offset_count') ? 0 : Number(localStorage.getItem('offset_count'));

    const [offset, setOffset] = useState(offsetCount);

    const [searchResults, setSearchResults] = useState([]);

    const { data, error, isLoading } = useGetPaginatedPokemonCharactersQuery({ offset, limit: 40 });

    if(error) {
        return Error('Data not fetched')
    }

    if(isLoading) {
        return <Spinner animation="grow"></Spinner>
    }

    const {count , results, previous, next} = data;

    const getNext = () => {
        setOffset(prevState => prevState + 40);
    }

    const getPrevious = () => {
        setOffset(prevState => prevState - 40);
    }

    localStorage.setItem('offset_count', offset);

    const queryDatabaseForResult = (e) => {
       const res = results.filter(({name}) => !e.target.value ? null : name.match(e.target.value));

       if(res.length <= 0) {
           setSearchResults([]);
           return false;
       }

       setSearchResults(res)
    }

    return (
        <>
            <Row>
                <Col>
                    <small className="d-block">{count} characters names found</small>
                </Col>
                <Col className="d-flex" xs={3}>
                    <input type="search" placeholder="Search character" className="form-control" onChange={queryDatabaseForResult}/>
                 </Col>
            </Row>
             {searchResults.length > 0 ?  <SearchResultData data={searchResults}/> : ''}
            <div className="row">
                {results.map(({name}, key) =>  <div key={key + name} className="m-3 col-2 char-name-box rounded bg-primary"><Link className="text-decoration-none text-light p-2" to="#">{name}</Link></div>)}
            </div>
            <div className="d-sm-flex justify-content-center">
                <Button disabled={!previous} onClick={() => getPrevious()}>Previous</Button>
                <Button disabled={!next} onClick={() => getNext()}>Next</Button>
            </div>
        </>   
    )
}


const SearchResultData = ({data}) => {
    return (
        <>
           {data.map(({name}) => <Button key={name} className="d-block">{name}</Button>)}
        </>
    )
}

SearchResultData.propTypes = {
    data: PropTypes.array.isRequired
}
