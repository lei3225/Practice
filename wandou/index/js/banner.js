define(function(){
	class Banner{
		constructor(){}
		init(options){
			this.banner=$(options.banner);
			this.box=$(options.box).children();
			this.left=$(options.left);
			this.right=$(options.right);
			this.list=$(options.list);
			this.oli=this.list.children();
			this.timer=null;
			var that=this;
			this.inow=0;
			
			this.prev=this.box.length-1;
//			banner自动播放
			this.timer=setInterval(function(){
				if(that.inow == that.box.length-1){
					that.inow=0;
					that.iprev=that.box.length-1;
				}else{
					that.inow++;
					that.iprev=that.inow-1;
				}
				that.changeIndex(1);
			},3000)
//			鼠标滑过停止播放
			this.banner.on('mouseover',function(){
				that.left.addClass('active');
				that.right.addClass('active');
				clearInterval(that.timer);
			})
//			鼠标离开继续播放
			this.banner.on('mouseout',function(){
				that.left.removeClass('active');
				that.right.removeClass('active');
				that.timer=setInterval(function(){
					if(that.inow==that.box.length-1){
						that.inow=0;
						that.iprev=that.box.length-1;
					}else{
						that.inow++;
						that.iprev=that.inow-1;
					}
					that.changeIndex(1);
				},3000)
			})
//			点击切换图片
			this.right.on('click',function(){
//				往右走
				if(that.inow == that.box.length-1){
					that.inow=0;
					that.iprev=that.box.length-1;
				}else{
					that.inow++;
					that.iprev=that.inow-1;
				}
				that.changeIndex(1);
			})
			
			this.left.on('click',function(){
//				往左走
				if(that.inow==0){
					that.inow=that.box.length-1;
					that.iprev=0;
				}else{
					that.inow--;
					that.iprev=that.inow+1;
				}
				that.changeIndex(-1);
			})
			
			//小点
			this.oli.on('mouseover',function(){
				
				if(that.inow < $(this).index()){
					that.iprev=that.inow;
					that.inow=$(this).index();
					that.changeIndex(1);

				}else{
					that.iprev=that.inow;
					that.inow=$(this).index();
					that.changeIndex(1);
				}
			})
			
		}
		changeIndex(i){
			this.box.eq(this.inow).stop().css({
					'left':932*i,
				}).stop().animate({
					'left':0,
				},1000);
				this.box.eq(this.iprev).stop().css({
					'left':0,
				}).stop().animate({
					'left':-932*i,
				},1000)
			this.oli.stop().removeClass("active").eq(this.inow).stop().addClass('active');
		}
	}
	return new Banner();
})
