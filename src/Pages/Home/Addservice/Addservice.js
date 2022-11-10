import React, { useContext } from 'react';
import Usestitle from '../../../Hooks/Usestitle';
import {  toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Addservice = () => {
    Usestitle('Addservices')
    const{user}=useContext(AuthContext)
    const handleaddreview=(event)=>{
        event.preventDefault();
        const form = event.target;
        const title=form.title.value
        const img=form.photo.value
        const price=form.price.value;
       
        const description=form.description.value
        console.log(title,price,description)
        const Myservice = {
            title,
            description,
            img,
            price,
            
          }

        fetch('https://services-provider-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(Myservice)
        })
        .then(res => res.json())
            .then(data => {
                if(data.acknowledged===true)
                {
                    
                    toast("successfully added data");
                    form.reset();
                }
                
                console.log(data) 
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
             <form onSubmit={handleaddreview}>
            <h1 className='text-4xl'></h1>
            <h1 className='text-3xl'> </h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                <input name="title" type="text" placeholder="Tilte" className="input input-bordered w-full " />
                 <input type="text" name='photo'  placeholder="image" src=""  alt="" className="input input-bordered w-full "  />
                <input name="price" type="text" placeholder="Price" className="input input-bordered w-full " />
                <input name="email" defaultValue={user?.email} type="text" placeholder="Your Email" readOnly className="input input-bordered w-full " />
            </div>
            <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Description"></textarea>
            <input  className="btn mb-2 mx-auto" type="submit" value="Add  Your Service" />
        </form>
        </div>
    );
};

export default Addservice;