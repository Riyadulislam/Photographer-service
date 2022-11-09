import React, { useEffect, useState } from 'react';

const Somework = () => {
    const [images,setImages]=useState([])
    useEffect(()=>{
        fetch('image.json')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])
    return (
        <div>
        <div className='text-center mt-4'>
            <h1 className='text-4xl font-bold text-blue-400'>My Amazing Work</h1>
            <p>In the journey of photography & Cinematography, I have taken a lot of significant shoots.
            <br></br> Here are some of my creative photography & Cinematography to look at !!</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3'>
          {
            images.map(image=><img src={image.img}></img>)
          }
          </div>
          
        </div>
    );
};

export default Somework;