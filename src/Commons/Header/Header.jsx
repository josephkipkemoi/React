import React from "react";
import { Link } from "react-router-dom";

const {home, HOC} = {
    home: '/',
    HOC: '/HOC'
}

export default function Header() {
    return (
        <>
         <Link to={home} >Home</Link>      
         <Link to={HOC} data-testid="learn-hoc">Learn HOC</Link>
        </>
           
    )
}