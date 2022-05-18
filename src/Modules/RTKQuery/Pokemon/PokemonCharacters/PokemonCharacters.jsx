import React, { useState } from "react";
import './PokemonBody.css';
import { Link } from "react-router-dom";
import { useGetPaginatedPokemonCharactersQuery } from "../../../../Services/Hooks/PokemonHook";
import { Button, Spinner } from "react-bootstrap";
 
export default function PokemonCharacters() {
    const offsetCount = !localStorage.getItem('offset_count') ? 0 : Number(localStorage.getItem('offset_count'));

    const [offset, setOffset] = useState(offsetCount);

    const { data, error, isLoading } = useGetPaginatedPokemonCharactersQuery({ offset, limit: 40 });

    if(error) {
        const { data } = error;

        return <div className="alert alert-danger">{data}</div>
    }

    if(isLoading) {
        return <Spinner animation="grow"></Spinner>
    }

    const { results, previous, next} = data;

    const getNext = () => {
        setOffset(prevState => prevState + 40);
    }

    const getPrevious = () => {
        setOffset(prevState => prevState - 40);
    }

    localStorage.setItem('offset_count', offset);
 
    return (
        <>
 
            <div className="row">
                {results.map(({name}, key) =>  <Link key={key + name} to={"/Pokemon/Characters/" + name } className="text-decoration-none text-light col-2"><div className="m-3  p-2 char-name-box rounded bg-primary">{name}</div></Link>)}
            </div>
            <div className="d-sm-flex justify-content-center">
                <Button disabled={!previous} onClick={() => getPrevious()}>Previous</Button>
                <Button disabled={!next} onClick={() => getNext()}>Next</Button>
            </div>
        </>   
    )
}