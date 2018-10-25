// 账号密码失去交点
$("p.user,p.pass").children("input").blur(function(){
    if($(this).val() != ""){
        $(this).siblings("u").hide();
    };
});


// 验证输入的验证码
code = "^" + code + "$";
var just = new RegExp(code,"i");
var justOn = 1;

$("p.justify input").keyup(function(){
    if(just.test($(this).val())){
        $("p.pos u").eq($(this).parent().index()).html("验证码正确").css({
            color: "green"
        });
        justOn = 0;
    }else{
        $("p.pos u").eq($(this).parent().index()).html("不区分大小写，验证码不正确").css({
            color: ""
        });
        justOn = 1;
    };
});

// 登录
var otxtuser=document.querySelector("p.user input");
var otxtpass=document.querySelector("p.pass input");

$(".white>div p.btn input").click(function(){
    if(otxtuser.value != cook.get("ryonghu")){
        $("section#display").show().html("用户名不存在");
        setTimeout(()=>{
            $("section#display").hide();
        },1000);
    }else if(otxtpass.value != cook.get("rmima")){
        $("section#display").show().html("用户名密码不符");
        setTimeout(()=>{
            $("section#display").hide();
        },1000);
    }else if(justOn != 0){
    	$("section#display").show().html("验证码不正确");
		setTimeout(()=>{
   			$("section#display").hide();
        },1000);
   	}else{
        $("section#display").show().html("登录成功,3秒后跳转到首页");
        cook.set("userStatus",otxtuser.value,{
            path:"/"
        });
        setTimeout(function(){
         	window.location.href = "../index.html";
        },3000);
    };
});