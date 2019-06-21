<template>
	<view class="content">
		<!-- banner轮播 -->
		<swiper class="banner-box card-swiper" indicator-color="rgba(255,255,255,0)" indicator-active-color="rgba(255,255,255,0)"
		 :indicator-dots="true" :circular="true" :autoplay="true" :interval="3000" :duration="300" @change="cardSwiper">
			<swiper-item class="swiper-box" :class="cardCur==index?'cur':''" v-for="(item, index) in swiperImgs" :key="item.id">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 导航 -->
		<view class="navBox">
			<block v-for="(item, index) in navs" :key="index">
				<navigator class="navBox-item" hover-class="none" :open-type="item.type" :url="item.path">
					<image class="navBox-item_img" :src="item.url" mode="aspectFill"></image>
					<view class="navBox-itAem_title">{{item.title}}</view>
				</navigator>
			</block>
		</view>
		<view class="recommend">
			<!-- 热门主题 -->
			<view class="recommend-content recommend-content_rmzt">
				<view class="recommend-content-header">
					<view class="recommend-content-header__title">热门主题</view>
					<view class="recommend-content-header__tips">The&nbsp;latest&nbsp;topic</view>
				</view>
				<view class="recommend-content_rmzt-body">
					<navigator  class="recommend-content_rmzt-body-list" v-for="(item, index) in themes" :key="item.id" :url="'/pages/theme-info/theme-info?index=' + index">
						<image class="recommend-content_rmzt-body-list__product-img" :src="item.url" mode="aspectFill"></image>
						<view class="recommend-content_rmzt-body-list__info-content">
							<text class="recommend-content_rmzt-body-list__info-content__xl-name">2019新款主题</text>
							<text class="recommend-content_rmzt-body-list__info-content__name">{{item.name}}</text>
							<view class="recommend-content_rmzt-body-list__info-content__right-icon">
								<image class="" src="/static/images/go-in-small.png"
								 mode="aspectFill"></image>
							</view>
						</view>
					</navigator>
				</view>
			</view>

			<!-- 视频 -->
			<view class="recommend-content-video">
				<video
				class="recommend-content-video-play"
				src="http://mmm.pznrfsy.com//uploads/20181230/229a23ff3f60017a3ba3e8f3c8b8d35a.mp4"
				poster="http://mmm.pznrfsy.com//uploads/20181230/d16f0c7963596c51d22e6cb265e8602f.png"></video>
			</view>

			<!-- 明星体验师 -->
			<view class="recommend-content-minxing">
				<view class="recommend-content-minxing-title">
					<image class="recommend-content-minxing-title-logo" src="../../static/img/minxing-logo.jpg" mode=""></image>
					<view class="recommend-content-minxing-title-tag">
						<text>盘子女人坊 明星的选择</text>
					</view>
					<view class="recommend-content-minxing-title-names">张含韵/李念/佟丽娅/汪涵/杨乐乐/安以轩/李思思/郭晓婷/马梦唯/母其弥雅</view>
					<view class="recommend-content-minxing-title-tips">poetic orientic beauty</view>
				</view>
				<view class="recommend-content-minxing-content">
					<view class="recommend-content-minxing-content-list" v-for="(item, index) in 4" :key="index">
						<image class="recommend-content-minxing-content-list-img" :src="'../../static/img/minxing-0' + (index+1) + '.jpg'"
						 mode=""></image>
						<view class="recommend-content-minxing-content-list-info">
							<text class="recommend-content-minxing-content-list-info-name">明星体验师 【安以轩】</text>
							<image class="recommend-content-minxing-content-list-info-goin" src="../../static/images/go-in-big.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<!-- 每周客片 -->
			<view class="recommend-content recommend-content_mzkp">
				<view class="recommend-content-header">
					<view class="recommend-content-header__title">每周客片</view>
					<view class="recommend-content-header__tips">Guest&nbsp;sheet&nbsp;every&nbsp;week</view>
				</view>
				<view class="recommend-content_mzkp-body">
					<navigator :url="'/pages/wedding-info/wedding-info?index=' + index"  class="recommend-content_mzkp-body-list card box-shadow" v-for="(item, index) in weddings" :key="index">
						<image class="recommend-content_mzkp-body-list__product-img" :src="item.url" mode="aspectFill"></image>
						<view class="recommend-content_mzkp-body-list-info-content">
							<image class="recommend-content_mzkp-body-list-info-content__tips" src="/static/images/kp-tips.png" mode="aspectFill"></image>
						</view>
					</navigator>
				</view>
			</view>

			<!-- 全国门店 -->
			<view class="recommend-content recommend-content_qgmd">
				<view class="recommend-content-header">
					<view class="recommend-content-header__title">全国门店</view>
					<view class="recommend-content-header__tips">Store environment</view>
				</view>
				<image class="recommend-content_qgmd-logo" src="../../static/img/all-store.jpg" mode=""></image>
				<swiper class="swiper-box swiper-mendian" :indicator-dots="true" :duration="300">
					<swiper-item class="swiper-box-item" v-for="(item, index) in storeList" :key="index">
						<view class="mendian">
							<navigator url="/pages/store-info/store-info" class="mendian-list" v-for="store in item" :key="store.id">
								<image class="mendian-list-img" :src="store.url" mode=""></image>
								<view class="mendian-list-title">{{store.name}}</view>
							</navigator>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<!-- 客户评价 -->
			<view class="recommend-content recommend-content_khpj">
				<view class="recommend-content-header">
					<view class="recommend-content-header__title">客户评价</view>
					<view class="recommend-content-header__tips">Hot comments</view>
				</view>
				<view class="recommend-content_khpj-box">
					<masonry :arrList="comments"></masonry>
				</view>
			</view>
		</view>
		<!-- <view class="server">
			<image class="server-img" src="../../static/images/kefu.png" mode=""></image>
			<view class="server-text">在线咨询</view>
		</view> -->
	</view>
