import React, { useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useGetPokemonColorsQuery } from "../../../../Services/Hooks/PokemonHook";
import './PokemonAdvancedSearch.css';
import PokemonAdvancedSearchResults from "./PokemonAdvancedSearchResults";

export default function PokemonAdvancedSearch() {
    
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <>
            <Button size="sm" onClick={onClick}>Advanced Search</Button>
            {isOpen ? <SearchFilter/> : ''}
        </>
    )
}

const colors = ['black', 'blue', 'brown', 'gray', 'green', 'pink', 'purple', 'red', 'white', 'yellow']

const SearchFilter = () => {

    return (
        <>
        <Card className="shadow">
            <Card.Body>
                <div>
                    <input id="advanced_search" type="checkbox"/>
                    <label htmlFor="advanced_search">Match</label>
                    <small>All of the following rules: </small>
                </div>
                <div>        
                    <ColorInput />   
                </div>
            </Card.Body>
        </Card>

       

        </>
    )
}



const ColorInput = () => {
    const [color, setColor] = useState('');

    const { data, error, isLoading  } = useGetPokemonColorsQuery(color);

    if(error) {
        const { data } = error;

        return <div className="alert alert-danger">{data}</div>
    }

    if(isLoading) {
        return <Spinner animation="grow"></Spinner>
    }

    const { pokemon_species } = data;

    const onChange = (e) => setColor(e.target.value)

 return (
    <React.Fragment>
        <label htmlFor="color-select"></label>
        <select onChange={onChange} >
            <option>Please choose color</option>
            {colors.map((name, key) =>  <option key={key + name}value={name} >{name}</option>)}
        </select>
        <PokemonAdvancedSearchResults pokemon_species={pokemon_species}/>
    </React.Fragment>
 )
      
}