
window.onscroll = function() {stickBar()};

// Get the navbar
var navbar = document.getElementById("topnavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function hideId(id) {
	document.getElementById(id).style.display = "none";
}

function showId(id) {
	document.getElementById(id).style.display = "block";
}

var bar = document.getElementById('searchsidebar');

window.onclick = function(event) {
  if (event.target == bar) {
    bar.style.display = "none";
  }
}
