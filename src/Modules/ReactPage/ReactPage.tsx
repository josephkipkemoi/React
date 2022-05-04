import React from "react";
import { SideNavBar } from "./SideNavBar/SideNavBar";
import { Col, Row } from "react-bootstrap";

export default function ReactPage() {
    
    return (
        <Row className="gap-3">
            <Col className="col-sm-3">
                <SideNavBar/>
            </Col>
            <Col className="shadow-sm col-sm-7">
                <h1>React Tutorials</h1>
            </Col>
            <Col md className="col-sm-2">
                <div className="shadow-sm">
                    <h1 className="">Advert Panel</h1>
                </div>
            </Col>
        </Row>
    )
}

