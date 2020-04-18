# Colorful Specs

Colorful Specs is a Google Chrome extension that makes your project specs more readable and colorful. Choose from a variety of given themes to help you read through specs with ease.

### Installation

1. Clone this repository onto your computer, preferrably somewhere where you can leave it for a long time without moving it. 

```
git clone https://github.com/insiyab/Colorful-Specs.git
```

2. Go to `chrome://extensions/` in Google Chrome. 

3. Turn on `Developer Mode` using the slider in the top right corner, and then click `Load Unpacked` on the top left. 

4. Navigate to and select the Colorful Specs folder.

That's it! You should now be able to see the Colorful Specs extension in your Chrome browser.

### Backstory
My name is [Insiya Bambot](http://insiyabambot.wordpress.com/). I created Colorful Specs as I found myself struggling to focus on my computer science projects. The majority of my computer science classes use plain HTML pages to display assignments, and the glare of the white screen made it difficult to parse through the project requirements.

Colorful Specs is inspired by [Rishabh Aggarwal](https://www.linkedin.com/in/rishabhaggarwal2/)'s [Beautiful Eggert](https://chrome.google.com/webstore/detail/beautiful-eggert/gkhkfkioobdgdboaejfjgbefmedmeijh?hl=en) and [Justin Liu](https://jliu.cc/)'s [Vampire Eggert](https://github.com/jl98/VampireEggert). To learn more about the story behind the original Beautiful Eggert, check out Rishabh's [Medium article](https://medium.com/@rishabhaggarwal2/beautiful-eggert-89691d27d3e0).

While these previous extensions make target websites reader-friendly, I wanted to give users the option to switch back and forth between light and dark modes, as well as more colorful themes as opposed to grayscale pages. Additionally, I wanted to make sure that these themes were visibly accessible to all users.

### Themes

This extension supports several color themes, including both light and dark modes:
* 🌳 Forest
* 🎃 Halloween
* 🛶 Lagoon
* 🌿 Minty
* 🍉 Watermelon

You can also select 'None' to view the plain HTML page.

I used [Accessible Colors](https://accessible-colors.com) to develop to the best of my ability an AAA compliant design for each of these themes.

Note that the screen may flicker when changing pages. This is because the extension needs to retrieve the user's currently set theme, momentarily revealing the original HTML page.

### Websites

This extension is active on the following domains:
* `web.cs.ucla.edu/classes/*`
* `lasr.cs.ucla.edu/classes/*`
* `isi.deterlab.net/file`
* `yellowstone.cs.ucla.edu/cs143/*`
* `web.cs.ucla.edu/~ravi/CS134*/assignment*`

All sites on the list will be affected by the same choice of theme.

### Add a Custom Theme

[Here](https://github.com/insiyab/Colorful-Specs/blob/master/Add_Theme.md) are step-by-step instructions on how you can use CSS to add your own theme to Colorful Specs.
