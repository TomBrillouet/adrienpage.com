$(document).ready(function() {
  ['g1', 'g2', 'g3'].forEach(function(gid) {
    $('#' + gid).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      infinite: true,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      lazyLoad: 'ondemand',
      draggable: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });
});
