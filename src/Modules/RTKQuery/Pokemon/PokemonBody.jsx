import React from "react";
import { useLocation } from "react-router-dom";
import PokemonSearch from "./Commons/PokemonSearch";
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
        case '/Pokemon/Characters':
        case '/Pokemon/Characters/':
            return <PokemonCharacters/>;
        default: 
            break;
    }

}


