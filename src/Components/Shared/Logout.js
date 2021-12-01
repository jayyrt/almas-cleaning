import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './../Calendar/Calendar.css';

class Logout extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.logout = this.logout.bind(this);
    }

    
    logout() {
         axios.get('/auth/logout')
         .then(user => {
             this.props.history.push('/')
            //  this.props.updateUser(user);
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

export default withRouter(Logout);