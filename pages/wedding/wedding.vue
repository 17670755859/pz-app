<template>
	<view class="content">
		<view class="logo">
			<image class="logo-img" src="../../static/images/kp-logo.jpg" mode=""></image>
		</view>
		<view class="list">
			<view class="list_cell" v-for="item in weddings" :key="item.id">
				<image class="list_cell-headImg" :src="item.url" mode="widthFix"></image>
				<image class="list_cell-title" src="../../static/images/kp-title.jpg" mode=""></image>
				<view class="list_cell-text">专注古装摄影十六年 | 客片比样片更唯美</view>
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
	import Json from '@/Json';
	export default {
		data() {
			return {
				weddings: []
			}
		},
		onLoad() {
			this.weddings = Json.weddings;
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.content{
	min-height: 100%;
	background-color: #fff
}
.logo{
	text-align: center;
	padding: 80upx 0 65upx 0;
	&-img{
		width: 210upx;
		height: 85upx
	}
}

.list{
	padding: 0 20upx;
	&_cell{
		text-align: center;
		margin-bottom: 40upx;
		padding: 10upx 5upx;
		border: 1px solid #AAAAAA;
		&-headImg{
			width: 100%;
		}
		&-title{
			width: 306upx;
			height: 38upx;
			margin: 20upx 0;
		}
		&-text{
			font-size: 24upx;
			color: #3e3a39;
			letter-spacing: 8upx
		}
	}
}
</style>
