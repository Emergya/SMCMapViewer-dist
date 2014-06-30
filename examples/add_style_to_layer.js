function initMap() {
    SMC.BASE_URL = "../"
    L.Icon.Default.imagePath = "../images";
	var map = SMC.map('map', {
        scrollWheelZoom:'center'
    });
	map.setView([37.383333, -5.983333], 11);
	var base = SMC.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 18
	}).addTo(map);
    var satelite = SMC.wmsLayer("http://www.idee.es/wms/PNOA/PNOA", {
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
    var leyenda = SMC.layerTreeControl(baseLayer, {
        collapsed: false
    }).addTo(map);

    var stylesheet = '* {htmlTemplate:"<i class=fa fa-plane fa-2x marker_red></i>";} * |z13- {htmlTemplate:"<i class=fa fa-plane fa-2x marker_blue></i>";}';
    var wfsMarkerLayer = SMC.wfsMarkerLayer({
        serverURL: "http://www.ideandalucia.es/dea100/wfs",
        typeName: "ideandalucia:it03_aeropuerto_pun",
        label: "Prueba WFS",
        outputFormat: "json",
        stylesheet: stylesheet
    }).addTo(map);
}
window.onload = initMap;