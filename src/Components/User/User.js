import React, { Component } from 'react';
import axios from 'axios';
import Background from './../Shared/Background/Background';
import Logout from '../Shared/Logout.js';
import './User.css'

export default class User extends Component {
        constructor(props){
            super(props);
            this.state = {
               name: '',
               address: '',
               city: '',
               phone_num: '',
            }
            this.getCalendar = this.getCalendar.bind(this);
            this.addUserInfo = this.addUserInfo.bind(this);
        }

        componentDidMount(){
            this.getUser();
        }

        getCalendar(){
            this.props.history.push('/my-calendar');
        }

        getUser(){
            axios.get('/auth/user-info/:id')
            .then(res => {
                this.setState({ ...res.data})
            })
        }

        addUserInfo() {

        }
     
        updateUser(){

        }


    render(){
        const { name, address, city, phone_num } = this.state;
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
                <div className="user-content">
                <input className="input-box"
                       type="text"
                       placeholder="First & Last Name"
                       onChange={(e) => this.setState({ name: e.target.value })}
                        value={name}
                />
                <input className="input-box"
                       type="text"
                       placeholder="Address"
                       onChange={(e) => this.setState({ address: e.target.value })}
                       value={address}
                />
                <input className="input-box"
                       type="text"
                       placeholder="City"
                       onChange={(e) => this.setState({ city: e.target.value })}
                       value={city}
                />
                <input className="input-box"
                       type="text"
                       placeholder="Phone Number"
                       onChange={(e) => this.setState({ phone_num: e.target.value })}
                       value={phone_num}
                />
                <button className="buttons" onClick={this.addUserInfo}>Add</button>
                <button className="buttons" onClick={this.updateUser}>Update</button>
                </div>
            </div>
            </Background>
        )
    }
}