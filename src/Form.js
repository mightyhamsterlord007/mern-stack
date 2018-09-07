import React, { Component } from 'react';
import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
        'access-control-allow-origin': '*'
    }
});

class Form extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    onClick = (event) => {
        event.preventDefault();

        Axios.post('/users/createuser', {
            email: this.state.email,
            password: this.state.password
          })
          .then((response) => {
       
            // this.setState({
            //     userEmail: response.data.data.email
            // })
            this.props.handleIncomingData(response)

          })
          .catch( (error) => {
            console.log(error);
          });
    }

    render(){
        return (
            <form>
                <span>Sign up</span>   
                <br />
                <label>email</label>
                <br />
                <input name="email" onChange={this.handleInput} />
                <br />
                <label>password</label>
                <br />
                <input name="password" onChange={this.handleInput} />
                <br />
                <button onClick={this.onClick}>Submit</button>
          </form>
        )
    }
}

export default Form;