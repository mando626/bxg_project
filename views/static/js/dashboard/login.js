define(["jquery","cookie"],function($){
  $(function(){
    //1. ��ȡ��¼��ť��ע�����¼�

    //1. ��ȡ����ע���ύ�¼�
    $("form").submit(function(e){
      //1. ��ȡ�û��������Ϣ
      var userName = $("#tc_name").val();
      var pass = $("#tc_pass").val();

      if(userName.trim() == ""){
        alert("�������û���");
        return false;
      }

      if(pass.trim() == ""){
        alert("����������");
        return false;
      }

      //2. Ҫ�����ݷ��͸���̨���ú�̨������֤
      //2.1 ���ݽӿڵ�ַ��ʲô  //http://studyit.com/api/login
      //2.2 ����ķ�ʽ��ʲô   post
      //2.3 ����Ҫ�Ĳ�����ʲô  tc_name tc_pass

      $.ajax({
        url: "/api/login",
        type: "post",
        data: {
          tc_name: userName,
          tc_pass: pass
        },
        success: function(data){
          if(data.code == 200){
            //��¼�ɹ�֮��
            //�Ƚ���̨�����û���ͷ���Լ��û�����Ϣ
            //���浽cookie�У�Ϊ���ܹ�����ҳҲʹ�������Ϣ

            //Ӧ���Ƚ�����ת��json��ʽ���ַ�����Ȼ���ٴ�
            $.cookie("userinfo", JSON.stringify(data.result), {expires: 365, path: "/"});

            // ���û���ת����ҳ
            location.href = "/";
            // console.log(data);

          }
        }
      });


      //��ֹ����Ĭ���ύ�¼�
      // e.preventDefault();
      return false;
    })
  })
})