# Colorful Specs: Add a Custom Theme

### Want to add your own custom theme to Colorful Specs? Go for it!

1. Clone this repository onto your local machine.

```
git clone https://github.com/insiyab/Colorful-Specs.git
```

    If `git` isn't your thing, you can also use the bright green button above that says `Clone or download` to download the zip file.

2. Make a CSS file with your new theme: `<your_theme>.css`. To make the later steps easier on you, make sure the name of your file is all lowercase with no spaces. Put your CSS file inside the `css_styles` folder.

3. In `src/popup.html`, add a new button element with the name of your theme below the existing button elements. Replace `<your_theme>` with the name of your CSS file without the `.css` file extension. You can replace `My Theme` with whatever name you'd like.

```html
<!-- Add more buttons here -->
<button id="<your_theme>"> My Theme </button>
```

    You may need to make the popup window bigger to see your button. To do this, find the CSS selector for `body` in `src/popup.html` (near line 40). Then change `height:190px;` (near line 43) to `height:230px;`. (In general, add 40px for each new row of buttons.)

4. In `src/popup.js`, add an event listener for the button you just made. Do this on line 31 under the event listeners for the other buttons.

```javascript
// Add more event listeners here
document.getElementById('<your_theme>').addEventListener('click', function(){
  pick_theme('<your_theme>');
});
```

5. In `src/content.js`, add the name of your CSS file to the `themes` array on line 9.

```javascript
var themes = ['forest', ... , '<your_theme>'];
```

6. To see the modified extension in action, go to `chrome://extensions/` in Google Chrome.

7. Turn on `Developer Mode` using the slider in the top right corner, then click `Load Unpacked` on the top left.

8. Navigate to and select the Colorful Specs folder in your computer's file system.

That's it! You should now be able to see the Colorful Specs extension in your Chrome browser, complete with your new theme.
