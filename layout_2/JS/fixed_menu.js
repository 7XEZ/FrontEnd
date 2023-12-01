const section = $('section');
const display = $('.maincontent');

section.first().addClass('active');

const performTransition = sectionEQ => {
    const position = sectionEQ * -100;

        const currentSec = section.eq(sectionEQ);
        const MenuTheme = currentSec.attr("data-sidemenu-theme");
        const sidemenu = $(".fixed__menu");

        if(MenuTheme == "black"){
            sidemenu.addClass("fixed__menu--white")
        }else{
            sidemenu.removeClass("fixed__menu--white") 
        }

    
    display.css({
        transform: `translateY(${position}vh)` // исправлено на обратные кавычки
    });

    section.eq(sectionEQ).addClass('active').siblings().removeClass('active');

    sidemenu.find(".fixed__item").eq(sectionEQ).addClass("fixed__item--active").siblings().removeClass("fixed__item--active");
}

const scrollViewport = direction => {
    const activeSection = section.filter('.active');
    const nextSection = activeSection.next('section');
    const prevSection = activeSection.prev('section');

    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index('section'));
    }

    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index('section'));
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    } else if (deltaY < 0) {
        scrollViewport("prev");
    }
});


$(window).on("keydown", e =>{
    const tagName = e.target.tagName.toLowerCase();

    if(tagName != "input" && tagName != "textarea"){

        switch(e.keyCode){
            case 38:
                scrollViewport("prev");
                break
        }
        switch(e.keyCode){
            case 40:
                scrollViewport("next");
                break
        }
    }


});

$("[data-scroll-to]").click(e =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());

});


$("body").swipe({
    swipe: function(event, direction){
        if (direction == "up") scrollViewport("next");
        if (direction == "down") scrollViewport("prev");
    },
});
