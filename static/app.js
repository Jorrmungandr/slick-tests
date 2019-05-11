$(document).ready(() => {
  // document.querySelector('.carousel').innerHTML += `
  //   <div class="prev arrow"></div>
  //   <div class="next arrow"></div>
  // `;
  $('.carousel').slick({
    slidesToShow: 1,
    dots: true,
    customPaging: function (slider, i) {
      return '<div class="dot" id=' + i + "></div>";
    },
    prevArrow: '<a class="prev arrow fa fa-angle-left"></a>',
    nextArrow: '<a class="next arrow fa fa-angle-right"></a>',
  });
});
document.addEventListener('click', () => {
})