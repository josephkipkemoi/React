import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

export default function PokemonCharacterType({type}) {
    
    const PokemonType = () => type.map(({type: {name}}, key) => <Link className="d-block" key={name + key} to="">{name}</Link>)

    return (
        <>
            <Link to="/Pokemon/Types"><h4>Type</h4></Link>
            <PokemonType/>
        </>
    )
}

PokemonCharacterType.propTypes = {
    type: PropTypes.array.isRequired
}