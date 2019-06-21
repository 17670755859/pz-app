<template>
	<view class="container">
		<view class="header">
			<image src="../../static/img/task-bg.jpg" class="header-bg" mode=""></image>
			<view class="content">
				<view class="qiandao">
					<image src="../../static/img/qiandao-icon.png" mode=""></image>
					<text>已签到</text>
				</view>
				<view class="tips">已连续签到2天, 继续加油！</view>
			</view>
		</view>
		<ss-calendar class="calendar" :checks="checks"/>
		<view class="other-active">
			<view class="title">其他活动</view>
			<view class="box">
				<view class="box-cell">
					<view class="box-cell_avator">
						<image class="box-cell_avator-img" src="../../static/img/gift-icon.png" mode=""></image>
					</view>
					<view class="box-cell_content">
						<view class="box-cell_content-title">新用户大礼包</view>
						<view class="box-cell_content-tips">第一次注册并登录</view>
						<view class="box-cell_content-jifen">积分+100</view>
					</view>
					<view class="btn active">领取</view>
				</view>
				<view class="box-cell">
					<view class="box-cell_avator">
						<image class="box-cell_avator-img" src="../../static/img/sign-icon.png" mode=""></image>
					</view>
					<view class="box-cell_content">
						<view class="box-cell_content-title">次日登录有奖</view>
						<view class="box-cell_content-tips">首次登录后第二天继续登录</view>
						<view class="box-cell_content-jifen">积分+100</view>
					</view>
					<view class="btn">次日领取</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ssCalendar from '@/components/ss-calendar/ss-calendar.vue'
	export default {
		components: {
			ssCalendar
		},
		data() {
			return {
				checks: []
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.container{
	background-color: #FFFFFF
}
.header{
	position: relative;
	height: 500upx;
	background-color: transparent;
	.header-bg{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.content{
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding-top: 50upx;
		.qiandao{
			border: 1px solid #Fff;
			border-radius: 50upx;
			width: 250upx;
			height: 85upx;
			line-height: 85upx;
			text-align: center;
			margin: 0 auto;
			image{
				width: 39upx;
				height: 36upx;
				vertical-align: middle
			}
			text{
				font-szie: 36upx;
				color: #Fff;
				vertical-align: middle;
				margin-left: 10upx
			}
		}
		.tips{
			text-align: center;
			color: #Fff;
			font-size: 30upx;
			margin-top: 20upx
		}
	}
}
.other-active{
	margin-top: 30upx;
	padding: 0 23upx;
	background-color: #FFFFFF;
	.title{
		font-size: 36upx;
		color: #222222;
		padding: 40upx 30upx;
	}
	.box{
		&-cell{
			position: relative;
			padding: 30upx 30upx 40upx;
			display: flex;
			justify-content: space-between;
			&:after{
				position: absolute;
				content: '';
				display: block;
				left: 20%;
				right: 0;
				bottom: 0;
				background-color: #F3F3F3;
				height: 1px;
			}
			&_avator{
				&-img{
					width: 88upx;
					height: 88upx;
				}
			}
			&_content{
				flex: 1;
				margin-left: 20upx;
				&-title{
					font-size: 32upx;
					color: #222222;
				}
				&-tips{
					font-size: 24upx;
					color: #999999;
				}
				&-jifen{
					font-size: 24upx;
					color: var(--prink);
				}
			}
			.btn{
				color: #Fff;
				width: 130upx;
				height: 50upx;
				line-height: 50upx;
				border-radius: 50upx;
				text-align: center;
				font-size: 24upx;
				background-color: #AFAFAF;
				margin-top: 10upx;
			}
			.active{
				background-color: var(--prink-bg);
			}
		}
	}
}
</style>
