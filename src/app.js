import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }


    }

    handleInput (event) {
        console.log('TYPED!')

        console.log(this.state)
    }

    render(){
        return(
            <div>
                <span>Sign up</span>
                <form>
                    <label>email</label>
                    <br />
                    <input name="email" onChange={this.handleInput} />
                    <br />
                    <label>password</label>
                    <br />
                    <input password="password" onChange={this.handleInput} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));