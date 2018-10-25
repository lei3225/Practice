require.config({
    paths: {
        "cookie": "../../libs/cookie",
        "ajax": "../../libs/ajax",
        "sideBar": "../../libs/sideBar",
        "display": "display",
        "logged": "logged",
        "act": "act"
    }
});


require(['cookie','ajax','sideBar','display','logged'],function(cookie,ajax,sideBar,display,logged){
	sideBar.init({
		item:".side-bar-item",
		oIcon:".side-bar-icon",
		oHover:".side-bar-hover",
		top:".back-to-top"
	})
	require(["act"]);
})
