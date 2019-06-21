<template>
	<view class="content">
		<view class="header-content">
			<image class="header-content__bg" src="/static/images/info-banner.png" mode="aspectFill"></image>
			<view class="header-content-box">
				<navigator url="/pages/settingInfo/settingInfo" class="header-content-box__avator box-shadow">
					<image :src="userInfo.head ? baseUrl + userInfo.head : '../../static/img/avator.png'" mode="aspectFill"></image>
				</navigator>
				<view class="header-content-box-info">
					<view class="header-content-box-info-top">
						<text class="header-content-box-info-top__name">{{userInfo.real_name}}</text>
						<image class="header-content-box-info-top__vip" src="/static/images/vip.png" mode="aspectFill"></image>
					</view>
					<navigator class="header-content-box-info-sgin box-shadow" url="/pages/sign/sign">
						<image src="/static/images/sgin.png" mode="aspectFill"></image>
					</navigator>
				</view>
				<image class="header-content-box__member" src="/static/images/huiyuan-fuli.png" mode="aspectFill"></image>
			</view>
		</view>

		<!-- 我的订单 -->
		<view class="order">
			<view class="order-title">
				<view class="order-title__name">我的订单</view>
				<navigator class="order-title__link" url="/pages/order/order">
					<text>查看全部</text>
					<uni-icon type="arrowright" color="#8F8F8F" size="20"></uni-icon>
				</navigator>
			</view>
			<view class="order-box">
				<view class="order-box_item" v-for="(item, index) in goods" :key="index">
					<navigator :url="'/pages/order/order?index=' + index" hover-class="none">
						<view class="order-box_item-img">
							<image :src="item.icon" mode="aspectFill"></image>
							<uni-badge v-if="item.badge > 0" class="order-box_item-img__badge" :text="item.badge" type="error"></uni-badge>
						</view>
						<view class="order-box_item__text">{{item.name}}</view>
					</navigator>
				</view>
			</view>
		</view>

		<!-- 导航列表 -->
		<view class="list box-shadow">
			<view v-for="(item, index) in routerLink" :key="index">
				<navigator class="list-cell" hover-class="none" :url="item.path">
					<view class="list-cell__content">
						<image class="list-cell__content-icon" :src="item.icon" mode="aspectFill"></image>
						<text>{{item.name}}</text>
					</view>
					<view class="list-cell__extra">
						<uni-icon type="arrowright" color="#8F8F8F" size="20"></uni-icon>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import uniBadge from '@/components/uni-badge/uni-badge.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		components: {
			uniIcon,
			uniBadge
		},
		data() {
			return {
				baseUrl: this.$BaseUrl,
				goods: [{
						icon: '/static/images/router-02.jpg',
						name: '待发货',
						badge: 0
					},
					{
						icon: '/static/images/router-03.jpg',
						name: '待收货',
						badge: 0
					},
					{
						icon: '/static/images/router-04.jpg',
						name: '评论',
						badge: '3'
					},
					{
						icon: '/static/images/router-05.jpg',
						name: '退换/售后',
						badge: 0
					}
				],
				routerLink: [{
						icon: '/static/images/center-02.jpg',
						name: '我的积分'
					},
					{
						icon: '/static/images/center-03.jpg',
						name: '我发布的',
						path: '/pages/publish-list/publish-list'
					},
					{
						icon: '/static/images/center-04.jpg',
						name: '排行榜'
					},
					{
						icon: '/static/images/center-05.jpg',
						name: '我的收藏'
					},
					{
						icon: '/static/images/center-06.jpg',
						name: '关于我们'
					}
				]
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) { // 消息
				uni.navigateTo({
					url: '/pages/message-list/message-list'
				})
			} else if (index === 1) { // 购物车
				uni.navigateTo({
					url: '/pages/setting/setting'
				})
			}
		}
	}
</script>
<style>
	.content {
		padding-bottom: calc(var(--window-bottom) + 40upx);
	}

	/* #ifdef APP-PLUS */
	.content {
		padding-bottom: 20upx;
	}

	/* #endif */
	/* #ifdef MP-WEIXIN */
	.content {
		padding-bottom: 20upx;
	}

	/* #endif */
</style>
<style lang="less" scoped>
	.header-content {
		height: 308upx;
		display: flex;
		align-items: center;
		position: relative;

		&__bg {
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 308upx;
		}

		&-box {
			margin-left: 25upx;
			display: flex;
			flex-direction: row;
			align-items: center;

			&__avator {
				position: relative;
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			&-info {
				margin-left: 24upx;

				&-top {
					&__name {
						font-size: 33upx;
						color: #fff;
					}

					&__vip {
						width: 103upx;
						height: 27upx;
						margin-left: 20upx;
					}
				}

				&-sgin {
					width: 160upx;
					height: 46upx;
					background-color: #FAB3C6;
					margin-top: 15upx;
					border-radius: 40upx;
					display: flex;
					align-items: center;
					text-align: center;

					image {
						width: 127upx;
						height: 26upx;
						vertical-align: middle;
						margin-left: 16.5upx;
					}
				}
			}

			&__member {
				position: absolute;
				z-index: 8;
				width: 206upx;
				height: 124upx;
				right: 0;
				bottom: 4upx;
			}
		}
	}

	// 我的订单
	.order {
		border-radius: 20upx;
		position: relative;
		margin-left: 30upx;
		margin-right: 30upx;
		margin-top: 36upx;
		background-color: #fff;
		box-shadow: 0upx 4upx 40upx 0upx rgba(0, 0, 0, 0.07);

		&-title {
			padding: 20upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #DCDCDC;

			&__name {
				font-size: 34upx;
				color: #1E1B1C;
			}

			&__link {
				font-size: 23upx;
				color: #8F8F8F;
			}
		}

		&-box {
			padding: 25upx 0;
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			&_item {
				flex: 1;

				&-img {
					position: relative;
					margin: 0 auto;
					width: 60upx;
					height: 60upx;

					image {
						width: 100%;
						height: 100%;
					}

					&__badge {
						position: absolute;
						z-index: 8;
						right: -20upx;
						top: -15upx;
					}
				}

				&__text {
					font-size: 23upx;
					color: #505050;
					text-align: center;
					margin-top: 25upx;
				}
			}
		}
	}

	// 路由列表
	.list {
		border-radius: 20upx;
		background-color: #fff;
		margin-top: 20upx;
		margin-left: 30upx;
		margin-right: 30upx;
		overflow: hidden;

		&-cell {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 36upx 20upx 36upx 36upx;

			&:after {
				position: absolute;
				content: '';
				display: block;
				height: 1px;
				left: 36upx;
				right: 0;
				bottom: 0;
				background-color: #F1F1F1;
			}

			&__content {
				&-icon {
					width: 50upx;
					height: 50upx;
					vertical-align: middle
				}

				text {
					vertical-align: middle;
					font-size: 26upx;
					margin-left: 10upx;
				}
			}
		}

		&-cell:active {
			background-color: #F9F9F9;
		}
	}
</style>
