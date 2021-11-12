import React, { Component } from 'react';
import './User.css'

export default class User extends Component {
    constructor(){
        super();
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
                <input className="phone-input"
                       type="text"
                       placeholder="Phone Number"
                />
                </div>
            </div>
        )
    }
}