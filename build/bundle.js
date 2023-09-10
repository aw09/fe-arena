var app=function(){"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function i(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(i)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}function c(e,t,n){e.$$.on_destroy.push(l(t,n))}function h(e,t,n,i){if(e){const s=u(e,t,n,i);return e[0](s)}}function u(e,t,i,s){return e[1]&&s?n(i.ctx.slice(),e[1](s(t))):i.ctx}function d(e,t,n,i){if(e[2]&&i){const s=e[2](i(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|s[i];return e}return t.dirty|s}return t.dirty}function p(e,t,n,i,s,r){if(s){const o=u(t,n,i,r);e.p(o,s)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function _(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}const g="undefined"!=typeof window;let m=g?()=>window.performance.now():()=>Date.now(),y=g?e=>requestAnimationFrame(e):e;const v=new Set;function C(e){v.forEach((t=>{t.c(e)||(v.delete(t),t.f())})),0!==v.size&&y(C)}function w(e){let t;return 0===v.size&&y(C),{promise:new Promise((n=>{v.add(t={c:e,f:n})})),abort(){v.delete(t)}}}function b(e,t){e.appendChild(t)}function I(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function E(e){const t=N("style");return function(e,t){b(e.head||e,t),t.sheet}(I(e),t),t.sheet}function k(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function S(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function N(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function P(){return x(" ")}function R(){return x("")}function D(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function O(e,t){t=""+t,e.data!==t&&(e.data=t)}function L(e,t){e.value=null==t?"":t}function M(e,t,n){e.classList[n?"add":"remove"](t)}function F(e,t){return new e(t)}const $=new Map;let q,U=0;function W(e,t,n,i,s,r,o,a=0){const l=16.666/i;let c="{\n";for(let e=0;e<=1;e+=l){const i=t+(n-t)*r(e);c+=100*e+`%{${o(i,1-i)}}\n`}const h=c+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(h)}_${a}`,d=I(e),{stylesheet:p,rules:f}=$.get(d)||function(e,t){const n={stylesheet:E(t),rules:{}};return $.set(e,n),n}(d,e);f[u]||(f[u]=!0,p.insertRule(`@keyframes ${u} ${h}`,p.cssRules.length));const _=e.style.animation||"";return e.style.animation=`${_?`${_}, `:""}${u} ${i}ms linear ${s}ms 1 both`,U+=1,u}function j(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),s=n.length-i.length;s&&(e.style.animation=i.join(", "),U-=s,U||y((()=>{U||($.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&T(t)})),$.clear())})))}function B(e){q=e}function H(){if(!q)throw new Error("Function called outside component initialization");return q}function z(e){H().$$.on_mount.push(e)}function V(e,t){return H().$$.context.set(e,t),t}function Y(e){return H().$$.context.get(e)}const K=[],G=[];let Q=[];const J=[],X=Promise.resolve();let Z=!1;function ee(){Z||(Z=!0,X.then(re))}function te(e){Q.push(e)}const ne=new Set;let ie,se=0;function re(){if(0!==se)return;const e=q;do{try{for(;se<K.length;){const e=K[se];se++,B(e),oe(e.$$)}}catch(e){throw K.length=0,se=0,e}for(B(null),K.length=0,se=0;G.length;)G.pop()();for(let e=0;e<Q.length;e+=1){const t=Q[e];ne.has(t)||(ne.add(t),t())}Q.length=0}while(K.length);for(;J.length;)J.pop()();Z=!1,ne.clear(),B(e)}function oe(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function ae(){return ie||(ie=Promise.resolve(),ie.then((()=>{ie=null}))),ie}function le(e,t,n){e.dispatchEvent(function(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,i,t),s}(`${t?"intro":"outro"}${n}`))}const ce=new Set;let he;function ue(){he={r:0,c:[],p:he}}function de(){he.r||r(he.c),he=he.p}function pe(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function fe(e,t,n,i){if(e&&e.o){if(ce.has(e))return;ce.add(e),he.c.push((()=>{ce.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const _e={duration:0};function ge(e,t){const n=t.token={};function i(e,i,s,r){if(t.token!==n)return;t.resolved=r;let o=t.ctx;void 0!==s&&(o=o.slice(),o[s]=r);const a=e&&(t.current=e)(o);let l=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==i&&e&&(ue(),fe(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),de())})):t.block.d(1),a.c(),pe(a,1),a.m(t.mount(),t.anchor),l=!0),t.block=a,t.blocks&&(t.blocks[i]=a),l&&re()}if(!(s=e)||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof s.then){if(t.current!==t.then)return i(t.then,1,t.value,e),!0;t.resolved=e}else{const n=H();if(e.then((e=>{B(n),i(t.then,1,t.value,e),B(null)}),(e=>{if(B(n),i(t.catch,2,t.error,e),B(null),!t.hasCatch)throw e})),t.current!==t.pending)return i(t.pending,0),!0}var s}function me(e){return"object"==typeof e&&null!==e?e:{}}function ye(e){e&&e.c()}function ve(e,t,n,s){const{fragment:a,after_update:l}=e.$$;a&&a.m(t,n),s||te((()=>{const t=e.$$.on_mount.map(i).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),l.forEach(te)}function Ce(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];Q.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),Q=t}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(t,n,i,o,a,l,c,h=[-1]){const u=q;B(t);const d=t.$$={fragment:null,ctx:[],props:l,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:s(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};c&&c(d.root);let p=!1;if(d.ctx=i?i(t,n.props||{},((e,n,...i)=>{const s=i.length?i[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(K.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(T)}else d.fragment&&d.fragment.c();n.intro&&pe(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),re()}B(u)}class be{$destroy(){Ce(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const e=i.indexOf(n);-1!==e&&i.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ie={},Ee={},ke={},Te=/^:(.+)/,Se=e=>e.replace(/(^\/+|\/+$)/g,"").split("/"),Ne=e=>e.replace(/(^\/+|\/+$)/g,""),xe=(e,t)=>({route:e,score:e.default?0:Se(e.path).reduce(((e,t)=>(e+=4,""===t?e+=1:Te.test(t)?e+=2:"*"===t[0]?e-=5:e+=3,e)),0),index:t}),Pe=(e,t)=>{let n,i;const[s]=t.split("?"),r=Se(s),o=""===r[0],a=(e=>e.map(xe).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)))(e);for(let e=0,s=a.length;e<s;e++){const s=a[e].route;let l=!1;if(s.default){i={route:s,params:{},uri:t};continue}const c=Se(s.path),h={},u=Math.max(r.length,c.length);let d=0;for(;d<u;d++){const e=c[d],t=r[d];if(e&&"*"===e[0]){h["*"===e?"*":e.slice(1)]=r.slice(d).map(decodeURIComponent).join("/");break}if(void 0===t){l=!0;break}const n=Te.exec(e);if(n&&!o){const e=decodeURIComponent(t);h[n[1]]=e}else if(e!==t){l=!0;break}}if(!l){n={route:s,params:h,uri:"/"+r.slice(0,d).join("/")};break}}return n||i||null},Re=(e,t)=>`${Ne("/"===t?e:`${Ne(e)}/${Ne(t)}`)}/`,De=()=>"undefined"!=typeof window&&"document"in window&&"location"in window,Ae=e=>({params:4&e}),Oe=e=>({params:e[2]});function Le(e){let t,n,i,s;const r=[Fe,Me],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=r[t](e),{c(){n.c(),i=R()},m(e,n){o[t].m(e,n),k(e,i,n),s=!0},p(e,s){let l=t;t=a(e),t===l?o[t].p(e,s):(ue(),fe(o[l],1,1,(()=>{o[l]=null})),de(),n=o[t],n?n.p(e,s):(n=o[t]=r[t](e),n.c()),pe(n,1),n.m(i.parentNode,i))},i(e){s||(pe(n),s=!0)},o(e){fe(n),s=!1},d(e){o[t].d(e),e&&T(i)}}}function Me(e){let t;const n=e[8].default,i=h(n,e,e[7],Oe);return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,s){i&&i.p&&(!t||132&s)&&p(i,n,e,e[7],t?d(n,e[7],s,Ae):f(e[7]),Oe)},i(e){t||(pe(i,e),t=!0)},o(e){fe(i,e),t=!1},d(e){i&&i.d(e)}}}function Fe(e){let t,n,i,s={ctx:e,current:null,token:null,hasCatch:!1,pending:Ue,then:qe,catch:$e,value:12,blocks:[,,,]};return ge(n=e[0],s),{c(){t=R(),s.block.c()},m(e,n){k(e,t,n),s.block.m(e,s.anchor=n),s.mount=()=>t.parentNode,s.anchor=t,i=!0},p(t,i){e=t,s.ctx=e,1&i&&n!==(n=e[0])&&ge(n,s)||function(e,t,n){const i=t.slice(),{resolved:s}=e;e.current===e.then&&(i[e.value]=s),e.current===e.catch&&(i[e.error]=s),e.block.p(i,n)}(s,e,i)},i(e){i||(pe(s.block),i=!0)},o(e){for(let e=0;e<3;e+=1){fe(s.blocks[e])}i=!1},d(e){e&&T(t),s.block.d(e),s.token=null,s=null}}}function $e(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function qe(e){let t,i,s;const r=[e[2],e[3]];var o=e[12]?.default||e[12];function a(e){let t={};for(let e=0;e<r.length;e+=1)t=n(t,r[e]);return{props:t}}return o&&(t=F(o,a())),{c(){t&&ye(t.$$.fragment),i=R()},m(e,n){t&&ve(t,e,n),k(e,i,n),s=!0},p(e,n){const s=12&n?function(e,t){const n={},i={},s={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const e in o)e in a||(i[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[r]=a}else for(const e in o)s[e]=1}for(const e in i)e in n||(n[e]=void 0);return n}(r,[4&n&&me(e[2]),8&n&&me(e[3])]):{};if(1&n&&o!==(o=e[12]?.default||e[12])){if(t){ue();const e=t;fe(e.$$.fragment,1,0,(()=>{Ce(e,1)})),de()}o?(t=F(o,a()),ye(t.$$.fragment),pe(t.$$.fragment,1),ve(t,i.parentNode,i)):t=null}else o&&t.$set(s)},i(e){s||(t&&pe(t.$$.fragment,e),s=!0)},o(e){t&&fe(t.$$.fragment,e),s=!1},d(e){e&&T(i),t&&Ce(t,e)}}}function Ue(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function We(e){let t,n,i=e[1]&&e[1].route===e[5]&&Le(e);return{c(){i&&i.c(),t=R()},m(e,s){i&&i.m(e,s),k(e,t,s),n=!0},p(e,[n]){e[1]&&e[1].route===e[5]?i?(i.p(e,n),2&n&&pe(i,1)):(i=Le(e),i.c(),pe(i,1),i.m(t.parentNode,t)):i&&(ue(),fe(i,1,1,(()=>{i=null})),de())},i(e){n||(pe(i),n=!0)},o(e){fe(i),n=!1},d(e){i&&i.d(e),e&&T(t)}}}function je(e,t,i){let s,{$$slots:r={},$$scope:o}=t,{path:a=""}=t,{component:l=null}=t,h={},u={};const{registerRoute:d,unregisterRoute:p,activeRoute:f}=Y(Ee);c(e,f,(e=>i(1,s=e)));const g={path:a,default:""===a};var m;return d(g),m=()=>{p(g)},H().$$.on_destroy.push(m),e.$$set=e=>{i(11,t=n(n({},t),_(e))),"path"in e&&i(6,a=e.path),"component"in e&&i(0,l=e.component),"$$scope"in e&&i(7,o=e.$$scope)},e.$$.update=()=>{if(s&&s.route===g){i(2,h=s.params);const{component:e,path:n,...r}=t;i(3,u=r),e&&(e.toString().startsWith("class ")?i(0,l=e):i(0,l=e())),De()&&!s.preserveScroll&&window?.scrollTo(0,0)}},t=_(t),[l,s,h,u,f,g,a,o,r]}class Be extends be{constructor(e){super(),we(this,e,je,We,a,{path:6,component:0})}}const He=[];function ze(t,n=e){let i;const s=new Set;function r(e){if(a(t,e)&&(t=e,i)){const e=!He.length;for(const e of s)e[1](),He.push(e,t);if(e){for(let e=0;e<He.length;e+=2)He[e][0](He[e+1]);He.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(o,a=e){const l=[o,a];return s.add(l),1===s.size&&(i=n(r)||e),o(t),()=>{s.delete(l),0===s.size&&i&&(i(),i=null)}}}}function Ve(t,n,i){const s=!Array.isArray(t),a=s?[t]:t,c=n.length<2;return h=t=>{let i=!1;const h=[];let u=0,d=e;const p=()=>{if(u)return;d();const i=n(s?h[0]:h,t);c?t(i):d=o(i)?i:e},f=a.map(((e,t)=>l(e,(e=>{h[t]=e,u&=~(1<<t),i&&p()}),(()=>{u|=1<<t}))));return i=!0,p(),function(){r(f),d(),i=!1}},{subscribe:ze(i,h).subscribe};var h}const Ye=e=>({...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}),Ke=(e=>{const t=[];let n=Ye(e);return{get location(){return n},listen(i){t.push(i);const s=()=>{n=Ye(e),i({location:n,action:"POP"})};return e.addEventListener("popstate",s),()=>{e.removeEventListener("popstate",s);const n=t.indexOf(i);t.splice(n,1)}},navigate(i,{state:s,replace:r=!1,preserveScroll:o=!1}={}){s={...s,key:Date.now()+""};try{r?e.history.replaceState(s,"",i):e.history.pushState(s,"",i)}catch(t){e.location[r?"replace":"assign"](i)}n=Ye(e),t.forEach((e=>e({location:n,action:"PUSH",preserveScroll:o}))),document.activeElement.blur()}}})(De()?window:((e="/")=>{let t=0;const n=[{pathname:e,search:""}],i=[];return{get location(){return n[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return n},get index(){return t},get state(){return i[t]},pushState(e,s,r){const[o,a=""]=r.split("?");t++,n.push({pathname:o,search:a}),i.push(e)},replaceState(e,s,r){const[o,a=""]=r.split("?");n[t]={pathname:o,search:a},i[t]=e}}}})()),Ge=e=>({route:4&e,location:2&e}),Qe=e=>({route:e[2]&&e[2].uri,location:e[1]}),Je=e=>({route:4&e,location:2&e}),Xe=e=>({route:e[2]&&e[2].uri,location:e[1]});function Ze(e){let t;const n=e[15].default,i=h(n,e,e[14],Qe);return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,s){i&&i.p&&(!t||16390&s)&&p(i,n,e,e[14],t?d(n,e[14],s,Ge):f(e[14]),Qe)},i(e){t||(pe(i,e),t=!0)},o(e){fe(i,e),t=!1},d(e){i&&i.d(e)}}}function et(t){let n,i,s=t[1].pathname,r=tt(t);return{c(){r.c(),n=R()},m(e,t){r.m(e,t),k(e,n,t),i=!0},p(t,i){2&i&&a(s,s=t[1].pathname)?(ue(),fe(r,1,1,e),de(),r=tt(t),r.c(),pe(r,1),r.m(n.parentNode,n)):r.p(t,i)},i(e){i||(pe(r),i=!0)},o(e){fe(r),i=!1},d(e){e&&T(n),r.d(e)}}}function tt(n){let i,s,a,l;const c=n[15].default,u=h(c,n,n[14],Xe);return{c(){i=N("div"),u&&u.c()},m(e,t){k(e,i,t),u&&u.m(i,null),l=!0},p(e,t){u&&u.p&&(!l||16390&t)&&p(u,c,e,e[14],l?d(c,e[14],t,Je):f(e[14]),Xe)},i(r){l||(pe(u,r),te((()=>{l&&(a&&a.end(1),s=function(n,i,s){const r={direction:"in"};let a,l,c=i(n,s,r),h=!1,u=0;function d(){a&&j(n,a)}function p(){const{delay:i=0,duration:s=300,easing:r=t,tick:o=e,css:p}=c||_e;p&&(a=W(n,0,1,s,i,r,p,u++)),o(0,1);const f=m()+i,_=f+s;l&&l.abort(),h=!0,te((()=>le(n,!0,"start"))),l=w((e=>{if(h){if(e>=_)return o(1,0),le(n,!0,"end"),d(),h=!1;if(e>=f){const t=r((e-f)/s);o(t,1-t)}}return h}))}let f=!1;return{start(){f||(f=!0,j(n),o(c)?(c=c(r),ae().then(p)):p())},invalidate(){f=!1},end(){h&&(d(),h=!1)}}}(i,n[3],{}),s.start())})),l=!0)},o(c){fe(u,c),s&&s.invalidate(),a=function(n,i,s){const a={direction:"out"};let l,c=i(n,s,a),h=!0;const u=he;function d(){const{delay:i=0,duration:s=300,easing:o=t,tick:a=e,css:d}=c||_e;d&&(l=W(n,1,0,s,i,o,d));const p=m()+i,f=p+s;te((()=>le(n,!1,"start"))),w((e=>{if(h){if(e>=f)return a(0,1),le(n,!1,"end"),--u.r||r(u.c),!1;if(e>=p){const t=o((e-p)/s);a(1-t,t)}}return h}))}return u.r+=1,o(c)?ae().then((()=>{c=c(a),d()})):d(),{end(e){e&&c.tick&&c.tick(1,0),h&&(l&&j(n,l),h=!1)}}}(i,n[3],{}),l=!1},d(e){e&&T(i),u&&u.d(e),e&&a&&a.end()}}}function nt(e){let t,n,i,s;const r=[et,Ze],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=r[t](e),{c(){n.c(),i=R()},m(e,n){o[t].m(e,n),k(e,i,n),s=!0},p(e,[s]){let l=t;t=a(e),t===l?o[t].p(e,s):(ue(),fe(o[l],1,1,(()=>{o[l]=null})),de(),n=o[t],n?n.p(e,s):(n=o[t]=r[t](e),n.c()),pe(n,1),n.m(i.parentNode,i))},i(e){s||(pe(n),s=!0)},o(e){fe(n),s=!1},d(e){o[t].d(e),e&&T(i)}}}function it(e,t,n){let i,s,r,o,{$$slots:a={},$$scope:l}=t,{basepath:h="/"}=t,{url:u=null}=t,{viewtransition:d=null}=t,{history:p=Ke}=t;V(ke,p);const f=Y(Ie),_=Y(Ee),g=ze([]);c(e,g,(e=>n(12,s=e)));const m=ze(null);c(e,m,(e=>n(2,o=e)));let y=!1;const v=f||ze(u?{pathname:u}:p.location);c(e,v,(e=>n(1,i=e)));const C=_?_.routerBase:ze({path:h,uri:h});c(e,C,(e=>n(13,r=e)));const w=Ve([C,m],(([e,t])=>{if(!t)return e;const{path:n}=e,{route:i,uri:s}=t;return{path:i.default?n:i.path.replace(/\*.*$/,""),uri:s}}));let b=!1;return f||(z((()=>p.listen((e=>{n(11,b=e.preserveScroll||!1),v.set(e.location)})))),V(Ie,v)),V(Ee,{activeRoute:m,base:C,routerBase:w,registerRoute:e=>{const{path:t}=r;let{path:n}=e;if(e._path=n,e.path=Re(t,n),"undefined"==typeof window){if(y)return;const t=Pe([e],i.pathname);t&&(m.set(t),y=!0)}else g.update((t=>[...t,e]))},unregisterRoute:e=>{g.update((t=>t.filter((t=>t!==e))))}}),e.$$set=e=>{"basepath"in e&&n(8,h=e.basepath),"url"in e&&n(9,u=e.url),"viewtransition"in e&&n(0,d=e.viewtransition),"history"in e&&n(10,p=e.history),"$$scope"in e&&n(14,l=e.$$scope)},e.$$.update=()=>{if(8192&e.$$.dirty){const{path:e}=r;g.update((t=>t.map((t=>Object.assign(t,{path:Re(e,t._path)})))))}if(6146&e.$$.dirty){const e=Pe(s,i.pathname);m.set({...e,preserveScroll:b})}},[d,i,o,(e,t,n)=>{const i=d(n);return"function"==typeof i?.fn?i.fn(e,i):i},g,m,v,C,h,u,p,b,s,r,l,a]}class st extends be{constructor(e){super(),we(this,e,it,nt,a,{basepath:8,url:9,viewtransition:0,history:10})}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const rt=!1,ot="${JSCORE_VERSION}",at=function(e,t){if(!e)throw lt(t)},lt=function(e){return new Error("Firebase Database ("+ot+") INTERNAL ASSERT FAILED: "+e)},ct=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},ht={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ct(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new ut;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ut extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dt=function(e){const t=ct(e);return ht.encodeByteArray(t,!0)},pt=function(e){return dt(e).replace(/\./g,"")},ft=function(e){try{return ht.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function _t(e){return gt(void 0,e)}function gt(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=gt(e[n],t[n]));return e}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const mt=()=>
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,yt=()=>{try{return mt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ft(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},vt=e=>{const t=(e=>{var t,n;return null===(n=null===(t=yt())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Ct=()=>{var e;return null===(e=yt())||void 0===e?void 0:e.config};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class wt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function bt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function It(){return!0===rt}class Et extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(Tt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new Et(i,o,n)}}const Tt=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function St(e){return JSON.parse(e)}function Nt(e){return JSON.stringify(e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xt=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=St(ft(r[0])||""),n=St(ft(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Pt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Rt(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Dt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function At(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function Ot(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Lt(n)&&Lt(r)){if(!Ot(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Lt(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Mt{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function Ft(e,t){return`${e} failed: ${t} argument `}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $t=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function qt(e){return e&&e._delegate?e._delegate:e}class Ut{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Wt="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new wt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Wt?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Bt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ht;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ht||(Ht={}));const zt={debug:Ht.DEBUG,verbose:Ht.VERBOSE,info:Ht.INFO,warn:Ht.WARN,error:Ht.ERROR,silent:Ht.SILENT},Vt=Ht.INFO,Yt={[Ht.DEBUG]:"log",[Ht.VERBOSE]:"log",[Ht.INFO]:"info",[Ht.WARN]:"warn",[Ht.ERROR]:"error"},Kt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=Yt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class Gt{constructor(e){this.name=e,this._logLevel=Vt,this._logHandler=Kt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ht))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?zt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ht.DEBUG,...e),this._logHandler(this,Ht.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ht.VERBOSE,...e),this._logHandler(this,Ht.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ht.INFO,...e),this._logHandler(this,Ht.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ht.WARN,...e),this._logHandler(this,Ht.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ht.ERROR,...e),this._logHandler(this,Ht.ERROR,...e)}}const Qt=(e,t)=>t.some((t=>e instanceof t));let Jt,Xt;const Zt=new WeakMap,en=new WeakMap,tn=new WeakMap,nn=new WeakMap,sn=new WeakMap;let rn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return en.get(e);if("objectStoreNames"===t)return e.objectStoreNames||tn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function on(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Xt||(Xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(cn(this),t),ln(Zt.get(this))}:function(...t){return ln(e.apply(cn(this),t))}:function(t,...n){const i=e.call(cn(this),t,...n);return tn.set(i,t.sort?t.sort():[t]),ln(i)}}function an(e){return"function"==typeof e?on(e):(e instanceof IDBTransaction&&function(e){if(en.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));en.set(e,t)}(e),Qt(e,Jt||(Jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,rn):e)}function ln(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(ln(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Zt.set(t,e)})).catch((()=>{})),sn.set(t,e),t}(e);if(nn.has(e))return nn.get(e);const t=an(e);return t!==e&&(nn.set(e,t),sn.set(t,e)),t}const cn=e=>sn.get(e);const hn=["get","getKey","getAll","getAllKeys","count"],un=["put","add","delete","clear"],dn=new Map;function pn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(dn.get(t))return dn.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=un.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!hn.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return dn.set(t,r),r}rn=(e=>({...e,get:(t,n,i)=>pn(t,n)||e.get(t,n,i),has:(t,n)=>!!pn(t,n)||e.has(t,n)}))(rn);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class fn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const _n="@firebase/app",gn="0.9.18",mn=new Gt("@firebase/app"),yn="[DEFAULT]",vn={[_n]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Cn=new Map,wn=new Map;function bn(e,t){try{e.container.addComponent(t)}catch(n){mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function In(e){const t=e.name;if(wn.has(t))return mn.debug(`There were multiple attempts to register component ${t}.`),!1;wn.set(t,e);for(const t of Cn.values())bn(t,e);return!0}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const En=new kt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class kn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ut("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Tn(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:yn,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw En.create("bad-app-name",{appName:String(s)});if(n||(n=Ct()),!n)throw En.create("no-options");const r=Cn.get(s);if(r){if(Ot(n,r.options)&&Ot(i,r.config))return r;throw En.create("duplicate-app",{appName:s})}const o=new Bt(s);for(const e of wn.values())o.addComponent(e);const a=new kn(n,i,o);return Cn.set(s,a),a}function Sn(e,t,n){var i;let s=null!==(i=vn[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void mn.warn(e.join(" "))}In(new Ut(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Nn="firebase-heartbeat-database",xn=1,Pn="firebase-heartbeat-store";let Rn=null;function Dn(){return Rn||(Rn=function(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=ln(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(ln(o.result),e.oldVersion,e.newVersion,ln(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(Nn,xn,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Pn)}}).catch((e=>{throw En.create("idb-open",{originalErrorMessage:e.message})}))),Rn}async function An(e,t){try{const n=(await Dn()).transaction(Pn,"readwrite"),i=n.objectStore(Pn);await i.put(t,On(e)),await n.done}catch(e){if(e instanceof Et)mn.warn(e.message);else{const t=En.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});mn.warn(t.message)}}}function On(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ln{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Mn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Mn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),$n(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$n(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=pt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mn(){return(new Date).toISOString().substring(0,10)}class Fn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await Dn();return await t.transaction(Pn).objectStore(Pn).get(On(e))}catch(e){if(e instanceof Et)mn.warn(e.message);else{const t=En.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});mn.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return An(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return An(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function $n(e){return pt(JSON.stringify({version:2,heartbeats:e})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var qn;qn="",In(new Ut("platform-logger",(e=>new fn(e)),"PRIVATE")),In(new Ut("heartbeat",(e=>new Ln(e)),"PRIVATE")),Sn(_n,gn,qn),Sn(_n,gn,"esm2017"),Sn("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Sn("firebase","10.3.1","app");const Un="@firebase/database",Wn="1.0.1";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let jn="";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Nt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:St(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hn{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const zn=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Bn(t)}}catch(e){}return new Hn},Vn=zn("localStorage"),Yn=zn("sessionStorage"),Kn=new Gt("@firebase/database"),Gn=function(){let e=1;return function(){return e++}}(),Qn=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,at(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new Mt;n.update(t);const i=n.digest();return ht.encodeByteArray(i)},Jn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Jn.apply(null,i):t+="object"==typeof i?Nt(i):i,t+=" "}return t};let Xn=null,Zn=!0;const ei=function(...e){var t,n;if(!0===Zn&&(Zn=!1,null===Xn&&!0===Yn.get("logging_enabled")&&(t=!0,at(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Kn.logLevel=Ht.VERBOSE,Xn=Kn.log.bind(Kn),n&&Yn.set("logging_enabled",!0)):"function"==typeof t?Xn=t:(Xn=null,Yn.remove("logging_enabled")))),Xn){const t=Jn.apply(null,e);Xn(t)}},ti=function(e){return function(...t){ei(e,...t)}},ni=function(...e){const t="FIREBASE INTERNAL ERROR: "+Jn(...e);Kn.error(t)},ii=function(...e){const t=`FIREBASE FATAL ERROR: ${Jn(...e)}`;throw Kn.error(t),new Error(t)},si=function(...e){const t="FIREBASE WARNING: "+Jn(...e);Kn.warn(t)},ri=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},oi="[MIN_NAME]",ai="[MAX_NAME]",li=function(e,t){if(e===t)return 0;if(e===oi||t===ai)return-1;if(t===oi||e===ai)return 1;{const n=gi(e),i=gi(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},ci=function(e,t){return e===t?0:e<t?-1:1},hi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Nt(t))},ui=function(e){if("object"!=typeof e||null===e)return Nt(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Nt(t[i]),n+=":",n+=ui(e[t[i]]);return n+="}",n},di=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function pi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const fi=function(e){at(!ri(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const _i=new RegExp("^-?(0*)\\d{1,10}$"),gi=function(e){if(_i.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},mi=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw si("Exception was thrown by user callback.",t),e}),Math.floor(0))}},yi=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class vi{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){si(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ci{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(ei("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',si(e)}}class wi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wi.OWNER="owner";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const bi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ii="ac",Ei="websocket",ki="long_polling";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ti{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Si(e,t,n){let i;if(at("string"==typeof t,"typeof type must == string"),at("object"==typeof n,"typeof params must == object"),t===Ei)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ki)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return pi(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ni{constructor(){this.counters_={}}incrementCounter(e,t=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return _t(this.counters_)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xi={},Pi={};function Ri(e){const t=e.toString();return xi[t]||(xi[t]=new Ni),xi[t]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Di{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&mi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ai="start";class Oi{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Ri(t),this.urlFn=e=>(this.appCheckToken&&(e[Ii]=this.appCheckToken),Si(t,ki,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Di(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Li(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Ai)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Ai]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Ii]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&bi.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oi.forceAllow_=!0}static forceDisallow(){Oi.forceDisallow_=!0}static isAvailable(){return!!Oi.forceAllow_||!(Oi.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Nt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=dt(t),i=di(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Nt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Li{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Gn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Li.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){ei("frame writing exception"),e.stack&&ei(e.stack),ei(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||ei("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ei("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Mi=null;"undefined"!=typeof MozWebSocket?Mi=MozWebSocket:"undefined"!=typeof WebSocket&&(Mi=WebSocket);class Fi{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Ri(t),this.connURL=Fi.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&bi.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[Ii]=i),s&&(r.p=s),Si(e,Ei,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{let e;It(),this.mySock=new Mi(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Fi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Mi&&!Fi.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||!0===Vn.get("previous_websocket_failure")}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=St(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(at(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Nt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=di(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fi.responsesRequiredToBeHealthy=2,Fi.healthyTimeout=3e4;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class $i{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Oi,Fi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Fi&&Fi.isAvailable();let n=t&&!Fi.previouslyFailed();if(e.webSocketOnly&&(t||si("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Fi];else{const e=this.transports_=[];for(const t of $i.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);$i.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$i.globalTransportInitialized_=!1;class qi{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new $i(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=hi("t",e),n=hi("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=hi("t",e),n=hi("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=hi("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ni("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ni("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&si("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),yi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ui{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wi{constructor(e){this.allowedEvents_=e,this.listeners_={},at(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){at(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ji extends Wi{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||bt()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ji}getInitialEvent(e){return at("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Bi=32,Hi=768;class zi{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Vi(){return new zi("")}function Yi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ki(e){return e.pieces_.length-e.pieceNum_}function Gi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new zi(e.pieces_,t)}function Qi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ji(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Xi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new zi(t,0)}function Zi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof zi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new zi(n,0)}function es(e){return e.pieceNum_>=e.pieces_.length}function ts(e,t){const n=Yi(e),i=Yi(t);if(null===n)return t;if(n===i)return ts(Gi(e),Gi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ns(e,t){if(Ki(e)!==Ki(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function is(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Ki(e)>Ki(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ss{constructor(e,t){this.errorPrefix_=t,this.parts_=Ji(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=$t(this.parts_[e]);rs(this)}}function rs(e){if(e.byteLength_>Hi)throw new Error(e.errorPrefix_+"has a key path longer than "+Hi+" bytes ("+e.byteLength_+").");if(e.parts_.length>Bi)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bi+") or object contains a cycle "+os(e))}function os(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class as extends Wi{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new as}getInitialEvent(e){return at("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ls=1e3;class cs extends Ui{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=cs.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ls,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!It())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");as.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ji.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Nt(s)),at(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new wt,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),at(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),at(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;cs.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Pt(e,"w")){const n=Rt(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();si(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=xt(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=xt(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),at(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Nt(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ni("Unrecognized action received from server: "+Nt(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){at(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=ls),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cs.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){at(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?ei("getToken() completed but was canceled"):(ei("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new qi(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{si(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&si(e),a())}}}interrupt(e){ei("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ei("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dt(this.interruptReasons_)&&(this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>ui(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new zi(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){ei("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ei("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+jn.replace(/\./g,"-")]=1,bt()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ji.getInstance().currentlyOnline();return Dt(this.interruptReasons_)&&e}}cs.nextPersistentConnectionId_=0,cs.nextConnectionId_=0;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hs{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new hs(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class us{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new hs(oi,e),i=new hs(oi,t);return 0!==this.compare(n,i)}minPost(){return hs.MIN}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let ds;class ps extends us{static get __EMPTY_NODE(){return ds}static set __EMPTY_NODE(e){ds=e}compare(e,t){return li(e.name,t.name)}isDefinedOn(e){throw lt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return hs.MIN}maxPost(){return new hs(ai,ds)}makePost(e,t){return at("string"==typeof e,"KeyIndex indexValue must always be a string."),new hs(e,ds)}toString(){return".key"}}const fs=new ps;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _s{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class gs{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:gs.RED,this.left=null!=i?i:ms.EMPTY_NODE,this.right=null!=s?s:ms.EMPTY_NODE}copy(e,t,n,i,s){return new gs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ms.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ms.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,gs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,gs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}gs.RED=!0,gs.BLACK=!1;class ms{constructor(e,t=ms.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ms(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,gs.BLACK,null,null))}remove(e){return new ms(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,gs.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _s(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _s(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _s(this.root_,null,this.comparator_,!0,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ys(e,t){return li(e.name,t.name)}function vs(e,t){return li(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Cs;ms.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new gs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ws=function(e){return"number"==typeof e?"number:"+fi(e):"string:"+e},bs=function(e){if(e.isLeafNode()){const t=e.val();at("string"==typeof t||"number"==typeof t||"object"==typeof t&&Pt(t,".sv"),"Priority must be a string or number.")}else at(e===Cs||e.isEmpty(),"priority of unexpected type.");at(e===Cs||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Is,Es,ks;class Ts{constructor(e,t=Ts.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,at(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),bs(this.priorityNode_)}static set __childrenNodeConstructor(e){Is=e}static get __childrenNodeConstructor(){return Is}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ts(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ts.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return es(e)?this:".priority"===Yi(e)?this.priorityNode_:Ts.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ts.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Yi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(at(".priority"!==n||1===Ki(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ts.__childrenNodeConstructor.EMPTY_NODE.updateChild(Gi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ws(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?fi(this.value_):this.value_,this.lazyHash_=Qn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ts.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ts.__childrenNodeConstructor?-1:(at(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Ts.VALUE_TYPE_ORDER.indexOf(t),s=Ts.VALUE_TYPE_ORDER.indexOf(n);return at(i>=0,"Unknown leaf type: "+t),at(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ts.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ss=new class extends us{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?li(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return hs.MIN}maxPost(){return new hs(ai,new Ts("[PRIORITY-POST]",ks))}makePost(e,t){const n=Es(e);return new hs(t,new Ts("[PRIORITY-POST]",n))}toString(){return".priority"}},Ns=Math.log(2);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xs{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ns,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ps=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new gs(a,o.node,gs.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new gs(a,o.node,gs.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new gs(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,gs.BLACK):(a(i,gs.BLACK),a(i,gs.RED))}return r}(new xs(e.length));return new ms(i||t,r)};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Rs;const Ds={};class As{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return at(Ds&&Ss,"ChildrenNode.ts has not been loaded"),Rs=Rs||new As({".priority":Ds},{".priority":Ss}),Rs}get(e){const t=Rt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ms?t:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,t){at(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(hs.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?Ps(n,e.getCompare()):Ds;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new As(c,l)}addToIndexes(e,t){const n=At(this.indexes_,((n,i)=>{const s=Rt(this.indexSet_,i);if(at(s,"Missing index implementation for "+i),n===Ds){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(hs.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Ps(n,s.getCompare())}return Ds}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new hs(e.name,i))),s.insert(e,e.node)}}));return new As(n,this.indexSet_)}removeFromIndexes(e,t){const n=At(this.indexes_,(n=>{if(n===Ds)return n;{const i=t.get(e.name);return i?n.remove(new hs(e.name,i)):n}}));return new As(n,this.indexSet_)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Os;class Ls{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&bs(this.priorityNode_),this.children_.isEmpty()&&at(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Os||(Os=new Ls(new ms(vs),null,As.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Os}updatePriority(e){return this.children_.isEmpty()?this:new Ls(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Os:t}}getChild(e){const t=Yi(e);return null===t?this:this.getImmediateChild(t).getChild(Gi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(at(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new hs(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Os:this.priorityNode_;return new Ls(i,r,s)}}updateChild(e,t){const n=Yi(e);if(null===n)return t;{at(".priority"!==Yi(e)||1===Ki(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Gi(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Ss,((r,o)=>{t[r]=o.val(e),n++,s&&Ls.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ws(this.getPriority().val())+":"),this.forEachChild(Ss,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Qn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new hs(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new hs(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new hs(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,hs.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,hs.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ms?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ls(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ss),n=t.getIterator(Ss);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}Ls.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ms=new class extends Ls{constructor(){super(new ms(vs),Ls.EMPTY_NODE,As.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ls.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(hs,{MIN:{value:new hs(oi,Ls.EMPTY_NODE)},MAX:{value:new hs(ai,Ms)}}),ps.__EMPTY_NODE=Ls.EMPTY_NODE,Ts.__childrenNodeConstructor=Ls,Cs=Ms,function(e){ks=e}(Ms);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Fs=!0;function $s(e,t=null){if(null===e)return Ls.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),at(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ts(e,$s(t))}if(e instanceof Array||!Fs){let n=Ls.EMPTY_NODE;return pi(e,((t,i)=>{if(Pt(e,t)&&"."!==t.substring(0,1)){const e=$s(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority($s(t))}{const n=[];let i=!1;if(pi(e,((e,t)=>{if("."!==e.substring(0,1)){const s=$s(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new hs(e,s)))}})),0===n.length)return Ls.EMPTY_NODE;const s=Ps(n,ys,(e=>e.name),vs);if(i){const e=Ps(n,Ss.getCompare());return new Ls(s,$s(t),new As({".priority":e},{".priority":Ss}))}return new Ls(s,$s(t),As.Default)}}!function(e){Es=e}($s);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class qs extends us{constructor(e){super(),this.indexPath_=e,at(!es(e)&&".priority"!==Yi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?li(e.name,t.name):s}makePost(e,t){const n=$s(e),i=Ls.EMPTY_NODE.updateChild(this.indexPath_,n);return new hs(t,i)}maxPost(){const e=Ls.EMPTY_NODE.updateChild(this.indexPath_,Ms);return new hs(ai,e)}toString(){return Ji(this.indexPath_,0).join("/")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Us=new class extends us{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?li(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return hs.MIN}maxPost(){return hs.MAX}makePost(e,t){const n=$s(e);return new hs(t,n)}toString(){return".value"}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ws(e){return{type:"value",snapshotNode:e}}function js(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Bs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Hs(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class zs{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){at(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(Bs(t,o)):at(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(js(t,n)):r.trackChildChange(Hs(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ss,((e,i)=>{t.hasChild(e)||n.trackChildChange(Bs(e,i))})),t.isLeafNode()||t.forEachChild(Ss,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(Hs(t,i,s))}else n.trackChildChange(js(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ls.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vs{constructor(e){this.indexedFilter_=new zs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vs.getStartPost_(e),this.endPost_=Vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new hs(t,n))||(n=Ls.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Ls.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Ls.EMPTY_NODE);const s=this;return t.forEachChild(Ss,((e,t)=>{s.matches(new hs(e,t))||(i=i.updateImmediateChild(e,Ls.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ys{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new hs(t,n))||(n=Ls.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Ls.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Ls.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Ls.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,Ls.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;at(o.numChildren()===this.limit_,"");const a=new hs(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:r(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(Hs(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(Bs(t,e));const n=o.updateImmediateChild(t,Ls.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=s&&s.trackChildChange(js(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&r(l,a)>=0?(null!=s&&(s.trackChildChange(Bs(l.name,l.node)),s.trackChildChange(js(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Ls.EMPTY_NODE)):e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ks{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ss}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return at(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return at(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return at(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return at(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return at(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ss}copy(){const e=new Ks;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gs(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ss?n="$priority":e.index_===Us?n="$value":e.index_===fs?n="$key":(at(e.index_ instanceof qs,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Nt(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Nt(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Nt(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Nt(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Nt(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Qs(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ss&&(t.i=e.index_.toString()),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Js extends Ui{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ti("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(at(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Js.getListenId_(e,n),o={};this.listens_[r]=o;const a=Gs(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),Rt(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Js.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Gs(e._queryParams),n=e._path.toString(),i=new wt;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=St(o.responseText)}catch(e){si("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&si("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xs{constructor(){this.rootNode_=Ls.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Zs(){return{value:null,children:new Map}}function er(e,t,n){if(es(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Yi(t);e.children.has(i)||e.children.set(i,Zs());er(e.children.get(i),t=Gi(t),n)}}function tr(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,((e,i)=>{tr(i,new zi(t.toString()+"/"+e),n)}))}class nr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&pi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ir{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nr(e);const n=1e4+2e4*Math.random();yi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;pi(e,((e,i)=>{i>0&&Pt(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),yi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var sr;function rr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(sr||(sr={}));class or{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=sr.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(es(this.path)){if(null!=this.affectedTree.value)return at(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new zi(e));return new or(Vi(),t,this.revert)}}return at(Yi(this.path)===e,"operationForChild called for unrelated child."),new or(Gi(this.path),this.affectedTree,this.revert)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ar{constructor(e,t){this.source=e,this.path=t,this.type=sr.LISTEN_COMPLETE}operationForChild(e){return es(this.path)?new ar(this.source,Vi()):new ar(this.source,Gi(this.path))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=sr.OVERWRITE}operationForChild(e){return es(this.path)?new lr(this.source,Vi(),this.snap.getImmediateChild(e)):new lr(this.source,Gi(this.path),this.snap)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=sr.MERGE}operationForChild(e){if(es(this.path)){const t=this.children.subtree(new zi(e));return t.isEmpty()?null:t.value?new lr(this.source,Vi(),t.value):new cr(this.source,Vi(),t)}return at(Yi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cr(this.source,Gi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(es(e))return this.isFullyInitialized()&&!this.filtered_;const t=Yi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ur{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dr(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw lt("Should only compare child_ events.");const i=new hs(t.childName,t.snapshotNode),s=new hs(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function pr(e,t){return{eventCache:e,serverCache:t}}function fr(e,t,n,i){return pr(new hr(t,n,i),e.serverCache)}function _r(e,t,n,i){return pr(e.eventCache,new hr(t,n,i))}function gr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function mr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let yr;class vr{constructor(e,t=(()=>(yr||(yr=new ms(ci)),yr))()){this.value=e,this.children=t}static fromObject(e){let t=new vr(null);return pi(e,((e,n)=>{t=t.set(new zi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Vi(),value:this.value};if(es(e))return null;{const n=Yi(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Gi(e),t);if(null!=s){return{path:Zi(new zi(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(es(e))return this;{const t=Yi(e),n=this.children.get(t);return null!==n?n.subtree(Gi(e)):new vr(null)}}set(e,t){if(es(e))return new vr(t,this.children);{const n=Yi(e),i=(this.children.get(n)||new vr(null)).set(Gi(e),t),s=this.children.insert(n,i);return new vr(this.value,s)}}remove(e){if(es(e))return this.children.isEmpty()?new vr(null):new vr(null,this.children);{const t=Yi(e),n=this.children.get(t);if(n){const i=n.remove(Gi(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new vr(null):new vr(this.value,s)}return this}}get(e){if(es(e))return this.value;{const t=Yi(e),n=this.children.get(t);return n?n.get(Gi(e)):null}}setTree(e,t){if(es(e))return t;{const n=Yi(e),i=(this.children.get(n)||new vr(null)).setTree(Gi(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new vr(this.value,s)}}fold(e){return this.fold_(Vi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Zi(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Vi(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(es(e))return null;{const i=Yi(e),s=this.children.get(i);return s?s.findOnPath_(Gi(e),Zi(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Vi(),t)}foreachOnPath_(e,t,n){if(es(e))return this;{this.value&&n(t,this.value);const i=Yi(e),s=this.children.get(i);return s?s.foreachOnPath_(Gi(e),Zi(t,i),n):new vr(null)}}foreach(e){this.foreach_(Vi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Zi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cr{constructor(e){this.writeTree_=e}static empty(){return new Cr(new vr(null))}}function wr(e,t,n){if(es(t))return new Cr(new vr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=ts(s,t);return r=r.updateChild(o,n),new Cr(e.writeTree_.set(s,r))}{const i=new vr(n),s=e.writeTree_.setTree(t,i);return new Cr(s)}}}function br(e,t,n){let i=e;return pi(n,((e,n)=>{i=wr(i,Zi(t,e),n)})),i}function Ir(e,t){if(es(t))return Cr.empty();{const n=e.writeTree_.setTree(t,new vr(null));return new Cr(n)}}function Er(e,t){return null!=kr(e,t)}function kr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ts(n.path,t)):null}function Tr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ss,((e,n)=>{t.push(new hs(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new hs(e,n.value))})),t}function Sr(e,t){if(es(t))return e;{const n=kr(e,t);return new Cr(null!=n?new vr(n):e.writeTree_.subtree(t))}}function Nr(e){return e.writeTree_.isEmpty()}function xr(e,t){return Pr(Vi(),e.writeTree_,t)}function Pr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(at(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Pr(Zi(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Zi(e,".priority"),i)),n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Rr(e,t){return Hr(t,e)}function Dr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));at(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Ar(t,i.path)?s=!1:is(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=Lr(e.allWrites,Or,Vi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ir(e.visibleWrites,i.path);else{pi(i.children,(t=>{e.visibleWrites=Ir(e.visibleWrites,Zi(i.path,t))}))}return!0}return!1}function Ar(e,t){if(e.snap)return is(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&is(Zi(e.path,n),t))return!0;return!1}function Or(e){return e.visible}function Lr(e,t,n){let i=Cr.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)is(n,e)?(t=ts(n,e),i=wr(i,t,r.snap)):is(e,n)&&(t=ts(e,n),i=wr(i,Vi(),r.snap.getChild(t)));else{if(!r.children)throw lt("WriteRecord should have .snap or .children");if(is(n,e))t=ts(n,e),i=br(i,t,r.children);else if(is(e,n))if(t=ts(e,n),es(t))i=br(i,Vi(),r.children);else{const e=Rt(r.children,Yi(t));if(e){const n=e.getChild(Gi(t));i=wr(i,Vi(),n)}}}}}return i}function Mr(e,t,n,i,s){if(i||s){const r=Sr(e.visibleWrites,t);if(!s&&Nr(r))return n;if(s||null!=n||Er(r,Vi())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(is(e.path,t)||is(t,e.path))};return xr(Lr(e.allWrites,r,t),n||Ls.EMPTY_NODE)}return null}{const i=kr(e.visibleWrites,t);if(null!=i)return i;{const i=Sr(e.visibleWrites,t);if(Nr(i))return n;if(null!=n||Er(i,Vi())){return xr(i,n||Ls.EMPTY_NODE)}return null}}}function Fr(e,t,n,i){return Mr(e.writeTree,e.treePath,t,n,i)}function $r(e,t){return function(e,t,n){let i=Ls.EMPTY_NODE;const s=kr(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Ss,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Sr(e.visibleWrites,t);return n.forEachChild(Ss,((e,t)=>{const n=xr(Sr(s,new zi(e)),t);i=i.updateImmediateChild(e,n)})),Tr(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Tr(Sr(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function qr(e,t,n,i){return function(e,t,n,i,s){at(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Zi(t,n);if(Er(e.visibleWrites,r))return null;{const t=Sr(e.visibleWrites,r);return Nr(t)?s.getChild(n):xr(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Ur(e,t){return function(e,t){return kr(e.visibleWrites,t)}(e.writeTree,Zi(e.treePath,t))}function Wr(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=Sr(e.visibleWrites,t),c=kr(l,Vi());if(null!=c)a=c;else{if(null==n)return[];a=xr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function jr(e,t,n){return function(e,t,n,i){const s=Zi(t,n),r=kr(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return xr(Sr(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Br(e,t){return Hr(Zi(e.treePath,t),e.writeTree)}function Hr(e,t){return{treePath:e,writeTree:t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;at("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),at(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Hs(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,Bs(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,js(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw lt("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Hs(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Vr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Yr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new hr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:mr(this.viewCache_),s=Wr(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Kr(e,t,n,i,s){const r=new zr;let o,a;if(n.type===sr.OVERWRITE){const l=n;l.source.fromUser?o=Jr(e,t,l.path,l.snap,i,s,r):(at(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!es(l.path),o=Qr(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===sr.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Zi(n,i);Xr(t,Yi(c))&&(a=Jr(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Zi(n,i);Xr(t,Yi(c))||(a=Jr(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(at(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=eo(e,t,l.path,l.children,i,s,a,r))}else if(n.type===sr.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=Ur(i,n))return t;{const a=new Yr(i,t,s),l=t.eventCache.getNode();let c;if(es(n)||".priority"===Yi(n)){let n;if(t.serverCache.isFullyInitialized())n=Fr(i,mr(t));else{const e=t.serverCache.getNode();at(e instanceof Ls,"serverChildren would be complete if leaf node"),n=$r(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=Yi(n);let h=jr(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=l.getImmediateChild(s)),c=null!=h?e.filter.updateChild(l,s,h,Gi(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,Ls.EMPTY_NODE,Gi(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Fr(i,mr(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Ur(i,Vi()),fr(t,c,o,e.filter.filtersNodes())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=Ur(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(es(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Qr(e,t,n,l.getNode().getChild(n),s,r,a,o);if(es(n)){let i=new vr(null);return l.getNode().forEachChild(fs,((e,t)=>{i=i.set(new zi(e),t)})),eo(e,t,n,i,s,r,a,o)}return t}{let c=new vr(null);return i.foreach(((e,t)=>{const i=Zi(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),eo(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==sr.LISTEN_COMPLETE)throw lt("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=_r(t,r.getNode(),r.isFullyInitialized()||es(n),r.isFiltered());return Gr(e,o,n,i,Vr,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=gr(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ws(gr(t)))}}(t,o,l),{viewCache:o,changes:l}}function Gr(e,t,n,i,s,r){const o=t.eventCache;if(null!=Ur(i,n))return t;{let a,l;if(es(n))if(at(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=mr(t),s=$r(i,n instanceof Ls?n:Ls.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=Fr(i,mr(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=Yi(n);if(".priority"===c){at(1===Ki(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=qr(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=Gi(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=qr(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=jr(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,s,r):o.getNode()}}return fr(t,a,o.isFullyInitialized()||es(n),e.filter.filtersNodes())}}function Qr(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(es(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Yi(n);if(!l.isCompleteForPath(n)&&Ki(n)>1)return t;const s=Gi(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,Vr,null)}const u=_r(t,c,l.isFullyInitialized()||es(n),h.filtersNodes());return Gr(e,u,n,s,new Yr(s,u,r),a)}function Jr(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new Yr(s,t,r);if(es(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=fr(t,c,!0,e.filter.filtersNodes());else{const s=Yi(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=fr(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Gi(n),c=a.getNode().getImmediateChild(s);let u;if(es(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===Qi(r)&&e.getChild(Xi(r)).isEmpty()?e:e.updateChild(r,i):Ls.EMPTY_NODE}if(c.equals(u))l=t;else{l=fr(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Xr(e,t){return e.eventCache.isCompleteForChild(t)}function Zr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function eo(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=es(n)?i:new vr(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Zr(0,t.serverCache.getNode().getImmediateChild(n),i);c=Qr(e,c,new zi(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=Zr(0,t.serverCache.getNode().getImmediateChild(n),i);c=Qr(e,c,new zi(n),l,s,r,o,a)}})),c}class to{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new zs(n.getIndex()),s=(r=n).loadsAllData()?new zs(r.getIndex()):r.hasLimit()?new Ys(r):new Vs(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Ls.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Ls.EMPTY_NODE,a.getNode(),null),h=new hr(l,o.isFullyInitialized(),i.filtersNodes()),u=new hr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=pr(u,h),this.eventGenerator_=new ur(this.query_)}get query(){return this.query_}}function no(e,t){const n=mr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!es(t)&&!n.getImmediateChild(Yi(t)).isEmpty())?n.getChild(t):null}function io(e){return 0===e.eventRegistrations_.length}function so(e,t,n){const i=[];if(n){at(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function ro(e,t,n,i){t.type===sr.MERGE&&null!==t.source.queryId&&(at(mr(e.viewCache_),"We should always have a full cache before handling merges"),at(gr(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Kr(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,at(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),at(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),at(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,oo(e,r.changes,r.viewCache.eventCache.getNode(),null)}function oo(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),dr(e,s,"child_removed",t,i,n),dr(e,s,"child_added",t,i,n),dr(e,s,"child_moved",r,i,n),dr(e,s,"child_changed",t,i,n),dr(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let ao,lo;class co{constructor(){this.views=new Map}}function ho(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return at(null!=r,"SyncTree gave us an op for an invalid query."),ro(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(ro(r,t,n,i));return s}}function uo(e,t,n,i,s,r){const o=function(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=Fr(n,s?i:null),r=!1;e?r=!0:i instanceof Ls?(e=$r(n,i),r=!1):(e=Ls.EMPTY_NODE,r=!1);const o=pr(new hr(e,r,!1),new hr(i,s,!1));return new to(t,o)}return o}(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Ss,((e,t)=>{i.push(js(e,t))}));return n.isFullyInitialized()&&i.push(Ws(n.getNode())),oo(e,i,n.getNode(),t)}(o,n)}function po(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=yo(e);if("default"===s)for(const[t,s]of e.views.entries())o=o.concat(so(s,n,i)),io(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||r.push(s.query));else{const t=e.views.get(s);t&&(o=o.concat(so(t,n,i)),io(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!yo(e)&&r.push(new(at(ao,"Reference.ts has not been loaded"),ao)(t._repo,t._path)),{removed:r,events:o}}function fo(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function _o(e,t){let n=null;for(const i of e.views.values())n=n||no(i,t);return n}function go(e,t){if(t._queryParams.loadsAllData())return vo(e);{const n=t._queryIdentifier;return e.views.get(n)}}function mo(e,t){return null!=go(e,t)}function yo(e){return null!=vo(e)}function vo(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Co=1;class wo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new vr(null),this.pendingWriteTree_={visibleWrites:Cr.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bo(e,t,n,i,s){return function(e,t,n,i,s){at(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=wr(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?No(e,new lr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Io(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Dr(e.pendingWriteTree_,t)){let t=new vr(null);return null!=i.snap?t=t.set(Vi(),!0):pi(i.children,(e=>{t=t.set(new zi(e),!0)})),No(e,new or(i.path,t,n))}return[]}function Eo(e,t,n){return No(e,new lr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ko(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||mo(o,t))){const l=po(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>yo(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&yo(t)){return[vo(t)]}{let e=[];return t&&(e=fo(t)),pi(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=Ro(e,i);e.listenProvider_.startListening(Fo(s),Do(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Fo(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Ao(t));e.listenProvider_.stopListening(Fo(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Ao(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function To(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=ts(e,s);r=r||_o(t,n),o=o||yo(t)}));let a,l=e.syncPointTree_.get(s);if(l?(o=o||yo(l),r=r||_o(l,Vi())):(l=new co,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=r)a=!0;else{a=!1,r=Ls.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=_o(t,Vi());n&&(r=r.updateImmediateChild(e,n))}))}const c=mo(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=Ao(t);at(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Co++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=uo(l,t,n,Rr(e.pendingWriteTree_,s),r,a);if(!c&&!o&&!i){const n=go(l,t);h=h.concat(function(e,t,n){const i=t._path,s=Do(e,t),r=Ro(e,n),o=e.listenProvider_.startListening(Fo(t),s,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(s)at(!yo(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!es(e)&&t&&yo(t))return[vo(t).query];{let e=[];return t&&(e=e.concat(fo(t).map((e=>e.query)))),pi(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Fo(i),Do(e,i))}}return o}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,n))}return h}function So(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=_o(n,ts(e,t));if(i)return i}));return Mr(i,t,s,n,!0)}function No(e,t){return xo(t,e.syncPointTree_,null,Rr(e.pendingWriteTree_,Vi()))}function xo(e,t,n,i){if(es(e.path))return Po(e,t,n,i);{const s=t.get(Vi());null==n&&null!=s&&(n=_o(s,Vi()));let r=[];const o=Yi(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Br(i,o);r=r.concat(xo(a,l,e,t))}return s&&(r=r.concat(ho(s,e,i,n))),r}}function Po(e,t,n,i){const s=t.get(Vi());null==n&&null!=s&&(n=_o(s,Vi()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Br(i,t),l=e.operationForChild(t);l&&(r=r.concat(Po(l,s,o,a)))})),s&&(r=r.concat(ho(s,e,i,n))),r}function Ro(e,t){const n=t.query,i=Do(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Ls.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Oo(e,n);if(i){const n=Lo(i),s=n.path,r=n.queryId,o=ts(s,t);return Mo(e,s,new ar(rr(r),o))}return[]}(e,n._path,i):function(e,t){return No(e,new ar({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return ko(e,n,null,i)}}}}function Do(e,t){const n=Ao(t);return e.queryToTagMap.get(n)}function Ao(e){return e._path.toString()+"$"+e._queryIdentifier}function Oo(e,t){return e.tagToQueryMap.get(t)}function Lo(e){const t=e.indexOf("$");return at(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new zi(e.substr(0,t))}}function Mo(e,t,n){const i=e.syncPointTree_.get(t);at(i,"Missing sync point for query tag that we're tracking");return ho(i,n,Rr(e.pendingWriteTree_,t),null)}function Fo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(at(lo,"Reference.ts has not been loaded"),lo)(e._repo,e._path):e}class $o{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $o(t)}node(){return this.node_}}class qo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Zi(this.path_,e);return new qo(this.syncTree_,t)}node(){return So(this.syncTree_,this.path_)}}const Uo=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Wo=function(e,t,n){return e&&"object"==typeof e?(at(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?jo(e[".sv"],t,n):"object"==typeof e[".sv"]?Bo(e[".sv"],t):void at(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},jo=function(e,t,n){if("timestamp"===e)return n.timestamp;at(!1,"Unexpected server value: "+e)},Bo=function(e,t,n){e.hasOwnProperty("increment")||at(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&at(!1,"Unexpected increment value: "+i);const s=t.node();if(at(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Ho=function(e,t,n,i){return Vo(t,new qo(n,e),i)},zo=function(e,t,n){return Vo(e,new $o(t),n)};function Vo(e,t,n){const i=e.getPriority().val(),s=Wo(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Wo(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Ts(r,$s(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Ts(s))),i.forEachChild(Ss,((e,i)=>{const s=Vo(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ko(e,t){let n=t instanceof zi?t:new zi(t),i=e,s=Yi(n);for(;null!==s;){const e=Rt(i.node.children,s)||{children:{},childCount:0};i=new Yo(s,i,e),n=Gi(n),s=Yi(n)}return i}function Go(e){return e.node.value}function Qo(e,t){e.node.value=t,ta(e)}function Jo(e){return e.node.childCount>0}function Xo(e,t){pi(e.node.children,((n,i)=>{t(new Yo(n,e,i))}))}function Zo(e,t,n,i){n&&!i&&t(e),Xo(e,(e=>{Zo(e,t,!0,i)})),n&&i&&t(e)}function ea(e){return new zi(null===e.parent?e.name:ea(e.parent)+"/"+e.name)}function ta(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Go(e)&&!Jo(e)}(n),s=Pt(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,ta(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,ta(e))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.parent,e.name,e)}const na=/[\[\].#$\/\u0000-\u001F\u007F]/,ia=/[\[\].#$\u0000-\u001F\u007F]/,sa=10485760,ra=function(e){return"string"==typeof e&&0!==e.length&&!na.test(e)},oa=function(e){return"string"==typeof e&&0!==e.length&&!ia.test(e)},aa=function(e,t,n){const i=n instanceof zi?new ss(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+os(i));if("function"==typeof t)throw new Error(e+"contains a function "+os(i)+" with contents = "+t.toString());if(ri(t))throw new Error(e+"contains "+t.toString()+" "+os(i));if("string"==typeof t&&t.length>sa/3&&$t(t)>sa)throw new Error(e+"contains a string greater than "+sa+" utf8 bytes "+os(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(pi(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!ra(t)))throw new Error(e+" contains an invalid key ("+t+") "+os(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=$t(t),rs(e)}(i,t),aa(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=$t(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+os(i)+" in addition to actual children.")}},la=function(e,t,n,i){if(!(i&&void 0===n||oa(n)))throw new Error(Ft(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ca=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),la(e,t,n,i)},ha=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ra(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),oa(e)}(n))throw new Error(Ft(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ua{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function da(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||ns(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function pa(e,t,n){da(e,n),_a(e,(e=>ns(e,t)))}function fa(e,t,n){da(e,n),_a(e,(e=>is(e,t)||is(t,e)))}function _a(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(ga(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ga(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Xn&&ei("event: "+n.toString()),mi(i)}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ma="repo_interrupt",ya=25;class va{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ua,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zs(),this.transactionQueueTree_=new Yo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ca(e,t,n){if(e.stats_=Ri(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Js(e.repoInfo_,((t,n,i,s)=>{Ia(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Ea(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Nt(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new cs(e.repoInfo_,t,((t,n,i,s)=>{Ia(e,t,n,i,s)}),(t=>{Ea(e,t)}),(t=>{!function(e,t){pi(t,((t,n)=>{ka(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Pi[n]||(Pi[n]=t()),Pi[n]}(e.repoInfo_,(()=>new ir(e.stats_,e.server_))),e.infoData_=new Xs,e.infoSyncTree_=new wo({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Eo(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ka(e,"connected",!1),e.serverSyncTree_=new wo({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);fa(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function wa(e){const t=e.infoData_.getNode(new zi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ba(e){return Uo({timestamp:wa(e)})}function Ia(e,t,n,i,s){e.dataUpdateCount++;const r=new zi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=At(n,(e=>$s(e)));o=function(e,t,n,i){const s=Oo(e,i);if(s){const i=Lo(s),r=i.path,o=i.queryId,a=ts(r,t),l=vr.fromObject(n);return Mo(e,r,new cr(rr(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=$s(n);o=function(e,t,n,i){const s=Oo(e,i);if(null!=s){const i=Lo(s),r=i.path,o=i.queryId,a=ts(r,t);return Mo(e,r,new lr(rr(o),a,n))}return[]}(e.serverSyncTree_,r,t,s)}else if(i){const t=At(n,(e=>$s(e)));o=function(e,t,n){const i=vr.fromObject(n);return No(e,new cr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=$s(n);o=Eo(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=Ra(e,r)),fa(e.eventQueue_,a,o)}function Ea(e,t){ka(e,"connected",t),!1===t&&function(e){Na(e,"onDisconnectEvents");const t=ba(e),n=Zs();tr(e.onDisconnect_,Vi(),((i,s)=>{const r=Ho(i,s,e.serverSyncTree_,t);er(n,i,r)}));let i=[];tr(n,Vi(),((t,n)=>{i=i.concat(Eo(e.serverSyncTree_,t,n));const s=function(e,t){const n=ea(Da(e,t)),i=Ko(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Ma(e,t)})),Ma(e,i),Zo(i,(t=>{Ma(e,t)})),n}(e,t);Ra(e,s)})),e.onDisconnect_=Zs(),fa(e.eventQueue_,Vi(),i)}(e)}function ka(e,t,n){const i=new zi("/.info/"+t),s=$s(n);e.infoData_.updateSnapshot(i,s);const r=Eo(e.infoSyncTree_,i,s);fa(e.eventQueue_,i,r)}function Ta(e){return e.nextWriteId_++}function Sa(e,t,n){let i;i=".info"===Yi(t._path)?ko(e.infoSyncTree_,t,n):ko(e.serverSyncTree_,t,n),pa(e.eventQueue_,t._path,i)}function Na(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),ei(n,...t)}function xa(e,t,n){return So(e.serverSyncTree_,t,n)||Ls.EMPTY_NODE}function Pa(e,t=e.transactionQueueTree_){if(t||La(e,t),Go(t)){const n=Aa(e,t);at(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=xa(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];at(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=ts(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Na(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Io(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();La(e,Ko(e.transactionQueueTree_,t)),Pa(e,e.transactionQueueTree_),fa(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)mi(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{si("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Ra(e,t)}}),o)}(e,ea(t),n)}else Jo(t)&&Xo(t,(t=>{Pa(e,t)}))}function Ra(e,t){const n=Da(e,t),i=ea(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let r=0;r<t.length;r++){const l=t[r],c=ts(n,l.path);let h,u=!1;if(at(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,s=s.concat(Io(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=ya)u=!0,h="maxretry",s=s.concat(Io(e.serverSyncTree_,l.currentWriteId,!0));else{const n=xa(e,l.path,o);l.currentInputSnapshot=n;const i=t[r].update(n.val());if(void 0!==i){aa("transaction failed: Data returned ",i,l.path);let t=$s(i);"object"==typeof i&&null!=i&&Pt(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=l.currentWriteId,a=ba(e),c=zo(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Ta(e),o.splice(o.indexOf(r),1),s=s.concat(bo(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(Io(e.serverSyncTree_,r,!0))}else u=!0,h="nodata",s=s.concat(Io(e.serverSyncTree_,l.currentWriteId,!0))}fa(e.eventQueue_,n,s),s=[],u&&(t[r].status=2,a=t[r].unwatcher,setTimeout(a,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((()=>t[r].onComplete(null,!1,t[r].currentInputSnapshot))):i.push((()=>t[r].onComplete(new Error(h),!1,null)))))}var a;La(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)mi(i[e]);Pa(e,e.transactionQueueTree_)}(e,Aa(e,n),i),i}function Da(e,t){let n,i=e.transactionQueueTree_;for(n=Yi(t);null!==n&&void 0===Go(i);)i=Ko(i,n),n=Yi(t=Gi(t));return i}function Aa(e,t){const n=[];return Oa(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Oa(e,t,n){const i=Go(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Xo(t,(t=>{Oa(e,t,n)}))}function La(e,t){const n=Go(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Qo(t,n.length>0?n:void 0)}Xo(t,(t=>{La(e,t)}))}function Ma(e,t){const n=Go(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(at(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(at(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Io(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Qo(t,void 0):n.length=r+1,fa(e.eventQueue_,ea(t),s);for(let e=0;e<i.length;e++)mi(i[e])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Fa=function(e,t){const n=$a(e),i=n.namespace;"firebase.com"===n.domain&&ii(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ii("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&si("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ti(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new zi(n.pathString)}},$a=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):si(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class qa{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Nt(this.snapshot.exportVal())}}class Ua{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wa{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return at(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ja{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return es(this._path)?null:Qi(this._path)}get ref(){return new Ba(this._repo,this._path)}get _queryIdentifier(){const e=Qs(this._queryParams),t=ui(e);return"{}"===t?"default":t}get _queryObject(){return Qs(this._queryParams)}isEqual(e){if(!((e=qt(e))instanceof ja))return!1;const t=this._repo===e._repo,n=ns(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ba extends ja{constructor(e,t){super(e,t,new Ks,!1)}get parent(){const e=Xi(this._path);return null===e?null:new Ba(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ha{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new zi(e),n=Va(this.ref,e);return new Ha(this._node.getChild(t),n,Ss)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Ha(n,Va(this.ref,t),Ss))))}hasChild(e){const t=new zi(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function za(e,t){return(e=qt(e))._checkNotDeleted("ref"),void 0!==t?Va(e._root,t):e._root}function Va(e,t){return null===Yi((e=qt(e))._path)?ca("child","path",t,!1):la("child","path",t,!1),new Ba(e._repo,Zi(e._path,t))}class Ya{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new qa("value",this,new Ha(e.snapshotNode,new Ba(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ua(this,e,t):null}matches(e){return e instanceof Ya&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ka{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ua(this,e,t):null}createEvent(e,t){at(null!=e.childName,"Child events should have a childName.");const n=Va(new Ba(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new qa(e.type,this,new Ha(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ka&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ga(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{Sa(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Wa(n,r||void 0),a="value"===t?new Ya(o):new Ka(t,o);return function(e,t,n){let i;i=".info"===Yi(t._path)?To(e.infoSyncTree_,t,n):To(e.serverSyncTree_,t,n),pa(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>Sa(e._repo,e,a)}function Qa(e,t,n,i){return Ga(e,"value",t,n,i)}function Ja(e,t,n){let i=null;const s=n?new Wa(n):null;"value"===t?i=new Ya(s):t&&(i=new Ka(t,s)),Sa(e._repo,e,i)}!function(e){at(!ao,"__referenceConstructor has already been defined"),ao=e}(Ba),function(e){at(!lo,"__referenceConstructor has already been defined"),lo=e}(Ba);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Xa="FIREBASE_DATABASE_EMULATOR_HOST",Za={};let el=!1;function tl(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||ii("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ei("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Fa(r,s),c=l.repoInfo;"undefined"!=typeof process&&process.env&&(a=process.env[Xa]),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=Fa(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const h=s&&o?new wi(wi.OWNER):new Ci(e.name,e.options,t);ha("Invalid Firebase Database URL",l),es(l.path)||ii("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=Za[t.name];s||(s={},Za[t.name]=s);let r=s[e.toURLString()];r&&ii("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new va(e,el,n,i),s[e.toURLString()]=r,r}(c,e,h,new vi(e.name,n));return new il(u,e)}function nl(e,t){const n=Za[t];n&&n[e.key]===e||ii(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ma)}(e),delete n[e.key]}class il{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ca(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ba(this._repo,Vi())),this._rootInternal}_delete(){return null!==this._rootInternal&&(nl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ii("Cannot call "+e+" on a deleted database.")}}cs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},cs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){!function(e){jn=e}("10.3.1"),In(new Ut("database",((e,{instanceIdentifier:t})=>tl(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Sn(Un,Wn,e),Sn(Un,Wn,"esm2017")}();const sl=function(e=function(e=yn){const t=Cn.get(e);if(!t&&e===yn&&Ct())return Tn();if(!t)throw En.create("no-app",{appName:e});return t}(),t){const n=function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=vt("database");e&&function(e,t,n,i={}){e=qt(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ii("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ii('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new wi(wi.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[pt(JSON.stringify({alg:"none",type:"JWT"})),pt(JSON.stringify(r)),""].join(".")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(i.mockUserToken,e.app.options.projectId);r=new wi(t)}!function(e,t,n,i){e.repoInfo_=new Ti(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}(Tn({apiKey:"AIzaSyDg5bqZbnlx5RxMZi44HDtNcrRnrrE9uqA",authDomain:"gulat-arena.firebaseapp.com",databaseURL:"https://gulat-arena-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"gulat-arena",storageBucket:"gulat-arena.appspot.com",messagingSenderId:"252558550776",appId:"1:252558550776:web:638936fae3411f0913bd0d",measurementId:"G-386HDYG2KE"}));function rl(e,t,n){const i=e.slice();return i[13]=t[n],i}function ol(e,t,n){const i=e.slice();return i[16]=t[n],i}function al(e){let t,n,i,s,r=e[16]+"";function o(){return e[6](e[16])}return{c(){t=N("button"),n=x(r)},m(e,r){k(e,t,r),b(t,n),i||(s=D(t,"click",o),i=!0)},p(t,i){e=t,1&i&&r!==(r=e[16]+"")&&O(n,r)},d(e){e&&T(t),i=!1,s()}}}function ll(e){let t,n=e[0][e[1]],i=[];for(let t=0;t<n.length;t+=1)i[t]=cl(rl(e,n,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=R()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n);k(e,t,n)},p(e,s){if(15&s){let r;for(n=e[0][e[1]],r=0;r<n.length;r+=1){const o=rl(e,n,r);i[r]?i[r].p(o,s):(i[r]=cl(o),i[r].c(),i[r].m(t.parentNode,t))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(e){S(i,e),e&&T(t)}}}function cl(e){let t,n,i,s,o,a,l,c,h,u,d,p,f,_,g,m,y,v,C,w,I,E,S,R,L,F,$,q,U,W,j,B,H,z,V,Y=e[13].fightNumber+"",K=e[13].round+"",G=e[13].weightCategoryAlternateName.replace(" - ","\n").replace(" kg","")+"",Q=e[13].team1AlternateName+"",J=ul(e[13].fighter1FullName)+"",X=e[13].team2AlternateName+"",Z=ul(e[13].fighter2FullName)+"";function ee(){return e[7](e[13])}function te(){return e[8](e[13])}return{c(){t=N("div"),n=N("div"),i=x(Y),s=P(),o=N("div"),a=N("p"),l=x(K),c=P(),h=N("p"),u=x(G),d=P(),p=N("div"),f=N("span"),_=x("("),g=x(Q),m=x(")"),y=P(),v=N("span"),C=x(J),I=P(),E=N("div"),E.textContent="VS",S=P(),R=N("div"),L=N("span"),F=x("("),$=x(X),q=x(")"),U=P(),W=N("span"),j=x(Z),H=P(),A(n,"class","number"),A(h,"class","weight-category"),A(o,"class","category"),A(f,"class","team"),A(v,"class",w="fighter "+(e[13].winnerFighter&&e[13].winnerFighter!==e[13].fighter1Id?"lose":"")),A(p,"class","atlethe"),A(E,"class","vs"),A(L,"class","team"),A(W,"class",B="fighter "+(e[13].winnerFighter&&e[13].winnerFighter!==e[13].fighter2Id?"lose":"")),A(R,"class","atlethe"),A(t,"class","fight-container"),M(t,"strikethrough",e[13].canceled&&""!=e[13].canceled),M(t,"completed",e[13].isCompleted||e[13].canceled&&""!=e[13].canceled),M(t,"highlight",""!=e[13].fighter1FullName&&e[13].team1AlternateName.toLowerCase()===e[2].toLowerCase()||""!=e[13].fighter2FullName&&e[13].team2AlternateName.toLowerCase()===e[2].toLowerCase())},m(e,r){k(e,t,r),b(t,n),b(n,i),b(t,s),b(t,o),b(o,a),b(a,l),b(o,c),b(o,h),b(h,u),b(t,d),b(t,p),b(p,f),b(f,_),b(f,g),b(f,m),b(p,y),b(p,v),b(v,C),b(t,I),b(t,E),b(t,S),b(t,R),b(R,L),b(L,F),b(L,$),b(L,q),b(R,U),b(R,W),b(W,j),b(t,H),z||(V=[D(f,"click",ee),D(L,"click",te)],z=!0)},p(n,s){e=n,3&s&&Y!==(Y=e[13].fightNumber+"")&&O(i,Y),3&s&&K!==(K=e[13].round+"")&&O(l,K),3&s&&G!==(G=e[13].weightCategoryAlternateName.replace(" - ","\n").replace(" kg","")+"")&&O(u,G),3&s&&Q!==(Q=e[13].team1AlternateName+"")&&O(g,Q),3&s&&J!==(J=ul(e[13].fighter1FullName)+"")&&O(C,J),3&s&&w!==(w="fighter "+(e[13].winnerFighter&&e[13].winnerFighter!==e[13].fighter1Id?"lose":""))&&A(v,"class",w),3&s&&X!==(X=e[13].team2AlternateName+"")&&O($,X),3&s&&Z!==(Z=ul(e[13].fighter2FullName)+"")&&O(j,Z),3&s&&B!==(B="fighter "+(e[13].winnerFighter&&e[13].winnerFighter!==e[13].fighter2Id?"lose":""))&&A(W,"class",B),3&s&&M(t,"strikethrough",e[13].canceled&&""!=e[13].canceled),3&s&&M(t,"completed",e[13].isCompleted||e[13].canceled&&""!=e[13].canceled),7&s&&M(t,"highlight",""!=e[13].fighter1FullName&&e[13].team1AlternateName.toLowerCase()===e[2].toLowerCase()||""!=e[13].fighter2FullName&&e[13].team2AlternateName.toLowerCase()===e[2].toLowerCase())},d(e){e&&T(t),z=!1,r(V)}}}function hl(t){let n,i,s,r,o,a,l,c,h,u=Object.keys(t[0]),d=[];for(let e=0;e<u.length;e+=1)d[e]=al(ol(t,u,e));let p=t[1]&&t[0][t[1]]&&ll(t);return{c(){n=N("div"),i=N("div"),s=N("input"),r=P(),o=N("div");for(let e=0;e<d.length;e+=1)d[e].c();a=P(),l=N("div"),p&&p.c(),A(s,"type","text"),A(s,"placeholder","Filter by team name"),A(i,"class","team-filter"),A(o,"class","date-tabs"),A(n,"class","fixed-top"),A(l,"class","fight-wrapper")},m(e,u){k(e,n,u),b(n,i),b(i,s),L(s,t[2]),b(n,r),b(n,o);for(let e=0;e<d.length;e+=1)d[e]&&d[e].m(o,null);k(e,a,u),k(e,l,u),p&&p.m(l,null),c||(h=D(s,"input",t[5]),c=!0)},p(e,[t]){if(4&t&&s.value!==e[2]&&L(s,e[2]),3&t){let n;for(u=Object.keys(e[0]),n=0;n<u.length;n+=1){const i=ol(e,u,n);d[n]?d[n].p(i,t):(d[n]=al(i),d[n].c(),d[n].m(o,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=u.length}e[1]&&e[0][e[1]]?p?p.p(e,t):(p=ll(e),p.c(),p.m(l,null)):p&&(p.d(1),p=null)},i:e,o:e,d(e){e&&T(n),S(d,e),e&&T(a),e&&T(l),p&&p.d(),c=!1,h()}}}function ul(e){return e.split(" ").map(((e,t)=>t>1?e.charAt(0).toUpperCase()+".":function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}(e))).join(" ")}function dl(e,t,n){let{fights:i=[]}=t,s="",r={},o=new Date,a=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`;function l(e){n(2,s=e)}return e.$$set=e=>{"fights"in e&&n(4,i=e.fights)},e.$$.update=()=>{19&e.$$.dirty&&(n(0,r=i.reduce(((e,t)=>{const n=t.sessionStartDate;return e[n]||(e[n]=[]),e[n].push(t),e}),{})),Object.keys(r).length>0&&!Object.keys(r).includes(a)&&n(1,a=Object.keys(r)[0]))},[r,a,s,l,i,function(){s=this.value,n(2,s)},e=>n(1,a=e),e=>l(e.team1AlternateName),e=>l(e.team2AlternateName)]}class pl extends be{constructor(e){super(),we(this,e,dl,hl,a,{fights:4})}}function fl(e,t,n){const i=e.slice();return i[2]=t[n],i}function _l(e,t,n){const i=e.slice();return i[5]=t[n],i}function gl(e){let t,n,i,s,r,o,a,l,c,h,u=e[5].rank+"",d=e[5].fighter.fullName+"",p=e[5].fighter.teamName+"";return{c(){t=N("tr"),n=N("td"),i=x(u),s=P(),r=N("td"),o=x(d),a=P(),l=N("td"),c=x(p),h=P(),A(n,"class","rank svelte-1x3b31b"),A(r,"class","svelte-1x3b31b"),A(l,"class","svelte-1x3b31b")},m(e,u){k(e,t,u),b(t,n),b(n,i),b(t,s),b(t,r),b(r,o),b(t,a),b(t,l),b(l,c),b(t,h)},p(e,t){3&t&&u!==(u=e[5].rank+"")&&O(i,u),3&t&&d!==(d=e[5].fighter.fullName+"")&&O(o,d),3&t&&p!==(p=e[5].fighter.teamName+"")&&O(c,p)},d(e){e&&T(t)}}}function ml(e){let t,n,i,s,r,o,a,l,c=e[2]+"",h=vl(e[0][e[2]]),u=[];for(let t=0;t<h.length;t+=1)u[t]=gl(_l(e,h,t));return{c(){t=N("h3"),n=x(c),i=P(),s=N("table"),r=N("thead"),r.innerHTML='<tr><th class="svelte-1x3b31b">Juara</th> \n                    <th class="svelte-1x3b31b">Nama</th> \n                    <th class="svelte-1x3b31b">Asal</th></tr>',o=P(),a=N("tbody");for(let e=0;e<u.length;e+=1)u[e].c();l=P(),A(s,"border","1")},m(e,c){k(e,t,c),b(t,n),k(e,i,c),k(e,s,c),b(s,r),b(s,o),b(s,a);for(let e=0;e<u.length;e+=1)u[e]&&u[e].m(a,null);b(s,l)},p(e,t){if(2&t&&c!==(c=e[2]+"")&&O(n,c),3&t){let n;for(h=vl(e[0][e[2]]),n=0;n<h.length;n+=1){const i=_l(e,h,n);u[n]?u[n].p(i,t):(u[n]=gl(i),u[n].c(),u[n].m(a,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=h.length}},d(e){e&&T(t),e&&T(i),e&&T(s),S(u,e)}}}function yl(t){let n,i,s,r=t[1],o=[];for(let e=0;e<r.length;e+=1)o[e]=ml(fl(t,r,e));return{c(){n=N("div"),i=N("h2"),i.textContent="Ranking",s=P();for(let e=0;e<o.length;e+=1)o[e].c();A(n,"class","ranking-wrapper svelte-1x3b31b")},m(e,t){k(e,n,t),b(n,i),b(n,s);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(n,null)},p(e,[t]){if(3&t){let i;for(r=e[1],i=0;i<r.length;i+=1){const s=fl(e,r,i);o[i]?o[i].p(s,t):(o[i]=ml(s),o[i].c(),o[i].m(n,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},i:e,o:e,d(e){e&&T(n),S(o,e)}}}function vl(e){return e.slice(0,4)}function Cl(e,t,n){let{rankings:i={}}=t,s=[];return e.$$set=e=>{"rankings"in e&&n(0,i=e.rankings)},e.$$.update=()=>{3&e.$$.dirty&&(n(1,s=Object.keys(i)),console.log("Updated rankingKeys:",s))},[i,s]}class wl extends be{constructor(e){super(),we(this,e,Cl,yl,a,{rankings:0})}}function bl(e){let t,n,i;return{c(){t=N("p"),n=x("Last updated: "),i=x(e[3])},m(e,s){k(e,t,s),b(t,n),b(t,i)},p(e,t){8&t&&O(i,e[3])},d(e){e&&T(t)}}}function Il(e){let t,n;return t=new wl({props:{rankings:e[1]}}),{c(){ye(t.$$.fragment)},m(e,i){ve(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.rankings=e[1]),t.$set(i)},i(e){n||(pe(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){Ce(t,e)}}}function El(e){let t,n;return t=new pl({props:{fights:e[0]}}),{c(){ye(t.$$.fragment)},m(e,i){ve(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.fights=e[0]),t.$set(i)},i(e){n||(pe(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){Ce(t,e)}}}function kl(e){let t,n,i,s,o,a,l,c,h,u,d,p,f,_=e[3]&&bl(e);const g=[El,Il],m=[];function y(e,t){return"fight"===e[2]?0:"ranking"===e[2]?1:-1}return~(c=y(e))&&(h=m[c]=g[c](e)),{c(){t=N("div"),_&&_.c(),n=P(),i=N("div"),s=N("button"),s.textContent="Fights",o=P(),a=N("button"),a.textContent="Ranking",l=P(),h&&h.c(),u=R(),A(t,"class","last-updated svelte-je8yy0"),A(s,"class","svelte-je8yy0"),A(a,"class","svelte-je8yy0"),A(i,"class","tab-buttons svelte-je8yy0")},m(r,h){k(r,t,h),_&&_.m(t,null),k(r,n,h),k(r,i,h),b(i,s),b(i,o),b(i,a),k(r,l,h),~c&&m[c].m(r,h),k(r,u,h),d=!0,p||(f=[D(s,"click",e[5]),D(a,"click",e[6])],p=!0)},p(e,[n]){e[3]?_?_.p(e,n):(_=bl(e),_.c(),_.m(t,null)):_&&(_.d(1),_=null);let i=c;c=y(e),c===i?~c&&m[c].p(e,n):(h&&(ue(),fe(m[i],1,1,(()=>{m[i]=null})),de()),~c?(h=m[c],h?h.p(e,n):(h=m[c]=g[c](e),h.c()),pe(h,1),h.m(u.parentNode,u)):h=null)},i(e){d||(pe(h),d=!0)},o(e){fe(h),d=!1},d(e){e&&T(t),_&&_.d(),e&&T(n),e&&T(i),e&&T(l),~c&&m[c].d(e),e&&T(u),p=!1,r(f)}}}function Tl(e,t,n){let i,s=[],r={},o="fight",a=null,l="";function c(){const e=(new Date).getTime(),t=Math.floor((e-a)/1e3);n(3,l=t<60?`${t} seconds ago`:t<3600?`${Math.floor(t/60)} minutes ago`:`${Math.floor(t/3600)} hours ago`)}z((()=>{const e=za(sl,"fightsCompressed"),t=za(sl,"ranking"),o=za(sl,"lastUpdated"),l=Qa(e,(e=>{e.exists()?(n(0,s=[...e.val()]),console.log(s)):console.log("No data available")}),(e=>{console.error(e)})),h=Qa(t,(e=>{e.exists()?(console.log(e.val()),n(1,r=e.val()),console.log(r)):console.log("No ranking data available")}),(e=>{console.error(e)})),u=Qa(o,(e=>{e.exists()?n(4,a=1e3*e.val()):console.log("No lastUpdated data available")}),(e=>{console.error(e)}));return i=setInterval((()=>{c(),ee()}),1e4),()=>{Ja(e,"value",l),Ja(t,"value",h),Ja(o,"value",u),clearInterval(i)}}));return e.$$.update=()=>{16&e.$$.dirty&&a&&c()},[s,r,o,l,a,()=>n(2,o="fight"),()=>n(2,o="ranking")]}class Sl extends be{constructor(e){super(),we(this,e,Tl,kl,a,{})}}function Nl(t){let n;return{c(){n=N("div"),n.innerHTML='<div class="fighter-container red svelte-1un3nd6"><img src="../images/1.png" alt="Fighter Red" class="fighter red svelte-1un3nd6"/> \n        <img src="../images/bg-name-red.png" alt="bg-name-red" class="bg-name svelte-1un3nd6"/> \n        <p class="name red svelte-1un3nd6">WRESTLER1</p></div> \n    <div class="fighter-container blue svelte-1un3nd6"><img src="../images/2.png" alt="Fighter Blue" class="fighter blue svelte-1un3nd6"/> \n        <img src="../images/bg-name-blue.png" alt="bg-name-blue" class="bg-name svelte-1un3nd6"/> \n        <p class="name blue svelte-1un3nd6">WRESTLER2</p></div>',A(n,"class","background svelte-1un3nd6")},m(e,t){k(e,n,t)},p:e,i:e,o:e,d(e){e&&T(n)}}}class xl extends be{constructor(e){super(),we(this,e,null,Nl,a,{})}}function Pl(t){let n,i,s,r;return n=new Be({props:{path:"/",component:Sl}}),s=new Be({props:{path:"/versus-screen",component:xl}}),{c(){ye(n.$$.fragment),i=P(),ye(s.$$.fragment)},m(e,t){ve(n,e,t),k(e,i,t),ve(s,e,t),r=!0},p:e,i(e){r||(pe(n.$$.fragment,e),pe(s.$$.fragment,e),r=!0)},o(e){fe(n.$$.fragment,e),fe(s.$$.fragment,e),r=!1},d(e){Ce(n,e),e&&T(i),Ce(s,e)}}}function Rl(e){let t,n;return t=new st({props:{$$slots:{default:[Pl]},$$scope:{ctx:e}}}),{c(){ye(t.$$.fragment)},m(e,i){ve(t,e,i),n=!0},p(e,[n]){const i={};1&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(pe(t.$$.fragment,e),n=!0)},o(e){fe(t.$$.fragment,e),n=!1},d(e){Ce(t,e)}}}return new class extends be{constructor(e){super(),we(this,e,null,Rl,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