</template>

<script>
	import Json from '@/Json'
	import masonry from '@/components/zh-masonry/masonry.vue'
	import {createTabView, clearTabView} from '@/common/common'
	export default {
		components: {
			masonry
		},
		data() {
			return {
				cardCur: 0, // banner索引
				navs: [], // 导航
				swiperImgs: [], // 轮播图
				themes: [], // 热门主题
				comments: [{
					id: 'id1',
					img_path: '../../static/img/comment-01.jpg'
				},
				{
					id: 'id2',
					img_path: '../../static/img/comment-02.jpg'
				},
				{
					id: 'id3',
					img_path: '../../static/img/taoxi.png'
				}],
				storeList: [], // 门店列表
				weddings: [], // 客片列表
			}
		},
		onLoad() {
			this.init();
			uni.getStorage({
				key: 'token',
				success: function (res) {
					console.log(res.data);
				},
				fail(res) {
					console.log(res)
				}
			});
		},
		onShow() {
			uni.getStorage({
				key: 'token',
				fail(res) {
					createTabView();
				}
			})
		},
		methods: {
			// 切换轮播图
			cardSwiper(event) {
				this.cardCur = event.detail.current;
			},
			// 初始化
			init() {
				// 模拟数据
				this.navs = Json.navs;
				this.swiperImgs = Json.swiperBanner;
				this.themes = Json.indexList.themes;
				this.weddings = Json.indexList.wedding;
				// this.comments = Json.comments;
				let contentNum = Math.ceil(Json.storeList.length/12);
				for (let i = 0; i < contentNum; i++) {
					this.storeList.push([]);
					let length = (i+1)*12 < Json.storeList.length ? (i+1)*12 : Json.storeList.length;
					for(let j = i*12; j < length; j++) {
						this.storeList[i].push(Json.storeList[j])
					}
				}
				// this.getSwiperBanner();
			},
			
			// 轮播
			async getSwiperBanner() {
				let res = await this.$api.banner();
				if (res) {
					this.swiperImgs = res.data;
				}
			}
		},
		onHide() {
			clearTabView();
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateTo({
					url: '/pages/message-list/message-list'
				})
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '/pages/search/search'
			})
		}
	}
</script>

