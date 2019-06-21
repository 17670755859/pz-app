<template>
	<view class="page">
		<view class="history-container">
			<view class="title">
				<text>搜索历史</text>
			</view>
			<view class="tags">
				<view class='cu-tag round lg'>客片</view>
			</view>
		</view>
		<view class="ecommend-container">
			<view class="title">
				<text>热门推荐</text>
			</view>
			<view class="tags">
				<view class="item">
					<text class="icon-hotfill text-pink"></text>
					<text class="text">影视同款</text>
				</view>
				<view class="item">
					<text class="icon-hotfill text-pink"></text>
					<text class="text">个人写真</text>
				</view>
				<view class="item">
					<text class="icon-title"></text>
					<text class="text">知否</text>
				</view>
				<view class="item">
					<text class="icon-title"></text>
					<text class="text">最美客片</text>
				</view>
				<view class="item">
					<text class="icon-title"></text>
					<text class="text">延禧攻略</text>
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
			
		},
		// 导航栏按钮
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) { // 消息
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="less">
	page{
		background-color: #ffffff
	}
.page{
	background-color: #ffffff;
	padding: 0 23upx;
	padding-top: 20upx;
	.history-container, .ecommend-container{
		border-bottom: 1px solid #eeeeee;
		.title{
			font-size: 28upx;
			font-weight: bold;
			margin-top: 10upx
		}
		.tags{
			padding: 26upx 4upx;
		}
	}
	.ecommend-container{
		border: none;
		.tags{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			.item{
				width: 50%;
				margin-bottom: 48upx;
				.text{
					color: #424242;
					font-size: 28upx;
					margin-left: 10upx;
				}
				.icon-title{
					color: #D9BDA8
				}
			}
		}
	}
}
</style>
