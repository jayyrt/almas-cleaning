import React, { Component } from 'react';
import Services from '../Services/Services';
import Inquiries from '../Inquiries/Inquiries';
import ReactModal from 'react-modal';
import axios from 'axios';
import Background from '../Shared/Background/Background';
import { ToastContainer, toast } from 'react-toastify';
import './Home.css';

ReactModal.setAppElement('#root');

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            // USER STATES
            username: '',
            password: '',
            email: '',
            name: '',
            phone: '',
            address: '',
            // MODAL STATES
            showSignInModal: false,
            showRegisterModal: false,
        };
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.handleCloseSignInModal = this.handleCloseSignInModal.bind(this);
        this.handleOpenSignInModal = this.handleOpenSignInModal.bind(this);
        this.handleOpenRegisterModal = this.handleOpenRegisterModal.bind(this);
        this.handleCloseRegisterModal = this.handleCloseRegisterModal.bind(this);
        // this.getServices = this.getServices.bind(this);
    }

    handleOpenSignInModal() {
        this.setState({ showSignInModal: true });
    };

    handleCloseSignInModal() {
        this.setState({ username: '', password: '', showSignInModal: false });
    };

    modalFadeMilliseconds() {
        const Milliseconds = 50;
    }

    // ADD handleOpenRegisterModal &&& handleCloseRegisterModal
    handleOpenRegisterModal(){
        this.setState({ showRegisterModal: true });
    };

    handleCloseRegisterModal(){ 
        this.setState({ username: '', name: '', email: '', address: '', phone: '', password: '', showRegisterModal: false });
    };

    register() {
        const { username, password, email } = this.state;
        axios.post('/auth/register', { username, password, email })
        .then(calendar => {
            this.setState({ username: '', password: '', email: '' });
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

    // getServices() {
    //     this.props.history.push('/services');
    // }

    render() {
         const { username, password, email, phone, name, address, showSignInModal, showRegisterModal } = this.state;
        return (
            <Background>
                <ToastContainer />
            
            <h1 className="header">
            <div className="title">Alma's Cleaning Company</div>
            <div className="links">
                <button className="link-content" onClick={this.handleOpenSignInModal}>Sign In</button> 
                {/* ERROR WHEN SEARCHING FOR props className={`sign-in ${props.username ? 'sign-in-hidden' : ''}`} */}
                {/* <p className={`signed-in-user  ${props.username ? '' : 'sign-in-hidden'}`}>Welcome: {props.user.username}</p> */}
            </div>
            </h1>
            <ReactModal
                isOpen={showSignInModal}
                contentLabel="Sign In Modal"
                onRequestClose={this.handleCloseSignInModal}
                closeTimeoutMS={this.modalFadeMilliseconds}
                className="modal"
            >

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
                        <button className="buttons" onClick={this.handleOpenRegisterModal}>Register</button>
                        <button className="buttons" onClick={this.handleCloseSignInModal}>Cancel</button>
                        </div>
                    </div>
                </div>

                </ReactModal>

                <ReactModal
                    isOpen={showRegisterModal}
                    contentLabel="Sign In Modal"
                    OnRequestClose={this.handleCloseRegisterModal}
                    closeTimeoutMS={this.modalFadeMilliseconds}
                    className="modal"
                >

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
                            placeholder="First & Last Name"
                            value={name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            />
    
                            <input className="input-box"
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            />

                            <input className="input-box"
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => this.setState({ address: e.target.value })}
                            />

                            <input className="input-box"
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => this.setState({ phone: e.target.value })}
                            />
                        <div className="buttons">
                            <button className="buttons" onClick={this.register}>Register</button>
                            <button className="buttons" onClick={this.handleCloseRegisterModal}>Cancel</button>
                        </div>
                        </div>

                    </div>
                </ReactModal>

                <Services />

                <Inquiries />

                <div>
                    <div className="footer">This is my footer</div>
                </div>
            </Background>
        )
    }
}