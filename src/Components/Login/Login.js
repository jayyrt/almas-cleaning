import React, { Component } from 'react';
import axios from 'axios';
import Background from './../Shared/Background/Background';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }
    
    register() {
        const { username, email, password } = this.state;
        axios.post('/auth/register', { username, email, password })
        .then(calendar => {
            this.setState({ username: '', email: '', password: '' });
            this.props.updateUser(calendar.data);
        })
        .catch(err => console.log(err));        
    }

    login() {
        const { username, password } = this.state;
        axios.post('/auth/login', { username, password })
        .then(calendar => {
            this.props.history.push('/my-calendar', { username, password });
            toast.success(`Welcome to your calendar`);
            // this.props.updateUser(calendar.data)
        })
        .catch((err) => toast.error(`Incorrect login information`));
    }

    render() {
        const { username, email, password } = this.state;
        return (
            <Background>
                <ToastContainer />
                
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
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        <input className="input-box"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        <div className="buttons">
                        <button className="buttons" onClick={this.login}>Login</button>
                        <button className="buttons" onClick={this.register}>Register</button>
                        </div>
                    </div>
                </div>
            </Background>
        )
    }
}