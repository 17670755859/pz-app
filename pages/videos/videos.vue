<template>
	<view class="content">
		<view class="list-content" v-for="(item, index) in 8" :key="index">
			<view class="header">
				<view class="h4">强势登录湖南卫视</view>
				<view class="tips">| 电影剧情式捕捉属于你的东方美 |</view>
				<image class="down" src="../../static/images/arrow-down.png"></image>
			</view>
			<image class="video-prose" src="../../static/img/video-poster.jpg" mode="aspectFill"></image>
		</view>
		<view class="load-more">点击查看更多...</view>
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
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.content{
	padding-top: 70upx;
	min-height: 100%;
	background-color: #fff;
}
.list-content{
	margin-bottom: 70upx;
	.header{
		text-align: center;
		.h4{
			font-size: 37upx;
			color: #191919
		}
		.tips{
			margin-top: 20upx;
			font-size: 18upx;
			color: #191919
		}
		.down{
			width: 14upx;
			height: 12upx;
			margin-top: 20upx
		}
	}
	.video-prose{
		width: 100%;
		margin-top: 50upx;
		height: 420upx;
	}
}
</style>
