define(["jquery","template","utils","form"],function($,template,utils){
     var id = utils.getQueryObj().id;
  
    //判断当前是编辑功能还是添加功能
    if(id){
      //编辑功能
      $.ajax({
      	url:"/api/teacher/edit",
      	data:{
      		tc_id:id
      	},
      	success:function(data){
      		if(data.code == 200){
      			console.log(data);
      			//将数据用模板渲染
      			data.result.title= "编辑讲师";
      			data.result.btnText= "保存";
      			data.result.url= "/api/teacher/update";
      			var html=template("teacher_add_edit_tpl",data.result);
      			$(".body,.teacher").html(html);

           //给保存按钮注册点击事件
           $("#save-btn").click(function(){
           	$.ajax({
           		url:"/api/teacher/update",
           		type:"post",
           		data:$("form").serialize(),
           		success:function(data){
                 if(data.code == 200){
                 	location.herf = "/tescher/list"
                 }
           		}
           	})
           	//阻止默认事件
           	return false;
           }) ;  

      		}
      	}
      })

    }else{
       //添加功能

    var obj = {
    	title:"添加讲师",
    	btnText:"添 加",
    	url:"/api/teacher/add"
    }

    var html = template("teacher_add_edit_tpl",obj);
    $(".body,.teacher").html(html);


    $("#save-btn").click(function(){

    $.ajax({
    
       url:"/api/teacher/add",
       type:"post",
       data:$("form").serialize(),
       success:function(data){
       	if(data.code == 200){
       		location.href = "/teacher/list"
       	}
       }


    })
       //阻止表单的默认提交
        return false;

    })


    }
     

})