import{s as U,f as S,e as X}from"../chunks/scheduler.b7db4573.js";import{S as Z,i as tt,g as u,r as z,s as D,h as f,j as H,u as B,c as k,y as q,f as b,k as c,a as L,v as F,x as r,d as G,t as N,w as P,z as et,m as J,n as R,l as st,o as W}from"../chunks/index.1700605f.js";import{e as Y,$ as at,c as lt,a as rt}from"../chunks/index.esm2017.6b599bd6.js";import{N as ot,C as nt}from"../chunks/Contact.89142387.js";function K(_,t,s){const a=_.slice();return a[4]=t[s],a}function Q(_){let t,s,a,m,w,j,n,C,E=_[4].name+"",p,V,x,d=_[4].position+"",T,y;return{c(){t=u("div"),s=u("div"),a=u("img"),j=D(),n=u("div"),C=u("h5"),p=J(E),V=D(),x=u("p"),T=J(d),y=D(),this.h()},l(v){t=f(v,"DIV",{class:!0});var h=H(t);s=f(h,"DIV",{class:!0,style:!0});var g=H(s);a=f(g,"IMG",{src:!0,class:!0,alt:!0}),j=k(g),n=f(g,"DIV",{class:!0});var $=H(n);C=f($,"H5",{class:!0});var M=H(C);p=R(M,E),M.forEach(b),V=k($),x=f($,"P",{class:!0});var I=H(x);T=R(I,d),I.forEach(b),$.forEach(b),g.forEach(b),y=k(h),h.forEach(b),this.h()},h(){S(a.src,m=_[4].pic)||c(a,"src",m),c(a,"class","card-img-top"),c(a,"alt",w=_[4].name),c(C,"class","card-title svelte-hrj0st"),c(x,"class","card-text svelte-hrj0st"),c(n,"class","card-body"),c(s,"class","card svelte-hrj0st"),st(s,"width","18rem"),c(t,"class","col")},m(v,h){L(v,t,h),r(t,s),r(s,a),r(s,j),r(s,n),r(n,C),r(C,p),r(n,V),r(n,x),r(x,T),r(t,y)},p(v,h){h&1&&!S(a.src,m=v[4].pic)&&c(a,"src",m),h&1&&w!==(w=v[4].name)&&c(a,"alt",w),h&1&&E!==(E=v[4].name+"")&&W(p,E),h&1&&d!==(d=v[4].position+"")&&W(T,d)},d(v){v&&b(t)}}}function ct(_){let t,s,a,m,w,j,n,C='<div class="col"></div> <div class="col"><h1 class="svelte-hrj0st">&quot;America&#39;s Leadership Development Fraternity&quot;</h1> <p class="svelte-hrj0st">In 1865 three men set out to form a new kind of fraternity, built upon Judeo-Christian roots, with a mission to bind together a country torn apart by the Civil War. Each chapter of ATO has a mission to build a brotherhood of leaders from all backgrounds, bound together by shared virtues and responsibilities.</p></div> <div class="col"></div>',E,p,V="Executive Board",x,d,T,y,v='<div class="col"></div> <div class="col"><h1 class="svelte-hrj0st">Awards</h1> <p class="svelte-hrj0st"></p></div> <div class="col"></div>',h,g,$,M;s=new ot({});let I=Y(_[0]),i=[];for(let e=0;e<I.length;e+=1)i[e]=Q(K(_,I,e));return $=new nt({}),{c(){t=u("body"),z(s.$$.fragment),a=D(),m=u("img"),j=D(),n=u("div"),n.innerHTML=C,E=D(),p=u("h1"),p.textContent=V,x=D(),d=u("div");for(let e=0;e<i.length;e+=1)i[e].c();T=D(),y=u("div"),y.innerHTML=v,h=D(),g=u("footer"),z($.$$.fragment),this.h()},l(e){t=f(e,"BODY",{class:!0});var o=H(t);B(s.$$.fragment,o),a=k(o),m=f(o,"IMG",{src:!0,alt:!0}),j=k(o),n=f(o,"DIV",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-nl3ylj"&&(n.innerHTML=C),E=k(o),p=f(o,"H1",{class:!0,"data-svelte-h":!0}),q(p)!=="svelte-nig8h0"&&(p.textContent=V),x=k(o),d=f(o,"DIV",{class:!0});var l=H(d);for(let O=0;O<i.length;O+=1)i[O].l(l);l.forEach(b),T=k(o),y=f(o,"DIV",{class:!0,"data-svelte-h":!0}),q(y)!=="svelte-kc6zxt"&&(y.innerHTML=v),o.forEach(b),h=k(e),g=f(e,"FOOTER",{class:!0});var A=H(g);B($.$$.fragment,A),A.forEach(b),this.h()},h(){S(m.src,w="src\\lib\\Alpha_Tau_Omega_Coat_of_Arms.png")||c(m,"src",w),c(m,"alt","coat of arms"),c(n,"class","row"),c(p,"class","svelte-hrj0st"),c(d,"class","row row-cols-auto justify-content-md-center"),c(y,"class","row"),c(t,"class","svelte-hrj0st"),c(g,"class","svelte-hrj0st")},m(e,o){L(e,t,o),F(s,t,null),r(t,a),r(t,m),r(t,j),r(t,n),r(t,E),r(t,p),r(t,x),r(t,d);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(d,null);r(t,T),r(t,y),L(e,h,o),L(e,g,o),F($,g,null),M=!0},p(e,[o]){if(o&1){I=Y(e[0]);let l;for(l=0;l<I.length;l+=1){const A=K(e,I,l);i[l]?i[l].p(A,o):(i[l]=Q(A),i[l].c(),i[l].m(d,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=I.length}},i(e){M||(G(s.$$.fragment,e),G($.$$.fragment,e),M=!0)},o(e){N(s.$$.fragment,e),N($.$$.fragment,e),M=!1},d(e){e&&(b(t),b(h),b(g)),P(s),et(i,e),P($)}}}function it(_,t,s){let a;const w=at(rt),j=lt(w,"exec");return X(_,j,n=>s(0,a=n)),[a,j,!1]}class ft extends Z{constructor(t){super(),tt(this,t,it,ct,U,{ssr:2})}get ssr(){return this.$$.ctx[2]}}export{ft as component};
