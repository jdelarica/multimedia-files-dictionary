
(function() {
    var infoVariable,
        // key code of return button is 10009
        RETURN_BUTTON = 10009,
        // key code of up button is 38
        UP_BUTTON = 38,
        // key code of down button is 40
        DOWN_BUTTON = 40,
        MENU_COUNT = 0;
	$('.category_list .category_item[category="all"]').addClass('ct_item-active')

    function emptyElement(elm) {
        while (elm.firstChild) {
            elm.removeChild(elm.firstChild);
        }

        return elm;
    }




    function onAllSuccess() {
    	$('.category_item[category="all"]').click(function(event){

    		function showAll(){

    			$('.product-item').show();

    			$('.product-item').css('transform', 'scale(1)');

    		} setTimeout(showAll,400);

    			

    	});
    }

    function onMoviesSuccess() {
    	$('.category_item[category="movies"]').click(function(event){

    		function showAll(){

    			$('.product-item').show();

    			$('.product-item').css('transform', 'scale(1)');

    		} setTimeout(showAll,400);

    			

    	});

    }

    function onTvSuccess() {
    	$('.category_item[category="tv"]').click(function(event){

    		function showAll(){

    			$('.product-item').show();

    			$('.product-item').css('transform', 'scale(1)');

    		} setTimeout(showAll,400);

    			

    	});
    }

    function onDocumentariesSuccess() {
    	$('.category_item[category="documentaries"]').click(function(event){

    		function showAll(){

    			$('.product-item').show();

    			$('.product-item').css('transform', 'scale(1)');

    		} setTimeout(showAll,400);

    			

    	});
    }


    function onError(e) {
        alert("Error: " + e.message);
    }


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

    function addClickEventHandler(i) {
        infoVariable[i].obj.addEventListener('click', function() {
            MENU_COUNT = i;
            clickInformation(infoVariable[i].name, infoVariable[i].cb, i);
        });
    }

    function bindEvents() {
        var i;

        // Add click event handler about side menu item
        for (i = 0; i < infoVariable.length; i++) {
            addClickEventHandler(i);
        }

        // Add key down event handler (remote control)
        addkeydownHandler();
    }


    function setInfoVariable() {
        // Get a element of each div id
        var allInfo = document.querySelector('#all-info'),
            moviesInfo = document.querySelector('#movies-info'),
            tvInfo = document.querySelector('#tv-info'),
            documentariesInfo = document.querySelector('#documentaries-info'),
        // 'infoVariable' has three items (obj, name and cb)
        // obj is element of each side menu item
        // name is property for use the systeminfo api
        // cb is callback function about each item
        infoVariable = [{
            obj: allInfo,
            name: "ALL",
            cb: onAllSuccess
        }, {
            obj: moviesInfo,
            name: "MOVIES",
            cb: onMoviesSuccess
        }, {
            obj: tvInfo,
            name: "TV",
            cb: onTvSuccess
        }, {
            obj: documentariesInfo,
            name: "DOCUMENTARIES",
            cb: onDocumentariesSuccess
        }];
    }


    function init() {
        setInfoVariable();
        bindEvents();
        clickInformation(infoVariable[0].name, infoVariable[0].cb, 0);
    }

    window.onload = init();
}());