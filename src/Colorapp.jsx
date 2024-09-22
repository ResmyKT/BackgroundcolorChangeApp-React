import React, { useState } from 'react'
import './Colorapp.css'

const Colorapp = () => {
    
    const [backgroundColor,setBackgroundColor]=useState('white')

    const handleColorChange=(color)=>{
        setBackgroundColor(color)
    }



  return (
    <div className='container' style={{backgroundColor:backgroundColor,height:'100vh',width:'100vw'}}>
      <h1 className='text-center text-danger'>Colour Changing App</h1>

      <div className='text-center p-4 m-4'>
      <button className='btn btn-warning me-5' onClick={()=>handleColorChange('yellow')}>Yellow</button>
      <button className='btn btn-success me-5' onClick={()=>handleColorChange('green')}>Green</button>
      <button className='btn btn-primary me-5' onClick={()=>handleColorChange('blue')}>Blue</button>
      <button className='btn btn-dark me-5' onClick={()=>handleColorChange('black')}>Black</button>
      <button className='btn btn-outline-dark' onClick={()=>handleColorChange('white')}>White</button>
      </div>
    

    </div>
  )
}

export default Colorapp
