if(cook.get("userStatus")){
	var str = "欢迎," + cook.get("userStatus")
	$(".top-nav-auth em").html(str).next().html("<a id='exit' href='#'>退出登录</a>")
	$(".res").html("<a href='../userCenter/userCenter.html'>个人中心</a>")
	$("#exit").click(function(){
		cook.del("userStatus");
		window.location.href="../index.html"
	})
}
