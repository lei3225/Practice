define(function(){
	class Timeout{
		constructor(){}
		init(options){
			this.hour=$(options.hour);
			this.minute=$(options.minute);
			this.second=$(options.second);
			var that=this;
			setInterval(function(){
				//console.log(1);
				if(that.second.html()==0){
					that.minute[0].innerHTML=Number(that.minute.html())-1;
					that.second[0].innerHTML=60;
					//console.log(1);
				}
				if(that.minute.html()==0&&that.second.html()==0){
					that.hour[0].innerHTML="0"+(Number(that.hour.html())-1);
					that.minute[0].innerHTML=59;
					that.second[0].innerHTML=60;
				}
				if(that.minute.html()==0&&that.second.html()==0&&that.hour.html()==0){
					that.hour[0].innerHTML='0'+5;
					that.minute[0].innerHTML==59;
					that.second[0].innerHTML==60;
				}
				//console.log(that.second.html().length);
				if(Number(that.second.html())<=10){
					that.second[0].innerHTML="0"+(Number(that.second.html())-1);
				}else{
					that.second[0].innerHTML=Number(that.second.html())-1;
				}
			},1000)
		}
	}
	return new Timeout();
})
