import './App.css';
import './background.css'
import React from 'react';
import { ImLocation } from 'react-icons/im'
import { BsWhatsapp } from 'react-icons/bs'
import ReactPlayer from 'react-player/lazy';
import { Button } from '@mui/material';



function App() {

    return (
        <div className="App">
            {/* <video
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
            </video> */}
            <ReactPlayer
                url="https://raw.githubusercontent.com/PedroHenriqueNS/convite-template/master/src/assets/snowglow.mp4"

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
                <h2 className='age'>19 anos</h2>
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
                    <Button
                        variant="text"
                        href="https://goo.gl/maps/jP4jh3k9VJ5o9zeS8"

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
                        onClick={() => alert("Presença confirmada!!!")}

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

                <h2 className='lastText'>Conto com a sua presença!</h2>
            </main >
        </div >
    );
}

export default App;
