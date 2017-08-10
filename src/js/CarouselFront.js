//包含首页部分的各种轮播图

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Carousel from '../Carousel/Carousel';
import {MainWrap, Grade} from './Utils';
import {ButtonBuy} from './Buttons';

//顶部轮播图
class TopCarousel extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const items = [
			<CarouselTopItem href="#" key="1" url={require("../../images/top-carousel/1.jpg")}/>,
			<CarouselTopItem href="#" key="2" url={require("../../images/top-carousel/2.jpg")}/>,
			<CarouselTopItem href="#" key="3" url={require("../../images/top-carousel/3.jpg")}/>,
			<CarouselTopItem href="#" key="4" url={require("../../images/top-carousel/4.jpg")}/>
		];

		return (
			<MainWrap height="360px">
				<Carousel className="top-carousel"
				>
					{items}
				</Carousel>
			</MainWrap>
		);
	}
}

function CarouselTopItem(props) {
	const linkStyle = {
		display: 'block',
		width: '1200px',
		height: '100%',
		background: `url(${props.url}) no-repeat center/cover`
	};

	return (
		<a href={props.href} style={linkStyle}></a>
	);
}

//上映电影轮播图
class MovCarousel extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const items = [
			<MovCarouselItem1 href="#" key="1" url={require("../../images/mov-carousel/1.jpg")}
							  title="变形金刚5：最后的骑士" date="06月23日上映" genre="动作/冒险"
							  length="126分钟" info="3D/中国巨幕" remark="擎天柱黑化震撼对决大黄蜂"
							  price="27" grade="6.0" hasBtn={true}
			/>,
			<MovCarouselItem2 href="#" key="2" url={require('../../images/mov-carousel/2.jpg')}
							  title="明月几时有" date="07月01日" genre="剧情" length="133分钟"
							  remark="周迅彭于晏霍建华演绎乱世儿女情" price="35" grade="7.0"
							  hasBtn={true}
			/>,
			<MovCarouselItem2 href="#" key="3" url={require('../../images/mov-carousel/3.jpg')}
							  title="逆时营救" date="06月29日" genre="动作/科幻" length="109分钟"
							  remark="杨幂为救子进入平行时空" price="33" grade="5.9"
							  hasBtn={true}
			/>,
			<MovCarouselItem2 href="#" key="4" url={require('../../images/mov-carousel/4.jpg')}
							  title="反转人生" date="06月29日" genre="喜剧/奇幻" length="110分钟"
							  remark="《独自等待》伍仕贤回归喜剧" price="34" grade="5.9"
							  hasBtn={true}
			/>,
			<MovCarouselItem2 href="#" key="5" url={require('../../images/mov-carousel/5.jpg')}
							  title="冈仁波齐" date="06月20日" genre="剧情" length="117分钟"
							  remark="聚焦朝圣路上虔诚灵魂" price="23" grade="7.5"
							  hasBtn={true}
			/>,
			<MovCarouselItem2 href="#" key="6" url={require('../../images/mov-carousel/6.jpg')}
							  title="异形：契约" date="06月16日" genre="恐怖/科幻" length="1116分钟"
							  remark="人类殖民者陷入恐怖梦魇" price="35" grade="7.4"
							  hasBtn={true}
			/>,
			<MovCarouselItem2 href="#" key="7" url={require('../../images/mov-carousel/7.jpg')}
							  title="雄狮" date="06月22日" genre="家庭/剧情" length="119分钟"
							  remark="千三万水难阻返家乡愁" grade="7.4"
			/>,
			<MovCarouselItem2 href="#" key="8" url={require('../../images/mov-carousel/8.jpg')}
							  title="血战湘江" date="06月30日" genre="战争/历史" length="118分钟"
							  remark="张一山耿乐化身热血军人"
			/>,
			<MovCarouselItem2 href="#" key="9" url={require('../../images/mov-carousel/9.jpg')}
							  title="撞邪31号" date="06月30日" genre="惊悚/恐怖" length="90分钟"
							  remark="别墅中的一系列离奇事件" price="36" hasBtn={true}
			/>,
			<MovCarouselItem2 href="#" key="10" url={require('../../images/mov-carousel/10.jpg')}
							  title="新木乃伊" date="06月09日" genre="动作/冒险" length="106分钟"
							  remark="木乃伊大闹伦敦城阿汤哥迎战" grade="5.8"
			/>,
		];

		const boxStyle = {
			padding: '30px 0 0 0'
		};

		return (
			<MainWrap height="302px">
				<Carousel className="mov-carousel" boxStyle={boxStyle}
						  pager="false" auto="false" mode="slide"
				>
					{items}
				</Carousel>
			</MainWrap>
		);
	}
}

