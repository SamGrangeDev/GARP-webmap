var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ActivityZones_2 = new ol.format.GeoJSON();
var features_ActivityZones_2 = format_ActivityZones_2.readFeatures(json_ActivityZones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActivityZones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActivityZones_2.addFeatures(features_ActivityZones_2);
var lyr_ActivityZones_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActivityZones_2, 
                style: style_ActivityZones_2,
                popuplayertitle: 'Activity Zones',
                interactive: false,
    title: 'Activity Zones<br />\
    <img src="styles/legend/ActivityZones_2_0.png" /> Local Activity Centre<br />\
    <img src="styles/legend/ActivityZones_2_1.png" /> Suburban Activity Centre<br />\
    <img src="styles/legend/ActivityZones_2_2.png" /> Suburban Main Street<br />\
    <img src="styles/legend/ActivityZones_2_3.png" /> Urban Activity Centre<br />\
    <img src="styles/legend/ActivityZones_2_4.png" /> Urban Corridor (Main Street)<br />' });
var format_CapitalCityZones_3 = new ol.format.GeoJSON();
var features_CapitalCityZones_3 = format_CapitalCityZones_3.readFeatures(json_CapitalCityZones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapitalCityZones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapitalCityZones_3.addFeatures(features_CapitalCityZones_3);
var lyr_CapitalCityZones_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapitalCityZones_3, 
                style: style_CapitalCityZones_3,
                popuplayertitle: 'Capital City Zones',
                interactive: false,
    title: 'Capital City Zones<br />\
    <img src="styles/legend/CapitalCityZones_3_0.png" /> Adelaide Park Lands Zone<br />\
    <img src="styles/legend/CapitalCityZones_3_1.png" /> Capital City<br />\
    <img src="styles/legend/CapitalCityZones_3_2.png" /> City Living<br />\
    <img src="styles/legend/CapitalCityZones_3_3.png" /> City Main Street<br />\
    <img src="styles/legend/CapitalCityZones_3_4.png" /> City Riverbank<br />' });
var format_EmploymentZones_4 = new ol.format.GeoJSON();
var features_EmploymentZones_4 = format_EmploymentZones_4.readFeatures(json_EmploymentZones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmploymentZones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmploymentZones_4.addFeatures(features_EmploymentZones_4);
var lyr_EmploymentZones_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmploymentZones_4, 
                style: style_EmploymentZones_4,
                popuplayertitle: 'Employment Zones',
                interactive: false,
    title: 'Employment Zones<br />\
    <img src="styles/legend/EmploymentZones_4_0.png" /> Employment<br />\
    <img src="styles/legend/EmploymentZones_4_1.png" /> Employment (Bulk Handling)<br />\
    <img src="styles/legend/EmploymentZones_4_2.png" /> Employment (Enterprise)<br />\
    <img src="styles/legend/EmploymentZones_4_3.png" /> Resource Extraction<br />\
    <img src="styles/legend/EmploymentZones_4_4.png" /> Strategic Employment<br />\
    <img src="styles/legend/EmploymentZones_4_5.png" /> Strategic Innovation<br />\
    <img src="styles/legend/EmploymentZones_4_6.png" /> Suburban Business<br />' });
var format_InfrastructureZones_5 = new ol.format.GeoJSON();
var features_InfrastructureZones_5 = format_InfrastructureZones_5.readFeatures(json_InfrastructureZones_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastructureZones_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastructureZones_5.addFeatures(features_InfrastructureZones_5);
var lyr_InfrastructureZones_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastructureZones_5, 
                style: style_InfrastructureZones_5,
                popuplayertitle: 'Infrastructure Zones',
                interactive: false,
    title: 'Infrastructure Zones<br />\
    <img src="styles/legend/InfrastructureZones_5_0.png" /> Commonwealth Facilities<br />\
    <img src="styles/legend/InfrastructureZones_5_1.png" /> Community Facilities<br />\
    <img src="styles/legend/InfrastructureZones_5_2.png" /> Infrastructure<br />\
    <img src="styles/legend/InfrastructureZones_5_3.png" /> Infrastructure (Airfield)<br />\
    <img src="styles/legend/InfrastructureZones_5_4.png" /> Infrastructure (Ferry and Marina Facilities)<br />' });
var format_NaturalResourcesandEnvironmentZones_6 = new ol.format.GeoJSON();
var features_NaturalResourcesandEnvironmentZones_6 = format_NaturalResourcesandEnvironmentZones_6.readFeatures(json_NaturalResourcesandEnvironmentZones_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NaturalResourcesandEnvironmentZones_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalResourcesandEnvironmentZones_6.addFeatures(features_NaturalResourcesandEnvironmentZones_6);
var lyr_NaturalResourcesandEnvironmentZones_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalResourcesandEnvironmentZones_6, 
                style: style_NaturalResourcesandEnvironmentZones_6,
                popuplayertitle: 'Natural Resources and Environment Zones',
                interactive: false,
    title: 'Natural Resources and Environment Zones<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_6_0.png" /> Coastal Waters and Offshore Islands<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_6_1.png" /> Conservation<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_6_2.png" /> Hills Face<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_6_3.png" /> Open Space<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_6_4.png" /> Recreation<br />' });
var format_NeighbourhoodandCorridorZones_7 = new ol.format.GeoJSON();
var features_NeighbourhoodandCorridorZones_7 = format_NeighbourhoodandCorridorZones_7.readFeatures(json_NeighbourhoodandCorridorZones_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeighbourhoodandCorridorZones_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeighbourhoodandCorridorZones_7.addFeatures(features_NeighbourhoodandCorridorZones_7);
var lyr_NeighbourhoodandCorridorZones_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeighbourhoodandCorridorZones_7, 
                style: style_NeighbourhoodandCorridorZones_7,
                popuplayertitle: 'Neighbourhood and Corridor Zones',
                interactive: false,
    title: 'Neighbourhood and Corridor Zones<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_0.png" /> Business Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_1.png" /> Established Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_2.png" /> General Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_3.png" /> Golf Course Estate<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_4.png" /> Hills Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_5.png" /> Home Industry<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_6.png" /> Housing Diversity Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_7.png" /> Master Planned Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_8.png" /> Master Planned Renewal<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_9.png" /> Master Planned Township<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_10.png" /> Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_11.png" /> Residential Park<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_12.png" /> Rural Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_13.png" /> Suburban Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_14.png" /> Township Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_15.png" /> Urban Corridor (Boulevard)<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_16.png" /> Urban Corridor (Business)<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_17.png" /> Urban Corridor (Living)<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_18.png" /> Urban Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_19.png" /> Urban Renewal Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_7_20.png" /> Waterfront Neighbourhood<br />' });
