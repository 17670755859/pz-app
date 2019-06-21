<template>
	<view class="content">
		<view class="search-content">
			<view class="search-content-box">
				<image class="search-content-box-search" src="../../static/images/search-icon.png" mode=""></image>
				<input class="search-content-box-input" type="text" placeholder="搜索你的城市" value="" />
			</view>
		</view>
		<view class="store">
			<navigator url="/pages/store-info/store-info" hover-class="none" class="store-list" v-for="item in storeList" :key="item.id">
				<image class="store-list_img" :src="item.url" mode=""></image>
				<view class="store-list_title">{{item.name}}</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import json from '@/Json';
	export default {
		data() {
			return {
				storeList: []
			}
		},
		onLoad() {
			this.storeList = json.storeList
		},
		methods: {
			
		}
	}
</script>
<style>
	/* #ifdef APP-PLUS || MP-WEIXIN */
	.search-content{
		position: fixed;
		top: 0 !important;
	}
	/* #endif */
</style>
<style lang="less" scoped>
.content{
	background-color: #fff;
	min-height: 100%;
	overflow: auto;
	padding: 0 23upx;
}
.search-content{
	padding: 0 23upx;
	background-color: #fff;
	position: fixed;
	z-index: 9;
	top: 90upx;
	left: 0;
	right: 0;
	height: 160upx;
	display: flex;
	align-items: center;
	&-box{
		flex: 1;
		position: relative;
		display: flex;
		align-items: center;
		padding-left: 40upx;
		background-color: #F4F4F4;
		border-radius: 40upx;
		&-search{
			width: 28upx;
			height: 28upx;
		}
		&-input{
			margin-left: 15upx;
			flex: 1;
			padding: 10upx 0;
		}
	}
}
.store{
	margin-top: 170upx;
	padding: 0 23upx;
	display: flex;
	flex-wrap: wrap;
	&-list{
		width: 25%;
		text-align: center;
		margin-bottom: 60upx;
		&_img{
			width: 150upx;
			height: 150upx;
		}
		&_title{
			font-size: 25upx;
			color: #535353;
			margin-top: 20upx;
		}
	}
}
</style>
