// 首页tab
const navs = [{
		url: '../../static/img/navs-01.jpg',
		title: '门店',
		path: '/pages/store-list/store-list',
		type: 'navigate'
	},
	{
		url: '../../static/img/navs-02.jpg',
		title: '主题',
		path: '/pages/theme/theme',
		type: 'switchTab'
	},
	{
		url: '../../static/img/navs-03.jpg',
		title: '客片',
		path: '/pages/wedding/wedding',
		type: 'navigate'
	},
	{
		url: '../../static/img/navs-04.jpg',
		title: '视频',
		path: '/pages/videos/videos',
		type: 'navigate'
	},
	{
		url: '../../static/img/navs-05.jpg',
		title: '汉服',
		path: '/pages/hanfu/hanfu',
		type: 'navigate'
	},
	{
		url: '../../static/img/navs-06.jpg',
		title: '影视合作',
		path: '/pages/yshz/yshz',
		type: 'navigate'
	},
	{
		url: '../../static/img/navs-07.jpg',
		title: '明星合作',
		path: '/pages/mxhz/mxhz',
		type: 'navigate'
	},
	{
		url: '../../static/img/navs-08.jpg',
		title: '积分兑换',
		path: '/pages/integral-list/integral-list',
		type: 'navigate'
	},
	{
		url: '../../static/img/navs-09.jpg',
		title: '变一变',
		path: '/pages/cross-dress/cross-dress',
		type: 'navigate'
	},
	{
		url: '../../static/img/navs-10.jpg',
		title: '我的照片',
		path: '/pages/photo/photo',
		type: 'navigate'
	}
];
// 
const swiperBanner = [{
		id: '1',
		url: 'http://mmm.pznrfsy.com//uploads/20190520/4eea6b8b8cb89f4bd161f80ff1cfe749.jpg',
		title: ''
	},
	{
		id: '2',
		url: 'http://mmm.pznrfsy.com//uploads/20190520/5ecce9e948cbd8ee2d72509cef2387ce.png',
		title: ''
	},
	{
		id: '3',
		url: 'http://mmm.pznrfsy.com//uploads/20190520/ebc961e3002c51302ef4607aae588d87.png',
		title: ''
	}
];

// 首页列表数据
const indexList = {
	themes: [{
			id: '1',
			url: 'http://mmm.pznrfsy.com//uploads/20190510/0716ee7bb77a0e466b54d1c59bf7a5f4.jpg',
			name: '【新白娘子传奇·白素贞】'
		},
		{
			id: '2',
			url: 'http://mmm.pznrfsy.com//uploads/20190510/0fe81686e5f3e7502f39688054b4acc9.jpg',
			name: '【新白娘子传奇·情侣】'
		},
		{
			id: '3',
			url: 'http://mmm.pznrfsy.com//uploads/20190510/3ebdfb53ae82ae55ce1e6fe3f83c74ab.jpg',
			name: '【凝脂】'
		},
		{
			id: '4',
			url: 'http://mmm.pznrfsy.com//uploads/20190510/6fb68dbc0a9fdb7362daca109fe7b801.jpg',
			name: '【丹唇】'
		}
	],
	wedding: [{
			id: '1',
			name: '五月第二季客片欣赏',
			url: 'http://mmm.pznrfsy.com//uploads/20190525/bbda513f916e429ff0e2c1f7b5d4d326.jpg'
		},
		{
			id: '2',
			name: '五月第一季客片欣赏',
			url: 'http://mmm.pznrfsy.com//uploads/20190522/02374100724e3d47a6598494082bf69f.jpg'
		},
		{
			id: '3',
			name: '四月第四季客片欣赏',
			url: 'http://mmm.pznrfsy.com//uploads/20190522/cb353daf606c1c2040df7785b5b7d934.jpg'
		},
		{
			id: '4',
			name: '四月第三季客片欣赏',
			url: 'http://mmm.pznrfsy.com//uploads/20190520/4ff5da63e923292e154cfe7283e7dc43.jpg'
		}
	]
}
// 社区tab
const tabBarCommunity = [{
		name: '热门',
		id: 1
	},
	{
		name: '关注',
		id: 2
	},
	{
		name: '影视',
		id: 3
	},
	{
		name: '客片',
		id: 4
	},
	{
		name: '变装',
		id: 5
	},
	{
		name: '同城',
		id: 6
	}
]

