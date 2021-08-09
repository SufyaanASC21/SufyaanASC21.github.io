/*addclickListener();

addEventListener */

//alert("Hey");


function imgFunction(){
   
   window.open("index2.html", "_blank")
}
document.querySelector("#game_pic").addEventListener('click',imgFunction);


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("big_div");

// Get the offset position of the navbar
var sticky = big_div.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    big_div.classList.add("sticky")
  } else {
    big_div.classList.remove("sticky");
  }
}