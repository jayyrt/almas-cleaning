import React, { Component } from 'react';
import axios from 'axios';
import './Calendar.css';

export default class Calendar extends Component {
    constructor(){
        super();
        this.logout = this.logout.bind(this);     
    }

    logout() {
         axios.get('/auth/logout',)
         .then(user => {
             this.props.history.push('/#')
             this.props.updateUser(user);
         })
         .catch(err => console.log(err))
    }

    render(){
        // const { username, password } = this.state;
        return(
        <div>
            <h1 className="header">
                <div className="title">Alma's Cleaning Company</div>
                <button className="buttons" onClick={this.logout}>Log Out</button>
            </h1>
            <div>
                <div className="mon-container">Monday</div>
                <div className="tues-container">Tuesday</div>
                <div className="wed-container">Wednesday</div>
                <div className="thurs-container">Thursday</div>
                <div className="fri-container">Friday</div>
                <div className="sat-container">Saturday</div>
            </div>
        </div>
        )        
    }
}