// 主题
const themeTab = [{
		id: 1,
		name: '最新'
	},
	{
		id: 2,
		name: '热拍'
	},
	{
		id: 3,
		name: '影视'
	},
	{
		id: 4,
		name: '情侣'
	},
	{
		id: 5,
		name: '闺蜜'
	},
	{
		id: 6,
		name: '亲子'
	},
	{
		id: 7,
		name: '外景'
	}
]

// 主题列表
const themeList = [{
		id: 1,
		name: '明星主题同款 | 【竹】',
		url: '../../static/img/theme-01.jpg',
		love: false,
		loveNum: 150,
		see: 1240
	},
	{
		id: 2,
		name: '明星主题同款 | 【侯月】',
		url: '../../static/img/theme-02.jpg',
		love: false,
		loveNum: 180,
		see: 1410
	},
	{
		id: 3,
		name: '明星主题同款 | 【扶摇】',
		url: '../../static/img/theme-03.jpg',
		love: true,
		loveNum: 562,
		see: 97812
	},
	{
		id: 4,
		name: '明星主题同款 | 【知】',
		url: '../../static/img/theme-04.jpg',
		love: false,
		loveNum: 99,
		see: 140
	},
	{
		id: 5,
		name: '明星主题同款 | 【花世间】',
		url: '../../static/img/theme-05.jpg',
		love: false,
		loveNum: 541,
		see: 6500
	}
]
// 社区列表
const newsList = [{
		id: 1,
		title: '从亲密无间到相爱相杀，这就是人类一败涂地的真相',
		author: '无名小辈',
		images: [
			'http://mmm.pznrfsy.com//uploads/20190306/7b47da3250fc342c713f72aa4566f4e2.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/820d6a9fcbd343b7fe9713c68c10fc07.jpg',
			'http://mmm.pznrfsy.com//uploads/20190401/d95302efae854d2a81d74110e30c365a.jpg',
		],
		time: '2小时前',
		type: 3,
		follow: 0
	},

	{
		id: 2,
		title: '别再玩手机了，赶紧学前端，晚一年能少掉5根头发',
		author: '爱考过',
		images: [
			'http://mmm.pznrfsy.com//uploads/20190411/4dfd207daa607143a65f56ee41695350.jpg',
		],
		time: '30分钟前',
		type: 1,
		follow: 1
	},
	{
		id: 3,
		title: '将府公园成居民身边“大绿肺”',
		author: '林黛玉',
		images: [
			'http://mmm.pznrfsy.com//uploads/20190508/4b4c6de4349b8cdb1bc2537971ae0078.jpg',
		],
		time: '2小时前',
		type: 3,
		follow: 0
	},
	{
		id: 4,
		title: '骨傲天最偏爱的五位部下 这么多强者还比不过一只仓鼠',
		author: '神说要唱歌',
		images: [
			'http://mmm.pznrfsy.com//uploads/20190510/6fb68dbc0a9fdb7362daca109fe7b801.jpg'
		],
		time: '2019-04-10 11:43',
		type: 2,
		follow: 0
	},
	{
		id: 5,
		title: '继国通倒下后，又一公司放弃快递业务，曾砸20亿战“三通一达”',
		author: '爱情是多花',
		images: [
			'http://mmm.pznrfsy.com//uploads/20190510/c012b9a5a625af88b807ff600a38fbf0.jpg',
			'http://mmm.pznrfsy.com//uploads/20190510/6288319a84a0f22d52d6d2dbeff67f1f.jpg',
			'http://mmm.pznrfsy.com//uploads/20190525/bbda513f916e429ff0e2c1f7b5d4d326.jpg',
		],
		time: '5分钟前',
		type: 3,
		follow: 0
	},
	{
		id: 6,
		title: '奔驰车主哭诉维权续：双方再次协商无果',
		author: '张总',
		images: [],
		time: '5分钟前',
		type: 4,
		follow: 0
	},
	{
		id: 7,
		title: '靠跑车激发潜能，奔驰Pro跑车首测，怎么那么像意大利跑车设计',
		author: '漫步云端',
		images: [
			'http://mmm.pznrfsy.com//uploads/20190411/4dfd207daa607143a65f56ee41695350.jpg',
			'http://mmm.pznrfsy.com//uploads/20190510/c012b9a5a625af88b807ff600a38fbf0.jpg',
			'http://mmm.pznrfsy.com//uploads/20190520/9c556a00231a6b60e4c7e4d9aa065763.png',
		],
		time: '2019-04-14 ：10:58',
		type: 3,
		follow: 0
	},
	{
		id: 8,
		title: '起来有多可怕，看完这3段代码眼睛湿润了!',
		author: 'Alone',
		images: [
			'http://mmm.pznrfsy.com//uploads/20190520/206584a36e1fdf00e2129d9cdcb88a4e.png',
			'http://mmm.pznrfsy.com//uploads/20190520/ebc961e3002c51302ef4607aae588d87.png',
			'http://mmm.pznrfsy.com//uploads/20190520/5ecce9e948cbd8ee2d72509cef2387ce.png',
		],
		time: '2019-04-14 ：10:58',
		type: 3,
		follow: 0
	},
]

