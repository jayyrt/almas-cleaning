import axios from 'axios';
import React, { Component } from 'react';

class AddUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            phone_num: '',
        };
    }

    addInfo() {
        const { name, address, city, phone_num } = this.state;
            axios
            .post('/api/user-info/:id', { name: name, address: address, city: city, phone: phone_num })
            .then(user => {
                this.props.addMyInfo(user.data);
            })
            .catch(err => console.log(err))
    }

    render(){
        const { name, address, city, phone_num } = this.state;
        return (
            <div className="user-content">
            <input className="input-box"
                   type="text"
                   placeholder="First & Last Name"
                   value={name}
                   onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input className="input-box"
                   type="text"
                   placeholder="Address"
                   value={address}
                   onChange={(e) => this.setState({ address: e.target.value })}
            />
            <input className="input-box"
                   type="text"
                   placeholder="City"
                   value={city}
                   onChange={(e) => this.setState({ city: e.target.value })}
            />
            <input className="input-box"
                   type="text"
                   placeholder="Phone Number"
                   value={phone_num}
                   onChange={(e) => this.setState({ phone_num: e.target.value })}
            />
            <button className="buttons" onClick={this.addInfo}>Add</button>
            <button className="buttons" onClick={this.updateUser}>Update</button>
            </div> 
        );
    }
}

export default AddUserInfo;