/*
  File:     popup.js
  Author:   Insiya Bambot
  Website:  http://insiyabambot.wordpress.com/
  Project:  Colorful Specs
*/

/* Add an event listener for each button */
document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('forest').addEventListener('click', function(){
    pick_theme('forest');
  });
  document.getElementById('halloween').addEventListener('click', function(){
    pick_theme('halloween');
  });
  document.getElementById('lagoon').addEventListener('click', function(){
    pick_theme('lagoon');
  });
  document.getElementById('minty').addEventListener('click', function(){
    pick_theme('minty');
  });
  document.getElementById('watermelon').addEventListener('click', function(){
    pick_theme('watermelon');
  });
  document.getElementById('none').addEventListener('click', function(){
    pick_theme('none');
  });

  // Add more event listeners here

});

/* Store chosen theme in local storage and send request to content script */
function pick_theme(theme) {
  chrome.storage.sync.set({'theme': theme});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {new_theme: theme});
  });
}
