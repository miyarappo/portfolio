function changeHambergerColor(){if(!document.querySelector("#overlay").classList.contains("open")){window.pageYOffset+48>document.querySelector(".change-contextmenu-point").offsetTop?document.querySelectorAll("#toggle span").forEach(function(e){e.style.backgroundColor="#444444"}):document.querySelectorAll("#toggle span").forEach(function(e){e.style.backgroundColor="#ffffff"})}}window.addEventListener("DOMContentLoaded",function(){document.querySelector("body").classList.remove("fade-wrapper");for(var e=document.querySelectorAll('a:not([href^="#"]):not([target])'),o=0;o<e.length;o++)e[o].addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("href");""!==o&&(document.querySelector("body").classList.add("fade-wrapper"),setTimeout(function(){window.location=o},800))});document.querySelector("#toggle").addEventListener("click",function(){this.classList.toggle("active"),document.querySelector("#overlay").classList.toggle("open"),document.querySelectorAll("#toggle span").forEach(function(e){e.style.backgroundColor="#ffffff"}),changeHambergerColor()},!1)},!1),window.addEventListener("scroll",function(){changeHambergerColor()},!1);