$(document).ready(function () {
    $(".form-signin > .btn-block").click(function () {
        var inputs = $('.form-signin > input');
        var iVal = [];
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == 'email' ||
                inputs[i].type == 'password')
                iVal.push(inputs[i].value);
        }
        iVal = iVal.map(function(item){
            return item.toLowerCase();
        });
        if (iVal[0] == 'user' &&
                iVal[1] == 'password') {
            $('.form-signin-container').animate(
                { opacity: "0" },
                1000,
                function() {
                    $(this).css({display:'none'});
                }
            );
        }
    });
});