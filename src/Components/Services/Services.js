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
            this.handleClick = this.handleClick.bind(this);
        // this.getLogin = this.getLogin.bind(this);
    }

    // getLogin(){
    //     this.props.history.push('/')
    // }

    // componentDidMount(){
    // }

    handleClick(e) {
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
                    <div className='services-content' onClick={this.handleClick}>
                        <img />
                    </div>
                    
                    <div className='services-content' onClick={this.handleClick}>
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
                    <div className='services-content' onClick={this.handleClick}>
                        <img />
                    </div>

                    <div className='services-content' onClick={this.handleClick}>
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
                    
                    <div className='services-content' onClick={this.handleClick}>
                        <img />
                    </div>
                    
                    <div className='services-content' onClick={this.handleClick}>
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