// 门店列表
const storeList = [{
		id: 1,
		name: '北京总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/5e00905f25da46cdac727a897bc19922.png'
	},
	{
		id: 2,
		name: '北京朝阳',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/d39c63a062a5fb86ade24cf791e37f11.png'
	},
	{
		id: 3,
		name: '上海总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/e29bf1feffa02576a67bf8d2c77d9f64.png'
	},
	{
		id: 4,
		name: '上海静安',
		url: 'http://mmm.pznrfsy.com//uploads/20181228/f28236037bd64ea38901d0b77a3cd8d9.png'
	},
	{
		id: 5,
		name: '深圳总店',
		url: 'http://mmm.pznrfsy.com//uploads/20181228/63f75300a02187e9480d0f0779902e70.png'
	},
	{
		id: 6,
		name: '深圳南山',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/988da82a3579ae57ccb6e91f9daac300.png'
	},
	{
		id: 7,
		name: '广州总店',
		url: 'http://mmm.pznrfsy.com//uploads/20181228/a28fe0378c11766df198cd84d939a83a.png'
	},
	{
		id: 8,
		name: '广州天河',
		url: 'http://mmm.pznrfsy.com//uploads/20181228/a28fe0378c11766df198cd84d939a83a.png'
	},
	{
		id: 9,
		name: '杭州总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/711bd07d3f33c2ddd3fbf31939bced61.png'
	},
	{
		id: 10,
		name: '杭州拱墅',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/ffd5098508efa8c318a92202f2f78ec9.png'
	},
	{
		id: 11,
		name: '苏州总店',
		url: 'http://mmm.pznrfsy.com//uploads/20181228/5f42d0e1be80bcf913662adb2b7e46de.png'
	},
	{
		id: 12,
		name: '天津总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/122e576d69bbec109829cd89e1bbf889.png'
	},
	{
		id: 13,
		name: '天津和平',
		url: 'http://mmm.pznrfsy.com//uploads/20181228/82146768ba134c9ce20599f8b58f7fe3.png'
	},
	{
		id: 14,
		name: '南京总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/20ff3a037dd44cac97fd28e286178f1a.png'
	},
	{
		id: 15,
		name: '长沙总店',
		url: 'http://mmm.pznrfsy.com//uploads/20181229/14dabb5fad8c9b4df09d45190707985f.png'
	},
	{
		id: 16,
		name: '武汉总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/5d90a2ec5a9eef453c51f2b78b7aeba9.png'
	},
	{
		id: '17',
		name: '长春总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/8d4bede6a847a8fcf045e23c1eb20190.png'
	},
	{
		id: '18',
		name: '青岛总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/8afaae13d37ed833f3402a673c1b08d8.png'
	},
	{
		id: '19',
		name: '厦门总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/579fafbe4c89ad99faed82c2781925d4.png'
	},
	{
		id: '20',
		name: '昆明总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/b47cda9d8107b76eecbe5de7ea0f2921.png'
	},
	{
		id: '21',
		name: '郑州总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/dde974f265dac7f163f2bc65c53fd395.png'
	},
	{
		id: '22',
		name: '太原总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/8a18a825de2055f3a28ec13eaab99b82.png'
	},
	{
		id: '23',
		name: '济南总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/a5e6a1f70e9f6393cd9f448a36aa4f00.png'
	},
	{
		id: '24',
		name: '石家庄店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/d91c7dbad14f2b7147a886d21ddc6d84.png'
	},
	{
		id: '25',
		name: '沈阳总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/6c4b316ea28f0e9a1d9c11f98b7fb6a9.png'
	},
	{
		id: '26',
		name: '常州总店',
		url: 'http://mmm.pznrfsy.com//uploads/20190515/522c11570338b71914017e7442e1df73.png'
	}
]

