var window_height = $(window).height();
console.log('window_height ->' + window_height);

/*
我愿把自己变成一头小猪
与你一起慢慢表老
等你牙掉没了
用最拱着吃……
\ud83c\udf08\r\n\r\n\u5973\u670b\u53cb\u5462\u5c31\u8f9b\u82e6\u4e00\u70b9\r\n\r\n\u8d1f\u8d23\u5403\ud83c\udf49\ud83c\udf4b\ud83e\udd6d\ud83c\udf5e\ud83c\udf54\ud83e\udd69\ud83e\uddc0\r\n\r\n\u8d1f\u8d23\u559d\ud83e\udd64\ud83e\udd5b\u2615\ufe0f\ud83c\udf77\ud83e\udd42\ud83c\udf7c\ud83c\udf79\r\n\r\n\u8d1f\u8d23\u4e70\u4e70\u4e70\ud83d\udc60\ud83d\udc57\ud83d\udc5c\ud83d\udc8d\ud83e\udde2\ud83d\ude97

\u6211\u613f\u628a\u81ea\u5df1\u53d8\u6210\u4e00\u5934\u5c0f\u732a\u4e0e\u4f60\u4e00\u8d77\u6162\u6162\u8868\u8001\u7b49\u4f60\u7259\u6389\u6ca1\u4e86\u7528\u6700\u62f1\u7740\u5403\u2026\u2026

\ud83c\udf08\r\n\r\n💕晚是全世界的晚\r\n\r\n️️💕安是对你的安\r\n\r\n️️💕你先!\r\n\r\n️️💕全世界后……
*/
var theme_content = {
    "pure_words_content": "️️💕亲爱的<br>💕看到下雪了吗？\n💕我的心就融在那雪里面\r💕围绕着你！提醒着你!\r💕要注意多穿件衣服\r💕不要着凉哦！\r💕我的心永远都是暖暖的\r💕里面放着你！……",
    "typed_bool": "typed_y",
    "cursor_char": "cursor_heart",
    "bg_style_pure_words": "bg_opacity",
    "bg_img": "2.gif",
    "simple_page_content": "",
    "video_page_content": ""
};
console.log(theme_content);



var pure_words_content = theme_content['pure_words_content'];
var str_cursorChar;
var typed_bool;
var interval_pw_height;
var height_div_pw = $(".div_pure_words_height").height();

function init_pure_words() {
    //允许内容为空时直接展示，不设置为随机内容，用于空主题
    if (typeof (pure_words_content) == 'undefined') { //处理全新作品
        var array_str_temp = [];
        random_text_array(array_str_temp, 12); //获取随机的模板文字
        // array_str_temp.push('你现在看到的只是案例，文字是可以自定义哒，6000字以下');
        pure_words_content = array_str_temp.join('\r\r');
    }
    $(".div_pure_words_height").html(pure_words_content + '22222'); //初始化复制内容，撑开文档高度            

    // 初始化设置div的bg图片 初始化设置div的bg图片
    if (typeof (theme_content['bg_style_pure_words']) != 'undefined' && theme_content['bg_style_pure_words'] == 'bg_opacity') {
        if (typeof (theme_content['bg_img']) != 'undefined' && theme_content['bg_img'] != '') {
            $(".div_pure_words_bg").css({
                "background-image": "url(" + theme_content['bg_img'] + ")"
            });
        }
    }

    //以下是打字效果的js 
    if (typeof (theme_content['cursor_char']) != 'undefined' && theme_content['cursor_char'] != '') {
        switch (theme_content['cursor_char']) { //设置打字光标的样式
            case 'cursor_heart':
                str_cursorChar = '❤';
                break;
            case 'cursor_sub':
                str_cursorChar = '_';
                break;
            case 'cursor_music':
                str_cursorChar = '♫';
                break;
            case 'cursor_star':
                str_cursorChar = '★';
                break;
            case 'cursor_sun':
                str_cursorChar = '☀';
                break;
            default:
                str_cursorChar = '|';
        }
    } else { //处理全新作品，默认显示打字效果
        str_cursorChar = '❤';
    }

    //判断用户有没有选择打字效果
    if (typeof (theme_content['typed_bool']) != 'undefined' && theme_content['typed_bool'] != '') {
        typed_bool = theme_content['typed_bool'] == 'typed_y' ? true : false;
    } else {
        typed_bool = false; //默认显示打字效果
    }

    display_pure_words();
    $(".div_pure_words").fadeIn();

    interval_pw_height = setInterval(function () {
    
        var least_height_div_pw = $('.div_pure_words_height').height();
        if (least_height_div_pw > height_div_pw) {
            height_div_pw = least_height_div_pw;
        } else {
            clearInterval(interval_pw_height);
            $(".div_pure_words_height").height(least_height_div_pw + 100);
            if ($(".div_pure_words_height").height() < window_height) {
           
                console.log('let us be high as window');
            }
        }
    }, 100);
}

function display_pure_words() {
    if (typed_bool) {
        var typed_pure_words = new Typed('#span_pw_typed', {
            strings: [pure_words_content], //输入内容, 支持html标签
            typeSpeed: 120, //打字速度
            cursorChar: str_cursorChar, //替换光标的样式
            contentType: 'html', //值为html时，将打印的文本标签直接解析html标签
            onComplete: function (abc) {
                // console.log(abc); 
                console.log('finished typing words');
                // console.log($('#span_pw_typed').height()-$(".div_pure_words_height").height());
            },
        });
    } else {
        //如果不需要打字效果就直接显示
        $("#span_pw_typed").html(pure_words_content).fadeIn();
    }
    // init_attachment();
}


function random_text_array(temp_array, length) { //获取随机的模板文字
    console.log('random_text_array');
    var random_array = [];
    while (random_array.length < length) {
        // var random_num=Math.floor(Math.random()*(array_as_pics.length-0))+0;
        var random_num = Math.floor(Math.random() * (array_as_words_love.length)); //随机取值 
        if (random_array.indexOf(random_num) == -1) {
            random_array.push(random_num);
        }
    }
    // console.log(random_array);
    for (var i = 0; i < length; i++) {
        temp_array.push(array_as_words_love[random_array[i]]); //获取随机的模板文字
    }
}

//开始文字动画主体部分 
init_pure_words();