var y_=Object.defineProperty;var S_=(r,t,e)=>t in r?y_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Nt=(r,t,e)=>S_(r,typeof t!="symbol"?t+"":t,e);function er(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jo={duration:.5,overwrite:!1,delay:0},Lu,fn,Ue,mi=1e8,Te=1/mi,Mu=Math.PI*2,M_=Mu/4,b_=0,Sp=Math.sqrt,w_=Math.cos,T_=Math.sin,en=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},ir=function(t){return typeof t=="number"},Dl=function(t){return typeof t>"u"},Vi=function(t){return typeof t=="object"},Zn=function(t){return t!==!1},Du=function(){return typeof window<"u"},wl=function(t){return Ve(t)||en(t)},Mp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,E_=/random\([^)]+\)/g,A_=/,\s*/g,fp=/(?:-?\.?\d|\.)+/gi,Nu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uu=/[+-]=-?[.\d]+/,C_=/[^,'"\[\]\s]+/gi,R_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,zi,bu,Fu,ei={},Cl={},bp,wp=function(t){return(Cl=zs(t,ei))&&bn},Nl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ta=function(t,e){return!e&&console.warn(t)},Tp=function(t,e){return t&&(ei[t]=e)&&Cl&&(Cl[t]=e)||ei},ea=function(){return 0},P_={suppressEvents:!0,isStart:!0,kill:!1},Tl={suppressEvents:!0,kill:!1},I_={suppressEvents:!0},Ou={},wr=[],wu={},Ep,qn={},gu={},dp=30,El=[],Bu="",zu=function(t){var e=t[0],n,i;if(Vi(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=El.length;i--&&!El[i].targetTest(e););n=El[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Hu(t[i],n)))||t.splice(i,1);return t},Tr=function(t){return t._gsap||zu(gi(t))[0]._gsap},ku=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():Dl(n)&&t.getAttribute&&t.getAttribute(e)||n},Un=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},as=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},L_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Rl=function(){var t=wr.length,e=wr.slice(0),n,i;for(wu={},wr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vu=function(t){return!!(t._initted||t._startAt||t.add)},Ap=function(t,e,n,i){wr.length&&!fn&&Rl(),t.render(e,n,i||!!(fn&&e<0&&Vu(t))),wr.length&&!fn&&Rl()},Cp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(C_).length<2?e:en(t)?t.trim():t},Rp=function(t){return t},ni=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},D_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zs=function(t,e){for(var n in e)t[n]=e[n];return t},pp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Vi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Pl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},$o=function(t){var e=t.parent||Be,n=t.keyframes?D_(Mn(t.keyframes)):ni;if(Zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},N_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Pp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ul=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Er=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},is=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},U_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Tu=function(t,e,n,i){return t._startAt&&(fn?t._startAt.revert(Tl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},F_=function r(t){return!t||t._ts&&r(t.parent)},mp=function(t){return t._repeat?ks(t._tTime,t=t.duration()+t._rDelay)*t:0},ks=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},Il=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Fl=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Ol=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Fl(t),n._dirty||is(n,t)),t},Ip=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Il(t.rawTime(),e),(!e._dur||ra(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),is(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},ki=function(t,e,n,i){return e.parent&&Er(e),e._start=Oe((ir(n)?n:n||t!==Be?pi(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Pp(t,e,"_first","_last",t._sort?"_start":0),Eu(e)||(t._recent=e),i||Ip(t,e),t._ts<0&&Ol(t,t._tTime),t},Lp=function(t,e){return(ei.ScrollTrigger||Nl("scrollTrigger",e))&&ei.ScrollTrigger.create(e,t)},Dp=function(t,e,n,i,s){if(qu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ep!==Yn.frame)return wr.push(t),t._lazy=[s,i],1},O_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Eu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},B_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&O_(t)&&!(!t._initted&&Eu(t))||(t._ts<0||t._dp._ts<0)&&!Eu(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ra(0,t._tDur,e),h=ks(l,a),t._yoyo&&h&1&&(o=1-o),h!==ks(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||fn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&Dp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Tu(t,e,n,!0),t._onUpdate&&!n&&ti(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Er(t,1),!n&&!fn&&(ti(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},z_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Vs=function(t,e,n,i){var s=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Oe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Ol(t,t._tTime=t._tDur*a),t.parent&&Fl(t),n||is(t.parent,t),t},gp=function(t){return t instanceof Sn?is(t):Vs(t,t._dur)},k_={_start:0,endTime:ea,totalDuration:ea},pi=function r(t,e,n){var i=t.labels,s=t._recent||k_,o=t.duration()>=mi?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ko=function(t,e,n){var i=ir(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new qe(e[0],o,e[s+1])},Ar=function(t,e){return t||t===0?e(t):e},ra=function(t,e,n){return n<t?t:n>e?e:n},dn=function(t,e){return!en(t)||!(e=R_.exec(t))?"":e[1]},V_=function(t,e,n){return Ar(n,function(i){return ra(t,e,i)})},Au=[].slice,Np=function(t,e){return t&&Vi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Vi(t[0]))&&!t.nodeType&&t!==zi},G_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||Np(i,1)?(s=n).push.apply(s,gi(i)):n.push(i)})||n},gi=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):en(t)&&!n&&(bu||!Gs())?Au.call((e||Fu).querySelectorAll(t),0):Mn(t)?G_(t,n):Np(t)?Au.call(t,0):t?[t]:[]},Cu=function(t){return t=gi(t)[0]||ta("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return gi(e,n.querySelectorAll?n:n===t?ta("Invalid scope")||Fu.createElement("div"):t)}},Up=function(t){return t.sort(function(){return .5-Math.random()})},Fp=function(t){if(Ve(t))return t;var e=Vi(t)?t:{each:t},n=rs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return en(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,g=o[_],p,M,A,v,S,b,E,x,T;if(!g){if(T=e.grid==="auto"?0:(e.grid||[1,mi])[1],!T){for(E=-mi;E<(E=m[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(g=o[_]=[],p=l?Math.min(T,_)*h-.5:i%T,M=T===mi?0:l?_*d/T-.5:i/T|0,E=0,x=mi,b=0;b<_;b++)A=b%T-p,v=M-(b/T|0),g[b]=S=c?Math.abs(c==="y"?v:A):Sp(A*A+v*v),S>E&&(E=S),S<x&&(x=S);i==="random"&&Up(g),g.max=E-x,g.min=x,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=dn(e.amount||e.each)||0,n=n&&_<0?ex(n):n}return _=(g[u]-g.min)/g.max||0,Oe(g.b+(n?n(_):_)*g.v)+g.u}},Ru=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ir(n)?0:dn(n))}},Op=function(t,e){var n=Mn(t),i,s;return!n&&Vi(t)&&(i=n=t.radius||mi,t.values?(t=gi(t.values),(s=!ir(t[0]))&&(i*=i)):t=Ru(t.increment)),Ar(e,n?Ve(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||ir(o)?h:h+dn(o)}:Ru(t))},Bp=function(t,e,n,i){return Ar(Mn(t)?!e:n===!0?!!(n=0):!i,function(){return Mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},H_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},W_=function(t,e){return function(n){return t(parseFloat(n))+(e||dn(n))}},X_=function(t,e,n){return kp(t,e,0,1,n)},zp=function(t,e,n){return Ar(n,function(i){return t[~~e(i)]})},q_=function r(t,e,n){var i=e-t;return Mn(t)?zp(t,r(0,t.length),e):Ar(n,function(s){return(i+(s-t)%i)%i+t})},Y_=function r(t,e,n){var i=e-t,s=i*2;return Mn(t)?zp(t,r(0,t.length-1),e):Ar(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Hs=function(t){return t.replace(E_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(A_);return Bp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},kp=function(t,e,n,i,s){var o=e-t,a=i-n;return Ar(s,function(l){return n+((l-t)/o*a||0)})},Z_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=en(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Mn(t)&&!Mn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=zs(Mn(t)?[]:{},t));if(!h){for(l in e)Wu.call(a,t,l,"get",e[l]);s=function(m){return Ju(m,a)||(o?t.p:t)}}}return Ar(n,s)},_p=function(t,e,n){var i=t.labels,s=mi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ti=function(t,e,n){var i=t.vars,s=i[e],o=Ue,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&wr.length&&Rl(),a&&(Ue=a),h=l?s.apply(c,l):s.call(c),Ue=o,h},Zo=function(t){return Er(t),t.scrollTrigger&&t.scrollTrigger.kill(!!fn),t.progress()<1&&ti(t,"onInterrupt"),t},Bs,Vp=[],Gp=function(t){if(t)if(t=!t.name&&t.default||t,Du()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ea,render:Ju,add:Wu,kill:ux,modifier:hx,rawVars:0},o={targetTest:0,get:0,getSetter:Bl,aliases:{},register:0};if(Gs(),t!==i){if(qn[e])return;ni(i,ni(Pl(t,s),o)),zs(i.prototype,zs(s,Pl(t,o))),qn[i.prop=e]=i,t.targetTest&&(El.push(i),Ou[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Tp(e,i),t.register&&t.register(bn,i,Fn)}else Vp.push(t)},we=255,Jo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},_u=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},Hp=function(t,e,n){var i=t?ir(t)?[t>>16,t>>8&we,t&we]:0:Jo.black,s,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jo[t])i=Jo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(fp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=_u(l+1/3,s,o),i[1]=_u(l,s,o),i[2]=_u(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Nu),n&&i.length<4&&(i[3]=1),i}else i=t.match(fp)||Jo.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/we,o=i[1]/we,a=i[2]/we,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Wp=function(t){var e=[],n=[],i=-1;return t.split(nr).forEach(function(s){var o=s.match(os)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},xp=function(t,e,n){var i="",s=(t+i).match(nr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Hp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Wp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(nr,"1").split(os),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(nr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},nr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),J_=/hsl[a]?\(/,Gu=function(t){var e=t.join(" "),n;if(nr.lastIndex=0,nr.test(e))return n=J_.test(e),t[1]=xp(t[1],n),t[0]=xp(t[0],n,Wp(t[1])),!0},na,Yn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,m=function _(g){var p=r()-i,M=g===!0,A,v,S,b;if((p>t||p<0)&&(n+=p-e),i+=p,S=i-n,A=S-o,(A>0||M)&&(b=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=A+(A>=s?4:s-A),v=1),M||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](S,u,b,g)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){bp&&(!bu&&Du()&&(zi=bu=window,Fu=zi.document||{},ei.gsap=bn,(zi.gsapVersions||(zi.gsapVersions=[])).push(bn.version),wp(Cl||zi.GreenSockGlobals||!zi.gsap&&zi||{}),Vp.forEach(Gp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(g){return setTimeout(g,o-d.time*1e3+1|0)},na=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),na=0,c=ea},lagSmoothing:function(g,p){t=g||1/0,e=Math.min(p||33,t)},fps:function(g){s=1e3/(g||240),o=d.time*1e3+s},add:function(g,p,M){var A=p?function(v,S,b,E){g(v,S,b,E),d.remove(A)}:g;return d.remove(g),a[M?"unshift":"push"](A),Gs(),A},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},d})(),Gs=function(){return!na&&Yn.wake()},fe={},$_=/^[\d.\-M][\d.\-,\s]/,K_=/["']/g,Q_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(K_,"").trim():+c,i=l.substr(a+1).trim();return e},j_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},tx=function(t){var e=(t+"").split("("),n=fe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Q_(e[1])]:j_(t).split(",").map(Cp)):fe._CE&&$_.test(t)?fe._CE("",t):n},ex=function(t){return function(e){return 1-t(1-e)}},rs=function(t,e){return t&&(Ve(t)?t:fe[t]||tx(t))||e},ls=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Un(t,function(a){fe[a]=ei[a]=s,fe[o=a.toLowerCase()]=n;for(var l in s)fe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fe[a+"."+l]=s[l]}),s},Xp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},xu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Mu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*T_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Xp(a);return s=Mu/s,l.config=function(c,h){return r(t,c,h)},l},vu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Xp(n);return i.config=function(s){return r(t,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ls(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});fe.Linear.easeNone=fe.none=fe.Linear.easeIn;ls("Elastic",xu("in"),xu("out"),xu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ls("Circ",function(r){return-(Sp(1-r*r)-1)});ls("Sine",function(r){return r===1?1:-w_(r*M_)+1});ls("Back",vu("in"),vu("out"),vu());fe.SteppedEase=fe.steps=ei.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((i*ra(0,o,a)|0)+s)*n}}};jo.ease=fe["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Bu+=r+","+r+"Params,"});var Hu=function(t,e){this.id=b_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ku,this.set=e?e.getSetter:Bl},ia=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Vs(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),na||Yn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ol(this,n),!s._dp||s.parent||Ip(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ap(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+mp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+mp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ks(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Il(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fl(this),U_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ki(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Il(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=I_);var i=fn;return fn=n,Vu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(pi(this,n),Zn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Zn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ve(n)?n:Rp,l=function(){var h=i.then;i.then=null,s&&s(),Ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Zo(this)},r})();ni(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var Sn=(function(r){yp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zn(n.sortChildren),Be&&ki(n.parent||Be,er(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Lp(er(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ko(0,arguments,this),this},e.from=function(i,s,o){return Ko(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ko(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,$o(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(i,s,pi(this,o),1),this},e.call=function(i,s,o){return ki(this,qe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new qe(i,o,pi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,$o(o).immediateRender=Zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,$o(a).immediateRender=Zn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,g,p,M,A,v,S,b,E;if(this!==Be&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,A=this._ts,p=!A,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(u=Oe(h%g),h===l?(_=this._repeat,u=c):(S=Oe(h/g),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=ks(this._tTime,g),!a&&this._tTime&&S!==_&&this._tTime-S*g-this._dur<=0&&(S=_),b&&_&1&&(u=c-u,E=1),_!==S&&!this._lock){var x=b&&S&1,T=x===(b&&_&1);if(_<S&&(x=!x),a=x?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Oe(_*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=z_(this,Oe(a),Oe(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!S&&(ti(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!p){M=0,m&&(h+=this._zTime=-Te);break}}f=m}else{f=this._last;for(var C=i<0?i:u;f;){if(m=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||fn&&Vu(f)),u!==this._time||!this._ts&&!p){M=0,m&&(h+=this._zTime=C?-Te:Te);break}}f=m}}if(M&&!s&&(this.pause(),M.render(u>=a?0:-Te)._zTime=u>=a?1:-1,this._ts))return this._start=v,Fl(this),this.render(i,s,o);this._onUpdate&&!s&&ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ti(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ir(s)||(s=pi(this,s,i)),!(i instanceof ia)){if(Mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(Ve(i))i=qe.delayedCall(0,i);else return this}return this!==i?ki(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&Ul(this,i),i===this._recent&&(this._recent=this._last),is(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=pi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=qe.delayedCall(0,s||ea,o);return a.data="isPause",this._hasPause=1,ki(this,a,pi(this,i))},e.removePause=function(i){var s=this._first;for(i=pi(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)br!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=gi(i),l=this._first,c=ir(s),h;l;)l instanceof qe?L_(l._targets,a)&&(c?(!br||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=pi(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=qe.to(o,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&Vs(m,g,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},s));return u?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ni({startAt:{time:pi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),_p(this,pi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),_p(this,pi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return is(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=mi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ki(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Vs(o,o===Be&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Be._ts&&(Ap(Be,Il(i,Be)),Ep=Yn.frame),Yn.frame>=dp){dp+=Jn.autoSleep||120;var s=Be._first;if((!s||!s._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},t})(ia);ni(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var nx=function(t,e,n,i,s,o,a){var l=new Fn(this._pt,t,e,0,1,Zu,null,s),c=0,h=0,d,u,f,m,_,g,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Hs(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(mu)||[];d=mu.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:m.charAt(1)==="="?as(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},c=mu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Uu.test(i)||p)&&(l.e=0),this._pt=l,l},Wu=function(t,e,n,i,s,o,a,l,c,h){Ve(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:Ve(d)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ve(d)?c?ax:Zp:Yu,m;if(en(i)&&(~i.indexOf("random(")&&(i=Hs(i)),i.charAt(1)==="="&&(m=as(u,i)+(dn(u)||0),(m||m===0)&&(i=m))),!h||u!==i||Pu)return!isNaN(u*i)&&i!==""?(m=new Fn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?cx:Jp,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&Nl(e,i),nx.call(this,t,e,u,i,f,l||Jn.stringFilter,c))},ix=function(t,e,n,i,s){if(Ve(t)&&(t=Qo(t,s,e,n,i)),!Vi(t)||t.style&&t.nodeType||Mn(t)||Mp(t))return en(t)?Qo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Qo(t[a],s,e,n,i);return o},Xu=function(t,e,n,i,s,o){var a,l,c,h;if(qn[t]&&(a=new qn[t]).init(s,a.rawVars?e[t]:ix(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Bs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},br,Pu,qu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,g=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:g,A=t._overwrite==="auto"&&!Lu,v=t.timeline,S=i.easeReverse||d,b,E,x,T,C,D,I,k,L,z,X,G,K;if(v&&(!u||!s)&&(s="none"),t._ease=rs(s,jo.ease),t._rEase=S&&(rs(S)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(k=g[0]?Tr(g[0]).harness:0,G=k&&i[k.prop],b=Pl(i,Ou),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?Tl:P_),_._lazy=0),o){if(Er(t._startAt=qe.set(g,ni({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn||!a&&!f)&&t._startAt.revert(Tl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),x=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Zn(l),immediateRender:a,stagger:0,parent:p},b),G&&(x[k.prop]=G),Er(t._startAt=qe.set(g,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn?t._startAt.revert(Tl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Zn(l)||l&&!m,E=0;E<g.length;E++){if(C=g[E],I=C._gsap||zu(g)[E]._gsap,t._ptLookup[E]=z={},wu[I.id]&&wr.length&&Rl(),X=M===g?E:M.indexOf(C),k&&(L=new k).init(C,G||b,t,X,M)!==!1&&(t._pt=T=new Fn(t._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Y){z[Y]=T}),L.priority&&(D=1)),!k||G)for(x in b)qn[x]&&(L=Xu(x,b,t,X,C,M))?L.priority&&(D=1):z[x]=T=Wu.call(t,C,x,"get",b[x],X,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(C,t._op[E]),A&&t._pt&&(br=t,Be.killTweensOf(C,z,t.globalTime(e)),K=!t.parent,br=0),t._pt&&l&&(wu[I.id]=1)}D&&$u(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&v.render(mi,!0,!0)},rx=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Pu=1,t.vars[e]="+=0",qu(t,a),Pu=0,l?ta(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ge(n)+dn(d.e)),d.b&&(d.b=h.s+dn(d.b))},sx=function(t,e){var n=t[0]?Tr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=zs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ox=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Qo=function(t,e,n,i,s){return Ve(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?Hs(t):t},qp=Bu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Yp={};Un(qp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yp[r]=1});var qe=(function(r){yp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:$o(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=i.parent||Be,M=(Mn(n)||Mp(n)?ir(n[0]):"length"in i)?[n]:gi(n),A,v,S,b,E,x,T,C;if(a._targets=M.length?zu(M):ta("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||wl(c)||wl(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(A=a.timeline=new Sn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),A.kill(),A.parent=A._dp=er(a),A._start=0,u||wl(c)||wl(h)){if(b=M.length,T=u&&Fp(u),Vi(u))for(E in u)~qp.indexOf(E)&&(C||(C={}),C[E]=u[E]);for(v=0;v<b;v++)S=Pl(i,Yp),S.stagger=0,D&&(S.easeReverse=D),C&&zs(S,C),x=M[v],S.duration=+Qo(c,er(a),v,x,M),S.delay=(+Qo(h,er(a),v,x,M)||0)-a._delay,!u&&b===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),A.to(x,S,T?T(v,x,M):0),A._ease=fe.none;A.duration()?c=h=0:a.timeline=0}else if(m){$o(ni(A.vars.defaults,{ease:"none"})),A._ease=rs(m.ease||i.ease||"none");var I=0,k,L,z;if(Mn(m))m.forEach(function(X){return A.to(M,X,">")}),A.duration();else{S={};for(E in m)E==="ease"||E==="easeEach"||ox(E,m[E],S,m.easeEach);for(E in S)for(k=S[E].sort(function(X,G){return X.t-G.t}),I=0,v=0;v<k.length;v++)L=k[v],z={ease:L.e,duration:(L.t-(v?k[v-1].t:0))/100*c},z[E]=L.v,A.to(M,z,I),I+=z.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return f===!0&&!Lu&&(br=er(a),Be.killTweensOf(M),br=0),ki(p,er(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===Oe(p._time)&&Zn(d)&&F_(er(a))&&p.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-h)||0)),g&&Lp(er(a),g),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Te&&!h?l:i<Te?0:i,u,f,m,_,g,p,M,A;if(!c)B_(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Oe(d%_),d===l?(m=this._repeat,u=c):(g=Oe(d/_),m=~~g,m&&m===g?(u=c,m--):u>c&&(u=c)),p=this._yoyo&&m&1,p&&(u=c-u),g=ks(this._tTime,_),u===a&&!o&&this._initted&&m===g)return this._tTime=d,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Dp(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var S=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!g&&(ti(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Tu(this,i,s,o),ti(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&ti(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Tu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Er(this,1),!s&&!(h&&!a)&&(d||a||p)&&(ti(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){na||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||qu(this,c),h=this._ease(c/this._dur),rx(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Ol(this,0),this.parent||Pp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Zo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,br&&br.vars.overwrite!==!0)._first||Zo(this),this.parent&&o!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,g,p;if((!s||s==="all")&&N_(a,l))return s==="all"&&(this._pt=0),Zo(this);for(d=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Un(s,function(M){return _[M]=1}),s=_),s=sx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(d[p]=s,m=u,f={}):(f=d[p]=d[p]||{},m=s);for(_ in m)g=u&&u[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Ul(this,g,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Zo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ko(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ko(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Be.killTweensOf(i,s,o)},t})(ia);ni(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){qe[r]=function(){var t=new Sn,e=Au.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Yu=function(t,e,n){return t[e]=n},Zp=function(t,e,n){return t[e](n)},ax=function(t,e,n,i){return t[e](i.fp,n)},lx=function(t,e,n){return t.setAttribute(e,n)},Bl=function(t,e){return Ve(t[e])?Zp:Dl(t[e])&&t.setAttribute?lx:Yu},Jp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},cx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ju=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},hx=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},ux=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ul(this,e,"_pt"):e.dep||(n=1),e=i;return!n},fx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},$u=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Fn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Jp,this.d=l||this,this.set=c||Yu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=fx,this.m=n,this.mt=s,this.tween=i},r})();Un(Bu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ou[r]=1});ei.TweenMax=ei.TweenLite=qe;ei.TimelineLite=ei.TimelineMax=Sn;Be=new Sn({sortChildren:!1,defaults:jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=Gu;var ss=[],Al={},dx=[],vp=0,px=0,yu=function(t){return(Al[t]||dx).map(function(e){return e()})},Iu=function(){var t=Date.now(),e=[];t-vp>2&&(yu("matchMediaInit"),ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=zi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),yu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),vp=t,yu("matchMedia"))},$p=(function(){function r(e,n){this.selector=n&&Cu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=px++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ve(n)&&(s=i,i=n,n=Ve);var o=this,a=function(){var c=Ue,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Cu(s)),Ue=o,d=i.apply(o,arguments),Ve(d)&&o._r.push(d),Ue=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ve?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ue;Ue=null,n(this),Ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ss.length;o--;)ss[o].id===this.id&&ss.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),mx=(function(){function r(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Vi(n)||(n={matches:n});var o=new $p(0,s||this.scope),a=o.conditions={},l,c,h;Ue&&!o.selector&&(o.selector=Ue.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=zi.matchMedia(n[c]),l&&(ss.indexOf(o)<0&&ss.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Iu):l.addEventListener("change",Iu)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ll={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Gp(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=gi(t)[0]);var s=Tr(t||{}).get,o=n?Rp:Cp;return n==="native"&&(n=""),t&&(e?o((qn[e]&&qn[e].get||s)(t,e,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=gi(t),t.length>1){var i=t.map(function(h){return bn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=qn[e],a=Tr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Bs._pt=0,d.init(t,n?h+n:h,Bs,0,[t]),d.render(1,d),Bs._pt&&Ju(1,Bs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=bn.to(t,ni((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=rs(t.ease,jo.ease)),pp(jo,t||{})},config:function(t){return pp(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ei[a]&&ta(e+" effect requires "+a+" plugin.")}),gu[e]=function(a,l,c){return n(gi(a),ni(l||{},s),c)},o&&(Sn.prototype[e]=function(a,l,c){return this.add(gu[e](a,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){fe[t]=rs(e)},parseEase:function(t,e){return arguments.length?rs(t,e):fe},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=Zn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)s=i._next,(e||!(!i._dur&&i instanceof qe&&i.vars.onComplete===i._targets[0]))&&ki(n,i,i._start-i._delay),i=s;return ki(Be,n,0),n},context:function(t,e){return t?new $p(t,e):Ue},matchMedia:function(t){return new mx(t)},matchMediaRefresh:function(){return ss.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Iu()},addEventListener:function(t,e){var n=Al[t]||(Al[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Al[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:q_,wrapYoyo:Y_,distribute:Fp,random:Bp,snap:Op,normalize:X_,getUnit:dn,clamp:V_,splitColor:Hp,toArray:gi,selector:Cu,mapRange:kp,pipe:H_,unitize:W_,interpolate:Z_,shuffle:Up},install:wp,effects:gu,ticker:Yn,updateRoot:Sn.updateRoot,plugins:qn,globalTimeline:Be,core:{PropTween:Fn,globals:Tp,Tween:qe,Timeline:Sn,Animation:ia,getCache:Tr,_removeLinkedListItem:Ul,reverting:function(){return fn},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return Lu=t}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ll[r]=qe[r]});Yn.add(Sn.updateRoot);Bs=Ll.to({},{duration:0});var gx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},_x=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=gx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Su=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Un(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}_x(a,s)}}}},bn=Ll.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Su("roundProps",Ru),Su("modifiers"),Su("snap",Op))||Ll;qe.version=Sn.version=bn.version="3.15.0";bp=1;Du()&&Gs();var xx=fe.Power0,vx=fe.Power1,yx=fe.Power2,Sx=fe.Power3,Mx=fe.Power4,bx=fe.Linear,wx=fe.Quad,Tx=fe.Cubic,Ex=fe.Quart,Ax=fe.Quint,Cx=fe.Strong,Rx=fe.Elastic,Px=fe.Back,Ix=fe.SteppedEase,Lx=fe.Bounce,Dx=fe.Sine,Nx=fe.Expo,Ux=fe.Circ;var Kp,Cr,Xs,nf,fs,Fx,Qp,rf,Ox=function(){return typeof window<"u"},sr={},us=180/Math.PI,qs=Math.PI/180,Ws=Math.atan2,jp=1e8,sf=/([A-Z])/g,Bx=/(left|right|width|margin|padding|x)/i,zx=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Gx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Hx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},am=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},lm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Wx=function(t,e,n){return t.style[e]=n},Xx=function(t,e,n){return t.style.setProperty(e,n)},qx=function(t,e,n){return t._gsap[e]=n},Yx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Zx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Jx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ze="transform",$n=ze+"Origin",$x=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in sr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Gi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=rr(i,a)}):this.tfm[t]=o.x?o[t]:rr(i,t),t===$n&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,e,"")),t=ze}(s||e)&&this.props.push(t,e,s[t])},cm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Kx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(sf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=rf(),(!s||!s.isStart)&&!n[ze]&&(cm(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hm=function(t,e){var n={target:t,props:[],revert:Kx,save:$x};return t._gsap||bn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},um,ju=function(t,e){var n=Cr.createElementNS?Cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Cr.createElement(t);return n&&n.style?n:Cr.createElement(t)},ii=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(sf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ys(e)||e,1)||""},tm="O,Moz,ms,Ms,Webkit".split(","),Ys=function(t,e,n){var i=e||fs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(tm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?tm[o]:"")+t},tf=function(){Ox()&&window.document&&(Kp=window,Cr=Kp.document,Xs=Cr.documentElement,fs=ju("div")||{style:{}},Fx=ju("div"),ze=Ys(ze),$n=ze+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",um=!!Ys("perspective"),rf=bn.core.reverting,nf=1)},em=function(t){var e=t.ownerSVGElement,n=ju("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Xs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Xs.removeChild(n),s},nm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},fm=function(t){var e,n;try{e=t.getBBox()}catch{e=em(t),n=1}return e&&(e.width||e.height)||n||(e=em(t)),e&&!e.width&&!e.x&&!e.y?{x:+nm(t,["x","cx","x1"])||0,y:+nm(t,["y","cy","y1"])||0,width:0,height:0}:e},dm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&fm(t))},Pr=function(t,e){if(e){var n=t.style,i;e in sr&&e!==$n&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(sf,"-$1").toLowerCase())):n.removeAttribute(e)}},Rr=function(t,e,n,i,s,o){var a=new Fn(t._pt,e,n,0,1,o?lm:am);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},im={deg:1,rad:1,turn:1},Qx={grid:1,flex:1},Ir=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=fs.style,l=Bx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,g,p;if(i===o||!s||im[i]||im[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&dm(t),(f||o==="%")&&(sr[e]||~e.indexOf("adius")))return m=p?t.getBBox()[l?"width":"height"]:t[h],Ge(f?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Cr||!_.appendChild)&&(_=Cr.body),g=_._gsap,g&&f&&g.width&&l&&g.time===Yn.time&&!g.uncache)return Ge(s/g.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,m=t[h],M?t.style[e]=M:Pr(t,e)}else(f||o==="%")&&!Qx[ii(_,"display")]&&(a.position=ii(t,"position")),_===t&&(a.position="static"),_.appendChild(fs),m=fs[h],_.removeChild(fs),a.position="absolute";return l&&f&&(g=Tr(_),g.time=Yn.time,g.width=_[h]),Ge(u?m*s/d:m&&s?d/m*s:0)},rr=function(t,e,n,i){var s;return nf||tf(),e in Gi&&e!=="transform"&&(e=Gi[e],~e.indexOf(",")&&(e=e.split(",")[0])),sr[e]&&e!=="transform"?(s=aa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:kl(ii(t,$n))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=zl[e]&&zl[e](t,e,n)||ii(t,e)||ku(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ir(t,e,s,n)+n:s},jx=function(t,e,n,i){if(!n||n==="none"){var s=Ys(e,t,1),o=s&&ii(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ii(t,"borderTopColor"))}var a=new Fn(this._pt,t.style,e,0,1,Zu),l=0,c=0,h,d,u,f,m,_,g,p,M,A,v,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ii(t,e)||i,_?t.style[e]=_:Pr(t,e)),h=[n,i],Gu(h),n=h[0],i=h[1],u=n.match(os)||[],S=i.match(os)||[],S.length){for(;d=os.exec(i);)g=d[0],M=i.substring(l,d.index),m?m=(m+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(m=1),g!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),g.charAt(1)==="="&&(g=as(f,g)+v),p=parseFloat(g),A=g.substr((p+"").length),l=os.lastIndex-A.length,A||(A=A||Jn.units[e]||v,l===i.length&&(i+=A,a.e+=A)),v!==A&&(f=Ir(t,e,_,A)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?lm:am;return Uu.test(i)&&(a.e=0),this._pt=a,a},rm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=rm[n]||n,e[1]=rm[i]||i,e.join(" ")},ev=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],sr[a]&&(l=1,a=a==="transformOrigin"?$n:ze),Pr(n,a);l&&(Pr(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",aa(n,1),o.uncache=1,cm(i)))}},zl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Fn(t._pt,e,n,0,0,ev);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},oa=[1,0,0,1,0,0],pm={},mm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sm=function(t){var e=ii(t,ze);return mm(e)?oa:e.substr(7).match(Nu).map(Ge)},of=function(t,e){var n=t._gsap||Tr(t),i=t.style,s=sm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?oa:s):(s===oa&&!t.offsetParent&&t!==Xs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Xs.appendChild(t)),s=sm(t),l?i.display=l:Pr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Xs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ef=function(t,e,n,i,s,o){var a=t._gsap,l=s||of(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],g=l[3],p=l[4],M=l[5],A=e.split(" "),v=parseFloat(A[0])||0,S=parseFloat(A[1])||0,b,E,x,T;n?l!==oa&&(E=f*g-m*_)&&(x=v*(g/E)+S*(-_/E)+(_*M-g*p)/E,T=v*(-m/E)+S*(f/E)-(f*M-m*p)/E,v=x,S=T):(b=fm(t),v=b.x+(~A[0].indexOf("%")?v/100*b.width:v),S=b.y+(~(A[1]||A[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&a.smooth?(p=v-c,M=S-h,a.xOffset=d+(p*f+M*_)-p,a.yOffset=u+(p*m+M*g)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[$n]="0px 0px",o&&(Rr(o,a,"xOrigin",c,v),Rr(o,a,"yOrigin",h,S),Rr(o,a,"xOffset",d,a.xOffset),Rr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},aa=function(t,e){var n=t._gsap||new Hu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ii(t,$n)||"0",h,d,u,f,m,_,g,p,M,A,v,S,b,E,x,T,C,D,I,k,L,z,X,G,K,Y,R,j,bt,wt,Ht,Bt;return h=d=u=_=g=p=M=A=v=0,f=m=1,n.svg=!!(t.getCTM&&dm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),E=of(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),ef(t,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,b=n.yOrigin||0,E!==oa&&(D=E[0],I=E[1],k=E[2],L=E[3],h=z=E[4],d=X=E[5],E.length===6?(f=Math.sqrt(D*D+I*I),m=Math.sqrt(L*L+k*k),_=D||I?Ws(I,D)*us:0,M=k||L?Ws(k,L)*us+_:0,M&&(m*=Math.abs(Math.cos(M*qs))),n.svg&&(h-=S-(S*D+b*k),d-=b-(S*I+b*L))):(Bt=E[6],wt=E[7],R=E[8],j=E[9],bt=E[10],Ht=E[11],h=E[12],d=E[13],u=E[14],x=Ws(Bt,bt),g=x*us,x&&(T=Math.cos(-x),C=Math.sin(-x),G=z*T+R*C,K=X*T+j*C,Y=Bt*T+bt*C,R=z*-C+R*T,j=X*-C+j*T,bt=Bt*-C+bt*T,Ht=wt*-C+Ht*T,z=G,X=K,Bt=Y),x=Ws(-k,bt),p=x*us,x&&(T=Math.cos(-x),C=Math.sin(-x),G=D*T-R*C,K=I*T-j*C,Y=k*T-bt*C,Ht=L*C+Ht*T,D=G,I=K,k=Y),x=Ws(I,D),_=x*us,x&&(T=Math.cos(x),C=Math.sin(x),G=D*T+I*C,K=z*T+X*C,I=I*T-D*C,X=X*T-z*C,D=G,z=K),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),f=Ge(Math.sqrt(D*D+I*I+k*k)),m=Ge(Math.sqrt(X*X+Bt*Bt)),x=Ws(z,X),M=Math.abs(x)>2e-4?x*us:0,v=Ht?1/(Ht<0?-Ht:Ht):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!mm(ii(t,ze)),G&&t.setAttribute("transform",G))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ge(f),n.scaleY=Ge(m),n.rotation=Ge(_)+a,n.rotationX=Ge(g)+a,n.rotationY=Ge(p)+a,n.skewX=M+a,n.skewY=A+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[$n]=kl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?iv:um?gm:nv,n.uncache=0,n},kl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ku=function(t,e,n){var i=dn(e);return Ge(parseFloat(e)+parseFloat(Ir(t,"x",n+"px",i)))+i},nv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,gm(t,e)},cs="0deg",sa="0px",hs=") ",gm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,M=n.target,A=n.zOrigin,v="",S=p==="auto"&&t&&t!==1||p===!0;if(A&&(d!==cs||h!==cs)){var b=parseFloat(h)*qs,E=Math.sin(b),x=Math.cos(b),T;b=parseFloat(d)*qs,T=Math.cos(b),o=Ku(M,o,E*T*-A),a=Ku(M,a,-Math.sin(b)*-A),l=Ku(M,l,x*T*-A+A)}g!==sa&&(v+="perspective("+g+hs),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||o!==sa||a!==sa||l!==sa)&&(v+=l!==sa||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hs),c!==cs&&(v+="rotate("+c+hs),h!==cs&&(v+="rotateY("+h+hs),d!==cs&&(v+="rotateX("+d+hs),(u!==cs||f!==cs)&&(v+="skew("+u+", "+f+hs),(m!==1||_!==1)&&(v+="scale("+m+", "+_+hs),M.style[ze]=v||"translate(0, 0)"},iv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,M=n.forceCSS,A=parseFloat(o),v=parseFloat(a),S,b,E,x,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=qs,c*=qs,S=Math.cos(l)*d,b=Math.sin(l)*d,E=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=qs,T=Math.tan(c-h),T=Math.sqrt(1+T*T),E*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),S*=T,b*=T)),S=Ge(S),b=Ge(b),E=Ge(E),x=Ge(x)):(S=d,x=u,b=E=0),(A&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(A=Ir(f,"x",o,"px"),v=Ir(f,"y",a,"px")),(m||_||g||p)&&(A=Ge(A+m-(m*S+_*E)+g),v=Ge(v+_-(m*b+_*x)+p)),(i||s)&&(T=f.getBBox(),A=Ge(A+i/100*T.width),v=Ge(v+s/100*T.height)),T="matrix("+S+","+b+","+E+","+x+","+A+","+v+")",f.setAttribute("transform",T),M&&(f.style[ze]=T)},rv=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?us:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*jp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*jp)%o-~~(c/o)*o)),t._pt=u=new Fn(t._pt,e,n,i,c,kx),u.e=h,u.u="deg",t._props.push(n),u},om=function(t,e){for(var n in e)t[n]=e[n];return t},sv=function(t,e,n){var i=om({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=aa(n,1),Pr(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=aa(n,1),o[ze]=c);for(l in sr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=dn(c),m=dn(h),d=f!==m?Ir(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new Fn(t._pt,a,l,d,u-d,Qu),t._pt.u=m||0,t._props.push(l));om(a,i)};Un("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});zl[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return rr(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var af={name:"css",register:tf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,g,p,M,A,v,S,b,E,x,T;nf||tf(),this.styles=this.styles||hm(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(qn[_]&&Xu(_,e,n,i,t,s)))){if(f=typeof h,m=zl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Hs(h)),m)m(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",nr.lastIndex=0,nr.test(c)||(g=dn(c),p=dn(h),p?g!==p&&(c=Ir(t,_,c,p)+p):g&&(h+=g)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=Hs(c)),dn(c+"")||c==="auto"||(c+=Jn.units[_]||dn(rr(t,_))||""),(c+"").charAt(1)==="="&&(c=rr(t,_))):c=rr(t,_),u=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in Gi&&(_==="autoAlpha"&&(u===1&&rr(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,a.visibility),Rr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in sr,A){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ii(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ii(t,"perspective"),C?t.style.perspective=C:Pr(t,"perspective")}d=parseFloat(h)}if(v||(S=t._gsap,S.renderTransform&&!e.parseTransform||aa(t,e.parseTransform),b=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new Fn(this._pt,a,ze,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new Fn(this._pt,S,"scaleY",S.scaleY,(M?as(S.scaleY,M+d):d)-S.scaleY||0,Qu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push($n,0,a[$n]),h=tv(h),S.svg?ef(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&Rr(this,S,"zOrigin",S.zOrigin,p),Rr(this,a,_,kl(c),kl(h)));continue}else if(_==="svgOrigin"){ef(t,h,1,b,0,this);continue}else if(_ in pm){rv(this,S,_,u,M?as(u,M+h):h);continue}else if(_==="smoothOrigin"){Rr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){sv(this,h,t);continue}}else _ in a||(_=Ys(_)||_);if(A||(d||d===0)&&(u||u===0)&&!zx.test(h)&&_ in a)g=(c+"").substr((u+"").length),d||(d=0),p=dn(h)||(_ in Jn.units?Jn.units[_]:g),g!==p&&(u=Ir(t,_,c,p)),this._pt=new Fn(this._pt,A?S:a,_,u,(M?as(u,M+d):d)-u,!A&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Hx:Qu),this._pt.u=p||0,A&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=Gx):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Vx);else if(_ in a)jx.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Nl(_,h);continue}A||(_ in a?x.push(_,0,a[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),o.push(_)}}E&&$u(this)},render:function(t,e){if(e.tween._time||!rf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:rr,aliases:Gi,getSetter:function(t,e,n){var i=Gi[e];return i&&i.indexOf(",")<0&&(e=i),e in sr&&e!==$n&&(t._gsap.x||rr(t,"x"))?n&&Qp===n?e==="scale"?Yx:qx:(Qp=n||{})&&(e==="scale"?Zx:Jx):t.style&&!Dl(t.style[e])?Wx:~e.indexOf("-")?Xx:Bl(t,e)},core:{_removeProperty:Pr,_getMatrix:of}};bn.utils.checkPrefix=Ys;bn.core.getStyleSaver=hm;(function(r,t,e,n){var i=Un(r+","+t+","+e,function(s){sr[s]=1});Un(t,function(s){Jn.units[s]="deg",pm[s]=1}),Gi[i[13]]=r+","+t,Un(n,function(s){var o=s.split(":");Gi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});bn.registerPlugin(af);var pn=bn.registerPlugin(af)||bn,Qw=pn.core.Tween;function _m(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ov(r,t,e){return t&&_m(r.prototype,t),e&&_m(r,e),r}var mn,Hl,av,ri,Lr,Dr,Js,vm,ds,$s,ym,or,Ai,Sm,Mm=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},bm=1,Zs=[],se=[],Ci=[],ca=Date.now,lf=function(t,e){return e},lv=function(){var t=$s.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,Ci),se=n,Ci=i,lf=function(o,a){return e[o](a)}},lr=function(t,e){return~Ci.indexOf(t)&&Ci[Ci.indexOf(t)+1][e]},ha=function(t){return!!~ym.indexOf(t)},Bn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},On=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Vl="scrollLeft",Gl="scrollTop",cf=function(){return or&&or.isPressed||se.cache++},Wl=function(t,e){var n=function i(s){if(s||s===0){bm&&(ri.history.scrollRestoration="manual");var o=or&&or.isPressed;s=i.v=Math.round(s)||(or&&or.iOS?1:0),t(s),i.cacheID=se.cache,o&&lf("ss",s)}else(e||se.cache!==i.cacheID||lf("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:Vl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wl(function(r){return arguments.length?ri.scrollTo(r,Ke.sc()):ri.pageXOffset||Lr[Vl]||Dr[Vl]||Js[Vl]||0})},Ke={s:Gl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:Wl(function(r){return arguments.length?ri.scrollTo(wn.sc(),r):ri.pageYOffset||Lr[Gl]||Dr[Gl]||Js[Gl]||0})},zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||mn.utils.toArray)(t)[0]||(typeof t=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},cv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ar=function(t,e){var n=e.s,i=e.sc;ha(t)&&(t=Lr.scrollingElement||Dr);var s=se.indexOf(t),o=i===Ke.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||Bn(t,"scroll",cf);var a=se[s+o],l=a||(se[s+o]=Wl(lr(t,n),!0)||(ha(t)?i:Wl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=mn.getProperty(t,"scrollBehavior")==="smooth"),l},Xl=function(t,e,n){var i=t,s=t,o=ca(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var g=ca();_||g-o>l?(s=i,i=m,a=o,o=g):n?i+=m:i=s+(m-s)/(g-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(m){var _=a,g=s,p=ca();return(m||m===0)&&m!==i&&h(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},la=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},xm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},wm=function(){$s=mn.core.globals().ScrollTrigger,$s&&$s.core&&lv()},Tm=function(t){return mn=t||Mm(),!Hl&&mn&&typeof document<"u"&&document.body&&(ri=window,Lr=document,Dr=Lr.documentElement,Js=Lr.body,ym=[ri,Lr,Dr,Js],av=mn.utils.clamp,Sm=mn.core.context||function(){},ds="onpointerenter"in Js?"pointer":"mouse",vm=He.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=He.eventTypes=("ontouchstart"in Dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bm=0},500),Hl=1),$s||wm(),Hl};wn.op=Ke;se.cache=0;var He=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Hl||Tm(mn)||console.warn("Please gsap.registerPlugin(Observer)"),$s||wm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,M=n.onDrag,A=n.onPress,v=n.onRelease,S=n.onRight,b=n.onLeft,E=n.onUp,x=n.onDown,T=n.onChangeX,C=n.onChangeY,D=n.onChange,I=n.onToggleX,k=n.onToggleY,L=n.onHover,z=n.onHoverEnd,X=n.onMove,G=n.ignoreCheck,K=n.isNormalizer,Y=n.onGestureStart,R=n.onGestureEnd,j=n.onWheel,bt=n.onEnable,wt=n.onDisable,Ht=n.onClick,Bt=n.scrollSpeed,Yt=n.capture,J=n.allowClicks,tt=n.lockAxis,pt=n.onLockAxis;this.target=a=zn(a)||Dr,this.vars=n,f&&(f=mn.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,Bt=Bt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(Js).lineHeight)||22);var zt,mt,kt,lt,ut,Tt,Wt,B=this,Kt=0,Qt=0,de=n.passive||!h&&n.passive!==!1,qt=ar(a,wn),pe=ar(a,Ke),F=qt(),Ce=pe(),Xt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",P=ha(a),y=a.ownerDocument||Lr,V=[0,0,0],H=[0,0,0],$=0,ct=function(){return $=ca()},ot=function(rt,Ot){return(B.event=rt)&&f&&cv(rt.target,f)||Ot&&Xt&&rt.pointerType!=="touch"||G&&G(rt,Ot)},Q=function(){B._vx.reset(),B._vy.reset(),mt.pause(),d&&d(B)},et=function(){var rt=B.deltaX=xm(V),Ot=B.deltaY=xm(H),st=Math.abs(rt)>=i,Vt=Math.abs(Ot)>=i;D&&(st||Vt)&&D(B,rt,Ot,V,H),st&&(S&&B.deltaX>0&&S(B),b&&B.deltaX<0&&b(B),T&&T(B),I&&B.deltaX<0!=Kt<0&&I(B),Kt=B.deltaX,V[0]=V[1]=V[2]=0),Vt&&(x&&B.deltaY>0&&x(B),E&&B.deltaY<0&&E(B),C&&C(B),k&&B.deltaY<0!=Qt<0&&k(B),Qt=B.deltaY,H[0]=H[1]=H[2]=0),(lt||kt)&&(X&&X(B),kt&&(g&&kt===1&&g(B),M&&M(B),kt=0),lt=!1),Tt&&!(Tt=!1)&&pt&&pt(B),ut&&(j(B),ut=!1),zt=0},ft=function(rt,Ot,st){V[st]+=rt,H[st]+=Ot,B._vx.update(rt),B._vy.update(Ot),c?zt||(zt=requestAnimationFrame(et)):et()},Rt=function(rt,Ot){tt&&!Wt&&(B.axis=Wt=Math.abs(rt)>Math.abs(Ot)?"x":"y",Tt=!0),Wt!=="y"&&(V[2]+=rt,B._vx.update(rt,!0)),Wt!=="x"&&(H[2]+=Ot,B._vy.update(Ot,!0)),c?zt||(zt=requestAnimationFrame(et)):et()},_t=function(rt){if(!ot(rt,1)){rt=la(rt,h);var Ot=rt.clientX,st=rt.clientY,Vt=Ot-B.x,Pt=st-B.y,jt=B.isDragging;B.x=Ot,B.y=st,(jt||(Vt||Pt)&&(Math.abs(B.startX-Ot)>=s||Math.abs(B.startY-st)>=s))&&(kt||(kt=jt?2:1),jt||(B.isDragging=!0),Rt(Vt,Pt))}},gt=B.onPress=function(at){ot(at,1)||at&&at.button||(B.axis=Wt=null,mt.pause(),B.isPressed=!0,at=la(at),Kt=Qt=0,B.startX=B.x=at.clientX,B.startY=B.y=at.clientY,B._vx.reset(),B._vy.reset(),Bn(K?a:y,Ai[1],_t,de,!0),B.deltaX=B.deltaY=0,A&&A(B))},ht=B.onRelease=function(at){if(!ot(at,1)){On(K?a:y,Ai[1],_t,!0);var rt=!isNaN(B.y-B.startY),Ot=B.isDragging,st=Ot&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Vt=la(at);!st&&rt&&(B._vx.reset(),B._vy.reset(),h&&J&&mn.delayedCall(.08,function(){if(ca()-$>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(y.createEvent){var Pt=y.createEvent("MouseEvents");Pt.initMouseEvent("click",!0,!0,ri,1,Vt.screenX,Vt.screenY,Vt.clientX,Vt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(Pt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,d&&Ot&&!K&&mt.restart(!0),kt&&et(),p&&Ot&&p(B),v&&v(B,st)}},Ut=function(rt){return rt.touches&&rt.touches.length>1&&(B.isGesturing=!0)&&Y(rt,B.isDragging)},Gt=function(){return(B.isGesturing=!1)||R(B)},N=function(rt){if(!ot(rt)){var Ot=qt(),st=pe();ft((Ot-F)*Bt,(st-Ce)*Bt,1),F=Ot,Ce=st,d&&mt.restart(!0)}},dt=function(rt){if(!ot(rt)){rt=la(rt,h),j&&(ut=!0);var Ot=(rt.deltaMode===1?l:rt.deltaMode===2?ri.innerHeight:1)*m;ft(rt.deltaX*Ot,rt.deltaY*Ot,0),d&&!K&&mt.restart(!0)}},nt=function(rt){if(!ot(rt)){var Ot=rt.clientX,st=rt.clientY,Vt=Ot-B.x,Pt=st-B.y;B.x=Ot,B.y=st,lt=!0,d&&mt.restart(!0),(Vt||Pt)&&Rt(Vt,Pt)}},xt=function(rt){B.event=rt,L(B)},yt=function(rt){B.event=rt,z(B)},it=function(rt){return ot(rt)||la(rt,h)&&Ht(B)};mt=B._dc=mn.delayedCall(u||.25,Q).pause(),B.deltaX=B.deltaY=0,B._vx=Xl(0,50,!0),B._vy=Xl(0,50,!0),B.scrollX=qt,B.scrollY=pe,B.isDragging=B.isGesturing=B.isPressed=!1,Sm(this),B.enable=function(at){return B.isEnabled||(Bn(P?y:a,"scroll",cf),o.indexOf("scroll")>=0&&Bn(P?y:a,"scroll",N,de,Yt),o.indexOf("wheel")>=0&&Bn(a,"wheel",dt,de,Yt),(o.indexOf("touch")>=0&&vm||o.indexOf("pointer")>=0)&&(Bn(a,Ai[0],gt,de,Yt),Bn(y,Ai[2],ht),Bn(y,Ai[3],ht),J&&Bn(a,"click",ct,!0,!0),Ht&&Bn(a,"click",it),Y&&Bn(y,"gesturestart",Ut),R&&Bn(y,"gestureend",Gt),L&&Bn(a,ds+"enter",xt),z&&Bn(a,ds+"leave",yt),X&&Bn(a,ds+"move",nt)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=lt=kt=!1,B._vx.reset(),B._vy.reset(),F=qt(),Ce=pe(),at&&at.type&&gt(at),bt&&bt(B)),B},B.disable=function(){B.isEnabled&&(Zs.filter(function(at){return at!==B&&ha(at.target)}).length||On(P?y:a,"scroll",cf),B.isPressed&&(B._vx.reset(),B._vy.reset(),On(K?a:y,Ai[1],_t,!0)),On(P?y:a,"scroll",N,Yt),On(a,"wheel",dt,Yt),On(a,Ai[0],gt,Yt),On(y,Ai[2],ht),On(y,Ai[3],ht),On(a,"click",ct,!0),On(a,"click",it),On(y,"gesturestart",Ut),On(y,"gestureend",Gt),On(a,ds+"enter",xt),On(a,ds+"leave",yt),On(a,ds+"move",nt),B.isEnabled=B.isPressed=B.isDragging=!1,wt&&wt(B))},B.kill=B.revert=function(){B.disable();var at=Zs.indexOf(B);at>=0&&Zs.splice(at,1),or===B&&(or=0)},Zs.push(B),K&&ha(a)&&(or=B),B.enable(_)},ov(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();He.version="3.15.0";He.create=function(r){return new He(r)};He.register=Tm;He.getAll=function(){return Zs.slice()};He.getById=function(r){return Zs.filter(function(t){return t.vars.id===r})[0]};Mm()&&mn.registerPlugin(He);var Ct,to,le,ve,ai,_e,bf,ac,wa,_a,fa,ql,Tn,hc,gf,Vn,Em,Am,eo,Hm,hf,Wm,kn,_f,Xm,qm,Nr,xf,wf,no,Tf,xa,vf,uf,Yl=1,En=Date.now,ff=En(),vi=0,da=0,Cm=function(t,e,n){var i=oi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Rm=function(t,e){return e&&(!oi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},hv=function r(){return da&&requestAnimationFrame(r)},Pm=function(){return hc=1},Im=function(){return hc=0},Hi=function(t){return t},pa=function(t){return Math.round(t*1e5)/1e5||0},Ym=function(){return typeof window<"u"},Zm=function(){return Ct||Ym()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},vs=function(t){return!!~bf.indexOf(t)},Jm=function(t){return(t==="Height"?Tf:le["inner"+t])||ai["client"+t]||_e["client"+t]},$m=function(t){return lr(t,"getBoundingClientRect")||(vs(t)?function(){return oc.width=le.innerWidth,oc.height=Tf,oc}:function(){return cr(t)})},uv=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Jm(s):t["client"+s])||0}},fv=function(t,e){return!e||~Ci.indexOf(t)?$m(t):function(){return oc}},Wi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=lr(t,n))?o()-$m(t)()[s]:vs(t)?(ai[n]||_e[n])-Jm(i):t[n]-t["offset"+i])},Zl=function(t,e){for(var n=0;n<eo.length;n+=3)(!e||~e.indexOf(eo[n+1]))&&t(eo[n],eo[n+1],eo[n+2])},oi=function(t){return typeof t=="string"},An=function(t){return typeof t=="function"},ma=function(t){return typeof t=="number"},ps=function(t){return typeof t=="object"},ua=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ks=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Qs=Math.abs,Km="left",Qm="top",Ef="right",Af="bottom",gs="width",_s="height",va="Right",ya="Left",Sa="Top",Ma="Bottom",Qe="padding",_i="margin",ro="Width",Cf="Height",nn="px",xi=function(t){return le.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},dv=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Lm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},cr=function(t,e){var n=e&&xi(t)[gf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},lc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},jm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},pv=function(t){return function(e){return Ct.utils.snap(jm(t),e)}},Rf=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},mv=function(t){return function(e,n){return Rf(jm(t))(e,n.direction)}},Jl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},$l=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Dm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Kl={toggleActions:"play",anticipatePin:0},cc={top:0,left:0,center:.5,bottom:1,right:1},nc=function(t,e){if(oi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in cc?cc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ql=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,m=ve.createElement("div"),_=vs(n)||lr(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,p=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,A=M?c:h,v="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(v+=(i===Ke?Ef:Af)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=M,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=v,m.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],ic(m,0,i,M),m},ic=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ro]=1,s["border"+a+ro]=0,s[n.p]=e+"px",Ct.set(t,s)},oe=[],yf={},Ta,Nm=function(){return En()-vi>34&&(Ta||(Ta=requestAnimationFrame(hr)))},js=function(){(!kn||!kn.isPressed||kn.startX>_e.clientWidth)&&(se.cache++,kn?Ta||(Ta=requestAnimationFrame(hr)):hr(),vi||Ss("scrollStart"),vi=En())},df=function(){qm=le.innerWidth,Xm=le.innerHeight},ga=function(t){se.cache++,(t===!0||!Tn&&!Wm&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!_f||qm!==le.innerWidth||Math.abs(le.innerHeight-Xm)>le.innerHeight*.25))&&ac.restart(!0)},ys={},gv=[],tg=function r(){return ln(ee,"scrollEnd",r)||ms(!0)},Ss=function(t){return ys[t]&&ys[t].map(function(e){return e()})||gv},si=[],eg=function(t){for(var e=0;e<si.length;e+=5)(!t||si[e+4]&&si[e+4].query===t)&&(si[e].style.cssText=si[e+1],si[e].getBBox&&si[e].setAttribute("transform",si[e+2]||""),si[e+3].uncache=1)},ng=function(){return se.forEach(function(t){return An(t)&&++t.cacheID&&(t.rec=t())})},Pf=function(t,e){var n;for(Vn=0;Vn<oe.length;Vn++)n=oe[Vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));xa=!0,e&&eg(e),e||Ss("revert")},ig=function(t,e){se.cache++,(e||!Gn)&&se.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),oi(t)&&(le.history.scrollRestoration=wf=t)},Gn,xs=0,Um,_v=function(){if(Um!==xs){var t=Um=xs;requestAnimationFrame(function(){return t===xs&&ms(!0)})}},rg=function(){_e.appendChild(no),Tf=!kn&&no.offsetHeight||le.innerHeight,_e.removeChild(no)},Fm=function(t){return wa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ms=function(t,e){if(ai=ve.documentElement,_e=ve.body,bf=[le,ve,ai,_e],vi&&!t&&!xa){cn(ee,"scrollEnd",tg);return}rg(),Gn=ee.isRefreshing=!0,xa||ng();var n=Ss("refreshInit");Hm&&ee.sort(),e||Pf(),se.forEach(function(i){An(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),oe.slice(0).forEach(function(i){return i.refresh()}),xa=!1,oe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),vf=1,Fm(!0),oe.forEach(function(i){var s=Wi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Fm(!1),vf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){An(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ig(wf,1),ac.pause(),xs++,Gn=2,hr(2),oe.forEach(function(i){return An(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=ee.isRefreshing=!1,Ss("refresh")},Sf=0,rc=1,ba,hr=function(t){if(t===2||!Gn&&!xa){ee.isUpdating=!0,ba&&ba.update(0);var e=oe.length,n=En(),i=n-ff>=50,s=e&&oe[0].scroll();if(rc=Sf>s?-1:1,Gn||(Sf=s),i&&(vi&&!hc&&n-vi>200&&(vi=0,Ss("scrollEnd")),fa=ff,ff=n),rc<0){for(Vn=e;Vn-- >0;)oe[Vn]&&oe[Vn].update(0,i);rc=1}else for(Vn=0;Vn<e;Vn++)oe[Vn]&&oe[Vn].update(0,i);ee.isUpdating=!1}Ta=0},Mf=[Km,Qm,Af,Ef,_i+Ma,_i+va,_i+Sa,_i+ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],sc=Mf.concat([gs,_s,"boxSizing","max"+ro,"max"+Cf,"position",_i,Qe,Qe+Sa,Qe+va,Qe+Ma,Qe+ya]),xv=function(t,e,n){io(n);var i=t._gsap;if(i.spacerIsNative)io(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},pf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Mf.length,o=e.style,a=t.style,l;s--;)l=Mf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Af]=a[Ef]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[gs]=lc(t,wn)+nn,o[_s]=lc(t,Ke)+nn,o[Qe]=a[_i]=a[Qm]=a[Km]="0",io(i),a[gs]=a["max"+ro]=n[gs],a[_s]=a["max"+Cf]=n[_s],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},vv=/([A-Z])/g,io=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(vv,"-$1").toLowerCase())}},jl=function(t){for(var e=sc.length,n=t.style,i=[],s=0;s<e;s++)i.push(sc[s],n[sc[s]]);return i.t=t,i},yv=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},oc={left:0,top:0},Om=function(t,e,n,i,s,o,a,l,c,h,d,u,f,m){An(t)&&(t=t(l)),oi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?nc("0"+t.substr(3),n):0));var _=f?f.time():0,g,p,M;if(f&&f.seek(0),isNaN(t)||(t=+t),ma(t))f&&(t=Ct.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&ic(a,n,i,!0);else{An(e)&&(e=e(l));var A=(t||"0").split(" "),v,S,b,E;M=zn(e,l)||_e,v=cr(M)||{},(!v||!v.left&&!v.top)&&xi(M).display==="none"&&(E=M.style.display,M.style.display="block",v=cr(M),E?M.style.display=E:M.style.removeProperty("display")),S=nc(A[0],v[i.d]),b=nc(A[1]||"0",n),t=v[i.p]-c[i.p]-h+S+s-b,a&&ic(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var x=t+n,T=o._isStart;g="scroll"+i.d2,ic(o,x,i,T&&x>20||!T&&(d?Math.max(_e[g],ai[g]):o.parentNode[g])<=x+1),d&&(c=cr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return f&&M&&(g=cr(M),f.seek(u),p=cr(M),f._caScrollDist=g[i.p]-p[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Sv=/(webkit|moz|length|cssText|inset)/i,Bm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=xi(t);for(o in a)!+o&&!Sv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},sg=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},tc=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},zm=function(t,e){var n=ar(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=sg(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){se.cache++,o.tween&&hr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ct.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),ee.isTouch&&cn(t,"touchmove",n.wheelHandler),s},ee=(function(){function r(e,n){to||r.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!da){this.update=this.refresh=this.kill=Hi;return}n=Lm(oi(n)||ma(n)||n.nodeType?{trigger:n}:n,Kl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,A=s.once,v=s.snap,S=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Ke,D=!d&&d!==0,I=zn(n.scroller||le),k=Ct.core.getCache(I),L=vs(I),z=("pinType"in n?n.pinType:lr(I,"pinType")||L&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:Kl.markers,Y=L?0:parseFloat(xi(I)["border"+C.p2+ro])||0,R=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(R)},bt=uv(I,L,C),wt=fv(I,L),Ht=0,Bt=0,Yt=0,J=ar(I,C),tt,pt,zt,mt,kt,lt,ut,Tt,Wt,B,Kt,Qt,de,qt,pe,F,Ce,Xt,P,y,V,H,$,ct,ot,Q,et,ft,Rt,_t,gt,ht,Ut,Gt,N,dt,nt,xt,yt;if(R._startClamp=R._endClamp=!1,R._dir=C,g*=45,R.scroller=I,R.scroll=E?E.time.bind(E):J,mt=J(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Hm=1,n.refreshPriority===-9999&&(ba=R)),k.tweenScroll=k.tweenScroll||{top:zm(I,Ke),left:zm(I,wn)},R.tweenTo=tt=k.tweenScroll[C.p],R.scrubDuration=function(st){Ut=ma(st)&&st,Ut?ht?ht.duration(st):ht=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ut,paused:!0,onComplete:function(){return p&&p(R)}}):(ht&&ht.progress(1).kill(),ht=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),_t=0,l||(l=i.vars.id)),v&&((!ps(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in _e.style&&Ct.set(L?[_e,ai]:I,{scrollBehavior:"auto"}),se.forEach(function(st){return An(st)&&st.target===(L?ve.scrollingElement||ai:I)&&(st.smooth=!1)}),zt=An(v.snapTo)?v.snapTo:v.snapTo==="labels"?pv(i):v.snapTo==="labelsDirectional"?mv(i):v.directional!==!1?function(st,Vt){return Rf(v.snapTo)(st,En()-Bt<500?0:Vt.direction)}:Ct.utils.snap(v.snapTo),Gt=v.duration||{min:.1,max:2},Gt=ps(Gt)?_a(Gt.min,Gt.max):_a(Gt,Gt),N=Ct.delayedCall(v.delay||Ut/2||.1,function(){var st=J(),Vt=En()-Bt<500,Pt=tt.tween;if((Vt||Math.abs(R.getVelocity())<10)&&!Pt&&!hc&&Ht!==st){var jt=(st-lt)/qt,Ze=i&&!D?i.totalProgress():jt,ae=Vt?0:(Ze-gt)/(En()-fa)*1e3||0,Ie=Ct.utils.clamp(-jt,1-jt,Qs(ae/2)*ae/.185),on=jt+(v.inertia===!1?0:Ie),Le,Me,ue=v,Ln=ue.onStart,Re=ue.onInterrupt,vn=ue.onComplete;if(Le=zt(on,R),ma(Le)||(Le=on),Me=Math.max(0,Math.round(lt+Le*qt)),st<=ut&&st>=lt&&Me!==st){if(Pt&&!Pt._initted&&Pt.data<=Qs(Me-st))return;v.inertia===!1&&(Ie=Le-jt),tt(Me,{duration:Gt(Qs(Math.max(Qs(on-Ze),Qs(Le-Ze))*.185/ae/.05||0)),ease:v.ease||"power3",data:Qs(Me-st),onInterrupt:function(){return N.restart(!0)&&Re&&Ks(R,Re)},onComplete:function(){R.update(),Ht=J(),i&&!D&&(ht?ht.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),_t=gt=i&&!D?i.totalProgress():R.progress,M&&M(R),vn&&Ks(R,vn)}},st,Ie*qt,Me-st-Ie*qt),Ln&&Ks(R,Ln,tt.tween)}}else R.isActive&&Ht!==st&&N.restart(!0)}).pause()),l&&(yf[l]=R),u=R.trigger=zn(u||f!==!0&&f),yt=u&&u._gsap&&u._gsap.stRevert,yt&&(yt=yt(R)),f=f===!0?u:zn(f),oi(a)&&(a={targets:u,className:a}),f&&(m===!1||m===_i||(m=!m&&f.parentNode&&f.parentNode.style&&xi(f.parentNode).display==="flex"?!1:Qe),R.pin=f,pt=Ct.core.getCache(f),pt.spacer?pe=pt.pinState:(b&&(b=zn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),pt.spacerIsNative=!!b,b&&(pt.spacerState=jl(b))),pt.spacer=Xt=b||ve.createElement("div"),Xt.classList.add("pin-spacer"),l&&Xt.classList.add("pin-spacer-"+l),pt.pinState=pe=jl(f)),n.force3D!==!1&&Ct.set(f,{force3D:!0}),R.spacer=Xt=pt.spacer,Rt=xi(f),ct=Rt[m+C.os2],y=Ct.getProperty(f),V=Ct.quickSetter(f,C.a,nn),pf(f,Xt,Rt),Ce=jl(f)),K){Qt=ps(K)?Lm(K,Dm):Dm,B=Ql("scroller-start",l,I,C,Qt,0),Kt=Ql("scroller-end",l,I,C,Qt,0,B),P=B["offset"+C.op.d2];var it=zn(lr(I,"content")||I);Tt=this.markerStart=Ql("start",l,it,C,Qt,P,0,E),Wt=this.markerEnd=Ql("end",l,it,C,Qt,P,0,E),E&&(xt=Ct.quickSetter([Tt,Wt],C.a,nn)),!z&&!(Ci.length&&lr(I,"fixedMarkers")===!0)&&(dv(L?_e:I),Ct.set([B,Kt],{force3D:!0}),Q=Ct.quickSetter(B,C.a,nn),ft=Ct.quickSetter(Kt,C.a,nn))}if(E){var at=E.vars.onUpdate,rt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(E,rt||[])})}if(R.previous=function(){return oe[oe.indexOf(R)-1]},R.next=function(){return oe[oe.indexOf(R)+1]},R.revert=function(st,Vt){if(!Vt)return R.kill(!0);var Pt=st!==!1||!R.enabled,jt=Tn;Pt!==R.isReverted&&(Pt&&(dt=Math.max(J(),R.scroll.rec||0),Yt=R.progress,nt=i&&i.progress()),Tt&&[Tt,Wt,B,Kt].forEach(function(Ze){return Ze.style.display=Pt?"none":"block"}),Pt&&(Tn=R,R.update(Pt)),f&&(!S||!R.isActive)&&(Pt?xv(f,Xt,pe):pf(f,Xt,xi(f),ot)),Pt||R.update(Pt),Tn=jt,R.isReverted=Pt)},R.refresh=function(st,Vt,Pt,jt){if(!((Tn||!R.enabled)&&!Vt)){if(f&&st&&vi){cn(r,"scrollEnd",tg);return}!Gn&&j&&j(R),Tn=R,tt.tween&&!Pt&&(tt.tween.kill(),tt.tween=0),ht&&ht.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(vt){return vt.vars.immediateRender&&vt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ze=bt(),ae=wt(),Ie=E?E.duration():Wi(I,C),on=qt<=.01||!qt,Le=0,Me=jt||0,ue=ps(Pt)?Pt.end:n.end,Ln=n.endTrigger||u,Re=ps(Pt)?Pt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),vn=R.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,R),Dn=u&&Math.max(0,oe.indexOf(R))||0,Je=Dn,ke,tn,Oi,Ns,an,We,fi,Us,w,U,Z,W,q;for(K&&ps(Pt)&&(W=Ct.getProperty(B,C.p),q=Ct.getProperty(Kt,C.p));Je-- >0;)We=oe[Je],We.end||We.refresh(0,1)||(Tn=R),fi=We.pin,fi&&(fi===u||fi===f||fi===vn)&&!We.isReverted&&(U||(U=[]),U.unshift(We),We.revert(!0,!0)),We!==oe[Je]&&(Dn--,Je--);for(An(Re)&&(Re=Re(R)),Re=Cm(Re,"start",R),lt=Om(Re,u,Ze,C,J(),Tt,B,R,ae,Y,z,Ie,E,R._startClamp&&"_startClamp")||(f?-.001:0),An(ue)&&(ue=ue(R)),oi(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(oi(Re)?Re.split(" ")[0]:"")+ue:(Le=nc(ue.substr(2),Ze),ue=oi(Re)?Re:(E?Ct.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,lt):lt)+Le,Ln=u)),ue=Cm(ue,"end",R),ut=Math.max(lt,Om(ue||(Ln?"100% 0":Ie),Ln,Ze,C,J()+Le,Wt,Kt,R,ae,Y,z,Ie,E,R._endClamp&&"_endClamp"))||-.001,Le=0,Je=Dn;Je--;)We=oe[Je]||{},fi=We.pin,fi&&We.start-We._pinPush<=lt&&!E&&We.end>0&&(ke=We.end-(R._startClamp?Math.max(0,We.start):We.start),(fi===u&&We.start-We._pinPush<lt||fi===vn)&&isNaN(Re)&&(Le+=ke*(1-We.progress)),fi===f&&(Me+=ke));if(lt+=Le,ut+=Le,R._startClamp&&(R._startClamp+=Le),R._endClamp&&!Gn&&(R._endClamp=ut||-.001,ut=Math.min(ut,Wi(I,C))),qt=ut-lt||(lt-=.01)&&.001,on&&(Yt=Ct.utils.clamp(0,1,Ct.utils.normalize(lt,ut,dt))),R._pinPush=Me,Tt&&Le&&(ke={},ke[C.a]="+="+Le,vn&&(ke[C.p]="-="+J()),Ct.set([Tt,Wt],ke)),f&&!(vf&&R.end>=Wi(I,C)))ke=xi(f),Ns=C===Ke,Oi=J(),H=parseFloat(y(C.a))+Me,!Ie&&ut>1&&(Z=(L?ve.scrollingElement||ai:I).style,Z={style:Z,value:Z["overflow"+C.a.toUpperCase()]},L&&xi(_e)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+C.a.toUpperCase()]="scroll")),pf(f,Xt,ke),Ce=jl(f),tn=cr(f,!0),Us=z&&ar(I,Ns?wn:Ke)(),m?(ot=[m+C.os2,qt+Me+nn],ot.t=Xt,Je=m===Qe?lc(f,C)+qt+Me:0,Je&&(ot.push(C.d,Je+nn),Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Je+nn)),io(ot),vn&&oe.forEach(function(vt){vt.pin===vn&&vt.vars.pinSpacing!==!1&&(vt._subPinOffset=!0)}),z&&J(dt)):(Je=lc(f,C),Je&&Xt.style.flexBasis!=="auto"&&(Xt.style.flexBasis=Je+nn)),z&&(an={top:tn.top+(Ns?Oi-lt:Us)+nn,left:tn.left+(Ns?Us:Oi-lt)+nn,boxSizing:"border-box",position:"fixed"},an[gs]=an["max"+ro]=Math.ceil(tn.width)+nn,an[_s]=an["max"+Cf]=Math.ceil(tn.height)+nn,an[_i]=an[_i+Sa]=an[_i+va]=an[_i+Ma]=an[_i+ya]="0",an[Qe]=ke[Qe],an[Qe+Sa]=ke[Qe+Sa],an[Qe+va]=ke[Qe+va],an[Qe+Ma]=ke[Qe+Ma],an[Qe+ya]=ke[Qe+ya],F=yv(pe,an,S),Gn&&J(0)),i?(w=i._initted,hf(1),i.render(i.duration(),!0,!0),$=y(C.a)-H+qt+Me,et=Math.abs(qt-$)>1,z&&et&&F.splice(F.length-2,2),i.render(0,!0,!0),w||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),hf(0)):$=qt,Z&&(Z.value?Z.style["overflow"+C.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+C.a));else if(u&&J()&&!E)for(tn=u.parentNode;tn&&tn!==_e;)tn._pinOffset&&(lt-=tn._pinOffset,ut-=tn._pinOffset),tn=tn.parentNode;U&&U.forEach(function(vt){return vt.revert(!1,!0)}),R.start=lt,R.end=ut,mt=kt=Gn?dt:J(),!E&&!Gn&&(mt<dt&&J(dt),R.scroll.rec=0),R.revert(!1,!0),Bt=En(),N&&(Ht=-1,N.restart(!0)),Tn=0,i&&D&&(i._initted||nt)&&i.progress()!==nt&&i.progress(nt||0,!0).render(i.time(),!0,!0),(on||Yt!==R.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||Yt||i.vars.immediateRender!==!1)&&i.totalProgress(E&&lt<-.001&&!Yt?Ct.utils.normalize(lt,ut,0):Yt,!0),R.progress=on||(mt-lt)/qt===Yt?0:Yt),f&&m&&(Xt._pinOffset=Math.round(R.progress*$)),ht&&ht.invalidate(),isNaN(W)||(W-=Ct.getProperty(B,C.p),q-=Ct.getProperty(Kt,C.p),tc(B,C,W),tc(Tt,C,W-(jt||0)),tc(Kt,C,q),tc(Wt,C,q-(jt||0))),on&&!Gn&&R.update(),h&&!Gn&&!de&&(de=!0,h(R),de=!1)}},R.getVelocity=function(){return(J()-kt)/(En()-fa)*1e3||0},R.endAnimation=function(){ua(R.callbackAnimation),i&&(ht?ht.progress(1):i.paused()?D||ua(i,R.direction<0,1):ua(i,i.reversed()))},R.labelToScroll=function(st){return i&&i.labels&&(lt||R.refresh()||lt)+i.labels[st]/i.duration()*qt||0},R.getTrailing=function(st){var Vt=oe.indexOf(R),Pt=R.direction>0?oe.slice(0,Vt).reverse():oe.slice(Vt+1);return(oi(st)?Pt.filter(function(jt){return jt.vars.preventOverlaps===st}):Pt).filter(function(jt){return R.direction>0?jt.end<=lt:jt.start>=ut})},R.update=function(st,Vt,Pt){if(!(E&&!Pt&&!st)){var jt=Gn===!0?dt:R.scroll(),Ze=st?0:(jt-lt)/qt,ae=Ze<0?0:Ze>1?1:Ze||0,Ie=R.progress,on,Le,Me,ue,Ln,Re,vn,Dn;if(Vt&&(kt=mt,mt=E?J():jt,v&&(gt=_t,_t=i&&!D?i.totalProgress():ae)),g&&f&&!Tn&&!Yl&&vi&&(!ae&&lt<jt+(jt-kt)/(En()-fa)*g?ae=1e-4:ae===1&&ut>jt+(jt-kt)/(En()-fa)*g&&(ae=.9999)),ae!==Ie&&R.enabled){if(on=R.isActive=!!ae&&ae<1,Le=!!Ie&&Ie<1,Re=on!==Le,Ln=Re||!!ae!=!!Ie,R.direction=ae>Ie?1:-1,R.progress=ae,Ln&&!Tn&&(Me=ae&&!Ie?0:ae===1?1:Ie===1?2:3,D&&(ue=!Re&&G[Me+1]!=="none"&&G[Me+1]||G[Me],Dn=i&&(ue==="complete"||ue==="reset"||ue in i))),T&&(Re||Dn)&&(Dn||d||!i)&&(An(T)?T(R):R.getTrailing(T).forEach(function(Oi){return Oi.endAnimation()})),D||(ht&&!Tn&&!Yl?(ht._dp._time-ht._start!==ht._time&&ht.render(ht._dp._time-ht._start),ht.resetTo?ht.resetTo("totalProgress",ae,i._tTime/i._tDur):(ht.vars.totalProgress=ae,ht.invalidate().restart())):i&&i.totalProgress(ae,!!(Tn&&(Bt||st)))),f){if(st&&m&&(Xt.style[m+C.os2]=ct),!z)V(pa(H+$*ae));else if(Ln){if(vn=!st&&ae>Ie&&ut+1>jt&&jt+1>=Wi(I,C),S)if(!st&&(on||vn)){var Je=cr(f,!0),ke=jt-lt;Bm(f,_e,Je.top+(C===Ke?ke:0)+nn,Je.left+(C===Ke?0:ke)+nn)}else Bm(f,Xt);io(on||vn?F:Ce),et&&ae<1&&on||V(H+(ae===1&&!vn?$:0))}}v&&!tt.tween&&!Tn&&!Yl&&N.restart(!0),a&&(Re||A&&ae&&(ae<1||!uf))&&wa(a.targets).forEach(function(Oi){return Oi.classList[on||A?"add":"remove"](a.className)}),o&&!D&&!st&&o(R),Ln&&!Tn?(D&&(Dn&&(ue==="complete"?i.pause().totalProgress(1):ue==="reset"?i.restart(!0).pause():ue==="restart"?i.restart(!0):i[ue]()),o&&o(R)),(Re||!uf)&&(c&&Re&&Ks(R,c),X[Me]&&Ks(R,X[Me]),A&&(ae===1?R.kill(!1,1):X[Me]=0),Re||(Me=ae===1?1:3,X[Me]&&Ks(R,X[Me]))),x&&!on&&Math.abs(R.getVelocity())>(ma(x)?x:2500)&&(ua(R.callbackAnimation),ht?ht.progress(1):ua(i,ue==="reverse"?1:!ae,1))):D&&o&&!Tn&&o(R)}if(ft){var tn=E?jt/E.duration()*(E._caScrollDist||0):jt;Q(tn+(B._isFlipped?1:0)),ft(tn)}xt&&xt(-jt/E.duration()*(E._caScrollDist||0))}},R.enable=function(st,Vt){R.enabled||(R.enabled=!0,cn(I,"resize",ga),L||cn(I,"scroll",js),j&&cn(r,"refreshInit",j),st!==!1&&(R.progress=Yt=0,mt=kt=Ht=J()),Vt!==!1&&R.refresh())},R.getTween=function(st){return st&&tt?tt.tween:ht},R.setPositions=function(st,Vt,Pt,jt){if(E){var Ze=E.scrollTrigger,ae=E.duration(),Ie=Ze.end-Ze.start;st=Ze.start+Ie*st/ae,Vt=Ze.start+Ie*Vt/ae}R.refresh(!1,!1,{start:Rm(st,Pt&&!!R._startClamp),end:Rm(Vt,Pt&&!!R._endClamp)},jt),R.update()},R.adjustPinSpacing=function(st){if(ot&&st){var Vt=ot.indexOf(C.d)+1;ot[Vt]=parseFloat(ot[Vt])+st+nn,ot[1]=parseFloat(ot[1])+st+nn,io(ot)}},R.disable=function(st,Vt){if(st!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Vt||ht&&ht.pause(),dt=0,pt&&(pt.uncache=1),j&&ln(r,"refreshInit",j),N&&(N.pause(),tt.tween&&tt.tween.kill()&&(tt.tween=0)),!L)){for(var Pt=oe.length;Pt--;)if(oe[Pt].scroller===I&&oe[Pt]!==R)return;ln(I,"resize",ga),L||ln(I,"scroll",js)}},R.kill=function(st,Vt){R.disable(st,Vt),ht&&!Vt&&ht.kill(),l&&delete yf[l];var Pt=oe.indexOf(R);Pt>=0&&oe.splice(Pt,1),Pt===Vn&&rc>0&&Vn--,Pt=0,oe.forEach(function(jt){return jt.scroller===R.scroller&&(Pt=1)}),Pt||Gn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),Vt||i.kill()),Tt&&[Tt,Wt,B,Kt].forEach(function(jt){return jt.parentNode&&jt.parentNode.removeChild(jt)}),ba===R&&(ba=0),f&&(pt&&(pt.uncache=1),Pt=0,oe.forEach(function(jt){return jt.pin===f&&Pt++}),Pt||(pt.spacer=0)),n.onKill&&n.onKill(R)},oe.push(R),R.enable(!1,!1),yt&&yt(R),i&&i.add&&!qt){var Ot=R.update;R.update=function(){R.update=Ot,se.cache++,lt||ut||R.refresh()},Ct.delayedCall(.01,R.update),qt=.01,lt=ut=0}else R.refresh();f&&_v()},r.register=function(n){return to||(Ct=n||Zm(),Ym()&&window.document&&r.enable(),to=da),to},r.defaults=function(n){if(n)for(var i in n)Kl[i]=n[i];return Kl},r.disable=function(n,i){da=0,oe.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(le,"wheel",js),ln(ve,"scroll",js),clearInterval(ql),ln(ve,"touchcancel",Hi),ln(_e,"touchstart",Hi),Jl(ln,ve,"pointerdown,touchstart,mousedown",Pm),Jl(ln,ve,"pointerup,touchend,mouseup",Im),ac.kill(),Zl(ln);for(var s=0;s<se.length;s+=3)$l(ln,se[s],se[s+1]),$l(ln,se[s],se[s+2])},r.enable=function(){if(le=window,ve=document,ai=ve.documentElement,_e=ve.body,Ct){if(wa=Ct.utils.toArray,_a=Ct.utils.clamp,xf=Ct.core.context||Hi,hf=Ct.core.suppressOverwrites||Hi,wf=le.history.scrollRestoration||"auto",Sf=le.pageYOffset||0,Ct.core.globals("ScrollTrigger",r),_e){da=1,no=document.createElement("div"),no.style.height="100vh",no.style.position="absolute",rg(),hv(),He.register(Ct),r.isTouch=He.isTouch,Nr=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_f=He.isTouch===1,cn(le,"wheel",js),bf=[le,ve,ai,_e],Ct.matchMedia?(r.matchMedia=function(h){var d=Ct.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ct.addEventListener("matchMediaInit",function(){ng(),Pf()}),Ct.addEventListener("matchMediaRevert",function(){return eg()}),Ct.addEventListener("matchMedia",function(){ms(0,1),Ss("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return df(),df})):console.warn("Requires GSAP 3.11.0 or later"),df(),cn(ve,"scroll",js);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,o=Ct.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=cr(_e),Ke.m=Math.round(a.top+Ke.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),ql=setInterval(Nm,250),Ct.delayedCall(.5,function(){return Yl=0}),cn(ve,"touchcancel",Hi),cn(_e,"touchstart",Hi),Jl(cn,ve,"pointerdown,touchstart,mousedown",Pm),Jl(cn,ve,"pointerup,touchend,mouseup",Im),gf=Ct.utils.checkPrefix("transform"),sc.push(gf),to=En(),ac=Ct.delayedCall(.2,ms).pause(),eo=[ve,"visibilitychange",function(){var h=le.innerWidth,d=le.innerHeight;ve.hidden?(Em=h,Am=d):(Em!==h||Am!==d)&&ga()},ve,"DOMContentLoaded",ms,le,"load",ms,le,"resize",ga],Zl(cn),oe.forEach(function(h){return h.enable(0,1)}),l=0;l<se.length;l+=3)$l(ln,se[l],se[l+1]),$l(ln,se[l],se[l+2])}else if(ve){var c=function h(){r.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(uf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ql)||(ql=i)&&setInterval(Nm,i),"ignoreMobileResize"in n&&(_f=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Zl(ln)||Zl(cn,n.autoRefreshEvents||"none"),Wm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),o=se.indexOf(s),a=vs(s);~o&&se.splice(o,a?6:2),i&&(a?Ci.unshift(le,i,_e,i,ai,i):Ci.unshift(s,i))},r.clearMatchMedia=function(n){oe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(oi(n)?zn(n):n).getBoundingClientRect(),a=o[s?gs:_s]*i||0;return s?o.right-a>0&&o.left+a<le.innerWidth:o.bottom-a>0&&o.top+a<le.innerHeight},r.positionInViewport=function(n,i,s){oi(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[s?gs:_s],l=i==null?a/2:i in cc?cc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/le.innerWidth:(o.top+l)/le.innerHeight},r.killAll=function(n){if(oe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ys.killAll||[];ys={},i.forEach(function(s){return s()})}},r})();ee.version="3.15.0";ee.saveStyles=function(r){return r?wa(r).forEach(function(t){if(t&&t.style){var e=si.indexOf(t);e>=0&&si.splice(e,5),si.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),xf())}}):si};ee.revert=function(r,t){return Pf(!r,t)};ee.create=function(r,t){return new ee(r,t)};ee.refresh=function(r){return r?ga(!0):(to||ee.register())&&ms(!0)};ee.update=function(r){return++se.cache&&hr(r===!0?2:0)};ee.clearScrollMemory=ig;ee.maxScroll=function(r,t){return Wi(r,t?wn:Ke)};ee.getScrollFunc=function(r,t){return ar(zn(r),t?wn:Ke)};ee.getById=function(r){return yf[r]};ee.getAll=function(){return oe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ee.isScrolling=function(){return!!vi};ee.snapDirectional=Rf;ee.addEventListener=function(r,t){var e=ys[r]||(ys[r]=[]);~e.indexOf(t)||e.push(t)};ee.removeEventListener=function(r,t){var e=ys[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ee.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ct.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&An(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return An(s)&&(s=s(),cn(ee,"refresh",function(){return s=t.batchMax()})),wa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ee.create(c))}),e};var km=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},mf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===ai&&r(_e,e)},ec={auto:1,scroll:1},Mv=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ct.core.getCache(s),a=En(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ec[(l=xi(s)).overflowY]||ec[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!vs(s)&&(ec[(l=xi(s)).overflowY]||ec[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},og=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Mv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(ve,He.eventTypes[0],Gm,!1,!0)},onDisable:function(){return ln(ve,He.eventTypes[0],Gm,!0)}})},bv=/(input|label|select|textarea)/i,Vm,Gm=function(t){var e=bv.test(t.target.tagName);(e||Vm)&&(t._gsapAllow=!0,Vm=e)},wv=function(t){ps(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=zn(t.target)||ai,h=Ct.core.globals().ScrollSmoother,d=h&&h.get(),u=Nr&&(t.content&&zn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ar(c,Ke),m=ar(c,wn),_=1,g=(He.isTouch&&le.visualViewport?le.visualViewport.scale*le.visualViewport.width:le.outerWidth)/le.innerWidth,p=0,M=An(i)?function(){return i(a)}:function(){return i||2.8},A,v,S=og(c,t.type,!0,s),b=function(){return v=!1},E=Hi,x=Hi,T=function(){l=Wi(c,Ke),x=_a(Nr?1:0,l),n&&(E=_a(0,Wi(c,wn))),A=xs},C=function(){u._gsap.y=pa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(b);var K=pa(a.deltaY/2),Y=x(f.v-K);if(u&&Y!==f.v+f.offset){f.offset=Y-f.v;var R=pa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=se.cache,hr()}return!0}f.offset&&C(),v=!0},I,k,L,z,X=function(){T(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&Ct.set(u,{y:"+=0"}),t.ignoreCheck=function(G){return Nr&&G.type==="touchmove"&&D(G)||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},t.onPress=function(){v=!1;var G=_;_=pa((le.visualViewport&&le.visualViewport.scale||1)/g),I.pause(),G!==_&&mf(c,_>1.01?!0:n?!1:"x"),k=m(),L=f(),T(),A=xs},t.onRelease=t.onGestureStart=function(G,K){if(f.offset&&C(),!K)z.restart(!0);else{se.cache++;var Y=M(),R,j;n&&(R=m(),j=R+Y*.05*-G.velocityX/.227,Y*=km(m,R,j,Wi(c,wn)),I.vars.scrollX=E(j)),R=f(),j=R+Y*.05*-G.velocityY/.227,Y*=km(f,R,j,Wi(c,Ke)),I.vars.scrollY=x(j),I.invalidate().duration(Y).play(.01),(Nr&&I.vars.scrollY>=l||R>=l-1)&&Ct.to({},{onUpdate:X,duration:Y})}o&&o(G)},t.onWheel=function(){I._ts&&I.pause(),En()-p>1e3&&(A=0,p=En())},t.onChange=function(G,K,Y,R,j){if(xs!==A&&T(),K&&n&&m(E(R[2]===K?k+(G.startX-G.x):m()+K-R[1])),Y){f.offset&&C();var bt=j[2]===Y,wt=bt?L+G.startY-G.y:f()+Y-j[1],Ht=x(wt);bt&&wt!==Ht&&(L+=Ht-wt),f(Ht)}(Y||K)&&hr()},t.onEnable=function(){mf(c,n?!1:"x"),ee.addEventListener("refresh",X),cn(le,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),S.enable()},t.onDisable=function(){mf(c,!0),ln(le,"resize",X),ee.removeEventListener("refresh",X),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=Nr,Nr&&!f()&&f(1),Nr&&Ct.ticker.add(Hi),z=a._dc,I=Ct.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sg(f,f(),function(){return I.pause()})},onUpdate:hr,onComplete:z.vars.onComplete}),a};ee.sort=function(r){if(An(r))return oe.sort(r);var t=le.pageYOffset||0;return ee.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+le.innerHeight}),oe.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ee.observe=function(r){return new He(r)};ee.normalizeScroll=function(r){if(typeof r>"u")return kn;if(r===!0&&kn)return kn.enable();if(r===!1){kn&&kn.kill(),kn=r;return}var t=r instanceof He?r:wv(r);return kn&&kn.target===t.target&&kn.kill(),vs(t.target)&&(kn=t),t};ee.core={_getVelocityProp:Xl,_inputObserver:og,_scrollers:se,_proxies:Ci,bridge:{ss:function(){vi||Ss("scrollStart"),vi=En()},ref:function(){return Tn}}};Zm()&&Ct.registerPlugin(ee);var ag="1.3.26";function hg(r,t,e){return Math.max(r,Math.min(t,e))}function Tv(r,t,e){return(1-e)*r+e*t}function Ev(r,t,e,n){return Tv(r,t,1-Math.exp(-e*n))}function Av(r,t){return(r%t+t)%t}var Cv=class{constructor(){Nt(this,"isRunning",!1);Nt(this,"value",0);Nt(this,"from",0);Nt(this,"to",0);Nt(this,"currentTime",0);Nt(this,"lerp");Nt(this,"duration");Nt(this,"easing");Nt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=hg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Ev(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Rv(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Pv=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Nt(this,"width",0);Nt(this,"height",0);Nt(this,"scrollHeight",0);Nt(this,"scrollWidth",0);Nt(this,"debouncedResize");Nt(this,"wrapperResizeObserver");Nt(this,"contentResizeObserver");Nt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Nt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Nt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Rv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ug=class{constructor(){Nt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},Iv=100/6,Ur={passive:!1};function lg(r,t){return r===1?Iv:r===2?t:1}var Lv=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Nt(this,"touchStart",{x:0,y:0});Nt(this,"lastDelta",{x:0,y:0});Nt(this,"window",{width:0,height:0});Nt(this,"emitter",new ug);Nt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Nt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Nt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Nt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=lg(n,this.window.width),s=lg(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Nt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ur),this.element.addEventListener("touchstart",this.onTouchStart,Ur),this.element.addEventListener("touchmove",this.onTouchMove,Ur),this.element.addEventListener("touchend",this.onTouchEnd,Ur)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ur),this.element.removeEventListener("touchstart",this.onTouchStart,Ur),this.element.removeEventListener("touchmove",this.onTouchMove,Ur),this.element.removeEventListener("touchend",this.onTouchEnd,Ur)}},cg=r=>Math.min(1,1.001-2**(-10*r)),fg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:M=!0,autoRaf:A=!1,anchors:v=!1,autoToggle:S=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:x=E,stopInertiaOnNavigate:T=!1,respectReducedMotion:C=!0}={}){Nt(this,"_isScrolling",!1);Nt(this,"_isStopped",!1);Nt(this,"_isLocked",!1);Nt(this,"_preventNextNativeScrollEvent",!1);Nt(this,"_resetVelocityTimeout",null);Nt(this,"_rafId",null);Nt(this,"_isDraggingSelection",!1);Nt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Nt(this,"isTouching");Nt(this,"isIos");Nt(this,"time",0);Nt(this,"userData",{});Nt(this,"lastVelocity",0);Nt(this,"velocity",0);Nt(this,"direction",0);Nt(this,"options");Nt(this,"targetScroll");Nt(this,"animatedScroll");Nt(this,"animate",new Cv);Nt(this,"emitter",new ug);Nt(this,"dimensions");Nt(this,"virtualScroll");Nt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Nt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Nt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Nt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Nt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Nt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Nt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Nt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=ag,window.lenis||(window.lenis={}),window.lenis.version=ag,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=cg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:p,overscroll:M,autoRaf:A,anchors:v,autoToggle:S,allowNestedScroll:b,naiveDimensions:x,stopInertiaOnNavigate:T,respectReducedMotion:C},this.dimensions=new Pv(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Lv(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(m=u),m){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}let _=m.getBoundingClientRect(),g=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),M=getComputedStyle(this.rootElement),A=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(A)?0:A)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=hg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=cg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,m;if(n-(i.time??0)>2e3){i.time=Date.now();let b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,m=r.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",g,p,M,A,v,S;if(_==="horizontal")g=Math.round(r.scrollLeft),p=d-f,M=t,A=s,v=a,S=c;else if(_==="vertical")g=Math.round(r.scrollTop),p=u-m,M=e,A=o,v=l,S=h;else return!1;return!S&&(g>=p||g<=0)?!0:(M>0?g<p:g>0)&&A&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Av(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var kg=0,cd=1,Vg=2;var al=1,Gg=2,No=3,Jr=0,xn=1,wi=2,Qi=0,Uo=1,hd=2,ud=3,fd=4,Hg=5;var Rs=100,Wg=101,Xg=102,qg=103,Yg=104,Zg=200,Jg=201,$g=202,Kg=203,dd=204,pd=205,Qg=206,jg=207,t0=208,e0=209,n0=210,i0=211,r0=212,s0=213,o0=214,Dc=0,Nc=1,Uc=2,Mo=3,Fc=4,Oc=5,Bc=6,zc=7,_h=0,a0=1,l0=2,Ni=0,md=1,gd=2,_d=3,xd=4,vd=5,yd=6,ll=7;var Sd=300,$r=301,Ps=302,xh=303,vh=304,cl=306,kc=1e3,qi=1001,Vc=1002,un=1003,c0=1004;var hl=1005;var _n=1006,yh=1007;var Kr=1008;var jn=1009,Md=1010,bd=1011,Fo=1012,Sh=1013,Ui=1014,Ti=1015,Fi=1016,Mh=1017,bh=1018,Oo=1020,wd=35902,Td=35899,Ed=1021,Ad=1022,Ei=1023,Yi=1026,Qr=1027,wh=1028,Th=1029,jr=1030,Eh=1031;var Ah=1033,ul=33776,fl=33777,dl=33778,pl=33779,Ch=35840,Rh=35841,Ph=35842,Ih=35843,Lh=36196,Dh=37492,Nh=37496,Uh=37488,Fh=37489,ml=37490,Oh=37491,Bh=37808,zh=37809,kh=37810,Vh=37811,Gh=37812,Hh=37813,Wh=37814,Xh=37815,qh=37816,Yh=37817,Zh=37818,Jh=37819,$h=37820,Kh=37821,Qh=36492,jh=36494,tu=36495,eu=36283,nu=36284,gl=36285,iu=36286;var Fa=2300,Gc=2301,Ic=2302,ed=2303,nd=2400,id=2401,rd=2402;var h0=3200;var _l=0,u0=1,xr="",Wn="srgb",Oa="srgb-linear",Ba="linear",xe="srgb";var Lc=7680;var f0=519,d0=512,p0=513,m0=514,ru=515,g0=516,_0=517,su=518,x0=519,v0=35044;var Cd="300 es",Di=2e3,bo=2001;function Dv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Nv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function za(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function y0(){let r=za("canvas");return r.style.display="block",r}var dg={},wo=null;function Rd(...r){let t="THREE."+r.shift();wo?wo("log",t,...r):console.log(t,...r)}function S0(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Zt(...r){r=S0(r);let t="THREE."+r.shift();if(wo)wo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function $t(...r){r=S0(r);let t="THREE."+r.shift();if(wo)wo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Es(...r){let t=r.join(" ");t in dg||(dg[t]=!0,Zt(...r))}function M0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var b0={[Dc]:Nc,[Uc]:Bc,[Fc]:zc,[Mo]:Oc,[Nc]:Dc,[Bc]:Uc,[zc]:Fc,[Oc]:Mo},Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pg=1234567,La=Math.PI/180,To=180/Math.PI;function Bo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function ie(r,t,e){return Math.max(t,Math.min(e,r))}function Pd(r,t){return(r%t+t)%t}function Uv(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Fv(r,t,e){return r!==t?(e-r)/(t-r):0}function Da(r,t,e){return(1-e)*r+e*t}function Ov(r,t,e,n){return Da(r,t,1-Math.exp(-e*n))}function Bv(r,t=1){return t-Math.abs(Pd(r,t*2)-t)}function zv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function kv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Vv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Gv(r,t){return r+Math.random()*(t-r)}function Hv(r){return r*(.5-Math.random())}function Wv(r){r!==void 0&&(pg=r);let t=pg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xv(r){return r*La}function qv(r){return r*To}function Yv(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Zv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Jv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $v(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ts={DEG2RAD:La,RAD2DEG:To,generateUUID:Bo,clamp:ie,euclideanModulo:Pd,mapLinear:Uv,inverseLerp:Fv,lerp:Da,damp:Ov,pingpong:Bv,smoothstep:zv,smootherstep:kv,randInt:Vv,randFloat:Gv,randFloatSpread:Hv,seededRandom:Wv,degToRad:Xv,radToDeg:qv,isPowerOfTwo:Yv,ceilPowerOfTwo:Zv,floorPowerOfTwo:Jv,setQuaternionFromProperEuler:$v,normalize:Hn,denormalize:yo},Fd=class Fd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fd.prototype.isVector2=!0;var Dt=Fd,Ji=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),A=Math.sin(M);p=Math.sin(p*M)/A,a=Math.sin(a*M)/A,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Od=class Od{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return If.copy(this).projectOnVector(t),this.sub(If)}reflect(t){return this.sub(If.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Od.prototype.isVector3=!0;var O=Od,If=new O,mg=new Ji,Bd=class Bd{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],M=i[1],A=i[4],v=i[7],S=i[2],b=i[5],E=i[8];return s[0]=o*_+a*M+l*S,s[3]=o*g+a*A+l*b,s[6]=o*p+a*v+l*E,s[1]=c*_+h*M+d*S,s[4]=c*g+h*A+d*b,s[7]=c*p+h*v+d*E,s[2]=u*_+f*M+m*S,s[5]=u*g+f*A+m*b,s[8]=u*p+f*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lf.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lf.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bd.prototype.isMatrix3=!0;var te=Bd,Lf=new te,gg=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_g=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kv(){let r={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xe&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(i.r=So(i.r),i.g=So(i.g),i.b=So(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xr?Ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Oa]:{primaries:t,whitePoint:n,transfer:Ba,toXYZ:gg,fromXYZ:_g,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:gg,fromXYZ:_g,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}var he=Kv();function gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function So(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var so,Hc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{so===void 0&&(so=za("canvas")),so.width=t.width,so.height=t.height;let i=so.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=so}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=za("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=gr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gr(e[n]/255)*255):e[n]=gr(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qv=0,Eo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Df(i[o].image)):s.push(Df(i[o]))}else s=Df(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Df(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var jv=0,Nf=new O,Kn=class r extends Zi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=qi,i=qi,s=_n,o=Kr,a=Ei,l=jn,c=r.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Bo(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nf).x}get height(){return this.source.getSize(Nf).y}get depth(){return this.source.getSize(Nf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kc:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kc:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Sd;Kn.DEFAULT_ANISOTROPY=1;var zd=class zd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(f+1)/2,S=(p+1)/2,b=(h+u)/4,E=(d+_)/4,x=(m+g)/4;return A>v&&A>S?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=b/n,s=E/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=x/s),this.set(n,i,s,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zd.prototype.isVector4=!0;var Fe=zd,Wc=class extends Zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Kn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Eo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ka=class extends Kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xc=class extends Kn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var gh=class gh{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/oo.setFromMatrixColumn(t,0).length(),s=1/oo.setFromMatrixColumn(t,1).length(),o=1/oo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ty,t,ey)}lookAt(t,e,n){let i=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),Fr.crossVectors(n,li),Fr.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Fr.crossVectors(n,li)),Fr.normalize(),uc.crossVectors(li,Fr),i[0]=Fr.x,i[4]=uc.x,i[8]=li.x,i[1]=Fr.y,i[5]=uc.y,i[9]=li.y,i[2]=Fr.z,i[6]=uc.z,i[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],A=n[7],v=n[11],S=n[15],b=i[0],E=i[4],x=i[8],T=i[12],C=i[1],D=i[5],I=i[9],k=i[13],L=i[2],z=i[6],X=i[10],G=i[14],K=i[3],Y=i[7],R=i[11],j=i[15];return s[0]=o*b+a*C+l*L+c*K,s[4]=o*E+a*D+l*z+c*Y,s[8]=o*x+a*I+l*X+c*R,s[12]=o*T+a*k+l*G+c*j,s[1]=h*b+d*C+u*L+f*K,s[5]=h*E+d*D+u*z+f*Y,s[9]=h*x+d*I+u*X+f*R,s[13]=h*T+d*k+u*G+f*j,s[2]=m*b+_*C+g*L+p*K,s[6]=m*E+_*D+g*z+p*Y,s[10]=m*x+_*I+g*X+p*R,s[14]=m*T+_*k+g*G+p*j,s[3]=M*b+A*C+v*L+S*K,s[7]=M*E+A*D+v*z+S*Y,s[11]=M*x+A*I+v*X+S*R,s[15]=M*T+A*k+v*G+S*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],M=l*f-c*u,A=a*f-c*d,v=a*u-l*d,S=o*f-c*h,b=o*u-l*h,E=o*d-a*h;return e*(_*M-g*A+p*v)-n*(m*M-g*S+p*b)+i*(m*A-_*S+p*E)-s*(m*v-_*b+g*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=e*a-n*o,A=e*l-i*o,v=e*c-s*o,S=n*l-i*a,b=n*c-s*a,E=i*c-s*l,x=h*_-d*m,T=h*g-u*m,C=h*p-f*m,D=d*g-u*_,I=d*p-f*_,k=u*p-f*g,L=M*k-A*I+v*D+S*C-b*T+E*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(a*k-l*I+c*D)*z,t[1]=(i*I-n*k-s*D)*z,t[2]=(_*E-g*b+p*S)*z,t[3]=(u*b-d*E-f*S)*z,t[4]=(l*C-o*k-c*T)*z,t[5]=(e*k-i*C+s*T)*z,t[6]=(g*v-m*E-p*A)*z,t[7]=(h*E-u*v+f*A)*z,t[8]=(o*I-a*C+c*x)*z,t[9]=(n*C-e*I-s*x)*z,t[10]=(m*b-_*v+p*M)*z,t[11]=(d*v-h*b-f*M)*z,t[12]=(a*T-o*D-l*x)*z,t[13]=(e*D-n*T+i*x)*z,t[14]=(_*A-m*S-g*M)*z,t[15]=(h*S-d*A+u*M)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,g=o*d,p=a*d,M=l*c,A=l*h,v=l*d,S=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*S,i[1]=(f+v)*S,i[2]=(m-A)*S,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(u+p))*b,i[6]=(g+M)*b,i[7]=0,i[8]=(m+A)*E,i[9]=(g-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=oo.set(i[0],i[1],i[2]).length(),a=oo.set(i[4],i[5],i[6]).length(),l=oo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ri.copy(this);let c=1/o,h=1/a,d=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,e.setFromRotationMatrix(Ri),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Di,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Di)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===bo)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Di,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Di)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===bo)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};gh.prototype.isMatrix4=!0;var Ee=gh,oo=new O,Ri=new Ee,ty=new O(0,0,0),ey=new O(1,1,1),Fr=new O,uc=new O,li=new O,xg=new Ee,vg=new Ji,$i=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vg.setFromEuler(this),this.setFromQuaternion(vg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ny=0,yg=new O,ao=new Ji,ur=new Ee,fc=new O,Ea=new O,iy=new O,ry=new Ji,Sg=new O(1,0,0),Mg=new O(0,1,0),bg=new O(0,0,1),wg={type:"added"},sy={type:"removed"},lo={type:"childadded",child:null},Uf={type:"childremoved",child:null},Ye=class r extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new O,e=new $i,n=new Ji,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new te}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Sg,t)}rotateY(t){return this.rotateOnAxis(Mg,t)}rotateZ(t){return this.rotateOnAxis(bg,t)}translateOnAxis(t,e){return yg.copy(t).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sg,t)}translateY(t){return this.translateOnAxis(Mg,t)}translateZ(t){return this.translateOnAxis(bg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fc.copy(t):fc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(Ea,fc,this.up):ur.lookAt(fc,Ea,this.up),this.quaternion.setFromRotationMatrix(ur),i&&(ur.extractRotation(i.matrixWorld),ao.setFromRotationMatrix(ur),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wg),lo.child=t,this.dispatchEvent(lo),lo.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sy),Uf.child=t,this.dispatchEvent(Uf),Uf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ur.multiply(t.parent.matrixWorld)),t.applyMatrix4(ur),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wg),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,iy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,ry,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new O(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},oy={type:"move"},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Ff(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Pd(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ff(o,s,t+1/3),this.g=Ff(o,s,t),this.b=Ff(o,s,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=Wn){function n(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wn){let n=w0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return he.workingToColorSpace(Rn.copy(this),t),Math.round(ie(Rn.r*255,0,255))*65536+Math.round(ie(Rn.g*255,0,255))*256+Math.round(ie(Rn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,i=Rn.g,s=Rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=Wn){he.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,i=Rn.b;return t!==Wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Or),this.setHSL(Or.h+t,Or.s+e,Or.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Or),t.getHSL(dc);let n=Da(Or.h,dc.h,e),i=Da(Or.s,dc.s,e),s=Da(Or.l,dc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Jt;Jt.NAMES=w0;var As=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new O,fr=new O,Of=new O,dr=new O,co=new O,ho=new O,Tg=new O,Bf=new O,zf=new O,kf=new O,Vf=new Fe,Gf=new Fe,Hf=new Fe,Vr=class r{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pi.subVectors(t,e),i.cross(Pi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Pi.subVectors(i,e),fr.subVectors(n,e),Of.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(fr),l=Pi.dot(Of),c=fr.dot(fr),h=fr.dot(Of),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(o,dr.y),l.addScaledVector(a,dr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Vf.setScalar(0),Gf.setScalar(0),Hf.setScalar(0),Vf.fromBufferAttribute(t,e),Gf.fromBufferAttribute(t,n),Hf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Vf,s.x),o.addScaledVector(Gf,s.y),o.addScaledVector(Hf,s.z),o}static isFrontFacing(t,e,n,i){return Pi.subVectors(n,e),fr.subVectors(t,e),Pi.cross(fr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Pi.cross(fr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;co.subVectors(i,n),ho.subVectors(s,n),Bf.subVectors(t,n);let l=co.dot(Bf),c=ho.dot(Bf);if(l<=0&&c<=0)return e.copy(n);zf.subVectors(t,i);let h=co.dot(zf),d=ho.dot(zf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(co,o);kf.subVectors(t,s);let f=co.dot(kf),m=ho.dot(kf);if(m>=0&&f<=m)return e.copy(s);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ho,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Tg.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Tg,a);let p=1/(g+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(co,o).addScaledVector(ho,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ki=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(s,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pc.copy(n.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Aa),mc.subVectors(this.max,Aa),uo.subVectors(t.a,Aa),fo.subVectors(t.b,Aa),po.subVectors(t.c,Aa),Br.subVectors(fo,uo),zr.subVectors(po,fo),Ms.subVectors(uo,po);let e=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-Ms.z,Ms.y,Br.z,0,-Br.x,zr.z,0,-zr.x,Ms.z,0,-Ms.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-Ms.y,Ms.x,0];return!Wf(e,uo,fo,po,mc)||(e=[1,0,0,0,1,0,0,0,1],!Wf(e,uo,fo,po,mc))?!1:(gc.crossVectors(Br,zr),e=[gc.x,gc.y,gc.z],Wf(e,uo,fo,po,mc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pr=[new O,new O,new O,new O,new O,new O,new O,new O],Ii=new O,pc=new Ki,uo=new O,fo=new O,po=new O,Br=new O,zr=new O,Ms=new O,Aa=new O,mc=new O,gc=new O,bs=new O;function Wf(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){bs.fromArray(r,s);let a=i.x*Math.abs(bs.x)+i.y*Math.abs(bs.y)+i.z*Math.abs(bs.z),l=t.dot(bs),c=e.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new O,_c=new Dt,ay=0,Xn=class extends Zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ay++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=v0,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_c.fromBufferAttribute(this,e),_c.applyMatrix3(t),this.setXY(e,_c.x,_c.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array),i=Hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends Xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ha=class extends Xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Se=class extends Xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ly=new Ki,Ca=new O,Xf=new O,Gr=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ly.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ca.subVectors(t,this.center);let e=Ca.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ca,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ca.copy(t.center).add(Xf)),this.expandByPoint(Ca.copy(t.center).sub(Xf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cy=0,yi=new Ee,qf=new Ye,mo=new O,ci=new Ki,Ra=new Ki,hn=new O,Pn=class r extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dv(t)?Ha:Ga)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return qf.lookAt(t),qf.updateMatrix(),this.applyMatrix4(qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ra.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(ci.min,Ra.min),ci.expandByPoint(hn),hn.addVectors(ci.max,Ra.max),ci.expandByPoint(hn)):(ci.expandByPoint(Ra.min),ci.expandByPoint(Ra.max))}ci.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)hn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(hn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(mo.fromBufferAttribute(t,c),hn.add(mo)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new O,l[x]=new O;let c=new O,h=new O,d=new O,u=new Dt,f=new Dt,m=new Dt,_=new O,g=new O;function p(x,T,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[x].add(_),a[T].add(_),a[C].add(_),l[x].add(g),l[T].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,T=M.length;x<T;++x){let C=M[x],D=C.start,I=C.count;for(let k=D,L=D+I;k<L;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let A=new O,v=new O,S=new O,b=new O;function E(x){S.fromBufferAttribute(i,x),b.copy(S);let T=a[x];A.copy(T),A.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(b,T);let D=v.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,T=M.length;x<T;++x){let C=M[x],D=C.start,I=C.count;for(let k=D,L=D+I;k<L;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Xn(u,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Yf=new O,hy=new O,uy=new te,Li=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Yf.subVectors(n,e).cross(hy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Yf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uy.getNormalMatrix(t),i=this.coplanarPoint(Yf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},fy=0,_r=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Uo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=pd,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lc,this.stencilZFail=Lc,this.stencilZPass=Lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mr=new O,Zf=new O,xc=new O,vc=new O,qc=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mr.copy(this.origin).addScaledVector(this.direction,e),mr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zf.copy(t).add(e).multiplyScalar(.5),xc.copy(e).sub(t).normalize(),vc.copy(this.origin).sub(Zf);let s=t.distanceTo(e)*.5,o=-this.direction.dot(xc),a=vc.dot(this.direction),l=-vc.dot(xc),c=vc.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Zf).addScaledVector(xc,u),f}intersectSphere(t,e){if(t.radius<0)return null;mr.subVectors(t.center,this.origin);let n=mr.dot(this.direction),i=mr.dot(mr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,A=n.z-o.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(h),E,x,T,C,D,I,k,L,z,X,G,K;if(v>=S&&v>=b?(T=l,I=d,z=m,K=p,l>=0?(E=c,x=h,C=u,D=f,k=_,L=g,X=M,G=A):(E=h,x=c,C=f,D=u,k=g,L=_,X=A,G=M)):S>=b?(T=c,I=u,z=_,K=M,c>=0?(E=h,x=l,C=f,D=d,k=g,L=m,X=A,G=p):(E=l,x=h,C=d,D=f,k=m,L=g,X=p,G=A)):(T=h,I=f,z=g,K=A,h>=0?(E=l,x=c,C=d,D=u,k=m,L=_,X=p,G=M):(E=c,x=l,C=u,D=d,k=_,L=m,X=M,G=p)),T===0)return null;let Y=E/T,R=x/T,j=1/T,bt=C-Y*I,wt=D-R*I,Ht=k-Y*z,Bt=L-R*z,Yt=X-Y*K,J=G-R*K,tt=Yt*Bt-J*Ht,pt=bt*J-wt*Yt,zt=Ht*wt-Bt*bt;if(i){if(tt<0||pt<0||zt<0)return null}else if((tt<0||pt<0||zt<0)&&(tt>0||pt>0||zt>0))return null;let mt=tt+pt+zt;if(mt===0)return null;let kt=j*(tt*I+pt*z+zt*K);return(mt>0?kt<0:kt>0)?null:this.at(kt/mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wa=class extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eg=new Ee,ws=new qc,yc=new Gr,Ag=new O,Sc=new O,Mc=new O,bc=new O,Jf=new O,wc=new O,Cg=new O,Tc=new O,Ae=class extends Ye{constructor(t=new Pn,e=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){wc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Jf.fromBufferAttribute(d,t),o?wc.addScaledVector(Jf,h):wc.addScaledVector(Jf.sub(e),h))}e.add(wc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yc.copy(n.boundingSphere),yc.applyMatrix4(s),ws.copy(t.ray).recast(t.near),!(yc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(yc,Ag)===null||ws.origin.distanceToSquared(Ag)>(t.far-t.near)**2))&&(Eg.copy(s).invert(),ws.copy(t.ray).applyMatrix4(Eg),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,S=A;v<S;v+=3){let b=a.getX(v),E=a.getX(v+1),x=a.getX(v+2);i=Ec(this,p,t,n,c,h,d,b,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=a.getX(g),A=a.getX(g+1),v=a.getX(g+2);i=Ec(this,o,t,n,c,h,d,M,A,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,S=A;v<S;v+=3){let b=v,E=v+1,x=v+2;i=Ec(this,p,t,n,c,h,d,b,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=g,A=g+1,v=g+2;i=Ec(this,o,t,n,c,h,d,M,A,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function dy(r,t,e,n,i,s,o,a){let l;if(t.side===xn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Jr,a),l===null)return null;Tc.copy(a),Tc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Tc);return c<e.near||c>e.far?null:{distance:c,point:Tc.clone(),object:r}}function Ec(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Sc),r.getVertexPosition(l,Mc),r.getVertexPosition(c,bc);let h=dy(r,t,e,n,Sc,Mc,bc,Cg);if(h){let d=new O;Vr.getBarycoord(Cg,Sc,Mc,bc,d),i&&(h.uv=Vr.getInterpolatedAttribute(i,a,l,c,d,new Dt)),s&&(h.uv1=Vr.getInterpolatedAttribute(s,a,l,c,d,new Dt)),o&&(h.normal=Vr.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Vr.getNormal(Sc,Mc,bc,u.normal),h.face=u,h.barycoord=d}return h}var Xa=class extends Kn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=un,h=un,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Co=class extends Xn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},go=new Ee,Rg=new Ee,Ac=[],Pg=new Ki,py=new Ee,Pa=new Ae,Ia=new Gr,Hr=class extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,py)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,go),Pg.copy(t.boundingBox).applyMatrix4(go),this.boundingBox.union(Pg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,go),Ia.copy(t.boundingSphere).applyMatrix4(go),this.boundingSphere.union(Ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),t.ray.intersectsSphere(Ia)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,go),Rg.multiplyMatrices(n,go),Pa.matrixWorld=Rg,Pa.raycast(t,Ac);for(let o=0,a=Ac.length;o<a;o++){let l=Ac[o];l.instanceId=s,l.object=this,e.push(l)}Ac.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xa(new Float32Array(i*this.count),i,this.count,wh,Ti));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new Gr,my=new Dt(.5,.5),Cc=new O,Ro=class{constructor(t=new Li,e=new Li,n=new Li,i=new Li,s=new Li,o=new Li){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Di,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],M=s[12],A=s[13],v=s[14],S=s[15];if(i[0].setComponents(c-o,f-h,p-m,S-M).normalize(),i[1].setComponents(c+o,f+h,p+m,S+M).normalize(),i[2].setComponents(c+a,f+d,p+_,S+A).normalize(),i[3].setComponents(c-a,f-d,p-_,S-A).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,f-u,p-g,S-v).normalize();else if(i[4].setComponents(c-l,f-u,p-g,S-v).normalize(),e===Di)i[5].setComponents(c+l,f+u,p+g,S+v).normalize();else if(e===bo)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);let e=my.distanceTo(t.center);return Ts.radius=.7071067811865476+e,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Cc.x=i.normal.x>0?t.max.x:t.min.x,Cc.y=i.normal.y>0?t.max.y:t.min.y,Cc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qa=class extends Kn{constructor(t=[],e=$r,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Wr=class extends Kn{constructor(t,e,n=Ui,i,s,o,a=un,l=un,c,h=Yi,d=1){if(h!==Yi&&h!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yc=class extends Wr{constructor(t,e=Ui,n=$r,i,s,o=un,a=un,l,c=Yi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ya=class extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xr=class r extends Pn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function m(_,g,p,M,A,v,S,b,E,x,T){let C=v/E,D=S/x,I=v/2,k=S/2,L=b/2,z=E+1,X=x+1,G=0,K=0,Y=new O;for(let R=0;R<X;R++){let j=R*D-k;for(let bt=0;bt<z;bt++){let wt=bt*C-I;Y[_]=wt*M,Y[g]=j*A,Y[p]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[p]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(bt/E),d.push(1-R/x),G+=1}}for(let R=0;R<x;R++)for(let j=0;j<E;j++){let bt=u+j+z*R,wt=u+j+z*(R+1),Ht=u+(j+1)+z*(R+1),Bt=u+(j+1)+z*R;l.push(bt,wt,Bt),l.push(wt,Ht,Bt),K+=6}a.addGroup(f,K,T),f+=K,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Za=class r extends Pn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],m=0,_=[],g=n/2,p=0;M(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function M(){let v=new O,S=new O,b=0,E=(e-t)/n;for(let x=0;x<=s;x++){let T=[],C=x/s,D=C*(e-t)+t;for(let I=0;I<=i;I++){let k=I/i,L=k*l+a,z=Math.sin(L),X=Math.cos(L);S.x=D*z,S.y=-C*n+g,S.z=D*X,d.push(S.x,S.y,S.z),v.set(z,E,X).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-C),T.push(m++)}_.push(T)}for(let x=0;x<i;x++)for(let T=0;T<s;T++){let C=_[T][x],D=_[T+1][x],I=_[T+1][x+1],k=_[T][x+1];(t>0||T!==0)&&(h.push(C,D,k),b+=3),(e>0||T!==s-1)&&(h.push(D,I,k),b+=3)}c.addGroup(p,b,0),p+=b}function A(v){let S=m,b=new Dt,E=new O,x=0,T=v===!0?t:e,C=v===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),m++;let D=m;for(let I=0;I<=i;I++){let L=I/i*l+a,z=Math.cos(L),X=Math.sin(L);E.x=T*X,E.y=g*C,E.z=T*z,d.push(E.x,E.y,E.z),u.push(0,C,0),b.x=z*.5+.5,b.y=X*.5*C+.5,f.push(b.x,b.y),m++}for(let I=0;I<i;I++){let k=S+I,L=D+I;v===!0?h.push(L,L+1,k):h.push(L+1,L,k),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Dt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,i=[],s=[],o=[],a=new O,l=new Ee;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ie(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ie(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ja=class extends Mi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Dt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zc=class extends Ja{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Id(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Ig=new O,Lg=new O,$f=new Id,Kf=new Id,Qf=new Id,Po=class extends Mi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Lg.subVectors(i[0],i[1]).add(i[0]),c=Lg);let d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ig.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ig),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),$f.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,g),Kf.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,g),Qf.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&($f.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Kf.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Qf.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set($f.calc(l),Kf.calc(l),Qf.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dg(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function gy(r,t){let e=1-r;return e*e*t}function _y(r,t){return 2*(1-r)*r*t}function xy(r,t){return r*r*t}function Na(r,t,e,n){return gy(r,t)+_y(r,e)+xy(r,n)}function vy(r,t){let e=1-r;return e*e*e*t}function yy(r,t){let e=1-r;return 3*e*e*r*t}function Sy(r,t){return 3*(1-r)*r*r*t}function My(r,t){return r*r*r*t}function Ua(r,t,e,n,i){return vy(r,t)+yy(r,e)+Sy(r,n)+My(r,i)}var Jc=class extends Mi{constructor(t=new Dt,e=new Dt,n=new Dt,i=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Dt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ua(t,i.x,s.x,o.x,a.x),Ua(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends Mi{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ua(t,i.x,s.x,o.x,a.x),Ua(t,i.y,s.y,o.y,a.y),Ua(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kc=class extends Mi{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qc=class extends Mi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends Mi{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Na(t,i.x,s.x,o.x),Na(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends Mi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Na(t,i.x,s.x,o.x),Na(t,i.y,s.y,o.y),Na(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},th=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Dg(a,l.x,c.x,h.x,d.x),Dg(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Dt().fromArray(i))}return this}},by=Object.freeze({__proto__:null,ArcCurve:Zc,CatmullRomCurve3:Po,CubicBezierCurve:Jc,CubicBezierCurve3:$c,EllipseCurve:Ja,LineCurve:Kc,LineCurve3:Qc,QuadraticBezierCurve:jc,QuadraticBezierCurve3:$a,SplineCurve:th});var Ka=class r extends Pn{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ie(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,d=new O,u=new Dt,f=new O,m=new O,_=new O,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let M=0;M<=e;M++){let A=n+M*h*i,v=Math.sin(A),S=Math.cos(A);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*S,o.push(d.x,d.y,d.z),u.x=M/e,u.y=b/(t.length-1),a.push(u.x,u.y);let E=l[3*b+0]*v,x=l[3*b+1],T=l[3*b+0]*S;c.push(E,x,T)}}for(let M=0;M<e;M++)for(let A=0;A<t.length-1;A++){let v=A+M*t.length,S=v,b=v+t.length,E=v+t.length+1,x=v+1;s.push(S,b,x),s.push(E,x,b)}this.setIndex(s),this.setAttribute("position",new Se(o,3)),this.setAttribute("uv",new Se(a,2)),this.setAttribute("normal",new Se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Cs=class r extends Pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let M=p*u-o;for(let A=0;A<c;A++){let v=A*d-s;m.push(v,-M,0),_.push(0,0,1),g.push(A/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let A=M+c*p,v=M+c*(p+1),S=M+1+c*(p+1),b=M+1+c*p;f.push(A,v,b),f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qa=class r extends Pn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new O,u=new O,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let M=[],A=p/n,v=o+A*a,S=t*Math.cos(v),b=Math.sqrt(t*t-S*S),E=0;p===0&&o===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let x=0;x<=e;x++){let T=x/e,C=i+T*s;d.x=-b*Math.cos(C),d.y=S,d.z=b*Math.sin(C),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+E,1-A),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let A=h[p][M+1],v=h[p][M],S=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&f.push(A,v,b),(p!==n-1||l<Math.PI)&&f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ja=class r extends Pn{constructor(t=new $a(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,l=new O,c=new Dt,h=new O,d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function _(){for(let A=0;A<e;A++)g(A);g(s===!1?e:0),M(),p()}function g(A){h=t.getPointAt(A/e,h);let v=o.normals[A],S=o.binormals[A];for(let b=0;b<=i;b++){let E=b/i*Math.PI*2,x=Math.sin(E),T=-Math.cos(E);l.x=T*v.x+x*S.x,l.y=T*v.y+x*S.y,l.z=T*v.z+x*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let A=1;A<=e;A++)for(let v=1;v<=i;v++){let S=(i+1)*(A-1)+(v-1),b=(i+1)*A+(v-1),E=(i+1)*A+v,x=(i+1)*(A-1)+v;m.push(S,b,x),m.push(b,E,x)}}function M(){for(let A=0;A<=e;A++)for(let v=0;v<=i;v++)c.x=A/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new by[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Is(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Ng(i))i.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ng(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function In(r){let t={};for(let e=0;e<r.length;e++){let n=Is(r[e]);for(let i in n)t[i]=n[i]}return t}function Ng(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function wy(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ld(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var T0={clone:Is,merge:In},Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=wy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},eh=class extends hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bi=class extends _r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},tl=class extends bi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var el=class extends _r{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=_h,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},nh=class extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ih=class extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _o(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function jf(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var qr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rh=class extends qr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case id:s=t,a=2*e-n;break;case rd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case id:o=t,l=2*n-e;break;case rd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,A=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let S=0;S!==a;++S)s[S]=p*o[h+S]+M*o[c+S]+A*o[l+S]+v*o[d+S];return s}},sh=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},oh=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ah=class extends qr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*_+o[l+g]*m;return s}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],g=o[l+m],p=f*u+m*2,M=d[p],A=d[p+1],v=t*u+m*2,S=h[v],b=h[v+1],E=Cy(n,e,M,S,i);s[m]=E0(E,_,A,b,g)}return s}};function E0(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Ay(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function Cy(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=E0(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=Ay(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_o(e,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_o(t.times,Array),values:_o(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),jf(t.settings)&&(n.settings={inTangents:_o(t.settings.inTangents,Array),outTangents:_o(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ah(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fa:e=this.InterpolantFactoryMethodDiscrete;break;case Gc:e=this.InterpolantFactoryMethodLinear;break;case Ic:e=this.InterpolantFactoryMethodSmooth;break;case ed:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return Gc;case this.InterpolantFactoryMethodSmooth:return Ic;case this.InterpolantFactoryMethodBezier:return ed}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;jf(this.settings)&&(Ug(this.settings.inTangents,t),Ug(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Nv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ic,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,jf(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ug(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Gc;var Yr=class extends ui{constructor(t,e,n){super(t,e,n)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Fa;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var lh=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};lh.prototype.ValueTypeName="color";var ch=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};ch.prototype.ValueTypeName="number";var hh=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ji.slerpFlat(s,0,o,c-a,o,c,l);return s}},nl=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new hh(this.times,this.values,this.getValueSize(),t)}};nl.prototype.ValueTypeName="quaternion";nl.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends ui{constructor(t,e,n){super(t,e,n)}};Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Fa;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};uh.prototype.ValueTypeName="vector";var fh=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},A0=new fh,dh=class{constructor(t){this.manager=t!==void 0?t:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};dh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Io=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},il=class extends Io{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},td=new Ee,Fg=new O,Og=new O,rl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Fg.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fg),Og.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Og),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(td,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===bo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rc=new O,Pc=new Ji,Xi=new O,sl=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Rc,Pc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Pc,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Rc,Pc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Pc,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},kr=new O,Bg=new Dt,zg=new Dt,gn=class extends sl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kr.x,kr.y).multiplyScalar(-t/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-t/kr.z)}getViewSize(t,e){return this.getViewBounds(t,Bg,zg),e.subVectors(zg,Bg)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(La*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var sd=class extends rl{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},ol=class extends Io{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Lo=class extends sl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},od=class extends rl{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends Io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new od}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xo=-90,vo=1,ph=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new gn(xo,vo,t,e);i.layers=this.layers,this.add(i);let s=new gn(xo,vo,t,e);s.layers=this.layers,this.add(s);let o=new gn(xo,vo,t,e);o.layers=this.layers,this.add(o);let a=new gn(xo,vo,t,e);a.layers=this.layers,this.add(a);let l=new gn(xo,vo,t,e);l.layers=this.layers,this.add(l);let c=new gn(xo,vo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},mh=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dd="\\[\\]\\.:\\/",Ry=new RegExp("["+Dd+"]","g"),Nd="[^"+Dd+"]",Py="[^"+Dd.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",Nd),Ly=/(WCOD+)?/.source.replace("WCOD",Py),Dy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nd),Ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nd),Uy=new RegExp("^"+Iy+Ly+Dy+Ny+"$"),Fy=["material","materials","bones","map"],ad=class{constructor(t,e,n){let i=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ry,"")}static parseTrackName(t){let e=Uy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Fy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=ad;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hT=new Float32Array(1);var kd=class kd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};kd.prototype.isMatrix2=!0;var ld=kd;function Ud(r,t,e,n){let i=Oy(n);switch(e){case Ed:return r*t;case wh:return r*t/i.components*i.byteLength;case Th:return r*t/i.components*i.byteLength;case jr:return r*t*2/i.components*i.byteLength;case Eh:return r*t*2/i.components*i.byteLength;case Ad:return r*t*3/i.components*i.byteLength;case Ei:return r*t*4/i.components*i.byteLength;case Ah:return r*t*4/i.components*i.byteLength;case ul:case fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case dl:case pl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rh:case Ih:return Math.max(r,16)*Math.max(t,8)/4;case Ch:case Ph:return Math.max(r,8)*Math.max(t,8)/2;case Lh:case Dh:case Uh:case Fh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nh:case ml:case Oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case kh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case $h:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Kh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Qh:case jh:case tu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case eu:case nu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gl:case iu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Oy(r){switch(r){case jn:case Md:return{byteLength:1,components:1};case Fo:case bd:case Fi:return{byteLength:2,components:1};case Mh:case bh:return{byteLength:2,components:4};case Ui:case Sh:case Ti:return{byteLength:4,components:1};case wd:case Td:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function J0(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Wy(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SS="gl_FragColor = linearToOutputTexel( gl_FragColor );",MS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,OS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,BS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ZS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,XM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,db=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:Xy,alphahash_pars_fragment:qy,alphamap_fragment:Yy,alphamap_pars_fragment:Zy,alphatest_fragment:Jy,alphatest_pars_fragment:$y,aomap_fragment:Ky,aomap_pars_fragment:Qy,batching_pars_vertex:jy,batching_vertex:tS,begin_vertex:eS,beginnormal_vertex:nS,bsdfs:iS,iridescence_fragment:rS,bumpmap_pars_fragment:sS,clipping_planes_fragment:oS,clipping_planes_pars_fragment:aS,clipping_planes_pars_vertex:lS,clipping_planes_vertex:cS,color_fragment:hS,color_pars_fragment:uS,color_pars_vertex:fS,color_vertex:dS,common:pS,cube_uv_reflection_fragment:mS,defaultnormal_vertex:gS,displacementmap_pars_vertex:_S,displacementmap_vertex:xS,emissivemap_fragment:vS,emissivemap_pars_fragment:yS,colorspace_fragment:SS,colorspace_pars_fragment:MS,envmap_fragment:bS,envmap_common_pars_fragment:wS,envmap_pars_fragment:TS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:OS,envmap_vertex:AS,fog_vertex:CS,fog_pars_vertex:RS,fog_fragment:PS,fog_pars_fragment:IS,gradientmap_pars_fragment:LS,lightmap_pars_fragment:DS,lights_lambert_fragment:NS,lights_lambert_pars_fragment:US,lights_pars_begin:FS,lights_toon_fragment:BS,lights_toon_pars_fragment:zS,lights_phong_fragment:kS,lights_phong_pars_fragment:VS,lights_physical_fragment:GS,lights_physical_pars_fragment:HS,lights_fragment_begin:WS,lights_fragment_maps:XS,lights_fragment_end:qS,lightprobes_pars_fragment:YS,logdepthbuf_fragment:ZS,logdepthbuf_pars_fragment:JS,logdepthbuf_pars_vertex:$S,logdepthbuf_vertex:KS,map_fragment:QS,map_pars_fragment:jS,map_particle_fragment:tM,map_particle_pars_fragment:eM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphinstance_vertex:rM,morphcolor_vertex:sM,morphnormal_vertex:oM,morphtarget_pars_vertex:aM,morphtarget_vertex:lM,normal_fragment_begin:cM,normal_fragment_maps:hM,normal_pars_fragment:uM,normal_pars_vertex:fM,normal_vertex:dM,normalmap_pars_fragment:pM,clearcoat_normal_fragment_begin:mM,clearcoat_normal_fragment_maps:gM,clearcoat_pars_fragment:_M,iridescence_pars_fragment:xM,opaque_fragment:vM,packing:yM,premultiplied_alpha_fragment:SM,project_vertex:MM,dithering_fragment:bM,dithering_pars_fragment:wM,roughnessmap_fragment:TM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:CM,shadowmap_vertex:RM,shadowmask_pars_fragment:PM,skinbase_vertex:IM,skinning_pars_vertex:LM,skinning_vertex:DM,skinnormal_vertex:NM,specularmap_fragment:UM,specularmap_pars_fragment:FM,tonemapping_fragment:OM,tonemapping_pars_fragment:BM,transmission_fragment:zM,transmission_pars_fragment:kM,uv_pars_fragment:VM,uv_pars_vertex:GM,uv_vertex:HM,worldpos_vertex:WM,background_vert:XM,background_frag:qM,backgroundCube_vert:YM,backgroundCube_frag:ZM,cube_vert:JM,cube_frag:$M,depth_vert:KM,depth_frag:QM,distance_vert:jM,distance_frag:tb,equirect_vert:eb,equirect_frag:nb,linedashed_vert:ib,linedashed_frag:rb,meshbasic_vert:sb,meshbasic_frag:ob,meshlambert_vert:ab,meshlambert_frag:lb,meshmatcap_vert:cb,meshmatcap_frag:hb,meshnormal_vert:ub,meshnormal_frag:fb,meshphong_vert:db,meshphong_frag:pb,meshphysical_vert:mb,meshphysical_frag:gb,meshtoon_vert:_b,meshtoon_frag:xb,points_vert:vb,points_frag:yb,shadow_vert:Sb,shadow_frag:Mb,sprite_vert:bb,sprite_frag:wb},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},tr={basic:{uniforms:In([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:In([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:In([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:In([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:In([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:In([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:In([St.points,St.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:In([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:In([St.common,St.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:In([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:In([St.sprite,St.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:In([St.common,St.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:In([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};tr.physical={uniforms:In([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var ou={r:0,b:0,g:0},Tb=new Ee,$0=new te;$0.set(-1,0,0,0,1,0,0,0,1);function Eb(r,t,e,n,i,s){let o=new Jt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=t.get(A,v)}return A}function m(M){let A=!1,v=f(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),A=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===cl)?(c===void 0&&(c=new Ae(new Xr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Is(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($0),c.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,(h!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ae(new Cs(2,2),new hi({name:"BackgroundMaterial",uniforms:Is(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,A){M.getRGB(ou,Ld(r)),e.buffers.color.setClear(ou.r,ou.g,ou.b,A,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:_,dispose:p}}function Ab(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(D,I,k,L,z){let X=!1,G=d(D,L,k,I);s!==G&&(s=G,c(s.object)),X=f(D,L,k,z),X&&m(D,L,k,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(D,I,k,L),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,I,k,L){let z=L.wireframe===!0,X=n[I.id];X===void 0&&(X={},n[I.id]=X);let G=D.isInstancedMesh===!0?D.id:0,K=X[G];K===void 0&&(K={},X[G]=K);let Y=K[k.id];Y===void 0&&(Y={},K[k.id]=Y);let R=Y[z];return R===void 0&&(R=u(l()),Y[z]=R),R}function u(D){let I=[],k=[],L=[];for(let z=0;z<e;z++)I[z]=0,k[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,k,L){let z=s.attributes,X=I.attributes,G=0,K=k.getAttributes();for(let Y in K)if(K[Y].location>=0){let j=z[Y],bt=X[Y];if(bt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),j===void 0||j.attribute!==bt||bt&&j.data!==bt.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function m(D,I,k,L){let z={},X=I.attributes,G=0,K=k.getAttributes();for(let Y in K)if(K[Y].location>=0){let j=X[Y];j===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let bt={};bt.attribute=j,j&&j.data&&(bt.data=j.data),z[Y]=bt,G++}s.attributes=z,s.attributesNum=G,s.index=L}function _(){let D=s.newAttributes;for(let I=0,k=D.length;I<k;I++)D[I]=0}function g(D){p(D,0)}function p(D,I){let k=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;k[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),z[D]!==I&&(r.vertexAttribDivisor(D,I),z[D]=I)}function M(){let D=s.newAttributes,I=s.enabledAttributes;for(let k=0,L=I.length;k<L;k++)I[k]!==D[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function A(D,I,k,L,z,X,G){G===!0?r.vertexAttribIPointer(D,I,k,z,X):r.vertexAttribPointer(D,I,k,L,z,X)}function v(D,I,k,L){_();let z=L.attributes,X=k.getAttributes(),G=I.defaultAttributeValues;for(let K in X){let Y=X[K];if(Y.location>=0){let R=z[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let j=R.normalized,bt=R.itemSize,wt=t.get(R);if(wt===void 0)continue;let Ht=wt.buffer,Bt=wt.type,Yt=wt.bytesPerElement,J=Bt===r.INT||Bt===r.UNSIGNED_INT||R.gpuType===Sh;if(R.isInterleavedBufferAttribute){let tt=R.data,pt=tt.stride,zt=R.offset;if(tt.isInstancedInterleavedBuffer){for(let mt=0;mt<Y.locationSize;mt++)p(Y.location+mt,tt.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let mt=0;mt<Y.locationSize;mt++)g(Y.location+mt);r.bindBuffer(r.ARRAY_BUFFER,Ht);for(let mt=0;mt<Y.locationSize;mt++)A(Y.location+mt,bt/Y.locationSize,Bt,j,pt*Yt,(zt+bt/Y.locationSize*mt)*Yt,J)}else{if(R.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let tt=0;tt<Y.locationSize;tt++)g(Y.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Ht);for(let tt=0;tt<Y.locationSize;tt++)A(Y.location+tt,bt/Y.locationSize,Bt,j,bt*Yt,bt/Y.locationSize*tt*Yt,J)}}else if(G!==void 0){let j=G[K];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(Y.location,j);break;case 3:r.vertexAttrib3fv(Y.location,j);break;case 4:r.vertexAttrib4fv(Y.location,j);break;default:r.vertexAttrib1fv(Y.location,j)}}}}M()}function S(){T();for(let D in n){let I=n[D];for(let k in I){let L=I[k];for(let z in L){let X=L[z];for(let G in X)h(X[G].object),delete X[G];delete L[z]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let k in I){let L=I[k];for(let z in L){let X=L[z];for(let G in X)h(X[G].object),delete X[G];delete L[z]}}delete n[D.id]}function E(D){for(let I in n){let k=n[I];for(let L in k){let z=k[L];if(z[D.id]===void 0)continue;let X=z[D.id];for(let G in X)h(X[G].object),delete X[G];delete z[D.id]}}}function x(D){for(let I in n){let k=n[I],L=D.isInstancedMesh===!0?D.id:0,z=k[L];if(z!==void 0){for(let X in z){let G=z[X];for(let K in G)h(G[K].object),delete G[K];delete z[X]}delete k[L],Object.keys(k).length===0&&delete n[I]}}}function T(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Cb(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Rb(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Ei&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let x=E===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==jn&&E!==Ti&&!x&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:S,samples:b}}function Pb(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Li,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{let M=s?0:n,A=M*4,v=p.clippingState||null;l.value=v,v=h(m,u,A,f);for(let S=0;S!==A;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,v=f;A!==_;++A,v+=4)o.copy(d[A]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var ko=4,Ib=6,Lb=20,Db=256,xl=new Lo,C0=new Jt,Vd=null,Gd=0,Hd=0,Wd=!1,Nb=new O,Ls=new O,Go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=Nb}=s;Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vd,Gd,Hd),this._renderer.xr.enabled=Wd,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$r||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Fi,format:Ei,colorSpace:Oa,depthBuffer:!1},i=R0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ub(s)),this._blurMaterial=Ob(s,t,e),this._ggxMaterial=Fb(s,t,e)}return i}_compileMaterial(t){let e=new Ae(new Pn,t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,n,i,s){let l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(C0),d.toneMapping=Ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new Xr,new Wa({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(C0),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let S=this._cubeSize;zo(i,v*S,A>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===$r||t.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P0());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;zo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-ko?n-m+ko:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,zo(s,g,p,3*_,2*_),i.setRenderTarget(s),i.render(a,xl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,zo(t,g,p,3*_,2*_),i.setRenderTarget(t),i.render(a,xl)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-ko?i-this._lodMax+ko:0),u=4*(this._cubeSize-h);zo(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,xl)}};function Ub(r){let t=[],e=[],n=r,i=r-ko+1+Ib;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,A=p>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];m.set(v,f*u*p);for(let S=0;S<u;S++){let b=h[S*2]*2-1,E=h[S*2+1]*2-1;p===0?Ls.set(1,E,b):p===1?Ls.set(-b,1,-E):p===2?Ls.set(-b,E,1):p===3?Ls.set(-1,E,-b):p===4?Ls.set(-b,-1,E):Ls.set(b,E,-1),Ls.toArray(_,(p*u+S)*f)}}let g=new Pn;g.setAttribute("position",new Xn(m,f)),g.setAttribute("outputDirection",new Xn(_,f)),e.push(new Ae(g,null)),n>ko&&n--}return{lodMeshes:e,sizeLods:t}}function R0(r,t,e){let n=new Qn(r,t,e);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Fb(r,t,e){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Db,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ob(r,t,e){return new hi({name:"SphericalGaussianBlur",defines:{SAMPLES:Lb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function P0(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function I0(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lu=class extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xr(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Qi});s.uniforms.tEquirect.value=e;let o=new Ae(i,s),a=e.minFilter;return e.minFilter===Kr&&(e.minFilter=_n),new ph(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function Bb(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===xh||f===vh)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new lu(m.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===xh||f===vh,_=f===$r||f===Ps;if(m||_){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Go(r)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Go(r)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===xh?u.mapping=$r:f===vh&&(u.mapping=Ps),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function zb(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Es("WebGLRenderer: "+n+" extension not supported."),i}}}function kb(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let A=0,v=M.length;A<v;A+=3){let S=M[A+0],b=M[A+1],E=M[A+2];u.push(S,b,b,E,E,S)}}else{let M=m.array;_=m.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let S=A+0,b=A+1,E=A+2;u.push(S,b,b,E,E,S)}}let g=new(m.count>=65535?Ha:Ga)(u,1);g.version=_;let p=s.get(d);p&&t.remove(p),s.set(d,g)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Vb(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Gb(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Hb(r,t,e){let n=new WeakMap,i=new Fe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),_===!0&&(A=3);let v=a.attributes.position.count*A,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*S*4*d),E=new ka(b,v,S,d);E.type=Ti,E.needsUpdate=!0;let x=A*4;for(let C=0;C<d;C++){let D=g[C],I=p[C],k=M[C],L=v*S*4*C;for(let z=0;z<D.count;z++){let X=z*x;f===!0&&(i.fromBufferAttribute(D,z),b[L+X+0]=i.x,b[L+X+1]=i.y,b[L+X+2]=i.z,b[L+X+3]=0),m===!0&&(i.fromBufferAttribute(I,z),b[L+X+4]=i.x,b[L+X+5]=i.y,b[L+X+6]=i.z,b[L+X+7]=0),_===!0&&(i.fromBufferAttribute(k,z),b[L+X+8]=i.x,b[L+X+9]=i.y,b[L+X+10]=i.z,b[L+X+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new Dt(v,S)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Wb(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Xb={[md]:"LINEAR_TONE_MAPPING",[gd]:"REINHARD_TONE_MAPPING",[_d]:"CINEON_TONE_MAPPING",[xd]:"ACES_FILMIC_TONE_MAPPING",[yd]:"AGX_TONE_MAPPING",[ll]:"NEUTRAL_TONE_MAPPING",[vd]:"CUSTOM_TONE_MAPPING"};function qb(r,t,e,n,i,s){let o=new Qn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Pn;c.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Se([0,2,0,0,2,0],2));let h=new eh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ae(c,h),u=new Lo(-1,1,1,-1,0,1),f=null,m=null,_=!1,g,p=null,M=[],A=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<M.length;b++){let E=M[b];E.setSize&&E.setSize(v,S)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let S=o.width,b=o.height;M.length>0&&a===null&&(a=new Qn(S,b,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new Qn(S,b,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let x=M[E];x.setSize&&x.setSize(S,b)}},this.begin=function(v,S){if(_||v.toneMapping===Ni&&M.length===0)return!1;if(p=S,S!==null){let b=S.width,E=S.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return A===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Ni,!0},this.hasRenderPass=function(){return A},this.end=function(v,S){v.toneMapping=g,_=!0;let b=o,E=a;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(v,E,b,S),T.needsSwap!==!1&&(b=E,E=E===a?l:a))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},he.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");let x=Xb[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var K0=new Kn,Yd=new Wr(1,1),Q0=new ka,j0=new Xc,t_=new qa,L0=[],D0=[],N0=new Float32Array(16),U0=new Float32Array(9),F0=new Float32Array(4);function Ho(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=L0[i];if(s===void 0&&(s=new Float32Array(i),L0[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function rn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function uu(r,t){let e=D0[t];e===void 0&&(e=new Int32Array(t),D0[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Yb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Zb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function Jb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function $b(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function Kb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;F0.set(n),r.uniformMatrix2fv(this.addr,!1,F0),sn(e,n)}}function Qb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;U0.set(n),r.uniformMatrix3fv(this.addr,!1,U0),sn(e,n)}}function jb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;N0.set(n),r.uniformMatrix4fv(this.addr,!1,N0),sn(e,n)}}function t1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function e1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function n1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function i1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function r1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function s1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function o1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function a1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function l1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Yd.compareFunction=e.isReversedDepthBuffer()?su:ru,s=Yd):s=K0,e.setTexture2D(t||s,i)}function c1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||j0,i)}function h1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||t_,i)}function u1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Q0,i)}function f1(r){switch(r){case 5126:return Yb;case 35664:return Zb;case 35665:return Jb;case 35666:return $b;case 35674:return Kb;case 35675:return Qb;case 35676:return jb;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return s1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return u1}}function d1(r,t){r.uniform1fv(this.addr,t)}function p1(r,t){let e=Ho(t,this.size,2);r.uniform2fv(this.addr,e)}function m1(r,t){let e=Ho(t,this.size,3);r.uniform3fv(this.addr,e)}function g1(r,t){let e=Ho(t,this.size,4);r.uniform4fv(this.addr,e)}function _1(r,t){let e=Ho(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function x1(r,t){let e=Ho(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function v1(r,t){let e=Ho(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function y1(r,t){r.uniform1iv(this.addr,t)}function S1(r,t){r.uniform2iv(this.addr,t)}function M1(r,t){r.uniform3iv(this.addr,t)}function b1(r,t){r.uniform4iv(this.addr,t)}function w1(r,t){r.uniform1uiv(this.addr,t)}function T1(r,t){r.uniform2uiv(this.addr,t)}function E1(r,t){r.uniform3uiv(this.addr,t)}function A1(r,t){r.uniform4uiv(this.addr,t)}function C1(r,t,e){let n=this.cache,i=t.length,s=uu(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Yd:o=K0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function R1(r,t,e){let n=this.cache,i=t.length,s=uu(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||j0,s[o])}function P1(r,t,e){let n=this.cache,i=t.length,s=uu(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||t_,s[o])}function I1(r,t,e){let n=this.cache,i=t.length,s=uu(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Q0,s[o])}function L1(r){switch(r){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return x1;case 35676:return v1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return b1;case 5125:return w1;case 36294:return T1;case 36295:return E1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}}var Zd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f1(e.type)}},Jd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L1(e.type)}},$d=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Xd=/(\w+)(\])?(\[|\.)?/g;function O0(r,t){r.seq.push(t),r.map[t.id]=t}function D1(r,t,e){let n=r.name,i=n.length;for(Xd.lastIndex=0;;){let s=Xd.exec(n),o=Xd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){O0(e,c===void 0?new Zd(a,r,t):new Jd(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new $d(a),O0(e,d)),e=d}}}var Vo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);D1(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function B0(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var N1=37297,U1=0;function F1(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var z0=new te;function O1(r){he._getMatrix(z0,he.workingColorSpace,r);let t=`mat3( ${z0.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Ba:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function k0(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+F1(r.getShaderSource(t),a)}else return s}function B1(r,t){let e=O1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var z1={[md]:"Linear",[gd]:"Reinhard",[_d]:"Cineon",[xd]:"ACESFilmic",[yd]:"AgX",[ll]:"Neutral",[vd]:"Custom"};function k1(r,t){let e=z1[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var au=new O;function V1(){he.getLuminanceCoefficients(au);let r=au.x.toFixed(4),t=au.y.toFixed(4),e=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function H1(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W1(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function yl(r){return r!==""}function V0(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(r){return r.replace(X1,Y1)}var q1=new Map;function Y1(r,t){let e=re[t];if(e===void 0){let n=q1.get(t);if(n!==void 0)e=re[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kd(e)}var Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(r){return r.replace(Z1,J1)}function J1(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function W0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var $1={[al]:"SHADOWMAP_TYPE_PCF",[No]:"SHADOWMAP_TYPE_VSM"};function K1(r){return $1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Q1={[$r]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[cl]:"ENVMAP_TYPE_CUBE_UV"};function j1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Q1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var tw={[Ps]:"ENVMAP_MODE_REFRACTION"};function ew(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":tw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nw={[_h]:"ENVMAP_BLENDING_MULTIPLY",[a0]:"ENVMAP_BLENDING_MIX",[l0]:"ENVMAP_BLENDING_ADD"};function iw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":nw[r.combine]||"ENVMAP_BLENDING_NONE"}function rw(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sw(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=K1(e),c=j1(e),h=ew(e),d=iw(e),u=rw(e),f=G1(e),m=H1(s),_=i.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(yl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(yl).join(`
`),p.length>0&&(p+=`
`)):(g=[W0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),p=[W0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?re.tonemapping_pars_fragment:"",e.toneMapping!==Ni?k1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,B1("linearToOutputTexel",e.outputColorSpace),V1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yl).join(`
`)),o=Kd(o),o=V0(o,e),o=G0(o,e),a=Kd(a),a=V0(a,e),a=G0(a,e),o=H0(o),a=H0(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=M+g+o,v=M+p+a,S=B0(i,i.VERTEX_SHADER,A),b=B0(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(b)||"",z=I.trim(),X=k.trim(),G=L.trim(),K=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,b);else{let R=k0(i,S,"vertex"),j=k0(i,b,"fragment");$t("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+R+`
`+j)}else z!==""?Zt("WebGLProgram: Program Info Log:",z):(X===""||G==="")&&(Y=!1);Y&&(D.diagnostics={runnable:K,programLog:z,vertexShader:{log:X,prefix:g},fragmentShader:{log:G,prefix:p}})}i.deleteShader(S),i.deleteShader(b),x=new Vo(i,_),T=W1(i,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,N1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}var ow=0,Qd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jd(t),e.set(t,n)),n}},jd=class{constructor(t){this.id=ow++,this.code=t,this.usedTimes=0}};function aw(r){return r===jr||r===ml||r===gl}function lw(r,t,e,n,i,s){let o=new Va,a=new Qd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,D,I,k){let L=D.fog,z=I.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||X,G),Y=K&&K.mapping===cl?K.image.height:null,R=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let j=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,bt=j!==void 0?j.length:0,wt=0;z.morphAttributes.position!==void 0&&(wt=1),z.morphAttributes.normal!==void 0&&(wt=2),z.morphAttributes.color!==void 0&&(wt=3);let Ht,Bt,Yt,J;if(R){let Ot=tr[R];Ht=Ot.vertexShader,Bt=Ot.fragmentShader}else{Ht=x.vertexShader,Bt=x.fragmentShader;let Ot=a.getVertexShaderStage(x),st=a.getFragmentShaderStage(x);a.update(x,Ot,st),Yt=Ot.id,J=st.id}let tt=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),zt=I.isInstancedMesh===!0,mt=I.isBatchedMesh===!0,kt=!!x.map,lt=!!x.matcap,ut=!!K,Tt=!!x.aoMap,Wt=!!x.lightMap,B=!!x.bumpMap&&x.wireframe===!1,Kt=!!x.normalMap,Qt=!!x.displacementMap,de=!!x.emissiveMap,qt=!!x.metalnessMap,pe=!!x.roughnessMap,F=x.anisotropy>0,Ce=x.clearcoat>0,Xt=x.dispersion>0,P=x.retroreflectivity>0,y=x.iridescence>0,V=x.sheen>0,H=x.transmission>0,$=F&&!!x.anisotropyMap,ct=Ce&&!!x.clearcoatMap,ot=Ce&&!!x.clearcoatNormalMap,Q=Ce&&!!x.clearcoatRoughnessMap,et=y&&!!x.iridescenceMap,ft=y&&!!x.iridescenceThicknessMap,Rt=V&&!!x.sheenColorMap,_t=V&&!!x.sheenRoughnessMap,gt=!!x.specularMap,ht=!!x.specularColorMap,Ut=!!x.specularIntensityMap,Gt=H&&!!x.transmissionMap,N=H&&!!x.thicknessMap,dt=!!x.gradientMap,nt=!!x.alphaMap,xt=x.alphaTest>0,yt=!!x.alphaHash,it=!!x.extensions,at=Ni;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(at=r.toneMapping);let rt={shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:Ht,fragmentShader:Bt,defines:x.defines,customVertexShaderID:Yt,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:mt,batchingColor:mt&&I._colorsTexture!==null,instancing:zt,instancingColor:zt&&I.instanceColor!==null,instancingMorph:zt&&I.morphTexture!==null,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:lt,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:Y,aoMap:Tt,lightMap:Wt,bumpMap:B,normalMap:Kt,displacementMap:Qt,emissiveMap:de,normalMapObjectSpace:Kt&&x.normalMapType===u0,normalMapTangentSpace:Kt&&x.normalMapType===_l,packedNormalMap:Kt&&x.normalMapType===_l&&aw(x.normalMap.format),metalnessMap:qt,roughnessMap:pe,anisotropy:F,anisotropyMap:$,clearcoat:Ce,clearcoatMap:ct,clearcoatNormalMap:ot,clearcoatRoughnessMap:Q,dispersion:Xt,retroreflection:P,iridescence:y,iridescenceMap:et,iridescenceThicknessMap:ft,sheen:V,sheenColorMap:Rt,sheenRoughnessMap:_t,specularMap:gt,specularColorMap:ht,specularIntensityMap:Ut,transmission:H,transmissionMap:Gt,thicknessMap:N,gradientMap:dt,opaque:x.transparent===!1&&x.blending===Uo&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:xt,alphaHash:yt,combine:x.combine,mapUv:kt&&m(x.map.channel),aoMapUv:Tt&&m(x.aoMap.channel),lightMapUv:Wt&&m(x.lightMap.channel),bumpMapUv:B&&m(x.bumpMap.channel),normalMapUv:Kt&&m(x.normalMap.channel),displacementMapUv:Qt&&m(x.displacementMap.channel),emissiveMapUv:de&&m(x.emissiveMap.channel),metalnessMapUv:qt&&m(x.metalnessMap.channel),roughnessMapUv:pe&&m(x.roughnessMap.channel),anisotropyMapUv:$&&m(x.anisotropyMap.channel),clearcoatMapUv:ct&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&m(x.sheenRoughnessMap.channel),specularMapUv:gt&&m(x.specularMap.channel),specularColorMapUv:ht&&m(x.specularColorMap.channel),specularIntensityMapUv:Ut&&m(x.specularIntensityMap.channel),transmissionMapUv:Gt&&m(x.transmissionMap.channel),thicknessMapUv:N&&m(x.thicknessMap.channel),alphaMapUv:nt&&m(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Kt||F),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(kt||nt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let T=f[x.type],C;if(T){let D=tr[T];C=T0.clone(D.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new sw(r,T,x,i),c.push(C),h.set(T,C)),C}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:A,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function cw(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function hw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function X0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function q0(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,g,p){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,f,m,_,g,p,M){M.reversedDepth===!0&&(g=-g);let A=a(u,f,m,_,g,p);m.transmission>0?n.push(A):m.transparent===!0?i.push(A):e.push(A)}function c(u,f,m,_,g,p){let M=a(u,f,m,_,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||hw),n.length>1&&n.sort(f||X0),i.length>1&&i.sort(f||X0)}function d(){for(let u=t,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function uw(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new q0,r.set(n,[o])):i>=s.length?(o=new q0,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function fw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Jt};break;case"SpotLight":e={position:new O,direction:new O,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function dw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var pw=0;function mw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function gw(r){let t=new fw,e=dw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,s=new Ee,o=new Ee;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,M=0,A=0,v=0,S=0,b=0,E=0,x=0,T=0,C=0;c.sort(mw);for(let I=0,k=c.length;I<k;I++){let L=c[I],z=L.color,X=L.intensity,G=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===jr?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*X,d+=z.g*X,u+=z.b*X;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],X);C++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,j=e.get(L);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=K;let bt=R.getViewportCount();for(let wt=0;wt<bt;wt++)n.sunShadowMatrix[_+wt]=R.getMatrix(wt),n.sunShadowCascade[_+wt]=R._cascadeData[wt];_+=bt,m++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,j=e.get(L);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=L.shadow.matrix,S++}n.directional[g]=Y,g++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(X),Y.distance=G,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[M]=Y;let R=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,R.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[M]=R.matrix,L.castShadow){let j=e.get(L);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=K,E++}M++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(z).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=Y,A++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let R=L.shadow,j=e.get(L);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,j.shadowCameraNear=R.camera.near,j.shadowCameraFar=R.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=Y,p++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(X),Y.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[v]=Y,v++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==m||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==x||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=f,D.directionalLength=g,D.pointLength=p,D.spotLength=M,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=m,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=x,D.numLightProbes=C,n.version=pw++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let v=c[M];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(v.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Y0(r){let t=new gw(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _w(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Y0(r),t.set(i,[a])):s>=o.length?(a=new Y0(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yw=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Sw=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Z0=new Ee,vl=new O,qd=new O;function Mw(r,t,e){let n=new Ro,i=new Dt,s=new Dt,o=new Fe,a=new nh,l=new ih,c={},h=e.maxTextureSize,d={[Jr]:xn,[xn]:Jr,[wi]:wi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:xw,fragmentShader:vw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Pn;m.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ae(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let p=this.type;this.render=function(b,E,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Gg&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=al);let T=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Qi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=p!==this.type;k&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=b.length;L<z;L++){let X=b[L],G=X.shadow;if(G===void 0){Zt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let K=G.getFrameExtents();i.multiply(K),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,G.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===No){if(X.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qn(i.x,i.y,{format:jr,type:Fi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Wr(i.x,i.y,Ti),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Yi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un}else X.isPointLight?(G.map=new lu(i.x),G.map.depthTexture=new Yc(i.x,Ui)):(G.map=new Qn(i.x,i.y),G.map.depthTexture=new Wr(i.x,i.y,Ui)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Yi,this.type===al?(G.map.depthTexture.compareFunction=Y?su:ru,G.map.depthTexture.minFilter=_n,G.map.depthTexture.magFilter=_n):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let R=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,x);for(let j=0;j<R;j++){let bt=G.getCamera(j);if(X.isPointLight){let wt=G.camera,Ht=G.matrix,Bt=X.distance||wt.far;Bt!==wt.far&&(wt.far=Bt,wt.updateProjectionMatrix()),vl.setFromMatrixPosition(X.matrixWorld),wt.position.copy(vl),qd.copy(wt.position),qd.add(yw[j]),wt.up.copy(Sw[j]),wt.lookAt(qd),wt.updateMatrixWorld(),Ht.makeTranslation(-vl.x,-vl.y,-vl.z),Z0.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Z0,wt.coordinateSystem,wt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,j),r.clear();else{j===0&&(r.setRenderTarget(G.map),r.clear());let wt=G.getViewport(j);o.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),I.viewport(o)}n=G.getFrustum(j),v(E,x,bt,X,this.type)}G.isPointLightShadow!==!0&&this.type===No&&M(G,x),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(T,C,D)};function M(b,E){let x=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Qn(i.x,i.y,{format:jr,type:Fi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,x,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,x,f,_,null)}function A(b,E,x,T){let C=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=C.uuid,k=E.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let z=L[k];z===void 0&&(z=C.clone(),L[k]=z,E.addEventListener("dispose",S)),C=z}if(C.visible=E.visible,C.wireframe=E.wireframe,T===No?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=r.properties.get(C);I.light=x}return C}function v(b,E,x,T,C){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===No)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let k=t.update(b),L=b.material;if(Array.isArray(L)){let z=k.groups;for(let X=0,G=z.length;X<G;X++){let K=z[X],Y=L[K.materialIndex];if(Y&&Y.visible){let R=A(b,Y,T,C);b.onBeforeShadow(r,b,E,x,k,R,K),r.renderBufferDirect(x,null,k,R,b,K),b.onAfterShadow(r,b,E,x,k,R,K)}}}else if(L.visible){let z=A(b,L,T,C);b.onBeforeShadow(r,b,E,x,k,z,null),r.renderBufferDirect(x,null,k,z,b,null),b.onAfterShadow(r,b,E,x,k,z,null)}}let I=b.children;for(let k=0,L=I.length;k<L;k++)v(I[k],E,x,T,C)}function S(b){b.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function bw(r,t){function e(){let N=!1,dt=new Fe,nt=null,xt=new Fe(0,0,0,0);return{setMask:function(yt){nt!==yt&&!N&&(r.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){N=yt},setClear:function(yt,it,at,rt,Ot){Ot===!0&&(yt*=rt,it*=rt,at*=rt),dt.set(yt,it,at,rt),xt.equals(dt)===!1&&(r.clearColor(yt,it,at,rt),xt.copy(dt))},reset:function(){N=!1,nt=null,xt.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,nt=null,xt=null,yt=null;return{setReversed:function(it){if(dt!==it){let at=t.get("EXT_clip_control");it?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),dt=it;let rt=yt;yt=null,this.setClear(rt)}},getReversed:function(){return dt},setTest:function(it){it?tt(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(it){nt!==it&&!N&&(r.depthMask(it),nt=it)},setFunc:function(it){if(dt&&(it=b0[it]),xt!==it){switch(it){case Dc:r.depthFunc(r.NEVER);break;case Nc:r.depthFunc(r.ALWAYS);break;case Uc:r.depthFunc(r.LESS);break;case Mo:r.depthFunc(r.LEQUAL);break;case Fc:r.depthFunc(r.EQUAL);break;case Oc:r.depthFunc(r.GEQUAL);break;case Bc:r.depthFunc(r.GREATER);break;case zc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xt=it}},setLocked:function(it){N=it},setClear:function(it){yt!==it&&(yt=it,dt&&(it=1-it),r.clearDepth(it))},reset:function(){N=!1,nt=null,xt=null,yt=null,dt=!1}}}function i(){let N=!1,dt=null,nt=null,xt=null,yt=null,it=null,at=null,rt=null,Ot=null;return{setTest:function(st){N||(st?tt(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(st){dt!==st&&!N&&(r.stencilMask(st),dt=st)},setFunc:function(st,Vt,Pt){(nt!==st||xt!==Vt||yt!==Pt)&&(r.stencilFunc(st,Vt,Pt),nt=st,xt=Vt,yt=Pt)},setOp:function(st,Vt,Pt){(it!==st||at!==Vt||rt!==Pt)&&(r.stencilOp(st,Vt,Pt),it=st,at=Vt,rt=Pt)},setLocked:function(st){N=st},setClear:function(st){Ot!==st&&(r.clearStencil(st),Ot=st)},reset:function(){N=!1,dt=null,nt=null,xt=null,yt=null,it=null,at=null,rt=null,Ot=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,M=null,A=null,v=null,S=null,b=null,E=null,x=new Jt(0,0,0),T=0,C=!1,D=null,I=null,k=null,L=null,z=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=K>=2);let R=null,j={},bt=r.getParameter(r.SCISSOR_BOX),wt=r.getParameter(r.VIEWPORT),Ht=new Fe().fromArray(bt),Bt=new Fe().fromArray(wt);function Yt(N,dt,nt,xt){let yt=new Uint8Array(4),it=r.createTexture();r.bindTexture(N,it),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<nt;at++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,xt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(dt+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return it}let J={};J[r.TEXTURE_2D]=Yt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(r.DEPTH_TEST),o.setFunc(Mo),B(!1),Kt(cd),tt(r.CULL_FACE),Tt(Qi);function tt(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function pt(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function zt(N,dt){return u[N]!==dt?(r.bindFramebuffer(N,dt),u[N]=dt,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function mt(N,dt){let nt=m,xt=!1;if(N){nt=f.get(dt),nt===void 0&&(nt=[],f.set(dt,nt));let yt=N.textures;if(nt.length!==yt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let it=0,at=yt.length;it<at;it++)nt[it]=r.COLOR_ATTACHMENT0+it;nt.length=yt.length,xt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,xt=!0);xt&&r.drawBuffers(nt)}function kt(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let lt={[Rs]:r.FUNC_ADD,[Wg]:r.FUNC_SUBTRACT,[Xg]:r.FUNC_REVERSE_SUBTRACT};lt[qg]=r.MIN,lt[Yg]=r.MAX;let ut={[Zg]:r.ZERO,[Jg]:r.ONE,[$g]:r.SRC_COLOR,[dd]:r.SRC_ALPHA,[n0]:r.SRC_ALPHA_SATURATE,[t0]:r.DST_COLOR,[Qg]:r.DST_ALPHA,[Kg]:r.ONE_MINUS_SRC_COLOR,[pd]:r.ONE_MINUS_SRC_ALPHA,[e0]:r.ONE_MINUS_DST_COLOR,[jg]:r.ONE_MINUS_DST_ALPHA,[i0]:r.CONSTANT_COLOR,[r0]:r.ONE_MINUS_CONSTANT_COLOR,[s0]:r.CONSTANT_ALPHA,[o0]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(N,dt,nt,xt,yt,it,at,rt,Ot,st){if(N===Qi){g===!0&&(pt(r.BLEND),g=!1);return}if(g===!1&&(tt(r.BLEND),g=!0),N!==Hg){if(N!==p||st!==C){if((M!==Rs||S!==Rs)&&(r.blendEquation(r.FUNC_ADD),M=Rs,S=Rs),st)switch(N){case Uo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hd:r.blendFunc(r.ONE,r.ONE);break;case ud:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$t("WebGLState: Invalid blending: ",N);break}else switch(N){case Uo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ud:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fd:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",N);break}A=null,v=null,b=null,E=null,x.set(0,0,0),T=0,p=N,C=st}return}yt=yt||dt,it=it||nt,at=at||xt,(dt!==M||yt!==S)&&(r.blendEquationSeparate(lt[dt],lt[yt]),M=dt,S=yt),(nt!==A||xt!==v||it!==b||at!==E)&&(r.blendFuncSeparate(ut[nt],ut[xt],ut[it],ut[at]),A=nt,v=xt,b=it,E=at),(rt.equals(x)===!1||Ot!==T)&&(r.blendColor(rt.r,rt.g,rt.b,Ot),x.copy(rt),T=Ot),p=N,C=!1}function Wt(N,dt){N.side===wi?pt(r.CULL_FACE):tt(r.CULL_FACE);let nt=N.side===xn;dt&&(nt=!nt),B(nt),N.blending===Uo&&N.transparent===!1?Tt(Qi):Tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let xt=N.stencilWrite;a.setTest(xt),xt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),de(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function B(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function Kt(N){N!==kg?(tt(r.CULL_FACE),N!==I&&(N===cd?r.cullFace(r.BACK):N===Vg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),I=N}function Qt(N){N!==k&&(G&&r.lineWidth(N),k=N)}function de(N,dt,nt){N?(tt(r.POLYGON_OFFSET_FILL),(L!==dt||z!==nt)&&(L=dt,z=nt,o.getReversed()&&(dt=-dt),r.polygonOffset(dt,nt))):pt(r.POLYGON_OFFSET_FILL)}function qt(N){N?tt(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function pe(N){N===void 0&&(N=r.TEXTURE0+X-1),R!==N&&(r.activeTexture(N),R=N)}function F(N,dt,nt){nt===void 0&&(R===null?nt=r.TEXTURE0+X-1:nt=R);let xt=j[nt];xt===void 0&&(xt={type:void 0,texture:void 0},j[nt]=xt),(xt.type!==N||xt.texture!==dt)&&(R!==nt&&(r.activeTexture(nt),R=nt),r.bindTexture(N,dt||J[N]),xt.type=N,xt.texture=dt)}function Ce(){let N=j[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Xt(){try{r.compressedTexImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function y(){try{r.texSubImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function V(){try{r.texSubImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function ct(){try{r.texStorage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function ot(){try{r.texStorage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function Q(){try{r.texImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function et(){try{r.texImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function ft(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Rt(N,dt){d[N]!==dt&&(r.pixelStorei(N,dt),d[N]=dt)}function _t(N){Ht.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ht.copy(N))}function gt(N){Bt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Bt.copy(N))}function ht(N,dt){let nt=c.get(dt);nt===void 0&&(nt=new WeakMap,c.set(dt,nt));let xt=nt.get(N);xt===void 0&&(xt=r.getUniformBlockIndex(dt,N.name),nt.set(N,xt))}function Ut(N,dt){let xt=c.get(dt).get(N);l.get(dt)!==xt&&(r.uniformBlockBinding(dt,xt,N.__bindingPointIndex),l.set(dt,xt))}function Gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,j={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,M=null,A=null,v=null,S=null,b=null,E=null,x=new Jt(0,0,0),T=0,C=!1,D=null,I=null,k=null,L=null,z=null,Ht.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:tt,disable:pt,bindFramebuffer:zt,drawBuffers:mt,useProgram:kt,setBlending:Tt,setMaterial:Wt,setFlipSided:B,setCullFace:Kt,setLineWidth:Qt,setPolygonOffset:de,setScissorTest:qt,activeTexture:pe,bindTexture:F,unbindTexture:Ce,compressedTexImage2D:Xt,compressedTexImage3D:P,texImage2D:Q,texImage3D:et,pixelStorei:Rt,getParameter:ft,updateUBOMapping:ht,uniformBlockBinding:Ut,texStorage2D:ct,texStorage3D:ot,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:_t,viewport:gt,reset:Gt}}function ww(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return m?new OffscreenCanvas(P,y):za("canvas")}function g(P,y,V){let H=1,$=Xt(P);if(($.width>V||$.height>V)&&(H=V/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ct=Math.floor(H*$.width),ot=Math.floor(H*$.height);u===void 0&&(u=_(ct,ot));let Q=y?_(ct,ot):u;return Q.width=ct,Q.height=ot,Q.getContext("2d").drawImage(P,0,0,ct,ot),Zt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ot+")."),Q}else return"data"in P&&Zt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function p(P){return P.generateMipmaps}function M(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(P,y,V,H,$,ct=!1){if(P!==null){if(r[P]!==void 0)return r[P];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot;H&&(ot=t.get("EXT_texture_norm16"),ot||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===r.RED&&(V===r.FLOAT&&(Q=r.R32F),V===r.HALF_FLOAT&&(Q=r.R16F),V===r.UNSIGNED_BYTE&&(Q=r.R8),V===r.UNSIGNED_SHORT&&ot&&(Q=ot.R16_EXT),V===r.SHORT&&ot&&(Q=ot.R16_SNORM_EXT)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.R8UI),V===r.UNSIGNED_SHORT&&(Q=r.R16UI),V===r.UNSIGNED_INT&&(Q=r.R32UI),V===r.BYTE&&(Q=r.R8I),V===r.SHORT&&(Q=r.R16I),V===r.INT&&(Q=r.R32I)),y===r.RG&&(V===r.FLOAT&&(Q=r.RG32F),V===r.HALF_FLOAT&&(Q=r.RG16F),V===r.UNSIGNED_BYTE&&(Q=r.RG8),V===r.UNSIGNED_SHORT&&ot&&(Q=ot.RG16_EXT),V===r.SHORT&&ot&&(Q=ot.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.RG8UI),V===r.UNSIGNED_SHORT&&(Q=r.RG16UI),V===r.UNSIGNED_INT&&(Q=r.RG32UI),V===r.BYTE&&(Q=r.RG8I),V===r.SHORT&&(Q=r.RG16I),V===r.INT&&(Q=r.RG32I)),y===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),V===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),V===r.UNSIGNED_INT&&(Q=r.RGB32UI),V===r.BYTE&&(Q=r.RGB8I),V===r.SHORT&&(Q=r.RGB16I),V===r.INT&&(Q=r.RGB32I)),y===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),V===r.UNSIGNED_INT&&(Q=r.RGBA32UI),V===r.BYTE&&(Q=r.RGBA8I),V===r.SHORT&&(Q=r.RGBA16I),V===r.INT&&(Q=r.RGBA32I)),y===r.RGB&&(V===r.UNSIGNED_SHORT&&ot&&(Q=ot.RGB16_EXT),V===r.SHORT&&ot&&(Q=ot.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),y===r.RGBA){let et=ct?Ba:he.getTransfer($);V===r.FLOAT&&(Q=r.RGBA32F),V===r.HALF_FLOAT&&(Q=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Q=et===xe?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ot&&(Q=ot.RGBA16_EXT),V===r.SHORT&&ot&&(Q=ot.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(P,y){let V;return P?y===null||y===Ui||y===Oo?V=r.DEPTH24_STENCIL8:y===Ti?V=r.DEPTH32F_STENCIL8:y===Fo&&(V=r.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ui||y===Oo?V=r.DEPTH_COMPONENT24:y===Ti?V=r.DEPTH_COMPONENT32F:y===Fo&&(V=r.DEPTH_COMPONENT16),V}function b(P,y){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function E(P){let y=P.target;y.removeEventListener("dispose",E),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(P){let y=P.target;y.removeEventListener("dispose",x),D(y)}function T(P){let y=n.get(P);if(y.__webglInit===void 0)return;let V=P.source,H=f.get(V);if(H){let $=H[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(P),Object.keys(H).length===0&&f.delete(V)}n.remove(P)}function C(P){let y=n.get(P);r.deleteTexture(y.__webglTexture);let V=P.source,H=f.get(V);delete H[y.__cacheKey],o.memory.textures--}function D(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let $=0;$<y.__webglFramebuffer[H].length;$++)r.deleteFramebuffer(y.__webglFramebuffer[H][$]);else r.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)r.deleteFramebuffer(y.__webglFramebuffer[H]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=P.textures;for(let H=0,$=V.length;H<$;H++){let ct=n.get(V[H]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(V[H])}n.remove(P)}let I=0;function k(){I=0}function L(){return I}function z(P){I=P}function X(){let P=I;return P>=i.maxTextures&&Zt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function G(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function K(P,y){let V=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let H=P.image;if(H===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(V,P,y);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function Y(P,y){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){pt(V,P,y);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function R(P,y){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){pt(V,P,y);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function j(P,y){let V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){zt(V,P,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}let bt={[kc]:r.REPEAT,[qi]:r.CLAMP_TO_EDGE,[Vc]:r.MIRRORED_REPEAT},wt={[un]:r.NEAREST,[c0]:r.NEAREST_MIPMAP_NEAREST,[hl]:r.NEAREST_MIPMAP_LINEAR,[_n]:r.LINEAR,[yh]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},Ht={[d0]:r.NEVER,[x0]:r.ALWAYS,[p0]:r.LESS,[ru]:r.LEQUAL,[m0]:r.EQUAL,[su]:r.GEQUAL,[g0]:r.GREATER,[_0]:r.NOTEQUAL};function Bt(P,y){if(y.type===Ti&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===_n||y.magFilter===yh||y.magFilter===hl||y.magFilter===Kr||y.minFilter===_n||y.minFilter===yh||y.minFilter===hl||y.minFilter===Kr)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,bt[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,bt[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,bt[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,wt[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,wt[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ht[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==hl&&y.minFilter!==Kr||y.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Yt(P,y){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",E));let H=y.source,$=f.get(H);$===void 0&&($={},f.set(H,$));let ct=G(y);if(ct!==P.__cacheKey){$[ct]===void 0&&($[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),$[ct].usedTimes++;let ot=$[P.__cacheKey];ot!==void 0&&($[P.__cacheKey].usedTimes--,ot.usedTimes===0&&C(y)),P.__cacheKey=ct,P.__webglTexture=$[ct].texture}return V}function J(P,y,V){return Math.floor(Math.floor(P/V)/y)}function tt(P,y,V,H){let ct=P.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,V,H,y.data);else{ct.sort((Rt,_t)=>Rt.start-_t.start);let ot=0;for(let Rt=1;Rt<ct.length;Rt++){let _t=ct[ot],gt=ct[Rt],ht=_t.start+_t.count,Ut=J(gt.start,y.width,4),Gt=J(_t.start,y.width,4);gt.start<=ht+1&&Ut===Gt&&J(gt.start+gt.count-1,y.width,4)===Ut?_t.count=Math.max(_t.count,gt.start+gt.count-_t.start):(++ot,ct[ot]=gt)}ct.length=ot+1;let Q=e.getParameter(r.UNPACK_ROW_LENGTH),et=e.getParameter(r.UNPACK_SKIP_PIXELS),ft=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Rt=0,_t=ct.length;Rt<_t;Rt++){let gt=ct[Rt],ht=Math.floor(gt.start/4),Ut=Math.ceil(gt.count/4),Gt=ht%y.width,N=Math.floor(ht/y.width),dt=Ut,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,Gt,N,dt,nt,V,H,y.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,et),e.pixelStorei(r.UNPACK_SKIP_ROWS,ft)}}function pt(P,y,V){let H=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=r.TEXTURE_3D);let $=Yt(P,y),ct=y.source;e.bindTexture(H,P.__webglTexture,r.TEXTURE0+V);let ot=n.get(ct);if(ct.version!==ot.__version||$===!0){if(e.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let nt=he.getPrimaries(he.workingColorSpace),xt=y.colorSpace===xr?null:he.getPrimaries(y.colorSpace),yt=y.colorSpace===xr||nt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let et=g(y.image,!1,i.maxTextureSize);et=Ce(y,et);let ft=s.convert(y.format,y.colorSpace),Rt=s.convert(y.type),_t=v(y.internalFormat,ft,Rt,y.normalized,y.colorSpace,y.isVideoTexture);Bt(H,y);let gt,ht=y.mipmaps,Ut=y.isVideoTexture!==!0,Gt=ot.__version===void 0||$===!0,N=ct.dataReady,dt=b(y,et);if(y.isDepthTexture)_t=S(y.format===Qr,y.type),Gt&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,_t,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,_t,et.width,et.height,0,ft,Rt,null));else if(y.isDataTexture)if(ht.length>0){Ut&&Gt&&e.texStorage2D(r.TEXTURE_2D,dt,_t,ht[0].width,ht[0].height);for(let nt=0,xt=ht.length;nt<xt;nt++)gt=ht[nt],Ut?N&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,gt.width,gt.height,ft,Rt,gt.data):e.texImage2D(r.TEXTURE_2D,nt,_t,gt.width,gt.height,0,ft,Rt,gt.data);y.generateMipmaps=!1}else Ut?(Gt&&e.texStorage2D(r.TEXTURE_2D,dt,_t,et.width,et.height),N&&tt(y,et,ft,Rt)):e.texImage2D(r.TEXTURE_2D,0,_t,et.width,et.height,0,ft,Rt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ut&&Gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,_t,ht[0].width,ht[0].height,et.depth);for(let nt=0,xt=ht.length;nt<xt;nt++)if(gt=ht[nt],y.format!==Ei)if(ft!==null)if(Ut){if(N)if(y.layerUpdates.size>0){let yt=Ud(gt.width,gt.height,y.format,y.type);for(let it of y.layerUpdates){let at=gt.data.subarray(it*yt/gt.data.BYTES_PER_ELEMENT,(it+1)*yt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,it,gt.width,gt.height,1,ft,at)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,et.depth,ft,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,_t,gt.width,gt.height,et.depth,0,gt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,gt.width,gt.height,et.depth,ft,Rt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,_t,gt.width,gt.height,et.depth,0,ft,Rt,gt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ut&&Gt&&e.texStorage2D(r.TEXTURE_2D,dt,_t,ht[0].width,ht[0].height);for(let nt=0,xt=ht.length;nt<xt;nt++)gt=ht[nt],y.format!==Ei?ft!==null?Ut?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,gt.width,gt.height,ft,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,_t,gt.width,gt.height,0,gt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,gt.width,gt.height,ft,Rt,gt.data):e.texImage2D(r.TEXTURE_2D,nt,_t,gt.width,gt.height,0,ft,Rt,gt.data)}else if(y.isDataArrayTexture)if(Ut){if(Gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,_t,et.width,et.height,et.depth),N)if(y.layerUpdates.size>0){let nt=Ud(et.width,et.height,y.format,y.type);for(let xt of y.layerUpdates){let yt=et.data.subarray(xt*nt/et.data.BYTES_PER_ELEMENT,(xt+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,et.width,et.height,1,ft,Rt,yt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,Rt,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,_t,et.width,et.height,et.depth,0,ft,Rt,et.data);else if(y.isData3DTexture)Ut?(Gt&&e.texStorage3D(r.TEXTURE_3D,dt,_t,et.width,et.height,et.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,Rt,et.data)):e.texImage3D(r.TEXTURE_3D,0,_t,et.width,et.height,et.depth,0,ft,Rt,et.data);else if(y.isFramebufferTexture){if(Gt)if(Ut)e.texStorage2D(r.TEXTURE_2D,dt,_t,et.width,et.height);else{let nt=et.width,xt=et.height;for(let yt=0;yt<dt;yt++)e.texImage2D(r.TEXTURE_2D,yt,_t,nt,xt,0,ft,Rt,null),nt>>=1,xt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),et.parentNode!==nt){nt.appendChild(et),d.add(y),nt.onpaint=xt=>{let yt=xt.changedElements;for(let it of d)yt.includes(it.image)&&(it.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,et);else{let yt=r.RGBA,it=r.RGBA,at=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,yt,it,at,et)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ht.length>0){if(Ut&&Gt){let nt=Xt(ht[0]);e.texStorage2D(r.TEXTURE_2D,dt,_t,nt.width,nt.height)}for(let nt=0,xt=ht.length;nt<xt;nt++)gt=ht[nt],Ut?N&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ft,Rt,gt):e.texImage2D(r.TEXTURE_2D,nt,_t,ft,Rt,gt);y.generateMipmaps=!1}else if(Ut){if(Gt){let nt=Xt(et);e.texStorage2D(r.TEXTURE_2D,dt,_t,nt.width,nt.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,Rt,et)}else e.texImage2D(r.TEXTURE_2D,0,_t,ft,Rt,et);p(y)&&M(H),ot.__version=ct.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function zt(P,y,V){if(y.image.length!==6)return;let H=Yt(P,y),$=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);let ct=n.get($);if($.version!==ct.__version||H===!0){e.activeTexture(r.TEXTURE0+V);let ot=he.getPrimaries(he.workingColorSpace),Q=y.colorSpace===xr?null:he.getPrimaries(y.colorSpace),et=y.colorSpace===xr||ot===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ft=y.isCompressedTexture||y.image[0].isCompressedTexture,Rt=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!ft&&!Rt?_t[it]=g(y.image[it],!0,i.maxCubemapSize):_t[it]=Rt?y.image[it].image:y.image[it],_t[it]=Ce(y,_t[it]);let gt=_t[0],ht=s.convert(y.format,y.colorSpace),Ut=s.convert(y.type),Gt=v(y.internalFormat,ht,Ut,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,dt=ct.__version===void 0||H===!0,nt=$.dataReady,xt=b(y,gt);Bt(r.TEXTURE_CUBE_MAP,y);let yt;if(ft){N&&dt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Gt,gt.width,gt.height);for(let it=0;it<6;it++){yt=_t[it].mipmaps;for(let at=0;at<yt.length;at++){let rt=yt[at];y.format!==Ei?ht!==null?N?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,ht,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,Gt,rt.width,rt.height,0,rt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,ht,Ut,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,Gt,rt.width,rt.height,0,ht,Ut,rt.data)}}}else{if(yt=y.mipmaps,N&&dt){yt.length>0&&xt++;let it=Xt(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Gt,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,ht,Ut,_t[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,_t[it].width,_t[it].height,0,ht,Ut,_t[it].data);for(let at=0;at<yt.length;at++){let Ot=yt[at].image[it].image;N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,Ot.width,Ot.height,ht,Ut,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,Gt,Ot.width,Ot.height,0,ht,Ut,Ot.data)}}else{N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ht,Ut,_t[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,ht,Ut,_t[it]);for(let at=0;at<yt.length;at++){let rt=yt[at];N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,ht,Ut,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,Gt,ht,Ut,rt.image[it])}}}p(y)&&M(r.TEXTURE_CUBE_MAP),ct.__version=$.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function mt(P,y,V,H,$,ct){let ot=s.convert(V.format,V.colorSpace),Q=s.convert(V.type),et=v(V.internalFormat,ot,Q,V.normalized,V.colorSpace),ft=n.get(y),Rt=n.get(V);if(Rt.__renderTarget=y,!ft.__hasExternalTextures){let _t=Math.max(1,y.width>>ct),gt=Math.max(1,y.height>>ct);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,ct,et,_t,gt,y.depth,0,ot,Q,null):e.texImage2D($,ct,et,_t,gt,0,ot,Q,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),pe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,$,Rt.__webglTexture,0,qt(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,$,Rt.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(P,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){let H=y.depthTexture,$=H&&H.isDepthTexture?H.type:null,ct=S(y.stencilBuffer,$),ot=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pe(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(y),ct,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(y),ct,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ct,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,P)}else{let H=y.textures;for(let $=0;$<H.length;$++){let ct=H[$],ot=s.convert(ct.format,ct.colorSpace),Q=s.convert(ct.type),et=v(ct.internalFormat,ot,Q,ct.normalized,ct.colorSpace);pe(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(y),et,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(y),et,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,et,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(P,y,V){let H=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,y.depthTexture);let ft=s.convert(y.depthTexture.format),Rt=s.convert(y.depthTexture.type),_t;y.depthTexture.format===Yi?_t=r.DEPTH_COMPONENT24:y.depthTexture.format===Qr&&(_t=r.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,_t,y.width,y.height,0,ft,Rt,null)}}else K(y.depthTexture,0);let ct=$.__webglTexture,ot=qt(y),Q=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,et=y.depthTexture.format===Qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Yi)pe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,Q,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,et,Q,ct,0);else if(y.depthTexture.format===Qr)pe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,Q,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,et,Q,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(P){let y=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let H=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=H}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let H=0;H<6;H++)lt(y.__webglFramebuffer[H],P,H);else{let H=P.texture.mipmaps;H&&H.length>0?lt(y.__webglFramebuffer[0],P,0):lt(y.__webglFramebuffer,P,0)}else if(V){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=r.createRenderbuffer(),kt(y.__webglDepthbuffer[H],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}else{let H=P.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),kt(y.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(P,y,V){let H=n.get(P);y!==void 0&&mt(H.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ut(P)}function Wt(P){let y=P.texture,V=n.get(P),H=n.get(y);P.addEventListener("dispose",x);let $=P.textures,ct=P.isWebGLCubeRenderTarget===!0,ot=$.length>1;if(ot||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=y.version,o.memory.textures++),ct){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let et=0;et<y.mipmaps.length;et++)V.__webglFramebuffer[Q][et]=r.createFramebuffer()}else V.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)V.__webglFramebuffer[Q]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ot)for(let Q=0,et=$.length;Q<et;Q++){let ft=n.get($[Q]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&pe(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){let et=$[Q];V.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let ft=s.convert(et.format,et.colorSpace),Rt=s.convert(et.type),_t=v(et.internalFormat,ft,Rt,et.normalized,et.colorSpace,P.isXRRenderTarget===!0),gt=qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,_t,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)mt(V.__webglFramebuffer[Q][et],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et);else mt(V.__webglFramebuffer[Q],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(y)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let Q=0,et=$.length;Q<et;Q++){let ft=$[Q],Rt=n.get(ft),_t=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(_t,Rt.__webglTexture),Bt(_t,ft),mt(V.__webglFramebuffer,P,ft,r.COLOR_ATTACHMENT0+Q,_t,0),p(ft)&&M(_t)}e.unbindTexture()}else{let Q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,H.__webglTexture),Bt(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)mt(V.__webglFramebuffer[et],P,y,r.COLOR_ATTACHMENT0,Q,et);else mt(V.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,Q,0);p(y)&&M(Q),e.unbindTexture()}P.depthBuffer&&ut(P)}function B(P){let y=P.textures;for(let V=0,H=y.length;V<H;V++){let $=y[V];if(p($)){let ct=A(P),ot=n.get($).__webglTexture;e.bindTexture(ct,ot),M(ct),e.unbindTexture()}}}let Kt=[],Qt=[];function de(P){if(P.samples>0){if(pe(P)===!1){let y=P.textures,V=P.width,H=P.height,$=r.COLOR_BUFFER_BIT,ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=n.get(P),Q=y.length>1;if(Q)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let et=P.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ot.__webglColorRenderbuffer[ft]);let Rt=n.get(y[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,V,H,0,0,V,H,$,r.NEAREST),l===!0&&(Kt.length=0,Qt.length=0,Kt.push(r.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Kt.push(ct),Qt.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,ot.__webglColorRenderbuffer[ft]);let Rt=n.get(y[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,Rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function qt(P){return Math.min(i.maxSamples,P.samples)}function pe(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(P){let y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function Ce(P,y){let V=P.colorSpace,H=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Oa&&V!==xr&&(he.getTransfer(V)===xe?(H!==Ei||$!==jn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",V)),y}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=R,this.setTextureCube=j,this.rebindTextures=Tt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Tw(r,t){function e(n,i=xr){let s,o=he.getTransfer(i);if(n===jn)return r.UNSIGNED_BYTE;if(n===Mh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===bh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Td)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Md)return r.BYTE;if(n===bd)return r.SHORT;if(n===Fo)return r.UNSIGNED_SHORT;if(n===Sh)return r.INT;if(n===Ui)return r.UNSIGNED_INT;if(n===Ti)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===Ed)return r.ALPHA;if(n===Ad)return r.RGB;if(n===Ei)return r.RGBA;if(n===Yi)return r.DEPTH_COMPONENT;if(n===Qr)return r.DEPTH_STENCIL;if(n===wh)return r.RED;if(n===Th)return r.RED_INTEGER;if(n===jr)return r.RG;if(n===Eh)return r.RG_INTEGER;if(n===Ah)return r.RGBA_INTEGER;if(n===ul||n===fl||n===dl||n===pl)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ch||n===Rh||n===Ph||n===Ih)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===ml||n===Oh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lh||n===Dh)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uh)return s.COMPRESSED_R11_EAC;if(n===Fh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ml)return s.COMPRESSED_RG11_EAC;if(n===Oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bh||n===zh||n===kh||n===Vh||n===Gh||n===Hh||n===Wh||n===Xh||n===qh||n===Yh||n===Zh||n===Jh||n===$h||n===Kh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$h)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qh||n===jh||n===tu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Qh)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===nu||n===gl||n===iu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===eu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Aw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hi({vertexShader:Ew,fragmentShader:Aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ep=class extends Zi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new tp,p={},M=e.getContextAttributes(),A=null,v=null,S=[],b=[],E=new Dt,x=null,T=null,C=new gn;C.viewport=new Fe;let D=new gn;D.viewport=new Fe;let I=[C,D],k=new mh,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=S[J];return tt===void 0&&(tt=new Ao,S[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=S[J];return tt===void 0&&(tt=new Ao,S[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=S[J];return tt===void 0&&(tt=new Ao,S[J]=tt),tt.getHandSpace()};function X(J){let tt=b.indexOf(J.inputSource);if(tt===-1)return;let pt=S[tt];pt!==void 0&&(pt.update(J.inputSource,J.frame,c||o),pt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let J=0;J<S.length;J++){let tt=b[J];tt!==null&&(b[J]=null,S[J].disconnect(tt))}L=null,z=null,g.reset();for(let J in p)delete p[J];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(E.width,E.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,zt=null,mt=null;M.depth&&(mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=M.stencil?Qr:Yi,zt=M.stencil?Oo:Ui);let kt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(kt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Qn(u.textureWidth,u.textureHeight,{format:Ei,type:jn,depthTexture:new Wr(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qn(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(J){for(let tt=0;tt<J.removed.length;tt++){let pt=J.removed[tt],zt=b.indexOf(pt);zt>=0&&(b[zt]=null,S[zt].disconnect(pt))}for(let tt=0;tt<J.added.length;tt++){let pt=J.added[tt],zt=b.indexOf(pt);if(zt===-1){for(let kt=0;kt<S.length;kt++)if(kt>=b.length){b.push(pt),zt=kt;break}else if(b[kt]===null){b[kt]=pt,zt=kt;break}if(zt===-1)break}let mt=S[zt];mt&&mt.connect(pt)}}let Y=new O,R=new O;function j(J,tt,pt){Y.setFromMatrixPosition(tt.matrixWorld),R.setFromMatrixPosition(pt.matrixWorld);let zt=Y.distanceTo(R),mt=tt.projectionMatrix.elements,kt=pt.projectionMatrix.elements,lt=mt[14]/(mt[10]-1),ut=mt[14]/(mt[10]+1),Tt=(mt[9]+1)/mt[5],Wt=(mt[9]-1)/mt[5],B=(mt[8]-1)/mt[0],Kt=(kt[8]+1)/kt[0],Qt=lt*B,de=lt*Kt,qt=zt/(-B+Kt),pe=qt*-B;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(pe),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),mt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=lt+qt,Ce=ut+qt,Xt=Qt-pe,P=de+(zt-pe),y=Tt*ut/Ce*F,V=Wt*ut/Ce*F;J.projectionMatrix.makePerspective(Xt,P,y,V,F,Ce),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function bt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let tt=J.near,pt=J.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),k.near=D.near=C.near=tt,k.far=D.far=C.far=pt,(L!==k.near||z!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,z=k.far),k.layers.mask=J.layers.mask|6,C.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let zt=J.parent,mt=k.cameras;bt(k,zt);for(let kt=0;kt<mt.length;kt++)bt(mt[kt],zt);mt.length===2?j(k,C,D):k.projectionMatrix.copy(C.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),wt(J,k,zt)};function wt(J,tt,pt){pt===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(pt.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=To*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let Ht=null;function Bt(J,tt){if(h=tt.getViewerPose(c||o),m=tt,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let zt=!1;pt.length!==k.cameras.length&&(k.cameras.length=0,zt=!0);for(let ut=0;ut<pt.length;ut++){let Tt=pt[ut],Wt=null;if(f!==null)Wt=f.getViewport(Tt);else{let Kt=d.getViewSubImage(u,Tt);Wt=Kt.viewport,ut===0&&(t.setRenderTargetTextures(v,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(v))}let B=I[ut];B===void 0&&(B=new gn,B.layers.enable(ut),B.viewport=new Fe,I[ut]=B),B.matrix.fromArray(Tt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Tt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),ut===0&&(k.matrix.copy(B.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),zt===!0&&k.cameras.push(B)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let ut=d.getDepthInformation(pt[0]);ut&&ut.isValid&&ut.texture&&g.init(ut,i.renderState)}if(mt&&mt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let ut=0;ut<pt.length;ut++){let Tt=pt[ut].camera;if(Tt){let Wt=p[Tt];Wt||(Wt=new Ya,p[Tt]=Wt);let B=d.getCameraImage(Tt);Wt.sourceTexture=B}}}}for(let pt=0;pt<S.length;pt++){let zt=b[pt],mt=S[pt];zt!==null&&mt!==void 0&&mt.update(zt,tt,c||o)}Ht&&Ht(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let Yt=new J0;Yt.setAnimationLoop(Bt),this.setAnimationLoop=function(J){Ht=J},this.dispose=function(){}}},Cw=new Ee,e_=new te;e_.set(-1,0,0,0,1,0,0,0,1);function Rw(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ld(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===xn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===xn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),A=M.envMap,v=M.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(e_),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pw(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",M));let E=S.program;n.updateUBOMapping(v,E);let x=t.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){let S=d();v.__bindingPointIndex=S;let b=r.createBuffer(),E=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],b=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,T=b.length;x<T;x++){let C=b[x];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)f(C[D],x,D,E);else f(C,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,b,E){if(_(v,S,b,E)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let I=T[D],k=p(I);m(I,v.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function m(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function _(v,S,b,E){let x=v.value,T=S+"_"+b;if(E[T]===void 0)return typeof x=="number"||typeof x=="boolean"?E[T]=x:ArrayBuffer.isView(x)?E[T]=x.slice():E[T]=x.clone(),!0;{let C=E[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(v){let S=v.uniforms,b=0,E=16;for(let T=0,C=S.length;T<C;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,k=D.length;I<k;I++){let L=D[I],z=Array.isArray(L.value)?L.value:[L.value];for(let X=0,G=z.length;X<G;X++){let K=z[X],Y=p(K),R=b%E,j=R%Y.boundary,bt=R+j;b+=j,bt!==0&&E-bt<Y.storage&&(b+=E-bt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=Y.storage}}}let x=b%E;return x>0&&(b+=E-x),v.__size=b,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){let S=v.target;S.removeEventListener("dispose",M);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function A(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:A}}var Iw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function Lw(){return ji===null&&(ji=new Xa(Iw,16,16,jr,Fi),ji.name="DFG_LUT",ji.minFilter=_n,ji.magFilter=_n,ji.wrapS=qi,ji.wrapT=qi,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var cu=class{constructor(t={}){let{canvas:e=y0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=jn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,g=new Set([Ah,Eh,Th]),p=new Set([jn,Ui,Fo,Oo,Mh,bh]),M=new Uint32Array(4),A=new Int32Array(4),v=new O,S=null,b=null,E=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,I=null,k=null,L=null,z=null;this._outputColorSpace=Wn;let X=0,G=0,K=null,Y=-1,R=null,j=new Fe,bt=new Fe,wt=null,Ht=new Jt(0),Bt=0,Yt=e.width,J=e.height,tt=1,pt=null,zt=null,mt=new Fe(0,0,Yt,J),kt=new Fe(0,0,Yt,J),lt=!1,ut=new Ro,Tt=!1,Wt=!1,B=new Ee,Kt=new O,Qt=new Fe,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function pe(){return K===null?tt:1}let F=n;function Ce(w,U){return e.getContext(w,U)}let Xt,P,y,V,H,$,ct,ot,Q,et,ft,Rt,_t,gt,ht,Ut,Gt,N,dt,nt,xt,yt,it;try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),F===null){let U="webgl2";if(F=Ce(U,w),F===null)throw Ce(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(w){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),$t("WebGLRenderer: "+w.message),w}function at(){Xt=new zb(F),Xt.init(),xt=new Tw(F,Xt),P=new Rb(F,Xt,t,xt),y=new bw(F,Xt),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),k=F.createFramebuffer(),L=F.createFramebuffer(),z=F.createFramebuffer(),V=new Gb(F),H=new cw,$=new ww(F,Xt,y,H,P,xt,V),ct=new Bb(C),ot=new Wy(F),yt=new Ab(F,ot),Q=new kb(F,ot,V,yt),et=new Wb(F,Q,ot,yt,V),N=new Hb(F,P,$),ht=new Pb(H),ft=new lw(C,ct,Xt,P,yt,ht),Rt=new Rw(C,H),_t=new uw,gt=new _w(Xt),Gt=new Eb(C,ct,y,et,m,l),Ut=new Mw(C,et,P),it=new Pw(F,V,P,y),dt=new Cb(F,Xt,V),nt=new Vb(F,Xt,V),V.programs=ft.programs,C.capabilities=P,C.extensions=Xt,C.properties=H,C.renderLists=_t,C.shadowMap=Ut,C.state=y,C.info=V}_!==jn&&(T=new qb(_,e.width,e.height,a,i,s));let rt=new ep(C,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=Xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(w){w!==void 0&&(tt=w,this.setSize(Yt,J,!1))},this.getSize=function(w){return w.set(Yt,J)},this.setSize=function(w,U,Z=!0){if(rt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=w,J=U,e.width=Math.floor(w*tt),e.height=Math.floor(U*tt),Z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Yt*tt,J*tt).floor()},this.setDrawingBufferSize=function(w,U,Z){Yt=w,J=U,tt=Z,e.width=Math.floor(w*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(_===jn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,U,Z,W){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,U,Z,W),y.viewport(j.copy(mt).multiplyScalar(tt).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,U,Z,W){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,U,Z,W),y.scissor(bt.copy(kt).multiplyScalar(tt).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(w){y.setScissorTest(lt=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,Z=!0){let W=0;if(w){let q=!1;if(K!==null){let vt=K.texture.format;q=g.has(vt)}if(q){let vt=K.texture.type,At=p.has(vt),Mt=Gt.getClearColor(),It=Gt.getClearAlpha(),Ft=Mt.r,ne=Mt.g,ce=Mt.b;At?(M[0]=Ft,M[1]=ne,M[2]=ce,M[3]=It,F.clearBufferuiv(F.COLOR,0,M)):(A[0]=Ft,A[1]=ne,A[2]=ce,A[3]=It,F.clearBufferiv(F.COLOR,0,A))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),Gt.dispose(),_t.dispose(),gt.dispose(),H.dispose(),ct.dispose(),et.dispose(),yt.dispose(),it.dispose(),ft.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Le),rt.removeEventListener("sessionend",Me),ue.stop()};function Ot(w){w.preventDefault(),Rd("WebGLRenderer: Context Lost."),D=!0}function st(){Rd("WebGLRenderer: Context Restored."),D=!1;let w=V.autoReset,U=Ut.enabled,Z=Ut.autoUpdate,W=Ut.needsUpdate,q=Ut.type;at(),V.autoReset=w,Ut.enabled=U,Ut.autoUpdate=Z,Ut.needsUpdate=W,Ut.type=q}function Vt(w){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pt(w){let U=w.target;U.removeEventListener("dispose",Pt),jt(U)}function jt(w){Ze(w),H.remove(w)}function Ze(w){let U=H.get(w).programs;U!==void 0&&(U.forEach(function(Z){ft.releaseProgram(Z)}),w.isShaderMaterial&&ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,Z,W,q,vt){U===null&&(U=de);let At=q.isMesh&&q.matrixWorld.determinantAffine()<0,Mt=an(w,U,Z,W,q);y.setMaterial(W,At);let It=Z.index,Ft=1;if(W.wireframe===!0){if(It=Q.getWireframeAttribute(Z),It===void 0)return;Ft=2}let ne=Z.drawRange,ce=Z.attributes.position,Lt=ne.start*Ft,ge=(ne.start+ne.count)*Ft;vt!==null&&(Lt=Math.max(Lt,vt.start*Ft),ge=Math.min(ge,(vt.start+vt.count)*Ft)),It!==null?(Lt=Math.max(Lt,0),ge=Math.min(ge,It.count)):ce!=null&&(Lt=Math.max(Lt,0),ge=Math.min(ge,ce.count));let $e=ge-Lt;if($e<0||$e===1/0)return;yt.setup(q,W,Mt,Z,It);let De,be=dt;if(It!==null&&(De=ot.get(It),be=nt,be.setIndex(De)),q.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*pe()),be.setMode(F.LINES)):be.setMode(F.TRIANGLES);else if(q.isLine){let yn=W.linewidth;yn===void 0&&(yn=1),y.setLineWidth(yn*pe()),q.isLineSegments?be.setMode(F.LINES):q.isLineLoop?be.setMode(F.LINE_LOOP):be.setMode(F.LINE_STRIP)}else q.isPoints?be.setMode(F.POINTS):q.isSprite&&be.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))be.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let yn=q._multiDrawStarts,Et=q._multiDrawCounts,Nn=q._multiDrawCount,me=It?ot.get(It).bytesPerElement:1,di=H.get(W).currentProgram.getUniforms();for(let Bi=0;Bi<Nn;Bi++)di.setValue(F,"_gl_DrawID",Bi),be.render(yn[Bi]/me,Et[Bi])}else if(q.isInstancedMesh)be.renderInstances(Lt,$e,q.count);else if(Z.isInstancedBufferGeometry){let yn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Et=Math.min(Z.instanceCount,yn);be.renderInstances(Lt,$e,Et)}else be.render(Lt,$e)};function ae(w,U,Z,W){I!==null&&w.isNodeMaterial&&I.setObject(W,w),Tt===!0&&ht.setState(w,Z,!1),w.transparent===!0&&w.side===wi&&w.forceSinglePass===!1?(w.side=xn,w.needsUpdate=!0,ke(w,U,W),w.side=Jr,w.needsUpdate=!0,ke(w,U,W),w.side=wi):ke(w,U,W)}this.compile=function(w,U,Z=null){Z===null&&(Z=w),I!==null&&I.renderStart(w,U,Z),b=gt.get(Z),b.init(U),x.push(b),Z.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),w!==Z&&w.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),Wt=this.localClippingEnabled,Tt=ht.init(this.clippingPlanes,Wt),Tt===!0&&ht.setGlobalState(this.clippingPlanes,U),I!==null&&Ut.render(b.state.shadowsArray,Z,U);let W=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let vt=q.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){let Mt=vt[At];ae(Mt,Z,U,q),W.add(Mt)}else ae(vt,Z,U,q),W.add(vt)}),b=x.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(w,U,Z=null){let W=this.compile(w,U,Z);return new Promise(q=>{function vt(){if(W.forEach(function(At){let It=H.get(At).currentProgram;(It===void 0||It.isReady())&&W.delete(At)}),W.size===0){q(w);return}setTimeout(vt,10)}Xt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ie=null;function on(w){Ie&&Ie(w)}function Le(){ue.stop()}function Me(){ue.start()}let ue=new J0;ue.setAnimationLoop(on),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(w){Ie=w,rt.setAnimationLoop(w),w===null?ue.stop():ue.start()},rt.addEventListener("sessionstart",Le),rt.addEventListener("sessionend",Me),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(w,U);let Z=rt.enabled===!0&&rt.isPresenting===!0,W=T!==null&&(K===null||Z)&&T.begin(C,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,U,K),b=gt.get(w,x.length),b.init(U),b.state.textureUnits=$.getTextureUnits(),x.push(b),B.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ut.setFromProjectionMatrix(B,Di,U.reversedDepth),Wt=this.localClippingEnabled,Tt=ht.init(this.clippingPlanes,Wt),S=_t.get(w,E.length),S.init(),E.push(S),rt.enabled===!0&&rt.isPresenting===!0){let At=C.xr.getDepthSensingMesh();At!==null&&Ln(At,U,-1/0,C.sortObjects)}Ln(w,U,0,C.sortObjects),S.finish(),I!==null&&I.updateLights(b.state.lightsArray),C.sortObjects===!0&&S.sort(pt,zt),qt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,qt&&Gt.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Tt===!0&&ht.beginShadows();let q=b.state.shadowsArray;if(Ut.render(q,w,U),Tt===!0&&ht.endShadows(),(W&&T.hasRenderPass())===!1){let At=S.opaque,Mt=S.transmissive;if(b.setupLights(),U.isArrayCamera){let It=U.cameras;if(Mt.length>0)for(let Ft=0,ne=It.length;Ft<ne;Ft++){let ce=It[Ft];vn(At,Mt,w,ce)}qt&&Gt.render(w);for(let Ft=0,ne=It.length;Ft<ne;Ft++){let ce=It[Ft];Re(S,w,ce,ce.viewport)}}else Mt.length>0&&vn(At,Mt,w,U),qt&&Gt.render(w),Re(S,w,U)}K!==null&&G===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),W&&T.end(C),w.isScene===!0&&w.onAfterRender(C,w,U),yt.resetDefaultState(),Y=-1,R=null,x.pop(),x.length>0?(b=x[x.length-1],$.setTextureUnits(b.state.textureUnits),Tt===!0&&ht.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,I!==null&&I.renderEnd()};function Ln(w,U,Z,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ut)){W&&Qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(B);let At=et.update(w),Mt=w.material;Mt.visible&&S.push(w,At,Mt,Z,Qt.z,null,U)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ut))){let At=et.update(w),Mt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qt.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Qt.copy(At.boundingSphere.center)),Qt.applyMatrix4(w.matrixWorld).applyMatrix4(B)),Array.isArray(Mt)){let It=At.groups;for(let Ft=0,ne=It.length;Ft<ne;Ft++){let ce=It[Ft],Lt=Mt[ce.materialIndex];Lt&&Lt.visible&&S.push(w,At,Lt,Z,Qt.z,ce,U)}}else Mt.visible&&S.push(w,At,Mt,Z,Qt.z,null,U)}}let vt=w.children;for(let At=0,Mt=vt.length;At<Mt;At++)Ln(vt[At],U,Z,W)}function Re(w,U,Z,W){let{opaque:q,transmissive:vt,transparent:At}=w;b.setupLightsView(Z),Tt===!0&&ht.setGlobalState(C.clippingPlanes,Z),W&&y.viewport(j.copy(W)),q.length>0&&Dn(q,U,Z),vt.length>0&&Dn(vt,U,Z),At.length>0&&Dn(At,U,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function vn(w,U,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let Lt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Qn(1,1,{generateMipmaps:!0,type:Lt?Fi:jn,minFilter:Kr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let vt=b.state.transmissionRenderTarget[W.id],At=W.viewport||j;vt.setSize(At.z*C.transmissionResolutionScale,At.w*C.transmissionResolutionScale);let Mt=C.getRenderTarget(),It=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(vt),C.getClearColor(Ht),Bt=C.getClearAlpha(),Bt<1&&C.setClearColor(16777215,.5),C.clear(),qt&&Gt.render(Z);let ne=C.toneMapping;C.toneMapping=Ni;let ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Tt===!0&&ht.setGlobalState(C.clippingPlanes,W),Dn(w,Z,W),$.updateMultisampleRenderTarget(vt),$.updateRenderTargetMipmap(vt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ge=0,$e=U.length;ge<$e;ge++){let De=U[ge],{object:be,geometry:yn,material:Et,group:Nn}=De;if(Et.side===wi&&be.layers.test(W.layers)){let me=Et.side;Et.side=xn,Et.needsUpdate=!0,Je(be,Z,W,yn,Et,Nn),Et.side=me,Et.needsUpdate=!0,Lt=!0}}Lt===!0&&($.updateMultisampleRenderTarget(vt),$.updateRenderTargetMipmap(vt))}C.setRenderTarget(Mt,It,Ft),C.setClearColor(Ht,Bt),ce!==void 0&&(W.viewport=ce),C.toneMapping=ne}function Dn(w,U,Z){let W=U.isScene===!0?U.overrideMaterial:null;for(let q=0,vt=w.length;q<vt;q++){let At=w[q],{object:Mt,geometry:It,group:Ft}=At,ne=At.material;ne.allowOverride===!0&&W!==null&&(ne=W),Mt.layers.test(Z.layers)&&Je(Mt,U,Z,It,ne,Ft)}}function Je(w,U,Z,W,q,vt){I!==null&&q.isNodeMaterial&&I.setObject(w,q),w.onBeforeRender(C,U,Z,W,q,vt),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(C,U,Z,W,w,vt),q.transparent===!0&&q.side===wi&&q.forceSinglePass===!1?(q.side=xn,q.needsUpdate=!0,C.renderBufferDirect(Z,U,W,q,w,vt),q.side=Jr,q.needsUpdate=!0,C.renderBufferDirect(Z,U,W,q,w,vt),q.side=wi):C.renderBufferDirect(Z,U,W,q,w,vt),w.onAfterRender(C,U,Z,W,q,vt)}function ke(w,U,Z){U.isScene!==!0&&(U=de);let W=H.get(w),q=b.state.lights,vt=b.state.shadowsArray,At=q.state.version,Mt=ft.getParameters(w,q.state,vt,U,Z,b.state.lightProbeGridArray),It=ft.getProgramCacheKey(Mt),Ft=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let ne=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=ct.get(w.envMap||W.environment,ne),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ft===void 0&&(w.addEventListener("dispose",Pt),Ft=new Map,W.programs=Ft);let ce=Ft.get(It);if(ce!==void 0){if(W.currentProgram===ce&&W.lightsStateVersion===At)return Oi(w,Mt),ce}else Mt.uniforms=ft.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,Z,Mt),w.onBeforeCompile(Mt,C),ce=ft.acquireProgram(Mt,It),Ft.set(It,ce),W.uniforms=Mt.uniforms;let Lt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=ht.uniform),Oi(w,Mt),W.needsLights=fi(w),W.lightsStateVersion=At,W.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.sunLights.value=q.state.sun,Lt.sunLightShadows.value=q.state.sunShadow,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.sunShadowMatrix.value=q.state.sunShadowMatrix,Lt.sunShadowCascade.value=q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=ce,W.uniformsList=null,ce}function tn(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Vo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Oi(w,U){let Z=H.get(w);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Ns(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Z=0,W=w.length;Z<W;Z++){let q=w[Z];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function an(w,U,Z,W,q){U.isScene!==!0&&(U=de),$.resetTextureUnits();let vt=U.fog,At=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Mt=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:he.workingColorSpace,It=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ft=ct.get(W.envMap||At,It),ne=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ce=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!Z.morphAttributes.position,ge=!!Z.morphAttributes.normal,$e=!!Z.morphAttributes.color,De=Ni;W.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(De=C.toneMapping);let be=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yn=be!==void 0?be.length:0,Et=H.get(W),Nn=b.state.lights;if(Tt===!0&&(Wt===!0||w!==R)){let Pe=w===R&&W.id===Y;ht.setState(W,w,Pe)}let me=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Nn.state.version||Et.outputColorSpace!==Mt||q.isBatchedMesh&&Et.batching===!1||!q.isBatchedMesh&&Et.batching===!0||q.isBatchedMesh&&Et.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Et.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Et.instancing===!1||!q.isInstancedMesh&&Et.instancing===!0||q.isSkinnedMesh&&Et.skinning===!1||!q.isSkinnedMesh&&Et.skinning===!0||q.isInstancedMesh&&Et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Et.instancingMorph===!1&&q.morphTexture!==null||Et.envMap!==Ft||W.fog===!0&&Et.fog!==vt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==ht.numPlanes||Et.numIntersection!==ht.numIntersection)||Et.vertexAlphas!==ne||Et.vertexTangents!==ce||Et.morphTargets!==Lt||Et.morphNormals!==ge||Et.morphColors!==$e||Et.toneMapping!==De||Et.morphTargetsCount!==yn||!!Et.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Et.__version=W.version);let di=Et.currentProgram;me===!0&&(di=ke(W,U,q),I&&W.isNodeMaterial&&I.onUpdateProgram(W,di,Et));let Bi=!1,yr=!1,Fs=!1,ye=di.getUniforms(),Xe=Et.uniforms;if(y.useProgram(di.program)&&(Bi=!0,yr=!0,Fs=!0),W.id!==Y&&(Y=W.id,yr=!0),Et.needsLights){let Pe=Ns(b.state.lightProbeGridArray,q);Et.lightProbeGrid!==Pe&&(Et.lightProbeGrid=Pe,yr=!0)}if(Bi||R!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ye.setValue(F,"projectionMatrix",w.projectionMatrix),ye.setValue(F,"viewMatrix",w.matrixWorldInverse);let Mr=ye.map.cameraPosition;Mr!==void 0&&Mr.setValue(F,Kt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&ye.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ye.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,yr=!0,Fs=!0)}if(Et.needsLights&&(Nn.state.sunShadowMap.length>0&&ye.setValue(F,"sunShadowMap",Nn.state.sunShadowMap,$),Nn.state.directionalShadowMap.length>0&&ye.setValue(F,"directionalShadowMap",Nn.state.directionalShadowMap,$),Nn.state.spotShadowMap.length>0&&ye.setValue(F,"spotShadowMap",Nn.state.spotShadowMap,$),Nn.state.pointShadowMap.length>0&&ye.setValue(F,"pointShadowMap",Nn.state.pointShadowMap,$)),q.isSkinnedMesh){ye.setOptional(F,q,"bindMatrix"),ye.setOptional(F,q,"bindMatrixInverse");let Pe=q.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ye.setValue(F,"boneTexture",Pe.boneTexture,$))}q.isBatchedMesh&&(ye.setOptional(F,q,"batchingTexture"),ye.setValue(F,"batchingTexture",q._matricesTexture,$),ye.setOptional(F,q,"batchingIdTexture"),ye.setValue(F,"batchingIdTexture",q._indirectTexture,$),ye.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&ye.setValue(F,"batchingColorTexture",q._colorsTexture,$));let Sr=Z.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&N.update(q,Z,di),(yr||Et.receiveShadow!==q.receiveShadow)&&(Et.receiveShadow=q.receiveShadow,ye.setValue(F,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Xe.envMapIntensity.value=U.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=Lw()),yr){if(ye.setValue(F,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&We(Xe,Fs),vt&&W.fog===!0&&Rt.refreshFogUniforms(Xe,vt),Rt.refreshMaterialUniforms(Xe,W,tt,J,b.state.transmissionRenderTarget[w.id]),Et.needsLights&&Et.lightProbeGrid){let Pe=Et.lightProbeGrid;Xe.probesSH.value=Pe.texture,Xe.probesMin.value.copy(Pe.boundingBox.min),Xe.probesMax.value.copy(Pe.boundingBox.max),Xe.probesResolution.value.copy(Pe.resolution)}Vo.upload(F,tn(Et),Xe,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vo.upload(F,tn(Et),Xe,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ye.setValue(F,"center",q.center),ye.setValue(F,"modelViewMatrix",q.modelViewMatrix),ye.setValue(F,"normalMatrix",q.normalMatrix),ye.setValue(F,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let Pe=W.uniformsGroups;for(let Mr=0,Os=Pe.length;Mr<Os;Mr++){let up=Pe[Mr];it.update(up,di),it.bind(up,di)}}return di}function We(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function fi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,U,Z){let W=H.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=U,H.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let Z=H.get(w);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,Z=0){K=w,X=U,G=Z;let W=null,q=!1,vt=!1;if(w){let Mt=H.get(w);if(Mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,Mt.__webglFramebuffer),j.copy(w.viewport),bt.copy(w.scissor),wt=w.scissorTest,y.viewport(j),y.scissor(bt),y.setScissorTest(wt),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(Mt.__hasExternalTextures)$.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ne=w.depthTexture;if(Mt.__boundDepthTexture!==ne){if(ne!==null&&H.has(ne)&&(w.width!==ne.image.width||w.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}let It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(vt=!0);let Ft=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?W=Ft[U][Z]:W=Ft[U],q=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?W=H.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?W=Ft[Z]:W=Ft,j.copy(w.viewport),bt.copy(w.scissor),wt=w.scissorTest}else j.copy(mt).multiplyScalar(tt).floor(),bt.copy(kt).multiplyScalar(tt).floor(),wt=lt;if(Z!==0&&(W=k),y.bindFramebuffer(F.FRAMEBUFFER,W)&&y.drawBuffers(w,W),y.viewport(j),y.scissor(bt),y.setScissorTest(wt),q){let Mt=H.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,Z)}else if(vt){let Mt=U;for(let It=0;It<w.textures.length;It++){let Ft=H.get(w.textures[It]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+It,Ft.__webglTexture,Z,Mt)}}else if(w!==null&&Z!==0){let Mt=H.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,Z)}Y=-1};function Us(w){let U=H.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=P.textureFormatReadable(w.format),U.__typeReadable=P.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,Z,W,q,vt,At,Mt=0){if(!(w&&w.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){y.bindFramebuffer(F.FRAMEBUFFER,It);try{let Ft=w.textures[Mt],ne=Ft.format,ce=Ft.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let Lt=Us(Ft);if(Lt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&Z>=0&&Z<=w.height-q&&F.readPixels(U,Z,W,q,xt.convert(ne),xt.convert(ce),vt)}finally{let Ft=K!==null?H.get(K).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,U,Z,W,q,vt,At,Mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It)if(U>=0&&U<=w.width-W&&Z>=0&&Z<=w.height-q){y.bindFramebuffer(F.FRAMEBUFFER,It);let Ft=w.textures[Mt],ne=Ft.format,ce=Ft.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let Lt=Us(Ft);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.bufferData(F.PIXEL_PACK_BUFFER,vt.byteLength,F.STREAM_READ),F.readPixels(U,Z,W,q,xt.convert(ne),xt.convert(ce),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let $e=K!==null?H.get(K).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,$e);let De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await M0(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,vt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ge),F.deleteSync(De),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,Z=0){let W=Math.pow(2,-Z),q=Math.floor(w.image.width*W),vt=Math.floor(w.image.height*W),At=U!==null?U.x:0,Mt=U!==null?U.y:0;$.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,At,Mt,q,vt),y.unbindTexture()},this.copyTextureToTexture=function(w,U,Z=null,W=null,q=0,vt=0){let At,Mt,It,Ft,ne,ce,Lt,ge,$e,De=w.isCompressedTexture?w.mipmaps[vt]:w.image;if(Z!==null)At=Z.max.x-Z.min.x,Mt=Z.max.y-Z.min.y,It=Z.isBox3?Z.max.z-Z.min.z:1,Ft=Z.min.x,ne=Z.min.y,ce=Z.isBox3?Z.min.z:0;else{let Xe=Math.pow(2,-q);At=Math.floor(De.width*Xe),Mt=Math.floor(De.height*Xe),w.isDataArrayTexture?It=De.depth:w.isData3DTexture?It=Math.floor(De.depth*Xe):It=1,Ft=0,ne=0,ce=0}W!==null?(Lt=W.x,ge=W.y,$e=W.z):(Lt=0,ge=0,$e=0);let be=xt.convert(U.format),yn=xt.convert(U.type),Et;U.isData3DTexture?($.setTexture3D(U,0),Et=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Et=F.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Et=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Nn=y.getParameter(F.UNPACK_ROW_LENGTH),me=y.getParameter(F.UNPACK_IMAGE_HEIGHT),di=y.getParameter(F.UNPACK_SKIP_PIXELS),Bi=y.getParameter(F.UNPACK_SKIP_ROWS),yr=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,De.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),y.pixelStorei(F.UNPACK_SKIP_ROWS,ne),y.pixelStorei(F.UNPACK_SKIP_IMAGES,ce);let Fs=w.isDataArrayTexture||w.isData3DTexture,ye=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let Xe=H.get(w),Sr=H.get(U),Pe=H.get(Xe.__renderTarget),Mr=H.get(Sr.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Pe.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let Os=0;Os<It;Os++)Fs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(w).__webglTexture,q,ce+Os),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(U).__webglTexture,vt,$e+Os)),F.blitFramebuffer(Ft,ne,At,Mt,Lt,ge,At,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||H.has(w)){let Xe=H.get(w),Sr=H.get(U);y.bindFramebuffer(F.READ_FRAMEBUFFER,L),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Pe=0;Pe<It;Pe++)Fs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.__webglTexture,q,ce+Pe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xe.__webglTexture,q),ye?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Sr.__webglTexture,vt,$e+Pe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Sr.__webglTexture,vt),q!==0?F.blitFramebuffer(Ft,ne,At,Mt,Lt,ge,At,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):ye?F.copyTexSubImage3D(Et,vt,Lt,ge,$e+Pe,Ft,ne,At,Mt):F.copyTexSubImage2D(Et,vt,Lt,ge,Ft,ne,At,Mt);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ye?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Et,vt,Lt,ge,$e,At,Mt,It,be,yn,De.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,vt,Lt,ge,$e,At,Mt,It,be,De.data):F.texSubImage3D(Et,vt,Lt,ge,$e,At,Mt,It,be,yn,De):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,vt,Lt,ge,At,Mt,be,yn,De.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,vt,Lt,ge,De.width,De.height,be,De.data):F.texSubImage2D(F.TEXTURE_2D,vt,Lt,ge,At,Mt,be,yn,De);y.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,me),y.pixelStorei(F.UNPACK_SKIP_PIXELS,di),y.pixelStorei(F.UNPACK_SKIP_ROWS,Bi),y.pixelStorei(F.UNPACK_SKIP_IMAGES,yr),vt===0&&U.generateMipmaps&&F.generateMipmap(Et),y.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){X=0,G=0,K=null,y.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var fu=class extends As{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Xr;t.deleteAttribute("uv");let e=new bi({side:xn}),n=new bi,i=new ol(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ae(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Hr(t,n,6),a=new Ye;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ae(t,Wo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ae(t,Wo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ae(t,Wo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ae(t,Wo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ae(t,Wo(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ae(t,Wo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Wo(r){return new el({color:0,emissive:16777215,emissiveIntensity:r})}function i_(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Pn,c=0;for(let h=0;h<r.length;++h){let d=r[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<r.length;++u){let f=r[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(let h in s){let d=n_(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let m=n_(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function n_(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new Xn(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let _=h.getComponent(u,m);a.setComponent(u+d,m,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var vr=3,ip=.56,np=r=>ip*Math.pow(Math.max(0,1-r*r),.34)*(1-.2*(r+1)*.5),Sl=[[0,{y:-4.6,rx:.16,ry:-.7,rz:.08,peel:0,fall:0}],[.05,{y:-4.6,rx:.16,ry:-.7,rz:.08,peel:0,fall:0}],[.17,{y:0,rx:.12,ry:.15,rz:.06,peel:0,fall:0}],[.3,{y:.05,rx:.2,ry:1.5,rz:.02,peel:.18,fall:0}],[.46,{y:0,rx:.34,ry:3,rz:-.18,peel:1,fall:0}],[.6,{y:0,rx:.5,ry:3.9,rz:-.9,peel:1,fall:0}],[.72,{y:-.1,rx:.3,ry:4.5,rz:-1.5,peel:1,fall:.12}],[.86,{y:-.35,rx:.25,ry:5.1,rz:-1.62,peel:1,fall:.7}],[1,{y:-5.8,rx:.2,ry:5.6,rz:-1.75,peel:1,fall:1}]],rp=r=>r*r*(3-2*r);function r_(r){for(let t=1;t<Sl.length;t++){let[e,n]=Sl[t],[i,s]=Sl[t-1];if(r<=e){let o=rp(ts.clamp((r-i)/(e-i||1),0,1)),a={};for(let l in s)a[l]=s[l]+(n[l]-s[l])*o;return a}}return{...Sl[Sl.length-1][1]}}function Dw(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function s_(r,{lowPower:t=!1,reduced:e=!1}={}){let n=new cu({canvas:r,antialias:!t,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,t?1.25:1.75)),n.outputColorSpace=Wn,n.toneMapping=ll,n.toneMappingExposure=1.05,n.setClearColor(0,0);let i=new As,s=new Go(n);i.environment=s.fromScene(new fu,.04).texture,i.environmentIntensity=.55;let o=new gn(28,1,.1,100);o.position.set(0,.2,10);let a=new Do(16773327,2.4);a.position.set(-3,4.5,5);let l=new Do(16776166,1.3);l.position.set(4,2,-4),i.add(a,l,new il(16775364,8018486,.6));let c=new Si,h=new Si;c.add(h),i.add(c);let d=Dw(7),u=[];for(let lt=0;lt<=40;lt++){let ut=-1+2*lt/40;u.push(new Dt(np(ut)*.82,ut*vr/2))}let f=new Ae(new Ka(u,32),new bi({color:14197562,roughness:.6}));h.add(f);let m=t?14:16,_=t?24:30,g=new Qa(.5,12,9),p=new tl({roughness:.32,clearcoat:.7,clearcoatRoughness:.28,sheen:.3,sheenColor:new Jt(16773808)}),M=[],A=new Ye;for(let lt=0;lt<_;lt++){let ut=-.93+1.86*lt/(_-1),Tt=np(ut);if(Tt<.1)continue;let Wt=ut*vr/2,B=1.86*vr/2/(_-1),Kt=2*Math.PI*Tt/m*.94;for(let Qt=0;Qt<m;Qt++){let de=(Qt+lt%2*.5)/m*Math.PI*2,qt=.1+.08*(Tt/ip);M.push({pos:new O(Math.cos(de)*(Tt+qt*.15),Wt,Math.sin(de)*(Tt+qt*.15)),scale:new O(Kt,B*.92,qt),a:de})}}let v=new Hr(g,p,M.length),S=new Jt(15775020),b=[15775020,16040522,15312674,16240483,15381306,15910234].map(lt=>new Jt(lt));M.forEach((lt,ut)=>{A.position.copy(lt.pos),A.lookAt(lt.pos.x*2,lt.pos.y,lt.pos.z*2),A.scale.copy(lt.scale),A.updateMatrix(),lt.matrix=A.matrix.clone(),v.setMatrixAt(ut,lt.matrix);let Tt=b[Math.floor(d()*b.length)].clone();lt.pos.y>vr*.36&&Tt.lerp(new Jt(16377510),.45),v.setColorAt(ut,Tt||S)}),h.add(v);let E=Math.min(t?90:160,M.length),x=[],T=M.map((lt,ut)=>ut).sort(()=>d()-.5);for(let lt=0;lt<E;lt++)x.push({i:T[lt],delay:d()*.55,drift:(d()-.5)*1.6,spin:(d()-.5)*12});let C=new Hr(g,p,E);C.frustumCulled=!1,x.forEach((lt,ut)=>C.setColorAt(ut,b[ut%b.length])),i.add(C);let D=new Ye;D.scale.setScalar(0),D.updateMatrix();let I=7,k=[],L=vr*1.1,z=-vr/2-.1;for(let lt=0;lt<I;lt++){let ut=new Cs(1,1,8,28),Tt=ut.attributes.position,Wt=[],B=[],Kt=2*Math.PI*ip/I*1.55,Qt=y=>Math.max(np(ts.clamp(y/vr*2,-1,1)),.05)+.12,de=Qt(z),qt=d();for(let y=0;y<Tt.count;y++){let V=Tt.getX(y),H=Tt.getY(y)+.5,$=z+H*L,ct=Qt($)+.04*H+lt*.012,ot=(1-Math.pow(H,2.4))*.92+.08*(1-H),Q=V*Kt*ot/ct;Tt.setXYZ(y,ct*Math.sin(Q),H*L,ct*Math.cos(Q)-de);let et=.94+.06*Math.cos(V*Math.PI*14),ft=new Jt().lerpColors(new Jt(7113779),new Jt(13616772),Math.pow(H,1.4)*(.75+qt*.25));ft.multiplyScalar(et),Wt.push(ft.r,ft.g,ft.b),B.push(H)}ut.setAttribute("color",new Se(Wt,3)),ut.setAttribute("aV",new Se(B,1)),ut.computeVertexNormals();let pe=new bi({vertexColors:!0,roughness:.68,side:wi}),F={value:0};pe.onBeforeCompile=y=>{y.uniforms.uCurl=F,y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
attribute float aV;
uniform float uCurl;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float ca = uCurl * aV * aV;
          float cs = cos(ca), sn = sin(ca);
          transformed.yz = mat2(cs, sn, -sn, cs) * transformed.yz;`)};let Ce=new Ae(ut,pe),Xt=new Si;Xt.position.set(0,z,de),Xt.add(Ce);let P=new Si;P.rotation.y=lt/I*Math.PI*2+d()*.2,P.add(Xt),h.add(P),k.push({hinge:Xt,curl:F,delay:d()*.25,max:1.75+d()*.5})}let X=[];for(let lt=0;lt<(t?14:26);lt++){let ut=d()*Math.PI*2,Tt=.25+d()*.55,Wt=vr/2-.05,B=[new O(Math.cos(ut)*.05,Wt,Math.sin(ut)*.05),new O(Math.cos(ut)*Tt*.4,Wt+.35,Math.sin(ut)*Tt*.4),new O(Math.cos(ut)*Tt,Wt+.55+d()*.25,Math.sin(ut)*Tt),new O(Math.cos(ut)*Tt*1.4,Wt+.45+d()*.2,Math.sin(ut)*Tt*1.4)];X.push(new ja(new Po(B),16,.009,4))}let G=new Ae(i_(X),new bi({color:14201706,roughness:.45}));h.add(G);let K=new Ae(new Za(.16,.2,.5,16),new bi({color:8231493,roughness:.7}));K.position.y=-vr/2-.3,h.add(K);let Y=r_(0),R={...Y},j=1,bt=1,wt=!1,Ht=!0,Bt=new O;function Yt(){j=r.clientWidth,bt=r.clientHeight,n.setSize(j,bt,!1),o.aspect=j/bt,o.updateProjectionMatrix(),wt=o.aspect<.8,c.scale.setScalar(wt?Math.max(.62,o.aspect*1.25):1),c.position.y=wt?-.55:-.05,Ht=!0}function J(lt,ut){let Tt=e?1:1-Math.exp(-lt*7);for(let B in Y)R[B]+=(Y[B]-R[B])*Tt;let Wt=e?0:Math.sin(ut*.6)*.04;h.position.y=R.y,h.rotation.set(R.rx+Wt*.5,R.ry+Wt,R.rz);for(let B of k){let Kt=ts.clamp((R.peel-B.delay)/(1-B.delay),0,1),Qt=rp(Kt);B.hinge.rotation.x=Qt*B.max,B.curl.value=Qt*1.1}G.scale.setScalar(.4+.6*rp(ts.clamp(R.peel*1.4,0,1))),h.updateMatrixWorld(!0),x.forEach((B,Kt)=>{let Qt=ts.clamp((R.fall-B.delay)/.45,0,1),de=M[B.i];if(Qt<=0){v.setMatrixAt(B.i,de.matrix),C.setMatrixAt(Kt,D.matrix);return}v.setMatrixAt(B.i,D.matrix),Bt.copy(de.pos).applyMatrix4(h.matrixWorld),A.position.set(Bt.x+B.drift*Qt,Bt.y-9*Qt*Qt,Bt.z+.5*Qt),A.rotation.set(B.spin*Qt,B.spin*.6*Qt,0),A.scale.copy(de.scale).multiplyScalar(c.scale.x),A.updateMatrix(),C.setMatrixAt(Kt,A.matrix)}),v.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0}let tt=performance.now(),pt=!1,zt=0,mt=new Set;function kt(lt){let ut=Math.min((lt-tt)/1e3,.05);tt=lt,J(ut,lt/1e3),n.render(i,o),mt.forEach(Tt=>Tt(R)),zt=pt?requestAnimationFrame(kt):0}return Yt(),J(1,0),n.compile(i,o),n.render(i,o),{ready:Promise.resolve(),setProgress(lt){Y=r_(ts.clamp(lt,0,1)),Ht=!0},onFrame(lt){mt.add(lt)},resize:Yt,start(){pt||(pt=!0,tt=performance.now(),zt=requestAnimationFrame(kt))},stop(){pt=!1,cancelAnimationFrame(zt)},get dirty(){return Ht}}}var Nw=(r,t=1.6)=>1+(t+1)*Math.pow(r-1,3)+t*Math.pow(r-1,2),o_=r=>Math.min(1,Math.max(0,r));function a_(r,{blur:t=!0}={}){let e=r.textContent.trim();r.textContent="";let n=[];for(let o=0;o<=4;o++){let a=document.createElement("span");a.className="ghost__layer",a.textContent=e,o>0&&a.setAttribute("aria-hidden","true"),r.appendChild(a),n.push(a)}let i=!1;function s(){r.style.fontSize="";let o=n[0],a=r.style.visibility;r.style.visibility="hidden",r.classList.add("is-live");let l=parseFloat(getComputedStyle(r).fontSize);for(let c=0;c<20&&o.scrollWidth>o.clientWidth+1;c++)l*=.95,r.style.fontSize=`${l}px`;r.classList.remove("is-live"),r.style.visibility=a}return s(),document.fonts?.ready.then(s),addEventListener("resize",s),function(a,l){let c=o_(a),h=o_(l),d=c>0&&h<1;if(r.classList.toggle("is-live",d),!d)return i=!1,!1;let f=(1-Nw(c))*.55-h*.7;n[0].style.transform=`translate3d(0, ${f}em, 0)`,n[0].style.opacity=String(Math.min(1,c*1.8)*(1-h));let m=4*c*(1-c),_=4*h*(1-h);for(let p=1;p<=4;p++){let M=(1-c)*p*.3+h*p*.24,A=Math.max(m,_)*(.42-p*.075),v=n[p].style;v.transform=`translate3d(0, ${f+M}em, 0)`,v.opacity=A.toFixed(3),t&&(v.filter=A>.01?`blur(${(p*1.1).toFixed(1)}px)`:"none")}let g=c>=1&&!i;return c>=1&&(i=!0),c<.9&&(i=!1),g}}var l_=["122,90,54","107,79,44","176,138,85","143,108,64","64,63,43"];function c_(r,{count:t=220,reduced:e=!1}={}){let n=r.getContext("2d"),i=0,s=0,o=1,a=0,l=!1,c=0,h=0,d=[];function u(g,p){g.x=p?Math.random()*i:-20-Math.random()*i*.3,g.y=s*(.25+Math.random()*.7),g.vx=20+Math.random()*40,g.vy=(Math.random()-.5)*10,g.r=Math.random()<.08?2.2+Math.random()*2:.6+Math.random()*1.4,g.c=l_[Math.floor(Math.random()*l_.length)],g.a=.25+Math.random()*.5,g.ph=Math.random()*Math.PI*2}function f(){if(o=Math.min(window.devicePixelRatio,2),i=r.clientWidth,s=r.clientHeight,r.width=Math.round(i*o),r.height=Math.round(s*o),n.setTransform(o,0,0,o,0,0),!d.length)for(let g=0;g<t;g++){let p={};u(p,!0),d.push(p)}}function m(g){let p=Math.min((g-h)/1e3,.05);h=g;let M=Math.min(1,a/.11),A=Math.min(1,Math.max(0,(a-.1)/.09)),v=1-A;if(n.clearRect(0,0,i,s),!(v<=.001))for(let S of d){S.ph+=p*1.3;let b=S.vx*(1+M*9)*(1-A*.85);S.x+=b*p,S.y+=(S.vy+Math.sin(S.ph)*14-M*30*(1-A)+A*260)*p,S.y>s*.97&&(S.y=s*.97),S.x>i+20&&u(S,!1),n.fillStyle=`rgba(${S.c},${(S.a*v).toFixed(3)})`,n.beginPath(),n.arc(S.x,S.y,S.r*(1+M*.4),0,Math.PI*2),n.fill()}}function _(g){m(g),c=l?requestAnimationFrame(_):0}return f(),{resize:f,setProgress(g){a=g},start(){l||e||(l=!0,h=performance.now(),c=requestAnimationFrame(_))},stop(){l=!1,cancelAnimationFrame(c)}}}var du=[261.63,293.66,329.63,392,440,523.25,587.33];function h_(){let r,t,e,n,i,s=!1;function o(d){let u=Math.floor(r.sampleRate*d),f=r.createBuffer(1,u,r.sampleRate),m=f.getChannelData(0);for(let _=0;_<u;_++)m[_]=Math.random()*2-1;return f}function a(){let d=r.createBiquadFilter();d.type="lowpass",d.frequency.value=900;let u=r.createOscillator(),f=r.createGain();u.frequency.value=.07,f.gain.value=300,u.connect(f).connect(d.frequency),u.start();let m=r.createGain();m.gain.value=0,m.gain.linearRampToValueAtTime(.05,r.currentTime+4),d.connect(m).connect(t);for(let _ of[130.81,196,329.63,587.33])for(let g of[-6,6]){let p=r.createOscillator();p.type="triangle",p.frequency.value=_,p.detune.value=g;let M=r.createGain();M.gain.value=_>400?.12:.22,p.connect(M).connect(d),p.start()}}function l(d,u=r.currentTime,f=.06){let m=r.createGain();m.gain.setValueAtTime(0,u),m.gain.linearRampToValueAtTime(f,u+.005),m.gain.exponentialRampToValueAtTime(1e-4,u+1.6),m.connect(t);for(let[_,g]of[[1,1],[4.2,.18]]){let p=r.createOscillator();p.frequency.value=d*_;let M=r.createGain();M.gain.value=g,p.connect(M).connect(m),p.start(u),p.stop(u+1.7)}}function c(){let d=()=>{if(!s)return;let u=du[Math.floor(Math.random()*du.length)];l(u),Math.random()<.35&&l(u*1.5,r.currentTime+.18,.035),i=setTimeout(d,1800+Math.random()*1800)};d()}function h(){let d=r.createBufferSource();d.buffer=o(4),d.loop=!0,n=r.createBiquadFilter(),n.type="bandpass",n.frequency.value=500,n.Q.value=.8,e=r.createGain(),e.gain.value=0,d.connect(n).connect(e).connect(t),d.start()}return{get on(){return s},start(){r||(r=new(window.AudioContext||window.webkitAudioContext),t=r.createGain(),t.gain.value=.9,t.connect(r.destination),a(),h()),r.resume(),s=!0,t.gain.setTargetAtTime(.9,r.currentTime,.4),c()},stop(){r&&(s=!1,clearTimeout(i),t.gain.setTargetAtTime(0,r.currentTime,.25))},wind(d){!r||!s||(e.gain.setTargetAtTime(Math.min(d,1)*.16,r.currentTime,.12),n.frequency.setTargetAtTime(400+d*900,r.currentTime,.2))},tap(){if(!r||!s)return;let d=r.createBufferSource();d.buffer=o(.04);let u=r.createBiquadFilter();u.type="highpass",u.frequency.value=2400;let f=r.createGain();f.gain.setValueAtTime(.25,r.currentTime),f.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+.04),d.connect(u).connect(f).connect(t),d.start()},chime(){!r||!s||(l(du[4],r.currentTime,.07),l(du[6],r.currentTime+.09,.04))}}}var Xo=r=>`<svg viewBox="0 0 24 24" aria-hidden="true">${r}</svg>`,sp=[Xo(`
    <path d="M12 2.6c2.4 0 3.8 3.3 3.8 8.6 0 5.5-1.7 8.6-3.8 8.6s-3.8-3.1-3.8-8.6C8.2 5.9 9.6 2.6 12 2.6z"/>
    <path class="cut" d="M10.6 6.2h2.8v.9h-2.8zM10.2 8.6h3.6v.9h-3.6zM10 11h4v.9h-4zM10.1 13.4h3.8v.9h-3.8zM10.4 15.8h3.2v.9h-3.2z"/>
    <path d="M8.9 9.2c-2.7 3-3.6 7.2-2.5 12.3 1.4-2 3.1-3 5-3.3-1.9-2.1-2.6-5.1-2.5-9zM15.1 9.2c2.7 3 3.6 7.2 2.5 12.3-1.4-2-3.1-3-5-3.3 1.9-2.1 2.6-5.1 2.5-9z"/>`),Xo(`
    <path d="M17.9 4.4l1.6 1.6L6.3 19.2l-1.6-1.6z"/>
    <path d="M15.2 2.4l3.1-.6 3.9 3.9-.6 3.1c-.4 2-2.6 2.8-4 1.4l-3.8-3.8c-1.4-1.4-.6-3.6 1.4-4z"/>`),Xo(`
    <path d="M7.3 7.4C5.4 10.2 4.2 13.8 4.2 17c0 3 3.5 4.6 7.8 4.6s7.8-1.6 7.8-4.6c0-3.2-1.2-6.8-3.1-9.6z"/>
    <path d="M8.4 6.4h7.2l-1.3-1.9 1.7-2.4c-1.5.5-2.8.5-4 0-1.2.5-2.5.5-4 0l1.7 2.4z"/>
    <path class="cut" d="M6.2 13.2c3.8 1.2 7.8 1.2 11.6 0l.3 1.3c-4 1.3-8.2 1.3-12.2 0z"/>`),Xo(`
    <path d="M2.8 21.6c2-2.8 5.4-4.3 9.2-4.3s7.2 1.5 9.2 4.3z"/>
    <path d="M11.2 9.8h1.6v8.2h-1.6z"/>
    <path d="M12 11.4C11.6 7.6 8.7 5.3 4.2 5.5c.2 4.2 3.2 6.5 7.8 5.9z"/>
    <path d="M12 9.8c.3-3.8 3.1-6.6 7.9-6.7-.1 4.5-3.1 6.9-7.9 6.7z"/>`),Xo(`
    <path d="M6.6 10.2a5.4 5.4 0 0 1 10.8 0h-1.9a3.5 3.5 0 0 0-7 0z"/>
    <path d="M2.6 10.4h18.8l-2.2 10c-.2 1-1.1 1.6-2.1 1.6H6.9c-1 0-1.9-.6-2.1-1.6z"/>
    <path class="cut" d="M5.4 13.2h13.2v1H5.4zM6 16.4h12v1H6zM8.6 12.2h1v8.6h-1zM14.4 12.2h1v8.6h-1z"/>`),Xo(`
    <path fill-rule="evenodd" d="M12 2.2a9.8 9.8 0 1 1 0 19.6 9.8 9.8 0 0 1 0-19.6zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4z"/>
    <circle class="cut" cx="12" cy="12" r="2.2"/>
    <circle cx="12" cy="12" r="1.2"/>
    <path class="cut" d="M11.4 2.2h1.2v2.2h-1.2zM11.4 19.6h1.2v2.2h-1.2zM2.2 11.4h2.2v1.2H2.2zM19.6 11.4h2.2v1.2h-2.2zM4.6 5.5l.9-.9 1.6 1.6-.9.9zM16.9 17.8l.9-.9 1.6 1.6-.9.9zM18.5 4.6l.9.9-1.6 1.6-.9-.9zM6.2 16.9l.9.9-1.6 1.6-.9-.9z"/>`)];var op=r=>new Promise(t=>setTimeout(t,r));function Ds(r,t,e){let n=document.createElement(r);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function u_(r){return[...r].map(t=>`<span>${t}</span>`).join("")}async function f_({ready:r,reduced:t,onEnter:e}){let n=Ds("div","opening");n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Welcome to AGFICI"),document.body.appendChild(n);let i=document.getElementById("wordmark"),s=Ds("div","opening__mark","AGFICI");if(s.setAttribute("aria-hidden","true"),n.appendChild(s),t)await r,s.style.display="none";else{pn.fromTo(s,{opacity:0,y:12},{opacity:1,y:0,duration:.5,ease:"power3.out"}),await op(900);let h=s.getBoundingClientRect(),d=i.getBoundingClientRect();await pn.to(s,{x:d.left+d.width/2-(h.left+h.width/2),y:d.top+d.height/2-(h.top+h.height/2),scale:d.height/h.height,duration:.75,ease:"expo.inOut"});let u=Ds("div","loader");u.setAttribute("role","status"),u.setAttribute("aria-label","Loading");let f=Ds("span","loader__part",u_("load")),m=Ds("span","loader__gap"),_=Ds("span","loader__part",u_("ing"));u.append(f,m,_),n.appendChild(u),pn.from([...f.children,..._.children],{opacity:0,y:10,stagger:.03,duration:.4,ease:"power3.out"});let g=!1;Promise.race([r,op(7e3)]).then(()=>{g=!0});let p=0;for(;p<3||!g;)m.innerHTML=sp[p%sp.length],pn.fromTo(m.firstChild,{scale:.55,opacity:0},{scale:1,opacity:1,duration:.22,ease:"power3.out"}),p++,await op(380);await pn.to(m,{width:0,duration:.35,ease:"power3.inOut",onStart:()=>{m.innerHTML=""}});let M=[...f.children,..._.children];await pn.to(M,{y:-8,duration:.16,ease:"power2.out",stagger:.035,yoyo:!0,repeat:1}),await pn.to(M,{scale:.15,opacity:0,duration:.3,ease:"power2.in",stagger:.03}),u.remove()}let o=Ds("div","welcome",`
    <div class="welcome__center">
      <p class="welcome__title" aria-hidden="true">AGFICI</p>
      <p class="welcome__sub">Adewura Giant Farmers International Community Initiative</p>
      <p class="welcome__lede">Advancing food security, education and community-led empowerment in rural Nigeria.</p>
      <button class="pill pill--arrow welcome__enter" type="button">Enter with sound <span class="pill__dot" aria-hidden="true"></span></button>
    </div>
    <div class="welcome__foot">
      <span>Best with sound on</span>
      <button class="welcome__quiet" type="button">Enter without sound</button>
    </div>`);n.appendChild(o);let a=o.querySelectorAll(".welcome__center > *");t||pn.from(a,{opacity:0,y:24,duration:.7,ease:"power3.out",stagger:.08});let l=o.querySelector(".welcome__enter");l.classList.add("no-ring"),l.focus({preventScroll:!0}),o.addEventListener("keydown",()=>l.classList.remove("no-ring"),{once:!0});let c=await new Promise(h=>{l.addEventListener("click",()=>h(!0),{once:!0}),o.querySelector(".welcome__quiet").addEventListener("click",()=>h(!1),{once:!0})});e(c),await pn.to(n,{opacity:0,filter:t?"none":"blur(10px)",scale:t?1:1.03,duration:t?.25:.7,ease:"power2.out"}),n.remove()}pn.registerPlugin(ee);var ns=matchMedia("(prefers-reduced-motion: reduce)").matches,hp=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4||innerWidth<760,p_=r=>Math.min(1,Math.max(0,r)),qo=(r,t,e)=>p_((r-t)/(e-t)),m_="agfici-entered",Ml=new fg({autoRaf:!1,anchors:!0,lerp:ns?1:.1});Ml.on("scroll",ee.update);pn.ticker.add(r=>Ml.raf(r*1e3));pn.ticker.lagSmoothing(0);var Yo=h_(),pu=document.getElementById("sound-toggle");function lp(r){r?Yo.start():Yo.stop(),pu.setAttribute("aria-pressed",String(r)),pu.setAttribute("aria-label",r?"Sound on":"Sound off")}pu.addEventListener("click",()=>lp(!Yo.on));document.addEventListener("pointerdown",r=>{r.target.closest(".pill, .sound")&&Yo.tap()});var Uw=document.querySelector(".stage"),Fw=document.getElementById("gl"),d_=document.getElementById("shadow"),ap=document.getElementById("aside"),Ow=document.querySelector(".intro__cue"),cp=document.querySelector(".intro__line");cp.innerHTML=cp.textContent.trim().split(/\s+/).map(r=>`<span class="w">${r}</span>`).join(" ");var Bw=[...cp.querySelectorAll(".w")],zw=[...document.querySelectorAll("[data-ghost]")].map(r=>a_(r,{blur:!hp&&!ns})),kw=[[.15,.21,.3,.35],[.36,.42,.52,.57],[.58,.64,.84,.9]],es=null,g_=!0,Vw=new Promise(r=>{requestAnimationFrame(()=>setTimeout(()=>{try{es=s_(Fw,{lowPower:hp,reduced:ns}),es.onFrame(t=>{let e=p_(1-Math.abs(t.y)/3);d_.style.setProperty("--shadow-s",(.35+.65*e).toFixed(3)),d_.style.setProperty("--shadow-o",(e*(1-t.fall*.6)).toFixed(3))}),es.setProgress(Math.max(__,0)),g_&&es.start()}catch(t){document.documentElement.classList.add("no-gl"),console.warn("WebGL unavailable, showing the page without the 3D cob.",t)}r()},60))}),bl=c_(document.getElementById("dust"),{count:hp?130:230,reduced:ns}),__=-1;function x_(r){es?.setProgress(r),bl.setProgress(r),Bw.forEach((n,i)=>{let s=qo(r,.015+i*.008,.075+i*.008);n.style.transform=s?`translate3d(${s*5}rem, ${-s*3.2}rem, 0) rotate(${s*8}deg)`:"",n.style.opacity=String(Math.max(0,1-s*1.7)),ns||(n.style.filter=s?`blur(${(s*6).toFixed(1)}px)`:"")}),Ow.style.opacity=String(1-qo(r,0,.03)),zw.forEach((n,i)=>{let[s,o,a,l]=kw[i];n(qo(r,s,o),qo(r,a,l))&&Yo.chime()});let t=qo(r,.38,.44)*(1-qo(r,.84,.9));ap.style.opacity=String(t),ap.style.transform=`translateY(${(1-t)*1}rem)`,ap.style.pointerEvents=t>.5?"auto":"none";let e=r>.03&&r<.2?1:0;Yo.wind(e*Math.min(Math.abs(Ml.velocity)/35,1)),__=r}ee.create({trigger:Uw,start:"top top",end:"bottom bottom",onUpdate:r=>x_(r.progress),onToggle:r=>{g_=r.isActive,r.isActive?(es?.start(),bl.start()):(es?.stop(),bl.stop())}});x_(0);bl.start();addEventListener("resize",()=>{es?.resize(),bl.resize()});var Gw=document.getElementById("nav");ee.create({trigger:"#involved",start:"top 8%",endTrigger:"body",end:"bottom bottom",onToggle:r=>{Gw.dataset.on=r.isActive?"leaf":""}});if(!ns){document.querySelectorAll(".initiative h3").forEach((t,e)=>{pn.fromTo(t,{xPercent:e%2?-14:14},{xPercent:0,ease:"none",scrollTrigger:{trigger:t,start:"top bottom",end:"top 50%",scrub:!0}})});let r=matchMedia("(min-width: 761px)").matches;document.querySelectorAll(".tile").forEach(t=>{let e=Number(t.dataset.depth)||0;pn.to(t,{y:()=>e*(r?-520:-200),ease:"none",scrollTrigger:{trigger:"#collage",start:"top bottom",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}})})}var Hw=new IntersectionObserver(r=>{for(let{target:t,isIntersecting:e}of r)e?(t.src||(t.src=t.dataset.src),ns||t.play().catch(()=>{})):t.pause()},{rootMargin:"200px 0px"});document.querySelectorAll("video[data-src]").forEach(r=>Hw.observe(r));pu.hidden=!1;var v_=!1;try{v_=sessionStorage.getItem(m_)==="1"}catch{}v_?lp(!1):(Ml.stop(),document.documentElement.style.overflow="hidden",f_({ready:Promise.all([Vw,document.fonts.ready]),reduced:ns,onEnter(r){lp(r);try{sessionStorage.setItem(m_,"1")}catch{}document.documentElement.style.overflow="",Ml.start(),ee.refresh()}}));
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
