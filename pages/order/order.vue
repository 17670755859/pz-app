<template>
	<Tabs :tabBars="TabList" :windowWidth="windowWidth" :currentIndex="current">
		<TabPane v-for="(item, index) in TabList" :key="index">
			<!-- 全部 -->
			<view class="order">
				<view class="order-list" v-for="(item, index) in 8" :key="index">
					<view class="order-list_title">
						<view class="order-list_title-left">
							<image class="order-list_title-left_img" src="../../static/images/store-icon.png" mode=""></image>
							<text class="order-list_title-left_text">积分商城</text>
						</view>
						<view class="order-list_title-right">已发货</view>
					</view>
					<view class="order-list_body">
						<view class="order-list_body-avator">
							<image class="order-list_body-avator-img" src="../../static/img/product-img.jpg" mode=""></image>
						</view>
						<view class="order-list_body-info">
							<view class="order-list_body-info-title">油画布框-异形30寸</view>
							<view class="order-list_body-info-specs">规格：钢化玻璃封面（红色）</view>
						</view>
						<view class="order-list_body-unit">
							<view class="order-list_body-unit-jifen">2000积分</view>
							<view class="order-list_body-unit-orderjifen">3000积分</view>
							<view class="order-list_body-unit-num">×1</view>
						</view>
					</view>
					<view class="order-list_footer">
						<view class="order-list_footer-census">
							<text class="order-list_footer-census-label">共1件商品 合计：</text>
							<text class="order-list_footer-census-price">￥2000.00</text>
						</view>
						<view class="order-list_footer-btns">
							<view class="order-list_footer-btns_more">更多</view>
							<view class="order-list_footer-btns_see order-list_footer-btns_btn">查看更多</view>
							<view class="order-list_footer-btns_buy order-list_footer-btns_btn">再次购买</view>
							<navigator class="order-list_footer-btns_comment order-list_footer-btns_btn" url="/pages/order-comment/order-comment">追加评论</navigator>
						</view>
					</view>
				</view>
			</view>
		</TabPane>
	</Tabs>
</template>

<script>
	import Tabs from '@/components/tabs/tabs.vue'
	import TabPane from '@/components/tabs/tabPane.vue'
	export default {
		components: {
			Tabs,
			TabPane
		},
		data() {
			return {
				windowWidth: 0, // 视口宽度
				current: 0,
				TabList: [{
						title: '全部'
					},
					{
						title: '待发货'
					},
					{
						title: '待收货'
					},
					{
						title: '待评价'
					},
					{
						title: '售后'
					}
				]
			}
		},
		onLoad(query) {
			this.windowWidth = uni.getSystemInfoSync().windowWidth;
			this.current = parseInt(query.index)+1 || 0;
		},
		methods: {
			tabsChange(index) {
				this.current = index
			}
		}
	}
</script>

<style lang="less" scoped>
.order{
	&-list{
		margin-top: 20upx;
		background-color: #FFFFFF;
		&_title{
			padding: 20upx 23upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&-left{
				&_img{
					width: 27upx;
					height: 25upx;
					vertical-align: middle
				}
				&_text{
					font-size: 26upx;
					color: #9a9a9a;
					vertical-align: middle;
					margin-left: 4upx;
				}
			}
			&-right{
				font-size: 26upx;
				color: #303030
			}
		}
		&_body{
			display: flex;
			justify-content: space-between;
			padding: 23upx;
			border-top: 1px solid #DDDDDD;
			border-bottom: 1px solid #DDDDDD;
			&-avator{
				&-img{
					width: 120upx;
					height: 120upx
				}
			}
			&-info{
				flex: 1;
				margin-left: 30upx;
				&-title{
					font-size: 30upx;
					color: #323436;
					margin-bottom: var(--marginBottom);
				}
				&-specs{
					font-size: 26upx;
					color: #9c9c9c;
					margin-bottom: var(--marginBottom);
					margin-top: 6upx
				}
			}
			&-unit{
				text-align: right;
				&-jifen{
					color: #1f1f1f;
					font-size: 24upx;
					margin-bottom: var(--marginBottom);
				}
				&-orderjifen{
					font-size: 24upx;
					color: #9c9c9c;
					margin-bottom: var(--marginBottom);
					text-decoration: line-through;
					margin-top: 6upx
				}
				&-num{
					font-size: 24upx;
					color: #9c9c9c;
					margin-top: 6upx
				}
			}
		}
		&_footer{
			padding-bottom: 30upx;
			&-census{
				padding: 0 23upx;
				margin-top: 30upx;
				text-align: right;
				&-label{
					font-size: 24upx;
					color: #9c9c9c
				}
				&-price{
					font-size: 24upx;
					color: #1f1f1f;
					margin-left: 5upx;
				}
			}
			&-btns{
				font-size: 24upx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				margin-top: 40upx;
				padding: 0 23upx;
				&_btn{
					padding: 14upx 25upx;
					border-radius: 50upx;
					border: 1px solid;
					margin-left: 24upx;
				}
				&_more{
					color: #323232;
				}
				&_see{
					color: #323232;
					border-color: #BCBCBC;
					margin-left: 40upx;
				}
				&_buy{
					color: var(--prink);
					border-color: var(--prink-line)
				}
				&_comment{
					color: #FFFFFF;
					background-color: var(--prink-bg);
					border-color: var(--prink-line);
				}
			}
		}
	}
}
</style>
