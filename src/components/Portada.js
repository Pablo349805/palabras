import React from 'react'
import { useNavigate } from 'react-router-dom'

const Portada = () => {
  const navegacion = useNavigate();
  return (
    <div className='fondo'>
    <div className='portada'>
    <h1 className='titulo'>BIENVENIDO/A</h1>
    <button className='boton1' onClick={() => navegacion("/juego")}>Jugar</button>
    </div>
    </div>
  )
}

export default Portada