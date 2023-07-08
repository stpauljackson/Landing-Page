import React from 'react'
import Brand from './brand'

import img1 from '../img1.jpg'
import img2 from '../img2.jpg'
import img3 from '../img3.jpg'
import Contactcard from './contactcard'

export default function Home() {
  return (
    <div className="row">      
        <Brand />
        <div>
          <h1 className='display-4 m-5'>Follow us on social</h1>
          <div className='row px-5 mx-5' style={{height:'40vh'}}>
              <img className='col-3 p-3' style={{height:'100%'}} src={img1} />
              <img className='col-3 p-3' style={{height:'100%'}} src={img2} />
              <img className='col-3 p-3' style={{height:'100%'}} src={img3} />
              <img className='col-3 p-3' style={{height:'100%'}} src={img1} />
          </div>
          <button className="btn btn-dark rounded-pill my-4 px-3">Social</button>
        </div>
        <div className='row mt-5'>
              <img className='col-6' src={img1} style={{height:'80vh'}} />
            
            <div className='col-6 mt-5 '>
                <h1 className='display-4 fw-bold '>Get in Touch</h1>
                <div>
                  <Contactcard />
                </div>
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
