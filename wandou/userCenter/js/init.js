require.config({
    paths: {
        "sideBar": "../../libs/sideBar"
    }
});


require(['sideBar','logged','display'],function(sideBar,logged,display){
	sideBar.init({
		item:".side-bar-item",
		oIcon:".side-bar-icon",
		oHover:".side-bar-hover",
		top:".back-to-top"
	})
})
