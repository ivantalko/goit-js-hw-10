!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,d=a||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return d.Date.now()};function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var a=u.test(e);return a||f.test(e)?c(e.slice(2),a?2:8):r.test(e)?NaN:+e}e=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,d=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function j(t){return a=t,f=setTimeout(O,e),l?g(t):u}function h(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-a>=r}function O(){var t=p();if(h(t))return T(t);f=setTimeout(O,function(t){var n=e-(t-c);return d?b(n,r-(t-a)):n}(t))}function T(t){return f=void 0,s&&o?g(t):(o=i=void 0,u)}function w(){var t=p(),n=h(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return j(c);if(d)return f=setTimeout(O,e),g(c)}return void 0===f&&(f=setTimeout(O,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(d="maxWait"in n)?v(m(n.maxWait)||0,e):r,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(p())},w};document.getElementByld("search-box").addEventListner("input",t(e)((function(t){t.target.value}),300))}();
//# sourceMappingURL=index.d91f5edd.js.map
