import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Kitchen from './kitchen.jpg';
import './Services.css';

export default class Deep extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleDeepFlip = this.handleDeepFlip.bind(this);
    }

    handleDeepFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className='services-content' onMouseEnter={this.handleDeepFlip}>
                        <img className='kitchen' src={Kitchen} />
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
        );
    }
}