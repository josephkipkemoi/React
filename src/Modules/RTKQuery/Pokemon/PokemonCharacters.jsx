import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useGetPaginatedPokemonCharactersQuery } from "../../../Services/Hooks/PokemonHook";
import { PropTypes } from "prop-types"

PokemonCharacters.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default function PokemonCharacters({onClick}) {

    const {data, error, isLoading} = useGetPaginatedPokemonCharactersQuery();

    if(error) {
        throw Error('Error Fetching data')
    }

    if(isLoading) {
        return <Spinner></Spinner>
    }
  
    const { count , results} = data;

    const PokemonNames = () => {
        return (
            <>
                {results.map(({name}, key) => <Button onClick={() => onClick(name)} className="d-block w-100 m-1" variant="light" key={name+key}>{name}</Button>)}
            </>
        )
    }
    return (
        <>
            <h3>Pokemon Characters</h3>
            <p>{count} pokemons found</p>
            <PokemonNames />
            <div className="d-sm-flex justify-content-between p-2">
                <Button>
                    Previous
                </Button>
                <Button>
                    Next
                </Button>
            </div>
           
        </>
    )
}