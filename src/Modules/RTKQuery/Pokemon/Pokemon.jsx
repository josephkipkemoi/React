import React from 'react';
import PokemonHeader from './PokemonHeader';
import PokemonBody from './PokemonBody';
import { Row , Col} from 'react-bootstrap';

export default function Pokemon() {

    return (
        <>
            <PokemonHeader/>
            <Row>
                <Col>
                    <PokemonBody/>
                </Col>
            </Row>
        </>
    )
}
 