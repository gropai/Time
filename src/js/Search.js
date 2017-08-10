//搜索框部分

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {MainWrap} from './Utils';

//首页顶部搜索区背景
function SearchBg(props) {
	const wrapStyle = props.wrapStyle ||
		              {
						  display: 'block',
		              	  width: '100%',
						  height: '90px',
						  background: `url(${props.url}) no-repeat center/cover`,
						  position: 'relative'
					  };

	return (
		<a href={props.href} style={wrapStyle}></a>
	);
}

//首页顶部搜索区主体
class SearchCon extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			info: [
				{title:'全部', defaultText:'搜索电影、影人、影院、商品、新闻'},
				{title:'电影', defaultText:'请输入电影关键词'},
				{title:'影人', defaultText:'请输入影人关键词'},
				{title:'影院', defaultText:'请输入影院关键词'},
				{title:'商品', defaultText:'按名称、电影、品牌等搜索商品'},
				{title:'新闻', defaultText:'请输入新闻关键词'}
			],
			index: 0,
			hide: true,
			hideTimer: null,
			inputText: '',
			useDefaultText: true,
			focus: false
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	//显示隐藏菜单
	handleMouseEnter(){
		clearTimeout(this.state.hideTimer);
		this.setState({
			hide: false
		});
	}

	//隐藏隐藏菜单
	handleMouseLeave(){
		const mouseLeave = function () {
			this.setState({
				hide: true
			});
		}.bind(this);

		this.state.hideTimer = setTimeout(mouseLeave,200);
	}

	//获取被点击的隐藏菜单项目的index，隐藏菜单，
	//提示需要使用默认文本框文字
	handleClick(e){
		this.setState({
			index: e.target.dataset.index,
			hide: true,
			useDefaultText: true
		});
	}

	//input输入框更新时同步value的变化
	handleChange(e){
		this.setState({
			inputText: e.target.value
		});
	}

	//input输入框获得focus时改变value，更改focus状态
	handleFocus(e){
		const defaultText = this.state.info[this.state.index].defaultText;
		if(e.target.value === defaultText){
			this.setState({
				inputText: '',
				useDefaultText: false,
				focus: true
			});
		}
	}

	//input输入框失去focus时确定是否需要使用
	handleBlur(e){
		if(e.target.value === ''){
			this.setState({
				useDefaultText: true,
				focus: false
			});
		}
	}

	render(){
		const info = this.state.info;
		const index = this.state.index;
		const title = info[index].title;
		const text = this.state.useDefaultText ? info[index].defaultText : this.state.inputText;
		const focus = this.state.focus;

		const wrapStyle = {
			width: '500px',
			height: '38px',
			border: '1px solid #e0e0e0',
			borderRadius: '22px',
			position: 'absolute',
			left: '50%',
			top: '50%',
			marginLeft: '-250px',
			marginTop: '-19px'
		};

		return (
			<div style={wrapStyle}>
				<Title onMouseEnter={this.handleMouseEnter}
					   onMouseLeave={this.handleMouseLeave}
				>
					{title}
				</Title>
				<HiddenMenu info={this.state.info}
							hide={this.state.hide}
							onMouseEnter={this.handleMouseEnter}
							onMouseLeave={this.handleMouseLeave}
							onClick={this.handleClick}
				/>
				<Input text={text}
					   onChange={this.handleChange}
					   onFocus={this.handleFocus}
					   onBlur={this.handleBlur}
				/>
				<Button focus={focus} />
			</div>
		);
	}
}

//首页顶部搜索区搜索标题
class Title extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const wrapStyle = {
			float: 'left',
			width: '83px',
			height: '38px',
			lineHeight: '38px',
			position: 'relative'
		};
		const textStyle = {
			fontSize: '14px',
			color: '#999',
			marginLeft: '25px'
		};
		const arrowStyle = {
			display: 'inline-block',
			width: '11px',
			height: '7px',
			background: `url(${require('../../images/head.png')}) no-repeat -152px 0`,
			marginLeft: '8px'
		};
		const lineStyle = {
			width: '1px',
			height: '14px',
			background: '#dbdbdb',
			position: 'absolute',
			right: '0',
			top: '13px'
		};

		return (
			<div style={wrapStyle}
				 onMouseEnter={this.props.onMouseEnter}
				 onMouseLeave={this.props.onMouseLeave}
			>
				<a href="javascript:;">
					<span style={textStyle}>{this.props.children}</span>
					<i style={arrowStyle}></i>
					<i style={lineStyle}></i>
				</a>
			</div>
		);
	}
}

