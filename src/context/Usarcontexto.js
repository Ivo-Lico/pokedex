import Contexto from "./Contexto";
import React,{useState, useEffect} from 'react'
export default function UsarContexto(props) {
    
  const [pokemones, setpokemones] = useState(null)

  const [pokemones2, setpokemones2] = useState(null)

  const [style, setstyle] = useState("cards")

  const traerpokemones = async()=>{
    await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res=>res.json())
    .then(json=>{
      setpokemones(json.results)
      setpokemones2(json.results)
    }
    )
  }

  useEffect(() => {
    traerpokemones()
  },[]);

const { children } = props
  return (
    <Contexto.Provider 
    value={{pokemones,setpokemones,pokemones2, setpokemones2,style, setstyle}}>
    {children}
    </Contexto.Provider>
  )
}