import{s as $e,a as N,e as v,t as L,g as x,c as b,b as E,m as ie,d as R,f as i,o as I,i as j,h as o,j as P,u as ke,k as De,z as Ve,l as we,q as Ce,p as Ee,A as de}from"../chunks/scheduler.335M-m3f.js";import{S as ye,i as Te,c as le,a as se,m as ae,t as J,g as Se,d as K,f as Be,e as re,b as Ne}from"../chunks/index.K2G5X1vL.js";import{N as xe}from"../chunks/Navigator.LGbT-rmj.js";import{e as ne}from"../chunks/each.6w4Ej4nR.js";import{S as Ae}from"../chunks/Spesa.BDEPuJAx.js";import{f as _e}from"../chunks/Input.BkZDYS4g.js";import{d as Ie,h as je}from"../chunks/servizi.Tbb05M6l.js";import{S as qe}from"../chunks/Search.234XupZN.js";function me(l,e,s){const t=l.slice();return t[14]=e[s],t}function he(l,e,s){const t=l.slice();return t[17]=e[s],t[19]=s,t}function pe(l){let e,s,t;function a(r){l[7](r)}let u={nosave:!0,open:!0};return l[3]!==void 0&&(u.expense=l[3]),e=new Ae({props:u}),we.push(()=>Ne(e,"expense",a)),e.$on("close",l[8]),e.$on("reload",l[9]),{c(){le(e.$$.fragment)},l(r){se(e.$$.fragment,r)},m(r,c){ae(e,r,c),t=!0},p(r,c){const f={};!s&&c&8&&(s=!0,f.expense=r[3],Ce(()=>s=!1)),e.$set(f)},i(r){t||(J(e.$$.fragment,r),t=!0)},o(r){K(e.$$.fragment,r),t=!1},d(r){re(e,r)}}}function ve(l){let e,s,t=l[5].username+"",a,u,r;return{c(){e=v("button"),s=L("Reset ricerca @"),a=L(t),this.h()},l(c){e=b(c,"BUTTON",{class:!0});var f=E(e);s=R(f,"Reset ricerca @"),a=R(f,t),f.forEach(i),this.h()},h(){I(e,"class","btn btn-primary")},m(c,f){j(c,e,f),o(e,s),o(e,a),u||(r=Ee(e,"click",l[11]),u=!0)},p(c,f){f&32&&t!==(t=c[5].username+"")&&P(a,t)},d(c){c&&i(e),u=!1,r()}}}function Le(l){let e=_e(l[14].date)+"",s;return{c(){s=L(e)},l(t){s=R(t,e)},m(t,a){j(t,s,a)},p(t,a){a&2&&e!==(e=_e(t[14].date)+"")&&P(s,e)},d(t){t&&i(s)}}}function Re(l){let e=l[14].category.name+"",s;return{c(){s=L(e)},l(t){s=R(t,e)},m(t,a){j(t,s,a)},p(t,a){a&2&&e!==(e=t[14].category.name+"")&&P(s,e)},d(t){t&&i(s)}}}function ze(l){let e=l[14].description+"",s;return{c(){s=L(e)},l(t){s=R(t,e)},m(t,a){j(t,s,a)},p(t,a){a&2&&e!==(e=t[14].description+"")&&P(s,e)},d(t){t&&i(s)}}}function be(l){let e,s,t,a,u,r,c,f,$,m=l[17].user.username+"",k,d,V,A,w=(l[17].rimborso==!1?Y(l[17].cost):"")+"",M,C,U,S=(l[17].rimborso==!0?Y(l[17].cost):"")+"",O,z,F,G,y=l[19]==0&&Le(l),B=l[19]==0&&Re(l),H=l[19]==0&&ze(l);function W(){return l[12](l[14])}return{c(){e=v("tr"),s=v("td"),y&&y.c(),t=N(),a=v("td"),B&&B.c(),u=N(),r=v("td"),H&&H.c(),c=N(),f=v("td"),$=L("@"),k=L(m),V=N(),A=v("td"),M=L(w),C=N(),U=v("td"),O=L(S),z=N(),this.h()},l(q){e=b(q,"TR",{class:!0});var _=E(e);s=b(_,"TD",{});var h=E(s);y&&y.l(h),h.forEach(i),t=x(_),a=b(_,"TD",{});var T=E(a);B&&B.l(T),T.forEach(i),u=x(_),r=b(_,"TD",{});var Q=E(r);H&&H.l(Q),Q.forEach(i),c=x(_),f=b(_,"TD",{class:!0});var D=E(f);$=R(D,"@"),k=R(D,m),D.forEach(i),V=x(_),A=b(_,"TD",{class:!0});var n=E(A);M=R(n,w),n.forEach(i),C=x(_),U=b(_,"TD",{class:!0});var p=E(U);O=R(p,S),p.forEach(i),z=x(_),_.forEach(i),this.h()},h(){I(f,"class",d=l[17].user.username==l[6].username?"font-bold text-md text-primary":""),I(A,"class","text-error font-bold"),I(U,"class","text-success font-bold"),I(e,"class","hover:bg-neutral-content cursor-pointer")},m(q,_){j(q,e,_),o(e,s),y&&y.m(s,null),o(e,t),o(e,a),B&&B.m(a,null),o(e,u),o(e,r),H&&H.m(r,null),o(e,c),o(e,f),o(f,$),o(f,k),o(e,V),o(e,A),o(A,M),o(e,C),o(e,U),o(U,O),o(e,z),F||(G=Ee(e,"click",W),F=!0)},p(q,_){l=q,l[19]==0&&y.p(l,_),l[19]==0&&B.p(l,_),l[19]==0&&H.p(l,_),_&2&&m!==(m=l[17].user.username+"")&&P(k,m),_&66&&d!==(d=l[17].user.username==l[6].username?"font-bold text-md text-primary":"")&&I(f,"class",d),_&2&&w!==(w=(l[17].rimborso==!1?Y(l[17].cost):"")+"")&&P(M,w),_&2&&S!==(S=(l[17].rimborso==!0?Y(l[17].cost):"")+"")&&P(O,S)},d(q){q&&i(e),y&&y.d(),B&&B.d(),H&&H.d(),F=!1,G()}}}function ge(l){let e,s=ne(l[14].quote),t=[];for(let a=0;a<s.length;a+=1)t[a]=be(he(l,s,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=de()},l(a){for(let u=0;u<t.length;u+=1)t[u].l(a);e=de()},m(a,u){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(a,u);j(a,e,u)},p(a,u){if(u&78){s=ne(a[14].quote);let r;for(r=0;r<s.length;r+=1){const c=he(a,s,r);t[r]?t[r].p(c,u):(t[r]=be(c),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=s.length}},d(a){a&&i(e),ke(t,a)}}}function He(l){let e,s,t,a,u="Dare",r,c,f=Y(l[4].dare)+"",$,m,k,d,V="Avere",A,w,M=Y(l[4].avere)+"",C,U,S,O,z,F,G,y,B,H="<tr><th>Data</th> <th>Categoria</th> <th>Descrizione</th> <th>Utente</th> <th>Dare</th> <th>Avere</th></tr>",W,q,_,h=l[2]&&pe(l);z=new qe({props:{topleftlabel:"Cerca per nome, cognome e username"}}),z.$on("add",l[10]);let T=l[5]&&l[5]._id&&ve(l),Q=ne(l[1]),D=[];for(let n=0;n<Q.length;n+=1)D[n]=ge(me(l,Q,n));return{c(){h&&h.c(),e=N(),s=v("div"),t=v("div"),a=v("div"),a.textContent=u,r=N(),c=v("div"),$=L(f),m=N(),k=v("div"),d=v("div"),d.textContent=V,A=N(),w=v("div"),C=L(M),U=N(),S=v("div"),O=v("div"),le(z.$$.fragment),F=N(),T&&T.c(),G=N(),y=v("table"),B=v("thead"),B.innerHTML=H,W=N(),q=v("tbody");for(let n=0;n<D.length;n+=1)D[n].c();this.h()},l(n){h&&h.l(n),e=x(n),s=b(n,"DIV",{class:!0});var p=E(s);t=b(p,"DIV",{class:!0});var g=E(t);a=b(g,"DIV",{class:!0,"data-svelte-h":!0}),ie(a)!=="svelte-gs36ac"&&(a.textContent=u),r=x(g),c=b(g,"DIV",{class:!0});var X=E(c);$=R(X,f),X.forEach(i),g.forEach(i),m=x(p),k=b(p,"DIV",{class:!0});var Z=E(k);d=b(Z,"DIV",{class:!0,"data-svelte-h":!0}),ie(d)!=="svelte-1fegl1"&&(d.textContent=V),A=x(Z),w=b(Z,"DIV",{class:!0});var ce=E(w);C=R(ce,M),ce.forEach(i),Z.forEach(i),p.forEach(i),U=x(n),S=b(n,"DIV",{class:!0});var ee=E(S);O=b(ee,"DIV",{class:!0});var fe=E(O);se(z.$$.fragment,fe),fe.forEach(i),F=x(ee),T&&T.l(ee),ee.forEach(i),G=x(n),y=b(n,"TABLE",{class:!0});var te=E(y);B=b(te,"THEAD",{"data-svelte-h":!0}),ie(B)!=="svelte-1l7rakn"&&(B.innerHTML=H),W=x(te),q=b(te,"TBODY",{});var ue=E(q);for(let oe=0;oe<D.length;oe+=1)D[oe].l(ue);ue.forEach(i),te.forEach(i),this.h()},h(){I(a,"class","text-5xl"),I(c,"class","text-5xl text-error font-bold"),I(t,"class","flex flex-col items-center space-y-4 justify-center"),I(d,"class","text-5xl "),I(w,"class","text-5xl text-success font-bold"),I(k,"class","flex flex-col items-center space-y-4 justify-center"),I(s,"class","flex flex-row space-x-24 justify-center items-center my-8"),I(O,"class","flex-1"),I(S,"class","flex felx-row space-x-2 items-end my-4"),I(y,"class","table table-zebra w-full")},m(n,p){h&&h.m(n,p),j(n,e,p),j(n,s,p),o(s,t),o(t,a),o(t,r),o(t,c),o(c,$),o(s,m),o(s,k),o(k,d),o(k,A),o(k,w),o(w,C),j(n,U,p),j(n,S,p),o(S,O),ae(z,O,null),o(S,F),T&&T.m(S,null),j(n,G,p),j(n,y,p),o(y,B),o(y,W),o(y,q);for(let g=0;g<D.length;g+=1)D[g]&&D[g].m(q,null);_=!0},p(n,[p]){if(n[2]?h?(h.p(n,p),p&4&&J(h,1)):(h=pe(n),h.c(),J(h,1),h.m(e.parentNode,e)):h&&(Se(),K(h,1,1,()=>{h=null}),Be()),(!_||p&16)&&f!==(f=Y(n[4].dare)+"")&&P($,f),(!_||p&16)&&M!==(M=Y(n[4].avere)+"")&&P(C,M),n[5]&&n[5]._id?T?T.p(n,p):(T=ve(n),T.c(),T.m(S,null)):T&&(T.d(1),T=null),p&78){Q=ne(n[1]);let g;for(g=0;g<Q.length;g+=1){const X=me(n,Q,g);D[g]?D[g].p(X,p):(D[g]=ge(X),D[g].c(),D[g].m(q,null))}for(;g<D.length;g+=1)D[g].d(1);D.length=Q.length}},i(n){_||(J(h),J(z.$$.fragment,n),_=!0)},o(n){K(h),K(z.$$.fragment,n),_=!1},d(n){n&&(i(e),i(s),i(U),i(S),i(G),i(y)),h&&h.d(n),re(z),T&&T.d(),ke(D,n)}}}function Y(l){return l||(l=0),Number(l).toLocaleString("it-IT",{style:"currency",currency:"EUR"})}function Me(l,e,s){let t;De(l,Ie,C=>s(6,t=C));let a=[],u=!1,r={},c={},f={dare:0,avere:0},$=null;Ve(async()=>{await m()});async function m(){c=await je($),s(1,a=c.spese),s(4,f=c.bilancio),console.log(a)}function k(C){r=C,s(3,r)}return[m,a,u,r,f,$,t,k,()=>{s(2,u=!1)},()=>{s(2,u=!1),m()},async C=>{s(5,$=C.detail),await m()},async()=>{s(5,$=null),await m()},C=>{s(3,r=C),s(2,u=!0)}]}class Ue extends ye{constructor(e){super(),Te(this,e,Me,He,$e,{reload:0})}get reload(){return this.$$.ctx[0]}}function Oe(l){let e,s,t,a,u,r=l[0].username+"",c,f,$,m,k;return s=new xe({}),m=new Ue({}),{c(){e=v("div"),le(s.$$.fragment),t=N(),a=v("div"),u=L("Bilancio di @"),c=L(r),f=N(),$=v("div"),le(m.$$.fragment),this.h()},l(d){e=b(d,"DIV",{class:!0});var V=E(e);se(s.$$.fragment,V),t=x(V),a=b(V,"DIV",{class:!0});var A=E(a);u=R(A,"Bilancio di @"),c=R(A,r),A.forEach(i),V.forEach(i),f=x(d),$=b(d,"DIV",{class:!0});var w=E($);se(m.$$.fragment,w),w.forEach(i),this.h()},h(){I(a,"class","text-6xl font-bold "),I(e,"class","flex flex-col space-y-4 mx-24 mt-4"),I($,"class","grid grid-cols-1 mx-24 my-4")},m(d,V){j(d,e,V),ae(s,e,null),o(e,t),o(e,a),o(a,u),o(a,c),j(d,f,V),j(d,$,V),ae(m,$,null),k=!0},p(d,[V]){(!k||V&1)&&r!==(r=d[0].username+"")&&P(c,r)},i(d){k||(J(s.$$.fragment,d),J(m.$$.fragment,d),k=!0)},o(d){K(s.$$.fragment,d),K(m.$$.fragment,d),k=!1},d(d){d&&(i(e),i(f),i($)),re(s),re(m)}}}function Pe(l,e,s){let t;return De(l,Ie,a=>s(0,t=a)),[t]}class Ze extends ye{constructor(e){super(),Te(this,e,Pe,Oe,$e,{})}}export{Ze as component};