var format_RuralZones_8 = new ol.format.GeoJSON();
var features_RuralZones_8 = format_RuralZones_8.readFeatures(json_RuralZones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralZones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralZones_8.addFeatures(features_RuralZones_8);
var lyr_RuralZones_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralZones_8, 
                style: style_RuralZones_8,
                popuplayertitle: 'Rural Zones',
                interactive: false,
    title: 'Rural Zones<br />\
    <img src="styles/legend/RuralZones_8_0.png" /> Deferred Urban<br />\
    <img src="styles/legend/RuralZones_8_1.png" /> Productive Rural Landscape<br />\
    <img src="styles/legend/RuralZones_8_2.png" /> Remote Areas<br />\
    <img src="styles/legend/RuralZones_8_3.png" /> Rural<br />\
    <img src="styles/legend/RuralZones_8_4.png" /> Rural Aquaculture<br />\
    <img src="styles/legend/RuralZones_8_5.png" /> Rural Horticulture<br />\
    <img src="styles/legend/RuralZones_8_6.png" /> Rural Intensive Enterprise<br />' });
var format_TourismZones_9 = new ol.format.GeoJSON();
var features_TourismZones_9 = format_TourismZones_9.readFeatures(json_TourismZones_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TourismZones_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TourismZones_9.addFeatures(features_TourismZones_9);
var lyr_TourismZones_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TourismZones_9, 
                style: style_TourismZones_9,
                popuplayertitle: 'Tourism Zones',
                interactive: false,
    title: 'Tourism Zones<br />\
    <img src="styles/legend/TourismZones_9_0.png" /> Caravan and Tourist Park<br />\
    <img src="styles/legend/TourismZones_9_1.png" /> Motorsport Park<br />\
    <img src="styles/legend/TourismZones_9_2.png" /> Tourism Development<br />' });
var format_TownshipandSettlementZones_10 = new ol.format.GeoJSON();
var features_TownshipandSettlementZones_10 = format_TownshipandSettlementZones_10.readFeatures(json_TownshipandSettlementZones_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TownshipandSettlementZones_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownshipandSettlementZones_10.addFeatures(features_TownshipandSettlementZones_10);
var lyr_TownshipandSettlementZones_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TownshipandSettlementZones_10, 
                style: style_TownshipandSettlementZones_10,
                popuplayertitle: 'Township and Settlement Zones',
                interactive: false,
    title: 'Township and Settlement Zones<br />\
    <img src="styles/legend/TownshipandSettlementZones_10_0.png" /> Rural Living<br />\
    <img src="styles/legend/TownshipandSettlementZones_10_1.png" /> Rural Settlement<br />\
    <img src="styles/legend/TownshipandSettlementZones_10_2.png" /> Rural Shack Settlement<br />\
    <img src="styles/legend/TownshipandSettlementZones_10_3.png" /> Township<br />\
    <img src="styles/legend/TownshipandSettlementZones_10_4.png" /> Township Activity Centre<br />\
    <img src="styles/legend/TownshipandSettlementZones_10_5.png" /> Township Main Street<br />\
    <img src="styles/legend/TownshipandSettlementZones_10_6.png" /> Workers Settlement<br />' });
var format_AirportsandAirfields_11 = new ol.format.GeoJSON();
var features_AirportsandAirfields_11 = format_AirportsandAirfields_11.readFeatures(json_AirportsandAirfields_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportsandAirfields_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportsandAirfields_11.addFeatures(features_AirportsandAirfields_11);
var lyr_AirportsandAirfields_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirportsandAirfields_11, 
                style: style_AirportsandAirfields_11,
                popuplayertitle: 'Airports and Airfields',
                interactive: false,
                title: '<img src="styles/legend/AirportsandAirfields_11.png" /> Airports and Airfields'
            });
var format_Seaport_12 = new ol.format.GeoJSON();
var features_Seaport_12 = format_Seaport_12.readFeatures(json_Seaport_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seaport_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seaport_12.addFeatures(features_Seaport_12);
var lyr_Seaport_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seaport_12, 
                style: style_Seaport_12,
                popuplayertitle: 'Seaport',
                interactive: false,
                title: '<img src="styles/legend/Seaport_12.png" /> Seaport'
            });
var format_ExistingMajorTransportRoutes_13 = new ol.format.GeoJSON();
var features_ExistingMajorTransportRoutes_13 = format_ExistingMajorTransportRoutes_13.readFeatures(json_ExistingMajorTransportRoutes_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingMajorTransportRoutes_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingMajorTransportRoutes_13.addFeatures(features_ExistingMajorTransportRoutes_13);
var lyr_ExistingMajorTransportRoutes_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingMajorTransportRoutes_13, 
                style: style_ExistingMajorTransportRoutes_13,
                popuplayertitle: 'Existing Major Transport Routes',
                interactive: false,
                title: '<img src="styles/legend/ExistingMajorTransportRoutes_13.png" /> Existing Major Transport Routes'
            });
var format_BusRoutesPublicTransport_14 = new ol.format.GeoJSON();
var features_BusRoutesPublicTransport_14 = format_BusRoutesPublicTransport_14.readFeatures(json_BusRoutesPublicTransport_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusRoutesPublicTransport_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusRoutesPublicTransport_14.addFeatures(features_BusRoutesPublicTransport_14);
var lyr_BusRoutesPublicTransport_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusRoutesPublicTransport_14, 
                style: style_BusRoutesPublicTransport_14,
                popuplayertitle: 'Bus Routes Public Transport',
                interactive: false,
                title: '<img src="styles/legend/BusRoutesPublicTransport_14.png" /> Bus Routes Public Transport'
            });
var format_PotentialGreaterAdelaideFreightBypass_15 = new ol.format.GeoJSON();
var features_PotentialGreaterAdelaideFreightBypass_15 = format_PotentialGreaterAdelaideFreightBypass_15.readFeatures(json_PotentialGreaterAdelaideFreightBypass_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialGreaterAdelaideFreightBypass_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialGreaterAdelaideFreightBypass_15.addFeatures(features_PotentialGreaterAdelaideFreightBypass_15);
var lyr_PotentialGreaterAdelaideFreightBypass_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotentialGreaterAdelaideFreightBypass_15, 
                style: style_PotentialGreaterAdelaideFreightBypass_15,
                popuplayertitle: 'Potential Greater Adelaide Freight Bypass',
                interactive: false,
                title: '<img src="styles/legend/PotentialGreaterAdelaideFreightBypass_15.png" /> Potential Greater Adelaide Freight Bypass'
            });
var format_ExistingRailwayCorridors_16 = new ol.format.GeoJSON();
var features_ExistingRailwayCorridors_16 = format_ExistingRailwayCorridors_16.readFeatures(json_ExistingRailwayCorridors_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingRailwayCorridors_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingRailwayCorridors_16.addFeatures(features_ExistingRailwayCorridors_16);
var lyr_ExistingRailwayCorridors_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingRailwayCorridors_16, 
                style: style_ExistingRailwayCorridors_16,
                popuplayertitle: 'Existing Railway Corridors',
                interactive: false,
                title: '<img src="styles/legend/ExistingRailwayCorridors_16.png" /> Existing Railway Corridors'
            });
