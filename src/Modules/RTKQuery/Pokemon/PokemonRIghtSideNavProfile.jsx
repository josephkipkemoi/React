import React from "react";
import { PropTypes } from 'prop-types';
import { useGetPokemonSpeciesQuery } from "../../../Services/Hooks/PokemonHook";
import { Spinner } from "react-bootstrap";

PokemonRightSideNavProfile.propTypes = {
     id: PropTypes.number.isRequired,
}

export default function PokemonRightSideNavProfile({ id}) {

    const {data, error, isLoading} = useGetPokemonSpeciesQuery(id);

    if(error) {
        throw Error('Error Fetching Data')
    }

    if(isLoading) {
        return <Spinner></Spinner>
    }

    const {name, base_happiness, capture_rate, color , forms_switchable, gender_rate, has_gender_differences, hatch_counter, is_baby, is_legendary, is_mythical, order, shape } = data;

    return (
        <>
            <h3>Species: </h3>
            <p>Name: {name}</p>
            <p>Happiness: {base_happiness}</p>
            <p>Capture Rate: {capture_rate}</p>
            <p>Color: {color.name}</p>
            <p>Form Switchable: {forms_switchable}</p>
            <p>Gender Rate: {gender_rate}</p>
            <p>Gender Difference: {has_gender_differences}</p>
            <p>Hatch Count: {hatch_counter}</p>
            <p>Baby: {(is_baby).toString()}</p>
            <p>Legendary: {(is_legendary).toString()}</p>
            <p>Mythical: {(is_mythical).toString()}</p>
            <p>Order: {order}</p>
            <p>Shape: {shape.name}</p>
        </>
    )
}