function MovCarouselItem1(props) {
	const wrapStyle = {
		float: 'left',
		width: '390px'
	};
	const leftStyle = {
		float: 'left',
		width: '170px',
		height: '256px',
		background: `url(${props.url}) no-repeat center/cover`,
		position: 'relative'
	};
	const leftLinkStyle = {
		display: 'block',
		width: '100%',
		height: '100%'
	};
	const gradeStyle = {
		right: 0,
		bottom: 0
	};
	const rightStyle = {
		float: 'left',
		width: '180px',
		height: '256px',
		margin: '0 28px 0 12px',
		position: 'relative'
	};
	const titleStyle = {
		fontSize: '18px',
		lineHeight: '28px',
		color: '#333',
		marginBottom: '10px',
		cursor: 'pointer'
	};
	const dateStyle = {
		fontSize: '14px',
		color: '#777',
		lineHeight: '26px'
	};
	const infoStyle = Object.assign({}, dateStyle, {width: '170px', marginBottom: '10px'});
	const genreStyle = Object.assign({}, dateStyle, {color: '#333'});
	const iconStyle = {
		display: 'inline-block',
		width: '21px',
		height: '16px',
		background: `url(${require('../../images/index24.png')}) no-repeat -117px 0`
	};
	const remarkStyle = {
		fontSize: '15px',
		lineHeight: '24px',
		color: '#6ba22a'
	};
	const priceStyle = {
		color: '#fc6921',
		fontSize: '12px',
		textIndent: '20px',
		marginTop: '10px'
	};
	const priceNumStyle = {
		fontSize: '24px',
		fontWeight: 'bold'
	};

	return (
		<div style={wrapStyle}>
			<div style={leftStyle}>
				<a href={props.href} style={leftLinkStyle}></a>
				<Grade pos={gradeStyle}>{props.grade}</Grade>
			</div>
			<div style={rightStyle}>
				<h4 style={titleStyle} className="hov-color">{props.title}</h4>
				<p style={dateStyle}>{props.date} - <span style={genreStyle}>{props.genre}</span></p>
				<p style={infoStyle}>{props.length} - {props.info}</p>
				<p><i style={iconStyle}></i> <span style={remarkStyle}>{props.remark}</span></p>
				<p style={priceStyle}><span style={priceNumStyle}>{props.price}</span>元起</p>
				<ButtonBuy href="#" width="130px" height="32px"/>
			</div>
		</div>
	);
}

function MovCarouselItem2(props) {
	const wrapStyle = {
		float: 'left',
		width: '125px',
		height: '256px',
		marginRight: '20px',
		position: 'relative'
	};
	const linkStyle = {
		display: 'block',
		width: '100%',
		height: '190px',
		background: `url(${props.url}) no-repeat center/contain`,
		position: 'relative'
	};
	const gradPos = {
		right: 0,
		bottom: 1
	};
	const titleStyle = {
		fontSize: '14px',
		color: '#333',
		textAlign: 'center',
		lineHeight: '30px',
		marginTop: '7px'
	};
	const hiddenStyle = {
		width: '100%',
		height: '100%',
		background: 'rgba(0, 0, 0, 0.8)',
		position: 'absolute',
		display: 'none'
	};
	const commonStyle = {
		fontSize: '13px',
		color: '#aaa',
		textIndent: '12px',
		lineHeight: '20px'
	};
	const dateStyle = Object.assign({}, commonStyle, {marginTop: '12px'});
	const genreStyle = commonStyle;
	const lengthStyle = Object.assign({}, commonStyle, {marginBottom: '12px'});
	const remarkStyle = {
		fontSize: '12px',
		color: '#fff',
		lineHeight: '20px',
		margin: '0 6px 0 24px',
		position: 'relative'
	};
	const iconStyle = {
		width: '12px',
		height: '9px',
		background: `url(${require('../../images/index24.png')}) no-repeat -114px -21px`,
		position: 'absolute',
		left: '-16px'
	};
	const priceStyle = {
		color: '#fc6921',
		fontSize: '12px',
		position: 'absolute',
		left: '50%',
		bottom: '5px',
		transform: 'translateX(-50%)'
	};
	const priceNumStyle = {
		fontSize: '24px'
	};

	return (
		<div style={wrapStyle}>
			<a href={props.href} style={linkStyle} className="link">
				{props.grade !== undefined && <Grade pos={gradPos}>{props.grade}</Grade>}
				<div style={hiddenStyle} className="hidden">
					<p style={dateStyle}>{props.date}上映</p>
					<p style={genreStyle}>{props.genre}</p>
					<p style={lengthStyle}>{props.length}</p>
					<p style={remarkStyle}><i style={iconStyle}></i> {props.remark}</p>
					{props.price !== undefined && <div style={priceStyle}><span style={priceNumStyle}>{props.price}</span>元起</div>}
				</div>
			</a>
			<h4 style={titleStyle}>{props.title}</h4>
			{props.hasBtn && <ButtonBuy href="#" width="120px" height="28px"/>}
		</div>
	);
}

