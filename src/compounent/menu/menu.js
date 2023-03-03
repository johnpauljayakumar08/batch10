import React from "react";
import {Link} from 'react-router-dom'
export function Menu(){
    return(
        <>
            <ul>

                <Link to="/about"><li>Home</li></Link>
                <Link to="/"><li>About</li></Link>
            </ul>
        </>
    );
}