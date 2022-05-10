import React from "react";
import { useLocation } from "react-router-dom";
import PokemonSearch from "./Commons/PokemonSearch";
import PokemonCharacters from "./PokemonCharacters/PokemonCharacters";
import PokemonAdvancedSearch from "./Commons/PokemonAdvancedSearch";

export default function PokemonBody() {
 
    return (
        <> 
          <PokemonSearch/>
          <PokemonAdvancedSearch/>
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


