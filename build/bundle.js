var app=function(){"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function i(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(i)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l;function c(e,t){return l||(l=document.createElement("a")),l.href=t,e===l.href}function h(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}function u(e,t,n){e.$$.on_destroy.push(h(t,n))}function d(e,t,n,i){if(e){const s=p(e,t,n,i);return e[0](s)}}function p(e,t,i,s){return e[1]&&s?n(i.ctx.slice(),e[1](s(t))):i.ctx}function f(e,t,n,i){if(e[2]&&i){const s=e[2](i(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|s[i];return e}return t.dirty|s}return t.dirty}function _(e,t,n,i,s,r){if(s){const o=p(t,n,i,r);e.p(o,s)}}function g(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function m(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}const y="undefined"!=typeof window;let v=y?()=>window.performance.now():()=>Date.now(),C=y?e=>requestAnimationFrame(e):e;const w=new Set;function b(e){w.forEach((t=>{t.c(e)||(w.delete(t),t.f())})),0!==w.size&&C(b)}function I(e){let t;return 0===w.size&&C(b),{promise:new Promise((n=>{w.add(t={c:e,f:n})})),abort(){w.delete(t)}}}function E(e,t){e.appendChild(t)}function k(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function T(e){const t=P("style");return function(e,t){E(e.head||e,t),t.sheet}(k(e),t),t.sheet}function S(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function x(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function P(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function D(){return R(" ")}function A(){return R("")}function O(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function L(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function F(e,t){t=""+t,e.data!==t&&(e.data=t)}function M(e,t){e.value=null==t?"":t}function $(e,t,n){e.classList[n?"add":"remove"](t)}function q(e,t){return new e(t)}const U=new Map;let W,j=0;function B(e,t,n,i,s,r,o,a=0){const l=16.666/i;let c="{\n";for(let e=0;e<=1;e+=l){const i=t+(n-t)*r(e);c+=100*e+`%{${o(i,1-i)}}\n`}const h=c+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(h)}_${a}`,d=k(e),{stylesheet:p,rules:f}=U.get(d)||function(e,t){const n={stylesheet:T(t),rules:{}};return U.set(e,n),n}(d,e);f[u]||(f[u]=!0,p.insertRule(`@keyframes ${u} ${h}`,p.cssRules.length));const _=e.style.animation||"";return e.style.animation=`${_?`${_}, `:""}${u} ${i}ms linear ${s}ms 1 both`,j+=1,u}function H(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),s=n.length-i.length;s&&(e.style.animation=i.join(", "),j-=s,j||C((()=>{j||(U.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&N(t)})),U.clear())})))}function z(e){W=e}function V(){if(!W)throw new Error("Function called outside component initialization");return W}function Y(e){V().$$.on_mount.push(e)}function K(e,t){return V().$$.context.set(e,t),t}function G(e){return V().$$.context.get(e)}const Q=[],J=[];let X=[];const Z=[],ee=Promise.resolve();let te=!1;function ne(){te||(te=!0,ee.then(ae))}function ie(e){X.push(e)}const se=new Set;let re,oe=0;function ae(){if(0!==oe)return;const e=W;do{try{for(;oe<Q.length;){const e=Q[oe];oe++,z(e),le(e.$$)}}catch(e){throw Q.length=0,oe=0,e}for(z(null),Q.length=0,oe=0;J.length;)J.pop()();for(let e=0;e<X.length;e+=1){const t=X[e];se.has(t)||(se.add(t),t())}X.length=0}while(Q.length);for(;Z.length;)Z.pop()();te=!1,se.clear(),z(e)}function le(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}function ce(){return re||(re=Promise.resolve(),re.then((()=>{re=null}))),re}function he(e,t,n){e.dispatchEvent(function(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,i,t),s}(`${t?"intro":"outro"}${n}`))}const ue=new Set;let de;function pe(){de={r:0,c:[],p:de}}function fe(){de.r||r(de.c),de=de.p}function _e(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function ge(e,t,n,i){if(e&&e.o){if(ue.has(e))return;ue.add(e),de.c.push((()=>{ue.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const me={duration:0};function ye(e,t){const n=t.token={};function i(e,i,s,r){if(t.token!==n)return;t.resolved=r;let o=t.ctx;void 0!==s&&(o=o.slice(),o[s]=r);const a=e&&(t.current=e)(o);let l=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==i&&e&&(pe(),ge(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),fe())})):t.block.d(1),a.c(),_e(a,1),a.m(t.mount(),t.anchor),l=!0),t.block=a,t.blocks&&(t.blocks[i]=a),l&&ae()}if(!(s=e)||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof s.then){if(t.current!==t.then)return i(t.then,1,t.value,e),!0;t.resolved=e}else{const n=V();if(e.then((e=>{z(n),i(t.then,1,t.value,e),z(null)}),(e=>{if(z(n),i(t.catch,2,t.error,e),z(null),!t.hasCatch)throw e})),t.current!==t.pending)return i(t.pending,0),!0}var s}function ve(e){return"object"==typeof e&&null!==e?e:{}}function Ce(e){e&&e.c()}function we(e,t,n,s){const{fragment:a,after_update:l}=e.$$;a&&a.m(t,n),s||ie((()=>{const t=e.$$.on_mount.map(i).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),l.forEach(ie)}function be(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];X.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),X=t}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(t,n,i,o,a,l,c,h=[-1]){const u=W;z(t);const d=t.$$={fragment:null,ctx:[],props:l,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:s(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};c&&c(d.root);let p=!1;if(d.ctx=i?i(t,n.props||{},((e,n,...i)=>{const s=i.length?i[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(Q.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(N)}else d.fragment&&d.fragment.c();n.intro&&_e(t.$$.fragment),we(t,n.target,n.anchor,n.customElement),ae()}z(u)}class Ee{$destroy(){be(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const e=i.indexOf(n);-1!==e&&i.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ke={},Te={},Se={},Ne=/^:(.+)/,xe=e=>e.replace(/(^\/+|\/+$)/g,"").split("/"),Pe=e=>e.replace(/(^\/+|\/+$)/g,""),Re=(e,t)=>({route:e,score:e.default?0:xe(e.path).reduce(((e,t)=>(e+=4,""===t?e+=1:Ne.test(t)?e+=2:"*"===t[0]?e-=5:e+=3,e)),0),index:t}),De=(e,t)=>{let n,i;const[s]=t.split("?"),r=xe(s),o=""===r[0],a=(e=>e.map(Re).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)))(e);for(let e=0,s=a.length;e<s;e++){const s=a[e].route;let l=!1;if(s.default){i={route:s,params:{},uri:t};continue}const c=xe(s.path),h={},u=Math.max(r.length,c.length);let d=0;for(;d<u;d++){const e=c[d],t=r[d];if(e&&"*"===e[0]){h["*"===e?"*":e.slice(1)]=r.slice(d).map(decodeURIComponent).join("/");break}if(void 0===t){l=!0;break}const n=Ne.exec(e);if(n&&!o){const e=decodeURIComponent(t);h[n[1]]=e}else if(e!==t){l=!0;break}}if(!l){n={route:s,params:h,uri:"/"+r.slice(0,d).join("/")};break}}return n||i||null},Ae=(e,t)=>`${Pe("/"===t?e:`${Pe(e)}/${Pe(t)}`)}/`,Oe=()=>"undefined"!=typeof window&&"document"in window&&"location"in window,Le=e=>({params:4&e}),Fe=e=>({params:e[2]});function Me(e){let t,n,i,s;const r=[qe,$e],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=r[t](e),{c(){n.c(),i=A()},m(e,n){o[t].m(e,n),S(e,i,n),s=!0},p(e,s){let l=t;t=a(e),t===l?o[t].p(e,s):(pe(),ge(o[l],1,1,(()=>{o[l]=null})),fe(),n=o[t],n?n.p(e,s):(n=o[t]=r[t](e),n.c()),_e(n,1),n.m(i.parentNode,i))},i(e){s||(_e(n),s=!0)},o(e){ge(n),s=!1},d(e){o[t].d(e),e&&N(i)}}}function $e(e){let t;const n=e[8].default,i=d(n,e,e[7],Fe);return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,s){i&&i.p&&(!t||132&s)&&_(i,n,e,e[7],t?f(n,e[7],s,Le):g(e[7]),Fe)},i(e){t||(_e(i,e),t=!0)},o(e){ge(i,e),t=!1},d(e){i&&i.d(e)}}}function qe(e){let t,n,i,s={ctx:e,current:null,token:null,hasCatch:!1,pending:je,then:We,catch:Ue,value:12,blocks:[,,,]};return ye(n=e[0],s),{c(){t=A(),s.block.c()},m(e,n){S(e,t,n),s.block.m(e,s.anchor=n),s.mount=()=>t.parentNode,s.anchor=t,i=!0},p(t,i){e=t,s.ctx=e,1&i&&n!==(n=e[0])&&ye(n,s)||function(e,t,n){const i=t.slice(),{resolved:s}=e;e.current===e.then&&(i[e.value]=s),e.current===e.catch&&(i[e.error]=s),e.block.p(i,n)}(s,e,i)},i(e){i||(_e(s.block),i=!0)},o(e){for(let e=0;e<3;e+=1){ge(s.blocks[e])}i=!1},d(e){e&&N(t),s.block.d(e),s.token=null,s=null}}}function Ue(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function We(e){let t,i,s;const r=[e[2],e[3]];var o=e[12]?.default||e[12];function a(e){let t={};for(let e=0;e<r.length;e+=1)t=n(t,r[e]);return{props:t}}return o&&(t=q(o,a())),{c(){t&&Ce(t.$$.fragment),i=A()},m(e,n){t&&we(t,e,n),S(e,i,n),s=!0},p(e,n){const s=12&n?function(e,t){const n={},i={},s={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const e in o)e in a||(i[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[r]=a}else for(const e in o)s[e]=1}for(const e in i)e in n||(n[e]=void 0);return n}(r,[4&n&&ve(e[2]),8&n&&ve(e[3])]):{};if(1&n&&o!==(o=e[12]?.default||e[12])){if(t){pe();const e=t;ge(e.$$.fragment,1,0,(()=>{be(e,1)})),fe()}o?(t=q(o,a()),Ce(t.$$.fragment),_e(t.$$.fragment,1),we(t,i.parentNode,i)):t=null}else o&&t.$set(s)},i(e){s||(t&&_e(t.$$.fragment,e),s=!0)},o(e){t&&ge(t.$$.fragment,e),s=!1},d(e){e&&N(i),t&&be(t,e)}}}function je(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function Be(e){let t,n,i=e[1]&&e[1].route===e[5]&&Me(e);return{c(){i&&i.c(),t=A()},m(e,s){i&&i.m(e,s),S(e,t,s),n=!0},p(e,[n]){e[1]&&e[1].route===e[5]?i?(i.p(e,n),2&n&&_e(i,1)):(i=Me(e),i.c(),_e(i,1),i.m(t.parentNode,t)):i&&(pe(),ge(i,1,1,(()=>{i=null})),fe())},i(e){n||(_e(i),n=!0)},o(e){ge(i),n=!1},d(e){i&&i.d(e),e&&N(t)}}}function He(e,t,i){let s,{$$slots:r={},$$scope:o}=t,{path:a=""}=t,{component:l=null}=t,c={},h={};const{registerRoute:d,unregisterRoute:p,activeRoute:f}=G(Te);u(e,f,(e=>i(1,s=e)));const _={path:a,default:""===a};var g;return d(_),g=()=>{p(_)},V().$$.on_destroy.push(g),e.$$set=e=>{i(11,t=n(n({},t),m(e))),"path"in e&&i(6,a=e.path),"component"in e&&i(0,l=e.component),"$$scope"in e&&i(7,o=e.$$scope)},e.$$.update=()=>{if(s&&s.route===_){i(2,c=s.params);const{component:e,path:n,...r}=t;i(3,h=r),e&&(e.toString().startsWith("class ")?i(0,l=e):i(0,l=e())),Oe()&&!s.preserveScroll&&window?.scrollTo(0,0)}},t=m(t),[l,s,c,h,f,_,a,o,r]}class ze extends Ee{constructor(e){super(),Ie(this,e,He,Be,a,{path:6,component:0})}}const Ve=[];function Ye(t,n=e){let i;const s=new Set;function r(e){if(a(t,e)&&(t=e,i)){const e=!Ve.length;for(const e of s)e[1](),Ve.push(e,t);if(e){for(let e=0;e<Ve.length;e+=2)Ve[e][0](Ve[e+1]);Ve.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(o,a=e){const l=[o,a];return s.add(l),1===s.size&&(i=n(r)||e),o(t),()=>{s.delete(l),0===s.size&&i&&(i(),i=null)}}}}function Ke(t,n,i){const s=!Array.isArray(t),a=s?[t]:t,l=n.length<2;return c=t=>{let i=!1;const c=[];let u=0,d=e;const p=()=>{if(u)return;d();const i=n(s?c[0]:c,t);l?t(i):d=o(i)?i:e},f=a.map(((e,t)=>h(e,(e=>{c[t]=e,u&=~(1<<t),i&&p()}),(()=>{u|=1<<t}))));return i=!0,p(),function(){r(f),d(),i=!1}},{subscribe:Ye(i,c).subscribe};var c}const Ge=e=>({...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}),Qe=(e=>{const t=[];let n=Ge(e);return{get location(){return n},listen(i){t.push(i);const s=()=>{n=Ge(e),i({location:n,action:"POP"})};return e.addEventListener("popstate",s),()=>{e.removeEventListener("popstate",s);const n=t.indexOf(i);t.splice(n,1)}},navigate(i,{state:s,replace:r=!1,preserveScroll:o=!1}={}){s={...s,key:Date.now()+""};try{r?e.history.replaceState(s,"",i):e.history.pushState(s,"",i)}catch(t){e.location[r?"replace":"assign"](i)}n=Ge(e),t.forEach((e=>e({location:n,action:"PUSH",preserveScroll:o}))),document.activeElement.blur()}}})(Oe()?window:((e="/")=>{let t=0;const n=[{pathname:e,search:""}],i=[];return{get location(){return n[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return n},get index(){return t},get state(){return i[t]},pushState(e,s,r){const[o,a=""]=r.split("?");t++,n.push({pathname:o,search:a}),i.push(e)},replaceState(e,s,r){const[o,a=""]=r.split("?");n[t]={pathname:o,search:a},i[t]=e}}}})()),Je=e=>({route:4&e,location:2&e}),Xe=e=>({route:e[2]&&e[2].uri,location:e[1]}),Ze=e=>({route:4&e,location:2&e}),et=e=>({route:e[2]&&e[2].uri,location:e[1]});function tt(e){let t;const n=e[15].default,i=d(n,e,e[14],Xe);return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,s){i&&i.p&&(!t||16390&s)&&_(i,n,e,e[14],t?f(n,e[14],s,Je):g(e[14]),Xe)},i(e){t||(_e(i,e),t=!0)},o(e){ge(i,e),t=!1},d(e){i&&i.d(e)}}}function nt(t){let n,i,s=t[1].pathname,r=it(t);return{c(){r.c(),n=A()},m(e,t){r.m(e,t),S(e,n,t),i=!0},p(t,i){2&i&&a(s,s=t[1].pathname)?(pe(),ge(r,1,1,e),fe(),r=it(t),r.c(),_e(r,1),r.m(n.parentNode,n)):r.p(t,i)},i(e){i||(_e(r),i=!0)},o(e){ge(r),i=!1},d(e){e&&N(n),r.d(e)}}}function it(n){let i,s,a,l;const c=n[15].default,h=d(c,n,n[14],et);return{c(){i=P("div"),h&&h.c()},m(e,t){S(e,i,t),h&&h.m(i,null),l=!0},p(e,t){h&&h.p&&(!l||16390&t)&&_(h,c,e,e[14],l?f(c,e[14],t,Ze):g(e[14]),et)},i(r){l||(_e(h,r),ie((()=>{l&&(a&&a.end(1),s=function(n,i,s){const r={direction:"in"};let a,l,c=i(n,s,r),h=!1,u=0;function d(){a&&H(n,a)}function p(){const{delay:i=0,duration:s=300,easing:r=t,tick:o=e,css:p}=c||me;p&&(a=B(n,0,1,s,i,r,p,u++)),o(0,1);const f=v()+i,_=f+s;l&&l.abort(),h=!0,ie((()=>he(n,!0,"start"))),l=I((e=>{if(h){if(e>=_)return o(1,0),he(n,!0,"end"),d(),h=!1;if(e>=f){const t=r((e-f)/s);o(t,1-t)}}return h}))}let f=!1;return{start(){f||(f=!0,H(n),o(c)?(c=c(r),ce().then(p)):p())},invalidate(){f=!1},end(){h&&(d(),h=!1)}}}(i,n[3],{}),s.start())})),l=!0)},o(c){ge(h,c),s&&s.invalidate(),a=function(n,i,s){const a={direction:"out"};let l,c=i(n,s,a),h=!0;const u=de;function d(){const{delay:i=0,duration:s=300,easing:o=t,tick:a=e,css:d}=c||me;d&&(l=B(n,1,0,s,i,o,d));const p=v()+i,f=p+s;ie((()=>he(n,!1,"start"))),I((e=>{if(h){if(e>=f)return a(0,1),he(n,!1,"end"),--u.r||r(u.c),!1;if(e>=p){const t=o((e-p)/s);a(1-t,t)}}return h}))}return u.r+=1,o(c)?ce().then((()=>{c=c(a),d()})):d(),{end(e){e&&c.tick&&c.tick(1,0),h&&(l&&H(n,l),h=!1)}}}(i,n[3],{}),l=!1},d(e){e&&N(i),h&&h.d(e),e&&a&&a.end()}}}function st(e){let t,n,i,s;const r=[nt,tt],o=[];function a(e,t){return e[0]?0:1}return t=a(e),n=o[t]=r[t](e),{c(){n.c(),i=A()},m(e,n){o[t].m(e,n),S(e,i,n),s=!0},p(e,[s]){let l=t;t=a(e),t===l?o[t].p(e,s):(pe(),ge(o[l],1,1,(()=>{o[l]=null})),fe(),n=o[t],n?n.p(e,s):(n=o[t]=r[t](e),n.c()),_e(n,1),n.m(i.parentNode,i))},i(e){s||(_e(n),s=!0)},o(e){ge(n),s=!1},d(e){o[t].d(e),e&&N(i)}}}function rt(e,t,n){let i,s,r,o,{$$slots:a={},$$scope:l}=t,{basepath:c="/"}=t,{url:h=null}=t,{viewtransition:d=null}=t,{history:p=Qe}=t;K(Se,p);const f=G(ke),_=G(Te),g=Ye([]);u(e,g,(e=>n(12,s=e)));const m=Ye(null);u(e,m,(e=>n(2,o=e)));let y=!1;const v=f||Ye(h?{pathname:h}:p.location);u(e,v,(e=>n(1,i=e)));const C=_?_.routerBase:Ye({path:c,uri:c});u(e,C,(e=>n(13,r=e)));const w=Ke([C,m],(([e,t])=>{if(!t)return e;const{path:n}=e,{route:i,uri:s}=t;return{path:i.default?n:i.path.replace(/\*.*$/,""),uri:s}}));let b=!1;return f||(Y((()=>p.listen((e=>{n(11,b=e.preserveScroll||!1),v.set(e.location)})))),K(ke,v)),K(Te,{activeRoute:m,base:C,routerBase:w,registerRoute:e=>{const{path:t}=r;let{path:n}=e;if(e._path=n,e.path=Ae(t,n),"undefined"==typeof window){if(y)return;const t=De([e],i.pathname);t&&(m.set(t),y=!0)}else g.update((t=>[...t,e]))},unregisterRoute:e=>{g.update((t=>t.filter((t=>t!==e))))}}),e.$$set=e=>{"basepath"in e&&n(8,c=e.basepath),"url"in e&&n(9,h=e.url),"viewtransition"in e&&n(0,d=e.viewtransition),"history"in e&&n(10,p=e.history),"$$scope"in e&&n(14,l=e.$$scope)},e.$$.update=()=>{if(8192&e.$$.dirty){const{path:e}=r;g.update((t=>t.map((t=>Object.assign(t,{path:Ae(e,t._path)})))))}if(6146&e.$$.dirty){const e=De(s,i.pathname);m.set({...e,preserveScroll:b})}},[d,i,o,(e,t,n)=>{const i=d(n);return"function"==typeof i?.fn?i.fn(e,i):i},g,m,v,C,c,h,p,b,s,r,l,a]}class ot extends Ee{constructor(e){super(),Ie(this,e,rt,st,a,{basepath:8,url:9,viewtransition:0,history:10})}}
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
     */const at=!1,lt="${JSCORE_VERSION}",ct=function(e,t){if(!e)throw ht(t)},ht=function(e){return new Error("Firebase Database ("+lt+") INTERNAL ASSERT FAILED: "+e)},ut=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},dt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ut(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new pt;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
     */class pt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ft=function(e){const t=ut(e);return dt.encodeByteArray(t,!0)},_t=function(e){return ft(e).replace(/\./g,"")},gt=function(e){try{return dt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function mt(e){return yt(void 0,e)}function yt(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=yt(e[n],t[n]));return e}
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
const vt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Ct=()=>{try{return vt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&gt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},wt=e=>{const t=(e=>{var t,n;return null===(n=null===(t=Ct())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},bt=()=>{var e;return null===(e=Ct())||void 0===e?void 0:e.config};
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
class It{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
     */function Et(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function kt(){return!0===at}class Tt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,St.prototype.create)}}class St{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(Nt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new Tt(i,o,n)}}const Nt=/\{\$([^}]+)}/g;
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
     */function xt(e){return JSON.parse(e)}function Pt(e){return JSON.stringify(e)}
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
     */const Rt=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=xt(gt(r[0])||""),n=xt(gt(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}};
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
function Dt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function At(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Ot(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Lt(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function Ft(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Mt(n)&&Mt(r)){if(!Ft(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Mt(e){return null!==e&&"object"==typeof e}
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
class $t{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function qt(e,t){return`${e} failed: ${t} argument `}
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
     */const Ut=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function Wt(e){return e&&e._delegate?e._delegate:e}class jt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const Bt="[DEFAULT]";
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
     */class Ht{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new It;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Bt?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class zt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ht(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var Vt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Vt||(Vt={}));const Yt={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},Kt=Vt.INFO,Gt={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},Qt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=Gt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class Jt{constructor(e){this.name=e,this._logLevel=Kt,this._logHandler=Qt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Vt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Yt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...e),this._logHandler(this,Vt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...e),this._logHandler(this,Vt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...e),this._logHandler(this,Vt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...e),this._logHandler(this,Vt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...e),this._logHandler(this,Vt.ERROR,...e)}}const Xt=(e,t)=>t.some((t=>e instanceof t));let Zt,en;const tn=new WeakMap,nn=new WeakMap,sn=new WeakMap,rn=new WeakMap,on=new WeakMap;let an={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return nn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||sn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ln(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(en||(en=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(un(this),t),hn(tn.get(this))}:function(...t){return hn(e.apply(un(this),t))}:function(t,...n){const i=e.call(un(this),t,...n);return sn.set(i,t.sort?t.sort():[t]),hn(i)}}function cn(e){return"function"==typeof e?ln(e):(e instanceof IDBTransaction&&function(e){if(nn.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));nn.set(e,t)}(e),Xt(e,Zt||(Zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,an):e)}function hn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(hn(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&tn.set(t,e)})).catch((()=>{})),on.set(t,e),t}(e);if(rn.has(e))return rn.get(e);const t=cn(e);return t!==e&&(rn.set(e,t),on.set(t,e)),t}const un=e=>on.get(e);const dn=["get","getKey","getAll","getAllKeys","count"],pn=["put","add","delete","clear"],fn=new Map;function _n(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(fn.get(t))return fn.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=pn.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!dn.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return fn.set(t,r),r}an=(e=>({...e,get:(t,n,i)=>_n(t,n)||e.get(t,n,i),has:(t,n)=>!!_n(t,n)||e.has(t,n)}))(an);
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
class gn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const mn="@firebase/app",yn="0.9.18",vn=new Jt("@firebase/app"),Cn="[DEFAULT]",wn={[mn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},bn=new Map,In=new Map;function En(e,t){try{e.container.addComponent(t)}catch(n){vn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function kn(e){const t=e.name;if(In.has(t))return vn.debug(`There were multiple attempts to register component ${t}.`),!1;In.set(t,e);for(const t of bn.values())En(t,e);return!0}
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
const Tn=new St("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Sn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new jt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}
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
     */function Nn(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Cn,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(n||(n=bt()),!n)throw Tn.create("no-options");const r=bn.get(s);if(r){if(Ft(n,r.options)&&Ft(i,r.config))return r;throw Tn.create("duplicate-app",{appName:s})}const o=new zt(s);for(const e of In.values())o.addComponent(e);const a=new Sn(n,i,o);return bn.set(s,a),a}function xn(e,t,n){var i;let s=null!==(i=wn[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void vn.warn(e.join(" "))}kn(new jt(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
     */const Pn="firebase-heartbeat-database",Rn=1,Dn="firebase-heartbeat-store";let An=null;function On(){return An||(An=function(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=hn(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(hn(o.result),e.oldVersion,e.newVersion,hn(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(Pn,Rn,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Dn)}}).catch((e=>{throw Tn.create("idb-open",{originalErrorMessage:e.message})}))),An}async function Ln(e,t){try{const n=(await On()).transaction(Dn,"readwrite"),i=n.objectStore(Dn);await i.put(t,Fn(e)),await n.done}catch(e){if(e instanceof Tt)vn.warn(e.message);else{const t=Tn.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});vn.warn(t.message)}}}function Fn(e){return`${e.name}!${e.options.appId}`}
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
     */class Mn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=$n();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=$n(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Un(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Un(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=_t(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $n(){return(new Date).toISOString().substring(0,10)}class qn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await On();return await t.transaction(Dn).objectStore(Dn).get(Fn(e))}catch(e){if(e instanceof Tt)vn.warn(e.message);else{const t=Tn.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});vn.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ln(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ln(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Un(e){return _t(JSON.stringify({version:2,heartbeats:e})).length}
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
     */var Wn;Wn="",kn(new jt("platform-logger",(e=>new gn(e)),"PRIVATE")),kn(new jt("heartbeat",(e=>new Mn(e)),"PRIVATE")),xn(mn,yn,Wn),xn(mn,yn,"esm2017"),xn("fire-js","");
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
xn("firebase","10.3.1","app");const jn="@firebase/database",Bn="1.0.1";
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
let Hn="";
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
class zn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:xt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
     */class Vn{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
     */const Yn=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new zn(t)}}catch(e){}return new Vn},Kn=Yn("localStorage"),Gn=Yn("sessionStorage"),Qn=new Jt("@firebase/database"),Jn=function(){let e=1;return function(){return e++}}(),Xn=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,ct(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new $t;n.update(t);const i=n.digest();return dt.encodeByteArray(i)},Zn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Zn.apply(null,i):t+="object"==typeof i?Pt(i):i,t+=" "}return t};let ei=null,ti=!0;const ni=function(...e){var t,n;if(!0===ti&&(ti=!1,null===ei&&!0===Gn.get("logging_enabled")&&(t=!0,ct(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Qn.logLevel=Vt.VERBOSE,ei=Qn.log.bind(Qn),n&&Gn.set("logging_enabled",!0)):"function"==typeof t?ei=t:(ei=null,Gn.remove("logging_enabled")))),ei){const t=Zn.apply(null,e);ei(t)}},ii=function(e){return function(...t){ni(e,...t)}},si=function(...e){const t="FIREBASE INTERNAL ERROR: "+Zn(...e);Qn.error(t)},ri=function(...e){const t=`FIREBASE FATAL ERROR: ${Zn(...e)}`;throw Qn.error(t),new Error(t)},oi=function(...e){const t="FIREBASE WARNING: "+Zn(...e);Qn.warn(t)},ai=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},li="[MIN_NAME]",ci="[MAX_NAME]",hi=function(e,t){if(e===t)return 0;if(e===li||t===ci)return-1;if(t===li||e===ci)return 1;{const n=yi(e),i=yi(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},ui=function(e,t){return e===t?0:e<t?-1:1},di=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Pt(t))},pi=function(e){if("object"!=typeof e||null===e)return Pt(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Pt(t[i]),n+=":",n+=pi(e[t[i]]);return n+="}",n},fi=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function _i(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const gi=function(e){ct(!ai(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const mi=new RegExp("^-?(0*)\\d{1,10}$"),yi=function(e){if(mi.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},vi=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw oi("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ci=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class wi{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){oi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
     */class bi{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(ni("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',oi(e)}}class Ii{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ii.OWNER="owner";
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
const Ei=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ki="ac",Ti="websocket",Si="long_polling";
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
class Ni{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function xi(e,t,n){let i;if(ct("string"==typeof t,"typeof type must == string"),ct("object"==typeof n,"typeof params must == object"),t===Ti)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Si)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return _i(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
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
     */class Pi{constructor(){this.counters_={}}incrementCounter(e,t=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return mt(this.counters_)}}
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
     */const Ri={},Di={};function Ai(e){const t=e.toString();return Ri[t]||(Ri[t]=new Pi),Ri[t]}
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
class Oi{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&vi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
     */const Li="start";class Fi{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ii(e),this.stats_=Ai(t),this.urlFn=e=>(this.appCheckToken&&(e[ki]=this.appCheckToken),xi(t,Si,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Oi(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mi(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Li)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Li]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[ki]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Ei.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fi.forceAllow_=!0}static forceDisallow(){Fi.forceDisallow_=!0}static isAvailable(){return!!Fi.forceAllow_||!(Fi.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ft(t),i=fi(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Pt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Mi{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Mi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){ni("frame writing exception"),e.stack&&ni(e.stack),ni(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||ni("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ni("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
     */let $i=null;"undefined"!=typeof MozWebSocket?$i=MozWebSocket:"undefined"!=typeof WebSocket&&($i=WebSocket);class qi{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ii(this.connId),this.stats_=Ai(t),this.connURL=qi.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&Ei.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[ki]=i),s&&(r.p=s),xi(e,Ti,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{let e;kt(),this.mySock=new $i(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==$i&&!qi.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||!0===Kn.get("previous_websocket_failure")}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=xt(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ct(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=fi(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qi.responsesRequiredToBeHealthy=2,qi.healthyTimeout=3e4;
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
class Ui{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fi,qi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=qi&&qi.isAvailable();let n=t&&!qi.previouslyFailed();if(e.webSocketOnly&&(t||oi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qi];else{const e=this.transports_=[];for(const t of Ui.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Ui.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ui.globalTransportInitialized_=!1;class Wi{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ii("c:"+this.id+":"),this.transportManager_=new Ui(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ci((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=di("t",e),n=di("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=di("t",e),n=di("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=di("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?si("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):si("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&oi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ci((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ci((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
     */class ji{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
     */class Bi{constructor(e){this.allowedEvents_=e,this.listeners_={},ct(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){ct(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
     */class Hi extends Bi{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Et()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Hi}getInitialEvent(e){return ct("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
     */const zi=32,Vi=768;class Yi{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ki(){return new Yi("")}function Gi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Qi(e){return e.pieces_.length-e.pieceNum_}function Ji(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Yi(e.pieces_,t)}function Xi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Zi(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function es(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Yi(t,0)}function ts(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Yi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Yi(n,0)}function ns(e){return e.pieceNum_>=e.pieces_.length}function is(e,t){const n=Gi(e),i=Gi(t);if(null===n)return t;if(n===i)return is(Ji(e),Ji(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ss(e,t){if(Qi(e)!==Qi(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function rs(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Qi(e)>Qi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class os{constructor(e,t){this.errorPrefix_=t,this.parts_=Zi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ut(this.parts_[e]);as(this)}}function as(e){if(e.byteLength_>Vi)throw new Error(e.errorPrefix_+"has a key path longer than "+Vi+" bytes ("+e.byteLength_+").");if(e.parts_.length>zi)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zi+") or object contains a cycle "+ls(e))}function ls(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
     */class cs extends Bi{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new cs}getInitialEvent(e){return ct("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
     */const hs=1e3;class us extends ji{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=us.nextPersistentConnectionId_++,this.log_=ii("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hs,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!kt())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cs.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Pt(s)),ct(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new It,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),ct(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ct(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;us.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Dt(e,"w")){const n=At(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();oi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=Rt(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=Rt(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),ct(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pt(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):si("Unrecognized action received from server: "+Pt(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ct(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=hs),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+us.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){ct(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?ni("getToken() completed but was canceled"):(ni("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Wi(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{oi(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&oi(e),a())}}}interrupt(e){ni("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ni("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ot(this.interruptReasons_)&&(this.reconnectDelay_=hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>pi(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Yi(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){ni("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ni("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Hn.replace(/\./g,"-")]=1,Et()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hi.getInstance().currentlyOnline();return Ot(this.interruptReasons_)&&e}}us.nextPersistentConnectionId_=0,us.nextConnectionId_=0;
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
class ds{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ds(e,t)}}
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
     */class ps{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ds(li,e),i=new ds(li,t);return 0!==this.compare(n,i)}minPost(){return ds.MIN}}
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
     */let fs;class _s extends ps{static get __EMPTY_NODE(){return fs}static set __EMPTY_NODE(e){fs=e}compare(e,t){return hi(e.name,t.name)}isDefinedOn(e){throw ht("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ds.MIN}maxPost(){return new ds(ci,fs)}makePost(e,t){return ct("string"==typeof e,"KeyIndex indexValue must always be a string."),new ds(e,fs)}toString(){return".key"}}const gs=new _s;
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
     */class ms{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ys{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:ys.RED,this.left=null!=i?i:vs.EMPTY_NODE,this.right=null!=s?s:vs.EMPTY_NODE}copy(e,t,n,i,s){return new ys(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return vs.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return vs.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ys.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ys.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ys.RED=!0,ys.BLACK=!1;class vs{constructor(e,t=vs.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new vs(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ys.BLACK,null,null))}remove(e){return new vs(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ys.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ms(this.root_,null,this.comparator_,!0,e)}}
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
function Cs(e,t){return hi(e.name,t.name)}function ws(e,t){return hi(e,t)}
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
     */let bs;vs.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new ys(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Is=function(e){return"number"==typeof e?"number:"+gi(e):"string:"+e},Es=function(e){if(e.isLeafNode()){const t=e.val();ct("string"==typeof t||"number"==typeof t||"object"==typeof t&&Dt(t,".sv"),"Priority must be a string or number.")}else ct(e===bs||e.isEmpty(),"priority of unexpected type.");ct(e===bs||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let ks,Ts,Ss;class Ns{constructor(e,t=Ns.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ct(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Es(this.priorityNode_)}static set __childrenNodeConstructor(e){ks=e}static get __childrenNodeConstructor(){return ks}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ns(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ns.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ns(e)?this:".priority"===Gi(e)?this.priorityNode_:Ns.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ns.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Gi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(ct(".priority"!==n||1===Qi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ns.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ji(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Is(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?gi(this.value_):this.value_,this.lazyHash_=Xn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ns.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ns.__childrenNodeConstructor?-1:(ct(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Ns.VALUE_TYPE_ORDER.indexOf(t),s=Ns.VALUE_TYPE_ORDER.indexOf(n);return ct(i>=0,"Unknown leaf type: "+t),ct(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ns.VALUE_TYPE_ORDER=["object","boolean","number","string"];const xs=new class extends ps{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?hi(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ds.MIN}maxPost(){return new ds(ci,new Ns("[PRIORITY-POST]",Ss))}makePost(e,t){const n=Ts(e);return new ds(t,new Ns("[PRIORITY-POST]",n))}toString(){return".priority"}},Ps=Math.log(2);
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
     */class Rs{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ps,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ds=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new ys(a,o.node,ys.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new ys(a,o.node,ys.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new ys(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,ys.BLACK):(a(i,ys.BLACK),a(i,ys.RED))}return r}(new Rs(e.length));return new vs(i||t,r)};
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
     */let As;const Os={};class Ls{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ct(Os&&xs,"ChildrenNode.ts has not been loaded"),As=As||new Ls({".priority":Os},{".priority":xs}),As}get(e){const t=At(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof vs?t:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,t){ct(e!==gs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(ds.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?Ds(n,e.getCompare()):Os;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new Ls(c,l)}addToIndexes(e,t){const n=Lt(this.indexes_,((n,i)=>{const s=At(this.indexSet_,i);if(ct(s,"Missing index implementation for "+i),n===Os){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(ds.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Ds(n,s.getCompare())}return Os}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new ds(e.name,i))),s.insert(e,e.node)}}));return new Ls(n,this.indexSet_)}removeFromIndexes(e,t){const n=Lt(this.indexes_,(n=>{if(n===Os)return n;{const i=t.get(e.name);return i?n.remove(new ds(e.name,i)):n}}));return new Ls(n,this.indexSet_)}}
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
     */let Fs;class Ms{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Es(this.priorityNode_),this.children_.isEmpty()&&ct(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fs||(Fs=new Ms(new vs(ws),null,Ls.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fs}updatePriority(e){return this.children_.isEmpty()?this:new Ms(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Fs:t}}getChild(e){const t=Gi(e);return null===t?this:this.getImmediateChild(t).getChild(Ji(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(ct(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ds(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Fs:this.priorityNode_;return new Ms(i,r,s)}}updateChild(e,t){const n=Gi(e);if(null===n)return t;{ct(".priority"!==Gi(e)||1===Qi(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Ji(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(xs,((r,o)=>{t[r]=o.val(e),n++,s&&Ms.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Is(this.getPriority().val())+":"),this.forEachChild(xs,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Xn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new ds(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ds(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ds(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,ds.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,ds.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$s?-1:0}withIndex(e){if(e===gs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ms(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===gs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(xs),n=t.getIterator(xs);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===gs?null:this.indexMap_.get(e.toString())}}Ms.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const $s=new class extends Ms{constructor(){super(new vs(ws),Ms.EMPTY_NODE,Ls.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ms.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(ds,{MIN:{value:new ds(li,Ms.EMPTY_NODE)},MAX:{value:new ds(ci,$s)}}),_s.__EMPTY_NODE=Ms.EMPTY_NODE,Ns.__childrenNodeConstructor=Ms,bs=$s,function(e){Ss=e}($s);
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
const qs=!0;function Us(e,t=null){if(null===e)return Ms.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),ct(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ns(e,Us(t))}if(e instanceof Array||!qs){let n=Ms.EMPTY_NODE;return _i(e,((t,i)=>{if(Dt(e,t)&&"."!==t.substring(0,1)){const e=Us(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Us(t))}{const n=[];let i=!1;if(_i(e,((e,t)=>{if("."!==e.substring(0,1)){const s=Us(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new ds(e,s)))}})),0===n.length)return Ms.EMPTY_NODE;const s=Ds(n,Cs,(e=>e.name),ws);if(i){const e=Ds(n,xs.getCompare());return new Ms(s,Us(t),new Ls({".priority":e},{".priority":xs}))}return new Ms(s,Us(t),Ls.Default)}}!function(e){Ts=e}(Us);
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
class Ws extends ps{constructor(e){super(),this.indexPath_=e,ct(!ns(e)&&".priority"!==Gi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?hi(e.name,t.name):s}makePost(e,t){const n=Us(e),i=Ms.EMPTY_NODE.updateChild(this.indexPath_,n);return new ds(t,i)}maxPost(){const e=Ms.EMPTY_NODE.updateChild(this.indexPath_,$s);return new ds(ci,e)}toString(){return Zi(this.indexPath_,0).join("/")}}
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
     */const js=new class extends ps{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?hi(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ds.MIN}maxPost(){return ds.MAX}makePost(e,t){const n=Us(e);return new ds(t,n)}toString(){return".value"}};
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
     */function Bs(e){return{type:"value",snapshotNode:e}}function Hs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function zs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Vs(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Ys{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){ct(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(zs(t,o)):ct(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(Hs(t,n)):r.trackChildChange(Vs(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(xs,((e,i)=>{t.hasChild(e)||n.trackChildChange(zs(e,i))})),t.isLeafNode()||t.forEachChild(xs,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(Vs(t,i,s))}else n.trackChildChange(Hs(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ms.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
     */class Ks{constructor(e){this.indexedFilter_=new Ys(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ks.getStartPost_(e),this.endPost_=Ks.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new ds(t,n))||(n=Ms.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Ms.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Ms.EMPTY_NODE);const s=this;return t.forEachChild(xs,((e,t)=>{s.matches(new ds(e,t))||(i=i.updateImmediateChild(e,Ms.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
     */class Gs{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Ks(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new ds(t,n))||(n=Ms.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Ms.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Ms.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Ms.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,Ms.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;ct(o.numChildren()===this.limit_,"");const a=new ds(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:r(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(Vs(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(zs(t,e));const n=o.updateImmediateChild(t,Ms.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=s&&s.trackChildChange(Hs(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&r(l,a)>=0?(null!=s&&(s.trackChildChange(zs(l.name,l.node)),s.trackChildChange(Hs(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Ms.EMPTY_NODE)):e}}
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
     */class Qs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xs}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return ct(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ct(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:li}hasEnd(){return this.endSet_}getIndexEndValue(){return ct(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ct(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return ct(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xs}copy(){const e=new Qs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Js(e){const t={};if(e.isDefault())return t;let n;if(e.index_===xs?n="$priority":e.index_===js?n="$value":e.index_===gs?n="$key":(ct(e.index_ instanceof Ws,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Pt(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Pt(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Pt(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Pt(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Pt(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Xs(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==xs&&(t.i=e.index_.toString()),t}
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
     */class Zs extends ji{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ii("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(ct(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Zs.getListenId_(e,n),o={};this.listens_[r]=o;const a=Js(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),At(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Zs.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Js(e._queryParams),n=e._path.toString(),i=new It;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=xt(o.responseText)}catch(e){oi("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&oi("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
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
     */class er{constructor(){this.rootNode_=Ms.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
     */function tr(){return{value:null,children:new Map}}function nr(e,t,n){if(ns(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Gi(t);e.children.has(i)||e.children.set(i,tr());nr(e.children.get(i),t=Ji(t),n)}}function ir(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
     */(e,((e,i)=>{ir(i,new Yi(t.toString()+"/"+e),n)}))}class sr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_i(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
     */class rr{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sr(e);const n=1e4+2e4*Math.random();Ci(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;_i(e,((e,i)=>{i>0&&Dt(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Ci(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
     */var or;function ar(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(or||(or={}));class lr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=or.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ns(this.path)){if(null!=this.affectedTree.value)return ct(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Yi(e));return new lr(Ki(),t,this.revert)}}return ct(Gi(this.path)===e,"operationForChild called for unrelated child."),new lr(Ji(this.path),this.affectedTree,this.revert)}}
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
     */class cr{constructor(e,t){this.source=e,this.path=t,this.type=or.LISTEN_COMPLETE}operationForChild(e){return ns(this.path)?new cr(this.source,Ki()):new cr(this.source,Ji(this.path))}}
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
     */class hr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=or.OVERWRITE}operationForChild(e){return ns(this.path)?new hr(this.source,Ki(),this.snap.getImmediateChild(e)):new hr(this.source,Ji(this.path),this.snap)}}
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
     */class ur{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=or.MERGE}operationForChild(e){if(ns(this.path)){const t=this.children.subtree(new Yi(e));return t.isEmpty()?null:t.value?new hr(this.source,Ki(),t.value):new ur(this.source,Ki(),t)}return ct(Gi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ur(this.source,Ji(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
     */class dr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ns(e))return this.isFullyInitialized()&&!this.filtered_;const t=Gi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
     */class pr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fr(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw ht("Should only compare child_ events.");const i=new ds(t.childName,t.snapshotNode),s=new ds(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
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
     */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function _r(e,t){return{eventCache:e,serverCache:t}}function gr(e,t,n,i){return _r(new dr(t,n,i),e.serverCache)}function mr(e,t,n,i){return _r(e.eventCache,new dr(t,n,i))}function yr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function vr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
     */let Cr;class wr{constructor(e,t=(()=>(Cr||(Cr=new vs(ui)),Cr))()){this.value=e,this.children=t}static fromObject(e){let t=new wr(null);return _i(e,((e,n)=>{t=t.set(new Yi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ki(),value:this.value};if(ns(e))return null;{const n=Gi(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Ji(e),t);if(null!=s){return{path:ts(new Yi(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ns(e))return this;{const t=Gi(e),n=this.children.get(t);return null!==n?n.subtree(Ji(e)):new wr(null)}}set(e,t){if(ns(e))return new wr(t,this.children);{const n=Gi(e),i=(this.children.get(n)||new wr(null)).set(Ji(e),t),s=this.children.insert(n,i);return new wr(this.value,s)}}remove(e){if(ns(e))return this.children.isEmpty()?new wr(null):new wr(null,this.children);{const t=Gi(e),n=this.children.get(t);if(n){const i=n.remove(Ji(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new wr(null):new wr(this.value,s)}return this}}get(e){if(ns(e))return this.value;{const t=Gi(e),n=this.children.get(t);return n?n.get(Ji(e)):null}}setTree(e,t){if(ns(e))return t;{const n=Gi(e),i=(this.children.get(n)||new wr(null)).setTree(Ji(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new wr(this.value,s)}}fold(e){return this.fold_(Ki(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(ts(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ki(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ns(e))return null;{const i=Gi(e),s=this.children.get(i);return s?s.findOnPath_(Ji(e),ts(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ki(),t)}foreachOnPath_(e,t,n){if(ns(e))return this;{this.value&&n(t,this.value);const i=Gi(e),s=this.children.get(i);return s?s.foreachOnPath_(Ji(e),ts(t,i),n):new wr(null)}}foreach(e){this.foreach_(Ki(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(ts(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
     */class br{constructor(e){this.writeTree_=e}static empty(){return new br(new wr(null))}}function Ir(e,t,n){if(ns(t))return new br(new wr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=is(s,t);return r=r.updateChild(o,n),new br(e.writeTree_.set(s,r))}{const i=new wr(n),s=e.writeTree_.setTree(t,i);return new br(s)}}}function Er(e,t,n){let i=e;return _i(n,((e,n)=>{i=Ir(i,ts(t,e),n)})),i}function kr(e,t){if(ns(t))return br.empty();{const n=e.writeTree_.setTree(t,new wr(null));return new br(n)}}function Tr(e,t){return null!=Sr(e,t)}function Sr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(is(n.path,t)):null}function Nr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(xs,((e,n)=>{t.push(new ds(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new ds(e,n.value))})),t}function xr(e,t){if(ns(t))return e;{const n=Sr(e,t);return new br(null!=n?new wr(n):e.writeTree_.subtree(t))}}function Pr(e){return e.writeTree_.isEmpty()}function Rr(e,t){return Dr(Ki(),e.writeTree_,t)}function Dr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(ct(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Dr(ts(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(ts(e,".priority"),i)),n}}
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
     */function Ar(e,t){return Vr(t,e)}function Or(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));ct(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Lr(t,i.path)?s=!1:rs(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=Mr(e.allWrites,Fr,Ki()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=kr(e.visibleWrites,i.path);else{_i(i.children,(t=>{e.visibleWrites=kr(e.visibleWrites,ts(i.path,t))}))}return!0}return!1}function Lr(e,t){if(e.snap)return rs(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&rs(ts(e.path,n),t))return!0;return!1}function Fr(e){return e.visible}function Mr(e,t,n){let i=br.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)rs(n,e)?(t=is(n,e),i=Ir(i,t,r.snap)):rs(e,n)&&(t=is(e,n),i=Ir(i,Ki(),r.snap.getChild(t)));else{if(!r.children)throw ht("WriteRecord should have .snap or .children");if(rs(n,e))t=is(n,e),i=Er(i,t,r.children);else if(rs(e,n))if(t=is(e,n),ns(t))i=Er(i,Ki(),r.children);else{const e=At(r.children,Gi(t));if(e){const n=e.getChild(Ji(t));i=Ir(i,Ki(),n)}}}}}return i}function $r(e,t,n,i,s){if(i||s){const r=xr(e.visibleWrites,t);if(!s&&Pr(r))return n;if(s||null!=n||Tr(r,Ki())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(rs(e.path,t)||rs(t,e.path))};return Rr(Mr(e.allWrites,r,t),n||Ms.EMPTY_NODE)}return null}{const i=Sr(e.visibleWrites,t);if(null!=i)return i;{const i=xr(e.visibleWrites,t);if(Pr(i))return n;if(null!=n||Tr(i,Ki())){return Rr(i,n||Ms.EMPTY_NODE)}return null}}}function qr(e,t,n,i){return $r(e.writeTree,e.treePath,t,n,i)}function Ur(e,t){return function(e,t,n){let i=Ms.EMPTY_NODE;const s=Sr(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(xs,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=xr(e.visibleWrites,t);return n.forEachChild(xs,((e,t)=>{const n=Rr(xr(s,new Yi(e)),t);i=i.updateImmediateChild(e,n)})),Nr(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Nr(xr(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Wr(e,t,n,i){return function(e,t,n,i,s){ct(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ts(t,n);if(Tr(e.visibleWrites,r))return null;{const t=xr(e.visibleWrites,r);return Pr(t)?s.getChild(n):Rr(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function jr(e,t){return function(e,t){return Sr(e.visibleWrites,t)}(e.writeTree,ts(e.treePath,t))}function Br(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=xr(e.visibleWrites,t),c=Sr(l,Ki());if(null!=c)a=c;else{if(null==n)return[];a=Rr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function Hr(e,t,n){return function(e,t,n,i){const s=ts(t,n),r=Sr(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Rr(xr(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function zr(e,t){return Vr(ts(e.treePath,t),e.writeTree)}function Vr(e,t){return{treePath:e,writeTree:t}}
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
     */class Yr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;ct("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),ct(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Vs(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,zs(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Hs(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw ht("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Vs(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
     */const Kr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Gr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:vr(this.viewCache_),s=Br(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
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
     */function Qr(e,t,n,i,s){const r=new Yr;let o,a;if(n.type===or.OVERWRITE){const l=n;l.source.fromUser?o=Zr(e,t,l.path,l.snap,i,s,r):(ct(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!ns(l.path),o=Xr(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===or.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=ts(n,i);eo(t,Gi(c))&&(a=Zr(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=ts(n,i);eo(t,Gi(c))||(a=Zr(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(ct(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=no(e,t,l.path,l.children,i,s,a,r))}else if(n.type===or.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=jr(i,n))return t;{const a=new Gr(i,t,s),l=t.eventCache.getNode();let c;if(ns(n)||".priority"===Gi(n)){let n;if(t.serverCache.isFullyInitialized())n=qr(i,vr(t));else{const e=t.serverCache.getNode();ct(e instanceof Ms,"serverChildren would be complete if leaf node"),n=Ur(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=Gi(n);let h=Hr(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=l.getImmediateChild(s)),c=null!=h?e.filter.updateChild(l,s,h,Ji(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,Ms.EMPTY_NODE,Ji(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=qr(i,vr(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=jr(i,Ki()),gr(t,c,o,e.filter.filtersNodes())}}
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
     */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=jr(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(ns(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xr(e,t,n,l.getNode().getChild(n),s,r,a,o);if(ns(n)){let i=new wr(null);return l.getNode().forEachChild(gs,((e,t)=>{i=i.set(new Yi(e),t)})),no(e,t,n,i,s,r,a,o)}return t}{let c=new wr(null);return i.foreach(((e,t)=>{const i=ts(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),no(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==or.LISTEN_COMPLETE)throw ht("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=mr(t,r.getNode(),r.isFullyInitialized()||ns(n),r.isFiltered());return Jr(e,o,n,i,Kr,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=yr(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Bs(yr(t)))}}(t,o,l),{viewCache:o,changes:l}}function Jr(e,t,n,i,s,r){const o=t.eventCache;if(null!=jr(i,n))return t;{let a,l;if(ns(n))if(ct(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=vr(t),s=Ur(i,n instanceof Ms?n:Ms.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=qr(i,vr(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=Gi(n);if(".priority"===c){ct(1===Qi(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=Wr(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=Ji(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Wr(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=Hr(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,s,r):o.getNode()}}return gr(t,a,o.isFullyInitialized()||ns(n),e.filter.filtersNodes())}}function Xr(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(ns(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Gi(n);if(!l.isCompleteForPath(n)&&Qi(n)>1)return t;const s=Ji(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,Kr,null)}const u=mr(t,c,l.isFullyInitialized()||ns(n),h.filtersNodes());return Jr(e,u,n,s,new Gr(s,u,r),a)}function Zr(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new Gr(s,t,r);if(ns(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=gr(t,c,!0,e.filter.filtersNodes());else{const s=Gi(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=gr(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Ji(n),c=a.getNode().getImmediateChild(s);let u;if(ns(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===Xi(r)&&e.getChild(es(r)).isEmpty()?e:e.updateChild(r,i):Ms.EMPTY_NODE}if(c.equals(u))l=t;else{l=gr(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function eo(e,t){return e.eventCache.isCompleteForChild(t)}function to(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function no(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ns(n)?i:new wr(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=to(0,t.serverCache.getNode().getImmediateChild(n),i);c=Xr(e,c,new Yi(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=to(0,t.serverCache.getNode().getImmediateChild(n),i);c=Xr(e,c,new Yi(n),l,s,r,o,a)}})),c}class io{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ys(n.getIndex()),s=(r=n).loadsAllData()?new Ys(r.getIndex()):r.hasLimit()?new Gs(r):new Ks(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Ms.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Ms.EMPTY_NODE,a.getNode(),null),h=new dr(l,o.isFullyInitialized(),i.filtersNodes()),u=new dr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_r(u,h),this.eventGenerator_=new pr(this.query_)}get query(){return this.query_}}function so(e,t){const n=vr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ns(t)&&!n.getImmediateChild(Gi(t)).isEmpty())?n.getChild(t):null}function ro(e){return 0===e.eventRegistrations_.length}function oo(e,t,n){const i=[];if(n){ct(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function ao(e,t,n,i){t.type===or.MERGE&&null!==t.source.queryId&&(ct(vr(e.viewCache_),"We should always have a full cache before handling merges"),ct(yr(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Qr(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,ct(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),ct(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),ct(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,lo(e,r.changes,r.viewCache.eventCache.getNode(),null)}function lo(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),fr(e,s,"child_removed",t,i,n),fr(e,s,"child_added",t,i,n),fr(e,s,"child_moved",r,i,n),fr(e,s,"child_changed",t,i,n),fr(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
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
     */let co,ho;class uo{constructor(){this.views=new Map}}function po(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return ct(null!=r,"SyncTree gave us an op for an invalid query."),ao(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(ao(r,t,n,i));return s}}function fo(e,t,n,i,s,r){const o=function(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=qr(n,s?i:null),r=!1;e?r=!0:i instanceof Ms?(e=Ur(n,i),r=!1):(e=Ms.EMPTY_NODE,r=!1);const o=_r(new dr(e,r,!1),new dr(i,s,!1));return new io(t,o)}return o}(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(xs,((e,t)=>{i.push(Hs(e,t))}));return n.isFullyInitialized()&&i.push(Bs(n.getNode())),lo(e,i,n.getNode(),t)}(o,n)}function _o(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=Co(e);if("default"===s)for(const[t,s]of e.views.entries())o=o.concat(oo(s,n,i)),ro(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||r.push(s.query));else{const t=e.views.get(s);t&&(o=o.concat(oo(t,n,i)),ro(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!Co(e)&&r.push(new(ct(co,"Reference.ts has not been loaded"),co)(t._repo,t._path)),{removed:r,events:o}}function go(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function mo(e,t){let n=null;for(const i of e.views.values())n=n||so(i,t);return n}function yo(e,t){if(t._queryParams.loadsAllData())return wo(e);{const n=t._queryIdentifier;return e.views.get(n)}}function vo(e,t){return null!=yo(e,t)}function Co(e){return null!=wo(e)}function wo(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
     */let bo=1;class Io{constructor(e){this.listenProvider_=e,this.syncPointTree_=new wr(null),this.pendingWriteTree_={visibleWrites:br.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Eo(e,t,n,i,s){return function(e,t,n,i,s){ct(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Ir(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?Po(e,new hr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ko(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Or(e.pendingWriteTree_,t)){let t=new wr(null);return null!=i.snap?t=t.set(Ki(),!0):_i(i.children,(e=>{t=t.set(new Yi(e),!0)})),Po(e,new lr(i.path,t,n))}return[]}function To(e,t,n){return Po(e,new hr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function So(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||vo(o,t))){const l=_o(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>Co(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Co(t)){return[wo(t)]}{let e=[];return t&&(e=go(t)),_i(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=Ao(e,i);e.listenProvider_.startListening(qo(s),Oo(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(qo(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Lo(t));e.listenProvider_.stopListening(qo(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Lo(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function No(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=is(e,s);r=r||mo(t,n),o=o||Co(t)}));let a,l=e.syncPointTree_.get(s);if(l?(o=o||Co(l),r=r||mo(l,Ki())):(l=new uo,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=r)a=!0;else{a=!1,r=Ms.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=mo(t,Ki());n&&(r=r.updateImmediateChild(e,n))}))}const c=vo(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=Lo(t);ct(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=bo++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=fo(l,t,n,Ar(e.pendingWriteTree_,s),r,a);if(!c&&!o&&!i){const n=yo(l,t);h=h.concat(function(e,t,n){const i=t._path,s=Oo(e,t),r=Ao(e,n),o=e.listenProvider_.startListening(qo(t),s,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(s)ct(!Co(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!ns(e)&&t&&Co(t))return[wo(t).query];{let e=[];return t&&(e=e.concat(go(t).map((e=>e.query)))),_i(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(qo(i),Oo(e,i))}}return o}
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
     */(e,t,n))}return h}function xo(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=mo(n,is(e,t));if(i)return i}));return $r(i,t,s,n,!0)}function Po(e,t){return Ro(t,e.syncPointTree_,null,Ar(e.pendingWriteTree_,Ki()))}function Ro(e,t,n,i){if(ns(e.path))return Do(e,t,n,i);{const s=t.get(Ki());null==n&&null!=s&&(n=mo(s,Ki()));let r=[];const o=Gi(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=zr(i,o);r=r.concat(Ro(a,l,e,t))}return s&&(r=r.concat(po(s,e,i,n))),r}}function Do(e,t,n,i){const s=t.get(Ki());null==n&&null!=s&&(n=mo(s,Ki()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=zr(i,t),l=e.operationForChild(t);l&&(r=r.concat(Do(l,s,o,a)))})),s&&(r=r.concat(po(s,e,i,n))),r}function Ao(e,t){const n=t.query,i=Oo(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Ms.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Fo(e,n);if(i){const n=Mo(i),s=n.path,r=n.queryId,o=is(s,t);return $o(e,s,new cr(ar(r),o))}return[]}(e,n._path,i):function(e,t){return Po(e,new cr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return So(e,n,null,i)}}}}function Oo(e,t){const n=Lo(t);return e.queryToTagMap.get(n)}function Lo(e){return e._path.toString()+"$"+e._queryIdentifier}function Fo(e,t){return e.tagToQueryMap.get(t)}function Mo(e){const t=e.indexOf("$");return ct(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Yi(e.substr(0,t))}}function $o(e,t,n){const i=e.syncPointTree_.get(t);ct(i,"Missing sync point for query tag that we're tracking");return po(i,n,Ar(e.pendingWriteTree_,t),null)}function qo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ct(ho,"Reference.ts has not been loaded"),ho)(e._repo,e._path):e}class Uo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Uo(t)}node(){return this.node_}}class Wo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ts(this.path_,e);return new Wo(this.syncTree_,t)}node(){return xo(this.syncTree_,this.path_)}}const jo=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Bo=function(e,t,n){return e&&"object"==typeof e?(ct(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ho(e[".sv"],t,n):"object"==typeof e[".sv"]?zo(e[".sv"],t):void ct(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ho=function(e,t,n){if("timestamp"===e)return n.timestamp;ct(!1,"Unexpected server value: "+e)},zo=function(e,t,n){e.hasOwnProperty("increment")||ct(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&ct(!1,"Unexpected increment value: "+i);const s=t.node();if(ct(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Vo=function(e,t,n,i){return Ko(t,new Wo(n,e),i)},Yo=function(e,t,n){return Ko(e,new Uo(t),n)};function Ko(e,t,n){const i=e.getPriority().val(),s=Bo(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Bo(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Ns(r,Us(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Ns(s))),i.forEachChild(xs,((e,i)=>{const s=Ko(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
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
     */class Go{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Qo(e,t){let n=t instanceof Yi?t:new Yi(t),i=e,s=Gi(n);for(;null!==s;){const e=At(i.node.children,s)||{children:{},childCount:0};i=new Go(s,i,e),n=Ji(n),s=Gi(n)}return i}function Jo(e){return e.node.value}function Xo(e,t){e.node.value=t,ia(e)}function Zo(e){return e.node.childCount>0}function ea(e,t){_i(e.node.children,((n,i)=>{t(new Go(n,e,i))}))}function ta(e,t,n,i){n&&!i&&t(e),ea(e,(e=>{ta(e,t,!0,i)})),n&&i&&t(e)}function na(e){return new Yi(null===e.parent?e.name:na(e.parent)+"/"+e.name)}function ia(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Jo(e)&&!Zo(e)}(n),s=Dt(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,ia(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,ia(e))}
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
     */(e.parent,e.name,e)}const sa=/[\[\].#$\/\u0000-\u001F\u007F]/,ra=/[\[\].#$\u0000-\u001F\u007F]/,oa=10485760,aa=function(e){return"string"==typeof e&&0!==e.length&&!sa.test(e)},la=function(e){return"string"==typeof e&&0!==e.length&&!ra.test(e)},ca=function(e,t,n){const i=n instanceof Yi?new os(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ls(i));if("function"==typeof t)throw new Error(e+"contains a function "+ls(i)+" with contents = "+t.toString());if(ai(t))throw new Error(e+"contains "+t.toString()+" "+ls(i));if("string"==typeof t&&t.length>oa/3&&Ut(t)>oa)throw new Error(e+"contains a string greater than "+oa+" utf8 bytes "+ls(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(_i(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!aa(t)))throw new Error(e+" contains an invalid key ("+t+") "+ls(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ut(t),as(e)}(i,t),ca(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ut(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+ls(i)+" in addition to actual children.")}},ha=function(e,t,n,i){if(!(i&&void 0===n||la(n)))throw new Error(qt(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ua=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ha(e,t,n,i)},da=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!aa(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),la(e)}(n))throw new Error(qt(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class pa{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fa(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||ss(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function _a(e,t,n){fa(e,n),ma(e,(e=>ss(e,t)))}function ga(e,t,n){fa(e,n),ma(e,(e=>rs(e,t)||rs(t,e)))}function ma(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(ya(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ya(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();ei&&ni("event: "+n.toString()),vi(i)}}}
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
     */const va="repo_interrupt",Ca=25;class wa{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pa,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tr(),this.transactionQueueTree_=new Go,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ba(e,t,n){if(e.stats_=Ai(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Zs(e.repoInfo_,((t,n,i,s)=>{ka(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Ta(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pt(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new us(e.repoInfo_,t,((t,n,i,s)=>{ka(e,t,n,i,s)}),(t=>{Ta(e,t)}),(t=>{!function(e,t){_i(t,((t,n)=>{Sa(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Di[n]||(Di[n]=t()),Di[n]}(e.repoInfo_,(()=>new rr(e.stats_,e.server_))),e.infoData_=new er,e.infoSyncTree_=new Io({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=To(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Sa(e,"connected",!1),e.serverSyncTree_=new Io({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);ga(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ia(e){const t=e.infoData_.getNode(new Yi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ea(e){return jo({timestamp:Ia(e)})}function ka(e,t,n,i,s){e.dataUpdateCount++;const r=new Yi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=Lt(n,(e=>Us(e)));o=function(e,t,n,i){const s=Fo(e,i);if(s){const i=Mo(s),r=i.path,o=i.queryId,a=is(r,t),l=wr.fromObject(n);return $o(e,r,new ur(ar(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=Us(n);o=function(e,t,n,i){const s=Fo(e,i);if(null!=s){const i=Mo(s),r=i.path,o=i.queryId,a=is(r,t);return $o(e,r,new hr(ar(o),a,n))}return[]}(e.serverSyncTree_,r,t,s)}else if(i){const t=Lt(n,(e=>Us(e)));o=function(e,t,n){const i=wr.fromObject(n);return Po(e,new ur({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=Us(n);o=To(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=Aa(e,r)),ga(e.eventQueue_,a,o)}function Ta(e,t){Sa(e,"connected",t),!1===t&&function(e){Pa(e,"onDisconnectEvents");const t=Ea(e),n=tr();ir(e.onDisconnect_,Ki(),((i,s)=>{const r=Vo(i,s,e.serverSyncTree_,t);nr(n,i,r)}));let i=[];ir(n,Ki(),((t,n)=>{i=i.concat(To(e.serverSyncTree_,t,n));const s=function(e,t){const n=na(Oa(e,t)),i=Qo(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{$a(e,t)})),$a(e,i),ta(i,(t=>{$a(e,t)})),n}(e,t);Aa(e,s)})),e.onDisconnect_=tr(),ga(e.eventQueue_,Ki(),i)}(e)}function Sa(e,t,n){const i=new Yi("/.info/"+t),s=Us(n);e.infoData_.updateSnapshot(i,s);const r=To(e.infoSyncTree_,i,s);ga(e.eventQueue_,i,r)}function Na(e){return e.nextWriteId_++}function xa(e,t,n){let i;i=".info"===Gi(t._path)?So(e.infoSyncTree_,t,n):So(e.serverSyncTree_,t,n),_a(e.eventQueue_,t._path,i)}function Pa(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),ni(n,...t)}function Ra(e,t,n){return xo(e.serverSyncTree_,t,n)||Ms.EMPTY_NODE}function Da(e,t=e.transactionQueueTree_){if(t||Ma(e,t),Jo(t)){const n=La(e,t);ct(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Ra(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];ct(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=is(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Pa(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(ko(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ma(e,Qo(e.transactionQueueTree_,t)),Da(e,e.transactionQueueTree_),ga(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)vi(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{oi("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Aa(e,t)}}),o)}(e,na(t),n)}else Zo(t)&&ea(t,(t=>{Da(e,t)}))}function Aa(e,t){const n=Oa(e,t),i=na(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let r=0;r<t.length;r++){const l=t[r],c=is(n,l.path);let h,u=!1;if(ct(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,s=s.concat(ko(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=Ca)u=!0,h="maxretry",s=s.concat(ko(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Ra(e,l.path,o);l.currentInputSnapshot=n;const i=t[r].update(n.val());if(void 0!==i){ca("transaction failed: Data returned ",i,l.path);let t=Us(i);"object"==typeof i&&null!=i&&Dt(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=l.currentWriteId,a=Ea(e),c=Yo(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Na(e),o.splice(o.indexOf(r),1),s=s.concat(Eo(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(ko(e.serverSyncTree_,r,!0))}else u=!0,h="nodata",s=s.concat(ko(e.serverSyncTree_,l.currentWriteId,!0))}ga(e.eventQueue_,n,s),s=[],u&&(t[r].status=2,a=t[r].unwatcher,setTimeout(a,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((()=>t[r].onComplete(null,!1,t[r].currentInputSnapshot))):i.push((()=>t[r].onComplete(new Error(h),!1,null)))))}var a;Ma(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)vi(i[e]);Da(e,e.transactionQueueTree_)}(e,La(e,n),i),i}function Oa(e,t){let n,i=e.transactionQueueTree_;for(n=Gi(t);null!==n&&void 0===Jo(i);)i=Qo(i,n),n=Gi(t=Ji(t));return i}function La(e,t){const n=[];return Fa(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Fa(e,t,n){const i=Jo(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);ea(t,(t=>{Fa(e,t,n)}))}function Ma(e,t){const n=Jo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Xo(t,n.length>0?n:void 0)}ea(t,(t=>{Ma(e,t)}))}function $a(e,t){const n=Jo(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(ct(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(ct(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(ko(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Xo(t,void 0):n.length=r+1,ga(e.eventQueue_,na(t),s);for(let e=0;e<i.length;e++)vi(i[e])}}
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
     */const qa=function(e,t){const n=Ua(e),i=n.namespace;"firebase.com"===n.domain&&ri(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ri("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&oi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ni(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new Yi(n.pathString)}},Ua=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):oi(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
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
class Wa{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pt(this.snapshot.exportVal())}}class ja{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
     */class Ba{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ct(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
     */class Ha{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ns(this._path)?null:Xi(this._path)}get ref(){return new za(this._repo,this._path)}get _queryIdentifier(){const e=Xs(this._queryParams),t=pi(e);return"{}"===t?"default":t}get _queryObject(){return Xs(this._queryParams)}isEqual(e){if(!((e=Wt(e))instanceof Ha))return!1;const t=this._repo===e._repo,n=ss(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class za extends Ha{constructor(e,t){super(e,t,new Qs,!1)}get parent(){const e=es(this._path);return null===e?null:new za(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Va{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Yi(e),n=Ka(this.ref,e);return new Va(this._node.getChild(t),n,xs)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Va(n,Ka(this.ref,t),xs))))}hasChild(e){const t=new Yi(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ya(e,t){return(e=Wt(e))._checkNotDeleted("ref"),void 0!==t?Ka(e._root,t):e._root}function Ka(e,t){return null===Gi((e=Wt(e))._path)?ua("child","path",t,!1):ha("child","path",t,!1),new za(e._repo,ts(e._path,t))}class Ga{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Wa("value",this,new Va(e.snapshotNode,new za(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ja(this,e,t):null}matches(e){return e instanceof Ga&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Qa{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ja(this,e,t):null}createEvent(e,t){ct(null!=e.childName,"Child events should have a childName.");const n=Ka(new za(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Wa(e.type,this,new Va(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Qa&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ja(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{xa(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Ba(n,r||void 0),a="value"===t?new Ga(o):new Qa(t,o);return function(e,t,n){let i;i=".info"===Gi(t._path)?No(e.infoSyncTree_,t,n):No(e.serverSyncTree_,t,n),_a(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>xa(e._repo,e,a)}function Xa(e,t,n,i){return Ja(e,"value",t,n,i)}function Za(e,t,n){let i=null;const s=n?new Ba(n):null;"value"===t?i=new Ga(s):t&&(i=new Qa(t,s)),xa(e._repo,e,i)}!function(e){ct(!co,"__referenceConstructor has already been defined"),co=e}(za),function(e){ct(!ho,"__referenceConstructor has already been defined"),ho=e}(za);
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
const el="FIREBASE_DATABASE_EMULATOR_HOST",tl={};let nl=!1;function il(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||ri("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ni("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=qa(r,s),c=l.repoInfo;"undefined"!=typeof process&&process.env&&(a=process.env[el]),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=qa(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const h=s&&o?new Ii(Ii.OWNER):new bi(e.name,e.options,t);da("Invalid Firebase Database URL",l),ns(l.path)||ri("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=tl[t.name];s||(s={},tl[t.name]=s);let r=s[e.toURLString()];r&&ri("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new wa(e,nl,n,i),s[e.toURLString()]=r,r}(c,e,h,new wi(e.name,n));return new rl(u,e)}function sl(e,t){const n=tl[t];n&&n[e.key]===e||ri(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt(va)}(e),delete n[e.key]}class rl{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ba(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new za(this._repo,Ki())),this._rootInternal}_delete(){return null!==this._rootInternal&&(sl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ri("Cannot call "+e+" on a deleted database.")}}us.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},us.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},
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
function(e){!function(e){Hn=e}("10.3.1"),kn(new jt("database",((e,{instanceIdentifier:t})=>il(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),xn(jn,Bn,e),xn(jn,Bn,"esm2017")}();const ol=function(e=function(e=Cn){const t=bn.get(e);if(!t&&e===Cn&&bt())return Nn();if(!t)throw Tn.create("no-app",{appName:e});return t}(),t){const n=function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=wt("database");e&&function(e,t,n,i={}){e=Wt(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ri("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ri('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ii(Ii.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[_t(JSON.stringify({alg:"none",type:"JWT"})),_t(JSON.stringify(r)),""].join(".")}
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
     */(i.mockUserToken,e.app.options.projectId);r=new Ii(t)}!function(e,t,n,i){e.repoInfo_=new Ni(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}(Nn({apiKey:"AIzaSyDg5bqZbnlx5RxMZi44HDtNcrRnrrE9uqA",authDomain:"gulat-arena.firebaseapp.com",databaseURL:"https://gulat-arena-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"gulat-arena",storageBucket:"gulat-arena.appspot.com",messagingSenderId:"252558550776",appId:"1:252558550776:web:638936fae3411f0913bd0d",measurementId:"G-386HDYG2KE"}));const al=(e,t=null)=>{const n=e.split(" ").map(((e,t)=>t>1?e.charAt(0).toUpperCase()+".":function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}(e)));if(t)return n.slice(0,t).join(" ");n.join(" ")},ll=(e,t,n)=>`${n.replace(" - ","").replace(" kg","").replace("kg","")}/${e.replace(".","").split(" ").slice(0,2).map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("_")}_${t}.png`;function cl(e,t,n){const i=e.slice();return i[13]=t[n],i}function hl(e,t,n){const i=e.slice();return i[16]=t[n],i}function ul(e){let t,n,i,s,r=e[16]+"";function o(){return e[6](e[16])}return{c(){t=P("button"),n=R(r)},m(e,r){S(e,t,r),E(t,n),i||(s=O(t,"click",o),i=!0)},p(t,i){e=t,1&i&&r!==(r=e[16]+"")&&F(n,r)},d(e){e&&N(t),i=!1,s()}}}function dl(e){let t,n=e[0][e[1]],i=[];for(let t=0;t<n.length;t+=1)i[t]=pl(cl(e,n,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=A()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n);S(e,t,n)},p(e,s){if(15&s){let r;for(n=e[0][e[1]],r=0;r<n.length;r+=1){const o=cl(e,n,r);i[r]?i[r].p(o,s):(i[r]=pl(o),i[r].c(),i[r].m(t.parentNode,t))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(e){x(i,e),e&&N(t)}}}function pl(e){let t,n,i,s,o,a,l,c,h,u,d,p,f,_,g,m,y,v,C,w,b,I,k,T,x,A,M,q,U,W,j,B,H,z,V,Y=e[13].fightNumber+"",K=e[13].round+"",G=e[13].weightCategoryAlternateName.replace(" - ","\n").replace(" kg","")+"",Q=e[13].team1AlternateName+"",J=al(e[13].fighter1FullName)+"",X=e[13].team2AlternateName+"",Z=al(e[13].fighter2FullName)+"";function ee(){return e[7](e[13])}function te(){return e[8](e[13])}return{c(){t=P("div"),n=P("div"),i=R(Y),s=D(),o=P("div"),a=P("p"),l=R(K),c=D(),h=P("p"),u=R(G),d=D(),p=P("div"),f=P("span"),_=R("("),g=R(Q),m=R(")"),y=D(),v=P("span"),C=R(J),b=D(),I=P("div"),I.textContent="VS",k=D(),T=P("div"),x=P("span"),A=R("("),M=R(X),q=R(")"),U=D(),W=P("span"),j=R(Z),H=D(),L(n,"class","number"),L(h,"class","weight-category"),L(o,"class","category"),L(f,"class","team"),L(v,"class",w="fighter "+(e[13].winnerFighter&&e[13].winnerFighter!==e[13].fighter1Id?"lose":"")),L(p,"class","atlethe red"),L(I,"class","vs"),L(x,"class","team"),L(W,"class",B="fighter "+(e[13].winnerFighter&&e[13].winnerFighter!==e[13].fighter2Id?"lose":"")),L(T,"class","atlethe blue"),L(t,"class","fight-container"),$(t,"strikethrough",e[13].canceled&&""!=e[13].canceled),$(t,"completed",e[13].isCompleted||e[13].canceled&&""!=e[13].canceled),$(t,"highlight",""!=e[13].fighter1FullName&&e[13].team1AlternateName.toLowerCase()===e[2].toLowerCase()||""!=e[13].fighter2FullName&&e[13].team2AlternateName.toLowerCase()===e[2].toLowerCase())},m(e,r){S(e,t,r),E(t,n),E(n,i),E(t,s),E(t,o),E(o,a),E(a,l),E(o,c),E(o,h),E(h,u),E(t,d),E(t,p),E(p,f),E(f,_),E(f,g),E(f,m),E(p,y),E(p,v),E(v,C),E(t,b),E(t,I),E(t,k),E(t,T),E(T,x),E(x,A),E(x,M),E(x,q),E(T,U),E(T,W),E(W,j),E(t,H),z||(V=[O(f,"click",ee),O(x,"click",te)],z=!0)},p(n,s){e=n,3&s&&Y!==(Y=e[13].fightNumber+"")&&F(i,Y),3&s&&K!==(K=e[13].round+"")&&F(l,K),3&s&&G!==(G=e[13].weightCategoryAlternateName.replace(" - ","\n").replace(" kg","")+"")&&F(u,G),3&s&&Q!==(Q=e[13].team1AlternateName+"")&&F(g,Q),3&s&&J!==(J=al(e[13].fighter1FullName)+"")&&F(C,J),3&s&&w!==(w="fighter "+(e[13].winnerFighter&&e[13].winnerFighter!==e[13].fighter1Id?"lose":""))&&L(v,"class",w),3&s&&X!==(X=e[13].team2AlternateName+"")&&F(M,X),3&s&&Z!==(Z=al(e[13].fighter2FullName)+"")&&F(j,Z),3&s&&B!==(B="fighter "+(e[13].winnerFighter&&e[13].winnerFighter!==e[13].fighter2Id?"lose":""))&&L(W,"class",B),3&s&&$(t,"strikethrough",e[13].canceled&&""!=e[13].canceled),3&s&&$(t,"completed",e[13].isCompleted||e[13].canceled&&""!=e[13].canceled),7&s&&$(t,"highlight",""!=e[13].fighter1FullName&&e[13].team1AlternateName.toLowerCase()===e[2].toLowerCase()||""!=e[13].fighter2FullName&&e[13].team2AlternateName.toLowerCase()===e[2].toLowerCase())},d(e){e&&N(t),z=!1,r(V)}}}function fl(t){let n,i,s,r,o,a,l,c,h,u=Object.keys(t[0]),d=[];for(let e=0;e<u.length;e+=1)d[e]=ul(hl(t,u,e));let p=t[1]&&t[0][t[1]]&&dl(t);return{c(){n=P("div"),i=P("div"),s=P("input"),r=D(),o=P("div");for(let e=0;e<d.length;e+=1)d[e].c();a=D(),l=P("div"),p&&p.c(),L(s,"type","text"),L(s,"placeholder","Filter by team name"),L(i,"class","team-filter"),L(o,"class","date-tabs"),L(n,"class","fixed-top"),L(l,"class","fight-wrapper")},m(e,u){S(e,n,u),E(n,i),E(i,s),M(s,t[2]),E(n,r),E(n,o);for(let e=0;e<d.length;e+=1)d[e]&&d[e].m(o,null);S(e,a,u),S(e,l,u),p&&p.m(l,null),c||(h=O(s,"input",t[5]),c=!0)},p(e,[t]){if(4&t&&s.value!==e[2]&&M(s,e[2]),3&t){let n;for(u=Object.keys(e[0]),n=0;n<u.length;n+=1){const i=hl(e,u,n);d[n]?d[n].p(i,t):(d[n]=ul(i),d[n].c(),d[n].m(o,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=u.length}e[1]&&e[0][e[1]]?p?p.p(e,t):(p=dl(e),p.c(),p.m(l,null)):p&&(p.d(1),p=null)},i:e,o:e,d(e){e&&N(n),x(d,e),e&&N(a),e&&N(l),p&&p.d(),c=!1,h()}}}function _l(e,t,n){let{fights:i=[]}=t,s="",r={},o=new Date,a=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`;function l(e){n(2,s=e)}return e.$$set=e=>{"fights"in e&&n(4,i=e.fights)},e.$$.update=()=>{19&e.$$.dirty&&(n(0,r=i.reduce(((e,t)=>{const n=t.sessionStartDate;return e[n]||(e[n]=[]),e[n].push(t),e}),{})),Object.keys(r).length>0&&!Object.keys(r).includes(a)&&n(1,a=Object.keys(r)[0]))},[r,a,s,l,i,function(){s=this.value,n(2,s)},e=>n(1,a=e),e=>l(e.team1AlternateName),e=>l(e.team2AlternateName)]}class gl extends Ee{constructor(e){super(),Ie(this,e,_l,fl,a,{fights:4})}}function ml(e,t,n){const i=e.slice();return i[2]=t[n],i}function yl(e,t,n){const i=e.slice();return i[5]=t[n],i}function vl(e){let t,n,i,s,r,o,a,l,c,h,u=e[5].rank+"",d=e[5].fighter.fullName+"",p=e[5].fighter.teamName+"";return{c(){t=P("tr"),n=P("td"),i=R(u),s=D(),r=P("td"),o=R(d),a=D(),l=P("td"),c=R(p),h=D(),L(n,"class","rank svelte-1x3b31b"),L(r,"class","svelte-1x3b31b"),L(l,"class","svelte-1x3b31b")},m(e,u){S(e,t,u),E(t,n),E(n,i),E(t,s),E(t,r),E(r,o),E(t,a),E(t,l),E(l,c),E(t,h)},p(e,t){3&t&&u!==(u=e[5].rank+"")&&F(i,u),3&t&&d!==(d=e[5].fighter.fullName+"")&&F(o,d),3&t&&p!==(p=e[5].fighter.teamName+"")&&F(c,p)},d(e){e&&N(t)}}}function Cl(e){let t,n,i,s,r,o,a,l,c=e[2]+"",h=bl(e[0][e[2]]),u=[];for(let t=0;t<h.length;t+=1)u[t]=vl(yl(e,h,t));return{c(){t=P("h3"),n=R(c),i=D(),s=P("table"),r=P("thead"),r.innerHTML='<tr><th class="svelte-1x3b31b">Juara</th> \n                    <th class="svelte-1x3b31b">Nama</th> \n                    <th class="svelte-1x3b31b">Asal</th></tr>',o=D(),a=P("tbody");for(let e=0;e<u.length;e+=1)u[e].c();l=D(),L(s,"border","1")},m(e,c){S(e,t,c),E(t,n),S(e,i,c),S(e,s,c),E(s,r),E(s,o),E(s,a);for(let e=0;e<u.length;e+=1)u[e]&&u[e].m(a,null);E(s,l)},p(e,t){if(2&t&&c!==(c=e[2]+"")&&F(n,c),3&t){let n;for(h=bl(e[0][e[2]]),n=0;n<h.length;n+=1){const i=yl(e,h,n);u[n]?u[n].p(i,t):(u[n]=vl(i),u[n].c(),u[n].m(a,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=h.length}},d(e){e&&N(t),e&&N(i),e&&N(s),x(u,e)}}}function wl(t){let n,i,s,r=t[1],o=[];for(let e=0;e<r.length;e+=1)o[e]=Cl(ml(t,r,e));return{c(){n=P("div"),i=P("h2"),i.textContent="Ranking",s=D();for(let e=0;e<o.length;e+=1)o[e].c();L(n,"class","ranking-wrapper svelte-1x3b31b")},m(e,t){S(e,n,t),E(n,i),E(n,s);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(n,null)},p(e,[t]){if(3&t){let i;for(r=e[1],i=0;i<r.length;i+=1){const s=ml(e,r,i);o[i]?o[i].p(s,t):(o[i]=Cl(s),o[i].c(),o[i].m(n,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},i:e,o:e,d(e){e&&N(n),x(o,e)}}}function bl(e){return e.slice(0,4)}function Il(e,t,n){let{rankings:i={}}=t,s=[];return e.$$set=e=>{"rankings"in e&&n(0,i=e.rankings)},e.$$.update=()=>{3&e.$$.dirty&&(n(1,s=Object.keys(i)),console.log("Updated rankingKeys:",s))},[i,s]}class El extends Ee{constructor(e){super(),Ie(this,e,Il,wl,a,{rankings:0})}}function kl(e){let t,n,i;return{c(){t=P("p"),n=R("Last updated: "),i=R(e[3])},m(e,s){S(e,t,s),E(t,n),E(t,i)},p(e,t){8&t&&F(i,e[3])},d(e){e&&N(t)}}}function Tl(e){let t,n;return t=new El({props:{rankings:e[1]}}),{c(){Ce(t.$$.fragment)},m(e,i){we(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.rankings=e[1]),t.$set(i)},i(e){n||(_e(t.$$.fragment,e),n=!0)},o(e){ge(t.$$.fragment,e),n=!1},d(e){be(t,e)}}}function Sl(e){let t,n;return t=new gl({props:{fights:e[0]}}),{c(){Ce(t.$$.fragment)},m(e,i){we(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.fights=e[0]),t.$set(i)},i(e){n||(_e(t.$$.fragment,e),n=!0)},o(e){ge(t.$$.fragment,e),n=!1},d(e){be(t,e)}}}function Nl(e){let t,n,i,s,o,a,l,c,h,u,d,p,f,_=e[3]&&kl(e);const g=[Sl,Tl],m=[];function y(e,t){return"fight"===e[2]?0:"ranking"===e[2]?1:-1}return~(c=y(e))&&(h=m[c]=g[c](e)),{c(){t=P("div"),_&&_.c(),n=D(),i=P("div"),s=P("button"),s.textContent="Fights",o=D(),a=P("button"),a.textContent="Ranking",l=D(),h&&h.c(),u=A(),L(t,"class","last-updated svelte-je8yy0"),L(s,"class","svelte-je8yy0"),L(a,"class","svelte-je8yy0"),L(i,"class","tab-buttons svelte-je8yy0")},m(r,h){S(r,t,h),_&&_.m(t,null),S(r,n,h),S(r,i,h),E(i,s),E(i,o),E(i,a),S(r,l,h),~c&&m[c].m(r,h),S(r,u,h),d=!0,p||(f=[O(s,"click",e[5]),O(a,"click",e[6])],p=!0)},p(e,[n]){e[3]?_?_.p(e,n):(_=kl(e),_.c(),_.m(t,null)):_&&(_.d(1),_=null);let i=c;c=y(e),c===i?~c&&m[c].p(e,n):(h&&(pe(),ge(m[i],1,1,(()=>{m[i]=null})),fe()),~c?(h=m[c],h?h.p(e,n):(h=m[c]=g[c](e),h.c()),_e(h,1),h.m(u.parentNode,u)):h=null)},i(e){d||(_e(h),d=!0)},o(e){ge(h),d=!1},d(e){e&&N(t),_&&_.d(),e&&N(n),e&&N(i),e&&N(l),~c&&m[c].d(e),e&&N(u),p=!1,r(f)}}}function xl(e,t,n){let i,s=[],r={},o="fight",a=null,l="";function c(){const e=(new Date).getTime(),t=Math.floor((e-a)/1e3);n(3,l=t<60?`${t} seconds ago`:t<3600?`${Math.floor(t/60)} minutes ago`:`${Math.floor(t/3600)} hours ago`)}Y((()=>{const e=Ya(ol,"fightsCompressed"),t=Ya(ol,"ranking"),o=Ya(ol,"lastUpdated"),l=Xa(e,(e=>{e.exists()?(n(0,s=[...e.val()]),console.log(s)):console.log("No data available")}),(e=>{console.error(e)})),h=Xa(t,(e=>{e.exists()?(console.log(e.val()),n(1,r=e.val()),console.log(r)):console.log("No ranking data available")}),(e=>{console.error(e)})),u=Xa(o,(e=>{e.exists()?n(4,a=1e3*e.val()):console.log("No lastUpdated data available")}),(e=>{console.error(e)}));return i=setInterval((()=>{c(),ne()}),1e4),()=>{Za(e,"value",l),Za(t,"value",h),Za(o,"value",u),clearInterval(i)}}));return e.$$.update=()=>{16&e.$$.dirty&&a&&c()},[s,r,o,l,a,()=>n(2,o="fight"),()=>n(2,o="ranking")]}class Pl extends Ee{constructor(e){super(),Ie(this,e,xl,Nl,a,{})}}function Rl(e){let t,n,i,s,r,o,a,l,h,u,d,p,f,_,g,m,y,v,C,w=al(e[0].fighter1FullName,2)+"",b=al(e[0].fighter2FullName,2)+"";return{c(){t=P("div"),n=P("img"),s=D(),r=P("img"),a=D(),l=P("p"),h=R(w),u=D(),d=P("div"),p=P("img"),_=D(),g=P("img"),y=D(),v=P("p"),C=R(b),c(n.src,i=`../images/${ll(e[0].fighter1FullName,e[0].team1AlternateName,e[0].weightCategoryAlternateName)}`)||L(n,"src",i),L(n,"alt","Fighter Red"),L(n,"class","fighter red svelte-1wuxu06"),c(r.src,o="../images/bg-name-red.png")||L(r,"src","../images/bg-name-red.png"),L(r,"alt","bg-name-red"),L(r,"class","bg-name svelte-1wuxu06"),L(l,"class","name red svelte-1wuxu06"),L(t,"class","fighter-container red animate svelte-1wuxu06"),c(p.src,f=`../images/${ll(e[0].fighter2FullName,e[0].team2AlternateName,e[0].weightCategoryAlternateName)}`)||L(p,"src",f),L(p,"alt","Fighter Blue"),L(p,"class","fighter blue svelte-1wuxu06"),c(g.src,m="../images/bg-name-blue.png")||L(g,"src","../images/bg-name-blue.png"),L(g,"alt","bg-name-blue"),L(g,"class","bg-name svelte-1wuxu06"),L(v,"class","name blue svelte-1wuxu06"),L(d,"class","fighter-container blue animate svelte-1wuxu06")},m(e,i){S(e,t,i),E(t,n),E(t,s),E(t,r),E(t,a),E(t,l),E(l,h),S(e,u,i),S(e,d,i),E(d,p),E(d,_),E(d,g),E(d,y),E(d,v),E(v,C)},p(e,t){1&t&&!c(n.src,i=`../images/${ll(e[0].fighter1FullName,e[0].team1AlternateName,e[0].weightCategoryAlternateName)}`)&&L(n,"src",i),1&t&&w!==(w=al(e[0].fighter1FullName,2)+"")&&F(h,w),1&t&&!c(p.src,f=`../images/${ll(e[0].fighter2FullName,e[0].team2AlternateName,e[0].weightCategoryAlternateName)}`)&&L(p,"src",f),1&t&&b!==(b=al(e[0].fighter2FullName,2)+"")&&F(C,b)},d(e){e&&N(t),e&&N(u),e&&N(d)}}}function Dl(t){let n,i=t[0]&&Rl(t);return{c(){n=P("div"),i&&i.c(),L(n,"class","background svelte-1wuxu06")},m(e,t){S(e,n,t),i&&i.m(n,null)},p(e,[t]){e[0]?i?i.p(e,t):(i=Rl(e),i.c(),i.m(n,null)):i&&(i.d(1),i=null)},i:e,o:e,d(e){e&&N(n),i&&i.d()}}}function Al(e){e.classList.remove("animate"),e.offsetWidth,e.classList.add("animate")}function Ol(e,t,n){let i=[],s=null;return Y((()=>{const e=Ya(ol,"fightsCompressed"),t=Xa(e,(e=>{if(e.exists()){i=[...e.val()];const t=i.find((e=>e.isReady&&!e.isCompleted));if(JSON.stringify(t)!==JSON.stringify(s)){n(0,s=t);document.querySelectorAll(".fighter-container").forEach(Al)}}else console.log("No data available")}),(e=>{console.error(e)}));return()=>{Za(e,"value",t)}})),[s]}class Ll extends Ee{constructor(e){super(),Ie(this,e,Ol,Dl,a,{})}}function Fl(t){let n,i,s,r;return n=new ze({props:{path:"/",component:Pl}}),s=new ze({props:{path:"/versus-screen",component:Ll}}),{c(){Ce(n.$$.fragment),i=D(),Ce(s.$$.fragment)},m(e,t){we(n,e,t),S(e,i,t),we(s,e,t),r=!0},p:e,i(e){r||(_e(n.$$.fragment,e),_e(s.$$.fragment,e),r=!0)},o(e){ge(n.$$.fragment,e),ge(s.$$.fragment,e),r=!1},d(e){be(n,e),e&&N(i),be(s,e)}}}function Ml(e){let t,n;return t=new ot({props:{basepath:e[0],$$slots:{default:[Fl]},$$scope:{ctx:e}}}),{c(){Ce(t.$$.fragment)},m(e,i){we(t,e,i),n=!0},p(e,[n]){const i={};2&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(_e(t.$$.fragment,e),n=!0)},o(e){ge(t.$$.fragment,e),n=!1},d(e){be(t,e)}}}function $l(e){return["aw09.github.io"===window.location.hostname?"/fe-arena":""]}return new class extends Ee{constructor(e){super(),Ie(this,e,$l,Ml,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
