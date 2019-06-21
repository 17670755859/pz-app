import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
	}
	
	return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
		url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
		data,
	})
}

// 轮播图
export const banner = (data) => {
	return http.request({
		url: '/index/column',
		method: 'GET',
		data,
		// handle:true
	})
}

// 获取验证码
export const getCode = data => {
	return http.request({
		url: '/member/send_sms',
		method: 'GET',
		data
	})
}

// 验证手机是否已注册
export const testPhone = data => {
	return http.request({
		url: '/member/verify_tel',
		method: 'GET',
		data
	})
}

// 注册账号
export const register = data => {
	return http.request({
		url: '/member/register',
		method: 'POST',
		data
	})
}

// 登录
export const login = data => {
	return http.request({
		url: '/member/login',
		method: 'POST',
		data
	})
}

// 推出登录
export const loginOut = data => {
	return http.request({
		url: '/member/login_out',
		method: 'POST',
		data
	})
}

// 获取用户信息
export const getUserInfo = data => {
	return http.request({
		url: '/member/info_member',
		method: 'GET',
		data
	})
}

// 完善用户信息
export const perfectUserInfo = (data) => {
	return http.request({
		url: '/member/edit_member',
		method: 'POST',
		data
	})
}

// 社区导航分类
export const communityTab = data => {
	return http.request({
		url: '/sns/category',
		method: 'GET',
		data
	})
}

// 社区列表
export const communityList = data => {
	return http.request({
		url: '/sns/index_list',
		method: 'GET',
		data
	})
}

// 社区列表 --> 详情
export const communityInfo = data => {
	return http.request({
		url: '/sns/details',
		method: 'GET',
		data
	})
}

// 社区文章点赞
export const communityZan = data => {
	return http.request({
		url: '/sns/edit_sns',
		method: 'GET',
		data
	})
}
// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	test,
	banner,
	login,
	getCode,
	loginOut,
	register,
	testPhone,
	getUserInfo,
	communityZan,
	communityTab,
	communityList,
	communityInfo,
	perfectUserInfo,
}
