import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo.jfif'

const Header = () => {
    const manuItems=<>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/orders'>orders </Link></li>
    </>

    return (
        <div>
        <div className="navbar h-20 mb-12 pt-5 bg-blue-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {manuItems}
            </ul>
          </div>
         <img className='w-20 rounded-full' src={logo} alt="" />
         <h1 className=' ml-5 text-3xl'>Weeding Photography</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {manuItems}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-error">Logout</button>
        
        </div>
       
      </div>
        </div>
    );
};

export default Header;