// 主题详情
const themeInfo = [{
		title: '2019新款主题 |【新白娘子传奇·白素贞】',
		horizontal: [
			'http://mmm.pznrfsy.com//uploads/20190530/01160a1788d4fa032e2bab20614e9a80.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/597286acc171f4b3078663cf4bd3bfcf.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/f532b6b8f02512baf8d58df0218ebd15.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/b40fb0b0a2dbe16458836dcda7c9c1a1.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/d6f428e9afcde715c3161f902ec20de8.jpg',
		],
		vertical: [
			'http://mmm.pznrfsy.com//uploads/20190530/3f504fea8ded398f3e77d1bb5f8b3498.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/064cf34a1dcd020441efed862bfaf653.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/be0a603c799d3b9b5861912ae0a9000b.jpg',
		]
	},
	{
		title: '2019新款主题 |【新白娘子传奇·情侣】',
		horizontal: [
			'http://mmm.pznrfsy.com//uploads/20190530/747298d1b4b8763620c799d536733f62.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/f1ca936a4ab3170a667a3c40a34fa76e.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/5002986b4d39cd9845f3cffe21bcec10.jpg'
		],
		vertical: [
			'http://mmm.pznrfsy.com//uploads/20190530/8515ed6af34027a19f4d929afff3bfdf.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/4b431c5c6ce980c3ee081508d1b6c737.jpg',
			'http://mmm.pznrfsy.com//uploads/20190530/60bb4164e353afd01698a27313e0601b.jpg'
		]
	},
	{
		title: '2019新款主题 |【凝脂】',
		horizontal: [
			'http://mmm.pznrfsy.com//uploads/20190402/427a5a6c8d146e40dab291b3686d7c2b.jpg',
			'http://mmm.pznrfsy.com//uploads/20190402/d01e1f5f449a55ab1de098717a114efa.jpg'
		],
		vertical: [
			'http://mmm.pznrfsy.com//uploads/20190402/5996b932efea04e314246ab08715438f.jpg',
			'http://mmm.pznrfsy.com//uploads/20190402/381bbc30c25d5ce14f040fa929779b04.jpg'
		]
	},
	{
		title: '2019新款主题 |【丹唇】',
		horizontal: [
			'http://mmm.pznrfsy.com//uploads/20190402/cd1b3e37a90aafb5de5fdfad40283bdb.jpg',
			'http://mmm.pznrfsy.com//uploads/20190402/ce99bcb0a2f53971e0208a732a6d12c8.jpg'
		],
		vertical: [
			'http://mmm.pznrfsy.com//uploads/20190402/15d1a980d1df85cb38377e02c13effb6.jpg',
			'http://mmm.pznrfsy.com//uploads/20190402/c27097330db5642bc7697bab0923f480.jpg'
		]
	}
]

// 客户评价
const comments = [{
		id: 'id1',
		img_path: '../../static/img/comment-01.jpg'
	},
	{
		id: 'id2',
		img_path: '../../static/img/comment-02.jpg'
	},
	{
		id: 'id3',
		img_path: '../../static/img/taoxi.png'
	}
]

