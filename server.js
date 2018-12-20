!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("react-router-dom")},function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("cors")},function(t,e){t.exports=require("react-dom/server")},function(t,e){t.exports=require("serialize-javascript")},function(t,e){t.exports=require("isomorphic-fetch")},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r),a=n(0),i=n.n(a),c=n(4),u=n.n(c),l=n(5),p=n(1),f=n(6),s=n.n(f),y=n(7),m=n.n(y);var h=n(2),b=n.n(h);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var x=function(t){function e(t){var n,r,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,a=(n=!(o=O(e).call(this,t))||"object"!==d(o)&&"function"!=typeof o?j(r):o).props.staticContext.data,n.state={repos:a,loading:!a},n.fetchRepos=n.fetchRepos.bind(j(j(n))),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,a["Component"]),n=e,(r=[{key:"componentDidMount",value:function(){this.state.repos||this.fetchRepos(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(t,e){t.match.params.id!==this.props.match.params.id&&this.fetchRepos(this.props.match.params.id)}},{key:"fetchRepos",value:function(t){var e=this;this.setState(function(){return{loading:!0}}),this.props.init(t).then(function(t){return e.setState(function(){return{repos:t,loading:!1}})})}},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.repos;return!0===e?i.a.createElement("p",null,"LOADING"):i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},n.map(function(t){var e=t.name,n=t.owner,r=t.stargazers_count,o=t.html_url;return i.a.createElement("li",{key:e,style:{margin:"30px 20px"}},i.a.createElement("div",null,i.a.createElement("a",{href:o},e)),i.a.createElement("div",null,"@",n.login),i.a.createElement("div",null,r," stars"))}))}}])&&v(n.prototype,r),o&&v(n,o),e}();x.propTypes={staticContext:b.a.object,init:b.a.func,match:b.a.any};var _=[{component:function(){return i.a.createElement("div",null,"Select a language")},exact:!0,path:"/"},{path:"/popular/:id",component:x,init:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(t,"&sort=stars&order=desc&type=Repositories"));return m()(e).then(function(t){return t.json()}).then(function(t){return t.items}).catch(function(t){return console.warn(t),null})}((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("/").pop())}}];function w(){return i.a.createElement("ul",null,[{name:"All",param:"all"},{name:"Javascript",param:"javascript"},{name:"Ruby",param:"ruby"},{name:"Python",param:"python"},{name:"Java",param:"java"}].map(function(t){var e=t.name,n=t.param;return i.a.createElement("li",{key:n},i.a.createElement(p.NavLink,{to:"/popular/".concat(n)},e))}))}function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function P(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,T(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&q(t,e)}(e,a["Component"]),n=e,(r=[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null),i.a.createElement(p.Switch,null,_.map(function(t){var e=t.path,n=t.exact,r=t.component,o=P(t,["path","exact","component"]);return i.a.createElement(p.Route,{key:e,exact:n,path:e,render:function(t){return i.a.createElement(r,E({},t,o))}})})))}}])&&R(n.prototype,r),o&&R(n,o),e}();C.propTypes={data:b.a.array};var I=C,A=o()();A.use(u()()),A.use(o.a.static("./dist")),A.get("*",function(t,e,n){var r=_.find(function(e){return Object(p.matchPath)(t.url,e)})||{};(r.init?r.init(t.path):Promise.resolve()).then(function(n){var r={data:n},o=Object(l.renderToString)(i.a.createElement(p.StaticRouter,{location:t.url,context:r},i.a.createElement(I,null)));e.send('\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <script src="/bundle.js" defer><\/script>\n          <script>window.__INITIAL_DATA__ = '.concat(s()(n),'<\/script>\n        </head>\n        <body>\n          <div id="app">').concat(o,"</div>\n        </body>\n      </html>\n    "))}).catch(n)}),A.listen(3e3,function(){console.log("server listening on port 3000")})}]);