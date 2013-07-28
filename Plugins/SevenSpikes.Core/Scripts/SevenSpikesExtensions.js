$.extend({
    getAttrValFromDom: function (elementSelector, elementAttribute, defaultValue) {
        var value = $(elementSelector).attr(elementAttribute);

        if (value == undefined || value == "") {
            if (window.console) {
                window.console.log("'" + elementAttribute + "' was not found.");
            }
            if (defaultValue != undefined) {
                value = defaultValue;
            } else {
                value = "";
            }
        }

        return value;
    },
    getHiddenValFromDom: function(elementSelector, defaultValue) {
        var value = $(elementSelector).val();

        if (value == undefined || value == "") {
            if (window.console) {
                window.console.log("The 'value' was not found.");
            }
            if (defaultValue != undefined) {
                value = defaultValue;
            } else {
                value = "";
            }
        }

        return value;
    },
    getUrlVars: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    }
});