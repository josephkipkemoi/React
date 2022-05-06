import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useGetPaginatedPokemonCharactersQuery } from "../../../Services/Hooks/PokemonHook";
import { PropTypes } from "prop-types"

PokemonCharacters.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default function PokemonCharacters({onClick}) {

    const offsetCount = Number(localStorage.getItem('offset')) === 0 ? 0 : Number(localStorage.getItem('offset'));

    const [offset, setOffset] = useState( offsetCount );

    const {data, error, isLoading} = useGetPaginatedPokemonCharactersQuery({ offset, limit: 10 });

    if(error) {
        throw Error('Error Fetching data')
    }

    if(isLoading) {
        return <Spinner></Spinner>
    }
  
    const { count , results, previous, next} = data;

    const PokemonNames = () => {
        return (
            <>
                {results.map(({name}, key) => <Button onClick={() => (onClick(name), localStorage.setItem('charName', name))} className="d-block w-100 m-1" variant="light" key={name+key}>{name}</Button>)}
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