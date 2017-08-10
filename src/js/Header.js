//header部分

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const headerStyle = {
			width: '100%',
			height: 60,
			backgroundColor: '#1e2736',
			position: 'fixed',
			left: 0,
			top: 0,
			zIndex: 100
		};

		const leftItemInfo = [
			{name:'首页', href:'#'},
			{name:'购票', href:'#'},
			{name:'正版商城', href:'#'},
			{name:'新闻', href:'#'},
			{name:'直播', href:'#'},
			{name:'发现', href:'#'},
			{name:'社区', href:'#'},
		];

		return (
			<header style={headerStyle} className="header">
				<LeftList numOfItems="7" leftItemInfo={leftItemInfo}/>
				<Icon href="#" />
				<RightList />
			</header>
		);
	}
}

//左侧列表
class LeftList extends React.Component{
	constructor(props){
		super(props);

		//记录list item的active状态
		let activeStates = [];
		const len = this.props.numOfItems;
		for(let i=0; i<len; i++){
			activeStates.push(false);
		}
		activeStates[0] = true;

		this.state = {
			activeStates
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	//点击选项时改变active状态
	handleItemClick(e){
		const activeIndex = parseInt(e.currentTarget.dataset.index);

		const newActiveStates = this.state.activeStates.map((val, index) => {
			return index === activeIndex;
		});
		this.setState({
			activeStates: newActiveStates
		});
	}

	render(){
		const listStyle = {
			float: 'left',
			marginLeft: '20px'
		};
		const leftItemInfo = this.props.leftItemInfo;
		const listItems = [];

		leftItemInfo.forEach((val, index) => {
			let item = <LeftListItem index={index}
									 key={index + val.name}
									 href={val.href}
									 onClick={this.handleItemClick}
									 active={this.state.activeStates[index]}
					   >
							{val.name}
					   </LeftListItem>;
			listItems.push(item);
		});

		return (
			<ul style={listStyle} className="left-list">
				{listItems}
			</ul>
		);
	}
}

//左侧列表项目
class LeftListItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			hover: false
		};

		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	//鼠标移入时改变项目状态
	handleMouseOver(){
		this.setState({
			hover: true
		});
	}

	//鼠标移出时恢复状态
	handleMouseLeave(){
		this.setState({
			hover: false
		});
	}

	render(){
		const active = this.props.active;
		const hover = this.state.hover;
		const liStyle = {
			float: 'left',
			marginRight: '30px'
		};
		const aStyle = {
			display: 'block',
			lineHeight: '60px',
			position: 'relative',
			color: active || hover ? '#fff' : '#c8c8c8',
			fontSize: '14px'
		};
		const iStyle = {
			width: 0,
			height: 0,
			border: '7px solid transparent',
			borderBottom: '5px solid #fff',
			position: 'absolute',
			bottom: 0,
			left: '50%',
			marginLeft: '-7px',
			display: active ? 'block' : 'none'
		};
		return (
			<li data-index={this.props.index}
				style={liStyle}
				onClick={this.props.onClick}
				onMouseOver={this.handleMouseOver}
				onMouseLeave={this.handleMouseLeave}
			>
				<a href={this.props.href} style={aStyle}>
					{this.props.children}
					<i style={iStyle}></i>
				</a>
			</li>
		);
	}
}

//中央图标
function Icon(props) {
	const img = require('../../images/head.png');
	const divStyle = {
		position: 'absolute',
		left: '894px',
		top: '12px'
	};
	const aStyle = {
		display: 'block',
		width: '117px',
		height: '36px',
		background: `url(${img}) no-repeat 0 -315px`
	};

	return (
		<div style={divStyle}>
			<a href={props.href} style={aStyle}></a>
		</div>
	);
}

//右侧列表
class RightList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			hoverStates: [false, false]
		};

		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	//鼠标移入时改变隐藏状态
	handleMouseOver(e){
		const hoverIndex = parseInt(e.currentTarget.dataset.index);
		const newHoverStates = this.state.hoverStates.map((val, index)=>{
			return index == hoverIndex;
		});
		this.setState({
			hoverStates: newHoverStates
		});
	}

	//鼠标移出时恢复隐藏状态
	handleMouseOut(){
		this.setState({
			hoverStates: [false, false]
		});
	}

	render(){
		const hoverStates = this.state.hoverStates;
		const listStyle = {
			float: 'right',
			marginRight: '20px',
			position: 'relative'
		};
		const positions = [
			{
				left: '-20px',
				top: '60px'
			},
			{
				right: 0,
				top: '60px'
			}
		];

		return (
			<div style={listStyle} className="right-list">
				<RightListItem index="0"
							   onMouseOver={this.handleMouseOver}
							   onMouseOut={this.handleMouseOut}
				>
					<AppDownload />
				</RightListItem>
				<RightListItem><Text href="#">登陆</Text></RightListItem>
				<RightListItem><Text href="#">注册</Text></RightListItem>
				<RightListItem index="1"
							   onMouseOver={this.handleMouseOver}
							   onMouseOut={this.handleMouseOut}
				>
					<Cart href="#" />
				</RightListItem>
				<RightHide outHover={hoverStates[0]} pos={positions[0]}>
					<QRCode href="#" />
				</RightHide>
				<RightHide outHover={hoverStates[1]} pos={positions[1]}>
					<CartPanel />
				</RightHide>
			</div>
		);
	}
}

