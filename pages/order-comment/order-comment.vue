<template>
	<view class="content comment">
		<view class="comment-describe">
			<view class="comment-describe__avator">
				<image src="../../static/img/order-avator.jpg" class="comment-describe__avator-img" mode=""></image>
			</view>
			<Stars @click="getStar"></Stars>
		</view>
		<view class="comment-tips">分享你购买体验把</view>
		<view class="comment-textarea">
			<view class="comment-textarea__avator">
				<image src="../../static/img/comment.jpg" class="comment-textarea__avator-img" mode=""></image>
			</view>
			<textarea class="comment-textarea__text" placeholder="宝贝符合您的期待吗？说说你的体验感，分享心得给其他用户可领取积分噢~" name="" id="" cols="30" rows="10"></textarea>
		</view>
		<view class="comment-creame">
			<image src="../../static/img/camera.jpg" class="comment-creame-img" mode=""></image>
			<view class="comment-creame-info">
				上传体验图片/视频即可获得<text class="prink">10</text>积分
			</view>
		</view>
		<view class="comment-label">
			<view class="comment-label_garden"></view>
			<view class="comment-label_text">匿名评价</view>
		</view>
		<view class="comment-tips-more">
			继续评价，赢更多积分~
		</view>
		<view class="comment-service">
			<view class="header">
				<view class="comment-service__label">
					<image class="comment-service__label-icon" src="../../static/img/service-icon.jpg" mode=""></image>
					<text class="comment-service__label-text">售后服务评价</text>
				</view>
				<view class="comment-service__tips">
					评价有机会获得<text class="prink">10</text>积分
				</view>
			</view>
			<view class="box">
				<view class="stars-item">
					<text class="stars-item_label">化妆服务</text>
					 <Stars></Stars>
				</view>
				<view class="stars-item">
					<text class="stars-item_label">拍摄服务</text>
					 <Stars></Stars>
				</view>
				<view class="stars-item">
					<text class="stars-item_label">后期修片</text>
					 <Stars></Stars>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Stars from '@/components/stars/stars.vue';
	export default {
		components: {
			Stars
		},
		data() {
			return {
				
			}
		},
		onLoad() {
		},
		methods: {
			getStar(el) {
				console.log(el)
			}
		}
	}
</script>

<style lang="less" scoped>
.comment{
	padding-top: 20upx;
	padding-bottom: 100upx;
	&-describe{
		display: flex;
		padding: 40upx 23upx 30upx;
		align-items: center;
		background-color: #fff;
		&__avator{
			margin-right: 30upx;
			&-img{
				width: 143upx;
				height: 143upx;
			}
		}
	}
	&-tips{
		font-size: 30upx;
		color: #323335;
		background-color: #F5F5F5;
		padding: 10upx 23upx;
		&-more{
			font-size: 26upx;
			color: #323335;
			padding: 24upx 30upx;
		}
	}
	&-textarea{
		background-color: #fff;
		padding: 30upx 23upx;
		display: flex;
		&__avator{
			&-img{
				width: 42upx;
				height: 42upx;
			}
		}
		&__text{
			flex: 1;
			height: 220upx;
			font-size: 28upx;
			margin-left: 10upx;
		}
		&__text:input-placeholder{
			color: #d8d8d8
		}
	}
	&-creame{
		background-color: #fff;
		border-top: 1px solid #eee;
		padding: 50upx 0;
		&-img{
			width: 82upx;
			height: 70upx;
			display: block;
			margin: 0 auto;
		}
		&-info{
			font-size: 24upx;
			color: #6E6E6E;
			text-align: center;
			margin-top: 5upx;
		}
	}
	&-label{
		display: flex;
		padding: 24upx 30upx;
		background-color: #fff;
		border-top: 1px solid #eee;
		&_garden{
			width: 30upx;
			height: 30upx;
			border: 1px solid #B3B3B3;
			border-radius: 50%
		}
		&_text{
			font-size: 26upx;
			color: #323335;
			margin-left: 10upx;
		}
	}
	&-service{
		background-color: #fff;
		.header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 23upx;
			.comment-service__label{
				&-icon{
					width: 39upx;
					height: 39upx;
					vertical-align: middle
				}
				&-text{
					font-size: 30upx;
					color: #323335;
					vertical-align: middle;
					margin-left: 4upx;
				}
			}
			.comment-service__tips{
				color: #777777;
				font-size: 24upx;
			}
		}
		.box{
			padding: 0 23upx 20upx;
			.stars-item{
				display: flex;
				justify-content: space-between;
				margin-top: 30upx;
				&_label{
					font-size: 28upx;
					color: #323335;
				}
			}
		}
	}
}
</style>
