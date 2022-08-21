import React, { Component } from 'react';

// import axios from 'axios';
import './Inquiries.css';

export default class Inquiries extends Component {
    constructor() {
        super();
    }

    

    render() {
        return (
            <div className='inquiries-exterior'>
                <h2>Ask Us Anything!</h2>
            <div className='inquiries-container'>
                <input 
                className='inquiries-inputs' 
                placeholder='First & Last Name'
                />
                <input 
                className='inquiries-inputs'
                placeholder='Email'
                />
                <input className='inquiries-inputs' 
                placeholder='Phone Number'
                />
                <select className='inquiries-menu'>
                    <option>Schedule Estimate</option>
                    <option>Service Inquiry</option>
                    <option>General</option>
                </select>
                <textarea className='inquiries-msg'></textarea>
                <button>Submit Inquiry</button>
            </div>
            </div>
        )
    }
}