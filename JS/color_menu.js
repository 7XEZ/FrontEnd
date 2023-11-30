$(document).ready(function(){
    $('.color__menu-item').on('click', function(){
        // Определяем контейнер, связанный с нажатым элементом
        var content = $(this).find('.color__menu-conteiner');

        // Проверяем, активен ли уже этот блок
        if(content.hasClass('color__menu-conteiner--active')) {
            // Если блок уже активен, то убираем классы, закрывая его
            content.removeClass('color__menu-conteiner--active');
        } else {
            // Если блок не активен, убираем класс 'active' у всех блоков
            $('.color__menu-conteiner').removeClass('color__menu-conteiner--active');
            
            // И добавляем класс 'active' только к этому блоку
            content.addClass('color__menu-conteiner--active');
        }
    });
});
