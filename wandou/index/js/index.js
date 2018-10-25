require.config({
    paths: {
        "cookie": "../../libs/cookie",
        
    }
});


require(['cookie','sideBar','banner','timeout','logged'],function(cookie,sideBar,banner,timeout,logged){
	sideBar.init({
		item:".side-bar-item",
		oIcon:".side-bar-icon",
		oHover:".side-bar-hover",
		top:".back-to-top"
	})
	banner.init({
		banner:'.box',
		box:'.slider-box',
		left:'.left',
		right:'.right',
		list:'.list'
	})
	timeout.init({
		hour:'.hour',
		minute:'.minute',
		second:'.second'
	})
})

