 $(function(){
            $("#tcp-link").click(function(){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {"tem":1,"ip":ip,"port":port};
                var successmsg = "<p class='link-callback-msg' style='color:green;'>���ӳɹ�</p>";
                var errmsg = "<p class='link-callback-msg'style='color:red;'>����ʧ��</p>";
                jsonAjax('/home', data, '.link-callba8ck-msg', successmsg, errmsg);
            });

            $(".temp-btn").click(function(){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {"tem":3,"ip":ip,"port":port,"order":"temp"};
                //var ctrl_successmsg = "<p class='contrl-result' style='color:green;'>�����ɹ�</p>";
                //var ctrl_errmsg="<p class='contrl-result' style='color:red;'>����ʧ��</p>";
                $.ajax({
                    url:'/home',
                    type:'post',
                    data:data,
                    success:function(data,status){
                        if(status == 'success'){
                            $('.temp-btn-res').replaceWith("<p class='temp-btn-res'>"+data+"</p>");     
                        }
                    },
                    error:function(data,status){
                        if(status == 'error'){
                            $('.temp-btn-res').replaceWith("<p class='temp-btn-res'>��ȡ�¶�ʧ�ܣ�</p>");     
                        }
                    }
                
                });
               /* jsonAjax('/home',data, '.contrl-result',ctrl_successmsg, ctrl_errmsg);
                var resoult = new XMLHttpRequest();
                if(resoult.status == 200){
                    alter(resoult.responseText);
                }*/
            });
           
            $('#le').on('switchChange.bootstrapSwitch',function(e,state){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {};
                if(state){//״̬ΪON
                    data = {"tem":2,"ip":ip,"port":port,"order":"on1"};
                }else{//״̬ΪOFF
                    data = {"tem":2,"ip":ip,"port":port,"order":"off1"};
                }
                var ctrl_successmsg = "<p class='contrl-result' style='color:green;'>�����ɹ�</p>";
                var ctrl_errmsg="<p class='contrl-result' style='color:red;'>����ʧ��</p>";
                jsonAjax('/home',data, '.contrl-result',ctrl_successmsg, ctrl_errmsg);
            });

        
            $('#le2').bootstrapSwitch({//��ʼ״̬
                size:"large",
                state:false
            });

            $('#led2').on('switchChange.bootstrapSwitch',function(e,state){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {};
                if(state){//״̬ΪON
                    data = {"tem":2,"ip":ip,"port":port,"order":"on2"};
                }else{//״̬ΪOFF
                    data = {"tem":2,"ip":ip,"port":port,"order":"off2"};
                }
                var ctrl_successmsg = "<p class='contrl-result' style='color:green;'>�����ɹ�</p>";
                var ctrl_errmsg="<p class='contrl-result' style='color:red;'>����ʧ��</p>";
                jsonAjax('/home',data, '.contrl-result',ctrl_successmsg, ctrl_errmsg);
            });

           
            $('#buzz').bootstrapSwitch({//��ʼ״̬
                size:"large",
                state:false
            });

            $('#buzz').on('switchChange.bootstrapSwitch',function(e,state){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {};
                if(state){//״̬ΪON
                    data = {"tem":2,"ip":ip,"port":port,"order":"pwmon"};
                }else{//״̬ΪOFF
                    data = {"tem":2,"ip":ip,"port":port,"order":"pwmoff"};
                }
                var ctrl_successmsg = "<p class='contrl-result' style='color:green;'>�����ɹ�</p>";
                var ctrl_errmsg="<p class='contrl-result' style='color:red;'>����ʧ��</p>";
                jsonAjax('/home',data, '.contrl-result',ctrl_successmsg, ctrl_errmsg);
            });
	  	   // alert($("[name='my-checkbox']").bootstrapSwitch('state'));
            function jsonAjax(url, param, verb, successmsg, errmsg){
                $.ajax({
                    url:url,
                    type:'post',
                    data:param,
                    success:function(data,status){
                        if(status == 'success'){
                            $(verb).replaceWith(successmsg);     
                        }
                    },
                    error:function(data,status){
                        if(status == 'error'){
                            $(verb).replaceWith(errmsg);     
                        }
                    }
                
                });
            }
        });
	  </script>