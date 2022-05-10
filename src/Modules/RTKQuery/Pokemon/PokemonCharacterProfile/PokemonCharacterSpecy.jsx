import React from "react";
import { PropTypes } from 'prop-types';
import { useGetPokemonSpeciesQuery } from "../../../../Services/Hooks/PokemonHook";
import { Spinner } from "react-bootstrap";



export default function PokemonCharacterSpecy({ id }) {

    const {data, error, isLoading} = useGetPokemonSpeciesQuery(id);

    if(error) {
        const { data } = error;

        return <div className="alert alert-danger">{data}</div>
    }

    if(isLoading) {
        return <Spinner animation="grow"></Spinner>
    }

    const {name, base_happiness, capture_rate, color , forms_switchable, gender_rate, has_gender_differences, hatch_counter, is_baby, is_legendary, is_mythical, order, shape } = data;

    return (
        <>
            <h5>Species: </h5>
            <small className="d-block">Name: {name}</small>
            <small className="d-block">Happiness: {base_happiness}</small>
            <small className="d-block">Capture Rate: {capture_rate}</small>
            <small className="d-block">Color: {color.name}</small>
            <small className="d-block">Form Switchable: {forms_switchable}</small>
            <small className="d-block">Gender Rate: {gender_rate}</small>
            <small className="d-block">Gender Difference: {has_gender_differences}</small>
            <small className="d-block">Hatch Count: {hatch_counter}</small>
            <small className="d-block">Baby: {(is_baby).toString()}</small>
            <small className="d-block">Legendary: {(is_legendary).toString()}</small>
            <small className="d-block">Mythical: {(is_mythical).toString()}</small>
            <small className="d-block">Order: {order}</small>
            <small className="d-block">Shape: {shape.name}</small>
        </>
    )
}

PokemonCharacterSpecy.propTypes = {
    id: PropTypes.number.isRequired,
}