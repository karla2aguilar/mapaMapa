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


function panHome() {
    view.animate({
        center: ourLoc,
        duration: 2000
    });
};

function panToLocation() {
    var countryName = document.getElementById("country-name").value;
    
    if(countryName === "") {
        alert("You didn't enter a country name!");
        return;
    };

    var lon = 0.0;
    var lat = 0.0;

    var query = "https://restcountries.eu/rest/v2/name/"+countryName;
    query = query.replace(/ /g, "%20");
    alert(query); 

    var countryRequest = new XMLHttpRequest();
    countryRequest.open('GET', query, false);

    countryRequest.send();

    var countryInformation = JSON.parse(countryRequest.response(Text));

    var lat = countryInfromation[0].latlng[0];
    var lon = countryInfromation[0].lonlng[0];

    var location = ol.proj.fromLonLat ([lon, lat]);

    view.animate({
        center: location,
        duration: 2000
    });

}

