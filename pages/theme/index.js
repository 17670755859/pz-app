import json from '@/Json'
import uniSkip from '../../common/uni-skip.js'
Vue.prototype.$uniSkip = uniSkip
export default {
	data: {
		tabBars: [],
		tabCurrentIndex: 0,
	},

	methods: {
		loadTabbars() {
			let tabList = json.themeTab;
			tabList.forEach(item => {
				item.themeList = [];
				item.loadMoreStatus = 0; //加载更多 0加载前，1加载中，2没有更多了
				item.refreshing = 0;
			})
			this.tabBars = tabList;
			this.loadThemeList();
		},
		//新闻列表
		loadThemeList(type) {
			let tabItem = this.tabBars[this.tabCurrentIndex];
		
			if (tabItem.loadMoreStatus === 2) {
				tabItem.loadMoreStatus = 1
				setTimeout(() => {
					tabItem.loadMoreStatus = 2;
				}, 100)
				return;
			}
			tabItem.loadMoreStatus = 1;
		
			//setTimeout模拟异步请求数据
			setTimeout(() => {
				let list = json.themeList;
				list.sort((a, b) => {
					return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
				})
				if (type === 'refresh') {
					tabItem.themeList = []; //刷新前清空数组
				}
				list.forEach(item => {
					tabItem.themeList.push(item);
				})
				
				//上滑加载 处理状态
				tabItem.loadMoreStatus = tabItem.themeList.length > 40 ? 2 : 0;
				
			}, 600)
		},
		//新闻详情
		navToDetails(item) {
			let data = {
				id: item.id,
				title: item.title,
				author: item.author,
				time: item.time,
				images: item.images
			}
			console.log(555, data.images);
			this.$uniSkip.navigateTo({
				url: '/pages/community-info/community-info',
				data: data
			})
		},

		// 预览图片
		previewImageHandler(index) {

		}
	}

}
