define(()=>{
	window.onload = function(){
		console.log(1)
		var mainNav = document.querySelector("#mainNav");
		var mainCats = document.querySelector(".main-cats");
		var fixedLogo = document.querySelector(".fixed-logo");
		var fixedSearch = document.querySelector(".fixed-search");
		var h = mainNav.offsetTop;
		window.onscroll = function(){
			var t = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
			if(t >= h){
				mainNav.style.position = "fixed";
				mainNav.style.top = 0;
				mainNav.style.height = "48px";
				mainCats.style.display = "none";
				fixedLogo.style.display = "block";
				fixedSearch.style.display = "block";
			}else{
				mainNav.style.position = "relative";
				mainNav.style.height = "38px";
				mainCats.style.display = "block";
				fixedLogo.style.display = "none";
				fixedSearch.style.display = "none";
			}
		}
	}
})