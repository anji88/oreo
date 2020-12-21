$(document).ready(function() {
    var count = 0;
    // Cokkies block
    var primaryTextLine = document.getElementById('first-title');
    var secoundText = document.getElementById('secound- title');
    var allanimationEle = Array.prototype.slice.call($('.website__cookie-animation'));
    var firstCookieClass = allanimationEle[0];
    if (allanimationEle) {
        setTimeout(() => {
            $('.cookie__title').removeClass('hide');
            setTimeout(() => {
                $(primaryTextLine).removeClass('animate__slideInLeft');
                $(secoundText).removeClass('animate__slideInRight');
                $(primaryTextLine).offsetWidth;
                $(secoundText).offsetWidth;
                $(primaryTextLine).addClass('animate__fadeOutLeft');
                $(secoundText).addClass('animate__fadeOutRight');
                setTimeout(() => {
                    $(primaryTextLine).removeClass('animate__fadeOutLeft');
                    $(secoundText).removeClass('animate__fadeOutRight');
                    $(primaryTextLine).offsetWidth;
                    $(secoundText).offsetWidth;
                    $(primaryTextLine).text('Is scroling');
                    $(primaryTextLine).addClass('animate__slideInLeft');
                    $(secoundText).text('The last oreo');
                    $(secoundText).addClass('animate__slideInRight');
                    setTimeout(() => {
                        $(primaryTextLine).removeClass('animate__slideInLeft');
                        $(secoundText).removeClass('animate__slideInRight');
                        $(primaryTextLine).offsetWidth;
                        $(secoundText).offsetWidth;
                        $(primaryTextLine).addClass('animate__fadeOutLeft');
                        $(secoundText).addClass('animate__fadeOutRight');
                    }, 2000);
                }, 500);
            }, 2500);
        }, 5000);
        setTimeout(() => {
            $(firstCookieClass).addClass('active');
        }, 2000);
        setTimeout(() => {

            allanimationEle.forEach(eachChild => {
                if (!$(eachChild).hasClass('cookie1')) {
                    $(eachChild).addClass('active');
                }
            });
        }, 4000);

    }
    setTimeout(() => {
        $(firstCookieClass).addClass('remove-cookie-animaion');
        setTimeout(() => {
            $('.website__logo').addClass('animate__fadeOut');

        }, 3000);
        setTimeout(() => {
            $('.cookies-block').addClass('hide');
            $('.thank__section').addClass('show');
            setTimeout(() => {
                $('.network__block').addClass('hide');
                $('.payful__block').addClass('show');
            }, 4000);
        }, 4000);
    }, 10000);
    // Cookies end

    // Playful network

});