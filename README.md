# VideoBox
[![004](https://img.shields.io/badge/jQuery-2.x-blue.svg)](https://code.jquery.com/jquery-2.2.4.min.js)

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TXW3J3DVNM294" target="_blank"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"></a>

### [#EN](https://github.com/tedktedk/videobox/blob/master/README.md#documentation) | [#PT-BR](https://github.com/tedktedk/videobox/blob/master/README.md#documentação-pt-br)

Plugin created for [jQuery](https://jquery.com) to load videos from **YouTube** and **Vimeo**, using the URL.
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


<br><Br>
## Documentação PT-BR<br>

O método a ser usado é o **.videoBox()**.<br>
Chamada do Método:
```javascript
$(".video-div").videoBox();
```

<br>

## Usando YouTube: 

Adicione o atributo no HTML *data-youtube* com a URL do vídeo.<br>
HTML da página:

```html
<div class="video-div" data-youtube="https://www.youtube.com/watch?v=lXtvSyj87TU"></div>
```

<br>

Adicionando parâmetros para o método:<br>
Os parâmetros são baseadas na [YouTube API](https://developers.google.com/youtube/player_parameters?hl=pt-br#Parameters), mas foram adicionados os parâmetros de *width* e *height*.

```javascript
$(".video-div").videoBox({
	controls: 0
});
```
----------
<br>

## Usando Vimeo: 

Adicione o atributo no HTML *data-vimeo* com a URL do vídeo
HTML da página:

```html
<div class="video-div" data-vimeo="https://vimeo.com/77696897"></div>
```

<br>

Adicionando parâmetros para o método:<br>
Os parâmetros estão na tabela abaixo:

```javascript
$(".video-div").videoBox({
	autoplay: true
});
```

Parâmetro     	| Valor Padrão
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
