import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route , Link } from 'react-router-dom';
import Banner from './../Banner';

const Home = () => {

	return (
		<div>
            <Banner
	  			backgroundImage="url(assets/img/bg-gift.jpg)"
	  			title="From Home"
	  			subtitle="Many Options."
	  		/>

            <h1>Hello From Home!</h1>
        </div>
	);
};

export default Home;