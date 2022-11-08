import React from 'react';

const Servicecard = ({service}) => {
    const {name,title,description,img,price,rating} =service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-orange-600 font-semibold'>Price:${price}</p>
          <div className="card-actions justify-end">
           
            <button className="btn btn-primary">Buy Now</button>
         
          </div>
        </div>
      </div>
        </div>
    );
};

export default Servicecard;