var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_20240130_RGB_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "20240130_RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20240130_RGB_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686050.961985, -1973211.353674, 13695068.669474, -1969321.545041]
                            })
                        });
var format_FutureMiningBlocks_2 = new ol.format.GeoJSON();
var features_FutureMiningBlocks_2 = format_FutureMiningBlocks_2.readFeatures(json_FutureMiningBlocks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureMiningBlocks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureMiningBlocks_2.addFeatures(features_FutureMiningBlocks_2);
var lyr_FutureMiningBlocks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FutureMiningBlocks_2, 
                style: style_FutureMiningBlocks_2,
                interactive: true,
                title: '<img src="styles/legend/FutureMiningBlocks_2.png" /> Future Mining Blocks'
            });
var format_DisturbanceOutline_3 = new ol.format.GeoJSON();
var features_DisturbanceOutline_3 = format_DisturbanceOutline_3.readFeatures(json_DisturbanceOutline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DisturbanceOutline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_3.addFeatures(features_DisturbanceOutline_3);
var lyr_DisturbanceOutline_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DisturbanceOutline_3, 
                style: style_DisturbanceOutline_3,
                interactive: true,
                title: '<img src="styles/legend/DisturbanceOutline_3.png" /> Disturbance Outline'
            });
var format_dmu_mining_blocks_4 = new ol.format.GeoJSON();
var features_dmu_mining_blocks_4 = format_dmu_mining_blocks_4.readFeatures(json_dmu_mining_blocks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dmu_mining_blocks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dmu_mining_blocks_4.addFeatures(features_dmu_mining_blocks_4);
var lyr_dmu_mining_blocks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dmu_mining_blocks_4, 
                style: style_dmu_mining_blocks_4,
                interactive: true,
                title: '<img src="styles/legend/dmu_mining_blocks_4.png" /> dmu_mining_blocks'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_20240130_RGB_1.setVisible(true);lyr_FutureMiningBlocks_2.setVisible(true);lyr_DisturbanceOutline_3.setVisible(true);lyr_dmu_mining_blocks_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_20240130_RGB_1,lyr_FutureMiningBlocks_2,lyr_DisturbanceOutline_3,lyr_dmu_mining_blocks_4];
lyr_FutureMiningBlocks_2.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_DisturbanceOutline_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'name': 'name', 'land use': 'land use', 'description': 'description', 'tenement': 'tenement', 'date cleared': 'date cleared', 'mrf category': 'mrf category', 'permit number': 'permit number', 'area (ha)': 'area (ha)', 'layer': 'layer', 'path': 'path', });
lyr_dmu_mining_blocks_4.set('fieldAliases', {'id': 'id', 'block_id': 'block_id', 'finish_dat': 'finish_dat', 'Finish Date': 'Finish Date', 'Block Lable': 'Block Lable', });
lyr_FutureMiningBlocks_2.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DisturbanceOutline_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'name': 'TextEdit', 'land use': 'TextEdit', 'description': 'TextEdit', 'tenement': 'TextEdit', 'date cleared': 'DateTime', 'mrf category': 'TextEdit', 'permit number': 'TextEdit', 'area (ha)': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_dmu_mining_blocks_4.set('fieldImages', {'id': 'TextEdit', 'block_id': 'TextEdit', 'finish_dat': 'DateTime', 'Finish Date': 'TextEdit', 'Block Lable': 'TextEdit', });
lyr_FutureMiningBlocks_2.set('fieldLabels', {'id': 'hidden field', 'fid': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_DisturbanceOutline_3.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'name': 'no label', 'land use': 'no label', 'description': 'no label', 'tenement': 'no label', 'date cleared': 'no label', 'mrf category': 'no label', 'permit number': 'no label', 'area (ha)': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_dmu_mining_blocks_4.set('fieldLabels', {'id': 'hidden field', 'block_id': 'header label - always visible', 'finish_dat': 'hidden field', 'Finish Date': 'header label - always visible', 'Block Lable': 'hidden field', });
lyr_dmu_mining_blocks_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});