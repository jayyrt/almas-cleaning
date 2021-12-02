import React, { Component } from 'react';
// import axios from 'axios';
import Background from './../Shared/Background/Background';
import AddUserInfo from './AddUserInfo.js';
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
            }
            this.getCalendar = this.getCalendar.bind(this);
            this.addMyInfo = this.addMyInfo.bind(this);
        }

        getCalendar(){
            this.props.history.push('/my-calendar');
        }

        addMyInfo(newMyInfo) {
            this.setState({
                info: {
                    ...this.state.info,
                    user: newMyInfo,
                },
            })
        }
     
        updateMyInfo(){

        }


    render(){
        return (
            <Background>
                <h1 className="header">
                <div className="title">Alma's Cleaning Company</div>
                <div className="links">
                <button className="link-content" onClick={this.getCalendar}>Calendar</button>
                <div className="links">        
                <Logout />
                </div>
                </div>
            </h1>
            <div className="user-container">
                <div className="heading">
                    <h1>User Information</h1>
                </div>
                <AddUserInfo />
            </div>
            </Background>
        )
    }
}