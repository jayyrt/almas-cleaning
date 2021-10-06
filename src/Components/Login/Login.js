import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        };
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    register() {

    }

    login() {

    }

    logout() {

    }

    render() {
        const { username, password } = this.state;
        return (
                <div className="login-container">
                    <div className="container">
                    <input className="input-box"
                    type="text"
                    placeholder="Username"
                    value={username}
                    />
                    <input className="input-box"
                    type="password"
                    placeholder="Password"
                    value={password}
                    />
                    <div className="buttons">
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.login}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}