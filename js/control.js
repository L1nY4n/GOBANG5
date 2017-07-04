 $(function(){
            $("#tcp-link").click(function(){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {"tem":1,"ip":ip,"port":port};
                var successmsg = "<p class='link-callback-msg' style='color:green;'>连接成功</p>";
                var errmsg = "<p class='link-callback-msg'style='color:red;'>连接失败</p>";
                jsonAjax('/home', data, '.link-callba8ck-msg', successmsg, errmsg);
            });

            $(".temp-btn").click(function(){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {"tem":3,"ip":ip,"port":port,"order":"temp"};
                //var ctrl_successmsg = "<p class='contrl-result' style='color:green;'>操作成功</p>";
                //var ctrl_errmsg="<p class='contrl-result' style='color:red;'>操作失败</p>";
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
                            $('.temp-btn-res').replaceWith("<p class='temp-btn-res'>获取温度失败！</p>");     
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
                if(state){//状态为ON
                    data = {"tem":2,"ip":ip,"port":port,"order":"on1"};
                }else{//状态为OFF
                    data = {"tem":2,"ip":ip,"port":port,"order":"off1"};
                }
                var ctrl_successmsg = "<p class='contrl-result' style='color:green;'>操作成功</p>";
                var ctrl_errmsg="<p class='contrl-result' style='color:red;'>操作失败</p>";
                jsonAjax('/home',data, '.contrl-result',ctrl_successmsg, ctrl_errmsg);
            });

        
            $('#le2').bootstrapSwitch({//初始状态
                size:"large",
                state:false
            });

            $('#led2').on('switchChange.bootstrapSwitch',function(e,state){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {};
                if(state){//状态为ON
                    data = {"tem":2,"ip":ip,"port":port,"order":"on2"};
                }else{//状态为OFF
                    data = {"tem":2,"ip":ip,"port":port,"order":"off2"};
                }
                var ctrl_successmsg = "<p class='contrl-result' style='color:green;'>操作成功</p>";
                var ctrl_errmsg="<p class='contrl-result' style='color:red;'>操作失败</p>";
                jsonAjax('/home',data, '.contrl-result',ctrl_successmsg, ctrl_errmsg);
            });

           
            $('#buzz').bootstrapSwitch({//初始状态
                size:"large",
                state:false
            });

            $('#buzz').on('switchChange.bootstrapSwitch',function(e,state){
                var ip = $("#ip").val();
                var port = $("#port").val();
                var data = {};
                if(state){//状态为ON
                    data = {"tem":2,"ip":ip,"port":port,"order":"pwmon"};
                }else{//状态为OFF
                    data = {"tem":2,"ip":ip,"port":port,"order":"pwmoff"};
                }
                var ctrl_successmsg = "<p class='contrl-result' style='color:green;'>操作成功</p>";
                var ctrl_errmsg="<p class='contrl-result' style='color:red;'>操作失败</p>";
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