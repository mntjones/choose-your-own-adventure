import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StorySection from './components/StorySection';

class App extends Component {

  state = {
    arrayIndex: 0,
  }


  handleClick = (e) => {
    e.preventDefault();
    //this.setState
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Choose Your Own Adventure!
          </p>
          
        
          <div className="start">
            <button onClick={this.handleClick}>Let's Go!</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
