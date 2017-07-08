$(document).ready(function () {
    //天气api
    $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function (_result) {

        if (remote_ip_info.ret == '1') {

            $.ajax({
                type: "GET",
                url: "http://wthrcdn.etouch.cn/weather_mini?city=" + remote_ip_info.city,
                data: "",
                success: function (msg) {
                    var res = eval('(' + msg + ')');
                   // alert(msg);
                    if (res.status == 1000) {
                        //请求成功
                        $('#currentCity').html(res.data.city);
                        $('#wendu').html(res.data.wendu);
                        $('#ganmao').html(res.data.ganmao);
                        $('#weather').html(res.data.forecast[0].type);
                        $('#fengxiang').html(res.data.forecast[0].fengxiang);
                        $('#fengli').html(res.data.forecast[0].fengli);
                        $('#high').html(res.data.forecast[0].high);
                        $('#low').html(res.data.forecast[0].low);
                        $('#date').html(res.data.forecast[0].date);
                    }
                }
            });
        }
    });
//定位导航+滚动监听
    var scrollTop;
    $(window).scroll(function () {

        scrollTop = $(window).scrollTop();

        var home = $('#home').offset().top - $('#main_nav')[0].offsetHeight + 1;
        var home_height = $('#home').height();
        var livingroom = $('#liv').offset().top - $('#main_nav')[0].offsetHeight + 1;
        var liv_height = $('#liv').height();
        var kich = $('#kic').offset().top - $('#main_nav')[0].offsetHeight + 1;
        var kich_height = $('#kic').height();
        var bedroom = $('#bed').offset().top - $('#main_nav')[0].offsetHeight + 1;
        var bed_height = $('#bed').height();
        var bath = $('#bath').offset().top - $('#main_nav')[0].offsetHeight + 1;
        var bath_height = $('#bath').height();


        if (scrollTop >= $('#main').offset().top) {


            $('#site-navigation').addClass('fixed');
            $('.dropdown-menu-wrapper').addClass('fixed');
        } else {
            $('#site-navigation').removeClass('fixed');
            $('.dropdown-menu-wrapper').removeClass('fixed');
        }

        // $('.nav a').parent().removeClass('current-menu-item');
        if (scrollTop >= home && scrollTop < home + home_height) {
            $('.navbar a').parent().removeClass('current-menu-item');
            $('.navbar a[href*="#home"]').parent().addClass('current-menu-item');

        }
        if (scrollTop >= livingroom && scrollTop < livingroom + liv_height) {
            $('.navbar a').parent().removeClass('current-menu-item');
            $('.navbar a[href*="#liv"]').parent().addClass('current-menu-item');
        }
        if (scrollTop >= kich && scrollTop < kich + kich_height) {
            $('.navbar a').parent().removeClass('current-menu-item');
            $('.navbar a[href*="#kic"]').parent().addClass('current-menu-item');
        }
        if (scrollTop >= bedroom && scrollTop < bedroom + bed_height) {
            $('.navbar a').parent().removeClass('current-menu-item');
            $('.navbar a[href*="bed"]').parent().addClass('current-menu-item');
        }
        if (scrollTop >= bath && scrollTop < bath + bath_height) {
            $('.navbar a').parent().removeClass('current-menu-item');
            $('.navbar a[href*="bath"]').parent().addClass('current-menu-item');
        }

    });
    // $('.nav a').click(function () {
    //     $('.nav a').parent().removeClass('current-menu-item');
    //     this[0].parent().addClass('current-menu-item');
    //
    //     }
    //
    // )
    //导航栏点击事件
    $('.nav a').click(function (e) {
        e.preventDefault();
        //$('.nav a').parent().removeClass('current-menu-item');
        $('.navbar-collapse').collapse('hide');

        var href = $(this).attr('href');
        // $(this).addClass('current-menu-item');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 400, function () {
            // window.location.hash = href;

        });

    });


});
//开关切换
$('#right-bar  img').click(function () {
    alert(this.src.slice(-1,-2));

})

