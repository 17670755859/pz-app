<template>
	<view class="masonry" style="">
		<view style="display: none;">
			<image @load="loadImg" v-for="(item, index) in masonryList" :key="index" :data-id="item.id" :data-url="item.img_path" :src="item.img_path"></image>
		</view>
		<view class="flex">
			<view>
				<view class="item" v-for="(item, index) in imgLeft" :key="index">
					<image :src="item.src" :mode="mode" :style="{width:imgWidth+'rpx'}" @click="goNavigate(item.id)" lazy-load></image>
					<view class="comment-text">我和盘子的故事，大概要从高中说起从小一直很喜欢古风的我，某天逛商场，看到了盘子女人坊的形象店，还记得当时并没走进去，但只一眼，</view>
					<view class="info">
						<image src="../../static/img/girl-avator.png" mode=""></image>
						<text>Sunman二姐</text>
					</view>
				</view>
			</view>
			<view>
				<view class="item" v-for="(item, index) in imgRight" :key="index">
					<image :src="item.src" :mode="mode" :style="{width:imgWidth+'rpx'}" @click="goNavigate(item.id)" lazy-load></image>
					<view class="comment-text">我和盘子的故事，大概要从高中说起从小一直很喜欢古风的我，某天逛商场，看到了盘子女人坊的形象店，还记得当时并没走进去，但只一眼，</view>
					<view class="info">
						<image src="../../static/img/girl-avator.png" mode=""></image>
						<text>Sunman二姐</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		mode: {
			type: String,
			default: 'widthFix' //若给定图片宽高，设置scaleToFill
		},
		imgWidth: {
			type: Number,
			default: 340 //若给定图片宽高，设置scaleToFill
		},
		arrList: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	data() {
		return {
			masonryList: this.arrList,
			imgLeft: [], //左侧图片列表
			imgRight: [], //右侧图片列表
			leftHeight: 0, //左侧高度
			rightHeight: 0, //右侧高度	
		};
	},
	watch: {	
		
	},
	methods: {
		goNavigate(id) {
			uni.navigateTo({
				url: '/pages/showWorks/showWorks?id=' + id,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		loadImg(e) {
			// console.log(e);
			let imgHeight = uni.upx2px(e.detail.height);
			//左侧<=右侧高度
			if (this.leftHeight == this.rightHeight || this.leftHeight < this.rightHeight) {
				let obj = {
					id: e.target.dataset.id,
					src: e.target.dataset.url
				};
				this.leftHeight = this.leftHeight + imgHeight;
				this.imgLeft.push(obj);

				//左侧>右侧高度
			} else if (this.leftHeight > this.rightHeight) {
				let obj = {
					id: e.target.dataset.id,
					src: e.target.dataset.url
				};
				this.rightHeight = this.rightHeight + imgHeight;
				this.imgRight.push(obj);

			}
		}
	},
	onLoad() {
		
	}
};
</script>

<style lang="less">
.masonry {
	.flex {
		> view {
			width: 49%;
			margin-bottom: 20upx;
			background-color: #FFFFFF;
			&:nth-child(2n){
				margin-left: 2%;
			}
			image {
				will-change: transform
			}
		}
		.item{
			margin-bottom: 20upx;
			background-color: #FFFFFF;
			box-shadow: 0 4upx 20upx #EEEEEE;
		}
		.comment-text{
			font-size: 24upx;
			color: #363636;
			margin: 15upx 0;
			padding: 0 10upx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 4;
			overflow: hidden;
		}
		.info{
			padding: 10upx;
			display: flex;
			align-items: center;
			image{
				width: 40upx;
				height: 40upx;
				margin: 0;
			}
			text{
				font-size: 22upx;
				color: #505050;
				margin-left: 10upx;
			}
		}
	}
}
</style>
