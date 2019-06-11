import React from 'react'
import {render} from 'react-dom'
import { store } from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/App'
import Booking from './components/Booking/Booking'
import Client from './components/Client/Client'
import Hotelier from './components/Hotelier/Hotelier'
import TopMenu from "./components/TopMenu/TopMenu";

import './style.scss'

render (
	<Provider store={store}>
		<Router>
			<div>
				<TopMenu/>
				<Route exact path="/" component={App} />
				<Route path="/booking" component={Booking} />
				<Route path="/client" component={Client} />
				<Route path="/hotelier" component={Hotelier} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)

