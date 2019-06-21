<template>
	<view class="tabs">
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view class="text-center space-around" :class="{flex: tabBars.length <= 5}">
				<view v-for="(item,index) in tabBars" :key="index" class="nav-item" :class="[index === tabCurrentIndex && 'current']"
			 :id="'tab'+index" @tap="changeTab(index)">{{item.title}}</view>
			</view>
		</scroll-view>
		<view class="tab-pane-view" @touchstart='touchstart' @touchend='touchend'>
			<view class="tab-pane-group" :style="{transform:transformXx}">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
let windowWidth = 0, scrollTimer = false, tabBar;
export default {
	name: 'Tabs',
	props: {
		tabBars: {
			type: Array,
			default: () => {
				return []
			}
		},
		currentIndex: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			start: 0,
			scrollLeft: 0, // tab距离左侧
			tabCurrentIndex: this.currentIndex, // 选中tab下标
		}
	},
	computed: {
		transformXx() {
			let tabCurrentIndex = this.tabCurrentIndex;
			return `translate3d(-${tabCurrentIndex*100}%, 0px, 0px)`
		}
	},
	mounted() {
		// 获取屏幕宽度
		windowWidth = uni.getSystemInfoSync().windowWidth;
	},
	methods: {
		//tab切换
		async changeTab(e) {
			if (scrollTimer) {
				//多次切换只执行最后一次
				clearTimeout(scrollTimer);
				scrollTimer = false;
			}
			let index = e;
			//e=number为点击切换，e=object为swiper滑动切换
			if (typeof e === 'object') {
				index = e.detail.current
			}
			if (typeof tabBar !== 'object') {
				tabBar = await this.getElSize("nav-bar")
			}
			//计算宽度相关
			let width = 0;
			let nowWidth = 0;
			//获取可滑动总宽度
			for (let i = 0; i <= index; i++) {
				// let result = await this.getElSize('tab' + i);
				width += 75;
				if (i === index) {
					nowWidth = 75;
				}
			}
			if (typeof e === 'number') {
				//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
				this.tabCurrentIndex = index;
			}
			
			//延迟300ms,等待swiper动画结束再修改tabbar
			scrollTimer = setTimeout(() => {
				if (width - nowWidth / 2 > windowWidth / 2) {
					//如果当前项越过中心点，将其放在屏幕中心
					let scrollLeft = width - nowWidth / 2 - windowWidth / 2;
					this.scrollLeft = 100;
				} else {
					this.scrollLeft = 0;
				}
				if (typeof e === 'object') {
					this.tabCurrentIndex = index;
				}
				this.tabCurrentIndex = index;
		
				
				//第一次切换tab，动画结束后需要加载数据
				let tabItem = this.tabBars[this.tabCurrentIndex];
				if (this.tabCurrentIndex !== 0 && tabItem.loaded !== true) {
					// 这里请求后台数据 第一次请求10条 this.getDataList()
					tabItem.loaded = true;
					this.$emit('click', this.tabCurrentIndex)
				}
			}, 350)
		},
		// 开始滑动容器
		touchstart(e) {
			this.start = e.touches[0].clientX;
		},
		// 结束滑动
		touchend(e) {
			let end = e.changedTouches[0].clientX;
			if (end - this.start > 80 && this.tabCurrentIndex >= 1) {
				this.changeTab(this.tabCurrentIndex - 1)
			} else if (this.start - end > 80 && this.tabCurrentIndex < this.tabBars.length - 1) {
				this.changeTab(this.tabCurrentIndex + 1)
			}
		},
		//获得元素的size
		getElSize(id) {
			return new Promise((res, rej) => {
				let el = uni.createSelectorQuery().select('#tab' + id);
				el.fields({
					size: true,
					scrollOffset: true
				}, (data) => {
					res(data);
				}).exec();
			});
		}
	}
}
</script>

<style lang="scss" scoped>
	.tabs{
		height: 100%;
		overflow: hidden;
		.tab-pane-view{
			position: relative;
			height: calc(100% - 90upx);
			flex: 1;
			.tab-pane-group{
				white-space: nowrap;
				-webkit-transition: all .3s;
				transition: all .3s;
				width: 100%;
				overflow: visible;
				will-change: transform, left, top;
				min-height: 100upx;
				height: 100%;
				
			}
		}
	}
	/* 顶部tabbar */
	.nav-bar {
		position: relative;
		z-index: 10;
		height: 90upx;
		white-space: nowrap;
		box-shadow: 0 2upx 8upx rgba(0, 0, 0, .06);
		background-color: #fff;
		.nav-item{
			display: inline-block;
			margin: 0 auto;
			width: 150upx;
			height: 90upx;
			text-align: center;
			padding: 0 10upx;
			line-height: 90upx;
			font-size: 30upx;
			color: #303133;
			position: relative;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
		.nav-item:after{
			content: '';
			width: 0;
			height: 0;
			border-bottom: 4upx solid #FA9EB6;
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);
			transition: .3s;
		}
		.current{
			color: #FA9EB6;
		}
		.current:after{
			width: 50%;
		}
	}
</style>
<style scoped>
/* #ifdef APP-PLUS */
.tabs{
		height: 100vh !important;
	}
/* #endif */
</style>
