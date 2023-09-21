
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
// import api from './services/api';
import axios from 'axios';
import bolinha1 from './image/bolinha1.png';
import bolinha2 from './image/bolinha2.png';
import mundo from './image//mundo.png';
import elipse from './image/elipse.png';
import imggithub from './image/imggithub.png';

export default function App() {

  // Variávei de estado para gerir as  funções.

  const [textoTra, setTextoTra] = useState('')
  const [texto, setTexto] = useState('')
  const [de, setDe] = useState('en')
  const [para, setPara] = useState('pt-br')
  

  useEffect(() => {
    const { v4: uuidv4 } = require('uuid');
    let key = "238bbb645d4c4adf933216178515bb66";
    let endpoint = "https://api.cognitive.microsofttranslator.com";
    let location = "brazilsouth";
    //chamando a função
    axios({
      //URL base para a onde a solicitação vai ser enviada
      baseURL: endpoint,
      //rota para a solicitação do POST
      url: '/translate',
      //DEFINE O HTTP COMO O POST, mostra que voc~e ta enviando dados para um servidor
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString(),
      },
      params: {
        'api-version': '3.0',
        'from': '',
        'to': 'pt',
      },
      data: [{
        'text': texto
      }],
      responseType: 'json'
    }).then(function (response) {
      setTextoTra(JSON.stringify(response.data[0].translations[0].text));
    })
  }, [texto])
  //logo da pagina
  return (
    <div className="App">
      <div className="logo">
        <img id="pqueno" src={bolinha1} alt="logo"/>
        <img id="grande" src={bolinha2} alt="logo"/>
        <img id="pqueno" src={bolinha1} alt="logo"/>
      </div>

      <div className="titulo">
        <h1>Transition Languages</h1>
      </div>

      <div className="Conteúdo">
        <h2>Facilitamos a comunicação global, eliminando barreiras linguísticas.
        </h2>
        <img id="mundo" src={mundo} alt="" />
        <img id="bola" src={elipse} alt=""/>
      </div>

      <h3>Traduza o que quiser,
          da onde estiver</h3>



      <div class="divcaixas">
        <div class="card-tradutor">
          <label>De:
            <select selectedValue={de} onValueChange={(value) => {setDe(value)}}>
              <option value="" selected>Detecção Automático</option>
              <option value="pt" selected>Detecção Automático</option>
            </select>
          </label>
          <textarea id="cx1" name="message" rows="23" cols="43" placeholder='Insira o texto' onKeyUp={(value) => {setTexto(value.target.value)}}></textarea>
        </div>

        <div class="card-traduzido">
          <label>Para:
            <select selectedValue={para} onValueChange={(value) => {setPara(value)}}>
              <option value="pr-br" selected>Português (Brasil)</option>
            </select>
          </label>
          <textarea id="cx2" name="message" rows="23" cols="43" value={textoTra}></textarea>
        </div>
      </div>

      <div className="footer">
          <div className="logo">
            <img id="pq" src={bolinha2} alt="logo"/>
            <img id="gr" src={bolinha1} alt="logo"/>
            <img id="pq" src={bolinha2} alt="logo"/>
          </div>
          <a href="https://github.com/EloisaLaurentino">Eloisa Laurentino   </a>
          <img id="git" src={imggithub} alt=""/>
          <a href="https://github.com/karolsilvano" style={{marginLeft: 10}}>Karol Silvano</a>
      </div>
    </div>
  );
};