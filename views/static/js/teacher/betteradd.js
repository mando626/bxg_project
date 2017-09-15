define(["jquery", "template", "utils", "form","datepicker","datepickerCN","validate"], function($, template, utils){
        var id = utils.getQueryObj().id;
        if(id){
            $.ajax({
                url: "/api/teacher/edit",
                data: {
                    tc_id: id
                },
                success: function(data){
                    if(data.code == 200){
                        data.result.title = "编辑讲师";
                        data.result.btnText = "保 存";
                        data.result.url = "/api/teacher/update";
                        renderData(data.result);
                    }
                }
            })

        }else{ 
            var obj = {
                title: "添加讲师",
                btnText: "添 加",
                url: "/api/teacher/add"
            }
            renderData(obj);
        }

        function renderData(data){
            var html = template("teacher_add_edit_tpl", data);
            $(".body,.teacher").html(html);


            //使用日期选择插件
            $("input[name=tc_join_date]").datepicker({
                autoclose:true,
                format:"yyyy-mm-dd",
                language:"zh-CN",
                startDate:"-3d",
                endDate:"+3d"
            });
            //给表单注册验证事件
            $("form").validate({
                sendForm:false,
                onBlur:true,
                onchange:true,
                valid:function(){
                   $(this).ajaxSubmit({
                        success:function(data){
                            if(data.code==200){
                                location.href = "/teacher/list"
                            }
                        }

                   })
                },

                description:{
                    name:{
                      required:"用户名不能为空"
                    },
                    password:{
                      required:"用户密码不能为空",
                      pattern:"请输入6-15位由字母及数字组成的密码"
                    },
                    date:{
                      required:"入职时间不能为空"
                    }

                },
                eachValidField:function(){
                    this.parent().parent().addClass("has-success").removeClass("has-error");
                },
                eachInvalidField:function(){
                    this.parent().parent().addClass("has-error").removeClass("has-success");
                }


            });


        }

        // //给保存按钮注册点击事件
        // $(".body,.teacher").on("submit", "form", function(){
        //     $(this).ajaxSubmit({
        //         success: function(data){
        //             if(data.code == 200){
        //                 location.href = "/teacher/list"
        //             }
        //         }
        //     })
        //     return false;
        // });
    })