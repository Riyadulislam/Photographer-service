import React from 'react';

const Aboutme = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-4">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='w-1/2'>
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div className="w-1/2">
      <h1 className="text-5xl font-bold">My Story</h1>
      <p className="py-6">I  started my professional career in the photography field in 2006 in Dhaka, Bangladesh.I have been working as a wedding photographer for last 15 years in different cities in Bangladesh.
      This long journey helped me to build up my expertise on the field of wedding photography. My work was recognised by “WPPB – Association Of Bangladeshi Professional Wedding & Portrait Photographers And Cinematographers”
      and won awards in three different categories in the year of 2021.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
}; 

export default Aboutme;