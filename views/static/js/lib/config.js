require.config({
  //baseUrl���õ�ԭ�򣬾��Ǵ󲿷���Դ�����Ŀ¼
  baseUrl:"/views/assets",

  paths:{
    //���Ҫ�����ģ����һ������ģ�飬��ô�������һ��Ҫ�;���ģ������Ʊ���һ��
    jquery:"./jquery/jquery",
    cookie:"./jquery-cookie/jquery.cookie",
    template:"./artTemplate/template",
    bootstrap:"./bootstrap/js/bootstrap",
    form:"./jquery-form/jquery.form",
    untils:"../static/js/lib/untils"
    
  },
  shim:{
  	bootstrap:{
  		deps:["jquery"]
  	}

  }

})