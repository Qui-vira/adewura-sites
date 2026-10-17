var j0=Object.defineProperty;var t_=(r,t,e)=>t in r?j0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Nt=(r,t,e)=>t_(r,typeof t!="symbol"?t+"":t,e);function tr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ta={duration:.5,overwrite:!1,delay:0},Su,fn,De,_i=1e8,we=1/_i,uu=Math.PI*2,e_=uu/4,n_=0,sp=Math.sqrt,i_=Math.cos,r_=Math.sin,en=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},nr=function(t){return typeof t=="number"},Cl=function(t){return typeof t>"u"},ki=function(t){return typeof t=="object"},Yn=function(t){return t!==!1},Mu=function(){return typeof window<"u"},vl=function(t){return Ve(t)||en(t)},op=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,s_=/random\([^)]+\)/g,o_=/,\s*/g,$d=/(?:-?\.?\d|\.)+/gi,bu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ru=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wu=/[+-]=-?[.\d]+/,a_=/[^,'"\[\]\s]+/gi,l_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Bi,fu,Tu,jn={},bl={},ap,lp=function(t){return(bl=Vs(t,jn))&&bn},Rl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ea=function(t,e){return!e&&console.warn(t)},cp=function(t,e){return t&&(jn[t]=e)&&bl&&(bl[t]=e)||jn},na=function(){return 0},c_={suppressEvents:!0,isStart:!0,kill:!1},yl={suppressEvents:!0,kill:!1},h_={suppressEvents:!0},Eu={},br=[],du={},hp,Xn={},su={},Kd=30,Sl=[],Au="",Cu=function(t){var e=t[0],n,i;if(ki(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Sl.length;i--&&!Sl[i].targetTest(e););n=Sl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Lu(t[i],n)))||t.splice(i,1);return t},wr=function(t){return t._gsap||Cu(xi(t))[0]._gsap},Ru=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():Cl(n)&&t.getAttribute&&t.getAttribute(e)||n},Un=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},as=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},u_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},wl=function(){var t=br.length,e=br.slice(0),n,i;for(du={},br.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pu=function(t){return!!(t._initted||t._startAt||t.add)},up=function(t,e,n,i){br.length&&!fn&&wl(),t.render(e,n,i||!!(fn&&e<0&&Pu(t))),br.length&&!fn&&wl()},fp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(a_).length<2?e:en(t)?t.trim():t},dp=function(t){return t},ti=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},f_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Vs=function(t,e){for(var n in e)t[n]=e[n];return t},Qd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ki(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Tl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ko=function(t){var e=t.parent||Be,n=t.keyframes?f_(Mn(t.keyframes)):ti;if(Yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},d_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},pp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Pl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Tr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},is=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},p_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},pu=function(t,e,n,i){return t._startAt&&(fn?t._startAt.revert(yl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},m_=function r(t){return!t||t._ts&&r(t.parent)},jd=function(t){return t._repeat?Gs(t._tTime,t=t.duration()+t._rDelay)*t:0},Gs=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},El=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Il=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Ll=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Il(t),n._dirty||is(n,t)),t},mp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=El(t.rawTime(),e),(!e._dur||sa(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),is(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},zi=function(t,e,n,i){return e.parent&&Tr(e),e._start=Oe((nr(n)?n:n||t!==Be?gi(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),pp(t,e,"_first","_last",t._sort?"_start":0),mu(e)||(t._recent=e),i||mp(t,e),t._ts<0&&Ll(t,t._tTime),t},gp=function(t,e){return(jn.ScrollTrigger||Rl("scrollTrigger",e))&&jn.ScrollTrigger.create(e,t)},_p=function(t,e,n,i,s){if(Uu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&hp!==qn.frame)return br.push(t),t._lazy=[s,i],1},g_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},mu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},__=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&g_(t)&&!(!t._initted&&mu(t))||(t._ts<0||t._dp._ts<0)&&!mu(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=sa(0,t._tDur,e),h=Gs(l,a),t._yoyo&&h&1&&(o=1-o),h!==Gs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||fn||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&_p(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&pu(t,e,n,!0),t._onUpdate&&!n&&Qn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Tr(t,1),!n&&!fn&&(Qn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},x_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Hs=function(t,e,n,i){var s=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Oe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Ll(t,t._tTime=t._tDur*a),t.parent&&Il(t),n||is(t.parent,t),t},tp=function(t){return t instanceof Sn?is(t):Hs(t,t._dur)},v_={_start:0,endTime:na,totalDuration:na},gi=function r(t,e,n){var i=t.labels,s=t._recent||v_,o=t.duration()>=_i?s.endTime(!1):t._dur,a,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Qo=function(t,e,n){var i=nr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ye(e[0],o,e[s+1])},Er=function(t,e){return t||t===0?e(t):e},sa=function(t,e,n){return n<t?t:n>e?e:n},dn=function(t,e){return!en(t)||!(e=l_.exec(t))?"":e[1]},y_=function(t,e,n){return Er(n,function(i){return sa(t,e,i)})},gu=[].slice,xp=function(t,e){return t&&ki(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ki(t[0]))&&!t.nodeType&&t!==Bi},S_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||xp(i,1)?(s=n).push.apply(s,xi(i)):n.push(i)})||n},xi=function(t,e,n){return De&&!e&&De.selector?De.selector(t):en(t)&&!n&&(fu||!Ws())?gu.call((e||Tu).querySelectorAll(t),0):Mn(t)?S_(t,n):xp(t)?gu.call(t,0):t?[t]:[]},_u=function(t){return t=xi(t)[0]||ea("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return xi(e,n.querySelectorAll?n:n===t?ea("Invalid scope")||Tu.createElement("div"):t)}},vp=function(t){return t.sort(function(){return .5-Math.random()})},yp=function(t){if(Ve(t))return t;var e=ki(t)?t:{each:t},n=rs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return en(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,g){var _=(g||e).length,p=o[_],m,S,A,x,M,b,E,v,T;if(!p){if(T=e.grid==="auto"?0:(e.grid||[1,_i])[1],!T){for(E=-_i;E<(E=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=o[_]=[],m=l?Math.min(T,_)*h-.5:i%T,S=T===_i?0:l?_*f/T-.5:i/T|0,E=0,v=_i,b=0;b<_;b++)A=b%T-m,x=S-(b/T|0),p[b]=M=c?Math.abs(c==="y"?x:A):sp(A*A+x*x),M>E&&(E=M),M<v&&(v=M);i==="random"&&vp(p),p.max=E-v,p.min=v,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=dn(e.amount||e.each)||0,n=n&&_<0?N_(n):n}return _=(p[u]-p.min)/p.max||0,Oe(p.b+(n?n(_):_)*p.v)+p.u}},xu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(nr(n)?0:dn(n))}},Sp=function(t,e){var n=Mn(t),i,s;return!n&&ki(t)&&(i=n=t.radius||_i,t.values?(t=xi(t.values),(s=!nr(t[0]))&&(i*=i)):t=xu(t.increment)),Er(e,n?Ve(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=_i,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||nr(o)?h:h+dn(o)}:xu(t))},Mp=function(t,e,n,i){return Er(Mn(t)?!e:n===!0?!!(n=0):!i,function(){return Mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},M_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},b_=function(t,e){return function(n){return t(parseFloat(n))+(e||dn(n))}},w_=function(t,e,n){return wp(t,e,0,1,n)},bp=function(t,e,n){return Er(n,function(i){return t[~~e(i)]})},T_=function r(t,e,n){var i=e-t;return Mn(t)?bp(t,r(0,t.length),e):Er(n,function(s){return(i+(s-t)%i)%i+t})},E_=function r(t,e,n){var i=e-t,s=i*2;return Mn(t)?bp(t,r(0,t.length-1),e):Er(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Xs=function(t){return t.replace(s_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(o_);return Mp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},wp=function(t,e,n,i,s){var o=e-t,a=i-n;return Er(s,function(l){return n+((l-t)/o*a||0)})},A_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=en(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Mn(t)&&!Mn(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Vs(Mn(t)?[]:{},t));if(!h){for(l in e)Du.call(a,t,l,"get",e[l]);s=function(g){return Bu(g,a)||(o?t.p:t)}}}return Er(n,s)},ep=function(t,e,n){var i=t.labels,s=_i,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Qn=function(t,e,n){var i=t.vars,s=i[e],o=De,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&br.length&&wl(),a&&(De=a),h=l?s.apply(c,l):s.call(c),De=o,h},Jo=function(t){return Tr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!fn),t.progress()<1&&Qn(t,"onInterrupt"),t},ks,Tp=[],Ep=function(t){if(t)if(t=!t.name&&t.default||t,Mu()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:na,render:Bu,add:Du,kill:W_,modifier:H_,rawVars:0},o={targetTest:0,get:0,getSetter:Dl,aliases:{},register:0};if(Ws(),t!==i){if(Xn[e])return;ti(i,ti(Tl(t,s),o)),Vs(i.prototype,Vs(s,Tl(t,o))),Xn[i.prop=e]=i,t.targetTest&&(Sl.push(i),Eu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}cp(e,i),t.register&&t.register(bn,i,Fn)}else Tp.push(t)},be=255,$o={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},ou=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},Ap=function(t,e,n){var i=t?nr(t)?[t>>16,t>>8&be,t&be]:0:$o.black,s,o,a,l,c,h,f,u,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$o[t])i=$o[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&be,i&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match($d),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ou(l+1/3,s,o),i[1]=ou(l,s,o),i[2]=ou(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(bu),n&&i.length<4&&(i[3]=1),i}else i=t.match($d)||$o.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/be,o=i[1]/be,a=i[2]/be,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Cp=function(t){var e=[],n=[],i=-1;return t.split(er).forEach(function(s){var o=s.match(os)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},np=function(t,e,n){var i="",s=(t+i).match(er),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Ap(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Cp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(er,"1").split(os),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(er),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},er=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $o)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),C_=/hsl[a]?\(/,Iu=function(t){var e=t.join(" "),n;if(er.lastIndex=0,er.test(e))return n=C_.test(e),t[1]=np(t[1],n),t[0]=np(t[0],n,Cp(t[1])),!0},ia,qn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,g=function _(p){var m=r()-i,S=p===!0,A,x,M,b;if((m>t||m<0)&&(n+=m-e),i+=m,M=i-n,A=M-o,(A>0||S)&&(b=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,o+=A+(A>=s?4:s-A),x=1),S||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](M,u,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){ap&&(!fu&&Mu()&&(Bi=fu=window,Tu=Bi.document||{},jn.gsap=bn,(Bi.gsapVersions||(Bi.gsapVersions=[])).push(bn.version),lp(bl||Bi.GreenSockGlobals||!Bi.gsap&&Bi||{}),Tp.forEach(Ep)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},ia=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ia=0,c=na},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,S){var A=m?function(x,M,b,E){p(x,M,b,E),f.remove(A)}:p;return f.remove(p),a[S?"unshift":"push"](A),Ws(),A},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f})(),Ws=function(){return!ia&&qn.wake()},ue={},R_=/^[\d.\-M][\d.\-,\s]/,P_=/["']/g,I_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(P_,"").trim():+c,i=l.substr(a+1).trim();return e},L_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},D_=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[I_(e[1])]:L_(t).split(",").map(fp)):ue._CE&&R_.test(t)?ue._CE("",t):n},N_=function(t){return function(e){return 1-t(1-e)}},rs=function(t,e){return t&&(Ve(t)?t:ue[t]||D_(t))||e},ls=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Un(t,function(a){ue[a]=jn[a]=s,ue[o=a.toLowerCase()]=n;for(var l in s)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=s[l]}),s},Rp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},au=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/uu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*r_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Rp(a);return s=uu/s,l.config=function(c,h){return r(t,c,h)},l},lu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Rp(n);return i.config=function(s){return r(t,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ls(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;ls("Elastic",au("in"),au("out"),au());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ls("Circ",function(r){return-(sp(1-r*r)-1)});ls("Sine",function(r){return r===1?1:-i_(r*e_)+1});ls("Back",lu("in"),lu("out"),lu());ue.SteppedEase=ue.steps=jn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((i*sa(0,o,a)|0)+s)*n}}};ta.ease=ue["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Au+=r+","+r+"Params,"});var Lu=function(t,e){this.id=n_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ru,this.set=e?e.getSetter:Dl},ra=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Hs(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),ia||qn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ll(this,n),!s._dp||s.parent||mp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),up(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?El(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(sa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Il(this),p_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?El(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=h_);var i=fn;return fn=n,Pu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(gi(this,n),Yn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ve(n)?n:dp,l=function(){var h=i.then;i.then=null,s&&s(),Ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Jo(this)},r})();ti(ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var Sn=(function(r){rp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),Be&&zi(n.parent||Be,tr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gp(tr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Qo(0,arguments,this),this},e.from=function(i,s,o){return Qo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Qo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ye(i,s,gi(this,o),1),this},e.call=function(i,s,o){return zi(this,Ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,gi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ko(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Ko(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,g,_,p,m,S,A,x,M,b,E;if(this!==Be&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,A=this._ts,m=!A,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(u=Oe(h%p),h===l?(_=this._repeat,u=c):(M=Oe(h/p),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=Gs(this._tTime,p),!a&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),b&&_&1&&(u=c-u,E=1),_!==M&&!this._lock){var v=b&&M&1,T=v===(b&&_&1);if(_<M&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Oe(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=x_(this,Oe(a),Oe(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!M&&(Qn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||u>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!m){S=0,g&&(h+=this._zTime=-we);break}}d=g}else{d=this._last;for(var C=i<0?i:u;d;){if(g=d._prev,(d._act||C<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,s,o||fn&&Pu(d)),u!==this._time||!this._ts&&!m){S=0,g&&(h+=this._zTime=C?-we:we);break}}d=g}}if(S&&!s&&(this.pause(),S.render(u>=a?0:-we)._zTime=u>=a?1:-1,this._ts))return this._start=x,Il(this),this.render(i,s,o);this._onUpdate&&!s&&Qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Tr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(nr(s)||(s=gi(this,s,i)),!(i instanceof ra)){if(Mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(Ve(i))i=Ye.delayedCall(0,i);else return this}return this!==i?zi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-_i);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return en(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&Pl(this,i),i===this._recent&&(this._recent=this._last),is(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=gi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ye.delayedCall(0,s||na,o);return a.data="isPause",this._hasPause=1,zi(this,a,gi(this,i))},e.removePause=function(i){var s=this._first;for(i=gi(this,i);s;)s._start===i&&s.data==="isPause"&&Tr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Mr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=xi(i),l=this._first,c=nr(s),h;l;)l instanceof Ye?u_(l._targets,a)&&(c?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=gi(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,g=Ye.to(o,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Hs(g,p,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,f||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ti({startAt:{time:gi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),ep(this,gi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),ep(this,gi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return is(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=_i,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Hs(o,o===Be&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Be._ts&&(up(Be,El(i,Be)),hp=qn.frame),qn.frame>=Kd){Kd+=Zn.autoSleep||120;var s=Be._first;if((!s||!s._ts)&&Zn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},t})(ra);ti(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var U_=function(t,e,n,i,s,o,a){var l=new Fn(this._pt,t,e,0,1,Ou,null,s),c=0,h=0,f,u,d,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Xs(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),u=n.match(ru)||[];f=ru.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?as(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=ru.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(wu.test(i)||m)&&(l.e=0),this._pt=l,l},Du=function(t,e,n,i,s,o,a,l,c,h){Ve(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:Ve(f)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Ve(f)?c?k_:Lp:Fu,g;if(en(i)&&(~i.indexOf("random(")&&(i=Xs(i)),i.charAt(1)==="="&&(g=as(u,i)+(dn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||vu)return!isNaN(u*i)&&i!==""?(g=new Fn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?G_:Dp,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Rl(e,i),U_.call(this,t,e,u,i,d,l||Zn.stringFilter,c))},F_=function(t,e,n,i,s){if(Ve(t)&&(t=jo(t,s,e,n,i)),!ki(t)||t.style&&t.nodeType||Mn(t)||op(t))return en(t)?jo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=jo(t[a],s,e,n,i);return o},Nu=function(t,e,n,i,s,o){var a,l,c,h;if(Xn[t]&&(a=new Xn[t]).init(s,a.rawVars?e[t]:F_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ks))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Mr,vu,Uu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:p,A=t._overwrite==="auto"&&!Su,x=t.timeline,M=i.easeReverse||f,b,E,v,T,C,D,I,O,L,B,G,k,K;if(x&&(!u||!s)&&(s="none"),t._ease=rs(s,ta.ease),t._rEase=M&&(rs(M)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||u&&!i.stagger){if(O=p[0]?wr(p[0]).harness:0,k=O&&i[O.prop],b=Tl(i,Eu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?yl:c_),_._lazy=0),o){if(Tr(t._startAt=Ye.set(p,ti({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return Qn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn||!a&&!d)&&t._startAt.revert(yl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),v=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Yn(l),immediateRender:a,stagger:0,parent:m},b),k&&(v[O.prop]=k),Tr(t._startAt=Ye.set(p,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn?t._startAt.revert(yl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Yn(l)||l&&!g,E=0;E<p.length;E++){if(C=p[E],I=C._gsap||Cu(p)[E]._gsap,t._ptLookup[E]=B={},du[I.id]&&br.length&&wl(),G=S===p?E:S.indexOf(C),O&&(L=new O).init(C,k||b,t,G,S)!==!1&&(t._pt=T=new Fn(t._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Z){B[Z]=T}),L.priority&&(D=1)),!O||k)for(v in b)Xn[v]&&(L=Nu(v,b,t,G,C,S))?L.priority&&(D=1):B[v]=T=Du.call(t,C,v,"get",b[v],G,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(C,t._op[E]),A&&t._pt&&(Mr=t,Be.killTweensOf(C,B,t.globalTime(e)),K=!t.parent,Mr=0),t._pt&&l&&(du[I.id]=1)}D&&zu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&x.render(_i,!0,!0)},O_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return vu=1,t.vars[e]="+=0",Uu(t,a),vu=0,l?ea(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ge(n)+dn(f.e)),f.b&&(f.b=h.s+dn(f.b))},B_=function(t,e){var n=t[0]?wr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Vs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},z_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},jo=function(t,e,n,i,s){return Ve(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?Xs(t):t},Pp=Au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ip={};Un(Pp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ip[r]=1});var Ye=(function(r){rp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ko(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Be,S=(Mn(n)||op(n)?nr(n[0]):"length"in i)?[n]:xi(n),A,x,M,b,E,v,T,C;if(a._targets=S.length?Cu(S):ea("GSAP target "+n+" not found. https://gsap.com",!Zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||u||vl(c)||vl(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(A=a.timeline=new Sn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:S}),A.kill(),A.parent=A._dp=tr(a),A._start=0,u||vl(c)||vl(h)){if(b=S.length,T=u&&yp(u),ki(u))for(E in u)~Pp.indexOf(E)&&(C||(C={}),C[E]=u[E]);for(x=0;x<b;x++)M=Tl(i,Ip),M.stagger=0,D&&(M.easeReverse=D),C&&Vs(M,C),v=S[x],M.duration=+jo(c,tr(a),x,v,S),M.delay=(+jo(h,tr(a),x,v,S)||0)-a._delay,!u&&b===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),A.to(v,M,T?T(x,v,S):0),A._ease=ue.none;A.duration()?c=h=0:a.timeline=0}else if(g){Ko(ti(A.vars.defaults,{ease:"none"})),A._ease=rs(g.ease||i.ease||"none");var I=0,O,L,B;if(Mn(g))g.forEach(function(G){return A.to(S,G,">")}),A.duration();else{M={};for(E in g)E==="ease"||E==="easeEach"||z_(E,g[E],M,g.easeEach);for(E in M)for(O=M[E].sort(function(G,k){return G.t-k.t}),I=0,x=0;x<O.length;x++)L=O[x],B={ease:L.e,duration:(L.t-(x?O[x-1].t:0))/100*c},B[E]=L.v,A.to(S,B,I),I+=B.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return d===!0&&!Su&&(Mr=tr(a),Be.killTweensOf(S),Mr=0),zi(m,tr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Oe(m._time)&&Yn(f)&&m_(tr(a))&&m.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),p&&gp(tr(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-we&&!h?l:i<we?0:i,u,d,g,_,p,m,S,A;if(!c)__(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Oe(f%_),f===l?(g=this._repeat,u=c):(p=Oe(f/_),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=Gs(this._tTime,_),u===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(_p(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var M=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(Qn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&pu(this,i,s,o),Qn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Qn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&pu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Tr(this,1),!s&&!(h&&!a)&&(f||a||m)&&(Qn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ia||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Uu(this,c),h=this._ease(c/this._dur),O_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Ll(this,0),this.parent||pp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Jo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mr&&Mr.vars.overwrite!==!0)._first||Jo(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?xi(i):a,c=this._ptLookup,h=this._pt,f,u,d,g,_,p,m;if((!s||s==="all")&&d_(a,l))return s==="all"&&(this._pt=0),Jo(this);for(f=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Un(s,function(S){return _[S]=1}),s=_),s=B_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){u=c[m],s==="all"?(f[m]=s,g=u,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Pl(this,p,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Jo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Qo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Qo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Be.killTweensOf(i,s,o)},t})(ra);ti(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new Sn,e=gu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Fu=function(t,e,n){return t[e]=n},Lp=function(t,e,n){return t[e](n)},k_=function(t,e,n,i){return t[e](i.fp,n)},V_=function(t,e,n){return t.setAttribute(e,n)},Dl=function(t,e){return Ve(t[e])?Lp:Cl(t[e])&&t.setAttribute?V_:Fu},Dp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},G_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ou=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Bu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},H_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},W_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Pl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},X_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},zu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Fn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Dp,this.d=l||this,this.set=c||Fu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=X_,this.m=n,this.mt=s,this.tween=i},r})();Un(Au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Eu[r]=1});jn.TweenMax=jn.TweenLite=Ye;jn.TimelineLite=jn.TimelineMax=Sn;Be=new Sn({sortChildren:!1,defaults:ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=Iu;var ss=[],Ml={},q_=[],ip=0,Y_=0,cu=function(t){return(Ml[t]||q_).map(function(e){return e()})},yu=function(){var t=Date.now(),e=[];t-ip>2&&(cu("matchMediaInit"),ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Bi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),cu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ip=t,cu("matchMedia"))},Np=(function(){function r(e,n){this.selector=n&&_u(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Y_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ve(n)&&(s=i,i=n,n=Ve);var o=this,a=function(){var c=De,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=_u(s)),De=o,f=i.apply(o,arguments),Ve(f)&&o._r.push(f),De=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Ve?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ss.length;o--;)ss[o].id===this.id&&ss.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Z_=(function(){function r(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ki(n)||(n={matches:n});var o=new Np(0,s||this.scope),a=o.conditions={},l,c,h;De&&!o.selector&&(o.selector=De.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Bi.matchMedia(n[c]),l&&(ss.indexOf(o)<0&&ss.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(yu):l.addEventListener("change",yu)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Al={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ep(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=xi(t)[0]);var s=wr(t||{}).get,o=n?dp:fp;return n==="native"&&(n=""),t&&(e?o((Xn[e]&&Xn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Xn[a]&&Xn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=xi(t),t.length>1){var i=t.map(function(h){return bn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Xn[e],a=wr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;ks._pt=0,f.init(t,n?h+n:h,ks,0,[t]),f.render(1,f),ks._pt&&Bu(1,ks)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=bn.to(t,ti((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=rs(t.ease,ta.ease)),Qd(ta,t||{})},config:function(t){return Qd(Zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Xn[a]&&!jn[a]&&ea(e+" effect requires "+a+" plugin.")}),su[e]=function(a,l,c){return n(xi(a),ti(l||{},s),c)},o&&(Sn.prototype[e]=function(a,l,c){return this.add(su[e](a,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=rs(e)},parseEase:function(t,e){return arguments.length?rs(t,e):ue},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=Yn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&zi(n,i,i._start-i._delay),i=s;return zi(Be,n,0),n},context:function(t,e){return t?new Np(t,e):De},matchMedia:function(t){return new Z_(t)},matchMediaRefresh:function(){return ss.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||yu()},addEventListener:function(t,e){var n=Ml[t]||(Ml[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ml[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:T_,wrapYoyo:E_,distribute:yp,random:Mp,snap:Sp,normalize:w_,getUnit:dn,clamp:y_,splitColor:Ap,toArray:xi,selector:_u,mapRange:wp,pipe:M_,unitize:b_,interpolate:A_,shuffle:vp},install:lp,effects:su,ticker:qn,updateRoot:Sn.updateRoot,plugins:Xn,globalTimeline:Be,core:{PropTween:Fn,globals:cp,Tween:Ye,Timeline:Sn,Animation:ra,getCache:wr,_removeLinkedListItem:Pl,reverting:function(){return fn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return Su=t}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Al[r]=Ye[r]});qn.add(Sn.updateRoot);ks=Al.to({},{duration:0});var J_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},$_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=J_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},hu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Un(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}$_(a,s)}}}},bn=Al.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},hu("roundProps",xu),hu("modifiers"),hu("snap",Sp))||Al;Ye.version=Sn.version=bn.version="3.15.0";ap=1;Mu()&&Ws();var K_=ue.Power0,Q_=ue.Power1,j_=ue.Power2,tx=ue.Power3,ex=ue.Power4,nx=ue.Linear,ix=ue.Quad,rx=ue.Cubic,sx=ue.Quart,ox=ue.Quint,ax=ue.Strong,lx=ue.Elastic,cx=ue.Back,hx=ue.SteppedEase,ux=ue.Bounce,fx=ue.Sine,dx=ue.Expo,px=ue.Circ;var Up,Ar,Ys,Xu,fs,mx,Fp,qu,gx=function(){return typeof window<"u"},rr={},us=180/Math.PI,Zs=Math.PI/180,qs=Math.atan2,Op=1e8,Yu=/([A-Z])/g,_x=/(left|right|width|margin|padding|x)/i,xx=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Sx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Mx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},bx=function(t,e,n){return t.style[e]=n},wx=function(t,e,n){return t.style.setProperty(e,n)},Tx=function(t,e,n){return t._gsap[e]=n},Ex=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ax=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Cx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ze="transform",Jn=ze+"Origin",Rx=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in rr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Vi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ir(i,a)}):this.tfm[t]=o.x?o[t]:ir(i,t),t===Jn&&(this.tfm.zOrigin=o.zOrigin);else return Vi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,e,"")),t=ze}(s||e)&&this.props.push(t,e,s[t])},Yp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Px=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=qu(),(!s||!s.isStart)&&!n[ze]&&(Yp(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Zp=function(t,e){var n={target:t,props:[],revert:Px,save:Rx};return t._gsap||bn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Jp,Gu=function(t,e){var n=Ar.createElementNS?Ar.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ar.createElement(t);return n&&n.style?n:Ar.createElement(t)},ei=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Js(e)||e,1)||""},Bp="O,Moz,ms,Ms,Webkit".split(","),Js=function(t,e,n){var i=e||fs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Bp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Bp[o]:"")+t},Hu=function(){gx()&&window.document&&(Up=window,Ar=Up.document,Ys=Ar.documentElement,fs=Gu("div")||{style:{}},mx=Gu("div"),ze=Js(ze),Jn=ze+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jp=!!Js("perspective"),qu=bn.core.reverting,Xu=1)},zp=function(t){var e=t.ownerSVGElement,n=Gu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ys.removeChild(n),s},kp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},$p=function(t){var e,n;try{e=t.getBBox()}catch{e=zp(t),n=1}return e&&(e.width||e.height)||n||(e=zp(t)),e&&!e.width&&!e.x&&!e.y?{x:+kp(t,["x","cx","x1"])||0,y:+kp(t,["y","cy","y1"])||0,width:0,height:0}:e},Kp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&$p(t))},Rr=function(t,e){if(e){var n=t.style,i;e in rr&&e!==Jn&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yu,"-$1").toLowerCase())):n.removeAttribute(e)}},Cr=function(t,e,n,i,s,o){var a=new Fn(t._pt,e,n,0,1,o?qp:Xp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Vp={deg:1,rad:1,turn:1},Ix={grid:1,flex:1},Pr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=fs.style,l=_x.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||Vp[i]||Vp[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),m=t.getCTM&&Kp(t),(d||o==="%")&&(rr[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],Ge(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ar||!_.appendChild)&&(_=Ar.body),p=_._gsap,p&&d&&p.width&&l&&p.time===qn.time&&!p.uncache)return Ge(s/p.width*f);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+i,g=t[h],S?t.style[e]=S:Rr(t,e)}else(d||o==="%")&&!Ix[ei(_,"display")]&&(a.position=ei(t,"position")),_===t&&(a.position="static"),_.appendChild(fs),g=fs[h],_.removeChild(fs),a.position="absolute";return l&&d&&(p=wr(_),p.time=qn.time,p.width=_[h]),Ge(u?g*s/f:g&&s?f/g*s:0)},ir=function(t,e,n,i){var s;return Xu||Hu(),e in Vi&&e!=="transform"&&(e=Vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),rr[e]&&e!=="transform"?(s=la(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ul(ei(t,Jn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Nl[e]&&Nl[e](t,e,n)||ei(t,e)||Ru(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Pr(t,e,s,n)+n:s},Lx=function(t,e,n,i){if(!n||n==="none"){var s=Js(e,t,1),o=s&&ei(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ei(t,"borderTopColor"))}var a=new Fn(this._pt,t.style,e,0,1,Ou),l=0,c=0,h,f,u,d,g,_,p,m,S,A,x,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ei(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ei(t,e)||i,_?t.style[e]=_:Rr(t,e)),h=[n,i],Iu(h),n=h[0],i=h[1],u=n.match(os)||[],M=i.match(os)||[],M.length){for(;f=os.exec(i);)p=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),p.charAt(1)==="="&&(p=as(d,p)+x),m=parseFloat(p),A=p.substr((m+"").length),l=os.lastIndex-A.length,A||(A=A||Zn.units[e]||x,l===i.length&&(i+=A,a.e+=A)),x!==A&&(d=Pr(t,e,_,A)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?qp:Xp;return wu.test(i)&&(a.e=0),this._pt=a,a},Gp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Gp[n]||n,e[1]=Gp[i]||i,e.join(" ")},Nx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],rr[a]&&(l=1,a=a==="transformOrigin"?Jn:ze),Rr(n,a);l&&(Rr(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",la(n,1),o.uncache=1,Yp(i)))}},Nl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Fn(t._pt,e,n,0,0,Nx);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},aa=[1,0,0,1,0,0],Qp={},jp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Hp=function(t){var e=ei(t,ze);return jp(e)?aa:e.substr(7).match(bu).map(Ge)},Zu=function(t,e){var n=t._gsap||wr(t),i=t.style,s=Hp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?aa:s):(s===aa&&!t.offsetParent&&t!==Ys&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ys.appendChild(t)),s=Hp(t),l?i.display=l:Rr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wu=function(t,e,n,i,s,o){var a=t._gsap,l=s||Zu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],A=e.split(" "),x=parseFloat(A[0])||0,M=parseFloat(A[1])||0,b,E,v,T;n?l!==aa&&(E=d*p-g*_)&&(v=x*(p/E)+M*(-_/E)+(_*S-p*m)/E,T=x*(-g/E)+M*(d/E)-(d*S-g*m)/E,x=v,M=T):(b=$p(t),x=b.x+(~A[0].indexOf("%")?x/100*b.width:x),M=b.y+(~(A[1]||A[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(m=x-c,S=M-h,a.xOffset=f+(m*d+S*_)-m,a.yOffset=u+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Jn]="0px 0px",o&&(Cr(o,a,"xOrigin",c,x),Cr(o,a,"yOrigin",h,M),Cr(o,a,"xOffset",f,a.xOffset),Cr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},la=function(t,e){var n=t._gsap||new Lu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ei(t,Jn)||"0",h,f,u,d,g,_,p,m,S,A,x,M,b,E,v,T,C,D,I,O,L,B,G,k,K,Z,R,Q,yt,bt,Gt,zt;return h=f=u=_=p=m=S=A=x=0,d=g=1,n.svg=!!(t.getCTM&&Kp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),E=Zu(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Wu(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,b=n.yOrigin||0,E!==aa&&(D=E[0],I=E[1],O=E[2],L=E[3],h=B=E[4],f=G=E[5],E.length===6?(d=Math.sqrt(D*D+I*I),g=Math.sqrt(L*L+O*O),_=D||I?qs(I,D)*us:0,S=O||L?qs(O,L)*us+_:0,S&&(g*=Math.abs(Math.cos(S*Zs))),n.svg&&(h-=M-(M*D+b*O),f-=b-(M*I+b*L))):(zt=E[6],bt=E[7],R=E[8],Q=E[9],yt=E[10],Gt=E[11],h=E[12],f=E[13],u=E[14],v=qs(zt,yt),p=v*us,v&&(T=Math.cos(-v),C=Math.sin(-v),k=B*T+R*C,K=G*T+Q*C,Z=zt*T+yt*C,R=B*-C+R*T,Q=G*-C+Q*T,yt=zt*-C+yt*T,Gt=bt*-C+Gt*T,B=k,G=K,zt=Z),v=qs(-O,yt),m=v*us,v&&(T=Math.cos(-v),C=Math.sin(-v),k=D*T-R*C,K=I*T-Q*C,Z=O*T-yt*C,Gt=L*C+Gt*T,D=k,I=K,O=Z),v=qs(I,D),_=v*us,v&&(T=Math.cos(v),C=Math.sin(v),k=D*T+I*C,K=B*T+G*C,I=I*T-D*C,G=G*T-B*C,D=k,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Ge(Math.sqrt(D*D+I*I+O*O)),g=Ge(Math.sqrt(G*G+zt*zt)),v=qs(B,G),S=Math.abs(v)>2e-4?v*us:0,x=Gt?1/(Gt<0?-Gt:Gt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!jp(ei(t,ze)),k&&t.setAttribute("transform",k))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ge(d),n.scaleY=Ge(g),n.rotation=Ge(_)+a,n.rotationX=Ge(p)+a,n.rotationY=Ge(m)+a,n.skewX=S+a,n.skewY=A+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Jn]=Ul(c)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?Fx:Jp?tm:Ux,n.uncache=0,n},Ul=function(t){return(t=t.split(" "))[0]+" "+t[1]},ku=function(t,e,n){var i=dn(e);return Ge(parseFloat(e)+parseFloat(Pr(t,"x",n+"px",i)))+i},Ux=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tm(t,e)},cs="0deg",oa="0px",hs=") ",tm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,A=n.zOrigin,x="",M=m==="auto"&&t&&t!==1||m===!0;if(A&&(f!==cs||h!==cs)){var b=parseFloat(h)*Zs,E=Math.sin(b),v=Math.cos(b),T;b=parseFloat(f)*Zs,T=Math.cos(b),o=ku(S,o,E*T*-A),a=ku(S,a,-Math.sin(b)*-A),l=ku(S,l,v*T*-A+A)}p!==oa&&(x+="perspective("+p+hs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(M||o!==oa||a!==oa||l!==oa)&&(x+=l!==oa||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hs),c!==cs&&(x+="rotate("+c+hs),h!==cs&&(x+="rotateY("+h+hs),f!==cs&&(x+="rotateX("+f+hs),(u!==cs||d!==cs)&&(x+="skew("+u+", "+d+hs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+hs),S.style[ze]=x||"translate(0, 0)"},Fx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,A=parseFloat(o),x=parseFloat(a),M,b,E,v,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Zs,c*=Zs,M=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Zs,T=Math.tan(c-h),T=Math.sqrt(1+T*T),E*=T,v*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),M*=T,b*=T)),M=Ge(M),b=Ge(b),E=Ge(E),v=Ge(v)):(M=f,v=u,b=E=0),(A&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(A=Pr(d,"x",o,"px"),x=Pr(d,"y",a,"px")),(g||_||p||m)&&(A=Ge(A+g-(g*M+_*E)+p),x=Ge(x+_-(g*b+_*v)+m)),(i||s)&&(T=d.getBBox(),A=Ge(A+i/100*T.width),x=Ge(x+s/100*T.height)),T="matrix("+M+","+b+","+E+","+v+","+A+","+x+")",d.setAttribute("transform",T),S&&(d.style[ze]=T)},Ox=function(t,e,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?us:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Op)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Op)%o-~~(c/o)*o)),t._pt=u=new Fn(t._pt,e,n,i,c,vx),u.e=h,u.u="deg",t._props.push(n),u},Wp=function(t,e){for(var n in e)t[n]=e[n];return t},Bx=function(t,e,n){var i=Wp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=la(n,1),Rr(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=la(n,1),o[ze]=c);for(l in rr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=dn(c),g=dn(h),f=d!==g?Pr(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new Fn(t._pt,a,l,f,u-f,Vu),t._pt.u=g||0,t._props.push(l));Wp(a,i)};Un("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Nl[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(g){return ir(a,g,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,d,f)}});var Ju={name:"css",register:Hu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,g,_,p,m,S,A,x,M,b,E,v,T;Xu||Hu(),this.styles=this.styles||Zp(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Xn[_]&&Nu(_,e,n,i,t,s)))){if(d=typeof h,g=Nl[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Xs(h)),g)g(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",er.lastIndex=0,er.test(c)||(p=dn(c),m=dn(h),m?p!==m&&(c=Pr(t,_,c,m)+m):p&&(h+=p)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=Xs(c)),dn(c+"")||c==="auto"||(c+=Zn.units[_]||dn(ir(t,_))||""),(c+"").charAt(1)==="="&&(c=ir(t,_))):c=ir(t,_),u=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),_ in Vi&&(_==="autoAlpha"&&(u===1&&ir(t,"visibility")==="hidden"&&f&&(u=0),v.push("visibility",0,a.visibility),Cr(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in rr,A){if(this.styles.save(_),T=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=ei(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=ei(t,"perspective"),C?t.style.perspective=C:Rr(t,"perspective")}f=parseFloat(h)}if(x||(M=t._gsap,M.renderTransform&&!e.parseTransform||la(t,e.parseTransform),b=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new Fn(this._pt,a,ze,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new Fn(this._pt,M,"scaleY",M.scaleY,(S?as(M.scaleY,S+f):f)-M.scaleY||0,Vu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(Jn,0,a[Jn]),h=Dx(h),M.svg?Wu(t,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Cr(this,M,"zOrigin",M.zOrigin,m),Cr(this,a,_,Ul(c),Ul(h)));continue}else if(_==="svgOrigin"){Wu(t,h,1,b,0,this);continue}else if(_ in Qp){Ox(this,M,_,u,S?as(u,S+h):h);continue}else if(_==="smoothOrigin"){Cr(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){Bx(this,h,t);continue}}else _ in a||(_=Js(_)||_);if(A||(f||f===0)&&(u||u===0)&&!xx.test(h)&&_ in a)p=(c+"").substr((u+"").length),f||(f=0),m=dn(h)||(_ in Zn.units?Zn.units[_]:p),p!==m&&(u=Pr(t,_,c,m)),this._pt=new Fn(this._pt,A?M:a,_,u,(S?as(u,S+f):f)-u,!A&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?Mx:Vu),this._pt.u=m||0,A&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=Sx):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=yx);else if(_ in a)Lx.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,s);else if(_!=="parseTransform"){Rl(_,h);continue}A||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}E&&zu(this)},render:function(t,e){if(e.tween._time||!qu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ir,aliases:Vi,getSetter:function(t,e,n){var i=Vi[e];return i&&i.indexOf(",")<0&&(e=i),e in rr&&e!==Jn&&(t._gsap.x||ir(t,"x"))?n&&Fp===n?e==="scale"?Ex:Tx:(Fp=n||{})&&(e==="scale"?Ax:Cx):t.style&&!Cl(t.style[e])?bx:~e.indexOf("-")?wx:Dl(t,e)},core:{_removeProperty:Rr,_getMatrix:Zu}};bn.utils.checkPrefix=Js;bn.core.getStyleSaver=Zp;(function(r,t,e,n){var i=Un(r+","+t+","+e,function(s){rr[s]=1});Un(t,function(s){Zn.units[s]="deg",Qp[s]=1}),Vi[i[13]]=r+","+t,Un(n,function(s){var o=s.split(":");Vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Zn.units[r]="px"});bn.registerPlugin(Ju);var pn=bn.registerPlugin(Ju)||bn,Sw=pn.core.Tween;function em(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function zx(r,t,e){return t&&em(r.prototype,t),e&&em(r,e),r}var mn,Bl,kx,ni,Ir,Lr,Ks,im,ds,Qs,rm,sr,Ei,sm,om=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},am=1,$s=[],ne=[],Ai=[],ha=Date.now,$u=function(t,e){return e},Vx=function(){var t=Qs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,Ai),ne=n,Ai=i,$u=function(o,a){return e[o](a)}},ar=function(t,e){return~Ai.indexOf(t)&&Ai[Ai.indexOf(t)+1][e]},ua=function(t){return!!~rm.indexOf(t)},Bn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},On=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Fl="scrollLeft",Ol="scrollTop",Ku=function(){return sr&&sr.isPressed||ne.cache++},zl=function(t,e){var n=function i(s){if(s||s===0){am&&(ni.history.scrollRestoration="manual");var o=sr&&sr.isPressed;s=i.v=Math.round(s)||(sr&&sr.iOS?1:0),t(s),i.cacheID=ne.cache,o&&$u("ss",s)}else(e||ne.cache!==i.cacheID||$u("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:Fl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zl(function(r){return arguments.length?ni.scrollTo(r,Ke.sc()):ni.pageXOffset||Ir[Fl]||Lr[Fl]||Ks[Fl]||0})},Ke={s:Ol,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:zl(function(r){return arguments.length?ni.scrollTo(wn.sc(),r):ni.pageYOffset||Ir[Ol]||Lr[Ol]||Ks[Ol]||0})},zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||mn.utils.toArray)(t)[0]||(typeof t=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Gx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},or=function(t,e){var n=e.s,i=e.sc;ua(t)&&(t=Ir.scrollingElement||Lr);var s=ne.indexOf(t),o=i===Ke.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+o]||Bn(t,"scroll",Ku);var a=ne[s+o],l=a||(ne[s+o]=zl(ar(t,n),!0)||(ua(t)?i:zl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=mn.getProperty(t,"scrollBehavior")==="smooth"),l},kl=function(t,e,n){var i=t,s=t,o=ha(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var p=ha();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(g){var _=a,p=s,m=ha();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},ca=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},nm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},lm=function(){Qs=mn.core.globals().ScrollTrigger,Qs&&Qs.core&&Vx()},cm=function(t){return mn=t||om(),!Bl&&mn&&typeof document<"u"&&document.body&&(ni=window,Ir=document,Lr=Ir.documentElement,Ks=Ir.body,rm=[ni,Ir,Lr,Ks],kx=mn.utils.clamp,sm=mn.core.context||function(){},ds="onpointerenter"in Ks?"pointer":"mouse",im=He.isTouch=ni.matchMedia&&ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=He.eventTypes=("ontouchstart"in Lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return am=0},500),Bl=1),Qs||lm(),Bl};wn.op=Ke;ne.cache=0;var He=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Bl||cm(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Qs||lm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,A=n.onPress,x=n.onRelease,M=n.onRight,b=n.onLeft,E=n.onUp,v=n.onDown,T=n.onChangeX,C=n.onChangeY,D=n.onChange,I=n.onToggleX,O=n.onToggleY,L=n.onHover,B=n.onHoverEnd,G=n.onMove,k=n.ignoreCheck,K=n.isNormalizer,Z=n.onGestureStart,R=n.onGestureEnd,Q=n.onWheel,yt=n.onEnable,bt=n.onDisable,Gt=n.onClick,zt=n.scrollSpeed,St=n.capture,q=n.allowClicks,j=n.lockAxis,ut=n.onLockAxis;this.target=a=zn(a)||Lr,this.vars=n,d&&(d=mn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,zt=zt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ni.getComputedStyle(Ks).lineHeight)||22);var Ut,dt,Dt,wt,Rt,Ht,Qt,V=this,re=0,ve=0,Fe=n.passive||!h&&n.passive!==!1,Zt=or(a,wn),de=or(a,Ke),F=Zt(),Le=de(),qt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",P=ua(a),y=a.ownerDocument||Ir,z=[0,0,0],W=[0,0,0],$=0,ct=function(){return $=ha()},ot=function(rt,Bt){return(V.event=rt)&&d&&Gx(rt.target,d)||Bt&&qt&&rt.pointerType!=="touch"||k&&k(rt,Bt)},tt=function(){V._vx.reset(),V._vy.reset(),dt.pause(),f&&f(V)},nt=function(){var rt=V.deltaX=nm(z),Bt=V.deltaY=nm(W),st=Math.abs(rt)>=i,kt=Math.abs(Bt)>=i;D&&(st||kt)&&D(V,rt,Bt,z,W),st&&(M&&V.deltaX>0&&M(V),b&&V.deltaX<0&&b(V),T&&T(V),I&&V.deltaX<0!=re<0&&I(V),re=V.deltaX,z[0]=z[1]=z[2]=0),kt&&(v&&V.deltaY>0&&v(V),E&&V.deltaY<0&&E(V),C&&C(V),O&&V.deltaY<0!=ve<0&&O(V),ve=V.deltaY,W[0]=W[1]=W[2]=0),(wt||Dt)&&(G&&G(V),Dt&&(p&&Dt===1&&p(V),S&&S(V),Dt=0),wt=!1),Ht&&!(Ht=!1)&&ut&&ut(V),Rt&&(Q(V),Rt=!1),Ut=0},pt=function(rt,Bt,st){z[st]+=rt,W[st]+=Bt,V._vx.update(rt),V._vy.update(Bt),c?Ut||(Ut=requestAnimationFrame(nt)):nt()},Ct=function(rt,Bt){j&&!Qt&&(V.axis=Qt=Math.abs(rt)>Math.abs(Bt)?"x":"y",Ht=!0),Qt!=="y"&&(z[2]+=rt,V._vx.update(rt,!0)),Qt!=="x"&&(W[2]+=Bt,V._vy.update(Bt,!0)),c?Ut||(Ut=requestAnimationFrame(nt)):nt()},mt=function(rt){if(!ot(rt,1)){rt=ca(rt,h);var Bt=rt.clientX,st=rt.clientY,kt=Bt-V.x,Pt=st-V.y,Jt=V.isDragging;V.x=Bt,V.y=st,(Jt||(kt||Pt)&&(Math.abs(V.startX-Bt)>=s||Math.abs(V.startY-st)>=s))&&(Dt||(Dt=Jt?2:1),Jt||(V.isDragging=!0),Ct(kt,Pt))}},ft=V.onPress=function(at){ot(at,1)||at&&at.button||(V.axis=Qt=null,dt.pause(),V.isPressed=!0,at=ca(at),re=ve=0,V.startX=V.x=at.clientX,V.startY=V.y=at.clientY,V._vx.reset(),V._vy.reset(),Bn(K?a:y,Ei[1],mt,Fe,!0),V.deltaX=V.deltaY=0,A&&A(V))},lt=V.onRelease=function(at){if(!ot(at,1)){On(K?a:y,Ei[1],mt,!0);var rt=!isNaN(V.y-V.startY),Bt=V.isDragging,st=Bt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),kt=ca(at);!st&&rt&&(V._vx.reset(),V._vy.reset(),h&&q&&mn.delayedCall(.08,function(){if(ha()-$>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(y.createEvent){var Pt=y.createEvent("MouseEvents");Pt.initMouseEvent("click",!0,!0,ni,1,kt.screenX,kt.screenY,kt.clientX,kt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(Pt)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&Bt&&!K&&dt.restart(!0),Dt&&nt(),m&&Bt&&m(V),x&&x(V,st)}},Ft=function(rt){return rt.touches&&rt.touches.length>1&&(V.isGesturing=!0)&&Z(rt,V.isDragging)},Vt=function(){return(V.isGesturing=!1)||R(V)},N=function(rt){if(!ot(rt)){var Bt=Zt(),st=de();pt((Bt-F)*zt,(st-Le)*zt,1),F=Bt,Le=st,f&&dt.restart(!0)}},ht=function(rt){if(!ot(rt)){rt=ca(rt,h),Q&&(Rt=!0);var Bt=(rt.deltaMode===1?l:rt.deltaMode===2?ni.innerHeight:1)*g;pt(rt.deltaX*Bt,rt.deltaY*Bt,0),f&&!K&&dt.restart(!0)}},et=function(rt){if(!ot(rt)){var Bt=rt.clientX,st=rt.clientY,kt=Bt-V.x,Pt=st-V.y;V.x=Bt,V.y=st,wt=!0,f&&dt.restart(!0),(kt||Pt)&&Ct(kt,Pt)}},gt=function(rt){V.event=rt,L(V)},xt=function(rt){V.event=rt,B(V)},it=function(rt){return ot(rt)||ca(rt,h)&&Gt(V)};dt=V._dc=mn.delayedCall(u||.25,tt).pause(),V.deltaX=V.deltaY=0,V._vx=kl(0,50,!0),V._vy=kl(0,50,!0),V.scrollX=Zt,V.scrollY=de,V.isDragging=V.isGesturing=V.isPressed=!1,sm(this),V.enable=function(at){return V.isEnabled||(Bn(P?y:a,"scroll",Ku),o.indexOf("scroll")>=0&&Bn(P?y:a,"scroll",N,Fe,St),o.indexOf("wheel")>=0&&Bn(a,"wheel",ht,Fe,St),(o.indexOf("touch")>=0&&im||o.indexOf("pointer")>=0)&&(Bn(a,Ei[0],ft,Fe,St),Bn(y,Ei[2],lt),Bn(y,Ei[3],lt),q&&Bn(a,"click",ct,!0,!0),Gt&&Bn(a,"click",it),Z&&Bn(y,"gesturestart",Ft),R&&Bn(y,"gestureend",Vt),L&&Bn(a,ds+"enter",gt),B&&Bn(a,ds+"leave",xt),G&&Bn(a,ds+"move",et)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=wt=Dt=!1,V._vx.reset(),V._vy.reset(),F=Zt(),Le=de(),at&&at.type&&ft(at),yt&&yt(V)),V},V.disable=function(){V.isEnabled&&($s.filter(function(at){return at!==V&&ua(at.target)}).length||On(P?y:a,"scroll",Ku),V.isPressed&&(V._vx.reset(),V._vy.reset(),On(K?a:y,Ei[1],mt,!0)),On(P?y:a,"scroll",N,St),On(a,"wheel",ht,St),On(a,Ei[0],ft,St),On(y,Ei[2],lt),On(y,Ei[3],lt),On(a,"click",ct,!0),On(a,"click",it),On(y,"gesturestart",Ft),On(y,"gestureend",Vt),On(a,ds+"enter",gt),On(a,ds+"leave",xt),On(a,ds+"move",et),V.isEnabled=V.isPressed=V.isDragging=!1,bt&&bt(V))},V.kill=V.revert=function(){V.disable();var at=$s.indexOf(V);at>=0&&$s.splice(at,1),sr===V&&(sr=0)},$s.push(V),K&&ua(a)&&(sr=V),V.enable(_)},zx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();He.version="3.15.0";He.create=function(r){return new He(r)};He.register=cm;He.getAll=function(){return $s.slice()};He.getById=function(r){return $s.filter(function(t){return t.vars.id===r})[0]};om()&&mn.registerPlugin(He);var At,no,oe,xe,si,me,ff,nc,Ta,xa,da,Vl,Tn,sc,sf,Vn,hm,um,io,Am,Qu,Cm,kn,of,Rm,Pm,Dr,af,df,ro,pf,va,lf,ju,Gl=1,En=Date.now,tf=En(),Si=0,pa=0,fm=function(t,e,n){var i=ri(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},dm=function(t,e){return e&&(!ri(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Hx=function r(){return pa&&requestAnimationFrame(r)},pm=function(){return sc=1},mm=function(){return sc=0},Gi=function(t){return t},ma=function(t){return Math.round(t*1e5)/1e5||0},Im=function(){return typeof window<"u"},Lm=function(){return At||Im()&&(At=window.gsap)&&At.registerPlugin&&At},vs=function(t){return!!~ff.indexOf(t)},Dm=function(t){return(t==="Height"?pf:oe["inner"+t])||si["client"+t]||me["client"+t]},Nm=function(t){return ar(t,"getBoundingClientRect")||(vs(t)?function(){return ec.width=oe.innerWidth,ec.height=pf,ec}:function(){return lr(t)})},Wx=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=ar(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Dm(s):t["client"+s])||0}},Xx=function(t,e){return!e||~Ai.indexOf(t)?Nm(t):function(){return ec}},Hi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ar(t,n))?o()-Nm(t)()[s]:vs(t)?(si[n]||me[n])-Dm(i):t[n]-t["offset"+i])},Hl=function(t,e){for(var n=0;n<io.length;n+=3)(!e||~e.indexOf(io[n+1]))&&t(io[n],io[n+1],io[n+2])},ri=function(t){return typeof t=="string"},An=function(t){return typeof t=="function"},ga=function(t){return typeof t=="number"},ps=function(t){return typeof t=="object"},fa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},js=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},to=Math.abs,Um="left",Fm="top",mf="right",gf="bottom",gs="width",_s="height",ya="Right",Sa="Left",Ma="Top",ba="Bottom",Qe="padding",vi="margin",oo="Width",_f="Height",nn="px",yi=function(t){return oe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},qx=function(t){var e=yi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},gm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},lr=function(t,e){var n=e&&yi(t)[sf]!=="matrix(1, 0, 0, 1, 0, 0)"&&At.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ic=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Om=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Yx=function(t){return function(e){return At.utils.snap(Om(t),e)}},xf=function(t){var e=At.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Zx=function(t){return function(e,n){return xf(Om(t))(e,n.direction)}},Wl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Xl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},_m={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ql={toggleActions:"play",anticipatePin:0},rc={top:0,left:0,center:.5,bottom:1,right:1},Kl=function(t,e){if(ri(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in rc?rc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Yl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,g=xe.createElement("div"),_=vs(n)||ar(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?me:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,A=S?c:h,x="border-color:"+A+";font-size:"+f+";color:"+A+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(i===Ke?mf:gf)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ql(g,0,i,S),g},Ql=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+oo]=1,s["border"+a+oo]=0,s[n.p]=e+"px",At.set(t,s)},ie=[],cf={},Ea,xm=function(){return En()-Si>34&&(Ea||(Ea=requestAnimationFrame(cr)))},eo=function(){(!kn||!kn.isPressed||kn.startX>me.clientWidth)&&(ne.cache++,kn?Ea||(Ea=requestAnimationFrame(cr)):cr(),Si||Ss("scrollStart"),Si=En())},ef=function(){Pm=oe.innerWidth,Rm=oe.innerHeight},_a=function(t){ne.cache++,(t===!0||!Tn&&!Cm&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!of||Pm!==oe.innerWidth||Math.abs(oe.innerHeight-Rm)>oe.innerHeight*.25))&&nc.restart(!0)},ys={},Jx=[],Bm=function r(){return ln(jt,"scrollEnd",r)||ms(!0)},Ss=function(t){return ys[t]&&ys[t].map(function(e){return e()})||Jx},ii=[],zm=function(t){for(var e=0;e<ii.length;e+=5)(!t||ii[e+4]&&ii[e+4].query===t)&&(ii[e].style.cssText=ii[e+1],ii[e].getBBox&&ii[e].setAttribute("transform",ii[e+2]||""),ii[e+3].uncache=1)},km=function(){return ne.forEach(function(t){return An(t)&&++t.cacheID&&(t.rec=t())})},vf=function(t,e){var n;for(Vn=0;Vn<ie.length;Vn++)n=ie[Vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));va=!0,e&&zm(e),e||Ss("revert")},Vm=function(t,e){ne.cache++,(e||!Gn)&&ne.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),ri(t)&&(oe.history.scrollRestoration=df=t)},Gn,xs=0,vm,$x=function(){if(vm!==xs){var t=vm=xs;requestAnimationFrame(function(){return t===xs&&ms(!0)})}},Gm=function(){me.appendChild(ro),pf=!kn&&ro.offsetHeight||oe.innerHeight,me.removeChild(ro)},ym=function(t){return Ta(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ms=function(t,e){if(si=xe.documentElement,me=xe.body,ff=[oe,xe,si,me],Si&&!t&&!va){cn(jt,"scrollEnd",Bm);return}Gm(),Gn=jt.isRefreshing=!0,va||km();var n=Ss("refreshInit");Am&&jt.sort(),e||vf(),ne.forEach(function(i){An(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ie.slice(0).forEach(function(i){return i.refresh()}),va=!1,ie.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),lf=1,ym(!0),ie.forEach(function(i){var s=Hi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),ym(!1),lf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){An(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Vm(df,1),nc.pause(),xs++,Gn=2,cr(2),ie.forEach(function(i){return An(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=jt.isRefreshing=!1,Ss("refresh")},hf=0,jl=1,wa,cr=function(t){if(t===2||!Gn&&!va){jt.isUpdating=!0,wa&&wa.update(0);var e=ie.length,n=En(),i=n-tf>=50,s=e&&ie[0].scroll();if(jl=hf>s?-1:1,Gn||(hf=s),i&&(Si&&!sc&&n-Si>200&&(Si=0,Ss("scrollEnd")),da=tf,tf=n),jl<0){for(Vn=e;Vn-- >0;)ie[Vn]&&ie[Vn].update(0,i);jl=1}else for(Vn=0;Vn<e;Vn++)ie[Vn]&&ie[Vn].update(0,i);jt.isUpdating=!1}Ea=0},uf=[Um,Fm,gf,mf,vi+ba,vi+ya,vi+Ma,vi+Sa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tc=uf.concat([gs,_s,"boxSizing","max"+oo,"max"+_f,"position",vi,Qe,Qe+Ma,Qe+ya,Qe+ba,Qe+Sa]),Kx=function(t,e,n){so(n);var i=t._gsap;if(i.spacerIsNative)so(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},nf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=uf.length,o=e.style,a=t.style,l;s--;)l=uf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[gf]=a[mf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[gs]=ic(t,wn)+nn,o[_s]=ic(t,Ke)+nn,o[Qe]=a[vi]=a[Fm]=a[Um]="0",so(i),a[gs]=a["max"+oo]=n[gs],a[_s]=a["max"+_f]=n[_s],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Qx=/([A-Z])/g,so=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||At.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Qx,"-$1").toLowerCase())}},Zl=function(t){for(var e=tc.length,n=t.style,i=[],s=0;s<e;s++)i.push(tc[s],n[tc[s]]);return i.t=t,i},jx=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},ec={left:0,top:0},Sm=function(t,e,n,i,s,o,a,l,c,h,f,u,d,g){An(t)&&(t=t(l)),ri(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Kl("0"+t.substr(3),n):0));var _=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(t)||(t=+t),ga(t))d&&(t=At.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&Ql(a,n,i,!0);else{An(e)&&(e=e(l));var A=(t||"0").split(" "),x,M,b,E;S=zn(e,l)||me,x=lr(S)||{},(!x||!x.left&&!x.top)&&yi(S).display==="none"&&(E=S.style.display,S.style.display="block",x=lr(S),E?S.style.display=E:S.style.removeProperty("display")),M=Kl(A[0],x[i.d]),b=Kl(A[1]||"0",n),t=x[i.p]-c[i.p]-h+M+s-b,a&&Ql(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var v=t+n,T=o._isStart;p="scroll"+i.d2,Ql(o,v,i,T&&v>20||!T&&(f?Math.max(me[p],si[p]):o.parentNode[p])<=v+1),f&&(c=lr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return d&&S&&(p=lr(S),d.seek(u),m=lr(S),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*u),d&&d.seek(_),d?t:Math.round(t)},tv=/(webkit|moz|length|cssText|inset)/i,Mm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=yi(t);for(o in a)!+o&&!tv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;At.core.getCache(t).uncache=1,e.appendChild(t)}},Hm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Jl=function(t,e,n){var i={};i[e.p]="+="+n,At.set(t,i)},bm=function(t,e){var n=or(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,g={};c=c||n();var _=Hm(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){ne.cache++,o.tween&&cr()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=At.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),jt.isTouch&&cn(t,"touchmove",n.wheelHandler),s},jt=(function(){function r(e,n){no||r.register(At)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),af(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!pa){this.update=this.refresh=this.kill=Gi;return}n=gm(ri(n)||ga(n)||n.nodeType?{trigger:n}:n,ql);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,A=s.once,x=s.snap,M=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Ke,D=!f&&f!==0,I=zn(n.scroller||oe),O=At.core.getCache(I),L=vs(I),B=("pinType"in n?n.pinType:ar(I,"pinType")||L&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:ql.markers,Z=L?0:parseFloat(yi(I)["border"+C.p2+oo])||0,R=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(R)},yt=Wx(I,L,C),bt=Xx(I,L),Gt=0,zt=0,St=0,q=or(I,C),j,ut,Ut,dt,Dt,wt,Rt,Ht,Qt,V,re,ve,Fe,Zt,de,F,Le,qt,P,y,z,W,$,ct,ot,tt,nt,pt,Ct,mt,ft,lt,Ft,Vt,N,ht,et,gt,xt;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=I,R.scroll=E?E.time.bind(E):q,dt=q(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Am=1,n.refreshPriority===-9999&&(wa=R)),O.tweenScroll=O.tweenScroll||{top:bm(I,Ke),left:bm(I,wn)},R.tweenTo=j=O.tweenScroll[C.p],R.scrubDuration=function(st){Ft=ga(st)&&st,Ft?lt?lt.duration(st):lt=At.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ft,paused:!0,onComplete:function(){return m&&m(R)}}):(lt&&lt.progress(1).kill(),lt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),mt=0,l||(l=i.vars.id)),x&&((!ps(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in me.style&&At.set(L?[me,si]:I,{scrollBehavior:"auto"}),ne.forEach(function(st){return An(st)&&st.target===(L?xe.scrollingElement||si:I)&&(st.smooth=!1)}),Ut=An(x.snapTo)?x.snapTo:x.snapTo==="labels"?Yx(i):x.snapTo==="labelsDirectional"?Zx(i):x.directional!==!1?function(st,kt){return xf(x.snapTo)(st,En()-zt<500?0:kt.direction)}:At.utils.snap(x.snapTo),Vt=x.duration||{min:.1,max:2},Vt=ps(Vt)?xa(Vt.min,Vt.max):xa(Vt,Vt),N=At.delayedCall(x.delay||Ft/2||.1,function(){var st=q(),kt=En()-zt<500,Pt=j.tween;if((kt||Math.abs(R.getVelocity())<10)&&!Pt&&!sc&&Gt!==st){var Jt=(st-wt)/Zt,Ze=i&&!D?i.totalProgress():Jt,se=kt?0:(Ze-ft)/(En()-da)*1e3||0,Ce=At.utils.clamp(-Jt,1-Jt,to(se/2)*se/.185),on=Jt+(x.inertia===!1?0:Ce),Re,Se,he=x,Ln=he.onStart,Te=he.onInterrupt,vn=he.onComplete;if(Re=Ut(on,R),ga(Re)||(Re=on),Se=Math.max(0,Math.round(wt+Re*Zt)),st<=Rt&&st>=wt&&Se!==st){if(Pt&&!Pt._initted&&Pt.data<=to(Se-st))return;x.inertia===!1&&(Ce=Re-Jt),j(Se,{duration:Vt(to(Math.max(to(on-Ze),to(Re-Ze))*.185/se/.05||0)),ease:x.ease||"power3",data:to(Se-st),onInterrupt:function(){return N.restart(!0)&&Te&&js(R,Te)},onComplete:function(){R.update(),Gt=q(),i&&!D&&(lt?lt.resetTo("totalProgress",Re,i._tTime/i._tDur):i.progress(Re)),mt=ft=i&&!D?i.totalProgress():R.progress,S&&S(R),vn&&js(R,vn)}},st,Ce*Zt,Se-st-Ce*Zt),Ln&&js(R,Ln,j.tween)}}else R.isActive&&Gt!==st&&N.restart(!0)}).pause()),l&&(cf[l]=R),u=R.trigger=zn(u||d!==!0&&d),xt=u&&u._gsap&&u._gsap.stRevert,xt&&(xt=xt(R)),d=d===!0?u:zn(d),ri(a)&&(a={targets:u,className:a}),d&&(g===!1||g===vi||(g=!g&&d.parentNode&&d.parentNode.style&&yi(d.parentNode).display==="flex"?!1:Qe),R.pin=d,ut=At.core.getCache(d),ut.spacer?de=ut.pinState:(b&&(b=zn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),ut.spacerIsNative=!!b,b&&(ut.spacerState=Zl(b))),ut.spacer=qt=b||xe.createElement("div"),qt.classList.add("pin-spacer"),l&&qt.classList.add("pin-spacer-"+l),ut.pinState=de=Zl(d)),n.force3D!==!1&&At.set(d,{force3D:!0}),R.spacer=qt=ut.spacer,Ct=yi(d),ct=Ct[g+C.os2],y=At.getProperty(d),z=At.quickSetter(d,C.a,nn),nf(d,qt,Ct),Le=Zl(d)),K){ve=ps(K)?gm(K,_m):_m,V=Yl("scroller-start",l,I,C,ve,0),re=Yl("scroller-end",l,I,C,ve,0,V),P=V["offset"+C.op.d2];var it=zn(ar(I,"content")||I);Ht=this.markerStart=Yl("start",l,it,C,ve,P,0,E),Qt=this.markerEnd=Yl("end",l,it,C,ve,P,0,E),E&&(gt=At.quickSetter([Ht,Qt],C.a,nn)),!B&&!(Ai.length&&ar(I,"fixedMarkers")===!0)&&(qx(L?me:I),At.set([V,re],{force3D:!0}),tt=At.quickSetter(V,C.a,nn),pt=At.quickSetter(re,C.a,nn))}if(E){var at=E.vars.onUpdate,rt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(E,rt||[])})}if(R.previous=function(){return ie[ie.indexOf(R)-1]},R.next=function(){return ie[ie.indexOf(R)+1]},R.revert=function(st,kt){if(!kt)return R.kill(!0);var Pt=st!==!1||!R.enabled,Jt=Tn;Pt!==R.isReverted&&(Pt&&(ht=Math.max(q(),R.scroll.rec||0),St=R.progress,et=i&&i.progress()),Ht&&[Ht,Qt,V,re].forEach(function(Ze){return Ze.style.display=Pt?"none":"block"}),Pt&&(Tn=R,R.update(Pt)),d&&(!M||!R.isActive)&&(Pt?Kx(d,qt,de):nf(d,qt,yi(d),ot)),Pt||R.update(Pt),Tn=Jt,R.isReverted=Pt)},R.refresh=function(st,kt,Pt,Jt){if(!((Tn||!R.enabled)&&!kt)){if(d&&st&&Si){cn(r,"scrollEnd",Bm);return}!Gn&&Q&&Q(R),Tn=R,j.tween&&!Pt&&(j.tween.kill(),j.tween=0),lt&&lt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(_t){return _t.vars.immediateRender&&_t.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ze=yt(),se=bt(),Ce=E?E.duration():Hi(I,C),on=Zt<=.01||!Zt,Re=0,Se=Jt||0,he=ps(Pt)?Pt.end:n.end,Ln=n.endTrigger||u,Te=ps(Pt)?Pt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),vn=R.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,R),Dn=u&&Math.max(0,ie.indexOf(R))||0,Je=Dn,ke,tn,Fi,Fs,an,Xe,pi,Os,w,U,J,H,X;for(K&&ps(Pt)&&(H=At.getProperty(V,C.p),X=At.getProperty(re,C.p));Je-- >0;)Xe=ie[Je],Xe.end||Xe.refresh(0,1)||(Tn=R),pi=Xe.pin,pi&&(pi===u||pi===d||pi===vn)&&!Xe.isReverted&&(U||(U=[]),U.unshift(Xe),Xe.revert(!0,!0)),Xe!==ie[Je]&&(Dn--,Je--);for(An(Te)&&(Te=Te(R)),Te=fm(Te,"start",R),wt=Sm(Te,u,Ze,C,q(),Ht,V,R,se,Z,B,Ce,E,R._startClamp&&"_startClamp")||(d?-.001:0),An(he)&&(he=he(R)),ri(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(ri(Te)?Te.split(" ")[0]:"")+he:(Re=Kl(he.substr(2),Ze),he=ri(Te)?Te:(E?At.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,wt):wt)+Re,Ln=u)),he=fm(he,"end",R),Rt=Math.max(wt,Sm(he||(Ln?"100% 0":Ce),Ln,Ze,C,q()+Re,Qt,re,R,se,Z,B,Ce,E,R._endClamp&&"_endClamp"))||-.001,Re=0,Je=Dn;Je--;)Xe=ie[Je]||{},pi=Xe.pin,pi&&Xe.start-Xe._pinPush<=wt&&!E&&Xe.end>0&&(ke=Xe.end-(R._startClamp?Math.max(0,Xe.start):Xe.start),(pi===u&&Xe.start-Xe._pinPush<wt||pi===vn)&&isNaN(Te)&&(Re+=ke*(1-Xe.progress)),pi===d&&(Se+=ke));if(wt+=Re,Rt+=Re,R._startClamp&&(R._startClamp+=Re),R._endClamp&&!Gn&&(R._endClamp=Rt||-.001,Rt=Math.min(Rt,Hi(I,C))),Zt=Rt-wt||(wt-=.01)&&.001,on&&(St=At.utils.clamp(0,1,At.utils.normalize(wt,Rt,ht))),R._pinPush=Se,Ht&&Re&&(ke={},ke[C.a]="+="+Re,vn&&(ke[C.p]="-="+q()),At.set([Ht,Qt],ke)),d&&!(lf&&R.end>=Hi(I,C)))ke=yi(d),Fs=C===Ke,Fi=q(),W=parseFloat(y(C.a))+Se,!Ce&&Rt>1&&(J=(L?xe.scrollingElement||si:I).style,J={style:J,value:J["overflow"+C.a.toUpperCase()]},L&&yi(me)["overflow"+C.a.toUpperCase()]!=="scroll"&&(J.style["overflow"+C.a.toUpperCase()]="scroll")),nf(d,qt,ke),Le=Zl(d),tn=lr(d,!0),Os=B&&or(I,Fs?wn:Ke)(),g?(ot=[g+C.os2,Zt+Se+nn],ot.t=qt,Je=g===Qe?ic(d,C)+Zt+Se:0,Je&&(ot.push(C.d,Je+nn),qt.style.flexBasis!=="auto"&&(qt.style.flexBasis=Je+nn)),so(ot),vn&&ie.forEach(function(_t){_t.pin===vn&&_t.vars.pinSpacing!==!1&&(_t._subPinOffset=!0)}),B&&q(ht)):(Je=ic(d,C),Je&&qt.style.flexBasis!=="auto"&&(qt.style.flexBasis=Je+nn)),B&&(an={top:tn.top+(Fs?Fi-wt:Os)+nn,left:tn.left+(Fs?Os:Fi-wt)+nn,boxSizing:"border-box",position:"fixed"},an[gs]=an["max"+oo]=Math.ceil(tn.width)+nn,an[_s]=an["max"+_f]=Math.ceil(tn.height)+nn,an[vi]=an[vi+Ma]=an[vi+ya]=an[vi+ba]=an[vi+Sa]="0",an[Qe]=ke[Qe],an[Qe+Ma]=ke[Qe+Ma],an[Qe+ya]=ke[Qe+ya],an[Qe+ba]=ke[Qe+ba],an[Qe+Sa]=ke[Qe+Sa],F=jx(de,an,M),Gn&&q(0)),i?(w=i._initted,Qu(1),i.render(i.duration(),!0,!0),$=y(C.a)-W+Zt+Se,nt=Math.abs(Zt-$)>1,B&&nt&&F.splice(F.length-2,2),i.render(0,!0,!0),w||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Qu(0)):$=Zt,J&&(J.value?J.style["overflow"+C.a.toUpperCase()]=J.value:J.style.removeProperty("overflow-"+C.a));else if(u&&q()&&!E)for(tn=u.parentNode;tn&&tn!==me;)tn._pinOffset&&(wt-=tn._pinOffset,Rt-=tn._pinOffset),tn=tn.parentNode;U&&U.forEach(function(_t){return _t.revert(!1,!0)}),R.start=wt,R.end=Rt,dt=Dt=Gn?ht:q(),!E&&!Gn&&(dt<ht&&q(ht),R.scroll.rec=0),R.revert(!1,!0),zt=En(),N&&(Gt=-1,N.restart(!0)),Tn=0,i&&D&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(on||St!==R.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||St||i.vars.immediateRender!==!1)&&i.totalProgress(E&&wt<-.001&&!St?At.utils.normalize(wt,Rt,0):St,!0),R.progress=on||(dt-wt)/Zt===St?0:St),d&&g&&(qt._pinOffset=Math.round(R.progress*$)),lt&&lt.invalidate(),isNaN(H)||(H-=At.getProperty(V,C.p),X-=At.getProperty(re,C.p),Jl(V,C,H),Jl(Ht,C,H-(Jt||0)),Jl(re,C,X),Jl(Qt,C,X-(Jt||0))),on&&!Gn&&R.update(),h&&!Gn&&!Fe&&(Fe=!0,h(R),Fe=!1)}},R.getVelocity=function(){return(q()-Dt)/(En()-da)*1e3||0},R.endAnimation=function(){fa(R.callbackAnimation),i&&(lt?lt.progress(1):i.paused()?D||fa(i,R.direction<0,1):fa(i,i.reversed()))},R.labelToScroll=function(st){return i&&i.labels&&(wt||R.refresh()||wt)+i.labels[st]/i.duration()*Zt||0},R.getTrailing=function(st){var kt=ie.indexOf(R),Pt=R.direction>0?ie.slice(0,kt).reverse():ie.slice(kt+1);return(ri(st)?Pt.filter(function(Jt){return Jt.vars.preventOverlaps===st}):Pt).filter(function(Jt){return R.direction>0?Jt.end<=wt:Jt.start>=Rt})},R.update=function(st,kt,Pt){if(!(E&&!Pt&&!st)){var Jt=Gn===!0?ht:R.scroll(),Ze=st?0:(Jt-wt)/Zt,se=Ze<0?0:Ze>1?1:Ze||0,Ce=R.progress,on,Re,Se,he,Ln,Te,vn,Dn;if(kt&&(Dt=dt,dt=E?q():Jt,x&&(ft=mt,mt=i&&!D?i.totalProgress():se)),p&&d&&!Tn&&!Gl&&Si&&(!se&&wt<Jt+(Jt-Dt)/(En()-da)*p?se=1e-4:se===1&&Rt>Jt+(Jt-Dt)/(En()-da)*p&&(se=.9999)),se!==Ce&&R.enabled){if(on=R.isActive=!!se&&se<1,Re=!!Ce&&Ce<1,Te=on!==Re,Ln=Te||!!se!=!!Ce,R.direction=se>Ce?1:-1,R.progress=se,Ln&&!Tn&&(Se=se&&!Ce?0:se===1?1:Ce===1?2:3,D&&(he=!Te&&k[Se+1]!=="none"&&k[Se+1]||k[Se],Dn=i&&(he==="complete"||he==="reset"||he in i))),T&&(Te||Dn)&&(Dn||f||!i)&&(An(T)?T(R):R.getTrailing(T).forEach(function(Fi){return Fi.endAnimation()})),D||(lt&&!Tn&&!Gl?(lt._dp._time-lt._start!==lt._time&&lt.render(lt._dp._time-lt._start),lt.resetTo?lt.resetTo("totalProgress",se,i._tTime/i._tDur):(lt.vars.totalProgress=se,lt.invalidate().restart())):i&&i.totalProgress(se,!!(Tn&&(zt||st)))),d){if(st&&g&&(qt.style[g+C.os2]=ct),!B)z(ma(W+$*se));else if(Ln){if(vn=!st&&se>Ce&&Rt+1>Jt&&Jt+1>=Hi(I,C),M)if(!st&&(on||vn)){var Je=lr(d,!0),ke=Jt-wt;Mm(d,me,Je.top+(C===Ke?ke:0)+nn,Je.left+(C===Ke?0:ke)+nn)}else Mm(d,qt);so(on||vn?F:Le),nt&&se<1&&on||z(W+(se===1&&!vn?$:0))}}x&&!j.tween&&!Tn&&!Gl&&N.restart(!0),a&&(Te||A&&se&&(se<1||!ju))&&Ta(a.targets).forEach(function(Fi){return Fi.classList[on||A?"add":"remove"](a.className)}),o&&!D&&!st&&o(R),Ln&&!Tn?(D&&(Dn&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(R)),(Te||!ju)&&(c&&Te&&js(R,c),G[Se]&&js(R,G[Se]),A&&(se===1?R.kill(!1,1):G[Se]=0),Te||(Se=se===1?1:3,G[Se]&&js(R,G[Se]))),v&&!on&&Math.abs(R.getVelocity())>(ga(v)?v:2500)&&(fa(R.callbackAnimation),lt?lt.progress(1):fa(i,he==="reverse"?1:!se,1))):D&&o&&!Tn&&o(R)}if(pt){var tn=E?Jt/E.duration()*(E._caScrollDist||0):Jt;tt(tn+(V._isFlipped?1:0)),pt(tn)}gt&&gt(-Jt/E.duration()*(E._caScrollDist||0))}},R.enable=function(st,kt){R.enabled||(R.enabled=!0,cn(I,"resize",_a),L||cn(I,"scroll",eo),Q&&cn(r,"refreshInit",Q),st!==!1&&(R.progress=St=0,dt=Dt=Gt=q()),kt!==!1&&R.refresh())},R.getTween=function(st){return st&&j?j.tween:lt},R.setPositions=function(st,kt,Pt,Jt){if(E){var Ze=E.scrollTrigger,se=E.duration(),Ce=Ze.end-Ze.start;st=Ze.start+Ce*st/se,kt=Ze.start+Ce*kt/se}R.refresh(!1,!1,{start:dm(st,Pt&&!!R._startClamp),end:dm(kt,Pt&&!!R._endClamp)},Jt),R.update()},R.adjustPinSpacing=function(st){if(ot&&st){var kt=ot.indexOf(C.d)+1;ot[kt]=parseFloat(ot[kt])+st+nn,ot[1]=parseFloat(ot[1])+st+nn,so(ot)}},R.disable=function(st,kt){if(st!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,kt||lt&&lt.pause(),ht=0,ut&&(ut.uncache=1),Q&&ln(r,"refreshInit",Q),N&&(N.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!L)){for(var Pt=ie.length;Pt--;)if(ie[Pt].scroller===I&&ie[Pt]!==R)return;ln(I,"resize",_a),L||ln(I,"scroll",eo)}},R.kill=function(st,kt){R.disable(st,kt),lt&&!kt&&lt.kill(),l&&delete cf[l];var Pt=ie.indexOf(R);Pt>=0&&ie.splice(Pt,1),Pt===Vn&&jl>0&&Vn--,Pt=0,ie.forEach(function(Jt){return Jt.scroller===R.scroller&&(Pt=1)}),Pt||Gn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),kt||i.kill()),Ht&&[Ht,Qt,V,re].forEach(function(Jt){return Jt.parentNode&&Jt.parentNode.removeChild(Jt)}),wa===R&&(wa=0),d&&(ut&&(ut.uncache=1),Pt=0,ie.forEach(function(Jt){return Jt.pin===d&&Pt++}),Pt||(ut.spacer=0)),n.onKill&&n.onKill(R)},ie.push(R),R.enable(!1,!1),xt&&xt(R),i&&i.add&&!Zt){var Bt=R.update;R.update=function(){R.update=Bt,ne.cache++,wt||Rt||R.refresh()},At.delayedCall(.01,R.update),Zt=.01,wt=Rt=0}else R.refresh();d&&$x()},r.register=function(n){return no||(At=n||Lm(),Im()&&window.document&&r.enable(),no=pa),no},r.defaults=function(n){if(n)for(var i in n)ql[i]=n[i];return ql},r.disable=function(n,i){pa=0,ie.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(oe,"wheel",eo),ln(xe,"scroll",eo),clearInterval(Vl),ln(xe,"touchcancel",Gi),ln(me,"touchstart",Gi),Wl(ln,xe,"pointerdown,touchstart,mousedown",pm),Wl(ln,xe,"pointerup,touchend,mouseup",mm),nc.kill(),Hl(ln);for(var s=0;s<ne.length;s+=3)Xl(ln,ne[s],ne[s+1]),Xl(ln,ne[s],ne[s+2])},r.enable=function(){if(oe=window,xe=document,si=xe.documentElement,me=xe.body,At){if(Ta=At.utils.toArray,xa=At.utils.clamp,af=At.core.context||Gi,Qu=At.core.suppressOverwrites||Gi,df=oe.history.scrollRestoration||"auto",hf=oe.pageYOffset||0,At.core.globals("ScrollTrigger",r),me){pa=1,ro=document.createElement("div"),ro.style.height="100vh",ro.style.position="absolute",Gm(),Hx(),He.register(At),r.isTouch=He.isTouch,Dr=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),of=He.isTouch===1,cn(oe,"wheel",eo),ff=[oe,xe,si,me],At.matchMedia?(r.matchMedia=function(h){var f=At.matchMedia(),u;for(u in h)f.add(u,h[u]);return f},At.addEventListener("matchMediaInit",function(){km(),vf()}),At.addEventListener("matchMediaRevert",function(){return zm()}),At.addEventListener("matchMedia",function(){ms(0,1),Ss("matchMedia")}),At.matchMedia().add("(orientation: portrait)",function(){return ef(),ef})):console.warn("Requires GSAP 3.11.0 or later"),ef(),cn(xe,"scroll",eo);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=At.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=lr(me),Ke.m=Math.round(a.top+Ke.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),Vl=setInterval(xm,250),At.delayedCall(.5,function(){return Gl=0}),cn(xe,"touchcancel",Gi),cn(me,"touchstart",Gi),Wl(cn,xe,"pointerdown,touchstart,mousedown",pm),Wl(cn,xe,"pointerup,touchend,mouseup",mm),sf=At.utils.checkPrefix("transform"),tc.push(sf),no=En(),nc=At.delayedCall(.2,ms).pause(),io=[xe,"visibilitychange",function(){var h=oe.innerWidth,f=oe.innerHeight;xe.hidden?(hm=h,um=f):(hm!==h||um!==f)&&_a()},xe,"DOMContentLoaded",ms,oe,"load",ms,oe,"resize",_a],Hl(cn),ie.forEach(function(h){return h.enable(0,1)}),l=0;l<ne.length;l+=3)Xl(ln,ne[l],ne[l+1]),Xl(ln,ne[l],ne[l+2])}else if(xe){var c=function h(){r.enable(),xe.removeEventListener("DOMContentLoaded",h)};xe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ju=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Vl)||(Vl=i)&&setInterval(xm,i),"ignoreMobileResize"in n&&(of=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Hl(ln)||Hl(cn,n.autoRefreshEvents||"none"),Cm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),o=ne.indexOf(s),a=vs(s);~o&&ne.splice(o,a?6:2),i&&(a?Ai.unshift(oe,i,me,i,si,i):Ai.unshift(s,i))},r.clearMatchMedia=function(n){ie.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ri(n)?zn(n):n).getBoundingClientRect(),a=o[s?gs:_s]*i||0;return s?o.right-a>0&&o.left+a<oe.innerWidth:o.bottom-a>0&&o.top+a<oe.innerHeight},r.positionInViewport=function(n,i,s){ri(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[s?gs:_s],l=i==null?a/2:i in rc?rc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/oe.innerWidth:(o.top+l)/oe.innerHeight},r.killAll=function(n){if(ie.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ys.killAll||[];ys={},i.forEach(function(s){return s()})}},r})();jt.version="3.15.0";jt.saveStyles=function(r){return r?Ta(r).forEach(function(t){if(t&&t.style){var e=ii.indexOf(t);e>=0&&ii.splice(e,5),ii.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),At.core.getCache(t),af())}}):ii};jt.revert=function(r,t){return vf(!r,t)};jt.create=function(r,t){return new jt(r,t)};jt.refresh=function(r){return r?_a(!0):(no||jt.register())&&ms(!0)};jt.update=function(r){return++ne.cache&&cr(r===!0?2:0)};jt.clearScrollMemory=Vm;jt.maxScroll=function(r,t){return Hi(r,t?wn:Ke)};jt.getScrollFunc=function(r,t){return or(zn(r),t?wn:Ke)};jt.getById=function(r){return cf[r]};jt.getAll=function(){return ie.filter(function(r){return r.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!Si};jt.snapDirectional=xf;jt.addEventListener=function(r,t){var e=ys[r]||(ys[r]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(r,t){var e=ys[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=At.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),u.push(g),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&An(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return An(s)&&(s=s(),cn(jt,"refresh",function(){return s=t.batchMax()})),Ta(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(jt.create(c))}),e};var wm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},rf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===si&&r(me,e)},$l={auto:1,scroll:1},ev=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||At.core.getCache(s),a=En(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($l[(l=yi(s)).overflowY]||$l[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!vs(s)&&($l[(l=yi(s)).overflowY]||$l[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Wm=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&ev,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(xe,He.eventTypes[0],Em,!1,!0)},onDisable:function(){return ln(xe,He.eventTypes[0],Em,!0)}})},nv=/(input|label|select|textarea)/i,Tm,Em=function(t){var e=nv.test(t.target.tagName);(e||Tm)&&(t._gsapAllow=!0,Tm=e)},iv=function(t){ps(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=zn(t.target)||si,h=At.core.globals().ScrollSmoother,f=h&&h.get(),u=Dr&&(t.content&&zn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=or(c,Ke),g=or(c,wn),_=1,p=(He.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,m=0,S=An(i)?function(){return i(a)}:function(){return i||2.8},A,x,M=Wm(c,t.type,!0,s),b=function(){return x=!1},E=Gi,v=Gi,T=function(){l=Hi(c,Ke),v=xa(Dr?1:0,l),n&&(E=xa(0,Hi(c,wn))),A=xs},C=function(){u._gsap.y=ma(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(x){requestAnimationFrame(b);var K=ma(a.deltaY/2),Z=v(d.v-K);if(u&&Z!==d.v+d.offset){d.offset=Z-d.v;var R=ma((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",d.cacheID=ne.cache,cr()}return!0}d.offset&&C(),x=!0},I,O,L,B,G=function(){T(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return u&&At.set(u,{y:"+=0"}),t.ignoreCheck=function(k){return Dr&&k.type==="touchmove"&&D(k)||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){x=!1;var k=_;_=ma((oe.visualViewport&&oe.visualViewport.scale||1)/p),I.pause(),k!==_&&rf(c,_>1.01?!0:n?!1:"x"),O=g(),L=d(),T(),A=xs},t.onRelease=t.onGestureStart=function(k,K){if(d.offset&&C(),!K)B.restart(!0);else{ne.cache++;var Z=S(),R,Q;n&&(R=g(),Q=R+Z*.05*-k.velocityX/.227,Z*=wm(g,R,Q,Hi(c,wn)),I.vars.scrollX=E(Q)),R=d(),Q=R+Z*.05*-k.velocityY/.227,Z*=wm(d,R,Q,Hi(c,Ke)),I.vars.scrollY=v(Q),I.invalidate().duration(Z).play(.01),(Dr&&I.vars.scrollY>=l||R>=l-1)&&At.to({},{onUpdate:G,duration:Z})}o&&o(k)},t.onWheel=function(){I._ts&&I.pause(),En()-m>1e3&&(A=0,m=En())},t.onChange=function(k,K,Z,R,Q){if(xs!==A&&T(),K&&n&&g(E(R[2]===K?O+(k.startX-k.x):g()+K-R[1])),Z){d.offset&&C();var yt=Q[2]===Z,bt=yt?L+k.startY-k.y:d()+Z-Q[1],Gt=v(bt);yt&&bt!==Gt&&(L+=Gt-bt),d(Gt)}(Z||K)&&cr()},t.onEnable=function(){rf(c,n?!1:"x"),jt.addEventListener("refresh",G),cn(oe,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},t.onDisable=function(){rf(c,!0),ln(oe,"resize",G),jt.removeEventListener("refresh",G),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=Dr,Dr&&!d()&&d(1),Dr&&At.ticker.add(Gi),B=a._dc,I=At.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Hm(d,d(),function(){return I.pause()})},onUpdate:cr,onComplete:B.vars.onComplete}),a};jt.sort=function(r){if(An(r))return ie.sort(r);var t=oe.pageYOffset||0;return jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+oe.innerHeight}),ie.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};jt.observe=function(r){return new He(r)};jt.normalizeScroll=function(r){if(typeof r>"u")return kn;if(r===!0&&kn)return kn.enable();if(r===!1){kn&&kn.kill(),kn=r;return}var t=r instanceof He?r:iv(r);return kn&&kn.target===t.target&&kn.kill(),vs(t.target)&&(kn=t),t};jt.core={_getVelocityProp:kl,_inputObserver:Wm,_scrollers:ne,_proxies:Ai,bridge:{ss:function(){Si||Ss("scrollStart"),Si=En()},ref:function(){return Tn}}};Lm()&&At.registerPlugin(jt);var Xm="1.3.26";function Zm(r,t,e){return Math.max(r,Math.min(t,e))}function rv(r,t,e){return(1-e)*r+e*t}function sv(r,t,e,n){return rv(r,t,1-Math.exp(-e*n))}function ov(r,t){return(r%t+t)%t}var av=class{constructor(){Nt(this,"isRunning",!1);Nt(this,"value",0);Nt(this,"from",0);Nt(this,"to",0);Nt(this,"currentTime",0);Nt(this,"lerp");Nt(this,"duration");Nt(this,"easing");Nt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Zm(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=sv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function lv(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var cv=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Nt(this,"width",0);Nt(this,"height",0);Nt(this,"scrollHeight",0);Nt(this,"scrollWidth",0);Nt(this,"debouncedResize");Nt(this,"wrapperResizeObserver");Nt(this,"contentResizeObserver");Nt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Nt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Nt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=lv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Jm=class{constructor(){Nt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},hv=100/6,Nr={passive:!1};function qm(r,t){return r===1?hv:r===2?t:1}var uv=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Nt(this,"touchStart",{x:0,y:0});Nt(this,"lastDelta",{x:0,y:0});Nt(this,"window",{width:0,height:0});Nt(this,"emitter",new Jm);Nt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Nt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Nt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Nt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=qm(n,this.window.width),s=qm(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Nt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Nr),this.element.addEventListener("touchstart",this.onTouchStart,Nr),this.element.addEventListener("touchmove",this.onTouchMove,Nr),this.element.addEventListener("touchend",this.onTouchEnd,Nr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Nr),this.element.removeEventListener("touchstart",this.onTouchStart,Nr),this.element.removeEventListener("touchmove",this.onTouchMove,Nr),this.element.removeEventListener("touchend",this.onTouchEnd,Nr)}},Ym=r=>Math.min(1,1.001-2**(-10*r)),$m=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:S=!0,autoRaf:A=!1,anchors:x=!1,autoToggle:M=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:T=!1,respectReducedMotion:C=!0}={}){Nt(this,"_isScrolling",!1);Nt(this,"_isStopped",!1);Nt(this,"_isLocked",!1);Nt(this,"_preventNextNativeScrollEvent",!1);Nt(this,"_resetVelocityTimeout",null);Nt(this,"_rafId",null);Nt(this,"_isDraggingSelection",!1);Nt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Nt(this,"isTouching");Nt(this,"isIos");Nt(this,"time",0);Nt(this,"userData",{});Nt(this,"lastVelocity",0);Nt(this,"velocity",0);Nt(this,"direction",0);Nt(this,"options");Nt(this,"targetScroll");Nt(this,"animatedScroll");Nt(this,"animate",new av);Nt(this,"emitter",new Jm);Nt(this,"dimensions");Nt(this,"virtualScroll");Nt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Nt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Nt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Nt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Nt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Nt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Nt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Nt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Xm,window.lenis||(window.lenis={}),window.lenis.version=Xm,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Ym:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:S,autoRaf:A,anchors:x,autoToggle:M,allowNestedScroll:b,naiveDimensions:v,stopInertiaOnNavigate:T,respectReducedMotion:C},this.dimensions=new cv(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new uv(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,d=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(g=u),g){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}let _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),S=getComputedStyle(this.rootElement),A=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(A)?0:A)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=Zm(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Ym:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,f,u,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();let b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=f>d,l=u>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,m,S,A,x,M;if(_==="horizontal")p=Math.round(r.scrollLeft),m=f-d,S=t,A=s,x=a,M=c;else if(_==="vertical")p=Math.round(r.scrollTop),m=u-g,S=e,A=o,x=l,M=h;else return!1;return!M&&(p>=m||p<=0)?!0:(S>0?p<m:p>0)&&A&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ov(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Sg=0,Jf=1,Mg=2;var el=1,bg=2,Fo=3,Jr=0,xn=1,di=2,Ki=0,Oo=1,$f=2,Kf=3,Qf=4,wg=5;var Rs=100,Tg=101,Eg=102,Ag=103,Cg=104,Rg=200,Pg=201,Ig=202,Lg=203,jf=204,td=205,Dg=206,Ng=207,Ug=208,Fg=209,Og=210,Bg=211,zg=212,kg=213,Vg=214,Cc=0,Rc=1,Pc=2,wo=3,Ic=4,Lc=5,Dc=6,Nc=7,sh=0,Gg=1,Hg=2,Di=0,ed=1,nd=2,id=3,rd=4,sd=5,od=6,nl=7;var ad=300,$r=301,Ps=302,oh=303,ah=304,il=306,Uc=1e3,Xi=1001,Fc=1002,un=1003,Wg=1004;var rl=1005;var _n=1006,lh=1007;var Kr=1008;var Kn=1009,ld=1010,cd=1011,Bo=1012,ch=1013,Ni=1014,wi=1015,Ui=1016,hh=1017,uh=1018,zo=1020,hd=35902,ud=35899,fd=1021,dd=1022,Ti=1023,qi=1026,Qr=1027,fh=1028,dh=1029,jr=1030,ph=1031;var mh=1033,sl=33776,ol=33777,al=33778,ll=33779,gh=35840,_h=35841,xh=35842,vh=35843,yh=36196,Sh=37492,Mh=37496,bh=37488,wh=37489,cl=37490,Th=37491,Eh=37808,Ah=37809,Ch=37810,Rh=37811,Ph=37812,Ih=37813,Lh=37814,Dh=37815,Nh=37816,Uh=37817,Fh=37818,Oh=37819,Bh=37820,zh=37821,kh=36492,Vh=36494,Gh=36495,Hh=36283,Wh=36284,hl=36285,Xh=36286;var Ua=2300,Oc=2301,Ec=2302,Vf=2303,Gf=2400,Hf=2401,Wf=2402;var Xg=3200;var ul=0,qg=1,xr="",Pn="srgb",Fa="srgb-linear",Oa="linear",ge="srgb";var Ac=7680;var Yg=519,Zg=512,Jg=513,$g=514,qh=515,Kg=516,Qg=517,Yh=518,jg=519,t0=35044;var pd="300 es",Li=2e3,To=2001;function fv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function e0(){let r=Ba("canvas");return r.style.display="block",r}var Km={},Eo=null;function md(...r){let t="THREE."+r.shift();Eo?Eo("log",t,...r):console.log(t,...r)}function n0(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Wt(...r){r=n0(r);let t="THREE."+r.shift();if(Eo)Eo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Yt(...r){r=n0(r);let t="THREE."+r.shift();if(Eo)Eo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Es(...r){let t=r.join(" ");t in Km||(Km[t]=!0,Wt(...r))}function i0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var r0={[Cc]:Rc,[Pc]:Dc,[Ic]:Nc,[wo]:Lc,[Rc]:Cc,[Dc]:Pc,[Nc]:Ic,[Lc]:wo},Yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qm=1234567,Da=Math.PI/180,Ao=180/Math.PI;function ko(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function ae(r,t,e){return Math.max(t,Math.min(e,r))}function gd(r,t){return(r%t+t)%t}function pv(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function mv(r,t,e){return r!==t?(e-r)/(t-r):0}function Na(r,t,e){return(1-e)*r+e*t}function gv(r,t,e,n){return Na(r,t,1-Math.exp(-e*n))}function _v(r,t=1){return t-Math.abs(gd(r,t*2)-t)}function xv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function vv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function yv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Sv(r,t){return r+Math.random()*(t-r)}function Mv(r){return r*(.5-Math.random())}function bv(r){r!==void 0&&(Qm=r);let t=Qm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wv(r){return r*Da}function Tv(r){return r*Ao}function Ev(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Av(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rv(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ts={DEG2RAD:Da,RAD2DEG:Ao,generateUUID:ko,clamp:ae,euclideanModulo:gd,mapLinear:pv,inverseLerp:mv,lerp:Na,damp:gv,pingpong:_v,smoothstep:xv,smootherstep:vv,randInt:yv,randFloat:Sv,randFloatSpread:Mv,seededRandom:bv,degToRad:wv,radToDeg:Tv,isPowerOfTwo:Ev,ceilPowerOfTwo:Av,floorPowerOfTwo:Cv,setQuaternionFromProperEuler:Rv,normalize:Hn,denormalize:Mo},Sd=class Sd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sd.prototype.isVector2=!0;var $t=Sd,Zi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(f!==_||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*_;p<0&&(u=-u,d=-d,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let S=Math.acos(p),A=Math.sin(S);m=Math.sin(m*S)/A,a=Math.sin(a*S)/A,l=l*m+u*a,c=c*m+d*a,h=h*m+g*a,f=f*m+_*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+g*a,f=f*m+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Md=class Md{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yf.copy(this).projectOnVector(t),this.sub(yf)}reflect(t){return this.sub(yf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Md.prototype.isVector3=!0;var Y=Md,yf=new Y,jm=new Zi,bd=class bd{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],A=i[4],x=i[7],M=i[2],b=i[5],E=i[8];return s[0]=o*_+a*S+l*M,s[3]=o*p+a*A+l*b,s[6]=o*m+a*x+l*E,s[1]=c*_+h*S+f*M,s[4]=c*p+h*A+f*b,s[7]=c*m+h*x+f*E,s[2]=u*_+d*S+g*M,s[5]=u*p+d*A+g*b,s[8]=u*m+d*x+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sf.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sf.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bd.prototype.isMatrix3=!0;var Kt=bd,Sf=new Kt,tg=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pv(){let r={enabled:!0,workingColorSpace:Fa,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=bo(i.r),i.g=bo(i.g),i.b=bo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xr?Oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fa]:{primaries:t,whitePoint:n,transfer:Oa,toXYZ:tg,fromXYZ:eg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:tg,fromXYZ:eg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),r}var ce=Pv();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ao,Bc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ao===void 0&&(ao=Ba("canvas")),ao.width=t.width,ao.height=t.height;let i=ao.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ao}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ba("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mr(e[n]/255)*255):e[n]=mr(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Iv=0,Co=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Mf(i[o].image)):s.push(Mf(i[o]))}else s=Mf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Mf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Lv=0,bf=new Y,Wn=class r extends Yi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Xi,i=Xi,s=_n,o=Kr,a=Ti,l=Kn,c=r.DEFAULT_ANISOTROPY,h=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=ko(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bf).x}get height(){return this.source.getSize(bf).y}get depth(){return this.source.getSize(bf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uc:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uc:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=ad;Wn.DEFAULT_ANISOTROPY=1;var wd=class wd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,x=(d+1)/2,M=(m+1)/2,b=(h+u)/4,E=(f+_)/4,v=(g+p)/4;return A>x&&A>M?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=b/n,s=E/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=v/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wd.prototype.isVector4=!0;var Ue=wd,zc=class extends Yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Wn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Co(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends zc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},za=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kc=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var rh=class rh{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,p)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/lo.setFromMatrixColumn(t,0).length(),s=1/lo.setFromMatrixColumn(t,1).length(),o=1/lo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dv,t,Nv)}lookAt(t,e,n){let i=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ur.crossVectors(n,oi),Ur.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ur.crossVectors(n,oi)),Ur.normalize(),oc.crossVectors(oi,Ur),i[0]=Ur.x,i[4]=oc.x,i[8]=oi.x,i[1]=Ur.y,i[5]=oc.y,i[9]=oi.y,i[2]=Ur.z,i[6]=oc.z,i[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],A=n[7],x=n[11],M=n[15],b=i[0],E=i[4],v=i[8],T=i[12],C=i[1],D=i[5],I=i[9],O=i[13],L=i[2],B=i[6],G=i[10],k=i[14],K=i[3],Z=i[7],R=i[11],Q=i[15];return s[0]=o*b+a*C+l*L+c*K,s[4]=o*E+a*D+l*B+c*Z,s[8]=o*v+a*I+l*G+c*R,s[12]=o*T+a*O+l*k+c*Q,s[1]=h*b+f*C+u*L+d*K,s[5]=h*E+f*D+u*B+d*Z,s[9]=h*v+f*I+u*G+d*R,s[13]=h*T+f*O+u*k+d*Q,s[2]=g*b+_*C+p*L+m*K,s[6]=g*E+_*D+p*B+m*Z,s[10]=g*v+_*I+p*G+m*R,s[14]=g*T+_*O+p*k+m*Q,s[3]=S*b+A*C+x*L+M*K,s[7]=S*E+A*D+x*B+M*Z,s[11]=S*v+A*I+x*G+M*R,s[15]=S*T+A*O+x*k+M*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15],S=l*d-c*u,A=a*d-c*f,x=a*u-l*f,M=o*d-c*h,b=o*u-l*h,E=o*f-a*h;return e*(_*S-p*A+m*x)-n*(g*S-p*M+m*b)+i*(g*A-_*M+m*E)-s*(g*x-_*b+p*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],S=e*a-n*o,A=e*l-i*o,x=e*c-s*o,M=n*l-i*a,b=n*c-s*a,E=i*c-s*l,v=h*_-f*g,T=h*p-u*g,C=h*m-d*g,D=f*p-u*_,I=f*m-d*_,O=u*m-d*p,L=S*O-A*I+x*D+M*C-b*T+E*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(a*O-l*I+c*D)*B,t[1]=(i*I-n*O-s*D)*B,t[2]=(_*E-p*b+m*M)*B,t[3]=(u*b-f*E-d*M)*B,t[4]=(l*C-o*O-c*T)*B,t[5]=(e*O-i*C+s*T)*B,t[6]=(p*x-g*E-m*A)*B,t[7]=(h*E-u*x+d*A)*B,t[8]=(o*I-a*C+c*v)*B,t[9]=(n*C-e*I-s*v)*B,t[10]=(g*b-_*x+m*S)*B,t[11]=(f*x-h*b-d*S)*B,t[12]=(a*T-o*D-l*v)*B,t[13]=(e*D-n*T+i*v)*B,t[14]=(_*A-g*M-p*S)*B,t[15]=(h*M-f*A+u*S)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,g=s*f,_=o*h,p=o*f,m=a*f,S=l*c,A=l*h,x=l*f,M=n.x,b=n.y,E=n.z;return i[0]=(1-(_+m))*M,i[1]=(d+x)*M,i[2]=(g-A)*M,i[3]=0,i[4]=(d-x)*b,i[5]=(1-(u+m))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(g+A)*E,i[9]=(p-S)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=lo.set(i[0],i[1],i[2]).length(),a=lo.set(i[4],i[5],i[6]).length(),l=lo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ci.copy(this);let c=1/o,h=1/a,f=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=f,Ci.elements[9]*=f,Ci.elements[10]*=f,e.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Li,l=!1){let c=this.elements,h=2*s/(e-t),f=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Li)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===To)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Li,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Li)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===To)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};rh.prototype.isMatrix4=!0;var Ae=rh,lo=new Y,Ci=new Ae,Dv=new Y(0,0,0),Nv=new Y(1,1,1),Ur=new Y,oc=new Y,oi=new Y,ng=new Ae,ig=new Zi,Ji=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ng.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ng,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ig.setFromEuler(this),this.setFromQuaternion(ig,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uv=0,rg=new Y,co=new Zi,hr=new Ae,ac=new Y,Aa=new Y,Fv=new Y,Ov=new Zi,sg=new Y(1,0,0),og=new Y(0,1,0),ag=new Y(0,0,1),lg={type:"added"},Bv={type:"removed"},ho={type:"childadded",child:null},wf={type:"childremoved",child:null},We=class r extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Y,e=new Ji,n=new Zi,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Kt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return co.setFromAxisAngle(t,e),this.quaternion.multiply(co),this}rotateOnWorldAxis(t,e){return co.setFromAxisAngle(t,e),this.quaternion.premultiply(co),this}rotateX(t){return this.rotateOnAxis(sg,t)}rotateY(t){return this.rotateOnAxis(og,t)}rotateZ(t){return this.rotateOnAxis(ag,t)}translateOnAxis(t,e){return rg.copy(t).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sg,t)}translateY(t){return this.translateOnAxis(og,t)}translateZ(t){return this.translateOnAxis(ag,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ac.copy(t):ac.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Aa,ac,this.up):hr.lookAt(ac,Aa,this.up),this.quaternion.setFromRotationMatrix(hr),i&&(hr.extractRotation(i.matrixWorld),co.setFromRotationMatrix(hr),this.quaternion.premultiply(co.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lg),ho.child=t,this.dispatchEvent(ho),ho.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bv),wf.child=t,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hr.multiply(t.parent.matrixWorld)),t.applyMatrix4(hr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lg),ho.child=t,this.dispatchEvent(ho),ho.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,t,Fv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,Ov,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new Y(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},zv={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},lc={h:0,s:0,l:0};function Tf(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=gd(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Tf(o,s,t+1/3),this.g=Tf(o,s,t),this.b=Tf(o,s,t-1/3)}return ce.colorSpaceToWorking(this,i),this}setStyle(t,e=Pn){function n(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){let n=s0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return ce.workingToColorSpace(Rn.copy(this),t),Math.round(ae(Rn.r*255,0,255))*65536+Math.round(ae(Rn.g*255,0,255))*256+Math.round(ae(Rn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,i=Rn.g,s=Rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=Pn){ce.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,i=Rn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+e,Fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fr),t.getHSL(lc);let n=Na(Fr.h,lc.h,e),i=Na(Fr.s,lc.s,e),s=Na(Fr.l,lc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Xt;Xt.NAMES=s0;var As=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ri=new Y,ur=new Y,Ef=new Y,fr=new Y,uo=new Y,fo=new Y,cg=new Y,Af=new Y,Cf=new Y,Rf=new Y,Pf=new Ue,If=new Ue,Lf=new Ue,kr=class r{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ri.subVectors(t,e),i.cross(Ri);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ri.subVectors(i,e),ur.subVectors(n,e),Ef.subVectors(t,e);let o=Ri.dot(Ri),a=Ri.dot(ur),l=Ri.dot(Ef),c=ur.dot(ur),h=ur.dot(Ef),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(o,fr.y),l.addScaledVector(a,fr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Pf.setScalar(0),If.setScalar(0),Lf.setScalar(0),Pf.fromBufferAttribute(t,e),If.fromBufferAttribute(t,n),Lf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Pf,s.x),o.addScaledVector(If,s.y),o.addScaledVector(Lf,s.z),o}static isFrontFacing(t,e,n,i){return Ri.subVectors(n,e),ur.subVectors(t,e),Ri.cross(ur).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ri.cross(ur).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;uo.subVectors(i,n),fo.subVectors(s,n),Af.subVectors(t,n);let l=uo.dot(Af),c=fo.dot(Af);if(l<=0&&c<=0)return e.copy(n);Cf.subVectors(t,i);let h=uo.dot(Cf),f=fo.dot(Cf);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(uo,o);Rf.subVectors(t,s);let d=uo.dot(Rf),g=fo.dot(Rf);if(g>=0&&d<=g)return e.copy(s);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fo,a);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return cg.subVectors(s,i),a=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(cg,a);let m=1/(p+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(uo,o).addScaledVector(fo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$i=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pi):Pi.fromBufferAttribute(s,o),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cc.copy(n.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ca),hc.subVectors(this.max,Ca),po.subVectors(t.a,Ca),mo.subVectors(t.b,Ca),go.subVectors(t.c,Ca),Or.subVectors(mo,po),Br.subVectors(go,mo),Ms.subVectors(po,go);let e=[0,-Or.z,Or.y,0,-Br.z,Br.y,0,-Ms.z,Ms.y,Or.z,0,-Or.x,Br.z,0,-Br.x,Ms.z,0,-Ms.x,-Or.y,Or.x,0,-Br.y,Br.x,0,-Ms.y,Ms.x,0];return!Df(e,po,mo,go,hc)||(e=[1,0,0,0,1,0,0,0,1],!Df(e,po,mo,go,hc))?!1:(uc.crossVectors(Or,Br),e=[uc.x,uc.y,uc.z],Df(e,po,mo,go,hc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},dr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Pi=new Y,cc=new $i,po=new Y,mo=new Y,go=new Y,Or=new Y,Br=new Y,Ms=new Y,Ca=new Y,hc=new Y,uc=new Y,bs=new Y;function Df(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){bs.fromArray(r,s);let a=i.x*Math.abs(bs.x)+i.y*Math.abs(bs.y)+i.z*Math.abs(bs.z),l=t.dot(bs),c=e.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new Y,fc=new $t,kv=0,li=class extends Yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=t0,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fc.fromBufferAttribute(this,e),fc.applyMatrix3(t),this.setXY(e,fc.x,fc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array),i=Hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Hn(e,this.array),n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Va=class extends li{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ga=class extends li{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ne=class extends li{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vv=new $i,Ra=new Y,Nf=new Y,Vr=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ra.subVectors(t,this.center);let e=Ra.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ra,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ra.copy(t.center).add(Nf)),this.expandByPoint(Ra.copy(t.center).sub(Nf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gv=0,Mi=new Ae,Uf=new We,_o=new Y,ai=new $i,Pa=new $i,hn=new Y,ci=class r extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fv(t)?Ga:Va)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,n){return Mi.makeTranslation(t,e,n),this.applyMatrix4(Mi),this}scale(t,e,n){return Mi.makeScale(t,e,n),this.applyMatrix4(Mi),this}lookAt(t){return Uf.lookAt(t),Uf.updateMatrix(),this.applyMatrix4(Uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Pa.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(ai.min,Pa.min),ai.expandByPoint(hn),hn.addVectors(ai.max,Pa.max),ai.expandByPoint(hn)):(ai.expandByPoint(Pa.min),ai.expandByPoint(Pa.max))}ai.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)hn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(hn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(_o.fromBufferAttribute(t,c),hn.add(_o)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new li(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new Y,l[v]=new Y;let c=new Y,h=new Y,f=new Y,u=new $t,d=new $t,g=new $t,_=new Y,p=new Y;function m(v,T,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),u.fromBufferAttribute(s,v),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),a[v].add(_),a[T].add(_),a[C].add(_),l[v].add(p),l[T].add(p),l[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,T=S.length;v<T;++v){let C=S[v],D=C.start,I=C.count;for(let O=D,L=D+I;O<L;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let A=new Y,x=new Y,M=new Y,b=new Y;function E(v){M.fromBufferAttribute(i,v),b.copy(M);let T=a[v];A.copy(T),A.sub(M.multiplyScalar(M.dot(T))).normalize(),x.crossVectors(b,T);let D=x.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,D)}for(let v=0,T=S.length;v<T;++v){let C=S[v],D=C.start,I=C.count;for(let O=D,L=D+I;O<L;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new li(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,f=new Y;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new li(u,h,f)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ff=new Y,Hv=new Y,Wv=new Kt,Ii=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ff.subVectors(n,e).cross(Hv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ff),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wv.getNormalMatrix(t),i=this.coplanarPoint(Ff).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xv=0,gr=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Oo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=td,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ac,this.stencilZFail=Ac,this.stencilZPass=Ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var pr=new Y,Of=new Y,dc=new Y,pc=new Y,Vc=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pr.copy(this.origin).addScaledVector(this.direction,e),pr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Of.copy(t).add(e).multiplyScalar(.5),dc.copy(e).sub(t).normalize(),pc.copy(this.origin).sub(Of);let s=t.distanceTo(e)*.5,o=-this.direction.dot(dc),a=pc.dot(this.direction),l=-pc.dot(dc),c=pc.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=s*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Of).addScaledVector(dc,u),d}intersectSphere(t,e){if(t.radius<0)return null;pr.subVectors(t.center,this.origin);let n=pr.dot(this.direction),i=pr.dot(pr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,g=e.x-o.x,_=e.y-o.y,p=e.z-o.z,m=n.x-o.x,S=n.y-o.y,A=n.z-o.z,x=Math.abs(l),M=Math.abs(c),b=Math.abs(h),E,v,T,C,D,I,O,L,B,G,k,K;if(x>=M&&x>=b?(T=l,I=f,B=g,K=m,l>=0?(E=c,v=h,C=u,D=d,O=_,L=p,G=S,k=A):(E=h,v=c,C=d,D=u,O=p,L=_,G=A,k=S)):M>=b?(T=c,I=u,B=_,K=S,c>=0?(E=h,v=l,C=d,D=f,O=p,L=g,G=A,k=m):(E=l,v=h,C=f,D=d,O=g,L=p,G=m,k=A)):(T=h,I=d,B=p,K=A,h>=0?(E=l,v=c,C=f,D=u,O=g,L=_,G=m,k=S):(E=c,v=l,C=u,D=f,O=_,L=g,G=S,k=m)),T===0)return null;let Z=E/T,R=v/T,Q=1/T,yt=C-Z*I,bt=D-R*I,Gt=O-Z*B,zt=L-R*B,St=G-Z*K,q=k-R*K,j=St*zt-q*Gt,ut=yt*q-bt*St,Ut=Gt*bt-zt*yt;if(i){if(j<0||ut<0||Ut<0)return null}else if((j<0||ut<0||Ut<0)&&(j>0||ut>0||Ut>0))return null;let dt=j+ut+Ut;if(dt===0)return null;let Dt=Q*(j*I+ut*B+Ut*K);return(dt>0?Dt<0:Dt>0)?null:this.at(Dt/dt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ha=class extends gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hg=new Ae,ws=new Vc,mc=new Vr,ug=new Y,gc=new Y,_c=new Y,xc=new Y,Bf=new Y,vc=new Y,fg=new Y,yc=new Y,_e=class extends We{constructor(t=new ci,e=new Ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){vc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Bf.fromBufferAttribute(f,t),o?vc.addScaledVector(Bf,h):vc.addScaledVector(Bf.sub(e),h))}e.add(vc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),ws.copy(t.ray).recast(t.near),!(mc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(mc,ug)===null||ws.origin.distanceToSquared(ug)>(t.far-t.near)**2))&&(hg.copy(s).invert(),ws.copy(t.ray).applyMatrix4(hg),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),A=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,M=A;x<M;x+=3){let b=a.getX(x),E=a.getX(x+1),v=a.getX(x+2);i=Sc(this,m,t,n,c,h,f,b,E,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let S=a.getX(p),A=a.getX(p+1),x=a.getX(p+2);i=Sc(this,o,t,n,c,h,f,S,A,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),A=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,M=A;x<M;x+=3){let b=x,E=x+1,v=x+2;i=Sc(this,m,t,n,c,h,f,b,E,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let S=p,A=p+1,x=p+2;i=Sc(this,o,t,n,c,h,f,S,A,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function qv(r,t,e,n,i,s,o,a){let l;if(t.side===xn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Jr,a),l===null)return null;yc.copy(a),yc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(yc);return c<e.near||c>e.far?null:{distance:c,point:yc.clone(),object:r}}function Sc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,gc),r.getVertexPosition(l,_c),r.getVertexPosition(c,xc);let h=qv(r,t,e,n,gc,_c,xc,fg);if(h){let f=new Y;kr.getBarycoord(fg,gc,_c,xc,f),i&&(h.uv=kr.getInterpolatedAttribute(i,a,l,c,f,new $t)),s&&(h.uv1=kr.getInterpolatedAttribute(s,a,l,c,f,new $t)),o&&(h.normal=kr.getInterpolatedAttribute(o,a,l,c,f,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Y,materialIndex:0};kr.getNormal(gc,_c,xc,u.normal),h.face=u,h.barycoord=f}return h}var Wa=class extends Wn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=un,h=un,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class extends li{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xo=new Ae,dg=new Ae,Mc=[],pg=new $i,Yv=new Ae,Ia=new _e,La=new Vr,_r=class extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xo),pg.copy(t.boundingBox).applyMatrix4(xo),this.boundingBox.union(pg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xo),La.copy(t.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(La)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),t.ray.intersectsSphere(La)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xo),dg.multiplyMatrices(n,xo),Ia.matrixWorld=dg,Ia.raycast(t,Mc);for(let o=0,a=Mc.length;o<a;o++){let l=Mc[o];l.instanceId=s,l.object=this,e.push(l)}Mc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wa(new Float32Array(i*this.count),i,this.count,fh,wi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new Vr,Zv=new $t(.5,.5),bc=new Y,Po=class{constructor(t=new Ii,e=new Ii,n=new Ii,i=new Ii,s=new Ii,o=new Ii){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],S=s[12],A=s[13],x=s[14],M=s[15];if(i[0].setComponents(c-o,d-h,m-g,M-S).normalize(),i[1].setComponents(c+o,d+h,m+g,M+S).normalize(),i[2].setComponents(c+a,d+f,m+_,M+A).normalize(),i[3].setComponents(c-a,d-f,m-_,M-A).normalize(),n)i[4].setComponents(l,u,p,x).normalize(),i[5].setComponents(c-l,d-u,m-p,M-x).normalize();else if(i[4].setComponents(c-l,d-u,m-p,M-x).normalize(),e===Li)i[5].setComponents(c+l,d+u,m+p,M+x).normalize();else if(e===To)i[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);let e=Zv.distanceTo(t.center);return Ts.radius=.7071067811865476+e,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(bc.x=i.normal.x>0?t.max.x:t.min.x,bc.y=i.normal.y>0?t.max.y:t.min.y,bc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qa=class extends Wn{constructor(t=[],e=$r,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ya=class extends Wn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gr=class extends Wn{constructor(t,e,n=Ni,i,s,o,a=un,l=un,c,h=qi,f=1){if(h!==qi&&h!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gc=class extends Gr{constructor(t,e=Ni,n=$r,i,s,o=un,a=un,l,c=qi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Za=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Hr=class r extends ci{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(f,2));function g(_,p,m,S,A,x,M,b,E,v,T){let C=x/E,D=M/v,I=x/2,O=M/2,L=b/2,B=E+1,G=v+1,k=0,K=0,Z=new Y;for(let R=0;R<G;R++){let Q=R*D-O;for(let yt=0;yt<B;yt++){let bt=yt*C-I;Z[_]=bt*S,Z[p]=Q*A,Z[m]=L,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[m]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(yt/E),f.push(1-R/v),k+=1}}for(let R=0;R<v;R++)for(let Q=0;Q<E;Q++){let yt=u+Q+B*R,bt=u+Q+B*(R+1),Gt=u+(Q+1)+B*(R+1),zt=u+(Q+1)+B*R;l.push(yt,bt,zt),l.push(bt,Gt,zt),K+=6}a.addGroup(d,K,T),d+=K,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Wr=class r extends ci{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],u=[],d=[],g=0,_=[],p=n/2,m=0;S(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ne(f,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(d,2));function S(){let x=new Y,M=new Y,b=0,E=(e-t)/n;for(let v=0;v<=s;v++){let T=[],C=v/s,D=C*(e-t)+t;for(let I=0;I<=i;I++){let O=I/i,L=O*l+a,B=Math.sin(L),G=Math.cos(L);M.x=D*B,M.y=-C*n+p,M.z=D*G,f.push(M.x,M.y,M.z),x.set(B,E,G).normalize(),u.push(x.x,x.y,x.z),d.push(O,1-C),T.push(g++)}_.push(T)}for(let v=0;v<i;v++)for(let T=0;T<s;T++){let C=_[T][v],D=_[T+1][v],I=_[T+1][v+1],O=_[T][v+1];(t>0||T!==0)&&(h.push(C,D,O),b+=3),(e>0||T!==s-1)&&(h.push(D,I,O),b+=3)}c.addGroup(m,b,0),m+=b}function A(x){let M=g,b=new $t,E=new Y,v=0,T=x===!0?t:e,C=x===!0?1:-1;for(let I=1;I<=i;I++)f.push(0,p*C,0),u.push(0,C,0),d.push(.5,.5),g++;let D=g;for(let I=0;I<=i;I++){let L=I/i*l+a,B=Math.cos(L),G=Math.sin(L);E.x=T*G,E.y=p*C,E.z=T*B,f.push(E.x,E.y,E.z),u.push(0,C,0),b.x=B*.5+.5,b.y=G*.5*C+.5,d.push(b.x,b.y),g++}for(let I=0;I<i;I++){let O=M+I,L=D+I;x===!0?h.push(L,L+1,O):h.push(L+1,L,O),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Io=class r extends ci{constructor(t=[new $t(0,-.5),new $t(.5,0),new $t(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ae(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,f=new Y,u=new $t,d=new Y,g=new Y,_=new Y,p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=e;S++){let A=n+S*h*i,x=Math.sin(A),M=Math.cos(A);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*x,f.y=t[b].y,f.z=t[b].x*M,o.push(f.x,f.y,f.z),u.x=S/e,u.y=b/(t.length-1),a.push(u.x,u.y);let E=l[3*b+0]*x,v=l[3*b+1],T=l[3*b+0]*M;c.push(E,v,T)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){let x=A+S*t.length,M=x,b=x+t.length,E=x+t.length+1,v=x+1;s.push(M,b,v),s.push(E,v,b)}this.setIndex(s),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Xr=class r extends ci{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let S=m*u-o;for(let A=0;A<c;A++){let x=A*f-s;g.push(x,-S,0),_.push(0,0,1),p.push(A/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let A=S+c*m,x=S+c*(m+1),M=S+1+c*(m+1),b=S+1+c*m;d.push(A,x,b),d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Lo=class r extends ci{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new Y,u=new Y,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let S=[],A=m/n,x=o+A*a,M=t*Math.cos(x),b=Math.sqrt(t*t-M*M),E=0;m===0&&o===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let v=0;v<=e;v++){let T=v/e,C=i+T*s;f.x=-b*Math.cos(C),f.y=M,f.z=b*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(T+E,1-A),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let A=h[m][S+1],x=h[m][S],M=h[m+1][S],b=h[m+1][S+1];(m!==0||o>0)&&d.push(A,x,b),(m!==n-1||l<Math.PI)&&d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Is(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(mg(i))i.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(mg(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function In(r){let t={};for(let e=0;e<r.length;e++){let n=Is(r[e]);for(let i in n)t[i]=n[i]}return t}function mg(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Jv(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _d(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var o0={clone:Is,merge:In},$v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Jv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(i.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Hc=class extends hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ui=class extends gr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cs=class extends ui{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ja=class extends gr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=sh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wc=class extends gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xc=class extends gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function zf(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var qr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qc=class extends qr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gf,endingEnd:Gf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hf:s=t,a=2*e-n;break;case Wf:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hf:o=t,l=2*n-e;break;case Wf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,S=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-d)*p+(1.5+d)*_+.5*g,x=d*p-d*_;for(let M=0;M!==a;++M)s[M]=m*o[h+M]+S*o[c+M]+A*o[l+M]+x*o[f+M];return s}},Yc=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},Zc=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Jc=class extends qr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*g;return s}let u=a*2,d=t-1;for(let g=0;g!==a;++g){let _=o[c+g],p=o[l+g],m=d*u+g*2,S=f[m],A=f[m+1],x=t*u+g*2,M=h[x],b=h[x+1],E=jv(n,e,S,M,i);s[g]=a0(E,_,A,b,p)}return s}};function a0(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Qv(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function jv(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=a0(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=Qv(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var fi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),zf(t.settings)&&(n.settings={inTangents:vo(t.settings.inTangents,Array),outTangents:vo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ua:e=this.InterpolantFactoryMethodDiscrete;break;case Oc:e=this.InterpolantFactoryMethodLinear;break;case Ec:e=this.InterpolantFactoryMethodSmooth;break;case Vf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Oc;case this.InterpolantFactoryMethodSmooth:return Ec;case this.InterpolantFactoryMethodBezier:return Vf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;zf(this.settings)&&(gg(this.settings.inTangents,t),gg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ec,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,zf(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function gg(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Oc;var Yr=class extends fi{constructor(t,e,n){super(t,e,n)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Ua;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}};$c.prototype.ValueTypeName="color";var Kc=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}};Kc.prototype.ValueTypeName="number";var Qc=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Zi.slerpFlat(s,0,o,c-a,o,c,l);return s}},$a=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends fi{constructor(t,e,n){super(t,e,n)}};Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Ua;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}};jc.prototype.ValueTypeName="vector";var th=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},l0=new th,eh=class{constructor(t){this.manager=t!==void 0?t:l0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};eh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ka=class extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},kf=new Ae,_g=new Y,xg=new Y,Qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;_g.setFromMatrixPosition(t.matrixWorld),e.position.copy(_g),xg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(kf,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===To||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(kf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wc=new Y,Tc=new Zi,Wi=new Y,ja=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wc,Tc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Tc,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wc,Tc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Tc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zr=new Y,vg=new $t,yg=new $t,gn=class extends ja{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zr.x,zr.y).multiplyScalar(-t/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-t/zr.z)}getViewSize(t,e){return this.getViewBounds(t,vg,yg),e.subVectors(yg,vg)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Da*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xf=class extends Qa{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},tl=class extends Do{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},No=class extends ja{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qf=class extends Qa{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new qf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var yo=-90,So=1,nh=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new gn(yo,So,t,e);i.layers=this.layers,this.add(i);let s=new gn(yo,So,t,e);s.layers=this.layers,this.add(s);let o=new gn(yo,So,t,e);o.layers=this.layers,this.add(o);let a=new gn(yo,So,t,e);a.layers=this.layers,this.add(a);let l=new gn(yo,So,t,e);l.layers=this.layers,this.add(l);let c=new gn(yo,So,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ih=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xd="\\[\\]\\.:\\/",ty=new RegExp("["+xd+"]","g"),vd="[^"+xd+"]",ey="[^"+xd.replace("\\.","")+"]",ny=/((?:WC+[\/:])*)/.source.replace("WC",vd),iy=/(WCOD+)?/.source.replace("WCOD",ey),ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vd),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vd),oy=new RegExp("^"+ny+iy+ry+sy+"$"),ay=["material","materials","bones","map"],Yf=class{constructor(t,e,n){let i=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ty,"")}static parseTrackName(t){let e=oy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ay.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Yf;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dw=new Float32Array(1);var Td=class Td{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};Td.prototype.isMatrix2=!0;var Zf=Td;function yd(r,t,e,n){let i=ly(n);switch(e){case fd:return r*t;case fh:return r*t/i.components*i.byteLength;case dh:return r*t/i.components*i.byteLength;case jr:return r*t*2/i.components*i.byteLength;case ph:return r*t*2/i.components*i.byteLength;case dd:return r*t*3/i.components*i.byteLength;case Ti:return r*t*4/i.components*i.byteLength;case mh:return r*t*4/i.components*i.byteLength;case sl:case ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case al:case ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _h:case vh:return Math.max(r,16)*Math.max(t,8)/4;case gh:case xh:return Math.max(r,8)*Math.max(t,8)/2;case yh:case Sh:case bh:case wh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mh:case cl:case Th:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case kh:case Vh:case Gh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Hh:case Wh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case hl:case Xh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ly(r){switch(r){case Kn:case ld:return{byteLength:1,components:1};case Bo:case cd:case Ui:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case Ni:case ch:case wi:return{byteLength:4,components:1};case hd:case ud:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function P0(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function hy(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var uy=`#ifdef USE_ALPHAHASH
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
#endif`,Fy=`vec3 transformedNormal = objectNormal;
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
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OS=`#ifdef USE_CLEARCOATMAP
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
}`,FM=`#define STANDARD
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
}`,OM=`#define TOON
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
}`,ee={alphahash_fragment:uy,alphahash_pars_fragment:fy,alphamap_fragment:dy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:_y,aomap_pars_fragment:xy,batching_pars_vertex:vy,batching_vertex:yy,begin_vertex:Sy,beginnormal_vertex:My,bsdfs:by,iridescence_fragment:wy,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ey,clipping_planes_pars_fragment:Ay,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ry,color_fragment:Py,color_pars_fragment:Iy,color_pars_vertex:Ly,color_vertex:Dy,common:Ny,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Fy,displacementmap_pars_vertex:Oy,displacementmap_vertex:By,emissivemap_fragment:zy,emissivemap_pars_fragment:ky,colorspace_fragment:Vy,colorspace_pars_fragment:Gy,envmap_fragment:Hy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:Xy,envmap_pars_vertex:qy,envmap_physical_pars_fragment:iS,envmap_vertex:Yy,fog_vertex:Zy,fog_pars_vertex:Jy,fog_fragment:$y,fog_pars_fragment:Ky,gradientmap_pars_fragment:Qy,lightmap_pars_fragment:jy,lights_lambert_fragment:tS,lights_lambert_pars_fragment:eS,lights_pars_begin:nS,lights_toon_fragment:rS,lights_toon_pars_fragment:sS,lights_phong_fragment:oS,lights_phong_pars_fragment:aS,lights_physical_fragment:lS,lights_physical_pars_fragment:cS,lights_fragment_begin:hS,lights_fragment_maps:uS,lights_fragment_end:fS,lightprobes_pars_fragment:dS,logdepthbuf_fragment:pS,logdepthbuf_pars_fragment:mS,logdepthbuf_pars_vertex:gS,logdepthbuf_vertex:_S,map_fragment:xS,map_pars_fragment:vS,map_particle_fragment:yS,map_particle_pars_fragment:SS,metalnessmap_fragment:MS,metalnessmap_pars_fragment:bS,morphinstance_vertex:wS,morphcolor_vertex:TS,morphnormal_vertex:ES,morphtarget_pars_vertex:AS,morphtarget_vertex:CS,normal_fragment_begin:RS,normal_fragment_maps:PS,normal_pars_fragment:IS,normal_pars_vertex:LS,normal_vertex:DS,normalmap_pars_fragment:NS,clearcoat_normal_fragment_begin:US,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:OS,iridescence_pars_fragment:BS,opaque_fragment:zS,packing:kS,premultiplied_alpha_fragment:VS,project_vertex:GS,dithering_fragment:HS,dithering_pars_fragment:WS,roughnessmap_fragment:XS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:YS,shadowmap_pars_vertex:ZS,shadowmap_vertex:JS,shadowmask_pars_fragment:$S,skinbase_vertex:KS,skinning_pars_vertex:QS,skinning_vertex:jS,skinnormal_vertex:tM,specularmap_fragment:eM,specularmap_pars_fragment:nM,tonemapping_fragment:iM,tonemapping_pars_fragment:rM,transmission_fragment:sM,transmission_pars_fragment:oM,uv_pars_fragment:aM,uv_pars_vertex:lM,uv_vertex:cM,worldpos_vertex:hM,background_vert:uM,background_frag:fM,backgroundCube_vert:dM,backgroundCube_frag:pM,cube_vert:mM,cube_frag:gM,depth_vert:_M,depth_frag:xM,distance_vert:vM,distance_frag:yM,equirect_vert:SM,equirect_frag:MM,linedashed_vert:bM,linedashed_frag:wM,meshbasic_vert:TM,meshbasic_frag:EM,meshlambert_vert:AM,meshlambert_frag:CM,meshmatcap_vert:RM,meshmatcap_frag:PM,meshnormal_vert:IM,meshnormal_frag:LM,meshphong_vert:DM,meshphong_frag:NM,meshphysical_vert:UM,meshphysical_frag:FM,meshtoon_vert:OM,meshtoon_frag:BM,points_vert:zM,points_frag:kM,shadow_vert:VM,shadow_frag:GM,sprite_vert:HM,sprite_frag:WM},vt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ji={basic:{uniforms:In([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:In([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:In([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:In([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:In([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:In([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:In([vt.points,vt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:In([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:In([vt.common,vt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:In([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:In([vt.sprite,vt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:In([vt.common,vt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:In([vt.lights,vt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ji.physical={uniforms:In([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Zh={r:0,b:0,g:0},XM=new Ae,I0=new Kt;I0.set(-1,0,0,0,1,0,0,0,1);function qM(r,t,e,n,i,s){let o=new Xt(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let x=S.backgroundBlurriness>0;A=t.get(A,x)}return A}function g(S){let A=!1,x=d(S);x===null?p(o,a):x&&x.isColor&&(p(x,1),A=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(S,A){let x=d(A);x&&(x.isCubeTexture||x.mapping===il)?(c===void 0&&(c=new _e(new Hr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Is(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XM.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(I0),c.material.toneMapped=ce.getTransfer(x.colorSpace)!==ge,(h!==x||f!==x.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _e(new Xr(2,2),new hi({name:"BackgroundMaterial",uniforms:Is(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ce.getTransfer(x.colorSpace)!==ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,A){S.getRGB(Zh,_d(r)),e.buffers.color.setClear(Zh.r,Zh.g,Zh.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:g,addToRenderList:_,dispose:m}}function YM(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(D,I,O,L,B){let G=!1,k=f(D,L,O,I);s!==k&&(s=k,c(s.object)),G=d(D,L,O,B),G&&g(D,L,O,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(D,I,O,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function f(D,I,O,L){let B=L.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let k=D.isInstancedMesh===!0?D.id:0,K=G[k];K===void 0&&(K={},G[k]=K);let Z=K[O.id];Z===void 0&&(Z={},K[O.id]=Z);let R=Z[B];return R===void 0&&(R=u(l()),Z[B]=R),R}function u(D){let I=[],O=[],L=[];for(let B=0;B<e;B++)I[B]=0,O[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:L,object:D,attributes:{},index:null}}function d(D,I,O,L){let B=s.attributes,G=I.attributes,k=0,K=O.getAttributes();for(let Z in K)if(K[Z].location>=0){let Q=B[Z],yt=G[Z];if(yt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),Q===void 0||Q.attribute!==yt||yt&&Q.data!==yt.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function g(D,I,O,L){let B={},G=I.attributes,k=0,K=O.getAttributes();for(let Z in K)if(K[Z].location>=0){let Q=G[Z];Q===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let yt={};yt.attribute=Q,Q&&Q.data&&(yt.data=Q.data),B[Z]=yt,k++}s.attributes=B,s.attributesNum=k,s.index=L}function _(){let D=s.newAttributes;for(let I=0,O=D.length;I<O;I++)D[I]=0}function p(D){m(D,0)}function m(D,I){let O=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;O[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),B[D]!==I&&(r.vertexAttribDivisor(D,I),B[D]=I)}function S(){let D=s.newAttributes,I=s.enabledAttributes;for(let O=0,L=I.length;O<L;O++)I[O]!==D[O]&&(r.disableVertexAttribArray(O),I[O]=0)}function A(D,I,O,L,B,G,k){k===!0?r.vertexAttribIPointer(D,I,O,B,G):r.vertexAttribPointer(D,I,O,L,B,G)}function x(D,I,O,L){_();let B=L.attributes,G=O.getAttributes(),k=I.defaultAttributeValues;for(let K in G){let Z=G[K];if(Z.location>=0){let R=B[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let Q=R.normalized,yt=R.itemSize,bt=t.get(R);if(bt===void 0)continue;let Gt=bt.buffer,zt=bt.type,St=bt.bytesPerElement,q=zt===r.INT||zt===r.UNSIGNED_INT||R.gpuType===ch;if(R.isInterleavedBufferAttribute){let j=R.data,ut=j.stride,Ut=R.offset;if(j.isInstancedInterleavedBuffer){for(let dt=0;dt<Z.locationSize;dt++)m(Z.location+dt,j.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let dt=0;dt<Z.locationSize;dt++)p(Z.location+dt);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let dt=0;dt<Z.locationSize;dt++)A(Z.location+dt,yt/Z.locationSize,zt,Q,ut*St,(Ut+yt/Z.locationSize*dt)*St,q)}else{if(R.isInstancedBufferAttribute){for(let j=0;j<Z.locationSize;j++)m(Z.location+j,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let j=0;j<Z.locationSize;j++)p(Z.location+j);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let j=0;j<Z.locationSize;j++)A(Z.location+j,yt/Z.locationSize,zt,Q,yt*St,yt/Z.locationSize*j*St,q)}}else if(k!==void 0){let Q=k[K];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(Z.location,Q);break;case 3:r.vertexAttrib3fv(Z.location,Q);break;case 4:r.vertexAttrib4fv(Z.location,Q);break;default:r.vertexAttrib1fv(Z.location,Q)}}}}S()}function M(){T();for(let D in n){let I=n[D];for(let O in I){let L=I[O];for(let B in L){let G=L[B];for(let k in G)h(G[k].object),delete G[k];delete L[B]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let O in I){let L=I[O];for(let B in L){let G=L[B];for(let k in G)h(G[k].object),delete G[k];delete L[B]}}delete n[D.id]}function E(D){for(let I in n){let O=n[I];for(let L in O){let B=O[L];if(B[D.id]===void 0)continue;let G=B[D.id];for(let k in G)h(G[k].object),delete G[k];delete B[D.id]}}}function v(D){for(let I in n){let O=n[I],L=D.isInstancedMesh===!0?D.id:0,B=O[L];if(B!==void 0){for(let G in B){let k=B[G];for(let K in k)h(k[K].object),delete k[K];delete B[G]}delete O[L],Object.keys(O).length===0&&delete n[I]}}}function T(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function ZM(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function JM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Ti&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Kn&&E!==wi&&!v&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:x,maxSamples:M,samples:b}}function $M(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ii,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let S=s?0:n,A=S*4,x=m.clippingState||null;l.value=x,x=h(g,u,A,d);for(let M=0;M!==A;++M)x[M]=e[M];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,x=d;A!==_;++A,x+=4)o.copy(f[A]).applyMatrix4(S,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Go=4,KM=6,QM=20,jM=256,fl=new No,c0=new Xt,Ed=null,Ad=0,Cd=0,Rd=!1,tb=new Y,Ls=new Y,Wo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=tb}=s;Ed=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ed,Ad,Cd),this._renderer.xr.enabled=Rd,t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$r||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ed=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ui,format:Ti,colorSpace:Fa,depthBuffer:!1},i=h0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h0(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eb(s)),this._blurMaterial=ib(s,t,e),this._ggxMaterial=nb(s,t,e)}return i}_compileMaterial(t){let e=new _e(new ci,t);this._renderer.compile(e,fl)}_sceneToCubeUV(t,e,n,i,s){let l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(c0),f.toneMapping=Di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new Hr,new Ha({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,m=!0):(p.color.copy(c0),m=!0);for(let A=0;A<6;A++){let x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let M=this._cubeSize;Vo(i,x*M,A>2?M:0,M,M),f.setRenderTarget(i),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===$r||t.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=f0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u0());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Vo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Go?n-g+Go:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Vo(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(a,fl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Vo(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(a,fl)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-Go?i-this._lodMax+Go:0),u=4*(this._cubeSize-h);Vo(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,fl)}};function eb(r){let t=[],e=[],n=r,i=r-Go+1+KM;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let m=0;m<f;m++){let S=m%3*2/3-1,A=m>2?0:-1,x=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(x,d*u*m);for(let M=0;M<u;M++){let b=h[M*2]*2-1,E=h[M*2+1]*2-1;m===0?Ls.set(1,E,b):m===1?Ls.set(-b,1,-E):m===2?Ls.set(-b,E,1):m===3?Ls.set(-1,E,-b):m===4?Ls.set(-b,-1,E):Ls.set(b,E,-1),Ls.toArray(_,(m*u+M)*d)}}let p=new ci;p.setAttribute("position",new li(g,d)),p.setAttribute("outputDirection",new li(_,d)),e.push(new _e(p,null)),n>Go&&n--}return{lodMeshes:e,sizeLods:t}}function h0(r,t,e){let n=new $n(r,t,e);return n.texture.mapping=il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function nb(r,t,e){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ib(r,t,e){return new hi({name:"SphericalGaussianBlur",defines:{SAMPLES:QM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function u0(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function f0(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Qh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $h=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hr(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Ki});s.uniforms.tEquirect.value=e;let o=new _e(i,s),a=e.minFilter;return e.minFilter===Kr&&(e.minFilter=_n),new nh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function rb(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===oh||d===ah)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new $h(g.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===oh||d===ah,_=d===$r||d===Ps;if(g||_){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Wo(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Wo(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===oh?u.mapping=$r:d===ah&&(u.mapping=Ps),u}function l(u){let d=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function sb(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Es("WebGLRenderer: "+n+" extension not supported."),i}}}function ob(r,t,e,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],r.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let S=d.array;_=d.version;for(let A=0,x=S.length;A<x;A+=3){let M=S[A+0],b=S[A+1],E=S[A+2];u.push(M,b,b,E,E,M)}}else{let S=g.array;_=g.version;for(let A=0,x=S.length/3-1;A<x;A+=3){let M=A+0,b=A+1,E=A+2;u.push(M,b,b,E,E,M)}}let p=new(g.count>=65535?Ga:Va)(u,1);p.version=_;let m=s.get(f);m&&t.remove(m),s.set(f,p)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function ab(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){r.drawElements(n,u,s,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(r.drawElementsInstanced(n,u,s,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let _=0;for(let p=0;p<d;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function lb(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cb(r,t,e){let n=new WeakMap,i=new Ue;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let T=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let x=a.attributes.position.count*A,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*M*4*f),E=new za(b,x,M,f);E.type=wi,E.needsUpdate=!0;let v=A*4;for(let C=0;C<f;C++){let D=p[C],I=m[C],O=S[C],L=x*M*4*C;for(let B=0;B<D.count;B++){let G=B*v;d===!0&&(i.fromBufferAttribute(D,B),b[L+G+0]=i.x,b[L+G+1]=i.y,b[L+G+2]=i.z,b[L+G+3]=0),g===!0&&(i.fromBufferAttribute(I,B),b[L+G+4]=i.x,b[L+G+5]=i.y,b[L+G+6]=i.z,b[L+G+7]=0),_===!0&&(i.fromBufferAttribute(O,B),b[L+G+8]=i.x,b[L+G+9]=i.y,b[L+G+10]=i.z,b[L+G+11]=O.itemSize===4?i.w:1)}}u={count:f,texture:E,size:new $t(x,M)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function hb(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var ub={[ed]:"LINEAR_TONE_MAPPING",[nd]:"REINHARD_TONE_MAPPING",[id]:"CINEON_TONE_MAPPING",[rd]:"ACES_FILMIC_TONE_MAPPING",[od]:"AGX_TONE_MAPPING",[nl]:"NEUTRAL_TONE_MAPPING",[sd]:"CUSTOM_TONE_MAPPING"};function fb(r,t,e,n,i,s){let o=new $n(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ci;c.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ne([0,2,0,0,2,0],2));let h=new Hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _e(c,h),u=new No(-1,1,1,-1,0,1),d=null,g=null,_=!1,p,m=null,S=[],A=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let b=0;b<S.length;b++){let E=S[b];E.setSize&&E.setSize(x,M)}},this.setEffects=function(x){S=x,A=S.length>0&&S[0].isRenderPass===!0;let M=o.width,b=o.height;S.length>0&&a===null&&(a=new $n(M,b,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new $n(M,b,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<S.length;E++){let v=S[E];v.setSize&&v.setSize(M,b)}},this.begin=function(x,M){if(_||x.toneMapping===Di&&S.length===0)return!1;if(m=M,M!==null){let b=M.width,E=M.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return A===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=Di,!0},this.hasRenderPass=function(){return A},this.end=function(x,M){x.toneMapping=p,_=!0;let b=o,E=a;for(let v=0;v<S.length;v++){let T=S[v];T.enabled!==!1&&(T.render(x,E,b,M),T.needsSwap!==!1&&(b=E,E=E===a?l:a))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},ce.getTransfer(d)===ge&&(h.defines.SRGB_TRANSFER="");let v=ub[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(m),x.render(f,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var L0=new Wn,Ld=new Gr(1,1),D0=new za,N0=new kc,U0=new qa,d0=[],p0=[],m0=new Float32Array(16),g0=new Float32Array(9),_0=new Float32Array(4);function Xo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=d0[i];if(s===void 0&&(s=new Float32Array(i),d0[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function rn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function jh(r,t){let e=p0[t];e===void 0&&(e=new Int32Array(t),p0[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function db(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function pb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function gb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function _b(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;_0.set(n),r.uniformMatrix2fv(this.addr,!1,_0),sn(e,n)}}function xb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;g0.set(n),r.uniformMatrix3fv(this.addr,!1,g0),sn(e,n)}}function vb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;m0.set(n),r.uniformMatrix4fv(this.addr,!1,m0),sn(e,n)}}function yb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Sb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function Mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function bb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function wb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Tb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function Eb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function Ab(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function Cb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ld.compareFunction=e.isReversedDepthBuffer()?Yh:qh,s=Ld):s=L0,e.setTexture2D(t||s,i)}function Rb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||N0,i)}function Pb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||U0,i)}function Ib(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||D0,i)}function Lb(r){switch(r){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return bb;case 5125:return wb;case 36294:return Tb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Db(r,t){r.uniform1fv(this.addr,t)}function Nb(r,t){let e=Xo(t,this.size,2);r.uniform2fv(this.addr,e)}function Ub(r,t){let e=Xo(t,this.size,3);r.uniform3fv(this.addr,e)}function Fb(r,t){let e=Xo(t,this.size,4);r.uniform4fv(this.addr,e)}function Ob(r,t){let e=Xo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Bb(r,t){let e=Xo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function zb(r,t){let e=Xo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function kb(r,t){r.uniform1iv(this.addr,t)}function Vb(r,t){r.uniform2iv(this.addr,t)}function Gb(r,t){r.uniform3iv(this.addr,t)}function Hb(r,t){r.uniform4iv(this.addr,t)}function Wb(r,t){r.uniform1uiv(this.addr,t)}function Xb(r,t){r.uniform2uiv(this.addr,t)}function qb(r,t){r.uniform3uiv(this.addr,t)}function Yb(r,t){r.uniform4uiv(this.addr,t)}function Zb(r,t,e){let n=this.cache,i=t.length,s=jh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Ld:o=L0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Jb(r,t,e){let n=this.cache,i=t.length,s=jh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||N0,s[o])}function $b(r,t,e){let n=this.cache,i=t.length,s=jh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||U0,s[o])}function Kb(r,t,e){let n=this.cache,i=t.length,s=jh(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||D0,s[o])}function Qb(r){switch(r){case 5126:return Db;case 35664:return Nb;case 35665:return Ub;case 35666:return Fb;case 35674:return Ob;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return kb;case 35667:case 35671:return Vb;case 35668:case 35672:return Gb;case 35669:case 35673:return Hb;case 5125:return Wb;case 36294:return Xb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Kb}}var Dd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lb(e.type)}},Nd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qb(e.type)}},Ud=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Pd=/(\w+)(\])?(\[|\.)?/g;function x0(r,t){r.seq.push(t),r.map[t.id]=t}function jb(r,t,e){let n=r.name,i=n.length;for(Pd.lastIndex=0;;){let s=Pd.exec(n),o=Pd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){x0(e,c===void 0?new Dd(a,r,t):new Nd(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new Ud(a),x0(e,f)),e=f}}}var Ho=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jb(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function v0(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var t1=37297,e1=0;function n1(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var y0=new Kt;function i1(r){ce._getMatrix(y0,ce.workingColorSpace,r);let t=`mat3( ${y0.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(r)){case Oa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function S0(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+n1(r.getShaderSource(t),a)}else return s}function r1(r,t){let e=i1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var s1={[ed]:"Linear",[nd]:"Reinhard",[id]:"Cineon",[rd]:"ACESFilmic",[od]:"AgX",[nl]:"Neutral",[sd]:"Custom"};function o1(r,t){let e=s1[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jh=new Y;function a1(){ce.getLuminanceCoefficients(Jh);let r=Jh.x.toFixed(4),t=Jh.y.toFixed(4),e=Jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function c1(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h1(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function pl(r){return r!==""}function M0(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function b0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(r){return r.replace(u1,d1)}var f1=new Map;function d1(r,t){let e=ee[t];if(e===void 0){let n=f1.get(t);if(n!==void 0)e=ee[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fd(e)}var p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(r){return r.replace(p1,m1)}function m1(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function T0(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var g1={[el]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function _1(r){return g1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x1={[$r]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[il]:"ENVMAP_TYPE_CUBE_UV"};function v1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":x1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var y1={[Ps]:"ENVMAP_MODE_REFRACTION"};function S1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":y1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var M1={[sh]:"ENVMAP_BLENDING_MULTIPLY",[Gg]:"ENVMAP_BLENDING_MIX",[Hg]:"ENVMAP_BLENDING_ADD"};function b1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":M1[r.combine]||"ENVMAP_BLENDING_NONE"}function w1(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function T1(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=_1(e),c=v1(e),h=S1(e),f=b1(e),u=w1(e),d=l1(e),g=c1(s),_=i.createProgram(),p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pl).join(`
`),m.length>0&&(m+=`
`)):(p=[T0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),m=[T0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?ee.tonemapping_pars_fragment:"",e.toneMapping!==Di?o1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,r1("linearToOutputTexel",e.outputColorSpace),a1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pl).join(`
`)),o=Fd(o),o=M0(o,e),o=b0(o,e),a=Fd(a),a=M0(a,e),a=b0(a,e),o=w0(o),a=w0(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=S+p+o,x=S+m+a,M=v0(i,i.VERTEX_SHADER,A),b=v0(i,i.FRAGMENT_SHADER,x);i.attachShader(_,M),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(M)||"",L=i.getShaderInfoLog(b)||"",B=I.trim(),G=O.trim(),k=L.trim(),K=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,b);else{let R=S0(i,M,"vertex"),Q=S0(i,b,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+R+`
`+Q)}else B!==""?Wt("WebGLProgram: Program Info Log:",B):(G===""||k==="")&&(Z=!1);Z&&(D.diagnostics={runnable:K,programLog:B,vertexShader:{log:G,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(M),i.deleteShader(b),v=new Ho(i,_),T=h1(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,t1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}var E1=0,Od=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bd(t),e.set(t,n)),n}},Bd=class{constructor(t){this.id=E1++,this.code=t,this.usedTimes=0}};function A1(r){return r===jr||r===cl||r===hl}function C1(r,t,e,n,i,s){let o=new ka,a=new Od,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,C,D,I,O){let L=D.fog,B=I.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=t.get(v.envMap||G,k),Z=K&&K.mapping===il?K.image.height:null,R=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Wt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,yt=Q!==void 0?Q.length:0,bt=0;B.morphAttributes.position!==void 0&&(bt=1),B.morphAttributes.normal!==void 0&&(bt=2),B.morphAttributes.color!==void 0&&(bt=3);let Gt,zt,St,q;if(R){let Bt=ji[R];Gt=Bt.vertexShader,zt=Bt.fragmentShader}else{Gt=v.vertexShader,zt=v.fragmentShader;let Bt=a.getVertexShaderStage(v),st=a.getFragmentShaderStage(v);a.update(v,Bt,st),St=Bt.id,q=st.id}let j=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Ut=I.isInstancedMesh===!0,dt=I.isBatchedMesh===!0,Dt=!!v.map,wt=!!v.matcap,Rt=!!K,Ht=!!v.aoMap,Qt=!!v.lightMap,V=!!v.bumpMap&&v.wireframe===!1,re=!!v.normalMap,ve=!!v.displacementMap,Fe=!!v.emissiveMap,Zt=!!v.metalnessMap,de=!!v.roughnessMap,F=v.anisotropy>0,Le=v.clearcoat>0,qt=v.dispersion>0,P=v.retroreflectivity>0,y=v.iridescence>0,z=v.sheen>0,W=v.transmission>0,$=F&&!!v.anisotropyMap,ct=Le&&!!v.clearcoatMap,ot=Le&&!!v.clearcoatNormalMap,tt=Le&&!!v.clearcoatRoughnessMap,nt=y&&!!v.iridescenceMap,pt=y&&!!v.iridescenceThicknessMap,Ct=z&&!!v.sheenColorMap,mt=z&&!!v.sheenRoughnessMap,ft=!!v.specularMap,lt=!!v.specularColorMap,Ft=!!v.specularIntensityMap,Vt=W&&!!v.transmissionMap,N=W&&!!v.thicknessMap,ht=!!v.gradientMap,et=!!v.alphaMap,gt=v.alphaTest>0,xt=!!v.alphaHash,it=!!v.extensions,at=Di;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(at=r.toneMapping);let rt={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:Gt,fragmentShader:zt,defines:v.defines,customVertexShaderID:St,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:dt,batchingColor:dt&&I._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&I.instanceColor!==null,instancingMorph:Ut&&I.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Dt,matcap:wt,envMap:Rt,envMapMode:Rt&&K.mapping,envMapCubeUVHeight:Z,aoMap:Ht,lightMap:Qt,bumpMap:V,normalMap:re,displacementMap:ve,emissiveMap:Fe,normalMapObjectSpace:re&&v.normalMapType===qg,normalMapTangentSpace:re&&v.normalMapType===ul,packedNormalMap:re&&v.normalMapType===ul&&A1(v.normalMap.format),metalnessMap:Zt,roughnessMap:de,anisotropy:F,anisotropyMap:$,clearcoat:Le,clearcoatMap:ct,clearcoatNormalMap:ot,clearcoatRoughnessMap:tt,dispersion:qt,retroreflection:P,iridescence:y,iridescenceMap:nt,iridescenceThicknessMap:pt,sheen:z,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:ft,specularColorMap:lt,specularIntensityMap:Ft,transmission:W,transmissionMap:Vt,thicknessMap:N,gradientMap:ht,opaque:v.transparent===!1&&v.blending===Oo&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:xt,combine:v.combine,mapUv:Dt&&g(v.map.channel),aoMapUv:Ht&&g(v.aoMap.channel),lightMapUv:Qt&&g(v.lightMap.channel),bumpMapUv:V&&g(v.bumpMap.channel),normalMapUv:re&&g(v.normalMap.channel),displacementMapUv:ve&&g(v.displacementMap.channel),emissiveMapUv:Fe&&g(v.emissiveMap.channel),metalnessMapUv:Zt&&g(v.metalnessMap.channel),roughnessMapUv:de&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:ct&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(v.sheenRoughnessMap.channel),specularMapUv:ft&&g(v.specularMap.channel),specularColorMapUv:lt&&g(v.specularColorMap.channel),specularIntensityMapUv:Ft&&g(v.specularIntensityMap.channel),transmissionMapUv:Vt&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:et&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(re||F),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Dt||et),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ut,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:bt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&ce.getTransfer(v.map.colorSpace)===ge,decodeVideoTextureEmissive:Fe&&v.emissiveMap.isVideoTexture===!0&&ce.getTransfer(v.emissiveMap.colorSpace)===ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(T,v),S(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){let T=d[v.type],C;if(T){let D=ji[T];C=o0.clone(D.uniforms)}else C=v.uniforms;return C}function x(v,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new T1(r,T,v,i),c.push(C),h.set(T,C)),C}function M(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function R1(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function P1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function E0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function A0(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,_,p,m){let S=r[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},r[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=p,S.group=m),t++,S}function l(u,d,g,_,p,m,S){S.reversedDepth===!0&&(p=-p);let A=a(u,d,g,_,p,m);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function c(u,d,g,_,p,m){let S=a(u,d,g,_,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||P1),n.length>1&&n.sort(d||E0),i.length>1&&i.sort(d||E0)}function f(){for(let u=t,d=r.length;u<d;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}function I1(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new A0,r.set(n,[o])):i>=s.length?(o=new A0,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function L1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new Xt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function D1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var N1=0;function U1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function F1(r){let t=new L1,e=D1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let i=new Y,s=new Ae,o=new Ae;function a(c){let h=0,f=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,S=0,A=0,x=0,M=0,b=0,E=0,v=0,T=0,C=0;c.sort(U1);for(let I=0,O=c.length;I<O;I++){let L=c[I],B=L.color,G=L.intensity,k=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===jr?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*G,f+=B.g*G,u+=B.b*G;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],G);C++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Q=e.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=K;let yt=R.getViewportCount();for(let bt=0;bt<yt;bt++)n.sunShadowMatrix[_+bt]=R.getMatrix(bt),n.sunShadowCascade[_+bt]=R._cascadeData[bt];_+=yt,g++}n.sun[d]=Z,d++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Q=e.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=Z,p++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(B).multiplyScalar(G),Z.distance=k,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[S]=Z;let R=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,R.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[S]=R.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=K,E++}S++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(B).multiplyScalar(G),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=Z,A++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let R=L.shadow,Q=e.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,Q.shadowCameraNear=R.camera.near,Q.shadowCameraFar=R.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=Z,m++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(G),Z.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[x]=Z,x++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let D=n.hash;(D.sunLength!==d||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=A,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=d,D.directionalLength=p,D.pointLength=m,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=v,D.numLightProbes=C,n.version=N1++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let x=c[S];if(x.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),f++}else if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(x.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function C0(r){let t=new F1(r),e=[],n=[],i=[];function s(u){f.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function O1(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new C0(r),t.set(i,[a])):s>=o.length?(a=new C0(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var B1=`void main() {
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
}`,k1=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],V1=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],R0=new Ae,dl=new Y,Id=new Y;function G1(r,t,e){let n=new Po,i=new $t,s=new $t,o=new Ue,a=new Wc,l=new Xc,c={},h=e.maxTextureSize,f={[Jr]:xn,[xn]:Jr,[di]:di},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:B1,fragmentShader:z1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ci;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new _e(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let m=this.type;this.render=function(b,E,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===bg&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=el);let T=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ki),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=m!==this.type;O&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=b.length;L<B;L++){let G=b[L],k=G.shadow;if(k===void 0){Wt("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let K=k.getFrameExtents();i.multiply(K),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,k.mapSize.y=s.y));let Z=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Z,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Fo){if(G.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new $n(i.x,i.y,{format:jr,type:Ui,minFilter:_n,magFilter:_n,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new Gr(i.x,i.y,wi),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=qi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=un,k.map.depthTexture.magFilter=un}else G.isPointLight?(k.map=new $h(i.x),k.map.depthTexture=new Gc(i.x,Ni)):(k.map=new $n(i.x,i.y),k.map.depthTexture=new Gr(i.x,i.y,Ni)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=qi,this.type===el?(k.map.depthTexture.compareFunction=Z?Yh:qh,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=un,k.map.depthTexture.magFilter=un);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let R=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();G.isPointLight!==!0&&k.updateMatrices(G,v);for(let Q=0;Q<R;Q++){let yt=k.getCamera(Q);if(G.isPointLight){let bt=k.camera,Gt=k.matrix,zt=G.distance||bt.far;zt!==bt.far&&(bt.far=zt,bt.updateProjectionMatrix()),dl.setFromMatrixPosition(G.matrixWorld),bt.position.copy(dl),Id.copy(bt.position),Id.add(k1[Q]),bt.up.copy(V1[Q]),bt.lookAt(Id),bt.updateMatrixWorld(),Gt.makeTranslation(-dl.x,-dl.y,-dl.z),R0.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(R0,bt.coordinateSystem,bt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,Q),r.clear();else{Q===0&&(r.setRenderTarget(k.map),r.clear());let bt=k.getViewport(Q);o.set(s.x*bt.x,s.y*bt.y,s.x*bt.z,s.y*bt.w),I.viewport(o)}n=k.getFrustum(Q),x(E,v,yt,G,this.type)}k.isPointLightShadow!==!0&&this.type===Fo&&S(k,v),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(T,C,D)};function S(b,E){let v=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new $n(i.x,i.y,{format:jr,type:Ui}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,v,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,v,d,_,null)}function A(b,E,v,T){let C=null,D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=C.uuid,O=E.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let B=L[O];B===void 0&&(B=C.clone(),L[O]=B,E.addEventListener("dispose",M)),C=B}if(C.visible=E.visible,C.wireframe=E.wireframe,T===Fo?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:f[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=r.properties.get(C);I.light=v}return C}function x(b,E,v,T,C){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Fo)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let O=t.update(b),L=b.material;if(Array.isArray(L)){let B=O.groups;for(let G=0,k=B.length;G<k;G++){let K=B[G],Z=L[K.materialIndex];if(Z&&Z.visible){let R=A(b,Z,T,C);b.onBeforeShadow(r,b,E,v,O,R,K),r.renderBufferDirect(v,null,O,R,b,K),b.onAfterShadow(r,b,E,v,O,R,K)}}}else if(L.visible){let B=A(b,L,T,C);b.onBeforeShadow(r,b,E,v,O,B,null),r.renderBufferDirect(v,null,O,B,b,null),b.onAfterShadow(r,b,E,v,O,B,null)}}let I=b.children;for(let O=0,L=I.length;O<L;O++)x(I[O],E,v,T,C)}function M(b){b.target.removeEventListener("dispose",M);for(let v in c){let T=c[v],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function H1(r,t){function e(){let N=!1,ht=new Ue,et=null,gt=new Ue(0,0,0,0);return{setMask:function(xt){et!==xt&&!N&&(r.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){N=xt},setClear:function(xt,it,at,rt,Bt){Bt===!0&&(xt*=rt,it*=rt,at*=rt),ht.set(xt,it,at,rt),gt.equals(ht)===!1&&(r.clearColor(xt,it,at,rt),gt.copy(ht))},reset:function(){N=!1,et=null,gt.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,et=null,gt=null,xt=null;return{setReversed:function(it){if(ht!==it){let at=t.get("EXT_clip_control");it?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let rt=xt;xt=null,this.setClear(rt)}},getReversed:function(){return ht},setTest:function(it){it?j(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(it){et!==it&&!N&&(r.depthMask(it),et=it)},setFunc:function(it){if(ht&&(it=r0[it]),gt!==it){switch(it){case Cc:r.depthFunc(r.NEVER);break;case Rc:r.depthFunc(r.ALWAYS);break;case Pc:r.depthFunc(r.LESS);break;case wo:r.depthFunc(r.LEQUAL);break;case Ic:r.depthFunc(r.EQUAL);break;case Lc:r.depthFunc(r.GEQUAL);break;case Dc:r.depthFunc(r.GREATER);break;case Nc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=it}},setLocked:function(it){N=it},setClear:function(it){xt!==it&&(xt=it,ht&&(it=1-it),r.clearDepth(it))},reset:function(){N=!1,et=null,gt=null,xt=null,ht=!1}}}function i(){let N=!1,ht=null,et=null,gt=null,xt=null,it=null,at=null,rt=null,Bt=null;return{setTest:function(st){N||(st?j(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(st){ht!==st&&!N&&(r.stencilMask(st),ht=st)},setFunc:function(st,kt,Pt){(et!==st||gt!==kt||xt!==Pt)&&(r.stencilFunc(st,kt,Pt),et=st,gt=kt,xt=Pt)},setOp:function(st,kt,Pt){(it!==st||at!==kt||rt!==Pt)&&(r.stencilOp(st,kt,Pt),it=st,at=kt,rt=Pt)},setLocked:function(st){N=st},setClear:function(st){Bt!==st&&(r.clearStencil(st),Bt=st)},reset:function(){N=!1,ht=null,et=null,gt=null,xt=null,it=null,at=null,rt=null,Bt=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,S=null,A=null,x=null,M=null,b=null,E=null,v=new Xt(0,0,0),T=0,C=!1,D=null,I=null,O=null,L=null,B=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=K>=2);let R=null,Q={},yt=r.getParameter(r.SCISSOR_BOX),bt=r.getParameter(r.VIEWPORT),Gt=new Ue().fromArray(yt),zt=new Ue().fromArray(bt);function St(N,ht,et,gt){let xt=new Uint8Array(4),it=r.createTexture();r.bindTexture(N,it),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<et;at++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(ht+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return it}let q={};q[r.TEXTURE_2D]=St(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=St(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=St(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=St(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(wo),V(!1),re(Jf),j(r.CULL_FACE),Ht(Ki);function j(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function ut(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Ut(N,ht){return u[N]!==ht?(r.bindFramebuffer(N,ht),u[N]=ht,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ht),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function dt(N,ht){let et=g,gt=!1;if(N){et=d.get(ht),et===void 0&&(et=[],d.set(ht,et));let xt=N.textures;if(et.length!==xt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let it=0,at=xt.length;it<at;it++)et[it]=r.COLOR_ATTACHMENT0+it;et.length=xt.length,gt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,gt=!0);gt&&r.drawBuffers(et)}function Dt(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let wt={[Rs]:r.FUNC_ADD,[Tg]:r.FUNC_SUBTRACT,[Eg]:r.FUNC_REVERSE_SUBTRACT};wt[Ag]=r.MIN,wt[Cg]=r.MAX;let Rt={[Rg]:r.ZERO,[Pg]:r.ONE,[Ig]:r.SRC_COLOR,[jf]:r.SRC_ALPHA,[Og]:r.SRC_ALPHA_SATURATE,[Ug]:r.DST_COLOR,[Dg]:r.DST_ALPHA,[Lg]:r.ONE_MINUS_SRC_COLOR,[td]:r.ONE_MINUS_SRC_ALPHA,[Fg]:r.ONE_MINUS_DST_COLOR,[Ng]:r.ONE_MINUS_DST_ALPHA,[Bg]:r.CONSTANT_COLOR,[zg]:r.ONE_MINUS_CONSTANT_COLOR,[kg]:r.CONSTANT_ALPHA,[Vg]:r.ONE_MINUS_CONSTANT_ALPHA};function Ht(N,ht,et,gt,xt,it,at,rt,Bt,st){if(N===Ki){p===!0&&(ut(r.BLEND),p=!1);return}if(p===!1&&(j(r.BLEND),p=!0),N!==wg){if(N!==m||st!==C){if((S!==Rs||M!==Rs)&&(r.blendEquation(r.FUNC_ADD),S=Rs,M=Rs),st)switch(N){case Oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $f:r.blendFunc(r.ONE,r.ONE);break;case Kf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Yt("WebGLState: Invalid blending: ",N);break}else switch(N){case Oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $f:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kf:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qf:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",N);break}A=null,x=null,b=null,E=null,v.set(0,0,0),T=0,m=N,C=st}return}xt=xt||ht,it=it||et,at=at||gt,(ht!==S||xt!==M)&&(r.blendEquationSeparate(wt[ht],wt[xt]),S=ht,M=xt),(et!==A||gt!==x||it!==b||at!==E)&&(r.blendFuncSeparate(Rt[et],Rt[gt],Rt[it],Rt[at]),A=et,x=gt,b=it,E=at),(rt.equals(v)===!1||Bt!==T)&&(r.blendColor(rt.r,rt.g,rt.b,Bt),v.copy(rt),T=Bt),m=N,C=!1}function Qt(N,ht){N.side===di?ut(r.CULL_FACE):j(r.CULL_FACE);let et=N.side===xn;ht&&(et=!et),V(et),N.blending===Oo&&N.transparent===!1?Ht(Ki):Ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let gt=N.stencilWrite;a.setTest(gt),gt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function re(N){N!==Sg?(j(r.CULL_FACE),N!==I&&(N===Jf?r.cullFace(r.BACK):N===Mg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),I=N}function ve(N){N!==O&&(k&&r.lineWidth(N),O=N)}function Fe(N,ht,et){N?(j(r.POLYGON_OFFSET_FILL),(L!==ht||B!==et)&&(L=ht,B=et,o.getReversed()&&(ht=-ht),r.polygonOffset(ht,et))):ut(r.POLYGON_OFFSET_FILL)}function Zt(N){N?j(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function de(N){N===void 0&&(N=r.TEXTURE0+G-1),R!==N&&(r.activeTexture(N),R=N)}function F(N,ht,et){et===void 0&&(R===null?et=r.TEXTURE0+G-1:et=R);let gt=Q[et];gt===void 0&&(gt={type:void 0,texture:void 0},Q[et]=gt),(gt.type!==N||gt.texture!==ht)&&(R!==et&&(r.activeTexture(et),R=et),r.bindTexture(N,ht||q[N]),gt.type=N,gt.texture=ht)}function Le(){let N=Q[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function qt(){try{r.compressedTexImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function y(){try{r.texSubImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function z(){try{r.texSubImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function ct(){try{r.texStorage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function ot(){try{r.texStorage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function tt(){try{r.texImage2D(...arguments)}catch(N){Yt("WebGLState:",N)}}function nt(){try{r.texImage3D(...arguments)}catch(N){Yt("WebGLState:",N)}}function pt(N){return f[N]!==void 0?f[N]:r.getParameter(N)}function Ct(N,ht){f[N]!==ht&&(r.pixelStorei(N,ht),f[N]=ht)}function mt(N){Gt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Gt.copy(N))}function ft(N){zt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),zt.copy(N))}function lt(N,ht){let et=c.get(ht);et===void 0&&(et=new WeakMap,c.set(ht,et));let gt=et.get(N);gt===void 0&&(gt=r.getUniformBlockIndex(ht,N.name),et.set(N,gt))}function Ft(N,ht){let gt=c.get(ht).get(N);l.get(ht)!==gt&&(r.uniformBlockBinding(ht,gt,N.__bindingPointIndex),l.set(ht,gt))}function Vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},R=null,Q={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,S=null,A=null,x=null,M=null,b=null,E=null,v=new Xt(0,0,0),T=0,C=!1,D=null,I=null,O=null,L=null,B=null,Gt.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:ut,bindFramebuffer:Ut,drawBuffers:dt,useProgram:Dt,setBlending:Ht,setMaterial:Qt,setFlipSided:V,setCullFace:re,setLineWidth:ve,setPolygonOffset:Fe,setScissorTest:Zt,activeTexture:de,bindTexture:F,unbindTexture:Le,compressedTexImage2D:qt,compressedTexImage3D:P,texImage2D:tt,texImage3D:nt,pixelStorei:Ct,getParameter:pt,updateUBOMapping:lt,uniformBlockBinding:Ft,texStorage2D:ct,texStorage3D:ot,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:mt,viewport:ft,reset:Vt}}function W1(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return g?new OffscreenCanvas(P,y):Ba("canvas")}function p(P,y,z){let W=1,$=qt(P);if(($.width>z||$.height>z)&&(W=z/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ct=Math.floor(W*$.width),ot=Math.floor(W*$.height);u===void 0&&(u=_(ct,ot));let tt=y?_(ct,ot):u;return tt.width=ct,tt.height=ot,tt.getContext("2d").drawImage(P,0,0,ct,ot),Wt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ot+")."),tt}else return"data"in P&&Wt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function S(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(P,y,z,W,$,ct=!1){if(P!==null){if(r[P]!==void 0)return r[P];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot;W&&(ot=t.get("EXT_texture_norm16"),ot||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=y;if(y===r.RED&&(z===r.FLOAT&&(tt=r.R32F),z===r.HALF_FLOAT&&(tt=r.R16F),z===r.UNSIGNED_BYTE&&(tt=r.R8),z===r.UNSIGNED_SHORT&&ot&&(tt=ot.R16_EXT),z===r.SHORT&&ot&&(tt=ot.R16_SNORM_EXT)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.R8UI),z===r.UNSIGNED_SHORT&&(tt=r.R16UI),z===r.UNSIGNED_INT&&(tt=r.R32UI),z===r.BYTE&&(tt=r.R8I),z===r.SHORT&&(tt=r.R16I),z===r.INT&&(tt=r.R32I)),y===r.RG&&(z===r.FLOAT&&(tt=r.RG32F),z===r.HALF_FLOAT&&(tt=r.RG16F),z===r.UNSIGNED_BYTE&&(tt=r.RG8),z===r.UNSIGNED_SHORT&&ot&&(tt=ot.RG16_EXT),z===r.SHORT&&ot&&(tt=ot.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.RG8UI),z===r.UNSIGNED_SHORT&&(tt=r.RG16UI),z===r.UNSIGNED_INT&&(tt=r.RG32UI),z===r.BYTE&&(tt=r.RG8I),z===r.SHORT&&(tt=r.RG16I),z===r.INT&&(tt=r.RG32I)),y===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),z===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),z===r.UNSIGNED_INT&&(tt=r.RGB32UI),z===r.BYTE&&(tt=r.RGB8I),z===r.SHORT&&(tt=r.RGB16I),z===r.INT&&(tt=r.RGB32I)),y===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),z===r.UNSIGNED_INT&&(tt=r.RGBA32UI),z===r.BYTE&&(tt=r.RGBA8I),z===r.SHORT&&(tt=r.RGBA16I),z===r.INT&&(tt=r.RGBA32I)),y===r.RGB&&(z===r.UNSIGNED_SHORT&&ot&&(tt=ot.RGB16_EXT),z===r.SHORT&&ot&&(tt=ot.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),y===r.RGBA){let nt=ct?Oa:ce.getTransfer($);z===r.FLOAT&&(tt=r.RGBA32F),z===r.HALF_FLOAT&&(tt=r.RGBA16F),z===r.UNSIGNED_BYTE&&(tt=nt===ge?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ot&&(tt=ot.RGBA16_EXT),z===r.SHORT&&ot&&(tt=ot.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(P,y){let z;return P?y===null||y===Ni||y===zo?z=r.DEPTH24_STENCIL8:y===wi?z=r.DEPTH32F_STENCIL8:y===Bo&&(z=r.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===zo?z=r.DEPTH_COMPONENT24:y===wi?z=r.DEPTH_COMPONENT32F:y===Bo&&(z=r.DEPTH_COMPONENT16),z}function b(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==_n?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function E(P){let y=P.target;y.removeEventListener("dispose",E),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function v(P){let y=P.target;y.removeEventListener("dispose",v),D(y)}function T(P){let y=n.get(P);if(y.__webglInit===void 0)return;let z=P.source,W=d.get(z);if(W){let $=W[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(P),Object.keys(W).length===0&&d.delete(z)}n.remove(P)}function C(P){let y=n.get(P);r.deleteTexture(y.__webglTexture);let z=P.source,W=d.get(z);delete W[y.__cacheKey],o.memory.textures--}function D(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let $=0;$<y.__webglFramebuffer[W].length;$++)r.deleteFramebuffer(y.__webglFramebuffer[W][$]);else r.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)r.deleteFramebuffer(y.__webglFramebuffer[W]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=P.textures;for(let W=0,$=z.length;W<$;W++){let ct=n.get(z[W]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(z[W])}n.remove(P)}let I=0;function O(){I=0}function L(){return I}function B(P){I=P}function G(){let P=I;return P>=i.maxTextures&&Wt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function k(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function K(P,y){let z=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let W=P.image;if(W===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(z,P,y);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function Z(P,y){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ut(z,P,y);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function R(P,y){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ut(z,P,y);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function Q(P,y){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Ut(z,P,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}let yt={[Uc]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Fc]:r.MIRRORED_REPEAT},bt={[un]:r.NEAREST,[Wg]:r.NEAREST_MIPMAP_NEAREST,[rl]:r.NEAREST_MIPMAP_LINEAR,[_n]:r.LINEAR,[lh]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},Gt={[Zg]:r.NEVER,[jg]:r.ALWAYS,[Jg]:r.LESS,[qh]:r.LEQUAL,[$g]:r.EQUAL,[Yh]:r.GEQUAL,[Kg]:r.GREATER,[Qg]:r.NOTEQUAL};function zt(P,y){if(y.type===wi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===_n||y.magFilter===lh||y.magFilter===rl||y.magFilter===Kr||y.minFilter===_n||y.minFilter===lh||y.minFilter===rl||y.minFilter===Kr)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,yt[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,yt[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,yt[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,bt[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,bt[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==rl&&y.minFilter!==Kr||y.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function St(P,y){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",E));let W=y.source,$=d.get(W);$===void 0&&($={},d.set(W,$));let ct=k(y);if(ct!==P.__cacheKey){$[ct]===void 0&&($[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[ct].usedTimes++;let ot=$[P.__cacheKey];ot!==void 0&&($[P.__cacheKey].usedTimes--,ot.usedTimes===0&&C(y)),P.__cacheKey=ct,P.__webglTexture=$[ct].texture}return z}function q(P,y,z){return Math.floor(Math.floor(P/z)/y)}function j(P,y,z,W){let ct=P.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{ct.sort((Ct,mt)=>Ct.start-mt.start);let ot=0;for(let Ct=1;Ct<ct.length;Ct++){let mt=ct[ot],ft=ct[Ct],lt=mt.start+mt.count,Ft=q(ft.start,y.width,4),Vt=q(mt.start,y.width,4);ft.start<=lt+1&&Ft===Vt&&q(ft.start+ft.count-1,y.width,4)===Ft?mt.count=Math.max(mt.count,ft.start+ft.count-mt.start):(++ot,ct[ot]=ft)}ct.length=ot+1;let tt=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),pt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Ct=0,mt=ct.length;Ct<mt;Ct++){let ft=ct[Ct],lt=Math.floor(ft.start/4),Ft=Math.ceil(ft.count/4),Vt=lt%y.width,N=Math.floor(lt/y.width),ht=Ft,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,Vt,N,ht,et,z,W,y.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,tt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,pt)}}function ut(P,y,z){let W=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=r.TEXTURE_3D);let $=St(P,y),ct=y.source;e.bindTexture(W,P.__webglTexture,r.TEXTURE0+z);let ot=n.get(ct);if(ct.version!==ot.__version||$===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let et=ce.getPrimaries(ce.workingColorSpace),gt=y.colorSpace===xr?null:ce.getPrimaries(y.colorSpace),xt=y.colorSpace===xr||et===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let nt=p(y.image,!1,i.maxTextureSize);nt=Le(y,nt);let pt=s.convert(y.format,y.colorSpace),Ct=s.convert(y.type),mt=x(y.internalFormat,pt,Ct,y.normalized,y.colorSpace,y.isVideoTexture);zt(W,y);let ft,lt=y.mipmaps,Ft=y.isVideoTexture!==!0,Vt=ot.__version===void 0||$===!0,N=ct.dataReady,ht=b(y,nt);if(y.isDepthTexture)mt=M(y.format===Qr,y.type),Vt&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,mt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,mt,nt.width,nt.height,0,pt,Ct,null));else if(y.isDataTexture)if(lt.length>0){Ft&&Vt&&e.texStorage2D(r.TEXTURE_2D,ht,mt,lt[0].width,lt[0].height);for(let et=0,gt=lt.length;et<gt;et++)ft=lt[et],Ft?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,pt,Ct,ft.data):e.texImage2D(r.TEXTURE_2D,et,mt,ft.width,ft.height,0,pt,Ct,ft.data);y.generateMipmaps=!1}else Ft?(Vt&&e.texStorage2D(r.TEXTURE_2D,ht,mt,nt.width,nt.height),N&&j(y,nt,pt,Ct)):e.texImage2D(r.TEXTURE_2D,0,mt,nt.width,nt.height,0,pt,Ct,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&Vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,mt,lt[0].width,lt[0].height,nt.depth);for(let et=0,gt=lt.length;et<gt;et++)if(ft=lt[et],y.format!==Ti)if(pt!==null)if(Ft){if(N)if(y.layerUpdates.size>0){let xt=yd(ft.width,ft.height,y.format,y.type);for(let it of y.layerUpdates){let at=ft.data.subarray(it*xt/ft.data.BYTES_PER_ELEMENT,(it+1)*xt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,it,ft.width,ft.height,1,pt,at)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,nt.depth,pt,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,mt,ft.width,ft.height,nt.depth,0,ft.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,nt.depth,pt,Ct,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,mt,ft.width,ft.height,nt.depth,0,pt,Ct,ft.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ft&&Vt&&e.texStorage2D(r.TEXTURE_2D,ht,mt,lt[0].width,lt[0].height);for(let et=0,gt=lt.length;et<gt;et++)ft=lt[et],y.format!==Ti?pt!==null?Ft?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,et,mt,ft.width,ft.height,0,ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,pt,Ct,ft.data):e.texImage2D(r.TEXTURE_2D,et,mt,ft.width,ft.height,0,pt,Ct,ft.data)}else if(y.isDataArrayTexture)if(Ft){if(Vt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,mt,nt.width,nt.height,nt.depth),N)if(y.layerUpdates.size>0){let et=yd(nt.width,nt.height,y.format,y.type);for(let gt of y.layerUpdates){let xt=nt.data.subarray(gt*et/nt.data.BYTES_PER_ELEMENT,(gt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,nt.width,nt.height,1,pt,Ct,xt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,Ct,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,mt,nt.width,nt.height,nt.depth,0,pt,Ct,nt.data);else if(y.isData3DTexture)Ft?(Vt&&e.texStorage3D(r.TEXTURE_3D,ht,mt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,Ct,nt.data)):e.texImage3D(r.TEXTURE_3D,0,mt,nt.width,nt.height,nt.depth,0,pt,Ct,nt.data);else if(y.isFramebufferTexture){if(Vt)if(Ft)e.texStorage2D(r.TEXTURE_2D,ht,mt,nt.width,nt.height);else{let et=nt.width,gt=nt.height;for(let xt=0;xt<ht;xt++)e.texImage2D(r.TEXTURE_2D,xt,mt,et,gt,0,pt,Ct,null),et>>=1,gt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),f.add(y),et.onpaint=gt=>{let xt=gt.changedElements;for(let it of f)xt.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let xt=r.RGBA,it=r.RGBA,at=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xt,it,at,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(Ft&&Vt){let et=qt(lt[0]);e.texStorage2D(r.TEXTURE_2D,ht,mt,et.width,et.height)}for(let et=0,gt=lt.length;et<gt;et++)ft=lt[et],Ft?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,pt,Ct,ft):e.texImage2D(r.TEXTURE_2D,et,mt,pt,Ct,ft);y.generateMipmaps=!1}else if(Ft){if(Vt){let et=qt(nt);e.texStorage2D(r.TEXTURE_2D,ht,mt,et.width,et.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Ct,nt)}else e.texImage2D(r.TEXTURE_2D,0,mt,pt,Ct,nt);m(y)&&S(W),ot.__version=ct.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ut(P,y,z){if(y.image.length!==6)return;let W=St(P,y),$=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);let ct=n.get($);if($.version!==ct.__version||W===!0){e.activeTexture(r.TEXTURE0+z);let ot=ce.getPrimaries(ce.workingColorSpace),tt=y.colorSpace===xr?null:ce.getPrimaries(y.colorSpace),nt=y.colorSpace===xr||ot===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let pt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ct=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!pt&&!Ct?mt[it]=p(y.image[it],!0,i.maxCubemapSize):mt[it]=Ct?y.image[it].image:y.image[it],mt[it]=Le(y,mt[it]);let ft=mt[0],lt=s.convert(y.format,y.colorSpace),Ft=s.convert(y.type),Vt=x(y.internalFormat,lt,Ft,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,ht=ct.__version===void 0||W===!0,et=$.dataReady,gt=b(y,ft);zt(r.TEXTURE_CUBE_MAP,y);let xt;if(pt){N&&ht&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Vt,ft.width,ft.height);for(let it=0;it<6;it++){xt=mt[it].mipmaps;for(let at=0;at<xt.length;at++){let rt=xt[at];y.format!==Ti?lt!==null?N?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,lt,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,Vt,rt.width,rt.height,0,rt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,lt,Ft,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,Vt,rt.width,rt.height,0,lt,Ft,rt.data)}}}else{if(xt=y.mipmaps,N&&ht){xt.length>0&&gt++;let it=qt(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Vt,it.width,it.height)}for(let it=0;it<6;it++)if(Ct){N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,lt,Ft,mt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,mt[it].width,mt[it].height,0,lt,Ft,mt[it].data);for(let at=0;at<xt.length;at++){let Bt=xt[at].image[it].image;N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,Bt.width,Bt.height,lt,Ft,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,Vt,Bt.width,Bt.height,0,lt,Ft,Bt.data)}}else{N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,lt,Ft,mt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,lt,Ft,mt[it]);for(let at=0;at<xt.length;at++){let rt=xt[at];N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,lt,Ft,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,Vt,lt,Ft,rt.image[it])}}}m(y)&&S(r.TEXTURE_CUBE_MAP),ct.__version=$.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function dt(P,y,z,W,$,ct){let ot=s.convert(z.format,z.colorSpace),tt=s.convert(z.type),nt=x(z.internalFormat,ot,tt,z.normalized,z.colorSpace),pt=n.get(y),Ct=n.get(z);if(Ct.__renderTarget=y,!pt.__hasExternalTextures){let mt=Math.max(1,y.width>>ct),ft=Math.max(1,y.height>>ct);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,ct,nt,mt,ft,y.depth,0,ot,tt,null):e.texImage2D($,ct,nt,mt,ft,0,ot,tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),de(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,$,Ct.__webglTexture,0,Zt(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,$,Ct.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(P,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){let W=y.depthTexture,$=W&&W.isDepthTexture?W.type:null,ct=M(y.stencilBuffer,$),ot=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;de(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(y),ct,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(y),ct,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ct,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,P)}else{let W=y.textures;for(let $=0;$<W.length;$++){let ct=W[$],ot=s.convert(ct.format,ct.colorSpace),tt=s.convert(ct.type),nt=x(ct.internalFormat,ot,tt,ct.normalized,ct.colorSpace);de(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(y),nt,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(y),nt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,nt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function wt(P,y,z){let W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),zt(r.TEXTURE_CUBE_MAP,y.depthTexture);let pt=s.convert(y.depthTexture.format),Ct=s.convert(y.depthTexture.type),mt;y.depthTexture.format===qi?mt=r.DEPTH_COMPONENT24:y.depthTexture.format===Qr&&(mt=r.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,mt,y.width,y.height,0,pt,Ct,null)}}else K(y.depthTexture,0);let ct=$.__webglTexture,ot=Zt(y),tt=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,nt=y.depthTexture.format===Qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===qi)de(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,ct,0);else if(y.depthTexture.format===Qr)de(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(P){let y=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=W}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)wt(y.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?wt(y.__webglFramebuffer[0],P,0):wt(y.__webglFramebuffer,P,0)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=r.createRenderbuffer(),Dt(y.__webglDepthbuffer[W],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Dt(y.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(P,y,z){let W=n.get(P);y!==void 0&&dt(W.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Rt(P)}function Qt(P){let y=P.texture,z=n.get(P),W=n.get(y);P.addEventListener("dispose",v);let $=P.textures,ct=P.isWebGLCubeRenderTarget===!0,ot=$.length>1;if(ot||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=y.version,o.memory.textures++),ct){z.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[tt]=[];for(let nt=0;nt<y.mipmaps.length;nt++)z.__webglFramebuffer[tt][nt]=r.createFramebuffer()}else z.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)z.__webglFramebuffer[tt]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ot)for(let tt=0,nt=$.length;tt<nt;tt++){let pt=n.get($[tt]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&de(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let tt=0;tt<$.length;tt++){let nt=$[tt];z.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[tt]);let pt=s.convert(nt.format,nt.colorSpace),Ct=s.convert(nt.type),mt=x(nt.internalFormat,pt,Ct,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),ft=Zt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,mt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,z.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),zt(r.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let nt=0;nt<y.mipmaps.length;nt++)dt(z.__webglFramebuffer[tt][nt],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else dt(z.__webglFramebuffer[tt],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(y)&&S(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let tt=0,nt=$.length;tt<nt;tt++){let pt=$[tt],Ct=n.get(pt),mt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(mt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(mt,Ct.__webglTexture),zt(mt,pt),dt(z.__webglFramebuffer,P,pt,r.COLOR_ATTACHMENT0+tt,mt,0),m(pt)&&S(mt)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,W.__webglTexture),zt(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let nt=0;nt<y.mipmaps.length;nt++)dt(z.__webglFramebuffer[nt],P,y,r.COLOR_ATTACHMENT0,tt,nt);else dt(z.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,tt,0);m(y)&&S(tt),e.unbindTexture()}P.depthBuffer&&Rt(P)}function V(P){let y=P.textures;for(let z=0,W=y.length;z<W;z++){let $=y[z];if(m($)){let ct=A(P),ot=n.get($).__webglTexture;e.bindTexture(ct,ot),S(ct),e.unbindTexture()}}}let re=[],ve=[];function Fe(P){if(P.samples>0){if(de(P)===!1){let y=P.textures,z=P.width,W=P.height,$=r.COLOR_BUFFER_BIT,ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=n.get(P),tt=y.length>1;if(tt)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ot.__webglColorRenderbuffer[pt]);let Ct=n.get(y[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,z,W,0,0,z,W,$,r.NEAREST),l===!0&&(re.length=0,ve.length=0,re.push(r.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(re.push(ct),ve.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ot.__webglColorRenderbuffer[pt]);let Ct=n.get(y[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Ct,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Zt(P){return Math.min(i.maxSamples,P.samples)}function de(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(P){let y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function Le(P,y){let z=P.colorSpace,W=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Fa&&z!==xr&&(ce.getTransfer(z)===ge?(W!==Ti||$!==Kn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",z)),y}function qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=R,this.setTextureCube=Q,this.rebindTextures=Ht,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function X1(r,t){function e(n,i=xr){let s,o=ce.getTransfer(i);if(n===Kn)return r.UNSIGNED_BYTE;if(n===hh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ud)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ld)return r.BYTE;if(n===cd)return r.SHORT;if(n===Bo)return r.UNSIGNED_SHORT;if(n===ch)return r.INT;if(n===Ni)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===Ui)return r.HALF_FLOAT;if(n===fd)return r.ALPHA;if(n===dd)return r.RGB;if(n===Ti)return r.RGBA;if(n===qi)return r.DEPTH_COMPONENT;if(n===Qr)return r.DEPTH_STENCIL;if(n===fh)return r.RED;if(n===dh)return r.RED_INTEGER;if(n===jr)return r.RG;if(n===ph)return r.RG_INTEGER;if(n===mh)return r.RGBA_INTEGER;if(n===sl||n===ol||n===al||n===ll)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===_h||n===xh||n===vh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yh||n===Sh||n===Mh||n===bh||n===wh||n===cl||n===Th)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yh||n===Sh)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===bh)return s.COMPRESSED_R11_EAC;if(n===wh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===cl)return s.COMPRESSED_RG11_EAC;if(n===Th)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===zh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ah)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ch)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ph)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ih)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kh||n===Vh||n===Gh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===kh)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hh||n===Wh||n===hl||n===Xh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var q1=`
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

}`,zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Za(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hi({vertexShader:q1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kd=class extends Yi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,_=typeof XRWebGLBinding<"u",p=new zd,m={},S=e.getContextAttributes(),A=null,x=null,M=[],b=[],E=new $t,v=null,T=null,C=new gn;C.viewport=new Ue;let D=new gn;D.viewport=new Ue;let I=[C,D],O=new ih,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=M[q];return j===void 0&&(j=new Ro,M[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=M[q];return j===void 0&&(j=new Ro,M[q]=j),j.getGripSpace()},this.getHand=function(q){let j=M[q];return j===void 0&&(j=new Ro,M[q]=j),j.getHandSpace()};function G(q){let j=b.indexOf(q.inputSource);if(j===-1)return;let ut=M[j];ut!==void 0&&(ut.update(q.inputSource,q.frame,c||o),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let q=0;q<M.length;q++){let j=b[q];j!==null&&(b[q]=null,M[q].disconnect(j))}L=null,B=null,p.reset();for(let q in m)delete m[q];if(t.setRenderTarget(A),d=null,u=null,f=null,i=null,x=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Ut=null,dt=null;S.depth&&(dt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=S.stencil?Qr:qi,Ut=S.stencil?zo:Ni);let Dt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new $n(u.textureWidth,u.textureHeight,{format:Ti,type:Kn,depthTexture:new Gr(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new $n(d.framebufferWidth,d.framebufferHeight,{format:Ti,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(q){for(let j=0;j<q.removed.length;j++){let ut=q.removed[j],Ut=b.indexOf(ut);Ut>=0&&(b[Ut]=null,M[Ut].disconnect(ut))}for(let j=0;j<q.added.length;j++){let ut=q.added[j],Ut=b.indexOf(ut);if(Ut===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=b.length){b.push(ut),Ut=Dt;break}else if(b[Dt]===null){b[Dt]=ut,Ut=Dt;break}if(Ut===-1)break}let dt=M[Ut];dt&&dt.connect(ut)}}let Z=new Y,R=new Y;function Q(q,j,ut){Z.setFromMatrixPosition(j.matrixWorld),R.setFromMatrixPosition(ut.matrixWorld);let Ut=Z.distanceTo(R),dt=j.projectionMatrix.elements,Dt=ut.projectionMatrix.elements,wt=dt[14]/(dt[10]-1),Rt=dt[14]/(dt[10]+1),Ht=(dt[9]+1)/dt[5],Qt=(dt[9]-1)/dt[5],V=(dt[8]-1)/dt[0],re=(Dt[8]+1)/Dt[0],ve=wt*V,Fe=wt*re,Zt=Ut/(-V+re),de=Zt*-V;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(Zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),dt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let F=wt+Zt,Le=Rt+Zt,qt=ve-de,P=Fe+(Ut-de),y=Ht*Rt/Le*F,z=Qt*Rt/Le*F;q.projectionMatrix.makePerspective(qt,P,y,z,F,Le),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function yt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,ut=q.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(ut=p.depthFar)),O.near=D.near=C.near=j,O.far=D.far=C.far=ut,(L!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,B=O.far),O.layers.mask=q.layers.mask|6,C.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let Ut=q.parent,dt=O.cameras;yt(O,Ut);for(let Dt=0;Dt<dt.length;Dt++)yt(dt[Dt],Ut);dt.length===2?Q(O,C,D):O.projectionMatrix.copy(C.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),bt(q,O,Ut)};function bt(q,j,ut){ut===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ao*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(q){return m[q]};let Gt=null;function zt(q,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let ut=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Ut=!1;ut.length!==O.cameras.length&&(O.cameras.length=0,Ut=!0);for(let Rt=0;Rt<ut.length;Rt++){let Ht=ut[Rt],Qt=null;if(d!==null)Qt=d.getViewport(Ht);else{let re=f.getViewSubImage(u,Ht);Qt=re.viewport,Rt===0&&(t.setRenderTargetTextures(x,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(x))}let V=I[Rt];V===void 0&&(V=new gn,V.layers.enable(Rt),V.viewport=new Ue,I[Rt]=V),V.matrix.fromArray(Ht.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Ht.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Rt===0&&(O.matrix.copy(V.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ut===!0&&O.cameras.push(V)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Rt=f.getDepthInformation(ut[0]);Rt&&Rt.isValid&&Rt.texture&&p.init(Rt,i.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Rt=0;Rt<ut.length;Rt++){let Ht=ut[Rt].camera;if(Ht){let Qt=m[Ht];Qt||(Qt=new Za,m[Ht]=Qt);let V=f.getCameraImage(Ht);Qt.sourceTexture=V}}}}for(let ut=0;ut<M.length;ut++){let Ut=b[ut],dt=M[ut];Ut!==null&&dt!==void 0&&dt.update(Ut,j,c||o)}Gt&&Gt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let St=new P0;St.setAnimationLoop(zt),this.setAnimationLoop=function(q){Gt=q},this.dispose=function(){}}},Z1=new Ae,F0=new Kt;F0.set(-1,0,0,0,1,0,0,0,1);function J1(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_d(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,A,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),A=S.envMap,x=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(F0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $1(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function c(x,M){let b=i[x.id];b===void 0&&(p(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",S));let E=M.program;n.updateUBOMapping(x,E);let v=t.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){let M=f();x.__bindingPointIndex=M;let b=r.createBuffer(),E=x.__size,v=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,b),b}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=i[x.id],b=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let v=0,T=b.length;v<T;v++){let C=b[v];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)d(C[D],v,D,E);else d(C,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,M,b,E){if(_(x,M,b,E)===!0){let v=x.__offset,T=x.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let I=T[D],O=m(I);g(I,x.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,x.__data)}}function g(x,M,b){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,b)}function _(x,M,b,E){let v=x.value,T=M+"_"+b;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{let C=E[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(x){let M=x.uniforms,b=0,E=16;for(let T=0,C=M.length;T<C;T++){let D=Array.isArray(M[T])?M[T]:[M[T]];for(let I=0,O=D.length;I<O;I++){let L=D[I],B=Array.isArray(L.value)?L.value:[L.value];for(let G=0,k=B.length;G<k;G++){let K=B[G],Z=m(K),R=b%E,Q=R%Z.boundary,yt=R+Q;b+=Q,yt!==0&&E-yt<Z.storage&&(b+=E-yt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=Z.storage}}}let v=b%E;return v>0&&(b+=E-v),x.__size=b,x.__cache={},this}function m(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function A(){for(let x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:A}}var K1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function Q1(){return Qi===null&&(Qi=new Wa(K1,16,16,jr,Ui),Qi.name="DFG_LUT",Qi.minFilter=_n,Qi.magFilter=_n,Qi.wrapS=Xi,Qi.wrapT=Xi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var Kh=class{constructor(t={}){let{canvas:e=e0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Kn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=d,p=new Set([mh,ph,dh]),m=new Set([Kn,Ni,Bo,zo,hh,uh]),S=new Uint32Array(4),A=new Int32Array(4),x=new Y,M=null,b=null,E=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,I=null,O=null,L=null,B=null;this._outputColorSpace=Pn;let G=0,k=0,K=null,Z=-1,R=null,Q=new Ue,yt=new Ue,bt=null,Gt=new Xt(0),zt=0,St=e.width,q=e.height,j=1,ut=null,Ut=null,dt=new Ue(0,0,St,q),Dt=new Ue(0,0,St,q),wt=!1,Rt=new Po,Ht=!1,Qt=!1,V=new Ae,re=new Y,ve=new Ue,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function de(){return K===null?j:1}let F=n;function Le(w,U){return e.getContext(w,U)}let qt,P,y,z,W,$,ct,ot,tt,nt,pt,Ct,mt,ft,lt,Ft,Vt,N,ht,et,gt,xt,it;try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",kt,!1),F===null){let U="webgl2";if(F=Le(U,w),F===null)throw Le(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(w){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),Yt("WebGLRenderer: "+w.message),w}function at(){qt=new sb(F),qt.init(),gt=new X1(F,qt),P=new JM(F,qt,t,gt),y=new H1(F,qt),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),O=F.createFramebuffer(),L=F.createFramebuffer(),B=F.createFramebuffer(),z=new lb(F),W=new R1,$=new W1(F,qt,y,W,P,gt,z),ct=new rb(C),ot=new hy(F),xt=new YM(F,ot),tt=new ob(F,ot,z,xt),nt=new hb(F,tt,ot,xt,z),N=new cb(F,P,$),lt=new $M(W),pt=new C1(C,ct,qt,P,xt,lt),Ct=new J1(C,W),mt=new I1,ft=new O1(qt),Vt=new qM(C,ct,y,nt,g,l),Ft=new G1(C,nt,P),it=new $1(F,z,P,y),ht=new ZM(F,qt,z),et=new ab(F,qt,z),z.programs=pt.programs,C.capabilities=P,C.extensions=qt,C.properties=W,C.renderLists=mt,C.shadowMap=Ft,C.state=y,C.info=z}_!==Kn&&(T=new fb(_,e.width,e.height,a,i,s));let rt=new kd(C,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=qt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=qt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(St,q,!1))},this.getSize=function(w){return w.set(St,q)},this.setSize=function(w,U,J=!0){if(rt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=w,q=U,e.width=Math.floor(w*j),e.height=Math.floor(U*j),J===!0&&(e.style.width=w+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(St*j,q*j).floor()},this.setDrawingBufferSize=function(w,U,J){St=w,q=U,j=J,e.width=Math.floor(w*J),e.height=Math.floor(U*J),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(_===Kn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(dt)},this.setViewport=function(w,U,J,H){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,U,J,H),y.viewport(Q.copy(dt).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,U,J,H){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,U,J,H),y.scissor(yt.copy(Dt).multiplyScalar(j).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){y.setScissorTest(wt=w)},this.setOpaqueSort=function(w){ut=w},this.setTransparentSort=function(w){Ut=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,J=!0){let H=0;if(w){let X=!1;if(K!==null){let _t=K.texture.format;X=p.has(_t)}if(X){let _t=K.texture.type,Et=m.has(_t),Mt=Vt.getClearColor(),It=Vt.getClearAlpha(),Ot=Mt.r,te=Mt.g,le=Mt.b;Et?(S[0]=Ot,S[1]=te,S[2]=le,S[3]=It,F.clearBufferuiv(F.COLOR,0,S)):(A[0]=Ot,A[1]=te,A[2]=le,A[3]=It,F.clearBufferiv(F.COLOR,0,A))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),Vt.dispose(),mt.dispose(),ft.dispose(),W.dispose(),ct.dispose(),nt.dispose(),xt.dispose(),it.dispose(),pt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Re),rt.removeEventListener("sessionend",Se),he.stop()};function Bt(w){w.preventDefault(),md("WebGLRenderer: Context Lost."),D=!0}function st(){md("WebGLRenderer: Context Restored."),D=!1;let w=z.autoReset,U=Ft.enabled,J=Ft.autoUpdate,H=Ft.needsUpdate,X=Ft.type;at(),z.autoReset=w,Ft.enabled=U,Ft.autoUpdate=J,Ft.needsUpdate=H,Ft.type=X}function kt(w){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pt(w){let U=w.target;U.removeEventListener("dispose",Pt),Jt(U)}function Jt(w){Ze(w),W.remove(w)}function Ze(w){let U=W.get(w).programs;U!==void 0&&(U.forEach(function(J){pt.releaseProgram(J)}),w.isShaderMaterial&&pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,J,H,X,_t){U===null&&(U=Fe);let Et=X.isMesh&&X.matrixWorld.determinantAffine()<0,Mt=an(w,U,J,H,X);y.setMaterial(H,Et);let It=J.index,Ot=1;if(H.wireframe===!0){if(It=tt.getWireframeAttribute(J),It===void 0)return;Ot=2}let te=J.drawRange,le=J.attributes.position,Lt=te.start*Ot,pe=(te.start+te.count)*Ot;_t!==null&&(Lt=Math.max(Lt,_t.start*Ot),pe=Math.min(pe,(_t.start+_t.count)*Ot)),It!==null?(Lt=Math.max(Lt,0),pe=Math.min(pe,It.count)):le!=null&&(Lt=Math.max(Lt,0),pe=Math.min(pe,le.count));let $e=pe-Lt;if($e<0||$e===1/0)return;xt.setup(X,H,Mt,J,It);let Pe,Me=ht;if(It!==null&&(Pe=ot.get(It),Me=et,Me.setIndex(Pe)),X.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*de()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(X.isLine){let yn=H.linewidth;yn===void 0&&(yn=1),y.setLineWidth(yn*de()),X.isLineSegments?Me.setMode(F.LINES):X.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else X.isPoints?Me.setMode(F.POINTS):X.isSprite&&Me.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))Me.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let yn=X._multiDrawStarts,Tt=X._multiDrawCounts,Nn=X._multiDrawCount,fe=It?ot.get(It).bytesPerElement:1,mi=W.get(H).currentProgram.getUniforms();for(let Oi=0;Oi<Nn;Oi++)mi.setValue(F,"_gl_DrawID",Oi),Me.render(yn[Oi]/fe,Tt[Oi])}else if(X.isInstancedMesh)Me.renderInstances(Lt,$e,X.count);else if(J.isInstancedBufferGeometry){let yn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Tt=Math.min(J.instanceCount,yn);Me.renderInstances(Lt,$e,Tt)}else Me.render(Lt,$e)};function se(w,U,J,H){I!==null&&w.isNodeMaterial&&I.setObject(H,w),Ht===!0&&lt.setState(w,J,!1),w.transparent===!0&&w.side===di&&w.forceSinglePass===!1?(w.side=xn,w.needsUpdate=!0,ke(w,U,H),w.side=Jr,w.needsUpdate=!0,ke(w,U,H),w.side=di):ke(w,U,H)}this.compile=function(w,U,J=null){J===null&&(J=w),I!==null&&I.renderStart(w,U,J),b=ft.get(J),b.init(U),v.push(b),J.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),w!==J&&w.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),Qt=this.localClippingEnabled,Ht=lt.init(this.clippingPlanes,Qt),Ht===!0&&lt.setGlobalState(this.clippingPlanes,U),I!==null&&Ft.render(b.state.shadowsArray,J,U);let H=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _t=X.material;if(_t)if(Array.isArray(_t))for(let Et=0;Et<_t.length;Et++){let Mt=_t[Et];se(Mt,J,U,X),H.add(Mt)}else se(_t,J,U,X),H.add(_t)}),b=v.pop(),I!==null&&I.renderEnd(),H},this.compileAsync=function(w,U,J=null){let H=this.compile(w,U,J);return new Promise(X=>{function _t(){if(H.forEach(function(Et){let It=W.get(Et).currentProgram;(It===void 0||It.isReady())&&H.delete(Et)}),H.size===0){X(w);return}setTimeout(_t,10)}qt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ce=null;function on(w){Ce&&Ce(w)}function Re(){he.stop()}function Se(){he.start()}let he=new P0;he.setAnimationLoop(on),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(w){Ce=w,rt.setAnimationLoop(w),w===null?he.stop():he.start()},rt.addEventListener("sessionstart",Re),rt.addEventListener("sessionend",Se),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(w,U);let J=rt.enabled===!0&&rt.isPresenting===!0,H=T!==null&&(K===null||J)&&T.begin(C,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,U,K),b=ft.get(w,v.length),b.init(U),b.state.textureUnits=$.getTextureUnits(),v.push(b),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Rt.setFromProjectionMatrix(V,Li,U.reversedDepth),Qt=this.localClippingEnabled,Ht=lt.init(this.clippingPlanes,Qt),M=mt.get(w,E.length),M.init(),E.push(M),rt.enabled===!0&&rt.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&Ln(Et,U,-1/0,C.sortObjects)}Ln(w,U,0,C.sortObjects),M.finish(),I!==null&&I.updateLights(b.state.lightsArray),C.sortObjects===!0&&M.sort(ut,Ut),Zt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Zt&&Vt.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ht===!0&&lt.beginShadows();let X=b.state.shadowsArray;if(Ft.render(X,w,U),Ht===!0&&lt.endShadows(),(H&&T.hasRenderPass())===!1){let Et=M.opaque,Mt=M.transmissive;if(b.setupLights(),U.isArrayCamera){let It=U.cameras;if(Mt.length>0)for(let Ot=0,te=It.length;Ot<te;Ot++){let le=It[Ot];vn(Et,Mt,w,le)}Zt&&Vt.render(w);for(let Ot=0,te=It.length;Ot<te;Ot++){let le=It[Ot];Te(M,w,le,le.viewport)}}else Mt.length>0&&vn(Et,Mt,w,U),Zt&&Vt.render(w),Te(M,w,U)}K!==null&&k===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),H&&T.end(C),w.isScene===!0&&w.onAfterRender(C,w,U),xt.resetDefaultState(),Z=-1,R=null,v.pop(),v.length>0?(b=v[v.length-1],$.setTextureUnits(b.state.textureUnits),Ht===!0&&lt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,I!==null&&I.renderEnd()};function Ln(w,U,J,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Rt)){H&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);let Et=nt.update(w),Mt=w.material;Mt.visible&&M.push(w,Et,Mt,J,ve.z,null,U)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Rt))){let Et=nt.update(w),Mt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ve.copy(Et.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(V)),Array.isArray(Mt)){let It=Et.groups;for(let Ot=0,te=It.length;Ot<te;Ot++){let le=It[Ot],Lt=Mt[le.materialIndex];Lt&&Lt.visible&&M.push(w,Et,Lt,J,ve.z,le,U)}}else Mt.visible&&M.push(w,Et,Mt,J,ve.z,null,U)}}let _t=w.children;for(let Et=0,Mt=_t.length;Et<Mt;Et++)Ln(_t[Et],U,J,H)}function Te(w,U,J,H){let{opaque:X,transmissive:_t,transparent:Et}=w;b.setupLightsView(J),Ht===!0&&lt.setGlobalState(C.clippingPlanes,J),H&&y.viewport(Q.copy(H)),X.length>0&&Dn(X,U,J),_t.length>0&&Dn(_t,U,J),Et.length>0&&Dn(Et,U,J),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function vn(w,U,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let Lt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new $n(1,1,{generateMipmaps:!0,type:Lt?Ui:Kn,minFilter:Kr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let _t=b.state.transmissionRenderTarget[H.id],Et=H.viewport||Q;_t.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let Mt=C.getRenderTarget(),It=C.getActiveCubeFace(),Ot=C.getActiveMipmapLevel();C.setRenderTarget(_t),C.getClearColor(Gt),zt=C.getClearAlpha(),zt<1&&C.setClearColor(16777215,.5),C.clear(),Zt&&Vt.render(J);let te=C.toneMapping;C.toneMapping=Di;let le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),Ht===!0&&lt.setGlobalState(C.clippingPlanes,H),Dn(w,J,H),$.updateMultisampleRenderTarget(_t),$.updateRenderTargetMipmap(_t),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let pe=0,$e=U.length;pe<$e;pe++){let Pe=U[pe],{object:Me,geometry:yn,material:Tt,group:Nn}=Pe;if(Tt.side===di&&Me.layers.test(H.layers)){let fe=Tt.side;Tt.side=xn,Tt.needsUpdate=!0,Je(Me,J,H,yn,Tt,Nn),Tt.side=fe,Tt.needsUpdate=!0,Lt=!0}}Lt===!0&&($.updateMultisampleRenderTarget(_t),$.updateRenderTargetMipmap(_t))}C.setRenderTarget(Mt,It,Ot),C.setClearColor(Gt,zt),le!==void 0&&(H.viewport=le),C.toneMapping=te}function Dn(w,U,J){let H=U.isScene===!0?U.overrideMaterial:null;for(let X=0,_t=w.length;X<_t;X++){let Et=w[X],{object:Mt,geometry:It,group:Ot}=Et,te=Et.material;te.allowOverride===!0&&H!==null&&(te=H),Mt.layers.test(J.layers)&&Je(Mt,U,J,It,te,Ot)}}function Je(w,U,J,H,X,_t){I!==null&&X.isNodeMaterial&&I.setObject(w,X),w.onBeforeRender(C,U,J,H,X,_t),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(C,U,J,H,w,_t),X.transparent===!0&&X.side===di&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,C.renderBufferDirect(J,U,H,X,w,_t),X.side=Jr,X.needsUpdate=!0,C.renderBufferDirect(J,U,H,X,w,_t),X.side=di):C.renderBufferDirect(J,U,H,X,w,_t),w.onAfterRender(C,U,J,H,X,_t)}function ke(w,U,J){U.isScene!==!0&&(U=Fe);let H=W.get(w),X=b.state.lights,_t=b.state.shadowsArray,Et=X.state.version,Mt=pt.getParameters(w,X.state,_t,U,J,b.state.lightProbeGridArray),It=pt.getProgramCacheKey(Mt),Ot=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=ct.get(w.envMap||H.environment,te),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",Pt),Ot=new Map,H.programs=Ot);let le=Ot.get(It);if(le!==void 0){if(H.currentProgram===le&&H.lightsStateVersion===Et)return Fi(w,Mt),le}else Mt.uniforms=pt.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,J,Mt),w.onBeforeCompile(Mt,C),le=pt.acquireProgram(Mt,It),Ot.set(It,le),H.uniforms=Mt.uniforms;let Lt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Fi(w,Mt),H.needsLights=pi(w),H.lightsStateVersion=Et,H.needsLights&&(Lt.ambientLightColor.value=X.state.ambient,Lt.lightProbe.value=X.state.probe,Lt.sunLights.value=X.state.sun,Lt.sunLightShadows.value=X.state.sunShadow,Lt.directionalLights.value=X.state.directional,Lt.directionalLightShadows.value=X.state.directionalShadow,Lt.spotLights.value=X.state.spot,Lt.spotLightShadows.value=X.state.spotShadow,Lt.rectAreaLights.value=X.state.rectArea,Lt.ltc_1.value=X.state.rectAreaLTC1,Lt.ltc_2.value=X.state.rectAreaLTC2,Lt.pointLights.value=X.state.point,Lt.pointLightShadows.value=X.state.pointShadow,Lt.hemisphereLights.value=X.state.hemi,Lt.sunShadowMatrix.value=X.state.sunShadowMatrix,Lt.sunShadowCascade.value=X.state.sunShadowCascade,Lt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Lt.spotLightMatrix.value=X.state.spotLightMatrix,Lt.spotLightMap.value=X.state.spotLightMap,Lt.pointShadowMatrix.value=X.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=le,H.uniformsList=null,le}function tn(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Ho.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Fi(w,U){let J=W.get(w);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function Fs(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let J=0,H=w.length;J<H;J++){let X=w[J];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function an(w,U,J,H,X){U.isScene!==!0&&(U=Fe),$.resetTextureUnits();let _t=U.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,Mt=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ce.workingColorSpace,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ot=ct.get(H.envMap||Et,It),te=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,le=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!J.morphAttributes.position,pe=!!J.morphAttributes.normal,$e=!!J.morphAttributes.color,Pe=Di;H.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Pe=C.toneMapping);let Me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yn=Me!==void 0?Me.length:0,Tt=W.get(H),Nn=b.state.lights;if(Ht===!0&&(Qt===!0||w!==R)){let Ee=w===R&&H.id===Z;lt.setState(H,w,Ee)}let fe=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Nn.state.version||Tt.outputColorSpace!==Mt||X.isBatchedMesh&&Tt.batching===!1||!X.isBatchedMesh&&Tt.batching===!0||X.isBatchedMesh&&Tt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Tt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Tt.instancing===!1||!X.isInstancedMesh&&Tt.instancing===!0||X.isSkinnedMesh&&Tt.skinning===!1||!X.isSkinnedMesh&&Tt.skinning===!0||X.isInstancedMesh&&Tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Tt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Tt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Tt.instancingMorph===!1&&X.morphTexture!==null||Tt.envMap!==Ot||H.fog===!0&&Tt.fog!==_t||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==lt.numPlanes||Tt.numIntersection!==lt.numIntersection)||Tt.vertexAlphas!==te||Tt.vertexTangents!==le||Tt.morphTargets!==Lt||Tt.morphNormals!==pe||Tt.morphColors!==$e||Tt.toneMapping!==Pe||Tt.morphTargetsCount!==yn||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Tt.__version=H.version);let mi=Tt.currentProgram;fe===!0&&(mi=ke(H,U,X),I&&H.isNodeMaterial&&I.onUpdateProgram(H,mi,Tt));let Oi=!1,vr=!1,Bs=!1,ye=mi.getUniforms(),qe=Tt.uniforms;if(y.useProgram(mi.program)&&(Oi=!0,vr=!0,Bs=!0),H.id!==Z&&(Z=H.id,vr=!0),Tt.needsLights){let Ee=Fs(b.state.lightProbeGridArray,X);Tt.lightProbeGrid!==Ee&&(Tt.lightProbeGrid=Ee,vr=!0)}if(Oi||R!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ye.setValue(F,"projectionMatrix",w.projectionMatrix),ye.setValue(F,"viewMatrix",w.matrixWorldInverse);let Sr=ye.map.cameraPosition;Sr!==void 0&&Sr.setValue(F,re.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&ye.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ye.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,vr=!0,Bs=!0)}if(Tt.needsLights&&(Nn.state.sunShadowMap.length>0&&ye.setValue(F,"sunShadowMap",Nn.state.sunShadowMap,$),Nn.state.directionalShadowMap.length>0&&ye.setValue(F,"directionalShadowMap",Nn.state.directionalShadowMap,$),Nn.state.spotShadowMap.length>0&&ye.setValue(F,"spotShadowMap",Nn.state.spotShadowMap,$),Nn.state.pointShadowMap.length>0&&ye.setValue(F,"pointShadowMap",Nn.state.pointShadowMap,$)),X.isSkinnedMesh){ye.setOptional(F,X,"bindMatrix"),ye.setOptional(F,X,"bindMatrixInverse");let Ee=X.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ye.setValue(F,"boneTexture",Ee.boneTexture,$))}X.isBatchedMesh&&(ye.setOptional(F,X,"batchingTexture"),ye.setValue(F,"batchingTexture",X._matricesTexture,$),ye.setOptional(F,X,"batchingIdTexture"),ye.setValue(F,"batchingIdTexture",X._indirectTexture,$),ye.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ye.setValue(F,"batchingColorTexture",X._colorsTexture,$));let yr=J.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0)&&N.update(X,J,mi),(vr||Tt.receiveShadow!==X.receiveShadow)&&(Tt.receiveShadow=X.receiveShadow,ye.setValue(F,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(qe.envMapIntensity.value=U.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=Q1()),vr){if(ye.setValue(F,"toneMappingExposure",C.toneMappingExposure),Tt.needsLights&&Xe(qe,Bs),_t&&H.fog===!0&&Ct.refreshFogUniforms(qe,_t),Ct.refreshMaterialUniforms(qe,H,j,q,b.state.transmissionRenderTarget[w.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ee=Tt.lightProbeGrid;qe.probesSH.value=Ee.texture,qe.probesMin.value.copy(Ee.boundingBox.min),qe.probesMax.value.copy(Ee.boundingBox.max),qe.probesResolution.value.copy(Ee.resolution)}Ho.upload(F,tn(Tt),qe,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ho.upload(F,tn(Tt),qe,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ye.setValue(F,"center",X.center),ye.setValue(F,"modelViewMatrix",X.modelViewMatrix),ye.setValue(F,"normalMatrix",X.normalMatrix),ye.setValue(F,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){let Ee=H.uniformsGroups;for(let Sr=0,zs=Ee.length;Sr<zs;Sr++){let Jd=Ee[Sr];it.update(Jd,mi),it.bind(Jd,mi)}}return mi}function Xe(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function pi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,U,J){let H=W.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=U,W.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let J=W.get(w);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,J=0){K=w,G=U,k=J;let H=null,X=!1,_t=!1;if(w){let Mt=W.get(w);if(Mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,Mt.__webglFramebuffer),Q.copy(w.viewport),yt.copy(w.scissor),bt=w.scissorTest,y.viewport(Q),y.scissor(yt),y.setScissorTest(bt),Z=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(Mt.__hasExternalTextures)$.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let te=w.depthTexture;if(Mt.__boundDepthTexture!==te){if(te!==null&&W.has(te)&&(w.width!==te.image.width||w.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}let It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(_t=!0);let Ot=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?H=Ot[U][J]:H=Ot[U],X=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?H=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Ot)?H=Ot[J]:H=Ot,Q.copy(w.viewport),yt.copy(w.scissor),bt=w.scissorTest}else Q.copy(dt).multiplyScalar(j).floor(),yt.copy(Dt).multiplyScalar(j).floor(),bt=wt;if(J!==0&&(H=O),y.bindFramebuffer(F.FRAMEBUFFER,H)&&y.drawBuffers(w,H),y.viewport(Q),y.scissor(yt),y.setScissorTest(bt),X){let Mt=W.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,J)}else if(_t){let Mt=U;for(let It=0;It<w.textures.length;It++){let Ot=W.get(w.textures[It]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+It,Ot.__webglTexture,J,Mt)}}else if(w!==null&&J!==0){let Mt=W.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,J)}Z=-1};function Os(w){let U=W.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=P.textureFormatReadable(w.format),U.__typeReadable=P.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,J,H,X,_t,Et,Mt=0){if(!(w&&w.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It){y.bindFramebuffer(F.FRAMEBUFFER,It);try{let Ot=w.textures[Mt],te=Ot.format,le=Ot.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let Lt=Os(Ot);if(Lt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&J>=0&&J<=w.height-X&&F.readPixels(U,J,H,X,gt.convert(te),gt.convert(le),_t)}finally{let Ot=K!==null?W.get(K).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(w,U,J,H,X,_t,Et,Mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It)if(U>=0&&U<=w.width-H&&J>=0&&J<=w.height-X){y.bindFramebuffer(F.FRAMEBUFFER,It);let Ot=w.textures[Mt],te=Ot.format,le=Ot.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);let Lt=Os(Ot);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),F.readPixels(U,J,H,X,gt.convert(te),gt.convert(le),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let $e=K!==null?W.get(K).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,$e);let Pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await i0(F,Pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pe),F.deleteSync(Pe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,J=0){let H=Math.pow(2,-J),X=Math.floor(w.image.width*H),_t=Math.floor(w.image.height*H),Et=U!==null?U.x:0,Mt=U!==null?U.y:0;$.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,Et,Mt,X,_t),y.unbindTexture()},this.copyTextureToTexture=function(w,U,J=null,H=null,X=0,_t=0){let Et,Mt,It,Ot,te,le,Lt,pe,$e,Pe=w.isCompressedTexture?w.mipmaps[_t]:w.image;if(J!==null)Et=J.max.x-J.min.x,Mt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Ot=J.min.x,te=J.min.y,le=J.isBox3?J.min.z:0;else{let qe=Math.pow(2,-X);Et=Math.floor(Pe.width*qe),Mt=Math.floor(Pe.height*qe),w.isDataArrayTexture?It=Pe.depth:w.isData3DTexture?It=Math.floor(Pe.depth*qe):It=1,Ot=0,te=0,le=0}H!==null?(Lt=H.x,pe=H.y,$e=H.z):(Lt=0,pe=0,$e=0);let Me=gt.convert(U.format),yn=gt.convert(U.type),Tt;U.isData3DTexture?($.setTexture3D(U,0),Tt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Tt=F.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Tt=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Nn=y.getParameter(F.UNPACK_ROW_LENGTH),fe=y.getParameter(F.UNPACK_IMAGE_HEIGHT),mi=y.getParameter(F.UNPACK_SKIP_PIXELS),Oi=y.getParameter(F.UNPACK_SKIP_ROWS),vr=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Ot),y.pixelStorei(F.UNPACK_SKIP_ROWS,te),y.pixelStorei(F.UNPACK_SKIP_IMAGES,le);let Bs=w.isDataArrayTexture||w.isData3DTexture,ye=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let qe=W.get(w),yr=W.get(U),Ee=W.get(qe.__renderTarget),Sr=W.get(yr.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Ee.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let zs=0;zs<It;zs++)Bs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(w).__webglTexture,X,le+zs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(U).__webglTexture,_t,$e+zs)),F.blitFramebuffer(Ot,te,Et,Mt,Lt,pe,Et,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||W.has(w)){let qe=W.get(w),yr=W.get(U);y.bindFramebuffer(F.READ_FRAMEBUFFER,L),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Ee=0;Ee<It;Ee++)Bs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,X,le+Ee):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,X),ye?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yr.__webglTexture,_t,$e+Ee):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yr.__webglTexture,_t),X!==0?F.blitFramebuffer(Ot,te,Et,Mt,Lt,pe,Et,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):ye?F.copyTexSubImage3D(Tt,_t,Lt,pe,$e+Ee,Ot,te,Et,Mt):F.copyTexSubImage2D(Tt,_t,Lt,pe,Ot,te,Et,Mt);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ye?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Tt,_t,Lt,pe,$e,Et,Mt,It,Me,yn,Pe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,_t,Lt,pe,$e,Et,Mt,It,Me,Pe.data):F.texSubImage3D(Tt,_t,Lt,pe,$e,Et,Mt,It,Me,yn,Pe):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,Lt,pe,Et,Mt,Me,yn,Pe.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,Lt,pe,Pe.width,Pe.height,Me,Pe.data):F.texSubImage2D(F.TEXTURE_2D,_t,Lt,pe,Et,Mt,Me,yn,Pe);y.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),y.pixelStorei(F.UNPACK_SKIP_PIXELS,mi),y.pixelStorei(F.UNPACK_SKIP_ROWS,Oi),y.pixelStorei(F.UNPACK_SKIP_IMAGES,vr),_t===0&&U.generateMipmaps&&F.generateMipmap(Tt),y.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){G=0,k=0,K=null,y.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var tu=class extends As{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Hr;t.deleteAttribute("uv");let e=new ui({side:xn}),n=new ui,i=new tl(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new _e(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new _r(t,n,6),a=new We;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new _e(t,qo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new _e(t,qo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new _e(t,qo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new _e(t,qo(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new _e(t,qo(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new _e(t,qo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function qo(r){return new Ja({color:0,emissive:16777215,emissiveIntensity:r})}var ml=[[0,{y:-4.8,x:0,rx:.25,ry:-.6,rz:.1}],[.05,{y:-4.8,x:0,rx:.25,ry:-.6,rz:.1}],[.17,{y:0,x:0,rx:-.15,ry:-.35,rz:.04}],[.24,{y:.1,x:0,rx:3,ry:.2,rz:-.05}],[.31,{y:-.25,x:0,rx:6.23,ry:.02,rz:0}],[.38,{y:-.3,x:-2.1,rx:6.3,ry:-.25,rz:.03}],[.5,{y:-.3,x:-2.1,rx:6.3,ry:.35,rz:.02}],[.58,{y:-.3,x:0,rx:6.73,ry:0,rz:0}],[.7,{y:-.3,x:0,rx:6.48,ry:-.4,rz:.02}],[.78,{y:-.8,x:0,rx:6.58,ry:-.2,rz:-1.57}],[.88,{y:-.95,x:0,rx:6.6,ry:.15,rz:-1.62}],[1,{y:-5.6,x:0,rx:6.7,ry:.4,rz:-1.8}]],gl=r=>r*r*(3-2*r),eu=(r,t,e)=>ts.clamp((r-t)/(e-t),0,1);function O0(r){for(let t=1;t<ml.length;t++){let[e,n]=ml[t],[i,s]=ml[t-1];if(r<=e){let o=gl(ts.clamp((r-i)/(e-i||1),0,1)),a={};for(let l in s)a[l]=s[l]+(n[l]-s[l])*o;return a}}return{...ml[ml.length-1][1]}}function j1(r){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function tw(){let e=document.createElement("canvas");e.width=2560,e.height=1e3;let n=e.getContext("2d");n.fillStyle="#fbfbf8",n.fillRect(0,0,2560,1e3);let i="#2c5a49",s="#1d1f1c",o=840,a=(f,u)=>`${f} ${u}px Arial, Helvetica, "Liberation Sans", sans-serif`,l=(f,u,d,g,_=s)=>{n.font=a(d,g),n.fillStyle=_,n.fillText(f,o,u)};l("RESTORIA",190,700,150,i),n.font=a(700,150);let c=n.measureText("RESTORIA").width;n.font=a(700,62),n.fillText("\u2122",o+c+10,120),l("Calm \u2022 Restore \u2022 Sleep",292,700,66),n.font=a(700,66),n.fillRect(o,304,n.measureText("Calm \u2022 Restore \u2022 Sleep").width,5),n.fillStyle=i,n.fillRect(o-20,324,2560-o-300,7),l("Natural Stress, Anxiety & Night Support",398,700,50),l("Hibiscus + Peperomia Pellucida",462,400,50),l("Melatonin-Free",526,400,50),l("NON-GMO | GLUTEN-FREE | SOY-FREE",590,400,50),l("30 Capsules",654,400,50),l("350 mg per capsule",718,400,50),l("Dietary Supplement",782,400,50),n.fillStyle=i,n.fillRect(o-20,808,2560-o-300,5),l("Supplement Facts",868,700,48),l("Serving Size: 1 Capsule",922,400,38),l("Servings Per Container: 30",964,400,38);let h=new Ya(e);return h.colorSpace=Pn,h.anisotropy=8,h}function ew(r){let t=new bi,e=new ui({vertexColors:!0,roughness:.55,side:di}),n=new Xt(7211798),i=new Xt(14169391),s=new Xt(15489605);for(let h=0;h<5;h++){let f=new Xr(1,1,14,20),u=f.attributes.position,d=[];for(let p=0;p<u.count;p++){let m=u.getX(p),S=u.getY(p)+.5,A=.62*Math.pow(Math.sin(Math.PI*Math.min(1,S*1.04)),.6)*(.5+.5*S),x=m*A*2,M=.22*S*S+.045*Math.sin(m*Math.PI*7+h)*Math.pow(S,3);u.setXYZ(p,x,S*.92,M);let b=S<.3?n.clone().lerp(i,S/.3):i.clone().lerp(s,(S-.3)/.7);d.push(b.r,b.g,b.b)}f.setAttribute("color",new Ne(d,3)),f.computeVertexNormals();let g=new _e(f,e),_=new bi;_.rotation.z=h/5*Math.PI*2+r()*.15,g.rotation.x=-.32,_.add(g),t.add(_)}let o=new _e(new Wr(.022,.034,.78,10),new ui({color:15839914,roughness:.5}));o.rotation.x=Math.PI/2,o.position.z=.39,t.add(o);let a=new _r(new Lo(1,8,6),new ui({color:15251761,roughness:.6}),18),l=new We;for(let h=0;h<18;h++){let f=r()*Math.PI*2;l.position.set(Math.cos(f)*.06,Math.sin(f)*.06,.55+r()*.2),l.scale.setScalar(.022+r()*.01),l.updateMatrix(),a.setMatrixAt(h,l.matrix)}t.add(a);let c=new _r(new Lo(1,8,6),new ui({color:10361637,roughness:.5}),5);for(let h=0;h<5;h++){let f=h/5*Math.PI*2;l.position.set(Math.cos(f)*.045,Math.sin(f)*.045,.8),l.scale.setScalar(.03),l.updateMatrix(),c.setMatrixAt(h,l.matrix)}return t.add(c),t}function nw(r,t){let e=new Xr(1,1,10,14),n=e.attributes.position,i=[],s=new Xt(7320138),o=new Xt(11130749);for(let h=0;h<n.count;h++){let f=n.getX(h),u=n.getY(h)+.5,d=.5*Math.pow(Math.sin(Math.PI*(.16+.84*u)),.85)*(1.2-.55*u),g=f*d*2;n.setXYZ(h,g,u*.82-.2,.09*Math.abs(g)-.05*u*u);let _=s.clone().lerp(o,Math.min(1,Math.abs(f)*2));i.push(_.r,_.g,_.b)}e.setAttribute("color",new Ne(i,3)),e.computeVertexNormals();let a=new Cs({vertexColors:!0,roughness:.3,clearcoat:.6,clearcoatRoughness:.25,side:di}),l=new _r(e,a,t);l.frustumCulled=!1;let c=[];for(let h=0;h<t;h++)c.push({a:h/t*Math.PI*2+r()*.4,r:1.15+r()*.55,y:(r()-.5)*1.8,s:.32+r()*.22,spin:(r()-.5)*2,tilt:r()*Math.PI,delay:r()*.35});return{mesh:l,data:c}}function B0(r,{lowPower:t=!1,reduced:e=!1}={}){let n=new Kh({canvas:r,antialias:!t,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,t?1.25:1.75)),n.outputColorSpace=Pn,n.toneMapping=nl,n.toneMappingExposure=1,n.setClearColor(0,0);let i=new As,s=new Wo(n);i.environment=s.fromScene(new tu,.04).texture,i.environmentIntensity=.7;let o=new gn(26,1,.1,100);o.position.set(0,.15,10);let a=new Uo(16775406,2.1);a.position.set(-3.5,4,5);let l=new Uo(15332829,1.6);l.position.set(4,1.5,-4),i.add(a,l,new Ka(15922668,3100459,.55));let c=j1(11),h=new bi,f=new bi;h.add(f),i.add(h);let u=new Cs({color:16053231,roughness:.42,clearcoat:.25,clearcoatRoughness:.5,sheen:.2,sheenColor:new Xt(16777215)}),d=[[0,-.98],[.46,-.98],[.56,-.965],[.605,-.93],[.62,-.87],[.62,.7],[.612,.755],[.585,.795],[.545,.825],[.535,.93],[0,.93]].map(([St,q])=>new $t(St,q));f.add(new _e(new Io(d,96),u));let g=Math.PI*2*.88,_=new _e(new Wr(.624,.624,1.36,160,1,!0,-g/2,g),new ui({map:tw(),roughness:.55}));_.position.y=-.06,f.add(_);let p=new Cs({color:16250610,roughness:.5,clearcoat:.15}),m=new _e(new Wr(.585,.585,.13,96,1,!0),p);m.position.y=.99,f.add(m);let S=new Wr(.6,.6,.36,192,1,!0),A=S.attributes.position;for(let St=0;St<A.count;St++){let q=A.getX(St),j=A.getZ(St),ut=Math.atan2(j,q),Ut=.6+(Math.sin(ut*48)>0?.012:0);A.setX(St,Math.cos(ut)*Ut),A.setZ(St,Math.sin(ut)*Ut)}S.computeVertexNormals();let x=new _e(S,p);x.position.y=1.235,f.add(x);let M=new _e(new Io([[0,0],[.56,0],[.6,-.035]].map(([St,q])=>new $t(St,q)),96),p);M.position.y=1.415,f.add(M),f.children.forEach(St=>{St.position.y-=.2});let b=ew(c);b.scale.setScalar(0),h.add(b);let{mesh:E,data:v}=nw(c,t?8:14);h.add(E);let T=0,C=O0(0),D={...C},I=1,O=new We,L=new We;L.scale.setScalar(0),L.updateMatrix();let B=new Y,G={y:0,near:0,sx:0},k=1,K=1;function Z(){k=r.clientWidth,K=r.clientHeight,n.setSize(k,K,!1),o.aspect=k/K,o.updateProjectionMatrix();let St=o.aspect<.8;I=ts.clamp((o.aspect-.8)/.75,0,1),h.scale.setScalar(St?Math.max(.6,o.aspect*1.3):1),h.position.y=St?-.5:-.05}function R(St,q){let j=e?1:1-Math.exp(-St*4.5);for(let wt in C)D[wt]+=(C[wt]-D[wt])*j;let ut=e?0:Math.sin(q*.8)*.035;f.position.set(D.x*I,D.y+ut,0),f.rotation.set(D.rx,D.ry,D.rz);let Ut=gl(eu(T,.35,.42))*(1-gl(eu(T,.52,.59)));b.scale.setScalar(Ut*(.6+.4*I)),b.position.set(.6+1.5*I,-.55+.35*I+(1-Ut)*-.8,.9),b.rotation.set(-.25+Math.sin(q*.5)*.08,-.95+Math.sin(q*.3)*.25,.15);let dt=eu(T,.55,.63),Dt=eu(T,.7,.78);v.forEach((wt,Rt)=>{let Ht=ts.clamp((dt-wt.delay)/(1-wt.delay),0,1);if(Ht<=0||Dt>=1){E.setMatrixAt(Rt,L.matrix);return}let Qt=wt.a+q*.12+Dt*2,V=wt.r*(I?1:.8)+(1-gl(Ht))*2.5+Dt*3;O.position.set(Math.cos(Qt)*V,wt.y+Math.sin(q*.7+Rt)*.08-Dt*1.5,Math.sin(Qt)*V*.6),O.rotation.set(wt.tilt+q*wt.spin*.3,Qt,wt.tilt*.5),O.scale.setScalar(wt.s*gl(Ht)*(1-Dt)),O.updateMatrix(),E.setMatrixAt(Rt,O.matrix)}),E.instanceMatrix.needsUpdate=!0,B.set(f.position.x,0,0).applyMatrix4(h.matrixWorld).project(o),G.y=D.y,G.near=ts.clamp(1-Math.abs(D.y)/3,0,1),G.sx=B.x*k/2}let Q=performance.now(),yt=!1,bt=0,Gt=new Set;function zt(St){let q=Math.min((St-Q)/1e3,.05);Q=St,h.updateMatrixWorld(),R(q,St/1e3),n.render(i,o),Gt.forEach(j=>j(G)),bt=yt?requestAnimationFrame(zt):0}return Z(),R(1,0),n.compile(i,o),n.render(i,o),{setProgress(St){T=ts.clamp(St,0,1),C=O0(T)},onFrame(St){Gt.add(St)},resize:Z,start(){yt||(yt=!0,Q=performance.now(),bt=requestAnimationFrame(zt))},stop(){yt=!1,cancelAnimationFrame(bt)}}}var iw=(r,t=1.6)=>1+(t+1)*Math.pow(r-1,3)+t*Math.pow(r-1,2),z0=r=>Math.min(1,Math.max(0,r));function k0(r,{blur:t=!0}={}){let e=r.textContent.trim();r.textContent="";let n=[];for(let o=0;o<=4;o++){let a=document.createElement("span");a.className="ghost__layer",a.textContent=e,o>0&&a.setAttribute("aria-hidden","true"),r.appendChild(a),n.push(a)}let i=!1;function s(){r.style.fontSize="";let o=n[0],a=r.style.visibility;r.style.visibility="hidden",r.classList.add("is-live");let l=parseFloat(getComputedStyle(r).fontSize);for(let c=0;c<20&&o.scrollWidth>o.clientWidth+1;c++)l*=.95,r.style.fontSize=`${l}px`;r.classList.remove("is-live"),r.style.visibility=a}return s(),document.fonts?.ready.then(s),addEventListener("resize",s),function(a,l){let c=z0(a),h=z0(l),f=c>0&&h<1;if(r.classList.toggle("is-live",f),!f)return i=!1,!1;let d=(1-iw(c))*.55-h*.7;n[0].style.transform=`translate3d(0, ${d}em, 0)`,n[0].style.opacity=String(Math.min(1,c*1.8)*(1-h));let g=4*c*(1-c),_=4*h*(1-h);for(let m=1;m<=4;m++){let S=(1-c)*m*.3+h*m*.24,A=Math.max(g,_)*(.42-m*.075),x=n[m].style;x.transform=`translate3d(0, ${d+S}em, 0)`,x.opacity=A.toFixed(3),t&&(x.filter=A>.01?`blur(${(m*1.1).toFixed(1)}px)`:"none")}let p=c>=1&&!i;return c>=1&&(i=!0),c<.9&&(i=!1),p}}var V0=[["#8e1520","#d8352f"],["#a01d26","#e2473a"],["#7a0f1a","#c92a2c"],["#b4262e","#ef6a55"]];function G0(r,{count:t=32,reduced:e=!1}={}){let n=r.getContext("2d"),i=0,s=0,o=0,a=!1,l=0,c=0,h=[];function f(p,m){p.x=m?Math.random()*i:-40-Math.random()*120,p.y=m?Math.random()*s:Math.random()*s*.7,p.size=10+Math.random()*16,p.rot=Math.random()*Math.PI*2,p.spin=(Math.random()-.5)*.8,p.flip=Math.random()*Math.PI*2,p.vx=10+Math.random()*16,p.vy=6+Math.random()*10,p.c=V0[Math.floor(Math.random()*V0.length)],p.a=.75+Math.random()*.25,p.px=0}function u(){let p=Math.min(window.devicePixelRatio,2);if(i=r.clientWidth,s=r.clientHeight,r.width=Math.round(i*p),r.height=Math.round(s*p),n.setTransform(p,0,0,p,0,0),!h.length)for(let m=0;m<t;m++){let S={};f(S,!0),h.push(S)}}function d(p,m){let S=p.size;n.save(),n.translate(p.x+p.px,p.y),n.rotate(p.rot),n.scale(.35+.65*Math.abs(Math.cos(p.flip)),1);let A=n.createLinearGradient(0,S*.6,0,-S*.6);A.addColorStop(0,p.c[0]),A.addColorStop(1,p.c[1]),n.fillStyle=A,n.globalAlpha=m,n.beginPath(),n.moveTo(0,S*.6),n.bezierCurveTo(-S*.75,S*.1,-S*.55,-S*.7,0,-S*.55),n.bezierCurveTo(S*.55,-S*.7,S*.75,S*.1,0,S*.6),n.fill(),n.restore()}function g(p){let m=Math.min((p-c)/1e3,.05);c=p;let S=Math.min(1,Math.max(0,(o-.02)/.12)),A=1-Math.min(1,Math.max(0,(o-.12)/.08));if(n.clearRect(0,0,i,s),!(A<=.001))for(let x of h){x.flip+=m*1.1,x.rot+=x.spin*m,x.x+=x.vx*m,x.y+=(x.vy+Math.sin(x.flip)*8)*m;let M=x.x<i/2?-1:1,b=1-Math.min(1,Math.abs(x.x-i/2)/(i*.5));x.px+=(M*S*(120+b*i*.35)-x.px)*Math.min(1,m*3),(x.y>s+40||x.x>i+60)&&f(x,!1),d(x,x.a*A)}}function _(p){g(p),l=a?requestAnimationFrame(_):0}return u(),{resize:u,setProgress(p){o=p,e&&(c=performance.now(),g(c))},start(){if(!a){if(e){g(performance.now());return}a=!0,c=performance.now(),l=requestAnimationFrame(_)}},stop(){a=!1,cancelAnimationFrame(l)}}}var nu=[440,523.25,587.33,659.25,783.99,880];function H0(){let r,t,e,n,i,s=!1;function o(f){let u=Math.floor(r.sampleRate*f),d=r.createBuffer(1,u,r.sampleRate),g=d.getChannelData(0),_=0;for(let p=0;p<u;p++)_=_*.6+(Math.random()*2-1)*.4,g[p]=_;return d}function a(){let f=r.createBiquadFilter();f.type="lowpass",f.frequency.value=720;let u=r.createGain();u.gain.value=0,u.gain.linearRampToValueAtTime(.06,r.currentTime+6),f.connect(u).connect(t),[110,164.81,196,246.94,261.63].forEach((d,g)=>{let _=r.createOscillator();_.type=g<2?"sine":"triangle",_.frequency.value=d;let p=r.createGain();p.gain.value=.18;let m=r.createOscillator(),S=r.createGain();m.frequency.value=.035+g*.011,S.gain.value=.08,m.connect(S).connect(p.gain),_.connect(p).connect(f),_.start(),m.start()})}function l(f,u=r.currentTime,d=.035){let g=r.createGain();g.gain.setValueAtTime(0,u),g.gain.linearRampToValueAtTime(d,u+.02),g.gain.exponentialRampToValueAtTime(1e-4,u+3.2),g.connect(t);for(let[_,p]of[[1,1],[2.76,.12]]){let m=r.createOscillator();m.frequency.value=f*_;let S=r.createGain();S.gain.value=p,m.connect(S).connect(g),m.start(u),m.stop(u+3.3)}}function c(){let f=()=>{s&&(l(nu[Math.floor(Math.random()*nu.length)]),i=setTimeout(f,5500+Math.random()*4500))};i=setTimeout(f,2500)}function h(){let f=r.createBufferSource();f.buffer=o(5),f.loop=!0,n=r.createBiquadFilter(),n.type="bandpass",n.frequency.value=800,n.Q.value=.5,e=r.createGain(),e.gain.value=0,f.connect(n).connect(e).connect(t),f.start()}return{get on(){return s},start(){r||(r=new(window.AudioContext||window.webkitAudioContext),t=r.createGain(),t.gain.value=.9,t.connect(r.destination),a(),h()),r.resume(),s=!0,t.gain.setTargetAtTime(.9,r.currentTime,.6),c()},stop(){r&&(s=!1,clearTimeout(i),t.gain.setTargetAtTime(0,r.currentTime,.3))},air(f){!r||!s||(e.gain.setTargetAtTime(Math.min(f,1)*.12,r.currentTime,.25),n.frequency.setTargetAtTime(600+f*700,r.currentTime,.3))},tap(){if(!r||!s)return;let f=r.currentTime,u=r.createOscillator();u.frequency.setValueAtTime(1400,f),u.frequency.exponentialRampToValueAtTime(380,f+.07);let d=r.createGain();d.gain.setValueAtTime(1e-4,f),d.gain.exponentialRampToValueAtTime(.18,f+.008),d.gain.exponentialRampToValueAtTime(1e-4,f+.12),u.connect(d).connect(t),u.start(f),u.stop(f+.14)},chime(){!r||!s||(l(nu[3],r.currentTime,.05),l(nu[5],r.currentTime+.14,.03))}}}var Ds=r=>`<svg viewBox="0 0 24 24" aria-hidden="true">${r}</svg>`,rw=r=>`<path transform="rotate(${r} 12 12)" d="M12 11.2c-2.2-1.6-3.3-4-2.9-6.3.3-1.6 1.6-2.7 2.9-2.7s2.6 1.1 2.9 2.7c.4 2.3-.7 4.7-2.9 6.3z"/>`,Vd=[Ds(`${[0,72,144,216,288].map(rw).join("")}
    <circle cx="12" cy="12" r="2"/>
    <path class="cut" d="M11.6 12h.8l.6 6.4h-2z"/>
    <path d="M12.4 12.2l4.6 4.4-.7.7-4.4-4.4z"/>
    <circle cx="17.6" cy="17.6" r="1.2"/>`),Ds(`
    <path d="M12 21.2c-4.8-2.6-7.8-6.3-7.8-10.1 0-2.9 1.9-4.9 4.3-4.9 1.4 0 2.6.6 3.5 1.7.9-1.1 2.1-1.7 3.5-1.7 2.4 0 4.3 2 4.3 4.9 0 3.8-3 7.5-7.8 10.1z"/>
    <path class="cut" d="M11.6 8.2h.8v11.4h-.8z"/>
    <path d="M11.4 2.6h1.2v4.2h-1.2z"/>`),Ds(`
    <path transform="rotate(-40 12 12)" d="M8 8h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8z"/>
    <path class="cut" transform="rotate(-40 12 12)" d="M11.6 8h.8v8h-.8z"/>
    <path class="cut" transform="rotate(-40 12 12)" d="M6.6 10.4h3.2v.9H6.6z"/>`),Ds(`
    <path d="M3 11.4h18v1.4c0 3.9-2.8 6.9-6.6 7.6l.6 1.8H9l.6-1.8C5.8 19.7 3 16.7 3 12.8z"/>
    <path d="M14.6 2.4l1.8 1 -3.6 7.6-1.8-1z"/>
    <path class="cut" d="M5.4 13.2h13.2v.9H5.4z"/>`),Ds(`
    <path d="M8.6 2.4h6.8v3.4H8.6z"/>
    <path d="M7.4 7h9.2c1.1 0 2 .9 2 2v10.6c0 1.1-.9 2-2 2H7.4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2z"/>
    <path class="cut" d="M5.4 11.2h13.2v6H5.4z"/>
    <path d="M8 13.4h8v1.6H8z"/>`),Ds(`
    <path d="M4.2 19.8C3.6 11.6 8.8 4.4 19.8 4.2c.2 11-7 16.2-15.6 15.6z"/>
    <path class="cut" d="M5.6 18.9l12.6-13 .6.6-12.6 13z"/>`),Ds(`
    <path d="M12 2.4c3.6 4.6 6.4 8.4 6.4 12 0 3.6-2.9 6.6-6.4 6.6s-6.4-3-6.4-6.6c0-3.6 2.8-7.4 6.4-12z"/>
    <path class="cut" d="M8.6 14.2c.1 1.9 1.3 3.3 3 3.6l-.2 1c-2.2-.4-3.7-2.2-3.8-4.6z"/>`)];var Gd=r=>new Promise(t=>setTimeout(t,r));function Ns(r,t,e){let n=document.createElement(r);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}var W0=r=>[...r].map(t=>`<span>${t}</span>`).join("");async function X0({ready:r,reduced:t,onEnter:e}){let n=Ns("div","opening");n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Welcome to Adewura Natural"),document.body.appendChild(n);let i=document.getElementById("wordmark"),s=Ns("div","opening__mark","Adewura Natural");if(s.setAttribute("aria-hidden","true"),n.appendChild(s),t)await r,s.style.display="none";else{pn.fromTo(s,{opacity:0,y:16,filter:"blur(6px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.9,ease:"power2.out"}),await Gd(1200);let h=s.getBoundingClientRect(),f=i.getBoundingClientRect();await pn.to(s,{x:f.left+f.width/2-(h.left+h.width/2),y:f.top+f.height/2-(h.top+h.height/2),scale:f.height/h.height,duration:.95,ease:"power3.inOut"});let u=Ns("div","loader");u.setAttribute("role","status"),u.setAttribute("aria-label","Loading");let d=Ns("span","loader__part",W0("load")),g=Ns("span","loader__gap"),_=Ns("span","loader__part",W0("ing"));u.append(d,g,_),n.appendChild(u),pn.from([...d.children,..._.children],{opacity:0,y:8,stagger:.04,duration:.6,ease:"power2.out"});let p=!1;Promise.race([r,Gd(7e3)]).then(()=>{p=!0});let m=0;for(;m<3||!p;)g.innerHTML=Vd[m%Vd.length],pn.fromTo(g.firstChild,{scale:.7,opacity:0,rotate:-8},{scale:1,opacity:1,rotate:0,duration:.32,ease:"power2.out"}),m++,await Gd(460);await pn.to(g,{width:0,duration:.45,ease:"power2.inOut",onStart:()=>{g.innerHTML=""}});let S=[...d.children,..._.children];await pn.to(S,{y:-6,duration:.22,ease:"sine.out",stagger:.04,yoyo:!0,repeat:1}),await pn.to(S,{opacity:0,y:-10,filter:"blur(4px)",duration:.4,ease:"power2.in",stagger:.03}),u.remove()}let o=Ns("div","welcome",`
    <div class="welcome__center">
      <p class="welcome__title" aria-hidden="true">Adewura Natural</p>
      <p class="welcome__sub">Medical Centre</p>
      <p class="welcome__lede">Your trusted partner in natural remedies.</p>
      <button class="pill pill--mint pill--arrow welcome__enter" type="button">Enter with sound <span class="pill__dot" aria-hidden="true"></span></button>
    </div>
    <div class="welcome__foot">
      <span>Best with sound on</span>
      <button class="welcome__quiet" type="button">Enter without sound</button>
    </div>`);n.appendChild(o);let a=o.querySelectorAll(".welcome__center > *");t||pn.from(a,{opacity:0,y:18,filter:"blur(6px)",duration:.9,ease:"power2.out",stagger:.1});let l=o.querySelector(".welcome__enter");l.classList.add("no-ring"),l.focus({preventScroll:!0}),o.addEventListener("keydown",()=>l.classList.remove("no-ring"),{once:!0});let c=await new Promise(h=>{l.addEventListener("click",()=>h(!0),{once:!0}),o.querySelector(".welcome__quiet").addEventListener("click",()=>h(!1),{once:!0})});e(c),await pn.to(n,{opacity:0,filter:t?"none":"blur(12px)",duration:t?.25:.9,ease:"power2.out"}),n.remove()}pn.registerPlugin(jt);var Us=matchMedia("(prefers-reduced-motion: reduce)").matches,Yd=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4||innerWidth<760,sw=r=>Math.min(1,Math.max(0,r)),es=(r,t,e)=>sw((r-t)/(e-t)),q0="natural-entered",Y0=matchMedia("(max-width: 760px)").matches;addEventListener("resize",()=>{Y0=matchMedia("(max-width: 760px)").matches});var Yo=new $m({autoRaf:!1,anchors:!0,lerp:Us?1:.075});Yo.on("scroll",jt.update);pn.ticker.add(r=>Yo.raf(r*1e3));pn.ticker.lagSmoothing(0);var Zo=H0(),iu=document.getElementById("sound-toggle");function Xd(r){r?Zo.start():Zo.stop(),iu.setAttribute("aria-pressed",String(r)),iu.setAttribute("aria-label",r?"Sound on":"Sound off")}iu.addEventListener("click",()=>Xd(!Zo.on));document.addEventListener("pointerdown",r=>{r.target.closest(".pill, .sound")&&Zo.tap()});var Z0=document.querySelector(".stage"),ow=document.getElementById("gl"),Hd=document.getElementById("shadow"),Wd=document.getElementById("aside"),aw=document.querySelector(".intro__cue"),qd=document.querySelector(".intro__line");qd.innerHTML=qd.textContent.trim().split(/\s+/).map(r=>`<span class="w">${r}</span>`).join(" ");var lw=[...qd.querySelectorAll(".w")],cw=[...document.querySelectorAll("[data-ghost]")].map(r=>k0(r,{blur:!Yd&&!Us})),hw=[[.15,.21,.31,.35],[.36,.42,.5,.54],[.55,.61,.69,.73],[.74,.8,.88,.93]],ns=null,J0=!0,$0=0,uw=new Promise(r=>{requestAnimationFrame(()=>setTimeout(()=>{try{ns=B0(ow,{lowPower:Yd,reduced:Us}),ns.onFrame(t=>{Hd.style.setProperty("--shadow-s",(.35+.65*t.near).toFixed(3)),Hd.style.setProperty("--shadow-o",t.near.toFixed(3)),Hd.style.setProperty("--shadow-x",`${t.sx.toFixed(1)}px`)}),ns.setProgress($0),J0&&ns.start()}catch(t){document.documentElement.classList.add("no-gl"),console.warn("WebGL unavailable, showing the page without the 3D bottle.",t)}r()},60))}),xl=G0(document.getElementById("petals"),{count:Yd?20:34,reduced:Us});function K0(r){$0=r,ns?.setProgress(r),xl.setProgress(r),lw.forEach((n,i)=>{let s=es(r,.015+i*.012,.085+i*.012);n.style.transform=s?`translate3d(0, ${-s*3.5}rem, 0)`:"",n.style.opacity=String(Math.max(0,1-s*1.4)),Us||(n.style.filter=s?`blur(${(s*8).toFixed(1)}px)`:"")}),aw.style.opacity=String(1-es(r,0,.03)),cw.forEach((n,i)=>{let[s,o,a,l]=hw[i];n(es(r,s,o),es(r,a,l))&&Zo.chime()});let t=Y0?es(r,.79,.83)*(1-es(r,.9,.94)):es(r,.24,.3)*(1-es(r,.86,.92));Wd.style.opacity=String(t),Wd.style.transform=`translateY(${(1-t)*.75}rem)`,Wd.style.pointerEvents=t>.5?"auto":"none";let e=r>.03&&r<.2?1:0;Zo.air(e*Math.min(Math.abs(Yo.velocity)/30,1))}jt.create({trigger:Z0,start:"top top",end:"bottom bottom",onUpdate:r=>K0(r.progress),onToggle:r=>{J0=r.isActive,r.isActive?(ns?.start(),xl.start()):(ns?.stop(),xl.stop())}});K0(0);xl.start();addEventListener("resize",()=>{ns?.resize(),xl.resize()});var _l=document.getElementById("nav"),fw=[...document.querySelectorAll("[data-nav]")];function Zd(){let r=_l.offsetHeight/2,t=fw.find(n=>{let i=n.getBoundingClientRect();return i.top<=r&&i.bottom>r}),e=t?t.dataset.nav:"";_l.dataset.on!==e&&(_l.dataset.on=e),_l.classList.toggle("is-solid",Z0.getBoundingClientRect().bottom<=_l.offsetHeight)}Yo.on("scroll",Zd);addEventListener("scroll",Zd,{passive:!0});Zd();if(!Us){let r=document.querySelector(".glitch");jt.create({trigger:r,start:"top 88%",end:"top 40%",onUpdate:({progress:e})=>{let n=Math.sin(e*Math.PI)*(.55+.45*Math.sin(e*46));r.style.setProperty("--g",Math.max(0,n).toFixed(3))}});let t=matchMedia("(min-width: 761px)").matches;document.querySelectorAll(".bottle").forEach(e=>{let n=Number(e.dataset.depth)||0;pn.to(e,{y:()=>n*(t?-520:-180),ease:"none",scrollTrigger:{trigger:"#float",start:"top bottom",end:"bottom top",scrub:!0,invalidateOnRefresh:!0}})}),pn.from(".label",{rotate:-6,y:60,opacity:0,ease:"none",scrollTrigger:{trigger:".label",start:"top bottom",end:"top 65%",scrub:!0}})}iu.hidden=!1;var Q0=!1;try{Q0=sessionStorage.getItem(q0)==="1"}catch{}Q0?Xd(!1):(Yo.stop(),document.documentElement.style.overflow="hidden",X0({ready:Promise.all([uw,document.fonts.ready]),reduced:Us,onEnter(r){Xd(r);try{sessionStorage.setItem(q0,"1")}catch{}document.documentElement.style.overflow="",Yo.start(),jt.refresh()}}));
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
