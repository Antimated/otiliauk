
$('#home ul li').hover(function() {
   $(this).find('a img').show(100);        
},function(){
   $(this).find('a img').hide(100);
});

$('.responsive-slider').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('#poetry-next').click(function(){
    $(".responsive-slider").slick('slickNext');
});

$('#poetry-prev').click(function(){
    $(".responsive-slider").slick('slickPrev');
});