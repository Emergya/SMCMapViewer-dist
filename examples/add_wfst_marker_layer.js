function initMap() {
    SMC.BASE_URL = "../"
    L.Icon.Default.imagePath = "../images";
    var map = SMC.map('map');
    map.setView([37.383333, -4.983333], 8);
    // Add base layer from OSM
    var OpenStreetMap_Mapnik = SMC.tileLayer({
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(map);
    // Add layers to control group
    var baseLayer = {
        "OpenStreetMap": OpenStreetMap_Mapnik
    };
    var leyenda = SMC.layerTreeControl(baseLayer, {
        collapsed: false
    }).addTo(map);

    var stylesheet ='* {iconUrl: "../images/marker-icon.png";markerWidth: 30;markerHeight: 40;} * [TITULO="smc"] {iconUrl:"../images/underground.png";markerWidth: 32;markerHeight: 37;}';
    var wfsMarkerLayer = SMC.wfstMarkerLayer({
       serverURL: "http://localhost/geoserver/s/wfs",
       typeName: "s:EDITABLE_PUNTO",  
       label: "Prueba WFST",
       //stylesheet: stylesheet
    }).addTo(map);

   
}
window.onload = initMap;