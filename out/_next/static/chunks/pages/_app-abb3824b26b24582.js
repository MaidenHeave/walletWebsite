(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2886)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(a){s=!0,c=a}finally{try{i||null==n.return||n.return()}finally{if(s)throw c}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,i=(l=n(7294))&&l.__esModule?l:{default:l},s=n(1003),a=n(880),o=n(9246);function d(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var h={};function u(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(c?"%"+c:"")]=!0}}var f=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,l=void 0===r?!0!==Boolean(!1):r,f=e.href,x=e.as,j=e.children,m=e.prefetch,v=e.passHref,p=e.replace,g=e.shallow,w=e.scroll,y=e.locale,b=e.onClick,N=e.onMouseEnter,O=d(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=j,l&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var C,L=!1!==m,k=a.useRouter(),_=i.default.useMemo((function(){var e=c(s.resolveHref(k,f,!0),2),t=e[0],n=e[1];return{href:t,as:x?s.resolveHref(k,x):n||t}}),[k,f,x]),M=_.href,S=_.as,z=i.default.useRef(M),E=i.default.useRef(S);l&&(C=i.default.Children.only(n));var I=l?C&&"object"===typeof C&&C.ref:t,B=c(o.useIntersection({rootMargin:"200px"}),3),P=B[0],H=B[1],A=B[2],R=i.default.useCallback((function(e){E.current===S&&z.current===M||(A(),E.current=S,z.current=M),P(e),I&&("function"===typeof I?I(e):"object"===typeof I&&(I.current=e))}),[S,I,M,A,P]);i.default.useEffect((function(){var e=H&&L&&s.isLocalURL(M),t="undefined"!==typeof y?y:k&&k.locale,n=h[M+"%"+S+(t?"%"+t:"")];e&&!n&&u(k,M,S,{locale:t})}),[S,M,H,y,L,k]);var U={ref:R,onClick:function(e){l||"function"!==typeof b||b(e),l&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,l,i,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),t[c?"replace":"push"](n,r,{shallow:l,locale:a,scroll:i}))}(e,k,M,S,p,g,w,y)},onMouseEnter:function(e){l||"function"!==typeof N||N(e),l&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),s.isLocalURL(M)&&u(k,M,S,{priority:!0})}};if(!l||v||"a"===C.type&&!("href"in C.props)){var T="undefined"!==typeof y?y:k&&k.locale,V=k&&k.isLocaleDomain&&s.getDomainLocale(S,T,k&&k.locales,k&&k.domainLocales);U.href=V||s.addBasePath(s.addLocale(S,T,k&&k.defaultLocale))}return l?i.default.cloneElement(C,U):i.default.createElement("a",Object.assign({},O,U),n)}));t.default=f,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(a){s=!0,c=a}finally{try{i||null==n.return||n.return()}finally{if(s)throw c}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,d=l.useRef(),h=c(l.useState(!1),2),u=h[0],f=h[1],x=c(l.useState(t?t.current:null),2),j=x[0],m=x[1],v=l.useCallback((function(e){d.current&&(d.current(),d.current=void 0),r||u||e&&e.tagName&&(d.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=o.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=a.get(r):(t=a.get(n),o.push(n));if(t)return t;var c=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=c.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(n,t={id:n,observer:l,elements:c}),t}(n),c=r.id,l=r.observer,i=r.elements;return i.set(e,t),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),a.delete(c);var t=o.findIndex((function(e){return e.root===c.root&&e.margin===c.margin}));t>-1&&o.splice(t,1)}}}(e,(function(e){return e&&f(e)}),{root:j,rootMargin:n}))}),[r,j,n,u]),p=l.useCallback((function(){f(!1)}),[]);return l.useEffect((function(){if(!s&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),l.useEffect((function(){t&&m(t.current)}),[t]),[v,u,p]};var l=n(7294),i=n(4686),s="undefined"!==typeof IntersectionObserver;var a=new Map,o=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},2886:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893),c=n(9008),l=n.n(c),i=(n(3955),n(7164),n(1548),n(1163)),s=n(7294);var a=n(9583);function o(){var e=(0,s.useState)(!1),t=e[0],n=e[1];(0,s.useEffect)((function(){window.addEventListener("scroll",(function(e){window.scrollY>500?n(!0):n(!1)}))}),[]);return t&&(0,r.jsx)("div",{id:"scrollUp",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,r.jsx)(a.$Pg,{})})}var d=n(1664),h=n.n(d);function u(){return(0,r.jsxs)("footer",{className:"footer-wrapper",children:[(0,r.jsx)("div",{className:"footer-widgets-wrapper",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-12",children:(0,r.jsx)("div",{className:"single-footer-widget wow fadeInLeft",children:(0,r.jsxs)("div",{className:"about-us-widget",children:[(0,r.jsx)(h(),{href:"/",children:(0,r.jsx)("a",{className:"footer-logo d-block",children:(0,r.jsx)("img",{src:"img/footer-logo.svg",alt:"wallet"})})}),(0,r.jsx)("p",{children:"Our app allows for easy, secure crypto trading and international money transfers. Trust us for the safest online money transfer services."})]})})}),(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12",children:(0,r.jsxs)("div",{className:"single-footer-widget wow fadeInLeft","data-wow-delay":".2s",children:[(0,r.jsx)("div",{className:"widget-title",children:(0,r.jsx)("h5",{children:"Company"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/about",children:(0,r.jsx)("a",{children:"About wallet"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/contact",children:(0,r.jsx)("a",{children:"Contact & support"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/#",children:(0,r.jsx)("a",{children:"Setting & privacy"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Setting & privacy"})})})]})]})}),(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12",children:(0,r.jsxs)("div",{className:"single-footer-widget wow fadeInLeft","data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"widget-title",children:(0,r.jsx)("h5",{children:"Services"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Incident responder"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Secure managed IT"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Check website Url"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Locker security"})})})]})]})}),(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12",children:(0,r.jsxs)("div",{className:"single-footer-widget wow fadeInLeft","data-wow-delay":".6s",children:[(0,r.jsx)("div",{className:"widget-title",children:(0,r.jsx)("h5",{children:"Resources"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Payment plans"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Blogs & guides"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Premium support"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Our products"})})})]})]})})]})})}),(0,r.jsx)("div",{className:"footer-bottom-wrapper",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"footer-bottom-content d-md-flex justify-content-between",children:[(0,r.jsx)("div",{className:"site-copyright wow fadeInUp","data-wow-delay":".2","data-wow-duration":"1s",children:(0,r.jsxs)("p",{children:["\xa9 2022"," ",(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"wallet"})})," ","All Rights Reserved."]})}),(0,r.jsxs)("div",{className:"social-links mt-4 mt-md-0 wow fadeInUp","data-wow-delay":".3","data-wow-duration":"1s",children:[(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:(0,r.jsx)(a.tBk,{})})}),(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:(0,r.jsx)(a.fWC,{})})}),(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:(0,r.jsx)(a.Zf_,{})})}),(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:(0,r.jsx)(a.BUd,{})})})]})]})})})]})}function f(){return(0,r.jsxs)("footer",{className:"footer-wrapper footer-2",children:[(0,r.jsx)("div",{className:"footer-widgets-wrapper",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-12",children:(0,r.jsx)("div",{className:"single-footer-widget wow fadeInLeft",children:(0,r.jsxs)("div",{className:"about-us-widget",children:[(0,r.jsx)(h(),{href:"/",children:(0,r.jsx)("a",{className:"footer-logo d-block",children:(0,r.jsx)("img",{src:"/img/footer-3.svg",alt:"wallet"})})}),(0,r.jsx)("p",{children:"Our app allows for easy, secure crypto trading and international money transfers. Trust us for the safest online money transfer services."})]})})}),(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12",children:(0,r.jsxs)("div",{className:"single-footer-widget wow fadeInLeft","data-wow-delay":".2s",children:[(0,r.jsx)("div",{className:"widget-title",children:(0,r.jsx)("h5",{children:"Company"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/about",children:(0,r.jsx)("a",{children:"About wallet"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/contact",children:(0,r.jsx)("a",{children:"Contact & support"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/#",children:(0,r.jsx)("a",{children:"Setting & privacy"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Setting & privacy"})})})]})]})}),(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12",children:(0,r.jsxs)("div",{className:"single-footer-widget wow fadeInLeft","data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"widget-title",children:(0,r.jsx)("h5",{children:"Services"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Incident responder"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Secure managed IT"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Check website Url"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Locker security"})})})]})]})}),(0,r.jsx)("div",{className:"col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12",children:(0,r.jsxs)("div",{className:"single-footer-widget wow fadeInLeft","data-wow-delay":".6s",children:[(0,r.jsx)("div",{className:"widget-title",children:(0,r.jsx)("h5",{children:"Resources"})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Payment plans"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Blogs & guides"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Premium support"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"Our products"})})})]})]})})]})})}),(0,r.jsx)("div",{className:"footer-bottom-wrapper",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"footer-bottom-content d-md-flex justify-content-between",children:[(0,r.jsx)("div",{className:"site-copyright wow fadeInUp","data-wow-delay":".2","data-wow-duration":"1s",children:(0,r.jsxs)("p",{children:["\xa9 2022"," ",(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:"wallet"})})," ","All Rights Reserved."]})}),(0,r.jsxs)("div",{className:"social-links mt-4 mt-md-0 wow fadeInUp","data-wow-delay":".3","data-wow-duration":"1s",children:[(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:(0,r.jsx)(a.tBk,{})})}),(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:(0,r.jsx)(a.fWC,{})})}),(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:(0,r.jsx)(a.Zf_,{})})}),(0,r.jsx)(h(),{href:"#",children:(0,r.jsx)("a",{children:(0,r.jsx)(a.BUd,{})})})]})]})})})]})}function x(e){var t=e.submenus,n=e.isDropdownOpen,c={height:n?49*t.length:"0"};return(0,r.jsx)("ul",{className:"sub-menu ".concat(n?"show":""),style:c,children:t.map((function(e,t){return(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"".concat("/"!==e.path?"/"+e.path:e.path),children:(0,r.jsx)("a",{children:e.title})})},t)}))})}var j=n(8357);function m(e){return(0,j.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(e)}function v(e){return(0,j.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(e)}function p(e){var t=e.items,n=e.isOpenMenu,c=(0,s.useState)(!1),l=c[0],i=c[1];return(0,s.useEffect)((function(){!1===n&&i(!1)}),[n]),(0,r.jsx)("li",{children:t.submenu?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("a",{className:"dropdown-button","aria-expanded":l?"true":"false",type:"button",role:"button","aria-haspopup":"menu",onClick:function(){return i((function(e){return!e}))},children:[t.title,(0,r.jsx)("span",{className:"dropdown-arrow",children:l?(0,r.jsx)(v,{}):(0,r.jsx)(m,{})})]}),(0,r.jsx)(x,{submenus:t.submenu,isDropdownOpen:l})]}):(0,r.jsx)(h(),{href:"".concat("/"!==t.path?"/"+t.path:t.path),children:(0,r.jsx)("a",{children:t.title})})})}var g=[{title:"Demo",path:"#",submenu:[{title:"Home 1",path:"/"},{title:"Home 2",path:"index-two"},{title:"Home 3",path:"index-three"}]},{title:"About",path:"about"},{title:"Services",path:"services"},{title:"Pages",path:"#",submenu:[{title:"Faq",path:"faq"},{title:"Team",path:"team"},{title:"Portfolio",path:"projects"},{title:"Pricing",path:"pricing"},{title:"404",path:"404"}]},{title:"News",path:"news"},{title:"Contact",path:"contact"}];function w(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return(0,r.jsx)("header",{className:"header-1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row align-items-center justify-content-between",children:[(0,r.jsx)("div",{className:"col-lg-2 col-sm-5 col-md-4 col-6",children:(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)(h(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/img/logo.svg",alt:"wallet"})})})})}),(0,r.jsxs)("div",{className:"col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center",children:[(0,r.jsx)("div",{className:"menu-wrap",children:(0,r.jsx)("div",{className:"main-menu",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/about",children:(0,r.jsx)("a",{children:"About"})})}),(0,r.jsxs)("li",{children:[" ",(0,r.jsx)(h(),{href:"/services",children:(0,r.jsx)("a",{children:"Services"})})]}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/contact",children:(0,r.jsx)("a",{children:"Contact"})})})]})})}),(0,r.jsxs)("div",{className:"header-right-element text-white",children:[(0,r.jsx)("a",{href:"#",children:"login"}),(0,r.jsx)(h(),{href:"/contact",children:(0,r.jsx)("a",{className:"theme-btn black",children:"get started"})})]})]}),(0,r.jsxs)("div",{className:"d-block d-lg-none col-sm-1 col-md-8 col-6",children:[(0,r.jsxs)("div",{className:"mobile-nav-wrap",children:[(0,r.jsx)("div",{id:"hamburger",onClick:function(){return n((function(e){return!e}))},children:(0,r.jsx)(a.Fm7,{})}),(0,r.jsxs)("div",{className:"mobile-nav ".concat(t?"show":""),children:[(0,r.jsx)("button",{type:"button",className:"close-nav",onClick:function(){return n((function(e){return!e}))},children:(0,r.jsx)(a.G5m,{})}),(0,r.jsxs)("nav",{className:"sidebar-nav",children:[(0,r.jsx)("ul",{className:"metismenu",id:"mobile-menu",children:g.map((function(e,n){return(0,r.jsx)(p,{isOpenMenu:t,items:e},n)}))}),(0,r.jsx)(h(),{href:"/contact",children:(0,r.jsx)("a",{className:"theme-btn d-block mt-4 text-center ms-0",children:"get started"})})]})]})]}),(0,r.jsx)("div",{className:"overlay ".concat(t?"active":""),onClick:function(){return n((function(e){return!e}))}})]})]})})})}function y(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return(0,r.jsx)("header",{className:"header-1 style-2",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row align-items-center justify-content-between",children:[(0,r.jsx)("div",{className:"col-lg-2 col-sm-5 col-md-4 col-6",children:(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)(h(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/img/footer-3.svg",alt:"Transland"})})})})}),(0,r.jsxs)("div",{className:"col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center",children:[(0,r.jsx)("div",{className:"menu-wrap",children:(0,r.jsx)("div",{className:"main-menu",children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"#",children:"demos"}),(0,r.jsxs)("ul",{className:"sub-menu",children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/",children:(0,r.jsx)("a",{children:"Home 1"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/index-two",children:(0,r.jsx)("a",{children:"Home 2"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/index-three",children:(0,r.jsx)("a",{children:"Home 3"})})})]})]}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/about",children:(0,r.jsx)("a",{children:"About"})})}),(0,r.jsxs)("li",{children:[" ",(0,r.jsx)(h(),{href:"/services",children:(0,r.jsx)("a",{children:"Services"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"#",children:"Pages"}),(0,r.jsxs)("ul",{className:"sub-menu",children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/faq",children:(0,r.jsx)("a",{children:"faq"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/team",children:(0,r.jsx)("a",{children:"team"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/projects",children:(0,r.jsx)("a",{children:"portfolio"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/pricing",children:(0,r.jsx)("a",{children:"pricing"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/404",children:(0,r.jsx)("a",{children:"404"})})})]})]}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/news",children:(0,r.jsx)("a",{children:"News"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/contact",children:(0,r.jsx)("a",{href:"contact.html",children:"Contact"})})})]})})}),(0,r.jsxs)("div",{className:"header-right-element text-white",children:[(0,r.jsx)("a",{href:"#",children:"login"}),(0,r.jsx)(h(),{href:"/contact",children:(0,r.jsx)("a",{className:"theme-btn black",children:"get started"})})]})]}),(0,r.jsxs)("div",{className:"d-block d-lg-none col-sm-1 col-md-8 col-6",children:[(0,r.jsxs)("div",{className:"mobile-nav-wrap",children:[(0,r.jsx)("div",{id:"hamburger",onClick:function(){return n((function(e){return!e}))},children:(0,r.jsx)(a.Fm7,{})}),(0,r.jsxs)("div",{className:"mobile-nav ".concat(t?"show":""),children:[(0,r.jsx)("button",{type:"button",className:"close-nav",onClick:function(){return n((function(e){return!e}))},children:(0,r.jsx)(a.G5m,{})}),(0,r.jsxs)("nav",{className:"sidebar-nav",children:[(0,r.jsx)("ul",{className:"metismenu",id:"mobile-menu",children:g.map((function(e,n){return(0,r.jsx)(p,{isOpenMenu:t,items:e},n)}))}),(0,r.jsx)(h(),{href:"/contact",children:(0,r.jsx)("a",{className:"theme-btn d-block mt-4 text-center ms-0",children:"get started"})})]})]})]}),(0,r.jsx)("div",{className:"overlay ".concat(t?"active":""),onClick:function(){return n((function(e){return!e}))}})]})]})})})}function b(e){var t=e.children,n=(0,i.useRouter)();return(0,r.jsxs)(r.Fragment,{children:["/index-three"===n.pathname?(0,r.jsx)(y,{}):(0,r.jsx)(w,{}),(0,r.jsx)("main",{children:t}),"/index-two"===n.pathname?(0,r.jsx)(f,{}):(0,r.jsx)(u,{}),(0,r.jsx)(o,{})]})}n(2754),n(2449),n(2106),n(8153);function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){N(e,t,n[t])}))}return e}var C=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{children:(0,r.jsx)("link",{rel:"icon",href:"/img/favicon.png"})}),(0,r.jsx)(b,{children:(0,r.jsx)(t,O({},n))})]})}},3955:function(){},7164:function(){},1548:function(){},2754:function(){},2449:function(){},2106:function(){},8153:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},9583:function(e,t,n){"use strict";n.d(t,{$Pg:function(){return d},BUd:function(){return i},Fm7:function(){return f},G5m:function(){return v},H_v:function(){return o},Nh4:function(){return m},OZd:function(){return j},SRX:function(){return x},Z1Y:function(){return u},Zf_:function(){return l},fWC:function(){return s},iUH:function(){return a},tBk:function(){return c},x_l:function(){return h}});var r=n(8357);function c(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function l(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function i(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function s(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function a(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"}}]})(e)}function d(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"}}]})(e)}function h(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function u(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function f(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function x(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function j(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M260.8 291.06c-28.63-22.94-62-35.06-96.4-35.06C87 256 21.47 318.72 1.43 412.06c-3.55 16.6-.43 33.83 8.57 47.3C18.75 472.47 31.83 480 45.88 480H592c-103.21 0-155-37.07-233.19-104.46zm234.65-18.29L468.4 116.2A64 64 0 0 0 392 64.41L200.85 105a64 64 0 0 0-50.35 55.79L143.61 226c6.9-.83 13.7-2 20.79-2 41.79 0 82 14.55 117.29 42.82l98 84.48C450.76 412.54 494.9 448 592 448a48 48 0 0 0 48-48c0-25.39-29.6-119.33-144.55-127.23z"}}]})(e)}function m(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function v(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"}}]})(e)}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return o}});var r=n(7294),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(c),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},i.apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};function a(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),a(e.child))}))}function o(e){return function(t){return r.createElement(d,i({attr:i({},e.attr)},t),a(e.child))}}function d(e){var t=function(t){var n,c=e.attr,l=e.size,a=e.title,o=s(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,o,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(c)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(880)}));var n=e.O();_N_E=n}]);