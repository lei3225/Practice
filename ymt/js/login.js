define(function(){
	class Login{
		constructor(){}
		init(options){
			this.quicklogin=$(options.quicklogin);
			var quicklogin=document.querySelector(".quicklogin");
			var mymatou=document.querySelector(".mymatou");
			this.mymatou=$(options.mymatou);
			var that=this;
			var k=true;
			console.log(mymatou);
			quicklogin.onmouseover=function(){
				if(k){
					that.quicklogin.children('p').addClass('xian');
					quicklogin.style.border="1px solid #000";
					k=false;
				}
				quicklogin.onmouseout=function(){
					if(!k){
						that.quicklogin.children('p').removeClass('xian');
						quicklogin.style.border="none";
						k=true;
					}
				
				}
				
			}
			mymatou.onmouseover=function(){
				if(k){
					that.mymatou.children('p').addClass('xian');
					mymatou.style.border="1px solid #000";
					k=false;
				}
				mymatou.onmouseout=function(){
					if(!k){
						that.mymatou.children('p').removeClass('xian');
						 mymatou.style.border="none";
						k=true;
					}
				
				}
				
			}
			
			//登录
			var pass=document.querySelector(".pass");
			var txt=document.querySelector('.txt');
			console.log(pass,txt);
			var btn1=document.querySelector('.btn1');
			this.txt=$(options.txt);
			this.pass=$(options.pass);
			this.txt2=$(options.txt2);
			this.pass2=$(options.pass2);
			this.btn1=$(options.btn1);
			this.btn2=$(options.btn2);
			this.ts1=$(options.ts1);
			this.ts2=$(options.ts2);
			this.zhanghu=$(options.zhanghu);
			this.mianfei=$(options.mianfei);
			var dl=document.querySelector('.dl');
			var d2=document.querySelector('.d2');
			this.dl=$(options.dl);
			this.d2=$(options.d2);
			
			this.mianfei.on('click',function(){
				d2.style.display="block";
				dl.style.display="none";
				that.mianfei.addClass('fc');
				that.zhanghu.removeClass('fc');
			})
			this.zhanghu.on('click',function(){
				dl.style.display="block";
				d2.style.display="none";
				that.zhanghu.addClass('fc');
				that.mianfei.removeClass('fc');
			})



			//登录
			var url="http://datainfo.duapp.com/shopdata/userinfo.php";
			this.btn1.click(function(){
				$.ajax({
					url:url,
					data:{
						status:"login",
						userID:that.txt.val(),
						password:that.pass.val(),
					},
					success:function(a){
						switch(a){
							case "0":
								that.ts1.html("用户名不存在");break;
							case "2":
								that.ts2.html("用户名密码不符");break;
							default:
								window.location.href='person.html';
						}
					}
				})
			})
			//注册
			this.btn2.click(function(){
				$.ajax({
					url:url,
					data:{
						status:"register",
						userID:that.txt2.val(),
						password:that.pass2.val(),
					},
					success:function(a){
						switch(a){
							case "0":
							console.log(that.txt.val());
								that.ts1.html("用户名重名");break;
							case "1":
								that.ts2.html("注册成功");
								setTimeout(function(){
									dl.style.display="block";
									d2.style.display="none";
									that.zhanghu.addClass('fc');
									that.mianfei.removeClass('fc');
									that.ts2.html("");
								},1000)
								break;
							case "2":
								that.ts2.html("数据库报错");break;
						}
					}
				})
			})
			
			
			
			

		}
	}
	return new Login();
})

