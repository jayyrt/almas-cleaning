import React, { Component } from 'react';
import axios from 'axios';
import './../Calendar/Calendar.css';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.logout = this.logout.bind(this);
    }

    
    logout() {
         axios.get('/auth/logout')
         .then(user => {
             this.props.history.push('/#')
             this.props.updateUser(user);
         })
         .catch(err => console.log(err))
    }

    render() {
        //    const { username, password } = this.state;
            return(
                <div>
                    <button className="link-content" onClick={this.logout}>Log Out</button>
                </div>
            )
    }
}