var format_TransportInvestigations_17 = new ol.format.GeoJSON();
var features_TransportInvestigations_17 = format_TransportInvestigations_17.readFeatures(json_TransportInvestigations_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportInvestigations_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportInvestigations_17.addFeatures(features_TransportInvestigations_17);
var lyr_TransportInvestigations_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportInvestigations_17, 
                style: style_TransportInvestigations_17,
                popuplayertitle: 'Transport Investigations',
                interactive: false,
                title: '<img src="styles/legend/TransportInvestigations_17.png" /> Transport Investigations'
            });
var format_NorthernParkLandsGreenCorridorLink_18 = new ol.format.GeoJSON();
var features_NorthernParkLandsGreenCorridorLink_18 = format_NorthernParkLandsGreenCorridorLink_18.readFeatures(json_NorthernParkLandsGreenCorridorLink_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthernParkLandsGreenCorridorLink_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthernParkLandsGreenCorridorLink_18.addFeatures(features_NorthernParkLandsGreenCorridorLink_18);
var lyr_NorthernParkLandsGreenCorridorLink_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthernParkLandsGreenCorridorLink_18, 
                style: style_NorthernParkLandsGreenCorridorLink_18,
                popuplayertitle: 'Northern Park Lands Green Corridor Link',
                interactive: false,
                title: '<img src="styles/legend/NorthernParkLandsGreenCorridorLink_18.png" /> Northern Park Lands Green Corridor Link'
            });
var format_LocalInfillInvestigationAreas_19 = new ol.format.GeoJSON();
var features_LocalInfillInvestigationAreas_19 = format_LocalInfillInvestigationAreas_19.readFeatures(json_LocalInfillInvestigationAreas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalInfillInvestigationAreas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalInfillInvestigationAreas_19.addFeatures(features_LocalInfillInvestigationAreas_19);
var lyr_LocalInfillInvestigationAreas_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalInfillInvestigationAreas_19, 
                style: style_LocalInfillInvestigationAreas_19,
                popuplayertitle: 'Local Infill Investigation Areas',
                interactive: false,
                title: '<img src="styles/legend/LocalInfillInvestigationAreas_19.png" /> Local Infill Investigation Areas'
            });
var format_StateSignificantInfillAreas_20 = new ol.format.GeoJSON();
var features_StateSignificantInfillAreas_20 = format_StateSignificantInfillAreas_20.readFeatures(json_StateSignificantInfillAreas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantInfillAreas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantInfillAreas_20.addFeatures(features_StateSignificantInfillAreas_20);
var lyr_StateSignificantInfillAreas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantInfillAreas_20, 
                style: style_StateSignificantInfillAreas_20,
                popuplayertitle: 'State Significant Infill Areas',
                interactive: false,
                title: '<img src="styles/legend/StateSignificantInfillAreas_20.png" /> State Significant Infill Areas'
            });
var format_FutureEmployment_21 = new ol.format.GeoJSON();
var features_FutureEmployment_21 = format_FutureEmployment_21.readFeatures(json_FutureEmployment_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureEmployment_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureEmployment_21.addFeatures(features_FutureEmployment_21);
var lyr_FutureEmployment_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureEmployment_21, 
                style: style_FutureEmployment_21,
                popuplayertitle: 'Future Employment',
                interactive: false,
                title: '<img src="styles/legend/FutureEmployment_21.png" /> Future Employment'
            });
var format_StateSignificantIndustrialEmploymentPrecinct_22 = new ol.format.GeoJSON();
var features_StateSignificantIndustrialEmploymentPrecinct_22 = format_StateSignificantIndustrialEmploymentPrecinct_22.readFeatures(json_StateSignificantIndustrialEmploymentPrecinct_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantIndustrialEmploymentPrecinct_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantIndustrialEmploymentPrecinct_22.addFeatures(features_StateSignificantIndustrialEmploymentPrecinct_22);
var lyr_StateSignificantIndustrialEmploymentPrecinct_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantIndustrialEmploymentPrecinct_22, 
                style: style_StateSignificantIndustrialEmploymentPrecinct_22,
                popuplayertitle: 'State Significant Industrial Employment Precinct',
                interactive: false,
                title: '<img src="styles/legend/StateSignificantIndustrialEmploymentPrecinct_22.png" /> State Significant Industrial Employment Precinct'
            });
var format_NationalEmploymentEconomicCluster_23 = new ol.format.GeoJSON();
var features_NationalEmploymentEconomicCluster_23 = format_NationalEmploymentEconomicCluster_23.readFeatures(json_NationalEmploymentEconomicCluster_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalEmploymentEconomicCluster_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalEmploymentEconomicCluster_23.addFeatures(features_NationalEmploymentEconomicCluster_23);
var lyr_NationalEmploymentEconomicCluster_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalEmploymentEconomicCluster_23, 
                style: style_NationalEmploymentEconomicCluster_23,
                popuplayertitle: 'National Employment (Economic) Cluster',
                interactive: false,
                title: '<img src="styles/legend/NationalEmploymentEconomicCluster_23.png" /> National Employment (Economic) Cluster'
            });
var format_PrimeIndustrialEmploymentPrecinct_24 = new ol.format.GeoJSON();
var features_PrimeIndustrialEmploymentPrecinct_24 = format_PrimeIndustrialEmploymentPrecinct_24.readFeatures(json_PrimeIndustrialEmploymentPrecinct_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimeIndustrialEmploymentPrecinct_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimeIndustrialEmploymentPrecinct_24.addFeatures(features_PrimeIndustrialEmploymentPrecinct_24);
var lyr_PrimeIndustrialEmploymentPrecinct_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimeIndustrialEmploymentPrecinct_24, 
                style: style_PrimeIndustrialEmploymentPrecinct_24,
                popuplayertitle: 'Prime Industrial Employment Precinct',
                interactive: false,
                title: '<img src="styles/legend/PrimeIndustrialEmploymentPrecinct_24.png" /> Prime Industrial Employment Precinct'
            });
var format_StateInnovationPlaces_25 = new ol.format.GeoJSON();
var features_StateInnovationPlaces_25 = format_StateInnovationPlaces_25.readFeatures(json_StateInnovationPlaces_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateInnovationPlaces_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateInnovationPlaces_25.addFeatures(features_StateInnovationPlaces_25);
var lyr_StateInnovationPlaces_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateInnovationPlaces_25, 
                style: style_StateInnovationPlaces_25,
                popuplayertitle: 'State Innovation Places',
                interactive: false,
                title: '<img src="styles/legend/StateInnovationPlaces_25.png" /> State Innovation Places'
            });
