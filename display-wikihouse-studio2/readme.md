![Wikihouse logo]( ../wikihouse-logo.png )

_<small>[WikiHouse]( http://www.wikihouse.cc/ ) is an open source building system. Many designers, collaborating to make it simple for everyone to design, print and assemble beautiful, low-energy homes, customised to their needs.</small>_
***
[WikiHouse Viewer Experiments]( http://wikihouse.github.io/viewer-experiments/ ) &raquo;
Display WikiHouse Studio2 Read Me
===

<span style=display:none; >[View as web page]( http://wikihouse.github.io/viewer-experiments/display-wikihouse-studio2/ "view the files as apps." ) <input value="<< You are here" size=15 style="font:bold 11pt monospace;border-width:0;" ></span>

Latest release: [Display WikiHouse Studio2]( http://WikiHouse.github.io/viewer-experiments/display-wikihouse-studio2/latest/index.html )

This script is a first pass at enabling the WikiHouse designs to be viewable using free, open source software while online and hosted on a free platform.

You should be able to rotate, zoom and and pan the structure using your pointing device or one, two and three fingers.

The structure is set up in the air so that you may inspect the underside of the structure.

There are a number of issues to be resolved - particularly the long load times.

<input type=button value='Source code on GitHub' onclick=window.location.href='https://github.com/WikiHouse/viewer-experiments/tree/gh-pages/display-wikihouse-studio2'; />

### Features

* Real-time zoom, pan and rotate of the model
* Choice of camera controllers
	* Orbit - good for the overview
	* First Person - good for the walk-through
		* Left button moves you forward
		* Right button moves you backward
* Ability to freeze camera at current position - by clicking the check box or pressing the space bar
* Views have shade and shadow
* Slider bar controls exploded view
* Buttons for
	* Section View
	* Plan View
	* Reset View
* Highlight and heads-up display of clicked-on object properties
	* Will eventually display link to specification clause, [IFC]( http://en.wikipedia.org/wiki/Industry_Foundation_Classes ), Bill of Materials etc
* Background is three circular gradients with random colors
* Slide-out menu enables basic operation on mobile device
* Loading progress indicates how many bytes have been loaded

### Road Map

* Obtain access to data for individual components
* Rebuild as faster-loading JSON/STL files
* Rebuild as fully parameterized 3D model
* Real-time control of First Person Controls Look Speed and Movement Speed
* Permalinks to set camera position etc
* Set sun position
* And pretty rendering bits
* Ability to turn off heads-up display


### Issues

* Once you have initiated 'First Person Controls', you can no longer change the exploded view factor.
* Components that have been highlighted do not revert to their original color
* Rest view in First Person mode does not reset view properly

### System Requirements

In order to view the files on this site you will need a device and browser that provides good support for [WebGL](http://get.webgl.org/) - the JavaScript API for rendering interactive 3D graphics and 2D graphics within any compatible web browser without the use of plug-ins.

Generally this means a computer with an Intel Core i5 processor or better with an external GPU such as one made by Nvidia.
Successful use of the apps on a phone or tablet is highly unlikely.
A mouse or other pointing device with a scroll wheel is also highly recommended so that you can zoom, pant and rotate in 3D.

The apps here are currently being built and tested with the Google Chrome browser.

Script is not running under Internet Explorer. May be running under FireFox. Safari: unlikely.

Bugs on browsers other than Chrome need not be reported until such time as the work settles down and an effort to support more browsers is initiated.

### Copyright and License
All work herein is under an [MIT License](http://jaanga.github.io/libs/jaanga-copyright-and-mit-license.md)
or a CC-BY-SA 4.0 license - as appropriate.

### WikiHouse Commons
The WikiHouse Commons are where all the files of work in development are shared by teams within the community.
All design information shared in the WikiHouse commons is shared under a CC-BY-SA 4.0 license, and according to the WikiHouse community terms & conditions.



### Change Log

2015-05-14 ~ Theo

* R5
* Adds choice of Orbit or First Person Controls
* Add freeze camera movement

2015-05-04 ~ Theo

* R4
* Add slide out menu
* Adds Section View, Plan View and Reset View
* Adds loading progress indication

2015-05-02 ~ Theo

* R3a ~ fixes issue with explode not working with heads-up display


