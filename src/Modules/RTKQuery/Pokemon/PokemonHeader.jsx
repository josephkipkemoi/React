import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const routes = [
    'Characters', 'Abilities', 'Forms', 'Items', 'Moves', 'Species', 'Images', 'Stats', 'Types'
]

export default function PokemonHeader() {
   
    return (
        <>
          <Nav>
              {routes.map((data, key) => <Nav.Item key={data+key}><Nav.Link as={Link} to={"/RTKQuery/" + data}>{data}</Nav.Link></Nav.Item>)}
          </Nav>
        </>
    )
}