var format_FutureGreenfieldSupplyinEFPA_26 = new ol.format.GeoJSON();
var features_FutureGreenfieldSupplyinEFPA_26 = format_FutureGreenfieldSupplyinEFPA_26.readFeatures(json_FutureGreenfieldSupplyinEFPA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldSupplyinEFPA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldSupplyinEFPA_26.addFeatures(features_FutureGreenfieldSupplyinEFPA_26);
var lyr_FutureGreenfieldSupplyinEFPA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldSupplyinEFPA_26, 
                style: style_FutureGreenfieldSupplyinEFPA_26,
                popuplayertitle: 'Future Greenfield Supply - in EFPA',
                interactive: false,
                title: '<img src="styles/legend/FutureGreenfieldSupplyinEFPA_26.png" /> Future Greenfield Supply - in EFPA'
            });
var format_FutureGreenfieldGrowthArea_27 = new ol.format.GeoJSON();
var features_FutureGreenfieldGrowthArea_27 = format_FutureGreenfieldGrowthArea_27.readFeatures(json_FutureGreenfieldGrowthArea_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldGrowthArea_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldGrowthArea_27.addFeatures(features_FutureGreenfieldGrowthArea_27);
var lyr_FutureGreenfieldGrowthArea_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldGrowthArea_27, 
                style: style_FutureGreenfieldGrowthArea_27,
                popuplayertitle: 'Future Greenfield Growth Area',
                interactive: false,
                title: '<img src="styles/legend/FutureGreenfieldGrowthArea_27.png" /> Future Greenfield Growth Area'
            });
var format_NorthernParkLands_28 = new ol.format.GeoJSON();
var features_NorthernParkLands_28 = format_NorthernParkLands_28.readFeatures(json_NorthernParkLands_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthernParkLands_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthernParkLands_28.addFeatures(features_NorthernParkLands_28);
var lyr_NorthernParkLands_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthernParkLands_28, 
                style: style_NorthernParkLands_28,
                popuplayertitle: 'Northern Park Lands',
                interactive: false,
                title: '<img src="styles/legend/NorthernParkLands_28.png" /> Northern Park Lands'
            });
var format_InterUrbanBreaks_29 = new ol.format.GeoJSON();
var features_InterUrbanBreaks_29 = format_InterUrbanBreaks_29.readFeatures(json_InterUrbanBreaks_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InterUrbanBreaks_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InterUrbanBreaks_29.addFeatures(features_InterUrbanBreaks_29);
var lyr_InterUrbanBreaks_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InterUrbanBreaks_29, 
                style: style_InterUrbanBreaks_29,
                popuplayertitle: 'Inter-Urban Breaks',
                interactive: false,
                title: '<img src="styles/legend/InterUrbanBreaks_29.png" /> Inter-Urban Breaks'
            });
var format_OpenSpaceNetworkGreenSpace_30 = new ol.format.GeoJSON();
var features_OpenSpaceNetworkGreenSpace_30 = format_OpenSpaceNetworkGreenSpace_30.readFeatures(json_OpenSpaceNetworkGreenSpace_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenSpaceNetworkGreenSpace_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpaceNetworkGreenSpace_30.addFeatures(features_OpenSpaceNetworkGreenSpace_30);
var lyr_OpenSpaceNetworkGreenSpace_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpaceNetworkGreenSpace_30, 
                style: style_OpenSpaceNetworkGreenSpace_30,
                popuplayertitle: 'Open Space Network - Green Space',
                interactive: false,
                title: '<img src="styles/legend/OpenSpaceNetworkGreenSpace_30.png" /> Open Space Network - Green Space'
            });
var format_OpenSpaceNetworkGreenways_31 = new ol.format.GeoJSON();
var features_OpenSpaceNetworkGreenways_31 = format_OpenSpaceNetworkGreenways_31.readFeatures(json_OpenSpaceNetworkGreenways_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenSpaceNetworkGreenways_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpaceNetworkGreenways_31.addFeatures(features_OpenSpaceNetworkGreenways_31);
var lyr_OpenSpaceNetworkGreenways_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpaceNetworkGreenways_31, 
                style: style_OpenSpaceNetworkGreenways_31,
                popuplayertitle: 'Open Space Network - Greenways',
                interactive: false,
                title: '<img src="styles/legend/OpenSpaceNetworkGreenways_31.png" /> Open Space Network - Greenways'
            });
var format_OpenSpaceNetworkGreenways2_32 = new ol.format.GeoJSON();
var features_OpenSpaceNetworkGreenways2_32 = format_OpenSpaceNetworkGreenways2_32.readFeatures(json_OpenSpaceNetworkGreenways2_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenSpaceNetworkGreenways2_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpaceNetworkGreenways2_32.addFeatures(features_OpenSpaceNetworkGreenways2_32);
var lyr_OpenSpaceNetworkGreenways2_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpaceNetworkGreenways2_32, 
                style: style_OpenSpaceNetworkGreenways2_32,
                popuplayertitle: 'Open Space Network - Greenways 2',
                interactive: false,
                title: '<img src="styles/legend/OpenSpaceNetworkGreenways2_32.png" /> Open Space Network - Greenways 2'
            });
var format_CharacterPreservationDistrict_33 = new ol.format.GeoJSON();
var features_CharacterPreservationDistrict_33 = format_CharacterPreservationDistrict_33.readFeatures(json_CharacterPreservationDistrict_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharacterPreservationDistrict_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharacterPreservationDistrict_33.addFeatures(features_CharacterPreservationDistrict_33);
var lyr_CharacterPreservationDistrict_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharacterPreservationDistrict_33, 
                style: style_CharacterPreservationDistrict_33,
                popuplayertitle: 'Character Preservation District',
                interactive: false,
                title: '<img src="styles/legend/CharacterPreservationDistrict_33.png" /> Character Preservation District'
            });
var format_EnvironmentandFoodProductionArea_34 = new ol.format.GeoJSON();
var features_EnvironmentandFoodProductionArea_34 = format_EnvironmentandFoodProductionArea_34.readFeatures(json_EnvironmentandFoodProductionArea_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnvironmentandFoodProductionArea_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnvironmentandFoodProductionArea_34.addFeatures(features_EnvironmentandFoodProductionArea_34);
var lyr_EnvironmentandFoodProductionArea_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnvironmentandFoodProductionArea_34, 
                style: style_EnvironmentandFoodProductionArea_34,
                popuplayertitle: 'Environment and Food Production Area',
                interactive: false,
                title: '<img src="styles/legend/EnvironmentandFoodProductionArea_34.png" /> Environment and Food Production Area'
            });
var format_HillsFaceZone_35 = new ol.format.GeoJSON();
var features_HillsFaceZone_35 = format_HillsFaceZone_35.readFeatures(json_HillsFaceZone_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HillsFaceZone_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HillsFaceZone_35.addFeatures(features_HillsFaceZone_35);
var lyr_HillsFaceZone_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HillsFaceZone_35, 
                style: style_HillsFaceZone_35,
                popuplayertitle: 'Hills Face Zone',
                interactive: false,
                title: '<img src="styles/legend/HillsFaceZone_35.png" /> Hills Face Zone'
            });
