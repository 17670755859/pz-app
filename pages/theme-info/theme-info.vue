<template>
	<view class="content">
		<view class="header">{{themes.title}}</view>
		<view class="list">
			<view class="list-item" v-for="(item, index) in themes.horizontal" :key="index">
				<view class="list-item-img">
					<image :src="item" mode="widthFix"></image>
				</view>
				<image class="list-item-tips" src="../../static/images/theme-tips.png" mode=""></image>
			</view>
		</view>
		<view class="horizontal">
			<image src="../../static/images/henping.png" mode=""></image>
		</view>
		<view class="list">
			<view class="list-item" v-for="(item, index) in themes.vertical" :key="index">
				<view class="list-item-img">
					<image :src="item" mode="widthFix"></image>
				</view>
				<image class="list-item-yuanchuang" src="../../static/images/yuanchuang-tips.png" mode=""></image>
			</view>
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
					<input type="text" v-model="form.userName" placeholder="姓名">
				</view>
				<view class="form-cell">
					<input type="text" v-model="form.phone" placeholder="电话">
				</view>
				<view class="form-cell">
					<input type="text" v-model="form.code" placeholder="请输入验证码">
					<view class="code" @click="getCode">
						<text>{{time}}</text>
					</view>
				</view>
				<view class="form-cell">
					<view class="submit" @click="submitHandler">提交信息</view>
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
				time: '获取验证码', // 倒计时
				themes: {
					title: '',
					horizontal: [],
					vertical: []
				},
				form: {
					userName: '',
					phone: '',
					code: ''
				}
			}
		},
		onLoad(query) {
			let index = query.index;
			this.themes = json.themeInfo[index]
		},
		methods: {
			// 提交客资
			submitHandler() {
				const megs = ['请填写用户名','请填写手机号码','请输入验证码'];
				let index = 0;
				for (let i in this.form) {
					console.log(this.form[i]);
					if (this.form[i] == '') {
						uni.showToast({
							icon: 'none',
							title: megs[index]
						});
						break;
					}
					index++;
				}
				if (index == 3) {
					uni.showToast({
						title: '提交成功'
					});
					this.form.userName = '';
					this.form.phone = '';
					this.form.code = '';
				}
			},
			
			// 获取验证码
			getCode() {
				let time = 60;
				let timer = setInterval(() => {
					if (time > 0) {
						time--;
						this.time = '倒计时' + time + '秒'
					} else {
						clearInterval(timer)
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="less" scoped>
.content{
	min-height: 100%;
	background-color: #FFFFFF;
}
.header{
	font-size: 34upx;
	text-align: center;
	padding: 40upx 0;
}
.list{
	padding: 20upx;
	&-item{
		position: relative;
		border: 1px solid #aaaaaa;
		padding: 20upx;
		margin-bottom: 40upx;
		&-img{
			image{
				width: 100%;
			}
		}
		&-tips{
			display: block;
			margin: 0 auto;
			width: 483upx;
			height: 90upx;
			margin-top: 40upx;
		}
		&-yuanchuang{
			display: block;
			margin: 0 auto;
			margin-top: 40upx;
			width: 674upx;
			height: 84upx;
		}
	}
}

.horizontal{
	text-align: center;
	margin: 130upx 0;
	image{
		width: 704upx;
		height: 173upx;
	}
}
</style>
