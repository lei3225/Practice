require.config({
    paths: {
        "ajax": "../../libs/ajax",
        "sideBar": "../../libs/sideBar",
        "logged": "../../libs/logged"
    }
});


require(['ajax','sideBar','display','logged'],function(ajax,sideBar,display,logged){
	sideBar.init({
		item:".side-bar-item",
		oIcon:".side-bar-icon",
		oHover:".side-bar-hover",
		top:".back-to-top"
	})
	require(["img"])
})
