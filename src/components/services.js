import React from 'react'
import img1 from '../img1.jpg'
import img2 from '../img2.jpg'
import backgroundImage from '../background.jpg'
import img5 from '../img5.jpg'
import Navbar from './navbar'

export default function Services() {
  return (
    <div>
        <div style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }} >
        <Navbar /> 
        <div style={{height:'47vh'}} className='m-5 px-5'>
            <h1 className='display-1 text-start ml-5'>Our Services</h1>
        </div>
        </div>
        <div className='row m-0 mt-5'>

            <div className='col-4'>
                <p className='display-3 p-0 '>What we offer</p>
            </div>
            
            <div className='col-8'>
                <div className='row'>
                    <div className='col-6 my-3'>
                        <p className='display-5 p-3 text-start'>service 1</p>
                        <p className='p-2  fs-4 text-start'>
                            What should we know about this service?
                            Describe important details like price, value,
                            length of service, and why it's unique. Or use
                            these sections to showcase key values of your
                            services.
                        </p>
                    </div>
                    
                    <div className='col-6 my-3'>
                        <p className='display-5 p-3 text-start '>service 2</p>
                        <p className='p-2  fs-4 text-start'>
                            What should we know about this service?
                            Describe important details like price, value,
                            length of service, and why it's unique. Or use
                            these sections to showcase key values of your
                            services.
                        </p>
                    </div>
                    
                    <div className='col-6 my-3'>
                        <p className='display-5 p-3 text-start '>service 3</p>
                        <p className='p-2  fs-4 text-start'>
                            What should we know about this service?
                            Describe important details like price, value,
                            length of service, and why it's unique. Or use
                            these sections to showcase key values of your
                            services.
                        </p>
                    </div>
                    
                    <div className='col-6 my-3'>
                        <p className='display-5 p-3 text-start '>service 4</p>
                        <p className='p-2  fs-4 text-start'>
                            What should we know about this service?
                            Describe important details like price, value,
                            length of service, and why it's unique. Or use
                            these sections to showcase key values of your
                            services.
                        </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className='row p-4'>
            <img className='col-6 p-4' style={{height:'60vh'}} src={img1} />
            <img className='col-6 p-4' style={{height:'60vh'}} src={img2} />
        </div>
        {/* <div className='container'>
            <div className='col-4'><p>The Results</p></div>
            
            <img className='col-8' style={{height:'60vh'}} src={backgroundImage} />
            <div>
                "Whatever it is, the way
                you tell your story
                online can make all the
                difference."
            </div>
        </div> */}
    </div>
  )
}
