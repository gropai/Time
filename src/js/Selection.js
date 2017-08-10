//时光精选

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import {SecTitle, MainWrapBg, MainWrap, TitleLeft, TitleCenter, TitleRight} from './Utils';

class Selection extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const title = '时光精选';
		const titleItems = [
			{item:'时光电影TOP100', href:'#'},
			{item:'观影指南', href:'#'},
			{item:'时光佳片', href:'#'},
			{item:'特约影评', href:'#'},
			{item:'卡片大富翁', href:'#'},
			{item:'特约猜猜猜', href:'#'}
		];

		const leftWrapStyle = {
			float: 'left',
			width: '618px',
			height: '100%'
		};
		const leftUrl = require('../../images/selection/1.jpg');
		const leftLink = '#';
		const leftTitle = '《侠盗联盟》沙溢特辑 演绎“土豪养成记”';
		const leftTitleStyle = {
			fontSize: '24px',
			lineHeight: '24px',
			color: '#fff',
			margin: '20px 0 0 0'
		};
		const leftInfo = '2017.8.11 中国上映';
		const leftInfoStyle = {
			fontSize: '16px',
			lineHeight: '42px',
			color: '#fff'
		};

		const centerWrapStyle = {
			float: 'left',
			width: '230px',
			height: '100%',
			margin: '0 20px 0 12px'
		};
		const centerPic1 = {
			url: require('../../images/selection/2.jpg'),
			href: '#',
			title: '陀螺“水的形状”首支预告',
			info: '2017.12.8 美国上映'
		};
		const centerPic2 = {
			url: require('../../images/selection/3.jpg'),
			href: '#',
			title: '《悟空传》宣传曲',
			info: '2017.7.13 中国上映'
		};
		const centerPic3 = {
			url: require('../../images/selection/4.jpg'),
			href: '#',
			title: '《雪人》首款预告',
			info: '2017.10.20 美国上映'
		};

		const rightWrapStyle = {
			float: 'left',
			width: '320px',
			height: '100%'
		};
		const rightHrefs = {
			pic: '#',
			mov1: '#',
			mov2: '#',
			mov3: '#',
			mov4: '#'
		};
		const rightPicStyle = {
			display: 'block',
			width: '100%',
			height: '175px',
			background: `url(${require('../../images/selection/5.jpg')}) no-repeat center/contain`
		};
		const rankTitleBgStyle = {
			background: '#fff',
			height: '45px',
			position: 'relative'
		};
		const rankTitle = {
			fontSize: '14px',
			fontWeight: 'bold',
			color: '#333',
			position: 'absolute',
			top: '15px'
		};
		const rankTitle1 = Object.assign({}, rankTitle, {left: '18px'});
		const rankTitle2 = Object.assign({}, rankTitle, {left: '130px'});
		const rankBg1 = {
			height: '45px',
			position: 'relative',
			background: '#f5f5f5'
		};
		const rankBg2 = {
			height: '45px',
			position: 'relative',
			background: '#fff'
		};
		const movieStyle = {
			fontSize: '14px',
			color: '#333',
			position: 'absolute',
			left: '18px',
			top: '15px',
			width: '104px'
		};
		const rankStyle = {
			fontSize: '14px',
			color: '#61ac36',
			position: 'absolute',
			left: '156px',
			top: '15px'
		};
		const btn1Style = {
			width: '72px',
			height: '24px',
			lineHeight: '24px',
			textAlign: 'center',
			background: '#61ac36',
			color: '#fff',
			fontSize: '12px',
			position: 'absolute',
			right: '20px',
			top: '12px',
			borderRadius: '20px'
		};
		const btn2Style = {
			width: '70px',
			height: '22px',
			lineHeight: '22px',
			textAlign: 'center',
			background: '#fff',
			color: '#888',
			fontSize: '12px',
			position: 'absolute',
			right: '20px',
			top: '12px',
			borderRadius: '20px',
			border: '1px solid #888'
		};
		const moreStyle = {
			fontSize: '14px',
			color: '#333',
			position: 'absolute',
			top: '15px',
			right: '15px'
		};
		const movie1 = {
			name: '战狼2',
			href: '#'
		};
		const movie2 = {
			name: '建军大业',
			href: '#'
		};
		const movie3 = {
			name: '三生三世十里桃花',
			href: '#'
		};
		const movie4 = {
			name: '敦刻尔克',
			href: '#'
		};
		const more = {href: '#'};

		return (
			<div className="selection">
				<SecTitle title={title}>{titleItems}</SecTitle>
				<MainWrapBg height="555px" bg="#282828">
					<MainWrap height="100%">
						<div className="left" style={leftWrapStyle}>
							<TitleLeft color="#fff">新片预告</TitleLeft>
							<LeftPic url={leftUrl} href="#" />
							<h4 style={leftTitleStyle}><a href={leftLink}>{leftTitle}</a></h4>
							<p style={leftInfoStyle}>{leftInfo}</p>
						</div>
						<div className="center" style={centerWrapStyle}>
							<TitleCenter color="#fff"/>
							<CenterPic url={centerPic1.url} href={centerPic1.href} title={centerPic1.title} info={centerPic1.info}/>
							<CenterPic url={centerPic2.url} href={centerPic2.href} title={centerPic2.title} info={centerPic2.info}/>
							<CenterPic url={centerPic3.url} href={centerPic3.href} title={centerPic3.title} info={centerPic3.info}/>
						</div>
						<div className="right" style={rightWrapStyle}>
							<TitleRight color="#fff">观影指南</TitleRight>
							<a href={rightHrefs.pic} style={rightPicStyle}></a>
							<div style={rankTitleBgStyle}>
								<span style={rankTitle1}>影片名</span>
								<span style={rankTitle2}>时光热度排名</span>
							</div>
							<div style={rankBg1}>
								<a style={movieStyle} href={movie1.href} className="ellipsis">{movie1.name}</a>
								<span style={rankStyle}>01</span>
								<a href={movie1.href} style={btn1Style}>预售</a>
							</div>
							<div style={rankBg2}>
								<a style={movieStyle} href={movie2.href} className="ellipsis">{movie2.name}</a>
								<span style={rankStyle}>02</span>
								<a href={movie2.href} style={btn1Style}>预售</a>
							</div>
							<div style={rankBg1}>
								<a style={movieStyle} href={movie3.href} className="ellipsis">{movie3.name}</a>
								<span style={rankStyle}>03</span>
								<a href={movie3.href} style={btn1Style}>预售</a>
							</div>
							<div style={rankBg2}>
								<a style={movieStyle} href={movie4.href} className="ellipsis">{movie4.name}</a>
								<span style={rankStyle}>04</span>
								<a href={movie4.href} style={btn2Style}>想看</a>
							</div>
							<div style={rankBg2}>
								<a href={more.href} style={moreStyle}>更多&gt;</a>
							</div>
						</div>
					</MainWrap>
				</MainWrapBg>
			</div>


		);
	}
}

