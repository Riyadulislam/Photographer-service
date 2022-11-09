import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Review = ({service}) => {
    const {user}=useContext(AuthContext)
    const {_id,title}=service;
   


    const handleaddreview=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photo=user?.photoURL ||'no photo user'
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
        fetch('http://localhost:5000/review', {
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
                    alert('successfully added data')
                    form.reset();
                }
                
                console.log(data) 
            })
            .catch(er => console.error(er));



    }
    return (
        <div>
           <form onSubmit={handleaddreview} >
            <h1 className='text-4xl'></h1>
            <h1 className='text-3xl'> </h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                <input name="name" type="text" placeholder="First Name" className="input input-bordered w-full " />
                 <input name="photo" type="image" src="" alt="" className="input input-bordered w-full " />
                <input name="rating" type="text" placeholder="Your Rating" className="input input-bordered w-full " />
                <input name="email" type="text" placeholder="Your Email" readOnly className="input input-bordered w-full " />
            </div>
            <textarea name="messege" className="textarea textarea-bordered h-24 w-full" placeholder="messege"></textarea>
            <input  className="btn mb-2" type="submit" value="Please your Review" />
        </form>
        </div>
    );
};

export default Review;