import React,{useState} from 'react';
import Navigation from './components/Navigtion/index'
import './App.css';
import Logo from './components/Logo';
import Imagelink from './components/ImageLink/index'

import Image from './components/Image/index'

import Clarifai from 'clarifai'


const app=new Clarifai.App({
  apiKey:'bd595fd4a93840f1a5b4df1e6c18b65e'
});

const calculateFace=data=>{
  const face=data.outputs[0].data.regions[0].region_info.bounding_box
 
  const image=document.getElementById('faceImage')
  const width=Number(image.width)
  const height=Number(image.height)

  return {
    // l:50,r:50,t:50,b:50
    l:face.left_col*width,
    t:face.top_row*height,
    b:height*(1-face.bottom_row),
    r:width*(1-face.right_col)
  }
}



function App() {

  const [input,setInput] = useState('')
  const [image,setImage] = useState('')
  const [box,setBox]=useState({})

  const updatebox = val => {
    setBox({
      ...val
    })
    console.log(box)
 }
  const onInputChange=event=>setInput(event.target.value)

  
  const onSubmit=()=>{
      setImage(input)
    
    
    
    console.log(box)

    app.models.predict(Clarifai.FACE_DETECT_MODEL,input)
    .then(function(res){
    updatebox(calculateFace(res))
      
    },
    function(err){console.log(err)}
    ).then(console.log(box))
   // updatebox(calculateFace(1))
  }

  return (
    <div className="App">
      {/*<Navigation /> */}
      <Logo/>
      <Imagelink change={onInputChange} submit={onSubmit} />
      <Image image={image} box={box}/>
    </div>
  );
}

export default App;
