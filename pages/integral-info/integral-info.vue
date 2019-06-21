<template>
	<view class="container">
		<!-- 宝贝 -->
		<view class="baby">
			<swiper class="swiper-box">
				<swiper-item class="swiper-box-item" v-for="(item, index) in banners" :key="index">
					<image class="swiper-box-item_img" :src="item" mode="aspectFill" @click="previewImageHnadler(index)"></image>
				</swiper-item>
			</swiper>
			<view class="baby-info">
				<view class="baby-info__content">
					<view class="baby-info__content-text">盘子女人坊古装艺术写真摄影情侣闺蜜照 明星同款主题</view>
					<view class="baby-info__content-share" @click="shareProduct">
						<image src="../../static/img/share-1.png" class="baby-info__content-share-icon" mode=""></image>
					</view>
				</view>
				<view class="baby-info__price">
					<text class="baby-info__price-num">2000</text>
					<text class="baby-info__price-company">积分</text>
					<text class="baby-info__price-tag">积分商城</text>
				</view>
				<view class="baby-info__kuaidi">
					<text class="baby-inf o__kuaidi-price">快递: 0.00</text>
					<text class="">已参与：2次</text>
					<text class="baby-info__kuaidi-address">湖南长沙</text>
				</view>
			</view>
			<view class="baby-cell">
				<view class="baby-cell-list">
					<view class="baby-cell-list__label">优惠</view>
					<view class="baby-cell-list__content">
						<view class="baby-cell-list__content-title">领券后至少可减</view>
					</view>
					<view class="baby-cell-list__extra">
						<view class="baby-cell-list__extra-label">领券</view>
						<uni-icon type="arrowright" size="26" color="#666666"></uni-icon>
					</view>
				</view>
				<view class="baby-cell-list">
					<view class="baby-cell-list__label">选择</view>
					<view class="baby-cell-list__content">
						<view class="baby-cell-list__content-title">请选择规格</view>
					</view>
					<view class="baby-cell-list__extra">
						<view class="baby-cell-list__extra-label"></view>
						<uni-icon type="arrowright" size="26" color="#666666"></uni-icon>
					</view>
				</view>
			</view>
		</view>
		<!-- 评价 -->
		<view class="appraise">
			<view class="appraise-title">
				<view class="appraise-title_label">宝贝评价 (1)</view>
				<view class="appraise-title_extra">
					<view class="appraise-title_extra-more">查看全部</view>
					<uni-icon type="arrowright" size="26" color="#FA9EB6"></uni-icon>
				</view>
			</view>
			<view class="appraise-content">
				<view class="appraise-content-people">
					<image src="../../static/img/rm-avator.png" class="appraise-content-people_img" mode=""></image>
					<text class="appraise-content-people_name">萧萧 **</text>
				</view>
				<view class="appraise-content-commont">质量还行吧,新手不太懂,哈哈哈啊哈哈哈哈哈哈哈哈哈</view>
			</view>
			<view class="appraise-shop">
				<view class="appraise-shop-header">
					<view class="appraise-shop-header-avator">
						<image src="../../static/img/shop.png" mode=""></image>
					</view>
					<view class="appraise-shop-header-content">
						<view class="appraise-shop-header-content_name">盘子女人坊服务旗舰店</view>
						<view class="appraise-shop-header-content-rz">
							<view class="appraise-shop-header-content-rz_dp">
								<image src="../../static/img/renzheng.png" mode=""></image>
								<text>店铺认证</text>
							</view>
							<view class="appraise-shop-header-content-rz_dp">
								<image src="../../static/img/renzheng.png" mode=""></image>
								<text>店铺认证</text>
							</view>
						</view>
					</view>
					<view class="appraise-shop-header-all">
						<text class="appraise-shop-header-all_btn hollow">全部宝贝</text>
						<text class="appraise-shop-header-all_btn solid">进店逛逛</text>
					</view>
				</view>
				<view class="appraise-shop-footer">
					<view class="appraise-shop-footer-box">
						<text>宝贝描述 4.8</text>
						<text class="bg-gray">平</text>
					</view>
					<view class="appraise-shop-footer-box">
						<text>卖家服务 4.8</text>
						<text class="bg-gray">平</text>
					</view>
					<view class="appraise-shop-footer-box">
						<text>物流服务 4.8</text>
						<text class="bg-gray">平</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 详情 -->
		<view class="details">
			<view class="details-title">
				<view class="details-title_label">产品描述</view>
				<view class="details-title_tips">product description</view>
			</view>
			<view class="details-content">
				<image src="../../static/img/product-info-img01.jpg" mode=""></image>
			</view>
		</view>
		<!-- 推荐 -->
		<view class="recommend"></view>
		<view class="footer">
			<view class="label">
				<image src="../../static/img/pz-text.jpg" mode=""></image>
			</view>
			<view class="logo">
				<image src="../../static/img/footer-logo.png" mode=""></image>
			</view>
		</view>
		<view class="buy-container">
			<view class="buy-container_btns" @click="exchangeHandler">立即兑换</view>
		</view>
		<view class="popup" v-show="showPopupBottomShare" @click.stop="showPopupBottomShare = false">
			<view class="popup-box">
				<view class="popup-box_title">分享到</view>
				<view class="popup-box_path">
					<view class="popup-box_path-item">
						<image src="../../static/img/share-weixin.jpg" mode=""></image>
						<view class="popup-box_path-item-title">微信</view>
					</view>
					<view class="popup-box_path-item">
						<image src="../../static/img/share-friends.jpg" mode=""></image>
						<view class="popup-box_path-item-title">朋友圈</view>
					</view>
					<view class="popup-box_path-item">
						<image src="../../static/img/share-qq.jpg" mode=""></image>
						<view class="popup-box_path-item-title">QQ</view>
					</view>
					<view class="popup-box_path-item">
						<image src="../../static/img/share-bolg.png" mode=""></image>
						<view class="popup-box_path-item-title">微博</view>
					</view>
				</view>
				<view class="popup-box_cancel">取消</view>
			</view>
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
				showPopupBottomShare: false,
				bottomData: [
					{ icon: '', text: '微信' },
					{ icon: '', text: '朋友圈' },
					{ icon: '', text: 'QQ' },
					{ icon: '', text: '新浪微博' },
				],
				banners: ['../../static/img/product-info-img01.jpg','../../static/img/product-info-img.jpg']
			}
		},
		methods: {
			// 分享
			shareProduct() {
				this.showPopupBottomShare = true;
			},
			// 兑换积分商品
			exchangeHandler() {
				if (!this.$store.getters.hasLogin) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					// 兑换
					uni.navigateTo({
						url: '/pages/exchange/exchange'
					})
				}
			},
			
			// 预览图片
			previewImageHnadler(index) {
				// #ifdef APP-PLUS
				plus.nativeUI.previewImage(this.banners, {
					current: index,
					indicator: 'number',
					loop: true
				})
				// #endif
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		padding-bottom: 100upx;
	}
	.buy-container{
		padding-top: 10upx;
		height: 100upx;
		line-height: 100upx;
		position: fixed;
		width: 100%;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9;
		background-color: #FFFFFF;
		&_btns{
			height: 80upx;
			line-height: 80upx;
			width: 70%;
			margin: 0 auto;
			background-color: var(--prink-bg);
			text-align: center;
			color: #FFFFFF;
			font-size: 34upx;
			box-shadow: 2upx 0 20upx var(--prink);
			border-radius: 50upx;
		}
	}
	.baby {
		.swiper-box {
			height: 750upx;

			&-item {
				&_img {
					width: 100%;
					height: 100%;
				}
			}
		}
		
		&-info{
			background-color: #FFFFFF;
			padding: 20upx 23upx;
			&__price{
				margin-top: 10upx;
				&-num{
					font-size: 34upx;
					color: #FFAF73;
				}
				&-company{
					font-size: 20upx;
					color: #878787;
					margin-left: 10upx
				}
				&-tag{
					background-color: var(--prink-bg);
					font-size: 18upx;
					border-radius: 5upx;
					padding: 2upx 6upx;
					margin-left: 20upx;
					color: #FFFFFF
				}
			}
			
			&__content{
				display: flex;
				justify-content: space-between;
				margin-top: 8upx;
				&-text{
					flex: 1;
					font-size: 30upx;
					color: #323436;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				&-share{
					width: 20%;
					text-align: right;
					&-icon{
						width: 38upx;
						height: 38upx;
						vertical-align: middle;
					}
				}
			}
			
			&__kuaidi{
				margin-top: 10upx;
				font-size: 24upx;
				color: #999999;
				display: flex;
				justify-content: space-between;
			}
		}
		
		&-cell{
			margin-top: 20upx;
			margin-bottom: 20upx;
			background-color: #FFFFFF;
			&-list{
				padding: 30upx 25upx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #F5F5F5;
				&__label{
					font-size: 28upx;
					color: #999999;
				}
				&__content{
					width: 50%;
					margin-left: 25upx;
					flex: 1;
					&-title{
						font-size: 24upx;
						color: #333333;
					}
					&-tips{
						font-size: 20upx;
						color: #a1a1a1;
						margin-top: 5upx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
				}
				&__extra{
					display: flex;
					align-items: center;
					justify-content: flex-end;
					width: 30%;
					&-label{
						font-size: 24upx;
						color: #999999;
						margin-right: 8upx;
					}
				}
			}
			&-list:active{
				background-color: #F9F9F9;
			}
			&-list:last-child{
				border: none;
			}
		}
	}
	
	.appraise{
		&-title{
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #FFFFFF;
			padding: 20upx 23upx;
			&_label{
				font-size: 27upx;
				color: #333333;
			}
			&_extra{
				display: flex;
				align-items: center;
				&-more{
					font-size: 24upx;
					color: var(--prink);
				}
			}
		}
		&-content{
			background-color: #FFFFFF;
			padding: 0 23upx;
			&-people{
				display: flex;
				align-items: center;
				&_img{
					width: 50upx;
					height: 50upx;
				}
				&_name{
					font-size: 28upx;
					color: #999999;
					margin-left: 20upx;
				}
			}
			&-commont{
				font-size: 24upx;
				color: #333333;
				padding: 20upx 0;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		}
		&-shop{
			background-color: #FFFFFF;
			margin-top: 20upx;
			padding: 30upx 23upx 0;
			&-header{
				display: flex;
				&-avator{
					image{
						width: 100upx;
						height: 100upx;
					}
				}
				&-content{
					flex: 1;
					margin-left: 28upx;
					&_name{
						font-size: 28upx;
						color: #333333;
					}
					&-rz{
						display: flex;
						justify-content: space-between;
						margin-top: 4upx;
						&_dp{
							image{
								width: 24upx;
								height: 24upx;
								vertical-align: middle;
							}
							text{
								font-size: 20upx;
								color: #666666;
								vertical-align: middle;
								margin-left: 4upx;
							}
						}
					}
				}
				&-all{
					text-align: right;
					margin-left: 50upx;
					&_btn{
						font-size: 22upx;
						padding: 4upx 6upx;
						border: 1px solid var(--prink-line);
						border-radius: 30upx;
					}
					&_btn.hollow{
						color: var(--prink);
					}
					&_btn.solid{
						color: #FFFFFF;
						background-color: var(--prink-bg);
						margin-left: 20upx;
					}
				}
			}
			&-footer{
				display: flex;
				justify-content: space-between;
				padding: 20upx;
				font-size: 22upx;
				color: #7f7f7f;
				.bg-gray{
					background-color: #E5E5E5;
					border-radius: 50%;
					margin-left: 10upx;
				}
			}
		}
	}
	.details{
		background-color: #FFFFFF;
		margin-top: 20upx;
		padding: 20upx 23upx 0;
		&-title{
			border-left: 8upx solid var(--prink);
			padding-left: 4upx;
			&_label{
				font-size: 32upx;
				color: #353434;
			}
			&_tips{
				font-size: 10upx;
				color: #1b000a;
				text-transform: uppercase;
			}
		}
		&-content{
			margin-top: 30upx;
			image{
				width: 100%;
				height: 812upx;
			}
		}
	}
	.footer{
		background-color: #FFFFFF;
		padding: 130upx 0 20px;
		.label{
			text-align: center;
			image{
				width: 280upx;
				height: 270upx;
			}
		}
		.logo{
			text-align: center;
			margin-top: 90upx;
			image{
				width: 186upx;
				height: 165upx;
			}
		}
	}
	
	// 分享弹框
	.popup{
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,.7);
		&-box{
			background-color: #FFFFFF;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			border-top-left-radius: 50upx;
			border-top-right-radius: 50upx;
			&_title{
				color: var(--prink);
				font-size: 30upx;
				text-align: center;
				padding-top: 40upx;
			}
			&_path{
				display: flex;
				margin-top: 50upx;
				&-item{
					flex: 1;
					image{
						width: 100upx;
						height: 100upx;
						display: block;
						margin: 0 auto;
					}
					&-title{
						font-size: 22upx;
						color: #7c7c7c;
						margin-top: 10upx;
						text-align: center;
					}
				}
			}
			&_cancel{
				text-align: center;
				margin-top: 40upx;
				padding: 30upx 0;
				text-align: center;
				font-size: 34upx;
				color: #7c7c7c;
				border-top: 1px solid #ccc;
			}
		}
	}
</style>
