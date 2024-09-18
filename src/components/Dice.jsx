import React from 'react'
import imgVacia from "../assets/images/dice-empty.png";
import { useState } from "react";


function Dice() {

const[imgCubo, setImgCubo] = useState(imgVacia)
const handleImgCubo= ()=>{
    const randomImg= Math.floor(Math.random())
    setImgCubo()

}

  return (
    <div>
        <img 
        src={imgCubo} 
        alt="imagen vacia" 
        onClick={handleImgCubo}
        className="cubo"/>
    </div>
  )
}

export default Dice