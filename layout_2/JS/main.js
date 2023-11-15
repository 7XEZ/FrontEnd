$(document).ready(function(){
    console.log('DOM построен');
});

$(document).ready(function(){
    $('.team__profile-elem').on('click', e =>{

        var subdesc = $('.team__profile-subdesc');

        subdesc.height("3.75rem")

        $('.team__profile-subdesc').toggle();

        $('.team__profile-elem').css({
            'transform': 'rotate(60deg)',
            'transition': 'transform 0.5s' // Опционально, для плавного поворота
        });
    });

    
});