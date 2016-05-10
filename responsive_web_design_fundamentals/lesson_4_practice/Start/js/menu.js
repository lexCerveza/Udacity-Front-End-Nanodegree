document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementsByClassName("header__menu")[0];
    menuButton.addEventListener("click", function(e) {
    	document.getElementById("drawer").classList.toggle("open");
        e.stopPropagation();
    });
}, false); 