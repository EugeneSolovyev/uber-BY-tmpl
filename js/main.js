$(document).ready(function() {
    $('.content').hide().delay(450).fadeIn('slow');
    $('.dscr').css({
        left: '110%'
    }).fadeIn().animate({
        display: 'block',
        left: '50%',
        easing: 'swing'
    }, 350);
});