// 客片详情
const weddingInfo = [{
		id: '1',
		title: '五月第二季客片欣赏',
		horizontal: [
			'http://mmm.pznrfsy.com//uploads/20190525/4f4401be94652cb8b619edf427eb21bc.jpg',
			'http://mmm.pznrfsy.com//uploads/20190525/21d4ceb2bd7b5f951d57c33824ae0104.jpg',
			'http://mmm.pznrfsy.com//uploads/20190525/a030ca4dba102000055fa914ad884663.jpg'
		],
		vertical: [
			'http://mmm.pznrfsy.com//uploads/20190525/f5cdba90eccad302f41d5cc2cdcceded.jpg',
			'http://mmm.pznrfsy.com//uploads/20190525/0197dc9b7712bf2b8baaab50aa92ec29.jpg'
		]
	},
	{
		id: '2',
		title: '五月第一季客片欣赏',
		horizontal: [
			'http://mmm.pznrfsy.com//uploads/20190522/588660963a3390825aeac3b15a861d08.jpg',
			'http://mmm.pznrfsy.com//uploads/20190522/d8562610e25213f51f39fd47c4a30e0e.jpg',
			'src="http://mmm.pznrfsy.com//uploads/20190522/50226e1ccc456a4bd83ac1af538ed543.jpg"'
		],
		vertical: []
	},
	{
		id: '3',
		title: '四月第四季客片欣赏',
		horizontal: [
			'http://mmm.pznrfsy.com//uploads/20190514/20551af1f71801d5d489b3db6601eb6d.jpg',
			'http://mmm.pznrfsy.com//uploads/20190514/7d3c9d479c5f02676cc7cfd3501d0da9.jpg',
			'http://mmm.pznrfsy.com//uploads/20190514/4df9dde07f6b95f2e7fddaaea3627e86.jpg'
		],
		vertical: []
	},
	{
		id: '4',
		title: '四月第三季客片欣赏',
		horizontal: [
			'http://mmm.pznrfsy.com//uploads/20190512/f8421350ae5f56bc6d48f10c84e9e82f.jpg',
			'http://mmm.pznrfsy.com//uploads/20190512/0a226d797d30171ed10a5e956a8ff44d.jpg',
			'http://mmm.pznrfsy.com//uploads/20190512/d6db915e3b856cc240532eb132bd3979.jpg'
		],
		vertical: []
	}
]

// 门店详情
const storeInfo = [{
		name: '北京总店',
		content: '',
		address: '北京市丰台区西三环内南路55号顺和智库财富广场二层西侧D区',
		phone: '010-57528182',
		url: 'www.panzi.cc'
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	},
	{
		name: '',
		content: '',
		imgs: ''
	}
]

// 客片
const weddings = [
	{ id: 1, url: 'http://mmm.pznrfsy.com//uploads/20190525/bbda513f916e429ff0e2c1f7b5d4d326.jpg' },
	{ id: 2, url: 'http://mmm.pznrfsy.com//uploads/20190522/02374100724e3d47a6598494082bf69f.jpg' },
	{ id: 3, url: 'http://mmm.pznrfsy.com//uploads/20190522/cb353daf606c1c2040df7785b5b7d934.jpg' },
	{ id: 4, url: 'http://mmm.pznrfsy.com//uploads/20190520/4ff5da63e923292e154cfe7283e7dc43.jpg' },
	{ id: 5, url: 'http://mmm.pznrfsy.com//uploads/20190508/a9b05bd79ae1955c895c2696f664e25c.jpg' },
	{ id: 6, url: 'http://mmm.pznrfsy.com//uploads/20190508/682efd44cc363109a88f74298a907047.jpg' },
	{ id: 7, url: 'http://mmm.pznrfsy.com//uploads/20190426/0a5198b74f3cffad3f1f8100ba213c15.jpg' }
]

// 明星体验师
const starList = [
	{ id: 1, name: '明星体验师 | 【张含韵】', url: 'http://mmm.pznrfsy.com//uploads/20190520/9c556a00231a6b60e4c7e4d9aa065763.png' },
	{ id: 2, name: '明星体验师 | 【安以轩】', url: 'http://mmm.pznrfsy.com//uploads/20190520/4eea6b8b8cb89f4bd161f80ff1cfe749.jpg' },
	{ id: 3, name: '明星体验师 | 【母其弥雅】', url: 'http://mmm.pznrfsy.com//uploads/20190520/5ecce9e948cbd8ee2d72509cef2387ce.png' },
	{ id: 4, name: '明星体验师 | 【李念】', url: 'http://mmm.pznrfsy.com//uploads/20190520/ebc961e3002c51302ef4607aae588d87.png' },
	{ id: 5, name: '明星体验师 | 【李思思】', url: 'http://mmm.pznrfsy.com//uploads/20190520/206584a36e1fdf00e2129d9cdcb88a4e.png' }
]

