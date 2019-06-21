<template>
	<view class="content">
		<view class="nickname">
			<input type="text" value="" v-model="userInfo.real_name" class="nickname_input" placeholder="请输入新的昵称" />
			<view class="nickname_icon" v-if="userInfo.real_name">
				<image @click="userInfo.real_name = ''" class="nickname_icon-img" src="../../static/img/close-bg.png"></image>
			</view>
		</view>
		<view class="tips">4-20个字符，由中文丶英文丶数字+下划线组成</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		onLoad(query) {
			this.userInfo = JSON.parse(query.userInfo);
		},
		methods: {
			// 完善信息
			async perfectInfo() {
				let res = await this.$api.perfectUserInfo(this.userInfo);
				console.log(res)
				if (res) {
					this.$store.commit('SET_USERINFO', this.userInfo)
					uni.showToast({
						icon: "none",
						title: res.msg
					})
				}
			}
		},
		onNavigationBarButtonTap(event) {
			console.log(event);
			if (event.index === 0) {
				this.perfectInfo();
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="less" scoped>
	.content{
		padding-top: 25upx;
	}
.nickname{
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 0 20upx;
	&_input{
		width: 100%;
		padding: 20upx 0;
		flex: 1;
	}
	&_icon{
		&-img{
			width: 32upx;
			height: 32upx;
		}
	}
}
.tips{
	padding: 20upx;
	font-size: 26upx;
	color: #BFBFBF
}
</style>
