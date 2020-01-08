$(function(){
    // トップへ移動
    function moveTopBtn() {
        $('html, body').animate({
            'scrollTop': 0
        }, 'slow');
    }

    $('#top-btn').click(function(){
        moveTopBtn();
    });

    $('.move-top').click(function(){
        moveTopBtn();
    });

    // アイコンアニメーション
    $('.icon').hover(function () {
            // over
            $(this).children('span').animate({
                'font-size': '50px'
            }, 300);
        }, function () {
            // out
            $(this).children('span').animate({
                'font-size': '40px'
            }, 300);
        }
    );

    //ナビゲーション
    $('header a').click(function () { 
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        position -= 75;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });

    // サイドバーリスト表示
    $('.list-bars').click(function () { 
        // $(this).css('display', 'none');
        // $(this).hide();
        // $('.header-list').slideUp();
        // $('.header-list ul').css('display', 'block');
        // $('.header-list').slideDown();
        $('.header-list ul').show(500);
        $('.close-icon').show(500);
    });

    // サイドバー非表示
    $('.close-icon').hover(function () {
            // over
            $(this).animate({
                'font-size': '25px'
            }, 300);
        }, function () {
            // out
            $(this).animate({
                'font-size': '20px'
            }, 300);
        }
    );
    $('.close-icon').click(function () {
        $('.header-list ul').hide(300);
        $(this).hide(300);
    });
});
