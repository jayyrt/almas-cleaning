import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Adrian from './Adrian.jpg';
import Background from './../Shared/Background/Background';
import Construction from './Construction';
import Deep from './Deep';
// import axios from 'axios';
import './Services.css';

export default class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        };
            this.handleDailyFlip = this.handleDailyFlip.bind(this);
    }

    // componentDidMount(){
    // }
    
    handleDailyFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <Background>
            <div className='service-container'>
                <h1>Services</h1>
                <div className='services'>
                    <Deep />

                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className='services-content' onMouseEnter={this.handleDailyFlip}>
                        <img />
                    </div>

                    <div className='services-content' onMouseLeave={this.handleDailyFlip}>
                        <h3>Daily Cleaning</h3>
                        <ul>
                            <li>Restrooms deep clean</li>
                            <li>Detail kitchen</li>
                            <li>Dust & polish</li>
                            <li>Sweep & mop</li>
                        </ul>
                    </div>

                    </ ReactCardFlip>      
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