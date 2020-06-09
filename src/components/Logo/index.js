import React from 'react'
import Tilt from 'react-tilt'
import './style.css'
import logo from './face.png'

function Logo() {
    return (
        <div >
            <Tilt className="Tilt logo" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> <img src={logo} alt='logo'/> </div>
            </Tilt>
        </div>
    )
}

export default Logo



 
