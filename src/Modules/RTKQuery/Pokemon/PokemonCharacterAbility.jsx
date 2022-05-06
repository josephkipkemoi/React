import React from "react";
import { PropTypes } from 'prop-types';

PokemonCharacterAbility.propTypes = {
    abilities: PropTypes.array.isRequired
}

export default function PokemonCharacterAbility({ abilities }) {

    return (
        <>
            <h5>Abilities</h5>
            {abilities.map(({ability: {name}, is_hidden}, key)  => (<React.Fragment key={key + name}><small className="d-block">{name}</small><small className="d-block">Ability Hidden: {is_hidden.toString()}</small></React.Fragment>))}
        </>
    )
}