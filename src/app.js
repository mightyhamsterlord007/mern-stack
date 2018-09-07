import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

class App extends Component {

    constructor() {
        super();

        this.state = {
            userEmail: null
        }
    }

    handleIncomingData = (event) => {
        this.setState({
            userEmail: event.data.data.email
        })
    }

    render(){

        const user = this.state.userEmail;

        let userEmail;
        if (user !== null) {
            userEmail = this.state.userEmail
        } else {
            userEmail = <Form handleIncomingData={this.handleIncomingData}/>
        }

        return(
            <div>    
                {userEmail}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));