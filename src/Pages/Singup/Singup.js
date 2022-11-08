import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Singup = () => {
    const {createUser}=useContext(AuthContext)
    const handleSingup=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password =form.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))

    }
    return (
        <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content ">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSingup} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl text-center font-bold">Singup</h1>
                <label className="label">
                
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
             
                <label className="label">
                
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div  className="form-control mt-6">
                
                 <input className="btn btn-primary" type="submit" value="Singin" />
              </div>
            </form>
            <p className='text-center mb-4'>Already Have an account <Link className='text-orange-600 font-semibold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Singup;