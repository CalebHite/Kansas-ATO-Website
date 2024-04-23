var Bi=function(t,e){return Bi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},Bi(t,e)};function Jc(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Bi(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function zo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Qc(t,e,n,i){function s(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function a(h){try{l(i.next(h))}catch(u){o(u)}}function c(h){try{l(i.throw(h))}catch(u){o(u)}}function l(h){h.done?r(h.value):s(h.value).then(a,c)}l((i=i.apply(t,e||[])).next())})}function Zc(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(h){return c([l,h])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(n=0)),n;)try{if(i=1,s&&(r=l[0]&2?s.return:l[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,l[1])).done)return r;switch(s=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,s=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){n.label=l[1];break}if(l[0]===6&&n.label<r[1]){n.label=r[1],r=l;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(l);break}r[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(h){l=[6,h],s=0}finally{i=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function _i(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fn(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),s,r=[],o;try{for(;(e===void 0||e-- >0)&&!(s=i.next()).done;)r.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return r}function kr(t,e,n){if(n||arguments.length===2)for(var i=0,s=e.length,r;i<s;i++)(r||!(i in e))&&(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Go={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f=function(t,e){if(!t)throw dt(e)},dt=function(t){return new Error("Firebase Database ("+Go.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ko=function(t){for(var e=[],n=0,i=0;i<t.length;i++){var s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eh=function(t){for(var e=[],n=0,i=0;n<t.length;){var s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){var r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){var r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{var r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[],s=0;s<t.length;s+=3){var r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4,d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),i.push(n[h],n[u],n[d],n[p])}return i.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ko(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[],s=0;s<t.length;){var r=n[t.charAt(s++)],o=s<t.length,a=o?n[t.charAt(s)]:0;++s;var c=s<t.length,l=c?n[t.charAt(s)]:64;++s;var h=s<t.length,u=h?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw Error();var d=r<<2|a>>4;if(i.push(d),l!==64){var p=a<<4&240|l>>2;if(i.push(p),u!==64){var _=l<<6&192|u;i.push(_)}}}return i},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},th=function(t){var e=Ko(t);return Cs.encodeByteArray(e,!0)},Hi=function(t){try{return Cs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){return Yo(void 0,t)}function Yo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(var i in e)!e.hasOwnProperty(i)||!ih(i)||(t[i]=Yo(t[i],e[i]));return t}function ih(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ss=function(){function t(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,i){e.resolve=n,e.reject=i})}return t.prototype.wrapCallback=function(e){var n=this;return function(i,s){i?n.reject(i):n.resolve(s),typeof e=="function"&&(n.promise.catch(function(){}),e.length===1?e(i):e(i,s))}},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function As(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Xo(){var t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qo(){return Go.NODE_ADMIN===!0}function sh(){return"indexedDB"in self&&indexedDB!=null}function rh(){return new Promise(function(t,e){try{var n=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=function(){s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=function(){n=!1},s.onerror=function(){var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(r){e(r)}})}function oh(){return!(!navigator||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ah="FirebaseError",ft=function(t){Jc(e,t);function e(n,i,s){var r=t.call(this,i)||this;return r.code=n,r.customData=s,r.name=ah,Object.setPrototypeOf(r,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,pt.prototype.create),r}return e}(Error),pt=function(){function t(e,n,i){this.service=e,this.serviceName=n,this.errors=i}return t.prototype.create=function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var s=n[0]||{},r=this.service+"/"+e,o=this.errors[e],a=o?lh(o,s):"Error",c=this.serviceName+": "+a+" ("+r+").",l=new ft(r,c,s);return l},t}();function lh(t,e){return t.replace(ch,function(n,i){var s=e[i];return s!=null?String(s):"<"+i+"?>"})}var ch=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){return JSON.parse(t)}function F(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zo=function(t){var e={},n={},i={},s="";try{var r=t.split(".");e=jt(Hi(r[0])||""),n=jt(Hi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},hh=function(t){var e=Zo(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uh=function(t){var e=Zo(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ct(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Or(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wn(t,e,n){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Wi(t,e){if(t===e)return!0;for(var n=Object.keys(t),i=Object.keys(e),s=0,r=n;s<r.length;s++){var o=r[s];if(!i.includes(o))return!1;var a=t[o],c=e[o];if(Dr(a)&&Dr(c)){if(!Wi(a,c))return!1}else if(a!==c)return!1}for(var l=0,h=i;l<h.length;l++){var o=h[l];if(!n.includes(o))return!1}return!0}function Dr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){for(var e=[],n=function(c,l){Array.isArray(l)?l.forEach(function(h){e.push(encodeURIComponent(c)+"="+encodeURIComponent(h))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(l))},i=0,s=Object.entries(t);i<s.length;i++){var r=s[i],o=r[0],a=r[1];n(o,a)}return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dh=function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(e,n){n||(n=0);var i=this.W_;if(typeof e=="string")for(var s=0;s<16;s++)i[s]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(var s=0;s<16;s++)i[s]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(var s=16;s<80;s++){var r=i[s-3]^i[s-8]^i[s-14]^i[s-16];i[s]=(r<<1|r>>>31)&4294967295}for(var o=this.chain_[0],a=this.chain_[1],c=this.chain_[2],l=this.chain_[3],h=this.chain_[4],u,d,s=0;s<80;s++){s<40?s<20?(u=l^a&(c^l),d=1518500249):(u=a^c^l,d=1859775393):s<60?(u=a&c|l&(a|c),d=2400959708):(u=a^c^l,d=3395469782);var r=(o<<5|o>>>27)+u+h+d+i[s]&4294967295;h=l,l=c,c=(a<<30|a>>>2)&4294967295,a=o,o=r}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(e,n){if(e!=null){n===void 0&&(n=e.length);for(var i=n-this.blockSize,s=0,r=this.buf_,o=this.inbuf_;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}},t.prototype.digest=function(){var e=[],n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);for(var s=0,i=0;i<5;i++)for(var r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e},t}();function fh(t,e){var n=new ph(t,e);return n.subscribe.bind(n)}var ph=function(){function t(e,n){var i=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){e(i)}).catch(function(s){i.error(s)})}return t.prototype.next=function(e){this.forEachObserver(function(n){n.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(n){n.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,n,i){var s=this,r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");gh(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=mi),r.error===void 0&&(r.error=mi),r.complete===void 0&&(r.complete=mi);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{s.finalError?r.error(s.finalError):r.complete()}catch{}}),this.observers.push(r),o},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,e)},t.prototype.sendOne=function(e,n){var i=this;this.task.then(function(){if(i.observers!==void 0&&i.observers[e]!==void 0)try{n(i.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})},t.prototype.close=function(e){var n=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},t}();function gh(t,e){if(typeof t!="object"||t===null)return!1;for(var n=0,i=e;n<i.length;n++){var s=i[n];if(s in t&&typeof t[s]=="function")return!0}return!1}function mi(){}function _h(t,e){return t+" failed: "+e+" argument "}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mh=function(t){for(var e=[],n=0,i=0;i<t.length;i++){var s=t.charCodeAt(i);if(s>=55296&&s<=56319){var r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");var o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Vn=function(t){for(var e=0,n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */var yh=1e3,vh=2,Eh=4*60*60*1e3,Ih=.5;function Pr(t,e,n){e===void 0&&(e=yh),n===void 0&&(n=vh);var i=e*Math.pow(n,t),s=Math.round(Ih*i*(Math.random()-.5)*2);return Math.min(Eh,i+s)}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}var te=function(){function t(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var xe="[DEFAULT]";/**
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
 */var wh=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var i=new Ss;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,i;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Ch(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}try{for(var s=_i(this.instancesDeferred.entries()),r=s.next();!r.done;r=s.next()){var o=fn(r.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch{}}}catch(u){n={error:u}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=xe),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return Qc(this,void 0,void 0,function(){var e;return Zc(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(kr(kr([],fn(e.filter(function(i){return"INTERNAL"in i}).map(function(i){return i.INTERNAL.delete()}))),fn(e.filter(function(i){return"_delete"in i}).map(function(i){return i._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=xe),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=xe),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,i;e===void 0&&(e={});var s=e.options,r=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:r});try{for(var c=_i(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var h=fn(l.value,2),u=h[0],d=h[1],p=this.normalizeInstanceIdentifier(u);o===p&&d.resolve(a)}}catch(_){n={error:_}}finally{try{l&&!l.done&&(i=c.return)&&i.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var i,s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);var o=this.instances.get(s);return o&&e(o,s),function(){r.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var i,s,r=this.onInitCallbacks.get(n);if(r)try{for(var o=_i(r),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch{}}}catch(l){i={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,i=e.options,s=i===void 0?{}:i,r=this.instances.get(n);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Th(n),options:s}),this.instances.set(n,r),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(r,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,r)}catch{}return r||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=xe),this.component?this.component.multipleInstances?e:xe:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Th(t){return t===xe?void 0:t}function Ch(t){return t.instantiationMode==="EAGER"}/**
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
 */var Sh=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new wh(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/*! *****************************************************************************
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
***************************************************************************** */function se(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var i=Array(t),s=0,e=0;e<n;e++)for(var r=arguments[e],o=0,a=r.length;o<a;o++,s++)i[s]=r[o];return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,C;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(C||(C={}));var Ah={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Rh=C.INFO,bh=(Pe={},Pe[C.DEBUG]="log",Pe[C.VERBOSE]="log",Pe[C.INFO]="info",Pe[C.WARN]="warn",Pe[C.ERROR]="error",Pe),Nh=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var s=new Date().toISOString(),r=bh[e];if(r)console[r].apply(console,se(["["+s+"]  "+t.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Yt=function(){function t(e){this.name=e,this._logLevel=Rh,this._logHandler=Nh,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in C))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?Ah[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,se([this,C.DEBUG],e)),this._logHandler.apply(this,se([this,C.DEBUG],e))},t.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,se([this,C.VERBOSE],e)),this._logHandler.apply(this,se([this,C.VERBOSE],e))},t.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,se([this,C.INFO],e)),this._logHandler.apply(this,se([this,C.INFO],e))},t.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,se([this,C.WARN],e)),this._logHandler.apply(this,se([this,C.WARN],e))},t.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,se([this,C.ERROR],e)),this._logHandler.apply(this,se([this,C.ERROR],e))},t}();/**
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
 */class kh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Oh(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Oh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ea="@firebase/app",Dh="0.7.0";/**
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
 */const bs=new Yt("@firebase/app"),Ph="@firebase/app-compat",xh="@firebase/analytics-compat",Lh="@firebase/analytics",Mh="@firebase/app-check-compat",Fh="@firebase/app-check",Uh="@firebase/auth",jh="@firebase/auth-compat",$h="@firebase/database",Bh="@firebase/database-compat",Hh="@firebase/functions",Wh="@firebase/functions-compat",Vh="@firebase/installations",qh="@firebase/installations-compat",zh="@firebase/messaging",Gh="@firebase/messaging-compat",Kh="@firebase/performance",Yh="@firebase/performance-compat",Xh="@firebase/remote-config",Jh="@firebase/remote-config-compat",Qh="@firebase/storage",Zh="@firebase/storage-compat",eu="@firebase/firestore",tu="@firebase/firestore-compat",nu="firebase",iu="9.0.0";/**
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
 */const su="[DEFAULT]",ru={[ea]:"fire-core",[Ph]:"fire-core-compat",[Lh]:"fire-analytics",[xh]:"fire-analytics-compat",[Fh]:"fire-app-check",[Mh]:"fire-app-check-compat",[Uh]:"fire-auth",[jh]:"fire-auth-compat",[$h]:"fire-rtdb",[Bh]:"fire-rtdb-compat",[Hh]:"fire-fn",[Wh]:"fire-fn-compat",[Vh]:"fire-iid",[qh]:"fire-iid-compat",[zh]:"fire-fcm",[Gh]:"fire-fcm-compat",[Kh]:"fire-perf",[Yh]:"fire-perf-compat",[Xh]:"fire-rc",[Jh]:"fire-rc-compat",[Qh]:"fire-gcs",[Zh]:"fire-gcs-compat",[eu]:"fire-fst",[tu]:"fire-fst-compat","fire-js":"fire-js",[nu]:"fire-js-all"};/**
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
 */const Vi=new Map,qi=new Map;function ou(t,e){try{t.container.addComponent(e)}catch(n){bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function he(t){const e=t.name;if(qi.has(e))return bs.debug(`There were multiple attempts to register component ${e}.`),!1;qi.set(e,t);for(const n of Vi.values())ou(n,t);return!0}function ta(t,e){return t.container.getProvider(e)}/**
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
 */const au={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},zi=new pt("app","Firebase",au);/**
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
 */class lu{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zi.create("app-deleted",{appName:this._name})}}/**
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
 */const Xt=iu;function cu(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:su,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw zi.create("bad-app-name",{appName:String(i)});const s=Vi.get(i);if(s){if(Wi(t,s.options)&&Wi(n,s.config))return s;throw zi.create("duplicate-app",{appName:i})}const r=new Sh(i);for(const a of qi.values())r.addComponent(a);const o=new lu(t,n,r);return Vi.set(i,o),o}function Ie(t,e,n){var i;let s=(i=ru[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bs.warn(a.join(" "));return}he(new te(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function hu(t){he(new te("platform-logger",e=>new kh(e),"PRIVATE")),Ie(ea,Dh,t),Ie("fire-js","")}hu();var uu="firebase",du="9.0.0";/**
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
 */Ie(uu,du,"app");const fu={apiKey:"AIzaSyBh1UFfDoC9meS3PaU-ZC7Rujm7cidbyXI",authDomain:"ato-gamma-mu.firebaseapp.com",projectId:"ato-gamma-mu",storageBucket:"ato-gamma-mu.appspot.com",messagingSenderId:"933428144661",appId:"1:933428144661:web:575041f4ef34f27bc47c1c"};cu(fu);function pu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const na=new pt("auth","Firebase",pu());/**
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
 */const xr=new Yt("@firebase/auth");function In(t,...e){xr.logLevel<=C.ERROR&&xr.error(`Auth (${Xt}): ${t}`,...e)}/**
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
 */function Lr(t,...e){throw Ns(t,...e)}function ia(t,...e){return Ns(t,...e)}function Ns(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return na.create(t,...e)}function w(t,e,...n){if(!t)throw Ns(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw In(e),new Error(e)}function Tn(t,e){t||Ot(e)}/**
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
 */const Mr=new Map;function Me(t){Tn(t instanceof Function,"Expected a class definition");let e=Mr.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mr.set(t,e),e)}function gu(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Me);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function _u(){return Fr()==="http:"||Fr()==="https:"}function Fr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_u()||Xo()||"connection"in navigator)?navigator.onLine:!0}function yu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=As()||Jo()}get(){return mu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vu(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gi{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Eu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"};/**
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
 */const Iu=new Jt(3e4,6e4);async function sa(t,e,n,i,s={}){return ra(t,s,()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(Gi.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),Gi.fetch()(oa(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function ra(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Eu),e);try{const s=new wu(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw yi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=(r.ok?o.errorMessage:o.error.message).split(" : ")[0];if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yi(t,"email-already-in-use",o);const l=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");Lr(t,l)}}catch(s){if(s instanceof ft)throw s;Lr(t,"network-request-failed")}}function oa(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?vu(t.config,s):`${t.config.apiScheme}://${s}`}class wu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ia(this.auth,"timeout")),Iu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yi(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ia(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function Tu(t,e){return sa(t,"POST","/v1/accounts:delete",e)}async function Cu(t,e){return sa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Dt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Su(t,e=!1){const n=gt(t),i=await n.getIdToken(e),s=aa(i);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Dt(vi(s.auth_time)),issuedAtTime:Dt(vi(s.iat)),expirationTime:Dt(vi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function vi(t){return Number(t)*1e3}function aa(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return In("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hi(n);return s?JSON.parse(s):(In("Failed to decode base64 JWT payload"),null)}catch(s){return In("Caught error parsing JWT payload as JSON",s),null}}function Au(t){const e=aa(t);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ki(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ft&&Ru(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Ru({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class la{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dt(this.lastLoginAt),this.creationTime=Dt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cn(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Ki(t,Cu(n,{idToken:i}));w(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ou(r.providerUserInfo):[],a=ku(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new la(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Nu(t){const e=gt(t);await Cn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ku(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ou(t){return t.map(e=>{var{providerId:n}=e,i=zo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Du(t,e){const n=await ra(t,{},()=>{const i=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=oa(t,s,"/v1/token",`key=${r}`);return Gi.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Du(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new $t;return i&&(w(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(w(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(w(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $t,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function Se(t,e){w(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new bu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.metadata=new la(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Su(this,e)}reload(){return Nu(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Cn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ki(this,Tu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,h;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Z=(l=n.createdAt)!==null&&l!==void 0?l:void 0,Ce=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:de,emailVerified:B,isAnonymous:Oe,providerData:De,stsTokenManager:dn}=n;w(de&&dn,e,"internal-error");const Ct=$t.fromJSON(this.name,dn);w(typeof de=="string",e,"internal-error"),Se(u,e.name),Se(d,e.name),w(typeof B=="boolean",e,"internal-error"),w(typeof Oe=="boolean",e,"internal-error"),Se(p,e.name),Se(_,e.name),Se(A,e.name),Se(O,e.name),Se(Z,e.name),Se(Ce,e.name);const gi=new st({uid:de,auth:e,email:d,emailVerified:B,displayName:u,isAnonymous:Oe,photoURL:_,phoneNumber:p,tenantId:A,stsTokenManager:Ct,createdAt:Z,lastLoginAt:Ce});return De&&Array.isArray(De)&&(gi.providerData=De.map(Xc=>Object.assign({},Xc))),O&&(gi._redirectEventId=O),gi}static async _fromIdTokenResponse(e,n,i=!1){const s=new $t;s.updateFromServerResponse(n);const r=new st({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Cn(r),r}}/**
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
 */class ca{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ca.type="NONE";const Ur=ca;/**
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
 */function Ei(t,e,n){return`firebase:${t}:${e}:${n}`}class rt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ei(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ei("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new rt(Me(Ur),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Me(Ur);const o=Ei(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const u=st._fromJSON(e,h);l!==r&&(a=u),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new rt(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new rt(r,e,i))}}/**
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
 */function jr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uu(e))return"Blackberry";if(ju(e))return"Webos";if(xu(e))return"Safari";if((e.includes("chrome/")||Lu(e))&&!e.includes("edge/"))return"Chrome";if(Fu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Pu(t=_e()){return/firefox\//i.test(t)}function xu(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lu(t=_e()){return/crios\//i.test(t)}function Mu(t=_e()){return/iemobile/i.test(t)}function Fu(t=_e()){return/android/i.test(t)}function Uu(t=_e()){return/blackberry/i.test(t)}function ju(t=_e()){return/webos/i.test(t)}/**
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
 */function ha(t,e=[]){let n;switch(t){case"Browser":n=jr(_e());break;case"Worker":n=`${jr(_e())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xt}/${i}`}/**
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
 */class $u{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $r(this),this.idTokenSubscription=new $r(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=na,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Me(n)),this._initializationPromise=this.queue(async()=>{var i;this._deleted||(this.persistenceManager=await rt.create(this,e),!this._deleted&&(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o!=null&&o.user)&&(i=o.user)}return i?i._redirectEventId?(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cn(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gt(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Me(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[Me(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ha(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Bu(t){return gt(t)}class $r{constructor(e){this.auth=e,this.observer=null,this.addObserver=fh(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Jt(3e4,6e4);/**
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
 */new Jt(2e3,1e4);/**
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
 */new Jt(3e4,6e4);/**
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
 */new Jt(5e3,15e3);var Hu="@firebase/auth",Wu="0.17.0";/**
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
 */class Vu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qu(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zu(t){he(new te("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{w(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),w(!(r!=null&&r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ha(t)},c=new $u(o,a);return gu(c,n),c})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),he(new te("auth-internal",e=>{const n=Bu(e.getProvider("auth").getImmediate());return(i=>new Vu(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(Hu,Wu,qu(t))}zu("Browser");/*! *****************************************************************************
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
***************************************************************************** */var Yi=function(t,e){return Yi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},Yi(t,e)};function Gu(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Yi(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function ua(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,ks=ks||{},m=Ku||self;function Sn(){}function Xi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Yu(t){return Object.prototype.hasOwnProperty.call(t,Ii)&&t[Ii]||(t[Ii]=++Xu)}var Ii="closure_uid_"+(1e9*Math.random()>>>0),Xu=0;function Ju(t,e,n){return t.call.apply(t.bind,arguments)}function Qu(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function U(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?U=Ju:U=Qu,U.apply(null,arguments)}function pn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function $(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ne(){this.s=this.s,this.o=this.o}var Zu=0;Ne.prototype.s=!1;Ne.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Zu!=0)&&Yu(this)};Ne.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var da=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},fa=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,s=typeof t=="string"?t.split(""):t,r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function ed(t){e:{for(var e=Vd,n=t.length,i=typeof t=="string"?t.split(""):t,s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Br(t){return Array.prototype.concat.apply([],arguments)}function Os(t){var e=t.length;if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i];return n}return[]}function An(t){return/^[\s\xa0]*$/.test(t)}var Hr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function z(t,e){return t.indexOf(e)!=-1}function wi(t,e){return t<e?-1:t>e?1:0}var G;e:{var Wr=m.navigator;if(Wr){var Vr=Wr.userAgent;if(Vr){G=Vr;break e}}G=""}function Ds(t,e,n){for(var i in t)e.call(n,t[i],i,t)}function pa(t){var e={};for(var n in t)e[n]=t[n];return e}var qr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ga(t,e){for(var n,i,s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(var r=0;r<qr.length;r++)n=qr[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ps(t){return Ps[" "](t),t}Ps[" "]=Sn;function td(t){var e=sd;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var nd=z(G,"Opera"),Bt=z(G,"Trident")||z(G,"MSIE"),_a=z(G,"Edge"),Ji=_a||Bt,ma=z(G,"Gecko")&&!(z(G.toLowerCase(),"webkit")&&!z(G,"Edge"))&&!(z(G,"Trident")||z(G,"MSIE"))&&!z(G,"Edge"),id=z(G.toLowerCase(),"webkit")&&!z(G,"Edge");function ya(){var t=m.document;return t?t.documentMode:void 0}var Qi;e:{var Ti="",Ci=function(){var t=G;if(ma)return/rv:([^\);]+)(\)|;)/.exec(t);if(_a)return/Edge\/([\d\.]+)/.exec(t);if(Bt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(id)return/WebKit\/(\S+)/.exec(t);if(nd)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ci&&(Ti=Ci?Ci[1]:""),Bt){var Si=ya();if(Si!=null&&Si>parseFloat(Ti)){Qi=String(Si);break e}}Qi=Ti}var sd={};function rd(){return td(function(){for(var t=0,e=Hr(String(Qi)).split("."),n=Hr("9").split("."),i=Math.max(e.length,n.length),s=0;t==0&&s<i;s++){var r=e[s]||"",o=n[s]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],r[0].length==0&&o[0].length==0)break;t=wi(r[1].length==0?0:parseInt(r[1],10),o[1].length==0?0:parseInt(o[1],10))||wi(r[2].length==0,o[2].length==0)||wi(r[2],o[2]),r=r[3],o=o[3]}while(t==0)}return 0<=t})}m.document&&Bt&&ya();var od=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{m.addEventListener("test",Sn,e),m.removeEventListener("test",Sn,e)}catch{}return t}();function q(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};function Ht(t,e){if(q.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ma){e:{try{Ps(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ad[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ht.Z.h.call(this)}}$(Ht,q);var ad={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),ld=0;function cd(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++ld,this.ca=this.fa=!1}function qn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function zn(t){this.src=t,this.g={},this.h=0}zn.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=es(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new cd(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function Zi(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=da(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(qn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function es(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var xs="closure_lm_"+(1e6*Math.random()|0),Ai={};function va(t,e,n,i,s){if(i&&i.once)return Ia(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)va(t,e[r],n,i,s);return null}return n=Fs(n),t&&t[Zt]?t.N(e,n,Qt(i)?!!i.capture:!!i,s):Ea(t,e,n,!1,i,s)}function Ea(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Qt(s)?!!s.capture:!!s,a=Ms(t);if(a||(t[xs]=a=new zn(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=hd(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)od||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ta(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hd(){function t(n){return e.call(t.src,t.listener,n)}var e=ud;return t}function Ia(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ia(t,e[r],n,i,s);return null}return n=Fs(n),t&&t[Zt]?t.O(e,n,Qt(i)?!!i.capture:!!i,s):Ea(t,e,n,!0,i,s)}function wa(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)wa(t,e[r],n,i,s);else i=Qt(i)?!!i.capture:!!i,n=Fs(n),t&&t[Zt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=es(r,n,i,s),-1<n&&(qn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ms(t))&&(e=t.g[e.toString()],t=-1,e&&(t=es(e,n,i,s)),(n=-1<t?e[t]:null)&&Ls(n))}function Ls(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Zt])Zi(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ta(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ms(e))?(Zi(n,t),n.h==0&&(n.src=null,e[xs]=null)):qn(t)}}}function Ta(t){return t in Ai?Ai[t]:Ai[t]="on"+t}function ud(t,e){if(t.ca)t=!0;else{e=new Ht(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Ls(t),t=n.call(i,e)}return t}function Ms(t){return t=t[xs],t instanceof zn?t:null}var Ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fs(t){return typeof t=="function"?t:(t[Ri]||(t[Ri]=function(e){return t.handleEvent(e)}),t[Ri])}function M(){Ne.call(this),this.i=new zn(this),this.P=this,this.I=null}$(M,Ne);M.prototype[Zt]=!0;M.prototype.removeEventListener=function(t,e,n,i){wa(this,t,e,n,i)};function j(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new q(e,t);else if(e instanceof q)e.target=e.target||t;else{var s=e;e=new q(i,t),ga(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=gn(o,i,!0,e)&&s}if(o=e.g=t,s=gn(o,i,!0,e)&&s,s=gn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=gn(o,i,!1,e)&&s}M.prototype.M=function(){if(M.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)qn(n[i]);delete t.g[e],t.h--}}this.I=null};M.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};M.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function gn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Zi(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Us=m.JSON.stringify;function dd(){var t=Sa,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var fd=function(){function t(){this.h=this.g=null}return t.prototype.add=function(e,n){var i=Ca.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i},t}(),Ca=new(function(){function t(e,n){this.i=e,this.j=n,this.h=0,this.g=null}return t.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},t}())(function(){return new pd},function(t){return t.reset()}),pd=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(e,n){this.h=e,this.g=n,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function gd(t){m.setTimeout(function(){throw t},0)}function js(t,e){ts||_d(),ns||(ts(),ns=!0),Sa.add(t,e)}var ts;function _d(){var t=m.Promise.resolve(void 0);ts=function(){t.then(md)}}var ns=!1,Sa=new fd;function md(){for(var t;t=dd();){try{t.h.call(t.g)}catch(n){gd(n)}var e=Ca;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ns=!1}function Gn(t,e){M.call(this),this.h=t||1,this.g=e||m,this.j=U(this.kb,this),this.l=Date.now()}$(Gn,M);g=Gn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),j(this,"tick"),this.da&&($s(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $s(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}g.M=function(){Gn.Z.M.call(this),$s(this),delete this.g};function Bs(t,e,n){if(typeof t=="function")n&&(t=U(t,n));else if(t&&typeof t.handleEvent=="function")t=U(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:m.setTimeout(t,e||0)}function Aa(t){t.g=Bs(function(){t.g=null,t.i&&(t.i=!1,Aa(t))},t.j);var e=t.h;t.h=null,t.m.apply(null,e)}var yd=function(t){Gu(e,t);function e(n,i){var s=t.call(this)||this;return s.m=n,s.j=i,s.h=null,s.i=!1,s.g=null,s}return e.prototype.l=function(n){this.h=arguments,this.g?this.i=!0:Aa(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(Ne);function Wt(t){Ne.call(this),this.h=t,this.g={}}$(Wt,Ne);var zr=[];function Ra(t,e,n,i){Array.isArray(n)||(n&&(zr[0]=n.toString()),n=zr);for(var s=0;s<n.length;s++){var r=va(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ba(t){Ds(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ls(e)},t),t.g={}}Wt.prototype.M=function(){Wt.Z.M.call(this),ba(this)};Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kn(){this.g=!0}Kn.prototype.Aa=function(){this.g=!1};function vd(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ed(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function tt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wd(t,n)+(i?" "+i:"")})}function Id(t,e){t.info(function(){return"TIMEOUT: "+e})}Kn.prototype.info=function(){};function wd(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Us(n)}catch{return e}}var _t={},Gr=null;function Hs(){return Gr=Gr||new M}_t.Ma="serverreachability";function Na(t){q.call(this,_t.Ma,t)}$(Na,q);function Vt(t){var e=Hs();j(e,new Na(e))}_t.STAT_EVENT="statevent";function ka(t,e){q.call(this,_t.STAT_EVENT,t),this.stat=e}$(ka,q);function K(t){var e=Hs();j(e,new ka(e,t))}_t.Na="timingevent";function Oa(t,e){q.call(this,_t.Na,t),this.size=e}$(Oa,q);function en(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){t()},e)}function Ws(){}Ws.prototype.h=null;function Kr(t){return t.h||(t.h=t.i())}var Yn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Vs(){q.call(this,"d")}$(Vs,q);function qs(){q.call(this,"c")}$(qs,q);var is;function Xn(){}$(Xn,Ws);Xn.prototype.g=function(){return new XMLHttpRequest};Xn.prototype.i=function(){return{}};is=new Xn;function tn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Wt(this),this.P=Td,t=Ji?125:void 0,this.W=new Gn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Da}function Da(){this.i=null,this.g="",this.h=!1}var Td=45e3,ss={},Rn={};g=tn.prototype;g.setTimeout=function(t){this.P=t};function rs(t,e,n){t.K=1,t.v=Qn(we(e)),t.s=n,t.U=!0,Pa(t,null)}function Pa(t,e){t.F=Date.now(),nn(t),t.A=we(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),$a(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Da,t.g=ol(t.l,n?e:null,!t.s),0<t.O&&(t.L=new yd(U(t.Ia,t,t.g),t.O)),Ra(t.V,t.g,"readystatechange",t.gb),e=t.H?pa(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Vt(),vd(t.j,t.u,t.A,t.m,t.X,t.s)}g.gb=function(t){t=t.target;var e=this.L;e&&ye(t)==3?e.l():this.Ia(t)};g.Ia=function(t){try{if(t==this.g)e:{var e=ye(this.g),n=this.g.Da(),i=this.g.ba();if(!(3>e)&&(e!=3||Ji||this.g&&(this.h.h||this.g.ga()||Qr(this.g)))){this.I||e!=4||n==7||(n==8||0>=i?Vt(3):Vt(2)),Jn(this);var s=this.g.ba();this.N=s;t:if(xa(this)){var r=Qr(this.g);t="";var o=r.length,a=ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fe(this),Pt(this);var c="";break t}this.h.i=new m.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(r[n],{stream:a&&n==o-1});r.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=s==200,Ed(this.j,this.u,this.A,this.m,this.X,e,s),this.i){if(this.$&&!this.J){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!An(l)){var u=l;break t}}u=null}if(s=u)tt(this.j,this.m,s,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,os(this,s);else{this.i=!1,this.o=3,K(12),Fe(this),Pt(this);break e}}this.U?(La(this,e,c),Ji&&this.i&&e==3&&(Ra(this.V,this.W,"tick",this.fb),this.W.start())):(tt(this.j,this.m,c,null),os(this,c)),e==4&&Fe(this),this.i&&!this.I&&(e==4?nl(this.l,this):(this.i=!1,nn(this)))}else s==400&&0<c.indexOf("Unknown SID")?(this.o=3,K(12)):(this.o=0,K(13)),Fe(this),Pt(this)}}}catch{}finally{}};function xa(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function La(t,e,n){for(var i=!0,s;!t.I&&t.C<n.length;)if(s=Cd(t,n),s==Rn){e==4&&(t.o=4,K(14),i=!1),tt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ss){t.o=4,K(15),tt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else tt(t.j,t.m,s,null),os(t,s);xa(t)&&s!=Rn&&s!=ss&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,K(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.L=!0,K(11))):(tt(t.j,t.m,n,"[Invalid Chunked Response]"),Fe(t),Pt(t))}g.fb=function(){if(this.g){var t=ye(this.g),e=this.g.ga();this.C<e.length&&(Jn(this),La(this,t,e),this.i&&t!=4&&nn(this))}};function Cd(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Rn:(n=Number(e.substring(n,i)),isNaN(n)?ss:(i+=1,i+n>e.length?Rn:(e=e.substr(i,n),t.C=i+n,e)))}g.cancel=function(){this.I=!0,Fe(this)};function nn(t){t.Y=Date.now()+t.P,Ma(t,t.P)}function Ma(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=en(U(t.eb,t),e)}function Jn(t){t.B&&(m.clearTimeout(t.B),t.B=null)}g.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(Id(this.j,this.A),this.K!=2&&(Vt(),K(17)),Fe(this),this.o=2,Pt(this)):Ma(this,this.Y-t)};function Pt(t){t.l.G==0||t.I||nl(t.l,t)}function Fe(t){Jn(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$s(t.W),ba(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function os(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||as(n.i,t))){if(n.I=t.N,!t.J&&as(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)On(n),ni(n);else break e;Zs(n),K(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=en(U(n.ab,n),6e3));if(1>=Wa(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ue(n,11)}else if((t.J||n.g==t)&&On(n),!An(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){var r=s[e];if(n.U=r[0],r=r[1],n.G==2)if(r[0]=="c"){n.J=r[1],n.la=r[2];var o=r[3];o!=null&&(n.ma=o,n.h.info("VER="+n.ma));var a=r[4];a!=null&&(n.za=a,n.h.info("SVER="+n.za));var c=r[5];c!=null&&typeof c=="number"&&0<c&&(i=1.5*c,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;var l=t.g;if(l){var h=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(h){var u=i.i;!u.g&&(z(h,"spdy")||z(h,"quic")||z(h,"h2"))&&(u.j=u.l,u.g=new Set,u.h&&(Ks(u,u.h),u.h=null))}if(i.D){var d=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(i.sa=d,k(i.F,i.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var p=t;if(i.oa=rl(i,i.H?i.la:null,i.W),p.J){Va(i.i,p);var _=p,A=i.K;A&&_.setTimeout(A),_.B&&(Jn(_),nn(_)),i.g=p}else el(i);0<n.l.length&&ii(n)}else r[0]!="stop"&&r[0]!="close"||Ue(n,7);else n.G==3&&(r[0]=="stop"||r[0]=="close"?r[0]=="stop"?Ue(n,7):Qs(n):r[0]!="noop"&&n.j&&n.j.wa(r),n.A=0)}}Vt(4)}catch{}}function Sd(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Xi(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function zs(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xi(t)||typeof t=="string")fa(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Xi(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=Sd(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function mt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof mt)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}g=mt.prototype;g.R=function(){Gs(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};g.T=function(){return Gs(this),this.g.concat()};function Gs(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];We(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],We(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}g.get=function(t,e){return We(this.h,t)?this.h[t]:e};g.set=function(t,e){We(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};g.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Fa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ad(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ve(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ve){this.g=e!==void 0?e:t.g,bn(this,t.j),this.s=t.s,Nn(this,t.i),kn(this,t.m),this.l=t.l,e=t.h;var n=new qt;n.i=e.i,e.g&&(n.g=new mt(e.g),n.h=e.h),Yr(this,n),this.o=t.o}else t&&(n=String(t).match(Fa))?(this.g=!!e,bn(this,n[1]||"",!0),this.s=xt(n[2]||""),Nn(this,n[3]||"",!0),kn(this,n[4]),this.l=xt(n[5]||"",!0),Yr(this,n[6]||"",!0),this.o=xt(n[7]||"")):(this.g=!!e,this.h=new qt(null,this.g))}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(kt(e,Xr,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(kt(e,Xr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(kt(n,n.charAt(0)=="/"?Od:kd,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",kt(n,Pd)),t.join("")};function we(t){return new Ve(t)}function bn(t,e,n){t.j=n?xt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nn(t,e,n){t.i=n?xt(e,!0):e}function kn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yr(t,e,n){e instanceof qt?(t.h=e,xd(t.h,t.g)):(n||(e=kt(e,Dd)),t.h=new qt(e,t.g))}function k(t,e,n){t.h.set(e,n)}function Qn(t){return k(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rd(t){return t instanceof Ve?we(t):new Ve(t,void 0)}function bd(t,e,n,i){var s=new Ve(null,void 0);return t&&bn(s,t),e&&Nn(s,e),n&&kn(s,n),i&&(s.l=i),s}function xt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function kt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Nd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xr=/[#\/\?@]/g,kd=/[#\?:]/g,Od=/[#\?]/g,Dd=/[#\?@]/g,Pd=/#/g;function qt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ke(t){t.g||(t.g=new mt,t.h=0,t.i&&Ad(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}g=qt.prototype;g.add=function(t,e){ke(this),this.i=null,t=yt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ua(t,e){ke(t),e=yt(t,e),We(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,We(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Gs(t)))}function ja(t,e){return ke(t),e=yt(t,e),We(t.g.h,e)}g.forEach=function(t,e){ke(this),this.g.forEach(function(n,i){fa(n,function(s){t.call(e,s,i,this)},this)},this)};g.T=function(){ke(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};g.R=function(t){ke(this);var e=[];if(typeof t=="string")ja(this,t)&&(e=Br(e,this.g.get(yt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Br(e,t[n])}return e};g.set=function(t,e){return ke(this),this.i=null,t=yt(this,t),ja(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};g.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function $a(t,e,n){Ua(t,e),0<n.length&&(t.i=null,t.g.set(yt(t,e),Os(n)),t.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function yt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xd(t,e){e&&!t.j&&(ke(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Ua(this,i),$a(this,s,n))},t)),t.j=e}var Ld=function(){function t(e,n){this.h=e,this.g=n}return t}();function Ba(t){this.l=t||Md,m.PerformanceNavigationTiming?(t=m.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(m.g&&m.g.Ea&&m.g.Ea()&&m.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Md=10;function Ha(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wa(t){return t.h?1:t.g?t.g.size:0}function as(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ks(t,e){t.g?t.g.add(e):t.h=e}function Va(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ba.prototype.cancel=function(){var t,e;if(this.i=qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){try{for(var n=ua(this.g.values()),i=n.next();!i.done;i=n.next()){var s=i.value;s.cancel()}}catch(r){t={error:r}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}};function qa(t){var e,n;if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){var i=t.i;try{for(var s=ua(t.g.values()),r=s.next();!r.done;r=s.next()){var o=r.value;i=i.concat(o.D)}}catch(a){e={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return i}return Os(t.i)}function Ys(){}Ys.prototype.stringify=function(t){return m.JSON.stringify(t,void 0)};Ys.prototype.parse=function(t){return m.JSON.parse(t,void 0)};function Fd(){this.g=new Ys}function Ud(t,e,n){var i=n||"";try{zs(t,function(s,r){var o=s;Qt(s)&&(o=Us(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function jd(t,e){var n=new Kn;if(m.Image){var i=new Image;i.onload=pn(_n,n,i,"TestLoadImage: loaded",!0,e),i.onerror=pn(_n,n,i,"TestLoadImage: error",!1,e),i.onabort=pn(_n,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=pn(_n,n,i,"TestLoadImage: timeout",!1,e),m.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function _n(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Zn(t){this.l=t.$b||null,this.j=t.ib||!1}$(Zn,Ws);Zn.prototype.g=function(){return new ei(this.l,this.j)};Zn.prototype.i=function(t){return function(){return t}}({});function ei(t,e){M.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(ei,M);var Xs=0;g=ei.prototype;g.open=function(t,e){if(this.readyState!=Xs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zt(this)};g.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||m).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=Xs};g.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zt(this)),this.g&&(this.readyState=3,zt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;za(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function za(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}g.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sn(this):zt(this),this.readyState==3&&za(this)}};g.Ua=function(t){this.g&&(this.response=this.responseText=t,sn(this))};g.Ta=function(t){this.g&&(this.response=t,sn(this))};g.ha=function(){this.g&&sn(this)};function sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zt(t)}g.setRequestHeader=function(t,e){this.v.append(t,e)};g.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $d=m.JSON.parse;function D(t){M.call(this),this.headers=new mt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ga,this.K=this.L=!1}$(D,M);var Ga="",Bd=/^https?$/i,Hd=["POST","PUT"];g=D.prototype;g.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():is.g(),this.C=this.u?Kr(this.u):Kr(is),this.g.onreadystatechange=U(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Jr(this,r);return}t=n||"";var s=new mt(this.headers);i&&zs(i,function(r,o){s.set(o,r)}),i=ed(s.T()),n=m.FormData&&t instanceof m.FormData,!(0<=da(Hd,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xa(this),0<this.B&&((this.K=Wd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=U(this.pa,this)):this.A=Bs(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Jr(this,r)}};function Wd(t){return Bt&&rd()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Vd(t){return t.toLowerCase()=="content-type"}g.pa=function(){typeof ks<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j(this,"timeout"),this.abort(8))};function Jr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ka(t),ti(t)}function Ka(t){t.D||(t.D=!0,j(t,"complete"),j(t,"error"))}g.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,j(this,"complete"),j(this,"abort"),ti(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ti(this,!0)),D.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Ya(this):this.cb())};g.cb=function(){Ya(this)};function Ya(t){if(t.h&&typeof ks<"u"&&(!t.C[1]||ye(t)!=4||t.ba()!=2)){if(t.v&&ye(t)==4)Bs(t.Fa,0,t);else if(j(t,"readystatechange"),ye(t)==4){t.h=!1;try{var e=t.ba();e:switch(e){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break e;default:n=!1}var i;if(!(i=n)){var s;if(s=e===0){var r=String(t.H).match(Fa)[1]||null;if(!r&&m.self&&m.self.location){var o=m.self.location.protocol;r=o.substr(0,o.length-1)}s=!Bd.test(r?r.toLowerCase():"")}i=s}if(i)j(t,"complete"),j(t,"success");else{t.m=6;try{var a=2<ye(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.ba()+"]",Ka(t)}}finally{ti(t)}}}}function ti(t,e){if(t.g){Xa(t);var n=t.g,i=t.C[0]?Sn:null;t.g=null,t.C=null,e||j(t,"ready");try{n.onreadystatechange=i}catch{}}}function Xa(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(m.clearTimeout(t.A),t.A=null)}function ye(t){return t.g?t.g.readyState:0}g.ba=function(){try{return 2<ye(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$d(e)}};function Qr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ga:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function qd(t){var e="";return Ds(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Js(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=qd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):k(t,e,n))}function St(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ja(t){this.za=0,this.l=[],this.h=new Kn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=St("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=St("baseRetryDelayMs",5e3,t),this.$a=St("retryDelaySeedMs",1e4,t),this.Ya=St("forwardChannelMaxRetries",2,t),this.ra=St("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ba(t&&t.concurrentRequestLimit),this.Ca=new Fd,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}g=Ja.prototype;g.ma=8;g.G=1;function Qs(t){if(Qa(t),t.G==3){var e=t.V++,n=we(t.F);k(n,"SID",t.J),k(n,"RID",e),k(n,"TYPE","terminate"),rn(t,n),e=new tn(t,t.h,e,void 0),e.K=2,e.v=Qn(we(n)),n=!1,m.navigator&&m.navigator.sendBeacon&&(n=m.navigator.sendBeacon(e.v.toString(),"")),!n&&m.Image&&(new Image().src=e.v,n=!0),n||(e.g=ol(e.l,null),e.g.ea(e.v)),e.F=Date.now(),nn(e)}sl(t)}g.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ni(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Qa(t){ni(t),t.u&&(m.clearTimeout(t.u),t.u=null),On(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&m.clearTimeout(t.m),t.m=null)}function bi(t,e){t.l.push(new Ld(t.Za++,e)),t.G==3&&ii(t)}function ii(t){Ha(t.i)||t.m||(t.m=!0,js(t.Ha,t),t.C=0)}function zd(t,e){return Wa(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=en(U(t.Ha,t,e),il(t,t.C)),t.C++,!0)}g.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new tn(this,this.h,t,void 0),n=this.s;if(this.P&&(n?(n=pa(n),ga(n,this.P)):n=this.P),this.o===null&&(e.H=n),this.ja)e:{for(var i=0,s=0;s<this.l.length;s++){t:{var r=this.l[s];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(i+=r,4096<i){i=s;break e}if(i===4096||s===this.l.length-1){i=s+1;break e}}i=1e3}else i=1e3;i=Za(this,e,i),s=we(this.F),k(s,"RID",t),k(s,"CVER",22),this.D&&k(s,"X-HTTP-Session-Id",this.D),rn(this,s),this.o&&n&&Js(s,this.o,n),Ks(this.i,e),this.Ra&&k(s,"TYPE","init"),this.ja?(k(s,"$req",i),k(s,"SID","null"),e.$=!0,rs(e,s,null)):rs(e,s,i),this.G=2}}else this.G==3&&(t?Zr(this,t):this.l.length==0||Ha(this.i)||Zr(this))};function Zr(t,e){var n;e?n=e.m:n=t.V++;var i=we(t.F);k(i,"SID",t.J),k(i,"RID",n),k(i,"AID",t.U),rn(t,i),t.o&&t.s&&Js(i,t.o,t.s),n=new tn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Za(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ks(t.i,n),rs(n,i,e)}function rn(t,e){t.j&&zs({},function(n,i){k(e,i,n)})}function Za(t,e,n){n=Math.min(t.l.length,n);var i=t.j?U(t.j.Oa,t.j,t):null;e:for(var s=t.l,r=-1;;){var o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);for(var a=!0,c=0;c<n;c++){var l=s[c].h,h=s[c].g;if(l-=r,0>l)r=Math.max(0,s[c].h-100),a=!1;else try{Ud(h,o,"req"+l+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}return t=t.l.splice(0,n),e.D=t,i}function el(t){t.g||t.u||(t.Y=1,js(t.Ga,t),t.A=0)}function Zs(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=en(U(t.Ga,t),il(t,t.A)),t.A++,!0)}g.Ga=function(){if(this.u=null,tl(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=en(U(this.bb,this),t)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,K(10),ni(this),tl(this))};function er(t){t.B!=null&&(m.clearTimeout(t.B),t.B=null)}function tl(t){t.g=new tn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=we(t.oa);k(e,"RID","rpc"),k(e,"SID",t.J),k(e,"CI",t.N?"0":"1"),k(e,"AID",t.U),rn(t,e),k(e,"TYPE","xmlhttp"),t.o&&t.s&&Js(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qn(we(e)),n.s=null,n.U=!0,Pa(n,t)}g.ab=function(){this.v!=null&&(this.v=null,ni(this),Zs(this),K(19))};function On(t){t.v!=null&&(m.clearTimeout(t.v),t.v=null)}function nl(t,e){var n=null;if(t.g==e){On(t),er(t),t.g=null;var i=2}else if(as(t.i,e))n=e.D,Va(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Hs(),j(i,new Oa(i,n)),ii(t)}else el(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&zd(t,e)||i==2&&Zs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ue(t,5);break;case 4:Ue(t,10);break;case 3:Ue(t,6);break;default:Ue(t,2)}}}function il(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ue(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=U(t.jb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||bn(n,"https"),Qn(n)),jd(n.toString(),i)}else K(2);t.G=0,t.j&&t.j.va(e),sl(t),Qa(t)}g.jb=function(t){t?(this.h.info("Successfully pinged google.com"),K(2)):(this.h.info("Failed to ping google.com"),K(1))};function sl(t){t.G=0,t.I=-1,t.j&&((qa(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Os(t.l),t.l.length=0),t.j.ua())}function rl(t,e,n){var i=Rd(n);if(i.i!="")e&&Nn(i,e+"."+i.i),kn(i,i.m);else{var s=m.location;i=bd(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Ds(t.aa,function(r,o){k(i,o,r)}),e=t.D,n=t.sa,e&&n&&k(i,e,n),k(i,"VER",t.ma),rn(t,i),i}function ol(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new D(new Zn({ib:!0})):new D(t.qa),e.L=t.H,e}function al(){}g=al.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function ne(t,e){M.call(this),this.g=new Ja(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!An(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!An(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vt(this)}$(ne,M);ne.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),js(U(t.hb,t,e))),K(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=rl(t,null,t.W),ii(t)};ne.prototype.close=function(){Qs(this.g)};ne.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,bi(this.g,e)}else this.v?(e={},e.__data__=Us(t),bi(this.g,e)):bi(this.g,t)};ne.prototype.M=function(){this.g.j=null,delete this.j,Qs(this.g),delete this.g,ne.Z.M.call(this)};function ll(t){Vs.call(this);var e=t.__sm__;if(e){e:{for(var n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$(ll,Vs);function cl(){qs.call(this),this.status=1}$(cl,qs);function vt(t){this.g=t}$(vt,al);vt.prototype.xa=function(){j(this.g,"a")};vt.prototype.wa=function(t){j(this.g,new ll(t))};vt.prototype.va=function(t){j(this.g,new cl)};vt.prototype.ua=function(){j(this.g,"b")};ne.prototype.send=ne.prototype.u;ne.prototype.open=ne.prototype.m;ne.prototype.close=ne.prototype.close;Yn.OPEN="a";Yn.CLOSE="b";Yn.ERROR="c";Yn.MESSAGE="d";M.prototype.listen=M.prototype.N;D.prototype.listenOnce=D.prototype.O;D.prototype.getLastError=D.prototype.La;D.prototype.getLastErrorCode=D.prototype.Da;D.prototype.getStatus=D.prototype.ba;D.prototype.getResponseJson=D.prototype.Qa;D.prototype.getResponseText=D.prototype.ga;D.prototype.send=D.prototype.ea;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si="9.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Yt("@firebase/firestore");function Ae(t,...e){if(Dn.logLevel<=C.DEBUG){const n=e.map(hl);Dn.debug(`Firestore (${si}): ${t}`,...n)}}function tr(t,...e){if(Dn.logLevel<=C.ERROR){const n=e.map(hl);Dn.error(`Firestore (${si}): ${t}`,...n)}}function hl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ul(t="Unexpected state"){const e=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function ls(t,e){t||ul()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class Kd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Yd{constructor(e){this.t=e,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ot,e.enqueueRetryable(()=>s(this.currentUser))};const o=a=>{e.enqueueRetryable(async()=>{Ae("FirebaseCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),await r.promise,await s(this.currentUser)})};this.t.onInit(a=>o(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?o(a):(Ae("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ot)}},0),e.enqueueRetryable(async()=>{this.i===0&&(await r.promise,await s(this.currentUser))})}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Ae("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ls(typeof i.accessToken=="string"),new Gd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ls(e===null||typeof e=="string"),new Y(e)}}class Xd{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Y.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class Jd{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Xd(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */function Qd(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}class Zd{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Qd(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo,v;(v=eo||(eo={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS";function dl(t){return t.name==="IndexedDbTransactionError"}function Ni(){return typeof document<"u"?document:null}class ef{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-i);s>0&&Ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new nr(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(fe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tf(t,e){if(tr("AsyncQueue",`${e}: ${t}`),dl(t))return new pe(fe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Y.UNAUTHENTICATED,this.clientId=Zd.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{Ae("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new pe(fe.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=tf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}class sf{constructor(e,n,i,s,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Pn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const to=new Map;function rf(t,e,n,i){if(e===!0&&i===!0)throw new pe(fe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class no{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(fe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new pe(fe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class of{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new no({}),this._settingsFrozen=!1,e instanceof Pn?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new pe(fe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pn(i.options.projectId)}(e))}get app(){if(!this._app)throw new pe(fe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new pe(fe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new no(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new Kd;switch(n.type){case"gapi":const i=n.client;return ls(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Jd(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new pe(fe.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=to.get(e);n&&(Ae("ComponentProvider","Removing Datastore"),to.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class af{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ef(this,"async_queue_retry"),this.Ea=()=>{const n=Ni();n&&Ae("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=Ni();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=Ni();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const n=new ot;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!dl(e))throw e;Ae("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(i=>{throw this.ma=i,this.ga=!1,tr("INTERNAL UNHANDLED ERROR: ",function(s){let r=s.message||"";return s.stack&&(r=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),r}(i)),i}).then(i=>(this.ga=!1,i))));return this.fa=n,n}enqueueAfterDelay(e,n,i){this.Ta(),this.pa.indexOf(e)>-1&&(n=0);const s=nr.createAndSchedule(this,e,n,i,r=>this.Ra(r));return this._a.push(s),s}Ta(){this.ma&&ul()}verifyOperationInProgress(){}async Pa(){let e;do e=this.fa,await e;while(e!==this.fa)}ba(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.Pa().then(()=>{this._a.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pa()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}class lf extends of{constructor(e,n){super(e,n),this.type="firestore",this._queue=new af,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||cf(this),this._firestoreClient.terminate()}}function cf(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new sf(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new nf(t._credentials,t._queue,i)}var hf;(function(t){si=t})(Xt),he(new te("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=new lf(n,new Yd(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),i._setSettings(e),i},"PUBLIC")),Ie("@firebase/firestore","3.0.0",hf);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Be||(Be={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="firebasestorage.googleapis.com",uf="storageBucket",df=2*60*1e3,ff=10*60*1e3;class ue extends ft{constructor(e,n){super(ki(e),`Firebase Storage: ${n} (${ki(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ue.prototype)}_codeEquals(e){return ki(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ki(t){return"storage/"+t}function pf(){const t="An unknown error occurred, please check the error payload for server response.";return new ue("unknown",t)}function gf(){return new ue("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _f(){return new ue("canceled","User canceled the upload/download.")}function mf(t){return new ue("invalid-url","Invalid URL '"+t+"'.")}function yf(t){return new ue("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function io(t){return new ue("invalid-argument",t)}function pl(){return new ue("app-deleted","The Firebase app was deleted.")}function vf(t){return new ue("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function mn(t){throw new ue("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Be.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Be.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Be.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s){if(this.sent_)throw mn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponseText(){if(!this.sent_)throw mn("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function If(){return new Ef}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{createConnection(){return If()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=oe.makeFromUrl(e,n)}catch{return new oe(e,"")}if(i.path==="")return i;throw yf(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(B){B.path_=decodeURIComponent(B.path)}const h="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${u}/${h}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},A=n===fl?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",Z=new RegExp(`^https?://${A}/${s}/${O}`,"i"),de=[{regex:a,indices:c,postModify:r},{regex:p,indices:_,postModify:l},{regex:Z,indices:{bucket:1,path:2},postModify:l}];for(let B=0;B<de.length;B++){const Oe=de[B],De=Oe.regex.exec(e);if(De){const dn=De[Oe.indices.bucket];let Ct=De[Oe.indices.path];Ct||(Ct=""),i=new oe(dn,Ct),Oe.postModify(i);break}}if(i==null)throw mf(e);return i}}class Tf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,e,n){let i=1,s=null,r=!1,o=0;function a(){return o===2}let c=!1;function l(..._){c||(c=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(u,a())},_)}function u(_,...A){if(c)return;if(_){l.call(null,_,...A);return}if(a()||r){l.call(null,_,...A);return}i<64&&(i*=2);let Z;o===1?(o=2,Z=0):Z=(i+Math.random())*1e3,h(Z)}let d=!1;function p(_){d||(d=!0,!c&&(s!==null?(_||(o=2),clearTimeout(s),h(0)):_||(o=1)))}return h(0),setTimeout(()=>{r=!0,p(!0)},n),p}function Sf(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){return t!==void 0}function so(t,e,n,i){if(i<e)throw io(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw io(`Invalid value for '${t}'. Expected ${n} or less.`)}function Rf(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,i,s,r,o,a,c,l,h,u){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=c,this.progressCallback_=h,this.timeout_=l,this.pool_=u,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=this;function n(s,r){if(r){s(!1,new yn(!1,null,!0));return}const o=e.pool_.createConnection();e.pendingConnection_=o;function a(c){const l=c.loaded,h=c.lengthComputable?c.total:-1;e.progressCallback_!==null&&e.progressCallback_(l,h)}e.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(e.url_,e.method_,e.body_,e.headers_).then(()=>{e.progressCallback_!==null&&o.removeUploadProgressListener(a),e.pendingConnection_=null;const c=o.getErrorCode()===Be.NO_ERROR,l=o.getStatus();if(!c||e.isRetryStatusCode_(l)){const u=o.getErrorCode()===Be.ABORT;s(!1,new yn(!1,null,u));return}const h=e.successCodes_.indexOf(l)!==-1;s(!0,new yn(h,o))})}function i(s,r){const o=e.resolve_,a=e.reject_,c=r.connection;if(r.wasSuccessCode)try{const l=e.callback_(c,c.getResponseText());Af(l)?o(l):o()}catch(l){a(l)}else if(c!==null){const l=pf();l.serverResponse=c.getResponseText(),e.errorCallback_?a(e.errorCallback_(c,l)):a(l)}else if(r.canceled){const l=e.appDelete_?pl():_f();a(l)}else{const l=gf();a(l)}}this.canceled_?i(!1,new yn(!1,null,!0)):this.backoffId_=Cf(n,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||r}}class yn{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Nf(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function kf(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Of(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Df(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Pf(t,e,n,i,s,r){const o=Rf(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Of(c,e),Nf(c,n),kf(c,r),Df(c,i),new bf(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Lf(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class xn{constructor(e,n){this._service=e,n instanceof oe?this._location=n:this._location=oe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xn(e,n)}get root(){const e=new oe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lf(this._location.path)}get storage(){return this._service}get parent(){const e=xf(this._location.path);if(e===null)return null;const n=new oe(this._location.bucket,e);return new xn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vf(e)}}function ro(t,e){const n=e==null?void 0:e[uf];return n==null?null:oe.makeFromBucketSpec(n,t)}class Mf{constructor(e,n,i,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._pool=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=fl,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=df,this._maxUploadRetryTime=ff,this._requests=new Set,r!=null?this._bucket=oe.makeFromBucketSpec(r,this._host):this._bucket=ro(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=oe.makeFromBucketSpec(this._url,e):this._bucket=ro(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){so("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){so("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xn(this,e)}_makeRequest(e,n,i){if(this._deleted)return new Tf(pl());{const s=Pf(e,this._appId,n,i,this._pool,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i)}}const Ff="@firebase/storage",Uf="0.8.0";/**
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
 */const jf="storage";function $f(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Mf(n,i,s,new wf,e,Xt)}function Bf(){he(new te(jf,$f,"PUBLIC").setMultipleInstances(!0)),Ie(Ff,Uf)}Bf();function Hf(t){return Array.prototype.slice.call(t)}function gl(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function ir(t,e,n){var i,s=new Promise(function(r,o){i=t[e].apply(t,n),gl(i).then(r,o)});return s.request=i,s}function Wf(t,e,n){var i=ir(t,e,n);return i.then(function(s){if(s)return new Gt(s,i.request)})}function Et(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(s){this[e][i]=s}})})}function sr(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return ir(this[e],s,arguments)})})}function ri(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return this[e][s].apply(this[e],arguments)})})}function _l(t,e,n,i){i.forEach(function(s){s in n.prototype&&(t.prototype[s]=function(){return Wf(this[e],s,arguments)})})}function Je(t){this._index=t}Et(Je,"_index",["name","keyPath","multiEntry","unique"]);sr(Je,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);_l(Je,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Gt(t,e){this._cursor=t,this._request=e}Et(Gt,"_cursor",["direction","key","primaryKey","value"]);sr(Gt,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Gt.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),gl(e._request).then(function(i){if(i)return new Gt(i,e._request)})})})});function me(t){this._store=t}me.prototype.createIndex=function(){return new Je(this._store.createIndex.apply(this._store,arguments))};me.prototype.index=function(){return new Je(this._store.index.apply(this._store,arguments))};Et(me,"_store",["name","keyPath","indexNames","autoIncrement"]);sr(me,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);_l(me,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);ri(me,"_store",IDBObjectStore,["deleteIndex"]);function on(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}on.prototype.objectStore=function(){return new me(this._tx.objectStore.apply(this._tx,arguments))};Et(on,"_tx",["objectStoreNames","mode"]);ri(on,"_tx",IDBTransaction,["abort"]);function oi(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new on(n)}oi.prototype.createObjectStore=function(){return new me(this._db.createObjectStore.apply(this._db,arguments))};Et(oi,"_db",["name","version","objectStoreNames"]);ri(oi,"_db",IDBDatabase,["deleteObjectStore","close"]);function ai(t){this._db=t}ai.prototype.transaction=function(){return new on(this._db.transaction.apply(this._db,arguments))};Et(ai,"_db",["name","version","objectStoreNames"]);ri(ai,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[me,Je].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Hf(arguments),i=n[n.length-1],s=this._store||this._index,r=s[t].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})})});[Je,me].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,s=[];return new Promise(function(r){i.iterateCursor(e,function(o){if(!o){r(s);return}if(s.push(o.value),n!==void 0&&s.length==n){r(s);return}o.continue()})})})});function Vf(t,e,n){var i=ir(indexedDB,"open",[t,e]),s=i.request;return s&&(s.onupgradeneeded=function(r){n&&n(new oi(s.result,r.oldVersion,s.transaction))}),i.then(function(r){return new ai(r)})}const qf="@firebase/installations",ml="0.5.0";/**
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
 */const yl=1e4,vl=`w:${ml}`,El="FIS_v2",zf="https://firebaseinstallations.googleapis.com/v1",Gf=60*60*1e3,Kf="installations",Yf="Installations";/**
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
 */const Xf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qe=new pt(Kf,Yf,Xf);function Il(t){return t instanceof ft&&t.code.includes("request-failed")}/**
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
 */function wl({projectId:t}){return`${zf}/projects/${t}/installations`}function Tl(t){return{token:t.token,requestStatus:2,expiresIn:Qf(t.expiresIn),creationTime:Date.now()}}async function Cl(t,e){const i=(await e.json()).error;return qe.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Sl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Jf(t,{refreshToken:e}){const n=Sl(t);return n.append("Authorization",Zf(e)),n}async function Al(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Qf(t){return Number(t.replace("s","000"))}function Zf(t){return`${El} ${t}`}/**
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
 */async function ep(t,{fid:e}){const n=wl(t),i=Sl(t),s={fid:e,authVersion:El,appId:t.appId,sdkVersion:vl},r={method:"POST",headers:i,body:JSON.stringify(s)},o=await Al(()=>fetch(n,r));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:Tl(a.authToken)}}else throw await Cl("Create Installation",o)}/**
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
 */function Rl(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function tp(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const np=/^[cdef][\w-]{21}$/,cs="";function ip(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=sp(t);return np.test(n)?n:cs}catch{return cs}}function sp(t){return tp(t).substr(0,22)}/**
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
 */function li(t){return`${t.appName}!${t.appId}`}/**
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
 */const bl=new Map;function Nl(t,e){const n=li(t);kl(n,e),rp(n,e)}function kl(t,e){const n=bl.get(t);if(n)for(const i of n)i(e)}function rp(t,e){const n=op();n&&n.postMessage({key:t,fid:e}),ap()}let je=null;function op(){return!je&&"BroadcastChannel"in self&&(je=new BroadcastChannel("[Firebase] FID Change"),je.onmessage=t=>{kl(t.data.key,t.data.fid)}),je}function ap(){bl.size===0&&je&&(je.close(),je=null)}/**
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
 */const lp="firebase-installations-database",cp=1,ze="firebase-installations-store";let Oi=null;function rr(){return Oi||(Oi=Vf(lp,cp,t=>{switch(t.oldVersion){case 0:t.createObjectStore(ze)}})),Oi}async function Ln(t,e){const n=li(t),s=(await rr()).transaction(ze,"readwrite"),r=s.objectStore(ze),o=await r.get(n);return await r.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Nl(t,e.fid),e}async function Ol(t){const e=li(t),i=(await rr()).transaction(ze,"readwrite");await i.objectStore(ze).delete(e),await i.complete}async function ci(t,e){const n=li(t),s=(await rr()).transaction(ze,"readwrite"),r=s.objectStore(ze),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Nl(t,a.fid),a}/**
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
 */async function or(t){let e;const n=await ci(t,i=>{const s=hp(i),r=up(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===cs?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function hp(t){const e=t||{fid:ip(),registrationStatus:0};return Dl(e)}function up(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(qe.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=dp(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fp(t)}:{installationEntry:e}}async function dp(t,e){try{const n=await ep(t,e);return Ln(t,n)}catch(n){throw Il(n)&&n.customData.serverCode===409?await Ol(t):await Ln(t,{fid:e.fid,registrationStatus:0}),n}}async function fp(t){let e=await oo(t);for(;e.registrationStatus===1;)await Rl(100),e=await oo(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await or(t);return i||n}return e}function oo(t){return ci(t,e=>{if(!e)throw qe.create("installation-not-found");return Dl(e)})}function Dl(t){return pp(t)?{fid:t.fid,registrationStatus:0}:t}function pp(t){return t.registrationStatus===1&&t.registrationTime+yl<Date.now()}/**
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
 */async function gp({appConfig:t,platformLoggerProvider:e},n){const i=_p(t,n),s=Jf(t,n),r=e.getImmediate({optional:!0});r&&s.append("x-firebase-client",r.getPlatformInfoString());const a={method:"POST",headers:s,body:JSON.stringify({installation:{sdkVersion:vl}})},c=await Al(()=>fetch(i,a));if(c.ok){const l=await c.json();return Tl(l)}else throw await Cl("Generate Auth Token",c)}function _p(t,{fid:e}){return`${wl(t)}/${e}/authTokens:generate`}/**
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
 */async function ar(t,e=!1){let n;const i=await ci(t.appConfig,r=>{if(!Pl(r))throw qe.create("not-registered");const o=r.authToken;if(!e&&vp(o))return r;if(o.requestStatus===1)return n=mp(t,e),r;{if(!navigator.onLine)throw qe.create("app-offline");const a=Ip(r);return n=yp(t,a),a}});return n?await n:i.authToken}async function mp(t,e){let n=await ao(t.appConfig);for(;n.authToken.requestStatus===1;)await Rl(100),n=await ao(t.appConfig);const i=n.authToken;return i.requestStatus===0?ar(t,e):i}function ao(t){return ci(t,e=>{if(!Pl(e))throw qe.create("not-registered");const n=e.authToken;return wp(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yp(t,e){try{const n=await gp(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ln(t.appConfig,i),n}catch(n){if(Il(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ol(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ln(t.appConfig,i)}throw n}}function Pl(t){return t!==void 0&&t.registrationStatus===2}function vp(t){return t.requestStatus===2&&!Ep(t)}function Ep(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Gf}function Ip(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wp(t){return t.requestStatus===1&&t.requestTime+yl<Date.now()}/**
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
 */async function Tp(t){const e=t,{installationEntry:n,registrationPromise:i}=await or(e.appConfig);return i?i.catch(console.error):ar(e).catch(console.error),n.fid}/**
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
 */async function Cp(t,e=!1){const n=t;return await Sp(n.appConfig),(await ar(n,e)).token}async function Sp(t){const{registrationPromise:e}=await or(t);e&&await e}/**
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
 */function Ap(t){if(!t||!t.options)throw Di("App Configuration");if(!t.name)throw Di("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Di(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Di(t){return qe.create("missing-app-config-values",{valueName:t})}/**
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
 */const xl="installations",Rp="installations-internal",bp=t=>{const e=t.getProvider("app").getImmediate(),n=Ap(e),i=ta(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()}},Np=t=>{const e=t.getProvider("app").getImmediate(),n=ta(e,xl).getImmediate();return{getId:()=>Tp(n),getToken:s=>Cp(n,s)}};function kp(){he(new te(xl,bp,"PUBLIC")),he(new te(Rp,Np,"PRIVATE"))}kp();Ie(qf,ml);/**
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
 */const lo="analytics",Op="firebase_id",Dp="origin",Pp=60*1e3,xp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ll="https://www.googletagmanager.com/gtag/js";/**
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
 */const J=new Yt("@firebase/analytics");/**
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
 */function Ml(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Lp(t,e){const n=document.createElement("script");n.src=`${Ll}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Mp(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Fp(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await Ml(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){J.error(a)}t("config",s,r)}async function Up(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Ml(n);for(const c of o){const l=a.find(u=>u.measurementId===c),h=l&&e[l.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){J.error(r)}}function jp(t,e,n,i){async function s(r,o,a){try{r==="event"?await Up(t,e,n,o,a):r==="config"?await Fp(t,e,n,i,o,a):t("set",o)}catch(c){J.error(c)}}return s}function $p(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=jp(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Bp(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ll))return e;return null}/**
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
 */const Hp={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},le=new pt("analytics","Analytics",Hp);/**
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
 */const Wp=30,Vp=1e3;class qp{constructor(e={},n=Vp){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fl=new qp;function zp(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Gp(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:zp(i)},r=xp.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Kp(t,e=Fl,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw le.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw le.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Jp;return setTimeout(async()=>{a.abort()},n!==void 0?n:Pp),Ul({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Ul(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Fl){const{appId:r,measurementId:o}=t;try{await Yp(i,e)}catch(a){if(o)return J.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Gp(t);return s.deleteThrottleMetadata(r),a}catch(a){if(!Xp(a)){if(s.deleteThrottleMetadata(r),o)return J.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:r,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?Pr(n,s.intervalMillis,Wp):Pr(n,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(r,l),J.debug(`Calling attemptFetch again in ${c} millis`),Ul(t,l,i,s)}}function Yp(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xp(t){if(!(t instanceof ft)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Jp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function Qp(){if(sh())try{await rh()}catch(t){return J.warn(le.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return J.warn(le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zp(t,e,n,i,s,r,o){var a;const c=Kp(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&J.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>J.error(p)),e.push(c);const l=Qp().then(p=>{if(p)return i.getId()}),[h,u]=await Promise.all([c,l]);Bp()||Lp(r,h.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Dp]="firebase",d.update=!0,u!=null&&(d[Op]=u),s("config",h.measurementId,d),h.measurementId}/**
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
 */class eg{constructor(e){this.app=e}_delete(){return delete Lt[this.app.options.appId],Promise.resolve()}}let Lt={},co=[];const ho={};let Pi="dataLayer",tg="gtag",uo,jl,fo=!1;function ng(){const t=[];if(Xo()&&t.push("This is a browser extension environment."),oh()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=le.create("invalid-analytics-context",{errorInfo:e});J.warn(n.message)}}function ig(t,e,n){ng();const i=t.options.appId;if(!i)throw le.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)J.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw le.create("no-api-key");if(Lt[i]!=null)throw le.create("already-exists",{id:i});if(!fo){Mp(Pi);const{wrappedGtag:r,gtagCore:o}=$p(Lt,co,ho,Pi,tg);jl=r,uo=o,fo=!0}return Lt[i]=Zp(t,co,ho,e,uo,Pi,n),new eg(t)}/**
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
 */async function sg(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}function rg(t,e,n,i){t=gt(t),sg(jl,Lt[t.app.options.appId],e,n,i).catch(s=>J.error(s))}const og="@firebase/analytics",ag="0.7.0";function lg(){he(new te(lo,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ig(i,s,n)},"PUBLIC")),he(new te("analytics-internal",t,"PRIVATE")),Ie(og,ag);function t(e){try{const n=e.getProvider(lo).getImmediate();return{logEvent:(i,s,r)=>rg(n,i,s,r)}}catch(n){throw le.create("interop-component-reg-failed",{reason:n})}}}lg();const cg="@firebase/database",hg="0.12.0";/**
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
 */let $l="";function ug(t){$l=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),F(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:jt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Te(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dg(e)}}catch{}return new fg},$e=Bl("localStorage"),hs=Bl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Yt("@firebase/database"),pg=function(){let t=1;return function(){return t++}}(),Hl=function(t){const e=mh(t),n=new dh;n.update(e);const i=n.digest();return Cs.encodeByteArray(i)},an=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=an.apply(null,i):typeof i=="object"?e+=F(i):e+=i,e+=" "}return e};let He=null,po=!0;const gg=function(t,e){f(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(at.logLevel=C.VERBOSE,He=at.log.bind(at),e&&hs.set("logging_enabled",!0)):typeof t=="function"?He=t:(He=null,hs.remove("logging_enabled"))},H=function(...t){if(po===!0&&(po=!1,He===null&&hs.get("logging_enabled")===!0&&gg(!0)),He){const e=an.apply(null,t);He(e)}},ln=function(t){return function(...e){H(t,...e)}},us=function(...t){const e="FIREBASE INTERNAL ERROR: "+an(...t);at.error(e)},Ge=function(...t){const e=`FIREBASE FATAL ERROR: ${an(...t)}`;throw at.error(e),new Error(e)},Q=function(...t){const e="FIREBASE WARNING: "+an(...t);at.warn(e)},_g=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ht="[MIN_NAME]",Ke="[MAX_NAME]",It=function(t,e){if(t===e)return 0;if(t===ht||e===Ke)return-1;if(e===ht||t===Ke)return 1;{const n=go(t),i=go(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},yg=function(t,e){return t===e?0:t<e?-1:1},At=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+F(e))},lr=function(t){if(typeof t!="object"||t===null)return F(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=F(e[i]),n+=":",n+=lr(t[e[i]]);return n+="}",n},Vl=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ql=function(t){f(!Wl(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},vg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Eg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Ig=new RegExp("^-?(0*)\\d{1,10}$"),wg=-2147483648,Tg=2147483647,go=function(t){if(Ig.test(t)){const e=Number(t);if(e>=wg&&e<=Tg)return e}return null},cn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Q("Exception was thrown by user callback.",n),e},Math.floor(0))}},Cg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mt=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Sg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Q(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(H("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Q(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="5",zl="v",Gl="s",Kl="r",Yl="f",Xl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jl="ls",Rg="p",fs="ac",Ql="websocket",Zl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$e.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$e.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ng(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ec(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===Ql)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Zl)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ng(t)&&(n.ns=t.namespace);const s=[];return ie(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.counters_={}}incrementCounter(e,n=1){Te(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nh(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={},Li={};function hr(t){const e=t.toString();return xi[e]||(xi[e]=new kg),xi[e]}function Og(t,e){const n=t.toString();return Li[n]||(Li[n]=e()),Li[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&cn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="start",Pg="close",xg="pLPCommand",Lg="pRTLPCB",tc="id",nc="pw",ic="ser",Mg="cb",Fg="seg",Ug="ts",jg="d",$g="dframe",sc=1870,rc=30,Bg=sc-rc,Hg=25e3,Wg=3e4;class nt{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ln(e),this.stats_=hr(n),this.urlFn=c=>(this.appCheckToken&&(c[fs]=this.appCheckToken),ec(n,Zl,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Dg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wg)),mg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ur((...r)=>{const[o,a,c,l,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_o)this.id=a,this.password=c;else if(o===Pg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[_o]="t",i[ic]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Mg]=this.scriptTagHolder.uniqueCallbackIdentifier),i[zl]=cr,this.transportSessionId&&(i[Gl]=this.transportSessionId),this.lastSessionId&&(i[Jl]=this.lastSessionId),this.applicationId&&(i[Rg]=this.applicationId),this.appCheckToken&&(i[fs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xl.test(location.hostname)&&(i[Kl]=Yl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nt.forceAllow_=!0}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){return nt.forceAllow_?!0:!nt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vg()&&!Eg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=F(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=th(n),s=Vl(i,Bg);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[$g]="t",i[tc]=e,i[nc]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=F(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ur{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pg(),window[xg+this.uniqueCallbackIdentifier]=e,window[Lg+this.uniqueCallbackIdentifier]=n,this.myIFrame=ur.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){H("frame writing exception"),a.stack&&H(a.stack),H(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||H("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tc]=this.myID,e[nc]=this.myPW,e[ic]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rc+i.length<=sc;){const o=this.pendingSegs.shift();i=i+"&"+Fg+s+"="+o.seg+"&"+Ug+s+"="+o.ts+"&"+jg+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Hg)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{H("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=16384,qg=45e3;let Mn=null;typeof MozWebSocket<"u"?Mn=MozWebSocket:typeof WebSocket<"u"&&(Mn=WebSocket);class re{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ln(this.connId),this.stats_=hr(n),this.connURL=re.connectionURL_(n,o,a,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s){const r={};return r[zl]=cr,typeof location<"u"&&location.hostname&&Xl.test(location.hostname)&&(r[Kl]=Yl),n&&(r[Gl]=n),i&&(r[Jl]=i),s&&(r[fs]=s),ec(e,Ql,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$e.set("previous_websocket_failure",!0);try{if(!Qo()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Mn(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Mn!==null&&!re.forceDisallow_}static previouslyFailed(){return $e.isInMemoryStorage||$e.get("previous_websocket_failure")===!0}markConnectionHealthy(){$e.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=jt(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=F(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Vl(n,Vg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nt,re]}initTransports_(e){const n=re&&re.isAvailable();let i=n&&!re.previouslyFailed();if(e.webSocketOnly&&(n||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[re];else{const s=this.transports_=[];for(const r of dr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=6e4,Gg=5e3,Kg=10*1024,Yg=100*1024,Mi="t",mo="d",Xg="s",yo="r",Jg="e",vo="o",Eo="a",Io="n",wo="p",Qg="h";class Zg{constructor(e,n,i,s,r,o,a,c,l,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ln("c:"+this.id+":"),this.transportManager_=new dr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Mt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Kg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mi in e){const n=e[Mi];n===Eo?this.upgradeIfSecondaryHealthy_():n===yo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=At("t",e),i=At("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Eo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Io,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=At("t",e),i=At("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=At(Mi,e);if(mo in e){const i=e[mo];if(n===Qg)this.onHandshake_(i);else if(n===Io){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Xg?this.onConnectionShutdown_(i):n===yo?this.onReset_(i):n===Jg?us("Server Error: "+i):n===vo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):us("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cr!==i&&Q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Mt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($e.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ac{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!As()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fn}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=32,Co=768;class N{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function S(){return new N("")}function E(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function be(t){return t.pieces_.length-t.pieceNum_}function b(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new N(t.pieces_,e)}function lc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function e_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new N(e,0)}function L(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof N)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new N(n,0)}function y(t){return t.pieceNum_>=t.pieces_.length}function ee(t,e){const n=E(t),i=E(e);if(n===null)return e;if(n===i)return ee(b(t),b(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uc(t,e){if(be(t)!==be(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ae(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(be(t)>be(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class t_{constructor(e,n){this.errorPrefix_=n,this.parts_=cc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Vn(this.parts_[i]);dc(this)}}function n_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vn(e),dc(t)}function i_(t){const e=t.parts_.pop();t.byteLength_-=Vn(e),t.parts_.length>0&&(t.byteLength_-=1)}function dc(t){if(t.byteLength_>Co)throw new Error(t.errorPrefix_+"has a key path longer than "+Co+" bytes ("+t.byteLength_+").");if(t.parts_.length>To)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+To+") or object contains a cycle "+Le(t))}function Le(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ac{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new fr}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e3,s_=60*5*1e3,r_=3*1e3,So=30*1e3,o_=1.3,a_=3e4,l_="server_kill",Ao=3;class Ee extends oc{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ee.nextPersistentConnectionId_++,this.log_=ln("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rt,this.maxReconnectDelay_=s_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Qo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(F(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Ss,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},r_),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Ee.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Te(e,"w")){const i=ct(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=So)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+F(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):us("Unrecognized action received from server: "+F(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a_&&(this.reconnectDelay_=Rt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*o_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ee.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?H("getToken() completed but was canceled"):(H("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Zg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{Q(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(l_)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Q(u),c())}}}interrupt(e){H("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){H("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Or(this.interruptReasons_)&&(this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>lr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new N(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){H("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ao&&(this.reconnectDelay_=So,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){H("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ao&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$l.replace(/\./g,"-")]=1,As()?e["framework.cordova"]=1:Jo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fn.getInstance().currentlyOnline();return Or(this.interruptReasons_)&&e}}Ee.nextPersistentConnectionId_=0;Ee.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new I(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new I(ht,e),s=new I(ht,n);return this.compare(i,s)!==0}minPost(){return I.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class fc extends hi{static get __EMPTY_NODE(){return vn}static set __EMPTY_NODE(e){vn=e}compare(e,n){return It(e.name,n.name)}isDefinedOn(e){throw dt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return I.MIN}maxPost(){return new I(Ke,vn)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,vn)}toString(){return".key"}}const lt=new fc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class x{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??x.RED,this.left=s??X.EMPTY_NODE,this.right=r??X.EMPTY_NODE}copy(e,n,i,s,r){return new x(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return X.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return X.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}x.RED=!0;x.BLACK=!1;class c_{copy(e,n,i,s,r){return this}insert(e,n,i){return new x(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class X{constructor(e,n=X.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new X(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,x.BLACK,null,null))}remove(e){return new X(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,x.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new En(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new En(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new En(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new En(this.root_,null,this.comparator_,!0,e)}}X.EMPTY_NODE=new c_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e){return It(t.name,e.name)}function pr(t,e){return It(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;function u_(t){ps=t}const pc=function(t){return typeof t=="number"?"number:"+ql(t):"string:"+t},gc=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Te(e,".sv"),"Priority must be a string or number.")}else f(t===ps||t.isEmpty(),"priority of unexpected type.");f(t===ps||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class P{constructor(e,n=P.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gc(this.priorityNode_)}static set __childrenNodeConstructor(e){Ro=e}static get __childrenNodeConstructor(){return Ro}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new P(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:P.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:E(e)===".priority"?this.priorityNode_:P.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:P.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=E(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||be(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,P.__childrenNodeConstructor.EMPTY_NODE.updateChild(b(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ql(this.value_):e+=this.value_,this.lazyHash_=Hl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===P.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof P.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=P.VALUE_TYPE_ORDER.indexOf(n),r=P.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}P.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c,mc;function d_(t){_c=t}function f_(t){mc=t}class p_ extends hi{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?It(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return I.MIN}maxPost(){return new I(Ke,new P("[PRIORITY-POST]",mc))}makePost(e,n){const i=_c(e);return new I(n,new P("[PRIORITY-POST]",i))}toString(){return".priority"}}const V=new p_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=Math.log(2);class __{constructor(e){const n=r=>parseInt(Math.log(r)/g_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Un=function(t,e,n,i){t.sort(e);const s=function(c,l){const h=l-c;let u,d;if(h===0)return null;if(h===1)return u=t[c],d=n?n(u):u,new x(d,u.node,x.BLACK,null,null);{const p=parseInt(h/2,10)+c,_=s(c,p),A=s(p+1,l);return u=t[p],d=n?n(u):u,new x(d,u.node,x.BLACK,_,A)}},r=function(c){let l=null,h=null,u=t.length;const d=function(_,A){const O=u-_,Z=u;u-=_;const Ce=s(O+1,Z),de=t[O],B=n?n(de):de;p(new x(B,de.node,A,null,Ce))},p=function(_){l?(l.left=_,l=_):(h=_,l=_)};for(let _=0;_<c.count;++_){const A=c.nextBitIsOne(),O=Math.pow(2,c.count-(_+1));A?d(O,x.BLACK):(d(O,x.BLACK),d(O,x.RED))}return h},o=new __(t.length),a=r(o);return new X(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;const et={};class ve{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(et&&V,"ChildrenNode.ts has not been loaded"),Fi=Fi||new ve({".priority":et},{".priority":V}),Fi}get(e){const n=ct(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof X?n:null}hasIndex(e){return Te(this.indexSet_,e.toString())}addIndex(e,n){f(e!==lt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(I.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Un(i,e.getCompare()):a=et;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new ve(h,l)}addToIndexes(e,n){const i=wn(this.indexes_,(s,r)=>{const o=ct(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===et)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(I.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Un(a,o.getCompare())}else return et;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new I(e.name,a))),c.insert(e,e.node)}});return new ve(i,this.indexSet_)}removeFromIndexes(e,n){const i=wn(this.indexes_,s=>{if(s===et)return s;{const r=n.get(e.name);return r?s.remove(new I(e.name,r)):s}});return new ve(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt;class T{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&gc(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bt||(bt=new T(new X(pr),null,ve.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bt}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bt:n}}getChild(e){const n=E(e);return n===null?this:this.getImmediateChild(n).getChild(b(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new I(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?bt:this.priorityNode_;return new T(s,o,r)}}updateChild(e,n){const i=E(e);if(i===null)return n;{f(E(e)!==".priority"||be(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(b(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(V,(o,a)=>{n[o]=a.val(e),i++,r&&T.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pc(this.getPriority().val())+":"),this.forEachChild(V,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Hl(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new I(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new I(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new I(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hn?-1:0}withIndex(e){if(e===lt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===lt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(V),s=n.getIterator(V);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===lt?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class m_ extends T{constructor(){super(new X(pr),T.EMPTY_NODE,ve.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const hn=new m_;Object.defineProperties(I,{MIN:{value:new I(ht,T.EMPTY_NODE)},MAX:{value:new I(Ke,hn)}});fc.__EMPTY_NODE=T.EMPTY_NODE;P.__childrenNodeConstructor=T;u_(hn);f_(hn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=!0;function W(t,e=null){if(t===null)return T.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new P(n,W(e))}if(!(t instanceof Array)&&y_){const n=[];let i=!1;if(ie(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=W(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new I(o,c)))}}),n.length===0)return T.EMPTY_NODE;const r=Un(n,h_,o=>o.name,pr);if(i){const o=Un(n,V.getCompare());return new T(r,W(e),new ve({".priority":o},{".priority":V}))}else return new T(r,W(e),ve.Default)}else{let n=T.EMPTY_NODE;return ie(t,(i,s)=>{if(Te(t,i)&&i.substring(0,1)!=="."){const r=W(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(W(e))}}d_(W);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_ extends hi{constructor(e){super(),this.indexPath_=e,f(!y(e)&&E(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?It(e.name,n.name):r}makePost(e,n){const i=W(e),s=T.EMPTY_NODE.updateChild(this.indexPath_,i);return new I(n,s)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,hn);return new I(Ke,e)}toString(){return cc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends hi{compare(e,n){const i=e.node.compareTo(n.node);return i===0?It(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,n){const i=W(e);return new I(n,i)}toString(){return".value"}}const I_=new E_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){return{type:"value",snapshotNode:t}}function T_(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function C_(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function S_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=V}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ht}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ke}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===V}copy(){const e=new gr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function No(t){const e={};if(t.isDefault())return e;let n;return t.index_===V?n="$priority":t.index_===I_?n="$value":t.index_===lt?n="$key":(f(t.index_ instanceof v_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=F(n),t.startSet_&&(e.startAt=F(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+F(t.indexStartName_))),t.endSet_&&(e.endAt=F(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+F(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ko(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==V&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends oc{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ln("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jn.getListenId_(e,i),a={};this.listens_[o]=a;const c=No(e._queryParams);this.restRequest_(r+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,i),ct(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const i=jn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=No(e._queryParams),i=e._path.toString(),s=new Ss;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=jt(a.responseText)}catch{Q("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Q("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return{value:null,children:new Map}}function yc(t,e,n){if(y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=E(e);t.children.has(i)||t.children.set(i,$n());const s=t.children.get(i);e=b(e),yc(s,e,n)}}function gs(t,e,n){t.value!==null?n(e,t.value):R_(t,(i,s)=>{const r=new N(e.toString()+"/"+i);gs(s,r,n)})}function R_(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ie(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=10*1e3,N_=30*1e3,k_=5*60*1e3;class O_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new b_(e);const i=Oo+(N_-Oo)*Math.random();Mt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ie(e,(s,r)=>{r>0&&Te(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Mt(this.reportStats_.bind(this),Math.floor(Math.random()*2*k_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ge||(ge={}));function vc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ec(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ic(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ge.ACK_USER_WRITE,this.source=vc()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new N(e));return new Bn(S(),n,this.revert)}}else return f(E(this.path)===e,"operationForChild called for unrelated child."),new Bn(b(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ge.OVERWRITE}operationForChild(e){return y(this.path)?new Ye(this.source,S(),this.snap.getImmediateChild(e)):new Ye(this.source,b(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ge.MERGE}operationForChild(e){if(y(this.path)){const n=this.children.subtree(new N(e));return n.isEmpty()?null:n.value?new Ye(this.source,S(),n.value):new Kt(this.source,S(),n)}else return f(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Kt(this.source,b(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;const n=E(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function D_(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(S_(o.childName,o.snapshotNode))}),Nt(t,s,"child_removed",e,i,n),Nt(t,s,"child_added",e,i,n),Nt(t,s,"child_moved",r,i,n),Nt(t,s,"child_changed",e,i,n),Nt(t,s,"value",e,i,n),s}function Nt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>x_(t,a,c)),o.forEach(a=>{const c=P_(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function P_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function x_(t,e,n){if(e.childName==null||n.childName==null)throw dt("Should only compare child_ events.");const i=new I(e.childName,e.snapshotNode),s=new I(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){return{eventCache:t,serverCache:e}}function Ft(t,e,n,i){return wc(new _r(e,n,i),t.serverCache)}function Tc(t,e,n,i){return wc(t.eventCache,new _r(e,n,i))}function _s(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xe(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;const L_=()=>(Ui||(Ui=new X(yg)),Ui);class R{constructor(e,n=L_()){this.value=e,this.children=n}static fromObject(e){let n=new R(null);return ie(e,(i,s)=>{n=n.set(new N(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:S(),value:this.value};if(y(e))return null;{const i=E(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(b(e),n);return r!=null?{path:L(new N(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{const n=E(e),i=this.children.get(n);return i!==null?i.subtree(b(e)):new R(null)}}set(e,n){if(y(e))return new R(n,this.children);{const i=E(e),r=(this.children.get(i)||new R(null)).set(b(e),n),o=this.children.insert(i,r);return new R(this.value,o)}}remove(e){if(y(e))return this.children.isEmpty()?new R(null):new R(null,this.children);{const n=E(e),i=this.children.get(n);if(i){const s=i.remove(b(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new R(null):new R(this.value,r)}else return this}}get(e){if(y(e))return this.value;{const n=E(e),i=this.children.get(n);return i?i.get(b(e)):null}}setTree(e,n){if(y(e))return n;{const i=E(e),r=(this.children.get(i)||new R(null)).setTree(b(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new R(this.value,o)}}fold(e){return this.fold_(S(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(L(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,S(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(y(e))return null;{const r=E(e),o=this.children.get(r);return o?o.findOnPath_(b(e),L(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,S(),n)}foreachOnPath_(e,n,i){if(y(e))return this;{this.value&&i(n,this.value);const s=E(e),r=this.children.get(s);return r?r.foreachOnPath_(b(e),L(n,s),i):new R(null)}}foreach(e){this.foreach_(S(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(L(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.writeTree_=e}static empty(){return new ce(new R(null))}}function Ut(t,e,n){if(y(e))return new ce(new R(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ee(s,e);return r=r.updateChild(o,n),new ce(t.writeTree_.set(s,r))}else{const s=new R(n),r=t.writeTree_.setTree(e,s);return new ce(r)}}}function Do(t,e,n){let i=t;return ie(n,(s,r)=>{i=Ut(i,L(e,s),r)}),i}function Po(t,e){if(y(e))return ce.empty();{const n=t.writeTree_.setTree(e,new R(null));return new ce(n)}}function ms(t,e){return Qe(t,e)!=null}function Qe(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ee(n.path,e)):null}function xo(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(V,(i,s)=>{e.push(new I(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new I(i,s.value))}),e}function Re(t,e){if(y(e))return t;{const n=Qe(t,e);return n!=null?new ce(new R(n)):new ce(t.writeTree_.subtree(e))}}function ys(t){return t.writeTree_.isEmpty()}function ut(t,e){return Cc(S(),t.writeTree_,e)}function Cc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Cc(L(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(L(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e){return kc(e,t)}function M_(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Ut(t.visibleWrites,e,n)),t.lastWriteId=i}function F_(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function U_(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&j_(a,i.path)?s=!1:ae(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return $_(t),!0;if(i.snap)t.visibleWrites=Po(t.visibleWrites,i.path);else{const a=i.children;ie(a,c=>{t.visibleWrites=Po(t.visibleWrites,L(i.path,c))})}return!0}else return!1}function j_(t,e){if(t.snap)return ae(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ae(L(t.path,n),e))return!0;return!1}function $_(t){t.visibleWrites=Ac(t.allWrites,B_,S()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function B_(t){return t.visible}function Ac(t,e,n){let i=ce.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ae(n,o)?(a=ee(n,o),i=Ut(i,a,r.snap)):ae(o,n)&&(a=ee(o,n),i=Ut(i,S(),r.snap.getChild(a)));else if(r.children){if(ae(n,o))a=ee(n,o),i=Do(i,a,r.children);else if(ae(o,n))if(a=ee(o,n),y(a))i=Do(i,S(),r.children);else{const c=ct(r.children,E(a));if(c){const l=c.getChild(b(a));i=Ut(i,S(),l)}}}else throw dt("WriteRecord should have .snap or .children")}}return i}function Rc(t,e,n,i,s){if(!i&&!s){const r=Qe(t.visibleWrites,e);if(r!=null)return r;{const o=Re(t.visibleWrites,e);if(ys(o))return n;if(n==null&&!ms(o,S()))return null;{const a=n||T.EMPTY_NODE;return ut(o,a)}}}else{const r=Re(t.visibleWrites,e);if(!s&&ys(r))return n;if(!s&&n==null&&!ms(r,S()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(ae(l.path,e)||ae(e,l.path))},a=Ac(t.allWrites,o,e),c=n||T.EMPTY_NODE;return ut(a,c)}}}function H_(t,e,n){let i=T.EMPTY_NODE;const s=Qe(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(V,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Re(t.visibleWrites,e);return n.forEachChild(V,(o,a)=>{const c=ut(Re(r,new N(o)),a);i=i.updateImmediateChild(o,c)}),xo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Re(t.visibleWrites,e);return xo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function W_(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,n);if(ms(t.visibleWrites,r))return null;{const o=Re(t.visibleWrites,r);return ys(o)?s.getChild(n):ut(o,s.getChild(n))}}function V_(t,e,n,i){const s=L(e,n),r=Qe(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Re(t.visibleWrites,s);return ut(o,i.getNode().getImmediateChild(n))}else return null}function q_(t,e){return Qe(t.visibleWrites,e)}function z_(t,e,n,i,s,r,o){let a;const c=Re(t.visibleWrites,e),l=Qe(c,S());if(l!=null)a=l;else if(n!=null)a=ut(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&h.length<s;)u(p,i)!==0&&h.push(p),p=d.getNext();return h}else return[]}function G_(){return{visibleWrites:ce.empty(),allWrites:[],lastWriteId:-1}}function vs(t,e,n,i){return Rc(t.writeTree,t.treePath,e,n,i)}function bc(t,e){return H_(t.writeTree,t.treePath,e)}function Lo(t,e,n,i){return W_(t.writeTree,t.treePath,e,n,i)}function Hn(t,e){return q_(t.writeTree,L(t.treePath,e))}function K_(t,e,n,i,s,r){return z_(t.writeTree,t.treePath,e,n,i,s,r)}function mr(t,e,n){return V_(t.writeTree,t.treePath,e,n)}function Nc(t,e){return kc(L(t.treePath,e),t.writeTree)}function kc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,bo(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,C_(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,T_(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,bo(i,e.snapshotNode,s.oldSnap));else throw dt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Oc=new X_;class yr{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new _r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mr(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xe(this.viewCache_),r=K_(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function J_(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Q_(t,e,n,i,s){const r=new Y_;let o,a;if(n.type===ge.OVERWRITE){const l=n;l.source.fromUser?o=Es(t,e,l.path,l.snap,i,s,r):(f(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!y(l.path),o=Wn(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===ge.MERGE){const l=n;l.source.fromUser?o=em(t,e,l.path,l.children,i,s,r):(f(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Is(t,e,l.path,l.children,i,s,a,r))}else if(n.type===ge.ACK_USER_WRITE){const l=n;l.revert?o=im(t,e,l.path,i,s,r):o=tm(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===ge.LISTEN_COMPLETE)o=nm(t,e,n.path,i,r);else throw dt("Unknown operation type: "+n.type);const c=r.getChanges();return Z_(e,o,c),{viewCache:o,changes:c}}function Z_(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_s(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(w_(_s(e)))}}function Dc(t,e,n,i,s,r){const o=e.eventCache;if(Hn(i,n)!=null)return e;{let a,c;if(y(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Xe(e),h=l instanceof T?l:T.EMPTY_NODE,u=bc(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=vs(i,Xe(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=E(n);if(l===".priority"){f(be(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=Lo(i,n,h,c);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=b(n);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Lo(i,n,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(l).updateChild(h,d):u=o.getNode().getImmediateChild(l)}else u=mr(i,l,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),l,u,h,s,r):a=o.getNode()}}return Ft(e,a,o.isFullyInitialized()||y(n),t.filter.filtersNodes())}}function Wn(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const h=o?t.filter:t.filter.getIndexedFilter();if(y(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),p,null)}else{const p=E(n);if(!c.isCompleteForPath(n)&&be(n)>1)return e;const _=b(n),O=c.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?l=h.updatePriority(c.getNode(),O):l=h.updateChild(c.getNode(),p,O,_,Oc,null)}const u=Tc(e,l,c.isFullyInitialized()||y(n),h.filtersNodes()),d=new yr(s,u,r);return Dc(t,u,n,s,d,a)}function Es(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const h=new yr(s,e,r);if(y(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ft(e,l,!0,t.filter.filtersNodes());else{const u=E(n);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=Ft(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=b(n),p=a.getNode().getImmediateChild(u);let _;if(y(d))_=i;else{const A=h.getCompleteChild(u);A!=null?lc(d)===".priority"&&A.getChild(hc(d)).isEmpty()?_=A:_=A.updateChild(d,i):_=T.EMPTY_NODE}if(p.equals(_))c=e;else{const A=t.filter.updateChild(a.getNode(),u,_,d,h,o);c=Ft(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Mo(t,e){return t.eventCache.isCompleteForChild(e)}function em(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const h=L(n,c);Mo(e,E(h))&&(a=Es(t,a,h,l,s,r,o))}),i.foreach((c,l)=>{const h=L(n,c);Mo(e,E(h))||(a=Es(t,a,h,l,s,r,o))}),a}function Fo(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Is(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;y(n)?l=i:l=new R(null).setTree(n,i);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),_=Fo(t,p,d);c=Wn(t,c,new N(u),_,s,r,o,a)}}),l.children.inorderTraversal((u,d)=>{const p=!e.serverCache.isCompleteForChild(u)&&d.value===void 0;if(!h.hasChild(u)&&!p){const _=e.serverCache.getNode().getImmediateChild(u),A=Fo(t,_,d);c=Wn(t,c,new N(u),A,s,r,o,a)}}),c}function tm(t,e,n,i,s,r,o){if(Hn(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(y(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Wn(t,e,n,c.getNode().getChild(n),s,r,a,o);if(y(n)){let l=new R(null);return c.getNode().forEachChild(lt,(h,u)=>{l=l.set(new N(h),u)}),Is(t,e,n,l,s,r,a,o)}else return e}else{let l=new R(null);return i.foreach((h,u)=>{const d=L(n,h);c.isCompleteForPath(d)&&(l=l.set(h,c.getNode().getChild(d)))}),Is(t,e,n,l,s,r,a,o)}}function nm(t,e,n,i,s){const r=e.serverCache,o=Tc(e,r.getNode(),r.isFullyInitialized()||y(n),r.isFiltered());return Dc(t,o,n,i,Oc,s)}function im(t,e,n,i,s,r){let o;if(Hn(i,n)!=null)return e;{const a=new yr(i,e,s),c=e.eventCache.getNode();let l;if(y(n)||E(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=vs(i,Xe(e));else{const u=e.serverCache.getNode();f(u instanceof T,"serverChildren would be complete if leaf node"),h=bc(i,u)}h=h,l=t.filter.updateFullNode(c,h,r)}else{const h=E(n);let u=mr(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=t.filter.updateChild(c,h,u,b(n),a,r):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(c,h,T.EMPTY_NODE,b(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vs(i,Xe(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Hn(i,S())!=null,Ft(e,l,o,t.filter.filtersNodes())}}function sm(t,e){const n=Xe(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!y(e)&&!n.getImmediateChild(E(e)).isEmpty())?n.getChild(e):null}function Uo(t,e,n,i){e.type===ge.MERGE&&e.source.queryId!==null&&(f(Xe(t.viewCache_),"We should always have a full cache before handling merges"),f(_s(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Q_(t.processor_,s,e,n,i);return J_(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,rm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function rm(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return D_(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;function om(t){f(!jo,"__referenceConstructor has already been defined"),jo=t}function vr(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),Uo(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Uo(o,e,n,i));return r}}function Er(t,e){let n=null;for(const i of t.views.values())n=n||sm(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;function am(t){f(!$o,"__referenceConstructor has already been defined"),$o=t}class Bo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new R(null),this.pendingWriteTree_=G_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lm(t,e,n,i,s){return M_(t.pendingWriteTree_,e,n,i,s),s?di(t,new Ye(vc(),e,n)):[]}function it(t,e,n=!1){const i=F_(t.pendingWriteTree_,e);if(U_(t.pendingWriteTree_,e)){let r=new R(null);return i.snap!=null?r=r.set(S(),!0):ie(i.children,o=>{r=r.set(new N(o),!0)}),di(t,new Bn(i.path,r,n))}else return[]}function ui(t,e,n){return di(t,new Ye(Ec(),e,n))}function cm(t,e,n){const i=R.fromObject(n);return di(t,new Kt(Ec(),e,i))}function hm(t,e,n,i){const s=Mc(t,i);if(s!=null){const r=Fc(s),o=r.path,a=r.queryId,c=ee(o,e),l=new Ye(Ic(a),c,n);return Uc(t,o,l)}else return[]}function um(t,e,n,i){const s=Mc(t,i);if(s){const r=Fc(s),o=r.path,a=r.queryId,c=ee(o,e),l=R.fromObject(n),h=new Kt(Ic(a),c,l);return Uc(t,o,h)}else return[]}function Pc(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ee(o,e),l=Er(a,c);if(l)return l});return Rc(s,e,r,n,!0)}function di(t,e){return xc(e,t.syncPointTree_,null,Sc(t.pendingWriteTree_,S()))}function xc(t,e,n,i){if(y(t.path))return Lc(t,e,n,i);{const s=e.get(S());n==null&&s!=null&&(n=Er(s,S()));let r=[];const o=E(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,h=Nc(i,o);r=r.concat(xc(a,c,l,h))}return s&&(r=r.concat(vr(s,t,i,n))),r}}function Lc(t,e,n,i){const s=e.get(S());n==null&&s!=null&&(n=Er(s,S()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Nc(i,o),h=t.operationForChild(o);h&&(r=r.concat(Lc(h,a,c,l)))}),s&&(r=r.concat(vr(s,t,i,n))),r}function Mc(t,e){return t.tagToQueryMap.get(e)}function Fc(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new N(t.substr(0,e))}}function Uc(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=Sc(t.pendingWriteTree_,e);return vr(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ir(n)}node(){return this.node_}}class wr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=L(this.path_,e);return new wr(this.syncTree_,n)}node(){return Pc(this.syncTree_,this.path_)}}const dm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ho=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pm(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},pm=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},gm=function(t,e,n,i){return Tr(e,new wr(n,t),i)},_m=function(t,e,n){return Tr(t,new Ir(e),n)};function Tr(t,e,n){const i=t.getPriority().val(),s=Ho(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ho(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new P(a,W(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new P(s))),o.forEachChild(V,(a,c)=>{const l=Tr(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Sr(t,e){let n=e instanceof N?e:new N(e),i=t,s=E(n);for(;s!==null;){const r=ct(i.node.children,s)||{children:{},childCount:0};i=new Cr(s,i,r),n=b(n),s=E(n)}return i}function wt(t){return t.node.value}function jc(t,e){t.node.value=e,ws(t)}function $c(t){return t.node.childCount>0}function mm(t){return wt(t)===void 0&&!$c(t)}function fi(t,e){ie(t.node.children,(n,i)=>{e(new Cr(n,t,i))})}function Bc(t,e,n,i){n&&!i&&e(t),fi(t,s=>{Bc(s,e,!0,i)}),n&&i&&e(t)}function ym(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function un(t){return new N(t.parent===null?t.name:un(t.parent)+"/"+t.name)}function ws(t){t.parent!==null&&vm(t.parent,t.name,t)}function vm(t,e,n){const i=mm(n),s=Te(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ws(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ws(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=/[\[\].#$\/\u0000-\u001F\u007F]/,Im=/[\[\].#$\u0000-\u001F\u007F]/,ji=10*1024*1024,Hc=function(t){return typeof t=="string"&&t.length!==0&&!Em.test(t)},wm=function(t){return typeof t=="string"&&t.length!==0&&!Im.test(t)},Tm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wm(t)},Wc=function(t,e,n){const i=n instanceof N?new t_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Le(i));if(typeof e=="function")throw new Error(t+"contains a function "+Le(i)+" with contents = "+e.toString());if(Wl(e))throw new Error(t+"contains "+e.toString()+" "+Le(i));if(typeof e=="string"&&e.length>ji/3&&Vn(e)>ji)throw new Error(t+"contains a string greater than "+ji+" utf8 bytes "+Le(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ie(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Hc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Le(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);n_(i,o),Wc(t,a,i),i_(i)}),s&&r)throw new Error(t+' contains ".value" child '+Le(i)+" in addition to actual children.")}},Cm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Tm(n))throw new Error(_h(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Am(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!uc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ze(t,e,n){Am(t,n),Rm(t,i=>ae(i,e)||ae(e,i))}function Rm(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(bm(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();He&&H("event: "+n.toString()),cn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="repo_interrupt",km=25;class Om{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Sm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$n(),this.transactionQueueTree_=new Cr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dm(t,e,n){if(t.stats_=hr(t.repoInfo_),t.forceRestClient_||Cg())t.server_=new jn(t.repoInfo_,(i,s,r,o)=>{Wo(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{F(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ee(t.repoInfo_,e,(i,s,r,o)=>{Wo(t,i,s,r,o)},i=>{Vo(t,i)},i=>{xm(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Og(t.repoInfo_,()=>new O_(t.stats_,t.server_)),t.infoData_=new A_,t.infoSyncTree_=new Bo({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=ui(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ar(t,"connected",!1),t.serverSyncTree_=new Bo({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Ze(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Pm(t){const n=t.infoData_.getNode(new N(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return dm({timestamp:Pm(t)})}function Wo(t,e,n,i,s){t.dataUpdateCount++;const r=new N(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=wn(n,l=>W(l));o=um(t.serverSyncTree_,r,c,s)}else{const c=W(n);o=hm(t.serverSyncTree_,r,c,s)}else if(i){const c=wn(n,l=>W(l));o=cm(t.serverSyncTree_,r,c)}else{const c=W(n);o=ui(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=br(t,r)),Ze(t.eventQueue_,a,o)}function Vo(t,e){Ar(t,"connected",e),e===!1&&Mm(t)}function xm(t,e){ie(e,(n,i)=>{Ar(t,n,i)})}function Ar(t,e,n){const i=new N("/.info/"+e),s=W(n);t.infoData_.updateSnapshot(i,s);const r=ui(t.infoSyncTree_,i,s);Ze(t.eventQueue_,i,r)}function Lm(t){return t.nextWriteId_++}function Mm(t){qc(t,"onDisconnectEvents");const e=Vc(t),n=$n();gs(t.onDisconnect_,S(),(s,r)=>{const o=gm(s,r,t.serverSyncTree_,e);yc(n,s,o)});let i=[];gs(n,S(),(s,r)=>{i=i.concat(ui(t.serverSyncTree_,s,r));const o=$m(t,s);br(t,o)}),t.onDisconnect_=$n(),Ze(t.eventQueue_,S(),i)}function Fm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Nm)}function qc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),H(n,...e)}function zc(t,e,n){return Pc(t.serverSyncTree_,e,n)||T.EMPTY_NODE}function Rr(t,e=t.transactionQueueTree_){if(e||pi(t,e),wt(e)){const n=Kc(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Um(t,un(e),n)}else $c(e)&&fi(e,n=>{Rr(t,n)})}function Um(t,e,n){const i=n.map(l=>l.currentWriteId),s=zc(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const h=n[l];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ee(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{qc(t,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(it(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();pi(t,Sr(t.transactionQueueTree_,e)),Rr(t,t.transactionQueueTree_),Ze(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)cn(u[d])}else{if(l==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Q("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=l}br(t,e)}},o)}function br(t,e){const n=Gc(t,e),i=un(n),s=Kc(t,n);return jm(t,s,i),i}function jm(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ee(n,c.path);let h=!1,u;if(f(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,s=s.concat(it(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=km)h=!0,u="maxretry",s=s.concat(it(t.serverSyncTree_,c.currentWriteId,!0));else{const d=zc(t,c.path,o);c.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Wc("transaction failed: Data returned ",p,c.path);let _=W(p);typeof p=="object"&&p!=null&&Te(p,".priority")||(_=_.updatePriority(d.getPriority()));const O=c.currentWriteId,Z=Vc(t),Ce=_m(_,d,Z);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=Ce,c.currentWriteId=Lm(t),o.splice(o.indexOf(O),1),s=s.concat(lm(t.serverSyncTree_,c.path,Ce,c.currentWriteId,c.applyLocally)),s=s.concat(it(t.serverSyncTree_,O,!0))}else h=!0,u="nodata",s=s.concat(it(t.serverSyncTree_,c.currentWriteId,!0))}Ze(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}pi(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)cn(i[a]);Rr(t,t.transactionQueueTree_)}function Gc(t,e){let n,i=t.transactionQueueTree_;for(n=E(e);n!==null&&wt(i)===void 0;)i=Sr(i,n),e=b(e),n=E(e);return i}function Kc(t,e){const n=[];return Yc(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Yc(t,e,n){const i=wt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);fi(e,s=>{Yc(t,s,n)})}function pi(t,e){const n=wt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,jc(e,n.length>0?n:void 0)}fi(e,i=>{pi(t,i)})}function $m(t,e){const n=un(Gc(t,e)),i=Sr(t.transactionQueueTree_,e);return ym(i,s=>{$i(t,s)}),$i(t,i),Bc(i,s=>{$i(t,s)}),n}function $i(t,e){const n=wt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(it(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?jc(e,void 0):n.length=r+1,Ze(t.eventQueue_,un(e),s);for(let o=0;o<i.length;o++)cn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Hm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Q(`Invalid query segment '${n}' in query '${t}'`)}return e}const qo=function(t,e){const n=Wm(t),i=n.namespace;n.domain==="firebase.com"&&Ge(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_g();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bg(n.host,n.secure,i,e,s,"",i!==n.subdomain),path:new N(n.pathString)}},Wm=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=Bm(t.substring(h,u)));const d=Hm(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Nr{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return y(this._path)?null:lc(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=ko(this._queryParams),n=lr(e);return n==="{}"?"default":n}get _queryObject(){return ko(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof Nr))return!1;const n=this._repo===e._repo,i=uc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+e_(this._path)}}class Tt extends Nr{constructor(e,n){super(e,n,new gr,!1)}get parent(){const e=hc(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}om(Tt);am(Tt);/**
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
 */const Vm="FIREBASE_DATABASE_EMULATOR_HOST",Ts={};let qm=!1;function zm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),H("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qo(r,s),a=o.repoInfo,c,l;typeof process<"u"&&(l=process.env[Vm]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=qo(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const h=s&&c?new ds(ds.OWNER):new Ag(t.name,t.options,e);Cm("Invalid Firebase Database URL",o),y(o.path)||Ge("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Km(a,t,h,new Sg(t.name,n));return new Ym(u,t)}function Gm(t,e){const n=Ts[e];(!n||n[t.key]!==t)&&Ge(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Fm(t),delete n[t.key]}function Km(t,e,n,i){let s=Ts[e.name];s||(s={},Ts[e.name]=s);let r=s[t.toURLString()];return r&&Ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Om(t,qm,n,i),s[t.toURLString()]=r,r}class Ym{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,S())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Gm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ge("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Xm(t){ug(Xt),he(new te("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return zm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ie(cg,hg,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ee.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Xm();
