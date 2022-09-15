import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './Inquiries.css';

export default class Inquiries extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            msg: ''
        }
        this.email = this.email.bind(this); 
    }

    email() {
        const { name, email, phone, subject, msg  } = this.state; // missing msg, name, phone
        axios.post('/inquiry', { name, email, phone, subject, msg })
        .then((res) => {
            toast.info(`Successfully sent Inquiry`);
        })
        .catch((err) => toast.error(`Inquiry email Error, try again`))
    }

    render() {
        const { name, email, phone, subject, msg } = this.state;
        return (
            <div className='inquiries-exterior'>
                <ToastContainer />
                <h2>Ask Us Anything!</h2>
            <div className='inquiries-container'>
                <input 
                className='inquiries-inputs' 
                placeholder='First & Last Name'
                value={name}
                onChange={(e) => this.setState({ name: e.target.value })}
                />
                <input 
                className='inquiries-inputs'
                placeholder='Email'
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                />
                <input className='inquiries-inputs' 
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <select 
                className='inquiries-menu' 
                value={subject} 
                onChange={(e) => this.setState({ subject: e.target.value })}>
                    <option>Schedule Estimate</option>
                    <option>Service Inquiry</option>
                    <option>General</option>
                </select>
                <textarea className='inquiries-msg' 
                value={msg}
                onChange={(e) => this.setState({ msg: e.target.value })}></textarea>
                <button onClick={this.email}>Submit Inquiry</button>
            </div>
            </div>
        )
    }
}