//商城轮播图
class MallCarousel extends  React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const items = [
			<MallCarouselItem key="1">{
				{
					cornerItem1: {url: require('../../images/mall-carousel/1-item1.jpg'), href: '#'},
					cornerItem2: {url: require('../../images/mall-carousel/1-item2.jpg'), href: '#'},
					cornerItem3: {url: require('../../images/mall-carousel/1-item3.jpg'), href: '#'},
					cornerItem4: {url: require('../../images/mall-carousel/1-item4.jpg'), href: '#'},
					centerItem1: {url: require('../../images/mall-carousel/1-center1.jpg'), href: '#'},
					centerItem2: {url: require('../../images/mall-carousel/1-center2.jpg'), href: '#'},
				}
			}</MallCarouselItem>,
			<MallCarouselItem key="2">{
				{
					cornerItem1: {url: require('../../images/mall-carousel/2-item1.jpg'), href: '#'},
					cornerItem2: {url: require('../../images/mall-carousel/2-item2.jpg'), href: '#'},
					cornerItem3: {url: require('../../images/mall-carousel/2-item3.jpg'), href: '#'},
					cornerItem4: {url: require('../../images/mall-carousel/2-item4.jpg'), href: '#'},
					centerItem1: {url: require('../../images/mall-carousel/2-center1.jpg'), href: '#'},
					centerItem2: {url: require('../../images/mall-carousel/2-center2.jpg'), href: '#'},
				}
			}</MallCarouselItem>
		];
		return (
			<MainWrap height="492px">
				<Carousel className="mall-carousel" pager="false" auto="false">
					{items}
				</Carousel>
			</MainWrap>
		);
	}
}

function MallCarouselItem(props) {
	const wrapStyle = {
		width: '100%',
		height: '100%',
		position: 'relative'
	};
	const cornerItemStyle = {
		display: 'block',
		width: '386px',
		height: '236px',
		position: 'absolute'
	};
	const cornerItem1Pos = {
		left: 0,
		top: 0,
		background: `url(${props.children.cornerItem1.url}) no-repeat center/100% 100%`
	};
	const cornerItem2Pos = {
		left: 0,
		bottom: 0,
		background: `url(${props.children.cornerItem2.url}) no-repeat center/100% 100%`
	};
	const cornerItem3Pos = {
		right: 0,
		top: 0,
		background: `url(${props.children.cornerItem3.url}) no-repeat center/100% 100%`
	};
	const cornerItem4Pos = {
		right: 0,
		bottom: 0,
		background: `url(${props.children.cornerItem4.url}) no-repeat center/100% 100%`
	};
	const centerItem1Pos = {
		left: '406px',
		top: 0,
		background: `url(${props.children.centerItem1.url}) no-repeat center/100% 100%`
	};
	const centerItem2Pos = {
		left: '406px',
		bottom: 0,
		background: `url(${props.children.centerItem2.url}) no-repeat center/100% 100%`
	};

	const cornerItem1Style = Object.assign({}, cornerItemStyle, cornerItem1Pos);
	const cornerItem2Style = Object.assign({}, cornerItemStyle, cornerItem2Pos);
	const cornerItem3Style = Object.assign({}, cornerItemStyle, cornerItem3Pos);
	const cornerItem4Style = Object.assign({}, cornerItemStyle, cornerItem4Pos);
	const centerItem1Style = Object.assign({}, cornerItemStyle, centerItem1Pos, {height: '246px'});
	const centerItem2Style = Object.assign({}, cornerItemStyle, centerItem2Pos, {height: '246px'});


	return (
		<div style={wrapStyle}>
			<a href={props.children.cornerItem1.href} style={cornerItem1Style}></a>
			<a href={props.children.cornerItem2.href} style={cornerItem2Style}></a>
			<a href={props.children.cornerItem3.href} style={cornerItem3Style}></a>
			<a href={props.children.cornerItem4.href} style={cornerItem4Style}></a>
			<a href={props.children.centerItem1.href} style={centerItem1Style}></a>
			<a href={props.children.centerItem2.href} style={centerItem2Style}></a>
		</div>
	);
}

