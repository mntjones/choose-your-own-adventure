import React, { Component } from 'react';
import './App.css';
import StoryContainer from './containers/StoryContainer'

class App extends Component {

  state = {
    arrayIndex: 0,
    showBeginning: false,
  }


  render() {
    return (
        <div className="App">
          <header className="App-header">
            
            <h1> Choose Your Own <span>Supernatural</span> Adventure! </h1>
            
            
          </header>
          <div className="instructions">
            <p> Read the story below and then choose the button that tells the character what to do next!</p>

          </div>

          < div className="story">

            <StoryContainer/>

          </div>
        </div>
    );
  }
}

export default App;
