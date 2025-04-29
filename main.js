
var map;
var dataStats = {};
//function to instantiate the Leaflet map
function createMap(){
    //create the map
    map = L.map('map', {
        center: [44.038889, -88.741667],
        zoom: 15
    });

    var baseMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        //attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        opacity: .5
    });

    baseMap.addTo(map);
    
    var parkLayer = new L.GeoJSON(Parks.geojson);       
    parkLayer.addTo(map);

    map.setMaxBounds(map.getBounds());
};

document.addEventListener('DOMContentLoaded',createMap)