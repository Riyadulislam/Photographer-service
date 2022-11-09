import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../../assests/2.jfif'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {

  const{user,logout} =useContext(AuthContext)
    const manuItems=<>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/service'>Services</Link></li>
    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
    {
      user?.email ?
      <>
      <li className='font-semibold'><Link to='/review'>My Reviews</Link></li>
      <li className='font-semibold'><Link to='/addservice'>Add Services</Link></li>
      </>
      :
      <></>

    }
    </>
  
        const handleLogout=()=>{
          logout()
          .then(() => {
              // Sign-out successful.
              Navigate('/')
            }).catch((error) => {
              // An error happened.
            })
          }
          

    return (
        <div>
        <div className="navbar h-20 mb-12  bg-sky-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {manuItems}
            </ul>
          </div>
         <img className='w-10 h-10 rounded-full' src={logo} alt="" />
         <h1 className=' ml-5 text-3xl'>Wedding photographer</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {manuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ?
            <>
            
            <button onClick={handleLogout}><p className='font-semibold'><Link to='/'>Logout</Link></p></button>
            </>
            : <h1 className='font-semibold'><Link to='/login'>Login</Link></h1>
          }
       
        </div>
       
      </div>
        </div>
    );
};

export default Header;