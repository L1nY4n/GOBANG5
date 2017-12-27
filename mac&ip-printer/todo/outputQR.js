$(document).ready(function () {

    $('#gen').on('click', function () {
      changeQRcode();
 });
    ///mac地址输入框
    $("#mac").on("keydown", function (e) {changeQRcode();});
    $('#mac').bind('input propertychange', function (e) {changeQRcode()}); 
    ///ip输入框
    $('#ip').bind('input propertychange', function (e) {changeQRcode()}); 
    $("#ip").on("keydown", function (e) {changeQRcode();});

    //拿到最外层容器
    //创建外层div

 var changeQRcode=function(){
    var mac = $('#mac').val();
    var ip = $("#ip").val()
    //校验
    generateQrcodeList(ip,mac, $('#panel'))
 }

 $("#print").on('click',function(){
     //启动打印
    window.print();
 })


})
    var generateQrcodeList=function(ip,mac,panel){
    var container = document.createElement('div');

        var wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        // 放qr-code
        var qr = document.createElement('div');
        qr.className = 'qr';
        var qrcode = new QRCode(qr, {
            text: mac.split("-").join('').split('.').join(''),//去掉-或点
            width: 200,
            height: 200,
        });
        // 描述信息
        var des = document.createElement('div');
        des.className = 'des';
        des.innerHTML =
            "<p>" + "<label>mac:</label>" + mac + "</p>"+
            "<p>" + "<label>&nbsp;&nbsp;&nbsp;&nbsp;ip:</label>" +"192.168.0."+ ip + "</p>";
        wrapper.appendChild(qr);
        wrapper.appendChild(des);
        container.appendChild(wrapper);
        panel.html(container);

}