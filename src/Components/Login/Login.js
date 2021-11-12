import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        };
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }
    
    register() {
        const { username, password } = this.state;
        axios.post('/auth/register', { username, password })
        .then(calendar => {
            this.setState({ username: '', password: '' });
//            this.props.history.push('/my-calendar', { username, password })
            this.props.updateUser(calendar.data);
        })
        .catch(err => console.log(err));        
    }

    login() {
        const { username, password } = this.state;
        axios.post('/auth/login', { username, password })
        .then(calendar => {
            this.props.history.push('/my-calendar', { username, password })
            this.props.updateUser(calendar.data)
        })
        .catch(err => console.log(err));
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
            <h1 className="header">
            <div className="title">Alma's Cleaning Company</div>
            </h1>
                <div className="login-container">
                    <div className="container">
                        <input className="input-box"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                        />
                        <input className="input-box"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        <div className="buttons">
                        <button onClick={this.login}>Login</button>
                        <button onClick={this.register}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}