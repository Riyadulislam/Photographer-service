
import React from 'react';

const Oldreview = ({all}) => {
    const{messege,customer,email,photo,rating,review}=all
    return (
        <div className='border my-4 h-30'>
            <p>Name: {customer}</p>
            <p>review ID:{review}</p>
            <p className="mask mask-squircle w-12 h-12">
             <img src={photo} alt="Avatar Tailwind CSS Component" />
           </p>
            <p className='text-blue-400'> Review:{messege}</p>
            <p>email:{email}</p>
            <p>Rating :{rating}</p>
            
        </div>
    );
};

export default Oldreview;