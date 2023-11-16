$(document).ready(function(){
    $('.team__profile-desc').on('click', function(){

        var clickedElem = $(this);

        $('.team__profile-elem-img').on('click', function(){
            function SlideMenu(){
                
                clickedElem.find('.team__profile-elem-img').addClass('team__profile-elem-img--active');
                clickedElem.find('.team__profile-subdesc').addClass('team__profile-subdesc--active');
            }
    
            SlideMenu();
        });

    });
});