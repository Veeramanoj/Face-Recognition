import React from 'react'
import './style.css'
export default function index({change, submit}) {
    
    return (
        <div>
            <h1>This App will detect faces in images </h1>
            <p>Drop an URL here To check out</p>
            <div className='search'>
                <input type='text' onChange={change}></input>
                <button onClick={submit}>Detect </button>
            </div>
        </div>
    )
}
