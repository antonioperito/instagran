
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"224",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-19374950-21",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=3;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.userId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\\/vagas-de.*","value","1"],["map","key","(\\\/oportunidade\\\/)|(\\\/vagas\\\/v).*","value","2"],["map","key","^(\\\/pvagasel.asp|\\\/pvagasel-erro.asp|\\\/candidatura\/incompativel)","value","3"],["map","key","\\\/pvagasel-ok|\\\/candidatura\\\/confirmada","value","4"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.metrics.busca-de-vaga"
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();\"undefined\"!==typeof performance\u0026\u0026\"function\"===typeof performance.now\u0026\u0026(a+=performance.now());return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"===c?b:b\u00263|8).toString(16)})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.cvStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.site-application"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.empresa-codigo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.empresa-nome"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.divisao-nome"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.vaga-codigo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.vaga-titulo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.cargo-interesse"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.cidade-interesse"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"origem-vagas",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"UA-CLIENT-ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.gsc"
    },{
      "function":"__d",
      "vtp_elementSelector":"span.info-localizacao",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.busca-localizacao"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user-login"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",7]],["map","fieldName","userId","value",["macro",8]]],
      "vtp_metric":["list",["map","index",["macro",9],"metric","1"],["map","index","5","metric",["macro",10]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",8]],["map","index","4","dimension",["macro",12]],["map","index","5","dimension",["macro",13]],["map","index","6","dimension",["macro",14]],["map","index","7","dimension",["macro",15]],["map","index","8","dimension",["macro",16]],["map","index","9","dimension",["macro",17]],["map","index","10","dimension",["macro",18]],["map","index","11","dimension",["macro",19]],["map","index","12","dimension",["macro",20]],["map","index","13","dimension",["macro",21]],["map","index","14","dimension",["macro",22]],["map","index","15","dimension",["macro",23]],["map","index","16","dimension",["macro",24]],["map","index","17","dimension",["macro",25]],["map","index","18","dimension",["macro",26]],["map","index","19","dimension",["macro",27]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-19374950-30",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"vpvPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"vpvTitle"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",8]],["map","index","4","dimension",["macro",12]],["map","index","5","dimension",["macro",13]],["map","index","6","dimension",["macro",14]],["map","index","7","dimension",["macro",15]],["map","index","8","dimension",["macro",16]],["map","index","9","dimension",["macro",17]],["map","index","10","dimension",["macro",18]],["map","index","11","dimension",["macro",19]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini\/i.test(navigator.userAgent)})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1,b=navigator.userAgent||navigator.vendor||window.opera;if(\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk\/i.test(b)||\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(b.substr(0,\n4)))a=!0;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return WAVagas.dlObj.objEc.detail.ecommerce.detail.products[0]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageVaga.code"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return WAVagas.dlObj.objEc.add.ecommerce.add.products[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return WAVagas.dlObj.objEc.impressions.size})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return WAVagas.dlObj.objEc.impressions.packs})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.user.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user-login"
    },{
      "function":"__c",
      "vtp_value":"fcb5f693-592f8f94"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",40],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^www.vagas.com.br(.*)","value","true"],["map","key","^tecnologia.vagas.com.br(.*)","value","true"],["map","key","^trabalheconosco.vagas.com.br(.*)","value","true"],["map","key","^site.vagas.com.br(.*)","value","true"],["map","key","^qa-www.ad.vagastec.com.br(.*)","value","true"],["map","key","^qa-site.ad.vagastec.com.br(.*)","value","true"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site.language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.area"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.template"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageVaga.empresa"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageVaga.Local"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageVaga.expiration"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageVaga.quantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site.productName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageClient.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageClient.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageVaga.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site.domain"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.email;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.quantityResult"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageVagaCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageVagaName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageVagaEmpresa"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageEmpresaCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom.dimensions.divisao-codigo"
    },{
      "function":"__c",
      "vtp_value":"tRaiETqnLgj758hTBazgd5MoJbznMJCwVw0PisvXZpMta5_2BhmsgubfXsABxo_2BTvc"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    }],
  "tags":[{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=84983\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",1],
      "tag_id":80
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":81
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"forbusiness",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",4],
      "vtp_eventAction":["template","clicou:",["macro",5]],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":82
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"vagas-profissoes",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",4],
      "vtp_eventAction":["template","out-to-vagas:clicou:",["macro",5]],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":88
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",32],
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":89
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-9QXBCPYCMW",
      "vtp_enableUserProperties":true,
      "tag_id":96
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"872841",
      "tag_id":97
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",32],
      "vtp_eventCategory":["macro",29],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":100
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",33]],["map","fieldName","title","value",["macro",34]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":101
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"forbusiness",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":["template","clicou:",["macro",5]],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":103
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":254
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"candidatura",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",35],
      "vtp_eventAction":"clicou:candidatar-se",
      "vtp_eventLabel":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":262
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"vagas-profissoes",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",4],
      "vtp_eventAction":["template","in-from-vagas:clicou:",["macro",5]],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":272
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"vagas-profissoes",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",4],
      "vtp_eventAction":["template","out-to-vagas:clicou:",["macro",5],"*"],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":275
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"vagas-profissoes",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"in-from-vagas",
      "vtp_eventLabel":["template",["macro",5]," : ",["macro",2]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":290
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"vagas-profissoes",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"out-to-vagas",
      "vtp_eventLabel":["template",["macro",5]," : ",["macro",2]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":291
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"vagas-profissoes",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",28],
      "vtp_eventAction":"out-to-vagas",
      "vtp_eventLabel":["template",["macro",5]," : ",["macro",2]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":292
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"621212482",
      "vtp_conversionLabel":"qOAeCO3IrtgBEMLmm6gC",
      "vtp_rdp":false,
      "vtp_url":["macro",38],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":307
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":308
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["template",["macro",18],"-",["macro",8]],
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"621212482",
      "vtp_conversionLabel":"ItJhCJXbvtgBEMLmm6gC",
      "vtp_rdp":false,
      "vtp_url":["macro",38],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":312
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1295730_182",
      "tag_id":324
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1295730_187",
      "tag_id":325
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1295730_271",
      "tag_id":326
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1295730_274",
      "tag_id":327
    },{
      "function":"__cl",
      "tag_id":328
    },{
      "function":"__cl",
      "tag_id":329
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"DOMContentLoaded\",function(){var a=a||[];a.push([\"_event\",\"_channel\",\"home\"]);a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3dTT-10235-0\/CT-30\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"estagioetrainee\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":20
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"vagapcd\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":21
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"empregostemporarios\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":22
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"logincandidato\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":23
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"cadastrocv\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"resultadodebusca\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"loginempresa\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"institucional\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _ttconversion=_ttconversion||[];_ttconversion.push([\"_event\",\"_channel\",\"dentrodavaga\"]);(function(a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tags.t.tailtarget.com\/t3m.js?i\\x3d\"+a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(\"TT-10235-0\/CT-30\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":32
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-cfasync=\"false\" data-gtmsrc=\"https:\/\/api.cazamba.com\/4840041b7df1c3179e73adbd5aa9946b.js\" type=\"text\/gtmscript\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/www.google-analytics.com\/analytics.js\",\"ga\");ga(\"create\",\"UA-19374950-21\",\"auto\");ga(\"require\",\"displayfeatures\");ga(\"require\",\"ec\");dataLayer.push({event:\"ga_load\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){document.body.addEventListener(\"mousedown\",function(b){b=b.target;if(b.hasAttribute(\"class\")){var c=b.getAttribute(\"class\");if(-1\u003Cc.indexOf(\"bt-candidatura\")){c=\"submit_cv_footer\";try{var a=b.parentNode.parentNode;console.log(\"parent_id\",a);a.hasAttribute(\"id\")\u0026\u0026(console.log(\"foi\"),a.getAttribute(\"id\"),-1\u003Ca.getAttribute(\"id\").indexOf(\"barraVaga\")\u0026\u0026(c=\"submit_cv_header\"))}catch(e){}a=document.getElementsByClassName(\"tituloVaga\")[0].innerHTML;a=a.split(\"\\x3c\")[0].trim();a=a.split(\" \").join(\"\");\ntry{var d=document.getElementsByClassName(\"id-da-vaga\")[0].innerHTML;d=d.replace(\"(\",\"\").replace(\")\",\"\")}catch(e){d=document.getElementsByClassName(\"id-da-vaga\")[0].innerHTML}ga(\"send\",\"event\",\"candidaturas\",c,a+\"|\"+d);dataLayer.push({event:\"ecObjTrack_addToCart\"})}}})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.location.pathname;a=a.toLowerCase();-1\u003Ca.indexOf(\"\/pvagasel-ok\")\u0026\u0026ga(\"send\",\"event\",\"candidatura\",\"sucesso\",!1,1,{nonInteraction:!0});-1\u003Ca.indexOf(\"\/preenchimento-curriculo\")\u0026\u0026ga(\"send\",\"event\",\"pre-cadastro\",\"sucesso\",!1,5,{nonInteraction:!0})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var f=document.getElementsByTagName(\"h1\");if(f){var h=f.length;for(i=0;i\u003Ch;i++){var k=f[i].innerHTML.toLowerCase();if(-1\u003Ck.indexOf(\"voc\\u00ea j\\u00e1 possui curr\\u00edculo(s)\"))try{WAVagas.trackPageview(\"\/cadastro-de-curriculo\/ja-possui-cadastro\")}catch(a){ga(\"send\",\"pageview\",\"\/cadastro-de-curriculo\/ja-possui-cadastro\")}}}var g=0,c=\"Pre Cadastro Form\",l=function(){var a=document.getElementsByClassName(\"new_pre_cadastro_form\")[0],b;a.addEventListener(\"submit\",function(){window.setTimeout(function(){var a=\ndocument.getElementsByClassName(\"invalid\")[0];if(a){b=document.getElementsByClassName(\"validate-input-error\");var e=\"erros:\";for(a=0;a\u003Cb.length;a++){var d=b[a].name;d=d.split(\"[\")[1];d=d.split(\"]\")[0];e=b.length-1==a?e+d:e+d+\"|\"}g++;a=\"Tentativa de submit: \"+g;ga(\"send\",\"event\",c,a,e)}else{g++;a=\"Submit do form\";try{d=document.getElementById(\"pre_cadastro_form_idioma_do_curriculo\").value,e=\"Sucesso - idioma_cv: \"+d}catch(m){e=\"Sucesso\"}ga(\"send\",\"event\",c,a,e);dataLayer.push({event:\"lead_Vagas\"})}},\n500)})};f=function(){document.getElementById(\"pre_cadastro_form_nome\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"nome\";ga(\"send\",\"event\",c,a,b)});document.getElementById(\"pre_cadastro_form_genero_masculino\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"genero_masculino\";ga(\"send\",\"event\",c,a,b)});document.getElementById(\"pre_cadastro_form_genero_feminino\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"genero_feminino\";ga(\"send\",\n\"event\",c,a,b)});document.getElementById(\"pre_cadastro_form_data_de_nascimento\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"data_nascimento\";ga(\"send\",\"event\",c,a,b)});document.getElementById(\"pre_cadastro_form_usuario\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"usuario\";ga(\"send\",\"event\",c,a,b)});document.getElementById(\"pre_cadastro_form_senha\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"senha\";ga(\"send\",\"event\",c,\na,b)});document.getElementById(\"pre_cadastro_form_email\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"email\";ga(\"send\",\"event\",c,a,b)});document.getElementById(\"pre_cadastro_form_email_confirmation\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"email_confirmacao\";ga(\"send\",\"event\",c,a,b)});document.getElementById(\"pre_cadastro_form_cpf\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"cpf\";ga(\"send\",\"event\",c,a,b)});document.getElementById(\"pre_cadastro_form_idioma_do_curriculo\").addEventListener(\"change\",\nfunction(a){var b=\"preencheu formulario\";a=\"idioma_cv-\"+a.target.value;ga(\"send\",\"event\",c,b,a)});l()};f()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar verifY_id=document.getElementById(\"pesquisa-vazia\");if(verifY_id){var label=document.location.pathname.split(\"\/vagas-de-\")[1];label=label.split(\"?\")[0];ga(\"send\",\"event\",\"Lista de vagas\",\"Busca_sem_resultado\",label,0,{nonInteraction:!0})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){document.body.addEventListener(\"mousedown\",function(a){var c=a.target,b=!1;for(i=0;4\u003Ei;i++)(b=WAVagas.getElementClass(c))?i=4:c=c.parentNode;if(b){try{b=b.replace(\" \",\"\")}catch(f){b=b.trim()}b=b.toLowerCase()}else b=\"none\";c=\"desktop\";try{",["escape",["macro",41],8,16],"\u0026\u0026(c=\"mobile\")}catch(f){}c=\"\\u00e1rea logada - \"+c;var d=0,e=0;switch(b){case \"linkcvaberto\":b=\"curriculo\";a=\"visualizar cv aberto\";ga(\"send\",\"event\",c,b,a,d,{nonInteraction:e});break;case \"linkcvdownload\":b=\"curriculo\";a=\"download cv\";\nga(\"send\",\"event\",c,b,a,d,{nonInteraction:e});break;case \"fechar\":a=a.target;a=a.parentNode;(a=a.getElementsByClassName(\"tit\"))?(a=a[0],a=a.innerHTML,a=a.trim(),a=a.toLowerCase(),a=WAVagas.removeDiacritics(a)):a=\"not_set\";b=\"Fechar:vaga_recomendada\";ga(\"send\",\"event\",c,b,a,d,{nonInteraction:e});break;case \"vaga\":(a=a.target.getElementsByClassName(\"tit\")[0])?(a=a.innerHTML,a=a.trim(),a=a.toLowerCase(),a=WAVagas.removeDiacritics(a)):a=\"not_set\";b=\"Abrir:vaga_recomendada\";ga(\"send\",\"event\",c,b,a,d,{nonInteraction:e});\nbreak;case \"mn-servico\":b=\"menu \\u00e1rea logada\";a=a.target;a=a.innerHTML;ga(\"send\",\"event\",c,b,a,d,{nonInteraction:e});break;case \"detalhes\":case \"tit\":a=a.target,b=a.parentNode.parentNode,(b=WAVagas.getElementClass(b))\u0026\u0026-1\u003Cb.indexOf(\"vaga\")\u0026\u0026(a?(a=a.innerHTML,a=a.trim(),a=a.toLowerCase(),a=WAVagas.removeDiacritics(a)):a=\"not_set\",b=\"Abrir:vaga_recomendada\",ga(\"send\",\"event\",c,b,a,d,{nonInteraction:e}))}})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var l=function(){var a=!1,e=!1;try{a=document.getElementById(\"cargo-info\"),e=document.getElementsByClassName(\"link-sugestao-cargo\")[0]}catch(b){}a\u0026\u0026ga(\"send\",\"event\",\"Lista de vagas\",\"visualiza\\u00e7\\u00e3o: cargo description\",document.location.pathname,0,{nonInteraction:1});e\u0026\u0026ga(\"send\",\"event\",\"Lista de vagas\",\"visualiza\\u00e7\\u00e3o: voc\\u00ea quis dizer\",document.location.pathname,0,{nonInteraction:1})},m=function(a){a.hasAttribute(\"wa-list-index\")?a=a.getAttribute(\"wa-list-index\"):\n(a=a.parentNode,a.hasAttribute(\"wa-list-index\")?a=a.getAttribute(\"wa-list-index\"):(a=a.parentNode,a=a.hasAttribute(\"wa-list-index\")?a.getAttribute(\"wa-list-index\"):!1));return a};document.body.addEventListener(\"mousedown\",function(a){var e=a.target,b=!1;for(i=0;4\u003Ei;i++)(b=WAVagas.getElementClass(e))?i=4:e=e.parentNode;if(b){try{b=b.replace(\" \",\"\")}catch(h){b=b.trim()}b=b.toLowerCase()}else b=\"none\";var d=\"desktop\";try{",["escape",["macro",41],8,16],"\u0026\u0026(d=\"mobile\")}catch(h){}d=\"Lista de vagas - \"+d;var f=0,g=\n0;switch(b){case \"bannermapa\":case \"banner-mapa-salario\":case \"banner_mapa\":b=\"Banner\";a=\"banner_mapa\";ga(\"send\",\"event\",d,b,a,f,{nonInteraction:g});break;case \"link-detalhes-vaga\":case \"cargo\":case \"link-detalhes-vagas\":case \"emprvaga\":case \"vaga\":var k=m(a.target),c=a.target.getElementsByClassName(\"vaga-local\")[0];c||(c=a.target.parentNode,c=c.getElementsByClassName(\"vaga-local\")[0]);try{c=c.innerHTML}catch(h){c=\"not_set\"}c=c.trim();c=\"local: \"+c;b=\"clique vaga\";a=e.getAttribute(\"title\").trim();\na=a+\" - code: \"+e.getAttribute(\"id\").trim();a=a+\" - \"+c;a=a.toLowerCase();k\u0026\u0026(WAVagas.ecList(\"click\",k),ga(\"send\",\"event\",d,b,a,f,{nonInteraction:g}));break;case \"facet\":case \"more\":b=\"filtragem\";a=a.target;a=a.innerHTML;try{a=a.split(\"(\")[0],a=a.split(\"span\\x3e\")[1],a=a.toLowerCase()}catch(h){a=a.replace('\\x3cspan class\\x3d\"\"\\x3e\\x3c\/span\\x3e',\"\"),a=a.split(\"(\")[0],a=a.toLowerCase()}a=a.trim();ga(\"send\",\"event\",d,b,a,f,{nonInteraction:g});break;case \"btmaisvagas\":setTimeout(function(){try{WAVagas.setPositionList(),\nWAVagas.dlObj.objEc.impressions.ecommerce.impressions.products=WAVagas.getList()}catch(h){}},1E3);break;case \"cargocard__information\":b=\"Card de Cargo\";a=a.target.innerHTML.trim();ga(\"send\",\"event\",d,b,a,f,{nonInteraction:g});break;case \"cargocard__descriptionLink\":b=\"Card de Cargo\";a=a.target.innerHTML.trim();ga(\"send\",\"event\",d,b,a,f,{nonInteraction:g});break;case \"titulo-cargo\":case \"icon-informacao\":b=\"Card de Cargo\";a=\"saiba mais\";ga(\"send\",\"event\",d,b,a,f,{nonInteraction:g});break;case \"link-sugestao-cargo\":b=\n\"Sugest\\u00e3o de Cargo\",a=a.target.innerHTML.trim(),ga(\"send\",\"event\",d,b,a,f,{nonInteraction:g})}});l()})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.body.addEventListener(\"mousedown\",function(a){a=a.target;a.hasAttribute(\"class\")\u0026\u0026(a=a.getAttribute(\"class\"),-1\u003Ca.indexOf(\"btn-success\")\u0026\u0026window.setTimeout(function(){var a=document.getElementById(\"curriculoNotificacao\").style.display;if(\"none\"!=a)try{WAVagas.trackEvent(\"micro_conversion\",\"sucess:curriculo\",!1,!1,!0),WAVagas.createCookie(\"wavagas_microconversion\",\"success:curriculo\")}catch(b){ga(\"send\",\"event\",\"micro_conversion\",\"success:curriculo\",!1,!1,{nonInteraction:!0}),document.cookie=\n\"wavagas_microconversion\\x3dsuccess:curriculo; path\\x3d\/\"}},1200))});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=document.getElementById(\"vagasp_vagas_relacionadas-2\"),d=0;c\u0026\u0026(c=c.getElementsByTagName(\"li\"))\u0026\u0026(d=c.length);for(p=0;p\u003Cd;p++)c[p].addEventListener(\"mousedown\",function(a){a=a.target;a.hasAttribute(\"class\")||(a=a.parentNode,a.hasAttribute(\"class\")||(a=a.parentNode,a.hasAttribute(\"class\")||(a=a.parentNode)));try{var b=a.getAttribute(\"class\")}catch(e){b=\"none\"}switch(b){case \"link-detalhes-vaga\":b=!1;try{(b=a.getAttribute(\"id\"))||(b=\"not set\")}catch(e){b=\"not set\"}return ga(\"send\",\n\"event\",\"Vagas Profissoes\",\"clique - vaga recomendada\",b);case \"vaga-local\":b=a.parentNode;try{(b=b.getAttribute(\"id\"))||(b=\"not set\")}catch(e){b=\"not set\"}return ga(\"send\",\"event\",\"Vagas Profissoes\",\"clique - vaga recomendada\",b);default:return null}})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var f=document.getElementsByTagName(\"h1\");if(f){var g=f.length;for(i=0;i\u003Cg;i++){var k=f[i].innerHTML.toLowerCase();if(-1\u003Ck.indexOf(\"voc\\u00ea j\\u00e1 possui curr\\u00edculo(s)\"))try{WAVagas.trackPageview(\"\/cadastro-de-curriculo\/ja-possui-cadastro\")}catch(c){ga(\"send\",\"pageview\",\"\/cadastro-de-curriculo\/ja-possui-cadastro\")}}}var h=0,d=\"Cadastro_3_passos\",l=function(){var c=document.getElementsByClassName(\"new_pre_cadastro_candidato\")[0],e;c.addEventListener(\"submit\",function(){window.setTimeout(function(){var a=\ndocument.getElementsByClassName(\"validate-error\")[0];if(a){e=document.getElementsByClassName(\"validate-input-error\");var b=\"erros:\";for(a=0;a\u003Ce.length;a++){var c=e[a].name;c=c.split(\"[\")[1];c=c.split(\"]\")[0];b=e.length-1==a?b+c:b+c+\"|\"}h++;a=\"Tentativa de submit: \"+h}else{h++;a=\"Submit do form\";try{c=document.getElementById(\"pre_cadastro_candidato_idioma_cv\").value,b=\"Sucesso - idioma_cv: \"+c}catch(m){b=\"Sucesso\"}}ga(\"send\",\"event\",d,a,b)},500)})};f=function(c){c=c.innerHTML;if(-1\u003Cc.indexOf(\"Passo 1\/3\"))document.getElementById(\"pre_cadastro_candidato_nome\").addEventListener(\"change\",\nfunction(a){a=\"preencheu formulario\";var b=\"nome\";ga(\"send\",\"event\",d,a,b)}),document.getElementById(\"pre_cadastro_candidato_genero_masculino\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"genero_masculino\";ga(\"send\",\"event\",d,a,b)}),document.getElementById(\"pre_cadastro_candidato_genero_feminino\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"genero_feminino\";ga(\"send\",\"event\",d,a,b)}),document.getElementById(\"pre_cadastro_candidato_data_de_nascimento\").addEventListener(\"change\",\nfunction(a){a=\"preencheu formulario\";var b=\"data_nascimento\";ga(\"send\",\"event\",d,a,b)}),document.getElementById(\"pre_cadastro_candidato_cep\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"cep\";ga(\"send\",\"event\",d,a,b)}),document.getElementById(\"pre_cadastro_candidato_codformmax_cand\").addEventListener(\"change\",function(a){var b=\"preencheu formulario\";a=\"escolaridade-\"+a.target.value;ga(\"send\",\"event\",d,b,a)}),document.getElementById(\"pre_cadastro_candidato_idioma_cv\").addEventListener(\"change\",\nfunction(a){var b=\"preencheu formulario\";a=\"idioma_cv-\"+a.target.value;ga(\"send\",\"event\",d,b,a)}),document.getElementById(\"pre_cadastro_candidato_cpf\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"cpf\";ga(\"send\",\"event\",d,a,b)});else if(-1\u003Cc.indexOf(\"Passo 2\/3\"))document.getElementById(\"pre_cadastro_candidato_identidade\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"usuario\";ga(\"send\",\"event\",d,a,b)}),document.getElementById(\"pre_cadastro_candidato_senha\").addEventListener(\"change\",\nfunction(a){a=\"preencheu formulario\";var b=\"senha\";ga(\"send\",\"event\",d,a,b)}),document.getElementById(\"pre_cadastro_candidato_email\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"email\";ga(\"send\",\"event\",d,a,b)}),document.getElementById(\"pre_cadastro_candidato_email_confirmation\").addEventListener(\"change\",function(a){a=\"preencheu formulario\";var b=\"confirmacao_email\";ga(\"send\",\"event\",d,a,b)});else if(-1\u003Cc.indexOf(\"Passo 3\/3\")){c=document.getElementsByClassName(\"cargos\")[0].getElementsByTagName(\"input\");\nvar e=c.length;for(p=0;p\u003Ce;p++)c[p].addEventListener(\"change\",function(a){var b=\"preencheu formulario\";a=\"Interesse_marcado:\"+a.target.value;ga(\"send\",\"event\",d,b,a)})}l()};g=document.getElementsByClassName(\"container_login_step\")[0];f(g)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){ga(\"ec:addProduct\",",["escape",["macro",42],8,16],");ga(\"ec:setAction\",\"detail\");ga(\"send\",\"event\",\"EnhancedEcommerce\",\"detail\",\"",["escape",["macro",43],7],"\",0,{nonInteraction:!0})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){ga(\"ec:addProduct\",",["escape",["macro",44],8,16],");ga(\"ec:setAction\",\"add\");ga(\"send\",\"event\",\"EnhancedEcommerce\",\"addToCart\",\"",["escape",["macro",43],7],"\",0,{nonInteraction:!0});dataLayer.push({event:\"addToCart_Vagas\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar trackImpressions=function(){for(var d=\"",["escape",["macro",45],7],"\",c=0,a,b=0;b\u003Cd;b++){c=0;try{a=\"",["escape",["macro",46],7],"\",a.hasOwnProperty(\"pack_0\")||(a=WAVagas.dlObj.objEc.impressions.packs)}catch(e){if(WAVagas)a=WAVagas.dlObj.objEc.impressions.packs;else return!1}a=a[\"pack_\"+b];a=a.ecommerce.impressions[b];a.forEach(function(){ga(\"ec:addImpression\",a[c]);c++});ga(\"ec:setAction\",\"impression\");ga(\"send\",\"event\",\"EnhancedEcommerce\",\"impression_list\",",["escape",["macro",45],8,16],",!1,{nonInteraction:!0})}};trackImpressions();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByClassName(\"storycontent\")[0].getElementsByTagName(\"a\"),c=b.length;for(i=0;i\u003Cc;i++)b[i].addEventListener(\"mousedown\",function(a){a=a.target;a=a.innerHTML;ga(\"send\",\"event\",\"Ajuda - Excluir Cadastro\",\"click em link\",a)})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar wa_check=!1;try{wa_check=WAVagas.readCookie(\"_wa_conversion_register\")}catch(a){}wa_check||(WAVagas.createCookie(\"_wa_conversion_register\",1),ga(\"ec:addProduct\",{id:\"NEW_USER-VAGAS\",name:\"Cadastro Vagas\",category:\"Cadastro\",brand:\"vagas.com\",variant:\"vagas\",price:\"3.30\",quantity:1}),ga(\"ec:setAction\",\"purchase\",{id:\"NEW_USER-\"+",["escape",["macro",48],8,16],",affiliation:\"Vagas.com\",revenue:\"3.30\",tax:\"0.00\",shipping:\"0.00\"}),ga(\"send\",\"event\",\"transaction\",\"cadastro\",\"vagas.com\",0,{nonInteraction:!0}));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"ec:addProduct\",{id:\"",["escape",["macro",43],7],"\",name:\"Candidatura Vagas\",category:\"Candidatura\",brand:\"vagas.com\",variant:\"vagas\",price:\"1.00\",quantity:1});ga(\"ec:setAction\",\"purchase\",{id:",["escape",["macro",48],8,16],"+\"-VAGA:\"+",["escape",["macro",43],8,16],",affiliation:\"Vagas.com\",revenue:\"1.00\",tax:\"0.00\",shipping:\"0.00\"});ga(\"send\",\"event\",\"transaction\",\"candidatura\",\"vagas.com\",0,{nonInteraction:!0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"ec:addProduct\",WAVagas.dlObj.objEc.cart.ecommerce.remove.products[0]);ga(\"ec:setAction\",\"remove\");ga(\"send\",\"event\",\"RemoveToCart - Vaga incompat\\u00edvel\",\"",["escape",["macro",43],7],"\",!1,0,{nonInteraction:!0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){document.body.addEventListener(\"mousedown\",function(c){var b=c.target,a=!1;for(i=0;4\u003Ei;i++)(a=WAVagas.getElementClass(b))?i=4:b=b.parentNode;if(a){try{a=a.replace(\" \",\"\")}catch(g){a=a.trim()}a=a.toLowerCase()}else a=\"none\";c=\"desktop\";try{",["escape",["macro",41],8,16],"\u0026\u0026(c=\"mobile\")}catch(g){}c=\"cargo - \"+c;var e=0,f=0,d=document.location.pathname.split(\"\/\")[2];d=d.split(\"?\")[0];d=d.split(\"#\")[0];switch(a){case \"button\":b=\"ver todas as vagas\";a=\"cargo:\"+d;ga(\"send\",\"event\",c,b,a,e,{nonInteraction:f});\nbreak;case \"jsx-3135373376\":b=\"menu - \"+b.getAttribute(\"title\").toLowerCase();a=\"cargo:\"+d;ga(\"send\",\"event\",c,b,a,e,{nonInteraction:f});break;case \"navigation-button\":b=\"header - \"+b.innerHTML,a=\"cargo:\"+d,ga(\"send\",\"event\",c,b,a,e,{nonInteraction:f})}})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"320577058091380\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=320577058091380\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._st_account=52;(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/app.shoptarget.com.br\/js\/tracking.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.createElement(\"script\");a.id=\"PrivallyApp\";a.setAttribute(\"src\",\"https:\/\/app.privally.global\/app.js\");a.setAttribute(\"pid\",\"",["escape",["macro",50],7],"\");a.async=!0;document.head.appendChild(a)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":315
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c){var b=a.createElement(c);a=a.getElementsByTagName(c)[0];b.async=1;b.src=\"https:\/\/plugin.handtalk.me\/web\/latest\/handtalk.min.js\";a.parentNode.insertBefore(b,a)})(document,\"script\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar handle=setInterval(initHandtalk,1E3);function initHandtalk(){\"function\"===typeof window.HT\u0026\u0026(new HT({avatar:\"MAYA\",token:\"fbffc2e151b872b30366ff957f8a621a\",pageSpeech:!0}),clearInterval(handle))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":323
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"forbusiness.vagas.com.br"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)1295730_182($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"\/profissoes"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/profissoes"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"www.vagas.com.br\/"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)1295730_187($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"interaction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"nonInteraction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"nonInteraction-sucesso"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"virtualPageview"
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"\/candidatura\/confirmada"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"true"
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"[data-gtm-events=\"candidatarse\"] *"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",37],
      "arg1":"[data-gtm-events=\"candidatarse\"]"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"https:\/\/www.vagas.com.br\/profissoes"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/profissoes"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)1295730_271($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"vagas.com.br\/"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"VAGAS.com.br"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)1295730_274($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"cadastro:candidato"
    },{
      "function":"_cn",
      "arg0":["macro",30],
      "arg1":"sucesso:cadastro-finalizado"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(\\\/candidatura\\\/confirmada)|(\\\/pvagasel-ok.asp)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"https:\/\/www.vagas.com.br\/"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"www.vagas.com.br"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/www.vagas.com.br\/vagas-de-estagio-trainee"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/www.vagas.com.br\/vagas-de-deficientes"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/www.vagas.com.br\/vagas\/trabalho-temporario"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/site.vagas.com.br\/AcessoCand.asp"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/site.vagas.com.br\/cadInCand.asp"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/www.vagas.com.br\/vagas-de"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/epartner.vagas.com.br\/AcessoEmpr.asp"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"https:\/\/www.vagas.com.br\/institucional\/"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"http:\/\/www.vagas.com.br\/vagas\/v"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/vagas\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ga_load"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\/PVagaSel-OK|\/candidatura\/confirmada"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/servicos\/preenchimento-curriculo"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\/cadastro-de-curriculo(\\?.*|$)"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/vagas-de-"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/servicos"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"\/servicos\/curriculo"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/profissoes\/"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*\\\/cadastre-seu-curriculo\\\/(informacoes_basicas|dados_de_acesso|cargos_de_interesse).*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ecObjReady_detail"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ecObjTrack_addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ecObjReady_impressions"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"\/ajuda-candidatos\/cadastro\/excluir-cadastro-vagas\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ecObjReady_cartRemove"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/cargo\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"addToCart_Vagas"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/PVagaSel.asp"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^\/(cadastro-de-curriculo|servicos|login-candidatos)"
    },{
      "function":"_eq",
      "arg0":["macro",51],
      "arg1":"true"
    }],
  "rules":[
    [["if",0],["add",0,1,4,7,11,21,40,58,23,24,25,26,27,28]],
    [["if",1,2,3],["add",2,12]],
    [["if",2,4,6,7],["unless",5],["add",3,19]],
    [["if",8],["add",5]],
    [["if",9],["add",6]],
    [["if",10],["add",8,66]],
    [["if",11],["add",9]],
    [["if",12],["add",10]],
    [["if",0,13,14],["add",13]],
    [["if",15,16],["add",14]],
    [["if",16,17],["add",14]],
    [["if",2,18,20],["unless",19],["add",15,17]],
    [["if",2,4,21,22,23],["unless",5],["add",16,18]],
    [["if",11,24,25],["add",20,64]],
    [["if",0,26],["add",22]],
    [["if",0,27,28],["add",29,39]],
    [["if",10,29],["add",30]],
    [["if",10,30],["add",31]],
    [["if",10,31],["add",32]],
    [["if",10,32],["add",33]],
    [["if",10,33],["add",34]],
    [["if",0,34],["add",35]],
    [["if",10,35],["add",36]],
    [["if",10,36],["add",37]],
    [["if",10,37],["add",38]],
    [["if",38,39],["add",41,60]],
    [["if",39,40],["add",42,55,59]],
    [["if",39,41],["add",42,54]],
    [["if",39,42],["add",43]],
    [["if",39,43],["add",44,46,61]],
    [["if",39,44],["add",45]],
    [["if",39,45],["add",47]],
    [["if",39,46],["add",48]],
    [["if",39,47],["add",49]],
    [["if",48],["add",50]],
    [["if",49],["add",51]],
    [["if",50],["add",52]],
    [["if",0,51],["add",53]],
    [["if",52],["add",56]],
    [["if",39,53],["add",57]],
    [["if",54],["add",62]],
    [["if",39,55],["add",63]],
    [["if",0,56],["add",65]],
    [["if",10,58],["add",67]],
    [["if",0,57],["block",65]]]
},
"runtime":[[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}}}

,"security_groups":{
"nonGoogleScripts":["__hjtc"]}

};

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self,D=function(n,v){var w=n.split("."),q=C;w[0]in q||"undefined"==typeof q.execScript||q.execScript("var "+w[0]);for(var t;w.length&&(t=w.shift());)w.length||void 0===v?q=q[t]&&q[t]!==Object.prototype[t]?q[t]:q[t]={}:q[t]=v};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var E,F=function(){};
(function(){function n(h,m){h=h||"";m=m||{};for(var y in v)v.hasOwnProperty(y)&&(m.N&&(m["fix_"+y]=!0),m.G=m.G||m["fix_"+y]);var z={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},e={comment:function(){var a=h.indexOf("--\x3e");if(0<=a)return{content:h.substr(4,a),length:a+3}},endTag:function(){var a=h.match(q);if(a)return{tagName:a[1],length:a[0].length}},atomicTag:function(){var a=e.startTag();if(a){var b=h.slice(a.length);
if(b.match(new RegExp("</\\s*"+a.tagName+"\\s*>","i"))){var c=b.match(new RegExp("([\\s\\S]*?)</\\s*"+a.tagName+"\\s*>","i"));if(c)return{tagName:a.tagName,g:a.g,content:c[1],length:c[0].length+a.length}}}},startTag:function(){var a=h.match(w);if(a){var b={};a[2].replace(t,function(c,d,k,g,r){var u=k||g||r||B.test(d)&&d||null,l=document.createElement("div");l.innerHTML=u;b[d]=l.textContent||l.innerText||u});return{tagName:a[1],g:b,s:!!a[3],length:a[0].length}}},chars:function(){var a=h.indexOf("<");
return{length:0<=a?a:h.length}}},f=function(){for(var a in z)if(z[a].test(h)){var b=e[a]();return b?(b.type=b.type||a,b.text=h.substr(0,b.length),h=h.slice(b.length),b):null}};m.G&&function(){var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,b=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,c=[];c.H=function(){return this[this.length-1]};c.v=function(l){var p=this.H();return p&&p.tagName&&p.tagName.toUpperCase()===l.toUpperCase()};c.V=function(l){for(var p=
0,x;x=this[p];p++)if(x.tagName===l)return!0;return!1};var d=function(l){l&&"startTag"===l.type&&(l.s=a.test(l.tagName)||l.s);return l},k=f,g=function(){h="</"+c.pop().tagName+">"+h},r={startTag:function(l){var p=l.tagName;"TR"===p.toUpperCase()&&c.v("TABLE")?(h="<TBODY>"+h,u()):m.oa&&b.test(p)&&c.V(p)?c.v(p)?g():(h="</"+l.tagName+">"+h,u()):l.s||c.push(l)},endTag:function(l){c.H()?m.W&&!c.v(l.tagName)?g():c.pop():m.W&&(k(),u())}},u=function(){var l=h,p=d(k());h=l;if(p&&r[p.type])r[p.type](p)};f=function(){u();
return d(k())}}();return{append:function(a){h+=a},ea:f,sa:function(a){for(var b;(b=f())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var a=h;h="";return a},ta:function(){return h},stack:[]}}var v=function(){var h={},m=this.document.createElement("div");m.innerHTML="<P><I></P></I>";h.va="<P><I></P></I>"!==m.innerHTML;m.innerHTML="<P><i><P></P></i></P>";h.ua=2===m.childNodes.length;return h}(),w=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
q=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,t=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,B=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;n.supports=v;for(var A in v);E=n})();
(function(){function n(){}function v(e){return void 0!==e&&null!==e}function w(e,f,a){var b,c=e&&e.length||0;for(b=0;b<c;b++)f.call(a,e[b],b)}function q(e,f,a){for(var b in e)e.hasOwnProperty(b)&&f.call(a,b,e[b])}function t(e,f){q(f,function(a,b){e[a]=b});return e}function B(e,f){e=e||{};q(f,function(a,b){v(e[a])||(e[a]=b)});return e}function A(e){try{return y.call(e)}catch(a){var f=[];w(e,function(b){f.push(b)});return f}}var h={J:n,K:n,L:n,M:n,O:n,P:function(e){return e},done:n,error:function(e){throw e;
},fa:!1},m=this;if(!m.postscribe){var y=Array.prototype.slice,z=function(){function e(a,b,c){var d="data-ps-"+b;if(2===arguments.length){var k=a.getAttribute(d);return v(k)?String(k):k}v(c)&&""!==c?a.setAttribute(d,c):a.removeAttribute(d)}function f(a,b){var c=a.ownerDocument;t(this,{root:a,options:b,l:c.defaultView||c.parentWindow,i:c,o:E("",{N:!0}),u:[a],B:"",C:c.createElement(a.nodeName),j:[],h:[]});e(this.C,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.h,arguments);for(var a;!this.m&&
this.h.length;)a=this.h.shift(),"function"===typeof a?this.U(a):this.D(a)};f.prototype.U=function(a){var b={type:"function",value:a.name||a.toString()};this.A(b);a.call(this.l,this.i);this.I(b)};f.prototype.D=function(a){this.o.append(a);for(var b,c=[],d,k;(b=this.o.ea())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(k=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ka(c);d&&this.X(b);k&&this.Y(b)};f.prototype.ka=function(a){var b=this.R(a);
b.F&&(b.Z=this.B+b.F,this.B+=b.da,this.C.innerHTML=b.Z,this.ia())};f.prototype.R=function(a){var b=this.u.length,c=[],d=[],k=[];w(a,function(g){c.push(g.text);if(g.g){if(!/^noscript$/i.test(g.tagName)){var r=b++;d.push(g.text.replace(/(\/?>)/," data-ps-id="+r+" $1"));"ps-script"!==g.g.id&&"ps-style"!==g.g.id&&k.push("atomicTag"===g.type?"":"<"+g.tagName+" data-ps-proxyof="+r+(g.s?" />":">"))}}else d.push(g.text),k.push("endTag"===g.type?g.text:"")});return{wa:a,raw:c.join(""),F:d.join(""),da:k.join("")}};
f.prototype.ia=function(){for(var a,b=[this.C];v(a=b.shift());){var c=1===a.nodeType;if(!c||!e(a,"proxyof")){c&&(this.u[e(a,"id")]=a,e(a,"id",null));var d=a.parentNode&&e(a.parentNode,"proxyof");d&&this.u[d].appendChild(a)}b.unshift.apply(b,A(a.childNodes))}};f.prototype.X=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.src=a.g.src||a.g.ma;a.src&&this.j.length?this.m=a:this.A(a);var c=this;this.ja(a,function(){c.I(a)})};f.prototype.Y=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.type=
a.g.type||a.g.TYPE||"text/css";this.la(a);b&&this.write()};f.prototype.la=function(a){var b=this.T(a);this.aa(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.i.createTextNode(a.content)))};f.prototype.T=function(a){var b=this.i.createElement(a.tagName);b.setAttribute("type",a.type);q(a.g,function(c,d){b.setAttribute(c,d)});return b};f.prototype.aa=function(a){this.D('<span id="ps-style"/>');var b=this.i.getElementById("ps-style");b.parentNode.replaceChild(a,
b)};f.prototype.A=function(a){a.ba=this.h;this.h=[];this.j.unshift(a)};f.prototype.I=function(a){a!==this.j[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.j.shift(),this.write.apply(this,a.ba),!this.j.length&&this.m&&(this.A(this.m),this.m=null))};f.prototype.ja=function(a,b){var c=this.S(a),d=this.ha(c),k=this.options.J;a.src&&(c.src=a.src,this.ga(c,d?k:function(){b();k()}));try{this.$(c),a.src&&!d||b()}catch(g){this.options.error(g),b()}};f.prototype.S=function(a){var b=
this.i.createElement(a.tagName);q(a.g,function(c,d){b.setAttribute(c,d)});a.content&&(b.text=a.content);return b};f.prototype.$=function(a){this.D('<span id="ps-script"/>');var b=this.i.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.ga=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;t(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var k={message:"remote script failed "+
a.src};c();d(k);b()}})};f.prototype.ha=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.fa&&a.src&&a.hasAttribute("async"))};return f}();m.postscribe=function(){function e(){var d=b.shift(),k;d&&(k=d[d.length-1],k.K(),d.stream=f.apply(null,d),k.L())}function f(d,k,g){function r(x){x=g.P(x);c.write(x);g.M(x)}c=new z(d,g);c.id=a++;c.name=g.name||c.id;var u=d.ownerDocument,l={close:u.close,open:u.open,write:u.write,writeln:u.writeln};t(u,{close:n,open:n,write:function(){return r(A(arguments).join(""))},
writeln:function(){return r(A(arguments).join("")+"\n")}});var p=c.l.onerror||n;c.l.onerror=function(x,G,H){g.error({qa:x+" - "+G+":"+H});p.apply(c.l,arguments)};c.write(k,function(){t(u,l);c.l.onerror=p;g.done();c=null;e()});return c}var a=0,b=[],c=null;return t(function(d,k,g){"function"===typeof g&&(g={done:g});g=B(g,h);d=/^#/.test(d)?m.document.getElementById(d.substr(1)):d.pa?d[0]:d;var r=[d,k,g];d.ca={cancel:function(){r.stream?r.stream.abort():r[1]=n}};g.O(r);b.push(r);c||e();return d.ca},
{streams:{},ra:b,na:z})}();F=m.postscribe}})();D("google_tag_manager_external.postscribe.installPostscribe",function(){var n=window.google_tag_manager;n&&(n.postscribe||(n.postscribe=window.postscribe||F))});D("google_tag_manager_external.postscribe.getPostscribe",function(){return window.google_tag_manager.postscribe});}).call(this);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=fa,oa=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Bj=b.prototype},pa=this||self,qa=function(a){return a};var ra=function(a,b){this.g=a;this.s=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ua=function(){this.B={};this.F=!1;this.H={}},va=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ua.prototype.get=function(a){return this.B["dust."+a]};ua.prototype.set=function(a,b){this.F||(a="dust."+a,this.H.hasOwnProperty(a)||(this.B[a]=b))};
ua.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var wa=function(a,b){b="dust."+b;a.F||a.H.hasOwnProperty(b)||delete a.B[b]};ua.prototype.rb=function(){this.F=!0};var k=function(a){this.s=new ua;this.g=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.g[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if(!this.B)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else sa(a)?this.g[Number(a)]=b:this.s.set(a,b)};aa.get=function(a){return"length"===a?this.length():sa(a)?this.g[Number(a)]:this.s.get(a)};aa.length=function(){return this.g.length};aa.qb=function(){for(var a=va(this.s,1),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};var xa=function(a,b){sa(b)?delete a.g[Number(b)]:wa(a.s,b)};aa=k.prototype;
aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};aa.has=function(a){return sa(a)&&this.g.hasOwnProperty(a)||this.s.has(a)};aa.rb=function(){this.B=!0;Object.freeze(this.g);this.s.rb()};var ya=function(){function a(f,g){if(b[f]){if(b[f].od+g>b[f].max)throw Error("Quota exceeded");b[f].od+=g}}var b={},c=void 0,d=void 0,e={Oi:function(f){c=f},lg:function(){c&&a(c,1)},Qi:function(f){d=f},sb:function(f){d&&a(d,f)},ej:function(f,g){b[f]=b[f]||{od:0};b[f].max=g},ri:function(f){return b[f]&&b[f].od||0},reset:function(){b={}},ci:a};e.onFnConsume=e.Oi;e.consumeFn=e.lg;e.onStorageConsume=e.Qi;e.consumeStorage=e.sb;e.setMax=e.ej;e.getConsumed=e.ri;e.reset=e.reset;e.consume=e.ci;return e};var za=function(a,b){this.B=a;this.R=function(c,d,e){return c.apply(d,e)};this.F=b;this.s=new ua;this.g=this.H=void 0};za.prototype.add=function(a,b){Ba(this,a,b,!1)};var Ba=function(a,b,c,d){if(!a.s.F)if(a.B.sb(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.s;e.set(b,c);e.H["dust."+b]=!0}else a.s.set(b,c)};
za.prototype.set=function(a,b){this.s.F||(!this.s.has(a)&&this.F&&this.F.has(a)?this.F.set(a,b):(this.B.sb(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.s.set(a,b)))};za.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.F?this.F.get(a):void 0};za.prototype.has=function(a){return!!this.s.has(a)||!(!this.F||!this.F.has(a))};var Da=function(a){var b=new za(a.B,a);a.H&&(b.H=a.H);b.R=a.R;b.g=a.g;return b};var Ea={},Fa=function(a,b){Ea[a]=Ea[a]||[];Ea[a][b]=!0},Ga=function(a){for(var b=[],c=Ea[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ha=function(){},Ja=function(a){return"function"==typeof a},n=function(a){return"string"==typeof a},Ka=function(a){return"number"==typeof a&&!isNaN(a)},La=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Fa("TAGGING",4):Fa("TAGGING",5);return b},Oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Pa=function(a,b){if(a&&La(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Sa=function(a,b){if(!Ka(a)||!Ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ua=function(a,b){for(var c=new Ta,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Va=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Wa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Xa=
function(a){return Math.round(Number(a))||0},Ya=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Za=function(a){var b=[];if(La(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},$a=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ab=function(){return new Date(Date.now())},bb=function(){return ab().getTime()},Ta=function(){this.prefix="gtm.";this.values={}};Ta.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ta.prototype.get=function(a){return this.values[this.prefix+a]};
var cb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},eb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},fb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},hb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ib=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=A;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Oa(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=/^\w{1,9}$/,mb=function(a){var b=[];Va(a,function(c,d){lb.test(c)&&d&&b.push(c)});return b.join(",")};var nb=function(a,b){ua.call(this);this.R=a;this.Da=b};oa(nb,ua);nb.prototype.toString=function(){return this.R};nb.prototype.qb=function(){return new k(va(this,1))};nb.prototype.g=function(a,b){a.B.lg();return this.Da.apply(new pb(this,a),Array.prototype.slice.call(arguments,1))};nb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var rb=function(a,b){for(var c,d=0;d<b.length&&!(c=qb(a,b[d]),c instanceof ra);d++);return c},qb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof nb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.H;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},pb=function(a,b){this.s=a;this.g=b},F=function(a,b){var c=a.g;return La(b)?qb(c,b):b},G=function(a){return a.s.R};var sb=function(){ua.call(this)};oa(sb,ua);sb.prototype.qb=function(){return new k(va(this,1))};var ub={control:function(a,b){return new ra(a,F(this,b))},fn:function(a,b,c){var d=this.g,e=F(this,b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.B.sb(a.length+f.length);return new nb(a,function(){return function(g){var h=Da(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=F(this,l[m]),l[m]instanceof ra)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var r=rb(h,f);if(r instanceof ra)return"return"===r.g?r.s:r}}())},list:function(a){var b=this.g.B;b.sb(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=F(this,arguments[d]);"string"===typeof e&&b.sb(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.B,c=new sb,d=0;d<arguments.length-1;d+=2){var e=F(this,arguments[d])+"",f=F(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.sb(g);c.set(e,f)}return c},undefined:function(){}};var vb=function(){this.B=ya();this.g=new za(this.B)},wb=function(a,b,c){var d=new nb(b,c);d.rb();a.g.set(b,d)},xb=function(a,b,c){ub.hasOwnProperty(b)&&wb(a,c||b,ub[b])};vb.prototype.Lb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};vb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.g,arguments[c]);return b};vb.prototype.F=function(a,b){var c=Da(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=qb(c,arguments[e]);return d};var yb,Ab=function(){if(void 0===yb){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}yb=a}else yb=a}return yb};var Cb=function(a,b){this.g=b===Bb?a:""};Cb.prototype.toString=function(){return this.g+""};var Bb={},Db=function(a){var b=Ab(),c=b?b.createScriptURL(a):a;return new Cb(c,Bb)};var Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Fb;a:{var Gb=pa.navigator;if(Gb){var Hb=Gb.userAgent;if(Hb){Fb=Hb;break a}}Fb=""}var Ib=function(a){return-1!=Fb.indexOf(a)};var Kb=function(a,b,c){this.g=c===Jb?a:""};Kb.prototype.toString=function(){return this.g.toString()};var Lb=function(a){return a instanceof Kb&&a.constructor===Kb?a.g:"type_error:SafeHtml"},Jb={},Mb=function(a){var b=Ab(),c=b?b.createHTML(a):a;return new Kb(c,null,Jb)},Nb=new Kb(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Jb);var Ob=function(a,b){a.src=b instanceof Cb&&b.constructor===Cb?b.g:"type_error:TrustedResourceUrl";var c,d,e=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,f=null===(d=e.querySelector)||void 0===d?void 0:d.call(e,"script[nonce]");(c=f?f.nonce||f.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var Pb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ub=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Vb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Lb(Nb);return!c.parentElement}),Wb=function(a,b){if(Vb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Lb(b)};var A=window,H=document,Xb=navigator,Yb=H.currentScript&&H.currentScript.src,Zb=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},$b=function(a){var b=H.getElementsByTagName("script")[0]||H.body||H.head;b.parentNode.insertBefore(a,b)},ac=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},bc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},cc=function(a,b,c,d){var e=H.createElement("script");
d&&Va(d,function(f,g){f=f.toLowerCase();bc.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Ob(e,Db(a));ac(e,b);c&&(e.onerror=c);$b(e);return e},dc=function(){if(Yb){var a=Yb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||H.body||H.head;d.parentNode.insertBefore(c,
d);ac(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){A.setTimeout(a,0)},ic=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=H.createElement("div"),c=Mb("A<div>"+a+"</div>");Wb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
mc=function(a){Xb.sendBeacon&&Xb.sendBeacon(a)||fc(a)},nc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a,b){return F(this,a)&&F(this,b)},pc=function(a,b){return F(this,a)===F(this,b)},qc=function(a,b){return F(this,a)||F(this,b)},rc=function(a,b){a=F(this,a);b=F(this,b);return-1<String(a).indexOf(String(b))},sc=function(a,b){a=String(F(this,a));b=String(F(this,b));return a.substring(0,b.length)===b},tc=function(a,b){a=F(this,a);b=F(this,b);switch(a){case "pageLocation":var c=A.location.href;b instanceof sb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var vc=function(){this.g=new vb;uc(this)};vc.prototype.Lb=function(a){return this.g.s(a)};var uc=function(a){xb(a.g,"map");var b=function(c,d){wb(a.g,c,d)};b("and",oc);b("contains",rc);b("equals",pc);b("or",qc);b("startsWith",sc);b("variable",tc)};var wc=function(a){if(a instanceof wc)return a;this.Ra=a};wc.prototype.toString=function(){return String(this.Ra)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var yc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,zc=function(a){if(null==a)return String(a);var b=yc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ac=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Bc=function(a){if(!a||"object"!=zc(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ac(a,"constructor")&&!Ac(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ac(a,b)},L=function(a,b){var c=b||("array"==zc(a)?[]:{}),d;for(d in a)if(Ac(a,d)){var e=a[d];"array"==zc(e)?("array"!=zc(c[d])&&(c[d]=[]),c[d]=L(e,c[d])):Bc(e)?(Bc(c[d])||(c[d]={}),c[d]=L(e,c[d])):c[d]=e}return c};var Dc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=va(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Oa(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.qb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof sb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof nb){var t=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Cc(u[v],b,!!c);var w=b?b.B:ya(),y=new za(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(u)))};d.push(h);e.push(t);f(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Cc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Oa(d,
h);if(-1<l)return e[l];if(La(h)||Wa(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Bc(h)){var q=new sb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new nb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Dc(F(this,v[w]),b,!!c);return g((0,this.g.R)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h;};return g(a)};var Ec=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Fc=function(a){if(void 0===a||La(a)||Bc(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Gc={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ec(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ec(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Mc="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Nc=new ra("break"),Oc=new ra("continue"),Pc=function(a,b){return F(this,a)+F(this,b)},Qc=function(a,b){return F(this,a)&&F(this,b)},Rc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Oa(Mc,b)){var d=Dc(c);return Cc(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var e=a.get(b);if(e instanceof nb){var f=Ec(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Oa(Gc.supportedMethods,b)){var g=
Ec(c);g.unshift(this.g);return Gc[b].apply(a,g)}}if(a instanceof nb||a instanceof sb){if(a.has(b)){var h=a.get(b);if(h instanceof nb){var l=Ec(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof nb?a.R:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ec(c))}if(a instanceof wc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Sc=function(a,b){a=F(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=F(this,b);c.set(a,d);return d},Tc=function(a){var b=Da(this.g),c=rb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},Uc=function(){return Nc},Vc=function(a){for(var b=F(this,a),c=0;c<b.length;c++){var d=F(this,b[c]);if(d instanceof ra)return d}},Wc=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=F(this,arguments[c+1]);Ba(b,d,e,!0)}}},Xc=function(){return Oc},Yc=function(a,b,c){var d=new k;b=F(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,F(this,f))},Zc=function(a,b){return F(this,a)/F(this,b)},$c=function(a,b){a=F(this,a);b=F(this,b);var c=a instanceof wc,d=b instanceof wc;return c||d?c&&d?a.Ra==b.Ra:!1:a==b},ad=function(a){for(var b,c=0;c<arguments.length;c++)b=
F(this,arguments[c]);return b};function bd(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=rb(f,d);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}}}function cd(a,b,c){if("string"===typeof b)return bd(a,function(){return b.length},function(f){return f},c);if(b instanceof sb||b instanceof k||b instanceof nb){var d=b.qb(),e=d.length();return bd(a,function(){return e},function(f){return d.get(f)},c)}}
var dd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return cd(function(e){d.set(a,e);return d},b,c)},ed=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return cd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},fd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return cd(function(e){var f=Da(d);f.add(a,e);return f},b,c)},hd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){d.set(a,e);return d},b,c)},id=
function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},jd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){var f=Da(d);f.add(a,e);return f},b,c)};
function gd(a,b,c){if("string"===typeof b)return bd(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return bd(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var kd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=F(this,a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=F(this,d);var h=Da(g);for(e(g,h);qb(h,b);){var l=rb(h,d);if(l instanceof ra){if("break"===l.g)break;if("return"===l.g)return l}var m=Da(g);e(h,m);qb(m,c);h=m}},ld=function(a){a=F(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},md=function(a,b){var c;a=F(this,a);b=F(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof sb||a instanceof k||a instanceof nb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof wc)return;return c},nd=function(a,b){return F(this,a)>F(this,
b)},od=function(a,b){return F(this,a)>=F(this,b)},ud=function(a,b){a=F(this,a);b=F(this,b);a instanceof wc&&(a=a.Ra);b instanceof wc&&(b=b.Ra);return a===b},vd=function(a,b){return!ud.call(this,a,b)},wd=function(a,b,c){var d=[];F(this,a)?d=F(this,b):c&&(d=F(this,c));var e=rb(this.g,d);if(e instanceof ra)return e},xd=function(a,b){return F(this,a)<F(this,b)},yd=function(a,b){return F(this,a)<=F(this,b)},zd=function(a,b){return F(this,a)%F(this,b)},Ad=function(a,b){return F(this,a)*F(this,b)},Bd=function(a){return-F(this,
a)},Cd=function(a){return!F(this,a)},Dd=function(a,b){return!$c.call(this,a,b)},Ed=function(){return null},Fd=function(a,b){return F(this,a)||F(this,b)},Gd=function(a,b){var c=F(this,a);F(this,b);return c},Hd=function(a){return F(this,a)},Id=function(a){return Array.prototype.slice.apply(arguments)},Jd=function(a){return new ra("return",F(this,a))},Kd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
nb||a instanceof k||a instanceof sb)&&a.set(b,c);return c},Ld=function(a,b){return F(this,a)-F(this,b)},Md=function(a,b,c){a=F(this,a);var d=F(this,b),e=F(this,c);if(!La(d)||!La(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===F(this,d[h]))if(f=F(this,e[h]),f instanceof ra){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=F(this,e[e.length-1]),f instanceof ra&&("return"===f.g||"continue"===
f.g)))return f},Nd=function(a,b,c){return F(this,a)?F(this,b):F(this,c)},Od=function(a){a=F(this,a);return a instanceof nb?"function":typeof a},Pd=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Qd=function(a,b,c,d){var e=F(this,d);if(F(this,c)){var f=rb(this.g,e);if(f instanceof ra){if("break"===f.g)return;if("return"===f.g)return f}}for(;F(this,a);){var g=rb(this.g,e);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}F(this,
b)}},Rd=function(a){return~Number(F(this,a))},Sd=function(a,b){return Number(F(this,a))<<Number(F(this,b))},Td=function(a,b){return Number(F(this,a))>>Number(F(this,b))},Ud=function(a,b){return Number(F(this,a))>>>Number(F(this,b))},Vd=function(a,b){return Number(F(this,a))&Number(F(this,b))},Wd=function(a,b){return Number(F(this,a))^Number(F(this,b))},Xd=function(a,b){return Number(F(this,a))|Number(F(this,b))};var Zd=function(){this.g=new vb;Yd(this)};Zd.prototype.Lb=function(a){return $d(this.g.s(a))};
var ie=function(a,b){return $d(he.g.F(a,b))},Yd=function(a){var b=function(d,e){xb(a.g,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){wb(a.g,String(d),e)};c(0,Pc);c(1,Qc);c(2,Rc);c(3,Sc);c(53,Tc);c(4,Uc);c(5,Vc);c(52,Wc);c(6,Xc);c(9,Vc);c(50,Yc);c(10,Zc);c(12,$c);c(13,ad);c(47,dd);c(54,ed);c(55,fd);c(63,kd);c(64,hd);c(65,id);c(66,jd);c(15,ld);c(16,md);c(17,md);c(18,nd);c(19,od);c(20,ud);c(21,vd);c(22,wd);c(23,xd);c(24,yd);c(25,zd);c(26,Ad);c(27,
Bd);c(28,Cd);c(29,Dd);c(45,Ed);c(30,Fd);c(32,Gd);c(33,Gd);c(34,Hd);c(35,Hd);c(46,Id);c(36,Jd);c(43,Kd);c(37,Ld);c(38,Md);c(39,Nd);c(40,Od);c(41,Pd);c(42,Qd);c(58,Rd);c(57,Sd);c(60,Td);c(61,Ud);c(56,Vd);c(62,Wd);c(59,Xd)},ke=function(){var a=he,b=je();wb(a.g,"require",b)},le=function(a,b){a.g.g.R=b};function $d(a){if(a instanceof ra||a instanceof nb||a instanceof k||a instanceof sb||a instanceof wc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var me=function(){var a=function(b){return{toString:function(){return b}}};return{Xg:a("consent"),Gd:a("consent_always_fire"),pf:a("convert_case_to"),qf:a("convert_false_to"),rf:a("convert_null_to"),sf:a("convert_true_to"),tf:a("convert_undefined_to"),nj:a("debug_mode_metadata"),pb:a("function"),Ih:a("instance_name"),Kh:a("live_only"),Lh:a("malware_disabled"),Mh:a("metadata"),qj:a("original_activity_id"),rj:a("original_vendor_template_id"),Oh:a("once_per_event"),Uf:a("once_per_load"),tj:a("priority_override"),
uj:a("respected_consent_types"),Yf:a("setup_tags"),Zf:a("tag_id"),$f:a("teardown_tags")}}();
var ne=[],oe={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pe=function(a){return oe[a]},qe=/[\x00\x22\x26\x27\x3c\x3e]/g;var ue=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ve={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},we=function(a){return ve[a]};ne[7]=function(a){return String(a).replace(ue,we)};
ne[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ue,we)+"'"}};var Ee=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Fe={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ge=function(a){return Fe[a]};ne[16]=function(a){return a};var Ie;
var Je=[],Ke=[],Le=[],Me=[],Ne=[],Oe={},Pe,Qe,Re,Se=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Te=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Oe[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.jg&&b.jg(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===me.Gd.toString()&&a[f]){}d&&b&&b.ig&&(e.vtp_gtmCachedValues=b.ig);return void 0!==d?d(e):Ie(c,e,b)},Ve=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Ue(a[e],b,c));return d},Ue=function(a,b,c){if(La(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ue(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Je[f];if(!g||b.Oe(g))return;c[f]=!0;try{var h=Ve(g,b,c);h.vtp_gtmEventId=b.id;d=Te(h,b);Re&&(d=Re.di(d,h))}catch(y){b.Ag&&b.Ag(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ue(a[l],b,c)]=Ue(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=Ue(a[p],b,c);Qe&&(m=m||q===Qe.dd);d.push(q)}return Qe&&m?Qe.gi(d):d.join("");case "escape":d=Ue(a[1],b,c);if(Qe&&La(a[1])&&"macro"===a[1][0]&&Qe.Ci(a))return Qe.Ti(d);d=
String(d);for(var r=2;r<a.length;r++)ne[a[r]]&&(d=ne[a[r]](d));return d;case "tag":var t=a[1];if(!Me[t])throw Error("Unable to resolve tag reference "+t+".");return d={rg:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=We(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},We=function(a,b,c){try{return Pe(Ve(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Xe=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.s=a;this.g=c};oa(Xe,Error);function Ye(a,b){if(La(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Ye(a[c],b[c])}};var Ze=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.B=a;this.s=b;this.g=[]};oa(Ze,Error);var af=function(){return function(a,b){a instanceof Ze||(a=new Ze(a,$e));b&&a.g.push(b);throw a;}};function $e(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ka(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var df=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=bf(a),f=0;f<Ke.length;f++){var g=Ke[f],h=cf(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Me.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},cf=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},bf=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=We(Le[c],a));return b[c]}};var ef={di:function(a,b){b[me.pf]&&"string"===typeof a&&(a=1==b[me.pf]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(me.rf)&&null===a&&(a=b[me.rf]);b.hasOwnProperty(me.tf)&&void 0===a&&(a=b[me.tf]);b.hasOwnProperty(me.sf)&&!0===a&&(a=b[me.sf]);b.hasOwnProperty(me.qf)&&!1===a&&(a=b[me.qf]);return a}};var ff=function(){this.g={}};function gf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Xe(c,d,g);}}function hf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));gf(e,b,d,g);gf(f,b,d,g)}}}};var pf=function(a){var b=jf.N,c=this;this.s=new ff;this.g={};var d={},e=hf(this.s,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Va(a,function(f,g){var h={};Va(g,function(l,m){var p=kf(l,m);h[l]=p.assert;d[l]||(d[l]=p.V)});c.g[f]=function(l,m){var p=h[l];if(!p)throw lf(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},rf=function(a){return qf.g[a]||
function(){}};function kf(a,b){var c=Se(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=lf;try{return Te(c)}catch(d){return{assert:function(e){throw new Xe(e,{},"Permission "+e+" is unknown.");},V:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function lf(a,b,c){return new Xe(a,b,c)};var sf=!1;var tf={};tf.mj=Ya('');tf.ki=Ya('');var uf=sf,vf=tf.ki,wf=tf.mj;
var Lf=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Mf=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Lf(b,"/*")&&(b=b.slice(0,-2));Lf(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Nf=/^[a-z0-9-]+$/i,Of=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Qf=function(a,b){var c;if(!(c=!Pf(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Nf.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Of.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var t=l.hostname,u=q;if(0!==u.indexOf("*."))r=t.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=t.toLowerCase().indexOf(u.toLowerCase());r=-1===v?!1:t.length===u.length?
!0:t.length!==u.length+v?!1:"."===t[v-1]}if(r){var w=p.slice(p.indexOf("/"));h=Mf(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Pf=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Rf=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Sf={Fn:"function",DustMap:"Object",List:"Array"},M=function(a,b,c){for(var d=0;d<b.length;d++){var e=Rf.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof nb?p="Fn":l instanceof k?p="List":l instanceof sb?p="DustMap":
l instanceof wc&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Sf[h]||h)+".");}}};function Tf(a){return""+a}
function Uf(a,b){var c=[];return c};var Vf=function(a,b){var c=new nb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=F(this,d[e]);return b.apply(this,d)});c.rb();return c},Wf=function(a,b){var c=new sb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ja(e)?c.set(d,Vf(a+"_"+d,e)):(Ka(e)||n(e)||"boolean"==typeof e)&&c.set(d,e)}c.rb();return c};var Xf=function(a,b){M(G(this),["apiName:!string","message:?string"],arguments);var c={},d=new sb;return d=Wf("AssertApiSubject",c)};var Yf=function(a,b){M(G(this),["actual:?*","message:?string"],arguments);var c={},d=new sb;
return d=Wf("AssertThatSubject",c)};function Zf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Dc(arguments[d],c));return Cc(a.apply(null,b))}}var ag=function(){for(var a=Math,b=$f,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Zf(a[e].bind(a)))}return c};var bg=function(a){var b;return b};var cg=function(a){var b;return b};var dg=function(a){M(G(this),["uri:!string"],arguments);return encodeURI(a)};var eg=function(a){M(G(this),["uri:!string"],arguments);return encodeURIComponent(a)};var fg=function(a){M(G(this),["message:?string"],arguments);};var gg=function(a,b){M(G(this),["min:!number","max:!number"],arguments);return Sa(a,b)};var hg=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.Xh.apply(null,Array.prototype.slice.call(arguments,1))};var ig=function(){hg(this,"read_container_data");var a=new sb;a.set("containerId",'GTM-52H238');a.set("version",'224');a.set("environmentName",'');a.set("debugMode",uf);a.set("previewMode",wf);a.set("environmentMode",vf);a.rb();return a};var jg=function(){return(new Date).getTime()};var kg=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof nb)return"function";if(a instanceof wc){a=a.Ra;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var lg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(uf||wf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Cc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Dc(c))})}};var mg=function(a){return Xa(Dc(a,this.g))};var ng=function(a){return Number(Dc(a,this.g))};var og=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var pg=function(a,b,c){var d=null,e=!1;return e?d:null};var $f="floor ceil round max min abs pow sqrt".split(" ");var qg=function(){var a={};return{si:function(b){return a.hasOwnProperty(b)?a[b]:void 0},fj:function(b,c){a[b]=c},reset:function(){a={}}}},rg=function(a,b){M(G(this),["apiName:!string","mock:?*"],arguments);};var sg={};
sg.keys=function(a){return new k};
sg.values=function(a){return new k};
sg.entries=function(a){return new k};sg.freeze=function(a){return a};var ug=function(){this.g={};this.s={};};ug.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
ug.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ja(b)?Vf(a,b):Wf(a,b)};
var wg=function(a,b,c){if(a.s.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.s[b]=Ja(c)?Vf(b,c):Wf(b,c)};function vg(a,b){var c=void 0;return c};function xg(){var a={};return a};var N={cc:"_ee",kd:"_syn_or_mod",vj:"_uei",ee:"_eu",sj:"_pci",Wd:"event_callback",Tc:"event_timeout",Ea:"gtag.config",Na:"gtag.get",va:"purchase",Bb:"refund",ib:"begin_checkout",zb:"add_to_cart",Ab:"remove_from_cart",gh:"view_cart",xf:"add_to_wishlist",Ma:"view_item",wf:"view_promotion",vf:"select_promotion",Jd:"select_item",Oc:"view_item_list",uf:"add_payment_info",fh:"add_shipping_info",Za:"value_key",Ya:"value_callback",Fa:"allow_ad_personalization_signals",Zb:"restricted_data_processing",Vb:"allow_google_signals",
Ia:"cookie_expires",Wb:"cookie_update",ac:"session_duration",Yc:"session_engaged_time",Qa:"user_properties",ma:"transport_url",T:"ads_data_redaction",xa:"user_data",Xb:"first_party_collection",D:"ad_storage",I:"analytics_storage",Hd:"region",nf:"wait_for_update",Ha:"conversion_linker",Ga:"conversion_cookie_prefix",ia:"value",fa:"currency",Of:"trip_type",aa:"items",Hf:"passengers",Kd:"allow_custom_scripts",Gb:"session_id",Mf:"quantity",ob:"transaction_id",lb:"language",Sc:"country",Qc:"allow_enhanced_conversions",
Pd:"aw_merchant_id",Nd:"aw_feed_country",Od:"aw_feed_language",Md:"discount",Bf:"developer_id",$c:"delivery_postal_code",Vd:"estimated_delivery_date",Td:"shipping",ce:"new_customer",Qd:"customer_lifetime_value",Ud:"enhanced_conversions"};N.Rf=[N.va,N.Bb,N.ib,N.zb,N.Ab,N.gh,N.xf,N.Ma,N.wf,N.vf,N.Oc,N.Jd,N.uf,N.fh];N.Qf=[N.Fa,N.Vb,N.Wb];N.Sf=[N.Ia,N.Tc,N.ac,N.Yc];var zg=function(a){Fa("GTM",a)};var Ag=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Bg=new Ag(1936,!0),Cg=new Ag(1933);var Eg=function(){var a=Dg;if(a.Me&&a.hasOwnProperty("Me"))return a.Me;var b=new a;return a.Me=b};var Dg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[Cg.g]=!0}},Fg=function(a){return Eg().g(a.g,a.defaultValue)};var Gg=[];function Hg(){var a=Zb("google_tag_data",{});a.ics||(a.ics={entries:{},set:Ig,update:Jg,addListener:Kg,notifyListeners:Lg,active:!1,usedDefault:!1});return a.ics}
function Ig(a,b,c,d,e,f){var g=Hg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&n(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&A.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Mg(a),Lg(),Fa("TAGGING",2))},f)}}}
function Jg(a,b){var c=Hg();c.active=!0;if(void 0!=b){var d=Ng(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Ng(a);f.quiet?(f.quiet=!1,Mg(a)):g!==d&&Mg(a)}}function Kg(a,b){Gg.push({Ae:a,mi:b})}function Mg(a){for(var b=0;b<Gg.length;++b){var c=Gg[b];La(c.Ae)&&-1!==c.Ae.indexOf(a)&&(c.Cg=!0)}}function Lg(a){for(var b=0;b<Gg.length;++b){var c=Gg[b];if(c.Cg){c.Cg=!1;try{c.mi({bi:a})}catch(d){}}}}
var Ng=function(a){var b=Hg().entries[a]||{};return void 0!==b.update?b.update:b.initial},Og=function(a){return(Hg().entries[a]||{}).initial},Pg=function(a){return!(Hg().entries[a]||{}).quiet},Qg=function(){return Fg(Cg)?Hg().active:!1},Rg=function(){return Hg().usedDefault},Sg=function(a,b){Hg().addListener(a,b)},Tg=function(a){Hg().notifyListeners(a)},Ug=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Pg(b[e]))return!0;return!1}if(c()){var d=!1;Sg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
Vg=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Ng(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=n(b)?[b]:b,e={};c().length!==d.length&&Sg(d,function(f){var g=c();0<g.length&&(f.Ae=g,a(f))})};function Wg(a){for(var b=[],c=0;c<Xg.length;c++){var d=a(Xg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Xg=[N.D,N.I],Yg=function(a){var b=a[N.Hd];b&&zg(40);var c=a[N.nf];c&&zg(41);for(var d=La(b)?b:[b],e={Pb:0};e.Pb<d.length;e={Pb:e.Pb},++e.Pb)Va(a,function(f){return function(g,h){if(g!==N.Hd&&g!==N.nf){var l=d[f.Pb];Hg().set(g,h,l,"BR","BR-SP",c)}}}(e))},Zg=function(a,b){Va(a,function(c,d){Hg().update(c,d)});Tg(b)},fh=function(a){var b=Ng(a);return void 0!=b?b:!0},gh=function(){return"G1"+Wg(Ng)},hh=function(a,b){Sg(a,b)},ih=function(a,b){Vg(a,b)},jh=function(a,b){Ug(a,
b)};var lh=function(a){return kh?H.querySelectorAll(a):null},mh=function(a,b){if(!kh)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},nh=!1;if(H.querySelectorAll)try{var oh=H.querySelectorAll(":root");oh&&1==oh.length&&oh[0]==H.documentElement&&(nh=!0)}catch(a){}var kh=nh;var ph,qh=!1;var rh=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,
null))}return!1};var Ah=/:[0-9]+$/,Bh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Eh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ch(a.protocol)||Ch(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(Ah,"").toLowerCase());return Dh(a,b,c,d,e)},Dh=function(a,b,c,d,e){var f,g=Ch(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Fh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Ah,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Fa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Oa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Bh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ch=function(a){return a?a.replace(":",
"").toLowerCase():""},Fh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Gh=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Fa("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ah,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Hh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=Gh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var Ih={},Jh=!0;var Lh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Mh=new RegExp(/@(gmail|googlemail)\./i),Nh=new RegExp(/support|noreply/i),Oh="SCRIPT STYLE IMG SVG PATH BR".split(" "),Ph=["BR"],Qh={};
function Rh(a){var b;if(a===H.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Rh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function Sh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function Th(a){if(0==a.length)return null;var b;b=Sh(a,function(c){return!Nh.test(c.sa)});b=Sh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=Sh(b,function(c){return!rh(c.element)});return b[0]}
var Uh=function(a){var b=!a||!!a.zi,c=!a||!!a.Ai,d=b+"."+c;a&&a.sd&&a.sd.length&&(d+="."+a.sd.join("."));var e=Qh[d];if(e&&200>bb()-e.timestamp)return e.result;var f;var g=[],h=H.body;if(h){for(var l=h.querySelectorAll("*"),m=0;m<l.length&&1E4>m;m++){var p=l[m];if(!(0<=Oh.indexOf(p.tagName.toUpperCase()))){for(var q=!1,r=0;r<p.childElementCount&&1E4>r;r++)if(!(0<=Ph.indexOf(p.children[r].tagName.toUpperCase()))){q=!0;break}q||g.push(p)}}f={elements:g,status:1E4<l.length?"2":"1"}}else f={elements:g,
status:"4"};for(var t=f,u=t.elements,v=[],w=0;w<u.length;w++){var y=u[w],x=y.textContent;y.value&&(x=y.value);if(x){var z=x.match(Lh);if(z){var B=z[0],C;if(A.location){var E=Dh(A.location,"host",!0);C=0<=B.toLowerCase().indexOf(E)}else C=!1;C||v.push({element:y,sa:B})}}}var D;var I=a&&a.sd;if(I&&0!==I.length){for(var T=[],R=0;R<v.length;R++){for(var U=!0,S=0;S<I.length;S++){var P=I[S];if(P&&mh(v[R].element,P)){U=!1;break}}U&&T.push(v[R])}D=T}else D=v;var K=Th(D),W=[];if(K){var ca=K.element,O={sa:K.sa,
tagName:ca.tagName,type:1};b&&(O.querySelector=Rh(ca));c&&(O.isVisible=!rh(ca));W.push(O)}var ka={elements:W,status:10<v.length?"3":t.status};Qh[d]={timestamp:bb(),result:ka};return ka},Vh=function(a){return a.tagName+":"+a.isVisible+":"+a.sa.length+":"+Mh.test(a.sa)};var jf={},pi=null,qi=Math.random();jf.N="GTM-52H238";jf.jd="770";jf.pj="";jf.Zg="ChEI8NCvhwYQ2sOk+L71+YjaARIjAC6pun0FltVXdWFYZS2fLNMQc+qMZ2gIAiECSNcnQiqO7S4aAiwM";var ri={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},si={__paused:!0,__tg:!0},ti;for(ti in ri)ri.hasOwnProperty(ti)&&(si[ti]=!0);var ui="www.googletagmanager.com/gtm.js";
var vi=ui,wi=Ya(""),xi=null,yi=null,zi="https://www.googletagmanager.com/a?id="+jf.N+"&cv=224",Ai={},Bi={},Ci=function(){var a=pi.sequence||1;pi.sequence=a+1;return a};jf.Yg="";var Di={},Ei=new Ta,Fi={},Gi={},Ji={name:"dataLayer",set:function(a,b){L(kb(a,b),Fi);Hi()},get:function(a){return Ii(a,2)},reset:function(){Ei=new Ta;Fi={};Hi()}},Ii=function(a,b){return 2!=b?Ei.get(a):Ki(a)},Ki=function(a,b){var c=a.split(".");b=b||[];for(var d=Fi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Oa(b,d))return}return d},Li=function(a,b){Gi.hasOwnProperty(a)||(Ei.set(a,b),L(kb(a,b),Fi),Hi())},Mi=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Ii(c,1);if(La(d)||Bc(d))d=L(d);Gi[c]=d}},Hi=function(a){Va(Gi,function(b,c){Ei.set(b,c);L(kb(b,void 0),Fi);L(kb(b,c),Fi);a&&delete Gi[b]})},Oi=function(a,b,c){Di[a]=Di[a]||{};Di[a][b]=Ni(b,c)},Ni=function(a,b){var c,d=1!==(void 0===b?2:b)?Ki(a):Ei.get(a);"array"===zc(d)||"object"===zc(d)?c=L(d):c=d;return c},Pi=function(a,b){if(Di[a])return Di[a][b]},Qi=function(a,b){Di[a]&&delete Di[a][b]};var Vi={},Wi=function(a,b){if(A._gtmexpgrp&&A._gtmexpgrp.hasOwnProperty(a))return A._gtmexpgrp[a];void 0===Vi[a]&&(Vi[a]=Math.floor(Math.random()*b));return Vi[a]};function Xi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function Yi(a){return"null"!==a.origin};var aj=function(a,b,c,d){return Zi(d)?Xi(a,String(b||$i()),c):[]},dj=function(a,b,c,d,e){if(Zi(e)){var f=bj(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=cj(f,function(g){return g.rd},b);if(1===f.length)return f[0].id;f=cj(f,function(g){return g.Cc},c);return f[0]?f[0].id:void 0}}};function ej(a,b,c,d){var e=$i(),f=window;Yi(f)&&(f.document.cookie=a);var g=$i();return e!=g||void 0!=c&&0<=aj(b,g,!1,d).indexOf(c)}
var ij=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Zi(c.Va))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fj(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Mi);g=e(g,"samesite",
c.$i);c.bj&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=gj(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!hj(u,c.path)&&ej(v,a,b,c.Va))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return hj(m,c.path)?1:ej(g,a,b,c.Va)?0:1},jj=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ij(a,b,c)};
function cj(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function bj(a,b,c){for(var d=[],e=aj(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),rd:1*l[0]||1,Cc:1*l[1]||1}))}}return d}
var fj=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},kj=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,lj=/(^|\.)doubleclick\.net$/i,hj=function(a,b){return lj.test(window.document.location.hostname)||"/"===b&&kj.test(a)},$i=function(){return Yi(window)?window.document.cookie:""},gj=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;lj.test(e)||kj.test(e)||a.push("none");return a},Zi=function(a){if(!Fg(Cg)||!a||!Qg())return!0;if(!Pg(a))return!1;var b=Ng(a);return null==b?!0:!!b};var mj=function(){return[Math.round(2147483647*Math.random()),Math.round(bb()/1E3)].join(".")},pj=function(a,b,c,d,e){var f=nj(b);return dj(a,f,oj(c),d,e)},qj=function(a,b,c,d){var e=""+nj(c),f=oj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nj=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function rj(a,b,c){var d,e=Number(null!=a.ub?a.ub:void 0);0!==e&&(d=new Date((b||bb())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var sj=["1"],tj={},xj=function(a){var b=uj(a.prefix);if(!tj[b]&&!vj(b,a.path,a.domain)){var c=mj();if(0===wj(b,c,a)){var d=Zb("google_tag_data",{});d._gcl_au?Fa("GTM",57):d._gcl_au=c}vj(b,a.path,a.domain)}};function wj(a,b,c){var d=qj(b,"1",c.domain,c.path),e=rj(c);e.Va="ad_storage";return jj(a,d,e)}function vj(a,b,c){var d=pj(a,b,c,sj,"ad_storage");d&&(tj[a]=d);return d}function uj(a){return(a||"_gcl")+"_au"};var yj=function(a){for(var b=[],c=H.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ff:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function zj(a,b){var c=yj(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].ff]||(d[c[e].ff]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),Aa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].ff].push(g)}}return d};function Aj(){for(var a=Bj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Cj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Bj,Dj;
function Ej(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Dj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Bj=Bj||Cj();Dj=Dj||Aj();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Fj;var Jj=function(){var a=Gj,b=Hj,c=Ij(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gc(H,"mousedown",d);gc(H,"keyup",d);gc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Kj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ij().decorators.push(f)},Lj=function(a,b,c){for(var d=Ij().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==H.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&fb(e,g.callback())}}return e},Ij=function(){var a=Zb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mj=/(.*?)\*(.*?)\*(.*)/,Nj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Oj=/^(?:www\.|m\.|amp\.)+/,Pj=/([^?#]+)(\?[^#]*)?(#.*)?/;function Qj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Sj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Bj=Bj||Cj();Dj=Dj||Aj();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),t=p?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|t>>4,y=(t&15)<<2|u>>6,x=u&63;q||(x=64,p||(y=64));l.push(Bj[v],Bj[w],Bj[y],Bj[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Rj(z),
z].join("*")},Rj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Fj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Fj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Fj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Uj=function(){return function(a){var b=Gh(A.location.href),
c=b.search.replace("?",""),d=Bh(c,"_gl",!1,!0)||"";a.query=Tj(d)||{};var e=Eh(b,"fragment").match(Qj("_gl"));a.fragment=Tj(e&&e[3]||"")||{}}},Vj=function(a){var b=Uj(),c=Ij();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(fb(d,e.query),a&&fb(d,e.fragment));return d},Tj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Mj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Rj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],t=0;t<r.length;t+=2)q[r[t]]=Ej(r[t+1]);return q}}}}catch(u){}};function Wj(a,b,c,d){function e(p){var q=p,r=Qj(a).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}p=t;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Pj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Xj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Lj(b,1,c),e=Lj(b,2,c),f=Lj(b,3,c);if(hb(d)){var g=Sj(d);c?Yj("_gl",g,a):Zj("_gl",g,a,!1)}if(!c&&hb(e)){var h=Sj(e);Zj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Zj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Yj(m,p,q);break a}}"string"==typeof q&&Wj(m,p,q,void 0)}}
function Zj(a,b,c,d){if(c.href){var e=Wj(a,b,c.href,void 0===d?!1:d);Eb.test(e)&&(c.href=e)}}
function Yj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Wj(a,b,c.action);Eb.test(m)&&(c.action=m)}}}
var Gj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Xj(e,e.hostname)}}catch(g){}},Hj=function(a){try{if(a.action){var b=Eh(Gh(a.action),"host");Xj(a,b)}}catch(c){}},ak=function(a,b,c,d){Jj();Kj(a,b,"fragment"===c?2:1,!!d,!1)},bk=function(a,b){Jj();Kj(a,[Dh(A.location,"host",!0)],b,!0,!0)},ck=function(){var a=H.location.hostname,b=Nj.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Oj,""),l=e.replace(Oj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},dk=function(a,b){return!1===a?!1:a||b||ck()};var kk={};var lk=/^\w+$/,mk=/^[\w-]+$/,nk={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},ok=function(){if(!Fg(Cg)||!Qg())return!0;var a=Ng("ad_storage");return null==a?!0:!!a},pk=function(a,b){Pg("ad_storage")?ok()?a():Vg(a,"ad_storage"):b?Fa("TAGGING",3):Ug(function(){pk(a,!0)},["ad_storage"])},rk=function(a){return qk(a).map(function(b){return b.Aa})},qk=function(a){var b=[];if(!Yi(A)||!H.cookie)return b;var c=aj(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Lc:d.Lc},e++){var f=sk(c[e]);if(null!=f){var g=f,h=g.version;d.Lc=g.Aa;var l=g.timestamp,m=g.labels,p=Pa(b,function(q){return function(r){return r.Aa===q.Lc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=tk(p.labels,m||[])):b.push({version:h,Aa:d.Lc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return uk(b)};function tk(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function vk(a){return a&&"string"==typeof a&&a.match(lk)?a:"_gcl"}
var xk=function(){var a=Gh(A.location.href),b=Eh(a,"query",!1,void 0,"gclid"),c=Eh(a,"query",!1,void 0,"gclsrc"),d=Eh(a,"query",!1,void 0,"wbraid"),e=Eh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Bh(f,"gclid",!1,void 0);c=c||Bh(f,"gclsrc",!1,void 0);d=d||Bh(f,"wbraid",!1,void 0)}return wk(b,c,e,d)},wk=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&mk.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(mk))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},yk=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Ak=function(a){var b=xk();pk(function(){zk(b,a)})};
function zk(a,b,c,d){function e(p,q){var r=Bk(p,f);r&&(jj(r,q,g),h=!0)}b=b||{};d=d||[];var f=vk(b.prefix);c=c||bb();var g=rj(b,c,!0);g.Va="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==kk.enable_gbraid_cookie_write?0:kk.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var Dk=function(a,b){var c=Vj(!0);pk(function(){for(var d=vk(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==nk[f]){var g=Bk(f,d),h=c[g];if(h){var l=Math.min(Ck(h),bb()),m;b:{var p=l;if(Yi(A))for(var q=aj(g,H.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(Ck(q[r])>p){m=!0;break b}m=!1}if(!m){var t=rj(b,l,!0);t.Va="ad_storage";jj(g,h,t)}}}}zk(wk(c.gclid,c.gclsrc),b)})},Bk=function(a,b){var c=nk[a];if(void 0!==c)return b+c},Ck=function(a){return 0!==Ek(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function sk(a){var b=Ek(a.split("."));return 0===b.length?null:{version:b[0],Aa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Ek(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!mk.test(a[2])?[]:a}
var Fk=function(a,b,c,d,e){if(La(b)&&Yi(A)){var f=vk(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Bk(a[l],f);if(m){var p=aj(m,H.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};pk(function(){ak(g,b,c,d)})}},uk=function(a){return a.filter(function(b){return mk.test(b.Aa)})},Gk=function(a,b){if(Yi(A)){for(var c=vk(b.prefix),d={},e=0;e<a.length;e++)nk[a[e]]&&(d[a[e]]=nk[a[e]]);pk(function(){Va(d,function(f,g){var h=aj(c+g,H.cookie,void 0,"ad_storage");h.sort(function(t,
u){return Ck(u)-Ck(t)});if(h.length){var l=h[0],m=Ck(l),p=0!==Ek(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==Ek(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];zk(q,b,m,p)}})})}};function Hk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ik=function(a){function b(e,f,g){g&&(e[f]=g)}if(Qg()){var c=xk();if(Hk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);bk(function(){return d},3);bk(function(){var e={};return e._up="1",e},1)}}};function Jk(a,b){var c=vk(b),d=Bk(a,c);if(!d)return 0;for(var e=qk(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function Kk(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var Lk=/^\d+\.fls\.doubleclick\.net$/;function Mk(a,b){Pg(N.D)?fh(N.D)?a():Vg(a,N.D):b?zg(42):jh(function(){Mk(a,!0)},[N.D])}function Nk(a){var b=Gh(A.location.href),c=Eh(b,"host",!1);if(c&&c.match(Lk)){var d=Eh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ok(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Nk("gcl"+a);if(d)return d.split(".")}var e=vk(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!fh(N.D)&&c,g;g=xk()[a]||[];if(0<g.length)return f?["0"]:g}var h=Bk(a,e);return h?rk(h):[]}function Pk(a){var b=[];Va(a,function(c,d){d=uk(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].Aa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var Qk=function(a){var b=Nk("gac");return b?!fh(N.D)&&a?"0":decodeURIComponent(b):Pk(ok()?zj():{})},Rk=function(a){var b=Nk("gacgb");return b?!fh(N.D)&&a?"0":decodeURIComponent(b):Pk(ok()?zj("_gac_gb",!0):{})},Sk=function(a,b,c){var d=xk(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!yk(h,c)||e.push({Aa:f,He:h});!g||c&&"dc"!==c||e.push({Aa:g,He:"ds"});Mk(function(){xj(b);var l=tj[uj(b.prefix)],m=!1;if(l&&0<e.length)for(var p=pi.joined_auid=pi.joined_auid||{},q=0;q<e.length;q++){var r=e[q],t=r.Aa,u=r.He,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w="gb"===u?w+"?gbraid="+t+"&auid="+l:w+"?gclid="+t+"&auid="+l+"&gclsrc="+u;mc(w);m=p[v]=!0}}null==a&&(a=
m);if(a&&l){var y=uj(b.prefix),x=tj[y];x&&wj(y,x,b)}})},Tk=function(a){var b;if(Nk("gclaw")||Nk("gac")||0<(xk().aw||[]).length)b=!1;else{var c;if(0<(xk().gb||[]).length)c=!0;else{var d=Math.max(Jk("aw",a),Kk(ok()?zj():{}));c=Math.max(Jk("gb",a),Kk(ok()?zj("_gac_gb",!0):{}))>d}b=c}return b};var Uk=/[A-Z]+/,Vk=/\s/,Wk=function(a){if(n(a)&&(a=$a(a),!Vk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Uk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],O:d}}}}},Yk=function(a){for(var b={},c=0;c<a.length;++c){var d=Wk(a[c]);d&&(b[d.id]=d)}Xk(b);var e=[];Va(b,function(f,g){e.push(g)});return e};
function Xk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.O[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Zk=function(){var a=!1;return a};var al=function(a,b,c,d){return(2===$k()||d||"http:"!=A.location.protocol?a:b)+c},$k=function(){var a=dc(),b;if(1===a)a:{var c=vi;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=H.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var nl=function(a){if(fh(N.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=Hh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=Hh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},ol=function(){var a;if(!(a=wi)){var b;if(!0===A._gtmdgs)b=!0;else{var c=Xb&&Xb.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Xa("1");return Wi(1,100)<d?Wi(2,2):-1},pl=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var ql=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),rl={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sl={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tl="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ul=function(){var a=!1;return a},wl=function(a){var b=Ii("gtm.allowlist")||Ii("gtm.whitelist");b&&zg(9);ul()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&ib(Za(b),rl),d=Ii("gtm.blocklist")||
Ii("gtm.blacklist");d||(d=Ii("tagTypeBlacklist"))&&zg(3);d?zg(8):d=[];vl()&&(d=Za(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Oa(Za(d),"google")&&zg(2);var e=d&&ib(Za(d),sl),f={};return function(g){var h=g&&g[me.pb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Bi[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Oa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Oa(c,l[q])){zg(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var t=0<=Oa(e,h);if(t)r=t;else{var u=Ua(e,l||[]);u&&zg(10);r=u}}var v=!m||r;v||!(0<=Oa(l,"sandboxedScripts"))||c&&-1!==Oa(c,"sandboxedScripts")||(v=Ua(e,tl));return f[h]=v}},vl=function(){return ql.test(A.location&&A.location.hostname)};var xl={active:!0,isAllowed:function(){return!0}},yl=function(a){var b=pi.zones;return b?b.checkState(jf.N,a):xl},zl=function(a){var b=pi.zones;!b&&a&&(b=pi.zones=a());return b};var Al=function(){},Bl=function(){};var Cl=!1,Dl=0,El=[];function Fl(a){if(!Cl){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Cl=!0;for(var e=0;e<El.length;e++)J(El[e])}El.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function Gl(){if(!Cl&&140>Dl){Dl++;try{H.documentElement.doScroll("left"),Fl()}catch(a){A.setTimeout(Gl,50)}}}var Hl=function(a){Cl?a():El.push(a)};var Jl=function(a,b){this.g=!1;this.F=[];this.H={tags:[]};this.R=!1;this.s=this.B=0;Il(this,a,b)},Kl=function(a,b,c,d){if(si.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Bc(d)&&(e=L(d,e));e.id=c;e.status="timeout";return a.H.tags.push(e)-1},Ll=function(a,b,c,d){var e=a.H.tags[b];e&&(e.status=c,e.executionTime=d)},Ml=function(a){if(!a.g){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.g=!0;a.F.length=0}},Il=function(a,b,c){Ja(b)&&a.kc(b);c&&A.setTimeout(function(){return Ml(a)},Number(c))};
Jl.prototype.kc=function(a){var b=this,c=eb(function(){return J(function(){a(jf.N,b.H)})});this.g?c():this.F.push(c)};var Nl=function(a){a.B++;return eb(function(){a.s++;a.R&&a.s>=a.B&&Ml(a)})};var Ol=function(){function a(d){return!Ka(d)||0>d?0:d}if(!pi._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ka(Ji.get("gtm.start"))?Ji.get("gtm.start"):0;pi._li={cst:a(c-b),cbt:a(yi-b)}}},Pl=function(a){A.performance&&A.performance.mark(jf.N+"_"+a+"_start")},Ql=function(a){if(A.performance){var b=jf.N+"_"+a+"_start",c=jf.N+"_"+a+"_duration";A.performance.measure(c,b);var d=A.performance.getEntriesByName(c)[0];A.performance.clearMarks(b);A.performance.clearMeasures(c);
var e=pi._p||{};void 0===e[a]&&(e[a]=d.duration,pi._p=e);return d.duration}},Rl=function(){if(A.performance&&A.performance.now){var a=pi._p||{};a.PAGEVIEW=A.performance.now();pi._p=a}};var Sl={},Tl=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},Ul=!1;
var Vl=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(A[b])A.hasOwnProperty(b)||zg(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(ab());A[b]=c}Ol();return A[b]},Wl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Tl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Xl=function(a){if(!Qg())return;var b=Tl();b(a+"require","linker");b(a+"linker:passthrough",
!0);};
var Zl=function(a){},Yl=function(){return A.GoogleAnalyticsObject||"ga"},$l=function(a,b){return function(){var c=Tl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var gm=function(a){},km=function(a){},lm=
function(){return"&tc="+Me.filter(function(a){return a}).length},om=function(){2022<=mm().length&&nm()},pm=function(a){return 0===a.indexOf("gtm.")?encodeURIComponent(a):"*"},rm=function(){qm||(qm=A.setTimeout(nm,500))},nm=function(){qm&&(A.clearTimeout(qm),qm=void 0);void 0===sm||tm[sm]&&!um&&!vm||(wm[sm]||xm.Di()||0>=ym--?(zg(1),wm[sm]=!0):(xm.Wi(),fc(mm(!0)),tm[sm]=!0,zm=Am=Bm=vm=um=""))},mm=function(a){var b=sm;if(void 0===b)return"";var c=Ga("GTM"),d=Ga("TAGGING");return[Cm,tm[b]?"":"&es=1",
Dm[b],gm(b),c?"&u="+c:"",d?"&ut="+d:"",lm(),um,vm,Bm,Am,km(a),zm,"&z=0"].join("")},Fm=function(){Cm=Em()},Em=function(){return[zi,"&v=3&t=t","&pid="+Sa(),"&rv="+jf.jd].join("")},jm=["L","S","Y"],fm=["S","E"],Gm={sampleRate:"0.005000",Rg:"",Qg:Number("5")},Hm=0<=H.location.search.indexOf("?gtm_latency=")||0<=H.location.search.indexOf("&gtm_latency="),Im;if(!(Im=Hm)){var Jm=Math.random(),Km=Gm.sampleRate;Im=Jm<Km}var Lm=Im,Mm={label:jf.N+" Container",children:[{label:"Initialization",children:[]}]},Cm=Em(),tm={},um="",vm="",zm="",Am="",im={},hm=!1,em={},Nm={},Bm="",sm=void 0,Dm={},wm={},qm=void 0,Om=2;0<Gm.Qg&&(Om=Gm.Qg);var xm=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);
return{Di:function(){return c<a?!1:bb()-d[c%a]<b},Wi:function(){var f=c++%a;d[f]=bb()}}}(Om,1E3),ym=1E3,Qm=function(a,b){if(Lm&&!wm[a]&&sm!==a){nm();sm=a;zm=um="";Dm[a]="&e="+pm(b)+"&eid="+a;rm();}},Rm=function(a,b,c,d){if(Lm&&b){var e,f=String(b[me.pb]||
"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var g=c+e;if(!wm[a]){a!==sm&&(nm(),sm=a);um=um?um+"."+g:"&tr="+g;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");
var l=(Oe[h]?"1":"2")+e;zm=zm?zm+"."+l:"&ti="+l;rm();om()}}};var Ym=function(a,b,c){if(Lm&&!wm[a]){a!==sm&&(nm(),
sm=a);var d=c+b;vm=vm?vm+"."+d:"&epr="+d;rm();om()}},Zm=function(a,b,c){};function $m(a,b,c,d){var e=Me[a],f=an(a,b,c,d);if(!f)return null;var g=Ue(e[me.Yf],c,[]);if(g&&g.length){var h=g[0];f=$m(h.index,{onSuccess:f,onFailure:1===h.rg?b.terminate:f,terminate:b.terminate},c,d)}return f}
function an(a,b,c,d){function e(){if(f[me.Lh])h();else{var w=Ve(f,c,[]);var y=w[me.Xg];if(null!=y)for(var x=0;x<y.length;x++)if(!fh(y[x])){h();return}var z=Kl(c.cb,String(f[me.pb]),Number(f[me.Zf]),w[me.Mh]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=bb()-E;Rm(c.id,Me[a],"5",D);Ll(c.cb,z,"success",
D);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=bb()-E;Rm(c.id,Me[a],"6",D);Ll(c.cb,z,"failure",D);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Rm(c.id,f,"1");var C=function(){var D=bb()-E;Rm(c.id,f,"7",D);Ll(c.cb,z,"exception",D);B||(B=!0,h())};var E=bb();try{Te(w,c)}catch(D){C(D)}}}var f=Me[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Oe(f))return null;var m=Ue(f[me.$f],c,[]);if(m&&m.length){var p=m[0],q=$m(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.rg?l:q}if(f[me.Uf]||f[me.Oh]){var r=f[me.Uf]?Ne:
c.gj,t=g,u=h;if(!r[a]){e=eb(e);var v=bn(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function bn(a,b,c){var d=[],e=[];b[a]=cn(d,e,c);return{onSuccess:function(){b[a]=dn;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=en;for(var f=0;f<e.length;f++)e[f]()}}}function cn(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function dn(a){a()}function en(a,b){b()};var hn=function(a,b){for(var c=[],d=0;d<Me.length;d++)if(a[d]){var e=Me[d];var f=Nl(b.cb);try{var g=$m(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Oe[p];l.call(h,{Mg:m,Dg:q?q.priorityOverride||0:0,Lb:g})}else fn(d,b),f()}catch(u){f()}}var r=b.cb;r.R=!0;r.s>=r.B&&Ml(r);c.sort(gn);for(var t=0;t<c.length;t++)c[t].Lb();
return 0<c.length};function gn(a,b){var c,d=b.Dg,e=a.Dg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Mg,h=b.Mg;f=g>h?1:g<h?-1:0}return f}function fn(a,b){if(!Lm)return;var c=function(d){var e=b.Oe(Me[d])?"3":"4",f=Ue(Me[d][me.Yf],b,[]);f&&f.length&&c(f[0].index);Rm(b.id,Me[d],e);var g=Ue(Me[d][me.$f],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var jn=!1,pn=function(a){var b=bb(),c=a["gtm.uniqueEventId"],d=a.event;if("gtm.js"===d){if(jn)return!1;jn=!0;}var g=yl(c),h=!1;if(!g.active){if("gtm.js"!==d)return!1;h=!0;g=yl(Number.MAX_SAFE_INTEGER)}
Qm(c,d);var l=a.eventCallback,m=a.eventTimeout,p=l;var q={id:c,name:d,Oe:wl(g.isAllowed),gj:[],Ag:function(){zg(6)},jg:kn(c),cb:new Jl(p,m)};q.ig=ln();
mn(c,q.cb);var r=df(q);h&&(r=nn(r));var t=hn(r,q);"gtm.js"!==d&&"gtm.sync"!==d||Zl(jf.N);switch(d){case "gtm.init":t&&zg(20)}return on(r,t)};function kn(a){return function(b){Lm&&(Fc(b)||Zm(a,"input",b))}}
function mn(a,b){Oi(a,"event",1);Oi(a,"ecommerce",1);Oi(a,"gtm");Oi(a,"eventModel");}function ln(){var a={};a.event=Ni("event",1);a.ecommerce=Ni("ecommerce",1);a.gtm=Ni("gtm");a.eventModel=Ni("eventModel");return a}function nn(a){for(var b=[],c=0;c<a.length;c++)a[c]&&ri[String(Me[c][me.pb])]&&(b[c]=!0);return b}
function on(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Me[c]&&!si[String(Me[c][me.pb])])return!0;return!1}function qn(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Gh(""+c+b).href}}function rn(a,b){return sn()?qn(a,b):void 0}function sn(){var a=!1;return a};var tn=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},un=function(a){var b=new tn;b.eventModel=a;return b},vn=function(a,b){a.targetConfig=b;return a},wn=function(a,b){a.containerConfig=b;return a},xn=function(a,b){a.remoteConfig=b;return a},yn=function(a,
b){a.globalConfig=b;return a},zn=function(a,b){a.onSuccess=b;return a},An=function(a,b){a.setContainerTypeLoaded=b;return a},Bn=function(a,b){a.getContainerTypeLoaded=b;return a},Cn=function(a,b){a.onFailure=b;return a};
tn.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Dn=function(a){function b(e){Va(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Va(c,function(e){d.push(e)});return d},En=function(a,b){function c(f){Bc(f)&&Va(f,function(g,h){e=!0;d[g]=h})}var d={},e=!1;c(a.globalConfig[b]);c(a.remoteConfig[b]);c(a.containerConfig[b]);c(a.targetConfig[b]);c(a.eventModel[b]);return e?d:void 0};var Fn;if(3===jf.jd.length)Fn="g";else{var Gn="G";Fn=Gn}
var Hn={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Fn,OPT:"o"},In=function(a){var b=jf.N.split("-"),c=b[0].toUpperCase(),d=Hn[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===jf.jd.length){var g="w";f="2"+g}else f="";return f+d+jf.jd+e};function Jn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var Kn=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Ln=function(){return Ib("iPhone")&&!Ib("iPod")&&!Ib("iPad")};Ib("Opera");Ib("Trident")||Ib("MSIE");Ib("Edge");!Ib("Gecko")||-1!=Fb.toLowerCase().indexOf("webkit")&&!Ib("Edge")||Ib("Trident")||Ib("MSIE")||Ib("Edge");-1!=Fb.toLowerCase().indexOf("webkit")&&!Ib("Edge")&&Ib("Mobile");Ib("Macintosh");Ib("Windows");Ib("Linux")||Ib("CrOS");var Mn=pa.navigator||null;Mn&&(Mn.appVersion||"").indexOf("X11");Ib("Android");Ln();Ib("iPad");Ib("iPod");Ln()||Ib("iPad")||Ib("iPod");Fb.toLowerCase().indexOf("kaios");var Nn=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null},On=function(a){var b=H;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Pn=function(){};var Qn=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Rn=function(a,b){this.s=a;this.g=null;this.F={};this.R=0;this.H=void 0===b?500:b;this.B=null};oa(Rn,Pn);
var Tn=function(a){return"function"===typeof a.s.__tcfapi||null!=Sn(a)};
Rn.prototype.addEventListener=function(a){var b={},c=Ub(function(){return a(b)}),d=0;-1!==this.H&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.H));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Qn(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Un(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Rn.prototype.removeEventListener=function(a){a&&a.listenerId&&Un(this,"removeEventListener",null,a.listenerId)};
var Wn=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Vn(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||Fg(Bg)&&"CH"===a.publisherCC)?!0:m&&Vn(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Vn(a.purpose.legitimateInterests,b)&&Vn(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Vn=function(a,b){return!(!a||!a[b])},Un=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Sn(a)){Xn(a);var f=++a.R;a.F[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Sn=function(a){if(a.g)return a.g;a.g=Nn(a.s,"__tcfapiLocator");return a.g},
Xn=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},Kn(a.s,a.B))};var Yn=!0;Yn=!1;var Zn={1:0,3:0,4:0,7:3,9:3,10:3},$n=Jn("",550),ao=Jn("",500);function bo(){var a=pi.tcf||{};return pi.tcf=a}
var co=function(a,b){this.B=a;this.g=b;this.s=bb();},eo=function(a){},fo=function(a){},lo=function(){var a=bo(),b=new Rn(A,Yn?3E3:-1),c=new co(b,a);if((go()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||Tn(b))){a.active=!0;a.Ec={};ho();var d=null;Yn?d=A.setTimeout(function(){io(a);jo(a);d=null},ao):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)io(a),jo(a),eo(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=ko(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Zn)if(Zn.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Qn(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:Wn(m,"1",0):!1;g["1"]=l}else g[h]=Wn(e,h,Zn[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Ec=f,jo(a),eo(c))}}),fo(c)}catch(e){d&&(clearTimeout(d),d=null),io(a),jo(a)}}};function io(a){a.type="e";a.tcString="tcunavailable";Yn&&(a.Ec=ko())}function ho(){var a={},b=(a.ad_storage="denied",a.wait_for_update=$n,a);Yg(b)}
var go=function(){var a=!1;a=!0;return a};function ko(){var a={},b;for(b in Zn)Zn.hasOwnProperty(b)&&(a[b]=!0);return a}function jo(a){var b={},c=(b.ad_storage=a.Ec["1"]?"granted":"denied",b);mo();Zg(c,0)}
var no=function(){var a=bo();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},mo=function(){var a=bo();return a.active?a.tcString||"":""},oo=function(){var a=bo();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},po=function(a){if(!Zn.hasOwnProperty(String(a)))return!0;var b=bo();return b.active&&b.Ec?!!b.Ec[String(a)]:!0};var qo=!1;qo=!0;function ro(a){var b=String(A.location).split(/[?#]/)[0],c=jf.Zg||A._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function so(a){function b(u){var v;pi.reported_gclid||(pi.reported_gclid={});v=pi.reported_gclid;var w;w=qo&&g&&(!Qg()||fh(N.D))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[w]){v[w]=!0;var y=[],x={},z=function(R,U){U&&(y.push(R+"="+encodeURIComponent(U)),x[R]=!0)},B="https://www.google.com";if(Qg()){var C=fh(N.D);z("gcs",gh());u&&z("gcu","1");Rg()&&z("gcd","G1"+Wg(Og));
pi.dedupe_gclid||(pi.dedupe_gclid=""+mj());z("rnd",pi.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&fh(N.D)){var E=rk("_gcl_aw");z("gclaw",E.join("."))}z("url",String(A.location).split(/[?#]/)[0]);z("dclid",to(d,p));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
z("gdpr_consent",mo()),z("gdpr",oo());"1"===Vj(!1)._up&&z("gtm_up","1");z("gclid",to(d,l));z("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(z("gbraid",to(d,q)),!x.gbraid&&Qg()&&fh(N.D))){var I=rk("_gcl_gb");z("gclgb",I.join("."))}z("gtm",In(!e));qo&&g&&fh(N.D)&&(xj(f||{}),z("auid",tj[uj(f.prefix)]||""));
a.og&&z("did",a.og);var T=B+"/pagead/landing?"+y.join("&");mc(T)}}var c=!!a.ze,d=!!a.qa,e=a.W,f=void 0===a.pd?{}:a.pd,g=void 0===a.wd?!0:a.wd,h=xk(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),t=Qg();if(r||t)t?jh(function(){b();fh(N.D)||ih(function(u){return b(!0,u.bi)},N.D)},[N.D]):b()}function to(a,b){var c=a&&!fh(N.D);return b&&c?"0":b}var yo=!1,zo=Number("200");function Ao(){if(!A.Promise)return!1;Ja(H.interestCohort)||yo||(yo=!0,On("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));return Ja(H.interestCohort)}
function Bo(){var a=pi.floc;if(a){var b=a.ts,c=a.floc;if(b&&c&&1E3>bb()-b)return Promise.resolve(c)}var d=void 0;try{d=Promise.race([H.interestCohort().then(function(e){pi.floc={ts:bb(),floc:e};return e}),new Promise(function(e){A.setTimeout(function(){return e()},zo)})]).catch(function(){})}catch(e){return}return d}var Bp=function(){var a=!0;po(7)&&po(9)&&po(10)||(a=!1);var b=!0;b=!1;b&&!xp()&&(a=!1);return a},xp=function(){var a=!0;po(3)&&po(4)||(a=!1);return a};var $p=!1;function aq(){var a=pi;return a.gcq=a.gcq||new bq}
var cq=function(a,b,c){aq().register(a,b,c)},dq=function(a,b,c,d){aq().push("event",[b,a],c,d)},eq=function(a,b){aq().push("config",[a],b)},fq=function(a,b,c,d){aq().push("get",[a,b],c,d)},gq=function(a){return aq().getRemoteConfig(a)},hq={},iq=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.B=null;this.g=!1},jq=function(a,b,c,d,e){this.type=a;this.B=b;this.W=c||"";this.g=d;this.s=e},bq=function(){this.s={};this.B={};this.g=[];this.F={AW:!1,
UA:!1};this.enableDeferrableCommandAfterConfig=$p},kq=function(a,b){var c=Wk(b);return a.s[c.containerId]=a.s[c.containerId]||new iq},lq=function(a,b,c){if(b){var d=Wk(b);if(d&&1===kq(a,b).status){kq(a,b).status=2;var e={};Lm&&(e.timeoutId=A.setTimeout(function(){zg(38);rm()},3E3));a.push("require",[e],d.containerId);hq[d.containerId]=bb();if(Zk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=rn(c,g)||h;cc(l)}}}},mq=function(a,b,c,d){if(d.W){var e=kq(a,d.W),f=e.B;if(f){var g=L(c),h=L(e.targetConfig[d.W]),l=L(e.containerConfig),m=L(e.remoteConfig),p=L(a.B),q=Ii("gtm.uniqueEventId"),r=Wk(d.W).prefix,t=Bn(An(Cn(zn(yn(xn(wn(vn(un(g),
h),l),m),p),function(){Ym(q,r,"2");}),function(){Ym(q,r,"3");}),function(u,v){a.F[u]=v}),function(u){return a.F[u]});try{Ym(q,r,"1");f(d.W,b,d.B,t)}catch(u){Ym(q,r,"4");}}}};
bq.prototype.register=function(a,b,c){var d=kq(this,a);if(3!==d.status){d.B=b;d.status=3;if(c){L(d.remoteConfig,c);d.remoteConfig=c}var e=Wk(a),f=hq[e.containerId];if(void 0!==f){var g=pi[e.containerId].bootstrap,h=e.prefix.toUpperCase();pi[e.containerId]._spx&&(h=h.toLowerCase());var l=Ii("gtm.uniqueEventId"),m=h,p=bb()-g;if(Lm&&!wm[l]){l!==sm&&(nm(),sm=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(p);Am=Am?Am+","+q:"&cl="+q}delete hq[e.containerId]}this.flush()}};bq.prototype.push=function(a,b,c,d){var e=Math.floor(bb()/1E3);lq(this,c,b[0][N.ma]||this.B[N.ma]);$p&&c&&kq(this,c).g&&(d=!1);this.g.push(new jq(a,e,c,b,d));d||this.flush()};bq.prototype.insert=function(a,b,c){var d=Math.floor(bb()/1E3);0<this.g.length?this.g.splice(1,0,new jq(a,d,c,b,!1)):this.g.push(new jq(a,d,c,b,!1))};
bq.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.s)$p?!f.W||kq(this,f.W).g?(f.s=!1,this.g.push(f)):c.push(f):(f.s=!1,this.g.push(f)),this.g.shift();else{switch(f.type){case "require":if(3!==kq(this,f.W).status&&!a){$p&&this.g.push.apply(this.g,c);return}Lm&&A.clearTimeout(f.g[0].timeoutId);break;case "set":Va(f.g[0],function(r,t){L(kb(r,t),b.B)});break;case "config":e.La={};Va(f.g[0],function(r){return function(t,u){L(kb(t,u),r.La)}}(e));var g=!!e.La[N.ad];
delete e.La[N.ad];var h=kq(this,f.W),l=Wk(f.W),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.W]={});h.g&&g||mq(this,N.Ea,e.La,f);h.g=!0;delete e.La[N.cc];m?L(e.La,h.containerConfig):L(e.La,h.targetConfig[f.W]);$p&&(d=!0);break;case "event":e.Kc={};Va(f.g[0],function(r){return function(t,u){L(kb(t,u),r.Kc)}}(e));mq(this,f.g[1],e.Kc,f);break;case "get":var p={},q=(p[N.Za]=f.g[0],p[N.Ya]=f.g[1],p);mq(this,N.Na,q,f)}this.g.shift();nq(this,f)}e={La:e.La,Kc:e.Kc}}$p&&(this.g.push.apply(this.g,
c),d&&this.flush())};var nq=function(a,b){if("require"!==b.type)if(b.W)for(var c=a.getCommandListeners(b.W)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var g=f.s[b.type]||[],h=0;h<g.length;h++)g[h]()}};bq.prototype.getRemoteConfig=function(a){return kq(this,a).remoteConfig};bq.prototype.getCommandListeners=function(a){return kq(this,a).s};function oq(a,b){var c=this;};function pq(a,b,c){};function qq(a,b,c,d){};function rq(a){};var sq=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":nc(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||nc(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||nc(a,"href")||a.src||a.code||a.codebase||"";return d},tq=function(a){pi.hasOwnProperty("autoEventsSettings")||(pi.autoEventsSettings={});var b=pi.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},uq=function(a,b,c){tq(a)[b]=c},vq=function(a,b,c,d){var e=tq(a),f=cb(e,b,d);e[b]=c(f)},wq=function(a,b,c){var d=tq(a);return cb(d,b,c)};var xq=["input","select","textarea"],yq=["button","hidden","image","reset","submit"],zq=function(a){var b=a.tagName.toLowerCase();return!Pa(xq,function(c){return c===b})||"input"===b&&Pa(yq,function(c){return c===a.type.toLowerCase()})?!1:!0},Aq=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):lc(a,["form"],100)},Bq=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(zq(g)){if(g.dataset[c]===d)return f;f++}}return 0};
function Fq(a){};var Gq={},Hq=[],Iq={},Jq=0,Kq=0;
function Rq(a,b){}
function Zq(a,b){}
;function $q(){};var ar={},br=[];
var ir=function(a,b){};

function lr(a,b){};var mr=/^\s*$/,nr,or=!1;
function zr(a,b){}function Ar(a,b,c){};var Br=!!A.MutationObserver,Cr=void 0,Dr=function(a){if(!Cr){var b=function(){var c=H.body;if(c)if(Br)(new MutationObserver(function(){for(var e=0;e<Cr.length;e++)J(Cr[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<Cr.length;e++)J(Cr[e])}))})}};Cr=[];H.body?b():J(b)}Cr.push(a)};var Fr=["www.youtube.com","www.youtube-nocookie.com"],Gr,Hr=!1,Ir=0;
function Sr(a,b){}function Tr(a,b){return!0};function Ur(a,b,c){};function Vr(a,b){var c;return c};function Wr(a){};function Xr(a){};var Yr=!1,Zr=[];function $r(){if(!Yr){Yr=!0;for(var a=0;a<Zr.length;a++)J(Zr[a])}}var as=function(a){Yr?J(a):Zr.push(a)};function bs(a){M(G(this),["listener:!Fn"],arguments);hg(this,"process_dom_events","window","load");as(Dc(a))};function cs(a){var b;return b};function ds(a,b){var c;var d=!1;var e=Cc(c,this.g,d);void 0===e&&void 0!==c&&zg(45);return e};function es(a){var b;return b};function fs(a,b){var c=null,d=!1;M(G(this),["functionPath:!string","arrayPath:!string"],arguments);hg(this,"access_globals","readwrite",a);hg(this,"access_globals","readwrite",b);var e=[A,H],f=a.split("."),g=jb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ja(l))return null;
if(l)return Cc(l,this.g,d);var m;l=function(){if(!Ja(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),q=jb(p,e),r=p[p.length-1];if(void 0===q)throw Error("Path "+p+" does not exist.");m=q[r];void 0===m&&(m=[],q[r]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Cc(c,this.g,d)};function gs(a){var b;var g=!1;return Cc(b,this.g,g)};function hs(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var is=new Ta;function js(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=is.get(e);f||(f=new RegExp(b,d),is.set(e,f));return f.test(a)}catch(g){return!1}}
function ks(a,b){function c(g){var h=Gh(g),l=Eh(h,"protocol"),m=Eh(h,"host",!0),p=Eh(h,"port"),q=Eh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ls(a){return ms(a)?1:0}
function ms(a){var b=a.arg0,c=a.arg1;if(a.any_of&&La(c)){for(var d=0;d<c.length;d++){var e=L(a,{});L({arg1:c[d],any_of:void 0},e);if(ls(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return hs(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Oa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return js(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ks(b,c)}return!1};function ns(a){return!1}var os;function ps(a){var b=!1;return b};var qs=function(a){var b;return b};function rs(a,b){b=void 0===b?!0:b;var c;return c};function ss(a){var b=null;return b};function ts(a,b){var c;return c};function us(a,b){var c;return c};function vs(a){var b="";return b};function ws(a,b){var c;return c};function xs(a){var b="";return b};function ys(){hg(this,"get_user_agent");return A.navigator.userAgent};function zs(a,b){};var As={};function Bs(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],cc(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)J(g[h]);g.push=function(l){J(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)J(g[h]);e[f]=null},b)):cc(a,c,d,b)}
function Cs(a,b,c,d){M(G(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);hg(this,"inject_script",a);var e=this.g;Bs(a,void 0,function(){b&&b.s(e)},function(){c&&c.s(e)},As,d);}var Ds=Object.freeze({dl:1,id:1}),Es={};
function Fs(a,b,c,d){};function Gs(a){var b=!0;return b};var Hs=function(){return!1},Is={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Js=["textContent","value","tagName","children","childElementCount"];
function Ks(a){var b;return b};function Ls(){};function Ms(a,b){var c;return c};function Ns(a){var b=void 0;return b};function Os(a,b){var c=!1;return c};function Ps(){var a="";return a};function Qs(){var a="";return a};var Rs=["set","get","config","event"];
function Ss(a,b,c){};function Ts(){};function Us(a,b,c,d){d=void 0===d?!1:d;};function Vs(a,b,c){};function Ws(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Xs(a){M(G(this),["consentSettings:!DustMap"],arguments);for(var b=a.qb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==N.Hd&&hg(this,"access_consent",e,"write")}Yg(Dc(a))};function Ys(a,b,c){M(G(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);hg(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=jb(e,[A,H]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Dc(b,this.g,d),!0;return!1};function Zs(a,b,c){}
;var $s=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function at(a,b,c,d){var e=this;};function bt(a,b,c){}
;var ct={},dt={};ct.getItem=function(a){var b=null;return b};
ct.setItem=function(a,b){};
ct.removeItem=function(a){};ct.clear=function(){};var et=function(a){var b;return b};function ft(a){M(G(this),["consentSettings:!DustMap"],arguments);var b=Dc(a),c;for(c in b)b.hasOwnProperty(c)&&hg(this,"access_consent",c,"write");Zg(b)};var je=function(){var a=new ug;Zk()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",zs),a.add("injectScript",Cs));var b=Vs;a.add("Math",ag());a.add("TestHelper",xg());a.add("addEventCallback",rq);a.add("aliasInWindow",Tr);a.add("assertApi",Xf);a.add("assertThat",Yf);a.add("callInWindow",
Vr);a.add("callLater",Wr);a.add("copyFromDataLayer",ds);a.add("copyFromWindow",es);a.add("createArgumentsQueue",fs);a.add("createQueue",gs);a.add("decodeUri",bg);a.add("decodeUriComponent",cg);a.add("encodeUri",dg);a.add("encodeUriComponent",eg);a.add("fail",fg);a.add("fromBase64",qs,!("atob"in A));a.add("generateRandom",gg);a.add("getContainerVersion",ig);a.add("getCookieValues",rs);a.add("getQueryParameters",ts);a.add("getReferrerQueryParameters",us);a.add("getReferrerUrl",vs);a.add("getTimestamp",
jg);a.add("getTimestampMillis",jg);a.add("getType",kg);a.add("getUrl",xs);a.add("localStorage",Is,!Hs());a.add("logToConsole",Ls);a.add("makeInteger",mg);a.add("makeNumber",ng);a.add("makeString",og);a.add("makeTableMap",pg);a.add("mock",rg);a.add("parseUrl",Ns);a.add("queryPermission",Os);a.add("readCharacterSet",Ps);a.add("readTitle",Qs);a.add("sendPixel",b);a.add("setCookie",Ws);a.add("setInWindow",Ys);a.add("sha256",at);a.add("templateStorage",ct);a.add("toBase64",et,!("btoa"in A));a.add("JSON",
lg(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;
c=!0;c&&a.add("setDefaultConsentState",Xs);a.add("updateConsentState",ft);
a.add("isConsentGranted",Gs);a.add("addConsentListener",oq);
wg(a,"callOnWindowLoad",bs);Zk()?wg(a,"internal.injectScript",
Ha):wg(a,"internal.injectScript",Fs);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.s.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.vc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.s.hasOwnProperty(d)?a.s[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var gt=function(){return!1},ht=function(){var a={};return function(b,c,d){}};var he,qf;
function it(){var a=data.runtime||[],b=data.runtime_lines;he=new Zd;jt();Ie=function(e,f,g){kt(f);var h=new sb;Va(f,function(t,u){var v=Cc(u);void 0===v&&void 0!==u&&zg(44);h.set(t,v)});he.g.g.H=af();var l={Xh:rf(e),eventId:void 0!==g?g.id:void 0,kc:void 0!==g?function(t){return g.cb.kc(t)}:void 0,vc:function(){return e},log:function(){}};if(gt()){var m=ht(),
p=void 0,q=void 0;l.Ca={mc:{},Mb:function(t,u,v){1===u&&(p=t);7===u&&(q=v);m(t,u,v)},Re:qg()};l.log=function(t,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:t,source:q,message:v})}}}var r=ie(l,[e,h]);he.g.g.H=void 0;r instanceof ra&&"return"===r.g&&(r=r.s);return Dc(r)};ke();for(var c=0;c<a.length;c++){var d=a[c];if(!La(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Ye(d,b[c]);he.Lb(d)}}
function kt(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ja(b)&&(a.gtmOnSuccess=function(){J(b)});Ja(c)&&(a.gtmOnFailure=function(){J(c)})}function jt(){var a=he;pi.SANDBOXED_JS_SEMAPHORE=pi.SANDBOXED_JS_SEMAPHORE||0;le(a,function(b,c,d){pi.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{pi.SANDBOXED_JS_SEMAPHORE--}})}function lt(a){void 0!==a&&Va(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Bi[e]=Bi[e]||[];Bi[e].push(b)}})};var mt="HA GF G UA AW DC".split(" "),nt=!1,ot={},pt=!1;function qt(a,b){var c={event:a};b&&(c.eventModel=L(b),b[N.Wd]&&(c.eventCallback=b[N.Wd]),b[N.Tc]&&(c.eventTimeout=b[N.Tc]));return c}function rt(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Ci()});return a["gtm.uniqueEventId"]}
function st(){return nt}
var vt={config:function(a){var b,c;c=rt(a);void 0===c&&(c=Ci());return b},consent:function(a){function b(){st()&&L(a[2],{subcommand:a[1]})}if(3===a.length){zg(39);var c=Ci(),d=a[1];"default"===d?(b(),Yg(a[2])):"update"===d&&(b(),Zg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&n(b)){var c;if(2<a.length){if(!Bc(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=qt(b,c),e=void 0;e=rt(a),d["gtm.uniqueEventId"]=e;void 0===e&&Ci();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){pt=!0;st();var b={event:"gtm.js","gtm.start":a[1].getTime()};b["gtm.uniqueEventId"]=rt(a);return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=qf.s;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Bc(a[1])?b=L(a[1]):3==a.length&&n(a[1])&&(b={},Bc(a[2])||La(a[2])?b[a[1]]=L(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},wt={policy:!0};var xt=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},zt=function(a){var b=yt(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Qt=function(a){if(Pt(a))return a;this.g=a};Qt.prototype.wi=function(){return this.g};var Pt=function(a){return!a||"object"!==zc(a)||Bc(a)?!1:"getUntrustedUpdateValue"in a};Qt.prototype.getUntrustedUpdateValue=Qt.prototype.wi;var Rt=[],St=!1,Tt=!1,Ut=!1,Vt=function(a){return A["dataLayer"].push(a)},Wt=function(a){var b=pi["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Xt(a){var b=a._clear;Va(a,function(d,e){"_clear"!==d&&(b&&Li(d,void 0),Li(d,e))});xi||(xi=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Ci(),a["gtm.uniqueEventId"]=c,Li("gtm.uniqueEventId",c));return pn(a)}function Yt(){var a=Rt[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Wa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Zt(){for(var a=!1;!Ut&&0<Rt.length;){var b=!1;b=!0;if(b&&!Tt&&Yt()){var c={};Rt.unshift((c.event=
"gtm.init",c));Tt=!0}var d=!1;d=!0;if(d&&!St&&Yt()){var e={};Rt.unshift((e.event="gtm.init_consent",e));St=!0}Ut=!0;delete Fi.eventModel;Hi();var f=Rt.shift();if(null!=f){var g=Pt(f);
if(g){var h=f;f=Pt(h)?h.getUntrustedUpdateValue():void 0;Mi()}try{if(Ja(f))try{f.call(Ji)}catch(v){}else if(La(f)){var l=f;if(n(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=Ii(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if(Wa(f)){a:{var t=f;if(t.length&&n(t[0])){var u=vt[t[0]];if(u&&(!g||!wt[t[0]])){f=u(t);break a}}f=void 0}if(!f){Ut=!1;continue}}a=Xt(f)||a}}finally{g&&Hi(!0)}}Ut=!1}
return!a}function $t(){var b=Zt();try{xt(A["dataLayer"],jf.N)}catch(c){}return b}
var bu=function(){var a=Zb("dataLayer",[]),b=Zb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Hl(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});as(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<pi.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Qt(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Rt.push.apply(Rt,e);if(300<
this.length)for(zg(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Zt()&&h};var d=a.slice(0);Rt.push.apply(Rt,d);if(au()){J($t)}},au=function(){var a=!0;return a};var cu={};cu.dd=new String("undefined");
var du=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===cu.dd?b:a[d]);return c.join("")}};du.prototype.toString=function(){return this.g("undefined")};du.prototype.valueOf=du.prototype.toString;cu.Qh=du;cu.pe={};cu.gi=function(a){return new du(a)};var eu={};cu.Xi=function(a,b){var c=Ci();eu[c]=[a,b];return c};cu.mg=function(a){var b=a?0:1;return function(c){var d=eu[c];if(d&&"function"===typeof d[b])d[b]();eu[c]=void 0}};cu.Ci=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};cu.Ti=function(a){if(a===cu.dd)return a;var b=Ci();cu.pe[b]=a;return'google_tag_manager["'+jf.N+'"].macro('+b+")"};cu.Ni=function(a,b,c){a instanceof cu.Qh&&(a=a.g(cu.Xi(b,c)),b=Ha);return{xi:a,onSuccess:b}};var pu=A.clearTimeout,qu=A.setTimeout,Q=function(a,b,c){if(Zk()){b&&J(b)}else return cc(a,b,c)},ru=function(){return new Date},su=function(){return A.location.href},tu=function(a){return Eh(Gh(a),"fragment")},uu=function(a){return Fh(Gh(a))},vu=function(a,b){return Ii(a,b||2)},wu=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Vt(a)):d=Vt(a);return d},xu=function(a,b){A[a]=b},V=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},yu=function(a,b,c){return aj(a,b,void 0===c?!0:!!c)},zu=function(a,b,c){return 0===jj(a,b,c)},Au=function(a,b){if(Zk()){b&&J(b)}else ec(a,b)},Bu=function(a){return!!wq(a,"init",!1)},Cu=function(a){uq(a,"init",!0)},Du=function(a){var b=vi+"?id="+encodeURIComponent(a)+"&l=dataLayer";Q(al("https://","http://",b))},Eu=function(a,b,c){Lm&&(Fc(a)||Zm(c,b,a))};
var Fu=cu.Ni;var bv=encodeURI,X=encodeURIComponent,cv=fc;var dv=function(a,b){if(!a)return!1;var c=Eh(Gh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ev=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Lw(){return A.gaGlobal=A.gaGlobal||{}}var Mw=function(){var a=Lw();a.hid=a.hid||Sa();return a.hid},Nw=function(a,b){var c=Lw();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var kx=function(){if(Ja(A.__uspapi)){var a="";try{A.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Fx=window,Gx=document,Hx=function(a){var b=Fx._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Fx["ga-disable-"+a])return!0;try{var c=Fx.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Xi("AMP_TOKEN",String(Gx.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Gx.getElementById("__gaOptOutExtension")?!0:!1};var Ix={};
function Lx(a){delete a.eventModel[N.cc];Nx(a.eventModel)}var Nx=function(a){Va(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[N.Qa]||{};Va(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Qx=function(a,b,c){dq(b,c,a)},Rx=function(a,b,c){dq(b,c,a,!0)},Zx=function(a,b){};
function Sx(a,b){}var Y={h:{}};
Y.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Y.__gaawc=b;Y.__gaawc.m="gaawc";Y.__gaawc.o=!0;Y.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=ev(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(N.Qa)||b.vtp_userProperties){var e=d[N.Qa]||{};L(ev(b.vtp_userProperties,"name","value"),e);d[N.Qa]=e}b.vtp_enableSendToServerContainer&&b.vtp_serverContainerUrl&&(d[N.ma]=b.vtp_serverContainerUrl,
d[N.Xb]=!0);var f=b.vtp_userDataVariable;f&&(d[N.xa]=f);a(d,N.Qf,function(g){return Ya(g)});a(d,N.Sf,function(g){return Number(g)});d.send_page_view=b.vtp_sendPageView;eq(d,c);J(b.vtp_gtmOnSuccess)})}();Y.h.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.m="ctv";Y.__ctv.o=!0;Y.__ctv.priorityOverride=0})(function(){return"224"})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.m="jsm";Y.__jsm.o=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);Eu(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.m="c";Y.__c.o=!0;Y.__c.priorityOverride=0})(function(a){Eu(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.d=["google"],function(){(function(a){Y.__d=a;Y.__d.m="d";Y.__d.o=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType)try{var e=lh(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}catch(f){b=null}else b=H.getElementById(a.vtp_elementId);b&&(d?c=ic(b,d):c=jc(b));return $a(String(b&&c))})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.m="e";Y.__e.o=!0;Y.__e.priorityOverride=0})(function(a){var b=String(Pi(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.m="f";Y.__f.o=!0;Y.__f.priorityOverride=0})(function(a){var b=vu("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Eh(Gh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):uu(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=sq(c,"gtm.click");wu(d)}}(function(b){Y.__cl=b;Y.__cl.m="cl";Y.__cl.o=!0;Y.__cl.priorityOverride=0})(function(b){if(!Bu("cl")){var c=V("document");gc(c,"click",a,!0);Cu("cl")}J(b.vtp_gtmOnSuccess)})}();

Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid "+b+" request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.m="access_globals";Y.__access_globals.o=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!n(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Oa(e,r))return}else if("write"===q){if(-1<Oa(f,r))return}else if("readwrite"===q){if(-1<Oa(f,r)&&-1<Oa(e,r))return}else if("execute"===q){if(-1<Oa(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},V:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.m="r";Y.__r.o=!0;Y.__r.priorityOverride=0})(function(a){return Sa(a.vtp_min,a.vtp_max)})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.m="u";Y.__u.o=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:vu("gtm.url",1))||su();var d=b[a("vtp_component")];if(!d||"URL"==d)return uu(String(c));var e=Gh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?La(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=Eh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Eh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.m="v";Y.__v.o=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=vu(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Eu(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.ua=["google"],function(){function a(q){return fh(q)}function b(q,r,t){var u=!1;if(Qg()&&!u&&!e[q]){var v=!fh(N.I),w=function(){var y=Tl(),x="gtm"+Ci(),z=m(r);z["&gtm"]=In(!0);var B={name:x};l(z,B,!0);var C=void 0,E=B._useUp;y(function(){var D=y.getByName(t);D&&(C=D.get("clientId"))});
y("create",q,B);v&&fh(N.I)&&(v=!1,y(function(){var D=y.getByName(x);!D||D.get("clientId")===C&&E||(z["&gcs"]=gh(),z["&gcu"]="1",D.set(z),D.send("pageview"))}));y(function(){y.remove(x)})};Vg(w,N.I);Vg(w,N.D);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,r,t){var u=0;if(q)for(var v in q)if(!h[v]&&
q.hasOwnProperty(v)&&(t&&f[v]||!t&&void 0===f[v])){var w=g[v]?Ya(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);r[v]=w;u++}return u},m=function(q){var r={};q.vtp_gaSettings&&L(ev(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);L(ev(q.vtp_fieldsToSet,"fieldName","value"),r);fh(N.I)||(r.storage="none");fh(N.D)||(r.allowAdFeatures=!1,r.storeGac=!1);Bp()||(r.allowAdFeatures=!1);xp()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(Ya(r.urlPassthrough)){r._useUp=!0;var t=!1;Qg()&&!t&&(r._cs=a)}return r},p=function(q){function r(Ca,ma){void 0!==ma&&D("set",Ca,ma)}var t={},u={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;L(ev(y.vtp_contentGroup,"index","group"),u);L(ev(y.vtp_dimension,"index","dimension"),v);L(ev(y.vtp_metric,"index","metric"),w);var x=L(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=
void 0;q=L(q,x)}L(ev(q.vtp_contentGroup,"index","group"),u);L(ev(q.vtp_dimension,"index","dimension"),v);L(ev(q.vtp_metric,"index","metric"),w);var z=m(q),B=Vl(q.vtp_functionName);if(Ja(B)){var C="",E="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+Ci(),C=E+".");var D=function(Ca){var ma=[].slice.call(arguments,0);ma[0]=C+ma[0];B.apply(window,ma)},I=function(Ca,ma){return void 0===ma?ma:Ca(ma)},T=function(Ca,ma){if(ma)for(var gb in ma)ma.hasOwnProperty(gb)&&
D("set",Ca+gb,ma[gb])},R=function(){var Ca={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},ma={},gb=(ma[N.Jd]="click",ma[N.Ma]="detail",ma[N.zb]="add",ma[N.Ab]="remove",ma[N.ib]="checkout",ma[N.va]="purchase",ma[N.Bb]="refund",ma),Qb={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_variant:"variant",index:"position",
promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Rb={item_category:0,item_category2:1,item_category3:2,item_category4:3,item_category5:4},xc=function(Ia,Ra){for(var Na in Ia)Ca.hasOwnProperty(Na)&&(Ia[Ra]=Ia[Ra]||{},Ia[Ra].actionField=Ia[Ra].actionField||{},Ia[Ra].actionField[Ca[Na]]=Ia[Na])},tb=function(Ia,Ra){for(var Na="",db=0;db<Ra.length;db++)void 0!==Ra[db]&&(""!==Na&&(Na+="/"),Na+=Ra[db]);Ia.category=Na},ob=function(Ia){for(var Ra=[],Na={},db=0;db<
Ia.length;Na={xb:Na.xb,Rb:Na.Rb},db++){Na.xb={};var sd=Ia[db];Na.Rb=[];Va(sd,function(mf){return function(Kc,td){Qb.hasOwnProperty(Kc)?mf.xb[Qb[Kc]]=td:Rb.hasOwnProperty(Kc)?mf.Rb[Rb[Kc]]=td:mf.xb[Kc]=td}}(Na));0<Na.Rb.length&&tb(Na.xb,Na.Rb);Ra.push(Na.xb)}return Ra},zb=function(Ia,Ra,Na){if(!Bc(Ra))return!1;for(var db=cb(Object(Ra),Na,[]),sd=0;db&&sd<db.length;sd++)D(Ia,db[sd]);return!!db&&0<db.length},Z;if(q.vtp_useEcommerceDataLayer){var Sb=!1;if(q.vtp_useGA4SchemaForEcommerce){
q.vtp_gtmCachedValues&&(Z=q.vtp_gtmCachedValues.eventModel);Z=Z||Pi(q.vtp_gtmEventId,"eventModel");Sb=!!Z}
Sb||(Z=vu("ecommerce",1))}else q.vtp_ecommerceMacroData&&(Z=q.vtp_ecommerceMacroData.ecommerce,!Z&&q.vtp_useGA4SchemaForEcommerce&&(Z=q.vtp_ecommerceMacroData));if(!Bc(Z))return;Z=Object(Z);if(q.vtp_useGA4SchemaForEcommerce){Z=L(Z);Z.currencyCode=Z.currencyCode||Z.currency;var Tb;q.vtp_gtmCachedValues&&(Tb=q.vtp_gtmCachedValues.event);Tb=Tb||String(Pi(q.vtp_gtmEventId,"event"));if("view_item_list"===
Tb&&!Z.impressions&&Z.items)Z.impressions=ob(Z.items);else if("view_promotion"===Tb&&!Z.promoView&&Z.items)Z.promoView={},Z.promoView.promotions=ob(Z.items);else if("select_promotion"===Tb&&!Z.promoClick)Z.items&&(Z.promoClick={},Z.promoClick.promotions=ob(Z.items)),xc(Z,"promoClick");else if(gb.hasOwnProperty(Tb)){var qd=gb[Tb];Z[qd]||(Z.items&&(Z[qd]={},Z[qd].products=ob(Z.items)),xc(Z,qd))}}var rd=cb(z,"currencyCode",Z.currencyCode);void 0!==rd&&D("set","&cu",rd);zb("ec:addImpression",Z,"impressions");
if(zb("ec:addPromo",Z[Z.promoClick?"promoClick":"promoView"],"promotions")&&Z.promoClick){D("ec:setAction","promo_click",Z.promoClick.actionField);return}for(var ce="detail checkout checkout_option click add remove purchase refund".split(" "),de="refund purchase remove checkout checkout_option add click detail".split(" "),ee=0;ee<ce.length;ee++){var Jc=Z[ce[ee]];if(Jc){zb("ec:addProduct",Jc,"products");D("ec:setAction",ce[ee],Jc.actionField);if(Lm)for(var fe=0;fe<de.length;fe++){var ge=Z[de[fe]];
if(ge){ge!==Jc&&zg(13);break}}break}}},U={name:E};l(z,U,!0);var S=q.vtp_trackingId||t.trackingId;B("create",S,U);D("set","&gtm",In(!0));var P=!1;
Qg()&&!P&&(D("set","&gcs",gh()),b(S,q,E));z._x_19&&z._x_20&&!d[E]&&(d[E]=!0,B($l(E,String(z._x_20))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(Ca,ma){void 0!==q[ma]&&D("set",Ca,q[ma])})("nonInteraction","vtp_nonInteraction");T("contentGroup",u);T("dimension",v);T("metric",w);var K={};l(z,K,!1)&&D("set",K);var W;
q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var Ca=z&&z.hitCallback;Ja(Ca)&&Ca();q.vtp_gtmOnSuccess()});var ca=function(Ca,ma){return void 0===q[Ca]?t[ma]:q[Ca]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),R());var O={hitType:"event",eventCategory:String(ca("vtp_eventCategory","category")),eventAction:String(ca("vtp_eventAction","action")),eventLabel:I(String,
ca("vtp_eventLabel","label")),eventValue:I(Xa,ca("vtp_eventValue","value"))};l(W,O,!1);D("send",O);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(D("require","ec","ec.js"),R());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var $g="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:$g})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var ek="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:ek})}W?D("send","pageview",W):D("send","pageview");Ya(z.urlPassthrough)&&Xl(C)}if(!c){var pd=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(pd="internal/"+pd);c=!0;var ae=rn(z._x_19,"/analytics.js"),be=al("https:","http:","//www.google-analytics.com/"+pd,z&&!!z.forceSSL);Q("analytics.js"===pd&&ae?ae:be,function(){var Ca=
Tl();Ca&&Ca.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else J(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.m="ua";Y.__ua.o=!0;Y.__ua.priorityOverride=0})(function(q){jh(function(){p(q)},
[N.I,N.D])})}();
Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.m="inject_script";Y.__inject_script.o=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!n(f))throw d(e,{},"Script URL must be a string.");try{if(Qf(Gh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},V:a}})}();


Y.h.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.m="cid";Y.__cid.o=!0;Y.__cid.priorityOverride=0})(function(){return jf.N})}();

Y.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"],b=!1;b=!0;(function(c){Y.__gclidw=c;Y.__gclidw.m="gclidw";Y.__gclidw.o=!0;Y.__gclidw.priorityOverride=100})(function(c){J(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||ck())&&Dk(a,l));Ak(l);Gk(["aw","dc"],l);b?Sk(h,l):Sk(h,l,"dc");var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Fk(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=vu(N.T);so({ze:!1,
qa:void 0!=q&&!1!==q,pd:l,wd:!0});c.vtp_enableUrlPassthrough&&Ik(["aw","dc","gb"])});}();


Y.h.aev=["google"],function(){function a(t,u,v){var w=t||Pi(u,"gtm");if(w)return w[v]}function b(t,u,v,w,y){y||(y="element");var x=u+"."+v,z;if(p.hasOwnProperty(x))z=p[x];else{var B=a(t,u,y);if(B&&(z=w(B),p[x]=z,q.push(x),35<q.length)){var C=q.shift();delete p[C]}}return z}function c(t,u,v,w){var y=a(t,u,r[v]);return void 0!==y?y:w}function d(t,u){if(!t)return!1;var v=e(su());La(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(B){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(t))return!1}else{var z=x;if(0!=z.length){if(0<=e(t).indexOf(z))return!1;w.push(e(z))}}}return!dv(t,w)}function e(t){m.test(t)||(t="http://"+t);return Eh(Gh(t),"HOST",!0)}function f(t,u,v,w){switch(t){case "SUBMIT_TEXT":return b(u,v,"FORM."+t,g,"formSubmitElement")||w;case "LENGTH":var y=b(u,v,"FORM."+t,h);return void 0===y?w:y;case "INTERACTED_FIELD_ID":return l(u,v,"id",w);case "INTERACTED_FIELD_NAME":return l(u,
v,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,v,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(u,v,"interactedFormFieldPosition");return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var z=a(u,v,"interactSequenceNumber");return void 0===z?w:z;default:return w}}function g(t){switch(t.tagName.toLowerCase()){case "input":return ic(t,"value");case "button":return jc(t);default:return null}}function h(t){if("form"===t.tagName.toLowerCase()&&t.elements){for(var u=0,v=0;v<t.elements.length;v++)zq(t.elements[v])&&
u++;return u}}function l(t,u,v,w){var y=a(t,u,"interactedFormField");return y&&ic(y,v)||w}var m=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(t){Y.__aev=t;Y.__aev.m="aev";Y.__aev.o=!0;Y.__aev.priorityOverride=
0})(function(t){var u=t.vtp_gtmEventId,v=t.vtp_defaultValue,w=t.vtp_varType,y;t.vtp_gtmCachedValues&&(y=t.vtp_gtmCachedValues.gtm);switch(w){case "TAG_NAME":var x=a(y,u,"element");return x&&x.tagName||v;case "TEXT":return b(y,u,w,jc)||v;case "URL":var z;a:{var B=String(a(y,u,"elementUrl")||v||""),C=Gh(B),E=String(t.vtp_component||"URL");switch(E){case "URL":z=B;break a;case "IS_OUTBOUND":z=
d(B,t.vtp_affiliatedDomains);break a;default:z=Eh(C,E,t.vtp_stripWww,t.vtp_defaultPages,t.vtp_queryKey)}}return z;case "ATTRIBUTE":var D;if(void 0===t.vtp_attribute)D=c(y,u,w,v);else{var I=t.vtp_attribute,T=a(y,u,"element");D=T&&ic(T,I)||v||""}return D;case "MD":var R=t.vtp_mdValue,U=b(y,u,"MD",lu);return R&&U?ou(U,R)||v:U||v;case "FORM":return f(String(t.vtp_component||"SUBMIT_TEXT"),y,u,v);default:var S=c(y,u,w,v);Eu(S,"aev",t.vtp_gtmEventId);return S}})}();

Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.m="gas";Y.__gas.o=!0;Y.__gas.priorityOverride=0})(function(a){var b=L(a),c=b;c[me.pb]=null;c[me.Ih]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.h.awct=["google"],function(){var a=!1;var b=!1,c=[],d=function(h){var l=V("google_trackConversion"),m=h.gtm_onFailure;"function"==typeof l?l(h)||m():m()},e=function(){for(;0<c.length;)d(c.shift())},f=function(){return function(){e();b=!1}},g=function(){return function(){e();c={push:d};}};
(function(h){Y.__awct=h;Y.__awct.m="awct";Y.__awct.o=!0;Y.__awct.priorityOverride=0})(function(h){function l(O,ka,ta){return"DATA_LAYER"===O?vu(ta):h[ka]}function m(){S("gdpr_consent",mo()),S("gdpr",oo());}
function p(){var O=[];return O}function q(){if(h.vtp_enableEnhancedConversion){var O;void 0===
h.vtp_dataSource?O=h.vtp_cssProvidedEnhancedConversionValue||h.vtp_enhancedConversionObject:"DATA_OBJECT"===h.vtp_dataSource?O=h.vtp_enhancedConversionObject:"INDIVIDUAL_FIELDS"===h.vtp_dataSource&&(O=h.vtp_cssProvidedEnhancedConversionValue);if(O)return{enhanced_conversions_mode:"manual",enhanced_conversions_manual_var:O}}}function r(O){var ka=[],ta=[];if(O){ka=p();if(u){var la={};h.vtp_conversionCookiePrefix&&(la.prefix=h.vtp_conversionCookiePrefix);
xj(la);S("auid",tj[uj(la.prefix)])}}if(ta.length)try{Promise.all(ta).then(function(){c.push(I)});return}catch(Qa){}c.push(I)}function t(){
Rg()&&S("gcd","G1"+Wg(Og));}var u=!h.hasOwnProperty("vtp_enableConversionLinker")||!!h.vtp_enableConversionLinker,v=!!h.vtp_enableEnhancedConversions||!!h.vtp_enableEnhancedConversion;if(a){}else{Ol();var I={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,
google_gtm:In()};I.google_gtm_experiments={capi:!0};h.vtp_rdp&&(I.google_restricted_data_processing=!0);void 0!=vu(N.T)&&!1!==vu(N.T)&&(I.google_gtm_url_processor=function(O){return O=nl(O)});var T=function(O){return function(ka,ta,la){var Aa=l(O,ta,la);Aa&&(I[ka]=Aa)}},R=T("JSON");R("google_conversion_currency","vtp_currencyCode");R("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&
(R=T(h.vtp_productReportingDataSource),R("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),R("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),R("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),R("google_basket_discount","vtp_discount","discount"),R("google_conversion_items","vtp_items","items"),I.google_conversion_items&&I.google_conversion_items.map&&(I.google_conversion_items=I.google_conversion_items.map(function(O){return{value:O.price,
quantity:O.quantity,item_id:O.id}})));var U=function(O,ka){(I.google_additional_params=I.google_additional_params||{})[O]=ka},S=function(O,ka){void 0!==ka&&((I.google_additional_conversion_params=I.google_additional_conversion_params||{})[O]=ka)},P=function(O){return function(ka,ta,la,Aa){var Ma=l(O,ta,la);Aa(Ma)&&S(ka,Ma)}};var K=vu("developer_id"),W=mb(Bc(K)?K:{});W&&S("did",W);(function(){
if(!h.vtp_enableShippingData)return;S("delopc",h.vtp_deliveryPostalCode);S("oedeld",h.vtp_estimatedDeliveryDate);S("delc",h.vtp_deliveryCountry);S("shf",h.vtp_shippingFee);if(h.vtp_enableProductReporting){var O=l(h.vtp_productReportingDataSource,"vtp_items","items");S("iedeld",pl(O))}})();h.vtp_transportUrl&&(I.google_transport_url=h.vtp_transportUrl);var ca=rn(h.vtp_transportUrl,"/pagead/conversion_async.js");ca||(ca=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?
"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");h.vtp_enableNewCustomerReporting&&(R=P(h.vtp_newCustomerReportingDataSource),R("vdnc","vtp_awNewCustomer","new_customer",function(O){return void 0!=O&&""!==O}),R("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(O){return void 0!=O&&""!==O}));u?(h.vtp_conversionCookiePrefix&&(I.google_gcl_cookie_prefix=h.vtp_conversionCookiePrefix),I.google_read_gcl_cookie_opt_out=!1):I.google_read_gcl_cookie_opt_out=
!0;"1"===Vj(!1)._up&&S("gtm_up","1");m();(function(){var O=!1;!Qg()||O?r(!0):jh(function(){m();var ka=fh(N.D),ta=void 0!=vu(N.T)&&!1!==vu(N.T),la=!1;la=!0;h.vtp_transportUrl||ka||!ta&&!la||(I.google_transport_url="https://pagead2.googlesyndication.com/");
S("gcs",gh());t();r(ka);ka||ih(function(){I=L(I);m();!h.vtp_transportUrl&&I.google_transport_url&&delete I.google_transport_url;S("gcs",gh());t();S("gcu","1");r(!0)},N.D)},[N.D])})();b||(b=!0,Q(ca,g(),f(ca)))}})}();
Y.h.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.m="remm";Y.__remm.o=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Eu(f,"remm",a.vtp_gtmEventId);return f})}();





Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.m="paused";Y.__paused.o=!0;Y.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();

Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,ac(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){J(g)}}}var b=function(d,e,f){Hl(function(){var g=google_tag_manager_external.postscribe.getPostscribe(),h={done:e},l=H.createElement("div");l.style.display="none";l.style.visibility="hidden";H.body.appendChild(l);try{g(l,d,h)}catch(m){J(f)}})};var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=Fu(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.xi,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(H.body,kc(g),h,e)()}else qu(function(){c(d)},
200)};Y.__html=c;Y.__html.m="html";Y.__html.o=!0;Y.__html.priorityOverride=0}();




Y.h.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.m="img";Y.__img.o=!0;Y.__img.priorityOverride=0})(function(a){var b=kc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}cv(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Y.h.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.zg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=lc(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=wq("lcl",h?"nv.mwt":"mwt",0),m;m=h?wq("lcl","nv.ids",[]):wq("lcl","ids",[]);if(m.length){var p=sq(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=!!Pa(String(nc(g,"rel")||"").split(" "),function(u){return"noreferrer"===u.toLowerCase()});
q&&zg(36);var r=V((nc(g,"target")||"_self").substring(1)),t=!0;if(wu(p,Wt(function(){var u;if(u=t&&r){var v;a:if(q){var w;try{w=new MouseEvent(f.type,{bubbles:!0})}catch(y){if(!c.createEvent){v=!1;break a}w=c.createEvent("MouseEvents");w.initEvent(f.type,!0,!0)}w.zg=!0;f.target.dispatchEvent(w);v=!0}else v=!1;u=!v}u&&(r.location.href=nc(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else wu(p,function(){},l||2E3);return!0}}};gc(c,"click",e,!1);gc(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=nc(d,"href"),g=f.indexOf("#"),h=nc(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=uu(f),m=uu(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.m="lcl";Y.__lcl.o=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};vq("lcl","mwt",h,0);e||vq("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};vq("lcl","ids",l,[]);e||vq("lcl","nv.ids",l,[]);Bu("lcl")||(a(),Cu("lcl"));J(c.vtp_gtmOnSuccess)})}();


var $x={};$x.macro=function(a){if(cu.pe.hasOwnProperty(a))return cu.pe[a]},$x.onHtmlSuccess=cu.mg(!0),$x.onHtmlFailure=cu.mg(!1);$x.dataLayer=Ji;$x.callback=function(a){Ai.hasOwnProperty(a)&&Ja(Ai[a])&&Ai[a]();delete Ai[a]};$x.bootstrap=0;$x._spx=!1;function ay(){pi[jf.N]=$x;fb(Bi,Y.h);Qe=Qe||cu;Re=ef}
function by(){var a=!1;a&&Pl("INIT");Eg().s();pi=A.google_tag_manager=A.google_tag_manager||{};lo();
kk.enable_gbraid_cookie_write=!0;if(pi[jf.N]){var b=pi.zones;b&&b.unregisterChild(jf.N);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Je.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Me.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Le.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var q=m[p],r={},t=
0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);Ke.push(r)}Oe=Y;Pe=ls;var u=data.permissions||{},v=data.sandboxed_scripts,w=data.security_groups;it();qf=new pf(u);if(void 0!==v)for(var y=["sandboxedScripts"],x=0;x<v.length;x++){var z=v[x].replace(/^_*/,"");Bi[z]=y}lt(w);ay();bu();Cl=!1;Dl=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Fl();else{gc(H,"DOMContentLoaded",Fl);gc(H,"readystatechange",Fl);if(H.createEventObject&&H.documentElement.doScroll){var B=
!0;try{B=!A.frameElement}catch(T){}B&&Gl()}gc(A,"load",Fl)}Yr=!1;"complete"===H.readyState?$r():gc(A,"load",$r);Lm&&A.setInterval(Fm,864E5);
google_tag_manager_external.postscribe.installPostscribe();yi=(new Date).getTime();if(a){var I=Ql("INIT");
}}}
(function(a){if(!A["__TAGGY_INSTALLED"]){var b=!1;if(H.referrer){var c=Gh(H.referrer);b="cct.google"===Dh(c,"host")}if(!b){var d=aj("googTaggyReferrer");b=d.length&&d[0].length}b&&(A["__TAGGY_INSTALLED"]=!0,cc("https://cct.google/taggy/agent.js"))}var f=function(){var m=A["google.tagmanager.debugui2.queue"];m||(m=[],A["google.tagmanager.debugui2.queue"]=m,cc("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:Yb,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};jf.Yg&&(p.data.initialPublish=!0);m.push(p)},g="x"===Eh(A.location,"query",!1,void 0,"gtm_debug");if(!g&&H.referrer){var h=Gh(H.referrer);g="tagassistant.google.com"===Dh(h,"host")}if(!g){var l=aj("__TAG_ASSISTANT");g=l.length&&l[0].length}A.__TAG_ASSISTANT_API&&(g=!0);g&&Yb?f():a()})(by);

})()
