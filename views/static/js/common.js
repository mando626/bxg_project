
	//使用PHPSESSID来作为登录的依据
	define(["jquery","template","cookie"],function($,template){
		$(function(){
			//判断用户是否登录了，如果没有登录，就给他跳回到登录页

			//判断用户是否登录的依据，最好是通过向后台发送请求，问后台用户是否登录，这才是最严谨的判断登录的方式，当前项目中没有提供接口，所以不能这么做

			//我们就使用PHPSESSID来作为判断用户是否登录的依据即可
			//如果在cookie有PHPSESSID，那么就证明用户已经登录了
			//如果在cookie没有PHPSESSID，那么就证明用户没有登录了


			//if 不在登陆页面 才执行下面的代码（防止在login中一直的刷新请求）
			if(location.pathname != "/dashboard/login"){
				if(!$.cookie("PHPSESSID")){
					location.href = "/dashboard/login";
				}

				//1. 从cookie中获取用户存储好的用户信息
				var userinfo = JSON.parse($.cookie("userinfo"));
				console.log(userinfo);
				//2. 使用模板引擎将对象渲染到用户信息的模板中去
				var html = template("profile_tpl", userinfo);
				$("#profile").html(html);
			}




			 //退出功能的实现
   $("#logout_btn").click(function(){
   	//1向后台发送ajax请求，请求退出
   	$.ajax({
   		url:"/api/logout",
   		type:"post",
   		success:function(data){
   			if(data.code == 200){
   				location.href = "/dashboard/login"
   			}
   		}
   	})
   })

		})
	})



