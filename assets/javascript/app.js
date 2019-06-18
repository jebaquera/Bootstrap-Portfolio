$('.carousel').carousel({
    interval: 2000
  })

  $('#carouselPortfolio').on('slide.bs.carousel', function () {
    direction: "left";
  })