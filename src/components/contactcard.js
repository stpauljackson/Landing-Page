import './contactcard.css';
import { useState } from 'react';


export default function Contactcard() {
    
    return (
        <div>
        <div className='contactcard'>
            <div className='contactcardheading'><p>Let's Talk!</p></div>
            <div className='contactinput'>
                <input type='text' placeholder='name'   />
            </div>
            <div className='contactinput'>
                <input type='text' placeholder='email'   />
            </div>
            <div className='contactinput'>
                <textarea placeholder='message' />
            </div>
            <button className="btn btn-dark rounded-pill my-4 px-3">Send</button>
            </div>
        </div>
    );
}