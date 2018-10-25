require(["../js/tong"])
//引用相同部分的tong.js文件

////$(".h1").html($.cookie("yonghu"))
//if($.cookie("yonghu")!=null||undefined){
//	$("#login em").html("欢迎尊贵的会员").next().html($.cookie("yonghu"))
//	$(".h2").html("注销")
//}
////console.log($.cookie("yonghu",{path:"/"}))
////console.log($.cookie("yonghu"))

//轮播图——（）
function Swiper(){
	this.left=document.getElementById("left");
	this.right=document.getElementById("right");
	this.cont=document.getElementById("cont");
	this.oimg=this.cont.children;
	this.index=0;
	this.init();
}
Swiper.prototype.init=function(){
	var that=this;
	$(".swiper-pagination").find("span").eq(0).css({
		background:"red"
	})
	
	var timer=setInterval(function(){   //等待首部banner消失后出现小的span数字
		if(that.index==that.oimg.length-1){
			that.index=0;
		}else{
			that.index++;
		}
		$(that.oimg[that.index]).stop().fadeIn().siblings().css({
			display:"none"
		})
		$(".swiper-pagination").find("span").eq(that.index).css({ 
			background:"red"
		}).siblings().css({
			background:""
		})
	},3000)

	this.left.onclick=function(){
		that.change("left");
	}
	this.right.onclick=function(){
		that.change("right")
	}
	
	$("#cont").on("mouseover","this.oimg",function(){   //jquery中事件委托的写法加“on”，回调函数中传需要委托的参数
		clearInterval(timer);
	})
	$("#cont").on("mouseleave","this.oimg",function(){
		clearInterval(timer);
		timer=setInterval(function(){
			if(that.index==that.oimg.length-1){
				that.index=0;
			}else{
				that.index++;
			}
			$(that.oimg[that.index]).stop().fadeIn().siblings().css({
				display:"none"
			});
			$(".swiper-pagination").find("span").eq(that.index).css({
				background:"red"
			}).siblings().css({
				background:""
			})	
		},4000)
	})
	
	$(".swiper-pagination").find("span").hover(function(){
		$(that.oimg[$(this).index()]).stop().fadeIn().siblings().css({
			display:"none"
		});
		$(".swiper-pagination").find("span").eq($(this).index()).css({
			background:"red"
		}).siblings().css({
			background:""
		})
	})
}


Swiper.prototype.change=function(direct){
	if(direct=="left"){
		if(this.index==0){
			this.index=this.oimg.length-1;
		}else{
			this.index--;
		}
	}
	if(direct=="right"){
		if(this.index==this.oimg.length-1){
			this.index==0;
		}else{
			this.index++;
		}
	}
	$(this.oimg[this.index]).stop().fadeIn(2000).siblings().css({
		display:"none"
	})
	$(".swiper-pagination").find("span").eq(this.index).css({
		background:"red"
	}).siblings().css({
		background:""
	})
	var that=this;
	$(".swiper-pagination").find("span").hover(function(){
		$(that.oimg[$(this).index()]).stop().fadeIn().siblings().css({
			display:"none"
		})
	$(".swiper-pagination").find("span").eq($(this).index()).css({
		background:"red"
	}).siblings().css({
		background:""
	})
	})
}
new Swiper();
