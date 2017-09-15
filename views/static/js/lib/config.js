require.config({
  //baseUrl���õ�ԭ�򣬾��Ǵ󲿷���Դ�����Ŀ¼
  baseUrl:"/views/assets",

  paths:{
    //
    jquery:"./jquery/jquery",
    cookie:"./jquery-cookie/jquery.cookie",   
    template:"./artTemplate/template",
    bootstrap:"./bootstrap/js/bootstrap",
    utils:"../static/js/lib/utils",       
    form:"./jquery-form/jquery.form",       //���첽�ύ���
    nprogress:"./nprogress/nprogress",      //������������
    datepicker:"./bootstrap-datepicker/js/bootstrap-datepicker",      //���ڲ��
    datepickerCN:"./bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",      //���ڵ����Բ��
    validate:"./jquery-validate/jquery-validate",      //��������
    ckeditor:"./ckeditor/ckeditor"      //���ı��༭�����
  },
   shim:{
   	bootstrap:{
   		deps:["jquery"]   //������
   	},
    datepickerCN:{
      deps:['jquery']   //������
    },
    validate:{
      deps:["jquery"]    //������
    },
    ckeditor:{
     exports:"CKEDITOR"   //����ֵ
    }

   }

})