//右侧列表项目
class RightListItem extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const itemStyle = {
			float: 'left'
		};

		return (
			<div style={itemStyle}
				 data-index={this.props.index}
				 onMouseOver={this.props.onMouseOver}
				 onMouseOut={this.props.onMouseOut}
			>
				{this.props.children}
			</div>
		);
	}
}

//右侧列表第一项
function AppDownload(props){
	const img = require('../../images/head.png');
	const boxStyle = {
		width: 120,
		height: 60,
		border: '1px solid #303947',
		borderTop: 'none',
		borderBottom: 'none',
		lineHeight: '60px',
		textAlign: 'center',
		fontSize: '14px',
		color: '#fff',
		cursor: 'default'
	};
	const iconStyle = {
		display: 'inline-block',
		width: 13,
		height: 20,
		background: `url(${img}) no-repeat -54px -45px`,
		position: 'relative',
		top: '5px',
		marginRight: '4px'
	};
	const arrowStyle = {
		display: 'inline-block',
		width: 12,
		height: 6,
		background: `url(${img}) no-repeat -153px 0`,
		position: 'relative',
		top: '-3px',
		marginLeft: '3px'
	};

	return (
		<div style={boxStyle}>
			<i style={iconStyle}></i>App下载<i style={arrowStyle}></i>
		</div>
	);
}

//右侧列表文字项
class Text extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			hover: false
		};

		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	//移入时改变状态
	handleMouseOver(){
		this.setState({
			hover: true
		});
	}

	//移出时恢复状态
	handleMouseOut(){
		this.setState({
			hover: false
		});
	}

	render(){
		const hover = this.state.hover;
		const aStyle = {
			display: 'block',
			width: 86,
			height: 60,
			lineHeight: '60px',
			textAlign: 'center',
			color: hover ? '#fff' : '#c9c9c9',
			fontSize: '14px'
		};

		return (
			<div onMouseOver={this.handleMouseOver}
				 onMouseOut={this.handleMouseOut}
			>
				<a href={this.props.href}
				   style={aStyle}>{this.props.children}</a>
			</div>
		);
	}
}

//右侧列表购物车
function Cart(props) {
	const boxStyle = {
		display: 'block',
		width: 62,
		height: 62,
		background: '#e83729',
		position: 'relative'
	};

	const iconStyle = {
		width: 26,
		height: 20,
		background: `url(${require('../../images/head.png')}) no-repeat 0 -45px`,
		position: 'absolute',
		left: '50%',
		top: '50%',
		margin: '-10px 0 0 -13px'
	};

	return (
		<a href={props.href} style={boxStyle}>
			<i style={iconStyle}></i>
		</a>
	);
}

//右侧隐藏面板wrap
class RightHide extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			hover: false
		};

		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	//移入时显示
	handleMouseOver(){
		this.setState({
			hover: true
		});
	}

	//移出时隐藏
	handleMouseOut(){
		this.setState({
			hover: false
		});
	}

	render(){
		const hover = this.state.hover;
		const outHover = this.props.outHover;
		const hideStyle = Object.assign({
			display: hover || outHover ? 'block' : 'none',
			position: 'absolute'
		}, this.props.pos);

		return (
			<div style={hideStyle}
				 onMouseOver={this.handleMouseOver}
				 onMouseOut={this.handleMouseOut}
			>
				{this.props.children}
			</div>
		);
	}
}

//二维码
function QRCode(props) {
	const divStyle = {
		position: 'relative',
		boxShadow: '0 0 3px #000'
	};
	const aStyle = {
		display: 'block',
		width: 170,
		height: 211,
		background: `url(${require('../../images/qrcode.png')}) no-repeat center/cover`
	};
	const iStyle = {
		display: 'block',
		border: '7px solid transparent',
		borderBottom: '5px solid #fff',
		position: 'absolute',
		left: '50%',
		top: '-12px',
		marginLeft: '-7px'
	};

	return (
		<div style={divStyle}>
			<i style={iStyle}></i>
			<a href={props.href} style={aStyle}></a>
		</div>

	);
}

//购物车面板
function CartPanel(props) {
	const boxStyle = {
		width: 320,
		height: 200,
		background: '#fff',
		boxShadow: '2px 2px 2px #ccc',
		borderTop: '2px solid red'
	};
	const textStyle = {
		fontSize: '14px',
		color: '#ccc',
		marginTop: '80px',
		textAlign: 'center'
	};

	return (
		<div style={boxStyle}>
			<p style={textStyle}>您的购物车还是空的，赶快选购吧</p>
		</div>
	);
}

export {Header as default};































