$(document).ready(function(){
    $('.team__profile-desc').on('click', function(){

        // Получение элементов текущего блока
        var img = $(this).find('.team__profile-elem-img');
        var subdesc = $(this).find('.team__profile-subdesc');

        // Проверка, активен ли уже этот блок
        if(img.hasClass('team__profile-elem-img--active') && subdesc.hasClass('team__profile-subdesc--active')) {
            // Если блок уже активен, то убираем классы, тем самым закрывая его
            img.removeClass('team__profile-elem-img--active');
            subdesc.removeClass('team__profile-subdesc--active');
        } else {
            // Если блок не активен, сначала убираем классы 'active' у всех блоков
            $('.team__profile-elem-img').removeClass('team__profile-elem-img--active');
            $('.team__profile-subdesc').removeClass('team__profile-subdesc--active');
            
            // А затем добавляем классы 'active' только этому блоку
            img.addClass('team__profile-elem-img--active');
            subdesc.addClass('team__profile-subdesc--active');
        }
    });
});
