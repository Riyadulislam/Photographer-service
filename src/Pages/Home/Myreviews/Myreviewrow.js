import React from 'react';
import { Link } from 'react-router-dom';

const Myreviewrow = ({review, handleDelete}) => {

    const {customer,reviewName,messege,photo,rating,_id}=review;


    return (
   <tr>
     <th>
     <label>
          <button  onClick={()=>handleDelete(_id)} className='btn btn-active btn-primary"'> X</button>
          </label>
     </th>
     <td>
       <div className="flex items-center space-x-3">
         <div className="avatar">
           <div className="mask mask-squircle w-12 h-12">
             <img src={photo} alt="Avatar Tailwind CSS Component"/>
           </div>
         </div>
         <div>
           <div className="font-bold">{reviewName}</div>
       
         </div>
       </div>
     </td>
     <td>
      Review:  {messege}
       <br/>
       
     </td>
     <td>Rating:{rating}</td>
     <th>
     <label>
        <button className='btn btn-active btn-primary'>
            <Link to='/update'>
                Update</Link>
            
            </button>
      </label>
     </th>
   </tr> 

       
    );
};

export default Myreviewrow;