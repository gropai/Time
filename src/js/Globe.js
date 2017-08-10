//全球拾趣

import React from 'react';
import 'babel-polyfill';

import {MainWrap, TitleLeft, ConPic, ConTitle, ConDesc, PlayIconWhite40} from './Utils';
import {Button1} from './Buttons';

function Globe(props) {
	const wrapStyle = {
		width: '1220px'
	};

	let content = [
		{
			src: require('../../images/globe/1.jpg'),
			href:'#',
			conTitle: '欧美明星一周街拍',
			conDesc: '小李简直懒癌末期 大本开房新恋情坐实'
		},
		{
			src: require('../../images/globe/2.jpg'),
			href:'#',
			conTitle: '"荷兰弟"搞怪试镜《蜘蛛侠》',
			conDesc: '叛变版蝙蝠侠炫富 鬼马少年不按常理出牌'
		},
		{
			src: require('../../images/globe/3.jpg'),
			href:'#',
			conTitle: 'SDCC众剧组为《娱乐周刊》拍摄写真',
			conDesc: '正义联盟温馨合影 高司令被吃豆腐'
		},
		{
			src: require('../../images/globe/4.jpg'),
			href:'#',
			conTitle: '漫威英雄下岗后的快乐生活',
			conDesc: '美队当选美国总统 蜘蛛侠当守门员',
			icon: true
		},
		{
			src: require('../../images/globe/5.jpg'),
			href:'#',
			conTitle: '《小鬼当家》"爸爸"约翰赫德去世',
			conDesc: '曾参演过《越狱》《黑道家族》享年72岁',
			icon: true
		},
		{
			src: require('../../images/globe/6.jpg'),
			href:'#',
			conTitle: '约翰波耶加:"权力的游戏"里没有黑人！',
			conDesc: '波耶加抨击种族主义 新剧"联盟国"火上浇油',
			icon: true
		},
		{
			src: require('../../images/globe/7.jpg'),
			href:'#',
			conTitle: '伊桑霍克：我想长生不老！',
			conDesc: 'Mtime20问 "约会"大牌明星 第36期'
		},
		{
			src: require('../../images/globe/8.jpg'),
			href:'#',
			conTitle: '挑战看片量！时光网特制SDCC宣传画',
			conDesc: '《变5》《权力的游戏》纷纷亮相'
		}
	];
	content = content.map((val, index) => {
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

	return (
		<MainWrap overflow="hidden" className="globe">
			<TitleLeft>全球拾趣</TitleLeft>
			<div style={wrapStyle} className="clear">
				{content}
			</div>
			<Button1 />
		</MainWrap>

	);
}

export {Globe as default};