<template>
	<view class="page">
		<view class="edit-content">
			<view class="text">
				<textarea value="" placeholder="说点什么吧..." />
			</view>
			<view>
				<sunui-upimg :upImgConfig="upImgConfig" @onUpImg="upImgData" ref="uImage" />
				<!-- <button type="primary" @tap="uImageTap">上传图片</button> -->
				<!-- <button type="primary" @tap="getUpImgInfo">获取上传图片信息</button> -->
			</view>
		</view>
		<view class="history-section">
			<view class="cu-item">
				<view class="box label">
					<image src="/static/img/label-icon.png" mode="aspectFill"></image>
					<text class="text-grey">添加标签</text>
				</view>
				<image class="arrow" src="/static/img/arrow-right.png" mode="aspectFill"></image>
			</view>
			<view class="cu-item">
				<view class="box address">
					<image src="/static/img/address-icon.png" mode="aspectFill"></image>
					<text class="text-grey">我的位置</text>
				</view>
				<image class="arrow" src="/static/img/arrow-right.png" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import sunUpImg from '@/components/sunui-upimg/sunui-upimg.vue';
	export default {
		components: {
			"sunui-upimg": sunUpImg
		},
		data() {
			return {
				upImgConfig: {
					// 是否阿里云oos且oos地址必须是https
					oos: true,
					aliConfig: {
						// 阿里云oos上传key_secret(后端传)
						AccessKeySecret: 'zmOJcaqKJB5e4gqtLunHcNoMBTdDgp',
						// 阿里云oos上传key_id(后端传)
						OSSAccessKeyId: 'LTAIPcJL9J5OZr2G',
						// 阿里云oos上传目录(必须存在)
						oosDirectory: 'mifanimg',
					},
					// 后端图片接口地址(阿里云开启oos的话就填写阿里云上传服务器url：http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/否则的话写自己后端上传图片地址，注意把oos置为false!!!)
					url: 'http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/',
					// 是否开启notli(开启的话就是选择完直接上传，关闭的话当count满足数量时才上传)
					notli: false,
					// 图片数量
					count: 10,
					// 过滤图片容量大于或等于3M的图片(2019/4/11新增)
					maxsize: 3,
					// 相机来源([相机,相册],[相机])
					sourceType: true,
					// 是否压缩上传照片(仅小程序生效)
					sizeType: true,
					// 新增上传背景修改
					bgColor: '#EDEDED',
					// 新增上传icon图标颜色修改
					iconColor: '#CFCFCF',
					// 上传文字描述(仅限四个字)
					text: '上传图片',
					// 删除图标定义背景颜色
					delIconColor: '#FA9EB6',
					// 删除图标字体颜色
					delIconText: '',
					// 上传图标替换(+),是个http,https图片地址(https://www.playsort.cn/right.png)
					iconReplace: ''
				},
				imgArr: []
			}
		},
		methods: {
			// 上传图片(2019/3/29新增) -> 手动上传(需要传入上传url,还需要搭配count参数使用!)
			uImageTap() {
				this.$refs.uImage.uploadimage('http://4zlinkimgtest.oss-cn-beijing.aliyuncs.com/');
			},
			//获取上传图片返回来的数组(Step1)
			async upImgData(e) {
				// 上传图片数组
				let arrImg = [];
				for (let i = 0, len = e.length; i < len; i++) {
					if (e[i].path_server != "") {
						console.log(i);
						await arrImg.push(e[i].path_server.split(','));
					}
				}
				// 图片信息保存到data数组
				this.imgArr = arrImg;

				// 可以根据长度来判断图片是否上传成功. 2019/4/11新增
				if (this.imgArr.length == this.upImgConfig.count) {
					uni.showToast({
						title: `上传成功`,
						icon: 'none'
					})
				}
			},
			// 获取上传图片的所有信息(Step2)
			getUpImgInfo() {
				console.log('转成多维数组:', this.imgArr);
				console.log('转成一维数组:', this.imgArr.join().split(','));
			}
		},
		// 导航栏按钮
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) { // 消息
				uni.reLaunch({
					url: "/pages/community/demo"
				})
			} else if (index === 1) { // 购物车
				
			}
		}
	}
</script>

<style lang="less" scoped>
	page{
		background-color: #fff;
	}
.page{
	.edit-content{
		padding: 0 45upx;
	}
	.change-cell{
		margin-top: 114upx
	}
	.text{
		margin-top: 40upx;
		textarea{
			height: 155upx;
			padding: 20upx;
		}
	}
}
.history-section{
	position: relative;
	margin-top: 130upx;
	padding: 0 30upx;
	&:before{
		position: absolute;
		content: '';
		display: block;
		height: 1px;
		background-color: #E3E3E3;
		left: 30upx;
		right: 30upx;
		top: -1PX;
	}
	&:after{
		position: absolute;
		content: '';
		display: block;
		height: 1px;
		background-color: #E3E3E3;
		left: 30upx;
		right: 30upx;
		bottom: 0
	}
	.cu-item{
		position: relative;
		padding: 32upx 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.box{
			image{
				vertical-align: middle
			}
			text{
				vertical-align: middle;
				font-size: 35upx;
				margin-left: 40upx;
			}
		}
		.label{
			image{
				width: 35upx;
				height: 26upx;
				vertical-align: middle
			}
		}
		.address{
			image{
				width: 32upx;
				height: 36upx;
			}
		}
		.arrow{
			width: 17upx;
			height: 28upx;
		}
	}
	.cu-item:first-child{
		// border-bottom: 1px solid #E3E3E3
		&:after{
			position: absolute;
			display: block;
			content: '';
			bottom: 0;
			left: 60upx;
			right: 0;
			height: 1px;
			background-color: #E3E3E3;
		}
	}
	.cu-item:active{
		background-color: #FCFCFC;
	}
}
</style>
