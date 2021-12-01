import React, { Component } from 'react';
import axios from 'axios';
import './Calendar.css';
import Logout from '../Shared/Logout.js';
import { connect } from 'react-redux';
import { requestUserData } from './../../Ducks/userReducer.js';

class Calendar extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
         }
        this.getUser = this.getUser.bind(this);     
    }
 
    componentDidMount(){
        this.props.requestUserData();
    };
        
    // getUser() {
    //     const {username} = this.state;
    //     axios.get('/api/user-info', {username})
    //     .then(user => {
    //         this.props.history.push('/user-info', {username});
    //         this.props.updateUser(user.data)
    //     })
    //     .catch(err => console.log(err))
    // }

        getUser() {
            this.props.history.push('/user-info')
        }

    render(){
        // const { name, address, city, phone } = this.props.user;
        return(
        <div>
            <h1 className="header">
                <div className="title">Alma's Cleaning Company</div>
                <div className="links">
                <button className="link-content" onClick={this.getUser}>Profile</button>
                <Logout />
                </div>
            </h1>
            <div className="weekly-container">
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { requestUserData })(Calendar);