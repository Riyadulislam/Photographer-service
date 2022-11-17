import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Usestitle from '../../../Hooks/Usestitle';
import Myreviewrow from './Myreviewrow';
import {  toast } from 'react-toastify';
const Myreviews = () => {
    const {user,loading, logout}=useContext(AuthContext)
    const [reviews,setReviews]=useState()
    Usestitle('Myreview')
    console.log(reviews)
   useEffect(()=>{
    fetch(`https://services-provider-server.vercel.app/review?email=${user?.email}`,{
        headers:{
            authorization:`Bearer ${localStorage.getItem('service-token')}`
          }
    })
    .then(res=>{
        if(res.status===401 || res.status===403)
        {
          return  logout();
        }
        return  res.json()})
    .then(data=>{
         console.log('unnnnnnn',data)
        setReviews(data)
    })
   },[user?.email])

   const handleDelete=(id)=>{
   
       const proceed= toast("Delete This Item")
    if(proceed)
    {
     fetch(`https://services-provider-server.vercel.app/review/${id}`,{
         method:'DELETE'
     })
     .then(res=>res.json())
     .then(data=>{
         console.log(data)
         if(data.deletedCount>0)
         { 
           
            toast("Deleted successfully")

            const remaining=reviews.filter(odr=>odr._id!==id)
            setReviews(remaining)
         }
     })
    }
}   
    return (
        <div>
            {
             reviews && reviews.length!==0 ? <div className="overflow-x-auto w-full">
                <table className="table w-full"> 
                <thead>
                  <tr>
                    <th>
                      <label>
                      <button className='btn'> X</button>
                      </label>
                    </th>
                    <th>Photo & Name</th>
                    <th>Review</th>
                    <th>Rating Point</th>
                    <th>
                    <label>
                      <button className='btn '>Update</button>
                      </label>
                    </th>
                  </tr>
                  {
                    reviews.map(review=> < Myreviewrow
                    key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    >
                        </Myreviewrow>)
                  }
                </thead>
                <tbody>  
                </tbody> 
              </table>
            </div> 
    :<h1 className=' my-40 text-center text-5xl text-blue-600'>No reviews were added</h1>
            
            

            }
            

</div>
    );
};

export default Myreviews;