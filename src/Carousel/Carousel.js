//轮播图组件

import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import './Carousel.css';

//轮播图总体
class Carousel extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			className: this.props.className || "",
			wrapId: "wrap" + Math.random(),	//CarouselWrap的id,随机生成,
			wrapLength: 0,
			conId: "con" + Math.random(), //CarouselCon的id,随机生成,
			conLength: 0,
			items: this.props.children,
			conItems: null,	//从items转化而来,包裹在CarouselItem中
			auto: this.props.auto !== 'false',
			autoUpdate: null,
			autoTimer: null,
			interval: parseInt(this.props.interval) || 2000,
			activeIndex: 0,
			hasControls: this.props.controls !== 'false',
			hasPager: this.props.pager !== 'false',
			pagerCount: 0,
			mode: this.props.mode || 'fade',
			diff: 0,
			itemWidth: this.props.itemWidth || 'auto',
			left: 0,
			shift: this.props.shift || 300,
			shiftCount: 0
		};

		//绑定this
		const handlers = [
			'handlePrevFade',
			'handleNextFade',
			'handlePagerFade',
			'handlePrevSlide',
			'handleNextSlide',
			'handlePagerSlide',
			'goToSlide',
			'verifyDist',
			'updateLeft',
			'handleWrapEnter',
			'handleWrapLeave',
			'autoUpdateFade',
			'autoUpdateSlide'
		];
		handlers.forEach(handler => {
			this[handler] = this[handler].bind(this);
		});
	}


	handlePrevFade(){
		const items = this.state.items;
		let newActiveIndex = this.state.activeIndex - 1;

		if(newActiveIndex < 0){
			newActiveIndex = items.length - 1;
		}

		this.setState({
			activeIndex: newActiveIndex
		});
	}

	handleNextFade(){
		const items = this.state.items;
		let newActiveIndex = parseInt(this.state.activeIndex) + 1;

		if(newActiveIndex >= items.length){
			newActiveIndex = 0;
		}

		this.setState({
			activeIndex: newActiveIndex
		});
	}

	handlePagerFade(e){
		const newActiveIndex = e.currentTarget.dataset.index;

		this.setState({
			activeIndex: newActiveIndex
		});
	}

	autoUpdateFade(){
		this.handleNextFade();
	}

	handlePrevSlide(){
		const dist = Math.abs(parseInt(this.state.left)) - this.state.shift;
		let activeIndex = parseInt(this.state.activeIndex) - 1;
		if(activeIndex < 0){
			activeIndex = 0;
		}
		this.updateLeft(dist);
		this.setState({
			activeIndex: activeIndex
		});
	}

	handleNextSlide(){
		const pagerCount = this.state.pagerCount;
		const dist = Math.abs(parseInt(this.state.left)) + this.state.shift;
		let activeIndex = parseInt(this.state.activeIndex) + 1;
		if(activeIndex == pagerCount){
			activeIndex = pagerCount - 1;
		}
		this.updateLeft(dist);
		this.setState({
			activeIndex: activeIndex
		});
	}

	handlePagerSlide(e){
		const newActiveIndex = e.currentTarget.dataset.index;
		this.goToSlide(newActiveIndex);
	}

	goToSlide(index){
		const dist = index * this.state.shift;

		this.setState({
			activeIndex: index
		});
		this.updateLeft(dist);
	}

	autoUpdateSlide(){
		if(Math.abs(parseInt(this.state.left)) == this.state.diff){
			this.goToSlide(0);
		}else{
			this.handleNextSlide();
		}

	}

	//更新CarouselCon的left值
	updateLeft(dist){
		let verifiedDist = this.verifyDist(dist);

		this.setState({
			left: -verifiedDist + 'px'
		});
	}

	//返回正确的滑动距离
	verifyDist(dist){
		const diff = this.state.diff;

		if(diff <= 0 || dist <= 0){	//如果轮播图总长不大于wrap长度，或者已经移动到起始位置，则不移动
			return 0;
		}

		if(dist > diff){  //如果移动距离超过长度差，修正为长度差
			return diff;
		}

		return dist;
	}

	handleWrapEnter(){
		clearInterval(this.state.autoTimer);
	}

	handleWrapLeave(){
		this.state.autoTimer = setInterval(this.state.autoUpdate, this.state.interval);
	}

	componentDidMount(){
		//自动播放
		if(this.state.auto){
			switch(this.state.mode){
				case 'fade':
					this.state.autoUpdate = this.autoUpdateFade;
					break;
				case 'slide':
					this.state.autoUpdate = this.autoUpdateSlide;
					break;
			}

			this.state.autoTimer = setInterval(this.state.autoUpdate,this.state.interval);
		}

		//计算wrap和con的长度差
		if(this.state.mode == 'slide'){
			const wrap = document.getElementById(this.state.wrapId);
			const wrapLength = parseInt(getComputedStyle(wrap).getPropertyValue('width'));
			const conItems = this.state.conItems;
			let conLength = 0;
			let pagerCount = 0;
			let diff = 0;

			conItems.forEach(item => {
				const oItem = document.getElementById(item.props.id);
				const width = parseInt(getComputedStyle(oItem).getPropertyValue('width'));

				conLength += width;
			});

			diff = conLength - wrapLength;
			pagerCount = diff <= 0 ? 0 : Math.ceil(diff/this.state.shift);

			this.setState({
				diff: conLength - wrapLength,
				wrapLength: wrapLength,
				conLength: conLength,
				pagerCount: pagerCount
			});
		}

	}

	render(){
		const className = this.state.className;
		const mode = this.state.mode;
		const itemWidth = this.state.itemWidth;
		const left = this.state.left;
		const activeIndex = this.state.activeIndex;
		const hasControls = this.state.hasControls;
		const hasPager = this.state.hasPager;
		const pagerCount = this.state.pagerCount;
		const absLeft = Math.abs(parseInt(left));
		const diff = this.state.diff;
		let hidePrev = !this.state.hasControls;
		let hideNext = !this.state.hasControls;

		let handlePrevClick,
			handleNextClick,
			handlePagerClick;

		//确定轮播图变化模式
		switch(mode){
			case 'fade':
				handlePrevClick = this.handlePrevFade;
				handleNextClick = this.handleNextFade;
				handlePagerClick = this.handlePagerFade;
				break;
			case 'slide':
				handlePrevClick = this.handlePrevSlide;
				handleNextClick = this.handleNextSlide;
				handlePagerClick = this.handlePagerSlide;
				hidePrev = diff <= 0 || absLeft === 0;
				hideNext= diff <= 0 || absLeft === diff;
				break;
		}

		//将项目包裹在CarouselItem中
		const items = this.state.items;
		const conItems = items.map((item, index) => {
			return (
				<CarouselItem index={index}
							  activeIndex={activeIndex}
							  mode={mode}
							  width={itemWidth}
							  key={index}
							  id={"wrapItem" + Math.random()}
				>
					{item}
				</CarouselItem>
			);
		});
		this.state.conItems = conItems;

		//获得pager item
		let pagerItems;
		switch(mode){
			case 'fade':
				pagerItems = items.map((item, index) => {
					return (
						<PagerItem index={index}
								   activeIndex={activeIndex}
								   onClick={handlePagerClick}
								   key={index}
						/>
					);
				});
				break;
			case 'slide':
				pagerItems = [];
				for(let i = 0; i < pagerCount; i++){
					pagerItems.push((
						<PagerItem index={i}
								   key={i}
								   activeIndex={activeIndex}
								   onClick={handlePagerClick}
						/>
					));
				}
				break;
		}


		return (
			<CarouselBox className={className} boxStyle={this.props.boxStyle}>
				<CarouselWrap mode={mode}
							  onMouseEnter={this.handleWrapEnter}
							  onMouseLeave={this.handleWrapLeave}
							  id={this.state.wrapId}
				>
					<CarouselCon mode={mode}
								 left={left}
								 id={this.state.conId}
								 width={this.state.conLength}
					>
						{conItems}
					</CarouselCon>
				</CarouselWrap>
				<Controls type="prev"
						  hasControls={hasControls}
						  onClick={handlePrevClick}
						  hideControls={hidePrev}
						  onMouseEnter={this.handleWrapEnter}
						  onMouseLeave={this.handleWrapLeave}
				/>
				<Controls type="next"
						  hasControls={hasControls}
						  onClick={handleNextClick}
						  hideControls={hideNext}
						  onMouseEnter={this.handleWrapEnter}
						  onMouseLeave={this.handleWrapLeave}
				/>
				<Pager hasPager={hasPager}
				>
					{pagerItems}
				</Pager>
			</CarouselBox>
		);
	}
}

