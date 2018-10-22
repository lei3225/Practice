define(function(){
	class Banner{
		constructor(){}
		init(options){
			this.items=$(options.items).children();
			this.left=$(options.left);
			this.right=$(options.right);
			this.xd=$(options.xd);
			this.span=this.xd.children();
//			console.log(this.xd);
			this.timer=null;
			var that=this;
			this.inow=0;
			this.banner=$(options.banner);
			this.prev=this.items.length-1;
//			console.log(this.inow,this.prev);
			this.timer=setInterval(function(){
				
				if(that.inow==that.items.length-1){
					that.inow=0;
					that.iprev=that.items.length-1;
				}else{
					that.inow++;
					that.iprev=that.inow-1;
				}
				that.changeIndex(1);
//				clearInterval(that.timer);
			},1500)
			this.banner.on('mouseover',function(){
				that.left.addClass('active');
				that.right.addClass('active');
				clearInterval(that.timer);
			})
			this.banner.on('mouseout',function(){
				that.left.removeClass('active');
				that.right.removeClass('active');
				that.timer=setInterval(function(){
					if(that.inow==that.items.length-1){
						that.inow=0;
						that.iprev=that.items.length-1;
					}else{
						that.inow++;
						that.iprev=that.inow-1;
					}
					that.changeIndex(1);
				},1500)
			})
			this.right.on('click',function(){
//				往左走
				if(that.inow==that.items.length-1){
					that.inow=0;
					that.iprev=that.items.length-1;
				}else{
					that.inow++;
					that.iprev=that.inow-1;
				}
				that.changeIndex(1);
			})
			
			this.left.on('click',function(){
//				往右走
				if(that.inow==0){
					that.inow=that.items.length-1;
					that.iprev=0;
				}else{
					that.inow--;
					that.iprev=that.inow+1;
				}
				that.changeIndex(-1);
			})
			//小点
			this.span.on('mouseover',function(){
				
				if(that.inow<$(this).index()){
					that.inow=$(this).index();
					that.iprev=that.inow-1;
					that.changeIndex(1);

				}else{
					that.inow=$(this).index();
					that.iprev=that.inow+1;
					that.changeIndex(-1);
				}
			})
			
			

		}
		changeIndex(i){
			this.items.eq(this.inow).stop().css({
					'left':1200*i,
				}).stop().animate({
					'left':0,
				},800);
				this.items.eq(this.iprev).stop().css({
					'left':0,
				}).stop().animate({
					'left':-1200*i,
				},800)
			this.span.stop().removeClass("te").eq(this.inow).stop().addClass('te');
		}
	}
	return new Banner();
})
