<template>
	<view class="content">
		<view class="nav-bar">
			<view class='nav-item' :class="{'active': item.active }" v-for="(item, index) in navBars" :key="index" @click="selectNavBar(index)">{{item.text}}</view>
		</view>
		<view class="card-list">
			<view class="card-list__cell" v-for="item in 8">
				<view class="card-list__cell-logo">
					<image src="../../static/img/card.jpg" mode="aspectFill" class="card-list__cell-logo-img"></image>
				</view>
				<view class="card-list__cell-box">
					<image class="card-list__cell-box_new-icon" src="../../static/img/new-icon.png"></image>
					<view class="card-list__cell-box-title">
						<text>盘粉专享</text>盘子女人坊古装摄影个人写真专用券
					</view>
					<view class="card-list__cell-box-tow">
						<text class="card-list__cell-box-tow-time">2019.04.24 - 2019.05.24</text>
						<text class="card-list__cell-box-tow-btn">立即领取</text>
					</view>
					<view class="card-list__cell-box-info">
						<view class="card-list__cell-box-info-text">详细信息</view>
						<view class="card-list__cell-box-info-icon">
							<image class="card-list__cell-box-info-icon-img" src="../../static/img/select-bottom.jpg" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navBars: [
					{ text: '待领取(5)', active: true },
					{ text: '我的券(25)', active: false },
					{ text: '已过期(16)', active: false }
				]
			}
		},
		onLoad() {
			console.log(1111)
		},
		methods: {
			selectNavBar(index) {
				this.navBars.forEach(v => {
					v.active = false;
				})
				this.navBars[index].active = true;
			}
		}
	}
</script>

<style scoped lang="less">
.nav-bar{
	display: flex;
	height: 90upx;
	line-height: 90upx;
	background-color: #FFFFFF;
	z-index: 999;
	.nav-item{
		flex: 1;
		font-size: 34upx;
		color: #26242a;
		text-align: center
	}
	.active{
		color: #26242a;
		font-weight: 500;
		position: relative;
		&:after{
			position: absolute;
			content: '';
			display: block;
			bottom: 0;
			width: 50%;
			left: 25%;
			height: 4upx;
			background-color: var(--prink-bg);
		}
	}
}
.card-list{
	background-color: #fff;
	padding-top: 25upx;
	&__cell{
		display: flex;
		margin-bottom: 25upx;
		box-shadow: 0 2upx 15upx #ccc;
		&-logo{
			&-img{
				width: 240upx;
				height: 200upx;
				vertical-align: middle
			}
		}
		&-box{
			position: relative;
			flex: 1;
			padding: 10upx 25upx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&_new-icon{
				position: absolute;
				z-index: 9;
				right: 0;
				top: 0;
				width: 84upx;
				height: 66upx;
			}
			&-title{
				font-size: 25upx;
				color: #2e2e2e;
				font-weight: bold;
				padding-right: 30upx;
				text{
					background-color: var(--prink-bg);
					padding: 4upx 8upx;
					color: #fff;
					border-radius: 50upx;
					font-size: 20upx;
					margin-right: 10upx;
					font-weight: normal
				}
			}
			&-tow{
				display: flex;
				align-items: center;
				justify-content: space-between;
				&-time{
					font-size: 20upx;
					color: #2e2e2e;
				}
				&-btn{
					padding: 6upx 10upx;
					color: var(--prink);
					border: 1px solid var(--prink-line);
					font-size: 24upx;
					border-radius: 50upx;
				}
			}
			&-info{
				display: flex;
				justify-content: space-between;
				&-text{
					font-size: 20upx;
					color: #2e2e2e
				}
				&-icon{
					&-img{
						width: 21upx;
						height: 21upx;
					}
				}
			}
		}
	}
}
</style>
<style>
	/* #ifdef APP-PLUS */
	.nav-bar{
		position: fixed;
		width: 100%;
		top: 0 !important;
		left: 0;
		display: flex;
	}
	.card-list{
		margin-top: 90upx;
	}
	/* #endif */
	.nav-bar{
		position: fixed;
		width: 100%;
		top: 89upx;
		left: 0;
		display: flex;
	}
	.card-list{
		margin-top: 90upx;
	}
</style>
