import React, { useState} from "react";
import PokemonCharacters from "./Pokemon/PokemonCharacters";
import PokemonRightSideNavProfile from "./Pokemon/PokemonRIghtSideNavProfile";
import { Col, Row, Spinner } from 'react-bootstrap';
import { useGetPokemonByNameQuery } from '../../Services/Hooks/PokemonHook';

export default function RTKQuery() {

    const [charName, setName] = useState('bulbasaur')
    
    const {data, error , isLoading} = useGetPokemonByNameQuery(charName);
    
    if(error)  {
        throw Error('Error Fetching Data')
    }

     
    if(isLoading) {
        return <Spinner></Spinner>
    }

    const {name, base_experience, height, order, sprites, weight, id} = data;

    const PokemonCharacterProfile = () => {

        const [spritesGender, ] = useState({
            male: [sprites.front_default, sprites.back_default, sprites.front_shiny, sprites.back_shiny],
            female: [sprites.front_female, sprites.back_female, sprites.front_shiny_female, sprites.back_shiny_female]
        })
        
        const PokemonGender = () => {

            if(spritesGender.female.indexOf(null) === -1) {
                return (
                    <>
                        <h3>Female Character Images</h3>
                        {spritesGender.female.map((data, key) => <img src={data} alt={data} key={key+data}/>)}
                    </>
                )
            }

            if(spritesGender.male.indexOf(null) === -1) {
                return (
                    <>
                        <h3>Male Character Images</h3>
                        {spritesGender.male.map((data, key) => <img src={data} alt={data} key={key+data}/>)}
                    </>
                )
            }

        }

        return (
            <>
                <h1>Pokemon Character Profile</h1>
                <PokemonGender/>
                <p>Name: {name}</p>
                <p>Experience: {base_experience}</p>
                <p>Height: {height}</p>
                <p>Order: {order}</p>
                <p>Weight: {weight}</p>
            </>
        )
    }

    const onClick = (name) => setName(name);

    return (
        <>
           <Row>
                <Col className="col-3">         
                    <PokemonCharacters onClick={onClick}/>
                </Col>
                <Col>
                    <PokemonCharacterProfile/>
                </Col>
                <Col className="col-3">
                    <PokemonRightSideNavProfile id={id}/>
                </Col>
           </Row>

        </>
    )
}