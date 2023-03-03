import {React,useState,useEffect} from "react";
import './home.css';
import isha from '../../images/download.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCab,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Menu } from "../menu/menu";

export default function Home(){
    const[product,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        console.log(product)
        

    },[])
    return(
        <>
            {product.map((value,index)=>(
                <div>

                    <h1>{value.id}</h1>
                    <h1>{value.title}</h1>
                    <img src={value.image}/>
                </div>
                

            ))}
        </>
    );
}
