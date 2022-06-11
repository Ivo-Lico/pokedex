import React,{ useContext, useState } from "react";
import Contexto from "../context/Contexto";
import Items from "./Items";
import '../css/Pokemones.css'
import Pokeball from '../imagenes/Pokeball.png'
function Pokemones() {

const {pokemones,setpokemones,pokemones2} = useContext(Contexto)

const [busqueda, setbusqueda] = useState("")

const [aside, setaside] = useState(true)


const handleChange = e=>{
setbusqueda(e.target.value)
console.log("Busqueda: "+e.target.value.toLowerCase())
filtrar(e.target.value.toLowerCase())
}

const filtrar = (terminodeBusqueda)=>{
    let resultadosBusqueda = pokemones2.filter((elemento)=>{
        if(elemento.name.includes(terminodeBusqueda)){
            console.log(elemento,"este es el elemento")
            return elemento
        }
    })
    setpokemones(resultadosBusqueda)
    console.log(pokemones,"pokemones consolelog")
}

const listarpokemones = ()=>{
    if(pokemones !== null){
        return(
        <>
            <div className='contenedor'>
        {
        pokemones.map((item, index)=>(
            <Items setaside={setaside} index={index} {...item} key={item.name} item={item}>
            </Items>
        ))
        }
            </div>
            </>
        )

    }
    else{
        return(<div>cargando xd*</div> )
    }
}
  return (
      <div id="flexcontenedor">
          {aside ? <div id="aside" >
              <div id="contenedorg">
                  <div id="contlabel">
              <label htmlFor="input">Pokedex</label>
              </div>
              <div id="flexcontenedor2">
                  <div id="continput">
<input value={busqueda} onChange={handleChange} id="input" type="text" />
</div>
<div id="contboton">
<button id="botonpokeball" onClick={()=>handleChange()}><img id="pokeball" src={Pokeball} alt="" /> </button></div>
</div>
</div>
</div> : null}
{listarpokemones()}
        </div>
  );
}

export default Pokemones;
