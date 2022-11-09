import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Usestitle from '../../../Hooks/Usestitle';

const Myreviews = () => {
    const {user}=useContext(AuthContext)
    const [review,setReview]=useState([])
    Usestitle('Myreview')

   useEffect(()=>{
    fetch(`http://localhost:5000/review?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setReview(data)
    })
   },[user?.email])
    return (
        <div>
            <h1>this is myreview page  {review.length}</h1>
        </div>
    );
};

export default Myreviews;