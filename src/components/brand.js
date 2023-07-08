import React from 'react';
import Navbar from './navbar';

import backgroundImage from '../background.jpg'
import img7 from '../img7.jpg'

function Brand() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Navbar /> 
    <div className="text-center p-5 m-5">
      <h1 className='m-3 mt-5 display-1 '>Introduce your brand</h1>
      <p className='fs-4'>
        Welcome people to your site with an
        introduction that's short, sweet, and sounds
        like you.
      </p>
      <button className="btn btn-dark rounded-pill my-4 px-3">Learn More</button>
    </div>
    </div>
  );
}

export default Brand;