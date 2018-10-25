define(function(){
	class SideBar{
		constructor(){
			this.oi = document.querySelector("#sideBar .cart i");
			this.getCookie()
			this.showI()
		}
		init(options){
			var item = document.querySelectorAll("#sideBar .side-bar-item");
			var oIcon = document.querySelectorAll("#sideBar .side-bar-icon");
			var oHover = document.querySelectorAll("#sideBar .side-bar-hover");
			var top = document.querySelector("#sideBar .back-to-top");
			var cart = document.querySelector("#sideBar .cart");
			for(let i =0;i<item.length;i++){
				item[i].onmouseover = function(){
					oIcon[i].style.display = "none"; 
					oHover[i].style.display = "block"; 
				}
				item[i].onmouseleave = function(){
					oIcon[i].style.display = "block"; 
					oHover[i].style.display = "none"; 
				}
			}
			top.onclick = function(){
				 $("html,body").animate({
				 	scrollTop:0
				 }, 500);
			}
			cart.onclick = function(){
				if(cook.get("userStatus")){
					window.location.href="shopCar/shopCar.html";  
				}else{
					window.location.href="login-register/login.html";
				} 
			}
		}
		getCookie(){
            var json = cook.get("goodsAdd");
            json = JSON.parse(json);
            this.str = 0;
            if(json){
                for(var i = 0; i < json.length; i ++){
                    this.str += json[i].sum * 1;
                };
            };
       	}
       	showI(){
       		if(cook.get("userStatus")){
       			this.oi.innerHTML = this.str;
       		}else{
       			this.oi.innerHTML = 0;
       		}
        }
   			
	}
	
	return new SideBar()
	
})

