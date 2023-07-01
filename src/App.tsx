import './App.css';
import './background.css'
import React from 'react';
import { ImLocation } from 'react-icons/im'
import { BsWhatsapp } from 'react-icons/bs'
import ReactPlayer from 'react-player/lazy';
import { Button } from '@mui/material';



function App() {

    const params = new URLSearchParams(window.location.search);
    var url = 'https://raw.githubusercontent.com/PedroHenriqueNS/convite-template/master/src/assets/snowglow.mp4'
    var nomeExists = false
    var nome

    if (window.innerWidth >= 600) url = 'https://raw.githubusercontent.com/PedroHenriqueNS/convite-template/master/src/assets/snowglowRectangular.mp4'

    if (params.get("nome")) {
        nome = params.get("nome")
        nomeExists = true
    }

    return (
        <div className="App">
            <ReactPlayer
                url={url}

                loop
                muted
                playing={true}

                width="100%"
                height="100%"

                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transition: 'all 1s linear'
                }}
            />

            <main>
                <h1 className='nameTitle'>Jhulia</h1>
                <h2 className='age'>20  anos</h2>
                <p className='subTitle'>Venha comemorar comigo!</p>
                <div className='dataInfos'>
                    <div style={{ display: 'block' }}>
                        <p className='dataText'>AGOSTO</p>
                        <p className='dataText'>2023</p>
                    </div>

                    <div className='verticalBar' />

                    <p className='dataText' style={{ fontSize: '28px' }}>12</p>

                    <div className='verticalBar' />

                    <div style={{ display: 'block' }}>
                        <p className='dataText'>SÁBADO</p>
                        <p className='dataText'>19:00</p>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <p className='subTitle' style={{ height: '20px' }}>Rua Jaú, 71</p>
                    <p className='subTitle' style={{ height: '20px' }}>Cidade Ariston, Carapicuíba -SP</p>
                </div>

                <div className='dataInfos' style={{ gap: '25px', }}>
                    <Button
                        variant="text"
                        href="https://goo.gl/maps/MUGPo8votprim3Uv8"

                        sx={{
                            all: 'unset',

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            padding: '8px',
                            paddingTop: '4px',
                            paddingBottom: '3px',
                            borderRadius: '10px',
                            gap: '5px',
                            cursor: 'pointer',
                            ":hover": { background: 'rgb(51, 51, 51, 0.6)' }
                        }}
                    >
                        <ImLocation size={18} color={"pink"} />
                        <p className='subTitle' style={{ cursor: 'pointer' }}>Local</p>
                    </Button>

                    <Button
                        variant="text"
                        href="https://wa.me/+5511968025892?text=Pode confirmar a minha presença!!! :D"

                        sx={{
                            all: 'unset',

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            padding: '8px',
                            paddingTop: '4px',
                            paddingBottom: '3px',
                            borderRadius: '10px',
                            gap: '5px',
                            cursor: 'pointer',
                            ":hover": { background: 'rgb(51, 51, 51, 0.6)' }
                        }}
                    >
                        <BsWhatsapp size={18} color={"pink"} />
                        <p className='subTitle' style={{ cursor: 'pointer' }}>Confirmar Presença</p>
                    </Button>
                </div>

                {nomeExists ?
                    <h2 className='lastText'>Conto com a sua presença, {nome}!</h2>
                    :
                    <h2 className='lastText'>Conto com a sua presença!</h2>
                }
            </main >
        </div >
    );
}

export default App;
