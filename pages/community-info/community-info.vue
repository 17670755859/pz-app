<template>
	<view class="container">
		<!-- 内容区域 -->
		<view class="content">
			<view class="popular-list">
				<view class="popular-list-header">
					<view class="popular-list-header-people">
						<image class="popular-list-header-people-img" src="../../static/img/avator.png" mode="aspectFill"></image>
						<view class="popular-list-header-people-info">
							<view class="popular-list-header-people-info__name">{{result.author}}</view>
							<view class="popular-list-header-people-info__time">{{result.time}}</view>
						</view>
					</view>
					<view class="popular-list-header-operation">
						<view class="popular-list-header-operation__btn">
							<image src="/static/img/add.png" mode="aspectFill"></image>
							<text>关注</text>
						</view>
					</view>
				</view>
				<view class="popular-list-center">
					<view class="popular-list-center__text">{{result.title}}</view>
					<view class="popular-list-center__image">
						<image v-for="(img, index) in result.images" :key="index" :src="img" mode="aspectFill" @click="previewImageHandler(result.images, index)"></image>
					</view>
				</view>

			</view>
		</view>

		<!-- 评论 -->
		<view class="comment-content">
			<view class="title">
				<view class="label-forward">
					<text class="number">1</text>
					<text>转发</text>
				</view>
				<view class="label-comment">
					<text class="number">9</text>
					<text>评论</text>
				</view>
				<view class="label-like">
					<text class="number">3</text>
					<text>喜欢</text>
				</view>
			</view>
			<view class="comment-box">
				<view class="commont-edit">
					<image class="people-img" src="../../static/img/avator.png" mode="aspectFill"></image>
					<view class="edit">
						<text class="icon-edit"></text>
						<text class="guandian">点击发表你的看法</text>
						<text class="icon-emojifill"></text>
					</view>
				</view>
				<view class="comment-list">
					<view class="list" v-for="item in comment" :key="item.id">
						<image class="people-img" src="../../static/img/avator.png" mode="aspectFill"></image>
						<view class="box">
							<view class="name">{{item.real_name}}</view>
							<view class="text">{{item.content}}</view>
							<view class="liuyan">
								<view class="tourist-content">
									<text class="tourist-name">草原上没有海：</text>
									<text class="tourist-comment">这个看起来像盘子女人坊</text>
								</view>
								<view class="tourist-content">
									<text class="tourist-name">李大海</text>
									<text>回复</text>
									<text class="tourist-name">草原上没有海：</text>
									<text class="tourist-comment">我也觉得是</text>
								</view>
							</view>
							<view class="comment-operation">
								<text class="date">4-9 17:45</text>
								<view class="btns">
									<view>
										<image src="/static/img/sq-info-01.jpg" mode="aspectFill"></image>
										<text></text>
									</view>
									<view class="comment-icom">
										<image src="/static/img/sq-info-02.jpg" mode="aspectFill"></image>
										<text class="text">2</text>
									</view>
									<view>
										<image src="/static/img/sq-info-03.jpg" mode="aspectFill"></image>
										<text class="text">54</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="footer-filex">
			<view class="item">
				<image src="/static/img/shequ-icon01.jpg" mode="aspectFill"></image>
				<text>转发</text>
			</view>
			<view class="item">
				<image src="/static/img/shequ-icon02.jpg" mode="aspectFill"></image>
				<text>评论</text>
			</view>
			<view class="item">
				<image src="/static/img/shequ-icon03.jpg" mode="aspectFill"></image>
				<text>喜欢</text>
			</view>
		</view>
	</view>
</template>

