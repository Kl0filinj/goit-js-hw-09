!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i={mianDelay:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),count:document.querySelector('input[name="amount"]'),startBtn:document.querySelector("button")};function a(n,t){return new Promise((function(o,r){var i=Math.random()>.3;setTimeout((function(){i?o(e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))):r(e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms")))}),t)}))}i.startBtn.addEventListener("click",(function(e){e.preventDefault();for(var n=Number(i.count.value),t=Number(i.mianDelay.value),o=Number(i.delayStep.value),r=t,u=1;u<n+1;u+=1)a(u,r),r+=o}))}();
//# sourceMappingURL=03-promises.ce5124a1.js.map
