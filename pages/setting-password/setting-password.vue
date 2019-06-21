<template>
	<view class="container">
		<view class="form">
			<view class="form-cell">
				<view class="form-cell-label">
					<image src="../../static/img/register-phone.jpg" mode=""></image>
				</view>
				<view class="form-cell-input">
					<input type="text" placeholder="请输入手机号码" value="" />
				</view>
			</view>
			<view class="form-cell">
				<view class="form-cell-label">
					<image src="../../static/img/register-code.jpg" mode=""></image>
				</view>
				<view class="form-cell-input">
					<input type="text" placeholder="请输入验证码" value="" />
				</view>
				<view class="form-cell-extar">
					<view class="code-btn">获取验证码</view>
				</view>
			</view>
			<view class="form-cell">
				<view class="form-cell-label">
					<image src="../../static/img/register-password.jpg" mode=""></image>
				</view>
				<view class="form-cell-input">
					<input type="text" placeholder="请设置一个最少6位数的密码" value="" />
				</view>
				<view class="form-cell-extar">
					<image class="eye" src="../../static/img/eye.jpg" v-show="false" mode=""></image>
					<image class="eye-close" src="../../static/img/eye-close.png" mode=""></image>
				</view>
			</view>
			<view class="form-submit">
				<view class="btn">立即注册</view>
				<view class="tips">
					<view class="checked">
						<image src="../../static/img/checked-icon.png" mode=""></image>
					</view>
					<view class="label-text">我已阅读并同意 《商户XX协议》</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.container{
	height: 100%;
	background-color: #fff
}
.form{
	padding: 0 75upx;
	padding-top: 180upx;
	&-cell{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #DBDBDB;
		&-label{
			image{
				width: 45upx;
				height: 45upx
			}
		}
		&-input{
			flex: 1;
			margin-left: 20upx;
			input{
				padding: 30upx 0
			}
		}
		&-extar{
			min-width: 50upx;
			.eye{
				width: 33upx;
				height: 21upx;
			}
			.eye-close{
				width: 31upx;
				height: 12upx
			}
			.code-btn{
				font-size: 32upx;
				color: var(--prink);
				border: 1px solid var(--prink-line);
				border-radius: 50upx;
				padding: 10upx 25upx;
			}
		}
	}
	&-submit{
		margin-top: 215upx;
		.btn{
			height: 90upx;
			line-height: 90upx;
			color: #fff;
			font-size: 34upx;
			background-color: var(--prink-bg);
			text-align: center;
			border-radius: 50upx;
		}
		.btn:active{
			opacity: 0.9
		}
		.tips{
			margin-top: 45upx;
			display: flex;
			align-items: center;
			justify-content: center;
			.checked{
				border: 1px solid #DBDBDB;
				width: 22upx;
				height: 22upx;
				text-align: center;
				display: flex;
				align-items: center;
				image{
					width: 19upx;
					height: 13upx;
					vertical-align: middle
				}
			}
			.label-text{
				font-size: 22upx;
				color: #969696;
				margin-left: 15upx
			}
		}
	}
}
</style>
