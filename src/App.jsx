import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import {Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'July 1, 2017',
      newDeadline: ''
    }
  }

changeDeadline(){
  console.log('state', this.state)
  this.setState({deadline: this.state.newDeadline})
}

  render(){
    return (
      <div className="App">
        <div className="App-title">
          CountDown to {this.state.deadline}
        </div>
        <Clock
          deadline = {this.state.deadline}
        />
        <Form inline>
          <FormControl
            className= "Deadline-input"
            placeholder= 'new date'
            onChange={event=> this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>Summit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
