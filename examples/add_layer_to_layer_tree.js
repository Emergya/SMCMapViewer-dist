function initMap() {
    var map = SMC.map('map');
    map.setView([37.383333, -5.983333], 11);
    var base = SMC.tileLayer({
         url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', 
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);
    var satelite = SMC.wmsLayer({
        url: "http://www.idee.es/wms/PNOA/PNOA",
        layers: "PNOA",
        format: 'image/png',
        transparent: true,
        crs: L.CRS.EPSG4326,
        attribution: "Map data © Instituto Geográfico Nacional de España"
    });
    var baseLayer = {
        "Street Map": base,
        "Satelite": satelite
    };
    var leyenda = SMC.layerTreeControl(baseLayer,{
        collapsed: false
    }).addTo(map);

    SMC.wmsLayer({
        url: "http://www.idee.es/wms/PNOA/PNOA",
        layers: "PNOA",
        format: 'image/png',
        transparent: true,
        crs: L.CRS.EPSG4326,
        label: "PNOA",
        attribution: "Map data © Instituto Geográfico Nacional de España"
    }).addTo(map);
}
window.onload = initMap;