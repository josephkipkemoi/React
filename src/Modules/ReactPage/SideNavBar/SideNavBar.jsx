import React, {useState} from "react";
import './SideNavBar.css';
import { Collapse, Nav, Button } from "react-bootstrap";

export const SideNavBar = () => {
    const [basicsOpen, setBasicsOpen] = useState(true);
    const [conceptsOpen, setConceptsOpen] = useState(false);
    const [advancedOpen, setAdvancedOpen] = useState(false);

    const IsBasicsOpen = () =>  ( 
                                basicsOpen ? 
                                <i className="bi bi-arrow-down-circle custom-icon-position" style={{ fontSize: '18px' }}></i> : 
                                <i className="bi bi-arrow-right-circle custom-icon-position" style={{ fontSize: '18px' }}></i>
                                )

    const IsConceptsOpen = () =>  (
                                conceptsOpen ? 
                                <i className="bi bi-arrow-down-circle custom-icon-position" style={{ fontSize: '18px' }}></i> : 
                                <i className="bi bi-arrow-right-circle custom-icon-position" style={{ fontSize: '18px' }}></i>
                                )

    const IsAdvancedOpen = () =>  (
                                advancedOpen ? 
                                <i className="bi bi-arrow-down-circle custom-icon-position" style={{ fontSize: '18px' }}></i> : 
                                <i className="bi bi-arrow-right-circle custom-icon-position" style={{ fontSize: '18px' }}></i>
                                )

    return (
        <>
          <Nav 
            className="flex-column shadow-sm p-2"
            >        
                <Button
                    onClick={() => setBasicsOpen(!basicsOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={basicsOpen}
                    variant="light"
                    className="m-2 custom-btn-position d-flex align-items-center"
                >
                    <IsBasicsOpen/>
                    React Basics 
                </Button>
                <Collapse in={basicsOpen}>
                    <div id="example-collapse-text">
                        <Button variant="white">Memory Management in React</Button>
                        <Button variant="white">Memory Management in React</Button>
                        <Button variant="white">Memory Management in React</Button>                    </div>          
                </Collapse>
                <Button
                    onClick={() => setConceptsOpen(!conceptsOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={conceptsOpen}
                    variant="light"
                    className="m-2 custom-btn-position"
                >
                <IsConceptsOpen/>
                React Concepts
                </Button>
                <Collapse in={conceptsOpen}>
                    <div id="example-collapse-text">
                        <Button variant="white">Memory Management in React</Button>
                        <Button variant="white">Memory Management in React</Button>
                        <Button variant="white">Memory Management in React</Button>                    </div>
                </Collapse>
                <Button
                    onClick={() => setAdvancedOpen(!advancedOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={advancedOpen}
                    className="m-2 custom-btn-position"
                    variant="light"
                >
                <IsAdvancedOpen/>
                React Advanced  
                </Button>
                <Collapse in={advancedOpen}>
                    <div id="example-collapse-text">
                        <Button variant="white">Memory Management in React</Button>
                        <Button variant="white">Memory Management in React</Button>
                        <Button variant="white">Memory Management in React</Button>
                    </div>
                </Collapse>
            </Nav>
        </>
    )
}