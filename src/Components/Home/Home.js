import React, { Component } from 'react';
import Services from '../Services/Services';
import Inquiries from '../Inquiries/Inquiries';
import Gallery from '../Gallery/Gallery';
import ReactModal from 'react-modal';
import axios from 'axios';
import Background from '../Shared/Background/Background';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';

ReactModal.setAppElement('#root');

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            // USER STATES
            email: '',
            password: '',
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
        this.setState({ email: '', password: '', showSignInModal: false });
    };

    modalFadeMilliseconds() {
        const Milliseconds = 50;
    }

    // ADD handleOpenRegisterModal &&& handleCloseRegisterModal
    handleOpenRegisterModal(){
        this.setState({ showRegisterModal: true });
    };

    handleCloseRegisterModal(){ 
        this.setState({ name: '', email: '', address: '', phone: '', password: '', showRegisterModal: false });
    };

    register() {
        const { name, email, address, phone, password } = this.state;
        axios.post('/auth/register', { name, email, address, phone, password })
        .then(calendar => {
            this.setState({ name: '', email: '', address: '', phone: '', password: '' });
            this.props.updateUser(calendar.data);
        })
        .catch(err => console.log(err));        
    }

    login() {
        const { email, password } = this.state;
        axios.post('/auth/login', { email, password })
        .then((res) => {
            this.props.history.push('/my-calendar', { email, password });
            toast.info(`Welcome to Alma's calendar`);
            // this.props.updateUser(calendar.data)
        })
        .catch((err) => toast.error(`Email or Password Incorrect`));
    }

    render() {
         const { email, password, phone, name, address, showSignInModal, showRegisterModal } = this.state;
        return (
            <Background>
            <ToastContainer />

            <h1 className="header">
            <div className="title">Alma's Cleaning Company</div>
            <div className="links">
                <button className="link-content" onClick={this.handleOpenSignInModal}>My Account</button> 
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
                            placeholder="First & Last Name"
                            value={name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            />
    
                            <input className="input-box"
                            type="text"
                            placeholder="Email"
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

                            <input className="input-box"
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        <div className="buttons">
                            <button className="buttons" onClick={this.register}>Register</button>
                            <button className="buttons" onClick={this.handleCloseRegisterModal}>Cancel</button>
                        </div>
                        </div>

                    </div>
                </ReactModal>

                <Services />

                <div className="inquiries-gallery">
                <Inquiries />
                <Gallery />
                </div>

                <div>
                    <div className='about-container'>
                        <h1 className="about-header">
                            About Company
                        </h1>
                        <h3 className="about-content">
                            Here at Alma's Cleaning Company we pride in providing the most Detail Oriented Janitorial Services. We vow to practice Respect, Integrity, Professionalism, Quality & Most importantly Family in every facility we approach. Thru our outstanding Consistency & Teamwork we commit to bring to your environment the Wellness & Peace your loved ones deserve. 
                        </h3>
                    </div>
                    <div className="footer">Copyright © 2022 Alma's Cleaning Company</div>
                </div>
            
            </Background>
        )
    }
}