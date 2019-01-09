import React, { Component } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import AppRouter from './components/AppRouter';

class App extends Component {

  state = {
    arrayIndex: 0,
    showBeginning: false,
  }


  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Welcome to Choose Your Own Adventure!
            </p>

            <MainMenu/>
            <AppRouter/>
          </header>
        </div>
    );
  }
}

export default App;
