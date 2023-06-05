import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Juego.css"

const Ganado = () => {
  const navegacion= useNavigate();
  return (
    
    <div className='body'>
    <h1>Muy bien , has ganado, y continuas manteniendo la cabeza sobre tus hombros</h1>
    <div className='imagen'>
    <img src={require(`../assets/el_ahorcado1.png`)} alt=""></img>
    </div>
    <button className='volver' onClick={() => navegacion("/juego/")}>Volver a jugar</button>
    </div>
  )
}

export default Ganado