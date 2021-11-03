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
    }

//    handleUserInput(value) {
//        this.setState({ username: value });
//    }

//    handlePasswordInput(value) {
//        this.setState({ password: value });
//    }
    
    register() {
        
    }

    login() {
        // if (e) e.preventDefault();
        const { username, password } = this.state;
        axios.post('/auth/login', { username, password })
        .then()
        .catch(err => console.log(err))
    }


    render() {
        const { username, password } = this.state;
        return (
            <div>
               {/* <form className='login-form' onSubmit={(e) => this.login(e)}> */}
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
                {/* </form> */}
            </div>
        )
    }
}