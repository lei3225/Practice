define(function(){
	class Index{
		constructor(){}
		init(options){
			this.ej=$(options.ej);
			this.dj=$(options.dj);
			this.xb=$(options.xb);
			var blItem=document.querySelectorAll(".bl-item");
//			console.log(blItem);
			var that=this;
			this.dj.on('mouseover',function(){
//				that.ej.fadeIn(500);
				that.ej.addClass('active');
				that.dj[0].style.color="#c33";
				that.xb[0].style.backgroundImage="url(//s2.ymatou.com/home/e442d154d1094b967744bfaab48efc37.png)";
			})
			this.ej.on('mouseover',function(){
//				that.ej.fadeIn(500);
				that.ej.addClass('active');
				that.dj[0].style.color="#c33";
				that.xb[0].style.backgroundImage="url(//s2.ymatou.com/home/e442d154d1094b967744bfaab48efc37.png)";
			})
			this.dj.on('mouseout',function(){
				that.ej.removeClass('active');
				that.xb[0].style.backgroundImage=" url(//s2.ymatou.com/home/1cb1fe20152e19748e6cc8b52cc8fcbb.png)";
				that.dj[0].style.color="#383838";
			})
			this.ej.on('mouseout',function(){
				that.ej.removeClass('active');
				that.xb[0].style.backgroundImage=" url(//s2.ymatou.com/home/1cb1fe20152e19748e6cc8b52cc8fcbb.png)";
				that.dj[0].style.color="#383838";
//				that.ej.fadeOut(500);
			})
			//分类
			for(let i=0;i<blItem.length;i++){
				blItem[i].onmouseover=function(){
//					this.children('span').addClass('btn');
					blItem[i].children[0].style.display="block";
					blItem[i].children[1].style.display="block";
					blItem[i].style.boxShadow="0 0 0 3px #ededed";
					this.onmouseout=function(){ 	
						this.children[0].style.display="none";
						this.children[1].style.display="none";
						this.style.boxShadow="none";
					}
//					blItem[i].children[1].addClass('btn');
				}
			}

			
			
			
		}
		
	}
	return new Index();
})
