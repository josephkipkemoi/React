import React from "react";

export default function LandingPage () {
    const randomError = () => {
        throw new Error("app crashed")
    }
    return (
        <>
         <h1>Landing Page</h1>
         <button onClick={randomError}>Break</button>
        </>
    )
}