!function(t){t.fn.Lock=function(i){var c={zIndex:"9995",background:"rgba(249,249,249,1)",size:"medium"},i=i||{};t.extend(c,i);var s="";return s+='<div class="preloader-wrapper active">',s+='\t<div class="spinner-layer spinner-blue">',s+='\t\t<div class="circle-clipper left">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+='\t\t<div class="gap-patch">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+='\t\t<div class="circle-clipper right">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+="\t</div>",s+='\t<div class="spinner-layer spinner-red">',s+='\t\t<div class="circle-clipper left">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+='\t\t<div class="gap-patch">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+='\t\t<div class="circle-clipper right">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+="\t</div>",s+='\t<div class="spinner-layer spinner-yellow">',s+='\t\t<div class="circle-clipper left">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+='\t\t<div class="gap-patch">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+='\t\t<div class="circle-clipper right">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+="\t</div>",s+='\t<div class="spinner-layer spinner-green">',s+='\t\t<div class="circle-clipper left">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+='\t\t<div class="gap-patch">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+='\t\t<div class="circle-clipper right">',s+='\t\t\t<div class="circle"></div>',s+="\t\t</div>",s+="\t</div>",s+="</div>",this.each(function(){var i=t(this);if(0===i.find(".lock").length){var l=t("<div>",{"class":"lock valign-wrapper",css:{display:"none",position:i.is(t("body"))?"fixed":"absolute",zIndex:c.zIndex,top:"0px",right:"0px",bottom:"0px",left:"0px",cursor:"wait",background:c.background}}),d=t("<div>",{"class":"valign center",css:{width:"100%"}});d.html(s),l.html(d),i.prepend(l),d.find(".preloader-wrapper").addClass(c.size)}i.find(".lock").stop().fadeIn(400)})},t.fn.Unlock=function(){return this.each(function(){var i=t(this);i.find(".lock").stop().fadeOut(300,function(){t(this).remove()})})}}(jQuery);