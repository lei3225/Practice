var userReg = /^[a-z]\w{5,15}$/i;
var onOff1 = 1;
var onOff2 = 1;
var onOff3 = 1;

// 用户名
// 针对一个个单按
$("p.user input").keyup(function(){
    if(userReg.test($(this).val())){
        $("p.pos u").eq($(this).parent().index()).html("用户名格式正确").css({
            color: "green"
        });
        onOff1 = 0;
    }else{
        $("p.pos u").eq($(this).parent().index()).html("建议6-16位数字、大小写字母、下划线组合，首位必须是字母").css({
            color: ""
        });
        onOff1 = 1;
    };
});

var passReg = /^\w{6,16}$/;
var passReg1 = /\d/;
var passReg2 = /_/;
var passReg3 = /[a-z]/i;

// 密码
// 针对一个个单按
$("p.pass input").keyup(function(){
    var a = b = c = 0;
    if(passReg1.test($(this).val())){a = 1;};
    if(passReg2.test($(this).val())){b = 1;};
    if(passReg3.test($(this).val())){c = 1;};
    var sum = a + b + c;
    if(passReg.test($(this).val())){
        if(sum == 1){
            $("p.pos u").eq($(this).parent().index()).html("简单").css({
                color: "red"
            });
        }else if(sum == 2){
            $("p.pos u").eq($(this).parent().index()).html("适中").css({
                color: "orange"
            });
        }else if(sum == 3){
            $("p.pos u").eq($(this).parent().index()).html("困难").css({
                color: "green"
            });
        };
    }else{
        $("p.pos u").eq($(this).parent().index()).html("建议6-16位数字、大小写字母、下划线组合").css({
            color: ""
        });
    };
});

$("p.pass input").blur(function(){
    rPass = $(this).val();
    if($("p.rPass input").val() === rPass && rPass !== ""){
        $("p.pos u").eq($("p.rPass input").parent().index()).html("密码一致").css({
            color: "green"
        });
    }else{
        $("p.pos u").eq($("p.rPass input").parent().index()).html("密码不一致").css({
            color: ""
        });
    };
});

// 二次密码
$("p.rPass input").keyup(function(){
    if($(this).val() === rPass){
        $("p.pos u").eq($(this).parent().index()).html("密码一致").css({
            color: "green"
        });
        onOff2 = 0;
    }else{
        $("p.pos u").eq($(this).parent().index()).html("密码不一致").css({
            color: ""
        });
        onOff2 = 1;
    };
});

// 验证输入的验证码
code = "^" + code + "$";
var just = new RegExp(code,"i");
var onOff4;

$("p.justify input").keyup(function(){
    if(just.test($(this).val())){
        $("p.pos u").eq($(this).parent().index()).html("验证码正确").css({
            color: "green"
        });
        onOff3 = 0;
    }else{
        $("p.pos u").eq($(this).parent().index()).html("不区分大小写，验证码不正确").css({
            color: ""
        });
        onOff3 = 1;
    };
})


var otxtuser=document.querySelector("p.user input");
var otxtpass=document.querySelector("p.pass input");
// 按钮
$(".white>div p.btn input").click(function(){
	console.log(otxtpass.value)
    if(onOff1 == 0 && onOff2 == 0 && onOff3 == 0){
      	alert("注册成功！点击确定后，页面将在3秒后跳转");
		cook.set("ryonghu",otxtuser.value);
		cook.set("rmima",otxtpass.value) //没有接口，存cookie
        setInterval(function () {
         	window.location.href = "login.html";
        },3000)
    }else{
        $("section#display").show().html("请按要求格式注册");
        setTimeout(()=>{
            $("section#display").hide();
        },1000);
    };
});
