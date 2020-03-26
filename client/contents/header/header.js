$(window).click((e) => {
    if($(".navbar-collapse").hasClass("show")){
        $('.navbar-collapse').removeClass("show");
    }
});

var nav = $('.content-nav');


var elements = document.getElementsByTagName('a');
for(var i = 1; i < elements.length; i++) {
    elements[i].onclick = function() {
        var hash = this.hash.substr(1),
            elementTop = document.getElementById(hash).offsetTop;
        window.scrollTo(0, elementTop - 56);
        window.location.hash = '';
        return false;
    }
}