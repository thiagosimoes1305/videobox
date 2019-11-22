# VideoBox
[![004](https://img.shields.io/badge/jQuery-2.x-blue.svg)](https://code.jquery.com/jquery-2.2.4.min.js)

<a href="https://pag.ae/bgwYhxd"><img src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/164x37-doar-assina.gif" border="0" /></a>

Plugin created for [jQuery](https://jquery.com) to load videos from **YouTube**, **Vimeo** and **Kaltura** using the URL.
<br>

## Documentation<br>

The method used is **.videoBox()**.<br>
Method:
```javascript
$(".video-div").videoBox();
```

<br>

## YouTube: 

Add the attribute in HTML *data-youtube* with the video URL.<br>
HTML page:

```html
<div class="video-div" data-youtube="https://www.youtube.com/watch?v=lXtvSyj87TU"></div>
```

<br>

Adding parameters to the method:<br>
The parameters are based on [YouTube API](https://developers.google.com/youtube/player_parameters?hl=pt-br#Parameters), but the parameters of *width* and *height* were added.

```javascript
$(".video-div").videoBox({
	controls: 0
});
```

Example: [https://jsfiddle.net/ted_k/uypnkcjh/2/](https://jsfiddle.net/ted_k/uypnkcjh/2/)

Parameters     	| Default Value
----------------|---------------
width 			| 640
height    		| 360
loop     		| false
autoplay 		| false
byline			| true
color			| "00adef"
maxheight		| 
maxwidth		|
portrait		| true
title			|

<br>
----------
<br>

## Vimeo: 

Add the attribute in HTML *data-vimeo* vimeo with video URL<Br>
HTML page:

```html
<div class="video-div" data-vimeo="https://vimeo.com/77696897"></div>
```

<br>

Adding parameters to the method:<br>
The parameters are in the table below:

```javascript
$(".video-div").videoBox({
	autoplay: true
});
```
Example: [https://jsfiddle.net/ted_k/uypnkcjh/4/](https://jsfiddle.net/ted_k/uypnkcjh/4/)

Parameters     	| Default Value
----------------|---------------
width 			| 640
height    		| 360
loop     		| false
autoplay 		| false
byline			| true
color			| "00adef"
maxheight		| 
maxwidth		|
portrait		| true
title			|

<br>
----------
<br>

## Kaltura: 

Add the attribute in HTML *data-kaltura* kaltura with video **partner_id**<Br>
HTML page:

```html
<div class="video-div" data-kaltura="243342"></div>
```

<br>

Adding parameters to the method:<br>
The parameters are in the table below:

```javascript
$(".video-div").videoBox({
	partner_id: "243342",
	uiconf_id: "12905712",
	entry_id: "0_uka1msg4"
});
```
Example: [https://jsfiddle.net/ted_k/uypnkcjh/7/](https://jsfiddle.net/ted_k/uypnkcjh/7/)

Parameters     	| Default Value
----------------|---------------
partner_id 		| 243342
uiconf_id    	| 12905712
entry_id     	| 0_uka1msg4
width 			| 640
height			| 360
switchOnResize	| false
simpleFormat	| true
displayMode		| "sizebitrate" (sizebitrate | bitrate size)
inlineScript	| false
hideSource		| null
autoPlay		| false
