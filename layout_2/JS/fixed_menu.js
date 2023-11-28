const section = $('section');
const display = $('.maincontent');

section.first().addClass('active');

const performTransition = sectionEQ => {
    const position = sectionEQ * -100;
    
    display.css({
        transform: `translateY(${position}vh)` // исправлено на обратные кавычки
    });

    section.eq(sectionEQ).addClass('active').siblings().removeClass('active');
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
