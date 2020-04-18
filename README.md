# Colorful Specs

Colorful Specs is a Chrome Extension that makes your project instructions more readable and colorful. Choose from a variety of given color themes to help you read through specs with ease.

### Backstory
My name is [Insiya Bambot](http://insiyabambot.wordpress.com/). I created Colorful Specs as I found myself struggling to focus on my computer science projects. The majority of my computer science classes use plain HTML pages to display assignments, and the glare of the white screen made it difficult to parse through the project requirements.

Colorful Specs is inspired by [Rishabh Aggarwal](https://www.linkedin.com/in/rishabhaggarwal2/)'s [Beautiful Eggert](https://chrome.google.com/webstore/detail/beautiful-eggert/gkhkfkioobdgdboaejfjgbefmedmeijh?hl=en) and [Justin Liu](https://jliu.cc/)'s [Vampire Eggert](https://github.com/jl98/VampireEggert), both of which address this problem with specially made CSS styles. (To learn more about the story behind the original Beautiful Eggert, check out Rishabh's [Medium article](https://medium.com/@rishabhaggarwal2/beautiful-eggert-89691d27d3e0).)

While these previous extensions already create a much more reader-friendly theme to the target websites, I wanted to give users the choice between light and dark modes, as well as more colorful options as opposed to grayscale pages. Additionally, I wanted to make sure that these color themes were visibly accessible to all users.

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

Look at `Add_Theme.md` for step-by-step instructions on how to add your own theme to Colorful Specs.