var format_GARPLGA_36 = new ol.format.GeoJSON();
var features_GARPLGA_36 = format_GARPLGA_36.readFeatures(json_GARPLGA_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARPLGA_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARPLGA_36.addFeatures(features_GARPLGA_36);
var lyr_GARPLGA_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARPLGA_36, 
                style: style_GARPLGA_36,
                popuplayertitle: 'GARP-LGA',
                interactive: true,
                title: '<img src="styles/legend/GARPLGA_36.png" /> GARP-LGA'
            });
var format_Yankalilla_37 = new ol.format.GeoJSON();
var features_Yankalilla_37 = format_Yankalilla_37.readFeatures(json_Yankalilla_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yankalilla_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yankalilla_37.addFeatures(features_Yankalilla_37);
var lyr_Yankalilla_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yankalilla_37,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Yankalilla_37,
                popuplayertitle: 'Yankalilla',
                interactive: true,
                title: '<img src="styles/legend/Yankalilla_37.png" /> Yankalilla'
            });
var format_WestTorrens_38 = new ol.format.GeoJSON();
var features_WestTorrens_38 = format_WestTorrens_38.readFeatures(json_WestTorrens_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestTorrens_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestTorrens_38.addFeatures(features_WestTorrens_38);
var lyr_WestTorrens_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestTorrens_38,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_WestTorrens_38,
                popuplayertitle: 'West Torrens',
                interactive: true,
                title: '<img src="styles/legend/WestTorrens_38.png" /> West Torrens'
            });
var format_Walkerville_39 = new ol.format.GeoJSON();
var features_Walkerville_39 = format_Walkerville_39.readFeatures(json_Walkerville_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walkerville_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkerville_39.addFeatures(features_Walkerville_39);
var lyr_Walkerville_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walkerville_39,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Walkerville_39,
                popuplayertitle: 'Walkerville',
                interactive: true,
                title: '<img src="styles/legend/Walkerville_39.png" /> Walkerville'
            });
var format_VictorHarbor_40 = new ol.format.GeoJSON();
var features_VictorHarbor_40 = format_VictorHarbor_40.readFeatures(json_VictorHarbor_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictorHarbor_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictorHarbor_40.addFeatures(features_VictorHarbor_40);
var lyr_VictorHarbor_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VictorHarbor_40,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_VictorHarbor_40,
                popuplayertitle: 'Victor Harbor',
                interactive: true,
                title: '<img src="styles/legend/VictorHarbor_40.png" /> Victor Harbor'
            });
var format_Unley_41 = new ol.format.GeoJSON();
var features_Unley_41 = format_Unley_41.readFeatures(json_Unley_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unley_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unley_41.addFeatures(features_Unley_41);
var lyr_Unley_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unley_41,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Unley_41,
                popuplayertitle: 'Unley',
                interactive: true,
                title: '<img src="styles/legend/Unley_41.png" /> Unley'
            });
var format_TeaTreeGully_42 = new ol.format.GeoJSON();
var features_TeaTreeGully_42 = format_TeaTreeGully_42.readFeatures(json_TeaTreeGully_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TeaTreeGully_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeaTreeGully_42.addFeatures(features_TeaTreeGully_42);
var lyr_TeaTreeGully_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeaTreeGully_42,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_TeaTreeGully_42,
                popuplayertitle: 'Tea Tree Gully',
                interactive: true,
                title: '<img src="styles/legend/TeaTreeGully_42.png" /> Tea Tree Gully'
            });
var format_Salisbury_43 = new ol.format.GeoJSON();
var features_Salisbury_43 = format_Salisbury_43.readFeatures(json_Salisbury_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salisbury_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salisbury_43.addFeatures(features_Salisbury_43);
var lyr_Salisbury_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Salisbury_43,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Salisbury_43,
                popuplayertitle: 'Salisbury',
                interactive: true,
                title: '<img src="styles/legend/Salisbury_43.png" /> Salisbury'
            });
var format_Prospect_44 = new ol.format.GeoJSON();
var features_Prospect_44 = format_Prospect_44.readFeatures(json_Prospect_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prospect_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prospect_44.addFeatures(features_Prospect_44);
var lyr_Prospect_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prospect_44,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Prospect_44,
                popuplayertitle: 'Prospect',
                interactive: true,
                title: '<img src="styles/legend/Prospect_44.png" /> Prospect'
            });
var format_PortAdelaideEnfield_45 = new ol.format.GeoJSON();
var features_PortAdelaideEnfield_45 = format_PortAdelaideEnfield_45.readFeatures(json_PortAdelaideEnfield_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PortAdelaideEnfield_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortAdelaideEnfield_45.addFeatures(features_PortAdelaideEnfield_45);
var lyr_PortAdelaideEnfield_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortAdelaideEnfield_45,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_PortAdelaideEnfield_45,
                popuplayertitle: 'Port Adelaide Enfield',
                interactive: true,
                title: '<img src="styles/legend/PortAdelaideEnfield_45.png" /> Port Adelaide Enfield'
            });
var format_Playford_46 = new ol.format.GeoJSON();
var features_Playford_46 = format_Playford_46.readFeatures(json_Playford_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Playford_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Playford_46.addFeatures(features_Playford_46);
var lyr_Playford_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Playford_46,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Playford_46,
                popuplayertitle: 'Playford',
                interactive: true,
                title: '<img src="styles/legend/Playford_46.png" /> Playford'
            });
var format_Onkaparinga_47 = new ol.format.GeoJSON();
var features_Onkaparinga_47 = format_Onkaparinga_47.readFeatures(json_Onkaparinga_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Onkaparinga_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Onkaparinga_47.addFeatures(features_Onkaparinga_47);
var lyr_Onkaparinga_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Onkaparinga_47,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Onkaparinga_47,
                popuplayertitle: 'Onkaparinga',
                interactive: true,
                title: '<img src="styles/legend/Onkaparinga_47.png" /> Onkaparinga'
            });
var format_NorwoodPaynehamandStPeters_48 = new ol.format.GeoJSON();
var features_NorwoodPaynehamandStPeters_48 = format_NorwoodPaynehamandStPeters_48.readFeatures(json_NorwoodPaynehamandStPeters_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorwoodPaynehamandStPeters_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorwoodPaynehamandStPeters_48.addFeatures(features_NorwoodPaynehamandStPeters_48);
var lyr_NorwoodPaynehamandStPeters_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorwoodPaynehamandStPeters_48,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_NorwoodPaynehamandStPeters_48,
                popuplayertitle: 'Norwood Payneham and St Peters',
                interactive: true,
                title: '<img src="styles/legend/NorwoodPaynehamandStPeters_48.png" /> Norwood Payneham and St Peters'
            });
var format_MurrayBridge_49 = new ol.format.GeoJSON();
var features_MurrayBridge_49 = format_MurrayBridge_49.readFeatures(json_MurrayBridge_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurrayBridge_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurrayBridge_49.addFeatures(features_MurrayBridge_49);
var lyr_MurrayBridge_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurrayBridge_49,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_MurrayBridge_49,
                popuplayertitle: 'Murray Bridge',
                interactive: true,
                title: '<img src="styles/legend/MurrayBridge_49.png" /> Murray Bridge'
            });
