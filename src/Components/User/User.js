import React, { Component } from 'react';
import axios from 'axios';
import Background from './../Shared/Background/Background';
import Logout from '../Shared/Logout.js';
import './User.css'

export default class User extends Component {
        constructor(){
            super();
            this.state = {
            // add userid prop (how to insert) fix db NOT NULL error
               userid: '',
               name: '',
               address: '',
               city: '',
               phone_num: '',
            }
            this.getUser = this.getUser.bind(this);
            this.updateUser = this.updateUser.bind(this);
            this.getCalendar = this.getCalendar.bind(this);
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
     
        updateUser() {
            const { userid, name, address, city, phone_num } = this.state;
            axios.post('/auth/user-info/:id', { userid, name, address, city, phone_num })
            .then(userInfo => {
                this.setState({ userid: '', name: '', address: '', city: '', phone_num: '' });
                this.props.history.push(userInfo.data)
            })
        }

    // user information is being added to the database, but is not displaying on the front end
    // required to limit to one addition per user!


    render(){
        // const is a block scoped -- cannot be updated! Find alternative
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

                {/* how to add userid as key ?? */}

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
                <button className="buttons" onClick={this.updateUser}>Update</button>
                </div>
            </div>

            <div className="footer-2">Copyright © 2022 Alma's Cleaning Company</div>
            
            </Background>
        )
    }
}