import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Servicecard = ({service}) => {
    const {_id,name,title,description,img,price,rating} =service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
           <PhotoProvider>
           <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
           </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2>{description.slice(0,97)}...</h2>
          <p className='text-orange-600 font-semibold'>Price:${price}</p>
          <div className="card-actions justify-end">
           
      <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details
                </button>
                </Link>
          </div>
        </div>
      </div>
     
        </div>
    );
};

export default Servicecard;