//整个carousel的容器
class CarouselBox extends  React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const boxStyle = this.props.boxStyle || {};

		return (
			<div className={"carousel-box " + this.props.className}
				 style={boxStyle}
			>
				{this.props.children}
			</div>
		);
	}
}

//轮播图wrap, slide模式下遮挡超出的部分
class CarouselWrap extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			slide: this.props.mode === 'slide'
		};
	}

	render(){
		const slide = this.state.slide;
		let wrapStyle = {};

		if(slide){
			wrapStyle = {
				overflow: 'hidden'
			};
		}

		return (
			<div className="carousel-wrap"
			     style={wrapStyle}
				 onMouseEnter={this.props.onMouseEnter}
				 onMouseLeave={this.props.onMouseLeave}
				 id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}
}

//轮播图项目的容器
class CarouselCon extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			slide: this.props.mode === 'slide'
		};
	}

	render(){
		const slide = this.state.slide;
		let conStyle = {};

		if(slide){
			conStyle = {
				width: this.props.width,
				position: 'absolute',
				left: this.props.left
			};
		}

		return (
			<div className="carousel-con"
				 style={conStyle}
				 id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}

}

//轮播图项目
class CarouselItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			index: this.props.index,
			slide: this.props.mode === 'slide'
		};
	}

	render(){
		const active = this.props.activeIndex == this.state.index;
		const slide = this.state.slide;
		let itemStyle = {};
		let width = this.props.width;

		if(width !== 'auto' || width[width.length - 1] !== '%'){
			width = parseInt(width) + 'px';
		}

		if(slide){
			itemStyle = {
				width: this.props.width,
				position: 'static',
				opacity: 1,
				float: 'left'
			};
		}

		return (
			<div className={"carousel-item" + (active && !slide ? " active" : "")}	//只在非slide模式下添加active className
				 style={itemStyle}
				 id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}
}

//prev,next按钮
class Controls extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			hasControls: this.props.hasControls
		};
	}

	render(){
		const hasControls = this.state.hasControls;
		const hideControls = this.props.hideControls;
		const style = {
			display: hasControls && !hideControls ? 'block' : 'none'
		};

		return (
			<div className={"controls " + this.props.type}
				 style={style}
				 onClick={this.props.onClick}
				 onMouseEnter={this.props.onMouseEnter}
				 onMouseLeave={this.props.onMouseLeave}
			>
			</div>
		);
	}
}


//翻页pager
class Pager extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			hasPager: this.props.hasPager
		};
	}

	render(){
		const hasPager = this.state.hasPager;
		const style = {
			display: hasPager ? 'block' : 'none'
		};

		return (
			<div className="pager"
				 style={style}
			>
				{this.props.children}
			</div>
		);
	}
}

//pager项目
class PagerItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			index: this.props.index
		};
	}

	render(){
		const index = this.state.index;
		const active = this.props.activeIndex == index;

		return (
			<div className={"pager-item" + (active ? " active" : "")}
				 data-index={index}
				 onClick={this.props.onClick}
			>
				{this.props.children}
			</div>
		);
	}
}


export {Carousel as default};