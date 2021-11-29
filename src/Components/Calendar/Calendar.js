import React, { Component } from 'react';
// import axios from 'axios';
import './Calendar.css';
import { connect } from 'react-redux';
import { requestUserData } from './../../Ducks/userReducer.js';

class Calendar extends Component {
    componentDidMount(){
        this.props.requestUserData();
    }

//        this.state = {
//            username: '',
//            password: '',
        // }
//        this.logout = this.logout.bind(this);
//        this.getUserInfo = this.getUserInfo.bind(this);     
    // }

    // logout() {
    //      axios.get('/auth/logout')
    //      .then(user => {
    //          this.props.history.push('/#')
    //          this.props.updateUser(user);
    //      })
    //      .catch(err => console.log(err))
    // }

    // getUserInfo() {
    //     const {username} = this.state;
    //     axios.get('/api/user-info', {username})
    //     .then(user => {
    //         this.props.history.push('/user-info', {username});
    //         this.props.updateUser(user.data)
    //     })
    //     .catch(err => console.log(err))
    // }

    render(){
        const { name, address, city, phone } = this.props.user;
        return(
        <div>
            <h1 className="header">
                <div className="title">Alma's Cleaning Company</div>
                <button className="user-tab" onClick={this.getUserInfo}>Profile</button>
                <button className="buttons" onClick={this.logout}>Log Out</button>
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