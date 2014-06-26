function initMap() {
	var map = SMC.map('map');
	map.setView([37.383333, -5.983333], 11);
	var base = SMC.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 18
	}).addTo(map);
}
window.onload = initMap;