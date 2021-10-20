import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="header">
                <div className="title">Alma's Cleaning Company</div>
            </div>
        )
    }
}