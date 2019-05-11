$(document).ready(() => {
  $('.carousel').slick({
    slidesToShow: 1,
    dots: true,
    customPaging: function (slider, i) {
      return '<div class="dot" id=' + i + "></div>";
    },
    prevArrow: '<a class="prev arrow fa fa-angle-left"></a>',
    nextArrow: '<a class="next arrow fa fa-angle-right"></a>',
  });
  $('.carousel1').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    customPaging: function (slider, i) {
      return '<div class="dot" id=' + i + "></div>";
    },
    prevArrow: '<a class="prev arrow fa fa-angle-left"></a>',
    nextArrow: '<a class="next arrow fa fa-angle-right"></a>',
  });
});