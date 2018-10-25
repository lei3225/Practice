require(["../js/tong"]);

////$(".h1").html($.cookie("yonghu"))
//if($.cookie("yonghu")!=null||undefined){
//	$("#login em").html("欢迎尊贵的会员").next().html($.cookie("yonghu"))
//	$(".h2").html("注销")
//}
////console.log($.cookie("yonghu",{path:"/"}))
////console.log($.cookie("yonghu"))

//左侧一键返回顶部（a标签定位覆盖在原图型的文字上）
$(".fixedSch_box").on("click",a,function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})