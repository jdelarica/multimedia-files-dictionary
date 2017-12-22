/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
    var infoVariable,
        // key code of return button is 10009
        RETURN_BUTTON = 10009,
        // key code of up button is 38
        UP_BUTTON = 38,
        // key code of down button is 40
        DOWN_BUTTON = 40,
        MENU_COUNT = 0;

    /**
     * Removes all first child item.
     * @param elm - parent element to remove all child items
     * @private
     */
    function emptyElement(elm) {
        while (elm.firstChild) {
            elm.removeChild(elm.firstChild);
        }

        return elm;
    }

    /**
     * Displays title on screen.
     * @param {string} subject - subject of title
     * @private
     */
    function displayContentTitle(subject) {
        var elmContent = document.querySelector("#content"),
            elmListSubject;

        // Add a div element that has 'content-list-subject' class to elmContent
        elmListSubject = document.createElement("div");
        elmListSubject.className = "content-list-subject";
        elmListSubject.appendChild(document.createTextNode(subject));
        elmContent.appendChild(elmListSubject);
    }

    
    /**
     * Displays HOME information on screen.
     * @param {object} cpu - cpu object of systeminfo
     * @private
     */
    /*function onHomeSuccess(home) {
        // It shows ALL the data /only gets load data of cpu
        displayContentSubTitle("Load", (cpu.load * 100).toFixed(2) + "%");
    }

    /**
     * Displays MOVIES information on screen.
     * @param {object} display - display object of systeminfo
     * @private
     */
    /*function onMoviesSuccess(display) {
        // It gets width & height of screen about resolution
        displayContentTitle("Resolution");
        displayContentSubTitle("Width", display.resolutionWidth + " px");
        displayContentSubTitle("Height", display.resolutionHeight + " px");

        // It gets width & height of screen about DPI(dots per inch)
        displayContentTitle("Dots per inch");
        displayContentSubTitle("Width", display.dotsPerInchWidth + " dots");
        displayContentSubTitle("Height", display.dotsPerInchHeight + " dots");

        // It gets width & height of screen about real physical size
        displayContentTitle("Physical size");
        displayContentSubTitle("Width", parseInt(display.physicalWidth) + " mm");
        displayContentSubTitle("Height", parseInt(display.physicalHeight) + " mm");

        // It gets brightness of screen
        displayContentTitle("Others");
        displayContentSubTitle("Brightness", display.brightness * 100 + "%");
    }

    /**
     * Displays SERIES information on screen.
     * @param {object} storage - storage object of systeminfo
     * @private
     */
    /*function onSeriesSuccess(storage) {
        var i;

        // It gets type, capacity, available capacity and removable status about each storage
        for (i = 0; i < storage.units.length; i++) {
            displayContentTitle("Storage " + i);
            displayContentSubTitle("Type", storage.units[i].type);
            displayContentSubTitle("Capacity", storage.units[i].capacity);
            displayContentSubTitle("Available", storage.units[i].availableCapacity);
            displayContentSubTitle("Removable", storage.units[i].isRemovable);
        }
    }

    /**
     * Displays DOCUMENTARIES information on screen.
     * @param {object} network - network object of systeminfo
     * @private
     */
   /* function onDocumentariesSuccess(network) {
        // It only gets network type
        displayContentSubTitle("Network", network.networkType);
    }

    
    /**
     * Opens alert pop-up included error message.
     * @param {object} e - event object
     * @private
     */
    function onError(e) {
        alert("Error: " + e.message);
    }

    /**
     * It changes the side menu as num of parameter.
     * It removes all child element in content area.
     * It gets a system information as parameters.
     * @param {string} property - find system information about property string
     * @param {function} onSuccess - success callback function
     * @param {number} num - item number
     * @private
     */
    function clickInformation(property, onSuccess, num) {
        var elmSubject = document.querySelector("#content"),
            i;

        // All side menu string color change white
        for (i = 0; i < infoVariable.length; i++) {
            infoVariable[i].obj.style.color = "white";
        }

        // Only one item changes the "#48abe0" color
        infoVariable[num].obj.style.color = "#48abe0";

        // Empty all child element in content area
        emptyElement(elmSubject);

        // Get system information using parameters
        try {
            tizen.systeminfo.getPropertyValue(property, onSuccess, onError);
        } catch (e) {
            alert("Exception: " + e.message);
        }
    }

    /**
     * Adds 'keydown' event listeners.
     * @private
     */
    function addkeydownHandler() {
        document.addEventListener('keydown', function(e) {
            // If the key code is return button, application will be exit
            if (e.keyCode === RETURN_BUTTON) {
                tizen.application.getCurrentApplication().exit();
            }
            // If the key code is up button,
            // it move to up menu on side menu
            else if (e.keyCode === UP_BUTTON) {
                if (MENU_COUNT === 0) {
                    MENU_COUNT = infoVariable.length - 1;
                } else {
                    MENU_COUNT--;
                }
                clickInformation(infoVariable[MENU_COUNT].name, infoVariable[MENU_COUNT].cb, MENU_COUNT);
            }
            // If the key code is down button,
            // it move to down menu on side menu
            else if (e.keyCode === DOWN_BUTTON) {
                if (MENU_COUNT === 3) {
                    MENU_COUNT = 0;
                } else {
                    MENU_COUNT++;
                }
                clickInformation(infoVariable[MENU_COUNT].name, infoVariable[MENU_COUNT].cb, MENU_COUNT);
            }
        });
    }

    /**
     * Adds click event listeners as parameter.
     * @param {number} i - item number
     * @private
     */
    function addClickEventHandler(i) {
        infoVariable[i].obj.addEventListener('click', function() {
            MENU_COUNT = i;
            clickInformation(infoVariable[i].name, infoVariable[i].cb, i);
        });
    }

    /**
     * Binds all event handler.
     * @private
     */
    function bindEvents() {
        var i;

        // Add click event handler about side menu item
        for (i = 0; i < infoVariable.length; i++) {
            addClickEventHandler(i);
        }

        // Add key down event handler (remote control)
        addkeydownHandler();
    }

    /**
     * Sets the infoVariable object.
     * @private
     */
    function setInfoVariable() {
        // Get a element of each div id or category
        var homeInfo = document.querySelector('.all'),
            moviesInfo = document.querySelector('.movies'),
            seriesInfo = document.querySelector('.tv'),
            documentariesInfo = document.querySelector('.documentaries'),


        // 'infoVariable' has three items (obj, name and cb)
        // obj is element of each side menu item
        // name is property for use the systeminfo api
        // cb is callback function about each item
        infoVariable = [{
            obj: homeInfo,
            name: "HOME",
            cb: onHomeSuccess
        }, {
            obj: moviesInfo,
            name: "MOVIES",
            cb: onMoviesSuccess
        }, {
            obj: seriesInfo,
            name: "SERIES",
            cb: onSeriesSuccess
        }, {
            obj: documentariesInfo,
            name: "DOCUMENTARIES",
            cb: onDocumentariesSuccess
        }];
    }

    /**
     * Initiates the application.
     * Binds events, then prints the first system information on screen.
     * @private
     */
    function init() {
        setInfoVariable();
        bindEvents();
        clickInformation(infoVariable[0].name, infoVariable[0].cb, 0);
    }

    window.onload = init();
}());