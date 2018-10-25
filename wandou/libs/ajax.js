function getAjax(url,data){
	var p = new Promise(function(success,error){
		if(data){
			var str = "";
			for(var key in data){
				str += key+"="+data[key]+"&";
			}
			url = url + "?" + str;
//			console.log(url)
		}else{
			data = ""
		}
		
		var ajax = new XMLHttpRequest();
		ajax.open("GET",url,true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				success(ajax.responseText)
			}
			if(ajax.readyState == 4 && ajax.status != 200){
				error("本次请求失败，有可能是网络原因，错误代码为："+ajax.status)
			}
		}
		ajax.send(null);
	})
	return p;
}

function postAjax(url,data){
	var p = new Promise(function(success){
		if(data){
			var str = ""
			for(var key in data){
				str += key+"="+data[key]+"&";
			}
			data = str.slice(0,str.length-1)
		}else{
			data = null
		}
//		console.log(str)
		
		var ajax = new XMLHttpRequest();
		ajax.open("POST",url,true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				success(ajax.responseText)
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");	//设置数据格式为表单数据
		ajax.send(data);
	})
	return p;
}

function jsonp(url,data,cb){
	var p = new Promise(function(success){
		var str = "";
		for(var key in data){
			str += key+"="+data[key]+"&";
		}
		url = url + "?" + str;
		
		var script = document.createElement("script");
		script.src = url;
		document.body.appendChild(script)
		
		cb = data[cb];
		window[cb] = function(res){
			success(res)
		}
	})
	return p;
}