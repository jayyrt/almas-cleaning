import React, { Component } from 'react';
// import axios from 'axios';
import Background from './../Shared/Background/Background';
import Logout from '../Shared/Logout.js';
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
     
        updateUser(){

        }


    render(){
        return (
            <Background>
                <h1 className="header">
                <div className="title">Alma's Cleaning Company</div>
                <div className="links">        
                <Logout />
                </div>
            </h1>
            <div className="user-container">
                <div className="heading">
                    <h1>User Information</h1>
                </div>
                <div className="user-content">
                <input className="input-box"
                       type="text"
                       placeholder="First & Last Name"
                />
                <input className="input-box"
                       type="text"
                       placeholder="Address"
                />
                <input className="input-box"
                       type="text"
                       placeholder="City"
                    //    onChange=    
                />
                <input className="input-box"
                       type="text"
                       placeholder="Phone Number"
                />
                <button className="buttons">Update</button>
                </div>
            </div>
            </Background>
        )
    }
}