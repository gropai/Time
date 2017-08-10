//商城部分

import React from 'react';
import 'babel-polyfill';
import {MainWrap, SecTitle} from './Utils';
import {MallCarousel} from './CarouselFront';
import {Button1} from './Buttons';

function Mall(props) {
	const title = '正版商城';
	const titleItems = [
		{item:'新品登陆', href:'#'},
		{item:'热销爆款', href:'#'},
		{item:'折扣促销', href:'#'},
		{item:'超前预售', href:'#'}
	];



	return (
		<MainWrap marginBottom="60px">
			<SecTitle title={title}>{titleItems}</SecTitle>
			<MallCarousel />
			<Display />
			<Button1 />
		</MainWrap>
	);
}

function Display(props) {
	const wrapStyle = {
		width: '100%',
		height: '142px',
		margin: '40px 0'
	};
	const item1 = ['抱枕靠垫', '创意文具', '水杯水壶', '更多'];
	const item2 = ['潮牌男装', '时尚女装', '服饰配件', '更多'];
	const item3 = ['模型公仔', '仿真收藏', '变形金刚', '更多'];
	const item4 = ['手机配件', '充电装备', '时尚U盘', '更多'];

	return (
		<div style={wrapStyle}>
			<DisplayItem title="居家日用" url={require('../../images/mall-carousel/display1.jpg')} href="#">
				{item1}
			</DisplayItem>
			<DisplayItem title="服装服饰" url={require('../../images/mall-carousel/display2.jpg')} href="#">
				{item2}
			</DisplayItem>
			<DisplayItem title="玩具模型" url={require('../../images/mall-carousel/display3.jpg')} href="#">
				{item3}
			</DisplayItem>
			<DisplayItem title="数码配件" url={require('../../images/mall-carousel/display4.jpg')} href="#" last="true">
				{item4}
			</DisplayItem>
		</div>
	);
}

function DisplayItem(props) {
	const itemWrapStyle = {
		width: '285px',
		height: '100%',
		float: 'left',
		marginRight: props.last === 'true' ? '0' : '20px',
		background: `url(${props.url}) no-repeat center/cover`,
		position: 'relative'
	};
	const titleStyle = {
		color: '#333',
		fontWeight: 'bold',
		fontSize: '14px',
		position: 'absolute',
		left: '154px',
		top: '37px'
	};
	const itemStyle = {
		fontSize: '12px',
		color: '#888',
		lineHeight: '22px',
		width: '114px',
		position: 'absolute',
		left: '154px',
		top: '64px'
	};

	return (
		<a href={props.href} style={itemWrapStyle}>
			<h4 style={titleStyle}>{props.title}</h4>
			<p style={itemStyle}>{props.children.join(' ')}</p>
		</a>
	);
}

export {Mall as default};
