require.config({
  //baseUrl设置的原则，就是大部分资源共享的目录
  baseUrl:"/views/assets",

  paths:{
    //
    jquery:"./jquery/jquery",
    cookie:"./jquery-cookie/jquery.cookie",   
    template:"./artTemplate/template",
    bootstrap:"./bootstrap/js/bootstrap",
    utils:"../static/js/lib/utils",       
    form:"./jquery-form/jquery.form",       //表单异步提交插件
    nprogress:"./nprogress/nprogress",      //进度条插件插件
    datepicker:"./bootstrap-datepicker/js/bootstrap-datepicker",      //日期插件
    datepickerCN:"./bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",      //日期的语言插件
    validate:"./jquery-validate/jquery-validate",      //正则表单插件
    ckeditor:"./ckeditor/ckeditor"      //富文本编辑器插件
  },
   shim:{
   	bootstrap:{
   		deps:["jquery"]   //依赖项
   	},
    datepickerCN:{
      deps:['jquery']   //依赖项
    },
    validate:{
      deps:["jquery"]    //依赖项
    },
    ckeditor:{
     exports:"CKEDITOR"   //返回值
    }

   }

})