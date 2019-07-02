import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route , Link , withRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Navbar from './components/NavBar/';
import Login from './components/Login';
import Signup from './components/Signup/';
import Welcome from './components/Welcome/';
import Home from './components/Home/';
import CreateArticle from './components/CreateArticle/';
import SingleArticle from './components/SingleArticle';
import Footer from './components/Footer/';

const Main = withRouter(({location}) => {
	return (
		<div>
			{
				location.pathname !== '/login' && location.pathname !== '/Signup' &&
				<Navbar />
			}			

			<Route exact path="/" component={Welcome} />
			<Route path="/home" component={Home} />
			<Route path="/Login" component={Login} />
			<Route path="/Signup" component={Signup} />
			{/*<Route path="/about" component={About} />*/}
			<Route path="/articles/create" component={CreateArticle} />
			<Route path="/article/:slug" component={SingleArticle}/>
			
			{
				location.pathname !== '/login' && location.pathname !== '/Signup' &&
				<Footer />
			}
		</div>
	);
});

ReactDOM.render(

	<BrowserRouter >
		<Main/>		
	</BrowserRouter >

	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
