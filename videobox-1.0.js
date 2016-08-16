/*
 * VideoBox
 * Example and Documentation: https://github.com/tedktedk/videobox/blob/master/README.md
 *
 * Version: 1.0
 *
 * Copyright (c) 2016 Ted k'
 * http://tedk.com.br/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
 (function($){

 	$.fn.extend({
 		
 		videoBox: function(options){
 			var _this = $(this);
 			var randomID = "VIDEOBOX_" + Math.floor(Math.random() * 100) + 1;
 			var tag = document.createElement("script");
			var firstScriptTag = document.getElementsByTagName("script")[0];
			tag.id = "VIDEOBOX_createTag";

			_this.attr("id", randomID);

			// Youtube Video.
			if (_this.attr("data-youtube")){
				var returnID = _this.attr("data-youtube").match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

				var defaults = {
					autohide: 2,
					autoplay: 0,
					cc_load_policy: 1,
					color: "",
					controls: 1,
					disablekb: 0,
					enablejsapi: 0,
					fs: 1,
					hl: "",
					iv_load_policy: 1,
					loop: 0,
					modestbranding: 1,
					showinfo: 1,
				    height: 390,
					width: 640
				};
				
				var options = $.extend(defaults, options);

				if (!document.getElementById("VIDEOBOX_createTag")){
					tag.src = "https://www.youtube.com/iframe_api";
					firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
				}

				window.onYouTubeIframeAPIReady = function(){
					var player = new YT.Player(randomID, {
						height: options.height,
						width: options.width,
						videoId: returnID[1],
						playerVars: {
				            "autohide": options.autohide,
							"autoplay": options.autoplay,
							"cc_load_policy": options.cc_load_policy,
							"color": options.color,
							"controls": options.controls,
							"disablekb": options.disablekb,
							"enablejsapi": options.enablejsapi,
							"fs": options.fs,
							"hl": options.hl,
							"iv_load_policy": options.iv_load_policy,
							"loop": options.loop,
							"modestbranding": options.modestbranding,
							"showinfo": options.showinfo,
						    "height": options.height,
							"width": options.width
				        }
					});
				}
			}
			// Vimeo Video.
			else if (_this.attr("data-vimeo")){
				var returnID = _this.attr("data-vimeo").match(/https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/);
				var defaults = {
					id: returnID[3],
			        width: 640,
			        height: 360,
			        loop: false,
			        autoplay: false,
			        byline: true,
			        color: "00adef",
			        maxheight: "",
			        maxwidth: "",
			        portrait: true,
			        title: ""
				};
				
				var options = $.extend(defaults, options);

				if (!document.getElementById("VIDEOBOX_createTag")){
					tag.src = "https://player.vimeo.com/api/player.js";
					firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
				}

				tag.addEventListener("load", function(e){
					var player = new Vimeo.Player(document.getElementById(randomID), options);
				}, false);
			}
    	}

	});

})(jQuery);
