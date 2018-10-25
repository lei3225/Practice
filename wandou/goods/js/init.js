require.config({
    paths: {
    	"ajax": "../../libs/ajax",
        "sideBar": "../../libs/sideBar",
        "logged": "../../libs/logged",
        "goods": "goods",
        "act": "act"
    },
    shim: {
        "init2": {
            deps: ["jquery"]
        }
    }
});

require(['ajax','sideBar','goods','logged'],function(ajax,sideBar,goods,logged){
	sideBar.init({
		item:".side-bar-item",
		oIcon:".side-bar-icon",
		oHover:".side-bar-hover",
		top:".back-to-top"
	})
	require(['act'])
})
