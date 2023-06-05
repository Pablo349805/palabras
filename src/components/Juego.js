import { useContext, useEffect, useState } from "react"
import { PALABROS } from "../assets/palabros"
import { useNavigate } from "react-router-dom"
import Contexto from "../contexto/Contexto"
import "./Juego.css"

const Juego = () => {
  const navegacion = useNavigate()
  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
  const misColores = [{ backgroundColor: "white", color: "black" }, { backgroundColor: "green", color: "white" }, { backgroundColor: "red", color: "white" }]
  const letras_array = letras.split("")
  const { escribirCorrecta } = useContext(Contexto);
  const [azar, setAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [misLetras, setMisLetras] = useState([]);
  const [correctas, setCorrectas] = useState([]);
  const [erroneas, setErroneas] = useState([]);
  const [imagen, setImagen] = useState(1);
  useEffect(() => {
    setAzar(Math.floor(Math.random() * PALABROS.length))

  }, [])
  useEffect(() => {
    setPalabra(PALABROS[azar].palabro.split(""))
    escribirCorrecta(PALABROS[azar].palabro)
  }, [azar])
  const pulsado = (e) => {
    const letra = e.target.innerHTML;
    setMisLetras([...misLetras, (letra)])
    if (palabra.indexOf(letra) >= 0) {
      setCorrectas([...correctas, (letra)])
    } else {
      setErroneas([...erroneas, (letra)])
      setImagen(imagen + 1)
      if (imagen > 5)
        navegacion("/final")
    }
  }
  useEffect(() => {
    let noEncontrado = 0;
    palabra.map(p => {
      if (misLetras.find(e => e === p) === undefined) {
        noEncontrado++;
      }
    })
    if (noEncontrado === 0 && correctas.length > 0) {
      navegacion("/ganar")
    }

  }, [correctas])
  return (
    <div className="body">
      <div className="pregunta">
        {PALABROS[azar].pregunta}
      </div>
      <div className="palabra">
        {
          palabra.map((letra, i) => (
            misLetras.indexOf(letra) === -1
              ?
              <div className="palo" key={i}></div>
              :
              <div className="palo" key={i}>{letra.toUpperCase()}</div>
          ))
        }
      </div>
      <div className="botones">
        {
          letras_array.map((letra) =>
            (correctas.find(e => e === letra))
              ?
              <button key={letra} style={misColores[1]}>{letra}</button>
              :
              (erroneas.find(e => e === letra))
                ?
                <button key={letra} style={misColores[2]}>{letra}</button>
                :
                <button key={letra} style={misColores[0]} onClick={pulsado}>{letra}</button>
          )
        }
      </div>
      <div className="imagen">
        <img src={require(`../assets/el_ahorcado${imagen}.png`)} alt=""></img>
      </div>
    </div>
  )
}

export default Juego