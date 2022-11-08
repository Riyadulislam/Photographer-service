import React, { useEffect, useState } from 'react';
import Servicecard from './Servicecard';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl'>Services</h1>
            <p className='text-center text-4xl'>Total 6 package</p>
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

export default Services;