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
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleUserInput(value) {
        this.setState({ username: value });
    }

    handlePasswordInput(value) {
        this.setState({ password: value });
    }

    register() {
        const { username, password } = this.state;
        axios
        .post('/auth/register', { username, password })
        .then(user => {
            this.setState({ username: '', password: '' });
            this.props.updateUser(user.data);
        })
        .catch(err => {
            this.setState({ username: '', password: '' });
            alert(err.response.request.response);
        });
    }

    login() {
        const { username, password } = this.state;
        axios
        .post('/auth/login', { username, password })
        .then(user => {
            this.setState({ username: '', password: '' });
            this.props.updateUser(user.data);
        })
        .catch(err => {
            this.setState({ username: '', password: '' });
            alert(err.response.request.response);
        });
    }

    logout() {
        axios
        .get('/auth/logout')
        .then(() => {
            this.props.updateUser({});
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
                        onChange={e => this.handleUserInput(e.target.value)}
                        />
                        <input className="input-box"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => this.handlePasswordInput(e.target.value)}
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