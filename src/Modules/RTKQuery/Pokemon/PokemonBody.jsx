import React, { useState } from "react";
import './PokemonBody.css';
import { Link, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useGetPaginatedPokemonCharactersQuery } from "../../../Services/Hooks/PokemonHook";
import { Button, Spinner } from "react-bootstrap";

PokemonBody.propTypes = {
    pokemonData: PropTypes.array.isRequired
}

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

    const { data, error, isLoading } = useGetPaginatedPokemonCharactersQuery({ offset, limit: 40 });

    if(error) {
        return Error('Data not fetched')
    }

    if(isLoading) {
        return <Spinner></Spinner>
    }

    const {count , results, previous, next} = data;

    const getNext = () => {
        setOffset(prevState => prevState + 40);
    }

    const getPrevious = () => {
        setOffset(prevState => prevState - 40);
    }

    localStorage.setItem('offset_count', offset);

    return (
        <>
            <small className="d-block">{count} characters names found</small>
            <input placeholder="Search Character Name" type="text"/>
            <Button>Search</Button>
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