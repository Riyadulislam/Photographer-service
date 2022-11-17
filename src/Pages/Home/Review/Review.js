import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Oldreview from './Oldreview';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Review = ({service,id}) => {
    const {user}=useContext(AuthContext)
    console.log(user)
    const {_id,title}=service;
   const [allreview,setAllreview]=useState([])
    
    useEffect(()=>{
        fetch(`https://services-provider-server.vercel.app/service-review?review=${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAllreview(data)
        })
    },[])
  
   

    const handleaddreview=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photo=form.photo.value
        const rating=form.rating.value;
        const email = user?.email || 'unregisterd'
        const messege=form.messege.value
        console.log(name,photo,rating,email,messege)

        const Myreview = {
            review: _id,
            reviewName: title,
            photo,
            rating,
            customer:name,
            email,
            messege
          }
        fetch('https://services-provider-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(Myreview)
        })
        .then(res => res.json())
            .then(data => {
                if(data.acknowledged===true)
                {
                    
                    toast('successfully added data');
                    form.reset();
                }
                
                console.log(data) 
            })
            .catch(er => console.error(er));

    }
    return (
        <div>
          {
            user?.uid ?
            <form onSubmit={handleaddreview} >
            <h1 className='text-4xl'></h1>
            <h1 className='text-3xl'> </h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                <input name="name" type="text" placeholder="First Name" className="input input-bordered w-full " />
                 <input type="text" name='photo' src="" placeholder="Photo Url" alt="" className="input input-bordered w-full "  />
                <input name="rating" type="text" placeholder="Your Rating" className="input input-bordered w-full " />
                <input name="email" defaultValue={user?.email} type="text" placeholder="Your Email" readOnly className="input input-bordered w-full " />
            </div>
            <textarea name="messege" className="textarea textarea-bordered h-24 w-full" placeholder="messege"></textarea>
            <input  className="btn mb-2" type="submit" value="Please your Review" />
        </form>
           : <h1><Link to='/login'>Please <span className='text-blue-400'>Login</span> to add a review</Link></h1>
            
         
          }

        <h1>We see previous review{allreview?.length}</h1>
        {
            allreview.map(all=><Oldreview all={all}></Oldreview>)
        }
       
        </div>
    );
};

export default Review;