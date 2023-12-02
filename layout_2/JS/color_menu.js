$(document).ready(function(){
    var $window = $(window);

    function adjustMenuWidth(open) {
        var windowsize = $window.width();
        if (windowsize <= 768 && open) {
            // Если ширина окна 768px или меньше и блок открывается
            $('.color__menu-conteiner--active').css('width', '100%');
        } else {
            // В противном случае сбрасываем инлайновый стиль ширины
            $('.color__menu-conteiner').css('width', '');
        }
    }

    // Выполнить при первой загрузке страницы
    adjustMenuWidth(false);

    // Выполнить при каждом изменении размера окна
    $(window).resize(function() {
        adjustMenuWidth($('.color__menu-conteiner--active').length > 0);
    });

    $('.color__menu-item').on('click', function(){
        var content = $(this).find('.color__menu-conteiner');

        // Проверяем, активен ли уже этот контейнер
        if(content.hasClass('color__menu-conteiner--active')) {
            // Если активен, удаляем класс, закрывая его
            content.removeClass('color__menu-conteiner--active');
            adjustMenuWidth(false);
        } else {
            // Если нет, закрываем все другие, удаляем инлайновые стили и открываем этот
            $('.color__menu-conteiner').removeClass('color__menu-conteiner--active').css('width', '');
            content.addClass('color__menu-conteiner--active');
            adjustMenuWidth(true);
        }
    });
});
