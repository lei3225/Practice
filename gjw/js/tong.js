
//cookie处理登录注册用户信息的操作
//$(".h1").html($.cookie("yonghu"))
if($.cookie("lyonghu")){
	$("#login em").html("欢迎尊贵的会员").next().html($.cookie("lyonghu"))
	$(".h2").html("<a id='exit' href='#'>注销</a>")
	$("#exit").click(function(){
		$.cookie("lyonghu",null);
		$.cookie("lmima",null);
		$(".h2").html("<a href=\'registe.html\'>注册</a>");
		location.reload()
	})
}

//console.log($.cookie("yonghu",{path:"/"}))
//console.log($.cookie("yonghu"))

//小动画：顶部广告三秒自动消失
setTimeout(function(){
	$(".topAd").slideUp(1000);
},3000)




//二级菜单
$(".qbfl-list").children("li").mouseenter(function(){
	$(this).css({
		background:"#FF2C00"
	}).siblings().css({
		background:""
	}).end().children("div").css({
		display:"block"
	}).parent().siblings().children("div").css({
		display:"none"
	})
})
$(".qbfl-list").children("li").mouseleave(function(){
	$(this).css({
		background:"" 
	}).children("div").css({
		display:"none"
	})
})




//浏览器滚动一定距离后出现固定导航栏
$(document).scroll(function(){
	if($(this).scrollTop() >=800){
		$(".fixedSch_box").css({
			display:"block"
		})
	}else{
		$(".fixedSch_box").css({
			display:"none"
		})
	}
})



////右侧一键返回顶部（粗糙版）
//$("#back").on("click",function () {
//  document.body.scrollTop = 0;
//  document.documentElement.scrollTop = 0;
//})
//右侧缓慢返回顶部(优化版)
$("#back").click(function(){
	$timer=setInterval(function(){
		document.documentElement.scrollTop -= 150;
		if(document.documentElement.scrollTop <= 0){
			clearInterval($timer)
		}
	},30)
})



//底部导航上下滚动
function friendlink(){
	var h=$(".list:first").height();//获取一个li的高度
	var length=$(".list").length;
	var index=1;
	var i=0;
	setInterval(function(){
		if (index>=length) {
			index=0;
			i=0;    //想获取的top是负的，所有定义一个i，用i-index得到负的top
		}
		$(".friendLinkList").stop().animate({
			top:(i-index)*h
		},1000);
		index++;
	},3000)
}
friendlink()



//菜单栏的固定
$(".rb_btn").mouseenter(function () {
    $(this).children(".iconBox_tips").stop().animate({
        right:"32px",
    },500)
})
$(".rb_btn").mouseleave(function () {
    $(this).children(".iconBox_tips").stop().animate({
        right:"80px"
    },500)
})
