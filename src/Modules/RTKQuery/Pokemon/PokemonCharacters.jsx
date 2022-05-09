import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useGetPaginatedPokemonCharactersQuery } from "../../../Services/Hooks/PokemonHook";
import { Link } from "react-router-dom";

export default function PokemonCharacters() {

    const offsetCount = Number(localStorage.getItem('offset')) === 0 ? 0 : Number(localStorage.getItem('offset'));

    const [offset, setOffset] = useState( offsetCount );

    const {data, error, isLoading} = useGetPaginatedPokemonCharactersQuery({ offset, limit: 10 });

    if(error) {
        throw Error('Error Fetching data')
    }

    if(isLoading) {
        return <Spinner animation="grow"></Spinner>
    }
  
    const { count , results, previous, next} = data;

    const PokemonNames = () => {
        return (
            <>
                {results.map(({name}, key) => <Link to={ "/Pokemon/Characters/" + name } className="d-block w-100 m-1 btn btn-light btn-sm" key={name+key}>{name}</Link>)}
            </>
        )
    }

    const getNextGames = () => setOffset((prevState) => prevState + 10);
    
    const getPreviousGames = () => setOffset((prevState) => prevState - 10);
 
    localStorage.setItem('offset', offset);

    return (
        <>
            <h3>Pokemon Characters</h3>
            <p>{count} pokemons found</p>
            <PokemonNames />
            <div className="d-sm-flex justify-content-between p-2">
                <Button disabled={!previous} onClick={() => getPreviousGames()}>
                    Previous
                </Button>
                <Button disabled={!next} onClick={() => getNextGames()}>
                    Next
                </Button>
            </div>
           
        </>
    )
}