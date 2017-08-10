//今日热点

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {MainWrap, SecTitle, ConPic, PlayIconWhite40, ConTitle, ConDesc} from './Utils';
import {Button1} from './Buttons';


class Today extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const title = '今日热点';
		const titleItems = [
			{item:'时光对话', href:'#'},
			{item:'产业聚焦', href:'#'},
			{item:'电视情报', href:'#'},
			{item:'全球拾趣', href:'#'}
		];

		let contentLeft = [
			{
				src: require('../../images/today/1.jpg'),
				href:'#',
				conTitle: '你可能过了一个假童年？',
				conDesc: '敢不敢看？超另类儿童观影指南',
				icon: true
			},
			{
				src: require('../../images/today/2.jpg'),
				href:'#',
				conTitle: '强森与朱莉有望加入环球黑暗宇宙',
				conDesc: '“新木乃伊”北美首周末需至少4千万美元'
			},
			{
				src: require('../../images/today/3.jpg'),
				href:'#',
				conTitle: '“神奇女侠”在黎巴嫩禁止上映',
				conDesc: '盖尔加朵曾是以色列女兵 华纳官方未回应',
				icon: true
			},
			{
				src: require('../../images/today/4.jpg'),
				href:'#',
				conTitle: '皮卡丘将首次亮相中国内地银幕',
				conDesc: '《精灵宝可梦》曝首款中文预告 预定暑假档期',
				icon: true
			},
			{
				src: require('../../images/today/5.jpg'),
				href:'#',
				conTitle: '“神偷奶爸3”首曝角色海报',
				conDesc: '大反派秃到发指 德鲁&露西&女儿齐亮相',
				icon: true
			},
			{
				src: require('../../images/today/6.jpg'),
				href:'#',
				conTitle: '许鞍华的《明月几时有》“杀气腾腾”',
				conDesc: '周迅彭于晏霍建华率“爱国者联盟”首亮相'
			}
		];
		contentLeft = contentLeft.map((val, index) => {
			const wrapStyle = {
				float: 'left',
				margin: '0 20px 22px 0'
			};
			const linkStyle = {
				width: '285px',
				height: '160px'
			};
			const iconStyle = {
				left: '8px',
				bottom: '8px'
			};
			const descWrapStyle = {
				marginTop: '8px'
			};

			return (
				<div style={wrapStyle} key={index}>
					<ConPic style={linkStyle}
							href={val.href}
							src={val.src}
					>
						{val.icon && <PlayIconWhite40 style={iconStyle}></PlayIconWhite40>}
					</ConPic>
					<div style={descWrapStyle}>
						<ConTitle href={val.href}>{val.conTitle}</ConTitle>
						<ConDesc href={val.href}>{val.conDesc}</ConDesc>
					</div>

				</div>
			);
		});


		const leftStyle = {
			width: '915px'
		};

		const rightStyle = {
			width: '285px'
		};
		const rightPic = {
			style: {
				width: '100%',
				height: '160px'
			},
			href: '#',
			src: require('../../images/today/7.jpg'),
			icon: true,
			iconStyle: {
				left: '8px',
				bottom: '8px'
			}
		};
		const rightConStyle = {
			width: '260px',
			padding: '7px 15px 0 10px',
			height: '306px',
			background: '#f5f5f5'
		};

		const listTitleStyle = {
			fontSize: '16px',
			lineHeight: '48px',
			color: '#333',
			fontWeight: 'bold',
			marginTop: '7px'
		};
		const listWrapStyle = {
			margin: '10px 0 0 5px',
			borderLeft: '1px solid #e6e6e6',
			height: '196px'
		};

		let listItems = [
			{
				title: '《神奇女侠》中国新闻发布会',
				href: '#',
				date: '2017年05月15日'
			},
			{
				title: '《超凡战队》首映礼发布会',
				href: '#',
				date: '2017年05月09日'
			},
			{
				title: '《毒。戒》首映礼发布会',
				href: '#',
				date: '2017年05月15日'
			}
		];

		listItems = listItems.map((val, index) => {
			const listItemStyle = {
				marginBottom: '26px',
				position: 'relative'
			};
			const listDateStyle = {
				fontSize: '12px',
				color: '#888',
				lineHeight: '20px',
				textIndent: '10px'
			};
			const btnStyle = {
				fontSize: '12px',
				width: '54px',
				height: '24px',
				textAlign: 'center',
				lineHeight: '24px',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderRadius: '15px',
				float: 'right',
				position: 'absolute',
				right: 0,
				top: '-12px'
			};

			return (
				<div style={listItemStyle} key={index}>
					<ListTitle href={val.href}>{val.title}</ListTitle>
					<div style={listDateStyle}>{val.date}</div>
					<a href={val.href} className="btn" style={btnStyle}>回放</a>
				</div>
			);
		});

		return (
			<MainWrap className="today"
			>
				<SecTitle title={title}>{titleItems}</SecTitle>
				<MainWrap className="content"
						  height="473px"
				>
					<div className="fl"
						 style={leftStyle}
					>
						{contentLeft}
					</div>
					<div className="fr right"
						 style={rightStyle}
					>
						<ConPic style={rightPic.style}
								href={rightPic.href}
								src={rightPic.src}
						>
							{rightPic.icon && <PlayIconWhite40 style={rightPic.iconStyle}></PlayIconWhite40>}
						</ConPic>
						<div style={rightConStyle}>
							<ConTitle href="#">第70届戛纳电影节时光网特别报道</ConTitle>
							<h4 style={listTitleStyle}>更多直播</h4>
							<div style={listWrapStyle}>
								{listItems}
								<ListTitle href="#">查看更多 ></ListTitle>
							</div>
						</div>
					</div>
				</MainWrap>
				<Button1 href="#"/>
			</MainWrap>

		);
	}
}


class ListTitle extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const wrapStyle = {
			position: 'relative',
			top: '-10px',
			left: '-4px'
		};
		const circleStyle = {
			width: '4px',
			height: '4px',
			border: '2px solid #267fd4',
			borderRadius: '50%',
			float: 'left',
			position: 'relative',
			top: '2px'
		};
		const titleStyle = {
			fontSize: '14px',
			lineHeight: '14px',
			float: 'left',
			marginLeft: '6px',
			width: '170px'
		};

		return (
			<div style={wrapStyle} className="clear">
				<i style={circleStyle}></i>
				<h5 className="hov-color ellipsis"
					style={titleStyle}
				>
					<a href={this.props.href}>{this.props.children}</a>
				</h5>
			</div>
		);
	}
}

export {Today as default};
