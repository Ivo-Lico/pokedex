import React,{useState, useEffect, useContext} from 'react'
import Contexto from '../context/Contexto'
import '../css/Items.css'
import Detalle from './Detalle'
export default function Items(props) {

    const {style,setstyle} = useContext(Contexto)

    const {name, url, setaside}=props
    const [pokemond, setpokemond] = useState(null)
    const traerpokemon = async()=>{
        await fetch(url)
        .then(res=>res.json())
        .then(json=>{
       setpokemond(json)
       console.log(json)
        }
        )
      }

      useEffect(() => {
        traerpokemon()
      },[]);

      const [showdetalle,setshowdetalle] = useState(false)

      const mostrardetalle = ()=>{
        if(showdetalle === false){
            setshowdetalle(true)
            setstyle("clase1")
            setaside(false)
        }
       else{
        setshowdetalle(false)
        setstyle("cards")
        setaside(true)
       }
        }

      const pokemonid = ()=>{
          if(pokemond !== null){
              return(pokemond.id)
          }
      }

      const pokemontraido = ()=>{
          if (pokemond !== null){
              return(
                  <div>
                      <img src={pokemond.sprites.front_default} alt="" />
                  </div>
              )
          }
          else{
              return(null)
          }
      }
  return (
      <>
      <div>   
    <div id={style} onClick={mostrardetalle}>
        <div id='nameyid'>
        <h2 className="pokenombres">{name}</h2>
        <h2>Nº{pokemonid()}</h2>
        </div>
        <div className="pokemonesimg">{pokemontraido()}</div>
    </div>
    </div> {showdetalle ? <Detalle pokemond={pokemond} mostrardetalle={mostrardetalle} url={url}/>  : null}
            </>
  )
}
