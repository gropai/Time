//热门影评

import React from 'react';
import 'babel-polyfill';

import {MainWrap, TitleLeft, TitleCenter, TitleRight} from './Utils';
import {ReviewCarousel} from './CarouselFront';

function Review() {
	const leftWrapStyle = {
		width: '450px',
		float: 'left'
	};

	const centerWrapStyle = {
		float: 'left',
		width: '376px',
		margin: '0 0 0 34px'
	};
	const centerText1 = '两人最后吻别时周慕云曾经告诉她，如果能放下过去记得来找他，而周慕云和白玲再也回不到从前了。';
	const centerAuthor1 = 'dsrhrj';
	const centerMovie1 = '2046';
	const centerHref1 = '#';
	const centerUrl1 = require('../../images/review/4.jpg');
	const centerText2 = '在昏黄褪色的基调中，一对被婚姻捆绑的彼此仇视的夫妇，在孤独而漫长的异国之旅中，重新珍视彼此';
	const centerAuthor2 = 'teacat';
	const centerMovie2 = '面纱';
	const centerHref2 = '#';
	const centerUrl2 = require('../../images/review/5.jpg');
	const centerGrade2 = '8.0';
	const centerText3 = '本片同乐高大电影或者乐高蝙蝠侠的差距，不再是会不会用梗以及梗有不有趣，就仅仅是讲故事的差距。';
	const centerAuthor3 = 'Mosquito史歌';
	const centerMovie3 = '十万个冷笑话';
	const centerHref3 = '#';
	const centerUrl3 = require('../../images/review/6.jpg');
	const centerGrade3 = '7.5';

	const rightWrapStyle = {
		float: 'right',
		width: '303px'
	};
	const rightUrl = require('../../images/review/7.jpg');
	const rightHref = '#';
	const rightTag = '免费观影';
	const rightTime = '08月12日 11:00';
	const rightInfo = '8月12日，来北京恒业国际影城（六里桥IMAX店）尊享VIP级别待遇，全自动调节的座椅让你享受酣畅淋漓的大战！';
	const rightBtn = '我参加';

	return (
		<MainWrap className="review clear">
			<div className="left" style={leftWrapStyle}>
				<TitleLeft>热门影评</TitleLeft>
				<ReviewCarousel />
			</div>
			<div className="center" style={centerWrapStyle}>
				<TitleCenter />
				<CenterItem text={centerText1} author={centerAuthor1} movie={centerMovie1} href={centerHref1} url={centerUrl1} />
				<CenterItem text={centerText2} author={centerAuthor2} movie={centerMovie2} href={centerHref2} url={centerUrl2} grade={centerGrade2} />
				<CenterItem text={centerText3} author={centerAuthor3} movie={centerMovie3} href={centerHref3} url={centerUrl3} grade={centerGrade3} />
			</div>
			<div className="right" style={rightWrapStyle}>
				<TitleRight fontWeight="normal">社区活动</TitleRight>
				<RightCon url={rightUrl} href={rightHref} tag={rightTag} time={rightTime} info={rightInfo} btn={rightBtn}/>
			</div>
		</MainWrap>
	);
}

function CenterItem(props) {
	const wrapStyle = {
		height: '120px',
		marginBottom: '34px'
	};

	const leftWrapStyle = {
		width: '274px',
		float: 'left'
	};
	const quoteStyle = {
		display: 'inline-block',
		width: '21px',
		height: '16px',
		marginRight: '10px',
		background: `url(${require('../../images/index24.png')}) no-repeat -117px 0`
	};
	const textStyle = {
		fontSize: '16px',
		color: '#333',
		lineHeight: '24px'
	};
	const infoStyle = {
		marginTop: '10px',
		color: '#888',
		fontSize: '12px'
	};
	const picStyle = {
		float: 'right',
		width: '80px',
		height: '120px',
		background: `url(${props.url}) no-repeat center/100% 100%`
	};

	return (
		<div style={wrapStyle}>
			<div style={leftWrapStyle}>
				<p style={textStyle} className="hov-color">
					<i style={quoteStyle}></i><a href={props.href}>{props.text}</a>
				</p>
				<p style={infoStyle}>
					<a href={props.href}>{props.author}</a> 评 <a href={props.href}>《{props.movie}》</a> {props.grade && <Grade>{props.grade}</Grade>}
				</p>
			</div>
			<a href={props.href} style={picStyle}></a>
		</div>
	);
}

function Grade(props) {
	let gradeStyle = {
		display: 'inline-block',
		width: '32px',
		height: '20px',
		fontSize: '12px',
		background: '#74ab34',
		color: '#fff',
		textAlign: 'center',
		lineHeight: '20px'
	};

	return (
		<i style={gradeStyle}>{props.children}</i>
	);
}

function RightCon(props) {
	const picStyle = {
		display: 'block',
		width: '100%',
		height: '210px',
		position: 'relative',
		background: `url(${props.url}) no-repeat center/100% 100%`
	};
	const tagStyle = {
		width: '68px',
		height: '24px',
		fontSize: '14px',
		lineHeight: '24px',
		textAlign: 'center',
		color: '#fff',
		background: '#eb321e',
		position: 'absolute',
		left: '4px',
		top: '4px'
	};
	const conWrapStyle = {
		width: '261px',
		height: '249px',
		border: '1px solid #e6e6e6',
		borderTop: 'none',
		padding: '20px 20px 0'
	};
	const titleStyle = {
		fontSize: '16px',
		lineHeight: '46px',
		textAlign: 'center',
		color: '#333',
		fontWeight: 'bold'
	};
	const timeIconStyle = {
		display: 'inline-block',
		width: '14px',
		height: '14px',
		background: `url(${require('../../images/index24.png')}) no-repeat -86px -21px`,
		margin: '0 5px 0 0',
		verticalAlign: 'text-bottom'
	};
	const timeStyle = {
		fontSize: '12px',
		lineHeight: '26px',
		color: '#333'
	};
	const infoStyle = {
		fontSize: '12px',
		lineHeight: '20px',
		color: '#888',
		margin: '10px 0 17px'
	};
	const btnStyle = {
		display: 'block',
		width: '160px',
		height: '36px',
		lineHeight: '36px',
		textAlign: 'center',
		color: '#fff',
		margin: '0 auto',
		borderRadius: '20px'
	};

	return (
		<div>
			<a href={props.href} style={picStyle}>
				<span style={tagStyle}>{props.tag}</span>
			</a>
			<div style={conWrapStyle}>
				<h4 style={titleStyle}>{props.title}</h4>
				<p style={timeStyle}><i style={timeIconStyle}></i>{props.time}</p>
				<p style={infoStyle}>{props.info}</p>
				<a href={props.href} style={btnStyle} className="right-btn">{props.btn}</a>
			</div>
		</div>
	);
}

export {Review as default};