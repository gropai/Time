//特色榜单

import React from 'react';
import 'babel-polyfill';

import {MainWrap, TitleLeft, TitleCenter, TitleRight, Grade} from './Utils';

function Billboard(props){
	const leftWrapStyle = {
		float: 'left',
		width: '420px'
	};

	const centerWrapStyle = {
		float: 'left',
		width: '420px',
		margin: '0 20px 0 10px'
	};

	const rightWrapStyle = {
		float: 'right',
		width: '303px'
	};
	const rightBodyStyle = {
		borderTop: '1px solid #e5e5e5',
		paddingTop: '20px'
	};
	const movieUrl1 = require('../../images/billboard/13.jpg');
	const movieUrl2 = require('../../images/billboard/14.jpg');
	const movieUrl3 = require('../../images/billboard/15.jpg');

	return (
		<MainWrap className="billboard clear">
			<div className="left clear" style={leftWrapStyle}>
				<TitleLeft>特色榜单</TitleLeft>
				<BillboardItem url1={require('../../images/billboard/1.jpg')}
							   url2={require('../../images/billboard/2.jpg')}
							   url3={require('../../images/billboard/3.jpg')}
							   href="#"
							   number="15"
							   title="新片热门推荐"
				/>
				<BillboardItem url1={require('../../images/billboard/4.jpg')}
							   url2={require('../../images/billboard/5.jpg')}
							   url3={require('../../images/billboard/6.jpg')}
							   href="#"
							   number="100"
							   title="《帝国》杂志新百大佳片"
				/>
			</div>
			<div className="center clear" style={centerWrapStyle}>
				<TitleCenter />
				<BillboardItem url1={require('../../images/billboard/7.jpg')}
							   url2={require('../../images/billboard/8.jpg')}
							   url3={require('../../images/billboard/9.jpg')}
							   href="#"
							   number="20"
							   title="Indie Wire评新世纪恐怖片TOP20"
				/>
				<BillboardItem url1={require('../../images/billboard/10.jpg')}
							   url2={require('../../images/billboard/11.jpg')}
							   url3={require('../../images/billboard/12.jpg')}
							   href="#"
							   number="100"
							   title="全球影史票房TOP100"
				/>
			</div>
			<div className="right" style={rightWrapStyle}>
				<TitleRight fontWeight="normal">电影票房</TitleRight>
				<div style={rightBodyStyle}>
					<RightItem url={movieUrl1} rank="01" href="#" hasGrade={true} grade="7.3"
							   title="战狼2" boxOffice="2979.0万" total="12.84亿" unit="元"
					/>
					<RightItem url={movieUrl2} rank="02" href="#"
							   title="建军大业" boxOffice="829.3万" total="2.36亿" unit="元"
					/>
					<RightItem url={movieUrl3} rank="03" href="#" hasGrade={true} grade="7.3"
							   title="神偷奶爸3" boxOffice="77.4万" total="9.83亿" unit="元"
					/>
					<TitleCenter lineHeight="14px" />
				</div>

			</div>
		</MainWrap>
	);
}

function BillboardItem(props){
	const itemWrapStyle = {
		marginBottom: '15px'
	};

	const picWrapStyle = {
		width: '420px',
		height: '200px',
		position: 'relative'
	};
	const linkStyle = {
		position: 'absolute',
		width: '100%',
		height: '100%'
	};
	const picStyle1 = {
		width: '280px',
		height: '200px',
		position: 'absolute',
		left: 0,
		top: 0,
		background: `url(${props.url1}) no-repeat center/100% 100%`
	};

	const picStyle2 = {
		width: '138px',
		height: '99px',
		position: 'absolute',
		right: 0,
		top: 0,
		background: `url(${props.url2}) no-repeat center/100% 100%`
	};
	const picStyle3 = {
		width: '138px',
		height: '99px',
		position: 'absolute',
		right: 0,
		bottom: 0,
		background: `url(${props.url3}) no-repeat center/100% 100%`
	};
	const numberStyle = {
		fontSize: '24px'
	};

	const titleStyle = {
		fontSize: '16px',
		lineHeight: '36px',
		color: '#333',
		fontWeight: 'bold'
	};

	return (
		<div className="billboard-item" style={itemWrapStyle}>
			<div style={picWrapStyle}>
				<div style={picStyle1}>
					<a href={props.href} style={linkStyle}></a>
				</div>
				<div style={picStyle2}>
					<a href={props.href} style={linkStyle}></a>
				</div>
				<div style={picStyle3} className="pic3">
					<div className="mask"><span style={numberStyle}>{props.number}</span>部电影&gt;</div>
					<a href={props.href} style={linkStyle}></a>
				</div>
			</div>
			<h4 style={titleStyle}><a href={props.href} className="hov-color">{props.title}</a></h4>
		</div>

	);
}

function RightItem(props) {
	const wrapStyle = {
		height: '120px',
		margin: '0 0 22px 0'
	};

	const rankStyle = {
		float: 'left',
		fontSize: '26px',
		fontWeight: 'bold',
		color: '#ddd',
		position: 'relative',
		top: '-7px'
	};

	const picStyle = {
		float: 'left',
		margin: '0 10px 0 10px',
		width: '80px',
		height: '120px',
		background: `url(${props.url}) no-repeat center/80px 120px`,
		position: 'relative'
	};

	const descStyle = {
		float: 'left'
	};
	const titleStyle = {
		fontSize: '16px',
		color: '#333',
		lineHeight: '30px',
		marginBottom: '10px'
	};
	const textStyle = {
		fontSize: '14px',
		color: '#888',
		lineHeight: '20px'
	};

	return (
		<div style={wrapStyle}>
			<div style={rankStyle}>{props.rank}</div>
			<a href={props.href} style={picStyle}>
				{props.hasGrade && <Grade pos={{right:0, bottom:0}}>{props.grade}</Grade>}
			</a>
			<div style={descStyle}>
				<h4 style={titleStyle}><a href={props.href} className="hov-color">{props.title}</a></h4>
				<p style={textStyle}>日票房：{props.boxOffice}</p>
				<p style={textStyle}>累计：{props.total}</p>
				<p style={textStyle}>单位：{props.unit}</p>
			</div>
		</div>
	);
}

export {Billboard as default};