Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div>\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Your App</a>\n        </div>\n        <div class="collapse navbar-collapse navbar-ex1-collapse">\n        </div>\n    </nav>\n    <div class="container" id="main">\n        <div class="row">\n            <div>\n                <div class="col-md-9">\n                    '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"),h}),Ember.TEMPLATES.battle=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="";return f}),Ember.TEMPLATES.game=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div id="moRotation">Status : </div>\n    <div id="moInterval"></div>\n<div id="map" class="map">\n    <div id="LocateButton"></div>\n</div>')}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well">\n  SPLASH!\n</div>\n<div class="well">\n    <a id="signin">inloggen</a>\n    <a id="signout">uitloggen</a>\n  <script>\n      var signinLink = document.getElementById(\'signin\');\n        if (signinLink) {\n          signinLink.onclick = function() { navigator.id.request(); };\n        }\n        \n        var signoutLink = document.getElementById(\'signout\');\n        if (signoutLink) {\n          signoutLink.onclick = function() { navigator.id.logout(); };\n        }\n    </script>\n    \n</div>')}),Ember.TEMPLATES.leaderboard=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n  <tr>\n    <td>\n      <strong>"),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"key",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(":</strong>\n    </td>\n    <td>\n      "),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"value",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n    </td>\n  </tr>\n  "),f}function g(a,b){b.buffer.push("Change")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push("<h1>leaderboard</h1>\n\n<table>\n  "),j={},k={},h=c.each.call(b,"model.attributes",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</table>\n\n"),j={},k={},l={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c.linkTo||b.linkTo,i=h?h.call(b,"user.edit","model",l):p.call(b,"linkTo","user.edit","model",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n\n"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("\n"),m}),Ember.TEMPLATES.objectives=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n <li>"),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c.linkTo||a.linkTo,e=d?d.call(a,"objectives","",i):n.call(a,"linkTo","objectives","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n  "),j}function g(a,b){var d,e;d={},e={},b.buffer.push(l(c._triageMustache.call(a,"id",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b})))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push("<h1>objectives</h1>\n\n<ul>\n "),i={},j={},h=c.each.call(b,"model",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</ul>\n\n"),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("\n"),k});