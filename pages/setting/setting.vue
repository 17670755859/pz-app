<template>
	<view class="content">
		<uni-list>
			<navigator url="/pages/settingInfo/settingInfo">
				<uni-list-item title="我是昵称" :note="'用户名: ' + userInfo.phone" thumb="../../static/img/order-avator.jpg"></uni-list-item>
			</navigator>
			<navigator url="/pages/receiving-address/receiving-address">
				<uni-list-item title="地址管理"></uni-list-item>
			</navigator>
		</uni-list>
		<uni-list class=''>
			<uni-list-item title="账户与安全" :inverted="true" show-badge="true" badge-text="密码/支付管理"></uni-list-item>
			<uni-list-item title="支付设置"></uni-list-item>
			<uni-list-item @click="clearStorageSyncHandler" title="通用" :inverted="true" show-badge="true" badge-text="清除本地缓存"></uni-list-item>
		</uni-list>
		<uni-list class=''>
			<uni-list-item title="帮助中心"></uni-list-item>
			<uni-list-item title="功能反馈"></uni-list-item>
			<uni-list-item title="检查更新" :inverted="true" show-badge="true" badge-text="V1.0"></uni-list-item>
		</uni-list>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="warn" @click="loginOut">退出当前账户</button>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import {createTabView} from '@/common/common'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				baseUrl: this.$BaseUrl
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			...mapActions(['reLogin']),
			goInfo() {
				uni.navigateTo({
					url: '/pages/settingInfo/settingInfo'
				})
			},
			// 推出当前账户
			async loginOut() {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '确定退出当前账户吗？',
					success: function(res) {
						if (res.confirm) {
							// let res = await this.$api.loginOut({type: 'phone'});
							// if (res) {
							createTabView();
							that.reLogin();
							uni.reLaunch({
								url: '/pages/index/index'
							});
							// }
						}
					}
				});
				
			},

			// 清除缓存
			clearStorageSyncHandler() {
				uni.clearStorage({
					success(e) {
						uni.showToast({
							icon: 'none',
							title: '清理成功'
						})
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		padding-top: 25upx
	}

	.uni-padding-wrap {
		padding: 30upx
	}
</style>
