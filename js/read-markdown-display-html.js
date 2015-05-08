
	var xmlHttp;
	var info;

	var thing = document.body.appendChild( document.createElement( 'script' ) );
	thing.onload = init;
	thing.src = 'http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js'; 

	function init() {

		document.body.style.cssText = ' font: bold 12pt monospace; left: 0; margin: 0 auto; position: absolute; right: 0; max-width:900px;';

		info = document.body.appendChild( document.createElement( 'div' ) );

		fileName = location.hash ? location.hash.split( '#' )[1] : 'readme.md';

		requestFile( fileName );

		document.title = document.title ? document.title : fileName;

	}

	function requestFile( fileName ) {

		xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'GET', fileName, true );
		xmlHttp.onreadystatechange = callback;
		xmlHttp.send( null );

	}

	function callback() {

		if ( xmlHttp.readyState != 4  ) { return; }

		info.innerHTML = new Showdown.converter().makeHtml( xmlHttp.responseText );

	}

/*

View only on GitHub
<span style=display:none; >[View as web page]( http://wikihouse.github.io/viewer-experiments/ "view the file as a web page." ) </span>  


View the following only on the web page
<input type=button value='Source code on GitHub' onclick=window.location.assign('http://github.com/wikihouse/viewer-experiments/tree/gh-pages/'); />


*/