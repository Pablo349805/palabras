import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto';
import "./Juego.css"

const Final = () => {
  const { laCorrecta } = useContext(Contexto);
  const navegacion = useNavigate();
  return (
    <div className='body'>
      <h1>Vaya, respuesta incorrecta</h1>
      <h2>La respuesta correcta era: <strong>{laCorrecta}</strong></h2>
      <div className='imagen'>
        <img src={require(`../assets/el_ahorcado5.png`)} alt=""></img>
      </div>
      <button className='volver' onClick={() => navegacion("/juego/")}>Volver a jugar</button>
    </div>
  )
}

export default Final