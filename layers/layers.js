var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Intervenciones_1 = new ol.format.GeoJSON();
var features_Intervenciones_1 = format_Intervenciones_1.readFeatures(json_Intervenciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intervenciones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intervenciones_1.addFeatures(features_Intervenciones_1);
var lyr_Intervenciones_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intervenciones_1, 
                style: style_Intervenciones_1,
                popuplayertitle: 'Intervenciones',
                interactive: true,
                title: '<img src="styles/legend/Intervenciones_1.png" /> Intervenciones'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Intervenciones_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Intervenciones_1];
lyr_Intervenciones_1.set('fieldAliases', {'Monto_Proy': 'Monto_Proy', 'Tipo_de_In': 'Tipo_de_In', 'Sector': 'Sector', 'Nombre_Pro': 'Nombre_Pro', 'Ubicacion': 'Ubicacion', 'Resolucion': 'Resolucion', 'Nivel_Prio': 'Nivel_Prio', 'Descripcio': 'Descripcio', 'Imagen': 'Imagen', });
lyr_Intervenciones_1.set('fieldImages', {'Monto_Proy': 'TextEdit', 'Tipo_de_In': 'TextEdit', 'Sector': 'TextEdit', 'Nombre_Pro': 'TextEdit', 'Ubicacion': 'TextEdit', 'Resolucion': 'TextEdit', 'Nivel_Prio': 'TextEdit', 'Descripcio': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Intervenciones_1.set('fieldLabels', {'Monto_Proy': 'no label', 'Tipo_de_In': 'no label', 'Sector': 'no label', 'Nombre_Pro': 'no label', 'Ubicacion': 'no label', 'Resolucion': 'no label', 'Nivel_Prio': 'no label', 'Descripcio': 'no label', 'Imagen': 'no label', });
lyr_Intervenciones_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});