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