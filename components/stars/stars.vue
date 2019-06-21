<template>
	<view class="stars">
		<block v-for="(star, index) in stars" :key="index">
			<uni-icon @click="selectStars(index)" class="stars-item" type="star" size="26" :color="star ? '#FA9EB6' : '#989898'"></uni-icon>
		</block>
	</view>
</template>

<script>
import uniIcon from "@/components/uni-icon/uni-icon.vue"
export default {
	name: 'Stars',
	components: {
		uniIcon
	},
	data() {
		return {
			stars: [false, false, false, false, false]
		}
	},
	methods: {
		selectStars(index) {
			// 改变前面的星星
			let star = new Array(index + 1);
			star.fill(true);
			this.stars.splice(0, index + 1, ...star);
			// 改变后面的星星
			let starActive = new Array(this.stars.length - index - 1);
			starActive.fill(false);
			this.stars.splice(index + 1, this.stars.length - 1, ...starActive);
			
			this.$emit('click', this.stars);
		}
	}
}
</script>

<style lang="scss" scoped>
.stars{
	margin: 0 30upx;
	&-item{
		margin: 0 8upx;
	}
}
</style>
