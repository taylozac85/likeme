/*1374586088,182060609*/

if (self.CavalryLogger) { CavalryLogger.start_js(["I+n09"]); }

__d("legacy:connect-xd",["XD"],function(a,b,c,d){a.UnverifiedXD=b('XD').UnverifiedXD;a.XD=b('XD').XD;},3);
__d("legacy:onload-action",["OnloadHooks"],function(a,b,c,d){var e=b('OnloadHooks');a._onloadHook=e._onloadHook;a._onafterloadHook=e._onafterloadHook;a.runHook=e.runHook;a.runHooks=e.runHooks;a.keep_window_set_as_loaded=e.keepWindowSetAsLoaded;},3);
__d("Base64",[],function(a,b,c,d,e,f){var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(JSON.stringify(l));},decodeObject:function(l){return JSON.parse(k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,l.map(function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;});
__d("ClickRefUtils",[],function(a,b,c,d,e,f){var g={get_intern_ref:function(h){if(!!h){var i={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,navSearch:1};for(var j=h;j&&j!=document.body;j=j.parentNode){if(!j.id||typeof j.id!=='string')continue;if(j.id.substr(0,8)=='pagelet_')return j.id.substr(8);if(j.id.substr(0,8)=='box_app_')return j.id;if(i[j.id])return j.id;}}return '-';},get_href:function(h){var i=(h.getAttribute&&(h.getAttribute('ajaxify')||h.getAttribute('data-endpoint'))||h.action||h.href||h.name);return typeof i==='string'?i:null;},should_report:function(h,i){if(i=='FORCE')return true;if(i=='INDIRECT')return false;return h&&(g.get_href(h)||(h.getAttribute&&h.getAttribute('data-ft')));}};e.exports=g;});
__d("setUECookie",["Env"],function(a,b,c,d,e,f){var g=b('Env');function h(i){if(!g.no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}e.exports=h;});
__d("ClickRefLogger",["Arbiter","EagleEye","ClickRefUtils","collectDataAttributes","copyProperties","ge","setUECookie","$"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('EagleEye'),i=b('ClickRefUtils'),j=b('collectDataAttributes'),k=b('copyProperties'),l=b('ge'),m=b('setUECookie'),n=b('$');function o(q){if(!l('content'))return [0,0,0,0];var r=n('content'),s=a.Vector2?a.Vector2.getEventPosition(q):{x:0,y:0};return [s.x,s.y,r.offsetLeft,r.clientWidth];}function p(q,r,event,s){var t=(!a.ArbiterMonitor)?'r':'a',u=[0,0,0,0],v,w,x;if(!!event){v=event.type;if(v=='click'&&l('content'))u=o(event);var y=0;event.ctrlKey&&(y+=1);event.shiftKey&&(y+=2);event.altKey&&(y+=4);event.metaKey&&(y+=8);if(y)v+=y;}if(!!r)w=i.get_href(r);var z=[];if(a.ArbiterMonitor){x=a.ArbiterMonitor.getInternRef(r);z=a.ArbiterMonitor.getActFields();}var aa=j(!!event?(event.target||event.srcElement):r,['ft','gt']);k(aa.ft,s.ft||{});k(aa.gt,s.gt||{});if(typeof(aa.ft.ei)==='string')delete aa.ft.ei;var ba=[q._ue_ts,q._ue_count,w||'-',q._context,v||'-',x||i.get_intern_ref(r),t,a.URI?a.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,aa].concat(u).concat(z);return ba;}g.subscribe("ClickRefAction/new",function(q,r){if(i.should_report(r.node,r.mode)){var s=p(r.cfa,r.node,r.event,r.extra_data);m(r.cfa.ue);h.log('act',s);if(window.chromePerfExtension)window.postMessage({clickRef:JSON.stringify(s)},window.location.origin);}});});
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f){var g=b('URI'),h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;});
__d("Quickling",["AjaxPipeRequest","Arbiter","Class","CSSClassTransition","DocumentTitle","DOM","ErrorUtils","HTML","OnloadHooks","PageTransitions","QuicklingAugmenter","Run","URI","UserAgent","copyProperties","goOrReplace","isEmpty","QuicklingConfig"],function(a,b,c,d,e,f){var g=b('AjaxPipeRequest'),h=b('Arbiter'),i=b('Class'),j=b('CSSClassTransition'),k=b('DocumentTitle'),l=b('DOM'),m=b('ErrorUtils'),n=b('HTML'),o=b('OnloadHooks'),p=b('PageTransitions'),q=b('QuicklingAugmenter'),r=b('Run'),s=b('URI'),t=b('UserAgent'),u=b('copyProperties'),v=b('goOrReplace'),w=b('isEmpty'),x=b('QuicklingConfig'),y=x.version,z=x.sessionLength,aa=new RegExp(x.inactivePageRegex),ba=0,ca,da='',ea={isActive:function(){return true;},isPageActive:function(la){if(la=='#')return false;la=new s(la);if(la.getDomain()&&la.getDomain()!=s().getDomain())return false;if(la.getPath()=='/l.php'){var ma=la.getQueryData().u;if(ma){ma=s(unescape(ma)).getDomain();if(ma&&ma!=s().getDomain())return false;}}var na=la.getPath(),oa=la.getQueryData();if(!w(oa))na+='?'+s.implodeQuery(oa);return !aa.test(na);},getLoadCount:function(){return ba;}};function fa(la){la=la||'Facebook';k.set(la);if(t.ie()){da=la;if(!ca)ca=window.setInterval(function(){var ma=da,na=k.get();if(ma!=na)k.set(ma);},5000,false);}}function ga(la){var ma=document.getElementsByTagName('link');for(var na=0;na<ma.length;++na){if(ma[na].rel!='alternate')continue;l.remove(ma[na]);}if(la.length){var oa=l.find(document,'head');oa&&l.appendContent(oa,n(la[0]));}}function ha(la){var ma={version:y};this.parent.construct(this,la,{quickling:ma});}i.extend(ha,g);u(ha.prototype,{_preBootloadFirstResponse:function(la){return true;},_fireDomContentCallback:function(){this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');p.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);this.parent._fireDomContentCallback();},_fireOnloadCallback:function(){if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}this.parent._fireOnloadCallback();},isPageActive:function(la){return ea.isPageActive(la);},_versionCheck:function(la){if(la.version==y)return true;var ma=['quickling','ajaxpipe','ajaxpipe_token'];v(window.location,s(la.uri).removeQueryData(ma),true);return false;},_processFirstResponse:function(la){var ma=la.getPayload();fa(ma.title);ga(ma.syndication||[]);window.scrollTo(0,0);j.go(document.body,ma.body_class||'',p.getMostRecentURI(),la.getRequest().getURI());h.inform('quickling/response');},getSanitizedParameters:function(){return ['quickling'];}});function ia(){ba++;return ba>=z;}function ja(la){g.setCurrentRequest(null);if(ia())return false;la=q.augmentURI(la);if(!ea.isPageActive(la))return false;window.ExitTime=Date.now();r.__removeHook('onafterloadhooks');r.__removeHook('onloadhooks');o.runHooks('onleavehooks');h.inform('onload/exit',true);new ha(la).setCanvasId('content').send();return true;}function ka(la){var ma=window[la];function na(oa,pa,qa){if(typeof oa!=='function')oa=eval.bind(null,oa);var ra=ma(m.guard(oa),pa);if(pa>0)if(qa!==false)r.onLeave(function(){clearInterval(ra);});return ra;}window[la]=na;}r.onAfterLoad(function la(){ka('setInterval');ka('setTimeout');p.registerHandler(ja,1);});e.exports=a.Quickling=ea;});
__d("StringTransformations",[],function(a,b,c,d,e,f){e.exports={unicodeEscape:function(g){return g.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(h){var i=h.charCodeAt().toString(16);return '\\u'+('0000'+i.toUpperCase()).slice(-4);});},unicodeUnescape:function(g){return g.replace(/(\\u[0-9A-Fa-f]{4})/g,function(h){return String.fromCharCode(parseInt(h.slice(2),16));});}};});
__d("UserActionHistory",["Arbiter","ClickRefUtils","ScriptPath","throttle"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('ClickRefUtils'),i=b('ScriptPath'),j=b('throttle'),k={click:1,submit:1},l=false,m={log:[],len:0},n=j.acrossTransitions(function(){try{l._ua_log=JSON.stringify(m);}catch(q){l=false;}},1000);function o(){try{if(a.sessionStorage){l=a.sessionStorage;l._ua_log&&(m=JSON.parse(l._ua_log));}}catch(q){l=false;}m.log[m.len%10]={ts:Date.now(),path:'-',index:m.len,type:'init',iref:'-'};m.len++;g.subscribe("UserAction/new",function(r,s){var t=s.ua,u=s.node,event=s.event;if(!event||!(event.type in k))return;var v={path:i.getScriptPath(),type:event.type,ts:t._ue_ts,iref:h.get_intern_ref(u)||'-',index:m.len};m.log[m.len++%10]=v;l&&n();});}function p(){return m.log.sort(function(q,r){return (r.ts!=q.ts)?(r.ts-q.ts):(r.index-q.index);});}o();e.exports={getHistory:p};});
__d("TinyViewport",["Arbiter","CSS","DOM","Event","queryThenMutateDOM"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('CSS'),i=b('DOM'),j=b('Event'),k=b('queryThenMutateDOM'),l=document.documentElement,m,n,o=k.bind(null,function(){n=n||i.getDocumentScrollElement();m=l.clientHeight<400||l.clientWidth<n.scrollWidth;},function(){h.conditionClass(l,'tinyViewport',m);h.conditionClass(l,'canHaveFixedElements',!m);},'TinyViewport');o();g.subscribe('quickling/response',o);j.listen(window,'resize',o);});
__d("TimeSpentArray",["Banzai","pageID"],function(a,b,c,d,e,f){var g=b('Banzai'),h=b('pageID'),i=2,j=i*32,k=1500,l,m,n,o,p,q,r,s,t;function u(){if(l){var ca=Date.now();if(ca>p)r=Math.min(j,Math.ceil((ca/1000)-o));var da=z();if(da)l(da);}y();}function v(){w();m=setTimeout(u,n*1000+k,false);}function w(){if(m){clearTimeout(m);m=null;}}function x(ca){o=ca;p=o*1000;q=[1];for(var da=1;da<i;da++)q.push(0);r=1;s+=1;t+=1;v();}function y(){w();q=null;n=j;}function z(){if(!q)return null;return {tos_id:h,start_time:o,tos_array:q.slice(0),tos_len:r,tos_seq:t,tos_cum:s};}function aa(ca){if(ca>=p&&(ca-p)<1000)return;ba(Math.floor(ca/1000));}function ba(ca){var da=ca-o;if(da<0||da>=j)u();if(!q){x(ca);}else{q[da>>5]|=(1<<(da&31));r=da+1;s+=1;p=ca*1000;}}e.exports={init:function(ca,da){s=0;t=-1;l=ca;n=da||j;x(Math.floor(Date.now()/1000));g.subscribe(g.SHUTDOWN,u);},update:function(ca){aa(ca);},get:function(){return z();},ship:function(){u();},reset:function(){y();}};});
__d("WebStorageMonster",["Event","AsyncRequest","UserActivity","StringTransformations","arrayContains","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f){var g=b('Event'),h=b('AsyncRequest'),i=b('UserActivity'),j=b('StringTransformations'),k=b('arrayContains'),l=b('setTimeoutAcrossTransitions'),m=300000,n=false;function o(t){var u={};for(var v in t){var w=t.getItem(v),x=j.unicodeEscape(v);if(typeof w==='string')u[x]=w.length;}return u;}function p(t){if(a.localStorage&&t.keys)s._getLocalStorageKeys().forEach(function(u){if(k(t.keys,u))a.localStorage.removeItem(u);});}function q(t){if(a.localStorage)s._getLocalStorageKeys().forEach(function(u){if(!t.some(function(v){return new RegExp(v).test(u);}))a.localStorage.removeItem(u);});if(a.sessionStorage)a.sessionStorage.clear();}function r(t){if(i.isActive(m)){l(r.curry(t),m);}else s.cleanNow(t);}var s={registerLogoutForm:function(t,u){g.listen(t,'submit',function(v){s.cleanOnLogout(u);});},schedule:function(t){if(n)return;n=true;r(t);},cleanNow:function(t){var u=Date.now(),v={},w=false;['localStorage','sessionStorage'].forEach(function(y){if(a[y]){v[y]=o(a[y]);w=true;}});var x=Date.now();v.logtime=x-u;if(w)new h('/ajax/webstorage/process_keys.php').setData(v).setHandler(function(y){if(!t){var z=y.getPayload();if(z.keys)z.keys=z.keys.map(j.unicodeUnescape);p(z);}}.bind(this)).send();},cleanOnLogout:function(t){if(t)q(t);if(a.sessionStorage)a.sessionStorage.clear();},_getLocalStorageKeys:Object.keys.curry(a.localStorage)};e.exports=s;});