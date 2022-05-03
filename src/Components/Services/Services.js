import React, { Component } from 'react';
import Background from './../Shared/Background/Background';
// import axios from 'axios';
import './Services.css';

export default class Services extends Component {
    constructor(props){
        super(props);

        this.getLogin = this.getLogin.bind(this);
    }

    getLogin(){
        this.props.history.push('/')
    }

    // componentDidMount(){
    // }

    render() {
        return (
            <Background>
                <h1 className="header">
                    <div className="title">Alma's Cleaning Company</div>
                    <div className="links">
                        <button className="link-content" onClick={this.getLogin}>Login/Register</button>
                    </div>
                </h1>
                <div className='info-content'>
                    <div className='service-container'>
                        <h2>Services</h2>
                    </div>
                    <div className='about-container'>
                        <h2>About Company</h2>
                    </div>
                </div>
            </Background>
        );
    }
}