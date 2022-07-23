import React, { Component } from 'react';
import Adrian from './Adrian.jpg';
import Background from './../Shared/Background/Background';
// import axios from 'axios';
import './Services.css';

export default class Services extends Component {
    constructor(props){
        super(props);

        // this.getLogin = this.getLogin.bind(this);
    }

    // getLogin(){
    //     this.props.history.push('/')
    // }

    // componentDidMount(){
    // }

    render() {
        return (
            <Background>
            <div>
                    <div className='service-container'>
                        <h2>Services</h2>
                        <div className='services'>
                            <div className='flip-card'>
                            <div className='service-flipcard-inner-1'>
                                <div className='flip-card-front-1'>
                                    img
                                </div>
                                <div className='flip-card-back-1'>
                                <h3>Deep Cleaning</h3>
                                <ul>
                                    <li>Restrooms deep clean</li>
                                    <li>Detail kitchen</li>
                                    <li>Dust & polish</li>
                                    <li>Sweep & mop</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className='flip-card'>
                            <div className='service-flipcard-inner-2'>
                                <div className='flip-card-front-2'>
                                    img
                                </div>
                                <div className='flip-card-back-2'>
                                <h3>Daily Cleaning</h3>
                                <ul>
                                    <li>Restrooms deep clean</li>
                                    <li>Detail kitchen</li>
                                    <li>Dust & polish</li>
                                    <li>Sweep & mop</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className='flip-card'>
                            <div className='service-flipcard-inner-3'>
                                <div className='flip-card-front-3'>
                                    img
                                </div>
                                <div className='flip-card-back-3'>
                                <h3>Construction Cleaning</h3>                        
                                <ul>
                                    <li>Restrooms deep clean</li>
                                    <li>Detail kitchen</li>
                                    <li>Dust & polish</li>
                                    <li>Sweep & mop</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='img-container'>
                        <img className='adrian' src={Adrian} alt='Team Image' />
                    </ div>

                </div>
            </Background>
        );
    }
}