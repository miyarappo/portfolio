window.addEventListener('DOMContentLoaded', function() {

  // $('body').removeClass('fade-wrapper');
  document.querySelector('body').classList.remove('fade-wrapper');

  //ハンバーガーメニューの閉会
  document.querySelector('#toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('#overlay').classList.toggle('open');
    document.querySelectorAll('#toggle span').forEach(function(value) {
      value.style.backgroundColor = '#ffffff';
    });
    changeHambergerColor();
  }, false);

  // スクロール量に応じてハンバーガーメニューの色を変更
  window.addEventListener('scroll', function() {

    changeHambergerColor();

  }, false);

  var anchors = document.querySelectorAll('a:not([href^="#"]):not([target])');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
      e.preventDefault();
      var url = this.getAttribute('href');
      if (url !== '') {
        document.querySelector('body').classList.add('fade-wrapper');
        setTimeout(function() {
          window.location = url;
        }, 800);
      }
    });
  }

  function changeHambergerColor() {

    var scrollHeight = window.pageYOffset;
    var targetElem = document.querySelector('.change-contextmenu-point').offsetTop;

    if ((scrollHeight + 48) > targetElem) {
      document.querySelectorAll('#toggle span').forEach(function(value) {
        value.style.backgroundColor = '#444444';
      });
    } else {
      document.querySelectorAll('#toggle span').forEach(function(value) {
        value.style.backgroundColor = '#ffffff';
      });
    }
  }

}, false);
