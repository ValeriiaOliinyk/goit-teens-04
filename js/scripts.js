"use strict";$(document).ready(function(){$(".burger").click(function(r){$(".burger,.navigation").toggleClass("active"),$("body").toggleClass("lock")})});var anchors=document.querySelectorAll('a[href*="#"]'),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_loop=function(){var o=_step.value;o.addEventListener("click",function(r){r.preventDefault();var t=o.getAttribute("href");document.querySelector(""+t).scrollIntoView({behavior:"smooth",block:"start"})})},_iterator=anchors[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)_loop()}catch(r){_didIteratorError=!0,_iteratorError=r}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}