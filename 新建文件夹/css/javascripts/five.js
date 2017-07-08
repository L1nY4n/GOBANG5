/**
 * Created by lin on 2016/11/16.
 */
window.onload = function () {


    create(15, 15, 42);
    play();
    pause();
    reset(15,15);
    retract();
};




var arr = null;//棋子二维数组（存放棋子）
var hisplay = []; //记录历史(悔棋)
var rule = 1;//顺序（1黑先手）
// var zi = null; //棋子div
var over = false;//游戏结束标记
var score_white = 0;//积分
var score_black = 0;
var timer = null;//倒计时定时器

//棋盘大小和棋子尺寸
function create(x, y, size){
    //棋子数组
    arr = new Array(x);
    for (var i = 0; i < x; i++) {
        arr[i] = new Array(y);
        for (var j = 0; j < y; j++) {
            arr[i][j] = 0;
        }
    }

    //棋盘布局
    var main = document.getElementById('main');
    for (var i = 0; i < x; i++) {
        var or = document.createElement('div');
        for (var j = 0; j < y; j++) {
            var ol = document.createElement('div');
            ol.indexl = j;
            ol.indexr = i;

            ol.can = true;//有没有下过\
            ol.role = null;//2为黑棋，3为白棋
            ol.className = 'none ol';

            // ol.innerHTML = i + ',' + j;
            ol.style.width = size + 'px';
            ol.style.height = size + 'px';

            or.appendChild(ol)

        }

        main.style.width = size * x + 'px';
        main.appendChild(or);
        main.style.height = size * y + 'px';

    }
    //设置
    var zi = document.getElementsByClassName('ol')


}

//下棋函数
function play() {


    var main = document.getElementById('main');

    //下棋事件
    main.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (!over) {
            if (target.can) {
                if (rule == 1) {
                    rule = 0;
                    target.className = 'black ol';
                    arr[target.indexr][target.indexl] = target.role = 2;


                } else {
                    rule = 1;
                    target.className = 'white ol';
                    arr[target.indexr][target.indexl] = target.role = 3;


                }

                check(target);//检查输赢
                timing(180);//计时
                hisplay.push(target);//保存历史

                target.can = false;//标记下过
            }
        } else {

            alert('游戏已结束，请重新开始');
        }


        //鼠标移入棋盘


    }
    main.onmouseover = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;

        if (target.can) {
            if (rule == 1) {

                target.className = 'black ol';
            } else {
                target.className = 'white ol';
            }

        }

    };
    //鼠标移出棋盘
    main.onmouseout = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.can)  target.className = 'none ol';
    }


}

//检测输赢函数
function check(obj) {

    var count = 1;
    var role = obj.role;
    var x = obj.indexr;
    var y = obj.indexl;


//x方向
    for (m = x - 1; m >= 0; m--) {
        if (arr[m][y] == role) {
            count++;
        }
        else {
            break;
        }
    }
    for (m = x + 1; m < 15; m++) {
        if (arr[m][y] == role) {
            count++;
        }
        else {
            break;
        }
    }
    if (count >= 5) {
        show(obj);
        return;
    }
    else {
        count = 1;
    }
//y方向
    for (m = y - 1; m >= 0; m--) {
        if (arr[x][m] == role) {
            count++;
        }
        else {
            break;
        }
    }
    for (m = y + 1; m < 15; m++) {
        if (arr[x][m] == role) {
            count++;
        }
        else {
            break;
        }
    }
    if (count >= 5) {
        show(obj);
        return;
    }
    else {
        count = 1;
    }
//左斜方向
    for (m = x - 1, n = y - 1; m >= 0 && n >= 0; m--, n--) {
        if (arr[m][n] == role) {
            count++;
        }
        else {
            break;
        }
    }
    for (m = x + 1, n = y + 1; m < 15 && n < 15; m++, n++) {
        if (arr[m][n] == role) {
            count++;
        }
        else {
            break;
        }
    }
    if (count >= 5) {
        show(obj);
        return;
    }
    else {
        count = 1;
    }
//右斜方向
    for (m = x - 1, n = y + 1; m >= 0 && n < 15; m--, n++) {
        if (arr[m][n] == role) {
            count++;
        }
        else {
            break;
        }
    }
    for (m = x + 1, n = y - 1; m < 15 && n >= 0; m++, n--) {
        if (arr[m][n] == role) {
            count++;
        }
        else {
            break;
        }
    }
    if (count >= 5) {
        show(obj);
        return;

    }


}

//游戏结束弹出及分数计算
function show(obj) {

    over = true;
    switch (obj.role) {
        case 2:
            score_black++;
            alert('黑子赢了');

            break;
        case 3:
            alert('白子赢了');
            score_white++;
            break;
    }


    clearInterval(timer);
    document.getElementById('ws').innerHTML = score_white + '分';
    document.getElementById('bs').innerHTML = score_black + '分';

}

//创建一个时间倒计时显示
function timing(t) {




    var player = rule == 0 ? '白' : '黑';
    var ot = document.getElementById('time');

    clearInterval(timer);
    timer = setInterval(
        function () {
            ot.innerHTML = player + '方玩家剩余时间' + t + 's';
            t--;
        }


        , 1000)
}

/*菜单栏*/

//重新开始
function reset(x,y) {
    var restart = document.getElementById('restart');
    restart.onclick = function (){
    // console.log('restart');
    over = false;
    play();
    var zi = document.getElementsByClassName('ol');

    for (var i = 0; i < zi.length; i++) {
        zi[i].className = 'none ol';
        zi[i].can = true;//棋子可下
    }
    arr = new Array(x);
    for (var i = 0; i < x; i++) {
        arr[i] = new Array(y);
        for (var j = 0; j < y; j++) {
            arr[i][j] = 0;
        }
    }
    }
}

// 暂停游戏
function pause() {
    var pau = document.getElementById('pause');
    var opimg = document.getElementById('pause_bar');//暂停图标
    var main = document.getElementById('main');
    var ot = document.getElementById('time');

    opimg.onclick = pau.onclick = function () {

        var str = ot.innerHTML.substr(0, 8);
        var num = parseInt(ot.innerHTML.substr(8));
        if (pau.innerHTML == '暂停' || opimg.style.display == 'none') {
            opimg.style.display = 'block';
            main.onclick = null;
            clearInterval(timer);
            pau.innerHTML = '开始';

        } else {
            opimg.style.display = 'none';
            timer = setInterval(function () {
                    ot.innerHTML = str + num + 's';
                    num--;
                },
                1000
            );
            pau.innerHTML = '暂停';
            play();
        }

    }


}

//悔棋菜单
function retract() {

    var or = document.getElementById('retract');
    or.onclick = function () {

        var h = hisplay.pop();
        arr[h.indexr][h.indexl] = 0;
        h.className = 'none ol';//清空棋子
        h.can = true;//棋点变为可下
        rule = (rule + 1) % 2;//顺序重置
        over=false;//游戏结束回退

    }

}






