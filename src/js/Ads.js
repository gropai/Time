//包含各种广告模块

import React from 'react';
import ReactDOM from 'react-dom';
import {MainWrap} from './Utils';


function Ad(props){
	const style = {
		width: '100%',
		height: parseInt(props.height) + 'px',
		display: 'block',
		background: `url(${props.url}) no-repeat center/cover`,
		margin: props.margin || '14px 0'
	};

	return (
		<a href={props.href} style={style}></a>
	);
}

function Ad1(props) {

	return (
		<MainWrap>
			<Ad height="90"
				url={require('../../images/ad/1.jpg')}
				href="#">
			</Ad>
		</MainWrap>

	);
}

function Ad2(props) {

	return (
		<MainWrap>
			<Ad height="90"
				url={require('../../images/ad/2.jpg')}
				href="#">
			</Ad>
		</MainWrap>

	);
}

function Ad3(props) {

	return (
		<MainWrap>
			<Ad height="90"
				url={require('../../images/ad/3.jpg')}
				href="#">
			</Ad>
		</MainWrap>

	);
}

function Ad4(props) {

	return (
		<MainWrap>
			<Ad height="90"
				url={require('../../images/ad/4.jpg')}
				href="#">
			</Ad>
		</MainWrap>

	);
}


export {Ad1, Ad2, Ad3, Ad4};


