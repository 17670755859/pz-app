let key = 'skipSetStorageKey';
let skipSetStorage = (data, callback) => {
	let param = typeof data.data != 'object' ? {} : data.data;
	let storage = JSON.stringify(param)
	uni.setStorage({
		key: key,
		data: storage,
		success() {
			callback
		}
	});
}
let getParams = (callback) => {
	setTimeout(() => {
		uni.getStorage({
			key: key,
			success: function(res) {
				let data = JSON.parse(res.data)
				callback(data);
				uni.removeStorage({
					key: key
				});
			}
		});
	}, 1)
}

export default {
	navigateTo(data) {
		skipSetStorage(data, uni.navigateTo(data))
	},
	redirectTo(data) {
		skipSetStorage(data, uni.redirectTo(data))
	},
	reLaunch(data) {
		skipSetStorage(data, uni.reLaunch(data))
	},
	switchTab(data) {
		skipSetStorage(data, uni.switchTab(data))
	},
	navigateBack(data) {
		let num = isNaN(data.delta) ? 1 : parseInt(data.delta)
		try {
			uni.postMessage({
				lastNum: num,
				data: data,
				watchParams: true
			})
			skipSetStorage(data, uni.navigateBack(data))
		} catch (e) {
			var pages = getCurrentPages();
			var page = pages[pages.length - num - 1];
			var currentWebview = page.$getAppWebview();
			skipSetStorage(data, uni.navigateBack(data))
			plus.webview.postMessageToUniNView({
					data: data,
					watchParams: true
				},
				currentWebview.id
			);
		}

	},
	getParams(callback) {
		getParams(callback)
	},
	watchParams(callback) {
		try {
			const globalEvent = weex.requireModule('globalEvent');
			globalEvent.addEventListener("plusMessage", e => {
				if (e.data.watchParams == true) {
					getParams(callback)
				}
			});
		} catch (e) {
			getParams(callback)
		}

	},
	onUniNViewMessage(e) {
		if (e.data.lastNum) {
			var pages = getCurrentPages();
			console.log(e.data.lastNum)
			var page = pages[pages.length - e.data.lastNum - 1];
			var currentWebview = page.$getAppWebview();
			plus.webview.postMessageToUniNView({
					data: e.data.data,
					watchParams: true
				},
				currentWebview.id
			);
		}
	}
}
