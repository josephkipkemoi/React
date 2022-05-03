import React, { useState } from "react";
import { Nav } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
 

export const {home, react, laravel} = {
    home: '/',
    react: '/react',
    laravel: '/laravel',
}

export default function Header() {

    const [activeKey, setActiveKey] = useState('1');

    return (
        <Nav 
        variant="tabs" 
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        onSelect={(selectedKey) => setActiveKey(selectedKey)}
        >
            <Nav.Item >
                <Nav.Link className="p-3" data-testid="header-home-link" eventKey='1' as={Link} to={home}>Home</Nav.Link>
            </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="p-3" data-testid="header-react-link" eventKey='2'  as={Link} to={react} >React</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Item>
                    <Nav.Link className="p-3" data-testid="header-laravel-link" eventKey='3'  as={Link} to={laravel}>Laravel</Nav.Link>
                </Nav.Item>
            </Nav.Item>
        </Nav>
    )  
}