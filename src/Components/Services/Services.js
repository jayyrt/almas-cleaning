import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Adrian from './Adrian.jpg';
import Background from './../Shared/Background/Background';
// import axios from 'axios';
import './Services.css';

export default class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        };
            this.handleDeepFlip = this.handleDeepFlip.bind(this);
            this.handleDailyFlip = this.handleDailyFlip.bind(this);
            this.handleConstructionFlip = this.handleConstructionFlip.bind(this);
    }

    // componentDidMount(){
    // }

    handleDeepFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleDailyFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleConstructionFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <Background>
                <div className='service-container'>
                <h2>Services</h2>
                <div className='services'>

                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className='services-content' onMouseEnter={this.handleDeepFlip}>
                        <img />
                    </div>
                    
                    <div className='services-content' onMouseLeave={this.handleDeepFlip}>
                        <h3>Deep Cleaning</h3>
                        <ul>
                            <li>Restrooms deep clean</li>
                            <li>Detail kitchen</li>
                            <li>Dust & polish</li>
                            <li>Sweep & mop</li>
                        </ul>
                    </div>

                    </ ReactCardFlip>
                    
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

                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    
                    <div className='services-content' onMouseEnter={this.handleConstructionFlip}>
                        <img />
                    </div>
                    
                    <div className='services-content' onMouseLeave={this.handleConstructionFlip}>
                        <h3>Construction Cleaning</h3>                        
                        <ul>
                            <li>Restrooms deep clean</li>
                            <li>Detail kitchen</li>
                            <li>Dust & polish</li>
                            <li>Sweep & mop</li>
                        </ul>
                    </div>

                    </ ReactCardFlip>   
                </div>    
                </div>   

                    <div className='img-container'>
                        <img className='adrian' src={Adrian} alt='Team Image' />
                    </div>
            </Background>
        );
    }
}