//热门影评轮播图
function ReviewCarousel(props) {
	const wrapStyle = {
		height: '480px'
	};

	const pic1 = require('../../images/review/1-1.jpg');
	const icon1 = require('../../images/review/1-2.jpg');
	const author1 = '方聿南';
	const movie1 = '极盗车神';
	const title1 = '这一次，不用再心疼豪车被撞了';
	const text1 = '通过这部在烂番茄好评高达94%的新片，来自英伦的鬼才导演试图告诉我们，如今的飙车电影在某种程度上走入了过度卡通化的邪路。';
	const pic2 = require('../../images/review/2-1.jpg');
	const icon2 = require('../../images/review/2-2.jpg');
	const author2 = '叛卡门';
	const movie2 = '修罗雪姬';
	const title2 = '《杀死比尔》的原型原来在这里！';
	const text2 = '血浆四溢、复仇杀人、美色带刺、再拼上日不落的软色情，怪不得昆汀要为之疯狂，拍出《杀死比尔》模仿跪拜。';
	const pic3 = require('../../images/review/3-1.jpg');
	const icon3 = require('../../images/review/3-2.jpg');
	const author3 = '念及己名';
	const movie3 = '李秀卿';
	const title3 = '为何你的青春有太多苦恼？';
	const text3 = '看电影前几分钟，最大的感想是：你丫的青春非得自找苦恼么，非爱上一个错误的对象，非得对父亲恶言相向，非得自以为是活得潇洒！';

	const items = [
		<ReviewCarouselItem key="1" href="#" urlPic={pic1} urlIcon={icon1} author={author1} movie={movie1}
							title={title1} text={text1}
		/>,
		<ReviewCarouselItem key="2" href="#" urlPic={pic2} urlIcon={icon2} author={author2} movie={movie2}
							title={title2} text={text2}
		/>,
		<ReviewCarouselItem key="3" href="#" urlPic={pic3} urlIcon={icon3} author={author3} movie={movie3}
							title={title3} text={text3}
		/>
	];

	return (
		<div style={wrapStyle}>
			<Carousel className="review-carousel">
				{items}
			</Carousel>
		</div>
	);
}

function ReviewCarouselItem(props) {
	const wrapStyle = {
		width: '100%',
		height: '100%',
		position: 'relative'
	};

	const picStyle = {
		display: 'block',
		width: '100%',
		height: '260px',
		background: `url(${props.urlPic}) no-repeat center/100% 100%`
	};

	const iconStyle = {
		width: '63px',
		height: '63px',
		border: '2px solid #fff',
		borderRadius: '50%',
		position: 'absolute',
		left: '16px',
		top: '225px',
		background: `url(${props.urlIcon}) no-repeat center/100% 100%`
	};

	const contentStyle = {
		width: '448px',
		height: '219px',
		border: '1px solid #e6e6e6',
		borderTop: 'none'
	};

	const infoStyle = {
		fontSize: '14px',
		lineHeight: '54px',
		color: '#888',
		textAlign: 'center'
	};

	const titleStyle = {
		fontSize: '20px',
		lineHeight: '50px',
		fontWeight: 'bold',
		color: '#333',
		textAlign: 'center'
	};

	const textStyle = {
		margin: '0 25px',
		fontSize: '14px',
		lineHeight: '26px',
		color: '#333',
		textIndent: '20px'
	};

	const markStyle = {
		display: 'inline-block',
		width: '30px',
		height: '21px',
		background: 'url(../../images/index24.png) no-repeat -87px 0',
		position: 'relative',
		left: '-8px',
		top: '-5px'
	};

	return (
		<div style={wrapStyle}>
			<a href={props.href} style={picStyle}></a>
			<a href={props.href} style={iconStyle}></a>
			<div style={contentStyle}>
				<p style={infoStyle}>{props.author}&nbsp;&nbsp;&nbsp;评&nbsp;&nbsp;&nbsp;《{props.movie}》</p>
				<h4 style={titleStyle}><a href={props.href} className="hov-color">{props.title}</a></h4>
				<p style={textStyle}><i style={markStyle}></i>{props.text}</p>
			</div>

		</div>
	);
}


export {TopCarousel, MovCarousel, MallCarousel, ReviewCarousel};
