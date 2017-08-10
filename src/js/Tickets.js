//售票轮播图

import React from 'react';
import 'babel-polyfill';
import {MainWrap, MainWrapBg} from './Utils';
import {MovCarousel} from './CarouselFront';
import {Button1} from './Buttons';

function Tickets(props) {
	const titleStyle = {
		fontSize: '26px',
		lineHeight: '54px',
		color: '#333',
		textAlign: 'center',
		borderBottom: '1px solid #e6e6e6'
	};

	return (
		<MainWrapBg height="472px"
					className="tickets"
					bg="linear-gradient(#fff, #f5f5f5)">
			<MainWrap>
				<h3 style={titleStyle}>正在上映</h3>
				<MovCarousel/>
				<Button1 href="#"/>
			</MainWrap>
		</MainWrapBg>
	);
}

export {Tickets as default};
