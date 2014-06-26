function initMap() {
	var map = SMC.map('map');
	map.setView([37.383333, -5.983333], 11);
	var base = SMC.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 18
	}).addTo(map);

	var geoJSON = [{
    		"type": "Feature",
      		"id": "node/308961227",
      		"properties": {
        		"@id": "node/308961227",
		        "amenity": "bicycle_rental",
		        "capacity": "20",
		        "name": "039 Plaza San Antonio de Padua",
		        "network": "Sevici",
		        "operator": "JCDecaux",
		        "ref": "39",
		        "source": "JCDecaux",
		        "source:url": "https://developer.jcdecaux.com/#/opendata"
      		},
      		"geometry": {
		        "type": "Point",
		        "coordinates": [
		          -5.9984791,
		          37.3978439
		        ]
      		}
    	},{
	    	"type": "Feature",
	      	"id": "node/308965974",
	      	"properties": {
		        "@id": "node/308965974",
		        "amenity": "bicycle_rental",
		        "capacity": "17",
		        "name": "050 Calle de Hernán Cortés",
		        "network": "Sevici",
		        "operator": "JCDecaux",
		        "ref": "50",
		        "source": "JCDecaux",
		        "source:url": "https://developer.jcdecaux.com/#/opendata"
      		},
      		"geometry": {
		        "type": "Point",
		        "coordinates": [
		          -5.9966186,
		          37.3975405
		        ]
      		}
    	},{
      		"type": "Feature",
      		"id": "node/308973765",
      		"properties": {
		        "@id": "node/308973765",
		        "amenity": "bicycle_rental",
		        "capacity": "20",
		        "name": "049 Alameda de Hercúles",
		        "network": "Sevici",
		        "operator": "JCDecaux",
		        "ref": "49",
		        "source": "JCDecaux",
		        "source:url": "https://developer.jcdecaux.com/#/opendata"
      		},
      		"geometry": {
		        "type": "Point",
		        "coordinates": [
		          -5.9939147,
		          37.396944
		        ]
      		}
    	},{
      		"type": "Feature",
      		"id": "node/308974864",
      		"properties": {
        		"@id": "node/308974864",
		        "amenity": "bicycle_rental",
		        "capacity": "20",
		        "name": "035 Alameda de Hercúles",
		        "network": "Sevici",
		        "operator": "JCDecaux",
		        "ref": "35",
		        "source": "JCDecaux",
		        "source:url": "https://developer.jcdecaux.com/#/opendata"
      		},
      		"geometry": {
		        "type": "Point",
		        "coordinates": [
		          -5.9938002,
		          37.40079
		        ]
      		}
    	},{
      		"type": "Feature",
      		"id": "node/309251162",
      		"properties": {
		        "@id": "node/309251162",
		        "amenity": "bicycle_rental",
		        "capacity": "15",
		        "name": "041 Plaza Calderón de la Barca",
		        "network": "Sevici",
		        "operator": "JCDecaux",
		        "ref": "41",
		        "source": "JCDecaux",
		        "source:url": "https://developer.jcdecaux.com/#/opendata"
      		},
      		"geometry": {
		        "type": "Point",
		        "coordinates": [
		          -5.9909861,
		          37.3994884
		        ]
      		}
    	}];
	
	L.Icon.Default.imagePath = "../images";
	var stylesheet = '* {iconUrl: "css/images/tires.png";markerWidth: 32;markerHeight: 37;} * |z13- {iconUrl:"css/images/underground.png";markerWidth: 32;markerHeight: 37;}';
    var marcador = new SMC.layers.markers.MarkerLayer({});
    marcador._createStyles = function(){};
	marcador.load = function() {
		marcador.addMarkerFromFeature(geoJSON);
	};
	marcador.addTo(map);
	
}
window.onload = initMap;