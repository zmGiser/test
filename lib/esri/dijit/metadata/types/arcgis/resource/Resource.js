// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/resource/templates/Resource.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3c!-- resource --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" \r\n    data-dojo-props\x3d"target:\'dataIdInfo\',showHeader:false"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n    \r\n      \x3c!-- citation --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/ResourceCitation"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.citation.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- details --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.details}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n        \r\n          \x3c!-- description --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.description}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/Description"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n\r\n          \x3c!-- resource language --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.codelist.LanguageCode}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/ResourceLanguage"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n                    \r\n          \x3c!-- status --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.status}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/Status"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n\r\n          \x3c!-- representation --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.representation}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/Representation"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n                    \r\n          \x3c!-- resolution --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.resolution}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/Resolution"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- keywords --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Keywords"\r\n        data-dojo-props\x3d"showHeader:false,isKeywordsSection:true,label:\'${i18nArcGIS.resource.section.keywords}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- extent --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/ResourceExtent"\r\n        data-dojo-props\x3d"isExtentSection:true,label:\'${i18nArcGIS.extent.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- contact --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/ResourceContact"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.contact.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- maintenance --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.maintenance.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'resMaint\',minOccurs:0,label:\'${i18nArcGIS.resource.resMaint}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/maintenance/MaintenanceElements"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- constraints --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/ResourceConstraints"\r\n        data-dojo-props\x3d"isConstraintsSection:true,label:\'${i18nArcGIS.constraints.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- additional --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.additional}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n        \r\n          \x3c!-- browse graphic --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.browse}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/BrowseGraphic"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \r\n          \x3c!-- service --\x3e\r\n          \x3cdiv class\x3d"gxeServiceTab" data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/Service"\r\n            data-dojo-props\x3d"label:\'${i18nArcGIS.service.caption}\'"\x3e\r\n          \x3c/div\x3e\r\n        \r\n          \x3c!-- format --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/ResourceFormat"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.format}\'"\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3c!-- usage --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/Usage"\r\n            data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.resource.section.usage}\'"\x3e\r\n          \x3c/div\x3e\r\n\r\n          \x3c!-- aggregate information --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/resource/AggregateInfo"\r\n            data-dojo-props\x3d"label:\'${i18nArcGIS.resource.section.aggregateInfo}\'"\x3e\r\n          \x3c/div\x3e\r\n              \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n              \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/resource/Resource","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Resource.html ./ResourceCitation ./Description ./Status ./Resolution ./Representation ./ResourceExtent ./ResourceContact ./ResourceConstraints ./ResourceFormat ./ResourceLanguage ./BrowseGraphic ./Service ../keywords/Keywords ./Usage ./AggregateInfo ../maintenance/MaintenanceElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});
c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.resource.Resource",a,d);return a});