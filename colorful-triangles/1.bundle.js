(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(n,t,r){"use strict";r.r(t),r.d(t,"get_memory",function(){return _}),r.d(t,"__widl_f_log_1_",function(){return f}),r.d(t,"__wbg_new_886f15c1b20b061b",function(){return w}),r.d(t,"__wbg_call_a2b503e0ee1234e4",function(){return b}),r.d(t,"__wbg_self_ddd2d80076091e5f",function(){return h}),r.d(t,"__wbg_crypto_4b7669ff1793d881",function(){return g}),r.d(t,"__wbg_getRandomValues_6de85818bd2ad699",function(){return m}),r.d(t,"__wbg_getRandomValues_95cef5eed1acafda",function(){return v}),r.d(t,"__wbg_require_86edd37cfda5f13d",function(){return k}),r.d(t,"__wbg_randomFillSync_571502126f344d60",function(){return x}),r.d(t,"__wbindgen_object_drop_ref",function(){return j}),r.d(t,"__wbindgen_string_new",function(){return O}),r.d(t,"__wbindgen_is_undefined",function(){return R}),r.d(t,"__wbindgen_jsval_eq",function(){return F}),r.d(t,"__wbindgen_memory",function(){return V}),r.d(t,"RandomImage",function(){return q}),r.d(t,"Pixel",function(){return D}),r.d(t,"__wbindgen_throw",function(){return E});var e=r(2);const u=new Array(32);function i(n){return u[n]}u.fill(void 0),u.push(void 0,null,!0,!1);let o=u.length;function c(n){n<36||(u[n]=o,o=n)}function _(){return function(n){const t=i(n);return c(n),t}(e.e())}function f(n){console.log(i(n))}let d=new TextDecoder("utf-8"),s=null;function a(){return null!==s&&s.buffer===e.f.buffer||(s=new Uint8Array(e.f.buffer)),s}function l(n,t){return d.decode(a().subarray(n,n+t))}function p(n){o===u.length&&u.push(u.length+1);const t=o;return o=u[t],u[t]=n,t}function w(n,t){let r=l(n,t);return p(new Function(r))}function b(n,t){return p(i(n).call(i(t)))}function h(n){return p(i(n).self)}function g(n){return p(i(n).crypto)}function m(n){return p(i(n).getRandomValues)}function y(n,t){return a().subarray(n/1,n/1+t)}function v(n,t,r){let e=y(t,r);i(n).getRandomValues(e)}function k(n,t){let e=l(n,t);return p(r(3)(e))}function x(n,t,r){let e=y(t,r);i(n).randomFillSync(e)}function j(n){c(n)}function O(n,t){return p(l(n,t))}function R(n){return void 0===i(n)?1:0}function F(n,t){return i(n)===i(t)?1:0}function V(){return p(e.f)}class q{static __wrap(n){const t=Object.create(q.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,function(n){e.c(n)}(n)}clear(){return e.g(this.ptr)}static new(n,t){return q.__wrap(e.m(n,t))}mutate(){return e.l(this.ptr)}width(){return e.r(this.ptr)}height(){return e.j(this.ptr)}size(){return e.q(this.ptr)}pixels(){return e.n(this.ptr)}in_bounds(n,t){return 0!==e.k(this.ptr,n,t)}shrink(n,t){return q.__wrap(e.o(this.ptr,n,t))}shrink_via_tiling(n,t){return q.__wrap(e.p(this.ptr,n,t))}compare(n){return e.h(this.ptr,n.ptr)}get_pixel(n,t){return D.__wrap(e.i(this.ptr,n,t))}}class D{static __wrap(n){const t=Object.create(D.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,function(n){e.b(n)}(n)}get r(){return e.a(this.ptr)}set r(n){return e.d(this.ptr,n)}}function E(n,t){throw new Error(l(n,t))}},function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(1);e.s()},function(n,t){function r(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,n.exports=r,r.id=3}]]);