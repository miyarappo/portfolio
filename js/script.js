window.addEventListener('DOMContentLoaded', function() {

  //ハンバーガーメニューの閉会
  document.querySelector('#toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('#overlay').classList.toggle('open');
    document.querySelectorAll('#toggle span').forEach(function(value){
      value.style.backgroundColor = '#ffffff';
    });
    changeHambergerColor();
  }, false);

  // スクロール量に応じてハンバーガーメニューの色を変更
  window.addEventListener('scroll', function() {

    changeHambergerColor();

  }, false);

  function changeHambergerColor() {

    var scrollHeight = window.pageYOffset;
    var targetElem = document.querySelector('.project-details').offsetTop;

    if ((scrollHeight + 48) > targetElem) {
      document.querySelectorAll('#toggle span').forEach(function(value){
        value.style.backgroundColor = '#444444';
      });
    } else {
      document.querySelectorAll('#toggle span').forEach(function(value){
        value.style.backgroundColor = '#ffffff';
      });
    }
  }

}, false);
