import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StorySection from './components/StorySection';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  state = {
    arrayIndex: 0,
    showBeginning: false,
  }


  handleClick = (e) => {
    this.setState(showBeginning: !this.state.showBeginning)
  }


  render() {
    return (
      <Router>

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
        
      </Router>
    );
  }
}

export default App;
