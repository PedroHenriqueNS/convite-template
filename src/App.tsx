import './App.css';
import './background.css'
import React from 'react';
import { ImLocation } from 'react-icons/im'
import { BsWhatsapp } from 'react-icons/bs'
import Snowflakes from "./SnowFlakes";

function App() {
  const snowFlakesCount: number = 1000

  /*const snowFlakes = () => {
    // let elements = []
    //
    // for (let i = 0; i < snowFlakesCount; i++) {
    //   elements.push(
    //     <div className='snowflakeTop' style={{ left: Math.floor(Math.random() * 100) + 'vw', top: Math.floor(Math.random() * 25) + 'vh' }} />
    //   )
    //
    // }
    // return elements
  }*/

  return (
    <>
      {/*<div className='snowContainer'>*/}
        <Snowflakes />
      {/*</div>*/}
      <div className="App">
        <main>
          <h1 className='nameTitle'>Manuelle</h1>
          <h2 className='age'>17 anos</h2>
          <p className='subTitle'>Venha comemorar comigo!</p>
          <div className='dataInfos'>
            <div style={{ display: 'block' }}>
              <p className='dataText'>SETEMBRO</p>
              <p className='dataText'>2022</p>
            </div>

            <div className='verticalBar' />

            <p className='dataText' style={{ fontSize: '28px' }}>10</p>

            <div className='verticalBar' />

            <div style={{ display: 'block' }}>
              <p className='dataText'>SÁBADO</p>
              <p className='dataText'>18:00</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p className='subTitle' style={{ height: '20px' }}>Rua da Alegria, 123</p>
            <p className='subTitle' style={{ height: '20px' }}>Cidade e Estado</p>
          </div>

          <div className='dataInfos' style={{ gap: '25px', }}>
            <a
                className='botao'
                href="https://goo.gl/maps/jP4jh3k9VJ5o9zeS8"
            >
              <ImLocation size={18} color={"white"} />
              <p className='subTitle'>Local</p>
            </a>

            <a
                className='botao'
                onClick={() => alert("Presença confirmada!!!")}
            >
              <BsWhatsapp size={18} color={"white"} />
              <p className='subTitle'>Confirmar Presença</p>
            </a>
          </div>

          <h2 className='lastText'>Conto com a sua presença</h2>
        </main>
      </div>
    </>
  );
}

export default App;
