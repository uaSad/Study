$(document).ready(function () {
    var showGreeting = function() {
        var d = new Date();
        var h = d.getHours();
        var greet;

        if (h >= 6 && h < 12) {
            greet = 'Доброе утро';
        }
        else if (h >= 12 && h < 18) {
            greet = 'Добрый день';
        }
        else {
            greet = 'Добрый вечер';
        }

        /*$('<div id="greeting"></div>').*/
        $('<div>').
            attr({'id':'greeting'}).
            appendTo('#wrapper').
            css('opacity', '0').
            append('<h3>'+ greet +'!</h3>').
            animate({ opacity: '1' }, 1000).
            click(function() {
                $(this).animate(
                    { opacity: '0' }, 1000,
                    function() {
                        $(this).remove();
                    }
                );
            });
    };

    $('.form-signin-container input').focus(function() {
        $('.form-signin-container').find('.error').remove();
    });
    /*
    $('.form-signin-container input').mousemove(function() {
        $('.form-signin-container').find('.error').animate(
                { opacity: '0' }, 500,
                function() {
                    $(this).remove();
                }
        );
    });*/


    $('form').submit(function() {
        var userName = $(this).find('input[name=name]').val();
        var userPassword = $(this).find('input[name=password]').val();

        $(this).find('.error').remove();

        if (!userName) {
            $(this).find('input[name=name]').
                before('<div class="error">Введите имя</div>');
            return false;
        }
        if (!userPassword) {
            $(this).find('input[name=password]').
                before('<div class="error">Введите пароль</div>');
            return false;
        }

        if (userName.toLowerCase() == 'user' &&
                userPassword == 'password') {
            $('.form-signin-container').animate(
                { opacity: '0' }, 1000,
                function() {
                    $(this).remove();
                    showGreeting();
                }
            );
            /* без сервера */
            console.log('log-in');
            return false;
        }
        else {
            $(this).find('button').
                before('<div class="error login">Ошибка неверные имя или пароль.</div>');
            return false;
        }
    });
});