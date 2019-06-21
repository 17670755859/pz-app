export const clearTabView = () => {
	// #ifdef APP-PLUS
	let view = plus.nativeObj.View.getViewById('tabPersonalClick');
	if (view) {
		view.close();
	}
	// #endif
}
export const createTabView = () => {
	// #ifdef APP-PLUS
	let view = new plus.nativeObj.View('tabPersonalClick', {
			bottom: '0px',
			left: '50%',
			height: '55px',
			dock: 'right',
			backgroundColor: 'rgba(255,255,255,0)'
		},
		[{
				tag: 'rect',
				id: 'communityId',
				color: 'rgba(255,255,255,0)',
				position: {
					top: '0px',
					left: '0px',
					width: '50%',
					height: '100%'
				}
			},
			{
				tag: 'rect',
				id: 'personalId',
				color: 'rgba(255,255,255,0)',
				position: {
					top: '0px',
					left: '50%',
					width: '50%',
					height: '100%'
				}
			}
		]);
	view.show();
	view.addEventListener("click", function(e) {
		uni.navigateTo({
			url: "/pages/login/login",
			animationType: "slide-in-bottom"
		})
	}, false);
	// #endif
}


export default {
	createTabView,
	clearTabView
};
