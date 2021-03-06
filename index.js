<!DOCTYPE html>
<html class="no-js" lang="en" translate="no" content="notranslate">
<head>

<script type="text/javascript" async=true>
            (function() {
                var host = 'nitrotype.com';
                var element = document.createElement('script');
                var firstScript = document.getElementsByTagName('script')[0];
                var url = 'https://quantcast.mgr.consensu.org'
                    .concat('/choice/', 'WhkWH77mdJMZb', '/', host, '/choice.js')
                var uspTries = 0;
                var uspTriesLimit = 3;
                element.async = true;
                element.type = 'text/javascript';
                element.src = url;

                firstScript.parentNode.insertBefore(element, firstScript);

                function makeStub() {
                    var TCF_LOCATOR_NAME = '__tcfapiLocator';
                    var queue = [];
                    var win = window;
                    var cmpFrame;

                    function addFrame() {
                        var doc = win.document;
                        var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

                        if (!otherCMP) {
                            if (doc.body) {
                                var iframe = doc.createElement('iframe');

                                iframe.style.cssText = 'display:none';
                                iframe.name = TCF_LOCATOR_NAME;
                                doc.body.appendChild(iframe);
                            } else {
                                setTimeout(addFrame, 5);
                            }
                        }
                        return !otherCMP;
                    }

                    function tcfAPIHandler() {
                        var gdprApplies;
                        var args = arguments;

                        if (!args.length) {
                            return queue;
                        } else if (args[0] === 'setGdprApplies') {
                            if (
                                args.length > 3 &&
                                args[2] === 2 &&
                                typeof args[3] === 'boolean'
                            ) {
                                gdprApplies = args[3];
                                if (typeof args[2] === 'function') {
                                    args[2]('set', true);
                                }
                            }
                        } else if (args[0] === 'ping') {
                            var retr = {
                                gdprApplies: gdprApplies,
                                cmpLoaded: false,
                                cmpStatus: 'stub'
                            };

                            if (typeof args[2] === 'function') {
                                args[2](retr);
                            }
                        } else {
                            queue.push(args);
                        }
                    }

                    function postMessageEventHandler(event) {
                        var msgIsString = typeof event.data === 'string';
                        var json = {};

                        try {
                            if (msgIsString) {
                                json = JSON.parse(event.data);
                            } else {
                                json = event.data;
                            }
                        } catch (ignore) {}

                        var payload = json.__tcfapiCall;

                        if (payload) {
                            window.__tcfapi(
                                payload.command,
                                payload.version,
                                function(retValue, success) {
                                    var returnMsg = {
                                        __tcfapiReturn: {
                                            returnValue: retValue,
                                            success: success,
                                            callId: payload.callId
                                        }
                                    };
                                    if (msgIsString) {
                                        returnMsg = JSON.stringify(returnMsg);
                                    }
                                    event.source.postMessage(returnMsg, '*');
                                },
                                payload.parameter
                            );
                        }
                    }

                    while (win) {
                        try {
                            if (win.frames[TCF_LOCATOR_NAME]) {
                                cmpFrame = win;
                                break;
                            }
                        } catch (ignore) {}

                        if (win === window.top) {
                            break;
                        }
                        win = win.parent;
                    }
                    if (!cmpFrame) {
                        addFrame();
                        win.__tcfapi = tcfAPIHandler;
                        win.addEventListener('message', postMessageEventHandler, false);
                    }
                };

                makeStub();

                var uspStubFunction = function() {
                    var arg = arguments;
                    if (typeof window.__uspapi !== uspStubFunction) {
                        setTimeout(function() {
                            if (typeof window.__uspapi !== 'undefined') {
                                window.__uspapi.apply(window.__uspapi, arg);
                            }
                        }, 500);
                    }
                };

                var checkIfUspIsReady = function() {
                    uspTries++;
                    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
                        console.warn('USP is not accessible');
                    } else {
                        clearInterval(uspInterval);
                    }
                };

                if (typeof window.__uspapi === 'undefined') {
                    window.__uspapi = uspStubFunction;
                    var uspInterval = setInterval(checkIfUspIsReady, 6000);
                }
            })();
        </script>


