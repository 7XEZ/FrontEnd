$(document).ready(function(){
    $('.team__profile-desc').on('click', function(){


        var img = $(this).find('.team__profile-elem-img');
        var subdesc = $(this).find('.team__profile-subdesc');


        img.toggleClass('team__profile-elem-img--active');
        subdesc.toggleClass('team__profile-subdesc--active');
    });
});