var format_MountBarker_50 = new ol.format.GeoJSON();
var features_MountBarker_50 = format_MountBarker_50.readFeatures(json_MountBarker_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountBarker_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountBarker_50.addFeatures(features_MountBarker_50);
var lyr_MountBarker_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountBarker_50,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_MountBarker_50,
                popuplayertitle: 'Mount Barker',
                interactive: true,
                title: '<img src="styles/legend/MountBarker_50.png" /> Mount Barker'
            });
var format_Mitcham_51 = new ol.format.GeoJSON();
var features_Mitcham_51 = format_Mitcham_51.readFeatures(json_Mitcham_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mitcham_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mitcham_51.addFeatures(features_Mitcham_51);
var lyr_Mitcham_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mitcham_51,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Mitcham_51,
                popuplayertitle: 'Mitcham',
                interactive: true,
                title: '<img src="styles/legend/Mitcham_51.png" /> Mitcham'
            });
var format_Marion_52 = new ol.format.GeoJSON();
var features_Marion_52 = format_Marion_52.readFeatures(json_Marion_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marion_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marion_52.addFeatures(features_Marion_52);
var lyr_Marion_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marion_52,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Marion_52,
                popuplayertitle: 'Marion',
                interactive: true,
                title: '<img src="styles/legend/Marion_52.png" /> Marion'
            });
var format_Light_53 = new ol.format.GeoJSON();
var features_Light_53 = format_Light_53.readFeatures(json_Light_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Light_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Light_53.addFeatures(features_Light_53);
var lyr_Light_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Light_53,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Light_53,
                popuplayertitle: 'Light',
                interactive: true,
                title: '<img src="styles/legend/Light_53.png" /> Light'
            });
var format_HoldfastBay_54 = new ol.format.GeoJSON();
var features_HoldfastBay_54 = format_HoldfastBay_54.readFeatures(json_HoldfastBay_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HoldfastBay_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HoldfastBay_54.addFeatures(features_HoldfastBay_54);
var lyr_HoldfastBay_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HoldfastBay_54,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_HoldfastBay_54,
                popuplayertitle: 'Holdfast Bay',
                interactive: true,
                title: '<img src="styles/legend/HoldfastBay_54.png" /> Holdfast Bay'
            });
var format_Gawler_55 = new ol.format.GeoJSON();
var features_Gawler_55 = format_Gawler_55.readFeatures(json_Gawler_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gawler_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gawler_55.addFeatures(features_Gawler_55);
var lyr_Gawler_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gawler_55,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Gawler_55,
                popuplayertitle: 'Gawler',
                interactive: true,
                title: '<img src="styles/legend/Gawler_55.png" /> Gawler'
            });
var format_CharlesSturt_56 = new ol.format.GeoJSON();
var features_CharlesSturt_56 = format_CharlesSturt_56.readFeatures(json_CharlesSturt_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharlesSturt_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharlesSturt_56.addFeatures(features_CharlesSturt_56);
var lyr_CharlesSturt_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharlesSturt_56,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_CharlesSturt_56,
                popuplayertitle: 'Charles Sturt',
                interactive: true,
                title: '<img src="styles/legend/CharlesSturt_56.png" /> Charles Sturt'
            });
var format_CampbelltownSA_57 = new ol.format.GeoJSON();
var features_CampbelltownSA_57 = format_CampbelltownSA_57.readFeatures(json_CampbelltownSA_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampbelltownSA_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampbelltownSA_57.addFeatures(features_CampbelltownSA_57);
var lyr_CampbelltownSA_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CampbelltownSA_57,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_CampbelltownSA_57,
                popuplayertitle: 'Campbelltown (SA)',
                interactive: true,
                title: '<img src="styles/legend/CampbelltownSA_57.png" /> Campbelltown (SA)'
            });
var format_Burnside_58 = new ol.format.GeoJSON();
var features_Burnside_58 = format_Burnside_58.readFeatures(json_Burnside_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Burnside_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Burnside_58.addFeatures(features_Burnside_58);
var lyr_Burnside_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Burnside_58,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Burnside_58,
                popuplayertitle: 'Burnside',
                interactive: true,
                title: '<img src="styles/legend/Burnside_58.png" /> Burnside'
            });
var format_Barossa_59 = new ol.format.GeoJSON();
var features_Barossa_59 = format_Barossa_59.readFeatures(json_Barossa_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barossa_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barossa_59.addFeatures(features_Barossa_59);
var lyr_Barossa_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barossa_59,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Barossa_59,
                popuplayertitle: 'Barossa',
                interactive: true,
                title: '<img src="styles/legend/Barossa_59.png" /> Barossa'
            });
var format_Alexandrina_60 = new ol.format.GeoJSON();
var features_Alexandrina_60 = format_Alexandrina_60.readFeatures(json_Alexandrina_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alexandrina_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alexandrina_60.addFeatures(features_Alexandrina_60);
var lyr_Alexandrina_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alexandrina_60,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Alexandrina_60,
                popuplayertitle: 'Alexandrina',
                interactive: true,
                title: '<img src="styles/legend/Alexandrina_60.png" /> Alexandrina'
            });
var format_AdelaidePlains_61 = new ol.format.GeoJSON();
var features_AdelaidePlains_61 = format_AdelaidePlains_61.readFeatures(json_AdelaidePlains_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdelaidePlains_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdelaidePlains_61.addFeatures(features_AdelaidePlains_61);
var lyr_AdelaidePlains_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdelaidePlains_61,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_AdelaidePlains_61,
                popuplayertitle: 'Adelaide Plains',
                interactive: true,
                title: '<img src="styles/legend/AdelaidePlains_61.png" /> Adelaide Plains'
            });
var format_AdelaideHills_62 = new ol.format.GeoJSON();
var features_AdelaideHills_62 = format_AdelaideHills_62.readFeatures(json_AdelaideHills_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdelaideHills_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdelaideHills_62.addFeatures(features_AdelaideHills_62);
var lyr_AdelaideHills_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdelaideHills_62,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_AdelaideHills_62,
                popuplayertitle: 'Adelaide Hills',
                interactive: true,
                title: '<img src="styles/legend/AdelaideHills_62.png" /> Adelaide Hills'
            });
