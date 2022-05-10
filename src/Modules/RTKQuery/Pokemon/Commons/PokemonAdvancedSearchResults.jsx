import React from "react";
import { Button, Card } from "react-bootstrap";
import { PropTypes } from 'prop-types';

export default function PokemonAdvancedSearchResults({ pokemon_species }) {
   
    const Species = () => {
        return pokemon_species?.map(({name}, key) => {
            return <Button key={key + name}>{name}</Button>
        })
    }
    
    return (
        <div className="shadow">
            <Card>
                <Card.Body>
                <h1>Results</h1>
                <Species/>
                </Card.Body>
            </Card>
        </div>
    )
}

PokemonAdvancedSearchResults.propTypes = {
    pokemon_species: PropTypes.array.isRequired
}