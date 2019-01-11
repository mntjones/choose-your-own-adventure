import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dean from './Dean';
import Sam from './Sam'
import Cass from './Cass';
import Home from './Home';


const AppRouter = () => {

	return (
		<Router>
			<div className= "router">
        <Route exact path="/" component={Home} />
        <Route path="/dean" component={Dean} />
        <Route path="/cass" component={Cass} />
        <Route path="/sam" component={Sam} />
      </div>
		</Router>
	)
}

export default AppRouter