function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=Array(e);n<e;n++)t[n]=r[n];return t}var e,n=document.querySelectorAll("th"),t=document.querySelector("tBody"),o=function(e){if(Array.isArray(e))return r(e)}(e=document.querySelectorAll("tBody tr"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(e,n){if(e){if("string"==typeof e)return r(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();function i(r){return Number(r.replace(",","").replace("$",""))}n.forEach(function(r){r.onclick=function(r){var e;e=r.target.cellIndex,o.sort(function(r,n){return 0===e||1===e?r.children[e].innerHTML.localeCompare(n.children[e].innerHTML):i(r.children[e].innerHTML)-i(n.children[e].innerHTML)}),o.forEach(function(r){t.appendChild(r)})}});
//# sourceMappingURL=index.ed861dea.js.map
