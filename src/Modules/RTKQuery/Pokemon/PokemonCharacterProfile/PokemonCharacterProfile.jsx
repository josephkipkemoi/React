import React, { useState } from "react";
import PokemonCharacters from "./PokemonLeftNavCharacters";
import { Col, Row, Spinner } from 'react-bootstrap';
import PokemonCharacterAbility from "./PokemonCharacterAbility";
import PokemonRightSideNavProfile from "./PokemonCharacterSpecy";
import PokemonHeader from "../Pokemon";
import { useGetPokemonByNameQuery } from "../../../../Services/Hooks/PokemonHook";
import { useParams } from "react-router-dom";
import PokemonCharacterForm from "./PokemonCharacterForm";
import PokemonCharacterType from "./PokemonCharacterType";
import PokemonCharacterStat from "./PokemonCharacterStat";

export default function PokemonCharacterProfile() {

    const { pokemon_name } = useParams();

    const {data, error , isLoading} = useGetPokemonByNameQuery(pokemon_name);
       
    if(error)  {
        const { data } = error;

        return <div className="alert alert-danger">{data}</div>
    }

     
    if(isLoading) {
        return <Spinner animation="grow"></Spinner>
    }

    const { name, 
            base_experience, 
            height, 
            order, 
            sprites, 
            weight, 
            id, 
            abilities, 
            forms,
            types,
            stats
        } = data;
 
    const PokemonCharacterProfile = () => {

        const [spritesGender, ] = useState({
            male: [sprites.front_default, sprites.back_default, sprites.front_shiny, sprites.back_shiny],
            female: [sprites.front_female, sprites.back_female, sprites.front_shiny_female, sprites.back_shiny_female]
        })
        
        const PokemonGender = () => {

            if(spritesGender.female.indexOf(null) === -1) {
                return (
                    <>
                        <h4>Character Images</h4>
                        {spritesGender.female.map((data, key) => <img src={data} alt={data} key={key+data}/>)}
                    </>
                )
            }

            if(spritesGender.male.indexOf(null) === -1) {
                return (
                    <>
                        <h4>Character Images</h4>
                        {spritesGender.male.map((data, key) => <img src={data} alt={data} key={key+data}/>)}
                    </>
                )
            }

        }

        return (
            <>
                <h3>Pokemon Character Profile</h3>
                <PokemonGender/>
                <small className="d-block">Name: {name}</small>
                <small className="d-block">Experience: {base_experience}</small>
                <small className="d-block">Height: {height}</small>
                <small className="d-block">Order: {order}</small>
                <small className="d-block">Weight: {weight}</small>
            </>
        )
    }

    return (
        <Row>
            <PokemonHeader/>
            <Col sm={3} md={3}>         
                <PokemonCharacters />
            </Col>
            <Col>
                <PokemonCharacterProfile/>
                <Row>
                    <Col sm={12}>
                    <PokemonCharacterType type={types}/>
                    </Col>
                    <Col>
                    <PokemonCharacterStat stats={stats}/>
                    </Col>
                                       
                </Row>
               
            </Col>
            <Col sm={12} md={3}>
                <PokemonRightSideNavProfile id={id}/>
                <PokemonCharacterAbility abilities={abilities}/>
                <PokemonCharacterForm forms={forms}/>
            </Col>
        </Row>
    )
}