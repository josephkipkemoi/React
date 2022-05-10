import React from "react";
import { PropTypes } from 'prop-types';

export default function PokemonCharacterForm({ forms }) {
    
    const PokemonForms = () =>  forms.map(({name}, key) => <small key={key + name}>{ name }</small>)

    return (
        <>
            <h5>Forms</h5>
            <PokemonForms/>
        </>
    )
}

PokemonCharacterForm.propTypes = {
    forms: PropTypes.array.isRequired
}