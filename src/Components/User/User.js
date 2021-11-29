import React, { Component } from 'react';
// import axios from 'axios';
import './User.css'

export default class User extends Component {
        constructor(){
            super();
            this.state = {
                name: '',
                address: '',
                city: '',
                phone: '',
            };
        }    


    render(){
        return (
            <div className="user-container">
                <div className="heading">
                    <h1>User Information</h1>
                </div>
                <div className="user-content">
                <input className="name-input"
                       type="text"
                       placeholder="First & Last Name"
                />
                <input className="addy-input"
                       type="text"
                       placeholder="Address"
                />
                <input className="city-input"
                       type="text"
                       placeholder="city"
                />
                <input className="phone-input"
                       type="text"
                       placeholder="Phone Number"
                />
                <button className="buttons">Update</button>
                </div>
            </div>
        )
    }
}