//首页顶部搜索区隐藏菜单
class HiddenMenu extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const hide = this.props.hide;
		const info = this.props.info;

		const wrapStyle = {
			border: '1px solid #eee',
			position: 'absolute',
			left: 0,
			top: '42px',
			zIndex: '100',
			display: hide ? 'none' : 'block'
		};

		let items = [];
		info.forEach((val, index) => {
			const lastIndex = info.length - 1;
			const item = (
				<MenuItem key={index + val.title}
						  index={index}
					      last={index == lastIndex}
						  onClick={this.props.onClick}
				>
					{val.title}
				</MenuItem>
			);

			items.push(item);
		});

		return (
			<div style={wrapStyle}
				 onMouseEnter={this.props.onMouseEnter}
				 onMouseLeave={this.props.onMouseLeave}
			>
				{items}
			</div>
		);
	}
}

//首页顶部搜索区隐藏菜单项目
class MenuItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			hover: false
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	//鼠标移入时改变状态
	handleMouseEnter(){
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
		const hover = this.state.hover;
		const last = this.props.last;
		const itemStyle = {
			width: '95px',
			height: '33px',
			lineHeight: '33px',
			textAlign: 'center',
			fontSize: '14px',
			color: hover ? '#267dd7' : '#333',
			background: hover ? '#e5f2fc' : '#fff',
			cursor: 'pointer',
			borderBottom: last ? 'none' : '1px solid #eee'
		};

		return (
			<div data-index={this.props.index}
				 style={itemStyle}
				 onMouseEnter={this.handleMouseEnter}
				 onMouseLeave={this.handleMouseLeave}
				 onClick={this.props.onClick}
			>
				{this.props.children}
			</div>
		);
	}
}

//首页顶部搜索区文本框
class Input extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const text = this.props.text;
		const inputStyle = {
			float: 'left',
			fontSize: '14px',
			color: '#a5a5a5',
			height: '38px',
			width: '356px',
			textIndent: '17px',
			border: 'none',
			outline: '0'
		};

		return (
			<input type="text"
				   value={text}
				   style={inputStyle}
				   onChange={this.props.onChange}
				   onFocus={this.props.onFocus}
				   onBlur={this.props.onBlur}
			/>
		);
	}
}

class Button extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			hover: false
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter(){
		this.setState({
			hover: true
		});
	}

	handleMouseLeave(){
		this.setState({
			hover: false
		});
	}

	render(){
		const hover = this.state.hover;
		const focus = this.props.focus;
		const bgActive = '#1e7dd7';
		const bgInactive = '#fff';
		const iconActive = `url(${require('../../images/head.png')}) no-repeat -134px -45px`;
		const iconInactive = `url(${require('../../images/head.png')}) no-repeat -115px -45px`;
		const btnStyle = {
			float: 'left',
			width: '54px',
			height: '32px',
			margin: '3px 0 0 0',
			background: hover || focus ? bgActive : bgInactive,
			borderRadius: '22px',
			position: 'relative',
			cursor: 'pointer'
		};
		const iconStyle = {
			display: 'block',
			width: '19px',
			height: '19px',
			background: hover || focus ? iconActive : iconInactive,
			position: 'absolute',
			top: '50%',
			left: '50%',
			margin: '-9px 0 0 -9px'
		};

		return (
			<div style={btnStyle}
				 onMouseEnter={this.handleMouseEnter}
				 onMouseLeave={this.handleMouseLeave}
			>
				<i style={iconStyle}></i>
			</div>
		);
	}
}



//首页顶部搜索区
function SearchFront(props) {

	return (
		<MainWrap marginTop="60px">
			<SearchBg url={require("../../images/search-wrap.jpg")} href="#" />
			<SearchCon/>
		</MainWrap>
	);
}



export {SearchFront as default};
