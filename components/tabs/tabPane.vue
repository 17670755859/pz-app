<template>
	<scroll-view scroll-y class="scroll-box tab-pane-item">
		<slot></slot>
	</scroll-view>
</template>

<script>
export default {
	name: 'TabPane',
	data() {
		return {}
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.tab-pane-item{
	width: 100%;
	min-height: 100upx;
	height: 100%;
	display: inline-block;
	white-space: initial;
	font-size: 24upx;
	box-sizing: border-box;
}
</style>
