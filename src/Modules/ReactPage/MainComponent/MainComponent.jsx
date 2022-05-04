import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MockData from '../../../Data/React.json';

export default function MainComponent() {

    const IsDataAvailable = () => {
        return (
            <>
                {localStorage.getItem('work') ? <LockScreen/> : <DummyData/>}
            </>
        )
    }

    return (
        <Card className="border-0 d-flex flex-column">          
            <IsDataAvailable/>
        </Card>
    )
}

const DummyData = () => {
    return (
        <>
        {MockData.data.map((data) => {
            const { id, topic, topic_title, subtopic } = data;

            return id === 1 && (<> 
                                    <Card.Header className="bg-white border-0">
                                        <h1>{topic}</h1>                                    
                                    </Card.Header> 
                                    <Card.Body>
                                        <Card.Title>
                                            <p>{topic_title}</p>
                                        </Card.Title>                                 
                                            {subtopic.map((sub) => {
                                                const {title, sub_title, id} = sub;

                                                return( 
                                                <>
                                                <h2>{id === 1 && title}</h2>
                                                {sub_title.map(({sub_title_body, sub_title_header}) => ( <>
                                                                                                            <h3>{id === 1 && sub_title_header}</h3> 
                                                                                                            <p>{id === 1 && sub_title_body}</p></>
                                                                                                        )
                                                                )
                                                }
                                                </>
                                                )                                      
                                            })}
                                     </Card.Body>
                                 </>);
                
        })}

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
                <Link to="#" className="text-decoration-none" style={{ marginRight: '6px' }}>
                    Login
                </Link> 
                    to continue
           </h5>
        </div>
    )
}