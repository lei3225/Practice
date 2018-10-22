define(function(){
	class Floor{
		constructor(){}
		init(options){
			var floor=document.querySelector("#floor");
			floor.style.height=document.documentElement.clientHeight+"px";
			this.f1=$(options.f1);
			console.log(this.f1.length)
			var f2=document.querySelectorAll(".f2");
			this.html=$(options.html);
			var that=this;
			for(let i=0;i<f2.length;i++){
				f2[i].onclick=function(){
					that.html.stop().animate({
						scrollTop:that.f1.eq($(this).index()).offset().top
					},500)
					
				}
			}
		}
	}
	return new Floor();
})
