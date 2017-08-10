//footer部分

import React from 'react';
import 'babel-polyfill';

import {MainWrapBg, MainWrap} from './Utils';

function Footer(props) {
	const topLineStyle = {
		width: '100%',
		height: '4px',
		background: `url(${require('../../images/foot.png')}) repeat-x `
	};

	const midWrapStyle = {
		height: '197px'
	};

	const secLineStyle = {
		width: '1px',
		height: '157px',
		background: `url(${require('../../images/foot.png')}) no-repeat -495px -9px`,
		position: 'absolute',
		right: 0,
		top: 0
	};

	const secStyle = {
		float: 'left',
		height: '100%',
		position: 'relative'
	};

	const sec1Style = Object.assign({}, secStyle, {width: '180px'});
	const sec1IconStyle = {
		display: 'block',
		width: '136px',
		height: '43px',
		background: `url(${require('../../images/foot.png')}) no-repeat 0 -10px`
	};
	const sec1ListStyle = {
		float: 'left',
		marginTop: '12px'
	};

	const sec2Style = Object.assign({}, secStyle, {width: '501px'});
	const sec2ListStyle = {
		position: 'absolute',
		top: 0
	};
	const sec2List1Style = Object.assign({}, sec2ListStyle, {left: '55px'});
	const sec2List2Style = Object.assign({}, sec2ListStyle, {left: '152px', width:'220px'});
	const sec2List3Style = Object.assign({}, sec2ListStyle, {left: '392px'});
	const list3IconStyle = {
		display: 'inline-block',
		width: '30px',
		height: '30px'
	};
	const list3Icon1Style = Object.assign(
		{},
		list3IconStyle,
		{
			background: `url(${require('../../images/foot.png')}) no-repeat -140px -9px`
		}
	);
	const list3Icon2Style = Object.assign(
		{},
		list3IconStyle,
		{
			background: `url(${require('../../images/foot.png')}) no-repeat -170px -9px`
		}
	);
	const list3Icon3Style = Object.assign(
		{},
		list3IconStyle,
		{
			background: `url(${require('../../images/foot.png')}) no-repeat -200px -9px`
		}
	);

	const sec3Style = Object.assign({}, secStyle, {width: '499px'});
	const weeklyStyle = {
		width: '172px',
		position: 'absolute',
		left: '55px',
		top: 0
	};
	const sec3TitleStyle = {
		fontSize: '17px',
		lineHeight: '21px',
		color: '#333',
		position: 'relative'
	};
	const issue = 196;
	const sec3TitleSubStyle = {
		color: '#7d7d7d',
		fontSize: '12px',
		lineHeight: '12px',
		position: 'absolute',
		right: 0,
		bottom: '3px'
	};
	const weeklyPicStyle = {
		display: 'block',
		width: '100%',
		height: '80px',
		background: `url(${require('../../images/footer/1.jpg')})`,
		margin: '13px 0 11px'
	};
	const weeklySubWrapStyle = {
		width: '172px',
		height: '26px',
		position: 'relative'
	};
	const weeklyInputStyle = {
		float: 'left',
		fontSize: '12px',
		lineHeight: '26px',
		height: '26px',
		color: '#a5a5a5',
		textIndent: '14px',
		borderRadius: '20px',
		background: `url(${require('../../images/foot.png')}) no-repeat -331px -35px`,
		outline: 'none'
	};
	const weeklyBtnStyle = {
		width: '54px',
		height: '25px',
		textAlign: 'center',
		lineHeight: '25px',
		color: '#fff',
		fontSize: '12px',
		borderRadius: '20px',
		background: `url(${require('../../images/foot.png')}) no-repeat -330px -9px`,
		position: 'absolute',
		right: 0,
		top: 0
	};
	const buyStyle = {
		width: '132px',
		position: 'absolute',
		right: '50px',
		top: 0
	};
	const buyPicStyle = {
		display: 'block',
		width: '96px',
		height: '96px',
		background: `url(${require('../../images/foot.png')}) no-repeat -795px -9px`,
		margin: '13px 0 0 17px'
	};
	const buyTextStyle = {
		fontSize: '12px',
		lineHeight: '44px',
		color: '#333',
		textAlign: 'center'
	};

	const btmTextStyle = {
		fontSize: '12px',
		lineHeight: '24px',
		color: '#7e7e7e',
		textAlign: 'center'
	};
	const policeIcon = {
		display: 'inline-block',
		width: '18px',
		height: '20px',
		background: `url(${require('../../images/foot.png')}) -234px -12px`,
		margin: '0 5px 0 0',
		verticalAlign: 'bottom'
	};

	const iconsWrapStyle = {
		textAlign: 'center',
		marginTop: '15px'
	};
	const icon1 = {
		background: `url(${require('../../images/foot.png')}) 0 -60px`
	};
	const icon2 = {
		width: '70px',
		background: `url(${require('../../images/foot.png')}) -68px -60px`
	};
	const icon3 = {
		background: `url(${require('../../images/footer/2.png')}) center/cover`
	};
	const icon4 = {
		background: `url(${require('../../images/footer/3.jpg')}) center/cover`
	};

	return (
		<MainWrapBg className="footer" height="342px">
			<div style={topLineStyle}></div>
			<MainWrap className="clear" padding="36px 0 0 0">
				<div style={midWrapStyle}>
					<div style={sec1Style}>
						<a href="#" style={sec1IconStyle}></a>
						<ul className="footer-sec1-list" style={sec1ListStyle}>
							<li><a href="#">加入我们</a></li>
							<li><a href="#">联系我们</a></li>
							<li><a href="#">站务论坛</a></li>
							<li><a href="#">问题反馈</a></li>
							<li><a href="#">社区准则</a></li>
							<li><a href="#">网站地图</a></li>
							<li><a href="#">隐私政策</a></li>
							<li><a href="#">English</a></li>
						</ul>
						<div style={secLineStyle}></div>
					</div>
					<div className="footer-sec2" style={sec2Style}>
						<div className="footer-sec2-list1" style={sec2List1Style}>
							<h4>栏目</h4>
							<ul>
								<li><a href="#">新闻</a></li>
								<li><a href="#">影院</a></li>
								<li><a href="#">商城</a></li>
								<li><a href="#">社区</a></li>
							</ul>
						</div>
						<div className="footer-sec2-list2" style={sec2List2Style}>
							<h4>推荐</h4>
							<ul className="clear">
								<li><a href="#">观影指南</a></li>
								<li><a href="#">电影票房</a></li>
								<li><a href="#">时光对话</a></li>
								<li><a href="#">新片预告</a></li>
								<li><a href="#">特色榜单</a></li>
								<li><a href="#">电影猜猜猜</a></li>
								<li><a href="#">全球拾趣</a></li>
								<li><a href="#">卡片大富翁</a></li>
							</ul>
						</div>
						<div className="footer-sec2-list3" style={sec2List3Style}>
							<h4>关注我们</h4>
							<ul>
								<li><a href="#"><i style={list3Icon1Style}></i></a></li>
								<li><a href="#"><i style={list3Icon2Style}></i></a></li>
								<li><a href="#"><i style={list3Icon3Style}></i></a></li>
							</ul>
						</div>
						<div style={secLineStyle}></div>
					</div>
					<div className="footer-sec3" style={sec3Style}>
						<div style={weeklyStyle}>
							<h4 style={sec3TitleStyle}>时光周刊 <span style={sec3TitleSubStyle}>第{issue}期</span></h4>
							<a href="#" style={weeklyPicStyle}></a>
							<div className="clear" style={weeklySubWrapStyle}>
								<input type="text" placeholder="邮箱地址" style={weeklyInputStyle}/>
								<a href="#" style={weeklyBtnStyle}>订阅</a>
							</div>
						</div>
						<div style={buyStyle}>
							<h4 style={sec3TitleStyle}>手机购票 <span style={sec3TitleSubStyle}>方便 实惠</span></h4>
							<a href="#" style={buyPicStyle}></a>
							<p style={buyTextStyle}>扫描二维码 下载客户端</p>
						</div>
					</div>
				</div>
				<p style={btmTextStyle} className="btm-text">
					北京动艺时光网络科技有限公司Copyright 2006-2017 Mtime.com Inc. All rights reserved.<br />
					<a href="#">京ICP证050715号</a> <a href="#">网络视听许可证0108265号</a> <a href="#">网络文化经营许可证广播电视节目制作经营许可证(京)字第1435号</a> <a href="#"><i style={policeIcon}></i>京公网安备：11010502032542号</a>
				</p>
				<div className="footer-icons" style={iconsWrapStyle}>
					<a href="#" style={icon1}></a>
					<a href="#" style={icon2}></a>
					<a href="#" style={icon3}></a>
					<a href="#" style={icon4}></a>
				</div>
			</MainWrap>
		</MainWrapBg>
	);
}

export {Footer as default};