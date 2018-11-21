import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import Buttons from "./components/Buttons";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  increase = () => {
    console.log("hello from increase")
    this.setState({
      number: this.state.number + 1
    })
  }

  decrease = () => {
    console.log("hello from decrease")
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div className="App">
        <Title potato={this.state.number} />
        <Buttons orange={this.increase} donut={this.decrease} />
      </div>
    );
  }
}

export default App;

// when we want to send a method to our component, must use this keyword!