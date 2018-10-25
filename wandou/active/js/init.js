require.config({
    paths: {
        "cookie": "../../libs/cookie",
        "sideBar": "../../libs/sideBar",
        "logged": "../../libs/logged",
    }
});


require(['cookie','sideBar','logged'],function(cookie,sideBar,logged){
	sideBar.init({
		item:".side-bar-item",
		oIcon:".side-bar-icon",
		oHover:".side-bar-hover",
		top:".back-to-top"
	})
})
