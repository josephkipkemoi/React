import React, {  useState, useRef } from "react";
import './PokemonBody.css';
import { useGetPaginatedPokemonCharactersQuery } from "../../../Services/Hooks/PokemonHook";
import { Spinner, Row, Col } from "react-bootstrap";
import InputElement from "../../../Commons/InputElement/SearchInputElement";

import { Link } from "react-router-dom";
import {PropTypes} from 'prop-types';

export default function PokemonSearch() {

    const searchInpt = useRef();

    const [searchResults, setSearchResults] = useState([]);

    const { data, error, isLoading } = useGetPaginatedPokemonCharactersQuery({ offset: 20, limit: 1126 });

    if(error) {
        return Error('Error Fetching');
    }

    if(isLoading) {
        return <Spinner animation="grow"></Spinner>
    }

    const { results } = data;

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
                    <small className="d-block">{searchResults.length} characters names found</small>
                </Col>
                <Col className="d-flex" xs={3}>
                    <InputElement ref={searchInpt} type="search" placeholder="Search character" className="form-control" onChange={queryDatabaseForResult}/> 
                </Col>
            </Row>
             {searchResults.length > 0 ?  <SearchResultData data={searchResults}/> : ''}
        </>
    )
}

const SearchResultData = ({data}) => {
    return (
        <>
           {data.map(({name}) => <Link key={name} to={ "/Pokemon/Characters/" + name } className="d-block btn btn-light btn-sm">{ name }</Link>)}
        </>
    )
}

SearchResultData.propTypes = {
    data: PropTypes.array.isRequired
}