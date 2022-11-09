import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import Singledetails from '../Singledetails/Singledetails';

const Details = () => {
    const service=useLoaderData()
    console.log(service)
    return (
        <div>
          
            <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <Singledetails service={service}></Singledetails>
          <Review service={service}></Review>
          </div>
        </div>
    );
};

export default Details;