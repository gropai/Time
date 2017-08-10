//本模块包含了公用的组件、方法、class等

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

//网页主题部分wrap的背景
function MainWrapBg(props){
	const className = props.className || '';
	const wrapBgStyle = {
		margin: '0 auto',
		width: props.width || '100%',
		height: props.height || 'auto',
		marginTop: props.marginTop || 0,
		marginBottom: props.marginBottom || 0,
		position: props.position || 'relative',
		background: props.bg || 'transparent'
	};

	return (
		<div style={wrapBgStyle} className={className}>{props.children}</div>
	);
}

//网页主体部分的wrap
function MainWrap(props) {
	const className = props.className || '';
	const wrapStyle = {
		margin: '0 auto',
		width: props.width || 1200,
		height: props.height || 'auto',
		marginTop: props.marginTop || 0,
		marginBottom: props.marginBottom || 0,
		padding: props.padding || '0 0 0 0',
		position: props.position || 'relative',
		overflow: props.overflow || 'visible'
	};

	return (
		<div style={wrapStyle} className={className}>{props.children}</div>
	);
}

//每个section的标题部分
class SecTitle extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const titleStyle = {
			fontSize: '26px',
			lineHeight: '66px',
			textAlign: 'center',
			color: '#333'
		};
		const boxStyle = {
			width: '100%',
			height: '37px',
			textAlign: 'center',
			position: 'relative'
		};
		const lineStyle = {
			width: '100%',
			height: '1px',
			background: '#e5e5e5',
			position: 'absolute',
			top: '9px'
		};


		const items = this.props.children.map((val, index, arr) => {
			const itemStyle = {
				display: 'inline-block',
				fontSize: '16px',
				lineHeight: '16px',
				background: '#fff',
				padding: '0 24px',
				borderRight: index === arr.length - 1 ? 'none' : '1px solid #e5e5e5',
				position: 'relative'
			};

			return (
				<div style={itemStyle} key={index}>
					<a href={val.href}>{val.item}</a>
				</div>
			);
		});

		return (
			<MainWrap marginTop="36px"
					  height="103px"
					  className="secTitle"
			>
				<h4 style={titleStyle}>{this.props.title}</h4>
				<div style={boxStyle}>
					<div style={lineStyle}></div>
					{items}
				</div>
			</MainWrap>
		);
	}
}

//今日热点和全球拾趣内容区的图片
class ConPic extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const linkStyle = Object.assign({
			display: 'block',
			position: 'relative'
		},this.props.style);
		const imgStyle = {
			width: '100%',
			height: '100%',
			position: 'absolute'
		};
		return (
			<a href={this.props.href}
			   style={linkStyle}
			   className="con-pic"
			>
				<img src={this.props.src} alt=""
					 style={imgStyle}
				/>
				{this.props.children}
			</a>
		);

	}
}

//今日热点和全球拾趣内容区图片中的播放按钮
class PlayIconWhite40 extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const bgSrc = require('../../images/index24.png');
		const iconStyle = Object.assign({
			display: 'block',
			width: '40px',
			height: '40px',
			background: `url(${bgSrc}) no-repeat 0 -47px`,
			position: 'absolute'
		},this.props.style);

		return (
			<i style={iconStyle}
			   className="play-icon"
			></i>
		);
	}
}

//今日热点和全球拾趣内容区的标题
function ConTitle(props) {
	const h4Style = {
		fontSize: '16px',
		fontWeight: 'bold',
		lineHeight: '26px'
	};

	return (
		<h4 style={h4Style} className="con-title">
			<a href={props.href}>{props.children}</a>
		</h4>
	);
}

//今日热点和全球拾趣内容区标题下的文字介绍
function ConDesc(props) {
	const style = {
		color: '#888',
		fontSize: '14px',
		lineHeight: '24px'
	};

	return (
		<a href={props.href} style={style}>{props.children}</a>
	);
}

//评分标签
function Grade(props) {
	let gradeStyle = {
		display: 'block',
		width: '32px',
		height: '20px',
		fontSize: '12px',
		background: '#74ab34',
		color: '#fff',
		textAlign: 'center',
		lineHeight: '20px',
		position: 'absolute'
	};

	gradeStyle = Object.assign(gradeStyle, props.pos);

	return (
		<i style={gradeStyle}>{props.children}</i>
	);
}

//时光精选、特色榜单、热门影评的左侧标题
function TitleLeft(props) {
	const titleStyle = {
		fontSize: '23px',
		lineHeight: '85px',
		color: props.color || '#333'
	};

	return (
		<h4 style={titleStyle}>{props.children}</h4>
	);
}

//时光精选、特色榜单、热门影评的中间标题
function TitleCenter(props) {
	const titleStyle = {
		fontSize: '14px',
		lineHeight: props.lineHeight || '85px',
		color: props.color || '#333',
		textAlign: 'right',
		position: 'relative',
		top: '10px'
	};

	return (
		<h4 style={titleStyle}><a href="#" className="hov-color">{props.children || '更多>'}</a></h4>
	);
}

//时光精选、特色榜单、热门影评的右侧标题
function TitleRight(props) {
	const titleStyle = {
		fontSize: '23px',
		lineHeight: '85px',
		color: props.color || '#333',
		fontWeight: props.fontWeight || 'bold',
		textAlign: 'center'
	};

	return (
		<h4 style={titleStyle}>{props.children}</h4>
	);
}
export {
	MainWrapBg,
	MainWrap,
	SecTitle,
	ConPic,
	PlayIconWhite40,
	ConTitle,
	ConDesc,
	Grade,
	TitleLeft,
	TitleCenter,
	TitleRight
};
