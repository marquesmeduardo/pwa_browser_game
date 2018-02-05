(function() {
  'use strict';

  var app = {
    isLoading: true,
    //visibleCards: {},
    //selectedCities: [],
    spinner: document.querySelector('.loader'),
    //cardTemplate: document.querySelector('.cardTemplate'),
    //container: document.querySelector('.main'),
    menuList: document.querySelector('.menu_items'),
  };
  if (app.isLoading) {
    app.spinner.setAttribute('hidden', true);
    app.isLoading = false;
  }
  
   /*****************************************************************************
   * Event listeners for UI elements
   ****************************************************************************/
    window.addEventListener('click', function(elem) {
		app.menuList.classList.add('hide'); //closing menu
	});
	document.getElementById('menu_icon').addEventListener('click', function(e) {
		app.toggleMenu();
	});
	
   /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

  // Toggles the visibility of the menu list.
  app.toggleMenu = function(e) {
    app.menuList.classList.toggle('hide');
	if (app.isLoading) {
	  app.spinner.setAttribute('hidden', true);
	  app.isLoading = false;
	}
  };
  

  
  if ('serviceWorker' in navigator) {
  	navigator.serviceWorker
		.register('/sw.js')
  		.then(function () {
  			console.log('service worker registered');
  		})
  		.catch(function () {
  			console.warn('service worker failed');
  		});
  }
})();