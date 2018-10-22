define(function(){
	class Shop{
		constructor(){}
		init(options){
			var ospan=document.querySelector("#box1 span");
			var obox2=document.querySelector("#box2");
			var obox1=document.querySelector("#box1");
			var oimg1=document.querySelector("#box1 img");
			var oimg2=document.querySelector("#box2 img");
			var ob=document.querySelector("#box1 b");
			this.oul3=$(options.oul3);
			this.oli3=$(options.oli3);
			this.rexiao=$(options.rexiao);
			var that=this;
			var oli3=document.querySelectorAll('#box3 li');
			var oimg3=document.querySelectorAll("#box3 li img");
			var onext=document.querySelector("#next");
			var oprev=document.querySelector("#prev");
			var oul=document.querySelector("#box3 ul");
			var obox3=document.querySelector("#box3");
			obox1.onmouseover=function(){
				obox2.style.display="block";
				ospan.style.display="block";
				oimg1.style.opacity="0.7";
				obox1.onmousemove=function(eve){
					var e=eve||event;
					var l=e.offsetX-ospan.offsetWidth/2;
					var t=e.offsetY-ospan.offsetHeight/2;
					if(l<=0){
						l=0;
					}
					if(l>=obox1.offsetWidth-ospan.offsetWidth){
						l=obox1.offsetWidth-ospan.offsetWidth;
					}
					if(t<=0){
						t=0;
					}
					if(t>=obox1.offsetHeight-ospan.offsetHeight){
						t=obox1.offsetHeight-ospan.offsetHeight;
					}
					ospan.style.top=t+"px";
					ospan.style.left=l+"px";
					var bx=l/(obox1.offsetWidth-ospan.offsetWidth);
					var by=t/(obox1.offsetHeight-ospan.offsetHeight);
					oimg2.style.left=(obox2.offsetWidth-oimg2.offsetWidth)*bx+"px";
					oimg2.style.top=(obox2.offsetHeight-oimg2.offsetHeight)*by+"px";
					ospan.style.backgroundPosition=-l+"px "+ -t +"px";
					
					
				}
				
			}
			obox1.onmouseout=function(){
				ospan.style.display="none";
				obox2.style.display="none";
				oimg1.style.opacity="1";
			}
			for(let i=0;i<oimg3.length;i++){
				oimg3[i].onclick=function(){
					oimg1.src=oimg3[i].src;
					oimg2.src=oimg3[i].src;
					that.oul3.find('*').removeClass('bk');
					that.oli3.eq(i).addClass('bk');
					var str=oimg3[i].src;
					ospan.style.background="url("+str +") no-repeat";
					ospan.style.backgroundSize=425+"px "+363+"px";
					
				}
			}
			var now=0;
			var num=parseInt(obox3.offsetWidth/oimg3[0].offsetWidth);
			var nownum=oimg3.length-num;
			//console.log(nownum);
			addEvent(onext,"click",function(){
	//			oul.style.left=-oimg3[0].offsetWidth+"px";
				now++;
				if(now>=nownum){
					now=nownum;
				}
				move(oul,{left:-oimg3[0].offsetWidth*now-(20*now)})
				console.log(nownum);
			});
			addEvent(oprev,"click",function(){
				now--;
				if(now<=0){
					now=0;
				}
				move(oul,{left:-oimg3[0].offsetWidth*now-(20*now)})
			})
			
			
			
			var url="http://localhost/gulp/ymt/js/goods1.json";
			getAjax(url).then(function(res){
				res=JSON.parse(res);
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`
						<li>
							<a href="#">
								<img src="${res[i].url}">
							</a>
							<p><span>${res[i].price}</span></p>
							<p><a href="#">${res[i].name}</a></p>
							
						</li>
					`;
				}
//				console.log(str);
//				console.log(str);
				that.rexiao[0].innerHTML=str;
			})
			
			
			
			
			
		}
	}
	return new Shop();
})
