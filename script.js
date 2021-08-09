/*addclickListener();

addEventListener */

//alert("Hey");


function imgFunction(){
   
   window.open("index2.html", "_blank")
}
document.querySelector("#game_pic").addEventListener('click',imgFunction);


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("big_div");

var sticky = big_div.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    big_div.classList.add("sticky")
  } else {
    big_div.classList.remove("sticky");
  }
}