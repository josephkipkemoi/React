import React from "react";
import { Link } from "react-router-dom";

const {home, HOC} = {
    home: '/',
    HOC: '/HOC'
}

export default function Header() {
    return (
        <nav>
            <ol>
                <li><Link to={home} >Home</Link></li>
                <li><Link to={HOC} data-testid="learn-hoc">Learn HOC</Link></li>
            </ol>
        </nav>           
    )
}