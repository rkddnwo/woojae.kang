/*
*	Bernd - Clean & Minimal Portfolio Hugo Theme
*	Version: 1.0.0
*	Author: Mountain-Themes
*	Author URL: https://themeforest.net/user/mountain-themes
*	Bernd © 2023. Design & Coded by Mountain-Themes.
*/

/* TABLE OF CONTENTS
	1. Page Loader
	2. Mobile Menu
	3. Parallax
	4. Fancybox
	6. Skillbars
	7. Counter
	8. Accordion
	9. MailChimp
	10. Flex Slider
	11. Portfolio
	12. Blog
	13. Contact form
	14. Google Map
*/

jQuery.noConflict()(function($) {

	'use strict'; 
  
	 var isMobile = {
		Android: function() {
		  return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
		  return navigator.userAgent.match(/BlackBerry/i);
		},
		iPhone: function() {
		  return navigator.userAgent.match(/iPhone/i);
		},
		iPad: function() {
		  return navigator.userAgent.match(/iPad/i);
		},
		iPod: function() {
		  return navigator.userAgent.match(/iPod/i);
		},
		iOS: function() {
		  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
		  return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
		  return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
		  return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	  };
  
	  mt_page_loader();
	  mt_contact_form ();
	  mt_mobile_menu();
	  mt_parallax();
	  mt_portfolio();
	  mt_blog();
	  mt_fancybox();
	  mt_skillbars_shortcode();
	  mt_counter_shortcode();
	  mt_mailchimp();
	  mt_flexslider();
	  mt_google_map();

/* ================================= */
/* :::::::: 1. Page Loader ::::::::: */
/* ================================= */

function mt_page_loader() {
		
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1100);

} 

/* ================================= */
/* ::::::: 2. Mobile Menu :::::::::: */
/* ================================= */

function mt_mobile_menu() {

    $(".menu-container").slicknav({
		prependTo: 'header .header-inner-box',
        allowParentLinks: false
      });
}  

/* ================================= */
/* ::::::::: 3. Parallax ::::::::::: */
/* ================================= */

function mt_parallax() {

	$('.parallax').jarallax({
		speed: 0.8,
		noAndroid: true
	  });

	$('.parallax-box').jarallax({
		speed: 0.8,
		noAndroid: true
	});

}

/* ================================= */
/* ::::::::: 4. Fancybox ::::::::::: */
/* ================================= */

function mt_fancybox() {

	$('[data-fancybox="images"]').fancyboxMB({
		buttons : ['fullScreen', 'close'],
	  });
  
}


/* ================================= */
/* ::::::::: 6. Skillbars :::::::::: */
/* ================================= */

function mt_skillbars_shortcode() {

	$('.skillbar').appear(function () {
		var skillbar = $(this).html();
		$(this).skillBars({
		from: 0,
		speed: 3000,
		interval: 100,
		decimals: 0,
		});
	});

}

/* ================================= */
/* :::::::::: 7. Counter ::::::::::: */
/* ================================= */

function mt_counter_shortcode() {

	$('.timer .number').appear(function () {
		var counter = $(this).html();
		$(this).countTo({
		from: 0,
		to: counter,
		speed: 3000,
		refreshInterval: 70
		});
	});

}

/* ================================= */
/* ::::::::: 8. Accordion :::::::::: */
/* ================================= */

function mt_accordion() {
		// Variables
		var i;
		var accordions = document.querySelectorAll('.accordion-box');
	
		// Event Listeners
		for (i = 0; i < accordions.length; i++) {
		accordions[i].addEventListener('click', function() {
			if (this.getAttribute('aria-expanded') == 'true') {
			this.setAttribute('aria-expanded', 'false');
			} else {
			this.setAttribute('aria-expanded', 'true');
			}
		});
		}
}

/* ================================= */
/* ::::::: 9. MailChimp :::::::::::: */
/* ================================= */

function mt_mailchimp() {

	if ($('.widget-subscribe').length) {

		var widgetSubscribe = $("#ajaxChimp");

		var mailChimpURL;
	
		// Get all portfolio configure
		if (widgetSubscribe.length) {
			mailChimpURL = widgetSubscribe.attr('data-url');
		}
		

		// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
		$('#ajaxChimp').ajaxChimp({
			language: 'eng',
			url: mailChimpURL
		});

		// Mailchimp translation
		//
		// Defaults:
		//'submit': 'Submitting...',
		//  0: 'We have sent you a confirmation email',
		//  1: 'Please enter a value',
		//  2: 'An email address must contain a single @',
		//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
		//  4: 'The username portion of the email address is invalid (the portion before the @: )',
		//  5: 'This email address looks fake or invalid. Please enter a real email address'

		$.ajaxChimp.translations.eng = {
			'submit': 'Submitting...',
			0: '<i class="fa fa-check"></i> We will be in touch soon!',
			1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
			2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
			3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
			4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
			5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
		}

	}
}

/* ================================= */
/* :::::::: 10. Flex Slider :::::::: */
/* ================================= */

function mt_flexslider() {

	$('.flexslider').flexslider({
	  controlNav: false,
	  prevText: '<i class="fa fa-angle-left"></i>',
	  nextText: '<i class="fa fa-angle-right"></i>',
	  slideshowSpeed: '3000',
	  pauseOnHover: true
	});

}

/* ================================= */
/* ::::::: 11. Portfolio ::::::::::: */
/* ================================= */

function mt_portfolio() {

	var portfolio = $("#portfolio");

	var columns,
		portfolioStyle,
		gapHorizontal,
		gapVertical,
		loadMoreWord,
		LoadingWord,
		noMoreEntriesWord,
		boxesToLoadStart,
		boxesToLoad;

	// Get all portfolio configure
	if (portfolio.length) {
		columns = parseInt(portfolio.attr('data-columns'));
		portfolioStyle = portfolio.attr('data-portfolio-style');
		gapHorizontal = parseInt(portfolio.attr('data-gap-horizontal'));
		gapVertical = parseInt(portfolio.attr('data-gap-vertical'));
		loadMoreWord = portfolio.attr('data-load-more-word');
		LoadingWord = portfolio.attr('data-loading-word');
		noMoreEntriesWord = portfolio.attr('data-no-more');
		boxesToLoadStart = parseInt(portfolio.attr('data-boxes-start'));
		boxesToLoad = parseInt(portfolio.attr('data-boxes-load'));
	}
	

	$('#portfolio').mediaBoxes({
		filterContainer: '.portfolioFilter',
		columns: columns,
		boxesToLoadStart: boxesToLoadStart,
		boxesToLoad: boxesToLoad,
		horizontalSpaceBetweenBoxes: gapHorizontal,
		verticalSpaceBetweenBoxes: gapVertical,
		deepLinkingOnFilter: false,
		loadMoreWord: loadMoreWord,
		LoadingWord: LoadingWord,
		noMoreEntriesWord: noMoreEntriesWord,
		resolutions:[
			{
				maxWidth: 960,
				columnWidth: 'auto',
				columns: 3,
			},
			{
				maxWidth: 650,
				columnWidth: 'auto',
				columns: 2,
				horizontalSpaceBetweenBoxes: gapHorizontal,
				verticalSpaceBetweenBoxes: gapVertical,
			},
			{
				maxWidth: 450,
				columnWidth: 'auto',
				columns: 1,
				horizontalSpaceBetweenBoxes: gapHorizontal,
				verticalSpaceBetweenBoxes: gapVertical,
			},
		],
	}); 

}

/* ================================= */
/* :::::::::: 12. Blog ::::::::::::: */
/* ================================= */

function mt_blog() {

	var blog = $("#blog-grid");

	var columns,
		gapHorizontal,
		gapVertical,
		loadMoreWord,
		LoadingWord,
		noMoreEntriesWord,
		boxesToLoadStart,
		boxesToLoad;

	// Get all blog configure
	if ( blog.length) {
		columns = parseInt( blog.attr('data-columns'));
		//blogStyle =  blog.attr('data-blog-style');
		gapHorizontal = parseInt( blog.attr('data-gap-horizontal'));
		gapVertical = parseInt( blog.attr('data-gap-vertical'));
		loadMoreWord =  blog.attr('data-load-more-word');
		LoadingWord =  blog.attr('data-loading-word');
		noMoreEntriesWord =  blog.attr('data-no-more');
		boxesToLoadStart = parseInt( blog.attr('data-boxes-start'));
		boxesToLoad = parseInt( blog.attr('data-boxes-load'));
	}

	$('#blog-grid').mediaBoxes({
		columns: columns,
		boxesToLoadStart: boxesToLoadStart,
		boxesToLoad: boxesToLoad,
		horizontalSpaceBetweenBoxes: gapHorizontal,
		verticalSpaceBetweenBoxes: gapVertical,
		deepLinkingOnFilter: false,
		loadMoreWord: loadMoreWord,
		LoadingWord: LoadingWord,
		noMoreEntriesWord: noMoreEntriesWord,
		resolutions:[
			{
				maxWidth: 960,
				columnWidth: 'auto',
				columns: 1,
			},
			{
				maxWidth: 650,
				columnWidth: 'auto',
				columns: 1,
				horizontalSpaceBetweenBoxes: gapHorizontal,
				verticalSpaceBetweenBoxes: gapVertical,
			},
			{
				maxWidth: 450,
				columnWidth: 'auto',
				columns: 1,
				horizontalSpaceBetweenBoxes: gapHorizontal,
				verticalSpaceBetweenBoxes: gapVertical,
			},
		],
	}); 

}

/* ================================= */
/* ::::: 13. Contact form :::::::::: */
/* ================================= */

function mt_contact_form() {
	
	// validate and process form here 
	$("#contact-form").validate({

		rules: {

			name: {
				required: true,
			},

			email: {
				required: true,
				email: true,
			},

			phone:{
				required: true,
			},

			subject:{
				required: true,
			},

			msg: {
				required: true,
			},
		},

		messages: {

			name:{
				required: "The field is required.",
			},

			email:{
				required: "The field is required.",
				email: "The e-mail address entered is invalid.",
			},

			phone:{
				required: "The field is required.",
			},

			subject:{
				required: "The field is required.",
			},

			  msg:{
				required: "The field is required.",
			},

		},

	});

	function init() {
		document.addEventListener('submit', async event => {
			if (event.target?.dataset?.dynamicForm === undefined) { return; }
			event.preventDefault();
			const form = event.target;
			const data = new FormData(form);
			const action = form.action;
			const method = form.method;
			const response = await fetch(action, {
				method,
				body: data,
				headers: { "Accept": "application/json" }
			});
			if (response.ok) {
				form.insertAdjacentHTML('afterend',
				document.querySelector(form.dataset.success).innerHTML);
			} else {
				form.insertAdjacentHTML('afterend',
				document.querySelector(form.dataset.error).innerHTML);
			}
			const message = form.nextElementSibling;
				form.reset();
				setTimeout(() => message.remove(), 10000);
		});
	
	}

	init();

}

/* ================================= */
/* :::::::: 14. Google Map ::::::::: */
/* ================================= */

function mt_google_map() {

	if ($('#google-container').length) {

		var mapContainer = $("#google-container");

		var zoomMap,
			locationMap,
			saturationMap,
			brightnessMap,
			informationBoxMap;
	
		// Get all portfolio configure
		if (mapContainer.length) {
			zoomMap = mapContainer.attr('data-zoom');
			locationMap = mapContainer.attr('data-location');
			informationBoxMap = mapContainer.attr('data-information');
			saturationMap = parseInt(mapContainer.attr('data-saturation'));
			brightnessMap = parseInt(mapContainer.attr('data-brightness'));
		}

		//set your google maps parameters
		var latitude = latitudeG,
			longitude = longitudeG,
			map_zoom = mapZoomG;

		//google map custom marker icon - .png fallback for IE11
		var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var marker_url = (is_internetExplorer11) ? iconLocation : iconLocation;

		//define the basic color of your map, plus a value for saturation and brightness
		var main_color = colorMap,
			saturation_value = saturationMap,
			brightness_value = brightnessMap;

		//we define here the style of the map
		var style = [{
				//set saturation for the labels on the map
				elementType: "labels",
				stylers: [{
					saturation: saturation_value
				}, ]
			}, { //poi stands for point of interest - don't show these lables on the map 
				featureType: "poi",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}, ]
			}, {
				//don't show highways lables on the map
				featureType: 'road.highway',
				elementType: 'labels',
				stylers: [{
					visibility: "off"
				}, ]
			}, {
				//don't show local road lables on the map
				featureType: "road.local",
				elementType: "labels.icon",
				stylers: [{
					visibility: "off"
				}, ]
			}, {
				//don't show arterial road lables on the map
				featureType: "road.arterial",
				elementType: "labels.icon",
				stylers: [{
					visibility: "off"
				}, ]
			}, {
				//don't show road lables on the map
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [{
					visibility: "off"
				}, ]
			},
			//style different elements on the map
			{
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "poi",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "poi.government",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "poi.attraction",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "poi.business",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "transit.station",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "landscape",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]

			}, {
				featureType: "road",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}, {
				featureType: "water",
				elementType: "geometry",
				stylers: [{
					hue: main_color
				}, {
					visibility: "on"
				}, {
					lightness: brightness_value
				}, {
					saturation: saturation_value
				}, ]
			}
		];

		//set google map options
		var map_options = {
				center: new google.maps.LatLng(latitude, longitude),
				zoom: map_zoom,
				panControl: false,
				zoomControl: false,
				mapTypeControl: false,
				streetViewControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				styles: style,
			}

		//inizialize the map
		var map = new google.maps.Map(document.getElementById('google-container'), map_options);
		
		if (locationMap=="show") {
		//add a custom marker to the map        
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			title: titleIconLocation,
			visible: true,
			icon: marker_url,
		});
		}

		if (informationBoxMap=="show") {
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 300,
	  
		});

		infowindow.open(map,marker);

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		  });

		}

		window.addEventListener("resize", function () {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});

		if (zoomMap=="show") {
		//add custom buttons for the zoom-in/zoom-out on the map
		function CustomZoomControl(controlDiv, map) {
			//grap the zoom elements from the DOM and insert them in the map 
			var controlUIzoomIn = document.getElementById('zoom-in'),
				controlUIzoomOut = document.getElementById('zoom-out');
			controlDiv.appendChild(controlUIzoomIn);
			controlDiv.appendChild(controlUIzoomOut);

			// Setup the click event listeners and zoom-in or out according to the clicked element
			controlUIzoomIn.addEventListener('click', function () {
				map.setZoom(map.getZoom() + 1)
			});
			
			controlUIzoomOut.addEventListener('click', function () {
				map.setZoom(map.getZoom() - 1)
			});
		}

		var zoomControlDiv = document.createElement('div');
		var zoomControl = new CustomZoomControl(zoomControlDiv, map);
		

		//insert the zoom div on the top left of the map
		map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
	};

	}

}

});
