<template>
	<view class="content">
		<view class="message new">
			<view class="message-title">
				<image src="../../static/img/NEW.png" class="message-title__icon"></image>
				<text class="message-title__text">最新消息</text>
			</view>
			<view class="message-list">
				<view class="message-list__cell" v-for="item in 3">
					<view class="message-list__cell-icon">
						<image class="message-list__cell-icon-img" src="../../static/img/message-icon.png"></image>
					</view>
					<view class="message-list__cell-text">
						<view class="message-list__cell-text_title">盘子公告</view>
						<view class="message-list__cell-text_tips">4.23世界读书日，福利社每月满100减50元</view>
					</view>
					<view class="message-list__cell-time">10:00</view>
				</view>
			</view>
		</view>
		<view class="message old">
			<view class="message-title">
				<image src="../../static/img/clock.png" class="message-title__icon"></image>
				<text class="message-title__text">两周前的消息</text>
			</view>
			<view class="message-list">
				<view class="message-list__cell" v-for="item in 8">
					<view class="message-list__cell-icon">
						<image class="message-list__cell-icon-img" src="../../static/img/message-icon.png"></image>
					</view>
					<view class="message-list__cell-text">
						<view class="message-list__cell-text_title">盘子公告</view>
						<view class="message-list__cell-text_tips">4.23世界读书日，福利社每月满100减50元</view>
					</view>
					<view class="message-list__cell-time">10:00</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.message{
	background-color: #fff;
	&-title{
		margin-top: 16upx;
		padding: 30upx;
		&__icon{
			width: 42upx;
			height: 40upx;
			vertical-align: middle
		}
		&__text{
			font-size: 29upx;
			color: #8e9197;
			vertical-align: middle;
			margin-left: 20upx
		}
	}
	&-list{
		&__cell{
			position: relative;
			display: flex;
			padding: 20upx 30upx 30upx;
			&:after{
				position: absolute;
				content: '';
				display: block;
				bottom: 0;
				left: 20%;
				right: 0;
				height: 1px;
				background-color: #EEEEEE
			}
			&-icon{
				margin-right: 30upx;
				&-img{
					width: 95upx;
					height: 95upx
				}
			}
			&-text{
				flex: 1;
				box-sizing: border-box;
				overflow: hidden;
				margin-right: 20upx;
				&_title{
					font-size: 30upx;
					color: #1c1c1c;
				}
				&_tips{
					width: 99%;
					font-size: 26upx;
					color: #969696;
					margin-top: 10upx;
					overflow:hidden; //超出的文本隐藏
					text-overflow:ellipsis; //溢出用省略号显示
					white-space:nowrap; //溢出不换行
				}
			}
			&-time{
				font-size: 22upx;
				color: #969696;
			}
		}
	}
}
</style>
