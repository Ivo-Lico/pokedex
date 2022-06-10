import React,{useEffect, useState} from 'react'
import '../css/Detalle.css'
import Flechita from '../imagenes/Flechita.png'
export default function Detalle(props) {

    const {pokemond, mostrardetalle}=props
    let nombre = pokemond.name
    let tipo = pokemond.types[0].type.name
    let imagen = pokemond.sprites.front_default
    let peso = pokemond.weight
    let altura = pokemond.height
    let id = pokemond.id

let types = []
let incremento = 0

const [xdlawea, setxdlawea] = useState()

const funcionfetchloca = async()=>{
  pokemond.moves.map(habilidades =>
    habilidades.move.url
    ).forEach(element => {
      fetch(element)
        .then(res=>res.json())
        .then(json=>{
       types.push(json)
       console.log(json.type)
       setxdlawea(types.map(weas=>
        <div key={incremento++} id='contenedortypes'>
          <h2>
        {weas.name}
        </h2>
        <p id="tipohabilidad">
        {skilltypes(weas.type.name)}
        </p>
        </div>
        ))
        }
        )
  });
}

useEffect(()=>{
  funcionfetchloca()
},[])


    const listarstats = ()=>{
      return(
        <div id='statscontenedor'>
{      pokemond.stats.map(stats=>
<div id='stats' key={stats.stat.name}>
  <p>
    {stats.stat.name}:
    </p>
        <p>
          {stats.base_stat}
        </p>
        </div>
      )}
        </div>
      )
    }

const skilltypes = (type)=>{
if(type === "grass"){
  return(<p id='tipohabilidad' className="grass">
  {type}
  </p>)
}
if(type === "fire"){
  return(<p id='tipohabilidad' className="fire">
  {type}
  </p>)
}
if(type === "water"){
  return(<p id='tipohabilidad' className="water">
  {type}
  </p>)
}
if(type === "bug"){
  return(<p id='tipohabilidad' className="bug">
  {type}
  </p>)
}
if(type === "normal"){
  return(<p id='tipohabilidad' className="normal">
  {type}
  </p>)
}
if(type === "electric"){
  return(<p id='tipohabilidad' className="electric">
  {type}
  </p>)
}
if(type === "ground"){
  return(<p id='tipohabilidad' className="ground">
  {type}
  </p>)
}
if(type === "poison"){
  return(<p id='tipohabilidad' className="poison">
  {type}
  </p>)
}
if(type === "fighting"){
  return(<p id='tipohabilidad' className="fighting">
  {type}
  </p>)
}
if(type === "psychic"){
  return(<p id='tipohabilidad' className="psychic">
  {type}
  </p>)
}
if(type === "rock"){
  return(<p id='tipohabilidad' className="rock">
  {type}
  </p>)
}
if(type === "ghost"){
  return(<p id='tipohabilidad' className="ghost">
  {type}
  </p>)
}
if(type === "ice"){
  return(<p id='tipohabilidad' className="ice">
  {type}
  </p>)
}
if(type === "dragon"){
  return(<p id='tipohabilidad' className="dragon">
  {type}
  </p>)
}
if(type === "flying"){
  return(<p id='tipohabilidad' className="flying">
  {type}
  </p>)
}
if(type === "steel"){
  return(<p id='tipohabilidad' className="steel">
  {type}
  </p>)
}
if(type === "dark"){
  return(<p id='tipohabilidad' className="dark">
  {type}
  </p>)
}
}

  const elementos = ()=>{
    if(tipo === "grass"){
      return(<h2 id='pokemontypes' className='grass'>{tipo}</h2>)
    }
    if (tipo === "fire"){
      return(<h2 id='pokemontypes'  className='fire'>{tipo}</h2>)
    }
    if (tipo === "water"){
      return(<h2 id='pokemontypes'  className='water'>{tipo}</h2>)
    }
    if (tipo === "bug"){
      return(<h2 id='pokemontypes'  className='bug'>{tipo}</h2>)
    }
    if (tipo === "normal"){
      return(<h2 id='pokemontypes'  className='normal'>{tipo}</h2>)
    }
    if (tipo === "electric"){
      return(<h2 id='pokemontypes'  className='electric'>{tipo}</h2>)
    }
    if (tipo === "ground"){
      return(<h2 id='pokemontypes'  className='ground'>{tipo}</h2>)
    }
    if (tipo === "poison"){
      return(<h2 id='pokemontypes'  className='poison'>{tipo}</h2>)
    }
    if (tipo === "fighting"){
      return(<h2 id='pokemontypes'  className='fighting'>{tipo}</h2>)
    }
    if (tipo === "psychic"){
      return(<h2 id='pokemontypes'  className='psychic'>{tipo}</h2>)
    }
    if (tipo === "rock"){
      return(<h2 id='pokemontypes'  className='rock'>{tipo}</h2>)
    }
    if (tipo === "ghost"){
      return(<h2 id='pokemontypes'  className='ghost'>{tipo}</h2>)
    }
    if (tipo === "ice"){
      return(<h2 id='pokemontypes'  className='ice'>{tipo}</h2>)
    }
    if (tipo === "dragon"){
      return(<h2 id='pokemontypes'  className='dragon'>{tipo}</h2>)
    }
    else{
      return(<h2>{tipo}</h2>)
    }
  }
  

  return (
    <div id='detallecontenedor'>
       <h2 id='nombre'>{nombre}</h2>
        {elementos()}
        <div id='numero'>Nº {id}</div>
        <img id='pokemonimg' src={imagen} alt="" />
        <p className='titulos' >Carácteristicas:</p>
        <div>
          <div id='caracteristicas'>
          <div id='peso'>Peso: {peso / 10} kg</div>
          <div id='altura'>Altura: {altura / 10} cm</div>
          </div>
        </div>
        <div id='bottomcontenedor'>
          <p className='titulos'>Stats:</p>
        {listarstats()}
        </div>
        <p className='titulos'>Habilidades que puede aprender:</p>
          <div id='xdddddd'>
            <div id='grid-container'>
{xdlawea}
</div>
<div id='contenedorboton'>
        <button id='botond' onClick={mostrardetalle}><img id='flechita' src={Flechita} alt="" /></button>
        </div>
          </div>
    </div>
  )
}