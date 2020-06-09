import React from 'react'
import './style.css'

function Image({image,box}) {
    return (
        <div className='container'>
            <div style={{position:"absolute"}}>
                <img id='faceImage' src={image} alt='face' width='500px' height='auto'></img>
                <div className='boundary' style={{top:box.t,bottom:box.b,left:box.l,right:box.r}}></div>
            </div>
        </div>
    )
}

export default Image
