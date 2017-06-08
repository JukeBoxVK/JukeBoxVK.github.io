var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(document).ready(function () {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    var parms = new Object();
    for (var u = 0; u < sURLVariables.length; u++){
        parms[ sURLVariables[u].split('=')[0]] =  sURLVariables[u].split('=')[1];
    }
    console.log(parms);

    $.each(parms, function(index, value) {
        $('.content').append("<p>" + index  + " = " + value + "</p>");
    });
});