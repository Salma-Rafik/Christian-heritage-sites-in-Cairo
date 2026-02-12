var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'القاهرة',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> القاهرة'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'الأقسام',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> الأقسام'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'الطرق',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> الطرق'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'نهر النيل',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> نهر النيل'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'المناطق التراثية',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> المناطق التراثية'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_ا': 'اسم_ا', 'المنط': 'المنط', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'اسم__1': 'اسم__1', });
lyr__2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'CODE': 'CODE', 'A_Name': 'A_Name', 'E_Name': 'E_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr__3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Arabic_Nam': 'Arabic_Nam', 'E_Name': 'E_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr__4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'name': 'name', 'descriptio': 'descriptio', 'Images': 'Images', });
lyr__0.set('fieldImages', {'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr__1.set('fieldImages', {'OBJECTID': 'Range', 'اسم_ا': 'TextEdit', 'المنط': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'اسم__1': 'TextEdit', });
lyr__2.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'TYPE': 'TextEdit', 'CODE': 'TextEdit', 'A_Name': 'TextEdit', 'E_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr__3.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'Arabic_Nam': 'TextEdit', 'E_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__4.set('fieldImages', {'OBJECTID': 'Range', 'id': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'Images': 'TextEdit', });
lyr__0.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_ا': 'inline label - always visible', 'المنط': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'اسم__1': 'no label', });
lyr__2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'TYPE': 'no label', 'CODE': 'no label', 'A_Name': 'no label', 'E_Name': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr__3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Arabic_Nam': 'no label', 'E_Name': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr__4.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'name': 'inline label - always visible', 'descriptio': 'no label', 'Images': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});