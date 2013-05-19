/*
 * JS for SetupScreen generated by Appery.io
 *
 * Created on: Saturday, May 18, 2013, 10:28:26 PM (PDT)
 */

/* Setting project environment indicator */
Appery.env = "bundle";

Appery.getProjectGUID = function() {
    return 'f7344371-6cfd-4cd0-924e-c39fb564c933';
}

Appery.getTargetPlatform = function() {
    return '0';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

//createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
Appery.AppPages = [{
    "name": "UserInput",
    "location": "UserInput.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "SetupScreen",
    "location": "SetupScreen.html"
}, {
    "name": "Analytics",
    "location": "Analytics.html"
}];

j_70_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_2': 'j_74',
        'YAxis': 'j_75',
        'mobileselectmenuitem_14': 'j_76',
        'spacer_20': 'j_78',
        'video_input': 'j_79',
        'mobilebutton_19': 'j_77'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    Appery.CurrentScreen = 'j_70';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */
    j_70_beforeshow = function() {
        Appery.CurrentScreen = 'j_70';
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }
    // screen onload
    screen_1D1E_onLoad = j_70_onLoad = function() {
        screen_1D1E_elementsExtraJS();

        j_70_windowEvents();
        screen_1D1E_elementsEvents();
    }

    // screen window events
    screen_1D1E_windowEvents = j_70_windowEvents = function() {
        $('#j_70').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // screen elements extra js
    screen_1D1E_elementsExtraJS = j_70_elementsExtraJS = function() {
        // screen (screen-1D1E) extra code

        /* YAxis */

        $("#j_75").parent().find("a.ui-btn").attr("tabindex", "1");

    }

    // screen elements handler
    screen_1D1E_elementsEvents = j_70_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

    }

    $("#j_70").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        j_70_beforeshow();
    });

    if (runBeforeShow) {
        j_70_beforeshow();
    } else {
        j_70_onLoad();
    }

}

$("#j_70").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    j_70_js();
});