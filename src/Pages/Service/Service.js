
import React, { useEffect, useState } from 'react';
import Usestitle from '../../Hooks/Usestitle';
import Servicecard from '../Home/Services/Servicecard';



const Service = () => {
    const [services,setServices]=useState([])
   
    useEffect(()=>{
        fetch(`https://services-provider-server.vercel.app/services`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    Usestitle('Services')
    

    return (
        <div className='mt-3'>
        <h1 className='text-center text-4xl text-blue-500 font-bold'> List Of Services</h1>
        <p className='text-center text-2xl text-blue-500'>I Delivared under the all Package</p>
       
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {
            services.map(service=><Servicecard
                service={service}
                key={service.service_id}
            ></Servicecard>)
        }
        </div>
    </div>
    );
};

export default Service;