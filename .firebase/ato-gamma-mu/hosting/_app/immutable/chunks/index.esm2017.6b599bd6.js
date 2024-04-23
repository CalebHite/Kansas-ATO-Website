import{w as qs}from"./index.409ab502.js";function $I(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}var yr=function(t,e){return yr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},yr(t,e)};function vf(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");yr(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Nc(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function wf(t,e,n,i){function s(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?r(u.value):s(u.value).then(a,l)}c((i=i.apply(t,e||[])).next())})}function Ef(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(n=0)),n;)try{if(i=1,s&&(r=c[0]&2?s.return:c[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,c[1])).done)return r;switch(s=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,s=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],s=0}finally{i=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Bs(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function yi(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),s,r=[],o;try{for(;(e===void 0||e-- >0)&&!(s=i.next()).done;)r.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return r}function Ma(t,e,n){if(n||arguments.length===2)for(var i=0,s=e.length,r;i<s;i++)(r||!(i in e))&&(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}/**
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
 */var kc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */var g=function(t,e){if(!t)throw Zt(e)},Zt=function(t){return new Error("Firebase Database ("+kc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */var Dc=function(t){for(var e=[],n=0,i=0;i<t.length;i++){var s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Tf=function(t){for(var e=[],n=0,i=0;n<t.length;){var s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){var r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){var r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{var r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[],s=0;s<t.length;s+=3){var r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4,d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dc(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[],s=0;s<t.length;){var r=n[t.charAt(s++)],o=s<t.length,a=o?n[t.charAt(s)]:0;++s;var l=s<t.length,c=l?n[t.charAt(s)]:64;++s;var u=s<t.length,h=u?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();var d=r<<2|a>>4;if(i.push(d),c!==64){var f=a<<4&240|c>>2;if(i.push(f),h!==64){var p=c<<6&192|h;i.push(p)}}}return i},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},If=function(t){var e=Dc(t);return ho.encodeByteArray(e,!0)},_r=function(t){try{return ho.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sf(t){return Oc(void 0,t)}function Oc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(var i in e)!e.hasOwnProperty(i)||!Cf(i)||(t[i]=Oc(t[i],e[i]));return t}function Cf(t){return t!=="__proto__"}/**
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
 */var fo=function(){function t(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,i){e.resolve=n,e.reject=i})}return t.prototype.wrapCallback=function(e){var n=this;return function(i,s){i?n.reject(i):n.resolve(s),typeof e=="function"&&(n.promise.catch(function(){}),e.length===1?e(i):e(i,s))}},t}();/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function as(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function po(){var t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function go(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Af(){return Ie().indexOf("Electron/")>=0}function bf(){var t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rf(){return Ie().indexOf("MSAppHost/")>=0}function xc(){return kc.NODE_ADMIN===!0}function Nf(){return"indexedDB"in self&&indexedDB!=null}function kf(){return new Promise(function(t,e){try{var n=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=function(){s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=function(){n=!1},s.onerror=function(){var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(r){e(r)}})}function Df(){return!(!navigator||!navigator.cookieEnabled)}/**
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
 */var Of="FirebaseError",en=function(t){vf(e,t);function e(n,i,s){var r=t.call(this,i)||this;return r.code=n,r.customData=s,r.name=Of,Object.setPrototypeOf(r,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,tn.prototype.create),r}return e}(Error),tn=function(){function t(e,n,i){this.service=e,this.serviceName=n,this.errors=i}return t.prototype.create=function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var s=n[0]||{},r=this.service+"/"+e,o=this.errors[e],a=o?xf(o,s):"Error",l=this.serviceName+": "+a+" ("+r+").",c=new en(r,l,s);return c},t}();function xf(t,e){return t.replace(Pf,function(n,i){var s=e[i];return s!=null?String(s):"<"+i+"?>"})}var Pf=/\{\$([^}]+)}/g;/**
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
 */function Dn(t){return JSON.parse(t)}function ne(t){return JSON.stringify(t)}/**
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
 */var Pc=function(t){var e={},n={},i={},s="";try{var r=t.split(".");e=Dn(_r(r[0])||""),n=Dn(_r(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Mf=function(t){var e=Pc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Lf=function(t){var e=Pc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ke(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function La(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oi(t,e,n){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function vr(t,e){if(t===e)return!0;for(var n=Object.keys(t),i=Object.keys(e),s=0,r=n;s<r.length;s++){var o=r[s];if(!i.includes(o))return!1;var a=t[o],l=e[o];if(Fa(a)&&Fa(l)){if(!vr(a,l))return!1}else if(a!==l)return!1}for(var c=0,u=i;c<u.length;c++){var o=u[c];if(!n.includes(o))return!1}return!0}function Fa(t){return t!==null&&typeof t=="object"}/**
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
 */function mo(t){for(var e=[],n=function(l,c){Array.isArray(c)?c.forEach(function(u){e.push(encodeURIComponent(l)+"="+encodeURIComponent(u))}):e.push(encodeURIComponent(l)+"="+encodeURIComponent(c))},i=0,s=Object.entries(t);i<s.length;i++){var r=s[i],o=r[0],a=r[1];n(o,a)}return e.length?"&"+e.join("&"):""}/**
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
 */var Ff=function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(e,n){n||(n=0);var i=this.W_;if(typeof e=="string")for(var s=0;s<16;s++)i[s]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(var s=0;s<16;s++)i[s]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(var s=16;s<80;s++){var r=i[s-3]^i[s-8]^i[s-14]^i[s-16];i[s]=(r<<1|r>>>31)&4294967295}for(var o=this.chain_[0],a=this.chain_[1],l=this.chain_[2],c=this.chain_[3],u=this.chain_[4],h,d,s=0;s<80;s++){s<40?s<20?(h=c^a&(l^c),d=1518500249):(h=a^l^c,d=1859775393):s<60?(h=a&l|c&(a|l),d=2400959708):(h=a^l^c,d=3395469782);var r=(o<<5|o>>>27)+h+u+d+i[s]&4294967295;u=c,c=l,l=(a<<30|a>>>2)&4294967295,a=o,o=r}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295},t.prototype.update=function(e,n){if(e!=null){n===void 0&&(n=e.length);for(var i=n-this.blockSize,s=0,r=this.buf_,o=this.inbuf_;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}},t.prototype.digest=function(){var e=[],n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);for(var s=0,i=0;i<5;i++)for(var r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e},t}();function Uf(t,e){var n=new Vf(t,e);return n.subscribe.bind(n)}var Vf=function(){function t(e,n){var i=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){e(i)}).catch(function(s){i.error(s)})}return t.prototype.next=function(e){this.forEachObserver(function(n){n.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(n){n.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,n,i){var s=this,r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");$f(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=js),r.error===void 0&&(r.error=js),r.complete===void 0&&(r.complete=js);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{s.finalError?r.error(s.finalError):r.complete()}catch{}}),this.observers.push(r),o},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,e)},t.prototype.sendOne=function(e,n){var i=this;this.task.then(function(){if(i.observers!==void 0&&i.observers[e]!==void 0)try{n(i.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})},t.prototype.close=function(e){var n=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},t}();function $f(t,e){if(typeof t!="object"||t===null)return!1;for(var n=0,i=e;n<i.length;n++){var s=i[n];if(s in t&&typeof t[s]=="function")return!0}return!1}function js(){}function qf(t,e){return t+" failed: "+e+" argument "}/**
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
 */var Bf=function(t){for(var e=[],n=0,i=0;i<t.length;i++){var s=t.charCodeAt(i);if(s>=55296&&s<=56319){var r=s-55296;i++,g(i<t.length,"Surrogate pair missing trail surrogate.");var o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ls=function(t){for(var e=0,n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */var jf=1e3,Hf=2,Wf=4*60*60*1e3,zf=.5;function Ua(t,e,n){e===void 0&&(e=jf),n===void 0&&(n=Hf);var i=e*Math.pow(n,t),s=Math.round(zf*i*(Math.random()-.5)*2);return Math.min(Wf,i+s)}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}var Ae=function(){function t(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var rt="[DEFAULT]";/**
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
 */var Gf=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var i=new fo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,i;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Yf(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch{}try{for(var s=Bs(this.instancesDeferred.entries()),r=s.next();!r.done;r=s.next()){var o=yi(r.value,2),a=o[0],l=o[1],c=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:c});l.resolve(u)}catch{}}}catch(h){n={error:h}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=rt),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return wf(this,void 0,void 0,function(){var e;return Ef(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Ma(Ma([],yi(e.filter(function(i){return"INTERNAL"in i}).map(function(i){return i.INTERNAL.delete()}))),yi(e.filter(function(i){return"_delete"in i}).map(function(i){return i._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=rt),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=rt),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,i;e===void 0&&(e={});var s=e.options,r=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:r});try{for(var l=Bs(this.instancesDeferred.entries()),c=l.next();!c.done;c=l.next()){var u=yi(c.value,2),h=u[0],d=u[1],f=this.normalizeInstanceIdentifier(h);o===f&&d.resolve(a)}}catch(p){n={error:p}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var i,s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);var o=this.instances.get(s);return o&&e(o,s),function(){r.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var i,s,r=this.onInitCallbacks.get(n);if(r)try{for(var o=Bs(r),a=o.next();!a.done;a=o.next()){var l=a.value;try{l(e,n)}catch{}}}catch(c){i={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,i=e.options,s=i===void 0?{}:i,r=this.instances.get(n);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kf(n),options:s}),this.instances.set(n,r),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(r,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,r)}catch{}return r||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=rt),this.component?this.component.multipleInstances?e:rt:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Kf(t){return t===rt?void 0:t}function Yf(t){return t.instantiationMode==="EAGER"}/**
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
 */var Xf=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new Gf(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Re(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var i=Array(t),s=0,e=0;e<n;e++)for(var r=arguments[e],o=0,a=r.length;o<a;o++,s++)i[s]=r[o];return i}/**
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
 */var st,k;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(k||(k={}));var Qf={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Jf=k.INFO,Zf=(st={},st[k.DEBUG]="log",st[k.VERBOSE]="log",st[k.INFO]="info",st[k.WARN]="warn",st[k.ERROR]="error",st),ep=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var s=new Date().toISOString(),r=Zf[e];if(r)console[r].apply(console,Re(["["+s+"]  "+t.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Gn=function(){function t(e){this.name=e,this._logLevel=Jf,this._logHandler=ep,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in k))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?Qf[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Re([this,k.DEBUG],e)),this._logHandler.apply(this,Re([this,k.DEBUG],e))},t.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Re([this,k.VERBOSE],e)),this._logHandler.apply(this,Re([this,k.VERBOSE],e))},t.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Re([this,k.INFO],e)),this._logHandler.apply(this,Re([this,k.INFO],e))},t.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Re([this,k.WARN],e)),this._logHandler.apply(this,Re([this,k.WARN],e))},t.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Re([this,k.ERROR],e)),this._logHandler.apply(this,Re([this,k.ERROR],e))},t}();/**
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
 */class tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(np(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function np(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",ip="0.7.0";/**
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
 */const yo=new Gn("@firebase/app"),sp="@firebase/app-compat",rp="@firebase/analytics-compat",op="@firebase/analytics",ap="@firebase/app-check-compat",lp="@firebase/app-check",cp="@firebase/auth",up="@firebase/auth-compat",hp="@firebase/database",dp="@firebase/database-compat",fp="@firebase/functions",pp="@firebase/functions-compat",gp="@firebase/installations",mp="@firebase/installations-compat",yp="@firebase/messaging",_p="@firebase/messaging-compat",vp="@firebase/performance",wp="@firebase/performance-compat",Ep="@firebase/remote-config",Tp="@firebase/remote-config-compat",Ip="@firebase/storage",Sp="@firebase/storage-compat",Cp="@firebase/firestore",Ap="@firebase/firestore-compat",bp="firebase",Rp="9.0.0";/**
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
 */const Lc="[DEFAULT]",Np={[Mc]:"fire-core",[sp]:"fire-core-compat",[op]:"fire-analytics",[rp]:"fire-analytics-compat",[lp]:"fire-app-check",[ap]:"fire-app-check-compat",[cp]:"fire-auth",[up]:"fire-auth-compat",[hp]:"fire-rtdb",[dp]:"fire-rtdb-compat",[fp]:"fire-fn",[pp]:"fire-fn-compat",[gp]:"fire-iid",[mp]:"fire-iid-compat",[yp]:"fire-fcm",[_p]:"fire-fcm-compat",[vp]:"fire-perf",[wp]:"fire-perf-compat",[Ep]:"fire-rc",[Tp]:"fire-rc-compat",[Ip]:"fire-gcs",[Sp]:"fire-gcs-compat",[Cp]:"fire-fst",[Ap]:"fire-fst-compat","fire-js":"fire-js",[bp]:"fire-js-all"};/**
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
 */const xi=new Map,wr=new Map;function kp(t,e){try{t.container.addComponent(e)}catch(n){yo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Me(t){const e=t.name;if(wr.has(e))return yo.debug(`There were multiple attempts to register component ${e}.`),!1;wr.set(e,t);for(const n of xi.values())kp(n,t);return!0}function _o(t,e){return t.container.getProvider(e)}/**
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
 */const Dp={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},Pi=new tn("app","Firebase",Dp);/**
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
 */class Op{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Kn=Rp;function xp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Lc,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Pi.create("bad-app-name",{appName:String(i)});const s=xi.get(i);if(s){if(vr(t,s.options)&&vr(n,s.config))return s;throw Pi.create("duplicate-app",{appName:i})}const r=new Xf(i);for(const a of wr.values())r.addComponent(a);const o=new Op(t,n,r);return xi.set(i,o),o}function Pp(t=Lc){const e=xi.get(t);if(!e)throw Pi.create("no-app",{appName:t});return e}function ze(t,e,n){var i;let s=(i=Np[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yo.warn(a.join(" "));return}Me(new Ae(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function Mp(t){Me(new Ae("platform-logger",e=>new tp(e),"PRIVATE")),ze(Mc,ip,t),ze("fire-js","")}Mp();var Lp="firebase",Fp="9.0.0";/**
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
 */ze(Lp,Fp,"app");const Up={apiKey:"AIzaSyBh1UFfDoC9meS3PaU-ZC7Rujm7cidbyXI",authDomain:"ato-gamma-mu.firebaseapp.com",projectId:"ato-gamma-mu",storageBucket:"ato-gamma-mu.appspot.com",messagingSenderId:"933428144661",appId:"1:933428144661:web:575041f4ef34f27bc47c1c"},qI=xp(Up);function Vp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fc=new tn("auth","Firebase",Vp());/**
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
 */const Va=new Gn("@firebase/auth");function bi(t,...e){Va.logLevel<=k.ERROR&&Va.error(`Auth (${Kn}): ${t}`,...e)}/**
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
 */function $a(t,...e){throw vo(t,...e)}function Uc(t,...e){return vo(t,...e)}function vo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Fc.create(t,...e)}function O(t,e,...n){if(!t)throw vo(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bi(e),new Error(e)}function Mi(t,e){t||En(e)}/**
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
 */const qa=new Map;function at(t){Mi(t instanceof Function,"Expected a class definition");let e=qa.get(t);return e?(Mi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qa.set(t,e),e)}function $p(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function qp(){return Ba()==="http:"||Ba()==="https:"}function Ba(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Bp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qp()||po()||"connection"in navigator)?navigator.onLine:!0}function jp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mi(n>e,"Short delay should be less than long delay!"),this.isMobile=as()||go()}get(){return Bp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hp(t,e){Mi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Er{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Wp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"};/**
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
 */const zp=new Yn(3e4,6e4);async function Vc(t,e,n,i,s={}){return $c(t,s,()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=mo(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Er.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Er.fetch()(qc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function $c(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Wp),e);try{const s=new Gp(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Hs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=(r.ok?o.errorMessage:o.error.message).split(" : ")[0];if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hs(t,"email-already-in-use",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");$a(t,c)}}catch(s){if(s instanceof en)throw s;$a(t,"network-request-failed")}}function qc(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Hp(t.config,s):`${t.config.apiScheme}://${s}`}class Gp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Uc(this.auth,"timeout")),zp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Uc(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function Kp(t,e){return Vc(t,"POST","/v1/accounts:delete",e)}async function Yp(t,e){return Vc(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Tn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xp(t,e=!1){const n=tt(t),i=await n.getIdToken(e),s=Bc(i);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Tn(Ws(s.auth_time)),issuedAtTime:Tn(Ws(s.iat)),expirationTime:Tn(Ws(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ws(t){return Number(t)*1e3}function Bc(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=_r(n);return s?JSON.parse(s):(bi("Failed to decode base64 JWT payload"),null)}catch(s){return bi("Caught error parsing JWT payload as JSON",s),null}}function Qp(t){const e=Bc(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof en&&Jp(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Jp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Zp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Li(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Tr(t,Yp(n,{idToken:i}));O(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ng(r.providerUserInfo):[],a=tg(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function eg(t){const e=tt(t);await Li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tg(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ng(t){return t.map(e=>{var{providerId:n}=e,i=Nc(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function ig(t,e){const n=await $c(t,{},()=>{const i=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=qc(t,s,"/v1/token",`key=${r}`);return Er.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await ig(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new On;return i&&(O(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(O(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function Ye(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Nc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Zp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.metadata=new jc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xp(this,e)}reload(){return eg(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Li(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tr(this,Kp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=n.createdAt)!==null&&c!==void 0?c:void 0,we=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:ee,emailVerified:H,isAnonymous:qe,providerData:Fe,stsTokenManager:mi}=n;O(ee&&mi,e,"internal-error");const fn=On.fromJSON(this.name,mi);O(typeof ee=="string",e,"internal-error"),Ye(h,e.name),Ye(d,e.name),O(typeof H=="boolean",e,"internal-error"),O(typeof qe=="boolean",e,"internal-error"),Ye(f,e.name),Ye(p,e.name),Ye(w,e.name),Ye(I,e.name),Ye(F,e.name),Ye(we,e.name);const $s=new Ut({uid:ee,auth:e,email:d,emailVerified:H,displayName:h,isAnonymous:qe,photoURL:p,phoneNumber:f,tenantId:w,stsTokenManager:fn,createdAt:F,lastLoginAt:we});return Fe&&Array.isArray(Fe)&&($s.providerData=Fe.map(_f=>Object.assign({},_f))),I&&($s._redirectEventId=I),$s}static async _fromIdTokenResponse(e,n,i=!1){const s=new On;s.updateFromServerResponse(n);const r=new Ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Li(r),r}}/**
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
 */class Hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hc.type="NONE";const ja=Hc;/**
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
 */function zs(t,e,n){return`firebase:${t}:${e}:${n}`}class Vt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=zs(this.userKey,s.apiKey,r),this.fullPersistenceKey=zs("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Vt(at(ja),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||at(ja);const o=zs(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ut._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Vt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Vt(r,e,i))}}/**
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
 */function Ha(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cg(e))return"Blackberry";if(ug(e))return"Webos";if(rg(e))return"Safari";if((e.includes("chrome/")||og(e))&&!e.includes("edge/"))return"Chrome";if(lg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sg(t=Ie()){return/firefox\//i.test(t)}function rg(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function og(t=Ie()){return/crios\//i.test(t)}function ag(t=Ie()){return/iemobile/i.test(t)}function lg(t=Ie()){return/android/i.test(t)}function cg(t=Ie()){return/blackberry/i.test(t)}function ug(t=Ie()){return/webos/i.test(t)}/**
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
 */function Wc(t,e=[]){let n;switch(t){case"Browser":n=Ha(Ie());break;case"Worker":n=`${Ha(Ie())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kn}/${i}`}/**
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
 */class hg{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wa(this),this.idTokenSubscription=new Wa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var i;this._deleted||(this.persistenceManager=await Vt.create(this,e),!this._deleted&&(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o!=null&&o.user)&&(i=o.user)}return i?i._redirectEventId?(O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Li(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tt(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function dg(t){return tt(t)}class Wa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uf(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Yn(3e4,6e4);/**
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
 */new Yn(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new Yn(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new Yn(5e3,15e3);var fg="@firebase/auth",pg="0.17.0";/**
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
 */class gg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yg(t){Me(new Ae("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{O(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),O(!(r!=null&&r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wc(t)},l=new hg(o,a);return $p(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Me(new Ae("auth-internal",e=>{const n=dg(e.getProvider("auth").getImmediate());return(i=>new gg(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(fg,pg,mg(t))}yg("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ir=function(t,e){return Ir=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},Ir(t,e)};function _g(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ir(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function zc(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,wo=wo||{},E=vg||self;function Fi(){}function Sr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Xn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wg(t){return Object.prototype.hasOwnProperty.call(t,Gs)&&t[Gs]||(t[Gs]=++Eg)}var Gs="closure_uid_"+(1e9*Math.random()>>>0),Eg=0;function Tg(t,e,n){return t.call.apply(t.bind,arguments)}function Ig(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ie(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ie=Tg:ie=Ig,ie.apply(null,arguments)}function _i(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function oe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function nt(){this.s=this.s,this.o=this.o}var Sg=0;nt.prototype.s=!1;nt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Sg!=0)&&wg(this)};nt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Gc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Kc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,s=typeof t=="string"?t.split(""):t,r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Cg(t){e:{for(var e=mm,n=t.length,i=typeof t=="string"?t.split(""):t,s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function za(t){return Array.prototype.concat.apply([],arguments)}function Eo(t){var e=t.length;if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ui(t){return/^[\s\xa0]*$/.test(t)}var Ga=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function fe(t,e){return t.indexOf(e)!=-1}function Ks(t,e){return t<e?-1:t>e?1:0}var pe;e:{var Ka=E.navigator;if(Ka){var Ya=Ka.userAgent;if(Ya){pe=Ya;break e}}pe=""}function To(t,e,n){for(var i in t)e.call(n,t[i],i,t)}function Yc(t){var e={};for(var n in t)e[n]=t[n];return e}var Xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xc(t,e){for(var n,i,s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(var r=0;r<Xa.length;r++)n=Xa[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Io(t){return Io[" "](t),t}Io[" "]=Fi;function Ag(t){var e=Ng;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var bg=fe(pe,"Opera"),zt=fe(pe,"Trident")||fe(pe,"MSIE"),Qc=fe(pe,"Edge"),Cr=Qc||zt,Jc=fe(pe,"Gecko")&&!(fe(pe.toLowerCase(),"webkit")&&!fe(pe,"Edge"))&&!(fe(pe,"Trident")||fe(pe,"MSIE"))&&!fe(pe,"Edge"),Rg=fe(pe.toLowerCase(),"webkit")&&!fe(pe,"Edge");function Zc(){var t=E.document;return t?t.documentMode:void 0}var Vi;e:{var Ys="",Xs=function(){var t=pe;if(Jc)return/rv:([^\);]+)(\)|;)/.exec(t);if(Qc)return/Edge\/([\d\.]+)/.exec(t);if(zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Rg)return/WebKit\/(\S+)/.exec(t);if(bg)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xs&&(Ys=Xs?Xs[1]:""),zt){var Qs=Zc();if(Qs!=null&&Qs>parseFloat(Ys)){Vi=String(Qs);break e}}Vi=Ys}var Ng={};function kg(){return Ag(function(){for(var t=0,e=Ga(String(Vi)).split("."),n=Ga("9").split("."),i=Math.max(e.length,n.length),s=0;t==0&&s<i;s++){var r=e[s]||"",o=n[s]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],r[0].length==0&&o[0].length==0)break;t=Ks(r[1].length==0?0:parseInt(r[1],10),o[1].length==0?0:parseInt(o[1],10))||Ks(r[2].length==0,o[2].length==0)||Ks(r[2],o[2]),r=r[3],o=o[3]}while(t==0)}return 0<=t})}var Ar;if(E.document&&zt){var Qa=Zc();Ar=Qa||parseInt(Vi,10)||void 0}else Ar=void 0;var Dg=Ar,Og=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",Fi,e),E.removeEventListener("test",Fi,e)}catch{}return t}();function he(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};function xn(t,e){if(he.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jc){e:{try{Io(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xn.Z.h.call(this)}}oe(xn,he);var xg={2:"touch",3:"pen",4:"mouse"};xn.prototype.h=function(){xn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qn="closure_listenable_"+(1e6*Math.random()|0),Pg=0;function Mg(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Pg,this.ca=this.fa=!1}function cs(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function us(t){this.src=t,this.g={},this.h=0}us.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Rr(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Mg(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function br(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Gc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(cs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var So="closure_lm_"+(1e6*Math.random()|0),Js={};function eu(t,e,n,i,s){if(i&&i.once)return nu(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)eu(t,e[r],n,i,s);return null}return n=bo(n),t&&t[Qn]?t.N(e,n,Xn(i)?!!i.capture:!!i,s):tu(t,e,n,!1,i,s)}function tu(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Xn(s)?!!s.capture:!!s,a=Ao(t);if(a||(t[So]=a=new us(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Lg(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Og||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(su(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lg(){function t(n){return e.call(t.src,t.listener,n)}var e=Fg;return t}function nu(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)nu(t,e[r],n,i,s);return null}return n=bo(n),t&&t[Qn]?t.O(e,n,Xn(i)?!!i.capture:!!i,s):tu(t,e,n,!0,i,s)}function iu(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)iu(t,e[r],n,i,s);else i=Xn(i)?!!i.capture:!!i,n=bo(n),t&&t[Qn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Rr(r,n,i,s),-1<n&&(cs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ao(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rr(e,n,i,s)),(n=-1<t?e[t]:null)&&Co(n))}function Co(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Qn])br(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(su(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ao(e))?(br(n,t),n.h==0&&(n.src=null,e[So]=null)):cs(t)}}}function su(t){return t in Js?Js[t]:Js[t]="on"+t}function Fg(t,e){if(t.ca)t=!0;else{e=new xn(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Co(t),t=n.call(i,e)}return t}function Ao(t){return t=t[So],t instanceof us?t:null}var Zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function bo(t){return typeof t=="function"?t:(t[Zs]||(t[Zs]=function(e){return t.handleEvent(e)}),t[Zs])}function Z(){nt.call(this),this.i=new us(this),this.P=this,this.I=null}oe(Z,nt);Z.prototype[Qn]=!0;Z.prototype.removeEventListener=function(t,e,n,i){iu(this,t,e,n,i)};function se(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new he(e,t);else if(e instanceof he)e.target=e.target||t;else{var s=e;e=new he(i,t),Xc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=vi(o,i,!0,e)&&s}if(o=e.g=t,s=vi(o,i,!0,e)&&s,s=vi(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=vi(o,i,!1,e)&&s}Z.prototype.M=function(){if(Z.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)cs(n[i]);delete t.g[e],t.h--}}this.I=null};Z.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Z.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function vi(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&br(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Ro=E.JSON.stringify;function Ug(){var t=ou,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Vg=function(){function t(){this.h=this.g=null}return t.prototype.add=function(e,n){var i=ru.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i},t}(),ru=new(function(){function t(e,n){this.i=e,this.j=n,this.h=0,this.g=null}return t.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},t}())(function(){return new $g},function(t){return t.reset()}),$g=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(e,n){this.h=e,this.g=n,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function qg(t){E.setTimeout(function(){throw t},0)}function No(t,e){Nr||Bg(),kr||(Nr(),kr=!0),ou.add(t,e)}var Nr;function Bg(){var t=E.Promise.resolve(void 0);Nr=function(){t.then(jg)}}var kr=!1,ou=new Vg;function jg(){for(var t;t=Ug();){try{t.h.call(t.g)}catch(n){qg(n)}var e=ru;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kr=!1}function hs(t,e){Z.call(this),this.h=t||1,this.g=e||E,this.j=ie(this.kb,this),this.l=Date.now()}oe(hs,Z);_=hs.prototype;_.da=!1;_.S=null;_.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),se(this,"tick"),this.da&&(ko(this),this.start()))}};_.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ko(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}_.M=function(){hs.Z.M.call(this),ko(this),delete this.g};function Do(t,e,n){if(typeof t=="function")n&&(t=ie(t,n));else if(t&&typeof t.handleEvent=="function")t=ie(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function au(t){t.g=Do(function(){t.g=null,t.i&&(t.i=!1,au(t))},t.j);var e=t.h;t.h=null,t.m.apply(null,e)}var Hg=function(t){_g(e,t);function e(n,i){var s=t.call(this)||this;return s.m=n,s.j=i,s.h=null,s.i=!1,s.g=null,s}return e.prototype.l=function(n){this.h=arguments,this.g?this.i=!0:au(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(nt);function Pn(t){nt.call(this),this.h=t,this.g={}}oe(Pn,nt);var Ja=[];function lu(t,e,n,i){Array.isArray(n)||(n&&(Ja[0]=n.toString()),n=Ja);for(var s=0;s<n.length;s++){var r=eu(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function cu(t){To(t.g,function(e,n){this.g.hasOwnProperty(n)&&Co(e)},t),t.g={}}Pn.prototype.M=function(){Pn.Z.M.call(this),cu(this)};Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ds(){this.g=!0}ds.prototype.Aa=function(){this.g=!1};function Wg(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function zg(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Pt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Kg(t,n)+(i?" "+i:"")})}function Gg(t,e){t.info(function(){return"TIMEOUT: "+e})}ds.prototype.info=function(){};function Kg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ro(n)}catch{return e}}var bt={},Za=null;function fs(){return Za=Za||new Z}bt.Ma="serverreachability";function uu(t){he.call(this,bt.Ma,t)}oe(uu,he);function Mn(t){var e=fs();se(e,new uu(e))}bt.STAT_EVENT="statevent";function hu(t,e){he.call(this,bt.STAT_EVENT,t),this.stat=e}oe(hu,he);function ge(t){var e=fs();se(e,new hu(e,t))}bt.Na="timingevent";function du(t,e){he.call(this,bt.Na,t),this.size=e}oe(du,he);function Jn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var ps={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Oo(){}Oo.prototype.h=null;function el(t){return t.h||(t.h=t.i())}function pu(){}var Zn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function xo(){he.call(this,"d")}oe(xo,he);function Po(){he.call(this,"c")}oe(Po,he);var Dr;function gs(){}oe(gs,Oo);gs.prototype.g=function(){return new XMLHttpRequest};gs.prototype.i=function(){return{}};Dr=new gs;function ei(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Pn(this),this.P=Yg,t=Cr?125:void 0,this.W=new hs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gu}function gu(){this.i=null,this.g="",this.h=!1}var Yg=45e3,Or={},$i={};_=ei.prototype;_.setTimeout=function(t){this.P=t};function xr(t,e,n){t.K=1,t.v=ys(Ge(e)),t.s=n,t.U=!0,mu(t,null)}function mu(t,e){t.F=Date.now(),ti(t),t.A=Ge(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Iu(n.h,"t",i),t.C=0,n=t.l.H,t.h=new gu,t.g=ju(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Hg(ie(t.Ia,t,t.g),t.O)),lu(t.V,t.g,"readystatechange",t.gb),e=t.H?Yc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Mn(),Wg(t.j,t.u,t.A,t.m,t.X,t.s)}_.gb=function(t){t=t.target;var e=this.L;e&&je(t)==3?e.l():this.Ia(t)};_.Ia=function(t){try{if(t==this.g)e:{var e=je(this.g),n=this.g.Da(),i=this.g.ba();if(!(3>e)&&(e!=3||Cr||this.g&&(this.h.h||this.g.ga()||sl(this.g)))){this.I||e!=4||n==7||(n==8||0>=i?Mn(3):Mn(2)),ms(this);var s=this.g.ba();this.N=s;t:if(yu(this)){var r=sl(this.g);t="";var o=r.length,a=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lt(this),In(this);var l="";break t}this.h.i=new E.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(r[n],{stream:a&&n==o-1});r.splice(0,o),this.h.g+=t,this.C=0,l=this.h.g}else l=this.g.ga();if(this.i=s==200,zg(this.j,this.u,this.A,this.m,this.X,e,s),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ui(c)){var h=c;break t}}h=null}if(s=h)Pt(this.j,this.m,s,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pr(this,s);else{this.i=!1,this.o=3,ge(12),lt(this),In(this);break e}}this.U?(_u(this,e,l),Cr&&this.i&&e==3&&(lu(this.V,this.W,"tick",this.fb),this.W.start())):(Pt(this.j,this.m,l,null),Pr(this,l)),e==4&&lt(this),this.i&&!this.I&&(e==4?Vu(this.l,this):(this.i=!1,ti(this)))}else s==400&&0<l.indexOf("Unknown SID")?(this.o=3,ge(12)):(this.o=0,ge(13)),lt(this),In(this)}}}catch{}finally{}};function yu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function _u(t,e,n){for(var i=!0,s;!t.I&&t.C<n.length;)if(s=Xg(t,n),s==$i){e==4&&(t.o=4,ge(14),i=!1),Pt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Or){t.o=4,ge(15),Pt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Pt(t.j,t.m,s,null),Pr(t,s);yu(t)&&s!=$i&&s!=Or&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ge(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),jo(e),e.L=!0,ge(11))):(Pt(t.j,t.m,n,"[Invalid Chunked Response]"),lt(t),In(t))}_.fb=function(){if(this.g){var t=je(this.g),e=this.g.ga();this.C<e.length&&(ms(this),_u(this,t,e),this.i&&t!=4&&ti(this))}};function Xg(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?$i:(n=Number(e.substring(n,i)),isNaN(n)?Or:(i+=1,i+n>e.length?$i:(e=e.substr(i,n),t.C=i+n,e)))}_.cancel=function(){this.I=!0,lt(this)};function ti(t){t.Y=Date.now()+t.P,vu(t,t.P)}function vu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Jn(ie(t.eb,t),e)}function ms(t){t.B&&(E.clearTimeout(t.B),t.B=null)}_.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(Gg(this.j,this.A),this.K!=2&&(Mn(),ge(17)),lt(this),this.o=2,In(this)):vu(this,this.Y-t)};function In(t){t.l.G==0||t.I||Vu(t.l,t)}function lt(t){ms(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ko(t.W),cu(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Mr(n.i,t))){if(n.I=t.N,!t.J&&Mr(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Hi(n),ws(n);else break e;Bo(n),ge(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Jn(ie(n.ab,n),6e3));if(1>=Au(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ct(n,11)}else if((t.J||n.g==t)&&Hi(n),!Ui(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){var r=s[e];if(n.U=r[0],r=r[1],n.G==2)if(r[0]=="c"){n.J=r[1],n.la=r[2];var o=r[3];o!=null&&(n.ma=o,n.h.info("VER="+n.ma));var a=r[4];a!=null&&(n.za=a,n.h.info("SVER="+n.za));var l=r[5];l!=null&&typeof l=="number"&&0<l&&(i=1.5*l,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;var c=t.g;if(c){var u=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(u){var h=i.i;!h.g&&(fe(u,"spdy")||fe(u,"quic")||fe(u,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Fo(h,h.h),h.h=null))}if(i.D){var d=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(i.sa=d,q(i.F,i.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var f=t;if(i.oa=Bu(i,i.H?i.la:null,i.W),f.J){bu(i.i,f);var p=f,w=i.K;w&&p.setTimeout(w),p.B&&(ms(p),ti(p)),i.g=f}else Fu(i);0<n.l.length&&Es(n)}else r[0]!="stop"&&r[0]!="close"||ct(n,7);else n.G==3&&(r[0]=="stop"||r[0]=="close"?r[0]=="stop"?ct(n,7):qo(n):r[0]!="noop"&&n.j&&n.j.wa(r),n.A=0)}}Mn(4)}catch{}}function Qg(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Sr(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Mo(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sr(t)||typeof t=="string")Kc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Sr(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=Qg(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function nn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof nn)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}_=nn.prototype;_.R=function(){Lo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};_.T=function(){return Lo(this),this.g.concat()};function Lo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];gt(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],gt(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}_.get=function(t,e){return gt(this.h,t)?this.h[t]:e};_.set=function(t,e){gt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};_.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var wu=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Jg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof mt){this.g=e!==void 0?e:t.g,qi(this,t.j),this.s=t.s,Bi(this,t.i),ji(this,t.m),this.l=t.l,e=t.h;var n=new Ln;n.i=e.i,e.g&&(n.g=new nn(e.g),n.h=e.h),tl(this,n),this.o=t.o}else t&&(n=String(t).match(wu))?(this.g=!!e,qi(this,n[1]||"",!0),this.s=Sn(n[2]||""),Bi(this,n[3]||"",!0),ji(this,n[4]),this.l=Sn(n[5]||"",!0),tl(this,n[6]||"",!0),this.o=Sn(n[7]||"")):(this.g=!!e,this.h=new Ln(null,this.g))}mt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vn(e,nl,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vn(e,nl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(vn(n,n.charAt(0)=="/"?im:nm,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vn(n,rm)),t.join("")};function Ge(t){return new mt(t)}function qi(t,e,n){t.j=n?Sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bi(t,e,n){t.i=n?Sn(e,!0):e}function ji(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tl(t,e,n){e instanceof Ln?(t.h=e,om(t.h,t.g)):(n||(e=vn(e,sm)),t.h=new Ln(e,t.g))}function q(t,e,n){t.h.set(e,n)}function ys(t){return q(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zg(t){return t instanceof mt?Ge(t):new mt(t,void 0)}function em(t,e,n,i){var s=new mt(null,void 0);return t&&qi(s,t),e&&Bi(s,e),n&&ji(s,n),i&&(s.l=i),s}function Sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tm),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tm(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nl=/[#\/\?@]/g,nm=/[#\?:]/g,im=/[#\?]/g,sm=/[#\?@]/g,rm=/#/g;function Ln(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function it(t){t.g||(t.g=new nn,t.h=0,t.i&&Jg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}_=Ln.prototype;_.add=function(t,e){it(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Eu(t,e){it(t),e=sn(t,e),gt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,gt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Lo(t)))}function Tu(t,e){return it(t),e=sn(t,e),gt(t.g.h,e)}_.forEach=function(t,e){it(this),this.g.forEach(function(n,i){Kc(n,function(s){t.call(e,s,i,this)},this)},this)};_.T=function(){it(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};_.R=function(t){it(this);var e=[];if(typeof t=="string")Tu(this,t)&&(e=za(e,this.g.get(sn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=za(e,t[n])}return e};_.set=function(t,e){return it(this),this.i=null,t=sn(this,t),Tu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Iu(t,e,n){Eu(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),Eo(n)),t.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function om(t,e){e&&!t.j&&(it(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Eu(this,i),Iu(this,s,n))},t)),t.j=e}var am=function(){function t(e,n){this.h=e,this.g=n}return t}();function Su(t){this.l=t||lm,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lm=10;function Cu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Au(t){return t.h?1:t.g?t.g.size:0}function Mr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fo(t,e){t.g?t.g.add(e):t.h=e}function bu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Su.prototype.cancel=function(){var t,e;if(this.i=Ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){try{for(var n=zc(this.g.values()),i=n.next();!i.done;i=n.next()){var s=i.value;s.cancel()}}catch(r){t={error:r}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}};function Ru(t){var e,n;if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){var i=t.i;try{for(var s=zc(t.g.values()),r=s.next();!r.done;r=s.next()){var o=r.value;i=i.concat(o.D)}}catch(a){e={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return i}return Eo(t.i)}function Uo(){}Uo.prototype.stringify=function(t){return E.JSON.stringify(t,void 0)};Uo.prototype.parse=function(t){return E.JSON.parse(t,void 0)};function cm(){this.g=new Uo}function um(t,e,n){var i=n||"";try{Mo(t,function(s,r){var o=s;Xn(s)&&(o=Ro(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function hm(t,e){var n=new ds;if(E.Image){var i=new Image;i.onload=_i(wi,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_i(wi,n,i,"TestLoadImage: error",!1,e),i.onabort=_i(wi,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_i(wi,n,i,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function wi(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ni(t){this.l=t.$b||null,this.j=t.ib||!1}oe(ni,Oo);ni.prototype.g=function(){return new _s(this.l,this.j)};ni.prototype.i=function(t){return function(){return t}}({});function _s(t,e){Z.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(_s,Z);var Vo=0;_=_s.prototype;_.open=function(t,e){if(this.readyState!=Vo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fn(this)};_.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||E).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=Vo};_.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Nu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}_.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ii(this):Fn(this),this.readyState==3&&Nu(this)}};_.Ua=function(t){this.g&&(this.response=this.responseText=t,ii(this))};_.Ta=function(t){this.g&&(this.response=t,ii(this))};_.ha=function(){this.g&&ii(this)};function ii(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fn(t)}_.setRequestHeader=function(t,e){this.v.append(t,e)};_.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dm=E.JSON.parse;function K(t){Z.call(this),this.headers=new nn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ku,this.K=this.L=!1}oe(K,Z);var ku="",fm=/^https?$/i,pm=["POST","PUT"];_=K.prototype;_.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Dr.g(),this.C=this.u?el(this.u):el(Dr),this.g.onreadystatechange=ie(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){il(this,r);return}t=n||"";var s=new nn(this.headers);i&&Mo(i,function(r,o){s.set(o,r)}),i=Cg(s.T()),n=E.FormData&&t instanceof E.FormData,!(0<=Gc(pm,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xu(this),0<this.B&&((this.K=gm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ie(this.pa,this)):this.A=Do(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){il(this,r)}};function gm(t){return zt&&kg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function mm(t){return t.toLowerCase()=="content-type"}_.pa=function(){typeof wo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,se(this,"timeout"),this.abort(8))};function il(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Du(t),vs(t)}function Du(t){t.D||(t.D=!0,se(t,"complete"),se(t,"error"))}_.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,se(this,"complete"),se(this,"abort"),vs(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vs(this,!0)),K.Z.M.call(this)};_.Fa=function(){this.s||(this.F||this.v||this.l?Ou(this):this.cb())};_.cb=function(){Ou(this)};function Ou(t){if(t.h&&typeof wo<"u"&&(!t.C[1]||je(t)!=4||t.ba()!=2)){if(t.v&&je(t)==4)Do(t.Fa,0,t);else if(se(t,"readystatechange"),je(t)==4){t.h=!1;try{var e=t.ba();e:switch(e){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break e;default:n=!1}var i;if(!(i=n)){var s;if(s=e===0){var r=String(t.H).match(wu)[1]||null;if(!r&&E.self&&E.self.location){var o=E.self.location.protocol;r=o.substr(0,o.length-1)}s=!fm.test(r?r.toLowerCase():"")}i=s}if(i)se(t,"complete"),se(t,"success");else{t.m=6;try{var a=2<je(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.ba()+"]",Du(t)}}finally{vs(t)}}}}function vs(t,e){if(t.g){xu(t);var n=t.g,i=t.C[0]?Fi:null;t.g=null,t.C=null,e||se(t,"ready");try{n.onreadystatechange=i}catch{}}}function xu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}function je(t){return t.g?t.g.readyState:0}_.ba=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}};_.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dm(e)}};function sl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ku:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}_.Da=function(){return this.m};_.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function ym(t){var e="";return To(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function $o(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ym(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):q(t,e,n))}function pn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pu(t){this.za=0,this.l=[],this.h=new ds,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=pn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=pn("baseRetryDelayMs",5e3,t),this.$a=pn("retryDelaySeedMs",1e4,t),this.Ya=pn("forwardChannelMaxRetries",2,t),this.ra=pn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Su(t&&t.concurrentRequestLimit),this.Ca=new cm,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}_=Pu.prototype;_.ma=8;_.G=1;function qo(t){if(Mu(t),t.G==3){var e=t.V++,n=Ge(t.F);q(n,"SID",t.J),q(n,"RID",e),q(n,"TYPE","terminate"),si(t,n),e=new ei(t,t.h,e,void 0),e.K=2,e.v=ys(Ge(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(e.v.toString(),"")),!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=ju(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ti(e)}qu(t)}_.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ws(t){t.g&&(jo(t),t.g.cancel(),t.g=null)}function Mu(t){ws(t),t.u&&(E.clearTimeout(t.u),t.u=null),Hi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function er(t,e){t.l.push(new am(t.Za++,e)),t.G==3&&Es(t)}function Es(t){Cu(t.i)||t.m||(t.m=!0,No(t.Ha,t),t.C=0)}function _m(t,e){return Au(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Jn(ie(t.Ha,t,e),$u(t,t.C)),t.C++,!0)}_.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new ei(this,this.h,t,void 0),n=this.s;if(this.P&&(n?(n=Yc(n),Xc(n,this.P)):n=this.P),this.o===null&&(e.H=n),this.ja)e:{for(var i=0,s=0;s<this.l.length;s++){t:{var r=this.l[s];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(i+=r,4096<i){i=s;break e}if(i===4096||s===this.l.length-1){i=s+1;break e}}i=1e3}else i=1e3;i=Lu(this,e,i),s=Ge(this.F),q(s,"RID",t),q(s,"CVER",22),this.D&&q(s,"X-HTTP-Session-Id",this.D),si(this,s),this.o&&n&&$o(s,this.o,n),Fo(this.i,e),this.Ra&&q(s,"TYPE","init"),this.ja?(q(s,"$req",i),q(s,"SID","null"),e.$=!0,xr(e,s,null)):xr(e,s,i),this.G=2}}else this.G==3&&(t?rl(this,t):this.l.length==0||Cu(this.i)||rl(this))};function rl(t,e){var n;e?n=e.m:n=t.V++;var i=Ge(t.F);q(i,"SID",t.J),q(i,"RID",n),q(i,"AID",t.U),si(t,i),t.o&&t.s&&$o(i,t.o,t.s),n=new ei(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Lu(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Fo(t.i,n),xr(n,i,e)}function si(t,e){t.j&&Mo({},function(n,i){q(e,i,n)})}function Lu(t,e,n){n=Math.min(t.l.length,n);var i=t.j?ie(t.j.Oa,t.j,t):null;e:for(var s=t.l,r=-1;;){var o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);for(var a=!0,l=0;l<n;l++){var c=s[l].h,u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{um(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}return t=t.l.splice(0,n),e.D=t,i}function Fu(t){t.g||t.u||(t.Y=1,No(t.Ga,t),t.A=0)}function Bo(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Jn(ie(t.Ga,t),$u(t,t.A)),t.A++,!0)}_.Ga=function(){if(this.u=null,Uu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Jn(ie(this.bb,this),t)}};_.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ge(10),ws(this),Uu(this))};function jo(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function Uu(t){t.g=new ei(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);q(e,"RID","rpc"),q(e,"SID",t.J),q(e,"CI",t.N?"0":"1"),q(e,"AID",t.U),si(t,e),q(e,"TYPE","xmlhttp"),t.o&&t.s&&$o(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ys(Ge(e)),n.s=null,n.U=!0,mu(n,t)}_.ab=function(){this.v!=null&&(this.v=null,ws(this),Bo(this),ge(19))};function Hi(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function Vu(t,e){var n=null;if(t.g==e){Hi(t),jo(t),t.g=null;var i=2}else if(Mr(t.i,e))n=e.D,bu(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=fs(),se(i,new du(i,n)),Es(t)}else Fu(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&_m(t,e)||i==2&&Bo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ct(t,5);break;case 4:ct(t,10);break;case 3:ct(t,6);break;default:ct(t,2)}}}function $u(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ct(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=ie(t.jb,t);n||(n=new mt("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||qi(n,"https"),ys(n)),hm(n.toString(),i)}else ge(2);t.G=0,t.j&&t.j.va(e),qu(t),Mu(t)}_.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ge(2)):(this.h.info("Failed to ping google.com"),ge(1))};function qu(t){t.G=0,t.I=-1,t.j&&((Ru(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Eo(t.l),t.l.length=0),t.j.ua())}function Bu(t,e,n){var i=Zg(n);if(i.i!="")e&&Bi(i,e+"."+i.i),ji(i,i.m);else{var s=E.location;i=em(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&To(t.aa,function(r,o){q(i,o,r)}),e=t.D,n=t.sa,e&&n&&q(i,e,n),q(i,"VER",t.ma),si(t,i),i}function ju(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new K(new ni({ib:!0})):new K(t.qa),e.L=t.H,e}function Hu(){}_=Hu.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Oa=function(){};function Wi(){if(zt&&!(10<=Number(Dg)))throw Error("Environmental error: no available transport.")}Wi.prototype.g=function(t,e){return new Se(t,e)};function Se(t,e){Z.call(this),this.g=new Pu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ui(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ui(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new rn(this)}oe(Se,Z);Se.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),No(ie(t.hb,t,e))),ge(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Bu(t,null,t.W),Es(t)};Se.prototype.close=function(){qo(this.g)};Se.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,er(this.g,e)}else this.v?(e={},e.__data__=Ro(t),er(this.g,e)):er(this.g,t)};Se.prototype.M=function(){this.g.j=null,delete this.j,qo(this.g),delete this.g,Se.Z.M.call(this)};function Wu(t){xo.call(this);var e=t.__sm__;if(e){e:{for(var n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}oe(Wu,xo);function zu(){Po.call(this),this.status=1}oe(zu,Po);function rn(t){this.g=t}oe(rn,Hu);rn.prototype.xa=function(){se(this.g,"a")};rn.prototype.wa=function(t){se(this.g,new Wu(t))};rn.prototype.va=function(t){se(this.g,new zu)};rn.prototype.ua=function(){se(this.g,"b")};Wi.prototype.createWebChannel=Wi.prototype.g;Se.prototype.send=Se.prototype.u;Se.prototype.open=Se.prototype.m;Se.prototype.close=Se.prototype.close;ps.NO_ERROR=0;ps.TIMEOUT=8;ps.HTTP_ERROR=6;fu.COMPLETE="complete";pu.EventType=Zn;Zn.OPEN="a";Zn.CLOSE="b";Zn.ERROR="c";Zn.MESSAGE="d";Z.prototype.listen=Z.prototype.N;K.prototype.listenOnce=K.prototype.O;K.prototype.getLastError=K.prototype.La;K.prototype.getLastErrorCode=K.prototype.Da;K.prototype.getStatus=K.prototype.ba;K.prototype.getResponseJson=K.prototype.Qa;K.prototype.getResponseText=K.prototype.ga;K.prototype.send=K.prototype.ea;var vm=function(){return new Wi},wm=function(){return fs()},tr=ps,Em=fu,Tm=bt,ol={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Im=ni,Ei=pu,Sm=K;/**
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
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
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
 */let on="9.0.0";/**
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
 */const yt=new Gn("@firebase/firestore");function al(){return yt.logLevel}function v(t,...e){if(yt.logLevel<=k.DEBUG){const n=e.map(Ho);yt.debug(`Firestore (${on}): ${t}`,...n)}}function Je(t,...e){if(yt.logLevel<=k.ERROR){const n=e.map(Ho);yt.error(`Firestore (${on}): ${t}`,...n)}}function ll(t,...e){if(yt.logLevel<=k.WARN){const n=e.map(Ho);yt.warn(`Firestore (${on}): ${t}`,...n)}}function Ho(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function C(t="Unexpected state"){const e=`FIRESTORE (${on}) INTERNAL ASSERTION FAILED: `+t;throw Je(e),new Error(e)}function G(t,e){t||C()}function D(t,e){return t}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Cm{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class Am{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class bm{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $t,e.enqueueRetryable(()=>s(this.currentUser))};const o=a=>{e.enqueueRetryable(async()=>{v("FirebaseCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),await r.promise,await s(this.currentUser)})};this.t.onInit(a=>o(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?o(a):(v("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $t)}},0),e.enqueueRetryable(async()=>{this.i===0&&(await r.promise,await s(this.currentUser))})}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(v("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(G(typeof i.accessToken=="string"),new Cm(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new me(e)}}class Rm{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=me.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class Nm{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Rm(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Wo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function km(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */Wo.T=-1;class Dm{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=km(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function M(t,e){return t<e?-1:t>e?1:0}function Un(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Xe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new Xe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function cl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Vn{constructor(e,n,i){n===void 0?n=0:n>e.length&&C(),i===void 0?i=e.length-n:i>e.length-n&&C(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class j extends Vn{construct(e,n,i){return new j(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new T(m.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new j(n)}static emptyPath(){return new j([])}}const xm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends Vn{construct(e,n,i){return new Ne(e,n,i)}static isValidIdentifier(e){return xm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new T(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new T(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new T(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new de(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new de(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const Pm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(t){if(G(!!t),typeof t=="string"){let e=0;const n=Pm.exec(t);if(G(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:z(t.seconds),nanos:z(t.nanos)}}function z(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gt(t){return typeof t=="string"?de.fromBase64String(t):de.fromUint8Array(t)}/**
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
 */function Gu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ku(t){const e=t.mapValue.fields.__previous_value__;return Gu(e)?Ku(e):e}function $n(t){const e=Ze(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */function an(t){return t==null}function Lr(t){return t===0&&1/t==-1/0}/**
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
 */class S{constructor(e){this.path=e}static fromPath(e){return new S(j.fromString(e))}static fromName(e){return new S(j.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&j.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return j.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new S(new j(e.slice()))}}/**
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
 */function _t(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gu(t)?4:10:C()}function Ve(t,e){const n=_t(t);if(n!==_t(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $n(t).isEqual($n(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ze(i.timestampValue),o=Ze(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gt(i.bytesValue).isEqual(Gt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return z(i.geoPointValue.latitude)===z(s.geoPointValue.latitude)&&z(i.geoPointValue.longitude)===z(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return z(i.integerValue)===z(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=z(i.doubleValue),o=z(s.doubleValue);return r===o?Lr(r)===Lr(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Un(t.arrayValue.values||[],e.arrayValue.values||[],Ve);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(cl(r)!==cl(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ve(r[a],o[a])))return!1;return!0}(t,e);default:return C()}}function qn(t,e){return(t.values||[]).find(n=>Ve(n,e))!==void 0}function Kt(t,e){const n=_t(t),i=_t(e);if(n!==i)return M(n,i);switch(n){case 0:return 0;case 1:return M(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=z(s.integerValue||s.doubleValue),a=z(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ul(t.timestampValue,e.timestampValue);case 4:return ul($n(t),$n(e));case 5:return M(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Gt(s),a=Gt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=M(o[l],a[l]);if(c!==0)return c}return M(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=M(z(s.latitude),z(r.latitude));return o!==0?o:M(z(s.longitude),z(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Kt(o[l],a[l]);if(c)return c}return M(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=M(a[u],c[u]);if(h!==0)return h;const d=Kt(o[a[u]],l[c[u]]);if(d!==0)return d}return M(a.length,c.length)}(t.mapValue,e.mapValue);default:throw C()}}function ul(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return M(t,e);const n=Ze(t),i=Ze(e),s=M(n.seconds,i.seconds);return s!==0?s:M(n.nanos,i.nanos)}function zo(t){return Fr(t)}function Fr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Ze(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,S.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Fr(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Fr(i.fields[a])}`;return r+"}"}(t.mapValue):C();var e,n}function Ur(t){return!!t&&"integerValue"in t}function Go(t){return!!t&&"arrayValue"in t}function hl(t){return!!t&&"nullValue"in t}function dl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nr(t){return!!t&&"mapValue"in t}function Cn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ts(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Cn(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cn(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!nr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cn(n)}setAll(e){let n=Ne.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Cn(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());nr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ve(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];nr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Ts(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Be(Cn(this.value))}}/**
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
 */class ae{constructor(e,n,i,s,r){this.key=e,this.documentType=n,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new ae(e,0,P.min(),Be.empty(),0)}static newFoundDocument(e,n,i){return new ae(e,1,n,i,0)}static newNoDocument(e,n){return new ae(e,2,n,Be.empty(),0)}static newUnknownDocument(e,n){return new ae(e,3,n,Be.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ae(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mm{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.A=null}}function fl(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Mm(t,e,n,i,s,r,o)}function Ko(t){const e=D(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Fm(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),an(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=zi(e.startAt)),e.endAt&&(n+="|ub:",n+=zi(e.endAt)),e.A=n}return e.A}function Lm(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${zo(i.value)}`;var i}).join(", ")}]`),an(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+zi(t.startAt)),t.endAt&&(e+=", endAt: "+zi(t.endAt)),`Target(${e})`}function Yo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Wm(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Ve(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gl(t.startAt,e.startAt)&&gl(t.endAt,e.endAt)}function Vr(t){return S.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ye extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new Um(e,n,i):n==="array-contains"?new qm(e,i):n==="in"?new Bm(e,i):n==="not-in"?new jm(e,i):n==="array-contains-any"?new Hm(e,i):new ye(e,n,i)}static R(e,n,i){return n==="in"?new Vm(e,i):new $m(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Kt(n,this.value)):n!==null&&_t(this.value)===_t(n)&&this.P(Kt(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Fm(t){return t.field.canonicalString()+t.op.toString()+zo(t.value)}class Um extends ye{constructor(e,n,i){super(e,n,i),this.key=S.fromName(i.referenceValue)}matches(e){const n=S.comparator(e.key,this.key);return this.P(n)}}class Vm extends ye{constructor(e,n){super(e,"in",n),this.keys=Yu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $m extends ye{constructor(e,n){super(e,"not-in",n),this.keys=Yu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Yu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>S.fromName(i.referenceValue))}class qm extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Go(n)&&qn(n.arrayValue,this.value)}}class Bm extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qn(this.value.arrayValue,n)}}class jm extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qn(this.value.arrayValue,n)}}class Hm extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Go(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>qn(this.value.arrayValue,i))}}class $r{constructor(e,n){this.position=e,this.before=n}}function zi(t){return`${t.before?"b":"a"}:${t.position.map(e=>zo(e)).join(",")}`}class An{constructor(e,n="asc"){this.field=e,this.dir=n}}function Wm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function pl(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=S.comparator(S.fromName(o.referenceValue),n.key):i=Kt(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function gl(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ve(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Is{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function zm(t,e,n,i,s,r,o,a){return new Is(t,e,n,i,s,r,o,a)}function Xo(t){return new Is(t)}function Ri(t){return!an(t.limit)&&t.limitType==="F"}function Gi(t){return!an(t.limit)&&t.limitType==="L"}function Gm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Km(t){for(const e of t.filters)if(e.v())return e.field;return null}function Ym(t){return t.collectionGroup!==null}function Bn(t){const e=D(t);if(e.V===null){e.V=[];const n=Km(e),i=Gm(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new An(n)),e.V.push(new An(Ne.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.V.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new An(Ne.keyField(),r))}}}return e.V}function vt(t){const e=D(t);if(!e.S)if(e.limitType==="F")e.S=fl(e.path,e.collectionGroup,Bn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Bn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new An(r.field,o))}const i=e.endAt?new $r(e.endAt.position,!e.endAt.before):null,s=e.startAt?new $r(e.startAt.position,!e.startAt.before):null;e.S=fl(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.S}function Xm(t,e,n){return new Is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ss(t,e){return Yo(vt(t),vt(e))&&t.limitType===e.limitType}function Xu(t){return`${Ko(vt(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${Lm(vt(t))}; limitType=${t.limitType})`}function Cs(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):S.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!pl(n.startAt,Bn(n),i)||n.endAt&&pl(n.endAt,Bn(n),i))}(t,e)}function Qu(t){return(e,n)=>{let i=!1;for(const s of Bn(t)){const r=Qm(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Qm(t,e,n){const i=t.field.isKeyField()?S.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Kt(a,l):C()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return C()}}/**
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
 */function Jm(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lr(e)?"-0":e}}function Zm(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class As{constructor(){this._=void 0}}function ey(t,e,n){return t instanceof Br?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Ki?Ju(t,e):t instanceof Yi?Zu(t,e):function(i,s){const r=ny(i,s),o=ml(r)+ml(i.C);return Ur(r)&&Ur(i.C)?Zm(o):Jm(i.N,o)}(t,e)}function ty(t,e,n){return t instanceof Ki?Ju(t,e):t instanceof Yi?Zu(t,e):n}function ny(t,e){return t instanceof jr?Ur(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Br extends As{}class Ki extends As{constructor(e){super(),this.elements=e}}function Ju(t,e){const n=eh(e);for(const i of t.elements)n.some(s=>Ve(s,i))||n.push(i);return{arrayValue:{values:n}}}class Yi extends As{constructor(e){super(),this.elements=e}}function Zu(t,e){let n=eh(e);for(const i of t.elements)n=n.filter(s=>!Ve(s,i));return{arrayValue:{values:n}}}class jr extends As{constructor(e,n){super(),this.N=e,this.C=n}}function ml(t){return z(t.integerValue||t.doubleValue)}function eh(t){return Go(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iy(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Ki&&i instanceof Ki||n instanceof Yi&&i instanceof Yi?Un(n.elements,i.elements,Ve):n instanceof jr&&i instanceof jr?Ve(n.C,i.C):n instanceof Br&&i instanceof Br}(t.transform,e.transform)}function Ni(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function sy(t,e,n){t instanceof nh?function(i,s,r){const o=i.value.clone(),a=vl(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qo?function(i,s,r){if(!Ni(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=vl(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(ih(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Hr(t,e,n){t instanceof nh?function(i,s,r){if(!Ni(i.precondition,s))return;const o=i.value.clone(),a=wl(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(_l(s),o).setHasLocalMutations()}(t,e,n):t instanceof Qo?function(i,s,r){if(!Ni(i.precondition,s))return;const o=wl(i.fieldTransforms,r,s),a=s.data;a.setAll(ih(i)),a.setAll(o),s.convertToFoundDocument(_l(s),a).setHasLocalMutations()}(t,e,n):function(i,s){Ni(i.precondition,s)&&s.convertToNoDocument(P.min())}(t,e)}function yl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Un(n,i,(s,r)=>iy(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function _l(t){return t.isFoundDocument()?t.version:P.min()}class nh extends th{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Qo extends th{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function ih(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function vl(t,e,n){const i=new Map;G(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,ty(o,a,n[s]))}return i}function wl(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,ey(r,o,e))}return i}/**
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
 */class ry{constructor(e){this.count=e}}/**
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
 */var W,b;function sh(t){if(t===void 0)return Je("GRPC error has no .code"),m.UNKNOWN;switch(t){case W.OK:return m.OK;case W.CANCELLED:return m.CANCELLED;case W.UNKNOWN:return m.UNKNOWN;case W.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case W.INTERNAL:return m.INTERNAL;case W.UNAVAILABLE:return m.UNAVAILABLE;case W.UNAUTHENTICATED:return m.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case W.NOT_FOUND:return m.NOT_FOUND;case W.ALREADY_EXISTS:return m.ALREADY_EXISTS;case W.PERMISSION_DENIED:return m.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case W.ABORTED:return m.ABORTED;case W.OUT_OF_RANGE:return m.OUT_OF_RANGE;case W.UNIMPLEMENTED:return m.UNIMPLEMENTED;case W.DATA_LOSS:return m.DATA_LOSS;default:return C()}}(b=W||(W={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||te.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,te.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ti(this.root,e,this.comparator,!0)}}class Ti{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class te{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??te.RED,this.left=s??te.EMPTY,this.right=r??te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new te(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return te.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}te.EMPTY=null,te.RED=!0,te.BLACK=!1;te.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(t,e,n,i,s){return this}insert(t,e,n){return new te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class re{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(e){return new El(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof re)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new re(this.comparator);return n.data=e,n}}class El{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const oy=new ve(S.comparator);function wt(){return oy}const ay=new ve(S.comparator);function Wr(){return ay}const ly=new re(S.comparator);function B(...t){let e=ly;for(const n of t)e=e.add(n);return e}const cy=new re(M);function rh(){return cy}/**
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
 */class bs{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,ri.createSynthesizedTargetChangeForCurrentChange(e,n)),new bs(P.min(),i,rh(),wt(),B())}}class ri{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ri(de.EMPTY_BYTE_STRING,n,B(),B(),B())}}/**
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
 */class ki{constructor(e,n,i,s){this.k=e,this.removedTargetIds=n,this.key=i,this.$=s}}class oh{constructor(e,n){this.targetId=e,this.O=n}}class ah{constructor(e,n,i=de.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Tl{constructor(){this.F=0,this.M=Sl(),this.L=de.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=B(),n=B(),i=B();return this.M.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:C()}}),new ri(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=Sl()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class uy{constructor(e){this.tt=e,this.et=new Map,this.nt=wt(),this.st=Il(),this.it=new re(M)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:C()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,i=e.O.count,s=this.dt(n);if(s){const r=s.target;if(Vr(r))if(i===0){const o=new S(r.path);this.at(n,o,ae.newNoDocument(o,P.min()))}else G(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((r,o)=>{const a=this.dt(o);if(a){if(r.current&&Vr(a.target)){const l=new S(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.at(o,l,ae.newNoDocument(l,e))}r.K&&(n.set(o,r.W()),r.G())}});let i=B();this.st.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))});const s=new bs(e,n,this.it,this.nt,i);return this.nt=wt(),this.st=Il(),this.it=new re(M),s}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,i){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Tl,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new re(M),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new Tl),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Il(){return new ve(S.comparator)}function Sl(){return new ve(S.comparator)}/**
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
 */const hy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class fy{constructor(e,n){this.databaseId=e,this.D=n}}function py(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gy(t,e){return t.D?e.toBase64():e.toUint8Array()}function jn(t){return G(!!t),P.fromTimestamp(function(e){const n=Ze(e);return new Xe(n.seconds,n.nanos)}(t))}function my(t,e){return function(n){return new j(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function lh(t){const e=j.fromString(t);return G(hh(e)),e}function ir(t,e){const n=lh(e);if(n.get(1)!==t.databaseId.projectId)throw new T(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new S(ch(n))}function zr(t,e){return my(t.databaseId,e)}function yy(t){const e=lh(t);return e.length===4?j.emptyPath():ch(e)}function Cl(t){return new j(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ch(t){return G(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _y(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.D?(G(c===void 0||typeof c=="string"),de.fromBase64String(c||"")):(G(c===void 0||c instanceof Uint8Array),de.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?m.UNKNOWN:sh(l.code);return new T(c,l.message||"")}(o);n=new ah(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=ir(t,i.document.name),r=jn(i.document.updateTime),o=new Be({mapValue:{fields:i.document.fields}}),a=ae.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new ki(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=ir(t,i.document),r=i.readTime?jn(i.readTime):P.min(),o=ae.newNoDocument(s,r),a=i.removedTargetIds||[];n=new ki([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=ir(t,i.document),r=i.removedTargetIds||[];n=new ki([],r,s,null)}else{if(!("filter"in e))return C();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new ry(s),o=i.targetId;n=new oh(o,r)}}return n}function vy(t,e){return{documents:[zr(t,e.path)]}}function wy(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=zr(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zr(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(dl(u.value))return{unaryFilter:{field:Ot(u.field),op:"IS_NAN"}};if(hl(u.value))return{unaryFilter:{field:Ot(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(dl(u.value))return{unaryFilter:{field:Ot(u.field),op:"IS_NOT_NAN"}};if(hl(u.value))return{unaryFilter:{field:Ot(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ot(u.field),op:Sy(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:Ot(c.field),direction:Iy(c.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(a,l){return a.D||an(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Al(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Al(e.endAt)),n}function Ey(t){let e=yy(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){G(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=uh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new An(Mt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,an(h)?null:h}(n.limit));let l=null;n.startAt&&(l=bl(n.startAt));let c=null;return n.endAt&&(c=bl(n.endAt)),zm(e,s,o,r,a,"F",l,c)}function Ty(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return C()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function uh(t){return t?t.unaryFilter!==void 0?[Ay(t)]:t.fieldFilter!==void 0?[Cy(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>uh(e)).reduce((e,n)=>e.concat(n)):C():[]}function Al(t){return{before:t.before,values:t.position}}function bl(t){const e=!!t.before,n=t.values||[];return new $r(n,e)}function Iy(t){return hy[t]}function Sy(t){return dy[t]}function Ot(t){return{fieldPath:t.canonicalString()}}function Mt(t){return Ne.fromServerFormat(t.fieldPath)}function Cy(t){return ye.create(Mt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return C()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ay(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Mt(t.unaryFilter.field);return ye.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Mt(t.unaryFilter.field);return ye.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mt(t.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Mt(t.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return C()}}function hh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const by="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ry{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,i)=>{n(e)})}static reject(e){return new y((n,i)=>{i(e)})}static waitFor(e){return new y((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=y.resolve(!1);for(const i of e)n=n.next(s=>s?y.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function oi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ny{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&sy(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Hr(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Hr(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),B())}isEqual(e){return this.batchId===e.batchId&&Un(this.mutations,e.mutations,(n,i)=>yl(n,i))&&Un(this.baseMutations,e.baseMutations,(n,i)=>yl(n,i))}}/**
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
 */class dt{constructor(e,n,i,s,r=P.min(),o=P.min(),a=de.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class ky{constructor(e){this.Wt=e}}function Dy(t){const e=Ey({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xm(e,e.limit,"L"):e}/**
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
 */class Oy{constructor(){this.Gt=new xy}addToCollectionParentIndex(e,n){return this.Gt.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.Gt.getEntries(n))}}class xy{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new re(j.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new re(j.comparator)).toArray()}}/**
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
 */class Yt{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Yt(0)}static ie(){return new Yt(-1)}}/**
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
 */async function Jo(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==by)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){Ts(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Om(this.inner)}}/**
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
 */class Py{constructor(){this.changes=new ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:P.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:ae.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?y.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dh{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}Pn(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}bn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.Pn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return S.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):Ym(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new S(n)).next(i=>{let s=Wr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Sn(e,n,i){const s=n.collectionGroup;let r=Wr();return this.Ht.getCollectionParents(e,s).next(o=>y.forEach(o,a=>{const l=function(c,u){return new Is(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.Dn(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}Dn(e,n,i){let s,r;return this.He.getDocumentsMatchingQuery(e,n,i).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(r=o,this.Cn(e,r,s).next(a=>{s=a;for(const l of r)for(const c of l.mutations){const u=c.key;let h=s.get(u);h==null&&(h=ae.newInvalidDocument(u),s=s.insert(u,h)),Hr(c,h,l.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{Cs(n,a)||(s=s.remove(o))}),s))}Cn(e,n,i){let s=B();for(const o of n)for(const a of o.mutations)a instanceof Qo&&i.get(a.key)===null&&(s=s.add(a.key));let r=i;return this.He.getEntries(e,s).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(r=r.insert(a,l))}),r))}}/**
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
 */class Zo{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=s}static kn(e,n){let i=B(),s=B();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Zo(e,n.fromCache,i,s)}}/**
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
 */class My{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(P.min())?this.Fn(e,n):this.On.bn(e,s).next(r=>{const o=this.Mn(n,r);return(Ri(n)||Gi(n))&&this.Ln(n.limitType,o,s,i)?this.Fn(e,n):(al()<=k.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qr(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let i=new re(Qu(e));return n.forEach((s,r)=>{Cs(e,r)&&(i=i.add(r))}),i}Ln(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(e,n){return al()<=k.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",qr(n)),this.On.getDocumentsMatchingQuery(e,n,P.min())}}/**
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
 */class Ly{constructor(e,n,i,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new ve(M),this.qn=new ai(r=>Ko(r),Yo),this.Kn=P.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new dh(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function Fy(t,e,n,i){return new Ly(t,e,n,i)}async function fh(t,e){const n=D(t);let i=n.In,s=n.Qn;const r=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,i=n.persistence.getMutationQueue(e),s=new dh(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=B();for(const d of a){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return s.bn(o,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:u}))})});return n.In=i,n.Qn=s,n.Bn.$n(n.Qn),r}function ph(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function Uy(t,e){const n=D(t),i=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((c,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(r,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(r,c.addedDocuments,u)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(u,f),function(p,w,I){return G(w.resumeToken.approximateByteSize()>0),p.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,f,c)&&a.push(n.ze.updateTargetData(r,f))}});let l=wt();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(Vy(r,o,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(P.min())){const c=n.ze.getLastRemoteSnapshotVersion(r).next(u=>n.ze.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(c)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.Qn.vn(r,l)).next(()=>l)}).then(r=>(n.Un=s,r))}function Vy(t,e,n,i,s){let r=B();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let a=wt();return n.forEach((l,c)=>{const u=o.get(l),h=(s==null?void 0:s.get(l))||i;c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):v("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function $y(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.ze.getTargetData(i,e).next(r=>r?(s=r,y.resolve(s)):n.ze.allocateTargetId(i).next(o=>(s=new dt(e,o,0,i.currentSequenceNumber),n.ze.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Un.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function Gr(t,e,n){const i=D(t),s=i.Un.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!oi(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(s.target)}function Rl(t,e,n){const i=D(t);let s=P.min(),r=B();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=D(a),h=u.qn.get(c);return h!==void 0?y.resolve(u.Un.get(h)):u.ze.getTargetData(l,c)}(i,o,vt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,n?s:P.min(),n?r:B())).next(a=>({documents:a,Gn:r})))}/**
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
 */class qy{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return y.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:jn(i.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:Dy(i.bundledQuery),readTime:jn(i.readTime)}}(n)),y.resolve()}}/**
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
 */class ea{constructor(){this.Zn=new re(X.ts),this.es=new re(X.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new X(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new X(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new S(new j([])),i=new X(n,e),s=new X(n,e+1),r=[];return this.es.forEachInRange([i,s],o=>{this.rs(o),r.push(o.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new S(new j([])),i=new X(n,e),s=new X(n,e+1);let r=B();return this.es.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new X(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class X{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return S.comparator(e.key,n.key)||M(e.ls,n.ls)}static ns(e,n){return M(e.ls,n.ls)||S.comparator(e.key,n.key)}}/**
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
 */class By{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new re(X.ts)}checkEmpty(e){return y.resolve(this.In.length===0)}addMutationBatch(e,n,i,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Ny(r,n,i,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new X(a.key,r)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this._s(i),r=s<0?0:s;return y.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return y.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new X(n,0),s=new X(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],o=>{const a=this.ws(o.ls);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new re(M);return n.forEach(s=>{const r=new X(s,0),o=new X(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{i=i.add(a.ls)})}),y.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;S.isDocumentKey(r)||(r=r.child(""));const o=new X(new S(r),0);let a=new re(M);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ls)),!0)},o),y.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const s=this.ws(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){G(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return y.forEach(n.mutations,s=>{const r=new X(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new X(n,0),s=this.ds.firstAfterOrEqual(i);return y.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,y.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class jy{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new ve(S.comparator),this.size=0}addEntry(e,n,i){const s=n.key,r=this.docs.get(s),o=r?r.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return y.resolve(i?i.document.clone():ae.newInvalidDocument(n))}getEntries(e,n){let i=wt();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():ae.newInvalidDocument(s))}),y.resolve(i)}getDocumentsMatchingQuery(e,n,i){let s=wt();const r=new S(n.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||Cs(n,l)&&(s=s.insert(l.key,l.clone()))}return y.resolve(s)}Es(e,n){return y.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new Hy(this)}getSize(e){return y.resolve(this.size)}}class Hy extends Py{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(i))):this.Se.removeEntry(i)}),y.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class Wy{constructor(e){this.persistence=e,this.Ts=new ai(n=>Ko(n),Yo),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Is=0,this.As=new ea,this.targetCount=0,this.Rs=Yt.se()}forEachTarget(e,n){return this.Ts.forEach((i,s)=>n(s)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),y.resolve()}ae(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Yt(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.ae(n),y.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),y.waitFor(r).next(()=>s)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const i=this.Ts.get(n)||null;return y.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),y.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),y.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return y.resolve(i)}containsKey(e,n){return y.resolve(this.As.containsKey(n))}}/**
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
 */class zy{constructor(e,n){this.Ps={},this.Le=new Wo(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Wy(this),this.Ht=new Oy,this.He=function(i,s){return new jy(i,s)}(this.Ht,i=>this.referenceDelegate.bs(i)),this.N=new ky(n),this.Je=new qy(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new By(this.Ht,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){v("MemoryPersistence","Starting transaction:",e);const s=new Gy(this.Le.next());return this.referenceDelegate.vs(),i(s).next(r=>this.referenceDelegate.Vs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ss(e,n){return y.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,n)))}}class Gy extends Ry{constructor(e){super(),this.currentSequenceNumber=e}}class ta{constructor(e){this.persistence=e,this.Ds=new ea,this.Cs=null}static Ns(e){return new ta(e)}get xs(){if(this.Cs)return this.Cs;throw C()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),y.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),y.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.xs,i=>{const s=S.fromPath(i);return this.ks(e,s).next(r=>{r||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}bs(e){return 0}ks(e,n){return y.or([()=>y.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class Nl{constructor(){this.activeTargetIds=rh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ky{constructor(){this.yi=new Nl,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Nl,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Yy{Ei(e){}shutdown(){}}/**
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
 */class kl{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.Pi=[],this.bi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}bi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}Ri(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Xy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Qy{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class Jy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,s){const r=this.Bi(e,n);v("RestConnection","Sending: ",r,i);const o={};return this.Ui(o,s),this.qi(e,r,o,i).then(a=>(v("RestConnection","Received: ",a),a),a=>{throw ll("RestConnection",`${e} failed with error: `,a,"url: ",r,"request:",i),a})}Ki(e,n,i,s){return this.Li(e,n,i,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+on,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=Xy[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,s){return new Promise((r,o)=>{const a=new Sm;a.listenOnce(Em.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case tr.NO_ERROR:const c=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(c)),r(c);break;case tr.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new T(m.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const u=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(p)>=0?p:m.UNKNOWN}(h.status);o(new T(d,h.message))}else o(new T(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(m.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=vm(),r=wm(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Im({})),this.Ui(o.initMessageHeaders,n),as()||go()||Af()||bf()||Rf()||po()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");v("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let c=!1,u=!1;const h=new Qy({vi:f=>{u?v("Connection","Not sending because WebChannel is closed:",f):(c||(v("Connection","Opening WebChannel transport."),l.open(),c=!0),v("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,p,w)=>{f.listen(p,I=>{try{w(I)}catch(F){setTimeout(()=>{throw F},0)}})};return d(l,Ei.EventType.OPEN,()=>{u||v("Connection","WebChannel transport opened.")}),d(l,Ei.EventType.CLOSE,()=>{u||(u=!0,v("Connection","WebChannel transport closed"),h.$i())}),d(l,Ei.EventType.ERROR,f=>{u||(u=!0,ll("Connection","WebChannel transport errored:",f),h.$i(new T(m.UNAVAILABLE,"The operation could not be completed")))}),d(l,Ei.EventType.MESSAGE,f=>{var p;if(!u){const w=f.data[0];G(!!w);const I=w,F=I.error||((p=I[0])===null||p===void 0?void 0:p.error);if(F){v("Connection","WebChannel received error:",F);const we=F.status;let ee=function(qe){const Fe=W[qe];if(Fe!==void 0)return sh(Fe)}(we),H=F.message;ee===void 0&&(ee=m.INTERNAL,H="Unknown error status: "+we+" with message "+F.message),u=!0,h.$i(new T(ee,H)),l.close()}else v("Connection","WebChannel received:",w),h.Oi(w)}}),d(r,Tm.STAT_EVENT,f=>{f.stat===ol.PROXY?v("Connection","Detected buffering proxy"):f.stat===ol.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function sr(){return typeof document<"u"?document:null}/**
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
 */function gh(t){return new fy(t,!0)}class mh{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-i);s>0&&v("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class Zy{constructor(e,n,i,s,r,o){this.Oe=e,this.er=i,this.nr=s,this.credentialsProvider=r,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new mh(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Je(n.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===m.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(i=>{this.sr===n&&this.yr(i)},i=>{e(()=>{const s=new T(m.UNKNOWN,"Fetching auth token failed: "+i.message);return this.pr(s)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.pr(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e_ extends Zy{constructor(e,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,i,r),this.N=s}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=_y(this.N,e),i=function(s){if(!("targetChange"in s))return P.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?P.min():r.readTime?jn(r.readTime):P.min()}(e);return this.listener.Tr(n,i)}Ir(e){const n={};n.database=Cl(this.N),n.addTarget=function(s,r){let o;const a=r.target;return o=Vr(a)?{documents:vy(s,a)}:{query:wy(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=gy(s,r.resumeToken):r.snapshotVersion.compareTo(P.min())>0&&(o.readTime=py(s,r.snapshotVersion.toTimestamp())),o}(this.N,e);const i=Ty(this.N,e);i&&(n.labels=i),this.wr(n)}Ar(e){const n={};n.database=Cl(this.N),n.removeTarget=e,this.wr(n)}}/**
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
 */class t_ extends class{}{constructor(e,n,i){super(),this.credentials=e,this.nr=n,this.N=i,this.Dr=!1}Cr(){if(this.Dr)throw new T(m.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.Cr(),this.credentials.getToken().then(s=>this.nr.Li(e,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new T(m.UNKNOWN,s.toString())})}Ki(e,n,i){return this.Cr(),this.credentials.getToken().then(s=>this.nr.Ki(e,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new T(m.UNKNOWN,s.toString())})}terminate(){this.Dr=!0}}class n_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Je(n),this.$r=!1):v("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
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
 */class i_{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=r,this.Qr.Ei(o=>{i.enqueueAndForget(async()=>{ci(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=D(a);l.Kr.add(4),await li(l),l.Wr.set("Unknown"),l.Kr.delete(4),await Rs(l)}(this))})}),this.Wr=new n_(i,s)}}async function Rs(t){if(ci(t))for(const e of t.jr)await e(!0)}async function li(t){for(const e of t.jr)await e(!1)}function yh(t,e){const n=D(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),sa(n)?ia(n):ln(n).cr()&&na(n,e))}function _h(t,e){const n=D(t),i=ln(n);n.qr.delete(e),i.cr()&&vh(n,e),n.qr.size===0&&(i.cr()?i.lr():ci(n)&&n.Wr.set("Unknown"))}function na(t,e){t.Gr.Y(e.targetId),ln(t).Ir(e)}function vh(t,e){t.Gr.Y(e),ln(t).Ar(e)}function ia(t){t.Gr=new uy({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),ln(t).start(),t.Wr.Or()}function sa(t){return ci(t)&&!ln(t).ar()&&t.qr.size>0}function ci(t){return D(t).Kr.size===0}function wh(t){t.Gr=void 0}async function s_(t){t.qr.forEach((e,n)=>{na(t,e)})}async function r_(t,e){wh(t),sa(t)?(t.Wr.Lr(e),ia(t)):t.Wr.set("Unknown")}async function o_(t,e,n){if(t.Wr.set("Online"),e instanceof ah&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.qr.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.qr.delete(o),i.Gr.removeTarget(o))}(t,e)}catch(i){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Dl(t,i)}else if(e instanceof ki?t.Gr.rt(e):e instanceof oh?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(P.min()))try{const i=await ph(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Gr._t(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.qr.get(l);c&&s.qr.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.qr.get(a);if(!l)return;s.qr.set(a,l.withResumeToken(de.EMPTY_BYTE_STRING,l.snapshotVersion)),vh(s,a);const c=new dt(l.target,a,1,l.sequenceNumber);na(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){v("RemoteStore","Failed to raise snapshot:",i),await Dl(t,i)}}async function Dl(t,e,n){if(!oi(e))throw e;t.Kr.add(1),await li(t),t.Wr.set("Offline"),n||(n=()=>ph(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Rs(t)})}async function a_(t,e){const n=D(t);e?(n.Kr.delete(2),await Rs(n)):e||(n.Kr.add(2),await li(n),n.Wr.set("Unknown"))}function ln(t){return t.zr||(t.zr=function(e,n,i){const s=D(e);return s.Cr(),new e_(n,s.nr,s.credentials,s.N,i)}(t.datastore,t.asyncQueue,{Si:s_.bind(null,t),Ci:r_.bind(null,t),Tr:o_.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),sa(t)?ia(t):t.Wr.set("Unknown")):(await t.zr.stop(),wh(t))})),t.zr}/**
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
 */class ra{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new ra(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eh(t,e){if(Je("AsyncQueue",`${e}: ${t}`),oi(t))return new T(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qt{constructor(e){this.comparator=e?(n,i)=>e(n,i)||S.comparator(n.key,i.key):(n,i)=>S.comparator(n.key,i.key),this.keyedMap=Wr(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new qt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new qt;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class Ol{constructor(){this.Jr=new ve(S.comparator)}track(e){const n=e.doc.key,i=this.Jr.get(n);i?e.type!==0&&i.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&i.type!==1?this.Jr=this.Jr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Jr=this.Jr.remove(n):e.type===1&&i.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):C():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,i)=>{e.push(i)}),e}}class Xt{constructor(e,n,i,s,r,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Xt(e,n,qt.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ss(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class l_{constructor(){this.Xr=void 0,this.listeners=[]}}class c_{constructor(){this.queries=new ai(e=>Xu(e),Ss),this.onlineState="Unknown",this.Zr=new Set}}async function u_(t,e){const n=D(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new l_),s)try{r.Xr=await n.onListen(i)}catch(o){const a=Eh(o,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.eo(n.onlineState),r.Xr&&e.no(r.Xr)&&oa(n)}async function h_(t,e){const n=D(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function d_(t,e){const n=D(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.no(s)&&(i=!0);o.Xr=s}}i&&oa(n)}function f_(t,e,n){const i=D(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function oa(t){t.Zr.forEach(e=>{e.next()})}class p_{constructor(e,n,i){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=i||{}}no(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Xt(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.uo||!i)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=Xt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
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
 */class Th{constructor(e){this.key=e}}class Ih{constructor(e){this.key=e}}class g_{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=B(),this.mutatedKeys=B(),this.po=Qu(e),this.Eo=new qt(this.po)}get To(){return this._o}Io(e,n){const i=n?n.Ao:new Ol,s=n?n.Eo:this.Eo;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=Ri(this.query)&&s.size===this.query.limit?s.last():null,c=Gi(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Cs(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),w=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?p!==w&&(i.track({type:3,doc:f}),I=!0):this.Ro(d,f)||(i.track({type:2,doc:f}),I=!0,(l&&this.po(f,l)>0||c&&this.po(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),I=!0):d&&!f&&(i.track({type:1,doc:d}),I=!0,(l||c)&&(a=!0)),I&&(f?(o=o.add(f),r=w?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),Ri(this.query)||Gi(this.query))for(;o.size>this.query.limit;){const u=Ri(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Eo:o,Ao:i,Ln:a,mutatedKeys:r}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const r=e.Ao.Yr();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return f(h)-f(d)}(c.type,u.type)||this.po(c.doc,u.doc)),this.Po(i);const o=n?this.bo():[],a=this.yo.size===0&&this.current?1:0,l=a!==this.mo;return this.mo=a,r.length!==0||l?{snapshot:new Xt(this.query,e.Eo,s,r,e.mutatedKeys,a===0,l,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Ol,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}Po(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}bo(){if(!this.current)return[];const e=this.yo;this.yo=B(),this.Eo.forEach(i=>{this.Vo(i.key)&&(this.yo=this.yo.add(i.key))});const n=[];return e.forEach(i=>{this.yo.has(i)||n.push(new Ih(i))}),this.yo.forEach(i=>{e.has(i)||n.push(new Th(i))}),n}So(e){this._o=e.Gn,this.yo=B();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return Xt.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,this.mo===0)}}class m_{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class y_{constructor(e){this.key=e,this.Co=!1}}class __{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new ai(a=>Xu(a),Ss),this.ko=new Map,this.$o=new Set,this.Oo=new ve(S.comparator),this.Fo=new Map,this.Mo=new ea,this.Lo={},this.Bo=new Map,this.Uo=Yt.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function v_(t,e){const n=A_(t);let i,s;const r=n.xo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Do();else{const o=await $y(n.localStore,vt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await w_(n,e,i,a==="current"),n.isPrimaryClient&&yh(n.remoteStore,o)}return s}async function w_(t,e,n,i){t.Ko=(u,h,d)=>async function(f,p,w,I){let F=p.view.Io(w);F.Ln&&(F=await Rl(f.localStore,p.query,!1).then(({documents:H})=>p.view.Io(H,F)));const we=I&&I.targetChanges.get(p.targetId),ee=p.view.applyChanges(F,f.isPrimaryClient,we);return Pl(f,p.targetId,ee.vo),ee.snapshot}(t,u,h,d);const s=await Rl(t.localStore,e,!0),r=new g_(e,s.Gn),o=r.Io(s.documents),a=ri.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=r.applyChanges(o,t.isPrimaryClient,a);Pl(t,n,l.vo);const c=new m_(e,n,r);return t.xo.set(e,c),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),l.snapshot}async function E_(t,e){const n=D(t),i=n.xo.get(e),s=n.ko.get(i.targetId);if(s.length>1)return n.ko.set(i.targetId,s.filter(r=>!Ss(r,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Gr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),_h(n.remoteStore,i.targetId),Kr(n,i.targetId)}).catch(Jo)):(Kr(n,i.targetId),await Gr(n.localStore,i.targetId,!0))}async function Sh(t,e){const n=D(t);try{const i=await Uy(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Fo.get(r);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Co=!0:s.modifiedDocuments.size>0?G(o.Co):s.removedDocuments.size>0&&(G(o.Co),o.Co=!1))}),await Ah(n,i,e)}catch(i){await Jo(i)}}function xl(t,e,n){const i=D(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.xo.forEach((r,o)=>{const a=o.view.eo(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.eo(o)&&(l=!0)}),l&&oa(a)}(i.eventManager,e),s.length&&i.No.Tr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function T_(t,e,n){const i=D(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Fo.get(e),r=s&&s.key;if(r){let o=new ve(S.comparator);o=o.insert(r,ae.newNoDocument(r,P.min()));const a=B().add(r),l=new bs(P.min(),new Map,new re(M),o,a);await Sh(i,l),i.Oo=i.Oo.remove(r),i.Fo.delete(e),aa(i)}else await Gr(i.localStore,e,!1).then(()=>Kr(i,e,n)).catch(Jo)}function Kr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ko.get(e))t.xo.delete(i),n&&t.No.jo(i,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(i=>{t.Mo.containsKey(i)||Ch(t,i)})}function Ch(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(_h(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),aa(t))}function Pl(t,e,n){for(const i of n)i instanceof Th?(t.Mo.addReference(i.key,e),I_(t,i)):i instanceof Ih?(v("SyncEngine","Document no longer in limbo: "+i.key),t.Mo.removeReference(i.key,e),t.Mo.containsKey(i.key)||Ch(t,i.key)):C()}function I_(t,e){const n=e.key,i=n.path.canonicalString();t.Oo.get(n)||t.$o.has(i)||(v("SyncEngine","New document in limbo: "+n),t.$o.add(i),aa(t))}function aa(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new S(j.fromString(e)),i=t.Uo.next();t.Fo.set(i,new y_(n)),t.Oo=t.Oo.insert(n,i),yh(t.remoteStore,new dt(vt(Xo(n.path)),i,2,Wo.T))}}async function Ah(t,e,n){const i=D(t),s=[],r=[],o=[];i.xo.isEmpty()||(i.xo.forEach((a,l)=>{o.push(i.Ko(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=Zo.kn(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.No.Tr(s),await async function(a,l){const c=D(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>y.forEach(l,h=>y.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>y.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!oi(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,p)}}}(i.localStore,r))}async function S_(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const i=await fh(n.localStore,e);n.currentUser=e,function(s,r){s.Bo.forEach(o=>{o.forEach(a=>{a.reject(new T(m.CANCELLED,r))})}),s.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ah(n,i.Wn)}}function C_(t,e){const n=D(t),i=n.Fo.get(e);if(i&&i.Co)return B().add(i.key);{let s=B();const r=n.ko.get(e);if(!r)return s;for(const o of r){const a=n.xo.get(o);s=s.unionWith(a.view.To)}return s}}function A_(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T_.bind(null,e),e.No.Tr=d_.bind(null,e.eventManager),e.No.jo=f_.bind(null,e.eventManager),e}class b_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=gh(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return Fy(this.persistence,new My,e.initialUser,this.N)}Go(e){return new zy(ta.Ns,this.N)}Wo(e){return new Ky}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class R_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>xl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=S_.bind(null,this.syncEngine),await a_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new c_}createDatastore(e){const n=gh(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new Jy(s));var s;return function(r,o,a){return new t_(r,o,a)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>xl(this.syncEngine,a,0),o=kl.Pt()?new kl:new Yy,new i_(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new __(i,s,r,o,a,l);return c&&(u.qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=D(e);v("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await li(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class N_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class k_{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=Dm.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{v("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=Eh(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function D_(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await fh(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function O_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x_(t);v("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>async function(r,o){const a=D(r);a.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const l=ci(a);a.Kr.add(3),await li(a),l&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await Rs(a)}(e.remoteStore,s)),t.onlineComponents=e}async function x_(t){return t.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await D_(t,new b_)),t.offlineComponents}async function P_(t){return t.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await O_(t,new R_)),t.onlineComponents}async function Ml(t){const e=await P_(t),n=e.eventManager;return n.onListen=v_.bind(null,e.syncEngine),n.onUnlisten=E_.bind(null,e.syncEngine),n}class M_{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Hn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ll=new Map;/**
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
 */function L_(t,e,n){if(!n)throw new T(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function F_(t,e,n,i){if(e===!0&&i===!0)throw new T(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fl(t){if(S.isDocumentKey(t))throw new T(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function U_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){if(n.constructor){const i=/function\s+([^\s(]+)\s*\(/.exec(n.constructor.toString());if(i&&i.length>1)return i[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":C()}function rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=U_(t);throw new T(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ul{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,F_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class bh{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ul({}),this._settingsFrozen=!1,e instanceof Hn?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new T(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(i.options.projectId)}(e))}get app(){if(!this._app)throw new T(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ul(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new Am;switch(n.type){case"gapi":const i=n.client;return G(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Nm(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new T(m.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ll.get(e);n&&(v("ComponentProvider","Removing Datastore"),Ll.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Rt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Ns{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class Bt extends Ns{constructor(e,n,i){super(e,n,Xo(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new S(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function V_(t,e,...n){if(t=tt(t),L_("collection","path",e),t instanceof bh){const i=j.fromString(e,...n);return Fl(i),new Bt(t,null,i)}{if(!(t instanceof Rt||t instanceof Bt))throw new T(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=j.fromString(t.path,...n).child(j.fromString(e));return Fl(i),new Bt(t.firestore,null,i)}}/**
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
 */class $_{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new mh(this,"async_queue_retry"),this.Ea=()=>{const n=sr();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=sr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=sr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const n=new $t;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!oi(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(i=>{throw this.ma=i,this.ga=!1,Je("INTERNAL UNHANDLED ERROR: ",function(s){let r=s.message||"";return s.stack&&(r=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),r}(i)),i}).then(i=>(this.ga=!1,i))));return this.fa=n,n}enqueueAfterDelay(e,n,i){this.Ta(),this.pa.indexOf(e)>-1&&(n=0);const s=ra.createAndSchedule(this,e,n,i,r=>this.Ra(r));return this._a.push(s),s}Ta(){this.ma&&C()}verifyOperationInProgress(){}async Pa(){let e;do e=this.fa,await e;while(e!==this.fa)}ba(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.Pa().then(()=>{this._a.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pa()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function Vl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Yr extends bh{constructor(e,n){super(e,n),this.type="firestore",this._queue=new $_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Rh(this),this._firestoreClient.terminate()}}function BI(t=Pp()){return _o(t,"firestore").getImmediate()}function q_(t){return t._firestoreClient||Rh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rh(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new M_(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new k_(t._credentials,t._queue,i)}/**
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
 *//**
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
 */class Nh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xi(de.fromBase64String(e))}catch(n){throw new T(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xi(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class B_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}}const j_=new RegExp("[~\\*/\\[\\]]");function H_(t,e,n){if(e.search(j_)>=0)throw $l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nh(...e.split("."))._internalPath}catch{throw $l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $l(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new T(m.INVALID_ARGUMENT,a+t+l)}/**
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
 */class kh{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new W_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class W_ extends kh{data(){return super.data()}}function Dh(t,e){return typeof e=="string"?H_(t,e):e instanceof Nh?e._internalPath:e._delegate._internalPath}/**
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
 */class wn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oh extends kh{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Dh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Di extends Oh{data(e={}){return super.data(e)}}class z_{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new wn(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Di(this._firestore,this._userDataWriter,i.key,i,new wn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new Di(i._firestore,i._userDataWriter,o.doc.key,o.doc,new wn(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Di(i._firestore,i._userDataWriter,o.doc.key,o.doc,new wn(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:G_(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function G_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}/**
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
 */function K_(t){if(Gi(t)&&t.explicitOrderBy.length===0)throw new T(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Y_{convertValue(e,n="none"){switch(_t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw C()}}convertObject(e,n){const i={};return Ts(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new B_(z(e.latitude),z(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Ku(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp($n(e));default:return null}}convertTimestamp(e){const n=Ze(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=j.fromString(e);G(hh(i));const s=new Hn(i.get(1),i.get(3)),r=new S(i.popFirst(5));return s.isEqual(n)||Je(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class xh extends Y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function X_(t,...e){var n,i,s;t=tt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vl(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Vl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Rt)c=rr(t.firestore,Yr),u=Xo(t._key.path),l={next:h=>{e[o]&&e[o](Q_(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=rr(t,Ns);c=rr(h.firestore,Yr),u=h._query;const d=new xh(c);l={next:f=>{e[o]&&e[o](new z_(c,d,h,f))},error:e[o+1],complete:e[o+2]},K_(t._query)}return function(h,d,f,p){const w=new N_(p),I=new p_(d,w,f);return h.asyncQueue.enqueueAndForget(async()=>u_(await Ml(h),I)),()=>{w.Xo(),h.asyncQueue.enqueueAndForget(async()=>h_(await Ml(h),I))}}(q_(c),u,a,l)}function Q_(t,e,n){const i=n.docs.get(e._key),s=new xh(t);return new Oh(t,s,e._key,i,new wn(n.hasPendingWrites,n.fromCache),e.converter)}var J_;(function(t){on=t})(Kn),Me(new Ae("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=new Yr(n,new bm(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),i._setSettings(e),i},"PUBLIC")),ze("@firebase/firestore","3.0.0",J_);function jI(t,e,n=[]){let i;if(!globalThis.window){const{subscribe:o}=qs(n);return{subscribe:o,ref:null}}if(!t){console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:o}=qs([]);return{subscribe:o,ref:null}}const s=typeof e=="string"?V_(t,e):e,{subscribe:r}=qs(n,o=>(i=X_(s,a=>{const l=a.docs.map(c=>({id:c.id,ref:c.ref,...c.data()}));o(l)}),()=>i()));return{subscribe:r,ref:s}}/**
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
 */var ft;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ft||(ft={}));/**
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
 */const Ph="firebasestorage.googleapis.com",Z_="storageBucket",ev=2*60*1e3,tv=10*60*1e3;class Le extends en{constructor(e,n){super(or(e),`Firebase Storage: ${n} (${or(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}_codeEquals(e){return or(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function or(t){return"storage/"+t}function nv(){const t="An unknown error occurred, please check the error payload for server response.";return new Le("unknown",t)}function iv(){return new Le("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function sv(){return new Le("canceled","User canceled the upload/download.")}function rv(t){return new Le("invalid-url","Invalid URL '"+t+"'.")}function ov(t){return new Le("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function ql(t){return new Le("invalid-argument",t)}function Mh(){return new Le("app-deleted","The Firebase app was deleted.")}function av(t){return new Le("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ii(t){throw new Le("internal-error","Internal error: "+t)}/**
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
 */class lv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=ft.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ft.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ft.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s){if(this.sent_)throw Ii("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ii("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ii("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponseText(){if(!this.sent_)throw Ii("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function cv(){return new lv}/**
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
 */class uv{createConnection(){return cv()}}/**
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
 */class De{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=De.makeFromUrl(e,n)}catch{return new De(e,"")}if(i.path==="")return i;throw ov(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(H){H.path_=decodeURIComponent(H.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},w=n===Ph?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",F=new RegExp(`^https?://${w}/${s}/${I}`,"i"),ee=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:F,indices:{bucket:1,path:2},postModify:c}];for(let H=0;H<ee.length;H++){const qe=ee[H],Fe=qe.regex.exec(e);if(Fe){const mi=Fe[qe.indices.bucket];let fn=Fe[qe.indices.path];fn||(fn=""),i=new De(mi,fn),qe.postModify(i);break}}if(i==null)throw rv(e);return i}}class hv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function dv(t,e,n){let i=1,s=null,r=!1,o=0;function a(){return o===2}let l=!1;function c(...p){l||(l=!0,e.apply(null,p))}function u(p){s=setTimeout(()=>{s=null,t(h,a())},p)}function h(p,...w){if(l)return;if(p){c.call(null,p,...w);return}if(a()||r){c.call(null,p,...w);return}i<64&&(i*=2);let F;o===1?(o=2,F=0):F=(i+Math.random())*1e3,u(F)}let d=!1;function f(p){d||(d=!0,!l&&(s!==null?(p||(o=2),clearTimeout(s),u(0)):p||(o=1)))}return u(0),setTimeout(()=>{r=!0,f(!0)},n),f}function fv(t){t(!1)}/**
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
 */function pv(t){return t!==void 0}function Bl(t,e,n,i){if(i<e)throw ql(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ql(`Invalid value for '${t}'. Expected ${n} or less.`)}function gv(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */class mv{constructor(e,n,i,s,r,o,a,l,c,u,h){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=l,this.progressCallback_=u,this.timeout_=c,this.pool_=h,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=this;function n(s,r){if(r){s(!1,new Si(!1,null,!0));return}const o=e.pool_.createConnection();e.pendingConnection_=o;function a(l){const c=l.loaded,u=l.lengthComputable?l.total:-1;e.progressCallback_!==null&&e.progressCallback_(c,u)}e.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(e.url_,e.method_,e.body_,e.headers_).then(()=>{e.progressCallback_!==null&&o.removeUploadProgressListener(a),e.pendingConnection_=null;const l=o.getErrorCode()===ft.NO_ERROR,c=o.getStatus();if(!l||e.isRetryStatusCode_(c)){const h=o.getErrorCode()===ft.ABORT;s(!1,new Si(!1,null,h));return}const u=e.successCodes_.indexOf(c)!==-1;s(!0,new Si(u,o))})}function i(s,r){const o=e.resolve_,a=e.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=e.callback_(l,l.getResponseText());pv(c)?o(c):o()}catch(c){a(c)}else if(l!==null){const c=nv();c.serverResponse=l.getResponseText(),e.errorCallback_?a(e.errorCallback_(l,c)):a(c)}else if(r.canceled){const c=e.appDelete_?Mh():sv();a(c)}else{const c=iv();a(c)}}this.canceled_?i(!1,new Si(!1,null,!0)):this.backoffId_=dv(n,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||r}}class Si{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function yv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _v(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ev(t,e,n,i,s,r){const o=gv(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return vv(l,e),yv(l,n),_v(l,r),wv(l,i),new mv(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
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
 */function Tv(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Iv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Qi{constructor(e,n){this._service=e,n instanceof De?this._location=n:this._location=De.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qi(e,n)}get root(){const e=new De(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iv(this._location.path)}get storage(){return this._service}get parent(){const e=Tv(this._location.path);if(e===null)return null;const n=new De(this._location.bucket,e);return new Qi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw av(e)}}function jl(t,e){const n=e==null?void 0:e[Z_];return n==null?null:De.makeFromBucketSpec(n,t)}class Sv{constructor(e,n,i,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._pool=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=Ph,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ev,this._maxUploadRetryTime=tv,this._requests=new Set,r!=null?this._bucket=De.makeFromBucketSpec(r,this._host):this._bucket=jl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=De.makeFromBucketSpec(this._url,e):this._bucket=jl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qi(this,e)}_makeRequest(e,n,i){if(this._deleted)return new hv(Mh());{const s=Ev(e,this._appId,n,i,this._pool,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i)}}const Cv="@firebase/storage",Av="0.8.0";/**
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
 */const bv="storage";function Rv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Sv(n,i,s,new uv,e,Kn)}function Nv(){Me(new Ae(bv,Rv,"PUBLIC").setMultipleInstances(!0)),ze(Cv,Av)}Nv();function kv(t){return Array.prototype.slice.call(t)}function Lh(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function la(t,e,n){var i,s=new Promise(function(r,o){i=t[e].apply(t,n),Lh(i).then(r,o)});return s.request=i,s}function Dv(t,e,n){var i=la(t,e,n);return i.then(function(s){if(s)return new Wn(s,i.request)})}function cn(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function ca(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return la(this[e],s,arguments)})})}function ks(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function Fh(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return Dv(this[e],s,arguments)})})}function Nt(t){this._index=t}cn(Nt,"_index",["name","keyPath","multiEntry","unique"]);ca(Nt,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Fh(Nt,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Wn(t,e){this._cursor=t,this._request=e}cn(Wn,"_cursor",["direction","key","primaryKey","value"]);ca(Wn,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Wn.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),Lh(e._request).then(function(i){if(i)return new Wn(i,e._request)})})})});function $e(t){this._store=t}$e.prototype.createIndex=function(){return new Nt(this._store.createIndex.apply(this._store,arguments))};$e.prototype.index=function(){return new Nt(this._store.index.apply(this._store,arguments))};cn($e,"_store",["name","keyPath","indexNames","autoIncrement"]);ca($e,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Fh($e,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);ks($e,"_store",IDBObjectStore,["deleteIndex"]);function ui(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}ui.prototype.objectStore=function(){return new $e(this._tx.objectStore.apply(this._tx,arguments))};cn(ui,"_tx",["objectStoreNames","mode"]);ks(ui,"_tx",IDBTransaction,["abort"]);function Ds(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new ui(n)}Ds.prototype.createObjectStore=function(){return new $e(this._db.createObjectStore.apply(this._db,arguments))};cn(Ds,"_db",["name","version","objectStoreNames"]);ks(Ds,"_db",IDBDatabase,["deleteObjectStore","close"]);function Os(t){this._db=t}Os.prototype.transaction=function(){return new ui(this._db.transaction.apply(this._db,arguments))};cn(Os,"_db",["name","version","objectStoreNames"]);ks(Os,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[$e,Nt].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=kv(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[Nt,$e].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(o){if(!o){r(s);return}if(s.push(o.value),n!==void 0&&s.length==n){r(s);return}o.continue()})})})});function Ov(t,e,n){var i=la(indexedDB,"open",[t,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){n&&n(new Ds(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new Os(r)})}const xv="@firebase/installations",Uh="0.5.0";/**
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
 */const Vh=1e4,$h=`w:${Uh}`,qh="FIS_v2",Pv="https://firebaseinstallations.googleapis.com/v1",Mv=60*60*1e3,Lv="installations",Fv="Installations";/**
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
 */const Uv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Et=new tn(Lv,Fv,Uv);function Bh(t){return t instanceof en&&t.code.includes("request-failed")}/**
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
 */function jh({projectId:t}){return`${Pv}/projects/${t}/installations`}function Hh(t){return{token:t.token,requestStatus:2,expiresIn:$v(t.expiresIn),creationTime:Date.now()}}async function Wh(t,e){const i=(await e.json()).error;return Et.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function zh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vv(t,{refreshToken:e}){const n=zh(t);return n.append("Authorization",qv(e)),n}async function Gh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $v(t){return Number(t.replace("s","000"))}function qv(t){return`${qh} ${t}`}/**
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
 */async function Bv(t,{fid:e}){const n=jh(t),i=zh(t),s={fid:e,authVersion:qh,appId:t.appId,sdkVersion:$h},r={method:"POST",headers:i,body:JSON.stringify(s)},o=await Gh(()=>fetch(n,r));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:Hh(a.authToken)}}else throw await Wh("Create Installation",o)}/**
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
 */function Kh(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Hv=/^[cdef][\w-]{21}$/,Xr="";function Wv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zv(t);return Hv.test(n)?n:Xr}catch{return Xr}}function zv(t){return jv(t).substr(0,22)}/**
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
 */function xs(t){return`${t.appName}!${t.appId}`}/**
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
 */const Yh=new Map;function Xh(t,e){const n=xs(t);Qh(n,e),Gv(n,e)}function Qh(t,e){const n=Yh.get(t);if(n)for(const i of n)i(e)}function Gv(t,e){const n=Kv();n&&n.postMessage({key:t,fid:e}),Yv()}let ut=null;function Kv(){return!ut&&"BroadcastChannel"in self&&(ut=new BroadcastChannel("[Firebase] FID Change"),ut.onmessage=t=>{Qh(t.data.key,t.data.fid)}),ut}function Yv(){Yh.size===0&&ut&&(ut.close(),ut=null)}/**
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
 */const Xv="firebase-installations-database",Qv=1,Tt="firebase-installations-store";let ar=null;function ua(){return ar||(ar=Ov(Xv,Qv,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Tt)}})),ar}async function Ji(t,e){const n=xs(t),s=(await ua()).transaction(Tt,"readwrite"),r=s.objectStore(Tt),o=await r.get(n);return await r.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Xh(t,e.fid),e}async function Jh(t){const e=xs(t),i=(await ua()).transaction(Tt,"readwrite");await i.objectStore(Tt).delete(e),await i.complete}async function Ps(t,e){const n=xs(t),s=(await ua()).transaction(Tt,"readwrite"),r=s.objectStore(Tt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Xh(t,a.fid),a}/**
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
 */async function ha(t){let e;const n=await Ps(t,i=>{const s=Jv(i),r=Zv(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Xr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Jv(t){const e=t||{fid:Wv(),registrationStatus:0};return Zh(e)}function Zv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Et.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ew(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tw(t)}:{installationEntry:e}}async function ew(t,e){try{const n=await Bv(t,e);return Ji(t,n)}catch(n){throw Bh(n)&&n.customData.serverCode===409?await Jh(t):await Ji(t,{fid:e.fid,registrationStatus:0}),n}}async function tw(t){let e=await Hl(t);for(;e.registrationStatus===1;)await Kh(100),e=await Hl(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await ha(t);return i||n}return e}function Hl(t){return Ps(t,e=>{if(!e)throw Et.create("installation-not-found");return Zh(e)})}function Zh(t){return nw(t)?{fid:t.fid,registrationStatus:0}:t}function nw(t){return t.registrationStatus===1&&t.registrationTime+Vh<Date.now()}/**
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
 */async function iw({appConfig:t,platformLoggerProvider:e},n){const i=sw(t,n),s=Vv(t,n),r=e.getImmediate({optional:!0});r&&s.append("x-firebase-client",r.getPlatformInfoString());const a={method:"POST",headers:s,body:JSON.stringify({installation:{sdkVersion:$h}})},l=await Gh(()=>fetch(i,a));if(l.ok){const c=await l.json();return Hh(c)}else throw await Wh("Generate Auth Token",l)}function sw(t,{fid:e}){return`${jh(t)}/${e}/authTokens:generate`}/**
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
 */async function da(t,e=!1){let n;const i=await Ps(t.appConfig,r=>{if(!ed(r))throw Et.create("not-registered");const o=r.authToken;if(!e&&aw(o))return r;if(o.requestStatus===1)return n=rw(t,e),r;{if(!navigator.onLine)throw Et.create("app-offline");const a=cw(r);return n=ow(t,a),a}});return n?await n:i.authToken}async function rw(t,e){let n=await Wl(t.appConfig);for(;n.authToken.requestStatus===1;)await Kh(100),n=await Wl(t.appConfig);const i=n.authToken;return i.requestStatus===0?da(t,e):i}function Wl(t){return Ps(t,e=>{if(!ed(e))throw Et.create("not-registered");const n=e.authToken;return uw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ow(t,e){try{const n=await iw(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ji(t.appConfig,i),n}catch(n){if(Bh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jh(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ji(t.appConfig,i)}throw n}}function ed(t){return t!==void 0&&t.registrationStatus===2}function aw(t){return t.requestStatus===2&&!lw(t)}function lw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Mv}function cw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uw(t){return t.requestStatus===1&&t.requestTime+Vh<Date.now()}/**
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
 */async function hw(t){const e=t,{installationEntry:n,registrationPromise:i}=await ha(e.appConfig);return i?i.catch(console.error):da(e).catch(console.error),n.fid}/**
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
 */async function dw(t,e=!1){const n=t;return await fw(n.appConfig),(await da(n,e)).token}async function fw(t){const{registrationPromise:e}=await ha(t);e&&await e}/**
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
 */function pw(t){if(!t||!t.options)throw lr("App Configuration");if(!t.name)throw lr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw lr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function lr(t){return Et.create("missing-app-config-values",{valueName:t})}/**
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
 */const td="installations",gw="installations-internal",mw=t=>{const e=t.getProvider("app").getImmediate(),n=pw(e),i=_o(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()}},yw=t=>{const e=t.getProvider("app").getImmediate(),n=_o(e,td).getImmediate();return{getId:()=>hw(n),getToken:s=>dw(n,s)}};function _w(){Me(new Ae(td,mw,"PUBLIC")),Me(new Ae(gw,yw,"PRIVATE"))}_w();ze(xv,Uh);/**
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
 */const zl="analytics",vw="firebase_id",ww="origin",Ew=60*1e3,Tw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ee=new Gn("@firebase/analytics");/**
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
 */function id(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Iw(t,e){const n=document.createElement("script");n.src=`${nd}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Sw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Cw(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await id(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){Ee.error(a)}t("config",s,r)}async function Aw(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await id(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){Ee.error(r)}}function bw(t,e,n,i){async function s(r,o,a){try{r==="event"?await Aw(t,e,n,o,a):r==="config"?await Cw(t,e,n,i,o,a):t("set",o)}catch(l){Ee.error(l)}}return s}function Rw(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=bw(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Nw(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(nd))return e;return null}/**
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
 */const kw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},xe=new tn("analytics","Analytics",kw);/**
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
 */const Dw=30,Ow=1e3;class xw{constructor(e={},n=Ow){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sd=new xw;function Pw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Mw(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Pw(i)},r=Tw.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Lw(t,e=sd,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw xe.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw xe.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Vw;return setTimeout(async()=>{a.abort()},n!==void 0?n:Ew),rd({appId:i,apiKey:s,measurementId:r},o,a,e)}async function rd(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=sd){const{appId:r,measurementId:o}=t;try{await Fw(i,e)}catch(a){if(o)return Ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Mw(t);return s.deleteThrottleMetadata(r),a}catch(a){if(!Uw(a)){if(s.deleteThrottleMetadata(r),o)return Ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Ua(n,s.intervalMillis,Dw):Ua(n,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(r,c),Ee.debug(`Calling attemptFetch again in ${l} millis`),rd(t,c,i,s)}}function Fw(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Uw(t){if(!(t instanceof en)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Vw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function $w(){if(Nf())try{await kf()}catch(t){return Ee.warn(xe.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return Ee.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qw(t,e,n,i,s,r,o){var a;const l=Lw(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Ee.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ee.error(f)),e.push(l);const c=$w().then(f=>{if(f)return i.getId()}),[u,h]=await Promise.all([l,c]);Nw()||Iw(r,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[ww]="firebase",d.update=!0,h!=null&&(d[vw]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class Bw{constructor(e){this.app=e}_delete(){return delete bn[this.app.options.appId],Promise.resolve()}}let bn={},Gl=[];const Kl={};let cr="dataLayer",jw="gtag",Yl,od,Xl=!1;function Hw(){const t=[];if(po()&&t.push("This is a browser extension environment."),Df()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:e});Ee.warn(n.message)}}function Ww(t,e,n){Hw();const i=t.options.appId;if(!i)throw xe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(bn[i]!=null)throw xe.create("already-exists",{id:i});if(!Xl){Sw(cr);const{wrappedGtag:r,gtagCore:o}=Rw(bn,Gl,Kl,cr,jw);od=r,Yl=o,Xl=!0}return bn[i]=qw(t,Gl,Kl,e,Yl,cr,n),new Bw(t)}/**
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
 */async function zw(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}function Gw(t,e,n,i){t=tt(t),zw(od,bn[t.app.options.appId],e,n,i).catch(s=>Ee.error(s))}const Kw="@firebase/analytics",Yw="0.7.0";function Xw(){Me(new Ae(zl,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Ww(i,s,n)},"PUBLIC")),Me(new Ae("analytics-internal",t,"PRIVATE")),ze(Kw,Yw);function t(e){try{const n=e.getProvider(zl).getImmediate();return{logEvent:(i,s,r)=>Gw(n,i,s,r)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}Xw();const Qw="@firebase/database",Jw="0.12.0";/**
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
 */let ad="";function Zw(t){ad=t}/**
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
 */class eE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Dn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ke(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ld=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eE(e)}}catch{}return new tE},ht=ld("localStorage"),Qr=ld("sessionStorage");/**
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
 */const jt=new Gn("@firebase/database"),nE=function(){let t=1;return function(){return t++}}(),cd=function(t){const e=Bf(t),n=new Ff;n.update(e);const i=n.digest();return ho.encodeByteArray(i)},hi=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=hi.apply(null,i):typeof i=="object"?e+=ne(i):e+=i,e+=" "}return e};let pt=null,Ql=!0;const iE=function(t,e){g(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(jt.logLevel=k.VERBOSE,pt=jt.log.bind(jt),e&&Qr.set("logging_enabled",!0)):typeof t=="function"?pt=t:(pt=null,Qr.remove("logging_enabled"))},le=function(...t){if(Ql===!0&&(Ql=!1,pt===null&&Qr.get("logging_enabled")===!0&&iE(!0)),pt){const e=hi.apply(null,t);pt(e)}},di=function(t){return function(...e){le(t,...e)}},Jr=function(...t){const e="FIREBASE INTERNAL ERROR: "+hi(...t);jt.error(e)},It=function(...t){const e=`FIREBASE FATAL ERROR: ${hi(...t)}`;throw jt.error(e),new Error(e)},Te=function(...t){const e="FIREBASE WARNING: "+hi(...t);jt.warn(e)},sE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ud=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qt="[MIN_NAME]",St="[MAX_NAME]",un=function(t,e){if(t===e)return 0;if(t===Qt||e===St)return-1;if(e===Qt||t===St)return 1;{const n=Jl(t),i=Jl(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},oE=function(t,e){return t===e?0:t<e?-1:1},gn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ne(e))},fa=function(t){if(typeof t!="object"||t===null)return ne(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=ne(e[i]),n+=":",n+=fa(t[e[i]]);return n+="}",n},hd=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dd=function(t){g(!ud(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},aE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},cE=new RegExp("^-?(0*)\\d{1,10}$"),uE=-2147483648,hE=2147483647,Jl=function(t){if(cE.test(t)){const e=Number(t);if(e>=uE&&e<=hE)return e}return null},fi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Te("Exception was thrown by user callback.",n),e},Math.floor(0))}},dE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rn=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class fE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pE{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Te(e)}}class Zr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zr.OWNER="owner";/**
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
 */const pa="5",fd="v",pd="s",gd="r",md="f",yd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_d="ls",gE="p",eo="ac",vd="websocket",wd="long_polling";/**
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
 */class mE{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ht.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ht.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ed(t,e,n){g(typeof e=="string","typeof type must == string"),g(typeof n=="object","typeof params must == object");let i;if(e===vd)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===wd)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yE(t)&&(n.ns=t.namespace);const s=[];return be(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class _E{constructor(){this.counters_={}}incrementCounter(e,n=1){Ke(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sf(this.counters_)}}/**
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
 */const ur={},hr={};function ga(t){const e=t.toString();return ur[e]||(ur[e]=new _E),ur[e]}function vE(t,e){const n=t.toString();return hr[n]||(hr[n]=e()),hr[n]}/**
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
 */class wE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&fi(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zl="start",EE="close",TE="pLPCommand",IE="pRTLPCB",Td="id",Id="pw",Sd="ser",SE="cb",CE="seg",AE="ts",bE="d",RE="dframe",Cd=1870,Ad=30,NE=Cd-Ad,kE=25e3,DE=3e4;class Lt{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=di(e),this.stats_=ga(n),this.urlFn=l=>(this.appCheckToken&&(l[eo]=this.appCheckToken),Ed(n,wd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DE)),rE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ma((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zl)this.id=a,this.password=l;else if(o===EE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Zl]="t",i[Sd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[SE]=this.scriptTagHolder.uniqueCallbackIdentifier),i[fd]=pa,this.transportSessionId&&(i[pd]=this.transportSessionId),this.lastSessionId&&(i[_d]=this.lastSessionId),this.applicationId&&(i[gE]=this.applicationId),this.appCheckToken&&(i[eo]=this.appCheckToken),typeof location<"u"&&location.hostname&&yd.test(location.hostname)&&(i[gd]=md);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lt.forceAllow_=!0}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){return Lt.forceAllow_?!0:!Lt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aE()&&!lE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=If(n),s=hd(i,NE);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[RE]="t",i[Td]=e,i[Id]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ma{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nE(),window[TE+this.uniqueCallbackIdentifier]=e,window[IE+this.uniqueCallbackIdentifier]=n,this.myIFrame=ma.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){le("frame writing exception"),a.stack&&le(a.stack),le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||le("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Td]=this.myID,e[Id]=this.myPW,e[Sd]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ad+i.length<=Cd;){const o=this.pendingSegs.shift();i=i+"&"+CE+s+"="+o.seg+"&"+AE+s+"="+o.ts+"&"+bE+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(kE)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const OE=16384,xE=45e3;let Zi=null;typeof MozWebSocket<"u"?Zi=MozWebSocket:typeof WebSocket<"u"&&(Zi=WebSocket);class ke{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=di(this.connId),this.stats_=ga(n),this.connURL=ke.connectionURL_(n,o,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s){const r={};return r[fd]=pa,typeof location<"u"&&location.hostname&&yd.test(location.hostname)&&(r[gd]=md),n&&(r[pd]=n),i&&(r[_d]=i),s&&(r[eo]=s),Ed(e,vd,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ht.set("previous_websocket_failure",!0);try{if(!xc()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Zi(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Zi!==null&&!ke.forceDisallow_}static previouslyFailed(){return ht.isInMemoryStorage||ht.get("previous_websocket_failure")===!0}markConnectionHealthy(){ht.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Dn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=hd(n,OE);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ke.responsesRequiredToBeHealthy=2;ke.healthyTimeout=3e4;/**
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
 */class ya{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Lt,ke]}initTransports_(e){const n=ke&&ke.isAvailable();let i=n&&!ke.previouslyFailed();if(e.webSocketOnly&&(n||Te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ke];else{const s=this.transports_=[];for(const r of ya.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const PE=6e4,ME=5e3,LE=10*1024,FE=100*1024,dr="t",ec="d",UE="s",tc="r",VE="e",nc="o",ic="a",sc="n",rc="p",$E="h";class qE{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=di("c:"+this.id+":"),this.transportManager_=new ya(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Rn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dr in e){const n=e[dr];n===ic?this.upgradeIfSecondaryHealthy_():n===tc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gn("t",e),i=gn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ic,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gn("t",e),i=gn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gn(dr,e);if(ec in e){const i=e[ec];if(n===$E)this.onHandshake_(i);else if(n===sc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===UE?this.onConnectionShutdown_(i):n===tc?this.onReset_(i):n===VE?Jr("Server Error: "+i):n===nc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pa!==i&&Te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Rn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ME))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ht.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class bd{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Rd{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class es extends Rd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!as()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new es}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const oc=32,ac=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function L(){return new $("")}function R(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function et(t){return t.pieces_.length-t.pieceNum_}function V(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function Nd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function BE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function kd(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function J(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof $)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new $(n,0)}function A(t){return t.pieceNum_>=t.pieces_.length}function Ce(t,e){const n=R(t),i=R(e);if(n===null)return e;if(n===i)return Ce(V(t),V(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Od(t,e){if(et(t)!==et(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Oe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(et(t)>et(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class jE{constructor(e,n){this.errorPrefix_=n,this.parts_=kd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ls(this.parts_[i]);xd(this)}}function HE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ls(e),xd(t)}function WE(t){const e=t.parts_.pop();t.byteLength_-=ls(e),t.parts_.length>0&&(t.byteLength_-=1)}function xd(t){if(t.byteLength_>ac)throw new Error(t.errorPrefix_+"has a key path longer than "+ac+" bytes ("+t.byteLength_+").");if(t.parts_.length>oc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oc+") or object contains a cycle "+ot(t))}function ot(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class _a extends Rd{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new _a}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const mn=1e3,zE=60*5*1e3,GE=3*1e3,lc=30*1e3,KE=1.3,YE=3e4,XE="server_kill",cc=3;class We extends bd{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=We.nextPersistentConnectionId_++,this.log_=di("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mn,this.maxReconnectDelay_=zE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!xc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_a.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&es.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(ne(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new fo,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},GE),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;We.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ke(e,"w")){const i=Wt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mf(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ne(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jr("Unrecognized action received from server: "+ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YE&&(this.reconnectDelay_=mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+We.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?le("getToken() completed but was canceled"):(le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new qE(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Te(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(XE)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Te(h),l())}}}interrupt(e){le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],La(this.interruptReasons_)&&(this.reconnectDelay_=mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>fa(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new $(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cc&&(this.reconnectDelay_=lc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ad.replace(/\./g,"-")]=1,as()?e["framework.cordova"]=1:go()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=es.getInstance().currentlyOnline();return La(this.interruptReasons_)&&e}}We.nextPersistentConnectionId_=0;We.nextConnectionId_=0;/**
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
 */class N{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new N(e,n)}}/**
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
 */class Ms{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new N(Qt,e),s=new N(Qt,n);return this.compare(i,s)!==0}minPost(){return N.MIN}}/**
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
 */let Ci;class Pd extends Ms{static get __EMPTY_NODE(){return Ci}static set __EMPTY_NODE(e){Ci=e}compare(e,n){return un(e.name,n.name)}isDefinedOn(e){throw Zt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return N.MIN}maxPost(){return new N(St,Ci)}makePost(e,n){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,Ci)}toString(){return".key"}}const Ht=new Pd;/**
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
 */class Ai{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Q{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Q.RED,this.left=s??_e.EMPTY_NODE,this.right=r??_e.EMPTY_NODE}copy(e,n,i,s,r){return new Q(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return _e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return _e.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Q.RED=!0;Q.BLACK=!1;class QE{copy(e,n,i,s,r){return this}insert(e,n,i){return new Q(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _e{constructor(e,n=_e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Q.BLACK,null,null))}remove(e){return new _e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Q.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ai(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ai(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ai(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ai(this.root_,null,this.comparator_,!0,e)}}_e.EMPTY_NODE=new QE;/**
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
 */function JE(t,e){return un(t.name,e.name)}function va(t,e){return un(t,e)}/**
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
 */let to;function ZE(t){to=t}const Md=function(t){return typeof t=="number"?"number:"+dd(t):"string:"+t},Ld=function(t){if(t.isLeafNode()){const e=t.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ke(e,".sv"),"Priority must be a string or number.")}else g(t===to||t.isEmpty(),"priority of unexpected type.");g(t===to||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let uc;class Y{constructor(e,n=Y.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ld(this.priorityNode_)}static set __childrenNodeConstructor(e){uc=e}static get __childrenNodeConstructor(){return uc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Y(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Y.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:R(e)===".priority"?this.priorityNode_:Y.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Y.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=R(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||et(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Y.__childrenNodeConstructor.EMPTY_NODE.updateChild(V(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Md(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dd(this.value_):e+=this.value_,this.lazyHash_=cd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Y.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Y.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Y.VALUE_TYPE_ORDER.indexOf(n),r=Y.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+n),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Y.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Fd,Ud;function eT(t){Fd=t}function tT(t){Ud=t}class nT extends Ms{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?un(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return N.MIN}maxPost(){return new N(St,new Y("[PRIORITY-POST]",Ud))}makePost(e,n){const i=Fd(e);return new N(n,new Y("[PRIORITY-POST]",i))}toString(){return".priority"}}const ue=new nT;/**
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
 */const iT=Math.log(2);class sT{constructor(e){const n=r=>parseInt(Math.log(r)/iT,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ts=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Q(d,h.node,Q.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),w=s(f+1,c);return h=t[f],d=n?n(h):h,new Q(d,h.node,Q.BLACK,p,w)}},r=function(l){let c=null,u=null,h=t.length;const d=function(p,w){const I=h-p,F=h;h-=p;const we=s(I+1,F),ee=t[I],H=n?n(ee):ee;f(new Q(H,ee.node,w,null,we))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const w=l.nextBitIsOne(),I=Math.pow(2,l.count-(p+1));w?d(I,Q.BLACK):(d(I,Q.BLACK),d(I,Q.RED))}return u},o=new sT(t.length),a=r(o);return new _e(i||e,a)};/**
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
 */let fr;const xt={};class He{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return g(xt&&ue,"ChildrenNode.ts has not been loaded"),fr=fr||new He({".priority":xt},{".priority":ue}),fr}get(e){const n=Wt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _e?n:null}hasIndex(e){return Ke(this.indexSet_,e.toString())}addIndex(e,n){g(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(N.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ts(i,e.getCompare()):a=xt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new He(u,c)}addToIndexes(e,n){const i=Oi(this.indexes_,(s,r)=>{const o=Wt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===xt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ts(a,o.getCompare())}else return xt;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new He(i,this.indexSet_)}removeFromIndexes(e,n){const i=Oi(this.indexes_,s=>{if(s===xt)return s;{const r=n.get(e.name);return r?s.remove(new N(e.name,r)):s}});return new He(i,this.indexSet_)}}/**
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
 */let yn;class x{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ld(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yn||(yn=new x(new _e(va),null,He.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yn}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yn:n}}getChild(e){const n=R(e);return n===null?this:this.getImmediateChild(n).getChild(V(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(g(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new N(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?yn:this.priorityNode_;return new x(s,o,r)}}updateChild(e,n){const i=R(e);if(i===null)return n;{g(R(e)!==".priority"||et(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(V(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ue,(o,a)=>{n[o]=a.val(e),i++,r&&x.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Md(this.getPriority().val())+":"),this.forEachChild(ue,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":cd(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new N(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new N(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new N(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pi?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ue),s=n.getIterator(ue);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rT extends x{constructor(){super(new _e(va),x.EMPTY_NODE,He.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const pi=new rT;Object.defineProperties(N,{MIN:{value:new N(Qt,x.EMPTY_NODE)},MAX:{value:new N(St,pi)}});Pd.__EMPTY_NODE=x.EMPTY_NODE;Y.__childrenNodeConstructor=x;ZE(pi);tT(pi);/**
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
 */const oT=!0;function ce(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Y(n,ce(e))}if(!(t instanceof Array)&&oT){const n=[];let i=!1;if(be(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ce(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new N(o,l)))}}),n.length===0)return x.EMPTY_NODE;const r=ts(n,JE,o=>o.name,va);if(i){const o=ts(n,ue.getCompare());return new x(r,ce(e),new He({".priority":o},{".priority":ue}))}else return new x(r,ce(e),He.Default)}else{let n=x.EMPTY_NODE;return be(t,(i,s)=>{if(Ke(t,i)&&i.substring(0,1)!=="."){const r=ce(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ce(e))}}eT(ce);/**
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
 */class aT extends Ms{constructor(e){super(),this.indexPath_=e,g(!A(e)&&R(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?un(e.name,n.name):r}makePost(e,n){const i=ce(e),s=x.EMPTY_NODE.updateChild(this.indexPath_,i);return new N(n,s)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,pi);return new N(St,e)}toString(){return kd(this.indexPath_,0).join("/")}}/**
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
 */class lT extends Ms{compare(e,n){const i=e.node.compareTo(n.node);return i===0?un(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,n){const i=ce(e);return new N(n,i)}toString(){return".value"}}const cT=new lT;/**
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
 */function uT(t){return{type:"value",snapshotNode:t}}function hT(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function dT(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hc(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qt}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:St}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new wa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dc(t){const e={};if(t.isDefault())return e;let n;return t.index_===ue?n="$priority":t.index_===cT?n="$value":t.index_===Ht?n="$key":(g(t.index_ instanceof aT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ne(n),t.startSet_&&(e.startAt=ne(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ne(t.indexStartName_))),t.endSet_&&(e.endAt=ne(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ne(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
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
 */class ns extends bd{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=di("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ns.getListenId_(e,i),a={};this.listens_[o]=a;const l=dc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Wt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=ns.getListenId_(e,n);delete this.listens_[i]}get(e){const n=dc(e._queryParams),i=e._path.toString(),s=new fo;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Dn(a.responseText)}catch{Te("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Te("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class pT{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function is(){return{value:null,children:new Map}}function Vd(t,e,n){if(A(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=R(e);t.children.has(i)||t.children.set(i,is());const s=t.children.get(i);e=V(e),Vd(s,e,n)}}function no(t,e,n){t.value!==null?n(e,t.value):gT(t,(i,s)=>{const r=new $(e.toString()+"/"+i);no(s,r,n)})}function gT(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class mT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const pc=10*1e3,yT=30*1e3,_T=5*60*1e3;class vT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mT(e);const i=pc+(yT-pc)*Math.random();Rn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;be(e,(s,r)=>{r>0&&Ke(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Rn(this.reportStats_.bind(this),Math.floor(Math.random()*2*_T))}}/**
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
 */var Ue;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ue||(Ue={}));function $d(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ss{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ue.ACK_USER_WRITE,this.source=$d()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new ss(L(),n,this.revert)}}else return g(R(this.path)===e,"operationForChild called for unrelated child."),new ss(V(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ct{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ue.OVERWRITE}operationForChild(e){return A(this.path)?new Ct(this.source,L(),this.snap.getImmediateChild(e)):new Ct(this.source,V(this.path),this.snap)}}/**
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
 */class zn{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ue.MERGE}operationForChild(e){if(A(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Ct(this.source,L(),n.value):new zn(this.source,L(),n)}else return g(R(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zn(this.source,V(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ea{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const n=R(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function wT(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fT(o.childName,o.snapshotNode))}),_n(t,s,"child_removed",e,i,n),_n(t,s,"child_added",e,i,n),_n(t,s,"child_moved",r,i,n),_n(t,s,"child_changed",e,i,n),_n(t,s,"value",e,i,n),s}function _n(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>TT(t,a,l)),o.forEach(a=>{const l=ET(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ET(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function TT(t,e,n){if(e.childName==null||n.childName==null)throw Zt("Should only compare child_ events.");const i=new N(e.childName,e.snapshotNode),s=new N(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function jd(t,e){return{eventCache:t,serverCache:e}}function Nn(t,e,n,i){return jd(new Ea(e,n,i),t.serverCache)}function Hd(t,e,n,i){return jd(t.eventCache,new Ea(e,n,i))}function io(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function At(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let pr;const IT=()=>(pr||(pr=new _e(oE)),pr);class U{constructor(e,n=IT()){this.value=e,this.children=n}static fromObject(e){let n=new U(null);return be(e,(i,s)=>{n=n.set(new $(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:L(),value:this.value};if(A(e))return null;{const i=R(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(V(e),n);return r!=null?{path:J(new $(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const n=R(e),i=this.children.get(n);return i!==null?i.subtree(V(e)):new U(null)}}set(e,n){if(A(e))return new U(n,this.children);{const i=R(e),r=(this.children.get(i)||new U(null)).set(V(e),n),o=this.children.insert(i,r);return new U(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new U(null):new U(null,this.children);{const n=R(e),i=this.children.get(n);if(i){const s=i.remove(V(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new U(null):new U(this.value,r)}else return this}}get(e){if(A(e))return this.value;{const n=R(e),i=this.children.get(n);return i?i.get(V(e)):null}}setTree(e,n){if(A(e))return n;{const i=R(e),r=(this.children.get(i)||new U(null)).setTree(V(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new U(this.value,o)}}fold(e){return this.fold_(L(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(J(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,L(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(A(e))return null;{const r=R(e),o=this.children.get(r);return o?o.findOnPath_(V(e),J(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,L(),n)}foreachOnPath_(e,n,i){if(A(e))return this;{this.value&&i(n,this.value);const s=R(e),r=this.children.get(s);return r?r.foreachOnPath_(V(e),J(n,s),i):new U(null)}}foreach(e){this.foreach_(L(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(J(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Pe{constructor(e){this.writeTree_=e}static empty(){return new Pe(new U(null))}}function kn(t,e,n){if(A(e))return new Pe(new U(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ce(s,e);return r=r.updateChild(o,n),new Pe(t.writeTree_.set(s,r))}else{const s=new U(n),r=t.writeTree_.setTree(e,s);return new Pe(r)}}}function gc(t,e,n){let i=t;return be(n,(s,r)=>{i=kn(i,J(e,s),r)}),i}function mc(t,e){if(A(e))return Pe.empty();{const n=t.writeTree_.setTree(e,new U(null));return new Pe(n)}}function so(t,e){return kt(t,e)!=null}function kt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ce(n.path,e)):null}function yc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(i,s)=>{e.push(new N(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new N(i,s.value))}),e}function Qe(t,e){if(A(e))return t;{const n=kt(t,e);return n!=null?new Pe(new U(n)):new Pe(t.writeTree_.subtree(e))}}function ro(t){return t.writeTree_.isEmpty()}function Jt(t,e){return Wd(L(),t.writeTree_,e)}function Wd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Wd(J(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(J(t,".priority"),i)),n}}/**
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
 */function zd(t,e){return Qd(e,t)}function ST(t,e,n,i,s){g(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=kn(t.visibleWrites,e,n)),t.lastWriteId=i}function CT(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function AT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);g(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bT(a,i.path)?s=!1:Oe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return RT(t),!0;if(i.snap)t.visibleWrites=mc(t.visibleWrites,i.path);else{const a=i.children;be(a,l=>{t.visibleWrites=mc(t.visibleWrites,J(i.path,l))})}return!0}else return!1}function bT(t,e){if(t.snap)return Oe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Oe(J(t.path,n),e))return!0;return!1}function RT(t){t.visibleWrites=Gd(t.allWrites,NT,L()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function NT(t){return t.visible}function Gd(t,e,n){let i=Pe.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Oe(n,o)?(a=Ce(n,o),i=kn(i,a,r.snap)):Oe(o,n)&&(a=Ce(o,n),i=kn(i,L(),r.snap.getChild(a)));else if(r.children){if(Oe(n,o))a=Ce(n,o),i=gc(i,a,r.children);else if(Oe(o,n))if(a=Ce(o,n),A(a))i=gc(i,L(),r.children);else{const l=Wt(r.children,R(a));if(l){const c=l.getChild(V(a));i=kn(i,L(),c)}}}else throw Zt("WriteRecord should have .snap or .children")}}return i}function Kd(t,e,n,i,s){if(!i&&!s){const r=kt(t.visibleWrites,e);if(r!=null)return r;{const o=Qe(t.visibleWrites,e);if(ro(o))return n;if(n==null&&!so(o,L()))return null;{const a=n||x.EMPTY_NODE;return Jt(o,a)}}}else{const r=Qe(t.visibleWrites,e);if(!s&&ro(r))return n;if(!s&&n==null&&!so(r,L()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Oe(c.path,e)||Oe(e,c.path))},a=Gd(t.allWrites,o,e),l=n||x.EMPTY_NODE;return Jt(a,l)}}}function kT(t,e,n){let i=x.EMPTY_NODE;const s=kt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ue,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Qe(t.visibleWrites,e);return n.forEachChild(ue,(o,a)=>{const l=Jt(Qe(r,new $(o)),a);i=i.updateImmediateChild(o,l)}),yc(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Qe(t.visibleWrites,e);return yc(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function DT(t,e,n,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=J(e,n);if(so(t.visibleWrites,r))return null;{const o=Qe(t.visibleWrites,r);return ro(o)?s.getChild(n):Jt(o,s.getChild(n))}}function OT(t,e,n,i){const s=J(e,n),r=kt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Qe(t.visibleWrites,s);return Jt(o,i.getNode().getImmediateChild(n))}else return null}function xT(t,e){return kt(t.visibleWrites,e)}function PT(t,e,n,i,s,r,o){let a;const l=Qe(t.visibleWrites,e),c=kt(l,L());if(c!=null)a=c;else if(n!=null)a=Jt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function MT(){return{visibleWrites:Pe.empty(),allWrites:[],lastWriteId:-1}}function oo(t,e,n,i){return Kd(t.writeTree,t.treePath,e,n,i)}function Yd(t,e){return kT(t.writeTree,t.treePath,e)}function _c(t,e,n,i){return DT(t.writeTree,t.treePath,e,n,i)}function rs(t,e){return xT(t.writeTree,J(t.treePath,e))}function LT(t,e,n,i,s,r){return PT(t.writeTree,t.treePath,e,n,i,s,r)}function Ta(t,e,n){return OT(t.writeTree,t.treePath,e,n)}function Xd(t,e){return Qd(J(t.treePath,e),t.writeTree)}function Qd(t,e){return{treePath:t,writeTree:e}}/**
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
 */class FT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;g(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,hc(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,dT(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,hT(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,hc(i,e.snapshotNode,s.oldSnap));else throw Zt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class UT{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Jd=new UT;class Ia{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ea(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ta(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:At(this.viewCache_),r=LT(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function VT(t,e){g(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $T(t,e,n,i,s){const r=new FT;let o,a;if(n.type===Ue.OVERWRITE){const c=n;c.source.fromUser?o=ao(t,e,c.path,c.snap,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!A(c.path),o=os(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Ue.MERGE){const c=n;c.source.fromUser?o=BT(t,e,c.path,c.children,i,s,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=lo(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Ue.ACK_USER_WRITE){const c=n;c.revert?o=WT(t,e,c.path,i,s,r):o=jT(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Ue.LISTEN_COMPLETE)o=HT(t,e,n.path,i,r);else throw Zt("Unknown operation type: "+n.type);const l=r.getChanges();return qT(e,o,l),{viewCache:o,changes:l}}function qT(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=io(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(uT(io(e)))}}function Zd(t,e,n,i,s,r){const o=e.eventCache;if(rs(i,n)!=null)return e;{let a,l;if(A(n))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=At(e),u=c instanceof x?c:x.EMPTY_NODE,h=Yd(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=oo(i,At(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=R(n);if(c===".priority"){g(et(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=_c(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=V(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=_c(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ta(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Nn(e,a,o.isFullyInitialized()||A(n),t.filter.filtersNodes())}}function os(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(A(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=R(n);if(!l.isCompleteForPath(n)&&et(n)>1)return e;const p=V(n),I=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),I):c=u.updateChild(l.getNode(),f,I,p,Jd,null)}const h=Hd(e,c,l.isFullyInitialized()||A(n),u.filtersNodes()),d=new Ia(s,h,r);return Zd(t,h,n,s,d,a)}function ao(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Ia(s,e,r);if(A(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Nn(e,c,!0,t.filter.filtersNodes());else{const h=R(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Nn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=V(n),f=a.getNode().getImmediateChild(h);let p;if(A(d))p=i;else{const w=u.getCompleteChild(h);w!=null?Nd(d)===".priority"&&w.getChild(Dd(d)).isEmpty()?p=w:p=w.updateChild(d,i):p=x.EMPTY_NODE}if(f.equals(p))l=e;else{const w=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=Nn(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function vc(t,e){return t.eventCache.isCompleteForChild(e)}function BT(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=J(n,l);vc(e,R(u))&&(a=ao(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=J(n,l);vc(e,R(u))||(a=ao(t,a,u,c,s,r,o))}),a}function wc(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function lo(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;A(n)?c=i:c=new U(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=wc(t,f,d);l=os(t,l,new $(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),w=wc(t,p,d);l=os(t,l,new $(h),w,s,r,o,a)}}),l}function jT(t,e,n,i,s,r,o){if(rs(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(A(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return os(t,e,n,l.getNode().getChild(n),s,r,a,o);if(A(n)){let c=new U(null);return l.getNode().forEachChild(Ht,(u,h)=>{c=c.set(new $(u),h)}),lo(t,e,n,c,s,r,a,o)}else return e}else{let c=new U(null);return i.foreach((u,h)=>{const d=J(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),lo(t,e,n,c,s,r,a,o)}}function HT(t,e,n,i,s){const r=e.serverCache,o=Hd(e,r.getNode(),r.isFullyInitialized()||A(n),r.isFiltered());return Zd(t,o,n,i,Jd,s)}function WT(t,e,n,i,s,r){let o;if(rs(i,n)!=null)return e;{const a=new Ia(i,e,s),l=e.eventCache.getNode();let c;if(A(n)||R(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=oo(i,At(e));else{const h=e.serverCache.getNode();g(h instanceof x,"serverChildren would be complete if leaf node"),u=Yd(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=R(n);let h=Ta(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,V(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,x.EMPTY_NODE,V(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oo(i,At(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||rs(i,L())!=null,Nn(e,c,o,t.filter.filtersNodes())}}function zT(t,e){const n=At(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!A(e)&&!n.getImmediateChild(R(e)).isEmpty())?n.getChild(e):null}function Ec(t,e,n,i){e.type===Ue.MERGE&&e.source.queryId!==null&&(g(At(t.viewCache_),"We should always have a full cache before handling merges"),g(io(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=$T(t.processor_,s,e,n,i);return VT(t.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,GT(t,r.changes,r.viewCache.eventCache.getNode(),null)}function GT(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return wT(t.eventGenerator_,e,n,s)}/**
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
 */let Tc;function KT(t){g(!Tc,"__referenceConstructor has already been defined"),Tc=t}function Sa(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),Ec(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Ec(o,e,n,i));return r}}function Ca(t,e){let n=null;for(const i of t.views.values())n=n||zT(i,e);return n}/**
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
 */let Ic;function YT(t){g(!Ic,"__referenceConstructor has already been defined"),Ic=t}class Sc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new U(null),this.pendingWriteTree_=MT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function XT(t,e,n,i,s){return ST(t.pendingWriteTree_,e,n,i,s),s?Fs(t,new Ct($d(),e,n)):[]}function Ft(t,e,n=!1){const i=CT(t.pendingWriteTree_,e);if(AT(t.pendingWriteTree_,e)){let r=new U(null);return i.snap!=null?r=r.set(L(),!0):be(i.children,o=>{r=r.set(new $(o),!0)}),Fs(t,new ss(i.path,r,n))}else return[]}function Ls(t,e,n){return Fs(t,new Ct(qd(),e,n))}function QT(t,e,n){const i=U.fromObject(n);return Fs(t,new zn(qd(),e,i))}function JT(t,e,n,i){const s=sf(t,i);if(s!=null){const r=rf(s),o=r.path,a=r.queryId,l=Ce(o,e),c=new Ct(Bd(a),l,n);return of(t,o,c)}else return[]}function ZT(t,e,n,i){const s=sf(t,i);if(s){const r=rf(s),o=r.path,a=r.queryId,l=Ce(o,e),c=U.fromObject(n),u=new zn(Bd(a),l,c);return of(t,o,u)}else return[]}function ef(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ce(o,e),c=Ca(a,l);if(c)return c});return Kd(s,e,r,n,!0)}function Fs(t,e){return tf(e,t.syncPointTree_,null,zd(t.pendingWriteTree_,L()))}function tf(t,e,n,i){if(A(t.path))return nf(t,e,n,i);{const s=e.get(L());n==null&&s!=null&&(n=Ca(s,L()));let r=[];const o=R(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Xd(i,o);r=r.concat(tf(a,l,c,u))}return s&&(r=r.concat(Sa(s,t,i,n))),r}}function nf(t,e,n,i){const s=e.get(L());n==null&&s!=null&&(n=Ca(s,L()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Xd(i,o),u=t.operationForChild(o);u&&(r=r.concat(nf(u,a,l,c)))}),s&&(r=r.concat(Sa(s,t,i,n))),r}function sf(t,e){return t.tagToQueryMap.get(e)}function rf(t){const e=t.indexOf("$");return g(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function of(t,e,n){const i=t.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=zd(t.pendingWriteTree_,e);return Sa(i,n,s,null)}/**
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
 */class Aa{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Aa(n)}node(){return this.node_}}class ba{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=J(this.path_,e);return new ba(this.syncTree_,n)}node(){return ef(this.syncTree_,this.path_)}}const eI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cc=function(t,e,n){if(!t||typeof t!="object")return t;if(g(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nI(t[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:g(!1,"Unexpected server value: "+t)}},nI=function(t,e,n){t.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},iI=function(t,e,n,i){return Ra(e,new ba(n,t),i)},sI=function(t,e,n){return Ra(t,new Aa(e),n)};function Ra(t,e,n){const i=t.getPriority().val(),s=Cc(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Cc(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Y(a,ce(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Y(s))),o.forEachChild(ue,(a,l)=>{const c=Ra(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Na{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ka(t,e){let n=e instanceof $?e:new $(e),i=t,s=R(n);for(;s!==null;){const r=Wt(i.node.children,s)||{children:{},childCount:0};i=new Na(s,i,r),n=V(n),s=R(n)}return i}function hn(t){return t.node.value}function af(t,e){t.node.value=e,co(t)}function lf(t){return t.node.childCount>0}function rI(t){return hn(t)===void 0&&!lf(t)}function Us(t,e){be(t.node.children,(n,i)=>{e(new Na(n,t,i))})}function cf(t,e,n,i){n&&!i&&e(t),Us(t,s=>{cf(s,e,!0,i)}),n&&i&&e(t)}function oI(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function gi(t){return new $(t.parent===null?t.name:gi(t.parent)+"/"+t.name)}function co(t){t.parent!==null&&aI(t.parent,t.name,t)}function aI(t,e,n){const i=rI(n),s=Ke(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,co(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,co(t))}/**
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
 */const lI=/[\[\].#$\/\u0000-\u001F\u007F]/,cI=/[\[\].#$\u0000-\u001F\u007F]/,gr=10*1024*1024,uf=function(t){return typeof t=="string"&&t.length!==0&&!lI.test(t)},uI=function(t){return typeof t=="string"&&t.length!==0&&!cI.test(t)},hI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),uI(t)},hf=function(t,e,n){const i=n instanceof $?new jE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ot(i));if(typeof e=="function")throw new Error(t+"contains a function "+ot(i)+" with contents = "+e.toString());if(ud(e))throw new Error(t+"contains "+e.toString()+" "+ot(i));if(typeof e=="string"&&e.length>gr/3&&ls(e)>gr)throw new Error(t+"contains a string greater than "+gr+" utf8 bytes "+ot(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(be(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!uf(o)))throw new Error(t+" contains an invalid key ("+o+") "+ot(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HE(i,o),hf(t,a,i),WE(i)}),s&&r)throw new Error(t+' contains ".value" child '+ot(i)+" in addition to actual children.")}},dI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!hI(n))throw new Error(qf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pI(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Od(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Dt(t,e,n){pI(t,n),gI(t,i=>Oe(i,e)||Oe(e,i))}function gI(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(mI(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();pt&&le("event: "+n.toString()),fi(i)}}}/**
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
 */const yI="repo_interrupt",_I=25;class vI{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=is(),this.transactionQueueTree_=new Na,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wI(t,e,n){if(t.stats_=ga(t.repoInfo_),t.forceRestClient_||dE())t.server_=new ns(t.repoInfo_,(i,s,r,o)=>{Ac(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ne(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new We(t.repoInfo_,e,(i,s,r,o)=>{Ac(t,i,s,r,o)},i=>{bc(t,i)},i=>{TI(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=vE(t.repoInfo_,()=>new vT(t.stats_,t.server_)),t.infoData_=new pT,t.infoSyncTree_=new Sc({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ls(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Da(t,"connected",!1),t.serverSyncTree_=new Sc({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Dt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function EI(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function df(t){return eI({timestamp:EI(t)})}function Ac(t,e,n,i,s){t.dataUpdateCount++;const r=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Oi(n,c=>ce(c));o=ZT(t.serverSyncTree_,r,l,s)}else{const l=ce(n);o=JT(t.serverSyncTree_,r,l,s)}else if(i){const l=Oi(n,c=>ce(c));o=QT(t.serverSyncTree_,r,l)}else{const l=ce(n);o=Ls(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=xa(t,r)),Dt(t.eventQueue_,a,o)}function bc(t,e){Da(t,"connected",e),e===!1&&SI(t)}function TI(t,e){be(e,(n,i)=>{Da(t,n,i)})}function Da(t,e,n){const i=new $("/.info/"+e),s=ce(n);t.infoData_.updateSnapshot(i,s);const r=Ls(t.infoSyncTree_,i,s);Dt(t.eventQueue_,i,r)}function II(t){return t.nextWriteId_++}function SI(t){ff(t,"onDisconnectEvents");const e=df(t),n=is();no(t.onDisconnect_,L(),(s,r)=>{const o=iI(s,r,t.serverSyncTree_,e);Vd(n,s,o)});let i=[];no(n,L(),(s,r)=>{i=i.concat(Ls(t.serverSyncTree_,s,r));const o=RI(t,s);xa(t,o)}),t.onDisconnect_=is(),Dt(t.eventQueue_,L(),i)}function CI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yI)}function ff(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),le(n,...e)}function pf(t,e,n){return ef(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Oa(t,e=t.transactionQueueTree_){if(e||Vs(t,e),hn(e)){const n=mf(t,e);g(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&AI(t,gi(e),n)}else lf(e)&&Us(e,n=>{Oa(t,n)})}function AI(t,e,n){const i=n.map(c=>c.currentWriteId),s=pf(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ce(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ff(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ft(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Vs(t,ka(t.transactionQueueTree_,e)),Oa(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)fi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Te("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}xa(t,e)}},o)}function xa(t,e){const n=gf(t,e),i=gi(n),s=mf(t,n);return bI(t,s,i),i}function bI(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ce(n,l.path);let u=!1,h;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Ft(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_I)u=!0,h="maxretry",s=s.concat(Ft(t.serverSyncTree_,l.currentWriteId,!0));else{const d=pf(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){hf("transaction failed: Data returned ",f,l.path);let p=ce(f);typeof f=="object"&&f!=null&&Ke(f,".priority")||(p=p.updatePriority(d.getPriority()));const I=l.currentWriteId,F=df(t),we=sI(p,d,F);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=we,l.currentWriteId=II(t),o.splice(o.indexOf(I),1),s=s.concat(XT(t.serverSyncTree_,l.path,we,l.currentWriteId,l.applyLocally)),s=s.concat(Ft(t.serverSyncTree_,I,!0))}else u=!0,h="nodata",s=s.concat(Ft(t.serverSyncTree_,l.currentWriteId,!0))}Dt(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Vs(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)fi(i[a]);Oa(t,t.transactionQueueTree_)}function gf(t,e){let n,i=t.transactionQueueTree_;for(n=R(e);n!==null&&hn(i)===void 0;)i=ka(i,n),e=V(e),n=R(e);return i}function mf(t,e){const n=[];return yf(t,e,n),n.sort((i,s)=>i.order-s.order),n}function yf(t,e,n){const i=hn(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Us(e,s=>{yf(t,s,n)})}function Vs(t,e){const n=hn(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,af(e,n.length>0?n:void 0)}Us(e,i=>{Vs(t,i)})}function RI(t,e){const n=gi(gf(t,e)),i=ka(t.transactionQueueTree_,e);return oI(i,s=>{mr(t,s)}),mr(t,i),cf(i,s=>{mr(t,s)}),n}function mr(t,e){const n=hn(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(g(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ft(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?af(e,void 0):n.length=r+1,Dt(t.eventQueue_,gi(e),s);for(let o=0;o<i.length;o++)fi(i[o])}}/**
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
 */function NI(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function kI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Te(`Invalid query segment '${n}' in query '${t}'`)}return e}const Rc=function(t,e){const n=DI(t),i=n.namespace;n.domain==="firebase.com"&&It(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&It("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sE();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mE(n.host,n.secure,i,e,s,"",i!==n.subdomain),path:new $(n.pathString)}},DI=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=NI(t.substring(u,h)));const d=kI(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Pa{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return A(this._path)?null:Nd(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=fc(this._queryParams),n=fa(e);return n==="{}"?"default":n}get _queryObject(){return fc(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof Pa))return!1;const n=this._repo===e._repo,i=Od(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+BE(this._path)}}class dn extends Pa{constructor(e,n){super(e,n,new wa,!1)}get parent(){const e=Dd(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}KT(dn);YT(dn);/**
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
 */const OI="FIREBASE_DATABASE_EMULATOR_HOST",uo={};let xI=!1;function PI(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||It("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),le("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Rc(r,s),a=o.repoInfo,l,c;typeof process<"u"&&(c=process.env[OI]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Rc(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Zr(Zr.OWNER):new pE(t.name,t.options,e);dI("Invalid Firebase Database URL",o),A(o.path)||It("Database URL must point to the root of a Firebase Database (not including a child path).");const h=LI(a,t,u,new fE(t.name,n));return new FI(h,t)}function MI(t,e){const n=uo[e];(!n||n[t.key]!==t)&&It(`Database ${e}(${t.repoInfo_}) has already been deleted.`),CI(t),delete n[t.key]}function LI(t,e,n,i){let s=uo[e.name];s||(s={},uo[e.name]=s);let r=s[t.toURLString()];return r&&It("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vI(t,xI,n,i),s[t.toURLString()]=r,r}class FI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,L())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&It("Cannot call "+e+" on a deleted database.")}}/**
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
 */function UI(t){Zw(Kn),Me(new Ae("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return PI(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ze(Qw,Jw,t)}/**
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
 */We.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};We.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};UI();export{BI as $,qI as a,jI as c,$I as e};
