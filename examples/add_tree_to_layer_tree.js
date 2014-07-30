function initMap() {
	var map = SMC.map('map');
	map.setView([37.383333, -4.983333], 8);
	var base = SMC.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 18
	}).addTo(map);
    var satelite = SMC.wmsLayer("http://www.idee.es/wms/PNOA/PNOA", {
        layers: "PNOA",
        format: 'image/png',
        transparent: true,
        crs: L.CRS.EPSG4326,
        attribution: "Map data &copy; Instituto Geográfico Nacional de España"
    });
    var baseLayer = {
        "Street Map": base,
        "Satelite": satelite
    };
    var leyenda = SMC.layerTreeControl(baseLayer, {
        collapsed: false
    }).addTo(map);

    var tree = [{
        type: "folder",
        label: 'REDIAM',
        layers: [{
            type: "folder",
            label: "Paisajes",
            layers: [{
                type: "SMC.layers.WMSLayer",
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_mapa_paisaje_andalucia",
                params: [{
                    layers: "categ_paisaj",
                    format: 'image/png',
                    transparent: true,
                    crs: L.CRS.EPSG4326,
                    attribution: "Map data &copy; REDIAM",
                    label: "Categorias paisajisticas",
                    zIndex: 10
                }] 
            },{
                type: "SMC.layers.WMSLayer",
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_mapa_paisaje_andalucia",
                params: [{
                    layers: "amb_paisaj",
                    format: 'image/png',
                    transparent: true,
                    crs: L.CRS.EPSG4326,
                    attribution: "Map data &copy; REDIAM",
                    label: "Ambitos paisajisticos",
                    zIndex: 11
                }] 
            },{
                type: "SMC.layers.WMSLayer",
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_mapa_paisaje_andalucia",
                params: [{
                    layers: "areaspai",
                    format: 'image/png',
                    transparent: true,
                    crs: L.CRS.EPSG4326,
                    attribution: "Map data &copy; REDIAM",
                    label: "Areas paisajisticas",
                    zIndex: 12
                }] 
            }]
        },{
            type: "folder",
            label: "Vias Pecuarias",
            layers: [{
                type: "SMC.layers.WMSLayer",
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Inventario_VVPP",
                params: [{
                    layers: "linea_base_deslindada",
                    format: 'image/png',
                    transparent: true,
                    crs: L.CRS.EPSG4326,
                    attribution: "Map data &copy; REDIAM",
                    label: "Linea Base Deslindada",
                    zIndex: 1000
                }] 
            },{
                type: "SMC.layers.WMSLayer",
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Inventario_VVPP",
                params: [{
                    layers: "Lugares_VVPP",
                    format: 'image/png',
                    transparent: true,
                    crs: L.CRS.EPSG4326,
                    attribution: "Map data &copy; REDIAM",
                    label: "Lugares VVPP",
                    zIndex: 14
                }] 
            },{
                type: "SMC.layers.WMSLayer",
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Inventario_VVPP",
                params: [{
                    layers: "Inventario_VVPP",
                    format: 'image/png',
                    transparent: true,
                    crs: L.CRS.EPSG4326,
                    attribution: "Map data &copy; REDIAM",
                    label: "Inventario VVPP",
                    zIndex: 16
                }] 
            }]
        }]
    },{
        type: "folder",
        label: "Capas WFS",
        layers: [{
            type: "SMC.layers.markers.WFSMarkerLayer",
            params: [{
                serverURL: "http://www.ideandalucia.es/dea100/wfs",
                typeName: "ideandalucia:it03_aeropuerto_pun",
                label: "Prueba WFS",
                outputFormat: "json"
            }]
        }]
    }];
    map.loadLayers(tree);
}
window.onload = initMap;