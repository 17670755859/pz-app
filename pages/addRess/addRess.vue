<template>
	<view class="content">
		<view class="list">
			<view class="list-cell">
				<view class="list-cell_label">收货人</view>
				<view class="list-cell_content">
					<input type="text" value="" v-model="address.name" placeholder="请填写收货人姓名"/>
				</view>
				<view class="list-cell_extad">
					<!-- <view class="list-cell_extad-text"></view> -->
					<text class="iconfont icon-mail"></text>
				</view>
			</view>
			<view class="list-cell">
				<view class="list-cell_label">手机号码</view>
				<view class="list-cell_content">
					<input type="number" value="" maxlength="11" v-model="address.phone" placeholder="请填写收货人手机号码"/>
				</view>
				<view class="list-cell_extad">
					<!-- <view class="list-cell_extad-text">+86</view>
					<text class="iconfont icon-arrowRight"></text> -->
				</view>
			</view>
			<view class="list-cell">
				<view class="list-cell_label">所在地区</view>
				<view class="list-cell_content">{{address.province+address.city+address.area}}</view>
				<view class="list-cell_extad">
					<text class="iconfont icon-arrowRight"></text>
				</view>
			</view>
			<view class="list-cell">
				<view class="list-cell_label">详细地址</view>
				<view class="list-cell_content">
					<input type="text" value="" v-model="address.road" placeholder="街道、楼牌号等"/>
				</view>
				<view class="list-cell_extad">
					<!-- <text class="iconfont icon-arrowRight"></text> -->
				</view>
			</view>
		</view>
		<view class="list">
			<view class="list-cell">
				<view class="list-cell_label">地址标签</view>
				<view class="list-cell_content">{{address.tag}}</view>
				<view class="list-cell_extad flex">
					<view class="list-cell_extad-text">请选择</view>
					<text class="iconfont icon-arrowRight"></text>
				</view>
			</view>
			<view class="list-cell">
				<view class="list-cell_label">设为默认</view>
				<view class="list-cell_content"></view>
				<view class="list-cell_extad flex">
					<switch color="#FBA7B7" :checked="address.type == '01'" @change="switch1Change" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: {}
			}
		},
		onLoad(query) {
			this.address = JSON.parse(query.address);
		},
		methods: {
			switch1Change() {}
		}
	}
</script>

<style lang="less" scoped>
.content{
	padding-top: 20upx;
}
.list{
	background-color: #FFFFFF;
	margin-bottom: 20upx;
	padding: 0 20upx;
	&-cell{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 35upx 10upx 25upx;
		border-bottom: 1px solid #F1F1F1;
		&_label{
			width: 120upx;
			color: #8f8f8f;
			font-size: 28upx;
			text-align: left;
		}
		&_content{
			flex: 1;
			text-align: left;
			font-size: 26upx;
			font-weight: bold;
		}
		&_extad{
			width: 40upx;
			text-align: right;
			.icon-mail{
				font-size: 40upx;
			}
			.iconfont{
				color: #8f8f8f;
			}
			&-text{
				font-size: 26upx;
				color: #8f8f8f;
				margin-right: 15upx;
			}
		}
		.flex{
			width: 140upx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}
}
</style>
