window.addEventListener('DOMContentLoaded', function() {

  document.querySelector('#toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('#overlay').classList.toggle('open');
  }, false);
  
}, false);
