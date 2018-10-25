if(cook.get("userStatus")){
	var str = "欢迎," + cook.get("userStatus")
	$(".top-nav-auth em").html(str).next().html("<a id='exit' href='#'>退出登录</a>")
	$(".res").html("<a href='userCenter/userCenter.html'>个人中心</a>")
	$("#exit").click(function(){
		cook.del("userStatus");
		$(".top-nav-auth").html("<em>请</em><a href='login-register/login.html'>登录</a> <a href='login-register/register.html>免费注册</a>");
		location.reload()
	})
}