var format_Adelaide_63 = new ol.format.GeoJSON();
var features_Adelaide_63 = format_Adelaide_63.readFeatures(json_Adelaide_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adelaide_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adelaide_63.addFeatures(features_Adelaide_63);
var lyr_Adelaide_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adelaide_63,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Adelaide_63,
                popuplayertitle: 'Adelaide',
                interactive: true,
                title: '<img src="styles/legend/Adelaide_63.png" /> Adelaide'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_GARPLGA_36,lyr_Yankalilla_37,lyr_WestTorrens_38,lyr_Walkerville_39,lyr_VictorHarbor_40,lyr_Unley_41,lyr_TeaTreeGully_42,lyr_Salisbury_43,lyr_Prospect_44,lyr_PortAdelaideEnfield_45,lyr_Playford_46,lyr_Onkaparinga_47,lyr_NorwoodPaynehamandStPeters_48,lyr_MurrayBridge_49,lyr_MountBarker_50,lyr_Mitcham_51,lyr_Marion_52,lyr_Light_53,lyr_HoldfastBay_54,lyr_Gawler_55,lyr_CharlesSturt_56,lyr_CampbelltownSA_57,lyr_Burnside_58,lyr_Barossa_59,lyr_Alexandrina_60,lyr_AdelaidePlains_61,lyr_AdelaideHills_62,lyr_Adelaide_63,],
                                fold: "close",
                                title: 'Administrative'});
var group_GarpVisionMapElements = new ol.layer.Group({
                                layers: [lyr_AirportsandAirfields_11,lyr_Seaport_12,lyr_ExistingMajorTransportRoutes_13,lyr_BusRoutesPublicTransport_14,lyr_PotentialGreaterAdelaideFreightBypass_15,lyr_ExistingRailwayCorridors_16,lyr_TransportInvestigations_17,lyr_NorthernParkLandsGreenCorridorLink_18,lyr_LocalInfillInvestigationAreas_19,lyr_StateSignificantInfillAreas_20,lyr_FutureEmployment_21,lyr_StateSignificantIndustrialEmploymentPrecinct_22,lyr_NationalEmploymentEconomicCluster_23,lyr_PrimeIndustrialEmploymentPrecinct_24,lyr_StateInnovationPlaces_25,lyr_FutureGreenfieldSupplyinEFPA_26,lyr_FutureGreenfieldGrowthArea_27,lyr_NorthernParkLands_28,lyr_InterUrbanBreaks_29,lyr_OpenSpaceNetworkGreenSpace_30,lyr_OpenSpaceNetworkGreenways_31,lyr_OpenSpaceNetworkGreenways2_32,lyr_CharacterPreservationDistrict_33,lyr_EnvironmentandFoodProductionArea_34,lyr_HillsFaceZone_35,],
                                fold: "close",
                                title: 'Garp Vision Map Elements'});
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: 'group1'});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_ActivityZones_2,lyr_CapitalCityZones_3,lyr_EmploymentZones_4,lyr_InfrastructureZones_5,lyr_NaturalResourcesandEnvironmentZones_6,lyr_NeighbourhoodandCorridorZones_7,lyr_RuralZones_8,lyr_TourismZones_9,lyr_TownshipandSettlementZones_10,],
                                fold: "close",
                                title: 'Zoning'});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: 'NDH Deducted Overlays'});
