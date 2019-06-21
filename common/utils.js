const install = function (Vue) {
    /**
     * 合并-json
     * @param  {Json} target 需要合并的json
     * @return {Json}        合并后的json
     */
    Vue.prototype.$mergeJson = function (target) {
        for (let i = 1, j = arguments.length; i < j; i++) {
            let source = arguments[i] || {};
            for (let prop in source) {
                if (source.hasOwnProperty(prop)) {
                    let value = source[prop];
                    if (value !== undefined) {
                        target[prop] = value;
                    }
                }
            }
        }

        return target;
    };

    /**
     * 复制-简单深拷贝
     * @param  {Object} obj 需要复制的对象
     * @return {Object}     复制后的对象
     */
    Vue.prototype.$copy = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };

    /**
     * 正则表达式
     * @param  {String}  format 格式名
     * @param  {String}  value  值
     * @return {Boolean}        是否符合标准
     */
    Vue.prototype.$regex = function (format, value) {
        let formatArr = {
            // 英文数字
            englishNumber: {
                regex: '^[a-zA-Z0-9]+$'
            },
            // 数字
            number: {
                regex: '^[0-9]+$'
            },
            // 英文数字-
            englishNumberBar: {
                regex: '^[a-zA-Z0-9\-]+$'
            },
            // 特殊字符
            specialCharacter: {
                regex: /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]*$/
            },
            // 针对2017年第10批手机号，匹配所有的手机号，不区分运营商，不考虑卫星通信、物联网等特殊号段
            cellphoneNo: {
                regex: '^134[0-8]\\d{7}$|^13[^4]\\d{8}$|^14[5-9]\\d{8}$|^15[^4]\\d{8}$|^16[6]\\d{8}$|^17[0-8]\\d{8}$|^18[\\d]{9}$|^19[8,9]\\d{8}$'
            }
        };

        return formatArr[format] ? new RegExp(formatArr[format].regex).test(value) : false;
    };
	
	/** 获取日期
	 * @type {String}
	 */
	Vue.prototype.$getDate = function(type) {
		const date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
		return `${year}-${month}-${day}`;
	}
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
