import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Usestitle from '../../../Hooks/Usestitle';
import Servicecard from './Servicecard';


const Services = () => {
    const [services,setServices]=useState([])
    
   const {loading}=useContext(AuthContext)
    
   
   
    useEffect(()=>{
        fetch(`https://services-provider-server.vercel.app/services?home=${1}`)
        .then(res=>res.json())
        .then(data=>{
            if(loading){
                return <h1 className='text-5xl text-red-600'>loadingg.......</h1>
            }
            setServices(data)})
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
            <div className='flex justify-center'>
         <Link className='text-center' to='/service'><button className='btn btn-primary mt-5'>View All</button></Link>
         </div>
        </div>
    );
};

export default Services;