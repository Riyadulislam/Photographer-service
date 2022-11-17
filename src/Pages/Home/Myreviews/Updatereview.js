import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Updatereview = () => {
    const {user,_id,title}=useContext(AuthContext)
    
   
    const handleaddreview=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photo=form.photo.value
        const rating=form.rating.value;
        const email = user?.email || 'unregisterd'
        const messege=form.messege.value
        console.log(name,photo,rating,email,messege)

        // const Myreview = {
        //     review: _id,
        //     reviewName: title,
        //     photo,
        //     rating,
        //     customer:name,
        //     email,
        //     messege
        //   }
        }
    return (
        <div>
           
     <label htmlFor="my-modal-6" className="btn">update</label>
     <input type="checkbox" id="my-modal-6" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
     <div className="modal-box">
    <h3 className="font-bold text-lg">
    <form  onSubmit={handleaddreview} >
            <h1 className='text-4xl'></h1>
            <h1 className='text-3xl'> </h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                <input name="name" type="text" placeholder="First Name" className="input input-bordered w-full " />
                 <input type="text" name='photo' placeholder="photo Url" src=""  alt="" className="input input-bordered w-full "  />
                <input name="rating" type="text" placeholder="Your Rating" className="input input-bordered w-full " />
                <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full " />
            </div>
            <textarea name="messege" className="textarea textarea-bordered h-24 w-full" placeholder="messege"></textarea>
            <input  className="btn mb-2" type="submit" value="Please your Review" />
        </form>
    </h3>
    <p className="py-4"></p>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Updatereview;