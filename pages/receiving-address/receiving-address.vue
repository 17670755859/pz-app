<template>
	<view class="content">
		<view class="address-content">
			<view class="item" v-for="(item, index) in address" :key="index">
				<view class="item-content">
					<view class="item-content-label">
						<view class="item-content-label_name">{{item.name}}</view>
						<view class="item-content-label_phone">{{item.phone.replace(item.phone.slice(3,7), '****')}}</view>
						<view class="item-content-label_default" v-if="item.type == '01'">默认</view>
						<view class="item-content-label_home">{{item.tag}}</view>
					</view>
					<view class="item-content-address">{{item.province+item.city+item.area+item.road}}</view>
				</view>
				<view class="item-edit" @click="editAddress(item)">
					<text class="iconfont icon-edit-line"></text>
				</view>
			</view>
		</view>
		<view class="add-address">
			<navigator class="add-address-btn" url="/pages/addRess/addRess">
				<text class="iconfont icon-add"></text>
				<text>新建收货地址</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	import json from '@/Json.js';
	export default {
		data() {
			return {
				address: []
			}
		},
		onLoad() {
			this.address = json.address;
		},
		methods: {
			editAddress(item) {
				uni.navigateTo({
					url: '/pages/addRess/addRess?address='+JSON.stringify(item)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.content{
	min-height: 100%;
	background-color: #F8F8F8;
}

.address-content{
	padding: 20upx 20upx 100upx;
	.item{
		border-bottom: 1px solid #EEEEEE;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 25upx 0;
		&-content{
			&-label{
				flex: 1;
				display: flex;
				align-items: center;
				&_name{
					font-size: 34upx;
				}
				&_phone{
					margin-left: 80upx;
					font-size: 34upx;
				}
				&_default{
					background-color: red;
					border-radius: 30upx;
					font-size: 18upx;
					color: #f9f9f9;
					width: 60upx;
					text-align: center;
					margin-left: 10upx
				}
				&_home{
					background-color: var(--prink-bg);
					border-radius: 30upx;
					font-size: 18upx;
					width: 60upx;
					color: #f9f9f9;
					text-align: center;
					margin-left: 10upx
				}
			}
			&-address{
				font-size: 24upx;
				margin-top: 15upx;
			}
		}
		&-edit{
			width: 60upx;
			text-align: right;
			.icon-edit-line{
				font-size: 32upx
			}
		}
	}
}
.add-address{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100upx;
	line-height: 100upx;
	text-align: center;
	background-color: #F8F8F8;
	padding-top: 10upx;
	&-btn{
		width: 70%;
		height: 75upx;
		line-height: 75upx;
		text-align: center;
		background-color: var(--prink-bg);
		border-radius: 40upx;
		color: #ffffff;
		box-shadow: 0 4upx 20upx var(--prink-bg);
		margin: 0 auto;
	}
}
</style>
