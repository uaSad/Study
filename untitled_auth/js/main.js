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

        $('<div id="greeting"></div>').
            appendTo('#wrapper').
            css('opacity', '0').
            append('<h3>'+ greet +'!</h3>').
            animate({ opacity: '1' }, 1000).
            click(function() {
                $(this).remove();
            });
    };

    $('form').submit(function() {
        var userName = $(this).find('input[name=name]').val();
        var userPassword = $(this).find('input[name=password]').val();

        if (!userName || !userPassword)
            return false;

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
            return false;
        }
    });
});