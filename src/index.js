//import vendor
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

//import components
import './index.css'
import Header from './js/Header';
import Search from './js/Search';
import {TopCarousel} from './js/CarouselFront';
import Today from './js/Today';
import {Ad1, Ad2, Ad3, Ad4} from './js/Ads';
import Tickets from './js/Tickets';
import Mall from './js/Mall';
import Selection from './js/Selection';
import Globe from './js/Globe';
import Billboard from './js/Billboard';
import Review from './js/Review';
import Footer from './js/Footer';


ReactDOM.render(
	<div>
		<Header />
		<Search />
		<TopCarousel />
		<Today />
		<Ad1 />
		<Tickets />
		<Ad2 />
		<Mall />
		<Selection />
		<Globe />
		<Ad3 />
		<Billboard />
		<Review />
		<Ad4 />
		<Footer />
	</div>,
	document.getElementById('container')
);




