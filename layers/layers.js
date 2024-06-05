ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7851").setExtent([491438.907379, 8068827.092641, 500345.629204, 8078117.046354]);
var wms_layers = [];

var lyr_SiteImageMay2024_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Site Image May 2024",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SiteImageMay2024_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686318.745659, -1973799.047661, 13690974.580305, -1969212.879783]
                            })
                        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_dmu_mining_blocks_2 = new ol.format.GeoJSON();
var features_dmu_mining_blocks_2 = format_dmu_mining_blocks_2.readFeatures(json_dmu_mining_blocks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_dmu_mining_blocks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dmu_mining_blocks_2.addFeatures(features_dmu_mining_blocks_2);
var lyr_dmu_mining_blocks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dmu_mining_blocks_2, 
                style: style_dmu_mining_blocks_2,
                popuplayertitle: "dmu_mining_blocks",
                interactive: true,
    title: 'dmu_mining_blocks<br />\
    <img src="styles/legend/dmu_mining_blocks_2_0.png" /> 25/03/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_1.png" /> 29/03/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_2.png" /> 2/04/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_3.png" /> 25/04/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_4.png" /> 5/05/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_5.png" /> 25/05/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_6.png" /> 7/06/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_7.png" /> 25/06/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_8.png" /> 10/07/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_9.png" /> 25/07/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_10.png" /> 12/08/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_11.png" /> 2024-08-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_12.png" /> 14/09/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_13.png" /> 2024-09-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_14.png" /> 17/10/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_15.png" /> 2024-10-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_16.png" /> 17/11/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_17.png" /> 19/11/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_18.png" /> 2024-11-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_19.png" /> 20/12/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_20.png" /> 25/12/2024<br />\
    <img src="styles/legend/dmu_mining_blocks_2_21.png" /> 22/01/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_22.png" /> 24/01/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_23.png" /> 2025-01-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_24.png" /> 24/02/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_25.png" /> 2025-02-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_26.png" /> 26/02/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_27.png" /> 2025-03-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_28.png" /> 31/03/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_29.png" /> 2025-04-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_30.png" /> 3/05/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_31.png" /> 2025-05-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_32.png" /> 3/06/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_33.png" /> 5/06/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_34.png" /> 2025-06-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_35.png" /> 8/07/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_36.png" /> 2025-07-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_37.png" /> 2025-08-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_38.png" /> 10/09/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_39.png" /> 2025-09-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_40.png" /> 13/10/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_41.png" /> 2025-10-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_42.png" /> 15/11/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_43.png" /> 2025-11-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_44.png" /> 18/12/2025<br />\
    <img src="styles/legend/dmu_mining_blocks_2_45.png" /> 2025-12-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_46.png" /> 20/01/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_47.png" /> 2026-01-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_48.png" /> 22/02/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_49.png" /> 2026-02-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_50.png" /> 2026-03-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_51.png" /> 27/03/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_52.png" /> 2026-04-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_53.png" /> 29/04/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_54.png" /> 2026-05-25<br />\
    <img src="styles/legend/dmu_mining_blocks_2_55.png" /> 1/06/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_56.png" /> 4/07/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_57.png" /> 6/08/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_58.png" /> 8/09/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_59.png" /> 11/10/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_60.png" /> 13/11/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_61.png" /> 16/12/2026<br />\
    <img src="styles/legend/dmu_mining_blocks_2_62.png" /> 18/01/2027<br />\
    <img src="styles/legend/dmu_mining_blocks_2_63.png" /> 20/02/2027<br />\
    <img src="styles/legend/dmu_mining_blocks_2_64.png" /> 25/03/2027<br />\
    <img src="styles/legend/dmu_mining_blocks_2_65.png" /> 27/04/2027<br />\
    <img src="styles/legend/dmu_mining_blocks_2_66.png" /> 30/05/2027<br />\
    <img src="styles/legend/dmu_mining_blocks_2_67.png" /> 2/07/2027<br />\
    <img src="styles/legend/dmu_mining_blocks_2_68.png" /> 4/07/2027<br />'
        });

lyr_SiteImageMay2024_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_dmu_mining_blocks_2.setVisible(true);
var layersList = [lyr_SiteImageMay2024_0,lyr_GoogleSatellite_1,lyr_dmu_mining_blocks_2];
lyr_dmu_mining_blocks_2.set('fieldAliases', {'id': 'id', 'block_number': 'block_number', 'layer': 'layer', 'date': 'date', 'label': 'label', });
lyr_dmu_mining_blocks_2.set('fieldImages', {'id': 'TextEdit', 'block_number': 'TextEdit', 'layer': 'TextEdit', 'date': 'DateTime', 'label': 'TextEdit', });
lyr_dmu_mining_blocks_2.set('fieldLabels', {'id': 'no label', 'block_number': 'no label', 'layer': 'no label', 'date': 'no label', 'label': 'no label', });
lyr_dmu_mining_blocks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});