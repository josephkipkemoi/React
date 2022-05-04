import React from "react";
import { SideNavBar } from "./SideNavBar/SideNavBar";
import { Col, Row } from "react-bootstrap";
import MainComponent from "./MainComponent/MainComponent";

export default function ReactPage() {
    
    return (
        <Row className="gap-3">
            <Col className="col-sm-3">
                <SideNavBar/>
            </Col>
            <Col className="shadow-sm col-sm-7">
                <MainComponent/>
            </Col>
            <Col md className="col-sm-2">
                <div className="shadow-sm">
                    <h1 className="">Advert Panel</h1>
                </div>
            </Col>
        </Row>
    )
}

