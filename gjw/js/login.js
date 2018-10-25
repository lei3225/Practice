$("#txtUserName").val($.cookie("lyonghu"))
$("#txtPassword").val($.cookie("lmima"))
//$("#autologin").val($.cookie("zidong"))
$("#autologin").attr("checked",$.cookie("zidong"))

//光标获取事件（上面的写法不能解决离开点击其他部位光标消失的效果）
//$("#Username").click(function(){
//	$(".text_box").eq(0).addClass("focus").siblings().removeClass("focus");
//})
//$("#Mima").click(function(){
//	$(".text_box").eq(1).addClass("focus").siblings().removeClass("focus");
//})

$("input").focus(function () {
        $(this).parent(".text_box").addClass("focus")
    }).blur(function () {
        $(this).parent(".text_box").removeClass("focus")
    })




//登录
var otxtuser=document.getElementById("txtUserName");
var otxtpass=document.getElementById("txtPassword");
//console.log($.cookie("ryonghu"))
//console.log($.cookie("rmima"))
var onOff=0;
$("#autologin").click(function(){
	onOff=1
	$("#autologin").attr("checked","checked")
})

$(".loginBtn").click(function(){
	if(onOff==0){
		if(otxtuser.value==$.cookie("ryonghu") && otxtpass.value==$.cookie("rmima")){
			alert("登录成功，将为您跳转至购物页面");
			$.cookie("lyonghu",$("#txtUserName").val(),{expires:7})
	        setTimeout(function () {
	            window.location.href = "index.html";
	        },2000)	
		}else{
			alert("用户名或密码输入错误");
			window.location.reload();
		}
	}else{
		if(otxtuser.value==$.cookie("ryonghu") && otxtpass.value==$.cookie("rmima")){
			alert("登录成功，将为您跳转至购物页面");
			$.cookie("lyonghu",$("#txtUserName").val(),{expires:7})
			$.cookie("lmima",$("#txtPassword").val(),{expires:7})
//			$.cookie("zidong",$("#autologin").attr("checked"),{expires:7})
			$.cookie("zidong",$("#autologin").val(),{expires:7})
	        setTimeout(function () {
	            window.location.href = "index.html";
	        },2000)	
		}else{
			alert("用户名或密码输入错误");
			window.location.reload();
		}
	}
})



////登录（由于接口失效，登录代码重构如上）
//$(".loginBtn").on("click",function () {
//  $.ajax({
//      url:"http://datainfo.duapp.com/shopdata/userinfo.php",
//      type:"post",
//      data:{
//        status:"login",
//        userID:$("#txtUserName").val(),
//        password:$("#txtPassword").val()
//      },
//      success:function (res) {
//          switch (res){
//              case "0":
//                  alert("用户名不存在");
//                  break;
//              case "2":
//                  alert("用户名或密码错误");
//                  window.location.reload();
//                  break;
//              default:alert("登录成功，将为您跳转至购物页面");
////              	$.cookie("yonghu",$("#txtUserName").val(),{expires:7,path:"/"})//存用户名
//					$.cookie("yonghu",$("#txtUserName").val(),{expires:7})
//                  setTimeout(function () {
//                      window.location.href = "index.html";
//              },2000)
//          }
//      },
//      error:function () {
//          alert("服务器崩溃");
//      }
//  })
//})


