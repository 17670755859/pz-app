<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import 'style/app.css';

	page {
		height: 100%;
	}

	.load-more {
		text-align: center;
		font-size: 25upx;
		color: #787878;
		margin: 100upx 0;
	}

	.footer-content {
		.pz-footer-logo {
			text-align: center;

			image {
				width: 265upx;
				height: 94upx;
			}
		}

		.pz-footer-tips {
			text-align: center;
			margin-top: 70upx;

			image {
				width: 705upx;
				height: 31upx
			}
		}

		.form {
			width: calc(100% - 56upx);
			padding-top: 50upx;
			padding-bottom: 75upx;
			border-bottom: 1px dashed #CCCCCC;
			margin: 45upx auto 0;

			&-cell {
				margin-bottom: 40upx;
				display: flex;

				input {
					border: 1px solid #ccc;
					padding: 15upx 10upx;
					flex: 1;
				}

				.code {
					display: flex;
					align-items: center;
					// padding: 0 40upx;
					width: 200upx;
					text-align: center;
					color: #212121;
					font-size: 28upx;
					background-color: #C5C5C5;
					border-radius: 8upx;
					text-align: center;
					margin-left: 18upx;
					text{
						width: 100%;
					}
				}

				.submit {
					width: 100%;
					height: 80upx;
					line-height: 80upx;
					text-align: center;
					background-color: var(--prink-bg);
					color: #FFFFFF;
					font-size: 32upx;
					border-radius: 4upx
				}
			}
		}

		.footer {
			margin-top: 70upx;
			text-align: center;
			padding: 0 20upx;
			padding-bottom: 80upx;

			.h4 {
				font-size: 28upx;
				color: #2f2f2f
			}

			.h1 {
				font-size: 74upx;
				color: #515151
			}

			.h6 {
				font-size: 18upx;
				color: #5b5b5b
			}

			.topLog {
				margin-top: 60upx;
			}
		}
	}
	
	
</style>
<style>
	/*
		全局公共样式和字体图标
	*/
	@font-face {
		font-family: 'iconfont';
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_1209399_l2zitxjkco.ttf') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-close:before {
		content: "\e849";
	}
	
	.icon-member:before {
		content: "\e641";
	}
	
	.icon-message:before {
		content: "\e644";
	}
	
	.icon-add:before{
		content: "\e62b";
	}
	
	.icon-arrowRight:before {
		content: '\e600';
	}
	
	.icon-edit-line:before {
		content: '\e63b';
	}
	
	.icon-mail:before {
		content: '\e7de';
	}
	
	.icon-address:before {
		content: '\e62c';
	}
</style>
