define(["jquery","ckeditor","template","region","uploadify","datepicker","datepickerCN","form"],function($,CKEDITOR,template){
 $(function(){

    $.ajax({
    	url:"/api/teacher/profile",
    	success:function(data){
    	   console.log(data.result);
    	   if(data.code == 200){
    	   		var html = template("settings_tpl",data.result);
    		    $(".settings").html(html);

            //1-富文本编辑器
            CKEDITOR.replace("tc_introduce",{
             toolbarGroups : [
               { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
               { name: 'insert' },
               { name: 'tools' },
               { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
             ]
            });

            //2-三级联动
            $("#region").region({
            	url:"/views/assets/jquery-region/region.json"
            });

            //3-时间编辑
            $("input[name=tc_birthday]").datepicker({
            	autoclose:true,
            	format:"yyyy-mm-dd",
            	language:"zh-CN"
            });
            $("input[name=tc_join_date]").datepicker({
            	autoclose:true,
            	format:"yyyy-mm-dd",
            	language:"zh-CN"
            });



            //图片上传插件
            $("#upfile").uploadify({
               swf:"/views/assets/uploadify/uploadify.swf",  //找到swf文件
               uploader:"/api/uploader/avatar",              //上传的接口地址
               fileObjName:"tc_avatar",                      //文件的键（flash索取的后台的对应接口）
               width: 120,
               height: 120,
               buttonText: "",
               onUploadSuccess:function(file,data,response){
               	 console.log(data);
                  data = JSON.parse(data);
                  console.log(data.result);
                  if(data.code == 200){
                  	$(".preview img").attr("src",data.result.path)
                  }
               }
               
            });

            //保存按钮提交
            $("#btn-save").click(function(){
             //由于富文本编辑器的小问题，所以修改的内容无法实时同步到我们的textarea中
             //所以我们需要在提交前将富文本编辑器中的内容 同步到textarea中
             CKEDITOR.instances.tc_introduce.updateElement();

             $("form").ajaxSubmit({
             	url:"/api/teacher/modify",
             	type:"post",
             	success:function(data){
             		if(data.code == 200){
             			alert("修改成功");
             		}
             	}
             });
              return false;
            })

    	   }
    	
    	}
    })


   // CKEDITOR.replace("tc_introduce",{
   //  toolbarGroups : [
   //    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
   //    // { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
   //    // { name: 'links' },
   //    { name: 'insert' },
   //    // { name: 'forms' },
   //    { name: 'tools' },
   //    // { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
   //    // { name: 'others' },
   //    // '/',
   //    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
   //    // { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
   //    // { name: 'styles' },
   //    // { name: 'colors' },
   //    // { name: 'about' }
   //  ]
   // });


 })






})