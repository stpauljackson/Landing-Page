import React from 'react'
import Navbar from './navbar'
import backgroundImage from '../background.jpg'
import Contactcard from './contactcard'
import img1 from '../img1.jpg'

export default function Contact() {
  return (
    <div className="row" >
        <Navbar />
        <div className='row mt-5'>
            
            <div className='col-5 p-5'>
              <h1 className='display-2 text-start mx-5  mb-5  fw-medium'>Contact</h1>
              <p className='text-start mx-5 mb-5 fs-3'>
                Let people know what to reach out about
                and what to expect after contacting you.
                Don't forget to choose a storage option for
                submissions.
              </p>
              <p className='text-start mx-5 fs-5'>
              example@email.com<br/>
              +55-555-555-5555
            </p>
            <p className='text-start mx-5 fs-5'>
              123 Demo Street,<br/>
              New York, NY, 123456
            </p>
            </div>
            
            <div className='col-7 pt-5 mt-5'>
              <Contactcard />
            </div>
        </div>
        <div className='row my-5'>
          <div className='col-4 m-auto'>
            <h1 className='display-6 my-4'>Location</h1>
            <p className='text-center'>
              123 Demo Street,<br/>
              New York, NY, 123456
            </p>
          </div>
          
          <div className='col-4 m-auto'>
            <h1 className='display-6 my-4'>Hours</h1>
            <p className='text-center'>
              Monday - Friday<br/>
              6:30am - 11pm
            </p>
          </div>

          <div className='col-4 m-auto'>
            <h1 className='display-6 my-4'>Contact</h1>
            <p className='text-center'>
              example@email.com<br/>
              +55-555-555-5555
            </p>
          </div>

        </div>
    </div>
  )
}
