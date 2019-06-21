<template>
	<view class="container">
		<view class="box-cell" v-for="(item, index) in 1" :key="index">
			<view class="box-cell__conotent">
				<view class="box-cell__conotent-avator">
					<image class="box-cell__conotent-avator-img" src="../../static/img/taoxi.png" mode=""></image>
				</view>
				<view class="box-cell__conotent-info">
					<view class="box-cell__conotent-info_title">在盘子女人坊第一套服装</view>
					<view class="box-cell__conotent-info_text">
						<text class="box-cell__conotent-info_text-ly">留言 24</text>
						<text class="box-cell__conotent-info_text-ll">浏览 184</text>
					</view>
				</view>
			</view>
			<view class="box-cell__footer">
				<view class="box-cell__footer-time">2019.04.25 08:26</view>
				<view class="box-cell__footer-edit">
					<button size="mini" type="default" class="box-cell__footer-edit_bj">编辑</button>
					<button size="mini" type="default" class="box-cell__footer-edit_more">更多</button>
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
.box-cell{
	margin-top: 20upx;
	background-color: #FFF;
	padding: 30upx 23upx;
	&__conotent{
		display: flex;
		padding-bottom: 40upx;
		border-bottom: 1px solid #E3E3E3;
		&-avator{
			&-img{
				width: 155upx;
				height: 155upx;
			}
		}
		&-info{
			margin-left: 30upx;
			&_title{
				font-size: 28upx;
				color: #201f1f;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			&_text{
				margin-top: 30upx;
				font-size: 25upx;
				color: #888787;
				&-ll{
					margin-left: 60upx;
				}
			}
		}
	}
	&__footer{
		margin-top: 20upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-time{
			font-size: 25upx;
			color: #888787;
		}
		&-edit{
			&_more{
				margin-left: 30upx;
			}
		}
	}
}
</style>
