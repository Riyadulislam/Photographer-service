import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service=useLoaderData()
    console.log(service)
    return (
        <div>
            <h1>This is details page{service.name}</h1>
        </div>
    );
};

export default Details;