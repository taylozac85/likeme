var domready=function(m){function r(c){for(u=1;c=n.shift();)c()}var n=[],i,g=document,j=g.documentElement,k=j.doScroll,u=/^loade|c/.test(g.readyState);g.addEventListener&&g.addEventListener("DOMContentLoaded",i=function(){g.removeEventListener("DOMContentLoaded",i,!1);r()},!1);k&&g.attachEvent("onreadystatechange",i=function(){/^c/.test(g.readyState)&&(g.detachEvent("onreadystatechange",i),r())});return m=k?function(c){if(self!=top)u?c():n.push(c);else a:{try{j.doScroll("left")}catch(g){setTimeout(function(){m(c)},
50);break a}c()}}:function(c){u?c():n.push(c)}}();
(function(){function m(b,d,f){b.addEventListener?b.addEventListener(d,f,!1):b.attachEvent("on"+d,f)}function r(b,d,f){b.removeEventListener?b.removeEventListener(d,f,!1):b.detachEvent("on"+d,f)}function n(b,d){var f=document.createElement("img"),h={action:b,blog_id:window._wp_rp_blog_id,post_id:window._wp_rp_post_id,request_id:window._wp_rp_request_id,_:+new Date},a=[],c=window._wp_rp_static_base_url+"stats.gif?";if(d)for(var e in d)d.hasOwnProperty(e)&&(h[e]=d[e]);for(x in h)h.hasOwnProperty(x)&&
a.push(x+"="+h[x]);c+=a.join("&");f.src=c}function i(b,d){var f,h,a=b.getBoundingClientRect();h=window.innerHeight||document.documentElement.clientHeight;f=window.innerWidth||document.documentElement.clientWidth;return d?0<=h-a.top&&h-a.bottom<=h:0<=a.top&&0<=a.left&&a.bottom<=h&&a.right<=f}function g(b,d,f){b.nodeType&&(b=[b]);if(b&&0!==b.length){var h=null,a=!1,c=function(){!h&&!a&&(h=setTimeout(function(){h=null;for(var e=0,m=b.length;e<m;e++)if(a=i(b[e])){r(document,"scroll",c);n(d,f);break}},
500))};m(document,"scroll",c);c()}}function j(b,d){if("visible"!==b.style.visibility){for(var f=d&&d.data||null,c=f&&f.results||[],a=f&&f.settings||null,f=f&&f.tlb||!1,i=a&&a.csm_abt||!1,a={},e=0,p=0,k=[],j=b.querySelectorAll("li"),e=0,p=j.length;e<p;e+=1)0>j[e].className.indexOf("wp_rp_special")&&k.push(j[e]);var l=k.length,e=c.length,v=!0===window._wp_rp_thumbnails,p=function(){for(var b=[],a=0;a<l;a+=1)b.push(k[a].getAttribute("data-poid")||"unknown");return b.join(",")},t=/^(.*\?(?:.*&)?)ref_related_posts=(\d+\.\d+)(&.*)?$/,
y=function(b){var a=document.createElement("a");a.href=b.url;return a.hostname.replace("www.","")},j=function(b,a){var c=b.getAttribute("data-post-type");if(c&&"none"!==c&&c in A!==a.type in A||"own_sourcefeed"===c)return!1;var f=a.target_url;if(-1===f.indexOf("ref_related_posts="))var c=f,e=b.getAttribute("data-position"),f=c+"&request_id="+window._wp_rp_request_id+"&position="+e+"&thumbnails="+v;else c=a.aid,e=t.exec(f),f=e[1]+"ref_related_posts="+(e[2]+"."+window._wp_rp_request_id+"."+c)+(e[3]||
"");var d=function(){event=event||window.event;var a=event.target||event.srcElement;"a"!==a.nodeName.toLowerCase()&&"a"!==(a=a.parentNode).nodeName.toLowerCase()||a.setAttribute("href",f)};b.innerHTML=v?'<a rel="nofollow" href="'+a.url+'" target="_blank" class="wp_rp_thumbnail"><img alt="'+a.title+'" src="'+a.thumbnail_url+'" /></a>':"";b.innerHTML+='<a rel="nofollow" href="'+a.url+'" target="_blank" class="wp_rp_title">'+a.title+"</a>";b.setAttribute("data-poid","ex-"+a.aid);var h=b.getElementsByTagName("a"),
c=h[h.length-1],g=e=null;m(c,"mousedown",d);if(v&&(e=h[0],g=e.getElementsByTagName("img")[0],m(e,"mousedown",d),g.style.visibility="hidden",g.onload=function(){this.style.visibility="visible"},g.onerror=function(){var b=parseInt((a.thumbnail_url.match(/\/(\d+)/)||[]).pop()||"0",10)%u;this.onerror=this.onload;this.src="http://i.zemanta.com/noimg_"+b+"_150_150.jpg";if(this.complete)this.onload()},g.complete))g.onload();a.promoted?(b.className="wp_rp_promoted",d=document.createElement("span"),v?"B"===
i?(d.innerHTML=" ("+y(a)+")",d.className="wp_rp_domain",c.appendChild(d)):(d.innerHTML="promoted",d.className="wp_rp_badge",e.appendChild(d)):(d.innerHTML=" ("+y(a)+")",d.style.fontSize="0.8em",c.appendChild(d))):(b.className="wp_rp_remote",d=document.createElement("span"),v?"B"===i?(d.innerHTML=" ("+y(a)+")",d.className="wp_rp_domain",c.appendChild(d)):(d.innerHTML="&nbsp;",d.className="wp_rp_badge",e.appendChild(d)):(d.innerHTML=" ("+y(a)+")",d.style.fontSize="0.8em",c.appendChild(d)));window._wp_rp_admin_ajax_url&&
(c=document.createElement("div"),c.setAttribute("class","remove_x"),c.setAttribute("title","Stop showing articles from this blog."),m(c,"click",function(){var b=a.sourcefeed,c=function(){window["_wp_rp_blacklist_callback"+b]=null;r(document.body,"keyup",d);h?document.location.reload():g.parentNode.removeChild(g)},d=function(a){a=a||window.event;27===a.keyCode&&c()},e=function(){k.innerHTML="There was an error while trying to blacklist this blog. Do you want to retry?";p.innerHTML="Retry";l.innerHTML=
"Cancel";i.style.display="block";j.removeChild(n);window["_wp_rp_blacklist_callback"+b]=null},f=function(){clearTimeout(q);k.innerHTML="The blog was successfully blacklisted.";i.removeChild(p);l.innerHTML="Close";i.style.display="block";j.removeChild(n);h=!0;window["_wp_rp_blacklist_callback"+b]=null},h=!1,g=document.createElement("div");g.setAttribute("style","position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 1000000; background: rgba(0,0,0,0.7);");m(g,"click",function(a){a=
a||window.event;(a.target||a.srcElement)===g&&c()});var j=document.createElement("div");j.setAttribute("style","margin: -50px auto 0; border-radius: 6px; padding: 20px; width: 500px; background: white; position: relative; top: 50%; text-align: center;");g.appendChild(j);var k=document.createElement("div");k.innerHTML="Are you sure you want to stop showing posts from this blog?";j.appendChild(k);var i=document.createElement("div");i.setAttribute("style","margin-top: 1em;");j.appendChild(i);var p=document.createElement("a");
p.setAttribute("href","javascript: void(0);");p.setAttribute("style","margin-right: 40px;");p.innerHTML="Yes";i.appendChild(p);var l=document.createElement("a");l.setAttribute("href","javascript: void(0);");l.innerHTML="No";m(l,"click",function(){c()});i.appendChild(l);document.body.appendChild(g);m(document.body,"keyup",d);var n,q;m(p,"click",function(){n=document.createElement("div");n.setAttribute("style","background: url("+window._wp_rp_static_base_url+"img/loading.gif) no-repeat center center; height: 30px; margin-top: 1em;");
j.appendChild(n);i.style.display="none";window["_wp_rp_blacklist_callback"+b]=f;var a=document.createElement("script");a.src=window._wp_rp_admin_ajax_url+"?action=rp_blogger_network_blacklist&sourcefeed="+b+"&random="+ +new Date+"&_wpnonce="+(window._wp_rp_ajax_nonce||"none");document.body.appendChild(a);q=setTimeout(e,2E4)})}),b.appendChild(c));return!0};if(0<l&&0<e){c.sort(function(a,b){return a.promoted&&b.promoted?0:a.promoted&&!b.promoted?-1:1});e>l&&(c.splice(l,e-l),e=l);for(var w=0,s=0,q=0;q<
e;){for(w=s;q<e&&w<l;w+=1)j(k[l-w-1],c[q])&&(q+=1,s+=1);q+=1}f&&(a.tlb=f);a["posts-shown"]=p();n("promo-replace",a);g(b.querySelectorAll(".wp_rp_promoted"),"promo-view",a)}else a["posts-shown"]=p(),n("promo-no-replace",a),g(b,"promo-no-view",a);b.style.visibility="visible"}}function k(){for(var b=document.querySelectorAll(".wp_rp"),c=0,f=b.length;c<f;c++)j(b[c],B)}window._wp_rp_request_id=window._wp_rp_request_id||((new Date).getTime()%60466176/60466176).toString(36).substr(2,5)+Math.random().toString(36).substr(2,
10);var u=15,c=!1,z=0,A={external:!0,promoted:!0,network:!0};if(document.querySelectorAll&&document.querySelector){var B=null;window._wp_rp_callback_widget_exists=function(){c&&k()};window.wp_rp_recommendations_callback=function(b){c=!0;B=b;k();domready(k)};domready(function(){var b=document.querySelectorAll(".wp_rp");z=+new Date;if(b.length){var d=null,f=!1,g=function(){!d&&!f&&(d=setTimeout(function(){d=null;for(var a=0,k=b.length;a<k;a++){f=i(b[a],!0);if(c){r(document,"scroll",g);break}if(f){var e=
+new Date-z;r(document,"scroll",g);if(!c){e=2E3-e;a=function(){if(!c){window.wp_rp_recommendations_callback=function(){};for(var a=0;a<k;a++)j(b[a])}};1>e?a():setTimeout(a,e);break}}}},100))};m(document,"scroll",g);g()}});var t=document.querySelector('meta[property="og:url"]'),t=t?t.getAttribute("content"):document.location.origin+document.location.pathname,s=document.createElement("script");s.src="http://sre.zemanta.com/content/?blog_id="+window._wp_rp_blog_id+"&post_id="+window._wp_rp_post_id+"&title="+
window._wp_rp_post_title+"&pc="+window._wp_rp_promoted_content+"&callback=wp_rp_recommendations_callback&tX="+window._wp_rp_traffic_exchange+"&request_id="+window._wp_rp_request_id+"&num_rel_posts="+window._wp_rp_num_rel_posts+"&tags="+window._wp_rp_post_tags.slice(0,50)+"&post_url="+encodeURIComponent(t);s.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(s)}})();