;11==$us.detectIE()&&function(){"use strict";var t,o,n,e;"undefined"!=typeof window&&(t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),o=!!t&&16<=parseInt(t[1],10),"objectFit"in document.documentElement.style==0||o?(n=function(t){var e,i,o,n,l,a=t.parentNode;"A"==a.tagName&&(a=a.parentNode),e=a,o=(i=window.getComputedStyle(e,null)).getPropertyValue("position"),n=i.getPropertyValue("overflow"),l=i.getPropertyValue("display"),o&&"static"!==o||(e.style.position="relative"),"hidden"!==n&&(e.style.overflow="hidden"),l&&"inline"!==l||(e.style.display="block"),0===e.clientHeight&&(e.style.height="100%"),-1===e.className.indexOf("object-fit-polyfill")&&(e.className=e.className+" object-fit-polyfill"),function(t){var e=window.getComputedStyle(t,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var o in i)e.getPropertyValue(o)!==i[o]&&(t.style[o]=i[o])}(t),t.style.position="absolute",t.style.height="100%",t.style.width="auto",t.clientWidth>a.clientWidth?(t.style.top="0",t.style.marginTop="0",t.style.left="50%",t.style.marginLeft=t.clientWidth/-2+"px"):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",t.style.top="50%",t.style.marginTop=t.clientHeight/-2+"px")},e=function(t){if(void 0===t||t instanceof Event)t=document.querySelectorAll(".w-grid[class*='ratio_'] img, .has_ratio img");else if(t&&t.nodeName)t=[t];else if("object"!=typeof t||!t.length||!t[0].nodeName)return!1;for(var e,i=0;i<t.length;i++){t[i].nodeName&&("img"!==(e=t[i].nodeName.toLowerCase())||o?"video"!==e||0<t[i].readyState?n(t[i]):t[i].addEventListener("loadedmetadata",function(){n(this)}):t[i].complete?n(t[i]):t[i].addEventListener("load",function(){n(this)}))}return!0},document.addEventListener("DOMContentLoaded",e),window.addEventListener("resize",e),window.objectFitPolyfill=e):window.objectFitPolyfill=function(){return!1})}();
