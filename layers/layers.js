var wms_layers = [];

var format___0 = new ol.format.GeoJSON();
var features___0 = format___0.readFeatures(json___0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___0.addFeatures(features___0);
var lyr___0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___0, 
                style: style___0,
                popuplayertitle: 'محافظة_القاهرة',
                interactive: true,
                title: '<img src="styles/legend/__0.png" /> محافظة_القاهرة'
            });

lyr___0.setVisible(true);
var layersList = [lyr___0];
lyr___0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr___0.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr___0.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr___0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});