function LeftPic(props) {
	const linkStyle = {
		display: 'block',
		width: '100%',
		height: '376px',
		background: `url(${props.url}) no-repeat center/100% 100%`,
		position: 'relative'
	};

	return (
		<a href={props.href} style={linkStyle} className="left-pic pic">
			<PlayIconBig />
		</a>
	);
}

function CenterPic(props) {
	const linkStyle = {
		display: 'block',
		width: '100%',
		height: '140px',
		margin: '0 0 10px 0',
		background: `url(${props.url}) no-repeat center/100% 100%`,
		position: 'relative'
	};
	const titleStyle = {
		position: 'absolute',
		left: '50px',
		top: '100px',
		color: '#fff',
		fontSize: '14px'
	};
	const infoStyle = {
		fontSize: '12px',
		color: '#c8c8c8',
		position: 'absolute',
		left: '50px',
		top: '120px'
	};

	return (
		<a href={props.href} style={linkStyle} className="center-pic pic">
			<PlayIconSmall />
			<h4 style={titleStyle}>{props.title}</h4>
			<p style={infoStyle}>{props.info}</p>
		</a>
	);
}

function PlayIconBig(props){
	const iconStyle = {
		width: '56px',
		height: '56px',
		background: `url(${require('../../images/index24.png')}) no-repeat -80px -47px`,
		position: 'absolute',
		left: '20px',
		bottom: '15px'
	};

	return (
		<i className="play-icon" style={iconStyle}></i>
	);
}

function PlayIconSmall(props) {
	const iconStyle = {
		width: '32px',
		height: '32px',
		background: `url(${require('../../images/index24.png')}) no-repeat 0 -103px`,
		position: 'absolute',
		left: '7px',
		bottom: '10px'
	};

	return (
		<i className="play-icon" style={iconStyle}></i>
	);
}

export {Selection as default};
