function move(obj,json,fn){
			clearInterval(obj.timer);
			obj.timer=setInterval(()=>{
				var onoff=true;
				for(let attr in json){
					if(attr=="opacity"){
						var now=getStyle(obj,attr)*100;
					}else{
						var now=parseInt(getStyle(obj,attr));
					}
					var speed=(json[attr]-now)/8;
					speed=speed<0?Math.floor(speed):Math.ceil(speed);
					if(json[attr]!=now)onoff=false;
					if(attr=="opacity"){
						obj.style.opacity=(now+speed)/100;
						//obj.style.filter="alpha(opacity:(now+speed))"
					}else{
						obj.style[attr]=now+speed+"px";
					}
				}
				if(onoff){
					clearInterval(obj.timer);
					if(fn)fn();
				}
				
			},30)
		}