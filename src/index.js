import React from 'react'
import {render} from 'react-dom'
import { store } from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/App'
import Home from './components/Home/Home'
import Page from './components/Page/Page'
import SecondPage from './components/SecondPage/SecondPage'
import TopMenu from "./components/TopMenu/TopMenu";

import './style.scss'

render (
	<Provider store={store}>
		<Router>
			<div>
			    <TopMenu/>
				<Route exact path="/" component={App} />
				<Route path="/home" component={Home} />
				<Route path="/page" component={Page} />
				<Route path="/secondpage" component={SecondPage} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)
