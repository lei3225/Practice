define(function(){
	class Banner2{
		constructor(){}
		init(options){
			this.lb=$(options.lb);
			this.left2=$(options.left2);
			this.right2=$(options.right2);
			this.index=1;
			this.prev=this.lb.children('li').length-1;
			//console.log(this.right2);
			this.k=2;
			var that=this;
			this.right2.on('click',function(){
				//向左走
				if(that.index==that.lb.children('li').length-1){
					that.index=0;
					that.prev=that.lb.children('li').length-1;
					that.k=1;
				}else if(that.k==that.lb.children('li').length-1){
					that.k=0;
					that.index=that.lb.children('li').length-1;
					that.prev=that.lb.children('li').length-2;
				}else{
					that.index++;
					that.prev=that.index-1;
					that.k=that.index+1;
				}
				//console.log(that.index,that.prev);
				that.lb.children('li').removeClass('ts2').eq(that.index).addClass('ts2');
				that.lb.children('li').removeClass('ts1').eq(that.prev).addClass('ts1');
				that.lb.children('li').removeClass('ts3').eq(that.k).addClass('ts3');
			})
			this.left2.on('click',function(){
				//向右走
				if(that.prev==0){
					that.prev=that.lb.children('li').length-1;
					that.index=0;
					that.prev=1;
				}else if(that.index==0){
					that.index=that.lb.children('li').length-1;
					that.prev=that.index-1;
					that.k=0;
				}else if(that.k==0){
					that.k=that.lb.children('li').length-1;
					that.index=that.k-1;
					that.prev=that.index-1;
				}else{
					that.index--;
					that.prev=that.index-1;
					that.k=that.index+1;
				}
				console.log(that.prev,that.index,that.k);
				that.lb.children('li').removeClass('ts2').eq(that.index).addClass('ts2');
				that.lb.children('li').removeClass('ts1').eq(that.prev).addClass('ts1');
				that.lb.children('li').removeClass('ts3').eq(that.k).addClass('ts3');
			})
		}
	}
	return new Banner2();
})
