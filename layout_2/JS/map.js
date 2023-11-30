let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.744293, 37.606188],
    zoom: 13,
    controls: [],
  });

  let coords = [
    [55.758106851670426,37.6222141688841],
    [55.74973293036917,37.607966274596976],
    [55.75888122717374,37.58307537493877],
    [55.744359116710605,37.58195957598859],
    ],
    myCollection = new ymaps.GeoObjectCollection(
      {},
      {
        draggable: false,
        iconLayout: "default#image",
        iconImageHref: "./img/marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52],
      }
    );

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable("scrollZoom");
};

ymaps.ready(init);