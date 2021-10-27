import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

//    handleUserInput(value) {
//        this.setState({ username: value });
//    }

//    handlePasswordInput(value) {
//        this.setState({ password: value });
//    }
    
    async componentDidMount() {
        let res = await axios.get()
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

//    login() {
//        const { username, password } = this.state;
//        axios
//        .post('/auth/login', { username, password })
//        .then(user => {
//            this.setState({ username: '', password: '' });
//            this.props.updateUser(user.data);
//        })
//        .catch(err => {
//            this.setState({ username: '', password: '' });
//            alert(err.response.request.response);
//        });
//    }

        async login(e) {
            if (e) e.preventDefault();
            const { username, password } = this.state;
            try {
                const res = await axios.post('/auth/login', { username, password });
                if (res.data.loggedIn) this.props.history.push('/my-calendar');
            } catch (e) {
                alert('Login failed. Please try again.');
            }
        }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <form className='login-form' onSubmit={(e) => this.login(e)}>
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
                </form>
            </div>
        )
    }
}