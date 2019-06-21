<template>
	<view class="content">
		<view class="add-content">
			<view class="add-content-label">
				<text class="iconfont icon-address"></text>
			</view>
			<view class="add-content-box">
				<navigator class="add-content-label_text" hover-class="none" url="/pages/receiving-address/receiving-address" v-if="true">请添加收货地址</navigator>
				<navigator class="add-content-box-info" hover-class="none" v-else url="/pages/receiving-address/receiving-address">
					<view class="add-content-box-info_city">
						<text class="default">默认</text>
						<text class="city-text">湖南省长沙市天心区</text>
					</view>
					<view class="add-content-box-info_address">湘江中路华远中心36楼</view>
					<view class="add-content-box-info_name">
						<text class="name">盘子吴彦祖</text>
						<text class="phone">176****5859</text>
					</view>
				</navigator>
			</view>
			<view class="add-content-arrow">
				<text class="iconfont icon-arrowRight"></text>
			</view>
		</view>
		
		<view class="exchange">
			<view class="exchange-header">
				<image class="exchange-header_logo" src="../../static/images/pz-logo-small.png"></image>
				<text class="exchange-header_text">盘子女人坊服务旗舰店</text>
			</view>
			<view class="exchange-content">
				<view class="exchange-content-avator">
					<image class="" src="../../static/img/087A2175_1.jpg" mode="aspectFill"></image>
				</view>
				<view class="exchange-content-box">
					<view class="exchange-content-box_title">盘子女人坊古装艺术写真摄影个人 照情侣婚纱亲子全家福写...</view>
					<view class="exchange-content-box_exted">
						<view class="exchange-content-box_exted-jifen">
							<text class="num">2000</text>
							<text class="compy">积分</text>
						</view>
						<view class="">
							<uni-number-box @change="bindChange"></uni-number-box>
						</view>
					</view>
				</view>
			</view>
			<view class="beizhu">
				<view class="beizhu-label">订单备注</view>
				<view class="beizhu-text">选填, 请先和商家协商确认</view>
			</view>
			<view class="footer">
				<text class="all">共2件</text>
				<text class="xj">小计：</text>
				<text class="num">2000</text>
				<text class="compy">积分</text>
			</view>
		</view>
		
		<view class="flex-footer">
			<view class="jifen">
				<text class="num">2000</text>
				<text class="compy">积分</text>
			</view>
			<view class="submit">
				<view class="btn" @click="submitHandler">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				
			}
		},
		methods: {
			bindChange() {
				
			},
			
			// 提交订单
			submitHandler() {
				uni.showToast({
					title: '兑换成功',
					success() {
						
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.content{
	padding-top: 35upx;
	min-height: 100%;
	background-color: #F5F5F5;
	padding-bottom: 100upx;
}

.add-content{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #FFFFFF;
	padding: 25upx 10upx;
	border-radius: 20upx;
	margin-left: 25upx;
	margin-right: 25upx;
	box-shadow: 0 4upx 15upx #eee;
	&-label{
		width: 60upx;
		text-align: center;
		.icon-address{
			font-size: 45upx;
			color: var(--prink);
		}
		&_text{
			color: #9d9d9d;
			font-size: 34upx;
			margin-left: 20upx;
		}
	}
	&-box{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: left;
		margin-left: 20upx;
		&-info{
			&_city{
				display: flex;
				align-items: center;
				.default{
					background-color: var(--prink-bg);
					border-radius: 10upx;
					font-size: 18upx;
					color: #FFFFFF;
					padding: 0 4upx;
				}
				.city-text{
					font-size: 22upx;
					color: #1e1b1c;
					margin-left: 10upx;
				}
			}
			&_address{
				margin-top: 20upx;
				font-size: 34upx;
				color: #1e1b1c;
			}
			&_name{
				display: flex;
				align-items: center;
				margin-top: 20upx;
				.name{
					font-size: 28upx;
					color: #1e1b1c;
				}
				.phone{
					font-size: 24upx;
					color: #8f8f8f;
					margin-left: 10upx;
				}
			}
		}
	}
	&-arrow{
		width: 50upx;
		text-align: right;
		.iconfont {
			color: #8F8F8F;
		}
	}
}

// 中间部分
.exchange{
	background-color: #FFFFFF;
	border-radius: 20upx;
	margin-top: 40upx;
	margin-left: 25upx;
	margin-right: 25upx;
	box-shadow: 0 4upx 15upx #eee;
	padding: 20upx;
	&-header{
		display: flex;
		align-items: center;
		&_logo{
			width: 36upx;
			height: 36upx;
		}
		&_text{
			font-size: 22upx;
			color: #333333;
			margin-left: 4upx;
		}
	}
	&-content{
		margin-top: 30upx;
		display: flex;
		&-avator{
			image{
				width: 143upx;
				height: 143upx;
			}
		}
		&-box{
			margin-left: 20upx;
			&_title{
				font-size: 26upx;
				color: #333333;
			}
			&_exted{
				margin-top: 10upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				&-jifen{
					display: flex;
					.num{
						font-size: 34upx;
						color: #FFAF73;
					}
					.compy{
						font-size: 24upx;
						color: #878787;
						margin-left: 10upx;
					}
				}
			}
		}
	}
	.beizhu{
		margin-top: 40upx;
		display: flex;
		align-items: center;
		&-label{
			width: 140upx;
			font-size: 30upx;
			color: #2f2f2f;
		}
		&-text{
			font-size: 30upx;
			color: #999999;
			margin-left: 20upx;
		}
	}
	.footer{
		display: flex;
		margin-top: 30upx;
		justify-content: flex-end;
		.all,.jifen{
			font-size: 22upx;
			color: #999999;
		}
		.xj{
			font-size: 22upx;
			color: #2f2f2f;
			margin: 0 10upx;
		}
		.num{
			font-size: 32upx;
			color: #FFAF73;
			margin-right: 10upx;
		}
	}
}

.flex-footer {
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100upx;
	line-height: 100upx;
	background-color: #FFFFFF;
	padding: 0 20upx 0 40upx;
	.jifen{
		display: flex;
		align-items: center;
		.num{
			color: #FFAF73;
			font-size: 38upx;
		}
		.compy{
			font-size: 26upx;
			color: #878787;
			margin-left: 10upx;
		}
	}
	.submit{
		.btn{
			background-color: var(--prink-bg);
			color: #FFFFFF;
			font-size: 28upx;
			height: 70upx;
			line-height: 70upx;
			padding: 0 40upx;
			border-radius: 40upx;
		}
	}
}
</style>
