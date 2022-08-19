import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Windex from './windex.jpg';
import './Services.css';

export default class Daily extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleDailyFlip = this.handleDailyFlip.bind(this);
    }

    handleDailyFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div className='services-content' onMouseEnter={this.handleDailyFlip}>
                <div className='daily-img'>
                <img className='daily-img' src={Windex}/>
                <h3>Daily Cleaning</h3>
                </div>
            </div>
            <div className='services-content' onMouseLeave={this.handleDailyFlip}>
            <ul>
                <li>Restrooms deep clean</li>
                <li>Detail kitchen</li>
                <li>Dust & polish</li>
                <li>Sweep & mop</li>
            </ul>
        </div>
        </ ReactCardFlip>      
        );
    }
}