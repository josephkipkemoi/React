import React, {useState} from "react";
import { Collapse, Nav, Button } from "react-bootstrap";

export const SideNavBar = () => {
    const [basicsOpen, setBasicsOpen] = useState(true);
    const [conceptsOpen, setConceptsOpen] = useState(false);
    const [advancedOpen, setAdvancedOpen] = useState(false);

    return (
        <>
          <Nav 
            className="flex-column"
            >        
                <Button
                    onClick={() => setBasicsOpen(!basicsOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={basicsOpen}
                >
                React Basics
                </Button>
                <Collapse in={basicsOpen}>
                    <div id="example-collapse-text">
                        <Button variant="light">Memory Management in React</Button>
                    </div>          
                </Collapse>
                <Button
                    onClick={() => setConceptsOpen(!conceptsOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={conceptsOpen}
                >
                React Concepts
                </Button>
                <Collapse in={conceptsOpen}>
                    <div id="example-collapse-text">
                     <Button variant="light">Memory Management in React</Button>
                    </div>
                </Collapse>
                <Button
                    onClick={() => setAdvancedOpen(!advancedOpen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={advancedOpen}
                >
                React Advanced
                </Button>
                <Collapse in={advancedOpen}>
                    <div id="example-collapse-text">
                        <Button variant="light">Memory Management in React</Button>
                    </div>
                </Collapse>
            </Nav>
        </>
    )
}