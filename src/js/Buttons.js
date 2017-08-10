//包含各种按钮模块

import React from 'react';

function Button1(props) {
	const btnStyle = {
		width: '158px',
		height: '35px',
		border: '1px solid #666',
		margin: '11px auto',
		lineHeight: '35px',
		textAlign: 'center',
		fontSize: '14px',
		borderRadius: '20px',
		cursor: 'pointer'
	};

	const linkStyle = {
		display: 'block',
		width: '100%',
		height: '100%'
	};

	return (
		<div className="btn1" style={btnStyle}>
			<a href={props.href} style={linkStyle}>查看更多</a>
		</div>
	);
}

function ButtonBuy(props) {
	const btnStyle = {
		width: props.width,
		height: props.height,
		textAlign: 'center',
		lineHeight: props.height,
		fontSize: '14px',
		color: '#fff',
		background: '#1e7dd7',
		borderRadius: '15px',
		position: 'absolute',
		left: 0,
		bottom: 0
	};

	return (
		<a href={props.href} style={btnStyle}>选座购票</a>
	);
}


export {Button1, ButtonBuy};
