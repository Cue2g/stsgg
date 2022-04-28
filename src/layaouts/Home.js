import React,{useState} from 'react'
import './Home.css'
import regionRiot from '../riot/platformRoutingValues.json'

import { useNavigate } from "react-router-dom";

export default function Home() {
    const [encontrado, setEncontrado] = useState(true)
    const navigate = useNavigate();


    const getSummoner = async () =>{
        const summ = document.getElementById("inputName").value;
        if(summ === ""){
            return alert('summoner vacio')
        }
        const rg = document.getElementById("selectHome").value
        const summonerUri = encodeURI(summ)
        let res = await fetch(`http://localhost:5000/api/stsgg/v1/${rg}/${summonerUri}`)
        let json = await res.json()
        if(json.estado === 200){
            return navigate("/help")
        }else{
            setEncontrado(false)
        }
    }
  return (
      <div className="uk-position-center">
         <div className="uk-card uk-card-body uk-margin uk-animation-slide-right">
            <img src={require('../img/logo.png')}  alt="logo" width="150px"/>
            <div className="uk-margin uk-animation-shake">
                <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user">toyo</span>
                    <input className="uk-input" type="text" id="inputName"/>
                </div>
            </div>

            <div className="uk-margin uk-animation-slide-top-medium">
                <select className="uk-select" id="selectHome">
                    {regionRiot.map( res =>  <option key={res.name} value={res.name}>{res.text}</option>)}
                </select>
            </div>

            <div className="uk-margin uk-animation-slide-right-medium">
                <button className="uk-button uk-button-default uk-button" onClick={getSummoner}>Buscar</button>
            </div>

            <div className="uk-margin">
            {encontrado === false ? (<p>no se ha encontrado el summoner</p>) : (null)}
            </div>
         </div>
      </div>
  )
}
