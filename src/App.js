import React from "react";
import Home from "./pages/home/index";
import Locks from "./pages/locks/locks";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/locks" component={Locks} />
				<Route exact path="/contact" component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
