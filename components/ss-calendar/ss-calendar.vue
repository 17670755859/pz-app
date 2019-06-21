<template>
	<view class="calendar__wrap">
		<view class="header">
			<view class="prev" @click="switchDate('prev')">
				<image src="../../static/img/time-arrow-left-active.png" mode=""></image>
			</view>
			<view class="current-date">{{currentDate}}</view>
			<view class="next" @click="switchDate('next')">
				<image src="../../static/img/time-arrow-right.png" mode=""></image>
			</view>
		</view>
		<view class="body">
			<view class="weeks">
				<view class="week__item" v-for="week in weeks" :key="week">{{week}}</view>
			</view>
			<view class="day__list">
				<view class="day__item" v-for="(item,index) in dateData" :key="index">
					<image class="checked" v-if="item==='checked'" src="../../static/img/calendar-icon.png" mode=""></image>
					<text :class="{current:item===day}" v-else>{{item}}</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="stadu">
				<view class="stadu__active stadu__item">
					<view class="badge"></view>
					<view>已签到</view>
				</view>
				<view class="stadu__gray stadu__item">
					<view class="badge"></view>
					<view>已签到</view>
				</view>
				<view class="stadu__line stadu__item">
					<view class="badge"></view>
					<view>已签到</view>
				</view>
			</view>
			<view class="record">签到记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			checks: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			const {
				year,
				month,
				day
			} = this.getDate()
			const dateData = this.getDateData(year, month)
			return {
				year,
				month,
				day,
				dateData,
				weeks: ['日', '一', '二', '三', '四', '五', '六']
			}
		},
		computed: {
			currentDate() {
				return `${this.year}-${this.format(this.month)}`
			}
		},
		watch: {
			checks(val) {
				const {
					year,
					month
				} = { ...val
				}
				const dateData = this.getDateData(year, month)
				this.dateData = dateData
			}
		},
		methods: {
			getDate(current) {
				const date = current ? new Date(current) : new Date()
				const year = date.getFullYear()
				const month = date.getMonth() + 1
				const day = date.getDate()
				return {
					year,
					month,
					day
				}
			},
			getDateData(year, month) {
				const date = new Date(`${year}/${month}/1`)
				const firstDayWeek = date.getDay()
				const emptyStrNum = firstDayWeek > 0 ? firstDayWeek : 7
				const data = [...this.getEmptys(emptyStrNum), ...this.getDays()]
				return data
			},
			getEmptys(count) {
				let arr = []
				for (let i = 0; i < count; i++) {
					arr.push('')
				}
				return arr
			},
			getLastDay() {
				let {
					year,
					month
				} = this.getDate()
				month += 1
				if (month > 11) {
					year += 1
					month = 1
				}
				let firstDayTimeStamp = new Date(`${year}/${month}/1`).getTime()
				let oneDayTimeStamp = 24 * 60 * 60 * 1000
				let lastDay = new Date(firstDayTimeStamp - oneDayTimeStamp).getDate()
				return lastDay
			},
			getDays() {
				const lastDay = this.getLastDay()
				const days = []
				for (let i = 1; i <= lastDay; i++) {
					days.push(this.checks.includes(i) ? 'checked' : i)
				}
				return days
			},
			format(num) {
				return num < 10 ? `0${num}` : num
			},
			getPreMonth(date) {
				var arr = date.split('.');
				var year = arr[0]; //获取当前日期的年份
				var month = arr[1]; //获取当前日期的月份
				var day = arr[2]; //获取当前日期的日
				var days = new Date(year, month, 0);
				days = days.getDate(); //获取当前日期中月的天数
				var year2 = year;
				var month2 = parseInt(month) - 1;
				if (month2 == 0) {
					year2 = parseInt(year2) - 1;
					month2 = 12;
				}
				var day2 = day;
				var days2 = new Date(year2, month2, 0);
				days2 = days2.getDate();
				if (day2 > days2) {
					day2 = days2;
				}
				// if (month2 < 10) {
				// 	month2 = '0' + month2;
				// }
				return {
					year2,
					month2,
					day2
				};
			},
			getNextMonth(date) {
				var arr = date.split('.');
				var year = arr[0]; //获取当前日期的年份
				var month = arr[1]; //获取当前日期的月份
				var day = arr[2]; //获取当前日期的日
				var days = new Date(year, month, 0);
				days = days.getDate(); //获取当前日期中的月的天数
				var year2 = year;
				var month2 = parseInt(month) + 1;
				if (month2 == 13) {
					year2 = parseInt(year2) + 1;
					month2 = 1;
				}
				var day2 = day;
				var days2 = new Date(year2, month2, 0);
				days2 = days2.getDate();
				if (day2 > days2) {
					day2 = days2;
				}
				// if (month2 < 10) {
				// 	month2 = '0' + month2;
				// }
			
				return {
					year2,
					month2,
					day2
				};
			},
			switchDate(event) {
				let newDate = this.year + '.' + this.month + '.' + this.day;
				let date = event == 'prev' ? this.getPreMonth(newDate) : this.getNextMonth(newDate)
				this.year = date.year2
				this.month = date.month2
				this.day = date.day2
				this.dateData = this.getDateData(date.year2, date.month2);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.calendar__wrap {
		background-color: #fff;
		color: $uni-text-color;

		.header {
			padding: 0 24upx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 2upx solid #eee;

			.current-date {
				text-align: center;
				font-size: 34upx;
				padding: 32upx 0;
			}

			.prev,
			.next {
				margin: 0 30upx;

				image {
					width: 32upx;
					height: 32upx;
				}
			}
		}

		.body {
			.weeks {
				display: flex;
				font-size: 30upx;
				padding: 32upx 0;

				.week__item {
					flex: 1;
					text-align: center;
				}
			}

			.day__list {
				display: flex;
				flex-wrap: wrap;

				.day__item {
					display: flex;
					justify-content: center;
					width: 14.285%;
					text-align: center;
					padding: 30upx 0;
					font-size: 34upx;
					
					.checked,
					.current {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 56upx;
						height: 56upx;
						border-radius: 100%;
						padding: 12upx;
						box-sizing: border-box;
						background-color: #FA9EB6;
						color: #fff;
						font-size: 28upx;
					}
				}
			}
		}

		.footer {
			display: flex;
			justify-content: space-between;
			font-size: 24upx;
			color: #B0A99E;
			padding: 20upx;

			.stadu {
				display: flex;

				.badge {
					width: 15upx;
					height: 15upx;
					border-radius: 50%;
					margin-right: 10upx;
				}

				view {
					vertical-align: middle;
				}

				&__item {
					display: flex;
					align-items: center;
					margin-right: 30upx;
				}

				&__active {
					.badge {
						background-color: var(--prink-bg);
					}
				}

				&__gray {
					.badge {
						background-color: #B0A99E;
					}
				}

				&__line {
					.badge {
						border: 1px solid var(--prink-line);
					}
				}
			}

			.record {
				color: var(--prink);
			}
		}
	}
</style>
