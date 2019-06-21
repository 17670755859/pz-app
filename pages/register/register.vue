<template>
	<view class="container">
		<view class="form">
			<view class="form-cell">
				<view class="form-cell-label">
					<image src="../../static/img/register-phone.jpg" mode=""></image>
				</view>
				<view class="form-cell-input">
					<input type="text" v-model="form.phone" placeholder="请输入手机号码" value="" />
				</view>
			</view>
			<view class="form-cell">
				<view class="form-cell-label">
					<image src="../../static/img/register-code.jpg" mode=""></image>
				</view>
				<view class="form-cell-input">
					<input type="text" v-model="form.code" placeholder="请输入验证码" value="" />
				</view>
				<view class="form-cell-extar">
					<view class="code-btn" @click="getCode">{{count}}</view>
				</view>
			</view>
			<view class="form-cell">
				<view class="form-cell-label">
					<image src="../../static/img/register-password.jpg" mode=""></image>
				</view>
				<view class="form-cell-input">
					<input type="text" v-if="showPassword" v-model="form.password" placeholder="请设置一个最少6位数的密码" value="" />
					<input type="password" v-else v-model="form.password" placeholder="请设置一个最少6位数的密码" value="" />
				</view>
				<view class="form-cell-extar" @click="showPassword = !showPassword">
					<image v-if="showPassword" class="eye" src="../../static/img/eye.jpg" mode=""></image>
					<image v-else class="eye" src="../../static/img/eye-close.png" mode=""></image>
				</view>
			</view>
			<view class="form-cell">
				<view class="form-cell-label">
					<image src="../../static/img/register-user.jpg" mode=""></image>
				</view>
				<view class="form-cell-input">
					<input type="text" v-model="form.invite" placeholder="请输入邀请码(选填)" value="" />
				</view>
			</view>
			<view class="form-submit">
				<view class="btn" @click="submitHandler">立即注册</view>
				<view class="tips" @click="agree = !agree">
					<view class="checked">
						<image v-if="agree" src="../../static/img/checked-icon.png" mode=""></image>
					</view>
					<view class="label-text">我已阅读并同意 《商户XX协议》</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let timer;
	export default {
		data() {
			return {
				count: '获取验证码',
				showPassword: true,
				agree: false,
				form: {
					phone: '',
					password: '',
					code: '',
					invite: ''
				}
			};
		},
		methods: {
			// 获取验证码
			async getCode() {
				if (timer) return;
				if(this.form.phone == '') {
					uni.showToast({
						icon: 'none',
						title: '请填写手机号!'
					})
					return;
				} else {
					let myreg = '^134[0-8]\\d{7}$|^13[^4]\\d{8}$|^14[5-9]\\d{8}$|^15[^4]\\d{8}$|^16[6]\\d{8}$|^17[0-8]\\d{8}$|^18[\\d]{9}$|^19[8,9]\\d{8}$'; // 码验证手机号
					if (!new RegExp(myreg).test(this.form.phone)) {
						uni.showToast({
							icon: 'none',
							title: '手机格式错误!'
						})
						return;
					}
				}
				// 验证手机号码是否一注册
				let res1 = await this.$api.testPhone(this.form);
				if (res1.code == 200) {
					let res2 = await this.$api.getCode(this.form);
					if (res2) {
						let count = 60;
						timer =	setInterval(() => {
							if (count > 0) {
								count--;
								this.count = count + 's';
							} else {
								clearInterval(timer);
								this.count = '获取验证码'
							}
						}, 1000);
					}
				}
			},
			async registerAccount() {
				let res = await this.$api.banner();
				this.res = '请求结果 : ' + JSON.stringify(res);
			},
			
			// 立即注册
			async submitHandler() {
				let res = await this.$api.register(this.form);
				if (res) {
					// #ifdef APP-PLUS
					plus.nativeUI.toast(res.msg, { verticalAlign: 'center' });
					// #endif
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
			}
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
			.eye{
				width: 33upx;
				height: 21upx
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
