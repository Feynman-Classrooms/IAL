module.exports=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)}([function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});const d=c(1),e=process.argv[2];d.responseForPrompt(e).then((a)=>{a&&(process.stdout.write(a),process.stdout.end())})},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});const d=c(2),e=c(3);b.responseForPrompt=async function(a){const b=process.env.DESKTOP_USERNAME;if(!b||!b.length)return null;if(a.startsWith('Username'))return b;if(a.startsWith('Password')){const a=process.env.DESKTOP_ENDPOINT;if(!a||!a.length)return null;const c=d.getKeyForEndpoint(a);return await e.TokenStore.getItem(c,b)}return null}},function(a,b){'use strict';function c(a){const b='GitHub';return`${b} - ${a}`}Object.defineProperty(b,'__esModule',{value:!0}),b.getKeyForAccount=function(a){return c(a.endpoint)},b.getKeyForEndpoint=c},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});const d=c(4);b.TokenStore={setItem:function(a,b,c){return d.setPassword(a,b,c)},getItem:function(a,b){return d.getPassword(a,b)},deleteItem:function(a,b){return d.deletePassword(a,b)}}},function(a,b,c){function d(a,b){if(!a||0>=a.length)throw new Error(b+' is required.')}function e(a){if('function'==typeof a)return new Promise(function(b,c){a((a,d)=>{a?c(a):b(d)})});throw new Error('Callback required')}var f=c(5);a.exports={getPassword:function(a,b){return d(a,'Service'),d(b,'Account'),e((c)=>f.getPassword(a,b,c))},setPassword:function(a,b,c){return d(a,'Service'),d(b,'Account'),d(c,'Password'),e((d)=>f.setPassword(a,b,c,d))},deletePassword:function(a,b){return d(a,'Service'),d(b,'Account'),e((c)=>f.deletePassword(a,b,c))},findPassword:function(a){return d(a,'Service'),e((b)=>f.findPassword(a,b))}}},function(a){a.exports=require('./keytar.node')}]);
//# sourceMappingURL=ask-pass.js.map