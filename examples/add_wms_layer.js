function initMap() {
	var map = SMC.map('map');
	map.setView([37.383333, -5.983333], 11);
	var satelite = SMC.wmsLayer("http://www.idee.es/wms/PNOA/PNOA", {
        layers: "PNOA",
        format: 'image/png',
        transparent: true,
        crs: L.CRS.EPSG4326,
        attribution: "Map data © Instituto Geográfico Nacional de España"
    }).addTo(map);
}
window.onload = initMap;