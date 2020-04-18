# Colorful Specs: Add a Custom Theme

Want to add your own custom theme to Colorful Specs? Go for it!

1. Clone this repository onto your local machine. From here, are a few changes you'll need to make.

```
git clone https://github.com/insiyab/Colorful-Specs.git
```

2. Make a CSS file with your new theme: `<your_theme>.css`. To make the later steps easier on you, make sure the name of your file is all lowercase with no spaces. Put your CSS file inside the `css_styles` folder.

3. In `src/popup.html`, add a new button with the name of your new theme below the existing button elements. Replace `<your_theme>` with the name of your CSS file without the `.css` file extension. You can replace `My Theme` with whatever name you'd like.

```
<!-- Add more buttons here -->
<button id="<your_theme>"> My Theme </button>
```

You may need to make the popup window bigger to see your button. To do this, find the CSS selector for `body` in `src/popup.html` (near line 40). Then change `height:190px;` (near line 43) to `height:230px;`.

4. In `src/popup.js`, add an event listener for the button you just made. Do this on line 31 under the event listeners for the other buttons.

```
// Add more event listeners here
document.getElementById('<your_theme>').addEventListener('click', function(){
  pick_theme('<your_theme>');
});
```

5. In `src/content.js`, add the name of your CSS file to the `themes` array on line 9.

```
var themes = ['forest', ... , '<your_theme>'];
```

6. To see the modified extension in action, go to [chrome://extensions/](chrome://extensions/) in Google Chrome. Turn on `Developer Mode` using the slider in the top right corner, and then click `Load Unpacked` on the top left. Navigate to and choose the Colorful Specs folder.

That's it! You should be able to see the Colorful Specs extension in Chrome, complete with your new theme.
