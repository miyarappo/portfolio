// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#toggle').addEventListener('click', function() {
//     this.toggleClass('active');
//     document.querySelector('#overlay').toggleClass('open');
//   }, false);
// }, false);


$(function() {
  $('#toggle').click(function() {
    console.log('test');
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
    });
});
