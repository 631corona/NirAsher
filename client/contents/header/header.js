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

var topMenu = $("nav"),
    topMenuHeight = getNavbarHeight(),
    // All list items
    menuItems = topMenu.find("li a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        console.log($(this).attr("href"));
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    let fromTop = $(this).scrollTop()+topMenuHeight + 200;

    // Get id of current scroll item
    let cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    let id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
        .parent().removeClass("active")
        .end().filter("[href='#"+id+"']").parent().addClass("active");
});