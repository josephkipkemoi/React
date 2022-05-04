import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainComponent() {

    const IsDataAvailable = () => {
        return (
            <>
                {localStorage.getItem('work') ? <LockScreen/> : <DummyData/>}
            </>
        )
    }

    return (
        <Card className="border-0 d-flex flex-column justify-content-center">
          
            <IsDataAvailable/>
        </Card>
    )
}

const DummyData = () => {
    return (
        <>
             <Card.Header className="bg-white border-0">
                    <h1>React Tutorials</h1>
                </Card.Header>
            <Card.Body>
           
                <Card.Title>
                    <p>Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.</p>
                </Card.Title>
                <h3>How they work</h3>
                <ul>
                    <li>
                    Gutters are the gaps between column content, created by horizontal padding. We set padding-right and padding-left on each column, and use negative margin to offset that at the start and end of each row to align content.
                    </li>
                    <li>
                    Gutters are the gaps between column content, created by horizontal padding. We set padding-right and padding-left on each column, and use negative margin to offset that at the start and end of each row to align content.
                    </li>
                </ul>

               
            </Card.Body>
            <div className="d-flex p-3 justify-content-between">
                <Button>
                    Previous Article
                </Button>
                <Button>
                    Next Article
                </Button>

            </div>
        </>
    )
}

const LockScreen = () => {
    return (
        <div className="mx-auto d-flex flex-column ">
           <i className="bi bi-shield-lock d-flex justify-content-center" style={{ fontSize: '72px'}}></i>
           <h5 className="d-flex align-items-center">
                <Link to="#" className="text-decoration-none" style={{ marginRight: '6px' }}>Login</Link> to continue
           </h5>
        </div>
    )
}