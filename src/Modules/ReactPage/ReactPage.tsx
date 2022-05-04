import React from "react";
import { SideNavBar } from "./LeftSideNavBar/LeftSideNavBar";
import { Col, Row } from "react-bootstrap";
import MainComponent from "./MainComponent/MainComponent";
import RightSideNavBar from "./RightSideNavBar/RightSideNavBar";

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
                <RightSideNavBar/>
            </Col>
        </Row>
    )
}

