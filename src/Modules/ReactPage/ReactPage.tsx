import React from "react";
import { SideNavBar } from "./SideNavBar/SideNavBar";
import { Col, Row } from "react-bootstrap";

export default function ReactPage() {
    
    return (
        <Row>
            <Col>
                <SideNavBar/>
            </Col>
            <Col>
                <h1>React Tutorials</h1>
            </Col>
            <Col sm md>
                <h1>Advert Panel</h1>
            </Col>
        </Row>
    )
}

