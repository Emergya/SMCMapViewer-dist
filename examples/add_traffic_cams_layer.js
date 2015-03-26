function initMap() {
	var map = SMC.map('map');
	map.setView([37.383333, -5.983333], 13);
	var base = SMC.tileLayer({
        url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', 
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);

    $.ajax({
        dataType: "json",
        url: "../resources/traffic_cams_seville.geojson",
        success: function(data) {
            L.Icon.Default.imagePath = "../images";
            var stylesheet = '* {markerWidth: 25; markerHeight: 25; anchorTop: 14; anchorLeft: 14; popUpOffsetTop:-10; popUpTemplate: "<div>Cámara <b>{{codigo}}</b><br><b>{{descripcion}}</b><br><img id={{codigo}} src=http://trafico.sevilla.org/camaras/cam{{codigo}}.jpg height=220 width=300></img></div>";} [filtrada=N]{iconUrl: "http://trafico.sevilla.org/img/CameraGreen.png";} [filtrada=S]{iconUrl: "http://trafico.sevilla.org/img/CameraBlack.png";}';
            var marcador = new SMC.layers.markers.MarkerLayer({
                stylesheet: stylesheet
            });
            marcador.load = function() {
                marcador.addMarkerFromFeature(data.features);
            };
            marcador.onFeatureClicked = function(feature){
                var images = $('img[id=' + feature.feature.properties.codigo + ']');
                if(images.length > 0){
                    images[0].src += "?" + new Date().getTime();
                }
            };
            marcador.addTo(map);
        }
    });
}
window.onload = initMap;