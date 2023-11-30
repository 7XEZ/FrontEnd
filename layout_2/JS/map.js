async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YPlacemark } = ymaps3;

    // Инициализируем карту
    const map = new YMap(
        // Передаем ссылку на HTMLElement контейнера
        document.getElementById('map__content'),
        // Передаем параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.612552, 55.745650],
                zoom: 13,
                controls: [],
            }
        }
    );

    // Добавляем слой карты
    map.addChild(new YMapDefaultSchemeLayer());

    // Массив координат для маркеров
    const coordinates = [
        [55.758106851670426, 37.6222141688841],
        [55.74973293036917, 37.607966274596976],
        [55.75888122717374, 37.58307537493877],
        [55.744359116710605, 37.58195957598859]
    ];

    // Добавляем маркеры на карту
    coordinates.forEach(function(coord) {
        const placemark = new YPlacemark(coord);
        map.addChild(placemark);
    });
}


