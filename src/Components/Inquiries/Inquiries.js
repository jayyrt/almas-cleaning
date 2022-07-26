import React, { Component } from 'react';
// import axios from 'axios';
import './Inquiries.css';

export default class Inquiries extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="inquiries-container">
                <button className='inquiries-menu'>Inquiry</button>
                <input className='inquiries-msg' />
            </div>
        )
    }
}