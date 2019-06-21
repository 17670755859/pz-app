<template>
	<view class="content">
		<view class="photo">
			<view class="photo-item" v-for="(item, index) in photos" :key="index" @click="previewImage(index)">
				<image class="photo-item_photo" :src="item" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import json from '@/Json.js'
	export default {
		data() {
			return {
				photos: []
			}
		},
		onLoad() {
			this.photos = json.photos;
		},
		methods: {
			// 预览图片
			previewImage(index) {
				let imgs = [], current = null;
				current = index.toString();
				for (let i = 0; i < this.photos.length; i++) {
					imgs.push(this.photos[i])
				}
				console.log(imgs)
				// #ifdef APP-PLUS
				plus.nativeUI.previewImage(imgs, {
					current: current,
					indicator: 'number'
				})
				// #endif
			}
		}
	}
</script>

<style lang="less" scoped>
.content{
	min-height: 100%;
	background-color: #fff;
}
.photo{
	background-color: #fff;
	display: flex;
	flex-wrap: wrap;
	padding: 0 2%;
	padding-top: 20upx;
	&-item{
		width: 32%;
		margin: 1% 0;
		&_photo{
			width: 100%;
			height: 220upx;
			vertical-align: middle
		}
	}
	&-item:nth-child(3n-1) {
		margin-left: 2%;
		margin-right: 2%
	}
}
</style>
