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
    
   






})

})