// 积分列表
const integralList = [
	{ id: 1, name: '2017热拍主题 |【花间晴岚】', num: '2300', peple: '1.3万', url: 'http://mmm.pznrfsy.com//uploads/20181228/1f1d417321ab36a399afc4e4e5377b16.jpg' },
	{ id: 2, name: '2017热拍主题 |【琉璃翠】', num: '1500', peple: '1.8万', url: 'http://mmm.pznrfsy.com//uploads/20181228/8dae681741ed40141e1fe55c3f0a91e7.jpg' },
	{ id: 3, name: '2018热拍主题 |【挽青袖】', num: '5400', peple: '8740', url: 'http://mmm.pznrfsy.com//uploads/20181228/c7bf0ee11d41bdc7ab1f9d465888862a.jpg' },
	{ id: 4, name: '2011热拍主题 |【惹红尘】', num: '6520', peple: '3250', url: 'http://mmm.pznrfsy.com//uploads/20181228/8a1d3fcde844ff5277ab49f2b2f6dd42.jpg' },
	{ id: 5, name: '2017热拍主题 |【不入梨园】', num: '1880', peple: '2.3万', url: 'http://mmm.pznrfsy.com//uploads/20181228/4a737c410192a0a39067ec8db58899f9.jpg' },
	{ id: 6, name: '2017热拍主题 |【墨】', num: '3400', peple: '4.2万', url: 'http://mmm.pznrfsy.com//uploads/20181228/bd79f1033ee7de6a111c11d94ecb2147.jpg' }
]

const photos = [
	'http://mmm.pznrfsy.com//uploads/20190408/768b9753143b2bbaac36418221f79b6d.jpg',
	'http://mmm.pznrfsy.com//uploads/20190329/a7526d6743eed1a3b9a3af5d4a8337ee.jpg',
	'http://mmm.pznrfsy.com//uploads/20190305/e665d639f66f99a4dff0f79afc23fc5f.jpg',
	'http://mmm.pznrfsy.com//uploads/20190214/ade1e77c98e48cf50feed2bacb42f8e3.jpg',
	'http://mmm.pznrfsy.com//uploads/20190201/d8dcb0fc4053f07a2f33656c4e528a27.jpg',
	'http://mmm.pznrfsy.com//uploads/20190123/24a5e3881f1aba7df7345c6bfed73c40.jpg',
	'http://mmm.pznrfsy.com//uploads/20190118/f9f7d39c920e7b66280d634637b1f8b6.jpg',
	'http://mmm.pznrfsy.com//uploads/20190107/6264db3999323a1c6c5eebcccfc87caf.jpg',
	'http://mmm.pznrfsy.com//uploads/20190104/0fc02397ed979002fa85cbef622690ae.jpg',
	'http://mmm.pznrfsy.com//uploads/20181228/416f414820f9d3d952b5070388468e07.jpg',
	'http://mmm.pznrfsy.com//uploads/20181228/39fdefdea9f53495eba4e852d2872bc4.jpg',
	'http://mmm.pznrfsy.com//uploads/20181228/47442abda312d1c1f2d126fe2e99a91f.jpg',
	'http://mmm.pznrfsy.com//uploads/20181228/2ab1418aab9aa6d99afca24eeea52789.jpg'
]

const address = [
	{
		id: '1',
		name: '张怀',
		phone: '17670755859',
		province: '湖南省',
		city: '长沙市',
		area: '天心区',
		road: '华远国际中心·36楼',
		tag: '公司',
		type: '01'
	},
	{
		id: '2',
		name: '张怀',
		phone: '17670755859',
		province: '湖南省',
		city: '长沙市',
		area: '西湖公园',
		road: '枫林一路575号',
		tag: '家',
		type: '00'
	},
	{
		id: '3',
		name: '张怀',
		phone: '17670755859',
		province: '湖南省',
		city: '长沙市',
		area: '天心区',
		road: '劳动西路259号，城市风情',
		tag: '家',
		type: '00'
	}
]

// 社区热门列表
const rmDatas = [1, 2, 3, 4, 5, 6]
export default {
	navs,
	swiperBanner,
	rmDatas,
	themeTab,
	newsList,
	themeList,
	storeList,
	tabBarCommunity,
	indexList,
	themeInfo,
	comments,
	weddingInfo,
	weddings,
	starList,
	integralList,
	photos,
	address
}
