var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KL_Wards_1 = new ol.format.GeoJSON();
var features_KL_Wards_1 = format_KL_Wards_1.readFeatures(json_KL_Wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KL_Wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KL_Wards_1.addFeatures(features_KL_Wards_1);
var lyr_KL_Wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KL_Wards_1, 
                style: style_KL_Wards_1,
                popuplayertitle: 'KL_Wards',
                interactive: true,
    title: 'KL_Wards<br />\
    <img src="styles/legend/KL_Wards_1_0.png" /> AYYAPPURAM WEST<br />\
    <img src="styles/legend/KL_Wards_1_1.png" /> AYYAPURAM EAST<br />\
    <img src="styles/legend/KL_Wards_1_2.png" /> CHIRAKKAD<br />\
    <img src="styles/legend/KL_Wards_1_3.png" /> CIVIL STATION<br />\
    <img src="styles/legend/KL_Wards_1_4.png" /> JAINMEDU<br />\
    <img src="styles/legend/KL_Wards_1_5.png" /> KAIKUTTYPARAMBU<br />\
    <img src="styles/legend/KL_Wards_1_6.png" /> KALLEPULLY NORTH<br />\
    <img src="styles/legend/KL_Wards_1_7.png" /> KALLEPULLY SOUTH<br />\
    <img src="styles/legend/KL_Wards_1_8.png" /> KALLIKKAD<br />\
    <img src="styles/legend/KL_Wards_1_9.png" /> KALPATHY<br />\
    <img src="styles/legend/KL_Wards_1_10.png" /> KALPATHY EAST<br />\
    <img src="styles/legend/KL_Wards_1_11.png" /> KARNAKI NAGAR WEST<br />\
    <img src="styles/legend/KL_Wards_1_12.png" /> KENATHPARAMBU<br />\
    <img src="styles/legend/KL_Wards_1_13.png" /> KOPPAM<br />\
    <img src="styles/legend/KL_Wards_1_14.png" /> KOTTAMAIDAN<br />\
    <img src="styles/legend/KL_Wards_1_15.png" /> KUMARAPURAM<br />\
    <img src="styles/legend/KL_Wards_1_16.png" /> KUNNATHURMEDU NORTH<br />\
    <img src="styles/legend/KL_Wards_1_17.png" /> KUNNATHURMEDU SOUTH<br />\
    <img src="styles/legend/KL_Wards_1_18.png" /> KUNNUMPURAM<br />\
    <img src="styles/legend/KL_Wards_1_19.png" /> MANAPULLYKAVU<br />\
    <img src="styles/legend/KL_Wards_1_20.png" /> MANKAVU<br />\
    <img src="styles/legend/KL_Wards_1_21.png" /> MATTUMANDHA<br />\
    <img src="styles/legend/KL_Wards_1_22.png" /> MELAMURI<br />\
    <img src="styles/legend/KL_Wards_1_23.png" /> MEPARAMBU<br />\
    <img src="styles/legend/KL_Wards_1_24.png" /> MURIKKAVE<br />\
    <img src="styles/legend/KL_Wards_1_25.png" /> MURUKANI<br />\
    <img src="styles/legend/KL_Wards_1_26.png" /> NARIKUTHY<br />\
    <img src="styles/legend/KL_Wards_1_27.png" /> NURANI<br />\
    <img src="styles/legend/KL_Wards_1_28.png" /> OLAVAKKODE CENTRAL<br />\
    <img src="styles/legend/KL_Wards_1_29.png" /> OLAVAKKODE SOUTH<br />\
    <img src="styles/legend/KL_Wards_1_30.png" /> OTHUNGODE<br />\
    <img src="styles/legend/KL_Wards_1_31.png" /> PALLIPURAM<br />\
    <img src="styles/legend/KL_Wards_1_32.png" /> PARAKKUNNAM<br />\
    <img src="styles/legend/KL_Wards_1_33.png" /> PATTIKKARA<br />\
    <img src="styles/legend/KL_Wards_1_34.png" /> PUTHUPPALLYTHERUVU EAST<br />\
    <img src="styles/legend/KL_Wards_1_35.png" /> PUTHUR NORTH<br />\
    <img src="styles/legend/KL_Wards_1_36.png" /> PUTHUR SOUTH<br />\
    <img src="styles/legend/KL_Wards_1_37.png" /> SEKARIPURAM<br />\
    <img src="styles/legend/KL_Wards_1_38.png" /> SELVAPALAYAM<br />\
    <img src="styles/legend/KL_Wards_1_39.png" /> SREERAMAPALAYAM<br />\
    <img src="styles/legend/KL_Wards_1_40.png" /> SULTANPETA<br />\
    <img src="styles/legend/KL_Wards_1_41.png" /> THIRUNELLAY EAST<br />\
    <img src="styles/legend/KL_Wards_1_42.png" /> THIRUNELLAY WEST<br />\
    <img src="styles/legend/KL_Wards_1_43.png" /> THONIPALAYAM<br />\
    <img src="styles/legend/KL_Wards_1_44.png" /> VADAKKANTHARA<br />\
    <img src="styles/legend/KL_Wards_1_45.png" /> VADAKKANTHARA EAST<br />\
    <img src="styles/legend/KL_Wards_1_46.png" /> VADAKKUMURI<br />\
    <img src="styles/legend/KL_Wards_1_47.png" /> VALIYAPADAM<br />\
    <img src="styles/legend/KL_Wards_1_48.png" /> VENNAKARA CENTRAL<br />\
    <img src="styles/legend/KL_Wards_1_49.png" /> VENNAKARA SOUTH<br />\
    <img src="styles/legend/KL_Wards_1_50.png" /> VITHUNNY<br />\
    <img src="styles/legend/KL_Wards_1_51.png" /> WEST YAKKARA<br />\
    <img src="styles/legend/KL_Wards_1_52.png" /> YAKKARA CENTRAL<br />\
    <img src="styles/legend/KL_Wards_1_53.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KL_Wards_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KL_Wards_1];
lyr_KL_Wards_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_KL_Wards_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_KL_Wards_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_KL_Wards_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});