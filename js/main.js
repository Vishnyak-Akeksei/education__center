$(function (){

  $('.header__btn').on('click', function(){
    $('.menu__list').slideToggle();
   });

   $('.header__inf-btn').on('click', function(){
    $('.header__inf-list').slideToggle();
   });

   wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       50,          // default
    mobile:       false,       // default
    live:         true        // default
  }
  )
  wow.init();

   $('input[type="file"]').styler();

    $('.slider').slick({
        infinite: true,
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 800,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: true,
              speed: 800,
              autoplay: false,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 850,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
              speed: 800,
              autoplay: false,
              autoplaySpeed: 2000,
            }
          },
        ]
      });
    

    $('.slider__we').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
              speed: 800,
              autoplay: false,
              autoplaySpeed: 2000,
            }
          }
        ]
    });

});