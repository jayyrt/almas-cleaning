import React, { Component } from 'react';
import Adrian from './Adrian.jpg';
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
            <div>
                <div className='info-content'>
                    <div className='service-container'>
                        <h2>Services</h2>
                        <div className='services'>
                            <div className='service-content'>
                                <h3>Deep Cleaning</h3>
                                <p>This service is a deep clean</p>
                            </div>
                            <div className='service-content'>
                                <h3>Daily Cleaning</h3>
                                <p>This service is a daily clean</p>
                            </div>
                            <div className='service-content'>
                                <h3>Construction Cleaning</h3>
                                <p>This service is a construction clean</p>
                            </div>
                        </div>
                    </div>
                    <div className='img-container'>
                        <img className='adrian' src={Adrian} alt='Team Image' />
                        {/* RESEARCH HOW TO IMPORT IMAGE .jpg */}
                    </ div>
                    <div className='service-container'>
                        <h2>About Company</h2>
                    </div>
                </div>
            </div>
            </Background>
        );
    }
}