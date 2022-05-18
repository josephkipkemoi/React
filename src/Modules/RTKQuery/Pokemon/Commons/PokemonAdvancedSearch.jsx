import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import './PokemonAdvancedSearch.css';
import ColorInput from "./SearchFilters/ColorInput";

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