<style lang="less" scoped>
	.content {
		min-height: 100%;
		background-color: #FDFDFD;
		padding-bottom: calc(var(--window-bottom));
	}

	.navBox {
		display: flex;
		flex-wrap: wrap;
		padding: 0 20upx;

		&-item {
			width: 20%;
			text-align: center;
			margin-bottom: 20upx;

			&_img {
				width: 100upx;
				height: 100upx
			}

			&_title {
				font-size: 24upx
			}
		}

		&-item:active {}
	}

	.recommend {
		background-color: #FDFDFD;

		&-title-box {
			padding: 0 30upx;

			&-link {
				width: 100%;
				height: 76upx;
				line-height: 76upx;
				text-align: center;
				color: #ffffff;
				font-size: 28upx;
				background-color: var(--prink);

				&__coupon-icon {
					width: 26upx;
					height: 26upx;
					vertical-align: middle;
					margin-left: 10upx;
				}

				text {
					vertical-align: middle
				}

				&__text {
					margin-left: 30upx
				}
			}

			&-three {
				margin-top: 40upx;
				display: flex;
				flex-direction: row;
				justify-content: space-around;

				&-item {
					position: relative;
					padding: 8px 0;
					flex: 1;
					text-align: center;
					font-size: 20upx;

					image {
						margin: 0 auto
					}

					view {
						margin-top: 25upx;
					}

					&__yhj {
						width: 49upx;
						height: 47upx;
					}

					&__dq {
						width: 48upx;
						height: 48upx;
					}

					&__hl {
						width: 46upx;
						height: 46upx;
					}
				}

				&-item:nth-child(2):before {
					position: absolute;
					content: '';
					display: block;
					width: 1px;
					height: 100%;
					left: 0;
					top: 0;
					background-color: #eee
				}

				&-item:nth-child(2):after {
					position: absolute;
					content: '';
					display: block;
					width: 1px;
					height: 100%;
					right: 0;
					top: 0;
					background-color: #eee
				}
			}
		}

		&-content {
			padding: 0 30upx;

			&-header {
				text-align: center;
				padding-top: 40upx;
				padding-bottom: 40upx;

				&__title {
					font-size: 35upx;
					font-weight: 700
				}

				&__tips {
					margin-top: 8upx;
					font-size: 14upx;
					text-transform: uppercase;
					letter-spacing: 5upx
				}
			}

			// 热门主题
			&_rmzt-body {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				&-list {
					background-color: #ffffff;
					box-shadow: 0px 40upx 100upx 0px rgba(0, 0, 0, 0.07);
					margin-bottom: 36upx;
					border-radius: 10upx;
					overflow: hidden;
					width: 49%;

					&__product-img {
						width: 100%;
						height: 220upx;
					}

					&__info-content {
						padding: 15upx 10upx;
						display: flex;
						flex-direction: row;
						justify-content: space-between;

						&__xl-name {
							font-size: 24upx;
						}

						&__name {
							flex: 1;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: 24upx;
							font-weight: bold;
						}

						&__right-icon {
							width: 30upx;
							image{
								vertical-align: middle;
								width: 25upx;
								height: 25upx
							}
						}
					}
				}

				&-list:nth-child(2n) {
					margin-left: 2%;
				}
			}

			// 视频
			&-video {
				position: relative;
				height: 430upx;
				margin-top: 60upx;

				&-play {
					width: 100%;
					height: 100%
				}
			}

			// 明星体验师
			&-minxing {
				margin-top: 100upx;

				&-title {
					text-align: center;

					&-logo {
						width: 300upx;
						height: 124upx;
					}

					&-tag {
						margin-top: 20upx;

						text {
							background-color: var(--prink);
							color: #ffffff;
							padding: 4upx 20upx;
							border-radius: 5upx;
							font-size: 14upx;
							letter-spacing: 4upx;
						}
					}

					&-names {
						font-size: 14upx;
						margin-top: 20upx;
						padding: 0 20upx;
					}

					&-tips {
						margin-top: 20upx;
						font-size: 8upx;
						text-transform: uppercase;
					}
				}

				&-content {
					margin-top: 50upx;
					padding: 0 20upx;

					&-list {
						margin-bottom: 54upx;
						box-shadow: 0 4upx 20upx #eee;
						background-color: #ffffff;

						&-img {
							width: 100%;
							height: 350upx;
						}

						&-info {
							padding: 30upx 35upx;
							font-size: 28upx;
							display: flex;
							justify-content: space-between;
							align-items: center;

							&-goin {
								width: 34upx;
								height: 34upx
							}
						}
					}
				}
			}

			// 每周客片
			&_mzkp-body {
				display: flex;
				flex-wrap: wrap;

				&-list {
					margin-bottom: 40upx;
					width: 49%;
					box-shadow: 0 2upx 20upx #C3C3C3;

					&__product-img {
						width: 100%;
						height: 357upx
					}

					&-info-content {
						padding: 20upx;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;

						&__tips {
							width: 100%;
							height: 34upx
						}

						&__name {
							flex: 1;
							font-size: 28upx;
							text-align: right;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						&__right-arrow {
							width: 34upx;
							height: 34upx;
							margin-left: 13upx
						}
					}
				}

				&-list:nth-child(2n) {
					margin-left: 2%;
				}
			}

			// 全国门店
			&_qgmd {
				&-logo {
					width: 100%;
					height: 416upx;
					margin-top: 20upx;
				}

				.swiper-box {
					min-height: 680upx;
					margin-top: 30upx;

					&-item {
						.mendian {
							display: flex;
							flex-wrap: wrap;

							&-list {
								width: 25%;
								text-align: center;
								margin-bottom: 15upx;

								&-img {
									width: 150upx;
									height: 150upx;
								}

								&-title {
									font-size: 22upx;
								}
							}
						}
					}
				}
			}
		}
	}

	.server {
		position: fixed;
		z-index: 99999;
		background-color: var(--prink-bg);
		border-radius: 50upx;
		overflow: hidden;
		right: 23upx;
		top: 55%;
		width: 88upx;
		height: 170upx;
		text-align: center;

		&-img {
			width: 48upx;
			height: 48upx;
			margin-top: 18upx;
		}

		&-text {
			position: relative;
			font-size: 24upx;
			color: #ffffff;
			padding: 8upx 12upx;
		}

		&-text::after {
			position: absolute;
			content: '';
			display: block;
			left: 10%;
			right: 10%;
			top: 0;
			height: 2upx;
			background-color: #ffffff;
		}
	}
</style>
