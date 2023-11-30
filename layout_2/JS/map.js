initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map__content'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.612552, 55.745650],
                zoom: 13,
                controls:[],
            }
        }
        
    );

    
    
    map.addChild(new YMapDefaultSchemeLayer());
}
