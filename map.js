// 1. create variables for our map
// 2. Write a function that intitializes our map
// 3. We're going to run that function

var ourLoc;
var view;
var map;

function init() {
    ourLoc = ol.proj.fromLonLat([-73.98541799999998, 40.7600563]);

    view = new ol.View({
        center: ourLoc, 
        zoom: 6
    });

    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        loadTilesWhileAnimating: true,
        view: view
    });

};

window.onload = init;

// you can also use the bottom code for the same function, but it's longer

// document.addEventListener("DOMContentLoaded", function (e){
//     init();

// });

