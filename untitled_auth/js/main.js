$(document).ready(function () {
    $('form').submit(function() {
        /*if ($(this).find('input[name=name]').val() == '') {
            alert('Введите имя пользователя');
            return false;
        }
        else if ($(this).find('input[name=password]').val() == '') {
            alert('Введите пароль');
            return false;
        }*/
        if ($(this).find('input[name=name]').val() == 'user' &&
                $(this).find('input[name=password]').val() == 'password') {
            $('.form-signin-container').animate(
                { opacity: "0" },
                1000,
                function() {
                    /*$(this).css({display:'none'});*/
                    $(this).remove();

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

                    $('#greeting').css('opacity', '0')
                        .html('<h3>'+ greet +'!</h3>')
                        .animate({ opacity: "1" }, 1000);

                }
            );
            /* без сервера */
            console.log('log-in');
            return false;
        }
        else {
            return false;
        }
    });
});