require.config({
  //baseUrl设置的原则，就是大部分资源共享的目录
  baseUrl:"/views/assets",

  paths:{
    //
    jquery:"./jquery/jquery",
    cookie:"./jquery-cookie/jquery.cookie",
    template:"./artTemplate/template",
    bootstrap:"./bootstrap/js/bootstrap",
    untils:"../static/js/lib/utils",
    form:"./jquery-form/jquery.form"
  },
   shim:{
   	bootstrap:{
   		deps:["jquery"]
   	}
   }

})