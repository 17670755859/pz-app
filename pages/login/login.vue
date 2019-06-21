<template>
	<view class="container">
		<view class="logo">
			<image src="../../static/img/logo.jpg" mode=""></image>
		</view>
		<view class="form">
			<view class="form-cell">
				<view class="form-cell__label">
					<image src="../../static/img/userName-icon.jpg" mode=""></image>
				</view>
				<view class="form-cell__input">
					<input v-model="form.phone" placeholder="用户名/手机号" maxlength="11" type="text" value="" />
				</view>
			</view>
			<view class="form-cell">
				<view class="form-cell__label">
					<image src="../../static/img/password-icon.jpg" mode=""></image>
				</view>
				<view class="form-cell__input">
					<input v-model="form.password" v-if="showPassword" type="text" placeholder="密码" value="" />
					<input v-model="form.password" v-else type="password" placeholder="密码" value="" />
				</view>
				<view class="form-cell__extra" @click="showPassword = !showPassword">
					<image v-if="showPassword" class="eye" src="../../static/img/eye.jpg" mode=""></image>
					<image v-else class="eye eye-close" src="../../static/img/eye-close.png" mode=""></image>
				</view>
			</view>
			<view class="form-cell__submit">
				<view class="form-cell__submit-btn btn-radius bg-prink" @click="loginHandler">登录</view>
			</view>
			<view class="form-cell__other">
				<navigator url="/pages/register/register">立即注册</navigator>
				<navigator url="/pages/setting-password/setting-password">忘记密码</navigator>
			</view>
		</view>
		<view class="ohter-login">
			<view class="ohter-login-title">
				<image src="../../static/img/other.jpg" mode=""></image>
			</view>
			<view class="box">
				<view class="box-item">
					<image src="../../static/img/loginBlog.jpg" mode=""></image>
				</view>
				<view class="box-item">
					<image src="../../static/img/loginWeixin.jpg" mode=""></image>
				</view>
				<view class="box-item">
					<image src="../../static/img/loginQq.jpg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				showPassword: false,
				form: {
					phone: '',
					password: '',
					clientid: '', // 设备cid
					system: '' // ios or Android
				},
				type: '' // 当前页面是从哪里跳过来
			}
		},
		onLoad(query) {
			this.type = query.type || '';
		},
		methods: {
			...mapActions(['setUserInfo', 'login']),
			async loginHandler() {
				// #ifdef APP-PLUS
				this.form.clientid = plus.push.getClientInfo().clientid;
				this.form.system = plus.os.name;
				// #endif
				if (!this.form.phone || !this.form.password) {
					uni.showToast({
						title: '账号或密码错误!',
						icon: 'none'
					})
				} else {
					uni.showLoading({
						title: '登录中...'
					})
					let res = await this.$api.login(this.form);
					if (res) {
						uni.navigateBack()
					}
					uni.hideLoading()
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: #fff;
		height: 100%;
	}

	.btn-radius {
		border-radius: 50upx
	}

	.logo {
		text-align: center;
		padding-top: 50upx;

		image {
			width: 154upx;
			height: 144upx;
		}
	}

	.form {
		margin-top: 80upx;
		padding: 0 75upx;

		&-cell {
			margin-bottom: 60upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #DBDBDB;

			&__label {
				image {
					width: 32upx;
					height: 36upx
				}
			}

			&__input {
				flex: 1;
				position: relative;
				margin-left: 20upx;

				input {
					font-size: 32upx;
					color: #333;
					padding: 20upx 0
				}
			}

			&__extra {
				text-align: right;
				min-width: 60upx;

				.eye {
					width: 33upx;
					height: 21upx;
				}

				.eye-close {
					width: 31upx;
					height: 12upx
				}
			}

			&__submit {
				&-btn {
					width: 100%;
					height: 90upx;
					line-height: 90upx;
					text-align: center;
					font-size: 34upx;
					color: #fff;
				}

				&-btn:active {
					opacity: 0.9
				}
			}

			&__other {
				display: flex;
				justify-content: space-between;
				margin-top: 30upx;
				font-size: 28upx;
				color: #8E8E8E
			}
		}
	}

	.ohter-login {
		margin-top: 200upx;

		&-title {
			text-align: center;

			image {
				width: 260upx;
				height: 25upx
			}
		}

		.box {
			display: flex;
			justify-content: space-around;
			margin-top: 70upx;

			&-item {
				image {
					width: 100upx;
					height: 100upx
				}
			}
		}
	}
</style>
