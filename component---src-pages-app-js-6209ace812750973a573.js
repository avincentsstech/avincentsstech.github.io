webpackJsonp([0xd0496e843e03],{237:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),f=r(u),i=n(9),s=r(i),c=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return f.default.createElement("nav",{id:"leftnav"},f.default.createElement("ul",null,f.default.createElement("li",null,f.default.createElement(s.default,{to:"/"},"Admin Home")),f.default.createElement("li",null,f.default.createElement(s.default,{to:"/services/"},"Job Postings")),f.default.createElement("li",null,f.default.createElement(s.default,{to:"/solutions/"},"Job Applicants")),f.default.createElement("li",null,f.default.createElement(s.default,{to:"/company/"},"Dropdowns")),f.default.createElement("li",null,f.default.createElement(s.default,{to:"/careers/"},"Users"))))},t}(f.default.Component);t.default=c,e.exports=t.default},238:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(26),u=r(o),f=n(24),i=function(){var e=(0,f.getCurrentUser)(),t=e.name,n=e.legalName,r=e.email;return l.default.createElement(u.default,{title:"Your Details"},l.default.createElement("ul",null,l.default.createElement("li",null,"Preferred name: ",t),l.default.createElement("li",null,"Legal name: ",n),l.default.createElement("li",null,"Email address: ",r)))};t.default=i,e.exports=t.default},116:function(e,t){e.exports={form:"src-components-Form----form-module---form---1YTah",form__label:"src-components-Form----form-module---form__label---3u7mu",form__input:"src-components-Form----form-module---form__input---x1O8u",form__button:"src-components-Form----form-module---form__button---VpL0T"}},88:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(17),u=n(116),f=r(u);t.default=(0,o.withRouter)(function(e){var t=e.handleSubmit,n=e.handleUpdate,r=e.history;return l.default.createElement("form",{className:f.default.form,method:"post",onSubmit:function(e){t(e),r.push("/app/profile")}},l.default.createElement("p",{className:f.default.form__instructions},"For this demo, please log in with the username ",l.default.createElement("code",null,"gatsby")," and the password ",l.default.createElement("code",null,"demo"),"."),l.default.createElement("label",{className:f.default.form__label},"Username",l.default.createElement("input",{className:f.default.form__input,type:"text",name:"username",onChange:n})),l.default.createElement("label",{className:f.default.form__label},"Password",l.default.createElement("input",{className:f.default.form__input,type:"password",name:"password",onChange:n})),l.default.createElement("input",{className:f.default.form__button,type:"submit",value:"Log In"}))}),e.exports=t.default},241:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(26),u=r(o),f=n(24),i=n(237),s=r(i),c=function(){var e=(0,f.getCurrentUser)(),t=e.name;return l.default.createElement(u.default,{title:"Your Profile"},l.default.createElement(s.default,null),l.default.createElement("p",null,"Welcome back, ",t,"!"))};t.default=c,e.exports=t.default},89:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),f=r(u),i=n(17),s=n(88),c=r(s),d=n(26),m=r(d),p=n(24),_=function(e){function t(){var n,r,o;a(this,t);for(var u=arguments.length,f=Array(u),i=0;i<u;i++)f[i]=arguments[i];return n=r=l(this,e.call.apply(e,[this].concat(f))),r.state={username:"",password:""},o=n,l(r,o)}return o(t,e),t.prototype.handleUpdate=function(e){var t;this.setState((t={},t[e.target.name]=e.target.value,t))},t.prototype.handleSubmit=function(e){e.preventDefault(),(0,p.handleLogin)(this.state)},t.prototype.render=function(){var e=this;return(0,p.isLoggedIn)()?f.default.createElement(i.Redirect,{to:{pathname:"/app/profile"}}):f.default.createElement(m.default,{title:"Log In"},f.default.createElement(c.default,{handleUpdate:function(t){return e.handleUpdate(t)},handleSubmit:function(t){return e.handleSubmit(t)}}))},t}(f.default.Component);t.default=_,e.exports=t.default},242:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),u=r(o),f=n(7),i=r(f),s=n(17),c=n(24),d=function(e){var t=e.component,n=a(e,["component"]);return u.default.createElement(s.Route,l({},n,{render:function(e){return(0,c.isLoggedIn)()?u.default.createElement(t,e):u.default.createElement(s.Redirect,{to:{pathname:"/app/login"}})}}))};d.propTypes={component:i.default.any.isRequired},t.default=d,e.exports=t.default},26:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(7),u=r(o),f=n(57),i=r(f),s=function(e){var t=e.title,n=e.children;return l.default.createElement("section",null,l.default.createElement("h1",{className:i.default.view__heading},t),n)};s.propTypes={title:u.default.string.isRequired},t.default=s,e.exports=t.default},57:function(e,t){e.exports={view:"src-components-View----view-module---view---3wzVy"}},248:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),l=r(a),o=n(17),u=n(238),f=r(u),i=n(241),s=r(i),c=n(89),d=r(c),m=n(242),p=r(m),_=function(){return l.default.createElement("div",null,l.default.createElement(p.default,{path:"/app/profile",component:s.default}),l.default.createElement(p.default,{path:"/app/details",component:f.default}),l.default.createElement(o.Route,{path:"/app/login",component:d.default}))};t.default=_,e.exports=t.default},24:function(e,t){"use strict";t.__esModule=!0;var n="undefined"!=typeof window,r=function(){return window.localStorage.gatsbyUser?JSON.parse(window.localStorage.gatsbyUser):{}},a=function(e){return window.localStorage.gatsbyUser=JSON.stringify(e)};t.handleLogin=function(e){var t=e.username,r=e.password;return!!n&&("gatsby"===t&&"demo"===r&&(console.log("Credentials match! Setting the active user."),a({name:"Jim",legalName:"James K. User",email:"jim@example.org"})))},t.isLoggedIn=function(){if(!n)return!1;var e=r();return!!e.email},t.getCurrentUser=function(){return n&&r()},t.logout=function(e){n&&(console.log("Ensuring the `gatsbyUser` property exists."),a({}),e())}}});
//# sourceMappingURL=component---src-pages-app-js-6209ace812750973a573.js.map