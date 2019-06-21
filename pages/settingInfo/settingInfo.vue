<template>
	<view class="content">
		<uni-list>
			<uni-list-item @click="upLoadImg" title="我的头像" avator="../../static/img/order-avator.jpg"></uni-list-item>
			<uni-list-item title="会员名" :inverted="true" :showArrow="false" show-badge="true" :badge-text="userInfo.phone"></uni-list-item>
			<navigator :url="'/pages/removeNickname/removeNickname?userInfo=' + JSON.stringify(userInfo)">
				<uni-list-item title="昵称" :inverted="true" show-badge="true" :badge-text="userInfo.real_name"></uni-list-item>
			</navigator>
			<uni-list-item title="性别" @click="settingSex" :inverted="true" show-badge="true" :badge-text="userInfo.sex == 0 ? '女' : userInfo.sex == 1 ? '男' : '未知'"></uni-list-item>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<uni-list-item class="none-bottom" title="出生日期" :inverted="true" show-badge="true" :badge-text="userInfo.birthday"></uni-list-item>
			</picker>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import { mapState, mapActions } from 'vuex'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			const currentDate = this.$getDate({
				format: true
			})
			return {
				date: currentDate,
				baseUrl: this.$BaseUrl
			}
		},
		watch: {
			date(newDate) {
				this.userInfo.birthday = newDate;
				this.setUserInfo(this.userInfo);
			}
		},
		computed: {
			...mapState(['userInfo']),
			startDate() {
				return this.$getDate('start');
			},
			endDate() {
				return this.$getDate('end');
			}
		},
		methods: {
			...mapActions(['setUserInfo']),
			// 上传头像
			upLoadImg() {
				let that = this;
				uni.chooseImage({
					count: 1,
					success(files) {
						const tempFilePaths = files.tempFilePaths;
						let token = uni.getStorageSync('token') || 'null';
						if (token !== 'null') {
							const uploadTask = uni.uploadFile({
								url: 'https://panziapp.pznrfsy.com/appapi/v1/member/upimg_head',
								filePath: tempFilePaths[0],
								name: 'file',
								formData: {
									token: token
								},
								success: function(uploadFileRes) {
									that.userInfo.head = JSON.parse(uploadFileRes.data).data;
									that.setUserInfo(that.userInfo)
								}
							});
						}
					}
				})
			},
			// 设置性别
			async settingSex() {
				let that = this;
				uni.showActionSheet({
					itemList: ['女', '男'],
					success(res) {
						that.userInfo.sex = res.tapIndex;
						that.setUserInfo(that.userInfo);
					}
				})
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		padding-top: 25upx
	}
</style>