<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N995JKS');</script>


<script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '630078310835256');
        fbq('track', 'PageView');
      </script>

<meta charset="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"8a681dbb8f",applicationID:"61348965"};window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var i=t[n]={exports:{}};e[n][0].call(i.exports,function(t){var i=e[n][1][t];return r(i||t)},i,i.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,n){function r(){}function i(e,t,n){return function(){return o(e,[u.now()].concat(c(arguments)),t?null:this,n),t?void 0:this}}var o=e("handle"),a=e(6),c=e(7),f=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(e,t){s[t]=i(p+t,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,i="function"==typeof t;return o(l+"tracer",[u.now(),e,n],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return t.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],n),e}finally{f.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=i(l+t)}),newrelic.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,t])}},{}],2:[function(e,t,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=e(8);t.exports=r,t.exports.offset=a,t.exports.getLastTimestamp=i},{}],3:[function(e,t,n){function r(e,t){var n=e.getEntries();n.forEach(function(e){"first-paint"===e.name?d("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&d("timing",["fcp",Math.floor(e.startTime)])})}function i(e,t){var n=e.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(e){e.getEntries().forEach(function(e){e.hadRecentInput||d("cls",[e])})}function a(e){if(e instanceof m&&!g){var t=Math.round(e.timeStamp),n={type:e.type};t<=p.now()?n.fid=p.now()-t:t>p.offset&&t<=Date.now()?(t-=p.offset,n.fid=p.now()-t):t=p.now(),g=!0,d("timing",["fi",t,n])}}function c(e){d("pageHide",[p.now(),e])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,s,d=e("handle"),p=e("loader"),l=e(5),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,y=["click","keydown","mousedown","pointerdown","touchstart"];y.forEach(function(e){document.addEventListener(e,a,!1)})}l(c)}},{}],4:[function(e,t,n){function r(e,t){if(!i)return!1;if(e!==i)return!1;if(!t)return!0;if(!o)return!1;for(var n=o.split("."),r=t.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}t.exports={agent:i,version:o,match:r}},{}],5:[function(e,t,n){function r(e){function t(){e(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,t,!1)}t.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],6:[function(e,t,n){function r(e,t){var n=[],r="",o=0;for(r in e)i.call(e,r)&&(n[o]=t(r,e[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],7:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,i=n-t||0,o=Array(i<0?0:i);++r<i;)o[r]=e[t+r];return o}t.exports=r},{}],8:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function i(e){function t(e){return e&&e instanceof r?e:e?f(e,c,o):o()}function n(n,r,i,o){if(!p.aborted||o){e&&e(n,r,i);for(var a=t(i),c=v(n),f=c.length,u=0;u<f;u++)c[u].apply(a,r);var d=s[w[n]];return d&&d.push([b,n,r,a]),a}}function l(e,t){h[e]=v(e).concat(t)}function m(e,t){var n=h[e];if(n)for(var r=0;r<n.length;r++)n[r]===t&&n.splice(r,1)}function v(e){return h[e]||[]}function g(e){return d[e]=d[e]||i(n)}function y(e,t){u(e,function(e,n){t=t||"feature",w[n]=t,t in s||(s[t]=[])})}var h={},w={},b={on:l,addEventListener:l,removeEventListener:m,emit:n,get:g,listeners:v,context:t,buffer:y,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(p.aborted=!0,s=p.backlog={})}var c="nr@context",f=e("gos"),u=e(6),s={},d={},p=t.exports=i();p.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(i.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[t]=r,r}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){i.buffer([e],r),i.emit(e,t,n)}var i=e("ee").get("handle");t.exports=r,r.ee=i},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!E++){var e=b.info=NREUM.info,t=p.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return u.abort();f(h,function(t,n){e[t]||(e[t]=n)});var n=a();c("mark",["onload",n+b.offset],null,"api"),c("timing",["load",n]);var r=p.createElement("script");r.src="https://"+e.agent,t.parentNode.insertBefore(r,t)}}function i(){"complete"===p.readyState&&o()}function o(){c("mark",["domContent",a()+b.offset],null,"api")}var a=e(2),c=e("handle"),f=e(6),u=e("ee"),s=e(4),d=window,p=d.document,l="addEventListener",m="attachEvent",v=d.XMLHttpRequest,g=v&&v.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:v,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var y=""+location,h={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1184.min.js"},w=v&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),b=t.exports={offset:a.getLastTimestamp(),now:a,origin:y,features:{},xhrWrappable:w,userAgent:s};e(1),e(3),p[l]?(p[l]("DOMContentLoaded",o,!1),d[l]("load",r,!1)):(p[m]("onreadystatechange",i),d[m]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var E=0},{}],"wrap-function":[function(e,t,n){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(7),a="nr@original",c=Object.prototype.hasOwnProperty,f=!1;t.exports=function(e,t){function n(e,t,n,i){function nrWrapper(){var r,a,c,f;try{a=this,r=o(arguments),c="function"==typeof n?n(r,a):n||{}}catch(u){p([u,"",[r,a,i],c])}s(t+"start",[r,a,i],c);try{return f=e.apply(a,r)}catch(d){throw s(t+"err",[r,a,d],c),d}finally{s(t+"end",[r,a,f],c)}}return r(e)?e:(t||(t=""),nrWrapper[a]=e,d(e,nrWrapper),nrWrapper)}function u(e,t,i,o){i||(i="");var a,c,f,u="-"===i.charAt(0);for(f=0;f<t.length;f++)c=t[f],a=e[c],r(a)||(e[c]=n(a,u?c+i:i,o,c))}function s(n,r,i){if(!f||t){var o=f;f=!0;try{e.emit(n,r,i,t)}catch(a){p([a,n,r,i])}f=o}}function d(e,t){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(e);return n.forEach(function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){return e[n]=t,t}})}),t}catch(r){p([r])}for(var i in e)c.call(e,i)&&(t[i]=e[i]);return t}function p(t){try{e.emit("internal-error",t)}catch(n){}}return e||(e=i),n.inPlace=u,n.flag=a,n}},{}]},{},["loader"]);</script>
<title>Garage - Show Off Your Cars | Nitro Type</title>
<meta name="description" content="Customize and show off your collection of exotic cars, unique titles, and badges of skill!" />

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff3544" />
<meta name="msapplication-TileColor" content="#ff0000" />
<meta name="theme-color" content="#303344/">


<meta name=”twitter:card” content=”summary_large_image” />
<meta property="og:title" content="Garage - Show Off Your Cars | Nitro Type" />
<meta property="og:type" content="game" />
<meta property="og:url" content="https://www.nitrotype.com" />
<meta property="og:image" content="https://www.nitrotype.com/dist/site/imgs/social/nitrotype-teaser-lg.png" />
<meta property="og:site_name" content="Nitro Type" />
<meta property="fb:admins" content="215019075201673" />
<meta name="og:description" content="Customize and show off your collection of exotic cars, unique titles, and badges of skill!" />

<link rel="stylesheet" type="text/css" href="/dist/site/css/app.css?f262cd835244ac2952093b3aa41780dd-1242" />
<script>
        /* Fail browser detection */
        // IE
        if (navigator.userAgent.match(/MSIE [5|6|7|8|9|10|11]\./)) {
            location.href = '/failbrowser'
        }

        // Block safari 10.0
        if (typeof Object.values == 'undefined') {
            location.href = '/failbrowser'
        }
    </script>
<script src="/index/5351979cbed7083ea5dfba4101e2c556cd671b311242-1242/bootstrap.js"></script>
<script>
        if(localStorage.getItem('rt_servers')){
            window.NTSERVERS = function(){
                return JSON.parse(localStorage.getItem('rt_servers'));
            }
        } else {
            window.NTSERVERS = function(){
                return ["realtime1.nitrotype.com","realtime2.nitrotype.com","realtime3.nitrotype.com"];
            }
        }

    </script>
<script src="/index/servers.js" async defer></script>
<script>
    function env() { return 'production'}
    function hg() { return window.localStorage.getItem('m') === 'g'}
    function __getCookie(n) {
        var c = document.cookie.split(';').filter(function(c){ return c.split('=')[0].trim() === n})
        return c.length > 0 ? c[0].split('=')[1] : undefined
    }
    window.NTGLOBALS = (function () {
        // these pages never have ads so don't even download files
        var noAdPages = [/^\/$/, /^\/login/, /^\/upgrade/, /^\/login/, /^\/signup/, /^\/store/, /^\/validate/, /^\/newpass/, /^\/relogin/, /^\/username/, /^\/teachers/, /^\/playground/];

        // checking cookies for rot47 avgspeed
        var hasAvgSpeed = parseInt(__getCookie('2G8DA665')) > 0

        var stID = parseInt(__getCookie('st-id'))

        var globals = {
        ENV: env(),
        SITE: 'nitrotype',
        RECENT_NEWS: "1604939340",
          NO_ADS: (function () {
              return hg() ||
                  noAdPages.filter(function(page){ return location.pathname.match(page); }).length !== 0
          })(),
          AD_UNITS: {},
        SPLIT_TEST_ID: stID,
        CACHE_ID: "5351979cbed7083ea5dfba4101e2c556cd671b311242",
        CACHE_ID_INTEGER: 1242,
          }

            if (typeof NTBOOTSTRAP === 'function') {
                NTBOOTSTRAP().forEach(function (item) {
                    globals[item[0]] = item[1]
                })
            }

            return globals
        })()
    </script>
<script type="text/javascript" data-cfasync="false">
        var forceAdNetwork = localStorage.getItem('_forceAdNetwork');
        (function() {
            if(__getCookie('country') && !['US','CA','PR','--'].includes(__getCookie('country'))) {
                var countryRand = Math.floor(Math.random()*20)
                if(countryRand >= 14 && countryRand <= 18) { forceAdNetwork = 'playwire'; }
                else if(countryRand > 18) { forceAdNetwork = 'google'; }
                else { forceAdNetwork = 'freestar'; }
            }
        })()

        window.__adNetworkRandom = Math.floor(Math.random()*20)
        if(location.search === '?refresh=test') {
            window.__adNetworkRandom = 19
        }
        if(forceAdNetwork === 'nextmillennium') {
            window.__adNetwork = 'nextmillennium';
            if(!NTGLOBALS.NO_ADS) {
                (function() {
                    var adScript = document.createElement('script')
                    adScript.async = true
                    adScript.defer = true
                    adScript.type = 'text/javascript'
                    adScript.src = 'https://powerad.ai/script.js'
                    var node = document.getElementsByTagName('script')[0]
                    node.parentNode.insertBefore(adScript, node)
                })();
            }
        } else if(
            forceAdNetwork === 'playwire' ||
            (!forceAdNetwork && window.__adNetworkRandom >= 0 && window.__adNetworkRandom <= 14)
        ) {
            window.__adNetwork = 'playwire'
            window.tyche = {
                mode: "tyche",
                // test config NOT to be used in production
                config: "//config.playwire.com/1024299/v2/websites/72692/banner.json",
                passiveMode: true, // sets passiveMode to active
                isMobile: false
            };
            if(!NTGLOBALS.NO_ADS) {
                (function() {
                    var adScript = document.createElement('script')
                    adScript.id = 'tyche'
                    adScript.async = true
                    adScript.defer = true
                    adScript.type = 'text/javascript'
                    adScript.src = 'https://cdn.intergi.com/hera/tyche.js'
                    var node = document.getElementsByTagName('script')[0]
                    node.parentNode.insertBefore(adScript, node)
                })();
            }
        } else if(
            forceAdNetwork === 'freestar' ||
            (!forceAdNetwork && window.__adNetworkRandom >= 15 && window.__adNetworkRandom <= 18)
        ) {
            window.__adNetwork = 'freestar'
            var freestar = freestar || {}
            freestar.hitTime = Date.now()
            freestar.queue = freestar.queue || []
            freestar.config = freestar.config || {}
            freestar.debug = window.location.search.indexOf('fsdebug') !== -1
            if(!NTGLOBALS.NO_ADS) {
                (function() {
                    !function (a, b) {
                        var c = b.getElementsByTagName("script")[0], d = b.createElement("script"), e = "https://a.pub.network/nitrotype-com"
                        e += freestar.debug ? "/qa/pubfig.min.js" : "/pubfig.min.js", d.async = !0, d.src = e, c.parentNode.insertBefore(d, c)
                    }(window, document)
                })();
            }
        } else {
            window.__adNetwork = 'google';
            var googletag = googletag || {}
            googletag.cmd = googletag.cmd || [];
            if(!NTGLOBALS.NO_ADS) {
                (function() {
                    var gads = document.createElement('script')
                    gads.async = true
                    gads.type = 'text/javascript'
                    var useSSL = 'https:' === document.location.protocol
                    gads.src = (useSSL ? 'https:' : 'http:') +
                        '//securepubads.g.doubleclick.net/tag/js/gpt.js'
                    var node = document.getElementsByTagName('script')[0]
                    node.parentNode.insertBefore(gads, node)
                })();
            }
        }
    </script>
</head>
<body>


<noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N995JKS" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>


<noscript>
            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=630078310835256&ev=PageView&noscript=1" />
          </noscript>


<script type="text/javascript"> var _kiq = _kiq || []; (function(){ setTimeout(function(){ var d = document, f = d.getElementsByTagName('script')[0], s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//s3.amazonaws.com/ki.js/75336/hB_.js'; f.parentNode.insertBefore(s, f); }, 1); })(); </script>
<span style="font-family: 'Droid Serif'; color: #fff; position: absolute; left: -9999px;">Nitro Type</span>
<div id="root">
<div style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background: #2E3141; padding: 20px; box-sizing: border-box;">
<div style="box-shadow: 0 1px 10px rgba(2, 2, 2, 0.14); text-align: center; width: 280px; height: auto; min-height: 0 !important; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #20222e; border-radius: 10px; padding: 40px 20px; box-sizing: border-box;">
<div style="display: inline-block; height: 0;  padding: 0;  padding-bottom: 14%;  position: relative;  width: 100%;">
<svg style="position: absolute;  height: 100%;  width: 100%;  left: 0;  top: 0;" viewBox="0 0 484 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="logo-slash" d="M472.111.193h11.281L469.585 68H458.26L472.111.193z" fill="#D62F3A" />
<path d="M432.511 22.232l-1.004 5.247h18.569l-2.132 10.879h-18.632l-1.129 5.887h20.95l-2.357 11.39h-34.828l9.143-44.793h34.82l-2.259 11.39h-21.141z" fill="#fff" />
<path fillRule="evenodd" clipRule="evenodd" d="M407.119 14.745c-3.221-2.602-7.758-3.903-13.614-3.903h-19.509l-2.328 11.635 17.066.011h2.701c3.681 0 5.521 1.515 5.521 4.543 0 1.877-.565 3.35-1.694 4.416-1.129 1.024-2.718 1.536-4.768 1.536h-6.085l.001-.003h-14.844l-4.533 22.655h14.905l2.213-11.006h7.59c4.434 0 8.323-.79 11.669-2.368 3.387-1.578 5.98-3.797 7.779-6.655 1.84-2.858 2.76-6.164 2.76-9.918 0-4.693-1.61-8.34-4.83-10.943z" fill="#fff" />
<path d="M346.385 39.382l-3.137 16.253h-14.805l3.199-16.445-10.978-28.348h14.868l5.959 15.486 12.233-15.486h14.868l-22.207 28.54zM287.009 22.502h-12.806l2.311-11.66h40.353l-2.311 11.66H301.75l-6.7 33.133h-14.9l6.859-33.133zM225.261 55.635c-4.279 0-8.039-.795-11.278-2.386-3.2-1.632-5.679-3.896-7.439-6.793-1.72-2.896-2.58-6.221-2.58-9.974 0-4.977 1.12-9.404 3.36-13.28 2.279-3.916 5.419-6.955 9.418-9.117 4.04-2.162 8.599-3.243 13.678-3.243 4.279 0 8.019.816 11.218 2.447 3.24 1.591 5.719 3.835 7.439 6.732 1.76 2.896 2.64 6.221 2.64 9.974 0 4.977-1.14 9.424-3.42 13.34-2.239 3.876-5.379 6.895-9.418 9.057-4 2.162-8.539 3.243-13.618 3.243zm1.2-11.688c2.239 0 4.179-.591 5.819-1.774 1.68-1.183 2.959-2.774 3.839-4.773.88-2 1.32-4.182 1.32-6.548 0-2.53-.74-4.549-2.22-6.058-1.439-1.51-3.439-2.264-5.999-2.264-2.239 0-4.199.591-5.879 1.774-1.639 1.183-2.899 2.774-3.779 4.773-.88 2-1.32 4.182-1.32 6.548 0 2.53.72 4.549 2.16 6.058 1.48 1.51 3.499 2.264 6.059 2.264z" fill="#fff" />
<path fillRule="evenodd" clipRule="evenodd" d="M197.202 35.99c2.092-2.986 3.137-6.463 3.137-10.43 0-4.65-1.61-8.255-4.83-10.815-3.179-2.602-7.654-3.903-13.425-3.903h-19.375l-2.382 11.714 14.539-.049.004-.019h4.955c3.681 0 5.521 1.515 5.521 4.543 0 1.878-.565 3.35-1.694 4.416-1.129 1.024-2.718 1.536-4.768 1.536h-6.061l-14.607-.04-4.613 22.692h14.805l2.196-11.262h3.638l6.211 11.262h15.369l-7.339-13.054c3.764-1.45 6.67-3.647 8.719-6.59z" fill="#fff" />
<path d="M127.413 22.552h-12.86l2.321-11.71h40.525l-2.408 11.71h-12.773l-6.75 33.083h-14.803l6.748-33.083zM95.002 10.842h14.787l-8.772 44.736H86.231l8.771-44.736z" fill="#fff" />
<path fillRule="evenodd" clipRule="evenodd" d="M22.448 0H.392l16.61 27.836-7.839 40.067h64.74L88.043 0H22.447z" fill="#D62F3A" />
<path d="M73.334 10.84L64.55 55.635H52.38l-12.61-20.86-4.077 20.86H21.265l8.783-44.793h12.17l12.61 20.86 4.077-20.86h14.428z" fill="#fff" />
<image src="/dist/site/images/logos/nt-logo-sm-fallback.png" xlinkHref="" />
</svg>
</div>
<div style="margin-top: 20px; color: #FFFFFF; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; font-family: sans-serif;">
Loading...
</div>
</div>
</div>
</div>
<script src="/dist/site/js/vendors~ac~au~de~fr~ga~in~le~lo~ne~ot~ra~rl~se~st~su~tc~te~ud~up~wo.js?476aaf48502cd940f74a8507156fabd6-1242"></script>
<script src="/dist/site/js/vendors~fr~ga~le~ra~te.js?4b59086f5f28c469370853542463baf4-1242"></script>
<script src="/dist/site/js/ga.js?7ac1f4be66890151644307b8581f5db2-1242"></script>
<div id="mystery-box-ad" style="display: none"></div>
<script>
            window.boltDataConfig = "//cdn.playwire.com/test-configs/nitrotype-bolt.json"
            boltEventHandlers = {init: function(){window.boltEventHandlers.inited = true}}
            if(!hg()) {
                (function() {
                    var script = document.createElement('script')
                    script.async = true
                    script.defer = true
                    script.type = 'text/javascript'
                    script.src = 'https://cdn.playwire.com/bolt/js/zeus/embed.js'
                    script.setAttribute('data-width', '734px');
                    script.setAttribute('data-height', '410px');
                    script.setAttribute('data-load-hidden', 'true');
                    script.setAttribute('data-id', 'mystery-box-ad');
                    script.setAttribute('data-config', window.boltDataConfig);
                    script.setAttribute('data-onready', 'boltEventHandlers.init');
                    document.body.appendChild(script)
                })();
            }
        </script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","licenseKey":"8a681dbb8f","applicationID":"61348965","transactionName":"MVdVZBNTChAEAhIPCggddEUSRgsOShIPEgA=","queueTime":0,"applicationTime":26,"atts":"HRBWEltJGR4=","errorBeacon":"bam-cell.nr-data.net","agent":""}</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"5f111c5f5b9b1867","version":"2020.9.1","si":10}'></script>
</body>
</html>