<script>
	import indexMixin from './index';
	export default {
		mixins: [indexMixin],
		data() {
			return {
				baseUrl: this.$BaseUrl,
				articleId: '', // 文章ID
				result: {}, // 文章内容
				comment: [1] // 评论
			}
		},
		created() {
			let _t = this;
			this.$uniSkip.getParams(function(data) {
				_t.result = data;
			});
		},
		methods: {
			// 社区详情
			async getCommunityInfo() {
				let res = await this.$api.communityInfo({
					id: this.articleId
				});
				if (res) {
					this.result = res.data.data;
					this.comment = res.data.comment;
				}
			},

			// 预览图片
			previewImageHandler(images, index) {
				plus.nativeUI.previewImage(images, {
					current: index,
					indicator: 'number',
					onLongPress(event) {
			
						let url = event.url; // 长按图片的url地址
						let bts = [{
							title: "保存到本地"
						}];
			
						plus.nativeUI.actionSheet({
							title: "保存图片",
							cancel: "取消",
							buttons: bts
						}, (e) => {
							if (e.index == 1) {
								// 保存图片
								plus.gallery.save(url, function() {
									plus.nativeUI.toast('保存成功', {
										verticalAlign: 'center'
									})
								}, function() {
									plus.nativeUI.toast('操作失败', {
										verticalAlign: 'center'
									})
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		padding-bottom: 100upx;
	}

	.popular-list {
		padding: 30upx;
		background-color: #ffffff;
		border-top: 1px solid #E3E3E3;
		border-bottom: 1px solid #E3E3E3;

		&-header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			&-people {
				display: flex;
				flex-direction: row;

				&-img {
					width: 84upx;
					height: 84upx;
				}

				&-info {
					margin-left: 28upx;

					&__name {
						color: #3D3D3D;
						font-size: 33upx;
					}

					&__time {
						margin-top: 10upx;
						color: #B0B0B0;
						font-size: 25upx;
					}
				}
			}

			&-operation {
				display: flex;
				flex-direction: row;
				align-items: center;

				&__btn {
					border: 1px solid var(--prink-line);
					border-radius: 10upx;
					padding: 10upx 15upx;

					image {
						width: 20upx;
						height: 20upx;
					}

					text {
						font-size: 24upx;
						color: var(--prink);
						margin-left: 6upx;
					}
				}
			}
		}

		&-center {
			margin-top: 26upx;

			&__text {
				font-size: 30upx;
				color: #373737;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
			}

			&__image {
				margin-top: 30upx;
				margin-bottom: 35upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				flex-wrap: wrap;

				image {
					width: 32%;
					height: 230upx;
					border-radius: 10upx;
				}

				image:nth-child(3n-1) {
					margin: 0 2%
				}
			}
		}
	}
	
	.comment-content {
		margin-top: 20upx;
		background-color: #fff;

		.title {
			padding: 0 23upx;
			padding-top: 30upx;
			padding-bottom: 30upx;
			font-size: 29upx;
			border-bottom: 1px solid #E3E3E3;
			color: #888888;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.label-comment {
			position: relative;
			flex: 1;
			margin-left: 45upx;
			color: #414141;

			&::after {
				position: absolute;
				content: '';
				display: block;
				width: 75upx;
				height: 6upx;
				background-color: var(--prink-bg);
				border-radius: 50upx;
				bottom: -18upx;
				left: 10upx
			}
		}

		.comment-box {
			padding: 58upx 23upx 0;
			
			.commont-edit {
				display: flex;
				align-items: center;

				.people-img {
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
				}

				.edit {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #B5B5B5;
					height: 76upx;
					line-height: 76upx;
					margin-left: 28upx;
					padding: 0 30upx;
					background-color: #EFEFEF;
					border-radius: 50upx;

					.icon-edit {
						font-size: 38upx
					}

					.guandian {
						font-size: 24upx;
						flex: 1;
						margin-left: 20upx;
					}

					.icon-emojifill {
						font-size: 60upx;
					}
				}
			}

			.comment-list {
				padding-top: 70upx;

				.list {
					display: flex;
					position: relative;
					margin-top: 20upx;

					.people-img {
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
					}

					.box {
						margin-left: 22upx;
					}

					&::after {
						position: absolute;
						display: block;
						content: '';
						left: -23upx;
						right: -23upx;
						bottom: 0;
						height: 1px;
						background-color: #E3E3E3
					}
				}

				.box {
					flex: 1;

					.name {
						font-size: 26upx;
						font-weight: bold;
						color: #717171;
						margin-bottom: 10upx
					}

					.text {
						font-size: 28upx;
						color: #404040
					}

					.liuyan {
						margin-top: 20upx;
						background-color: #EFEFEF;
						padding: 20upx;
						font-size: 28upx;

						.tourist-name {
							color: #FBB5C7;
						}

						.tourist-comment {
							color: #404040;
							margin-left: 10upx
						}
					}

					.comment-operation {
						color: #9D9D9D;
						padding: 30upx 0;
						display: flex;
						justify-content: space-between;

						.btns {
							display: flex;
							font-size: 38upx;

							image {
								width: 31upx;
								height: 31upx;
								vertical-align: middle
							}

							.text {
								font-size: 26upx;
								vertical-align: middle;
								color: #9D9D9D;
								margin-left: 5upx;
								vertical-align: middle
							}
						}

						.comment-icom {
							margin: 0 40upx;
						}
					}
				}
			}
		}
	}

	.footer-filex {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 98upx;
		z-index: 9;
		background-color: #F9F9F9;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.item {
			text-align: center;
			position: relative;
			vertical-align: middle;
			flex: 1;

			text {
				font-size: 27upx;
				margin-left: 20upx;
				color: #656565;
				vertical-align: middle
			}

			image {
				width: 35upx;
				height: 35upx;
				vertical-align: middle
			}
		}

		.item:nth-child(2)::before {
			position: absolute;
			content: '';
			display: block;
			left: 0;
			height: 50%;
			top: 25%;
			width: 1px;
			background-color: #C3C3C3
		}

		.item:nth-child(2)::after {
			position: absolute;
			content: '';
			display: block;
			right: 0;
			height: 50%;
			top: 25%;
			width: 1px;
			background-color: #C3C3C3
		}
	}
</style>
