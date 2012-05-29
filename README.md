#JustaPage

JustaPage is a one page website template that uses HTML, CSS and jQuery 1.7.2. The HTML template has four main areas for adding content: An "Intro," and three sections that can be scrolled to using the navigation. The navigation uses jQuery to animate scrolling to the appropriate section, and also highlights the navigation item when the appropriate section is in view.

The template comes with:
*index.html
*main.css
*mobile.css
*reset.css [Based on the Eric Meyer's Reset.](http://meyerweb.com/eric/tools/css/reset/index.html)
*jquery-1.7.2.min.js
*justapage.js &#40;weighs in at 4KB&#41;
	
To use, take everything in the "template" folder and drop it wherever you're going to keep your project. When you're ready, you can upload it to the correct folder on your web host's server.

Things to do and notice:

This is a template. Dump your code in between the section you want it to appear. There are comments so you don't get lost in the code.

```html
<div class="section" id="one"> <!-- begin section one -->

	<>div class="newstuff">

</div> <!-- end .section#one -->
```

*Anything you add to the HTML you need to style.*

```html
.newstuff {
background-color: #F00;
display: block;
position: relative;
height:100px;
}
```

Keep the "intro" div as a real number, not as auto. This will prevent jumping around when scrolling past the navigation div.

```html
#intro {
background: url(...);
display: block;
position relative;
height:508px;
}
```
In the file justapage.js, you can adjust the distance above a section that begins the highlight in the navigation. Just can the number for the buffer variable.

```html
var buffer = 100;
```

Check out the [Demo Page](http://paulmolluzzo.github.com/justapage) to see JustaPage in action and see more info.

## License

Licensed under the [GPL license](http://www.gnu.org/licenses/gpl-3.0.html).

This file is part of JustaPage. Created by Paul Molluzzo.

JustaPage is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

JustaPage is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
[GNU General Public License](http://www.gnu.org/licenses/gpl-3.0.html) for more details.

<small>
Copyright (c) 2012 Paul Molluzzo
</small>