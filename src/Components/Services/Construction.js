import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Floor from './floor.jpg';
import './Services.css';

export default class Construction extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        }
        this.handleConstructionFlip = this.handleConstructionFlip.bind(this);
    }

    handleConstructionFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    
            <div className='services-content' onMouseEnter={this.handleConstructionFlip}>
                <img className='floor-img' src={Floor} />
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
        );
    }
}