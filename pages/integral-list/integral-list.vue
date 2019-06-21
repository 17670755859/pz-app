<template>
	<view class="container">
		<view class="topFlex">
			<navigator class="search-container" url="/pages/search/search">
				<uni-icon class="search-container_search" type="search" size="22"></uni-icon>
				<text class="search-container_placeholder">搜索店内宝贝</text>
			</navigator>
			<view class="tab">
				<view class="tab-item active">
					<text>综合</text>
				</view>
				<view class="tab-item">
					<text>销量</text>
				</view>
				<view class="tab-item">
					<text>新品</text>
				</view>
				<view class="tab-item">
					<text>价格</text>
					<view class="store">
						<view class="store-arrow store-arrowTop">
							<image src="../../static/img/arrowTop-icon.png" mode=""></image>
						</view>
						<view class="store-arrow store-arrowDown">
							<image src="../../static/img/arrowDown-icon.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="product">
			<scroll-view class="scroll-wrapper" scroll-y>
				<view class="product-list">
					<block v-for="(item, index) in 8" :key="index">
						<navigator class="product-list_item" url="/pages/integral-info/integral-info">
							<image class="product-list_item-img" src="../../static/img/jifen-product.jpg" mode=""></image>
							<view class="product-list_item-title">盘子女人坊古装艺术卸责摄影闺蜜</view>
							<view class="product-list_item-info">
								<view class="product-list_item-info-jifen">
									<text class="product-list_item-info-jifen-num">2000</text>
									<text class="product-list_item-info-jifen-company">积分</text>
								</view>
								<view class="product-list_item-want">1.2万人想要</view>
							</view>
						</navigator>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.container{
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: #efefef;
	.topFlex{
		background-color: #fff;
		padding: 20upx 23upx 0;
		.search-container{
			height: 65upx;
			line-height: 65upx;
			background-color: #F4F4F4;
			font-size: 26upx;
			color: #818181;
			border-radius: 40upx;
			padding-left: 30upx;
			&_search{
				vertical-align: middle;
			}
			&_placeholder{
				margin-left: 5upx;
				vertical-align: middle;
			}
		}
		.tab{
			display: flex;
			align-items: center;
			padding: 30upx 10upx;
			&-item{
				margin-right: 80upx;
				font-size: 28upx;
				color: #222121;
				text-align: center;
			}
			&-item.active{
				text{
					background-color: var(--prink-bg);
					color: #fff;
					padding: 2upx 10upx;
					border-radius: 40upx;
					vertical-align: middle
				}
			}
		}
	}
	.store{
		margin-left: 8upx;
		display: inline-block;
		vertical-align: middle;
		.store-arrow{
			margin: 4upx 0;
			font-size: 0;
			image{
				width: 14upx;
				height: 8upx;
				vertical-align: middle
			}
		}
	}
	.product{
		position: relative;
		overflow: hidden;
		flex: 1;
		.scroll-wrapper{
			height: 100%;
		}
		padding: 0 23upx;
		.product-list{
			padding-top: 20upx;
			display: flex;
			flex-wrap: wrap;
			&_item{
				width: 49%;
				margin-bottom: 2%;
				border-radius: 10upx;
				padding-bottom: 20upx;
				background-color: #FFFFFF;
				overflow: hidden;
				&-img{
					width: 100%;
					height: 350upx;
				}
				&-title{
					font-size: 26upx;
					color: #323436;
					margin-top: 10upx;
					padding: 0 10upx;
				}
				&-info{
					margin-top: 15upx;
					padding: 0 10upx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					&-jifen{
						text{
							vertical-align: middle
						}
						&-num{
							color: #FFAF73;
							font-size: 36upx;
						}
						&-company{
							font-szie: 20upx;
							color: #6a6a6a
						}
					}
					&-want{
						font-size: 20upx;
						color: #6a6a6a
					}
				}
			}
			&_item:nth-child(2n){margin-left: 2%;}
		}
	}
}
</style>
