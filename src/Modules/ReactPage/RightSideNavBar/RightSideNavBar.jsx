import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import './RightSideNavBar.css'; 

export default function RightSideNavBar() {
    
    return (
        <>
            <div>
                <div className='d-flex flex-column justify-content-center'>
                    <div className='rounded-circle custom-img-rounded mx-auto'>
                        <i className="bi bi-person-circle custom-img-rounded-position"></i>
                    </div>
                    <span className='text-center mt-3'><b>Joseph Kipkemoi</b></span>
                    <small className='text-center'>0 Followers</small>
                    <small className='text-center mt-3'>
                        Tech Advocate @ InfuseAI.io We make the end-to-end MLOps orchestration platform, PrimeHub.io, and PipeRider.io for pipeline-wide data-versioning
                    </small>
                    <div className='p-2 mx-auto'>
                        <Button className="btn-sm rounded-pill">
                            Follow
                        </Button>
                        <Button className="btn btn-danger btn-sm rounded-circle" style={{ marginLeft: '6px' }}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-plus" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
                            </svg>                        
                        </Button>
                    </div>
                </div>
                <div className='text-secondary mt-2'>
                    <strong>On this Page</strong>
                    <Nav>
                        <Nav.Item >
                            <Nav.Link>How they work</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </>
    )
}