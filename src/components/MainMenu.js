import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { Button } from 'react-materialize';


const MainMenu = () => {
  return (
    <div className="mainMenu">
      <Link to="/">
        <Button node="a" href="/">Home</Button>
      </Link><br></br>
      <Link to="/dean">
        <Button node="a" href="/dean">Dean's Story</Button>
      </Link><br></br>
      <Link to="/cass">
        <Button node="a" href='/cass'>Cass's Story</Button>
      </Link><br></br>
      <Link to="/sam">
        <Button node="a" href="/sam">Sam's Story</Button>
      </Link><br></br><br></br>
    </div>
  );
}; 

// Main App code, calls pure Component - main menu

export default MainMenu;