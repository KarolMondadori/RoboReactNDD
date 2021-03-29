import React, { useState } from 'react';
import Head from './head.png';
import Rightarm from './rightarm.png';
import './App.css';

function App () {

  var [center, setCenter] = useState(0);
  var headCenter = "Cabeça Centro"
  var headUp = "Cabeça Alta"
  var headDown = "Cabeça Baixa"
  var headRight45 = "Cabeça Direita 45º"
  var headRight90 = "Cabeça Direita 90º"
  var headLeft45 = "Cabeça Esquerda 45º"
  var headLeft90 = "Cabeça Esquerda 90º"

  var [elbow, setElbow] = useState(0);
  var elbowPos0 = "Em repouso"
  var elbowPos1 = "Levemente Contraído"
  var elbowPos2 = "Contraído"
  var elbowPos3 = "Fortemente Contraído"

  var [pulseRight, setpulseRight] = useState(0);

//  ONLY IF DOING LEFT ARM
//  var [pulseLeft, setpulseLeft] = useState(0);


  const onClickTop = (e) => {
    if (center === 0 || center === (-10)){
      setCenter(center = center + 10)
        if (center === 10) {
          console.log(headUp)
        } else if (center === 0) {
          console.log(headCenter)
        };
    } else if (center === 10) { 
      alert('NOT ALLOWED - CABEÇA ESTÁ ALTA')
    } else if (center === 90 || center === 45 || center === (-45) || center === (-90)) {
      alert('NOT ALLOWED -> VOLTE A CABEÇA AO CENTRO')
    }
  }

  const onClickDown = (e) => {
    if (center === 0 || center === 10){
      setCenter(center = center - 10)
      if (center === -10) {
        console.log(headDown)
      } else if (center === 0) {
        console.log(headCenter)
      };
    } else if (center === -10) { 
      alert('NOT ALLOWED - CABEÇA ESTÁ BAIXA')
    } else if (center === 90 || center === 45 || center === (-45) || center === (-90)) {
      alert('NOT ALLOWED -> VOLTE A CABEÇA AO CENTRO')
    }
  }

  const onClickRight = (e) => {
    if (center === 0 || center === 45 || center === (-45) || center === (-90)) {
    setCenter(center = center + 45)
      if (center === 45) {
        console.log(headRight45)
      } else if (center === 90) {
        console.log(headRight90)
      } else if (center === 0) {
        console.log(headCenter)
      } else if (center === -45) {
        console.log(headLeft45)
      } else if (center === -90) {
        console.log(headLeft90)
      } 
    } else if (center === 90) {
    alert('NOT ALLOWED - CABEÇA A 90º')
    } else if (center === 10 || center === (-10)) {
    alert('NOT ALLOWED -> VOLTE CABEÇA AO CENTRO')
    }
  }

  const onClickLeft = (e) => {
    if (center === 0 || center === (-45) || center === 45 || center === 90) {
    setCenter(center = center + -45)
      if (center === 45) {
        console.log(headRight45)
      } else if (center === 90) {
        console.log(headRight90)
      } else if (center === 0) {
        console.log(headCenter)
      } else if (center === -45) {
        console.log(headLeft45)
      } else if (center === -90) {
        console.log(headLeft90)
      }; 
    } else if (center === (-90)) {
    alert('NOT ALLOWED - CABEÇA A 90º')
    } else if (center === 10 || center === (-10)) {
      alert('NOT ALLOWED -> VOLTE AO CENTRO')
    }
  }

  const onClickRightArmUp = (e) => {
    if (elbow === 0 || elbow === 1 || elbow === 2) {
      setElbow(elbow = elbow + 1)
        if (elbow === 0) {
          console.log(elbowPos0)
        } else if (elbow === 1){
          console.log(elbowPos1)
        } else if (elbow === 2) {
          console.log(elbowPos2)
        } else if (elbow === 3) {
          console.log(elbowPos3)
        };
    } else if (elbow === 3) { 
      alert('NOT ALLOWED - FORTEMENTE CONTRAÍDO')
    }
  }

  const onClickRightArmDown = (e) =>{
    if (elbow === 3 || elbow === 2 || elbow === 1) {
      setElbow(elbow = elbow - 1)
      if (elbow === 0) {
        console.log(elbowPos0)
      } else if (elbow === 1){
        console.log(elbowPos1)
      } else if (elbow === 2) {
        console.log(elbowPos2)
      } else if (elbow === 3) {
        console.log(elbowPos3)
      };
    } else if (elbow === 0) { 
      alert('NOT ALLOWED - EM REPOUSO')
    }
  }  

  const onClickRightArmPulseLeft = (e) =>{
    if (elbow !== 3) {
      alert('NOT ALLOWED - CONTRAIA O COTOVELO')
    }  else if (pulseRight === -90) {
      alert('NOT ALLOWED - ROTAÇÃO MÁXIMA')
    } else {
        setpulseRight(pulseRight = pulseRight - 45)
        if (pulseRight === 0) {
          console.log("Em repouso")
        } else if (pulseRight === -45) {
          console.log("Rotação Esquerda 45º")
        } else if (pulseRight === -90) {
          console.log("Rotação Esquerda 90º")
        } else if (pulseRight === 45) {
          console.log("Rotação Direita 45º")
        } else if (pulseRight === 90) {
          console.log("Rotação Direita 90º")
        } else if (pulseRight === 135) {
          console.log("Rotação Direita 135º")
        } else if (pulseRight=== 180) {
          console.log("Rotação Direita 180º")
        }
    }
  }

  const onClickRightArmPulseRight = (e) =>{
    if (elbow !== 3) {
      alert('NOT ALLOWED - CONTRAIA O COTOVELO')
    } else if (pulseRight === 90) {
      alert('NOT ALLOWED - ROTAÇÃO MÁXIMA')
    } else {
      setpulseRight(pulseRight = pulseRight + 45)
        if (pulseRight === 0) {
          console.log("Em repouso")
        } else if (pulseRight === 45) {
          console.log("Rotação Direita 45º")
        } else if (pulseRight === 90) {
          console.log("Rotação Direita 90º")
        } else if (pulseRight === 135) {
          console.log("Rotação Direita 135º")
        } else if (pulseRight=== 180) {
          console.log("Rotação Direita 180º")
        } else if (pulseRight === -45) {
          console.log("Rotação Esquerda 45º")
        } else if (pulseRight === 90) {
          console.log("Rotação Esquerda 90º")
        }
    } 
  }

    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <br></br>
            <div className="col-3">
              <button onClick={onClickTop} className="up">LEVANTAR</button>
            </div>
            <div className="col-3">
              <button onClick={onClickRight} className="right">VIRAR DIREITA</button>
              <img src={Head} className="App-logo" alt="Head" />
              <button onClick={onClickLeft} className="left">VIRAR ESQUERDA</button>
            </div>
            <div className="col-3">
              <button onClick={onClickDown} className="down">ABAIXAR</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="col-3">
              <button className="uprightarm" onClick={onClickRightArmUp}>CIMA</button>
              <img src={Rightarm} className="App-logo" alt="Head" />
              <button className="downrightarm" onClick={onClickRightArmDown}>BAIXO</button>
              <br></br>
            <div className='pulse'>
              <button onClick={onClickRightArmPulseLeft}>Rotação Esquerda</button><button onClick={onClickRightArmPulseRight}>Rotação Direita</button>
            </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

export default App;