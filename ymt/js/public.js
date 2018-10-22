//补零
function zero(){
	if(n<10||n.length<2){
		return "0"+n;
	}else{
		return n;
	}
}
//格式化日期
function mydate(){
	var d=new Date();
	var y=d.getFullYear();
	var m=d.getMonth();
	var data=d.getDate();
	var h=d.getHours();
	var mnt=d.getMinutes();
	var s=d.getSeconds();
	
	switch(day){
		case 0:day="星期日";break;
		case 1:day="星期一";break;
		case 2:day="星期二";break;
		case 3:day="星期三";break;
		case 4:day="星期四";break;
		case 5:day="星期五";break;
		case 6:day="星期六";break;
	}
	return y+"年"+zero(m+1)+"月"+zero(data)+"日"+day+"  "+zero(h)+":"+zero(mnt)+":"+zero(s);
}
//	计算两个日期的天数差，格式要求如下：
//		"2018.08.08"
//		"2018/08/08"
//		"2018-08-08"
function dateMinus(n,o){
	if(o.split("-").length==3){
		var oarr=o.split("-");
		var narr=n.split("-");
	}else if(o.split("/").length==3){
		var oarr=o.split("/");
		var narr=n.split("/");
	}else if(o.split(".").length==3){
		var oarr=o.split(".");
		var narr=n.split(".");
	}
	var newD=new Date();
	newD.setFullYear(parseInt(narr[0]));
	newD.setMonth(parseInt(narr[1])-1);
	newD.setDate(parseInt(narr[2]));
	var oldD=new Date();
	oldD.setFullYear(parseInt(oarr[0]));
	oldD.setMonth(parseInt(oarr[1])-1);
	oldD.setDate(parseInt(oarr[2]));
	var day=(newD-oldD)/1000/60/60/24;
	return Math.abs(day)+"天";
}

//获取行内样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
//阻止事件冒泡
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble=true;
	}
}
//阻止默认事件
function stopDeafult(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
}
//绑定监听事件
function addEvent(ele,myEvent,fn){
	if(ele.addEventListener){
		ele.addEventListener(myEvent,fn,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on"+myEvent,fn);
	}else{
		ele["on"+myEvent]=fn;
	}
}
//删除监听事件
function removeEvent(ele,myEvent,fn){
	if(ele.removeEventListener){
		ele.removeEventListener(myEvent,fn);
	}else if(ele.detachEvent){
		ele.detachEvent(myEvent,fn);
	}else{
		ele["on"+myEvent]=null;
	}
}
//封装事件委托函数
function eventEntrust(arr,callback){
	return function(eve){
		var e=eve||window.event;
		var target=e.target||e.which;
		for(var i=0;i<arr.length;i++){
			if(arr[i]==target){
				callback.bind(target)();
			}
		}
	}
}
