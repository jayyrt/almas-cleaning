import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Adrian from './Adrian.jpg';
import Background from './../Shared/Background/Background';
import Construction from './Construction';
import Deep from './Deep';
import Daily from './Daily';
// import axios from 'axios';
import './Services.css';

export default class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        };
    }

    // componentDidMount(){
    // }
    render() {
        return (
            <Background>
            <div className='service-container'>
                <h1>Services</h1>
                <div className='services'>
                    <Deep />
                    <Daily />
                    <Construction />
                </div>
                </div>    

                    <div className='img-container'>
                        <img className='adrian' src={Adrian} alt='Team Image' />
                    </div>
                </ Background>
        );
    }
}