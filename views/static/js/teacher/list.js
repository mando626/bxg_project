define(["jquery","template","bootstrap"],function($,template){

$(function(){
   //加载列表
   $.ajax({
   	url:"/api/teacher",
   	success:function(data){
   	  console.log(data);

    //引入模板
    var html=template("teacher_list_tpl",data);
    $("#teacher_list_tbody").html(html);

   	}
   })


   
    $("#teacher_list_tbody").on("click",".check-info",function(){
      //获取当前讲师的id
      var id=$(this).parent().data("id");
   
     $.ajax({
       url:"/api/teacher/view",
       data: {
           tc_id: id
                },
       success: function(data){
      if(data.code == 200){
   
       //引入模板
       var html=template("teacher_modal_tpl",data.result);
       $("#teacherModal>.modal-dialog").html(html);
       //2. 展示模态框
       $("#teacherModal").modal("show");
      	}
      }
    })
  })



    //注销和启用的切换
    $("#teacher_list_tbody").on("click",".btn-status",function(){
      var id = $(this).parent().data("id");
      var status = $(this).data("status");
      var that = $(this);
      $.ajax({
      	url:"/api/teacher/handle",
      	type:"post",
      	data:{
      		tc_id:id,   //携带自定义属性id进入
      		tc_status:status  //携带自定义属性status进入
      	},
      	success:function(data){
      		if(data.code == 200){
             if(data.result.tc_status ==1 ){
             	that.removeClass("btn-warning").addClass("btn-success").text("启用");
             }else{
             		that.removeClass("btn-success").addClass("btn-warning").text("注销");
             }


             that.data("status",data.result.tc_status);
      		}
      	}
      })




    })
   






})

})