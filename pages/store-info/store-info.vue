<template>
	<view class="content store">
		<view class="store-header">
			<view class="store-header-name">
				<view class="store-header-name_title">北京总店</view>
				<view class="store-header-name_tips">BEI JING ZONG DIAN</view>
			</view>
			<view class="store-header-contact">
				<view class="store-header-contact-address store-header-contact-cell"><text class="label">| 地址 |</text>  北京市朝阳区青年路5号</view>
				<view class="store-header-contact-phone store-header-contact-cell"><text class="label">| 电话 | </text> 010-5942121</view>
				<view class="store-header-contact-store store-header-contact-cell"><text class="label">| 官网 | </text> http://www.panzi.cc</view>
			</view>
			<view class="store-header-division">
				<image src="../../static/images/store-division.png" mode=""></image>
			</view>
		</view>
		<view class="store-content">
			这里是详情
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
.store{
	background-color: #fff;
	min-height: 100%;
	padding-top: 100upx;
	&-header{
		text-align: center;
		&-name{
			&_title{
				font-size: 54upx;
				color: #515151
			}
			&_tips{
				font-size: 14upx;
				color: #686868;
				margin-top: 10upx;
			}
		}
		&-contact{
			font-size: 20upx;
			color: #5b5b5b;
			margin-top: 40upx;
			.label{
				font-size: 24upx;
				margin-right: 20upx;
			}
			&-cell{
				margin-top: 10upx;
			}
		}
		&-division{
			text-align: center;
			margin-top: 50upx;
			image{
				width: 690upx;
				height: 8upx;
			}
		}
	}
	&-content{
		padding: 50upx 23upx;
		img{
			width: 100%
		}
	}
}
</style>
