import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";

import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const Login = () => {
    const {loginUser,googleProviderLogin}=useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    
   
    const handlelogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password =form.password.value;
        console.log(email,password)
        loginUser(email,password)
        .then(result=>{
            const user=result.user;
        })   
    }
    const handleGoogleLogin=()=>{
        googleProviderLogin(provider)
        .then(result=>{
            const user=result.user;
            console.log(user)
           
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="hero   bg-base-200">
  <div className="hero-content ">
    
    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
        <h1 className="text-5xl text-center font-bold">Login</h1>
          <label className="label">
           <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="login" />
        </div>
      </form>
      <button  onClick={handleGoogleLogin} >Login With Google</button>
      <p className='text-center mb-4'>New Photography service <Link className='text-orange-600 font-semibold' to='/singup'>Singup</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;