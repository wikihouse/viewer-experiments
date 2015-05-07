Display WikiHouse StepUp1 Read Me
===

<span style=display:none; >[View as web page]( http://WikiHouse.github.io/viewer-experiments/index.html#display-wikihouse-stepup1/readme.md# "view the files as apps." ) <input value="<< You are here" size=15 style="font:bold 11pt monospace;border-width:0;" ></span>  

[WikiHouse]( http://www.wikihouse.cc/ )  
WikiHouse is an open source building system. Many designers, collaborating to make it simple for everyone to design, print and assemble beautiful, low-energy homes, customised to their needs.


This demo reads the StepUp_1.dxf file obtained from the WikiHouse Commons and translates the data into Three.js meshes.
The data is displayed in the browser. Clicking on a mesh toggles its position from unassembled to assemble and back.
Buttons are available to reset all components to start position or to assembled position.
Every time a component is clicked the display notes details regarding the component.

You should be able to rotate, zoom and and pan the structure using your pointing device or one, two and three fingers.

The DXF file was translated from AutoCAD 2007 DXF back to AutoCAD R12 DXF using LibreCAD. 
A future revision will directly read data in AutoCAD 2007 DXF format.

No attempt has been made to create a 'pretty' rendering. 
The current focus is on creating a lively and informative presentation of the assembly process.

Currently the assembled position are being input 'by eye' with the help of the limited closest vertex 'snap' point being displayed on screen.
With each new revision, the process should become increasingly automated.  

### Issues
The original data is formulated in millimeters and placed 40 meters along the X axis and 30 meters along the Y axis.
Thus vertex points have numbers such as 39087.905, 28624.0657.
All the components are laid out on a single sheet. No effort has been made to build a block library.
These idiosyncracies are making the automation process more interesting. 


### Change Log

2015-05-03 ~ Theo

* R3

2015-05-02 ~ Theo

*  R1 & R2 committed