var group_NotetoDueDiligenceOverlay = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: 'Note to Due Diligence Overlay'});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: 'Other Overlays'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_ActivityZones_2.setVisible(false);lyr_CapitalCityZones_3.setVisible(false);lyr_EmploymentZones_4.setVisible(false);lyr_InfrastructureZones_5.setVisible(false);lyr_NaturalResourcesandEnvironmentZones_6.setVisible(false);lyr_NeighbourhoodandCorridorZones_7.setVisible(false);lyr_RuralZones_8.setVisible(false);lyr_TourismZones_9.setVisible(false);lyr_TownshipandSettlementZones_10.setVisible(false);lyr_AirportsandAirfields_11.setVisible(true);lyr_Seaport_12.setVisible(true);lyr_ExistingMajorTransportRoutes_13.setVisible(false);lyr_BusRoutesPublicTransport_14.setVisible(false);lyr_PotentialGreaterAdelaideFreightBypass_15.setVisible(false);lyr_ExistingRailwayCorridors_16.setVisible(false);lyr_TransportInvestigations_17.setVisible(false);lyr_NorthernParkLandsGreenCorridorLink_18.setVisible(false);lyr_LocalInfillInvestigationAreas_19.setVisible(false);lyr_StateSignificantInfillAreas_20.setVisible(false);lyr_FutureEmployment_21.setVisible(false);lyr_StateSignificantIndustrialEmploymentPrecinct_22.setVisible(false);lyr_NationalEmploymentEconomicCluster_23.setVisible(false);lyr_PrimeIndustrialEmploymentPrecinct_24.setVisible(false);lyr_StateInnovationPlaces_25.setVisible(false);lyr_FutureGreenfieldSupplyinEFPA_26.setVisible(true);lyr_FutureGreenfieldGrowthArea_27.setVisible(true);lyr_NorthernParkLands_28.setVisible(false);lyr_InterUrbanBreaks_29.setVisible(false);lyr_OpenSpaceNetworkGreenSpace_30.setVisible(false);lyr_OpenSpaceNetworkGreenways_31.setVisible(false);lyr_OpenSpaceNetworkGreenways2_32.setVisible(false);lyr_CharacterPreservationDistrict_33.setVisible(false);lyr_EnvironmentandFoodProductionArea_34.setVisible(false);lyr_HillsFaceZone_35.setVisible(false);lyr_GARPLGA_36.setVisible(true);lyr_Yankalilla_37.setVisible(true);lyr_WestTorrens_38.setVisible(true);lyr_Walkerville_39.setVisible(true);lyr_VictorHarbor_40.setVisible(true);lyr_Unley_41.setVisible(true);lyr_TeaTreeGully_42.setVisible(true);lyr_Salisbury_43.setVisible(true);lyr_Prospect_44.setVisible(true);lyr_PortAdelaideEnfield_45.setVisible(true);lyr_Playford_46.setVisible(true);lyr_Onkaparinga_47.setVisible(true);lyr_NorwoodPaynehamandStPeters_48.setVisible(true);lyr_MurrayBridge_49.setVisible(true);lyr_MountBarker_50.setVisible(true);lyr_Mitcham_51.setVisible(true);lyr_Marion_52.setVisible(true);lyr_Light_53.setVisible(true);lyr_HoldfastBay_54.setVisible(true);lyr_Gawler_55.setVisible(true);lyr_CharlesSturt_56.setVisible(true);lyr_CampbelltownSA_57.setVisible(true);lyr_Burnside_58.setVisible(true);lyr_Barossa_59.setVisible(true);lyr_Alexandrina_60.setVisible(true);lyr_AdelaidePlains_61.setVisible(true);lyr_AdelaideHills_62.setVisible(true);lyr_Adelaide_63.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_GarpVisionMapElements,group_Administrative];
lyr_ActivityZones_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_CapitalCityZones_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_EmploymentZones_4.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_InfrastructureZones_5.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_NaturalResourcesandEnvironmentZones_6.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_NeighbourhoodandCorridorZones_7.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_RuralZones_8.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_TourismZones_9.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_TownshipandSettlementZones_10.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_AirportsandAirfields_11.set('fieldAliases', {'id': 'id', });
lyr_Seaport_12.set('fieldAliases', {'id': 'id', });
lyr_ExistingMajorTransportRoutes_13.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_BusRoutesPublicTransport_14.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_PotentialGreaterAdelaideFreightBypass_15.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_ExistingRailwayCorridors_16.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_TransportInvestigations_17.set('fieldAliases', {'id': 'id', });
lyr_NorthernParkLandsGreenCorridorLink_18.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_LocalInfillInvestigationAreas_19.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_StateSignificantInfillAreas_20.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FutureEmployment_21.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_StateSignificantIndustrialEmploymentPrecinct_22.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_NationalEmploymentEconomicCluster_23.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_PrimeIndustrialEmploymentPrecinct_24.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_StateInnovationPlaces_25.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FutureGreenfieldSupplyinEFPA_26.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FutureGreenfieldGrowthArea_27.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_NorthernParkLands_28.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_InterUrbanBreaks_29.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_OpenSpaceNetworkGreenSpace_30.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_OpenSpaceNetworkGreenways_31.set('fieldAliases', {'fid': 'fid', });
lyr_OpenSpaceNetworkGreenways2_32.set('fieldAliases', {'fid': 'fid', });
lyr_CharacterPreservationDistrict_33.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_EnvironmentandFoodProductionArea_34.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_HillsFaceZone_35.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_GARPLGA_36.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_Yankalilla_37.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_WestTorrens_38.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Walkerville_39.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_VictorHarbor_40.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Unley_41.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_TeaTreeGully_42.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Salisbury_43.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Prospect_44.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_PortAdelaideEnfield_45.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Playford_46.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Onkaparinga_47.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_NorwoodPaynehamandStPeters_48.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_MurrayBridge_49.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_MountBarker_50.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Mitcham_51.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Marion_52.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Light_53.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_HoldfastBay_54.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Gawler_55.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_CharlesSturt_56.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_CampbelltownSA_57.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Burnside_58.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Barossa_59.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Alexandrina_60.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_AdelaidePlains_61.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_AdelaideHills_62.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Adelaide_63.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_ActivityZones_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_CapitalCityZones_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_EmploymentZones_4.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_InfrastructureZones_5.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_NaturalResourcesandEnvironmentZones_6.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_NeighbourhoodandCorridorZones_7.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_RuralZones_8.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_TourismZones_9.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_TownshipandSettlementZones_10.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_AirportsandAirfields_11.set('fieldImages', {'id': 'TextEdit', });
lyr_Seaport_12.set('fieldImages', {'id': 'TextEdit', });
lyr_ExistingMajorTransportRoutes_13.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_BusRoutesPublicTransport_14.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_PotentialGreaterAdelaideFreightBypass_15.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_ExistingRailwayCorridors_16.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_TransportInvestigations_17.set('fieldImages', {'id': 'TextEdit', });
lyr_NorthernParkLandsGreenCorridorLink_18.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_LocalInfillInvestigationAreas_19.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_StateSignificantInfillAreas_20.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FutureEmployment_21.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_StateSignificantIndustrialEmploymentPrecinct_22.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_NationalEmploymentEconomicCluster_23.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_PrimeIndustrialEmploymentPrecinct_24.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_StateInnovationPlaces_25.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FutureGreenfieldSupplyinEFPA_26.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FutureGreenfieldGrowthArea_27.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_NorthernParkLands_28.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_InterUrbanBreaks_29.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_OpenSpaceNetworkGreenSpace_30.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_OpenSpaceNetworkGreenways_31.set('fieldImages', {'fid': '', });
lyr_OpenSpaceNetworkGreenways2_32.set('fieldImages', {'fid': '', });
lyr_CharacterPreservationDistrict_33.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_EnvironmentandFoodProductionArea_34.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_HillsFaceZone_35.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_GARPLGA_36.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_Yankalilla_37.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_WestTorrens_38.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Walkerville_39.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_VictorHarbor_40.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Unley_41.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_TeaTreeGully_42.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Salisbury_43.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Prospect_44.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_PortAdelaideEnfield_45.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Playford_46.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Onkaparinga_47.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_NorwoodPaynehamandStPeters_48.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_MurrayBridge_49.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_MountBarker_50.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Mitcham_51.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Marion_52.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Light_53.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_HoldfastBay_54.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Gawler_55.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_CharlesSturt_56.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_CampbelltownSA_57.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Burnside_58.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Barossa_59.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Alexandrina_60.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_AdelaidePlains_61.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_AdelaideHills_62.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Adelaide_63.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_ActivityZones_2.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_CapitalCityZones_3.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_EmploymentZones_4.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_InfrastructureZones_5.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_NaturalResourcesandEnvironmentZones_6.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_NeighbourhoodandCorridorZones_7.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_RuralZones_8.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_TourismZones_9.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_TownshipandSettlementZones_10.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_AirportsandAirfields_11.set('fieldLabels', {'id': 'hidden field', });
lyr_Seaport_12.set('fieldLabels', {'id': 'hidden field', });
lyr_ExistingMajorTransportRoutes_13.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_BusRoutesPublicTransport_14.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_PotentialGreaterAdelaideFreightBypass_15.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_ExistingRailwayCorridors_16.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_TransportInvestigations_17.set('fieldLabels', {'id': 'hidden field', });
lyr_NorthernParkLandsGreenCorridorLink_18.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_LocalInfillInvestigationAreas_19.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_StateSignificantInfillAreas_20.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_FutureEmployment_21.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_StateSignificantIndustrialEmploymentPrecinct_22.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_NationalEmploymentEconomicCluster_23.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_PrimeIndustrialEmploymentPrecinct_24.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_StateInnovationPlaces_25.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_FutureGreenfieldSupplyinEFPA_26.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_FutureGreenfieldGrowthArea_27.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_NorthernParkLands_28.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_InterUrbanBreaks_29.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_OpenSpaceNetworkGreenSpace_30.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_OpenSpaceNetworkGreenways_31.set('fieldLabels', {'fid': 'no label', });
lyr_OpenSpaceNetworkGreenways2_32.set('fieldLabels', {'fid': 'no label', });
lyr_CharacterPreservationDistrict_33.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_EnvironmentandFoodProductionArea_34.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_HillsFaceZone_35.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_GARPLGA_36.set('fieldLabels', {'fid': 'hidden field', 'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_Yankalilla_37.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_WestTorrens_38.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Walkerville_39.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_VictorHarbor_40.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Unley_41.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_TeaTreeGully_42.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Salisbury_43.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Prospect_44.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_PortAdelaideEnfield_45.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Playford_46.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Onkaparinga_47.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_NorwoodPaynehamandStPeters_48.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_MurrayBridge_49.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_MountBarker_50.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Mitcham_51.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Marion_52.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Light_53.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_HoldfastBay_54.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Gawler_55.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_CharlesSturt_56.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_CampbelltownSA_57.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Burnside_58.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Barossa_59.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Alexandrina_60.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_AdelaidePlains_61.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_AdelaideHills_62.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Adelaide_63.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'hidden field', });
lyr_Adelaide_63.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});