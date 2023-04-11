import React from "react";
import World from "./world";

// http://localhost:3000/hello

export default function Hello() {
    return (
        <>
            <h1>
                Hello,
                <world name = "World" />!
            </h1>

            <img src = "kyoto.jpg" alt = "kyoto" />
        </>          
    );
}