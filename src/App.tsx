import './App.css';
import './background.css'
import React from 'react';
import { ImLocation } from 'react-icons/im'
import { BsWhatsapp } from 'react-icons/bs'

function App() {

    return (
        <div className="App">
            <video
                autoFocus
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 1s linear'
                }}
            >
                <source src='https://raw.githubusercontent.com/PedroHenriqueNS/convite-template/master/src/assets/snowglow.mp4' type="video/mp4" />
            </video>

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

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
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
    );
}

export default App;
