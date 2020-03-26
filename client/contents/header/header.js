const navbarCollapseSelector = ".navbar-collapse";
const navbarMenuShowClass = "show";

function getNavbarHeight(){
    if ($(navbarCollapseSelector).hasClass(navbarMenuShowClass)){
        return $("nav").outerHeight() - $(".show").outerHeight();
    }
    return $(".navbar").outerHeight();
}

function updateContentPadding(){
    $(".content").css("padding-top", `${getNavbarHeight()}px`);
}

function endResizing(){
    // Haven't resized in 0.5 sec!
    updateContentPadding();
    console.log("end resizing")
}

$(window).click(() => {
    if($(navbarCollapseSelector).hasClass(navbarMenuShowClass)){
        $(navbarCollapseSelector).removeClass(navbarMenuShowClass);
    }
});

updateContentPadding();

let elements = document.getElementsByTagName('a');
for(let i = 1; i < elements.length; i++) {
    elements[i].onclick = function() {
        let hash = this.hash.substr(1),
            elementTop = document.getElementById(hash).offsetTop;
        window.scrollTo(0, elementTop - getNavbarHeight());
        window.location.hash = '';
        return false;
    }
}

let resizingTimeout;
$(window).resize(() => {
    clearTimeout(resizingTimeout);
    resizingTimeout = setTimeout(endResizing, 500);
});