import React from "react";
import './PokemonBody.css';
import { useLocation } from "react-router-dom";
import PokemonSearch from "./PokemonSearch";
import PokemonCharacters from "./PokemonCharacters/PokemonCharacters";

export default function PokemonBody() {
 
    return (
        <> 
          <PokemonSearch/>
          <RenderBody/>
        </>
    )
}

const RenderBody = () => {
    const { pathname } = useLocation();

    switch(pathname) {
        case pathname === '/Pokemon/Characters':
            return <PokemonCharacters/>
        default:
            return null
    }
 
}


