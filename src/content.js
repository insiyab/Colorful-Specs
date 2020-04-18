/*
  File:     content.js
  Author:   Insiya Bambot
  Website:  http://insiyabambot.wordpress.com/
  Project:  Colorful Specs
*/

/* Define defaults */
var themes = ['forest', 'halloween', 'lagoon', 'minty', 'watermelon', 'none'];
var global_default = 'forest';

/* Upon loading page, set the theme using the value in local storage */
chrome.storage.sync.get(['theme'], function(stored) {
  // console.log('Colorful Specs: Theme is currently set to ' + result.theme);
  if(themes.includes(stored.theme)){
    set_theme(stored.theme);
  }
  else {
    chrome.storage.sync.set({'value': global_default});
    set_theme(global_default);
  }
});

/* Function to set a chosen style */
function set_theme(theme) {
  if(themes.includes(theme)){
    // remove pre-existing styles
    var elems = document.querySelectorAll('link[rel=stylesheet]');
    for (var i = 0; i < elems.length; i++) {
      elems[i].parentNode.removeChild(elems[i]);
    }

    // inject link to stylesheet into current HTML page
    var newlink = document.createElement('link');
    newlink.rel = 'stylesheet';
    newlink.type = 'text/css';
    newlink.href = chrome.extension.getURL('css_styles/' + theme + '.css');
    document.getElementsByTagName('head')[0].appendChild(newlink);
  }
}

/* Event listener for requests from the popup script */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log('Colorful Specs: Changing theme to ' + request.new_style);
    set_theme(request.new_theme);
  });
