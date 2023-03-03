import {React,useState} from "react";
import { Menu } from "../menu/menu";

export function About(){
    // const[variable,setVariable]=useState(value)
    const[buttoncount,setButtoncount]=useState(5)
    function add(){
        setButtoncount(buttoncount+1)
    }
    return(
        <>
            <Menu/>
            <h1>hii i am about</h1>
            <h1>{buttoncount}</h1>
            <input type='button' value='incerment' onClick={add}/>
            <input type='button' value='decerment' onClick={()=>setButtoncount(buttoncount-1)}/>
            <input type='button' value='reset' onClick={()=>setButtoncount(buttoncount*0)}/>
        </>
    );
}