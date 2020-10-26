var lastWidth = $(window).width();
var navText = document.getElementsByClassName("navbar-text hide");
$(window).ready(function(){
    if (lastWidth < 992) {
        for (let i = 0; i < navText.length; i++) {
            navText.item(i).style.display = "none";
        }
    }
    else {
        for (var i = 0; i < navText.length; i++) {
            navText.item(i).style.display = "inline";
        }
    }
})
$(window).resize(function () {
    if ($(window).width() != lastWidth) {
        lastWidth = $(window).width();
        if (lastWidth < 992) {
            for (let i = 0; i < navText.length; i++) {
                navText.item(i).style.display = "none";
            }
        }
        else {
            for (var i = 0; i < navText.length; i++) {
                navText.item(i).style.display = "inline";
            }
        }
    }
})

