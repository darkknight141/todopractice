(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{zlY0:function(e,t,n){"use strict";n.r(t),n.d(t,"startTapClick",(function(){return i}));var o=n("QPqR");const i=e=>{let t,n,i,v,p=10*-u,f=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,w=e=>{p=Object(o.n)(e),b(e)},h=()=>{clearTimeout(v),v=void 0,n&&(O(!1),n=void 0)},E=e=>{n||void 0!==t&&null!==t.parentElement||(t=void 0,g(s(e),e))},b=e=>{g(void 0,e)},g=(e,t)=>{if(e&&e===n)return;clearTimeout(v),v=void 0;const{x:i,y:s}=Object(o.o)(t);if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(r)||T(n,i,s),O(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const n=a(e)?0:d;e.classList.remove(r),v=setTimeout(()=>{T(e,i,s),v=void 0},n)}n=e},T=(e,t,n)=>{f=Date.now(),e.classList.add(r);const o=L&&c(e);o&&o.addRipple&&(j(),i=o.addRipple(t,n))},j=()=>{void 0!==i&&(i.then(e=>e()),i=void 0)},O=e=>{j();const t=n;if(!t)return;const o=l-Date.now()+f;if(e&&o>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(r),m.delete(t)},l);m.set(t,e)}else t.classList.remove(r)},R=document;R.addEventListener("ionScrollStart",e=>{t=e.target,h()}),R.addEventListener("ionScrollEnd",()=>{t=void 0}),R.addEventListener("ionGestureCaptured",h),R.addEventListener("touchstart",e=>{p=Object(o.n)(e),E(e)},!0),R.addEventListener("touchcancel",w,!0),R.addEventListener("touchend",w,!0),R.addEventListener("mousedown",e=>{const t=Object(o.n)(e)-u;p<t&&E(e)},!0),R.addEventListener("mouseup",e=>{const t=Object(o.n)(e)-u;p<t&&b(e)},!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(n.classList&&n.classList.contains("ion-activatable"))return n}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);