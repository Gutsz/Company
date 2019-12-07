jQuery(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: true,
        loop: true,
        speed: 1000
    })
});


let show = () => {
    if($('.menu').hasClass('active'))  {
        $('.menu').removeClass('active');
    } else {
        $('.menu').addClass('active');
    }
}



jQuery(document).ready(function () {
    $('.navigation').on('click', '.menu-icon', function () {
    show();
});
})