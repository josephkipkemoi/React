import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useGetPokemonColorsQuery } from "../../../../../Services/Hooks/PokemonHook";
import PokemonAdvancedSearchResults from "../PokemonAdvancedSearchResults";

const colors = ['black', 'blue', 'brown', 'gray', 'green', 'pink', 'purple', 'red', 'white', 'yellow']

export default function ColorInput() {
    const [color, setColor] = useState('');
   
    const { data, error, isLoading  } = useGetPokemonColorsQuery(color);

    if(color === 'Please choose color') {
         setColor('')
    }

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