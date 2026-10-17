var j0=Object.defineProperty;var t_=(r,t,e)=>t in r?j0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Dt=(r,t,e)=>t_(r,typeof t!="symbol"?t+"":t,e);function ji(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ep(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jo={duration:.5,overwrite:!1,delay:0},vu,dn,Ne,mi=1e8,Te=1/mi,cu=Math.PI*2,e_=cu/4,n_=0,np=Math.sqrt,i_=Math.cos,r_=Math.sin,en=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},er=function(t){return typeof t=="number"},Cl=function(t){return typeof t>"u"},Bi=function(t){return typeof t=="object"},Yn=function(t){return t!==!1},yu=function(){return typeof window<"u"},vl=function(t){return Ve(t)||en(t)},ip=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,s_=/random\([^)]+\)/g,o_=/,\s*/g,Yd=/(?:-?\.?\d|\.)+/gi,Su=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mu=/[+-]=-?[.\d]+/,a_=/[^,'"\[\]\s]+/gi,l_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Oi,hu,bu,ti={},bl={},rp,sp=function(t){return(bl=Bs(t,ti))&&bn},Rl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ta=function(t,e){return!e&&console.warn(t)},op=function(t,e){return t&&(ti[t]=e)&&bl&&(bl[t]=e)||ti},ea=function(){return 0},c_={suppressEvents:!0,isStart:!0,kill:!1},yl={suppressEvents:!0,kill:!1},h_={suppressEvents:!0},wu={},Sr=[],uu={},ap,Xn={},iu={},Zd=30,Sl=[],Tu="",Eu=function(t){var e=t[0],n,i;if(Bi(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Sl.length;i--&&!Sl[i].targetTest(e););n=Sl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Pu(t[i],n)))||t.splice(i,1);return t},Mr=function(t){return t._gsap||Eu(gi(t))[0]._gsap},Au=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():Cl(n)&&t.getAttribute&&t.getAttribute(e)||n},Un=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Fe=function(t){return Math.round(t*1e7)/1e7||0},ns=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},u_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},wl=function(){var t=Sr.length,e=Sr.slice(0),n,i;for(uu={},Sr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cu=function(t){return!!(t._initted||t._startAt||t.add)},lp=function(t,e,n,i){Sr.length&&!dn&&wl(),t.render(e,n,i||!!(dn&&e<0&&Cu(t))),Sr.length&&!dn&&wl()},cp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(a_).length<2?e:en(t)?t.trim():t},hp=function(t){return t},ei=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},f_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Bs=function(t,e){for(var n in e)t[n]=e[n];return t},Jd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Bi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Tl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},$o=function(t){var e=t.parent||Be,n=t.keyframes?f_(Mn(t.keyframes)):ei;if(Yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},d_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},up=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Pl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},br=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Qr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},p_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},fu=function(t,e,n,i){return t._startAt&&(dn?t._startAt.revert(yl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},m_=function r(t){return!t||t._ts&&r(t.parent)},$d=function(t){return t._repeat?zs(t._tTime,t=t.duration()+t._rDelay)*t:0},zs=function(t,e){var n=Math.floor(t=Fe(t/e));return t&&n===t?n-1:n},El=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Il=function(t){return t._end=Fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Ll=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Il(t),n._dirty||Qr(n,t)),t},fp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=El(t.rawTime(),e),(!e._dur||ra(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),Qr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},Fi=function(t,e,n,i){return e.parent&&br(e),e._start=Fe((er(n)?n:n||t!==Be?pi(t,n,e):t._time)+e._delay),e._end=Fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),up(t,e,"_first","_last",t._sort?"_start":0),du(e)||(t._recent=e),i||fp(t,e),t._ts<0&&Ll(t,t._tTime),t},dp=function(t,e){return(ti.ScrollTrigger||Rl("scrollTrigger",e))&&ti.ScrollTrigger.create(e,t)},pp=function(t,e,n,i,s){if(Du(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ap!==qn.frame)return Sr.push(t),t._lazy=[s,i],1},g_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},du=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},__=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&g_(t)&&!(!t._initted&&du(t))||(t._ts<0||t._dp._ts<0)&&!du(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ra(0,t._tDur,e),h=zs(l,a),t._yoyo&&h&1&&(o=1-o),h!==zs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||dn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&pp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&fu(t,e,n,!0),t._onUpdate&&!n&&jn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&jn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&br(t,1),!n&&!dn&&(jn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},x_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ks=function(t,e,n,i){var s=t._repeat,o=Fe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Fe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Ll(t,t._tTime=t._tDur*a),t.parent&&Il(t),n||Qr(t.parent,t),t},Kd=function(t){return t instanceof Sn?Qr(t):ks(t,t._dur)},v_={_start:0,endTime:ea,totalDuration:ea},pi=function r(t,e,n){var i=t.labels,s=t._recent||v_,o=t.duration()>=mi?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ko=function(t,e,n){var i=er(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new qe(e[0],o,e[s+1])},wr=function(t,e){return t||t===0?e(t):e},ra=function(t,e,n){return n<t?t:n>e?e:n},pn=function(t,e){return!en(t)||!(e=l_.exec(t))?"":e[1]},y_=function(t,e,n){return wr(n,function(i){return ra(t,e,i)})},pu=[].slice,mp=function(t,e){return t&&Bi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Bi(t[0]))&&!t.nodeType&&t!==Oi},S_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||mp(i,1)?(s=n).push.apply(s,gi(i)):n.push(i)})||n},gi=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):en(t)&&!n&&(hu||!Vs())?pu.call((e||bu).querySelectorAll(t),0):Mn(t)?S_(t,n):mp(t)?pu.call(t,0):t?[t]:[]},mu=function(t){return t=gi(t)[0]||ta("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return gi(e,n.querySelectorAll?n:n===t?ta("Invalid scope")||bu.createElement("div"):t)}},gp=function(t){return t.sort(function(){return .5-Math.random()})},_p=function(t){if(Ve(t))return t;var e=Bi(t)?t:{each:t},n=jr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return en(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,m=o[_],p,S,A,v,M,b,E,x,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,mi])[1],!w){for(E=-mi;E<(E=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(m=o[_]=[],p=l?Math.min(w,_)*h-.5:i%w,S=w===mi?0:l?_*d/w-.5:i/w|0,E=0,x=mi,b=0;b<_;b++)A=b%w-p,v=S-(b/w|0),m[b]=M=c?Math.abs(c==="y"?v:A):np(A*A+v*v),M>E&&(E=M),M<x&&(x=M);i==="random"&&gp(m),m.max=E-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=pn(e.amount||e.each)||0,n=n&&_<0?N_(n):n}return _=(m[u]-m.min)/m.max||0,Fe(m.b+(n?n(_):_)*m.v)+m.u}},gu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(er(n)?0:pn(n))}},xp=function(t,e){var n=Mn(t),i,s;return!n&&Bi(t)&&(i=n=t.radius||mi,t.values?(t=gi(t.values),(s=!er(t[0]))&&(i*=i)):t=gu(t.increment)),wr(e,n?Ve(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mi,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||er(o)?h:h+pn(o)}:gu(t))},vp=function(t,e,n,i){return wr(Mn(t)?!e:n===!0?!!(n=0):!i,function(){return Mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},M_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},b_=function(t,e){return function(n){return t(parseFloat(n))+(e||pn(n))}},w_=function(t,e,n){return Sp(t,e,0,1,n)},yp=function(t,e,n){return wr(n,function(i){return t[~~e(i)]})},T_=function r(t,e,n){var i=e-t;return Mn(t)?yp(t,r(0,t.length),e):wr(n,function(s){return(i+(s-t)%i)%i+t})},E_=function r(t,e,n){var i=e-t,s=i*2;return Mn(t)?yp(t,r(0,t.length-1),e):wr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Gs=function(t){return t.replace(s_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(o_);return vp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Sp=function(t,e,n,i,s){var o=e-t,a=i-n;return wr(s,function(l){return n+((l-t)/o*a||0)})},A_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=en(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Mn(t)&&!Mn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Bs(Mn(t)?[]:{},t));if(!h){for(l in e)Iu.call(a,t,l,"get",e[l]);s=function(g){return Ou(g,a)||(o?t.p:t)}}}return wr(n,s)},Qd=function(t,e,n){var i=t.labels,s=mi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},jn=function(t,e,n){var i=t.vars,s=i[e],o=Ne,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Sr.length&&wl(),a&&(Ne=a),h=l?s.apply(c,l):s.call(c),Ne=o,h},Zo=function(t){return br(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&jn(t,"onInterrupt"),t},Fs,Mp=[],bp=function(t){if(t)if(t=!t.name&&t.default||t,yu()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ea,render:Ou,add:Iu,kill:W_,modifier:H_,rawVars:0},o={targetTest:0,get:0,getSetter:Dl,aliases:{},register:0};if(Vs(),t!==i){if(Xn[e])return;ei(i,ei(Tl(t,s),o)),Bs(i.prototype,Bs(s,Tl(t,o))),Xn[i.prop=e]=i,t.targetTest&&(Sl.push(i),wu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}op(e,i),t.register&&t.register(bn,i,On)}else Mp.push(t)},we=255,Jo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},ru=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},wp=function(t,e,n){var i=t?er(t)?[t>>16,t>>8&we,t&we]:0:Jo.black,s,o,a,l,c,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jo[t])i=Jo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Yd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ru(l+1/3,s,o),i[1]=ru(l,s,o),i[2]=ru(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Su),n&&i.length<4&&(i[3]=1),i}else i=t.match(Yd)||Jo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/we,o=i[1]/we,a=i[2]/we,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Tp=function(t){var e=[],n=[],i=-1;return t.split(tr).forEach(function(s){var o=s.match(es)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},jd=function(t,e,n){var i="",s=(t+i).match(tr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=wp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Tp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(tr,"1").split(es),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(tr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},tr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),C_=/hsl[a]?\(/,Ru=function(t){var e=t.join(" "),n;if(tr.lastIndex=0,tr.test(e))return n=C_.test(e),t[1]=jd(t[1],n),t[0]=jd(t[0],n,Tp(t[1])),!0},na,qn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,g=function _(m){var p=r()-i,S=m===!0,A,v,M,b;if((p>t||p<0)&&(n+=p-e),i+=p,M=i-n,A=M-o,(A>0||S)&&(b=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,o+=A+(A>=s?4:s-A),v=1),S||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](M,u,b,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){rp&&(!hu&&yu()&&(Oi=hu=window,bu=Oi.document||{},ti.gsap=bn,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(bn.version),sp(bl||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),Mp.forEach(bp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},na=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),na=0,c=ea},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,S){var A=p?function(v,M,b,E){m(v,M,b,E),d.remove(A)}:m;return d.remove(m),a[S?"unshift":"push"](A),Vs(),A},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},d})(),Vs=function(){return!na&&qn.wake()},de={},R_=/^[\d.\-M][\d.\-,\s]/,P_=/["']/g,I_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(P_,"").trim():+c,i=l.substr(a+1).trim();return e},L_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},D_=function(t){var e=(t+"").split("("),n=de[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[I_(e[1])]:L_(t).split(",").map(cp)):de._CE&&R_.test(t)?de._CE("",t):n},N_=function(t){return function(e){return 1-t(1-e)}},jr=function(t,e){return t&&(Ve(t)?t:de[t]||D_(t))||e},is=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Un(t,function(a){de[a]=ti[a]=s,de[o=a.toLowerCase()]=n;for(var l in s)de[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=de[a+"."+l]=s[l]}),s},Ep=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},su=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/cu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*r_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Ep(a);return s=cu/s,l.config=function(c,h){return r(t,c,h)},l},ou=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ep(n);return i.config=function(s){return r(t,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;is(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});de.Linear.easeNone=de.none=de.Linear.easeIn;is("Elastic",su("in"),su("out"),su());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});is("Circ",function(r){return-(np(1-r*r)-1)});is("Sine",function(r){return r===1?1:-i_(r*e_)+1});is("Back",ou("in"),ou("out"),ou());de.SteppedEase=de.steps=ti.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((i*ra(0,o,a)|0)+s)*n}}};jo.ease=de["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Tu+=r+","+r+"Params,"});var Pu=function(t,e){this.id=n_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Au,this.set=e?e.getSetter:Dl},ia=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ks(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),na||qn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ll(this,n),!s._dp||s.parent||fp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),lp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$d(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$d(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?zs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?El(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Il(this),p_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Fe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?El(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=h_);var i=dn;return dn=n,Cu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Kd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(pi(this,n),Yn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ve(n)?n:hp,l=function(){var h=i.then;i.then=null,s&&s(),Ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Zo(this)},r})();ei(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var Sn=(function(r){ep(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),Be&&Fi(n.parent||Be,ji(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&dp(ji(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ko(0,arguments,this),this},e.from=function(i,s,o){return Ko(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ko(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,$o(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(i,s,pi(this,o),1),this},e.call=function(i,s,o){return Fi(this,qe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new qe(i,o,pi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,$o(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,$o(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Fe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,_,m,p,S,A,v,M,b,E;if(this!==Be&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,A=this._ts,p=!A,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Fe(h%m),h===l?(_=this._repeat,u=c):(M=Fe(h/m),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=zs(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),b&&_&1&&(u=c-u,E=1),_!==M&&!this._lock){var x=b&&M&1,w=x===(b&&_&1);if(_<M&&(x=!x),a=x?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Fe(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=x_(this,Fe(a),Fe(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!M&&(jn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-Te);break}}f=g}else{f=this._last;for(var C=i<0?i:u;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||dn&&Cu(f)),u!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=C?-Te:Te);break}}f=g}}if(S&&!s&&(this.pause(),S.render(u>=a?0:-Te)._zTime=u>=a?1:-1,this._ts))return this._start=v,Il(this),this.render(i,s,o);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&br(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(jn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(er(s)||(s=pi(this,s,i)),!(i instanceof ia)){if(Mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(Ve(i))i=qe.delayedCall(0,i);else return this}return this!==i?Fi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&Pl(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fe(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=pi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=qe.delayedCall(0,s||ea,o);return a.data="isPause",this._hasPause=1,Fi(this,a,pi(this,i))},e.removePause=function(i){var s=this._first;for(i=pi(this,i);s;)s._start===i&&s.data==="isPause"&&br(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=gi(i),l=this._first,c=er(s),h;l;)l instanceof qe?u_(l._targets,a)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=pi(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=qe.to(o,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ks(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ei({startAt:{time:pi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Qd(this,pi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Qd(this,pi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Fe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Qr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=mi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Fe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ks(o,o===Be&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Be._ts&&(lp(Be,El(i,Be)),ap=qn.frame),qn.frame>=Zd){Zd+=Zn.autoSleep||120;var s=Be._first;if((!s||!s._ts)&&Zn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},t})(ia);ei(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var U_=function(t,e,n,i,s,o,a){var l=new On(this._pt,t,e,0,1,Uu,null,s),c=0,h=0,d,u,f,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Gs(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),u=n.match(nu)||[];d=nu.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?ns(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=nu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Mu.test(i)||p)&&(l.e=0),this._pt=l,l},Iu=function(t,e,n,i,s,o,a,l,c,h){Ve(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:Ve(d)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ve(d)?c?k_:Rp:Nu,g;if(en(i)&&(~i.indexOf("random(")&&(i=Gs(i)),i.charAt(1)==="="&&(g=ns(u,i)+(pn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||_u)return!isNaN(u*i)&&i!==""?(g=new On(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?G_:Pp,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!d&&!(e in t)&&Rl(e,i),U_.call(this,t,e,u,i,f,l||Zn.stringFilter,c))},O_=function(t,e,n,i,s){if(Ve(t)&&(t=Qo(t,s,e,n,i)),!Bi(t)||t.style&&t.nodeType||Mn(t)||ip(t))return en(t)?Qo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Qo(t[a],s,e,n,i);return o},Lu=function(t,e,n,i,s,o){var a,l,c,h;if(Xn[t]&&(a=new Xn[t]).init(s,a.rawVars?e[t]:O_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new On(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},yr,_u,Du=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,A=t._overwrite==="auto"&&!vu,v=t.timeline,M=i.easeReverse||d,b,E,x,w,C,D,I,B,L,F,G,z,K;if(v&&(!u||!s)&&(s="none"),t._ease=jr(s,jo.ease),t._rEase=M&&(jr(M)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(B=m[0]?Mr(m[0]).harness:0,z=B&&i[B.prop],b=Tl(i,wu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?yl:c_),_._lazy=0),o){if(br(t._startAt=qe.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!a&&!f)&&t._startAt.revert(yl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),x=ei({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Yn(l),immediateRender:a,stagger:0,parent:p},b),z&&(x[B.prop]=z),br(t._startAt=qe.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(yl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Yn(l)||l&&!g,E=0;E<m.length;E++){if(C=m[E],I=C._gsap||Eu(m)[E]._gsap,t._ptLookup[E]=F={},uu[I.id]&&Sr.length&&wl(),G=S===m?E:S.indexOf(C),B&&(L=new B).init(C,z||b,t,G,S)!==!1&&(t._pt=w=new On(t._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Y){F[Y]=w}),L.priority&&(D=1)),!B||z)for(x in b)Xn[x]&&(L=Lu(x,b,t,G,C,S))?L.priority&&(D=1):F[x]=w=Iu.call(t,C,x,"get",b[x],G,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(C,t._op[E]),A&&t._pt&&(yr=t,Be.killTweensOf(C,F,t.globalTime(e)),K=!t.parent,yr=0),t._pt&&l&&(uu[I.id]=1)}D&&Fu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&v.render(mi,!0,!0)},F_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return _u=1,t.vars[e]="+=0",Du(t,a),_u=0,l?ta(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ge(n)+pn(d.e)),d.b&&(d.b=h.s+pn(d.b))},B_=function(t,e){var n=t[0]?Mr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Bs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},z_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Qo=function(t,e,n,i,s){return Ve(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?Gs(t):t},Ap=Tu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Cp={};Un(Ap+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Cp[r]=1});var qe=(function(r){ep(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:$o(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Be,S=(Mn(n)||ip(n)?er(n[0]):"length"in i)?[n]:gi(n),A,v,M,b,E,x,w,C;if(a._targets=S.length?Eu(S):ta("GSAP target "+n+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||u||vl(c)||vl(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(A=a.timeline=new Sn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),A.kill(),A.parent=A._dp=ji(a),A._start=0,u||vl(c)||vl(h)){if(b=S.length,w=u&&_p(u),Bi(u))for(E in u)~Ap.indexOf(E)&&(C||(C={}),C[E]=u[E]);for(v=0;v<b;v++)M=Tl(i,Cp),M.stagger=0,D&&(M.easeReverse=D),C&&Bs(M,C),x=S[v],M.duration=+Qo(c,ji(a),v,x,S),M.delay=(+Qo(h,ji(a),v,x,S)||0)-a._delay,!u&&b===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),A.to(x,M,w?w(v,x,S):0),A._ease=de.none;A.duration()?c=h=0:a.timeline=0}else if(g){$o(ei(A.vars.defaults,{ease:"none"})),A._ease=jr(g.ease||i.ease||"none");var I=0,B,L,F;if(Mn(g))g.forEach(function(G){return A.to(S,G,">")}),A.duration();else{M={};for(E in g)E==="ease"||E==="easeEach"||z_(E,g[E],M,g.easeEach);for(E in M)for(B=M[E].sort(function(G,z){return G.t-z.t}),I=0,v=0;v<B.length;v++)L=B[v],F={ease:L.e,duration:(L.t-(v?B[v-1].t:0))/100*c},F[E]=L.v,A.to(S,F,I),I+=F.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return f===!0&&!vu&&(yr=ji(a),Be.killTweensOf(S),yr=0),Fi(p,ji(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===Fe(p._time)&&Yn(d)&&m_(ji(a))&&p.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-h)||0)),m&&dp(ji(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Te&&!h?l:i<Te?0:i,u,f,g,_,m,p,S,A;if(!c)__(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Fe(d%_),d===l?(g=this._repeat,u=c):(m=Fe(d/_),g=~~m,g&&g===m?(u=c,g--):u>c&&(u=c)),p=this._yoyo&&g&1,p&&(u=c-u),m=zs(this._tTime,_),u===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Fe(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(pp(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var M=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(v?-1:1)/M:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(jn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&fu(this,i,s,o),jn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&fu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&br(this,1),!s&&!(h&&!a)&&(d||a||p)&&(jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){na||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Du(this,c),h=this._ease(c/this._dur),F_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Ll(this,0),this.parent||up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Zo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,yr&&yr.vars.overwrite!==!0)._first||Zo(this),this.parent&&o!==this.timeline.totalDuration()&&ks(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,h=this._pt,d,u,f,g,_,m,p;if((!s||s==="all")&&d_(a,l))return s==="all"&&(this._pt=0),Zo(this);for(d=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Un(s,function(S){return _[S]=1}),s=_),s=B_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(d[p]=s,g=u,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Pl(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Zo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ko(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ko(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Be.killTweensOf(i,s,o)},t})(ia);ei(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){qe[r]=function(){var t=new Sn,e=pu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Nu=function(t,e,n){return t[e]=n},Rp=function(t,e,n){return t[e](n)},k_=function(t,e,n,i){return t[e](i.fp,n)},V_=function(t,e,n){return t.setAttribute(e,n)},Dl=function(t,e){return Ve(t[e])?Rp:Cl(t[e])&&t.setAttribute?V_:Nu},Pp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},G_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Uu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ou=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},H_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},W_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Pl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},X_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Fu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},On=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Pp,this.d=l||this,this.set=c||Nu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=X_,this.m=n,this.mt=s,this.tween=i},r})();Un(Tu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return wu[r]=1});ti.TweenMax=ti.TweenLite=qe;ti.TimelineLite=ti.TimelineMax=Sn;Be=new Sn({sortChildren:!1,defaults:jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=Ru;var ts=[],Ml={},q_=[],tp=0,Y_=0,au=function(t){return(Ml[t]||q_).map(function(e){return e()})},xu=function(){var t=Date.now(),e=[];t-tp>2&&(au("matchMediaInit"),ts.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Oi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),au("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),tp=t,au("matchMedia"))},Ip=(function(){function r(e,n){this.selector=n&&mu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Y_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ve(n)&&(s=i,i=n,n=Ve);var o=this,a=function(){var c=Ne,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=mu(s)),Ne=o,d=i.apply(o,arguments),Ve(d)&&o._r.push(d),Ne=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ve?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ts.length;o--;)ts[o].id===this.id&&ts.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Z_=(function(){function r(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Bi(n)||(n={matches:n});var o=new Ip(0,s||this.scope),a=o.conditions={},l,c,h;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Oi.matchMedia(n[c]),l&&(ts.indexOf(o)<0&&ts.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(xu):l.addEventListener("change",xu)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Al={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return bp(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=gi(t)[0]);var s=Mr(t||{}).get,o=n?hp:cp;return n==="native"&&(n=""),t&&(e?o((Xn[e]&&Xn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=gi(t),t.length>1){var i=t.map(function(h){return bn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=Xn[e],a=Mr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Fs._pt=0,d.init(t,n?h+n:h,Fs,0,[t]),d.render(1,d),Fs._pt&&Ou(1,Fs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=bn.to(t,ei((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=jr(t.ease,jo.ease)),Jd(jo,t||{})},config:function(t){return Jd(Zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!ti[a]&&ta(e+" effect requires "+a+" plugin.")}),iu[e]=function(a,l,c){return n(gi(a),ei(l||{},s),c)},o&&(Sn.prototype[e]=function(a,l,c){return this.add(iu[e](a,Bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){de[t]=jr(e)},parseEase:function(t,e){return arguments.length?jr(t,e):de},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=Yn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)s=i._next,(e||!(!i._dur&&i instanceof qe&&i.vars.onComplete===i._targets[0]))&&Fi(n,i,i._start-i._delay),i=s;return Fi(Be,n,0),n},context:function(t,e){return t?new Ip(t,e):Ne},matchMedia:function(t){return new Z_(t)},matchMediaRefresh:function(){return ts.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||xu()},addEventListener:function(t,e){var n=Ml[t]||(Ml[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ml[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:T_,wrapYoyo:E_,distribute:_p,random:vp,snap:xp,normalize:w_,getUnit:pn,clamp:y_,splitColor:wp,toArray:gi,selector:mu,mapRange:Sp,pipe:M_,unitize:b_,interpolate:A_,shuffle:gp},install:sp,effects:iu,ticker:qn,updateRoot:Sn.updateRoot,plugins:Xn,globalTimeline:Be,core:{PropTween:On,globals:op,Tween:qe,Timeline:Sn,Animation:ia,getCache:Mr,_removeLinkedListItem:Pl,reverting:function(){return dn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return vu=t}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Al[r]=qe[r]});qn.add(Sn.updateRoot);Fs=Al.to({},{duration:0});var J_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},$_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=J_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},lu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Un(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}$_(a,s)}}}},bn=Al.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},lu("roundProps",gu),lu("modifiers"),lu("snap",xp))||Al;qe.version=Sn.version=bn.version="3.15.0";rp=1;yu()&&Vs();var K_=de.Power0,Q_=de.Power1,j_=de.Power2,tx=de.Power3,ex=de.Power4,nx=de.Linear,ix=de.Quad,rx=de.Cubic,sx=de.Quart,ox=de.Quint,ax=de.Strong,lx=de.Elastic,cx=de.Back,hx=de.SteppedEase,ux=de.Bounce,fx=de.Sine,dx=de.Expo,px=de.Circ;var Lp,Tr,Ws,Hu,as,mx,Dp,Wu,gx=function(){return typeof window<"u"},ir={},os=180/Math.PI,Xs=Math.PI/180,Hs=Math.atan2,Np=1e8,Xu=/([A-Z])/g,_x=/(left|right|width|margin|padding|x)/i,xx=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Sx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Mx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Gp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Hp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},bx=function(t,e,n){return t.style[e]=n},wx=function(t,e,n){return t.style.setProperty(e,n)},Tx=function(t,e,n){return t._gsap[e]=n},Ex=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ax=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Cx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ze="transform",Jn=ze+"Origin",Rx=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in ir&&s){if(this.tfm=this.tfm||{},t!=="transform")t=zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=nr(i,a)}):this.tfm[t]=o.x?o[t]:nr(i,t),t===Jn&&(this.tfm.zOrigin=o.zOrigin);else return zi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,e,"")),t=ze}(s||e)&&this.props.push(t,e,s[t])},Wp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Px=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Xu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Wu(),(!s||!s.isStart)&&!n[ze]&&(Wp(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xp=function(t,e){var n={target:t,props:[],revert:Px,save:Rx};return t._gsap||bn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},qp,ku=function(t,e){var n=Tr.createElementNS?Tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Tr.createElement(t);return n&&n.style?n:Tr.createElement(t)},ni=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Xu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,qs(e)||e,1)||""},Up="O,Moz,ms,Ms,Webkit".split(","),qs=function(t,e,n){var i=e||as,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Up[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Up[o]:"")+t},Vu=function(){gx()&&window.document&&(Lp=window,Tr=Lp.document,Ws=Tr.documentElement,as=ku("div")||{style:{}},mx=ku("div"),ze=qs(ze),Jn=ze+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qp=!!qs("perspective"),Wu=bn.core.reverting,Hu=1)},Op=function(t){var e=t.ownerSVGElement,n=ku("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ws.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ws.removeChild(n),s},Fp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Yp=function(t){var e,n;try{e=t.getBBox()}catch{e=Op(t),n=1}return e&&(e.width||e.height)||n||(e=Op(t)),e&&!e.width&&!e.x&&!e.y?{x:+Fp(t,["x","cx","x1"])||0,y:+Fp(t,["y","cy","y1"])||0,width:0,height:0}:e},Zp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Yp(t))},Ar=function(t,e){if(e){var n=t.style,i;e in ir&&e!==Jn&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Xu,"-$1").toLowerCase())):n.removeAttribute(e)}},Er=function(t,e,n,i,s,o){var a=new On(t._pt,e,n,0,1,o?Hp:Gp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Bp={deg:1,rad:1,turn:1},Ix={grid:1,flex:1},Cr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=_x.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||Bp[i]||Bp[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&Zp(t),(f||o==="%")&&(ir[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Ge(f?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Tr||!_.appendChild)&&(_=Tr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===qn.time&&!m.uncache)return Ge(s/m.width*d);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=d+i,g=t[h],S?t.style[e]=S:Ar(t,e)}else(f||o==="%")&&!Ix[ni(_,"display")]&&(a.position=ni(t,"position")),_===t&&(a.position="static"),_.appendChild(as),g=as[h],_.removeChild(as),a.position="absolute";return l&&f&&(m=Mr(_),m.time=qn.time,m.width=_[h]),Ge(u?g*s/d:g&&s?d/g*s:0)},nr=function(t,e,n,i){var s;return Hu||Vu(),e in zi&&e!=="transform"&&(e=zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),ir[e]&&e!=="transform"?(s=aa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ul(ni(t,Jn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Nl[e]&&Nl[e](t,e,n)||ni(t,e)||Au(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cr(t,e,s,n)+n:s},Lx=function(t,e,n,i){if(!n||n==="none"){var s=qs(e,t,1),o=s&&ni(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ni(t,"borderTopColor"))}var a=new On(this._pt,t.style,e,0,1,Uu),l=0,c=0,h,d,u,f,g,_,m,p,S,A,v,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ni(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ni(t,e)||i,_?t.style[e]=_:Ar(t,e)),h=[n,i],Ru(h),n=h[0],i=h[1],u=n.match(es)||[],M=i.match(es)||[],M.length){for(;d=es.exec(i);)m=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=ns(f,m)+v),p=parseFloat(m),A=m.substr((p+"").length),l=es.lastIndex-A.length,A||(A=A||Zn.units[e]||v,l===i.length&&(i+=A,a.e+=A)),v!==A&&(f=Cr(t,e,_,A)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Hp:Gp;return Mu.test(i)&&(a.e=0),this._pt=a,a},zp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=zp[n]||n,e[1]=zp[i]||i,e.join(" ")},Nx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ir[a]&&(l=1,a=a==="transformOrigin"?Jn:ze),Ar(n,a);l&&(Ar(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",aa(n,1),o.uncache=1,Wp(i)))}},Nl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new On(t._pt,e,n,0,0,Nx);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},oa=[1,0,0,1,0,0],Jp={},$p=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},kp=function(t){var e=ni(t,ze);return $p(e)?oa:e.substr(7).match(Su).map(Ge)},qu=function(t,e){var n=t._gsap||Mr(t),i=t.style,s=kp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?oa:s):(s===oa&&!t.offsetParent&&t!==Ws&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ws.appendChild(t)),s=kp(t),l?i.display=l:Ar(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ws.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gu=function(t,e,n,i,s,o){var a=t._gsap,l=s||qu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],A=e.split(" "),v=parseFloat(A[0])||0,M=parseFloat(A[1])||0,b,E,x,w;n?l!==oa&&(E=f*m-g*_)&&(x=v*(m/E)+M*(-_/E)+(_*S-m*p)/E,w=v*(-g/E)+M*(f/E)-(f*S-g*p)/E,v=x,M=w):(b=Yp(t),v=b.x+(~A[0].indexOf("%")?v/100*b.width:v),M=b.y+(~(A[1]||A[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(p=v-c,S=M-h,a.xOffset=d+(p*f+S*_)-p,a.yOffset=u+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Jn]="0px 0px",o&&(Er(o,a,"xOrigin",c,v),Er(o,a,"yOrigin",h,M),Er(o,a,"xOffset",d,a.xOffset),Er(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},aa=function(t,e){var n=t._gsap||new Pu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ni(t,Jn)||"0",h,d,u,f,g,_,m,p,S,A,v,M,b,E,x,w,C,D,I,B,L,F,G,z,K,Y,R,Q,yt,bt,Vt,Bt;return h=d=u=_=m=p=S=A=v=0,f=g=1,n.svg=!!(t.getCTM&&Zp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),E=qu(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),Gu(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,b=n.yOrigin||0,E!==oa&&(D=E[0],I=E[1],B=E[2],L=E[3],h=F=E[4],d=G=E[5],E.length===6?(f=Math.sqrt(D*D+I*I),g=Math.sqrt(L*L+B*B),_=D||I?Hs(I,D)*os:0,S=B||L?Hs(B,L)*os+_:0,S&&(g*=Math.abs(Math.cos(S*Xs))),n.svg&&(h-=M-(M*D+b*B),d-=b-(M*I+b*L))):(Bt=E[6],bt=E[7],R=E[8],Q=E[9],yt=E[10],Vt=E[11],h=E[12],d=E[13],u=E[14],x=Hs(Bt,yt),m=x*os,x&&(w=Math.cos(-x),C=Math.sin(-x),z=F*w+R*C,K=G*w+Q*C,Y=Bt*w+yt*C,R=F*-C+R*w,Q=G*-C+Q*w,yt=Bt*-C+yt*w,Vt=bt*-C+Vt*w,F=z,G=K,Bt=Y),x=Hs(-B,yt),p=x*os,x&&(w=Math.cos(-x),C=Math.sin(-x),z=D*w-R*C,K=I*w-Q*C,Y=B*w-yt*C,Vt=L*C+Vt*w,D=z,I=K,B=Y),x=Hs(I,D),_=x*os,x&&(w=Math.cos(x),C=Math.sin(x),z=D*w+I*C,K=F*w+G*C,I=I*w-D*C,G=G*w-F*C,D=z,F=K),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Ge(Math.sqrt(D*D+I*I+B*B)),g=Ge(Math.sqrt(G*G+Bt*Bt)),x=Hs(F,G),S=Math.abs(x)>2e-4?x*os:0,v=Vt?1/(Vt<0?-Vt:Vt):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!$p(ni(t,ze)),z&&t.setAttribute("transform",z))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ge(f),n.scaleY=Ge(g),n.rotation=Ge(_)+a,n.rotationX=Ge(m)+a,n.rotationY=Ge(p)+a,n.skewX=S+a,n.skewY=A+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Jn]=Ul(c)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?Ox:qp?Kp:Ux,n.uncache=0,n},Ul=function(t){return(t=t.split(" "))[0]+" "+t[1]},Bu=function(t,e,n){var i=pn(e);return Ge(parseFloat(e)+parseFloat(Cr(t,"x",n+"px",i)))+i},Ux=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Kp(t,e)},rs="0deg",sa="0px",ss=") ",Kp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,A=n.zOrigin,v="",M=p==="auto"&&t&&t!==1||p===!0;if(A&&(d!==rs||h!==rs)){var b=parseFloat(h)*Xs,E=Math.sin(b),x=Math.cos(b),w;b=parseFloat(d)*Xs,w=Math.cos(b),o=Bu(S,o,E*w*-A),a=Bu(S,a,-Math.sin(b)*-A),l=Bu(S,l,x*w*-A+A)}m!==sa&&(v+="perspective("+m+ss),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||o!==sa||a!==sa||l!==sa)&&(v+=l!==sa||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ss),c!==rs&&(v+="rotate("+c+ss),h!==rs&&(v+="rotateY("+h+ss),d!==rs&&(v+="rotateX("+d+ss),(u!==rs||f!==rs)&&(v+="skew("+u+", "+f+ss),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ss),S.style[ze]=v||"translate(0, 0)"},Ox=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,A=parseFloat(o),v=parseFloat(a),M,b,E,x,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Xs,c*=Xs,M=Math.cos(l)*d,b=Math.sin(l)*d,E=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=Xs,w=Math.tan(c-h),w=Math.sqrt(1+w*w),E*=w,x*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),M*=w,b*=w)),M=Ge(M),b=Ge(b),E=Ge(E),x=Ge(x)):(M=d,x=u,b=E=0),(A&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(A=Cr(f,"x",o,"px"),v=Cr(f,"y",a,"px")),(g||_||m||p)&&(A=Ge(A+g-(g*M+_*E)+m),v=Ge(v+_-(g*b+_*x)+p)),(i||s)&&(w=f.getBBox(),A=Ge(A+i/100*w.width),v=Ge(v+s/100*w.height)),w="matrix("+M+","+b+","+E+","+x+","+A+","+v+")",f.setAttribute("transform",w),S&&(f.style[ze]=w)},Fx=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?os:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Np)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Np)%o-~~(c/o)*o)),t._pt=u=new On(t._pt,e,n,i,c,vx),u.e=h,u.u="deg",t._props.push(n),u},Vp=function(t,e){for(var n in e)t[n]=e[n];return t},Bx=function(t,e,n){var i=Vp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=aa(n,1),Ar(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=aa(n,1),o[ze]=c);for(l in ir)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=pn(c),g=pn(h),d=f!==g?Cr(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new On(t._pt,a,l,d,u-d,zu),t._pt.u=g||0,t._props.push(l));Vp(a,i)};Un("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Nl[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(g){return nr(a,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Yu={name:"css",register:Vu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,g,_,m,p,S,A,v,M,b,E,x,w;Hu||Vu(),this.styles=this.styles||Xp(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Xn[_]&&Lu(_,e,n,i,t,s)))){if(f=typeof h,g=Nl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Gs(h)),g)g(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",tr.lastIndex=0,tr.test(c)||(m=pn(c),p=pn(h),p?m!==p&&(c=Cr(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=Gs(c)),pn(c+"")||c==="auto"||(c+=Zn.units[_]||pn(nr(t,_))||""),(c+"").charAt(1)==="="&&(c=nr(t,_))):c=nr(t,_),u=parseFloat(c),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),d=parseFloat(h),_ in zi&&(_==="autoAlpha"&&(u===1&&nr(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,a.visibility),Er(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in ir,A){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ni(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ni(t,"perspective"),C?t.style.perspective=C:Ar(t,"perspective")}d=parseFloat(h)}if(v||(M=t._gsap,M.renderTransform&&!e.parseTransform||aa(t,e.parseTransform),b=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new On(this._pt,a,ze,0,1,M.renderTransform,M,0,-1),v.dep=1),_==="scale")this._pt=new On(this._pt,M,"scaleY",M.scaleY,(S?ns(M.scaleY,S+d):d)-M.scaleY||0,zu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Jn,0,a[Jn]),h=Dx(h),M.svg?Gu(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==M.zOrigin&&Er(this,M,"zOrigin",M.zOrigin,p),Er(this,a,_,Ul(c),Ul(h)));continue}else if(_==="svgOrigin"){Gu(t,h,1,b,0,this);continue}else if(_ in Jp){Fx(this,M,_,u,S?ns(u,S+h):h);continue}else if(_==="smoothOrigin"){Er(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){Bx(this,h,t);continue}}else _ in a||(_=qs(_)||_);if(A||(d||d===0)&&(u||u===0)&&!xx.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),p=pn(h)||(_ in Zn.units?Zn.units[_]:m),m!==p&&(u=Cr(t,_,c,p)),this._pt=new On(this._pt,A?M:a,_,u,(S?ns(u,S+d):d)-u,!A&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Mx:zu),this._pt.u=p||0,A&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=Sx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=yx);else if(_ in a)Lx.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,s);else if(_!=="parseTransform"){Rl(_,h);continue}A||(_ in a?x.push(_,0,a[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),o.push(_)}}E&&Fu(this)},render:function(t,e){if(e.tween._time||!Wu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:nr,aliases:zi,getSetter:function(t,e,n){var i=zi[e];return i&&i.indexOf(",")<0&&(e=i),e in ir&&e!==Jn&&(t._gsap.x||nr(t,"x"))?n&&Dp===n?e==="scale"?Ex:Tx:(Dp=n||{})&&(e==="scale"?Ax:Cx):t.style&&!Cl(t.style[e])?bx:~e.indexOf("-")?wx:Dl(t,e)},core:{_removeProperty:Ar,_getMatrix:qu}};bn.utils.checkPrefix=qs;bn.core.getStyleSaver=Xp;(function(r,t,e,n){var i=Un(r+","+t+","+e,function(s){ir[s]=1});Un(t,function(s){Zn.units[s]="deg",Jp[s]=1}),zi[i[13]]=r+","+t,Un(n,function(s){var o=s.split(":");zi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Zn.units[r]="px"});bn.registerPlugin(Yu);var ln=bn.registerPlugin(Yu)||bn,vw=ln.core.Tween;function Qp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function zx(r,t,e){return t&&Qp(r.prototype,t),e&&Qp(r,e),r}var mn,Bl,kx,ii,Rr,Pr,Zs,tm,ls,Js,em,rr,wi,nm,im=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},rm=1,Ys=[],re=[],Ti=[],ca=Date.now,Zu=function(t,e){return e},Vx=function(){var t=Js.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Ti),re=n,Ti=i,Zu=function(o,a){return e[o](a)}},or=function(t,e){return~Ti.indexOf(t)&&Ti[Ti.indexOf(t)+1][e]},ha=function(t){return!!~em.indexOf(t)},Bn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ol="scrollLeft",Fl="scrollTop",Ju=function(){return rr&&rr.isPressed||re.cache++},zl=function(t,e){var n=function i(s){if(s||s===0){rm&&(ii.history.scrollRestoration="manual");var o=rr&&rr.isPressed;s=i.v=Math.round(s)||(rr&&rr.iOS?1:0),t(s),i.cacheID=re.cache,o&&Zu("ss",s)}else(e||re.cache!==i.cacheID||Zu("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:Ol,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zl(function(r){return arguments.length?ii.scrollTo(r,$e.sc()):ii.pageXOffset||Rr[Ol]||Pr[Ol]||Zs[Ol]||0})},$e={s:Fl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:zl(function(r){return arguments.length?ii.scrollTo(wn.sc(),r):ii.pageYOffset||Rr[Fl]||Pr[Fl]||Zs[Fl]||0})},zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||mn.utils.toArray)(t)[0]||(typeof t=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Gx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},sr=function(t,e){var n=e.s,i=e.sc;ha(t)&&(t=Rr.scrollingElement||Pr);var s=re.indexOf(t),o=i===$e.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||Bn(t,"scroll",Ju);var a=re[s+o],l=a||(re[s+o]=zl(or(t,n),!0)||(ha(t)?i:zl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=mn.getProperty(t,"scrollBehavior")==="smooth"),l},kl=function(t,e,n){var i=t,s=t,o=ca(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var m=ca();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(g){var _=a,m=s,p=ca();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},la=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},jp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},sm=function(){Js=mn.core.globals().ScrollTrigger,Js&&Js.core&&Vx()},om=function(t){return mn=t||im(),!Bl&&mn&&typeof document<"u"&&document.body&&(ii=window,Rr=document,Pr=Rr.documentElement,Zs=Rr.body,em=[ii,Rr,Pr,Zs],kx=mn.utils.clamp,nm=mn.core.context||function(){},ls="onpointerenter"in Zs?"pointer":"mouse",tm=He.isTouch=ii.matchMedia&&ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,wi=He.eventTypes=("ontouchstart"in Pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return rm=0},500),Bl=1),Js||sm(),Bl};wn.op=$e;re.cache=0;var He=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Bl||om(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Js||sm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,A=n.onPress,v=n.onRelease,M=n.onRight,b=n.onLeft,E=n.onUp,x=n.onDown,w=n.onChangeX,C=n.onChangeY,D=n.onChange,I=n.onToggleX,B=n.onToggleY,L=n.onHover,F=n.onHoverEnd,G=n.onMove,z=n.ignoreCheck,K=n.isNormalizer,Y=n.onGestureStart,R=n.onGestureEnd,Q=n.onWheel,yt=n.onEnable,bt=n.onDisable,Vt=n.onClick,Bt=n.scrollSpeed,Ht=n.capture,J=n.allowClicks,j=n.lockAxis,ut=n.onLockAxis;this.target=a=zn(a)||Pr,this.vars=n,f&&(f=mn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Bt=Bt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ii.getComputedStyle(Zs).lineHeight)||22);var Ft,ft,dt,wt,At,Gt,Qt,V=this,ee=0,qt=0,ye=n.passive||!h&&n.passive!==!1,Wt=sr(a,wn),ue=sr(a,$e),O=Wt(),Se=ue(),Yt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&wi[0]==="pointerdown",P=ha(a),y=a.ownerDocument||Rr,k=[0,0,0],X=[0,0,0],$=0,ct=function(){return $=ca()},ot=function(rt,Ot){return(V.event=rt)&&f&&Gx(rt.target,f)||Ot&&Yt&&rt.pointerType!=="touch"||z&&z(rt,Ot)},tt=function(){V._vx.reset(),V._vy.reset(),ft.pause(),d&&d(V)},nt=function(){var rt=V.deltaX=jp(k),Ot=V.deltaY=jp(X),st=Math.abs(rt)>=i,zt=Math.abs(Ot)>=i;D&&(st||zt)&&D(V,rt,Ot,k,X),st&&(M&&V.deltaX>0&&M(V),b&&V.deltaX<0&&b(V),w&&w(V),I&&V.deltaX<0!=ee<0&&I(V),ee=V.deltaX,k[0]=k[1]=k[2]=0),zt&&(x&&V.deltaY>0&&x(V),E&&V.deltaY<0&&E(V),C&&C(V),B&&V.deltaY<0!=qt<0&&B(V),qt=V.deltaY,X[0]=X[1]=X[2]=0),(wt||dt)&&(G&&G(V),dt&&(m&&dt===1&&m(V),S&&S(V),dt=0),wt=!1),Gt&&!(Gt=!1)&&ut&&ut(V),At&&(Q(V),At=!1),Ft=0},mt=function(rt,Ot,st){k[st]+=rt,X[st]+=Ot,V._vx.update(rt),V._vy.update(Ot),c?Ft||(Ft=requestAnimationFrame(nt)):nt()},Rt=function(rt,Ot){j&&!Qt&&(V.axis=Qt=Math.abs(rt)>Math.abs(Ot)?"x":"y",Gt=!0),Qt!=="y"&&(k[2]+=rt,V._vx.update(rt,!0)),Qt!=="x"&&(X[2]+=Ot,V._vy.update(Ot,!0)),c?Ft||(Ft=requestAnimationFrame(nt)):nt()},gt=function(rt){if(!ot(rt,1)){rt=la(rt,h);var Ot=rt.clientX,st=rt.clientY,zt=Ot-V.x,Pt=st-V.y,$t=V.isDragging;V.x=Ot,V.y=st,($t||(zt||Pt)&&(Math.abs(V.startX-Ot)>=s||Math.abs(V.startY-st)>=s))&&(dt||(dt=$t?2:1),$t||(V.isDragging=!0),Rt(zt,Pt))}},pt=V.onPress=function(at){ot(at,1)||at&&at.button||(V.axis=Qt=null,ft.pause(),V.isPressed=!0,at=la(at),ee=qt=0,V.startX=V.x=at.clientX,V.startY=V.y=at.clientY,V._vx.reset(),V._vy.reset(),Bn(K?a:y,wi[1],gt,ye,!0),V.deltaX=V.deltaY=0,A&&A(V))},lt=V.onRelease=function(at){if(!ot(at,1)){Fn(K?a:y,wi[1],gt,!0);var rt=!isNaN(V.y-V.startY),Ot=V.isDragging,st=Ot&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),zt=la(at);!st&&rt&&(V._vx.reset(),V._vy.reset(),h&&J&&mn.delayedCall(.08,function(){if(ca()-$>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(y.createEvent){var Pt=y.createEvent("MouseEvents");Pt.initMouseEvent("click",!0,!0,ii,1,zt.screenX,zt.screenY,zt.clientX,zt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(Pt)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Ot&&!K&&ft.restart(!0),dt&&nt(),p&&Ot&&p(V),v&&v(V,st)}},Nt=function(rt){return rt.touches&&rt.touches.length>1&&(V.isGesturing=!0)&&Y(rt,V.isDragging)},kt=function(){return(V.isGesturing=!1)||R(V)},N=function(rt){if(!ot(rt)){var Ot=Wt(),st=ue();mt((Ot-O)*Bt,(st-Se)*Bt,1),O=Ot,Se=st,d&&ft.restart(!0)}},ht=function(rt){if(!ot(rt)){rt=la(rt,h),Q&&(At=!0);var Ot=(rt.deltaMode===1?l:rt.deltaMode===2?ii.innerHeight:1)*g;mt(rt.deltaX*Ot,rt.deltaY*Ot,0),d&&!K&&ft.restart(!0)}},et=function(rt){if(!ot(rt)){var Ot=rt.clientX,st=rt.clientY,zt=Ot-V.x,Pt=st-V.y;V.x=Ot,V.y=st,wt=!0,d&&ft.restart(!0),(zt||Pt)&&Rt(zt,Pt)}},_t=function(rt){V.event=rt,L(V)},vt=function(rt){V.event=rt,F(V)},it=function(rt){return ot(rt)||la(rt,h)&&Vt(V)};ft=V._dc=mn.delayedCall(u||.25,tt).pause(),V.deltaX=V.deltaY=0,V._vx=kl(0,50,!0),V._vy=kl(0,50,!0),V.scrollX=Wt,V.scrollY=ue,V.isDragging=V.isGesturing=V.isPressed=!1,nm(this),V.enable=function(at){return V.isEnabled||(Bn(P?y:a,"scroll",Ju),o.indexOf("scroll")>=0&&Bn(P?y:a,"scroll",N,ye,Ht),o.indexOf("wheel")>=0&&Bn(a,"wheel",ht,ye,Ht),(o.indexOf("touch")>=0&&tm||o.indexOf("pointer")>=0)&&(Bn(a,wi[0],pt,ye,Ht),Bn(y,wi[2],lt),Bn(y,wi[3],lt),J&&Bn(a,"click",ct,!0,!0),Vt&&Bn(a,"click",it),Y&&Bn(y,"gesturestart",Nt),R&&Bn(y,"gestureend",kt),L&&Bn(a,ls+"enter",_t),F&&Bn(a,ls+"leave",vt),G&&Bn(a,ls+"move",et)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=wt=dt=!1,V._vx.reset(),V._vy.reset(),O=Wt(),Se=ue(),at&&at.type&&pt(at),yt&&yt(V)),V},V.disable=function(){V.isEnabled&&(Ys.filter(function(at){return at!==V&&ha(at.target)}).length||Fn(P?y:a,"scroll",Ju),V.isPressed&&(V._vx.reset(),V._vy.reset(),Fn(K?a:y,wi[1],gt,!0)),Fn(P?y:a,"scroll",N,Ht),Fn(a,"wheel",ht,Ht),Fn(a,wi[0],pt,Ht),Fn(y,wi[2],lt),Fn(y,wi[3],lt),Fn(a,"click",ct,!0),Fn(a,"click",it),Fn(y,"gesturestart",Nt),Fn(y,"gestureend",kt),Fn(a,ls+"enter",_t),Fn(a,ls+"leave",vt),Fn(a,ls+"move",et),V.isEnabled=V.isPressed=V.isDragging=!1,bt&&bt(V))},V.kill=V.revert=function(){V.disable();var at=Ys.indexOf(V);at>=0&&Ys.splice(at,1),rr===V&&(rr=0)},Ys.push(V),K&&ha(a)&&(rr=V),V.enable(_)},zx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();He.version="3.15.0";He.create=function(r){return new He(r)};He.register=om;He.getAll=function(){return Ys.slice()};He.getById=function(r){return Ys.filter(function(t){return t.vars.id===r})[0]};im()&&mn.registerPlugin(He);var Ct,js,ae,xe,oi,ge,hf,nc,wa,_a,fa,Vl,Tn,sc,nf,Vn,am,lm,to,wm,$u,Tm,kn,rf,Em,Am,Ir,sf,uf,eo,ff,xa,of,Ku,Gl=1,En=Date.now,Qu=En(),vi=0,da=0,cm=function(t,e,n){var i=si(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},hm=function(t,e){return e&&(!si(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Hx=function r(){return da&&requestAnimationFrame(r)},um=function(){return sc=1},fm=function(){return sc=0},ki=function(t){return t},pa=function(t){return Math.round(t*1e5)/1e5||0},Cm=function(){return typeof window<"u"},Rm=function(){return Ct||Cm()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},ps=function(t){return!!~hf.indexOf(t)},Pm=function(t){return(t==="Height"?ff:ae["inner"+t])||oi["client"+t]||ge["client"+t]},Im=function(t){return or(t,"getBoundingClientRect")||(ps(t)?function(){return ec.width=ae.innerWidth,ec.height=ff,ec}:function(){return ar(t)})},Wx=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=or(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Pm(s):t["client"+s])||0}},Xx=function(t,e){return!e||~Ti.indexOf(t)?Im(t):function(){return ec}},Vi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=or(t,n))?o()-Im(t)()[s]:ps(t)?(oi[n]||ge[n])-Pm(i):t[n]-t["offset"+i])},Hl=function(t,e){for(var n=0;n<to.length;n+=3)(!e||~e.indexOf(to[n+1]))&&t(to[n],to[n+1],to[n+2])},si=function(t){return typeof t=="string"},An=function(t){return typeof t=="function"},ma=function(t){return typeof t=="number"},cs=function(t){return typeof t=="object"},ua=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},$s=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ks=Math.abs,Lm="left",Dm="top",df="right",pf="bottom",us="width",fs="height",va="Right",ya="Left",Sa="Top",Ma="Bottom",Ke="padding",_i="margin",io="Width",mf="Height",nn="px",xi=function(t){return ae.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},qx=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},dm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ar=function(t,e){var n=e&&xi(t)[nf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ic=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Nm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Yx=function(t){return function(e){return Ct.utils.snap(Nm(t),e)}},gf=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Zx=function(t){return function(e,n){return gf(Nm(t))(e,n.direction)}},Wl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},hn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Xl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},pm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ql={toggleActions:"play",anticipatePin:0},rc={top:0,left:0,center:.5,bottom:1,right:1},Kl=function(t,e){if(si(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in rc?rc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Yl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=xe.createElement("div"),_=ps(n)||or(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?ge:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,A=S?c:h,v="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===$e?df:pf)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ql(g,0,i,S),g},Ql=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+io]=1,s["border"+a+io]=0,s[n.p]=e+"px",Ct.set(t,s)},se=[],af={},Ta,mm=function(){return En()-vi>34&&(Ta||(Ta=requestAnimationFrame(lr)))},Qs=function(){(!kn||!kn.isPressed||kn.startX>ge.clientWidth)&&(re.cache++,kn?Ta||(Ta=requestAnimationFrame(lr)):lr(),vi||gs("scrollStart"),vi=En())},ju=function(){Am=ae.innerWidth,Em=ae.innerHeight},ga=function(t){re.cache++,(t===!0||!Tn&&!Tm&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!rf||Am!==ae.innerWidth||Math.abs(ae.innerHeight-Em)>ae.innerHeight*.25))&&nc.restart(!0)},ms={},Jx=[],Um=function r(){return cn(te,"scrollEnd",r)||hs(!0)},gs=function(t){return ms[t]&&ms[t].map(function(e){return e()})||Jx},ri=[],Om=function(t){for(var e=0;e<ri.length;e+=5)(!t||ri[e+4]&&ri[e+4].query===t)&&(ri[e].style.cssText=ri[e+1],ri[e].getBBox&&ri[e].setAttribute("transform",ri[e+2]||""),ri[e+3].uncache=1)},Fm=function(){return re.forEach(function(t){return An(t)&&++t.cacheID&&(t.rec=t())})},_f=function(t,e){var n;for(Vn=0;Vn<se.length;Vn++)n=se[Vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));xa=!0,e&&Om(e),e||gs("revert")},Bm=function(t,e){re.cache++,(e||!Gn)&&re.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),si(t)&&(ae.history.scrollRestoration=uf=t)},Gn,ds=0,gm,$x=function(){if(gm!==ds){var t=gm=ds;requestAnimationFrame(function(){return t===ds&&hs(!0)})}},zm=function(){ge.appendChild(eo),ff=!kn&&eo.offsetHeight||ae.innerHeight,ge.removeChild(eo)},_m=function(t){return wa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},hs=function(t,e){if(oi=xe.documentElement,ge=xe.body,hf=[ae,xe,oi,ge],vi&&!t&&!xa){hn(te,"scrollEnd",Um);return}zm(),Gn=te.isRefreshing=!0,xa||Fm();var n=gs("refreshInit");wm&&te.sort(),e||_f(),re.forEach(function(i){An(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),se.slice(0).forEach(function(i){return i.refresh()}),xa=!1,se.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),of=1,_m(!0),se.forEach(function(i){var s=Vi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),_m(!1),of=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){An(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bm(uf,1),nc.pause(),ds++,Gn=2,lr(2),se.forEach(function(i){return An(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=te.isRefreshing=!1,gs("refresh")},lf=0,jl=1,ba,lr=function(t){if(t===2||!Gn&&!xa){te.isUpdating=!0,ba&&ba.update(0);var e=se.length,n=En(),i=n-Qu>=50,s=e&&se[0].scroll();if(jl=lf>s?-1:1,Gn||(lf=s),i&&(vi&&!sc&&n-vi>200&&(vi=0,gs("scrollEnd")),fa=Qu,Qu=n),jl<0){for(Vn=e;Vn-- >0;)se[Vn]&&se[Vn].update(0,i);jl=1}else for(Vn=0;Vn<e;Vn++)se[Vn]&&se[Vn].update(0,i);te.isUpdating=!1}Ta=0},cf=[Lm,Dm,pf,df,_i+Ma,_i+va,_i+Sa,_i+ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tc=cf.concat([us,fs,"boxSizing","max"+io,"max"+mf,"position",_i,Ke,Ke+Sa,Ke+va,Ke+Ma,Ke+ya]),Kx=function(t,e,n){no(n);var i=t._gsap;if(i.spacerIsNative)no(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},tf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=cf.length,o=e.style,a=t.style,l;s--;)l=cf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[pf]=a[df]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[us]=ic(t,wn)+nn,o[fs]=ic(t,$e)+nn,o[Ke]=a[_i]=a[Dm]=a[Lm]="0",no(i),a[us]=a["max"+io]=n[us],a[fs]=a["max"+mf]=n[fs],a[Ke]=n[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Qx=/([A-Z])/g,no=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Qx,"-$1").toLowerCase())}},Zl=function(t){for(var e=tc.length,n=t.style,i=[],s=0;s<e;s++)i.push(tc[s],n[tc[s]]);return i.t=t,i},jx=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},ec={left:0,top:0},xm=function(t,e,n,i,s,o,a,l,c,h,d,u,f,g){An(t)&&(t=t(l)),si(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Kl("0"+t.substr(3),n):0));var _=f?f.time():0,m,p,S;if(f&&f.seek(0),isNaN(t)||(t=+t),ma(t))f&&(t=Ct.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Ql(a,n,i,!0);else{An(e)&&(e=e(l));var A=(t||"0").split(" "),v,M,b,E;S=zn(e,l)||ge,v=ar(S)||{},(!v||!v.left&&!v.top)&&xi(S).display==="none"&&(E=S.style.display,S.style.display="block",v=ar(S),E?S.style.display=E:S.style.removeProperty("display")),M=Kl(A[0],v[i.d]),b=Kl(A[1]||"0",n),t=v[i.p]-c[i.p]-h+M+s-b,a&&Ql(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var x=t+n,w=o._isStart;m="scroll"+i.d2,Ql(o,x,i,w&&x>20||!w&&(d?Math.max(ge[m],oi[m]):o.parentNode[m])<=x+1),d&&(c=ar(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return f&&S&&(m=ar(S),f.seek(u),p=ar(S),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},tv=/(webkit|moz|length|cssText|inset)/i,vm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ge){t._stOrig=s.cssText,a=xi(t);for(o in a)!+o&&!tv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},km=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Jl=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},ym=function(t,e){var n=sr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,g={};c=c||n();var _=km(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){re.cache++,o.tween&&lr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ct.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(t,"wheel",n.wheelHandler),te.isTouch&&hn(t,"touchmove",n.wheelHandler),s},te=(function(){function r(e,n){js||r.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),sf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!da){this.update=this.refresh=this.kill=ki;return}n=dm(si(n)||ma(n)||n.nodeType?{trigger:n}:n,ql);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,A=s.once,v=s.snap,M=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,w=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:$e,D=!d&&d!==0,I=zn(n.scroller||ae),B=Ct.core.getCache(I),L=ps(I),F=("pinType"in n?n.pinType:or(I,"pinType")||L&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:ql.markers,Y=L?0:parseFloat(xi(I)["border"+C.p2+io])||0,R=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(R)},yt=Wx(I,L,C),bt=Xx(I,L),Vt=0,Bt=0,Ht=0,J=sr(I,C),j,ut,Ft,ft,dt,wt,At,Gt,Qt,V,ee,qt,ye,Wt,ue,O,Se,Yt,P,y,k,X,$,ct,ot,tt,nt,mt,Rt,gt,pt,lt,Nt,kt,N,ht,et,_t,vt;if(R._startClamp=R._endClamp=!1,R._dir=C,m*=45,R.scroller=I,R.scroll=E?E.time.bind(E):J,ft=J(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(wm=1,n.refreshPriority===-9999&&(ba=R)),B.tweenScroll=B.tweenScroll||{top:ym(I,$e),left:ym(I,wn)},R.tweenTo=j=B.tweenScroll[C.p],R.scrubDuration=function(st){Nt=ma(st)&&st,Nt?lt?lt.duration(st):lt=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Nt,paused:!0,onComplete:function(){return p&&p(R)}}):(lt&&lt.progress(1).kill(),lt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),gt=0,l||(l=i.vars.id)),v&&((!cs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ge.style&&Ct.set(L?[ge,oi]:I,{scrollBehavior:"auto"}),re.forEach(function(st){return An(st)&&st.target===(L?xe.scrollingElement||oi:I)&&(st.smooth=!1)}),Ft=An(v.snapTo)?v.snapTo:v.snapTo==="labels"?Yx(i):v.snapTo==="labelsDirectional"?Zx(i):v.directional!==!1?function(st,zt){return gf(v.snapTo)(st,En()-Bt<500?0:zt.direction)}:Ct.utils.snap(v.snapTo),kt=v.duration||{min:.1,max:2},kt=cs(kt)?_a(kt.min,kt.max):_a(kt,kt),N=Ct.delayedCall(v.delay||Nt/2||.1,function(){var st=J(),zt=En()-Bt<500,Pt=j.tween;if((zt||Math.abs(R.getVelocity())<10)&&!Pt&&!sc&&Vt!==st){var $t=(st-wt)/Wt,Ye=i&&!D?i.totalProgress():$t,oe=zt?0:(Ye-pt)/(En()-fa)*1e3||0,Pe=Ct.utils.clamp(-$t,1-$t,Ks(oe/2)*oe/.185),on=$t+(v.inertia===!1?0:Pe),Ie,Me,fe=v,Ln=fe.onStart,Ae=fe.onInterrupt,vn=fe.onComplete;if(Ie=Ft(on,R),ma(Ie)||(Ie=on),Me=Math.max(0,Math.round(wt+Ie*Wt)),st<=At&&st>=wt&&Me!==st){if(Pt&&!Pt._initted&&Pt.data<=Ks(Me-st))return;v.inertia===!1&&(Pe=Ie-$t),j(Me,{duration:kt(Ks(Math.max(Ks(on-Ye),Ks(Ie-Ye))*.185/oe/.05||0)),ease:v.ease||"power3",data:Ks(Me-st),onInterrupt:function(){return N.restart(!0)&&Ae&&$s(R,Ae)},onComplete:function(){R.update(),Vt=J(),i&&!D&&(lt?lt.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),gt=pt=i&&!D?i.totalProgress():R.progress,S&&S(R),vn&&$s(R,vn)}},st,Pe*Wt,Me-st-Pe*Wt),Ln&&$s(R,Ln,j.tween)}}else R.isActive&&Vt!==st&&N.restart(!0)}).pause()),l&&(af[l]=R),u=R.trigger=zn(u||f!==!0&&f),vt=u&&u._gsap&&u._gsap.stRevert,vt&&(vt=vt(R)),f=f===!0?u:zn(f),si(a)&&(a={targets:u,className:a}),f&&(g===!1||g===_i||(g=!g&&f.parentNode&&f.parentNode.style&&xi(f.parentNode).display==="flex"?!1:Ke),R.pin=f,ut=Ct.core.getCache(f),ut.spacer?ue=ut.pinState:(b&&(b=zn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),ut.spacerIsNative=!!b,b&&(ut.spacerState=Zl(b))),ut.spacer=Yt=b||xe.createElement("div"),Yt.classList.add("pin-spacer"),l&&Yt.classList.add("pin-spacer-"+l),ut.pinState=ue=Zl(f)),n.force3D!==!1&&Ct.set(f,{force3D:!0}),R.spacer=Yt=ut.spacer,Rt=xi(f),ct=Rt[g+C.os2],y=Ct.getProperty(f),k=Ct.quickSetter(f,C.a,nn),tf(f,Yt,Rt),Se=Zl(f)),K){qt=cs(K)?dm(K,pm):pm,V=Yl("scroller-start",l,I,C,qt,0),ee=Yl("scroller-end",l,I,C,qt,0,V),P=V["offset"+C.op.d2];var it=zn(or(I,"content")||I);Gt=this.markerStart=Yl("start",l,it,C,qt,P,0,E),Qt=this.markerEnd=Yl("end",l,it,C,qt,P,0,E),E&&(_t=Ct.quickSetter([Gt,Qt],C.a,nn)),!F&&!(Ti.length&&or(I,"fixedMarkers")===!0)&&(qx(L?ge:I),Ct.set([V,ee],{force3D:!0}),tt=Ct.quickSetter(V,C.a,nn),mt=Ct.quickSetter(ee,C.a,nn))}if(E){var at=E.vars.onUpdate,rt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(E,rt||[])})}if(R.previous=function(){return se[se.indexOf(R)-1]},R.next=function(){return se[se.indexOf(R)+1]},R.revert=function(st,zt){if(!zt)return R.kill(!0);var Pt=st!==!1||!R.enabled,$t=Tn;Pt!==R.isReverted&&(Pt&&(ht=Math.max(J(),R.scroll.rec||0),Ht=R.progress,et=i&&i.progress()),Gt&&[Gt,Qt,V,ee].forEach(function(Ye){return Ye.style.display=Pt?"none":"block"}),Pt&&(Tn=R,R.update(Pt)),f&&(!M||!R.isActive)&&(Pt?Kx(f,Yt,ue):tf(f,Yt,xi(f),ot)),Pt||R.update(Pt),Tn=$t,R.isReverted=Pt)},R.refresh=function(st,zt,Pt,$t){if(!((Tn||!R.enabled)&&!zt)){if(f&&st&&vi){hn(r,"scrollEnd",Um);return}!Gn&&Q&&Q(R),Tn=R,j.tween&&!Pt&&(j.tween.kill(),j.tween=0),lt&&lt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xt){return xt.vars.immediateRender&&xt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ye=yt(),oe=bt(),Pe=E?E.duration():Vi(I,C),on=Wt<=.01||!Wt,Ie=0,Me=$t||0,fe=cs(Pt)?Pt.end:n.end,Ln=n.endTrigger||u,Ae=cs(Pt)?Pt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),vn=R.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,R),Dn=u&&Math.max(0,se.indexOf(R))||0,Ze=Dn,ke,tn,Ni,Ds,an,We,fi,Ns,T,U,Z,W,q;for(K&&cs(Pt)&&(W=Ct.getProperty(V,C.p),q=Ct.getProperty(ee,C.p));Ze-- >0;)We=se[Ze],We.end||We.refresh(0,1)||(Tn=R),fi=We.pin,fi&&(fi===u||fi===f||fi===vn)&&!We.isReverted&&(U||(U=[]),U.unshift(We),We.revert(!0,!0)),We!==se[Ze]&&(Dn--,Ze--);for(An(Ae)&&(Ae=Ae(R)),Ae=cm(Ae,"start",R),wt=xm(Ae,u,Ye,C,J(),Gt,V,R,oe,Y,F,Pe,E,R._startClamp&&"_startClamp")||(f?-.001:0),An(fe)&&(fe=fe(R)),si(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(si(Ae)?Ae.split(" ")[0]:"")+fe:(Ie=Kl(fe.substr(2),Ye),fe=si(Ae)?Ae:(E?Ct.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,wt):wt)+Ie,Ln=u)),fe=cm(fe,"end",R),At=Math.max(wt,xm(fe||(Ln?"100% 0":Pe),Ln,Ye,C,J()+Ie,Qt,ee,R,oe,Y,F,Pe,E,R._endClamp&&"_endClamp"))||-.001,Ie=0,Ze=Dn;Ze--;)We=se[Ze]||{},fi=We.pin,fi&&We.start-We._pinPush<=wt&&!E&&We.end>0&&(ke=We.end-(R._startClamp?Math.max(0,We.start):We.start),(fi===u&&We.start-We._pinPush<wt||fi===vn)&&isNaN(Ae)&&(Ie+=ke*(1-We.progress)),fi===f&&(Me+=ke));if(wt+=Ie,At+=Ie,R._startClamp&&(R._startClamp+=Ie),R._endClamp&&!Gn&&(R._endClamp=At||-.001,At=Math.min(At,Vi(I,C))),Wt=At-wt||(wt-=.01)&&.001,on&&(Ht=Ct.utils.clamp(0,1,Ct.utils.normalize(wt,At,ht))),R._pinPush=Me,Gt&&Ie&&(ke={},ke[C.a]="+="+Ie,vn&&(ke[C.p]="-="+J()),Ct.set([Gt,Qt],ke)),f&&!(of&&R.end>=Vi(I,C)))ke=xi(f),Ds=C===$e,Ni=J(),X=parseFloat(y(C.a))+Me,!Pe&&At>1&&(Z=(L?xe.scrollingElement||oi:I).style,Z={style:Z,value:Z["overflow"+C.a.toUpperCase()]},L&&xi(ge)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+C.a.toUpperCase()]="scroll")),tf(f,Yt,ke),Se=Zl(f),tn=ar(f,!0),Ns=F&&sr(I,Ds?wn:$e)(),g?(ot=[g+C.os2,Wt+Me+nn],ot.t=Yt,Ze=g===Ke?ic(f,C)+Wt+Me:0,Ze&&(ot.push(C.d,Ze+nn),Yt.style.flexBasis!=="auto"&&(Yt.style.flexBasis=Ze+nn)),no(ot),vn&&se.forEach(function(xt){xt.pin===vn&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),F&&J(ht)):(Ze=ic(f,C),Ze&&Yt.style.flexBasis!=="auto"&&(Yt.style.flexBasis=Ze+nn)),F&&(an={top:tn.top+(Ds?Ni-wt:Ns)+nn,left:tn.left+(Ds?Ns:Ni-wt)+nn,boxSizing:"border-box",position:"fixed"},an[us]=an["max"+io]=Math.ceil(tn.width)+nn,an[fs]=an["max"+mf]=Math.ceil(tn.height)+nn,an[_i]=an[_i+Sa]=an[_i+va]=an[_i+Ma]=an[_i+ya]="0",an[Ke]=ke[Ke],an[Ke+Sa]=ke[Ke+Sa],an[Ke+va]=ke[Ke+va],an[Ke+Ma]=ke[Ke+Ma],an[Ke+ya]=ke[Ke+ya],O=jx(ue,an,M),Gn&&J(0)),i?(T=i._initted,$u(1),i.render(i.duration(),!0,!0),$=y(C.a)-X+Wt+Me,nt=Math.abs(Wt-$)>1,F&&nt&&O.splice(O.length-2,2),i.render(0,!0,!0),T||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),$u(0)):$=Wt,Z&&(Z.value?Z.style["overflow"+C.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+C.a));else if(u&&J()&&!E)for(tn=u.parentNode;tn&&tn!==ge;)tn._pinOffset&&(wt-=tn._pinOffset,At-=tn._pinOffset),tn=tn.parentNode;U&&U.forEach(function(xt){return xt.revert(!1,!0)}),R.start=wt,R.end=At,ft=dt=Gn?ht:J(),!E&&!Gn&&(ft<ht&&J(ht),R.scroll.rec=0),R.revert(!1,!0),Bt=En(),N&&(Vt=-1,N.restart(!0)),Tn=0,i&&D&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(on||Ht!==R.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||Ht||i.vars.immediateRender!==!1)&&i.totalProgress(E&&wt<-.001&&!Ht?Ct.utils.normalize(wt,At,0):Ht,!0),R.progress=on||(ft-wt)/Wt===Ht?0:Ht),f&&g&&(Yt._pinOffset=Math.round(R.progress*$)),lt&&lt.invalidate(),isNaN(W)||(W-=Ct.getProperty(V,C.p),q-=Ct.getProperty(ee,C.p),Jl(V,C,W),Jl(Gt,C,W-($t||0)),Jl(ee,C,q),Jl(Qt,C,q-($t||0))),on&&!Gn&&R.update(),h&&!Gn&&!ye&&(ye=!0,h(R),ye=!1)}},R.getVelocity=function(){return(J()-dt)/(En()-fa)*1e3||0},R.endAnimation=function(){ua(R.callbackAnimation),i&&(lt?lt.progress(1):i.paused()?D||ua(i,R.direction<0,1):ua(i,i.reversed()))},R.labelToScroll=function(st){return i&&i.labels&&(wt||R.refresh()||wt)+i.labels[st]/i.duration()*Wt||0},R.getTrailing=function(st){var zt=se.indexOf(R),Pt=R.direction>0?se.slice(0,zt).reverse():se.slice(zt+1);return(si(st)?Pt.filter(function($t){return $t.vars.preventOverlaps===st}):Pt).filter(function($t){return R.direction>0?$t.end<=wt:$t.start>=At})},R.update=function(st,zt,Pt){if(!(E&&!Pt&&!st)){var $t=Gn===!0?ht:R.scroll(),Ye=st?0:($t-wt)/Wt,oe=Ye<0?0:Ye>1?1:Ye||0,Pe=R.progress,on,Ie,Me,fe,Ln,Ae,vn,Dn;if(zt&&(dt=ft,ft=E?J():$t,v&&(pt=gt,gt=i&&!D?i.totalProgress():oe)),m&&f&&!Tn&&!Gl&&vi&&(!oe&&wt<$t+($t-dt)/(En()-fa)*m?oe=1e-4:oe===1&&At>$t+($t-dt)/(En()-fa)*m&&(oe=.9999)),oe!==Pe&&R.enabled){if(on=R.isActive=!!oe&&oe<1,Ie=!!Pe&&Pe<1,Ae=on!==Ie,Ln=Ae||!!oe!=!!Pe,R.direction=oe>Pe?1:-1,R.progress=oe,Ln&&!Tn&&(Me=oe&&!Pe?0:oe===1?1:Pe===1?2:3,D&&(fe=!Ae&&z[Me+1]!=="none"&&z[Me+1]||z[Me],Dn=i&&(fe==="complete"||fe==="reset"||fe in i))),w&&(Ae||Dn)&&(Dn||d||!i)&&(An(w)?w(R):R.getTrailing(w).forEach(function(Ni){return Ni.endAnimation()})),D||(lt&&!Tn&&!Gl?(lt._dp._time-lt._start!==lt._time&&lt.render(lt._dp._time-lt._start),lt.resetTo?lt.resetTo("totalProgress",oe,i._tTime/i._tDur):(lt.vars.totalProgress=oe,lt.invalidate().restart())):i&&i.totalProgress(oe,!!(Tn&&(Bt||st)))),f){if(st&&g&&(Yt.style[g+C.os2]=ct),!F)k(pa(X+$*oe));else if(Ln){if(vn=!st&&oe>Pe&&At+1>$t&&$t+1>=Vi(I,C),M)if(!st&&(on||vn)){var Ze=ar(f,!0),ke=$t-wt;vm(f,ge,Ze.top+(C===$e?ke:0)+nn,Ze.left+(C===$e?0:ke)+nn)}else vm(f,Yt);no(on||vn?O:Se),nt&&oe<1&&on||k(X+(oe===1&&!vn?$:0))}}v&&!j.tween&&!Tn&&!Gl&&N.restart(!0),a&&(Ae||A&&oe&&(oe<1||!Ku))&&wa(a.targets).forEach(function(Ni){return Ni.classList[on||A?"add":"remove"](a.className)}),o&&!D&&!st&&o(R),Ln&&!Tn?(D&&(Dn&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),o&&o(R)),(Ae||!Ku)&&(c&&Ae&&$s(R,c),G[Me]&&$s(R,G[Me]),A&&(oe===1?R.kill(!1,1):G[Me]=0),Ae||(Me=oe===1?1:3,G[Me]&&$s(R,G[Me]))),x&&!on&&Math.abs(R.getVelocity())>(ma(x)?x:2500)&&(ua(R.callbackAnimation),lt?lt.progress(1):ua(i,fe==="reverse"?1:!oe,1))):D&&o&&!Tn&&o(R)}if(mt){var tn=E?$t/E.duration()*(E._caScrollDist||0):$t;tt(tn+(V._isFlipped?1:0)),mt(tn)}_t&&_t(-$t/E.duration()*(E._caScrollDist||0))}},R.enable=function(st,zt){R.enabled||(R.enabled=!0,hn(I,"resize",ga),L||hn(I,"scroll",Qs),Q&&hn(r,"refreshInit",Q),st!==!1&&(R.progress=Ht=0,ft=dt=Vt=J()),zt!==!1&&R.refresh())},R.getTween=function(st){return st&&j?j.tween:lt},R.setPositions=function(st,zt,Pt,$t){if(E){var Ye=E.scrollTrigger,oe=E.duration(),Pe=Ye.end-Ye.start;st=Ye.start+Pe*st/oe,zt=Ye.start+Pe*zt/oe}R.refresh(!1,!1,{start:hm(st,Pt&&!!R._startClamp),end:hm(zt,Pt&&!!R._endClamp)},$t),R.update()},R.adjustPinSpacing=function(st){if(ot&&st){var zt=ot.indexOf(C.d)+1;ot[zt]=parseFloat(ot[zt])+st+nn,ot[1]=parseFloat(ot[1])+st+nn,no(ot)}},R.disable=function(st,zt){if(st!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,zt||lt&&lt.pause(),ht=0,ut&&(ut.uncache=1),Q&&cn(r,"refreshInit",Q),N&&(N.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!L)){for(var Pt=se.length;Pt--;)if(se[Pt].scroller===I&&se[Pt]!==R)return;cn(I,"resize",ga),L||cn(I,"scroll",Qs)}},R.kill=function(st,zt){R.disable(st,zt),lt&&!zt&&lt.kill(),l&&delete af[l];var Pt=se.indexOf(R);Pt>=0&&se.splice(Pt,1),Pt===Vn&&jl>0&&Vn--,Pt=0,se.forEach(function($t){return $t.scroller===R.scroller&&(Pt=1)}),Pt||Gn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),zt||i.kill()),Gt&&[Gt,Qt,V,ee].forEach(function($t){return $t.parentNode&&$t.parentNode.removeChild($t)}),ba===R&&(ba=0),f&&(ut&&(ut.uncache=1),Pt=0,se.forEach(function($t){return $t.pin===f&&Pt++}),Pt||(ut.spacer=0)),n.onKill&&n.onKill(R)},se.push(R),R.enable(!1,!1),vt&&vt(R),i&&i.add&&!Wt){var Ot=R.update;R.update=function(){R.update=Ot,re.cache++,wt||At||R.refresh()},Ct.delayedCall(.01,R.update),Wt=.01,wt=At=0}else R.refresh();f&&$x()},r.register=function(n){return js||(Ct=n||Rm(),Cm()&&window.document&&r.enable(),js=da),js},r.defaults=function(n){if(n)for(var i in n)ql[i]=n[i];return ql},r.disable=function(n,i){da=0,se.forEach(function(o){return o[i?"kill":"disable"](n)}),cn(ae,"wheel",Qs),cn(xe,"scroll",Qs),clearInterval(Vl),cn(xe,"touchcancel",ki),cn(ge,"touchstart",ki),Wl(cn,xe,"pointerdown,touchstart,mousedown",um),Wl(cn,xe,"pointerup,touchend,mouseup",fm),nc.kill(),Hl(cn);for(var s=0;s<re.length;s+=3)Xl(cn,re[s],re[s+1]),Xl(cn,re[s],re[s+2])},r.enable=function(){if(ae=window,xe=document,oi=xe.documentElement,ge=xe.body,Ct){if(wa=Ct.utils.toArray,_a=Ct.utils.clamp,sf=Ct.core.context||ki,$u=Ct.core.suppressOverwrites||ki,uf=ae.history.scrollRestoration||"auto",lf=ae.pageYOffset||0,Ct.core.globals("ScrollTrigger",r),ge){da=1,eo=document.createElement("div"),eo.style.height="100vh",eo.style.position="absolute",zm(),Hx(),He.register(Ct),r.isTouch=He.isTouch,Ir=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),rf=He.isTouch===1,hn(ae,"wheel",Qs),hf=[ae,xe,oi,ge],Ct.matchMedia?(r.matchMedia=function(h){var d=Ct.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ct.addEventListener("matchMediaInit",function(){Fm(),_f()}),Ct.addEventListener("matchMediaRevert",function(){return Om()}),Ct.addEventListener("matchMedia",function(){hs(0,1),gs("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return ju(),ju})):console.warn("Requires GSAP 3.11.0 or later"),ju(),hn(xe,"scroll",Qs);var n=ge.hasAttribute("style"),i=ge.style,s=i.borderTopStyle,o=Ct.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ar(ge),$e.m=Math.round(a.top+$e.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ge.setAttribute("style",""),ge.removeAttribute("style")),Vl=setInterval(mm,250),Ct.delayedCall(.5,function(){return Gl=0}),hn(xe,"touchcancel",ki),hn(ge,"touchstart",ki),Wl(hn,xe,"pointerdown,touchstart,mousedown",um),Wl(hn,xe,"pointerup,touchend,mouseup",fm),nf=Ct.utils.checkPrefix("transform"),tc.push(nf),js=En(),nc=Ct.delayedCall(.2,hs).pause(),to=[xe,"visibilitychange",function(){var h=ae.innerWidth,d=ae.innerHeight;xe.hidden?(am=h,lm=d):(am!==h||lm!==d)&&ga()},xe,"DOMContentLoaded",hs,ae,"load",hs,ae,"resize",ga],Hl(hn),se.forEach(function(h){return h.enable(0,1)}),l=0;l<re.length;l+=3)Xl(cn,re[l],re[l+1]),Xl(cn,re[l],re[l+2])}else if(xe){var c=function h(){r.enable(),xe.removeEventListener("DOMContentLoaded",h)};xe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ku=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Vl)||(Vl=i)&&setInterval(mm,i),"ignoreMobileResize"in n&&(rf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Hl(cn)||Hl(hn,n.autoRefreshEvents||"none"),Tm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),o=re.indexOf(s),a=ps(s);~o&&re.splice(o,a?6:2),i&&(a?Ti.unshift(ae,i,ge,i,oi,i):Ti.unshift(s,i))},r.clearMatchMedia=function(n){se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(si(n)?zn(n):n).getBoundingClientRect(),a=o[s?us:fs]*i||0;return s?o.right-a>0&&o.left+a<ae.innerWidth:o.bottom-a>0&&o.top+a<ae.innerHeight},r.positionInViewport=function(n,i,s){si(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[s?us:fs],l=i==null?a/2:i in rc?rc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ae.innerWidth:(o.top+l)/ae.innerHeight},r.killAll=function(n){if(se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ms.killAll||[];ms={},i.forEach(function(s){return s()})}},r})();te.version="3.15.0";te.saveStyles=function(r){return r?wa(r).forEach(function(t){if(t&&t.style){var e=ri.indexOf(t);e>=0&&ri.splice(e,5),ri.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),sf())}}):ri};te.revert=function(r,t){return _f(!r,t)};te.create=function(r,t){return new te(r,t)};te.refresh=function(r){return r?ga(!0):(js||te.register())&&hs(!0)};te.update=function(r){return++re.cache&&lr(r===!0?2:0)};te.clearScrollMemory=Bm;te.maxScroll=function(r,t){return Vi(r,t?wn:$e)};te.getScrollFunc=function(r,t){return sr(zn(r),t?wn:$e)};te.getById=function(r){return af[r]};te.getAll=function(){return se.filter(function(r){return r.vars.id!=="ScrollSmoother"})};te.isScrolling=function(){return!!vi};te.snapDirectional=gf;te.addEventListener=function(r,t){var e=ms[r]||(ms[r]=[]);~e.indexOf(t)||e.push(t)};te.removeEventListener=function(r,t){var e=ms[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};te.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ct.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&An(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return An(s)&&(s=s(),hn(te,"refresh",function(){return s=t.batchMax()})),wa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(te.create(c))}),e};var Sm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},ef=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===oi&&r(ge,e)},$l={auto:1,scroll:1},ev=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ct.core.getCache(s),a=En(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($l[(l=xi(s)).overflowY]||$l[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ps(s)&&($l[(l=xi(s)).overflowY]||$l[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Vm=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&ev,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&hn(xe,He.eventTypes[0],bm,!1,!0)},onDisable:function(){return cn(xe,He.eventTypes[0],bm,!0)}})},nv=/(input|label|select|textarea)/i,Mm,bm=function(t){var e=nv.test(t.target.tagName);(e||Mm)&&(t._gsapAllow=!0,Mm=e)},iv=function(t){cs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=zn(t.target)||oi,h=Ct.core.globals().ScrollSmoother,d=h&&h.get(),u=Ir&&(t.content&&zn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=sr(c,$e),g=sr(c,wn),_=1,m=(He.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,p=0,S=An(i)?function(){return i(a)}:function(){return i||2.8},A,v,M=Vm(c,t.type,!0,s),b=function(){return v=!1},E=ki,x=ki,w=function(){l=Vi(c,$e),x=_a(Ir?1:0,l),n&&(E=_a(0,Vi(c,wn))),A=ds},C=function(){u._gsap.y=pa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(b);var K=pa(a.deltaY/2),Y=x(f.v-K);if(u&&Y!==f.v+f.offset){f.offset=Y-f.v;var R=pa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=re.cache,lr()}return!0}f.offset&&C(),v=!0},I,B,L,F,G=function(){w(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&Ct.set(u,{y:"+=0"}),t.ignoreCheck=function(z){return Ir&&z.type==="touchmove"&&D(z)||_>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},t.onPress=function(){v=!1;var z=_;_=pa((ae.visualViewport&&ae.visualViewport.scale||1)/m),I.pause(),z!==_&&ef(c,_>1.01?!0:n?!1:"x"),B=g(),L=f(),w(),A=ds},t.onRelease=t.onGestureStart=function(z,K){if(f.offset&&C(),!K)F.restart(!0);else{re.cache++;var Y=S(),R,Q;n&&(R=g(),Q=R+Y*.05*-z.velocityX/.227,Y*=Sm(g,R,Q,Vi(c,wn)),I.vars.scrollX=E(Q)),R=f(),Q=R+Y*.05*-z.velocityY/.227,Y*=Sm(f,R,Q,Vi(c,$e)),I.vars.scrollY=x(Q),I.invalidate().duration(Y).play(.01),(Ir&&I.vars.scrollY>=l||R>=l-1)&&Ct.to({},{onUpdate:G,duration:Y})}o&&o(z)},t.onWheel=function(){I._ts&&I.pause(),En()-p>1e3&&(A=0,p=En())},t.onChange=function(z,K,Y,R,Q){if(ds!==A&&w(),K&&n&&g(E(R[2]===K?B+(z.startX-z.x):g()+K-R[1])),Y){f.offset&&C();var yt=Q[2]===Y,bt=yt?L+z.startY-z.y:f()+Y-Q[1],Vt=x(bt);yt&&bt!==Vt&&(L+=Vt-bt),f(Vt)}(Y||K)&&lr()},t.onEnable=function(){ef(c,n?!1:"x"),te.addEventListener("refresh",G),hn(ae,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),M.enable()},t.onDisable=function(){ef(c,!0),cn(ae,"resize",G),te.removeEventListener("refresh",G),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=Ir,Ir&&!f()&&f(1),Ir&&Ct.ticker.add(ki),F=a._dc,I=Ct.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:km(f,f(),function(){return I.pause()})},onUpdate:lr,onComplete:F.vars.onComplete}),a};te.sort=function(r){if(An(r))return se.sort(r);var t=ae.pageYOffset||0;return te.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ae.innerHeight}),se.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};te.observe=function(r){return new He(r)};te.normalizeScroll=function(r){if(typeof r>"u")return kn;if(r===!0&&kn)return kn.enable();if(r===!1){kn&&kn.kill(),kn=r;return}var t=r instanceof He?r:iv(r);return kn&&kn.target===t.target&&kn.kill(),ps(t.target)&&(kn=t),t};te.core={_getVelocityProp:kl,_inputObserver:Vm,_scrollers:re,_proxies:Ti,bridge:{ss:function(){vi||gs("scrollStart"),vi=En()},ref:function(){return Tn}}};Rm()&&Ct.registerPlugin(te);var Gm="1.3.26";function Xm(r,t,e){return Math.max(r,Math.min(t,e))}function rv(r,t,e){return(1-e)*r+e*t}function sv(r,t,e,n){return rv(r,t,1-Math.exp(-e*n))}function ov(r,t){return(r%t+t)%t}var av=class{constructor(){Dt(this,"isRunning",!1);Dt(this,"value",0);Dt(this,"from",0);Dt(this,"to",0);Dt(this,"currentTime",0);Dt(this,"lerp");Dt(this,"duration");Dt(this,"easing");Dt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Xm(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=sv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function lv(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var cv=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Dt(this,"width",0);Dt(this,"height",0);Dt(this,"scrollHeight",0);Dt(this,"scrollWidth",0);Dt(this,"debouncedResize");Dt(this,"wrapperResizeObserver");Dt(this,"contentResizeObserver");Dt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Dt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Dt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=lv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},qm=class{constructor(){Dt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},hv=100/6,Lr={passive:!1};function Hm(r,t){return r===1?hv:r===2?t:1}var uv=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Dt(this,"touchStart",{x:0,y:0});Dt(this,"lastDelta",{x:0,y:0});Dt(this,"window",{width:0,height:0});Dt(this,"emitter",new qm);Dt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Dt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Dt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Dt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Hm(n,this.window.width),s=Hm(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Dt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Lr),this.element.addEventListener("touchstart",this.onTouchStart,Lr),this.element.addEventListener("touchmove",this.onTouchMove,Lr),this.element.addEventListener("touchend",this.onTouchEnd,Lr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Lr),this.element.removeEventListener("touchstart",this.onTouchStart,Lr),this.element.removeEventListener("touchmove",this.onTouchMove,Lr),this.element.removeEventListener("touchend",this.onTouchEnd,Lr)}},Wm=r=>Math.min(1,1.001-2**(-10*r)),Ym=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:A=!1,anchors:v=!1,autoToggle:M=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:x=E,stopInertiaOnNavigate:w=!1,respectReducedMotion:C=!0}={}){Dt(this,"_isScrolling",!1);Dt(this,"_isStopped",!1);Dt(this,"_isLocked",!1);Dt(this,"_preventNextNativeScrollEvent",!1);Dt(this,"_resetVelocityTimeout",null);Dt(this,"_rafId",null);Dt(this,"_isDraggingSelection",!1);Dt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Dt(this,"isTouching");Dt(this,"isIos");Dt(this,"time",0);Dt(this,"userData",{});Dt(this,"lastVelocity",0);Dt(this,"velocity",0);Dt(this,"direction",0);Dt(this,"options");Dt(this,"targetScroll");Dt(this,"animatedScroll");Dt(this,"animate",new av);Dt(this,"emitter",new qm);Dt(this,"dimensions");Dt(this,"virtualScroll");Dt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Dt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Dt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Dt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Dt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Dt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Dt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Dt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Gm,window.lenis||(window.lenis={}),window.lenis.version=Gm,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Wm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:A,anchors:v,autoToggle:M,allowNestedScroll:b,naiveDimensions:x,stopInertiaOnNavigate:w,respectReducedMotion:C},this.dimensions=new cv(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new uv(e,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(g=u),g){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}let _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),A=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(A)?0:A)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=Xm(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Wm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,g;if(n-(i.time??0)>2e3){i.time=Date.now();let b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,a=d>f,l=u>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,p,S,A,v,M;if(_==="horizontal")m=Math.round(r.scrollLeft),p=d-f,S=t,A=s,v=a,M=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=u-g,S=e,A=o,v=l,M=h;else return!1;return!M&&(m>=p||m<=0)?!0:(S>0?m<p:m>0)&&A&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ov(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var xg=0,Yf=1,vg=2;var il=1,yg=2,Do=3,qr=0,xn=1,Si=2,$i=0,No=1,Zf=2,Jf=3,$f=4,Sg=5;var Es=100,Mg=101,bg=102,wg=103,Tg=104,Eg=200,Ag=201,Cg=202,Rg=203,Kf=204,Qf=205,Pg=206,Ig=207,Lg=208,Dg=209,Ng=210,Ug=211,Og=212,Fg=213,Bg=214,Cc=0,Rc=1,Pc=2,So=3,Ic=4,Lc=5,Dc=6,Nc=7,rh=0,zg=1,kg=2,Ii=0,jf=1,td=2,ed=3,nd=4,id=5,rd=6,rl=7;var sd=300,Yr=301,As=302,sh=303,oh=304,sl=306,Ms=1e3,Hi=1001,Uc=1002,fn=1003,Vg=1004;var ol=1005;var _n=1006,ah=1007;var Zr=1008;var Qn=1009,od=1010,ad=1011,Uo=1012,lh=1013,Li=1014,Mi=1015,Di=1016,ch=1017,hh=1018,Oo=1020,ld=35902,cd=35899,hd=1021,ud=1022,bi=1023,Xi=1026,Jr=1027,uh=1028,fh=1029,$r=1030,dh=1031;var ph=1033,al=33776,ll=33777,cl=33778,hl=33779,mh=35840,gh=35841,_h=35842,xh=35843,vh=36196,yh=37492,Sh=37496,Mh=37488,bh=37489,ul=37490,wh=37491,Th=37808,Eh=37809,Ah=37810,Ch=37811,Rh=37812,Ph=37813,Ih=37814,Lh=37815,Dh=37816,Nh=37817,Uh=37818,Oh=37819,Fh=37820,Bh=37821,zh=36492,kh=36494,Vh=36495,Gh=36283,Hh=36284,fl=36285,Wh=36286;var Na=2300,Oc=2301,Ec=2302,zf=2303,kf=2400,Vf=2401,Gf=2402;var Gg=3200;var dl=0,Hg=1,gr="",Pn="srgb",Ua="srgb-linear",Oa="linear",_e="srgb";var Ac=7680;var Wg=519,Xg=512,qg=513,Yg=514,Xh=515,Zg=516,Jg=517,qh=518,$g=519,Kg=35044;var fd="300 es",Pi=2e3,Mo=2001;function fv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qg(){let r=Fa("canvas");return r.style.display="block",r}var Zm={},bo=null;function dd(...r){let t="THREE."+r.shift();bo?bo("log",t,...r):console.log(t,...r)}function jg(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Xt(...r){r=jg(r);let t="THREE."+r.shift();if(bo)bo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Zt(...r){r=jg(r);let t="THREE."+r.shift();if(bo)bo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Ss(...r){let t=r.join(" ");t in Zm||(Zm[t]=!0,Xt(...r))}function t0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var e0={[Cc]:Rc,[Pc]:Dc,[Ic]:Nc,[So]:Lc,[Rc]:Cc,[Dc]:Pc,[Nc]:Ic,[Lc]:So},qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jm=1234567,La=Math.PI/180,wo=180/Math.PI;function Fo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function le(r,t,e){return Math.max(t,Math.min(e,r))}function pd(r,t){return(r%t+t)%t}function pv(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function mv(r,t,e){return r!==t?(e-r)/(t-r):0}function Da(r,t,e){return(1-e)*r+e*t}function gv(r,t,e,n){return Da(r,t,1-Math.exp(-e*n))}function _v(r,t=1){return t-Math.abs(pd(r,t*2)-t)}function xv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function vv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function yv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Sv(r,t){return r+Math.random()*(t-r)}function Mv(r){return r*(.5-Math.random())}function bv(r){r!==void 0&&(Jm=r);let t=Jm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wv(r){return r*La}function Tv(r){return r*wo}function Ev(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Av(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rv(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Bo={DEG2RAD:La,RAD2DEG:wo,generateUUID:Fo,clamp:le,euclideanModulo:pd,mapLinear:pv,inverseLerp:mv,lerp:Da,damp:gv,pingpong:_v,smoothstep:xv,smootherstep:vv,randInt:yv,randFloat:Sv,randFloatSpread:Mv,seededRandom:bv,degToRad:wv,radToDeg:Tv,isPowerOfTwo:Ev,ceilPowerOfTwo:Av,floorPowerOfTwo:Cv,setQuaternionFromProperEuler:Rv,normalize:Hn,denormalize:vo},vd=class vd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vd.prototype.isVector2=!0;var jt=vd,Yi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,a=Math.sin(a*S)/A,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yd=class yd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($m.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($m.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xf.copy(this).projectOnVector(t),this.sub(xf)}reflect(t){return this.sub(xf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yd.prototype.isVector3=!0;var H=yd,xf=new H,$m=new Yi,Sd=class Sd{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],A=i[4],v=i[7],M=i[2],b=i[5],E=i[8];return s[0]=o*_+a*S+l*M,s[3]=o*m+a*A+l*b,s[6]=o*p+a*v+l*E,s[1]=c*_+h*S+d*M,s[4]=c*m+h*A+d*b,s[7]=c*p+h*v+d*E,s[2]=u*_+f*S+g*M,s[5]=u*m+f*A+g*b,s[8]=u*p+f*v+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vf.makeScale(t,e)),this}rotate(t){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vf.makeRotation(-t)),this}translate(t,e){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sd.prototype.isMatrix3=!0;var Kt=Sd,vf=new Kt,Km=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qm=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pv(){let r={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=yo(i.r),i.g=yo(i.g),i.b=yo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gr?Oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ua]:{primaries:t,whitePoint:n,transfer:Oa,toXYZ:Km,fromXYZ:Qm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Km,fromXYZ:Qm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),r}var he=Pv();function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ro,Fc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ro===void 0&&(ro=Fa("canvas")),ro.width=t.width,ro.height=t.height;let i=ro.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ro}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=pr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pr(e[n]/255)*255):e[n]=pr(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Iv=0,To=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(yf(i[o].image)):s.push(yf(i[o]))}else s=yf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function yf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Lv=0,Sf=new H,Wn=class r extends qi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Hi,i=Hi,s=_n,o=Zr,a=bi,l=Qn,c=r.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Fo(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case Uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case Uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=sd;Wn.DEFAULT_ANISOTROPY=1;var Md=class Md{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(f+1)/2,M=(p+1)/2,b=(h+u)/4,E=(d+_)/4,x=(g+m)/4;return A>v&&A>M?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=b/n,s=E/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=x/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=x/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Md.prototype.isVector4=!0;var Oe=Md,Bc=class extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Wn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new To(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ba=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zc=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ih=class ih{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ih().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/so.setFromMatrixColumn(t,0).length(),s=1/so.setFromMatrixColumn(t,1).length(),o=1/so.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dv,t,Nv)}lookAt(t,e,n){let i=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Dr.crossVectors(n,ai),Dr.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Dr.crossVectors(n,ai)),Dr.normalize(),oc.crossVectors(ai,Dr),i[0]=Dr.x,i[4]=oc.x,i[8]=ai.x,i[1]=Dr.y,i[5]=oc.y,i[9]=ai.y,i[2]=Dr.z,i[6]=oc.z,i[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],A=n[7],v=n[11],M=n[15],b=i[0],E=i[4],x=i[8],w=i[12],C=i[1],D=i[5],I=i[9],B=i[13],L=i[2],F=i[6],G=i[10],z=i[14],K=i[3],Y=i[7],R=i[11],Q=i[15];return s[0]=o*b+a*C+l*L+c*K,s[4]=o*E+a*D+l*F+c*Y,s[8]=o*x+a*I+l*G+c*R,s[12]=o*w+a*B+l*z+c*Q,s[1]=h*b+d*C+u*L+f*K,s[5]=h*E+d*D+u*F+f*Y,s[9]=h*x+d*I+u*G+f*R,s[13]=h*w+d*B+u*z+f*Q,s[2]=g*b+_*C+m*L+p*K,s[6]=g*E+_*D+m*F+p*Y,s[10]=g*x+_*I+m*G+p*R,s[14]=g*w+_*B+m*z+p*Q,s[3]=S*b+A*C+v*L+M*K,s[7]=S*E+A*D+v*F+M*Y,s[11]=S*x+A*I+v*G+M*R,s[15]=S*w+A*B+v*z+M*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],S=l*f-c*u,A=a*f-c*d,v=a*u-l*d,M=o*f-c*h,b=o*u-l*h,E=o*d-a*h;return e*(_*S-m*A+p*v)-n*(g*S-m*M+p*b)+i*(g*A-_*M+p*E)-s*(g*v-_*b+m*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=e*a-n*o,A=e*l-i*o,v=e*c-s*o,M=n*l-i*a,b=n*c-s*a,E=i*c-s*l,x=h*_-d*g,w=h*m-u*g,C=h*p-f*g,D=d*m-u*_,I=d*p-f*_,B=u*p-f*m,L=S*B-A*I+v*D+M*C-b*w+E*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(a*B-l*I+c*D)*F,t[1]=(i*I-n*B-s*D)*F,t[2]=(_*E-m*b+p*M)*F,t[3]=(u*b-d*E-f*M)*F,t[4]=(l*C-o*B-c*w)*F,t[5]=(e*B-i*C+s*w)*F,t[6]=(m*v-g*E-p*A)*F,t[7]=(h*E-u*v+f*A)*F,t[8]=(o*I-a*C+c*x)*F,t[9]=(n*C-e*I-s*x)*F,t[10]=(g*b-_*v+p*S)*F,t[11]=(d*v-h*b-f*S)*F,t[12]=(a*w-o*D-l*x)*F,t[13]=(e*D-n*w+i*x)*F,t[14]=(_*A-g*M-m*S)*F,t[15]=(h*M-d*A+u*S)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,_=o*h,m=o*d,p=a*d,S=l*c,A=l*h,v=l*d,M=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+v)*M,i[2]=(g-A)*M,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(u+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(g+A)*E,i[9]=(m-S)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=so.set(i[0],i[1],i[2]).length(),a=so.set(i[4],i[5],i[6]).length(),l=so.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ei.copy(this);let c=1/o,h=1/a,d=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,e.setFromRotationMatrix(Ei),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Pi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Pi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Mo)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Pi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Mo)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ih.prototype.isMatrix4=!0;var Re=ih,so=new H,Ei=new Re,Dv=new H(0,0,0),Nv=new H(1,1,1),Dr=new H,oc=new H,ai=new H,jm=new Re,tg=new Yi,Zi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tg.setFromEuler(this),this.setFromQuaternion(tg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zi.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uv=0,eg=new H,oo=new Yi,cr=new Re,ac=new H,Ea=new H,Ov=new H,Fv=new Yi,ng=new H(1,0,0),ig=new H(0,1,0),rg=new H(0,0,1),sg={type:"added"},Bv={type:"removed"},ao={type:"childadded",child:null},Mf={type:"childremoved",child:null},je=class r extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new H,e=new Zi,n=new Yi,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Kt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(ng,t)}rotateY(t){return this.rotateOnAxis(ig,t)}rotateZ(t){return this.rotateOnAxis(rg,t)}translateOnAxis(t,e){return eg.copy(t).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ng,t)}translateY(t){return this.translateOnAxis(ig,t)}translateZ(t){return this.translateOnAxis(rg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ac.copy(t):ac.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Ea,ac,this.up):cr.lookAt(ac,Ea,this.up),this.quaternion.setFromRotationMatrix(cr),i&&(cr.extractRotation(i.matrixWorld),oo.setFromRotationMatrix(cr),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sg),ao.child=t,this.dispatchEvent(ao),ao.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bv),Mf.child=t,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cr.multiply(t.parent.matrixWorld)),t.applyMatrix4(cr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sg),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,Ov),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,Fv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};je.DEFAULT_UP=new H(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wi=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},zv={type:"move"},Eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},lc={h:0,s:0,l:0};function bf(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=pd(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=bf(o,s,t+1/3),this.g=bf(o,s,t),this.b=bf(o,s,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=Pn){function n(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){let n=n0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return he.workingToColorSpace(Rn.copy(this),t),Math.round(le(Rn.r*255,0,255))*65536+Math.round(le(Rn.g*255,0,255))*256+Math.round(le(Rn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,i=Rn.g,s=Rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=Pn){he.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,i=Rn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Nr),this.setHSL(Nr.h+t,Nr.s+e,Nr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nr),t.getHSL(lc);let n=Da(Nr.h,lc.h,e),i=Da(Nr.s,lc.s,e),s=Da(Nr.l,lc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Jt;Jt.NAMES=n0;var bs=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new H,hr=new H,wf=new H,ur=new H,lo=new H,co=new H,og=new H,Tf=new H,Ef=new H,Af=new H,Cf=new Oe,Rf=new Oe,Pf=new Oe,Br=class r{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ai.subVectors(t,e),i.cross(Ai);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ai.subVectors(i,e),hr.subVectors(n,e),wf.subVectors(t,e);let o=Ai.dot(Ai),a=Ai.dot(hr),l=Ai.dot(wf),c=hr.dot(hr),h=hr.dot(wf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ur.x),l.addScaledVector(o,ur.y),l.addScaledVector(a,ur.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Cf.setScalar(0),Rf.setScalar(0),Pf.setScalar(0),Cf.fromBufferAttribute(t,e),Rf.fromBufferAttribute(t,n),Pf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Cf,s.x),o.addScaledVector(Rf,s.y),o.addScaledVector(Pf,s.z),o}static isFrontFacing(t,e,n,i){return Ai.subVectors(n,e),hr.subVectors(t,e),Ai.cross(hr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Ai.cross(hr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;lo.subVectors(i,n),co.subVectors(s,n),Tf.subVectors(t,n);let l=lo.dot(Tf),c=co.dot(Tf);if(l<=0&&c<=0)return e.copy(n);Ef.subVectors(t,i);let h=lo.dot(Ef),d=co.dot(Ef);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(lo,o);Af.subVectors(t,s);let f=lo.dot(Af),g=co.dot(Af);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(co,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return og.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(og,a);let p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(lo,o).addScaledVector(co,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ji=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ci):Ci.fromBufferAttribute(s,o),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cc.copy(n.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Aa),hc.subVectors(this.max,Aa),ho.subVectors(t.a,Aa),uo.subVectors(t.b,Aa),fo.subVectors(t.c,Aa),Ur.subVectors(uo,ho),Or.subVectors(fo,uo),_s.subVectors(ho,fo);let e=[0,-Ur.z,Ur.y,0,-Or.z,Or.y,0,-_s.z,_s.y,Ur.z,0,-Ur.x,Or.z,0,-Or.x,_s.z,0,-_s.x,-Ur.y,Ur.x,0,-Or.y,Or.x,0,-_s.y,_s.x,0];return!If(e,ho,uo,fo,hc)||(e=[1,0,0,0,1,0,0,0,1],!If(e,ho,uo,fo,hc))?!1:(uc.crossVectors(Ur,Or),e=[uc.x,uc.y,uc.z],If(e,ho,uo,fo,hc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fr=[new H,new H,new H,new H,new H,new H,new H,new H],Ci=new H,cc=new Ji,ho=new H,uo=new H,fo=new H,Ur=new H,Or=new H,_s=new H,Aa=new H,hc=new H,uc=new H,xs=new H;function If(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xs.fromArray(r,s);let a=i.x*Math.abs(xs.x)+i.y*Math.abs(xs.y)+i.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qe=new H,fc=new jt,kv=0,ci=class extends qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kg,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fc.fromBufferAttribute(this,e),fc.applyMatrix3(t),this.setXY(e,fc.x,fc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array),i=Hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ka=class extends ci{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Va=class extends ci{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ue=class extends ci{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vv=new Ji,Ca=new H,Lf=new H,zr=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ca.subVectors(t,this.center);let e=Ca.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ca,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ca.copy(t.center).add(Lf)),this.expandByPoint(Ca.copy(t.center).sub(Lf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gv=0,yi=new Re,Df=new je,po=new H,li=new Ji,Ra=new Ji,un=new H,Kn=class r extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fv(t)?Va:ka)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return Df.lookAt(t),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];li.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ra.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(li.min,Ra.min),li.expandByPoint(un),un.addVectors(li.max,Ra.max),li.expandByPoint(un)):(li.expandByPoint(Ra.min),li.expandByPoint(Ra.max))}li.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)un.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(un));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(po.fromBufferAttribute(t,c),un.add(po)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ci(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new H,l[x]=new H;let c=new H,h=new H,d=new H,u=new jt,f=new jt,g=new jt,_=new H,m=new H;function p(x,w,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[x].add(_),a[w].add(_),a[C].add(_),l[x].add(m),l[w].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,w=S.length;x<w;++x){let C=S[x],D=C.start,I=C.count;for(let B=D,L=D+I;B<L;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let A=new H,v=new H,M=new H,b=new H;function E(x){M.fromBufferAttribute(i,x),b.copy(M);let w=a[x];A.copy(w),A.sub(M.multiplyScalar(M.dot(w))).normalize(),v.crossVectors(b,w);let D=v.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,w=S.length;x<w;++x){let C=S[x],D=C.start,I=C.count;for(let B=D,L=D+I;B<L;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ci(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new ci(u,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nf=new H,Hv=new H,Wv=new Kt,Ri=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Nf.subVectors(n,e).cross(Hv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Nf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wv.getNormalMatrix(t),i=this.coplanarPoint(Nf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xv=0,mr=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=No,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Qf,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ac,this.stencilZFail=Ac,this.stencilZPass=Ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var dr=new H,Uf=new H,dc=new H,pc=new H,kc=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=dr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dr.copy(this.origin).addScaledVector(this.direction,e),dr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Uf.copy(t).add(e).multiplyScalar(.5),dc.copy(e).sub(t).normalize(),pc.copy(this.origin).sub(Uf);let s=t.distanceTo(e)*.5,o=-this.direction.dot(dc),a=pc.dot(this.direction),l=-pc.dot(dc),c=pc.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Uf).addScaledVector(dc,u),f}intersectSphere(t,e){if(t.radius<0)return null;dr.subVectors(t.center,this.origin);let n=dr.dot(this.direction),i=dr.dot(dr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,_=e.y-o.y,m=e.z-o.z,p=n.x-o.x,S=n.y-o.y,A=n.z-o.z,v=Math.abs(l),M=Math.abs(c),b=Math.abs(h),E,x,w,C,D,I,B,L,F,G,z,K;if(v>=M&&v>=b?(w=l,I=d,F=g,K=p,l>=0?(E=c,x=h,C=u,D=f,B=_,L=m,G=S,z=A):(E=h,x=c,C=f,D=u,B=m,L=_,G=A,z=S)):M>=b?(w=c,I=u,F=_,K=S,c>=0?(E=h,x=l,C=f,D=d,B=m,L=g,G=A,z=p):(E=l,x=h,C=d,D=f,B=g,L=m,G=p,z=A)):(w=h,I=f,F=m,K=A,h>=0?(E=l,x=c,C=d,D=u,B=g,L=_,G=p,z=S):(E=c,x=l,C=u,D=d,B=_,L=g,G=S,z=p)),w===0)return null;let Y=E/w,R=x/w,Q=1/w,yt=C-Y*I,bt=D-R*I,Vt=B-Y*F,Bt=L-R*F,Ht=G-Y*K,J=z-R*K,j=Ht*Bt-J*Vt,ut=yt*J-bt*Ht,Ft=Vt*bt-Bt*yt;if(i){if(j<0||ut<0||Ft<0)return null}else if((j<0||ut<0||Ft<0)&&(j>0||ut>0||Ft>0))return null;let ft=j+ut+Ft;if(ft===0)return null;let dt=Q*(j*I+ut*F+Ft*K);return(ft>0?dt<0:dt>0)?null:this.at(dt/ft,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ga=class extends mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ag=new Re,vs=new kc,mc=new zr,lg=new H,gc=new H,_c=new H,xc=new H,Of=new H,vc=new H,cg=new H,yc=new H,Ee=class extends je{constructor(t=new Kn,e=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){vc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Of.fromBufferAttribute(d,t),o?vc.addScaledVector(Of,h):vc.addScaledVector(Of.sub(e),h))}e.add(vc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),vs.copy(t.ray).recast(t.near),!(mc.containsPoint(vs.origin)===!1&&(vs.intersectSphere(mc,lg)===null||vs.origin.distanceToSquared(lg)>(t.far-t.near)**2))&&(ag.copy(s).invert(),vs.copy(t.ray).applyMatrix4(ag),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,M=A;v<M;v+=3){let b=a.getX(v),E=a.getX(v+1),x=a.getX(v+2);i=Sc(this,p,t,n,c,h,d,b,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=a.getX(m),A=a.getX(m+1),v=a.getX(m+2);i=Sc(this,o,t,n,c,h,d,S,A,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,M=A;v<M;v+=3){let b=v,E=v+1,x=v+2;i=Sc(this,p,t,n,c,h,d,b,E,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,A=m+1,v=m+2;i=Sc(this,o,t,n,c,h,d,S,A,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function qv(r,t,e,n,i,s,o,a){let l;if(t.side===xn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===qr,a),l===null)return null;yc.copy(a),yc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(yc);return c<e.near||c>e.far?null:{distance:c,point:yc.clone(),object:r}}function Sc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,gc),r.getVertexPosition(l,_c),r.getVertexPosition(c,xc);let h=qv(r,t,e,n,gc,_c,xc,cg);if(h){let d=new H;Br.getBarycoord(cg,gc,_c,xc,d),i&&(h.uv=Br.getInterpolatedAttribute(i,a,l,c,d,new jt)),s&&(h.uv1=Br.getInterpolatedAttribute(s,a,l,c,d,new jt)),o&&(h.normal=Br.getInterpolatedAttribute(o,a,l,c,d,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new H,materialIndex:0};Br.getNormal(gc,_c,xc,u.normal),h.face=u,h.barycoord=d}return h}var Ha=class extends Wn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=fn,h=fn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wa=class extends ci{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mo=new Re,hg=new Re,Mc=[],ug=new Ji,Yv=new Re,Pa=new Ee,Ia=new zr,ws=class extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mo),ug.copy(t.boundingBox).applyMatrix4(mo),this.boundingBox.union(ug)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mo),Ia.copy(t.boundingSphere).applyMatrix4(mo),this.boundingSphere.union(Ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),t.ray.intersectsSphere(Ia)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,mo),hg.multiplyMatrices(n,mo),Pa.matrixWorld=hg,Pa.raycast(t,Mc);for(let o=0,a=Mc.length;o<a;o++){let l=Mc[o];l.instanceId=s,l.object=this,e.push(l)}Mc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ha(new Float32Array(i*this.count),i,this.count,uh,Mi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ys=new zr,Zv=new jt(.5,.5),bc=new H,Ao=class{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,s=new Ri,o=new Ri){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],S=s[12],A=s[13],v=s[14],M=s[15];if(i[0].setComponents(c-o,f-h,p-g,M-S).normalize(),i[1].setComponents(c+o,f+h,p+g,M+S).normalize(),i[2].setComponents(c+a,f+d,p+_,M+A).normalize(),i[3].setComponents(c-a,f-d,p-_,M-A).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,p-m,M-v).normalize();else if(i[4].setComponents(c-l,f-u,p-m,M-v).normalize(),e===Pi)i[5].setComponents(c+l,f+u,p+m,M+v).normalize();else if(e===Mo)i[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=Zv.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(bc.x=i.normal.x>0?t.max.x:t.min.x,bc.y=i.normal.y>0?t.max.y:t.min.y,bc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xa=class extends Wn{constructor(t=[],e=Yr,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Co=class extends Wn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kr=class extends Wn{constructor(t,e,n=Li,i,s,o,a=fn,l=fn,c,h=Xi,d=1){if(h!==Xi&&h!==Jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new To(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vc=class extends kr{constructor(t,e=Li,n=Yr,i,s,o=fn,a=fn,l,c=Xi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qa=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vr=class r extends Kn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(d,2));function g(_,m,p,S,A,v,M,b,E,x,w){let C=v/E,D=M/x,I=v/2,B=M/2,L=b/2,F=E+1,G=x+1,z=0,K=0,Y=new H;for(let R=0;R<G;R++){let Q=R*D-B;for(let yt=0;yt<F;yt++){let bt=yt*C-I;Y[_]=bt*S,Y[m]=Q*A,Y[p]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(yt/E),d.push(1-R/x),z+=1}}for(let R=0;R<x;R++)for(let Q=0;Q<E;Q++){let yt=u+Q+F*R,bt=u+Q+F*(R+1),Vt=u+(Q+1)+F*(R+1),Bt=u+(Q+1)+F*R;l.push(yt,bt,Bt),l.push(bt,Vt,Bt),K+=6}a.addGroup(f,K,w),f+=K,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ya=class r extends Kn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,_=[],m=n/2,p=0;S(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ue(d,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(f,2));function S(){let v=new H,M=new H,b=0,E=(e-t)/n;for(let x=0;x<=s;x++){let w=[],C=x/s,D=C*(e-t)+t;for(let I=0;I<=i;I++){let B=I/i,L=B*l+a,F=Math.sin(L),G=Math.cos(L);M.x=D*F,M.y=-C*n+m,M.z=D*G,d.push(M.x,M.y,M.z),v.set(F,E,G).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-C),w.push(g++)}_.push(w)}for(let x=0;x<i;x++)for(let w=0;w<s;w++){let C=_[w][x],D=_[w+1][x],I=_[w+1][x+1],B=_[w][x+1];(t>0||w!==0)&&(h.push(C,D,B),b+=3),(e>0||w!==s-1)&&(h.push(D,I,B),b+=3)}c.addGroup(p,b,0),p+=b}function A(v){let M=g,b=new jt,E=new H,x=0,w=v===!0?t:e,C=v===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let I=0;I<=i;I++){let L=I/i*l+a,F=Math.cos(L),G=Math.sin(L);E.x=w*G,E.y=m*C,E.z=w*F,d.push(E.x,E.y,E.z),u.push(0,C,0),b.x=F*.5+.5,b.y=G*.5*C+.5,f.push(b.x,b.y),g++}for(let I=0;I<i;I++){let B=M+I,L=D+I;v===!0?h.push(L,L+1,B):h.push(L+1,L,B),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Za=class r extends Kn{constructor(t=[new jt(0,-.5),new jt(.5,0),new jt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=le(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,d=new H,u=new jt,f=new H,g=new H,_=new H,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){let A=n+S*h*i,v=Math.sin(A),M=Math.cos(A);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*M,o.push(d.x,d.y,d.z),u.x=S/e,u.y=b/(t.length-1),a.push(u.x,u.y);let E=l[3*b+0]*v,x=l[3*b+1],w=l[3*b+0]*M;c.push(E,x,w)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){let v=A+S*t.length,M=v,b=v+t.length,E=v+t.length+1,x=v+1;s.push(M,b,x),s.push(E,x,b)}this.setIndex(s),this.setAttribute("position",new Ue(o,3)),this.setAttribute("uv",new Ue(a,2)),this.setAttribute("normal",new Ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Ja=class r extends Kn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*u-o;for(let A=0;A<c;A++){let v=A*d-s;g.push(v,-S,0),_.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let A=S+c*p,v=S+c*(p+1),M=S+1+c*(p+1),b=S+1+c*p;f.push(A,v,b),f.push(v,M,b)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ro=class r extends Kn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new H,u=new H,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],A=p/n,v=o+A*a,M=t*Math.cos(v),b=Math.sqrt(t*t-M*M),E=0;p===0&&o===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let x=0;x<=e;x++){let w=x/e,C=i+w*s;d.x=-b*Math.cos(C),d.y=M,d.z=b*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+E,1-A),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let A=h[p][S+1],v=h[p][S],M=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&f.push(A,v,b),(p!==n-1||l<Math.PI)&&f.push(v,M,b)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $a=class r extends Kn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new H,f=new H,g=new H;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let p=0;p<=i;p++){let S=p/i*s;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let p=(i+1)*_+m-1,S=(i+1)*(_-1)+m-1,A=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(p,S,v),l.push(S,A,v)}this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Cs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(fg(i))i.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(fg(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function In(r){let t={};for(let e=0;e<r.length;e++){let n=Cs(r[e]);for(let i in n)t[i]=n[i]}return t}function fg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Jv(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function md(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var i0={clone:Cs,merge:In},$v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Jv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(i.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Re().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gc=class extends hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ts=class extends mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gr=class extends Ts{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ka=class extends mr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=rh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Hc=class extends mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wc=class extends mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function go(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ff(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Hr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xc=class extends Hr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kf,endingEnd:kf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vf:s=t,a=2*e-n;break;case Gf:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vf:o=t,l=2*n-e;break;case Gf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let M=0;M!==a;++M)s[M]=p*o[h+M]+S*o[c+M]+A*o[l+M]+v*o[d+M];return s}},qc=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Yc=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Zc=class extends Hr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),_=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*g;return s}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let _=o[c+g],m=o[l+g],p=f*u+g*2,S=d[p],A=d[p+1],v=t*u+g*2,M=h[v],b=h[v+1],E=jv(n,e,S,M,i);s[g]=r0(E,_,A,b,m)}return s}};function r0(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Qv(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function jv(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=r0(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=Qv(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ff(t.settings)&&(n.settings={inTangents:go(t.settings.inTangents,Array),outTangents:go(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Na:e=this.InterpolantFactoryMethodDiscrete;break;case Oc:e=this.InterpolantFactoryMethodLinear;break;case Ec:e=this.InterpolantFactoryMethodSmooth;break;case zf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Oc;case this.InterpolantFactoryMethodSmooth:return Ec;case this.InterpolantFactoryMethodBezier:return zf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ff(this.settings)&&(dg(this.settings.inTangents,t),dg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ec,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ff(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function dg(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Oc;var Wr=class extends ui{constructor(t,e,n){super(t,e,n)}};Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=Na;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Jc.prototype.ValueTypeName="color";var $c=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};$c.prototype.ValueTypeName="number";var Kc=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Yi.slerpFlat(s,0,o,c-a,o,c,l);return s}},Qa=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}};Qa.prototype.ValueTypeName="quaternion";Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends ui{constructor(t,e,n){super(t,e,n)}};Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Na;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Qc.prototype.ValueTypeName="vector";var jc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},s0=new jc,th=class{constructor(t){this.manager=t!==void 0?t:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};th.DEFAULT_MATERIAL_NAME="__DEFAULT";var Po=class extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ja=class extends Po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Bf=new Re,pg=new H,mg=new H,tl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pg.setFromMatrixPosition(t.matrixWorld),e.position.copy(pg),mg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Bf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Bf,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===Mo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Bf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wc=new H,Tc=new Yi,Gi=new H,el=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wc,Tc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Tc,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wc,Tc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Tc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fr=new H,gg=new jt,_g=new jt,gn=class extends el{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fr.x,Fr.y).multiplyScalar(-t/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-t/Fr.z)}getViewSize(t,e){return this.getViewBounds(t,gg,_g),e.subVectors(_g,gg)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(La*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hf=class extends tl{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},nl=class extends Po{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Io=class extends el{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wf=class extends tl{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new Wf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var _o=-90,xo=1,eh=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new gn(_o,xo,t,e);i.layers=this.layers,this.add(i);let s=new gn(_o,xo,t,e);s.layers=this.layers,this.add(s);let o=new gn(_o,xo,t,e);o.layers=this.layers,this.add(o);let a=new gn(_o,xo,t,e);a.layers=this.layers,this.add(a);let l=new gn(_o,xo,t,e);l.layers=this.layers,this.add(l);let c=new gn(_o,xo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},nh=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gd="\\[\\]\\.:\\/",ty=new RegExp("["+gd+"]","g"),_d="[^"+gd+"]",ey="[^"+gd.replace("\\.","")+"]",ny=/((?:WC+[\/:])*)/.source.replace("WC",_d),iy=/(WCOD+)?/.source.replace("WCOD",ey),ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_d),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_d),oy=new RegExp("^"+ny+iy+ry+sy+"$"),ay=["material","materials","bones","map"],Xf=class{constructor(t,e,n){let i=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ty,"")}static parseTrackName(t){let e=oy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ay.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Xf;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iw=new Float32Array(1);var bd=class bd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};bd.prototype.isMatrix2=!0;var qf=bd;function xd(r,t,e,n){let i=ly(n);switch(e){case hd:return r*t;case uh:return r*t/i.components*i.byteLength;case fh:return r*t/i.components*i.byteLength;case $r:return r*t*2/i.components*i.byteLength;case dh:return r*t*2/i.components*i.byteLength;case ud:return r*t*3/i.components*i.byteLength;case bi:return r*t*4/i.components*i.byteLength;case ph:return r*t*4/i.components*i.byteLength;case al:case ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cl:case hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gh:case xh:return Math.max(r,16)*Math.max(t,8)/4;case mh:case _h:return Math.max(r,8)*Math.max(t,8)/2;case vh:case yh:case Mh:case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Sh:case ul:case wh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case zh:case kh:case Vh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Gh:case Hh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case fl:case Wh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ly(r){switch(r){case Qn:case od:return{byteLength:1,components:1};case Uo:case ad:case Di:return{byteLength:2,components:1};case ch:case hh:return{byteLength:2,components:4};case Li:case lh:case Mi:return{byteLength:4,components:1};case ld:case cd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function A0(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function hy(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fy=`#ifdef USE_ALPHAHASH
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
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
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
#endif`,xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vy=`#ifdef USE_BATCHING
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
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ty=`#ifdef USE_BUMPMAP
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ny=`#define PI 3.141592653589793
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
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oy=`vec3 transformedNormal = objectNormal;
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
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qy=`#ifdef USE_GRADIENTMAP
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
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lS=`PhysicalMaterial material;
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
#endif`,cS=`uniform sampler2D dfgLUT;
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
}`,hS=`
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
#endif`,uS=`#if defined( RE_IndirectDiffuse )
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
#endif`,fS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SS=`#if defined( USE_POINTS_UV )
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
#endif`,MS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ES=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AS=`#ifdef USE_MORPHTARGETS
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
#endif`,CS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NS=`#ifdef USE_NORMALMAP
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
#endif`,US=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$S=`float getShadowMask() {
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
}`,KS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,jS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,eM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sM=`#ifdef USE_TRANSMISSION
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
#endif`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fM=`uniform sampler2D t2D;
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`#include <common>
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
}`,xM=`#if DEPTH_PACKING == 3200
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
}`,vM=`#define DISTANCE
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
}`,yM=`#define DISTANCE
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,EM=`uniform vec3 diffuse;
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
}`,AM=`#define LAMBERT
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
}`,CM=`#define LAMBERT
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
}`,RM=`#define MATCAP
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
}`,PM=`#define MATCAP
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
}`,IM=`#define NORMAL
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
}`,LM=`#define NORMAL
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
}`,DM=`#define PHONG
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
}`,NM=`#define PHONG
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
}`,UM=`#define STANDARD
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
}`,OM=`#define STANDARD
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
}`,FM=`#define TOON
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
}`,BM=`#define TOON
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
}`,zM=`uniform float size;
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
}`,kM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,GM=`uniform vec3 color;
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
}`,HM=`uniform float rotation;
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
}`,WM=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:uy,alphahash_pars_fragment:fy,alphamap_fragment:dy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:_y,aomap_pars_fragment:xy,batching_pars_vertex:vy,batching_vertex:yy,begin_vertex:Sy,beginnormal_vertex:My,bsdfs:by,iridescence_fragment:wy,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ey,clipping_planes_pars_fragment:Ay,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ry,color_fragment:Py,color_pars_fragment:Iy,color_pars_vertex:Ly,color_vertex:Dy,common:Ny,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Oy,displacementmap_pars_vertex:Fy,displacementmap_vertex:By,emissivemap_fragment:zy,emissivemap_pars_fragment:ky,colorspace_fragment:Vy,colorspace_pars_fragment:Gy,envmap_fragment:Hy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:Xy,envmap_pars_vertex:qy,envmap_physical_pars_fragment:iS,envmap_vertex:Yy,fog_vertex:Zy,fog_pars_vertex:Jy,fog_fragment:$y,fog_pars_fragment:Ky,gradientmap_pars_fragment:Qy,lightmap_pars_fragment:jy,lights_lambert_fragment:tS,lights_lambert_pars_fragment:eS,lights_pars_begin:nS,lights_toon_fragment:rS,lights_toon_pars_fragment:sS,lights_phong_fragment:oS,lights_phong_pars_fragment:aS,lights_physical_fragment:lS,lights_physical_pars_fragment:cS,lights_fragment_begin:hS,lights_fragment_maps:uS,lights_fragment_end:fS,lightprobes_pars_fragment:dS,logdepthbuf_fragment:pS,logdepthbuf_pars_fragment:mS,logdepthbuf_pars_vertex:gS,logdepthbuf_vertex:_S,map_fragment:xS,map_pars_fragment:vS,map_particle_fragment:yS,map_particle_pars_fragment:SS,metalnessmap_fragment:MS,metalnessmap_pars_fragment:bS,morphinstance_vertex:wS,morphcolor_vertex:TS,morphnormal_vertex:ES,morphtarget_pars_vertex:AS,morphtarget_vertex:CS,normal_fragment_begin:RS,normal_fragment_maps:PS,normal_pars_fragment:IS,normal_pars_vertex:LS,normal_vertex:DS,normalmap_pars_fragment:NS,clearcoat_normal_fragment_begin:US,clearcoat_normal_fragment_maps:OS,clearcoat_pars_fragment:FS,iridescence_pars_fragment:BS,opaque_fragment:zS,packing:kS,premultiplied_alpha_fragment:VS,project_vertex:GS,dithering_fragment:HS,dithering_pars_fragment:WS,roughnessmap_fragment:XS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:YS,shadowmap_pars_vertex:ZS,shadowmap_vertex:JS,shadowmask_pars_fragment:$S,skinbase_vertex:KS,skinning_pars_vertex:QS,skinning_vertex:jS,skinnormal_vertex:tM,specularmap_fragment:eM,specularmap_pars_fragment:nM,tonemapping_fragment:iM,tonemapping_pars_fragment:rM,transmission_fragment:sM,transmission_pars_fragment:oM,uv_pars_fragment:aM,uv_pars_vertex:lM,uv_vertex:cM,worldpos_vertex:hM,background_vert:uM,background_frag:fM,backgroundCube_vert:dM,backgroundCube_frag:pM,cube_vert:mM,cube_frag:gM,depth_vert:_M,depth_frag:xM,distance_vert:vM,distance_frag:yM,equirect_vert:SM,equirect_frag:MM,linedashed_vert:bM,linedashed_frag:wM,meshbasic_vert:TM,meshbasic_frag:EM,meshlambert_vert:AM,meshlambert_frag:CM,meshmatcap_vert:RM,meshmatcap_frag:PM,meshnormal_vert:IM,meshnormal_frag:LM,meshphong_vert:DM,meshphong_frag:NM,meshphysical_vert:UM,meshphysical_frag:OM,meshtoon_vert:FM,meshtoon_frag:BM,points_vert:zM,points_frag:kM,shadow_vert:VM,shadow_frag:GM,sprite_vert:HM,sprite_frag:WM},St={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Qi={basic:{uniforms:In([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:In([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:In([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:In([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:In([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:In([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:In([St.points,St.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:In([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:In([St.common,St.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:In([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:In([St.sprite,St.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:In([St.common,St.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:In([St.lights,St.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Qi.physical={uniforms:In([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Yh={r:0,b:0,g:0},XM=new Re,C0=new Kt;C0.set(-1,0,0,0,1,0,0,0,1);function qM(r,t,e,n,i,s){let o=new Jt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let v=S.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(S){let A=!1,v=f(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),A=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(S,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===sl)?(c===void 0&&(c=new Ee(new Vr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Cs(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XM.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(C0),c.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,(h!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ee(new Ja(2,2),new hi({name:"BackgroundMaterial",uniforms:Cs(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Yh,md(r)),e.buffers.color.setClear(Yh.r,Yh.g,Yh.b,A,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:_,dispose:p}}function YM(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(D,I,B,L,F){let G=!1,z=d(D,L,B,I);s!==z&&(s=z,c(s.object)),G=f(D,L,B,F),G&&g(D,L,B,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(D,I,B,L),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,I,B,L){let F=L.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let z=D.isInstancedMesh===!0?D.id:0,K=G[z];K===void 0&&(K={},G[z]=K);let Y=K[B.id];Y===void 0&&(Y={},K[B.id]=Y);let R=Y[F];return R===void 0&&(R=u(l()),Y[F]=R),R}function u(D){let I=[],B=[],L=[];for(let F=0;F<e;F++)I[F]=0,B[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,B,L){let F=s.attributes,G=I.attributes,z=0,K=B.getAttributes();for(let Y in K)if(K[Y].location>=0){let Q=F[Y],yt=G[Y];if(yt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),Q===void 0||Q.attribute!==yt||yt&&Q.data!==yt.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function g(D,I,B,L){let F={},G=I.attributes,z=0,K=B.getAttributes();for(let Y in K)if(K[Y].location>=0){let Q=G[Y];Q===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let yt={};yt.attribute=Q,Q&&Q.data&&(yt.data=Q.data),F[Y]=yt,z++}s.attributes=F,s.attributesNum=z,s.index=L}function _(){let D=s.newAttributes;for(let I=0,B=D.length;I<B;I++)D[I]=0}function m(D){p(D,0)}function p(D,I){let B=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;B[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),F[D]!==I&&(r.vertexAttribDivisor(D,I),F[D]=I)}function S(){let D=s.newAttributes,I=s.enabledAttributes;for(let B=0,L=I.length;B<L;B++)I[B]!==D[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function A(D,I,B,L,F,G,z){z===!0?r.vertexAttribIPointer(D,I,B,F,G):r.vertexAttribPointer(D,I,B,L,F,G)}function v(D,I,B,L){_();let F=L.attributes,G=B.getAttributes(),z=I.defaultAttributeValues;for(let K in G){let Y=G[K];if(Y.location>=0){let R=F[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let Q=R.normalized,yt=R.itemSize,bt=t.get(R);if(bt===void 0)continue;let Vt=bt.buffer,Bt=bt.type,Ht=bt.bytesPerElement,J=Bt===r.INT||Bt===r.UNSIGNED_INT||R.gpuType===lh;if(R.isInterleavedBufferAttribute){let j=R.data,ut=j.stride,Ft=R.offset;if(j.isInstancedInterleavedBuffer){for(let ft=0;ft<Y.locationSize;ft++)p(Y.location+ft,j.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ft=0;ft<Y.locationSize;ft++)m(Y.location+ft);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let ft=0;ft<Y.locationSize;ft++)A(Y.location+ft,yt/Y.locationSize,Bt,Q,ut*Ht,(Ft+yt/Y.locationSize*ft)*Ht,J)}else{if(R.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)p(Y.location+j,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let j=0;j<Y.locationSize;j++)m(Y.location+j);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let j=0;j<Y.locationSize;j++)A(Y.location+j,yt/Y.locationSize,Bt,Q,yt*Ht,yt/Y.locationSize*j*Ht,J)}}else if(z!==void 0){let Q=z[K];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(Y.location,Q);break;case 3:r.vertexAttrib3fv(Y.location,Q);break;case 4:r.vertexAttrib4fv(Y.location,Q);break;default:r.vertexAttrib1fv(Y.location,Q)}}}}S()}function M(){w();for(let D in n){let I=n[D];for(let B in I){let L=I[B];for(let F in L){let G=L[F];for(let z in G)h(G[z].object),delete G[z];delete L[F]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let B in I){let L=I[B];for(let F in L){let G=L[F];for(let z in G)h(G[z].object),delete G[z];delete L[F]}}delete n[D.id]}function E(D){for(let I in n){let B=n[I];for(let L in B){let F=B[L];if(F[D.id]===void 0)continue;let G=F[D.id];for(let z in G)h(G[z].object),delete G[z];delete F[D.id]}}}function x(D){for(let I in n){let B=n[I],L=D.isInstancedMesh===!0?D.id:0,F=B[L];if(F!==void 0){for(let G in F){let z=F[G];for(let K in z)h(z[K].object),delete z[K];delete F[G]}delete B[L],Object.keys(B).length===0&&delete n[I]}}}function w(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function ZM(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function JM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==bi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let x=E===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Qn&&E!==Mi&&!x&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:v,maxSamples:M,samples:b}}function $M(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ri,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let S=s?0:n,A=S*4,v=p.clippingState||null;l.value=v,v=h(g,u,A,f);for(let M=0;M!==A;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=f;A!==_;++A,v+=4)o.copy(d[A]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var ko=4,KM=6,QM=20,jM=256,pl=new Io,o0=new Jt,wd=null,Td=0,Ed=0,Ad=!1,tb=new H,Rs=new H,Go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=tb}=s;wd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wd,Td,Ed),this._renderer.xr.enabled=Ad,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yr||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Di,format:bi,colorSpace:Ua,depthBuffer:!1},i=a0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eb(s)),this._blurMaterial=ib(s,t,e),this._ggxMaterial=nb(s,t,e)}return i}_compileMaterial(t){let e=new Ee(new Kn,t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,n,i,s){let l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(o0),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new Vr,new Ga({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(o0),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let M=this._cubeSize;zo(i,v*M,A>2?M:0,M,M),d.setRenderTarget(i),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Yr||t.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=c0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;zo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ko?n-g+ko:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,zo(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(a,pl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,zo(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(a,pl)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-ko?i-this._lodMax+ko:0),u=4*(this._cubeSize-h);zo(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,pl)}};function eb(r){let t=[],e=[],n=r,i=r-ko+1+KM;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,A=p>2?0:-1,v=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(v,f*u*p);for(let M=0;M<u;M++){let b=h[M*2]*2-1,E=h[M*2+1]*2-1;p===0?Rs.set(1,E,b):p===1?Rs.set(-b,1,-E):p===2?Rs.set(-b,E,1):p===3?Rs.set(-1,E,-b):p===4?Rs.set(-b,-1,E):Rs.set(b,E,-1),Rs.toArray(_,(p*u+M)*f)}}let m=new Kn;m.setAttribute("position",new ci(g,f)),m.setAttribute("outputDirection",new ci(_,f)),e.push(new Ee(m,null)),n>ko&&n--}return{lodMeshes:e,sizeLods:t}}function a0(r,t,e){let n=new $n(r,t,e);return n.texture.mapping=sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function nb(r,t,e){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ib(r,t,e){return new hi({name:"SphericalGaussianBlur",defines:{SAMPLES:QM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function l0(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function c0(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jh=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vr(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:$i});s.uniforms.tEquirect.value=e;let o=new Ee(i,s),a=e.minFilter;return e.minFilter===Zr&&(e.minFilter=_n),new eh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function rb(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===sh||f===oh)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Jh(g.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===sh||f===oh,_=f===Yr||f===As;if(g||_){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Go(r)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Go(r)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===sh?u.mapping=Yr:f===oh&&(u.mapping=As),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function sb(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ss("WebGLRenderer: "+n+" extension not supported."),i}}}function ob(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let A=0,v=S.length;A<v;A+=3){let M=S[A+0],b=S[A+1],E=S[A+2];u.push(M,b,b,E,E,M)}}else{let S=g.array;_=g.version;for(let A=0,v=S.length/3-1;A<v;A+=3){let M=A+0,b=A+1,E=A+2;u.push(M,b,b,E,E,M)}}let m=new(g.count>=65535?Va:ka)(u,1);m.version=_;let p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ab(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function lb(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cb(r,t,e){let n=new WeakMap,i=new Oe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=a.attributes.position.count*A,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*M*4*d),E=new Ba(b,v,M,d);E.type=Mi,E.needsUpdate=!0;let x=A*4;for(let C=0;C<d;C++){let D=m[C],I=p[C],B=S[C],L=v*M*4*C;for(let F=0;F<D.count;F++){let G=F*x;f===!0&&(i.fromBufferAttribute(D,F),b[L+G+0]=i.x,b[L+G+1]=i.y,b[L+G+2]=i.z,b[L+G+3]=0),g===!0&&(i.fromBufferAttribute(I,F),b[L+G+4]=i.x,b[L+G+5]=i.y,b[L+G+6]=i.z,b[L+G+7]=0),_===!0&&(i.fromBufferAttribute(B,F),b[L+G+8]=i.x,b[L+G+9]=i.y,b[L+G+10]=i.z,b[L+G+11]=B.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new jt(v,M)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function hb(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var ub={[jf]:"LINEAR_TONE_MAPPING",[td]:"REINHARD_TONE_MAPPING",[ed]:"CINEON_TONE_MAPPING",[nd]:"ACES_FILMIC_TONE_MAPPING",[rd]:"AGX_TONE_MAPPING",[rl]:"NEUTRAL_TONE_MAPPING",[id]:"CUSTOM_TONE_MAPPING"};function fb(r,t,e,n,i,s){let o=new $n(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Kn;c.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let h=new Gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ee(c,h),u=new Io(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,S=[],A=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let b=0;b<S.length;b++){let E=S[b];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){S=v,A=S.length>0&&S[0].isRenderPass===!0;let M=o.width,b=o.height;S.length>0&&a===null&&(a=new $n(M,b,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new $n(M,b,{type:Di,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<S.length;E++){let x=S[E];x.setSize&&x.setSize(M,b)}},this.begin=function(v,M){if(_||v.toneMapping===Ii&&S.length===0)return!1;if(p=M,M!==null){let b=M.width,E=M.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return A===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Ii,!0},this.hasRenderPass=function(){return A},this.end=function(v,M){v.toneMapping=m,_=!0;let b=o,E=a;for(let x=0;x<S.length;x++){let w=S[x];w.enabled!==!1&&(w.render(v,E,b,M),w.needsSwap!==!1&&(b=E,E=E===a?l:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},he.getTransfer(f)===_e&&(h.defines.SRGB_TRANSFER="");let x=ub[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var R0=new Wn,Pd=new kr(1,1),P0=new Ba,I0=new zc,L0=new Xa,h0=[],u0=[],f0=new Float32Array(16),d0=new Float32Array(9),p0=new Float32Array(4);function Ho(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=h0[i];if(s===void 0&&(s=new Float32Array(i),h0[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function rn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qh(r,t){let e=u0[t];e===void 0&&(e=new Int32Array(t),u0[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function db(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function pb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function gb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function _b(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;p0.set(n),r.uniformMatrix2fv(this.addr,!1,p0),sn(e,n)}}function xb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;d0.set(n),r.uniformMatrix3fv(this.addr,!1,d0),sn(e,n)}}function vb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;f0.set(n),r.uniformMatrix4fv(this.addr,!1,f0),sn(e,n)}}function yb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Sb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function Mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function bb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function wb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Tb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function Eb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function Ab(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function Cb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Pd.compareFunction=e.isReversedDepthBuffer()?qh:Xh,s=Pd):s=R0,e.setTexture2D(t||s,i)}function Rb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||I0,i)}function Pb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||L0,i)}function Ib(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||P0,i)}function Lb(r){switch(r){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Tb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Db(r,t){r.uniform1fv(this.addr,t)}function Nb(r,t){let e=Ho(t,this.size,2);r.uniform2fv(this.addr,e)}function Ub(r,t){let e=Ho(t,this.size,3);r.uniform3fv(this.addr,e)}function Ob(r,t){let e=Ho(t,this.size,4);r.uniform4fv(this.addr,e)}function Fb(r,t){let e=Ho(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Bb(r,t){let e=Ho(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function zb(r,t){let e=Ho(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function kb(r,t){r.uniform1iv(this.addr,t)}function Vb(r,t){r.uniform2iv(this.addr,t)}function Gb(r,t){r.uniform3iv(this.addr,t)}function Hb(r,t){r.uniform4iv(this.addr,t)}function Wb(r,t){r.uniform1uiv(this.addr,t)}function Xb(r,t){r.uniform2uiv(this.addr,t)}function qb(r,t){r.uniform3uiv(this.addr,t)}function Yb(r,t){r.uniform4uiv(this.addr,t)}function Zb(r,t,e){let n=this.cache,i=t.length,s=Qh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Pd:o=R0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Jb(r,t,e){let n=this.cache,i=t.length,s=Qh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||I0,s[o])}function $b(r,t,e){let n=this.cache,i=t.length,s=Qh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||L0,s[o])}function Kb(r,t,e){let n=this.cache,i=t.length,s=Qh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||P0,s[o])}function Qb(r){switch(r){case 5126:return Db;case 35664:return Nb;case 35665:return Ub;case 35666:return Ob;case 35674:return Fb;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return kb;case 35667:case 35671:return Vb;case 35668:case 35672:return Gb;case 35669:case 35673:return Hb;case 5125:return Wb;case 36294:return Xb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Kb}}var Id=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lb(e.type)}},Ld=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qb(e.type)}},Dd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Cd=/(\w+)(\])?(\[|\.)?/g;function m0(r,t){r.seq.push(t),r.map[t.id]=t}function jb(r,t,e){let n=r.name,i=n.length;for(Cd.lastIndex=0;;){let s=Cd.exec(n),o=Cd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){m0(e,c===void 0?new Id(a,r,t):new Ld(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Dd(a),m0(e,d)),e=d}}}var Vo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jb(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function g0(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var t1=37297,e1=0;function n1(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _0=new Kt;function i1(r){he._getMatrix(_0,he.workingColorSpace,r);let t=`mat3( ${_0.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Oa:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function x0(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+n1(r.getShaderSource(t),a)}else return s}function r1(r,t){let e=i1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var s1={[jf]:"Linear",[td]:"Reinhard",[ed]:"Cineon",[nd]:"ACESFilmic",[rd]:"AgX",[rl]:"Neutral",[id]:"Custom"};function o1(r,t){let e=s1[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zh=new H;function a1(){he.getLuminanceCoefficients(Zh);let r=Zh.x.toFixed(4),t=Zh.y.toFixed(4),e=Zh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function c1(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h1(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function gl(r){return r!==""}function v0(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function y0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(r){return r.replace(u1,d1)}var f1=new Map;function d1(r,t){let e=ie[t];if(e===void 0){let n=f1.get(t);if(n!==void 0)e=ie[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nd(e)}var p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S0(r){return r.replace(p1,m1)}function m1(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function M0(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var g1={[il]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function _1(r){return g1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x1={[Yr]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[sl]:"ENVMAP_TYPE_CUBE_UV"};function v1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":x1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var y1={[As]:"ENVMAP_MODE_REFRACTION"};function S1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":y1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var M1={[rh]:"ENVMAP_BLENDING_MULTIPLY",[zg]:"ENVMAP_BLENDING_MIX",[kg]:"ENVMAP_BLENDING_ADD"};function b1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":M1[r.combine]||"ENVMAP_BLENDING_NONE"}function w1(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function T1(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=_1(e),c=v1(e),h=S1(e),d=b1(e),u=w1(e),f=l1(e),g=c1(s),_=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gl).join(`
`),p.length>0&&(p+=`
`)):(m=[M0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),p=[M0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?ie.tonemapping_pars_fragment:"",e.toneMapping!==Ii?o1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,r1("linearToOutputTexel",e.outputColorSpace),a1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gl).join(`
`)),o=Nd(o),o=v0(o,e),o=y0(o,e),a=Nd(a),a=v0(a,e),a=y0(a,e),o=S0(o),a=S0(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=S+m+o,v=S+p+a,M=g0(i,i.VERTEX_SHADER,A),b=g0(i,i.FRAGMENT_SHADER,v);i.attachShader(_,M),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(M)||"",L=i.getShaderInfoLog(b)||"",F=I.trim(),G=B.trim(),z=L.trim(),K=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,b);else{let R=x0(i,M,"vertex"),Q=x0(i,b,"fragment");Zt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+R+`
`+Q)}else F!==""?Xt("WebGLProgram: Program Info Log:",F):(G===""||z==="")&&(Y=!1);Y&&(D.diagnostics={runnable:K,programLog:F,vertexShader:{log:G,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(M),i.deleteShader(b),x=new Vo(i,_),w=h1(i,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,t1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}var E1=0,Ud=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Od(t),e.set(t,n)),n}},Od=class{constructor(t){this.id=E1++,this.code=t,this.usedTimes=0}};function A1(r){return r===$r||r===ul||r===fl}function C1(r,t,e,n,i,s){let o=new za,a=new Ud,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,C,D,I,B){let L=D.fog,F=I.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||G,z),Y=K&&K.mapping===sl?K.image.height:null,R=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,yt=Q!==void 0?Q.length:0,bt=0;F.morphAttributes.position!==void 0&&(bt=1),F.morphAttributes.normal!==void 0&&(bt=2),F.morphAttributes.color!==void 0&&(bt=3);let Vt,Bt,Ht,J;if(R){let Ot=Qi[R];Vt=Ot.vertexShader,Bt=Ot.fragmentShader}else{Vt=x.vertexShader,Bt=x.fragmentShader;let Ot=a.getVertexShaderStage(x),st=a.getFragmentShaderStage(x);a.update(x,Ot,st),Ht=Ot.id,J=st.id}let j=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Ft=I.isInstancedMesh===!0,ft=I.isBatchedMesh===!0,dt=!!x.map,wt=!!x.matcap,At=!!K,Gt=!!x.aoMap,Qt=!!x.lightMap,V=!!x.bumpMap&&x.wireframe===!1,ee=!!x.normalMap,qt=!!x.displacementMap,ye=!!x.emissiveMap,Wt=!!x.metalnessMap,ue=!!x.roughnessMap,O=x.anisotropy>0,Se=x.clearcoat>0,Yt=x.dispersion>0,P=x.retroreflectivity>0,y=x.iridescence>0,k=x.sheen>0,X=x.transmission>0,$=O&&!!x.anisotropyMap,ct=Se&&!!x.clearcoatMap,ot=Se&&!!x.clearcoatNormalMap,tt=Se&&!!x.clearcoatRoughnessMap,nt=y&&!!x.iridescenceMap,mt=y&&!!x.iridescenceThicknessMap,Rt=k&&!!x.sheenColorMap,gt=k&&!!x.sheenRoughnessMap,pt=!!x.specularMap,lt=!!x.specularColorMap,Nt=!!x.specularIntensityMap,kt=X&&!!x.transmissionMap,N=X&&!!x.thicknessMap,ht=!!x.gradientMap,et=!!x.alphaMap,_t=x.alphaTest>0,vt=!!x.alphaHash,it=!!x.extensions,at=Ii;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(at=r.toneMapping);let rt={shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:Vt,fragmentShader:Bt,defines:x.defines,customVertexShaderID:Ht,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ft,batchingColor:ft&&I._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&I.instanceColor!==null,instancingMorph:Ft&&I.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:dt,matcap:wt,envMap:At,envMapMode:At&&K.mapping,envMapCubeUVHeight:Y,aoMap:Gt,lightMap:Qt,bumpMap:V,normalMap:ee,displacementMap:qt,emissiveMap:ye,normalMapObjectSpace:ee&&x.normalMapType===Hg,normalMapTangentSpace:ee&&x.normalMapType===dl,packedNormalMap:ee&&x.normalMapType===dl&&A1(x.normalMap.format),metalnessMap:Wt,roughnessMap:ue,anisotropy:O,anisotropyMap:$,clearcoat:Se,clearcoatMap:ct,clearcoatNormalMap:ot,clearcoatRoughnessMap:tt,dispersion:Yt,retroreflection:P,iridescence:y,iridescenceMap:nt,iridescenceThicknessMap:mt,sheen:k,sheenColorMap:Rt,sheenRoughnessMap:gt,specularMap:pt,specularColorMap:lt,specularIntensityMap:Nt,transmission:X,transmissionMap:kt,thicknessMap:N,gradientMap:ht,opaque:x.transparent===!1&&x.blending===No&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:_t,alphaHash:vt,combine:x.combine,mapUv:dt&&g(x.map.channel),aoMapUv:Gt&&g(x.aoMap.channel),lightMapUv:Qt&&g(x.lightMap.channel),bumpMapUv:V&&g(x.bumpMap.channel),normalMapUv:ee&&g(x.normalMap.channel),displacementMapUv:qt&&g(x.displacementMap.channel),emissiveMapUv:ye&&g(x.emissiveMap.channel),metalnessMapUv:Wt&&g(x.metalnessMap.channel),roughnessMapUv:ue&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:ct&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(x.sheenRoughnessMap.channel),specularMapUv:pt&&g(x.specularMap.channel),specularColorMapUv:lt&&g(x.specularColorMap.channel),specularIntensityMapUv:Nt&&g(x.specularIntensityMap.channel),transmissionMapUv:kt&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:et&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ee||O),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(dt||et),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:bt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:dt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Si,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(w,x),S(w,x),w.push(r.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let w=f[x.type],C;if(w){let D=Qi[w];C=i0.clone(D.uniforms)}else C=x.uniforms;return C}function v(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new T1(r,w,x,i),c.push(C),h.set(w,C)),C}function M(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function R1(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function P1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function b0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function w0(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,_,m,p){let S=r[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},r[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,g,_,m,p,S){S.reversedDepth===!0&&(m=-m);let A=a(u,f,g,_,m,p);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function c(u,f,g,_,m,p){let S=a(u,f,g,_,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||P1),n.length>1&&n.sort(f||b0),i.length>1&&i.sort(f||b0)}function d(){for(let u=t,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function I1(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new w0,r.set(n,[o])):i>=s.length?(o=new w0,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function L1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Jt};break;case"SpotLight":e={position:new H,direction:new H,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function D1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var N1=0;function U1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function O1(r){let t=new L1,e=D1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,s=new Re,o=new Re;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,A=0,v=0,M=0,b=0,E=0,x=0,w=0,C=0;c.sort(U1);for(let I=0,B=c.length;I<B;I++){let L=c[I],F=L.color,G=L.intensity,z=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===$r?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*G,d+=F.g*G,u+=F.b*G;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],G);C++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Q=e.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=K;let yt=R.getViewportCount();for(let bt=0;bt<yt;bt++)n.sunShadowMatrix[_+bt]=R.getMatrix(bt),n.sunShadowCascade[_+bt]=R._cascadeData[bt];_+=yt,g++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Q=e.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=L.shadow.matrix,M++}n.directional[m]=Y,m++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(G),Y.distance=z,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[S]=Y;let R=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,R.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[S]=R.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=K,E++}S++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(F).multiplyScalar(G),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=Y,A++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let R=L.shadow,Q=e.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,Q.shadowCameraNear=R.camera.near,Q.shadowCameraFar=R.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=Y,p++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(G),Y.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[v]=Y,v++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==x||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=x,D.numLightProbes=C,n.version=N1++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let v=c[S];if(v.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(v.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function T0(r){let t=new O1(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function F1(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new T0(r),t.set(i,[a])):s>=o.length?(a=new T0(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
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
}`,k1=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],V1=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],E0=new Re,ml=new H,Rd=new H;function G1(r,t,e){let n=new Ao,i=new jt,s=new jt,o=new Oe,a=new Hc,l=new Wc,c={},h=e.maxTextureSize,d={[qr]:xn,[xn]:qr,[Si]:Si},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:B1,fragmentShader:z1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Kn;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let p=this.type;this.render=function(b,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===yg&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=il);let w=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending($i),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=p!==this.type;B&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=b.length;L<F;L++){let G=b[L],z=G.shadow;if(z===void 0){Xt("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let K=z.getFrameExtents();i.multiply(K),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,z.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Do){if(G.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new $n(i.x,i.y,{format:$r,type:Di,minFilter:_n,magFilter:_n,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new kr(i.x,i.y,Mi),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Xi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn}else G.isPointLight?(z.map=new Jh(i.x),z.map.depthTexture=new Vc(i.x,Li)):(z.map=new $n(i.x,i.y),z.map.depthTexture=new kr(i.x,i.y,Li)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Xi,this.type===il?(z.map.depthTexture.compareFunction=Y?qh:Xh,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let R=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,x);for(let Q=0;Q<R;Q++){let yt=z.getCamera(Q);if(G.isPointLight){let bt=z.camera,Vt=z.matrix,Bt=G.distance||bt.far;Bt!==bt.far&&(bt.far=Bt,bt.updateProjectionMatrix()),ml.setFromMatrixPosition(G.matrixWorld),bt.position.copy(ml),Rd.copy(bt.position),Rd.add(k1[Q]),bt.up.copy(V1[Q]),bt.lookAt(Rd),bt.updateMatrixWorld(),Vt.makeTranslation(-ml.x,-ml.y,-ml.z),E0.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(E0,bt.coordinateSystem,bt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,Q),r.clear();else{Q===0&&(r.setRenderTarget(z.map),r.clear());let bt=z.getViewport(Q);o.set(s.x*bt.x,s.y*bt.y,s.x*bt.z,s.y*bt.w),I.viewport(o)}n=z.getFrustum(Q),v(E,x,yt,G,this.type)}z.isPointLightShadow!==!0&&this.type===Do&&S(z,x),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,C,D)};function S(b,E){let x=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new $n(i.x,i.y,{format:$r,type:Di}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,x,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,x,f,_,null)}function A(b,E,x,w){let C=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=C.uuid,B=E.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let F=L[B];F===void 0&&(F=C.clone(),L[B]=F,E.addEventListener("dispose",M)),C=F}if(C.visible=E.visible,C.wireframe=E.wireframe,w===Do?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=r.properties.get(C);I.light=x}return C}function v(b,E,x,w,C){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Do)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let B=t.update(b),L=b.material;if(Array.isArray(L)){let F=B.groups;for(let G=0,z=F.length;G<z;G++){let K=F[G],Y=L[K.materialIndex];if(Y&&Y.visible){let R=A(b,Y,w,C);b.onBeforeShadow(r,b,E,x,B,R,K),r.renderBufferDirect(x,null,B,R,b,K),b.onAfterShadow(r,b,E,x,B,R,K)}}}else if(L.visible){let F=A(b,L,w,C);b.onBeforeShadow(r,b,E,x,B,F,null),r.renderBufferDirect(x,null,B,F,b,null),b.onAfterShadow(r,b,E,x,B,F,null)}}let I=b.children;for(let B=0,L=I.length;B<L;B++)v(I[B],E,x,w,C)}function M(b){b.target.removeEventListener("dispose",M);for(let x in c){let w=c[x],C=b.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function H1(r,t){function e(){let N=!1,ht=new Oe,et=null,_t=new Oe(0,0,0,0);return{setMask:function(vt){et!==vt&&!N&&(r.colorMask(vt,vt,vt,vt),et=vt)},setLocked:function(vt){N=vt},setClear:function(vt,it,at,rt,Ot){Ot===!0&&(vt*=rt,it*=rt,at*=rt),ht.set(vt,it,at,rt),_t.equals(ht)===!1&&(r.clearColor(vt,it,at,rt),_t.copy(ht))},reset:function(){N=!1,et=null,_t.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,et=null,_t=null,vt=null;return{setReversed:function(it){if(ht!==it){let at=t.get("EXT_clip_control");it?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let rt=vt;vt=null,this.setClear(rt)}},getReversed:function(){return ht},setTest:function(it){it?j(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(it){et!==it&&!N&&(r.depthMask(it),et=it)},setFunc:function(it){if(ht&&(it=e0[it]),_t!==it){switch(it){case Cc:r.depthFunc(r.NEVER);break;case Rc:r.depthFunc(r.ALWAYS);break;case Pc:r.depthFunc(r.LESS);break;case So:r.depthFunc(r.LEQUAL);break;case Ic:r.depthFunc(r.EQUAL);break;case Lc:r.depthFunc(r.GEQUAL);break;case Dc:r.depthFunc(r.GREATER);break;case Nc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=it}},setLocked:function(it){N=it},setClear:function(it){vt!==it&&(vt=it,ht&&(it=1-it),r.clearDepth(it))},reset:function(){N=!1,et=null,_t=null,vt=null,ht=!1}}}function i(){let N=!1,ht=null,et=null,_t=null,vt=null,it=null,at=null,rt=null,Ot=null;return{setTest:function(st){N||(st?j(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(st){ht!==st&&!N&&(r.stencilMask(st),ht=st)},setFunc:function(st,zt,Pt){(et!==st||_t!==zt||vt!==Pt)&&(r.stencilFunc(st,zt,Pt),et=st,_t=zt,vt=Pt)},setOp:function(st,zt,Pt){(it!==st||at!==zt||rt!==Pt)&&(r.stencilOp(st,zt,Pt),it=st,at=zt,rt=Pt)},setLocked:function(st){N=st},setClear:function(st){Ot!==st&&(r.clearStencil(st),Ot=st)},reset:function(){N=!1,ht=null,et=null,_t=null,vt=null,it=null,at=null,rt=null,Ot=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,A=null,v=null,M=null,b=null,E=null,x=new Jt(0,0,0),w=0,C=!1,D=null,I=null,B=null,L=null,F=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let R=null,Q={},yt=r.getParameter(r.SCISSOR_BOX),bt=r.getParameter(r.VIEWPORT),Vt=new Oe().fromArray(yt),Bt=new Oe().fromArray(bt);function Ht(N,ht,et,_t){let vt=new Uint8Array(4),it=r.createTexture();r.bindTexture(N,it),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<et;at++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(ht+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return it}let J={};J[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(So),V(!1),ee(Yf),j(r.CULL_FACE),Gt($i);function j(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function ut(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Ft(N,ht){return u[N]!==ht?(r.bindFramebuffer(N,ht),u[N]=ht,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ht),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function ft(N,ht){let et=g,_t=!1;if(N){et=f.get(ht),et===void 0&&(et=[],f.set(ht,et));let vt=N.textures;if(et.length!==vt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let it=0,at=vt.length;it<at;it++)et[it]=r.COLOR_ATTACHMENT0+it;et.length=vt.length,_t=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,_t=!0);_t&&r.drawBuffers(et)}function dt(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let wt={[Es]:r.FUNC_ADD,[Mg]:r.FUNC_SUBTRACT,[bg]:r.FUNC_REVERSE_SUBTRACT};wt[wg]=r.MIN,wt[Tg]=r.MAX;let At={[Eg]:r.ZERO,[Ag]:r.ONE,[Cg]:r.SRC_COLOR,[Kf]:r.SRC_ALPHA,[Ng]:r.SRC_ALPHA_SATURATE,[Lg]:r.DST_COLOR,[Pg]:r.DST_ALPHA,[Rg]:r.ONE_MINUS_SRC_COLOR,[Qf]:r.ONE_MINUS_SRC_ALPHA,[Dg]:r.ONE_MINUS_DST_COLOR,[Ig]:r.ONE_MINUS_DST_ALPHA,[Ug]:r.CONSTANT_COLOR,[Og]:r.ONE_MINUS_CONSTANT_COLOR,[Fg]:r.CONSTANT_ALPHA,[Bg]:r.ONE_MINUS_CONSTANT_ALPHA};function Gt(N,ht,et,_t,vt,it,at,rt,Ot,st){if(N===$i){m===!0&&(ut(r.BLEND),m=!1);return}if(m===!1&&(j(r.BLEND),m=!0),N!==Sg){if(N!==p||st!==C){if((S!==Es||M!==Es)&&(r.blendEquation(r.FUNC_ADD),S=Es,M=Es),st)switch(N){case No:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zf:r.blendFunc(r.ONE,r.ONE);break;case Jf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $f:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Zt("WebGLState: Invalid blending: ",N);break}else switch(N){case No:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Jf:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $f:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",N);break}A=null,v=null,b=null,E=null,x.set(0,0,0),w=0,p=N,C=st}return}vt=vt||ht,it=it||et,at=at||_t,(ht!==S||vt!==M)&&(r.blendEquationSeparate(wt[ht],wt[vt]),S=ht,M=vt),(et!==A||_t!==v||it!==b||at!==E)&&(r.blendFuncSeparate(At[et],At[_t],At[it],At[at]),A=et,v=_t,b=it,E=at),(rt.equals(x)===!1||Ot!==w)&&(r.blendColor(rt.r,rt.g,rt.b,Ot),x.copy(rt),w=Ot),p=N,C=!1}function Qt(N,ht){N.side===Si?ut(r.CULL_FACE):j(r.CULL_FACE);let et=N.side===xn;ht&&(et=!et),V(et),N.blending===No&&N.transparent===!1?Gt($i):Gt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let _t=N.stencilWrite;a.setTest(_t),_t&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function ee(N){N!==xg?(j(r.CULL_FACE),N!==I&&(N===Yf?r.cullFace(r.BACK):N===vg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),I=N}function qt(N){N!==B&&(z&&r.lineWidth(N),B=N)}function ye(N,ht,et){N?(j(r.POLYGON_OFFSET_FILL),(L!==ht||F!==et)&&(L=ht,F=et,o.getReversed()&&(ht=-ht),r.polygonOffset(ht,et))):ut(r.POLYGON_OFFSET_FILL)}function Wt(N){N?j(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function ue(N){N===void 0&&(N=r.TEXTURE0+G-1),R!==N&&(r.activeTexture(N),R=N)}function O(N,ht,et){et===void 0&&(R===null?et=r.TEXTURE0+G-1:et=R);let _t=Q[et];_t===void 0&&(_t={type:void 0,texture:void 0},Q[et]=_t),(_t.type!==N||_t.texture!==ht)&&(R!==et&&(r.activeTexture(et),R=et),r.bindTexture(N,ht||J[N]),_t.type=N,_t.texture=ht)}function Se(){let N=Q[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Yt(){try{r.compressedTexImage2D(...arguments)}catch(N){Zt("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Zt("WebGLState:",N)}}function y(){try{r.texSubImage2D(...arguments)}catch(N){Zt("WebGLState:",N)}}function k(){try{r.texSubImage3D(...arguments)}catch(N){Zt("WebGLState:",N)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Zt("WebGLState:",N)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Zt("WebGLState:",N)}}function ct(){try{r.texStorage2D(...arguments)}catch(N){Zt("WebGLState:",N)}}function ot(){try{r.texStorage3D(...arguments)}catch(N){Zt("WebGLState:",N)}}function tt(){try{r.texImage2D(...arguments)}catch(N){Zt("WebGLState:",N)}}function nt(){try{r.texImage3D(...arguments)}catch(N){Zt("WebGLState:",N)}}function mt(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Rt(N,ht){d[N]!==ht&&(r.pixelStorei(N,ht),d[N]=ht)}function gt(N){Vt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Vt.copy(N))}function pt(N){Bt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Bt.copy(N))}function lt(N,ht){let et=c.get(ht);et===void 0&&(et=new WeakMap,c.set(ht,et));let _t=et.get(N);_t===void 0&&(_t=r.getUniformBlockIndex(ht,N.name),et.set(N,_t))}function Nt(N,ht){let _t=c.get(ht).get(N);l.get(ht)!==_t&&(r.uniformBlockBinding(ht,_t,N.__bindingPointIndex),l.set(ht,_t))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,Q={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,A=null,v=null,M=null,b=null,E=null,x=new Jt(0,0,0),w=0,C=!1,D=null,I=null,B=null,L=null,F=null,Vt.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:ut,bindFramebuffer:Ft,drawBuffers:ft,useProgram:dt,setBlending:Gt,setMaterial:Qt,setFlipSided:V,setCullFace:ee,setLineWidth:qt,setPolygonOffset:ye,setScissorTest:Wt,activeTexture:ue,bindTexture:O,unbindTexture:Se,compressedTexImage2D:Yt,compressedTexImage3D:P,texImage2D:tt,texImage3D:nt,pixelStorei:Rt,getParameter:mt,updateUBOMapping:lt,uniformBlockBinding:Nt,texStorage2D:ct,texStorage3D:ot,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:gt,viewport:pt,reset:kt}}function W1(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return g?new OffscreenCanvas(P,y):Fa("canvas")}function m(P,y,k){let X=1,$=Yt(P);if(($.width>k||$.height>k)&&(X=k/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ct=Math.floor(X*$.width),ot=Math.floor(X*$.height);u===void 0&&(u=_(ct,ot));let tt=y?_(ct,ot):u;return tt.width=ct,tt.height=ot,tt.getContext("2d").drawImage(P,0,0,ct,ot),Xt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ot+")."),tt}else return"data"in P&&Xt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function p(P){return P.generateMipmaps}function S(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(P,y,k,X,$,ct=!1){if(P!==null){if(r[P]!==void 0)return r[P];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot;X&&(ot=t.get("EXT_texture_norm16"),ot||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=y;if(y===r.RED&&(k===r.FLOAT&&(tt=r.R32F),k===r.HALF_FLOAT&&(tt=r.R16F),k===r.UNSIGNED_BYTE&&(tt=r.R8),k===r.UNSIGNED_SHORT&&ot&&(tt=ot.R16_EXT),k===r.SHORT&&ot&&(tt=ot.R16_SNORM_EXT)),y===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(tt=r.R8UI),k===r.UNSIGNED_SHORT&&(tt=r.R16UI),k===r.UNSIGNED_INT&&(tt=r.R32UI),k===r.BYTE&&(tt=r.R8I),k===r.SHORT&&(tt=r.R16I),k===r.INT&&(tt=r.R32I)),y===r.RG&&(k===r.FLOAT&&(tt=r.RG32F),k===r.HALF_FLOAT&&(tt=r.RG16F),k===r.UNSIGNED_BYTE&&(tt=r.RG8),k===r.UNSIGNED_SHORT&&ot&&(tt=ot.RG16_EXT),k===r.SHORT&&ot&&(tt=ot.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(tt=r.RG8UI),k===r.UNSIGNED_SHORT&&(tt=r.RG16UI),k===r.UNSIGNED_INT&&(tt=r.RG32UI),k===r.BYTE&&(tt=r.RG8I),k===r.SHORT&&(tt=r.RG16I),k===r.INT&&(tt=r.RG32I)),y===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),k===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),k===r.UNSIGNED_INT&&(tt=r.RGB32UI),k===r.BYTE&&(tt=r.RGB8I),k===r.SHORT&&(tt=r.RGB16I),k===r.INT&&(tt=r.RGB32I)),y===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),k===r.UNSIGNED_INT&&(tt=r.RGBA32UI),k===r.BYTE&&(tt=r.RGBA8I),k===r.SHORT&&(tt=r.RGBA16I),k===r.INT&&(tt=r.RGBA32I)),y===r.RGB&&(k===r.UNSIGNED_SHORT&&ot&&(tt=ot.RGB16_EXT),k===r.SHORT&&ot&&(tt=ot.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),y===r.RGBA){let nt=ct?Oa:he.getTransfer($);k===r.FLOAT&&(tt=r.RGBA32F),k===r.HALF_FLOAT&&(tt=r.RGBA16F),k===r.UNSIGNED_BYTE&&(tt=nt===_e?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&ot&&(tt=ot.RGBA16_EXT),k===r.SHORT&&ot&&(tt=ot.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(P,y){let k;return P?y===null||y===Li||y===Oo?k=r.DEPTH24_STENCIL8:y===Mi?k=r.DEPTH32F_STENCIL8:y===Uo&&(k=r.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===Oo?k=r.DEPTH_COMPONENT24:y===Mi?k=r.DEPTH_COMPONENT32F:y===Uo&&(k=r.DEPTH_COMPONENT16),k}function b(P,y){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function E(P){let y=P.target;y.removeEventListener("dispose",E),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(P){let y=P.target;y.removeEventListener("dispose",x),D(y)}function w(P){let y=n.get(P);if(y.__webglInit===void 0)return;let k=P.source,X=f.get(k);if(X){let $=X[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(P),Object.keys(X).length===0&&f.delete(k)}n.remove(P)}function C(P){let y=n.get(P);r.deleteTexture(y.__webglTexture);let k=P.source,X=f.get(k);delete X[y.__cacheKey],o.memory.textures--}function D(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let $=0;$<y.__webglFramebuffer[X].length;$++)r.deleteFramebuffer(y.__webglFramebuffer[X][$]);else r.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)r.deleteFramebuffer(y.__webglFramebuffer[X]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=P.textures;for(let X=0,$=k.length;X<$;X++){let ct=n.get(k[X]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(k[X])}n.remove(P)}let I=0;function B(){I=0}function L(){return I}function F(P){I=P}function G(){let P=I;return P>=i.maxTextures&&Xt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function z(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function K(P,y){let k=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let X=P.image;if(X===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(k,P,y);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+y)}function Y(P,y){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ut(k,P,y);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+y)}function R(P,y){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ut(k,P,y);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+y)}function Q(P,y){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Ft(k,P,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+y)}let yt={[Ms]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[Uc]:r.MIRRORED_REPEAT},bt={[fn]:r.NEAREST,[Vg]:r.NEAREST_MIPMAP_NEAREST,[ol]:r.NEAREST_MIPMAP_LINEAR,[_n]:r.LINEAR,[ah]:r.LINEAR_MIPMAP_NEAREST,[Zr]:r.LINEAR_MIPMAP_LINEAR},Vt={[Xg]:r.NEVER,[$g]:r.ALWAYS,[qg]:r.LESS,[Xh]:r.LEQUAL,[Yg]:r.EQUAL,[qh]:r.GEQUAL,[Zg]:r.GREATER,[Jg]:r.NOTEQUAL};function Bt(P,y){if(y.type===Mi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===_n||y.magFilter===ah||y.magFilter===ol||y.magFilter===Zr||y.minFilter===_n||y.minFilter===ah||y.minFilter===ol||y.minFilter===Zr)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,yt[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,yt[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,yt[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,bt[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,bt[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===fn||y.minFilter!==ol&&y.minFilter!==Zr||y.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ht(P,y){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",E));let X=y.source,$=f.get(X);$===void 0&&($={},f.set(X,$));let ct=z(y);if(ct!==P.__cacheKey){$[ct]===void 0&&($[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[ct].usedTimes++;let ot=$[P.__cacheKey];ot!==void 0&&($[P.__cacheKey].usedTimes--,ot.usedTimes===0&&C(y)),P.__cacheKey=ct,P.__webglTexture=$[ct].texture}return k}function J(P,y,k){return Math.floor(Math.floor(P/k)/y)}function j(P,y,k,X){let ct=P.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,k,X,y.data);else{ct.sort((Rt,gt)=>Rt.start-gt.start);let ot=0;for(let Rt=1;Rt<ct.length;Rt++){let gt=ct[ot],pt=ct[Rt],lt=gt.start+gt.count,Nt=J(pt.start,y.width,4),kt=J(gt.start,y.width,4);pt.start<=lt+1&&Nt===kt&&J(pt.start+pt.count-1,y.width,4)===Nt?gt.count=Math.max(gt.count,pt.start+pt.count-gt.start):(++ot,ct[ot]=pt)}ct.length=ot+1;let tt=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),mt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Rt=0,gt=ct.length;Rt<gt;Rt++){let pt=ct[Rt],lt=Math.floor(pt.start/4),Nt=Math.ceil(pt.count/4),kt=lt%y.width,N=Math.floor(lt/y.width),ht=Nt,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,kt,N,ht,et,k,X,y.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,tt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,mt)}}function ut(P,y,k){let X=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=r.TEXTURE_3D);let $=Ht(P,y),ct=y.source;e.bindTexture(X,P.__webglTexture,r.TEXTURE0+k);let ot=n.get(ct);if(ct.version!==ot.__version||$===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let et=he.getPrimaries(he.workingColorSpace),_t=y.colorSpace===gr?null:he.getPrimaries(y.colorSpace),vt=y.colorSpace===gr||et===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let nt=m(y.image,!1,i.maxTextureSize);nt=Se(y,nt);let mt=s.convert(y.format,y.colorSpace),Rt=s.convert(y.type),gt=v(y.internalFormat,mt,Rt,y.normalized,y.colorSpace,y.isVideoTexture);Bt(X,y);let pt,lt=y.mipmaps,Nt=y.isVideoTexture!==!0,kt=ot.__version===void 0||$===!0,N=ct.dataReady,ht=b(y,nt);if(y.isDepthTexture)gt=M(y.format===Jr,y.type),kt&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,gt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,gt,nt.width,nt.height,0,mt,Rt,null));else if(y.isDataTexture)if(lt.length>0){Nt&&kt&&e.texStorage2D(r.TEXTURE_2D,ht,gt,lt[0].width,lt[0].height);for(let et=0,_t=lt.length;et<_t;et++)pt=lt[et],Nt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,pt.width,pt.height,mt,Rt,pt.data):e.texImage2D(r.TEXTURE_2D,et,gt,pt.width,pt.height,0,mt,Rt,pt.data);y.generateMipmaps=!1}else Nt?(kt&&e.texStorage2D(r.TEXTURE_2D,ht,gt,nt.width,nt.height),N&&j(y,nt,mt,Rt)):e.texImage2D(r.TEXTURE_2D,0,gt,nt.width,nt.height,0,mt,Rt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Nt&&kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,gt,lt[0].width,lt[0].height,nt.depth);for(let et=0,_t=lt.length;et<_t;et++)if(pt=lt[et],y.format!==bi)if(mt!==null)if(Nt){if(N)if(y.layerUpdates.size>0){let vt=xd(pt.width,pt.height,y.format,y.type);for(let it of y.layerUpdates){let at=pt.data.subarray(it*vt/pt.data.BYTES_PER_ELEMENT,(it+1)*vt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,it,pt.width,pt.height,1,mt,at)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,pt.width,pt.height,nt.depth,mt,pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,gt,pt.width,pt.height,nt.depth,0,pt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,pt.width,pt.height,nt.depth,mt,Rt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,gt,pt.width,pt.height,nt.depth,0,mt,Rt,pt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Nt&&kt&&e.texStorage2D(r.TEXTURE_2D,ht,gt,lt[0].width,lt[0].height);for(let et=0,_t=lt.length;et<_t;et++)pt=lt[et],y.format!==bi?mt!==null?Nt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,pt.width,pt.height,mt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,gt,pt.width,pt.height,0,pt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,pt.width,pt.height,mt,Rt,pt.data):e.texImage2D(r.TEXTURE_2D,et,gt,pt.width,pt.height,0,mt,Rt,pt.data)}else if(y.isDataArrayTexture)if(Nt){if(kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,gt,nt.width,nt.height,nt.depth),N)if(y.layerUpdates.size>0){let et=xd(nt.width,nt.height,y.format,y.type);for(let _t of y.layerUpdates){let vt=nt.data.subarray(_t*et/nt.data.BYTES_PER_ELEMENT,(_t+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,nt.width,nt.height,1,mt,Rt,vt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Rt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,gt,nt.width,nt.height,nt.depth,0,mt,Rt,nt.data);else if(y.isData3DTexture)Nt?(kt&&e.texStorage3D(r.TEXTURE_3D,ht,gt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Rt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,gt,nt.width,nt.height,nt.depth,0,mt,Rt,nt.data);else if(y.isFramebufferTexture){if(kt)if(Nt)e.texStorage2D(r.TEXTURE_2D,ht,gt,nt.width,nt.height);else{let et=nt.width,_t=nt.height;for(let vt=0;vt<ht;vt++)e.texImage2D(r.TEXTURE_2D,vt,gt,et,_t,0,mt,Rt,null),et>>=1,_t>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(y),et.onpaint=_t=>{let vt=_t.changedElements;for(let it of d)vt.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let vt=r.RGBA,it=r.RGBA,at=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,vt,it,at,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(Nt&&kt){let et=Yt(lt[0]);e.texStorage2D(r.TEXTURE_2D,ht,gt,et.width,et.height)}for(let et=0,_t=lt.length;et<_t;et++)pt=lt[et],Nt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,mt,Rt,pt):e.texImage2D(r.TEXTURE_2D,et,gt,mt,Rt,pt);y.generateMipmaps=!1}else if(Nt){if(kt){let et=Yt(nt);e.texStorage2D(r.TEXTURE_2D,ht,gt,et.width,et.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,Rt,nt)}else e.texImage2D(r.TEXTURE_2D,0,gt,mt,Rt,nt);p(y)&&S(X),ot.__version=ct.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ft(P,y,k){if(y.image.length!==6)return;let X=Ht(P,y),$=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);let ct=n.get($);if($.version!==ct.__version||X===!0){e.activeTexture(r.TEXTURE0+k);let ot=he.getPrimaries(he.workingColorSpace),tt=y.colorSpace===gr?null:he.getPrimaries(y.colorSpace),nt=y.colorSpace===gr||ot===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let mt=y.isCompressedTexture||y.image[0].isCompressedTexture,Rt=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!mt&&!Rt?gt[it]=m(y.image[it],!0,i.maxCubemapSize):gt[it]=Rt?y.image[it].image:y.image[it],gt[it]=Se(y,gt[it]);let pt=gt[0],lt=s.convert(y.format,y.colorSpace),Nt=s.convert(y.type),kt=v(y.internalFormat,lt,Nt,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,ht=ct.__version===void 0||X===!0,et=$.dataReady,_t=b(y,pt);Bt(r.TEXTURE_CUBE_MAP,y);let vt;if(mt){N&&ht&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,kt,pt.width,pt.height);for(let it=0;it<6;it++){vt=gt[it].mipmaps;for(let at=0;at<vt.length;at++){let rt=vt[at];y.format!==bi?lt!==null?N?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,lt,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,kt,rt.width,rt.height,0,rt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,lt,Nt,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,kt,rt.width,rt.height,0,lt,Nt,rt.data)}}}else{if(vt=y.mipmaps,N&&ht){vt.length>0&&_t++;let it=Yt(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,kt,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,lt,Nt,gt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,gt[it].width,gt[it].height,0,lt,Nt,gt[it].data);for(let at=0;at<vt.length;at++){let Ot=vt[at].image[it].image;N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,Ot.width,Ot.height,lt,Nt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,kt,Ot.width,Ot.height,0,lt,Nt,Ot.data)}}else{N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,lt,Nt,gt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,lt,Nt,gt[it]);for(let at=0;at<vt.length;at++){let rt=vt[at];N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,lt,Nt,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,kt,lt,Nt,rt.image[it])}}}p(y)&&S(r.TEXTURE_CUBE_MAP),ct.__version=$.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ft(P,y,k,X,$,ct){let ot=s.convert(k.format,k.colorSpace),tt=s.convert(k.type),nt=v(k.internalFormat,ot,tt,k.normalized,k.colorSpace),mt=n.get(y),Rt=n.get(k);if(Rt.__renderTarget=y,!mt.__hasExternalTextures){let gt=Math.max(1,y.width>>ct),pt=Math.max(1,y.height>>ct);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,ct,nt,gt,pt,y.depth,0,ot,tt,null):e.texImage2D($,ct,nt,gt,pt,0,ot,tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),ue(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,$,Rt.__webglTexture,0,Wt(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,$,Rt.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(P,y,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){let X=y.depthTexture,$=X&&X.isDepthTexture?X.type:null,ct=M(y.stencilBuffer,$),ot=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ue(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt(y),ct,y.width,y.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt(y),ct,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ct,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,P)}else{let X=y.textures;for(let $=0;$<X.length;$++){let ct=X[$],ot=s.convert(ct.format,ct.colorSpace),tt=s.convert(ct.type),nt=v(ct.internalFormat,ot,tt,ct.normalized,ct.colorSpace);ue(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt(y),nt,y.width,y.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt(y),nt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,nt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(P,y,k){let X=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,y.depthTexture);let mt=s.convert(y.depthTexture.format),Rt=s.convert(y.depthTexture.type),gt;y.depthTexture.format===Xi?gt=r.DEPTH_COMPONENT24:y.depthTexture.format===Jr&&(gt=r.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,gt,y.width,y.height,0,mt,Rt,null)}}else K(y.depthTexture,0);let ct=$.__webglTexture,ot=Wt(y),tt=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,nt=y.depthTexture.format===Jr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xi)ue(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,ct,0);else if(y.depthTexture.format===Jr)ue(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(P){let y=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=X}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)wt(y.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?wt(y.__webglFramebuffer[0],P,0):wt(y.__webglFramebuffer,P,0)}else if(k){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=r.createRenderbuffer(),dt(y.__webglDepthbuffer[X],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),dt(y.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(P,y,k){let X=n.get(P);y!==void 0&&ft(X.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&At(P)}function Qt(P){let y=P.texture,k=n.get(P),X=n.get(y);P.addEventListener("dispose",x);let $=P.textures,ct=P.isWebGLCubeRenderTarget===!0,ot=$.length>1;if(ot||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=y.version,o.memory.textures++),ct){k.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[tt]=[];for(let nt=0;nt<y.mipmaps.length;nt++)k.__webglFramebuffer[tt][nt]=r.createFramebuffer()}else k.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)k.__webglFramebuffer[tt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ot)for(let tt=0,nt=$.length;tt<nt;tt++){let mt=n.get($[tt]);mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&ue(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let tt=0;tt<$.length;tt++){let nt=$[tt];k.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[tt]);let mt=s.convert(nt.format,nt.colorSpace),Rt=s.convert(nt.type),gt=v(nt.internalFormat,mt,Rt,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),pt=Wt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,gt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,k.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),dt(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let nt=0;nt<y.mipmaps.length;nt++)ft(k.__webglFramebuffer[tt][nt],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else ft(k.__webglFramebuffer[tt],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(y)&&S(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let tt=0,nt=$.length;tt<nt;tt++){let mt=$[tt],Rt=n.get(mt),gt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(gt,Rt.__webglTexture),Bt(gt,mt),ft(k.__webglFramebuffer,P,mt,r.COLOR_ATTACHMENT0+tt,gt,0),p(mt)&&S(gt)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,X.__webglTexture),Bt(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let nt=0;nt<y.mipmaps.length;nt++)ft(k.__webglFramebuffer[nt],P,y,r.COLOR_ATTACHMENT0,tt,nt);else ft(k.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,tt,0);p(y)&&S(tt),e.unbindTexture()}P.depthBuffer&&At(P)}function V(P){let y=P.textures;for(let k=0,X=y.length;k<X;k++){let $=y[k];if(p($)){let ct=A(P),ot=n.get($).__webglTexture;e.bindTexture(ct,ot),S(ct),e.unbindTexture()}}}let ee=[],qt=[];function ye(P){if(P.samples>0){if(ue(P)===!1){let y=P.textures,k=P.width,X=P.height,$=r.COLOR_BUFFER_BIT,ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=n.get(P),tt=y.length>1;if(tt)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ot.__webglColorRenderbuffer[mt]);let Rt=n.get(y[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,k,X,0,0,k,X,$,r.NEAREST),l===!0&&(ee.length=0,qt.length=0,ee.push(r.COLOR_ATTACHMENT0+mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ee.push(ct),qt.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,ot.__webglColorRenderbuffer[mt]);let Rt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Wt(P){return Math.min(i.maxSamples,P.samples)}function ue(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(P){let y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function Se(P,y){let k=P.colorSpace,X=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Ua&&k!==gr&&(he.getTransfer(k)===_e?(X!==bi||$!==Qn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",k)),y}function Yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=R,this.setTextureCube=Q,this.rebindTextures=Gt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function X1(r,t){function e(n,i=gr){let s,o=he.getTransfer(i);if(n===Qn)return r.UNSIGNED_BYTE;if(n===ch)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===od)return r.BYTE;if(n===ad)return r.SHORT;if(n===Uo)return r.UNSIGNED_SHORT;if(n===lh)return r.INT;if(n===Li)return r.UNSIGNED_INT;if(n===Mi)return r.FLOAT;if(n===Di)return r.HALF_FLOAT;if(n===hd)return r.ALPHA;if(n===ud)return r.RGB;if(n===bi)return r.RGBA;if(n===Xi)return r.DEPTH_COMPONENT;if(n===Jr)return r.DEPTH_STENCIL;if(n===uh)return r.RED;if(n===fh)return r.RED_INTEGER;if(n===$r)return r.RG;if(n===dh)return r.RG_INTEGER;if(n===ph)return r.RGBA_INTEGER;if(n===al||n===ll||n===cl||n===hl)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mh||n===gh||n===_h||n===xh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vh||n===yh||n===Sh||n===Mh||n===bh||n===ul||n===wh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vh||n===yh)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mh)return s.COMPRESSED_R11_EAC;if(n===bh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ul)return s.COMPRESSED_RG11_EAC;if(n===wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Th||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh||n===Oh||n===Fh||n===Bh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Th)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ah)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ph)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ih)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zh||n===kh||n===Vh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===zh)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gh||n===Hh||n===fl||n===Wh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y1=`
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

}`,Fd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hi({vertexShader:q1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bd=class extends qi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Fd,p={},S=e.getContextAttributes(),A=null,v=null,M=[],b=[],E=new jt,x=null,w=null,C=new gn;C.viewport=new Oe;let D=new gn;D.viewport=new Oe;let I=[C,D],B=new nh,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let j=M[J];return j===void 0&&(j=new Eo,M[J]=j),j.getTargetRaySpace()},this.getControllerGrip=function(J){let j=M[J];return j===void 0&&(j=new Eo,M[J]=j),j.getGripSpace()},this.getHand=function(J){let j=M[J];return j===void 0&&(j=new Eo,M[J]=j),j.getHandSpace()};function G(J){let j=b.indexOf(J.inputSource);if(j===-1)return;let ut=M[j];ut!==void 0&&(ut.update(J.inputSource,J.frame,c||o),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",K);for(let J=0;J<M.length;J++){let j=b[J];j!==null&&(b[J]=null,M[J].disconnect(j))}L=null,F=null,m.reset();for(let J in p)delete p[J];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,v=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(E.width,E.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Ft=null,ft=null;S.depth&&(ft=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=S.stencil?Jr:Xi,Ft=S.stencil?Oo:Li);let dt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new $n(u.textureWidth,u.textureHeight,{format:bi,type:Qn,depthTexture:new kr(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new $n(f.framebufferWidth,f.framebufferHeight,{format:bi,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(J){for(let j=0;j<J.removed.length;j++){let ut=J.removed[j],Ft=b.indexOf(ut);Ft>=0&&(b[Ft]=null,M[Ft].disconnect(ut))}for(let j=0;j<J.added.length;j++){let ut=J.added[j],Ft=b.indexOf(ut);if(Ft===-1){for(let dt=0;dt<M.length;dt++)if(dt>=b.length){b.push(ut),Ft=dt;break}else if(b[dt]===null){b[dt]=ut,Ft=dt;break}if(Ft===-1)break}let ft=M[Ft];ft&&ft.connect(ut)}}let Y=new H,R=new H;function Q(J,j,ut){Y.setFromMatrixPosition(j.matrixWorld),R.setFromMatrixPosition(ut.matrixWorld);let Ft=Y.distanceTo(R),ft=j.projectionMatrix.elements,dt=ut.projectionMatrix.elements,wt=ft[14]/(ft[10]-1),At=ft[14]/(ft[10]+1),Gt=(ft[9]+1)/ft[5],Qt=(ft[9]-1)/ft[5],V=(ft[8]-1)/ft[0],ee=(dt[8]+1)/dt[0],qt=wt*V,ye=wt*ee,Wt=Ft/(-V+ee),ue=Wt*-V;if(j.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ue),J.translateZ(Wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ft[10]===-1)J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let O=wt+Wt,Se=At+Wt,Yt=qt-ue,P=ye+(Ft-ue),y=Gt*At/Se*O,k=Qt*At/Se*O;J.projectionMatrix.makePerspective(Yt,P,y,k,O,Se),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function yt(J,j){j===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(j.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let j=J.near,ut=J.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),B.near=D.near=C.near=j,B.far=D.far=C.far=ut,(L!==B.near||F!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,F=B.far),B.layers.mask=J.layers.mask|6,C.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let Ft=J.parent,ft=B.cameras;yt(B,Ft);for(let dt=0;dt<ft.length;dt++)yt(ft[dt],Ft);ft.length===2?Q(B,C,D):B.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),bt(J,B,Ft)};function bt(J,j,ut){ut===null?J.matrix.copy(j.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(j.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return p[J]};let Vt=null;function Bt(J,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ft=!1;ut.length!==B.cameras.length&&(B.cameras.length=0,Ft=!0);for(let At=0;At<ut.length;At++){let Gt=ut[At],Qt=null;if(f!==null)Qt=f.getViewport(Gt);else{let ee=d.getViewSubImage(u,Gt);Qt=ee.viewport,At===0&&(t.setRenderTargetTextures(v,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(v))}let V=I[At];V===void 0&&(V=new gn,V.layers.enable(At),V.viewport=new Oe,I[At]=V),V.matrix.fromArray(Gt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Gt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),At===0&&(B.matrix.copy(V.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ft===!0&&B.cameras.push(V)}let ft=i.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let At=d.getDepthInformation(ut[0]);At&&At.isValid&&At.texture&&m.init(At,i.renderState)}if(ft&&ft.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let At=0;At<ut.length;At++){let Gt=ut[At].camera;if(Gt){let Qt=p[Gt];Qt||(Qt=new qa,p[Gt]=Qt);let V=d.getCameraImage(Gt);Qt.sourceTexture=V}}}}for(let ut=0;ut<M.length;ut++){let Ft=b[ut],ft=M[ut];Ft!==null&&ft!==void 0&&ft.update(Ft,j,c||o)}Vt&&Vt(J,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Ht=new A0;Ht.setAnimationLoop(Bt),this.setAnimationLoop=function(J){Vt=J},this.dispose=function(){}}},Z1=new Re,D0=new Kt;D0.set(-1,0,0,0,1,0,0,0,1);function J1(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,md(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),A=S.envMap,v=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(D0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $1(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let b=M.program;n.uniformBlockBinding(v,b)}function c(v,M){let b=i[v.id];b===void 0&&(m(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",S));let E=M.program;n.updateUBOMapping(v,E);let x=t.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){let M=d();v.__bindingPointIndex=M;let b=r.createBuffer(),E=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,b),b}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=i[v.id],b=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let x=0,w=b.length;x<w;x++){let C=b[x];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)f(C[D],x,D,E);else f(C,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,M,b,E){if(_(v,M,b,E)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let I=w[D],B=p(I);g(I,v.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function g(v,M,b){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,b)}function _(v,M,b,E){let x=v.value,w=M+"_"+b;if(E[w]===void 0)return typeof x=="number"||typeof x=="boolean"?E[w]=x:ArrayBuffer.isView(x)?E[w]=x.slice():E[w]=x.clone(),!0;{let C=E[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){let M=v.uniforms,b=0,E=16;for(let w=0,C=M.length;w<C;w++){let D=Array.isArray(M[w])?M[w]:[M[w]];for(let I=0,B=D.length;I<B;I++){let L=D[I],F=Array.isArray(L.value)?L.value:[L.value];for(let G=0,z=F.length;G<z;G++){let K=F[G],Y=p(K),R=b%E,Q=R%Y.boundary,yt=R+Q;b+=Q,yt!==0&&E-yt<Y.storage&&(b+=E-yt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=Y.storage}}}let x=b%E;return x>0&&(b+=E-x),v.__size=b,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",v),M}function S(v){let M=v.target;M.removeEventListener("dispose",S);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function A(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:A}}var K1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function Q1(){return Ki===null&&(Ki=new Ha(K1,16,16,$r,Di),Ki.name="DFG_LUT",Ki.minFilter=_n,Ki.magFilter=_n,Ki.wrapS=Hi,Ki.wrapT=Hi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var $h=class{constructor(t={}){let{canvas:e=Qg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Qn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=f,m=new Set([ph,dh,fh]),p=new Set([Qn,Li,Uo,Oo,ch,hh]),S=new Uint32Array(4),A=new Int32Array(4),v=new H,M=null,b=null,E=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,I=null,B=null,L=null,F=null;this._outputColorSpace=Pn;let G=0,z=0,K=null,Y=-1,R=null,Q=new Oe,yt=new Oe,bt=null,Vt=new Jt(0),Bt=0,Ht=e.width,J=e.height,j=1,ut=null,Ft=null,ft=new Oe(0,0,Ht,J),dt=new Oe(0,0,Ht,J),wt=!1,At=new Ao,Gt=!1,Qt=!1,V=new Re,ee=new H,qt=new Oe,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function ue(){return K===null?j:1}let O=n;function Se(T,U){return e.getContext(T,U)}let Yt,P,y,k,X,$,ct,ot,tt,nt,mt,Rt,gt,pt,lt,Nt,kt,N,ht,et,_t,vt,it;try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",zt,!1),O===null){let U="webgl2";if(O=Se(U,T),O===null)throw Se(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(T){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),Zt("WebGLRenderer: "+T.message),T}function at(){Yt=new sb(O),Yt.init(),_t=new X1(O,Yt),P=new JM(O,Yt,t,_t),y=new H1(O,Yt),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=O.createFramebuffer(),L=O.createFramebuffer(),F=O.createFramebuffer(),k=new lb(O),X=new R1,$=new W1(O,Yt,y,X,P,_t,k),ct=new rb(C),ot=new hy(O),vt=new YM(O,ot),tt=new ob(O,ot,k,vt),nt=new hb(O,tt,ot,vt,k),N=new cb(O,P,$),lt=new $M(X),mt=new C1(C,ct,Yt,P,vt,lt),Rt=new J1(C,X),gt=new I1,pt=new F1(Yt),kt=new qM(C,ct,y,nt,g,l),Nt=new G1(C,nt,P),it=new $1(O,k,P,y),ht=new ZM(O,Yt,k),et=new ab(O,Yt,k),k.programs=mt.programs,C.capabilities=P,C.extensions=Yt,C.properties=X,C.renderLists=gt,C.shadowMap=Nt,C.state=y,C.info=k}_!==Qn&&(w=new fb(_,e.width,e.height,a,i,s));let rt=new Bd(C,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=Yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(Ht,J,!1))},this.getSize=function(T){return T.set(Ht,J)},this.setSize=function(T,U,Z=!0){if(rt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=T,J=U,e.width=Math.floor(T*j),e.height=Math.floor(U*j),Z===!0&&(e.style.width=T+"px",e.style.height=U+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Ht*j,J*j).floor()},this.setDrawingBufferSize=function(T,U,Z){Ht=T,J=U,j=Z,e.width=Math.floor(T*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===Qn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(ft)},this.setViewport=function(T,U,Z,W){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,U,Z,W),y.viewport(Q.copy(ft).multiplyScalar(j).round())},this.getScissor=function(T){return T.copy(dt)},this.setScissor=function(T,U,Z,W){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,U,Z,W),y.scissor(yt.copy(dt).multiplyScalar(j).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(T){y.setScissorTest(wt=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){Ft=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Z=!0){let W=0;if(T){let q=!1;if(K!==null){let xt=K.texture.format;q=m.has(xt)}if(q){let xt=K.texture.type,Et=p.has(xt),Mt=kt.getClearColor(),It=kt.getClearAlpha(),Ut=Mt.r,ne=Mt.g,ce=Mt.b;Et?(S[0]=Ut,S[1]=ne,S[2]=ce,S[3]=It,O.clearBufferuiv(O.COLOR,0,S)):(A[0]=Ut,A[1]=ne,A[2]=ce,A[3]=It,O.clearBufferiv(O.COLOR,0,A))}else W|=O.COLOR_BUFFER_BIT}U&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),kt.dispose(),gt.dispose(),pt.dispose(),X.dispose(),ct.dispose(),nt.dispose(),vt.dispose(),it.dispose(),mt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ie),rt.removeEventListener("sessionend",Me),fe.stop()};function Ot(T){T.preventDefault(),dd("WebGLRenderer: Context Lost."),D=!0}function st(){dd("WebGLRenderer: Context Restored."),D=!1;let T=k.autoReset,U=Nt.enabled,Z=Nt.autoUpdate,W=Nt.needsUpdate,q=Nt.type;at(),k.autoReset=T,Nt.enabled=U,Nt.autoUpdate=Z,Nt.needsUpdate=W,Nt.type=q}function zt(T){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){let U=T.target;U.removeEventListener("dispose",Pt),$t(U)}function $t(T){Ye(T),X.remove(T)}function Ye(T){let U=X.get(T).programs;U!==void 0&&(U.forEach(function(Z){mt.releaseProgram(Z)}),T.isShaderMaterial&&mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Z,W,q,xt){U===null&&(U=ye);let Et=q.isMesh&&q.matrixWorld.determinantAffine()<0,Mt=an(T,U,Z,W,q);y.setMaterial(W,Et);let It=Z.index,Ut=1;if(W.wireframe===!0){if(It=tt.getWireframeAttribute(Z),It===void 0)return;Ut=2}let ne=Z.drawRange,ce=Z.attributes.position,Lt=ne.start*Ut,me=(ne.start+ne.count)*Ut;xt!==null&&(Lt=Math.max(Lt,xt.start*Ut),me=Math.min(me,(xt.start+xt.count)*Ut)),It!==null?(Lt=Math.max(Lt,0),me=Math.min(me,It.count)):ce!=null&&(Lt=Math.max(Lt,0),me=Math.min(me,ce.count));let Je=me-Lt;if(Je<0||Je===1/0)return;vt.setup(q,W,Mt,Z,It);let Le,be=ht;if(It!==null&&(Le=ot.get(It),be=et,be.setIndex(Le)),q.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*ue()),be.setMode(O.LINES)):be.setMode(O.TRIANGLES);else if(q.isLine){let yn=W.linewidth;yn===void 0&&(yn=1),y.setLineWidth(yn*ue()),q.isLineSegments?be.setMode(O.LINES):q.isLineLoop?be.setMode(O.LINE_LOOP):be.setMode(O.LINE_STRIP)}else q.isPoints?be.setMode(O.POINTS):q.isSprite&&be.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))be.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let yn=q._multiDrawStarts,Tt=q._multiDrawCounts,Nn=q._multiDrawCount,pe=It?ot.get(It).bytesPerElement:1,di=X.get(W).currentProgram.getUniforms();for(let Ui=0;Ui<Nn;Ui++)di.setValue(O,"_gl_DrawID",Ui),be.render(yn[Ui]/pe,Tt[Ui])}else if(q.isInstancedMesh)be.renderInstances(Lt,Je,q.count);else if(Z.isInstancedBufferGeometry){let yn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Tt=Math.min(Z.instanceCount,yn);be.renderInstances(Lt,Je,Tt)}else be.render(Lt,Je)};function oe(T,U,Z,W){I!==null&&T.isNodeMaterial&&I.setObject(W,T),Gt===!0&&lt.setState(T,Z,!1),T.transparent===!0&&T.side===Si&&T.forceSinglePass===!1?(T.side=xn,T.needsUpdate=!0,ke(T,U,W),T.side=qr,T.needsUpdate=!0,ke(T,U,W),T.side=Si):ke(T,U,W)}this.compile=function(T,U,Z=null){Z===null&&(Z=T),I!==null&&I.renderStart(T,U,Z),b=pt.get(Z),b.init(U),x.push(b),Z.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),T!==Z&&T.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),Qt=this.localClippingEnabled,Gt=lt.init(this.clippingPlanes,Qt),Gt===!0&&lt.setGlobalState(this.clippingPlanes,U),I!==null&&Nt.render(b.state.shadowsArray,Z,U);let W=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let xt=q.material;if(xt)if(Array.isArray(xt))for(let Et=0;Et<xt.length;Et++){let Mt=xt[Et];oe(Mt,Z,U,q),W.add(Mt)}else oe(xt,Z,U,q),W.add(xt)}),b=x.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(T,U,Z=null){let W=this.compile(T,U,Z);return new Promise(q=>{function xt(){if(W.forEach(function(Et){let It=X.get(Et).currentProgram;(It===void 0||It.isReady())&&W.delete(Et)}),W.size===0){q(T);return}setTimeout(xt,10)}Yt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Pe=null;function on(T){Pe&&Pe(T)}function Ie(){fe.stop()}function Me(){fe.start()}let fe=new A0;fe.setAnimationLoop(on),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(T){Pe=T,rt.setAnimationLoop(T),T===null?fe.stop():fe.start()},rt.addEventListener("sessionstart",Ie),rt.addEventListener("sessionend",Me),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(T,U);let Z=rt.enabled===!0&&rt.isPresenting===!0,W=w!==null&&(K===null||Z)&&w.begin(C,K);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,U,K),b=pt.get(T,x.length),b.init(U),b.state.textureUnits=$.getTextureUnits(),x.push(b),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),At.setFromProjectionMatrix(V,Pi,U.reversedDepth),Qt=this.localClippingEnabled,Gt=lt.init(this.clippingPlanes,Qt),M=gt.get(T,E.length),M.init(),E.push(M),rt.enabled===!0&&rt.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&Ln(Et,U,-1/0,C.sortObjects)}Ln(T,U,0,C.sortObjects),M.finish(),I!==null&&I.updateLights(b.state.lightsArray),C.sortObjects===!0&&M.sort(ut,Ft),Wt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Wt&&kt.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Gt===!0&&lt.beginShadows();let q=b.state.shadowsArray;if(Nt.render(q,T,U),Gt===!0&&lt.endShadows(),(W&&w.hasRenderPass())===!1){let Et=M.opaque,Mt=M.transmissive;if(b.setupLights(),U.isArrayCamera){let It=U.cameras;if(Mt.length>0)for(let Ut=0,ne=It.length;Ut<ne;Ut++){let ce=It[Ut];vn(Et,Mt,T,ce)}Wt&&kt.render(T);for(let Ut=0,ne=It.length;Ut<ne;Ut++){let ce=It[Ut];Ae(M,T,ce,ce.viewport)}}else Mt.length>0&&vn(Et,Mt,T,U),Wt&&kt.render(T),Ae(M,T,U)}K!==null&&z===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),W&&w.end(C),T.isScene===!0&&T.onAfterRender(C,T,U),vt.resetDefaultState(),Y=-1,R=null,x.pop(),x.length>0?(b=x[x.length-1],$.setTextureUnits(b.state.textureUnits),Gt===!0&&lt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,I!==null&&I.renderEnd()};function Ln(T,U,Z,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(At)){W&&qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);let Et=nt.update(T),Mt=T.material;Mt.visible&&M.push(T,Et,Mt,Z,qt.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(At))){let Et=nt.update(T),Mt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qt.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),qt.copy(Et.boundingSphere.center)),qt.applyMatrix4(T.matrixWorld).applyMatrix4(V)),Array.isArray(Mt)){let It=Et.groups;for(let Ut=0,ne=It.length;Ut<ne;Ut++){let ce=It[Ut],Lt=Mt[ce.materialIndex];Lt&&Lt.visible&&M.push(T,Et,Lt,Z,qt.z,ce,U)}}else Mt.visible&&M.push(T,Et,Mt,Z,qt.z,null,U)}}let xt=T.children;for(let Et=0,Mt=xt.length;Et<Mt;Et++)Ln(xt[Et],U,Z,W)}function Ae(T,U,Z,W){let{opaque:q,transmissive:xt,transparent:Et}=T;b.setupLightsView(Z),Gt===!0&&lt.setGlobalState(C.clippingPlanes,Z),W&&y.viewport(Q.copy(W)),q.length>0&&Dn(q,U,Z),xt.length>0&&Dn(xt,U,Z),Et.length>0&&Dn(Et,U,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function vn(T,U,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let Lt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new $n(1,1,{generateMipmaps:!0,type:Lt?Di:Qn,minFilter:Zr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let xt=b.state.transmissionRenderTarget[W.id],Et=W.viewport||Q;xt.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let Mt=C.getRenderTarget(),It=C.getActiveCubeFace(),Ut=C.getActiveMipmapLevel();C.setRenderTarget(xt),C.getClearColor(Vt),Bt=C.getClearAlpha(),Bt<1&&C.setClearColor(16777215,.5),C.clear(),Wt&&kt.render(Z);let ne=C.toneMapping;C.toneMapping=Ii;let ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Gt===!0&&lt.setGlobalState(C.clippingPlanes,W),Dn(T,Z,W),$.updateMultisampleRenderTarget(xt),$.updateRenderTargetMipmap(xt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let me=0,Je=U.length;me<Je;me++){let Le=U[me],{object:be,geometry:yn,material:Tt,group:Nn}=Le;if(Tt.side===Si&&be.layers.test(W.layers)){let pe=Tt.side;Tt.side=xn,Tt.needsUpdate=!0,Ze(be,Z,W,yn,Tt,Nn),Tt.side=pe,Tt.needsUpdate=!0,Lt=!0}}Lt===!0&&($.updateMultisampleRenderTarget(xt),$.updateRenderTargetMipmap(xt))}C.setRenderTarget(Mt,It,Ut),C.setClearColor(Vt,Bt),ce!==void 0&&(W.viewport=ce),C.toneMapping=ne}function Dn(T,U,Z){let W=U.isScene===!0?U.overrideMaterial:null;for(let q=0,xt=T.length;q<xt;q++){let Et=T[q],{object:Mt,geometry:It,group:Ut}=Et,ne=Et.material;ne.allowOverride===!0&&W!==null&&(ne=W),Mt.layers.test(Z.layers)&&Ze(Mt,U,Z,It,ne,Ut)}}function Ze(T,U,Z,W,q,xt){I!==null&&q.isNodeMaterial&&I.setObject(T,q),T.onBeforeRender(C,U,Z,W,q,xt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(C,U,Z,W,T,xt),q.transparent===!0&&q.side===Si&&q.forceSinglePass===!1?(q.side=xn,q.needsUpdate=!0,C.renderBufferDirect(Z,U,W,q,T,xt),q.side=qr,q.needsUpdate=!0,C.renderBufferDirect(Z,U,W,q,T,xt),q.side=Si):C.renderBufferDirect(Z,U,W,q,T,xt),T.onAfterRender(C,U,Z,W,q,xt)}function ke(T,U,Z){U.isScene!==!0&&(U=ye);let W=X.get(T),q=b.state.lights,xt=b.state.shadowsArray,Et=q.state.version,Mt=mt.getParameters(T,q.state,xt,U,Z,b.state.lightProbeGridArray),It=mt.getProgramCacheKey(Mt),Ut=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let ne=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=ct.get(T.envMap||W.environment,ne),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Pt),Ut=new Map,W.programs=Ut);let ce=Ut.get(It);if(ce!==void 0){if(W.currentProgram===ce&&W.lightsStateVersion===Et)return Ni(T,Mt),ce}else Mt.uniforms=mt.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,Z,Mt),T.onBeforeCompile(Mt,C),ce=mt.acquireProgram(Mt,It),Ut.set(It,ce),W.uniforms=Mt.uniforms;let Lt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Ni(T,Mt),W.needsLights=fi(T),W.lightsStateVersion=Et,W.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.sunLights.value=q.state.sun,Lt.sunLightShadows.value=q.state.sunShadow,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.sunShadowMatrix.value=q.state.sunShadowMatrix,Lt.sunShadowCascade.value=q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=ce,W.uniformsList=null,ce}function tn(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Vo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ni(T,U){let Z=X.get(T);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Ds(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Z=0,W=T.length;Z<W;Z++){let q=T[Z];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function an(T,U,Z,W,q){U.isScene!==!0&&(U=ye),$.resetTextureUnits();let xt=U.fog,Et=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Mt=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:he.workingColorSpace,It=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ut=ct.get(W.envMap||Et,It),ne=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ce=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!Z.morphAttributes.position,me=!!Z.morphAttributes.normal,Je=!!Z.morphAttributes.color,Le=Ii;W.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=C.toneMapping);let be=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yn=be!==void 0?be.length:0,Tt=X.get(W),Nn=b.state.lights;if(Gt===!0&&(Qt===!0||T!==R)){let Ce=T===R&&W.id===Y;lt.setState(W,T,Ce)}let pe=!1;W.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Nn.state.version||Tt.outputColorSpace!==Mt||q.isBatchedMesh&&Tt.batching===!1||!q.isBatchedMesh&&Tt.batching===!0||q.isBatchedMesh&&Tt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Tt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Tt.instancing===!1||!q.isInstancedMesh&&Tt.instancing===!0||q.isSkinnedMesh&&Tt.skinning===!1||!q.isSkinnedMesh&&Tt.skinning===!0||q.isInstancedMesh&&Tt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Tt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Tt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Tt.instancingMorph===!1&&q.morphTexture!==null||Tt.envMap!==Ut||W.fog===!0&&Tt.fog!==xt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==lt.numPlanes||Tt.numIntersection!==lt.numIntersection)||Tt.vertexAlphas!==ne||Tt.vertexTangents!==ce||Tt.morphTargets!==Lt||Tt.morphNormals!==me||Tt.morphColors!==Je||Tt.toneMapping!==Le||Tt.morphTargetsCount!==yn||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Tt.__version=W.version);let di=Tt.currentProgram;pe===!0&&(di=ke(W,U,q),I&&W.isNodeMaterial&&I.onUpdateProgram(W,di,Tt));let Ui=!1,_r=!1,Us=!1,ve=di.getUniforms(),Xe=Tt.uniforms;if(y.useProgram(di.program)&&(Ui=!0,_r=!0,Us=!0),W.id!==Y&&(Y=W.id,_r=!0),Tt.needsLights){let Ce=Ds(b.state.lightProbeGridArray,q);Tt.lightProbeGrid!==Ce&&(Tt.lightProbeGrid=Ce,_r=!0)}if(Ui||R!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ve.setValue(O,"projectionMatrix",T.projectionMatrix),ve.setValue(O,"viewMatrix",T.matrixWorldInverse);let vr=ve.map.cameraPosition;vr!==void 0&&vr.setValue(O,ee.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&ve.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,_r=!0,Us=!0)}if(Tt.needsLights&&(Nn.state.sunShadowMap.length>0&&ve.setValue(O,"sunShadowMap",Nn.state.sunShadowMap,$),Nn.state.directionalShadowMap.length>0&&ve.setValue(O,"directionalShadowMap",Nn.state.directionalShadowMap,$),Nn.state.spotShadowMap.length>0&&ve.setValue(O,"spotShadowMap",Nn.state.spotShadowMap,$),Nn.state.pointShadowMap.length>0&&ve.setValue(O,"pointShadowMap",Nn.state.pointShadowMap,$)),q.isSkinnedMesh){ve.setOptional(O,q,"bindMatrix"),ve.setOptional(O,q,"bindMatrixInverse");let Ce=q.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ve.setValue(O,"boneTexture",Ce.boneTexture,$))}q.isBatchedMesh&&(ve.setOptional(O,q,"batchingTexture"),ve.setValue(O,"batchingTexture",q._matricesTexture,$),ve.setOptional(O,q,"batchingIdTexture"),ve.setValue(O,"batchingIdTexture",q._indirectTexture,$),ve.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&ve.setValue(O,"batchingColorTexture",q._colorsTexture,$));let xr=Z.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&N.update(q,Z,di),(_r||Tt.receiveShadow!==q.receiveShadow)&&(Tt.receiveShadow=q.receiveShadow,ve.setValue(O,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Xe.envMapIntensity.value=U.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=Q1()),_r){if(ve.setValue(O,"toneMappingExposure",C.toneMappingExposure),Tt.needsLights&&We(Xe,Us),xt&&W.fog===!0&&Rt.refreshFogUniforms(Xe,xt),Rt.refreshMaterialUniforms(Xe,W,j,J,b.state.transmissionRenderTarget[T.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ce=Tt.lightProbeGrid;Xe.probesSH.value=Ce.texture,Xe.probesMin.value.copy(Ce.boundingBox.min),Xe.probesMax.value.copy(Ce.boundingBox.max),Xe.probesResolution.value.copy(Ce.resolution)}Vo.upload(O,tn(Tt),Xe,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vo.upload(O,tn(Tt),Xe,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(O,"center",q.center),ve.setValue(O,"modelViewMatrix",q.modelViewMatrix),ve.setValue(O,"normalMatrix",q.normalMatrix),ve.setValue(O,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let Ce=W.uniformsGroups;for(let vr=0,Os=Ce.length;vr<Os;vr++){let qd=Ce[vr];it.update(qd,di),it.bind(qd,di)}}return di}function We(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function fi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(T,U,Z){let W=X.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=U,X.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Z=X.get(T);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Z=0){K=T,G=U,z=Z;let W=null,q=!1,xt=!1;if(T){let Mt=X.get(T);if(Mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,Mt.__webglFramebuffer),Q.copy(T.viewport),yt.copy(T.scissor),bt=T.scissorTest,y.viewport(Q),y.scissor(yt),y.setScissorTest(bt),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(T);else if(Mt.__hasExternalTextures)$.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ne=T.depthTexture;if(Mt.__boundDepthTexture!==ne){if(ne!==null&&X.has(ne)&&(T.width!==ne.image.width||T.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(T)}}let It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(xt=!0);let Ut=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?W=Ut[U][Z]:W=Ut[U],q=!0):T.samples>0&&$.useMultisampledRTT(T)===!1?W=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?W=Ut[Z]:W=Ut,Q.copy(T.viewport),yt.copy(T.scissor),bt=T.scissorTest}else Q.copy(ft).multiplyScalar(j).floor(),yt.copy(dt).multiplyScalar(j).floor(),bt=wt;if(Z!==0&&(W=B),y.bindFramebuffer(O.FRAMEBUFFER,W)&&y.drawBuffers(T,W),y.viewport(Q),y.scissor(yt),y.setScissorTest(bt),q){let Mt=X.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,Z)}else if(xt){let Mt=U;for(let It=0;It<T.textures.length;It++){let Ut=X.get(T.textures[It]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+It,Ut.__webglTexture,Z,Mt)}}else if(T!==null&&Z!==0){let Mt=X.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,Z)}Y=-1};function Ns(T){let U=X.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=P.textureFormatReadable(T.format),U.__typeReadable=P.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Z,W,q,xt,Et,Mt=0){if(!(T&&T.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It){y.bindFramebuffer(O.FRAMEBUFFER,It);try{let Ut=T.textures[Mt],ne=Ut.format,ce=Ut.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let Lt=Ns(Ut);if(Lt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&Z>=0&&Z<=T.height-q&&O.readPixels(U,Z,W,q,_t.convert(ne),_t.convert(ce),xt)}finally{let Ut=K!==null?X.get(K).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,U,Z,W,q,xt,Et,Mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It)if(U>=0&&U<=T.width-W&&Z>=0&&Z<=T.height-q){y.bindFramebuffer(O.FRAMEBUFFER,It);let Ut=T.textures[Mt],ne=Ut.format,ce=Ut.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let Lt=Ns(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,me),O.bufferData(O.PIXEL_PACK_BUFFER,xt.byteLength,O.STREAM_READ),O.readPixels(U,Z,W,q,_t.convert(ne),_t.convert(ce),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Je=K!==null?X.get(K).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Je);let Le=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await t0(O,Le,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,me),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(me),O.deleteSync(Le),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Z=0){let W=Math.pow(2,-Z),q=Math.floor(T.image.width*W),xt=Math.floor(T.image.height*W),Et=U!==null?U.x:0,Mt=U!==null?U.y:0;$.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Et,Mt,q,xt),y.unbindTexture()},this.copyTextureToTexture=function(T,U,Z=null,W=null,q=0,xt=0){let Et,Mt,It,Ut,ne,ce,Lt,me,Je,Le=T.isCompressedTexture?T.mipmaps[xt]:T.image;if(Z!==null)Et=Z.max.x-Z.min.x,Mt=Z.max.y-Z.min.y,It=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,ne=Z.min.y,ce=Z.isBox3?Z.min.z:0;else{let Xe=Math.pow(2,-q);Et=Math.floor(Le.width*Xe),Mt=Math.floor(Le.height*Xe),T.isDataArrayTexture?It=Le.depth:T.isData3DTexture?It=Math.floor(Le.depth*Xe):It=1,Ut=0,ne=0,ce=0}W!==null?(Lt=W.x,me=W.y,Je=W.z):(Lt=0,me=0,Je=0);let be=_t.convert(U.format),yn=_t.convert(U.type),Tt;U.isData3DTexture?($.setTexture3D(U,0),Tt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Tt=O.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Tt=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Nn=y.getParameter(O.UNPACK_ROW_LENGTH),pe=y.getParameter(O.UNPACK_IMAGE_HEIGHT),di=y.getParameter(O.UNPACK_SKIP_PIXELS),Ui=y.getParameter(O.UNPACK_SKIP_ROWS),_r=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Le.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Le.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),y.pixelStorei(O.UNPACK_SKIP_ROWS,ne),y.pixelStorei(O.UNPACK_SKIP_IMAGES,ce);let Us=T.isDataArrayTexture||T.isData3DTexture,ve=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Xe=X.get(T),xr=X.get(U),Ce=X.get(Xe.__renderTarget),vr=X.get(xr.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,Ce.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Os=0;Os<It;Os++)Us&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(T).__webglTexture,q,ce+Os),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(U).__webglTexture,xt,Je+Os)),O.blitFramebuffer(Ut,ne,Et,Mt,Lt,me,Et,Mt,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||X.has(T)){let Xe=X.get(T),xr=X.get(U);y.bindFramebuffer(O.READ_FRAMEBUFFER,L),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let Ce=0;Ce<It;Ce++)Us?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.__webglTexture,q,ce+Ce):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xe.__webglTexture,q),ve?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xr.__webglTexture,xt,Je+Ce):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xr.__webglTexture,xt),q!==0?O.blitFramebuffer(Ut,ne,Et,Mt,Lt,me,Et,Mt,O.COLOR_BUFFER_BIT,O.NEAREST):ve?O.copyTexSubImage3D(Tt,xt,Lt,me,Je+Ce,Ut,ne,Et,Mt):O.copyTexSubImage2D(Tt,xt,Lt,me,Ut,ne,Et,Mt);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ve?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Tt,xt,Lt,me,Je,Et,Mt,It,be,yn,Le.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Tt,xt,Lt,me,Je,Et,Mt,It,be,Le.data):O.texSubImage3D(Tt,xt,Lt,me,Je,Et,Mt,It,be,yn,Le):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xt,Lt,me,Et,Mt,be,yn,Le.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xt,Lt,me,Le.width,Le.height,be,Le.data):O.texSubImage2D(O.TEXTURE_2D,xt,Lt,me,Et,Mt,be,yn,Le);y.pixelStorei(O.UNPACK_ROW_LENGTH,Nn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe),y.pixelStorei(O.UNPACK_SKIP_PIXELS,di),y.pixelStorei(O.UNPACK_SKIP_ROWS,Ui),y.pixelStorei(O.UNPACK_SKIP_IMAGES,_r),xt===0&&U.generateMipmaps&&O.generateMipmap(Tt),y.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$.setTextureCube(T,0):T.isData3DTexture?$.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$.setTexture2DArray(T,0):$.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){G=0,z=0,K=null,y.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var jh=class extends bs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Vr;t.deleteAttribute("uv");let e=new Ts({side:xn}),n=new Ts,i=new nl(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ee(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new ws(t,n,6),a=new je;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ee(t,Wo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ee(t,Wo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ee(t,Wo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ee(t,Wo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ee(t,Wo(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ee(t,Wo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Wo(r){return new Ka({color:0,emissive:16777215,emissiveIntensity:r})}var Xo=[[1,0],[1.05,.04],[1.06,.12],[1.03,.2],[.99,.28],[1,.45],[1.01,.62],[.98,.8],[.92,.97],[.8,1.12],[.62,1.26],[.4,1.36],[.18,1.41],[0,1.42]],zd=1.42,_l=[[0,{y:-6.2,rx:.1,ry:-.5}],[.05,{y:-6.2,rx:.1,ry:-.5}],[.19,{y:.15,rx:.12,ry:.15}],[.32,{y:.15,rx:.1,ry:.85}],[.46,{y:-.05,rx:.58,ry:1.45}],[.58,{y:-.05,rx:.52,ry:2.15}],[.72,{y:.1,rx:.14,ry:2.85}],[.86,{y:.2,rx:.1,ry:3.45}],[1,{y:6.8,rx:.05,ry:4.1}]],j1=r=>r*r*(3-2*r);function N0(r){for(let t=1;t<_l.length;t++){let[e,n]=_l[t],[i,s]=_l[t-1];if(r<=e){let o=j1(Bo.clamp((r-i)/(e-i||1),0,1)),a={};for(let l in s)a[l]=s[l]+(n[l]-s[l])*o;return a}}return{..._l[_l.length-1][1]}}function U0(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function tw(){let r=0;for(let t=1;t<Xo.length;t++)r+=Math.hypot(Xo[t][0]-Xo[t-1][0],Xo[t][1]-Xo[t-1][1]);return r}function kd(r,t,e){let n=document.createElement("canvas");n.width=r.x,n.height=r.y;let i=n.getContext("2d"),s=r.x/2,o=r.y/2,a=i.createRadialGradient(s*.7,o*.6,0,s,o,Math.max(s,o)),l=new Jt(t),c=l.clone().lerp(new Jt(16777215),.45),h=l.clone().multiplyScalar(.62);return a.addColorStop(0,`#${c.getHexString()}`),a.addColorStop(.45,`#${l.getHexString()}`),a.addColorStop(1,`#${h.getHexString()}`),i.fillStyle=a,i.beginPath(),i.ellipse(s,o,s*.92,o*.92,0,0,Math.PI*2),i.fill(),n}function ew(r){let t=r?1024:2048,e=t/2,n=2*Math.PI*1/t/(tw()/e),i=r?7:9,s=i/n,o=U0(11),a=document.createElement("canvas");a.width=t,a.height=e;let l=a.getContext("2d");l.fillStyle="#f00",l.fillRect(0,0,t,e);let c=b=>(1-b)*e;l.fillStyle="#00f",l.fillRect(0,c(.13),t,c(0)-c(.13)),l.fillRect(0,c(.6),t,e*.012),l.fillRect(0,c(.24),t,e*.012),(b=>{l.save(),l.scale(1/n,1),b(t*n),l.restore()})(b=>{l.fillStyle="#00f",l.textAlign="center",l.textBaseline="middle",l.font=`700 ${Math.round(e*.2)}px 'Source Serif 4', Georgia, serif`;for(let x of[.25,.75])l.fillText("\xC0T\xC8GB\xC8",x*b,c(.42));let E=(x,w,C)=>{l.lineWidth=C*.16,l.strokeStyle="#00f";for(let D of[0,Math.PI]){l.beginPath();for(let I=0;I<3;I++){let B=D-Math.PI/2+I*2*Math.PI/3,L=x+Math.cos(B)*C,F=w+Math.sin(B)*C;I?l.lineTo(L,F):l.moveTo(L,F)}l.closePath(),l.stroke()}};for(let x of[0,.5,1])E(x*b,c(.42),e*.13);for(let x=0;x<10;x++){let w=(x+.5)/10*b,C=c(.78+x%2*.06);l.fillStyle="#00f",l.beginPath(),l.moveTo(w,C-e*.035),l.lineTo(w+e*.025,C),l.lineTo(w,C+e*.035),l.lineTo(w-e*.025,C),l.closePath(),l.fill()}});let d=l.getImageData(0,0,t,e).data,u=document.createElement("canvas");u.width=t,u.height=e;let f=u.getContext("2d");f.fillStyle="#6a3a12",f.fillRect(0,0,t,e);let g=document.createElement("canvas");g.width=t,g.height=e;let _=g.getContext("2d");_.fillStyle="#000",_.fillRect(0,0,t,e);let m={x:Math.ceil(s),y:Math.ceil(i)},p=[15901498,15637036,16100936,15241514,16234586,15373876].map(b=>kd(m,b)),S=[2891151,3417244,2496643,3877798].map(b=>kd(m,b)),A=kd(m,16777215);for(let b=0,E=0;E<e;b++,E+=i){let x=b%2?s/2:0;for(let w=-x;w<t;w+=s){let C=Math.min(t-1,Math.max(0,Math.round(w+s/2))),D=Math.min(e-1,Math.round(E+i/2)),B=d[(D*t+C)*4+2]>128?S:p;f.drawImage(B[Math.floor(o()*B.length)],w,E),_.drawImage(A,w,E)}}let v=new Co(u);v.colorSpace=Pn,v.wrapS=Ms,v.anisotropy=4;let M=new Co(g);return M.wrapS=Ms,{map:v,bumpMap:M}}function O0(r,{lowPower:t=!1,reduced:e=!1}={}){let n=new $h({canvas:r,antialias:!t,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,t?1.25:1.75)),n.outputColorSpace=Pn,n.toneMapping=rl,n.toneMappingExposure=1,n.setClearColor(0,0);let i=new bs,s=new Go(n);i.environment=s.fromScene(new jh,.04).texture,i.environmentIntensity=.5;let o=new gn(28,1,.1,100);o.position.set(0,.6,10),o.lookAt(0,.1,0);let a=new Lo(16773590,2.2);a.position.set(-3.5,5,5);let l=new Lo(16771e3,1.4);l.position.set(4,3,-4),i.add(a,l,new ja(16769696,5909006,.55));let c=new Wi,h=new Wi;c.add(h),i.add(c);let d=U0(5),{map:u,bumpMap:f}=ew(t),g=new Ee(new Za(Xo.map(([dt,wt])=>new jt(dt,wt)),t?64:96),new Gr({map:u,bumpMap:f,bumpScale:3,roughness:.4,clearcoat:.45,clearcoatRoughness:.35,side:Si}));h.add(g);let _=new Gr({color:3088790,roughness:.3,clearcoat:.6}),m=new Ee(new Ya(.04,.05,.14,12),_);m.position.y=zd+.05;let p=new Ee(new Ro(.12,24,16),_);p.position.y=zd+.2;let S=new Ee(new $a(.07,.022,8,24),new Gr({color:15905607,roughness:.35}));S.rotation.x=Math.PI/2,S.position.y=zd+.08,h.add(m,p,S);let A=t?64:112,v=t?30:42,M=.044,b=t?44:62,E=A*v+2*b,x=new Ro(1,8,6),w=new Gr({roughness:.3,clearcoat:.5,clearcoatRoughness:.3}),C=new ws(x,w,E);C.frustumCulled=!1;let D=[13115434,15974714,2833326,16183522,3050327,15235870,7023238,15901498].map(dt=>new Jt(dt)),I=[],B=0;for(let dt=0;dt<A;dt++){let wt=dt/A*Math.PI*2+d()*.02,At=[0,1,2].map(()=>D[Math.floor(d()*D.length)]);I.push({a:wt,r:.99,count:v,start:B,size:.019,len:1,phase:d()*6.28});for(let Gt=0;Gt<v;Gt++){let Qt=d()<.7?At[Math.floor(d()*3)]:D[Math.floor(d()*D.length)];C.setColorAt(B++,Qt)}}for(let dt of[0,Math.PI]){I.push({a:dt+.5*Math.PI,r:1.02,count:b,start:B,size:.027,len:1,phase:d()*6.28});for(let wt=0;wt<b;wt++)C.setColorAt(B++,new Jt(wt%7===6?13115434:wt%2?15313210:13207082))}i.add(C);let L=N0(0),F={...L},G={...L},z={w:0,wv:0,f:0,fv:0},K={speed:0},Y=new je,R=new H,Q=new H,yt=new H,bt=new H,Vt=!1;function Bt(){let dt=r.clientWidth,wt=r.clientHeight;n.setSize(dt,wt,!1),o.aspect=dt/wt,o.updateProjectionMatrix(),Vt=o.aspect<.8,c.scale.setScalar(Vt?Math.max(.6,o.aspect*1.3):.95),c.position.y=Vt?-.15:-.42}function Ht(dt,wt){let At=e?1:1-Math.exp(-dt*4);for(let qt in L)F[qt]+=(L[qt]-F[qt])*At;let Gt=e?0:Math.sin(wt*.5)*.02;h.position.y=F.y,h.rotation.set(F.rx+Gt,F.ry,0),h.updateMatrixWorld(!0);let Qt=dt>0?(F.ry-G.ry)/dt:0,V=dt>0?(F.y-G.y)/dt:0;if(G.ry=F.ry,G.y=F.y,!e){let qt=Bo.clamp(-Qt*.6,-1.2,1.2);z.wv+=(14*(qt-z.w)-2.4*z.wv)*dt,z.w+=z.wv*dt;let ye=Bo.clamp(Math.abs(V)*.08,0,1);z.fv+=(10*(ye-z.f)-2*z.fv)*dt,z.f+=z.fv*dt}K.speed=Math.min(1,Math.abs(z.wv)*.4+Math.abs(z.fv)*.6);let ee=c.scale.x;for(let qt of I){bt.set(Math.cos(qt.a)*qt.r,.02,Math.sin(qt.a)*qt.r),R.copy(bt).applyMatrix4(h.matrixWorld),Q.set(-Math.sin(qt.a),0,Math.cos(qt.a)).transformDirection(h.matrixWorld),Q.y=0,Q.normalize(),yt.set(Math.cos(qt.a),0,Math.sin(qt.a)).transformDirection(h.matrixWorld),yt.y=0,yt.normalize();let ye=e?0:Math.sin(wt*.7+qt.phase)*.015;for(let Wt=0;Wt<qt.count;Wt++){let ue=Wt*M*ee,O=(z.w+ye)*Math.pow(ue,1.4)*.55,Se=.035*ue+z.f*Math.pow(ue,1.2)*.35*(.6+.4*Math.sin(qt.phase));Y.position.set(R.x+Q.x*O+yt.x*Se,R.y-ue,R.z+Q.z*O+yt.z*Se),Y.scale.setScalar(qt.size*ee),Y.updateMatrix(),C.setMatrixAt(qt.start+Wt,Y.matrix)}}C.instanceMatrix.needsUpdate=!0}let J=performance.now(),j=!1,ut=0,Ft=new Set;function ft(dt){let wt=Math.min((dt-J)/1e3,.05);J=dt,Ht(wt,dt/1e3),n.render(i,o),Ft.forEach(At=>At(F,K)),ut=j?requestAnimationFrame(ft):0}return Bt(),Ht(0,0),n.compile(i,o),n.render(i,o),{setProgress(dt){L=N0(Bo.clamp(dt,0,1))},onFrame(dt){Ft.add(dt)},resize:Bt,start(){j||(j=!0,J=performance.now(),ut=requestAnimationFrame(ft))},stop(){j=!1,cancelAnimationFrame(ut)}}}var F0=r=>Math.min(1,Math.max(0,r)),B0=r=>1-Math.pow(1-r,3);function z0(r,{blur:t=!0}={}){let e=r.textContent.trim(),n=r.getAttribute("lang");r.textContent="";let i=[];for(let a=0;a<=3;a++){let l=document.createElement("span");l.className="ghost__layer",l.textContent=e,n&&(l.lang=n),a>0&&l.setAttribute("aria-hidden","true"),r.appendChild(l),i.push(l)}let s=!1;function o(){r.style.fontSize="";let a=i[0],l=r.style.visibility;r.style.visibility="hidden",r.classList.add("is-live");let c=parseFloat(getComputedStyle(r).fontSize);for(let h=0;h<20&&a.scrollWidth>a.clientWidth+1;h++)c*=.95,r.style.fontSize=`${c}px`;r.classList.remove("is-live"),r.style.visibility=l}return o(),document.fonts?.ready.then(o),addEventListener("resize",o),function(l,c){let h=F0(l),d=F0(c),u=h>0&&d<1;if(r.classList.toggle("is-live",u),!u)return s=!1,!1;let f=(1-B0(h))*.4-B0(d)*.45;i[0].style.transform=`translate3d(0, ${f}em, 0)`,i[0].style.opacity=String(Math.min(1,h*1.5)*(1-d));let g=Math.max(4*h*(1-h),4*d*(1-d));for(let m=1;m<=3;m++){let p=(1-h)*m*.2+d*m*.16,S=g*(.3-m*.07),A=i[m].style;A.transform=`translate3d(0, ${f+p}em, 0)`,A.opacity=S.toFixed(3),t&&(A.filter=S>.01?`blur(${(m*1.6).toFixed(1)}px)`:"none")}let _=h>=1&&!s;return h>=1&&(s=!0),h<.9&&(s=!1),_}}var k0=["255,248,232","247,226,180","233,201,138","255,236,200"];function V0(r,{count:t=320,reduced:e=!1}={}){let n=r.getContext("2d"),i=0,s=0,o=0,a=!1,l=0,c=0,h=[];function d(_){_.x=Math.random()*i,_.y=s*(.15+Math.random()*.75),_.r=Math.random()<.08?1.6+Math.random()*1.4:.6+Math.random()*1.1,_.c=k0[Math.floor(Math.random()*k0.length)],_.a=.55+Math.random()*.45,_.ph=Math.random()*Math.PI*2,_.sp=.2+Math.random()*.5,_.orb=6+Math.random()*22}function u(){let _=Math.min(window.devicePixelRatio,2);if(i=r.clientWidth,s=r.clientHeight,r.width=Math.round(i*_),r.height=Math.round(s*_),n.setTransform(_,0,0,_,0,0),!h.length)for(let m=0;m<t;m++){let p={};d(p),h.push(p)}}function f(_){let m=Math.min((_-c)/1e3,.05);c=_;let p=Math.min(1,o/.11),S=Math.min(1,Math.max(0,(o-.1)/.09)),A=1-S;if(n.clearRect(0,0,i,s),!(A<=.001))for(let v of h){v.ph+=m*v.sp*(1+p*.8),v.x+=Math.cos(v.ph)*v.orb*m*(1+p),v.y+=(Math.sin(v.ph*.8)*v.orb*.6+4+S*220*v.sp)*m,v.y>s*.98&&(v.y=s*.98),v.x<-10&&(v.x=i+10),v.x>i+10&&(v.x=-10),(v.y<0||S===0&&v.y>s*.96)&&d(v);let M=v.a*A*(.6+p*.4);n.fillStyle=`rgba(${v.c},${M.toFixed(3)})`,n.beginPath(),n.arc(v.x,v.y,v.r,0,Math.PI*2),n.fill()}}function g(_){f(_),l=a?requestAnimationFrame(g):0}return u(),{resize:u,setProgress(_){o=_},start(){a||e||(a=!0,c=performance.now(),l=requestAnimationFrame(g))},stop(){a=!1,cancelAnimationFrame(l)}}}function G0(){let r,t,e,n,i=!1;function s(c){let h=Math.floor(r.sampleRate*c),d=r.createBuffer(1,h,r.sampleRate),u=d.getChannelData(0);for(let f=0;f<h;f++)u[f]=Math.random()<.02?Math.random()*2-1:(Math.random()*2-1)*.08;return d}function o(){let c=r.createBiquadFilter();c.type="lowpass",c.frequency.value=520;let h=r.createGain();h.gain.value=0,h.gain.linearRampToValueAtTime(.07,r.currentTime+6);let d=r.createOscillator(),u=r.createGain();d.frequency.value=.045,u.gain.value=.025,d.connect(u).connect(h.gain),d.start(),c.connect(h).connect(t);for(let[f,g,_]of[[55,"sine",.5],[82.41,"triangle",.22],[110,"sine",.2],[164.81,"sine",.07]])for(let m of[-4,4]){let p=r.createOscillator();p.type=g,p.frequency.value=f,p.detune.value=m;let S=r.createGain();S.gain.value=_,p.connect(S).connect(c),p.start()}}function a(c,h,d){let u=r.createGain();u.gain.setValueAtTime(0,h),u.gain.linearRampToValueAtTime(d,h+.01),u.gain.exponentialRampToValueAtTime(1e-4,h+3.2),u.connect(t);for(let[f,g]of[[1,1],[2.76,.35],[5.4,.12]]){let _=r.createOscillator();_.frequency.value=c*f;let m=r.createGain();m.gain.value=g,_.connect(m).connect(u),_.start(h),_.stop(h+3.3)}}function l(){let c=r.createBufferSource();c.buffer=s(3),c.loop=!0,n=r.createBiquadFilter(),n.type="bandpass",n.frequency.value=4200,n.Q.value=1.2,e=r.createGain(),e.gain.value=0,c.connect(n).connect(e).connect(t),c.start()}return{get on(){return i},start(){r||(r=new(window.AudioContext||window.webkitAudioContext),t=r.createGain(),t.gain.value=.9,t.connect(r.destination),o(),l()),r.resume(),i=!0,t.gain.setTargetAtTime(.9,r.currentTime,.6)},stop(){r&&(i=!1,t.gain.setTargetAtTime(0,r.currentTime,.3))},swish(c){!r||!i||(e.gain.setTargetAtTime(Math.min(c,1)*.5,r.currentTime,.08),n.frequency.setTargetAtTime(3400+c*1800,r.currentTime,.15))},tap(){if(!r||!i)return;let c=r.currentTime,h=r.createOscillator();h.frequency.setValueAtTime(3100,c),h.frequency.exponentialRampToValueAtTime(2400,c+.03);let d=r.createGain();d.gain.setValueAtTime(.12,c),d.gain.exponentialRampToValueAtTime(1e-4,c+.05),h.connect(d).connect(t),h.start(c),h.stop(c+.06)},chime(){!r||!i||a(392,r.currentTime,.05)}}}var Ps=r=>`<svg viewBox="0 0 24 24" aria-hidden="true">${r}</svg>`,Vd=[Ps(`
    <circle cx="12" cy="3.3" r="1.5"/>
    <path d="M11.3 4.4h1.4v1.4h-1.4z"/>
    <path d="M4.8 13.2C4.8 8.6 8 5.6 12 5.6s7.2 3 7.2 7.6z"/>
    <path d="M4.2 13.2h15.6v2.3H4.2z"/>
    <path class="cut" d="M10.6 8.1l1.4-1.9 1.4 1.9h1.7l-.9 1.4.9 1.4h-1.7L12 12.8l-1.4-1.9H8.9l.9-1.4-.9-1.4z"/>
    <path d="M5.4 15.5h1v5.6h-1zM7.5 15.5h1v6.5h-1zM9.6 15.5h1v5.9h-1zM11.7 15.5h1v6.8h-1zM13.8 15.5h1v5.7h-1zM15.9 15.5h1v6.4h-1zM18 15.5h1v5.3h-1z"/>`),Ps(`
    <path fill-rule="evenodd" d="M12 1.8a10.2 10.2 0 1 1 0 20.4 10.2 10.2 0 0 1 0-20.4zm0 4.4a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6z"/>
    <circle class="cut" cx="12" cy="4" r="1.5"/>
    <circle cx="12" cy="4" r=".6"/>
    <path d="M9.6 9.4h1.1v1.6H9.6zM13.3 9.4h1.1v1.6h-1.1zM9.6 12.2h1.1v1.6H9.6zM13.3 12.2h.4v1.6h-.4zM14 12.2h.4v1.6H14z"/>`),Ps(`
    <path d="M6 2.6c-1.1 6.4-.4 13.3 6 18.8 6.4-5.5 7.1-12.4 6-18.8" fill="none" stroke="currentColor" stroke-width="1.1"/>
    <ellipse cx="5.6" cy="5.6" rx="1.4" ry="2"/>
    <ellipse cx="5.5" cy="10.2" rx="1.4" ry="2"/>
    <ellipse cx="6.6" cy="14.6" rx="1.4" ry="2" transform="rotate(-20 6.6 14.6)"/>
    <ellipse cx="8.9" cy="18.2" rx="1.4" ry="2" transform="rotate(-40 8.9 18.2)"/>
    <ellipse cx="15.1" cy="18.2" rx="1.4" ry="2" transform="rotate(40 15.1 18.2)"/>
    <ellipse cx="17.4" cy="14.6" rx="1.4" ry="2" transform="rotate(20 17.4 14.6)"/>
    <ellipse cx="18.5" cy="10.2" rx="1.4" ry="2"/>
    <ellipse cx="18.4" cy="5.6" rx="1.4" ry="2"/>`),Ps(`
    <ellipse cx="12" cy="12" rx="6.8" ry="9.6"/>
    <path class="cut" d="M12 4.4c-.9 2.4-.9 12.8 0 15.2.9-2.4.9-12.8 0-15.2z"/>
    <path class="cut" d="M9.6 7.2h1.6v.8H9.6zM9.3 9.6h1.9v.8H9.3zM9.2 12h2v.8h-2zM9.3 14.4h1.9v.8H9.3zM9.6 16.8h1.6v.8H9.6zM12.8 7.2h1.6v.8h-1.6zM12.8 9.6h1.9v.8h-1.9zM12.8 12h2v.8h-2zM12.8 14.4h1.9v.8h-1.9zM12.8 16.8h1.6v.8h-1.6z"/>`),Ps(`
    <path d="M4.6 2.4h14.8c-1.8 3.2-3.6 6.4-3.6 9.6s1.8 6.4 3.6 9.6H4.6c1.8-3.2 3.6-6.4 3.6-9.6S6.4 5.6 4.6 2.4z"/>
    <path class="cut" d="M7.6 3.6l.8-.1 3.4 16.9-.8.1zM12.2 3.5h.8l-.4 17h-.8zM15.6 3.5l.8.1-3.4 16.9-.8-.1z"/>
    <path d="M4 1.6h16v1.6H4zM4 20.8h16v1.6H4z"/>`),Ps(`
    <path d="M10.8 1.6h2.4v1.6h-2.4z"/>
    <path d="M11 3.2h2v7.6h-2z"/>
    <path class="cut" d="M11 4.6h2v.7h-2zM11 6.6h2v.7h-2zM11 8.6h2v.7h-2z"/>
    <path d="M12 10.4c-3.1 2.1-5.1 6.2-5.6 12 1.6-1.5 2.5-1.9 3.3-2 .2 1 .8 1.6 2.3 2 1.5-.4 2.1-1 2.3-2 .8.1 1.7.5 3.3 2-.5-5.8-2.5-9.9-5.6-12z"/>`),Ps(`
    <circle cx="12" cy="3.4" r="1.4"/><circle cx="15.6" cy="4.4" r="1.4"/><circle cx="18.2" cy="7" r="1.4"/>
    <circle cx="19.2" cy="10.6" r="1.4"/><circle cx="18.2" cy="14.2" r="1.4"/><circle cx="8.4" cy="4.4" r="1.4"/>
    <circle cx="5.8" cy="7" r="1.4"/><circle cx="4.8" cy="10.6" r="1.4"/><circle cx="5.8" cy="14.2" r="1.4"/>
    <circle cx="8.6" cy="16.8" r="1.4"/><circle cx="15.4" cy="16.8" r="1.4"/>
    <path d="M12 16.6c1.7 0 3 1.6 3 3.3 0 1.5-1.3 2.5-3 2.5s-3-1-3-2.5c0-1.7 1.3-3.3 3-3.3z"/>`)];var Gd=r=>new Promise(t=>setTimeout(t,r));function Is(r,t,e){let n=document.createElement(r);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var H0=r=>[...r].map(t=>`<span>${t}</span>`).join("");async function W0({ready:r,reduced:t,onEnter:e}){let n=Is("div","opening");n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Welcome to Il\xE9 \xC0t\xE8gb\xE8"),document.body.appendChild(n);let i=document.getElementById("wordmark"),s=Is("div","opening__mark","Il\xE9 \xC0t\xE8gb\xE8");if(s.lang="yo",s.setAttribute("aria-hidden","true"),n.appendChild(s),t)await r,s.style.display="none";else{ln.fromTo(s,{opacity:0,y:14},{opacity:1,y:0,duration:.9,ease:"power2.out"}),await Gd(1300);let h=s.getBoundingClientRect(),d=i.getBoundingClientRect();await ln.to(s,{x:d.left+d.width/2-(h.left+h.width/2),y:d.top+d.height/2-(h.top+h.height/2),scale:d.height/h.height,duration:1,ease:"power3.inOut"});let u=Is("div","loader");u.setAttribute("role","status"),u.setAttribute("aria-label","Loading");let f=Is("span","loader__part",H0("load")),g=Is("span","loader__gap"),_=Is("span","loader__part",H0("ing"));u.append(f,g,_),n.appendChild(u),ln.from([...f.children,..._.children],{opacity:0,y:8,stagger:.05,duration:.6,ease:"power2.out"});let m=!1;Promise.race([r,Gd(7e3)]).then(()=>{m=!0});let p=0;for(;p<3||!m;)g.innerHTML=Vd[p%Vd.length],ln.fromTo(g.firstChild,{scale:.8,opacity:0},{scale:1,opacity:1,duration:.35,ease:"power2.out"}),p++,await Gd(520);await ln.to(g,{width:0,duration:.5,ease:"power2.inOut",onStart:()=>{g.innerHTML=""}});let S=[...f.children,..._.children];await ln.to(S,{y:6,opacity:0,filter:"blur(6px)",duration:.6,ease:"power2.in",stagger:.05}),u.remove()}let o=Is("div","welcome",`
    <div class="welcome__center">
      <p class="welcome__title" lang="yo" aria-hidden="true"><em>Il\xE9</em> \xC0t\xE8gb\xE8</p>
      <p class="welcome__sub">A house of <span lang="yo">If\xE1</span> and <span lang="yo">\xD2r\xEC\u1E63\xE0</span></p>
      <p class="welcome__lede">For everyone who wants to improve their life through the teachings of <span lang="yo">If\xE1</span> and <span lang="yo">\xD2r\xEC\u1E63\xE0</span>.</p>
      <button class="pill pill--arrow welcome__enter" type="button">Enter with sound <span class="pill__dot" aria-hidden="true"></span></button>
    </div>
    <div class="welcome__foot">
      <span>Best with sound on</span>
      <button class="welcome__quiet" type="button">Enter without sound</button>
    </div>`);n.appendChild(o);let a=o.querySelectorAll(".welcome__center > *");t||ln.from(a,{opacity:0,y:18,duration:1.1,ease:"power2.out",stagger:.14});let l=o.querySelector(".welcome__enter");l.classList.add("no-ring"),l.focus({preventScroll:!0}),o.addEventListener("keydown",()=>l.classList.remove("no-ring"),{once:!0});let c=await new Promise(h=>{l.addEventListener("click",()=>h(!0),{once:!0}),o.querySelector(".welcome__quiet").addEventListener("click",()=>h(!1),{once:!0})});e(c),await ln.to(n,{opacity:0,filter:t?"none":"blur(8px)",duration:t?.3:1,ease:"power2.inOut"}),n.remove()}ln.registerPlugin(te);var Ls=matchMedia("(prefers-reduced-motion: reduce)").matches,Xd=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4||innerWidth<760,q0=r=>Math.min(1,Math.max(0,r)),qo=(r,t,e)=>q0((r-t)/(e-t)),Y0="ategbe-entered",tu=new Ym({autoRaf:!1,anchors:!0,lerp:Ls?1:.075});tu.on("scroll",te.update);ln.ticker.add(r=>tu.raf(r*1e3));ln.ticker.lagSmoothing(0);var Yo=G0(),eu=document.getElementById("sound-toggle");function Wd(r){r?Yo.start():Yo.stop(),eu.setAttribute("aria-pressed",String(r)),eu.setAttribute("aria-label",r?"Sound on":"Sound off")}eu.addEventListener("click",()=>Wd(!Yo.on));document.addEventListener("pointerdown",r=>{r.target.closest(".pill, .sound, .navlink")&&Yo.tap()});var nw=document.querySelector(".stage"),iw=document.getElementById("gl"),X0=document.getElementById("shadow"),Hd=document.getElementById("aside"),rw=document.querySelector(".intro__cue"),Z0=document.querySelector(".intro__line");function sw(r){for(let t of[...r.childNodes])if(t.nodeType===Node.TEXT_NODE){let e=document.createDocumentFragment();t.textContent.split(/(\s+)/).forEach(n=>{if(!n)return;if(/^\s+$/.test(n)){e.append(n);return}let i=document.createElement("span");i.className="w",i.textContent=n,e.append(i)}),t.replaceWith(e)}else t.nodeType===Node.ELEMENT_NODE&&t.classList.add("w")}sw(Z0);var ow=[...Z0.querySelectorAll(".w")],aw=[...document.querySelectorAll("[data-ghost]")].map(r=>z0(r,{blur:!Xd&&!Ls})),lw=[[.16,.23,.31,.36],[.37,.44,.53,.58],[.59,.66,.84,.9]],Kr=null,J0=!0,$0=0,cw=new Promise(r=>{requestAnimationFrame(()=>setTimeout(()=>{try{Kr=O0(iw,{lowPower:Xd,reduced:Ls}),Kr.onFrame((t,e)=>{let n=q0(1-Math.abs(t.y)/3.5);X0.style.setProperty("--shadow-s",(.4+.6*n).toFixed(3)),X0.style.setProperty("--shadow-o",n.toFixed(3)),Yo.swish(e.speed)}),Kr.setProgress($0),J0&&Kr.start()}catch(t){document.documentElement.classList.add("no-gl"),console.warn("WebGL unavailable, showing the page without the 3D crown.",t)}r()},60))}),xl=V0(document.getElementById("powder"),{count:Xd?180:320,reduced:Ls});function K0(r){$0=r,Kr?.setProgress(r),xl.setProgress(r),ow.forEach((e,n)=>{let i=qo(r,.015+n*.006,.08+n*.006);e.style.transform=i?`translate3d(0, ${i*1.6}rem, 0)`:"",e.style.opacity=String(Math.max(0,1-i*1.4)),Ls||(e.style.filter=i?`blur(${(i*8).toFixed(1)}px)`:"")}),rw.style.opacity=String(1-qo(r,0,.03)),aw.forEach((e,n)=>{let[i,s,o,a]=lw[n];e(qo(r,i,s),qo(r,o,a))&&Yo.chime()});let t=qo(r,.4,.47)*(1-qo(r,.84,.9));Hd.style.opacity=String(t),Hd.style.transform=`translateY(${(1-t)*.75}rem)`,Hd.style.pointerEvents=t>.5?"auto":"none"}te.create({trigger:nw,start:"top top",end:"bottom bottom",onUpdate:r=>K0(r.progress),onToggle:r=>{J0=r.isActive,r.isActive?(Kr?.start(),xl.start()):(Kr?.stop(),xl.stop())}});K0(0);xl.start();addEventListener("resize",()=>{Kr?.resize(),xl.resize()});var hw=document.getElementById("nav");te.create({trigger:"#services",start:"top 8%",end:"bottom 8%",onToggle:r=>{hw.dataset.on=r.isActive?"laterite":""}});if(!Ls){ln.fromTo("#services",{clipPath:"inset(12% 0 0 0 round 2.5rem 2.5rem 0 0)"},{clipPath:"inset(0% 0 0 0 round 0rem 0rem 0 0)",ease:"none",scrollTrigger:{trigger:"#services",start:"top bottom",end:"top 30%",scrub:!0}}),ln.utils.toArray(".services__list li").forEach(t=>{ln.from(t,{opacity:0,y:24,duration:1.1,ease:"power2.out",scrollTrigger:{trigger:t,start:"top 88%",once:!0}})});let r=matchMedia("(min-width: 761px)").matches;document.querySelectorAll(".photo").forEach(t=>{let e=Number(t.dataset.depth)||0;ln.to(t,{y:()=>e*(r?-460:-160),ease:"none",scrollTrigger:{trigger:"#collage",start:"top bottom",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}})})}eu.hidden=!1;var Q0=!1;try{Q0=sessionStorage.getItem(Y0)==="1"}catch{}Q0?Wd(!1):(tu.stop(),document.documentElement.style.overflow="hidden",W0({ready:Promise.all([cw,document.fonts.ready]),reduced:Ls,onEnter(r){Wd(r);try{sessionStorage.setItem(Y0,"1")}catch{}document.documentElement.style.overflow="",tu.start(),te.refresh()}}));
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
