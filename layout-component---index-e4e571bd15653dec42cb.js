webpackJsonp([2],{"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var p=u(e),f=u(t)}catch(e){return!1}if(p.length!=f.length)return!1;for(p.sort(),f.sort(),i=p.length-1;i>=0;i--)if(p[i]!=f[i])return!1;for(i=p.length-1;i>=0;i--)if(s=p[i],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n("./node_modules/deep-equal/lib/keys.js"),c=n("./node_modules/deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/hoist-non-react-statics/index.js":function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},o="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,i){if("string"!=typeof t){var a=Object.getOwnPropertyNames(t);o&&(a=a.concat(Object.getOwnPropertySymbols(t)));for(var u=0;u<a.length;++u)if(!(n[a[u]]||r[a[u]]||i&&i[a[u]]))try{e[a[u]]=t[a[u]]}catch(e){}}return e}},"./node_modules/lodash._getnative/index.js":function(e,t){function n(e){return!!e&&"object"==typeof e}function r(e,t){var n=null==e?void 0:e[t];return a(n)?n:void 0}function o(e){return i(e)&&f.call(e)==u}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function a(e){return null!=e&&(o(e)?d.test(s.call(e)):n(e)&&c.test(e))}var u="[object Function]",c=/^\[object .+?Constructor\]$/,l=Object.prototype,s=Function.prototype.toString,p=l.hasOwnProperty,f=l.toString,d=RegExp("^"+s.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},"./node_modules/lodash.isarguments/index.js":function(e,t){function n(e){return o(e)&&T.call(e,"callee")&&(!y.call(e,"callee")||h.call(e)==s)}function r(e){return null!=e&&a(e.length)&&!i(e)}function o(e){return c(e)&&r(e)}function i(e){var t=u(e)?h.call(e):"";return t==p||t==f}function a(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=l}function u(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function c(e){return!!e&&"object"==typeof e}var l=9007199254740991,s="[object Arguments]",p="[object Function]",f="[object GeneratorFunction]",d=Object.prototype,T=d.hasOwnProperty,h=d.toString,y=d.propertyIsEnumerable;e.exports=n},"./node_modules/lodash.isarray/index.js":function(e,t){function n(e){return!!e&&"object"==typeof e}function r(e,t){var n=null==e?void 0:e[t];return u(n)?n:void 0}function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=m}function i(e){return a(e)&&T.call(e)==l}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function u(e){return null!=e&&(i(e)?h.test(f.call(e)):n(e)&&s.test(e))}var c="[object Array]",l="[object Function]",s=/^\[object .+?Constructor\]$/,p=Object.prototype,f=Function.prototype.toString,d=p.hasOwnProperty,T=p.toString,h=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=r(Array,"isArray"),m=9007199254740991,E=y||function(e){return n(e)&&o(e.length)&&T.call(e)==c};e.exports=E},"./node_modules/lodash.keys/index.js":function(e,t,n){function r(e){return function(t){return null==t?void 0:t[e]}}function o(e){return null!=e&&a(E(e))}function i(e,t){return e="number"==typeof e||d.test(e)?+e:-1,t=null==t?m:t,e>-1&&e%1==0&&e<t}function a(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=m}function u(e){for(var t=l(e),n=t.length,r=n&&e.length,o=!!r&&a(r)&&(f(e)||p(e)),u=-1,c=[];++u<n;){var s=t[u];(o&&i(s,r)||h.call(e,s))&&c.push(s)}return c}function c(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function l(e){if(null==e)return[];c(e)||(e=Object(e));var t=e.length;t=t&&a(t)&&(f(e)||p(e))&&t||0;for(var n=e.constructor,r=-1,o="function"==typeof n&&n.prototype===e,u=Array(t),l=t>0;++r<t;)u[r]=r+"";for(var s in e)l&&i(s,t)||"constructor"==s&&(o||!h.call(e,s))||u.push(s);return u}var s=n("./node_modules/lodash._getnative/index.js"),p=n("./node_modules/lodash.isarguments/index.js"),f=n("./node_modules/lodash.isarray/index.js"),d=/^\d+$/,T=Object.prototype,h=T.hasOwnProperty,y=s(Object,"keys"),m=9007199254740991,E=r("length"),b=y?function(e){var t=null==e?void 0:e.constructor;return"function"==typeof t&&t.prototype===e||"function"!=typeof e&&o(e)?u(e):c(e)?y(e):[]}:u;e.exports=b},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/react.js"),p=r(s),f=n("./node_modules/prop-types/index.js"),d=r(f),T=n("./node_modules/react-side-effect/lib/index.js"),h=r(T),y=n("./node_modules/deep-equal/index.js"),m=r(y),E=n("./node_modules/react-helmet/lib/HelmetUtils.js"),b=n("./node_modules/react-helmet/lib/HelmetConstants.js"),A=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case b.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case b.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,E.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),p.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(p.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,E.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},g=(0,h.default)(E.reducePropsToState,E.handleClientStateChange,E.mapStateOnServer)(v),_=A(g);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestIdleCallback=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/react.js"),u=r(a),c=n("./node_modules/object-assign/index.js"),l=r(c),s=n("./node_modules/react-helmet/lib/HelmetConstants.js"),p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,s.TAG_NAMES.TITLE),n=m(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return m(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},y=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=function(e){return{baseTag:h([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),encode:m(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:y(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:y(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:y(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:y(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:y(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.requestIdleCallback?window.requestIdleCallback:function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}}(),A=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.cancelIdleCallback?window.cancelIdleCallback:function(e){return clearTimeout(e)}}(),v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,_=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,p=e.title,f=e.titleAttributes;g&&A(g),g=b(function(){O(s.TAG_NAMES.BODY,n),O(s.TAG_NAMES.HTML,r),S(p,f);var d={baseTag:P(s.TAG_NAMES.BASE,t),linkTags:P(s.TAG_NAMES.LINK,o),metaTags:P(s.TAG_NAMES.META,i),noscriptTags:P(s.TAG_NAMES.NOSCRIPT,a),scriptTags:P(s.TAG_NAMES.SCRIPT,c),styleTags:P(s.TAG_NAMES.STYLE,l)},T={},h={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(h[e]=d[e].oldTags)}),g=null,u(e,T,h)})},S=function(e,t){"string"==typeof e&&document.title!==e&&(document.title=e),O(s.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var p=i.indexOf(c);p!==-1&&i.splice(p,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},M=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},w=function(e,t,n,r){var o=M(n);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+p(t,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+p(t,r)+"</"+e+">"},j=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+p(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},I=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=R(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,i,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return I(e,t.title,t.titleAttributes,n)},toString:function(){return w(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return R(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return j(e,t,n)}}}},N=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,p=e.title,f=void 0===p?"":p,d=e.titleAttributes;return{base:k(s.TAG_NAMES.BASE,t,r),bodyAttributes:k(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(s.ATTRIBUTE_NAMES.HTML,o,r),link:k(s.TAG_NAMES.LINK,i,r),meta:k(s.TAG_NAMES.META,a,r),noscript:k(s.TAG_NAMES.NOSCRIPT,u,r),script:k(s.TAG_NAMES.SCRIPT,c,r),style:k(s.TAG_NAMES.STYLE,l,r),title:k(s.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=C,t.handleClientStateChange=_,t.mapStateOnServer=N,t.reducePropsToState=E,t.requestIdleCallback=b,t.warn=v},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/react.js"),c=r(u),l=n("./node_modules/exenv/index.js"),s=r(l),p=n("./node_modules/shallowequal/modules/index.js"),f=r(p);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function p(){T=e(d.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,h=function(e){function t(){o(this,t),e.apply(this,arguments)}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f.default(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return c.default.createElement(l,this.props)},a(t,null,[{key:"displayName",value:"SideEffect("+r(l)+")",enumerable:!0},{key:"canUseDOM",value:s.default.canUseDOM,enumerable:!0}]),t}(u.Component);return h}}},"./node_modules/shallowequal/modules/index.js":function(e,t,n){"use strict";var r=n("./node_modules/lodash.keys/index.js");e.exports=function(e,t,n,o){var i=n?n.call(o,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=r(e),u=r(t),c=a.length;if(c!==u.length)return!1;o=o||null;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<c;s++){var p=a[s];if(!l(p))return!1;var f=e[p],d=t[p],T=n?n.call(o,f,d,p):void 0;if(T===!1||void 0===T&&f!==d)return!1}return!0}},"./src/css/main.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/kevinto/development/git/kevinto.me/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-env/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-stage-0/lib/index.js","/Users/kevinto/development/git/kevinto.me/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),l=r(c),s=n("./node_modules/prop-types/index.js"),p=r(s),f=(n("./node_modules/gatsby-link/index.js"),n("./node_modules/react-helmet/lib/Helmet.js")),d=r(f),T=n("./src/utils/content.js");n("./src/css/main.scss");var h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(d.default,{title:T.siteMetadata.title,meta:[{name:"description",content:T.siteMetadata.description},{name:"keywords",content:T.siteMetadata.keyword},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"author",content:T.siteMetadata.author},{name:"apple-mobile-web-app-title",content:T.siteMetadata.title},{name:"application-name",content:T.siteMetadata.title},{name:"msapplication-TileColor",content:T.siteMetadata.themeColor},{name:"msapplication-TileImage",content:"/mstile-144x144.png"},{name:"theme-color",content:T.siteMetadata.themeColor},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+T.siteMetadata.twitterHandle},{name:"twitter:title",content:T.siteMetadata.title},{name:"twitter:description",content:T.siteMetadata.description},{name:"twitter:image",content:""+T.siteMetadata.url+T.siteMetadata.image},{property:"og:title",content:T.siteMetadata.title},{property:"og:type",content:"website"},{property:"og:url",content:T.siteMetadata.url},{property:"og:image",content:""+T.siteMetadata.url+T.siteMetadata.image}],link:[{rel:"apple-touch-icon",sizes:"57x57",href:"/apple-touch-icon-57x57.png"},{rel:"apple-touch-icon",sizes:"60x60",href:"/apple-touch-icon-60x60.png"},{rel:"apple-touch-icon",sizes:"72x72",href:"/apple-touch-icon-72x72.png"},{rel:"apple-touch-icon",sizes:"76x76",href:"/apple-touch-icon-76x76.png"},{rel:"apple-touch-icon",sizes:"114x114",href:"/apple-touch-icon-114x114.png"},{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-touch-icon-120x120.png"},{rel:"apple-touch-icon",sizes:"144x144",href:"/apple-touch-icon-144x144.png"},{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-touch-icon-152x152.png"},{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon-180x180.png"},{rel:"icon",type:"image/png",href:"/favicon-32x32.png",sizes:"32x32"},{rel:"icon",type:"image/png",href:"/android-chrome-192x192.png",sizes:"192x192"},{rel:"icon",type:"image/png",href:"/favicon-96x96.png",sizes:"96x96"},{rel:"icon",type:"image/png",href:"/favicon-16x16.png",sizes:"16x16"},{rel:"mask-icon",href:"/safari-pinned-tab.svg"},{rel:"canonical",href:T.siteMetadata.url}]}),this.props.children())}}]),t}(l.default.Component);h.propTypes={children:p.default.any,data:p.default.any},t.default=h,e.exports=t.default},"./src/utils/content.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.avatarUrl="/images/avatar.jpg";t.name="Kevin To",t.role="Lead Front-end Developer",t.work="Okendo, Sydney",t.about='\n  <p>\n    <a href="http://infasecure.com.au/">infasecure.com.au</a>, <a href="http://spacebarkid.com/">spacebarkid.com</a>, and <a href="http://shannateng.com/">shannateng.com</a> are some things I’ve made, and <a href="https://www.okendo.io/">Okendo</a> in Sydney, Australia is where I currently work. In the past, I’ve also worked at Freelancer.com and InfaSecure.\n  </p>\n  <p>\n    You can find more of my stuff on <a href="https://codepen.io/qkevinto/">CodePen</a> and <a href="https://github.com/qkevinto/">GitHub</a>, including the source for <a href="https://github.com/qkevinto/kevinto.me">this site</a>!\n  </p>\n  <p>\n    I make things with CSS, HTML, JavaScript and an eye for design — I studied and worked as a Designer for about 6 years but now enjoy building accessible, lean and maintainable Front-end stacks, and have been doing it for the past 3 years or so.\n  </p>\n  <p>\n    When I’m not making websites, I enjoy <a href="https://getpocket.com/@kevinto">reading</a>, <a href="https://www.instagram.com/qkevinto/">photography</a>, travelling and the great outdoors.\n  </p>\n  <p>\n    Feel free to say g’day at <a href="mailto:hello@kevinto.me">hello@kevinto.me</a>, follow me on <a href="https://twitter.com/qkevinto">Twitter</a> or connect with me on <a href="https://au.linkedin.com/in/qkevinto">LinkedIn</a>.\n  </p>\n',t.siteMetadata={title:"Kevin To - Front-end Developer",shortName:"Kevin To",url:"https://kevinto.me",description:"Kevin To is an experienced Front-end Developer from Sydney, Australia.",author:"Kevin To",keyword:"Front-end Developer, Web Developer, HTML, CSS, JavaScript, Sydney, Australia",image:n,themeColor:"#ffffff",twitterHandle:"qkevinto"}}});
//# sourceMappingURL=layout-component---index-e4e571bd15653dec42cb.js.map