require(["../js/tong"])
//引用相同部分的tong.js文件

////$(".h1").html($.cookie("yonghu"))
//if($.cookie("yonghu")!=null||undefined){
//	$("#login em").html("欢迎尊贵的会员").next().html($.cookie("yonghu"))
//	$(".h2").html("注销")
//}
////console.log($.cookie("yonghu",{path:"/"}))
////console.log($.cookie("yonghu"))

//放大镜
$(".listpic").mouseenter(function () {
    $(this).addClass("select").siblings().removeClass("select");
    var lisrc = $(this).find("img").attr("src");
//    console.log(lisrc)
    $("#itempicshow").find("img").attr({src:lisrc});
    $("#itempicbig").find("img").attr({src:lisrc});
})

var osquare = document.getElementById("square");
var oitempicshow = document.getElementById("itempicshow");
var oitempicbig = document.getElementById("itempicbig");
var obimg = document.getElementById("bimg");
$("#itempicshow").mouseenter(function () {
    osquare.style.display = "block";
    oitempicbig.style.display = "block";
    
    $("#itempicshow").mousemove(function (eve) {
        var e = eve || window.event;
        var l = e.offsetX - osquare.offsetWidth/2;
        var t = e.offsetY - osquare.offsetHeight/2;
        if(l < 0){
            l = 0;
        }
        if(t < 0){
            t = 0;
        }
        if(l > oitempicshow.offsetWidth - osquare.offsetWidth){
            l = oitempicshow.offsetWidth - osquare.offsetWidth;
        }
        if(t > oitempicshow.offsetHeight - osquare.offsetHeight){
            t = oitempicshow.offsetHeight - osquare.offsetHeight
        }
        osquare.style.left = l + "px";
        osquare.style.top = t + "px";
        
        var dix = l/(oitempicbig.offsetWidth - osquare.offsetWidth);
        var diy = t/(oitempicbig.offsetHeight - osquare.offsetHeight);
        obimg.style.left = -dix*(obimg.offsetWidth - oitempicbig.offsetWidth) + "px";
        obimg.style.top = -diy*(obimg.offsetHeight - oitempicbig.offsetHeight) + "px";
    //以上四行抄的老师代码不理解
    })
})
$("#itempicshow").on("mouseleave",function () {
    osquare.style.display = "none";
    oitempicbig.style.display = "none";
})





