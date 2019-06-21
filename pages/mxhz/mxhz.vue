<template>
	<view class="content">
		<view class="logo">
			<image class="logo-img" src="../../static/images/star-logo.jpg" mode=""></image>
		</view>
		<view class="list">
			<view class="list-cell" v-for="item in starList" :key="item.id">
				<image class="list-cell_img" :src="item.url" mode=""></image>
				<view class="list-cell_content">
					<view class="list-cell_content-name">{{item.name}}</view>
					<image class="list-cell_content-arrow" src="../../static/images/go-in-big.png" mode=""></image>
				</view>
			</view>
			<view class="load-more">点击查看更多...</view>
		</view>
		<view class="footer-content">
			<view class="pz-footer-logo">
				<image src="../../static/images/pz-footer-logo.jpg" mode=""></image>
			</view>
			<view class="pz-footer-tips">
				<image src="../../static/images/newPeople-title.jpg" mode=""></image>
			</view>
			<view class="form">
				<view class="form-cell">
					<input type="text" placeholder="姓名">
				</view>
				<view class="form-cell">
					<input type="text" placeholder="电话">
				</view>
				<view class="form-cell">
					<input type="text" placeholder="请输入验证码">
					<view class="code">
						<text>获取验证码</text>
					</view>
				</view>
				<view class="form-cell">
					<view class="submit">提交信息</view>
				</view>
			</view>
			<view class="footer">
				<view class="h4">全国免费咨询热线</view>
				<view class="h1">400-9011-888</view>
				<view class="h6">|影视/明星IP及跨界品牌合作|  25493785@qq.com （孙女士）</view>
				<view class="h6 topLog">本站所有图片版权归盘子女人坊文化科技有限公司所有，严禁盗用！盗用必究！</view>
				<view class="h6">ICP备案号：京ICP备16040102号-1.湘公网安备43010302000640号</view>
			</view>
		</view>
	</view>
</template>

<script>
	import json from '@/Json';
	export default {
		data() {
			return {
				starList: []
			}
		},
		onLoad() {
			this.starList = json.starList;
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.content{
	min-height: 100%;
	background-color: #fff;
}
.logo{
	text-align: center;
	padding: 90upx 0 120upx 0;
	&-img{
		width: 210upx;
		height: 257upx;
	}
}
.list{
	&-cell{
		margin-bottom: 40upx;
		box-shadow: 0 4upx 20upx #eee;
		&_img{
			width: 100%;
			height: 370upx;
		}
		&_content{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 35upx;
			&-name{
				font-size: 30upx;
				color: #191919
			}
			&-arrow{
				width: 38upx;
				height: 38upx
			}
		}
	}
}
</style>
