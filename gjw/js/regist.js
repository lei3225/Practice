// 验证码
$(".next").click(function () {
    var a = Math.round(Math.random()*9);
    var b = Math.round(Math.random()*9);
    var c = Math.round(Math.random()*9);
    var d = Math.round(Math.random()*9);
    var str = "";
    str = ""+ a + b + c + d;
    $(".code").html(str)
})





var ouser = document.getElementById("user");
var opass = document.getElementById("password");
var orepass = document.getElementById("repass");
var ocode = document.getElementById("code");
var onOff = 1;
////表单有焦点出现蓝色边框（优选方法二）
// ouser.onfocus = function () {
//     $(".text_box").eq(0).addClass("focus");
// };
// opass.onfocus = function () {
//     $(".text_box").eq(1).addClass("focus");
// }
// orepass.onfocus = function () {
//     $(".text_box").eq(2).addClass("focus")
// }
// ocode.onfocus = function () {
//     $(".txt").eq(0).addClass("focus");
// }

//表单有焦点出现蓝色边框(直接选到input)
    $("input").focus(function () {
        $(this).parent(".text_box").addClass("focus")
    }).blur(function () {
        $(this).parent(".text_box").removeClass("focus")
    })
    
    $("input").focus(function () {
        $(this).parent(".txt").addClass("focus")
    }).blur(function () {
        $(this).parent(".txt").removeClass("focus")
    })




//表单验证
//1.用户名  用户名仅支持中文、字母、数字、“-”“_”的组合，4-20个字符
var $strong = $("<strong></strong>");
var $b = $('<b></b>');
ouser.onblur = function () {
    var reg = /^[\u2E80-\u9FFF\w-]{4,20}$/;//\u2E80-\u9FFF表示中日韩文及简体
    $(".text_box").eq(0).append($strong);//class最后加强调标签包裹
    if(reg.test(ouser.value)){
        $(".text_box").eq(0).removeClass("errorBox");
        $("strong").removeClass().html("").addClass("meetIcon");
        $("b").remove();
        onOff = 0;
    }else {
        $(".text_box").eq(0).removeClass("focus").addClass("errorBox");//红色光标
        $("strong").removeClass().addClass("error").html("请输入正确用户名").append($b);
        $("b").addClass("errorIcon");
        onOff = 1;
    }
}

//2.密码  数字字母下划线及—（6-20位）
opass.onblur = function () {
    var reg = /^[\w-]{4,20}$/;
    $(".text_box").eq(1).append($strong);
    if(reg.test(opass.value)){
        $(".text_box").eq(1).removeClass("errorBox").addClass("focus");
        $("strong").removeClass().html("").addClass("meetIcon");
        $("b").remove();
        onOff = 0;
    }else {
        $(".text_box").eq(1).removeClass("focus").addClass("errorBox");
        $("strong").removeClass().addClass("error").html("请输入正确密码").append($b);
        $("b").addClass("errorIcon");
        onOff = 1;
    }
}

//3确认密码
orepass.onblur = function () {
    $(".text_box").eq(2).append($strong);
    if(orepass.value == opass.value){
        $(".text_box").eq(2).removeClass("errorBox").addClass("focus");
        $("strong").removeClass().html("").addClass("meetIcon");
        $("b").remove();
        onOff = 0;
    }else {
        $(".text_box").eq(2).removeClass("focus").addClass("errorBox");
        $("strong").removeClass().addClass("error").html("请输入相同密码").append($b);
        $("b").addClass("errorIcon");
        onOff = 1;
    }
}

//4确认验证码
ocode.onblur = function () {
    if ($("#code").val() != $(".code").html()){
        alert("验证码输入有误");
        onOff = 1;
    }else {
        onOff = 0;
    }
    //console.log(onOff);   //判断onOff的值，为下面的注册做铺垫
}




$(".reg").click(function () {
	if(onOff==0){
		alert("注册成功！页面将在3秒后跳转");
		$.cookie("ryonghu",$("#user").val(),{expires:7});
		$.cookie("rmima",$("#password").val(),{expires:7}) //没有接口，存cookie
        setInterval(function () {
         	window.location.href = "login.html";
        },3000)
	}else{
		alert("某项信息输入有误");
        window.location.reload();
	}
})





////注册(由于接口失效，登录注册重构代码如上)
//$(".reg").click(function () {
//  if(onOff == 0){
//      $.ajax({
//          url:"http://datainfo.duapp.com/shopdata/userinfo.php",
//          type:"post",
//          data:{
//              status:"register",
//              userID:$("#user").val(),
//              password:$("#password").val()
//          },
//          success:function (res) {
//              switch (res){
//                  case "0":alert("用户名已存在，请重新设置");
//                      window.location.reload();
//                      break;
//                  case "1":alert("注册成功！页面将在3秒后跳转");
//                      // console.log($("#user").val(),$("#password").val());
//                      setInterval(function () {
//                          window.location.href = "login.html";
//                      },3000)
//                      break;
//                  case "2":alert("数据库繁忙");
//              }
//          },
//          error:function () {
//              alert("服务器崩溃");
//          }
//      })
//  }else {
//      alert("某项信息输入有误");
//      window.location.reload();
//  }
//})
