Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("game")}function g(a,b){b.buffer.push("leaderboard")}function h(a,b){b.buffer.push("battle")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this,p=c.helperMissing,q=this.escapeExpression;return e.buffer.push('<div>\n    <nav class="top-bar fixed" role="navigation">\n        <ul class="title-area">\n            <!-- Title Area -->\n            <li class="name">\n                <h1>\n                    <a href="#">citycrusher</a>\n                </h1>\n            </li>\n            <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->\n            <li class="toggle-topbar menu-icon">\n                <a href="#">\n                    <span>Menu</span>\n                </a>\n            </li>\n        </ul>\n\n        <section class="top-bar-section">\n            <ul class=\'right\'>\n                <li>'),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c.linkTo||b.linkTo,j=i?i.call(b,"game",m):p.call(b,"linkTo","game",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</li>\n                <li>"),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c.linkTo||b.linkTo,j=i?i.call(b,"leaderboard",m):p.call(b,"linkTo","leaderboard",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</li>\n                <li>"),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c.linkTo||b.linkTo,j=i?i.call(b,"battle",m):p.call(b,"linkTo","battle",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('</li>\n            </ul>\n            \n\n        </section>\n    </nav>\n    <div class="container" id="main">\n        <div class="row">\n            <div>\n                <div class="col-md-9">\n                    '),k={},l={},e.buffer.push(q(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"),n}),Ember.TEMPLATES.battle=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="";return f}),Ember.TEMPLATES.game=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div id="moRotation">Status : </div>\n    <div id="moInterval"></div>\n<div id="map" class="map">\n    <div id="LocateButton"></div>\n</div>')}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n    <a "),d={},e={},b.buffer.push(l(c.action.call(a,"logout",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(">uitloggen</a>\n"),f}function g(a,b){var d,e,f,g,h="";return b.buffer.push('\n    <div class="row">\n        <div class="large-6 small-6 columns">\n            <h2>inloggen</h2>\n        </div>\n    </div>\n    <div class="row">\n        <div class="large-6 small-6 columns">\n            <a class="button medium"'),e={},f={},b.buffer.push(l(c.action.call(a,"login",{hash:{},contexts:[a],types:["STRING"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push('>inloggen</a>\n        </div>\n    </div>\n    <div class="row">\n        <div class="large-6 small-6 columns">\n            <h2>registreren</h2>\n        </div>\n    </div>\n    <div class="row">\n        <div class="large-6 small-6 columns">\n            <label>naam: </label>\n            '),f={valueBinding:a},e={valueBinding:"STRING"},g={hash:{valueBinding:"name"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(l((d=c.input||a.input,d?d.call(a,g):m.call(a,"input",g)))),b.buffer.push('\n        </div>\n    </div>\n    <div class="row">\n        <div class="large-6 small-6 columns">\n            <label>email: </label>\n            '),f={valueBinding:a},e={valueBinding:"STRING"},g={hash:{valueBinding:"email"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(l((d=c.input||a.input,d?d.call(a,g):m.call(a,"input",g)))),b.buffer.push('\n        </div>\n    </div>\n    <div class="row">\n        <div class="large-6 small-6 columns">\n            <a class="button medium" '),e={},f={},b.buffer.push(l(c.action.call(a,"register",{hash:{},contexts:[a],types:["STRING"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(">register</a>\n        </div>\n    </div>\n    \n    \n    \n"),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=c.helperMissing,n=this;return e.buffer.push('<div class="well">\n  SPLASH!\n</div>\n'),i={},j={},h=c["if"].call(b,"user.email",{hash:{},inverse:n.program(3,g,e),fn:n.program(1,f,e),contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),k}),Ember.TEMPLATES.leaderboard=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n  <tr>\n    <td>\n      <strong>"),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"key",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(":</strong>\n    </td>\n    <td>\n      "),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"value",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n    </td>\n  </tr>\n  "),f}function g(a,b){b.buffer.push("Change")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push("<h1>leaderboard</h1>\n\n<table>\n  "),j={},k={},h=c.each.call(b,"model.attributes",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</table>\n\n"),j={},k={},l={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c.linkTo||b.linkTo,i=h?h.call(b,"user.edit","model",l):p.call(b,"linkTo","user.edit","model",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n\n"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("\n"),m}),Ember.TEMPLATES.objectives=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n <li>"),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c.linkTo||a.linkTo,e=d?d.call(a,"objectives","",i):n.call(a,"linkTo","objectives","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n  "),j}function g(a,b){var d,e;d={},e={},b.buffer.push(l(c._triageMustache.call(a,"id",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b})))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push("<h1>objectives</h1>\n\n<ul>\n "),i={},j={},h=c.each.call(b,"model",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</ul>\n\n"),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("\n"),k});