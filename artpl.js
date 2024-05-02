/*!
 * artplayer.js v5.1.1
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!function(t, e, r, a, o) {
    var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
      , i = "function" == typeof n[a] && n[a]
      , s = i.cache || {}
      , l = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);
    function c(e, r) {
        if (!s[e]) {
            if (!t[e]) {
                var o = "function" == typeof n[a] && n[a];
                if (!r && o)
                    return o(e, !0);
                if (i)
                    return i(e, !0);
                if (l && "string" == typeof e)
                    return l(e);
                var u = new Error("Cannot find module '" + e + "'");
                throw u.code = "MODULE_NOT_FOUND",
                u
            }
            d.resolve = function(r) {
                var a = t[e][1][r];
                return null != a ? a : r
            }
            ,
            d.cache = {};
            var p = s[e] = new c.Module(e);
            t[e][0].call(p.exports, d, p, p.exports, this)
        }
        return s[e].exports;
        function d(t) {
            var e = d.resolve(t);
            return !1 === e ? {} : c(e)
        }
    }
    c.isParcelRequire = !0,
    c.Module = function(t) {
        this.id = t,
        this.bundle = c,
        this.exports = {}
    }
    ,
    c.modules = t,
    c.cache = s,
    c.parent = i,
    c.register = function(e, r) {
        t[e] = [function(t, e) {
            e.exports = r
        }
        , {}]
    }
    ,
    Object.defineProperty(c, "root", {
        get: function() {
            return n[a]
        }
    }),
    n[a] = c;
    for (var u = 0; u < e.length; u++)
        c(e[u]);
    if (r) {
        var p = c(r);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = p : "function" == typeof define && define.amd && define((function() {
            return p
        }
        ))
    }
}({
    abjMI: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("bundle-text:./style/index.less")
          , n = a.interopDefault(o)
          , i = t("option-validator")
          , s = a.interopDefault(i)
          , l = t("./utils/emitter")
          , c = a.interopDefault(l)
          , u = t("./utils")
          , p = t("./scheme")
          , d = a.interopDefault(p)
          , f = t("./config")
          , h = a.interopDefault(f)
          , m = t("./template")
          , g = a.interopDefault(m)
          , v = t("./i18n")
          , y = a.interopDefault(v)
          , b = t("./player")
          , x = a.interopDefault(b)
          , w = t("./control")
          , j = a.interopDefault(w)
          , k = t("./contextmenu")
          , $ = a.interopDefault(k)
          , S = t("./info")
          , I = a.interopDefault(S)
          , T = t("./subtitle")
          , E = a.interopDefault(T)
          , O = t("./events")
          , M = a.interopDefault(O)
          , C = t("./hotkey")
          , F = a.interopDefault(C)
          , H = t("./layer")
          , B = a.interopDefault(H)
          , D = t("./loading")
          , A = a.interopDefault(D)
          , R = t("./notice")
          , z = a.interopDefault(R)
          , L = t("./mask")
          , P = a.interopDefault(L)
          , N = t("./icons")
          , _ = a.interopDefault(N)
          , Z = t("./setting")
          , q = a.interopDefault(Z)
          , V = t("./storage")
          , W = a.interopDefault(V)
          , U = t("./plugins")
          , Y = a.interopDefault(U);
        let K = 0;
        const G = [];
        class X extends c.default {
            constructor(t, e) {
                super(),
                this.id = ++K;
                const r = u.mergeDeep(X.option, t);
                if (r.container = t.container,
                this.option = (0,
                s.default)(r, d.default),
                this.isLock = !1,
                this.isReady = !1,
                this.isFocus = !1,
                this.isInput = !1,
                this.isRotate = !1,
                this.isDestroy = !1,
                this.template = new (0,
                g.default)(this),
                this.events = new (0,
                M.default)(this),
                this.storage = new (0,
                W.default)(this),
                this.icons = new (0,
                _.default)(this),
                this.i18n = new (0,
                y.default)(this),
                this.notice = new (0,
                z.default)(this),
                this.player = new (0,
                x.default)(this),
                this.layers = new (0,
                B.default)(this),
                this.controls = new (0,
                j.default)(this),
                this.contextmenu = new (0,
                $.default)(this),
                this.subtitle = new (0,
                E.default)(this),
                this.info = new (0,
                I.default)(this),
                this.loading = new (0,
                A.default)(this),
                this.hotkey = new (0,
                F.default)(this),
                this.mask = new (0,
                P.default)(this),
                this.setting = new (0,
                q.default)(this),
                this.plugins = new (0,
                Y.default)(this),
                "function" == typeof e && this.on("ready", (()=>e.call(this, this))),
                X.DEBUG) {
                    const t = t=>console.log(`[ART.${this.id}] -> ${t}`);
                    t("Version@" + X.version),
                    t("Env@" + X.env),
                    t("Build@" + X.build);
                    for (let e = 0; e < h.default.events.length; e++)
                        this.on("video:" + h.default.events[e], (e=>t("Event@" + e.type)))
                }
                G.push(this)
            }
            static get instances() {
                return G
            }
            static get version() {
                return "5.1.1"
            }
            static get env() {
                return "production"
            }
            static get build() {
                return "2024-01-11 10:39:44"
            }
            static get config() {
                return h.default
            }
            static get utils() {
                return u
            }
            static get scheme() {
                return d.default
            }
            static get Emitter() {
                return c.default
            }
            static get validator() {
                return s.default
            }
            static get kindOf() {
                return s.default.kindOf
            }
            static get html() {
                return g.default.html
            }
            static get option() {
                return {
                    id: "",
                    container: "#artplayer",
                    url: "",
                    poster: "",
                    type: "",
                    theme: "#f00",
                    volume: .7,
                    isLive: !1,
                    muted: !1,
                    autoplay: !1,
                    autoSize: !1,
                    autoMini: !1,
                    loop: !1,
                    flip: !1,
                    playbackRate: !1,
                    aspectRatio: !1,
                    screenshot: !1,
                    setting: !1,
                    hotkey: !0,
                    pip: !1,
                    mutex: !0,
                    backdrop: !0,
                    fullscreen: !1,
                    fullscreenWeb: !1,
                    subtitleOffset: !1,
                    miniProgressBar: !1,
                    useSSR: !1,
                    playsInline: !0,
                    lock: !1,
                    fastForward: !1,
                    autoPlayback: !1,
                    autoOrientation: !1,
                    airplay: !1,
                    layers: [],
                    contextmenu: [],
                    controls: [],
                    settings: [],
                    quality: [],
                    highlight: [],
                    plugins: [],
                    thumbnails: {
                        url: "",
                        number: 60,
                        column: 10,
                        width: 0,
                        height: 0
                    },
                    subtitle: {
                        url: "",
                        type: "",
                        style: {},
                        name: "",
                        escape: !0,
                        encoding: "utf-8",
                        onVttLoad: t=>t
                    },
                    moreVideoAttr: {
                        controls: !1,
                        preload: u.isSafari ? "auto" : "metadata"
                    },
                    i18n: {},
                    icons: {},
                    cssVar: {},
                    customType: {},
                    lang: navigator.language.toLowerCase()
                }
            }
            get proxy() {
                return this.events.proxy
            }
            get query() {
                return this.template.query
            }
            get video() {
                return this.template.$video
            }
            destroy(t=!0) {
                this.events.destroy(),
                this.template.destroy(t),
                G.splice(G.indexOf(this), 1),
                this.isDestroy = !0,
                this.emit("destroy")
            }
        }
        r.default = X,
        X.DEBUG = !1,
        X.CONTEXTMENU = !0,
        X.NOTICE_TIME = 2e3,
        X.SETTING_WIDTH = 250,
        X.SETTING_ITEM_WIDTH = 200,
        X.SETTING_ITEM_HEIGHT = 35,
        X.RESIZE_TIME = 200,
        X.SCROLL_TIME = 200,
        X.SCROLL_GAP = 50,
        X.AUTO_PLAYBACK_MAX = 10,
        X.AUTO_PLAYBACK_MIN = 5,
        X.AUTO_PLAYBACK_TIMEOUT = 3e3,
        X.RECONNECT_TIME_MAX = 5,
        X.RECONNECT_SLEEP_TIME = 1e3,
        X.CONTROL_HIDE_TIME = 3e3,
        X.DBCLICK_TIME = 300,
        X.DBCLICK_FULLSCREEN = !0,
        X.MOBILE_DBCLICK_PLAY = !0,
        X.MOBILE_CLICK_PLAY = !1,
        X.AUTO_ORIENTATION_TIME = 200,
        X.INFO_LOOP_TIME = 1e3,
        X.FAST_FORWARD_VALUE = 3,
        X.FAST_FORWARD_TIME = 1e3,
        X.TOUCH_MOVE_RATIO = .5,
        X.VOLUME_STEP = .1,
        X.SEEK_STEP = 5,
        X.PLAYBACK_RATE = [.5, .75, 1, 1.25, 1.5, 2],
        X.ASPECT_RATIO = ["default", "4:3", "16:9"],
        X.FLIP = ["normal", "horizontal", "vertical"],
        X.FULLSCREEN_WEB_IN_BODY = !1,
        X.LOG_VERSION = !0,
        X.USE_RAF = !1,
        u.isBrowser && (window.Artplayer = X,
        u.setStyleText("artplayer-style", n.default),
        setTimeout((()=>{
            X.LOG_VERSION && console.log(`%c ArtPlayer %c ${X.version} %c https://artplayer.org`, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "")
        }
        ), 100))
    }
    , {
        "bundle-text:./style/index.less": "kfOe8",
        "option-validator": "bAWi2",
        "./utils/emitter": "2bGVu",
        "./utils": "h3rH9",
        "./scheme": "AdvwB",
        "./config": "9Xmqu",
        "./template": "2gKYH",
        "./i18n": "1AdeF",
        "./player": "556MW",
        "./control": "14IBq",
        "./contextmenu": "7iUum",
        "./info": "hD2Lg",
        "./subtitle": "lum0D",
        "./events": "1Epl5",
        "./hotkey": "eTow4",
        "./layer": "4fDoD",
        "./loading": "fE0Sp",
        "./notice": "9PuGy",
        "./mask": "2etr0",
        "./icons": "6dYSr",
        "./setting": "bRHiA",
        "./storage": "f2Thp",
        "./plugins": "96ThS",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    kfOe8: [function(t, e, r) {
        e.exports = '.art-video-player{--art-theme:red;--art-font-color:#fff;--art-background-color:#000;--art-text-shadow-color:#00000080;--art-transition-duration:.2s;--art-padding:10px;--art-border-radius:3px;--art-progress-height:6px;--art-progress-color:#fff3;--art-hover-color:#fff3;--art-loaded-color:#fff3;--art-state-size:80px;--art-state-opacity:.8;--art-bottom-height:100px;--art-bottom-offset:20px;--art-bottom-gap:5px;--art-highlight-width:8px;--art-highlight-color:#ffffff80;--art-control-height:46px;--art-control-opacity:.75;--art-control-icon-size:36px;--art-control-icon-scale:1.1;--art-volume-height:120px;--art-volume-handle-size:14px;--art-lock-size:36px;--art-indicator-scale:0;--art-indicator-size:16px;--art-fullscreen-web-index:9999;--art-settings-icon-size:24px;--art-settings-max-height:300px;--art-selector-max-height:300px;--art-contextmenus-min-width:250px;--art-subtitle-font-size:20px;--art-subtitle-gap:5px;--art-subtitle-bottom:15px;--art-subtitle-border:#000;--art-widget-background:#000000d9;--art-tip-background:#00000080;--art-scrollbar-size:4px;--art-scrollbar-background:#ffffff40;--art-scrollbar-background-hover:#ffffff80;--art-mini-progress-height:2px}.art-bg-cover{background-position:50%;background-repeat:no-repeat;background-size:cover}.art-bottom-gradient{background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x}.art-backdrop-filter{-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.art-video-player{width:100%;height:100%;zoom:1;text-align:left;direction:ltr;user-select:none;box-sizing:border-box;color:var(--art-font-color);background-color:var(--art-background-color);text-shadow:0 0 2px var(--art-text-shadow-color);-webkit-tap-highlight-color:#0000;-ms-touch-action:manipulation;touch-action:manipulation;-ms-high-contrast-adjust:none;outline:0;margin:0 auto;padding:0;font-family:PingFang SC,Helvetica Neue,Microsoft YaHei,Roboto,Arial,sans-serif;font-size:14px;line-height:1.3;position:relative}.art-video-player *,.art-video-player :before,.art-video-player :after{box-sizing:border-box}.art-video-player ::-webkit-scrollbar{width:var(--art-scrollbar-size);height:var(--art-scrollbar-size)}.art-video-player ::-webkit-scrollbar-thumb{background-color:var(--art-scrollbar-background)}.art-video-player ::-webkit-scrollbar-thumb:hover{background-color:var(--art-scrollbar-background-hover)}.art-video-player img{max-width:100%;vertical-align:top}.art-video-player svg{fill:var(--art-font-color)}.art-video-player a{color:var(--art-font-color);text-decoration:none}.art-icon{justify-content:center;align-items:center;line-height:1;display:flex}.art-video-player.art-backdrop .art-contextmenus,.art-video-player.art-backdrop .art-info,.art-video-player.art-backdrop .art-settings,.art-video-player.art-backdrop .art-layer-auto-playback,.art-video-player.art-backdrop .art-selector-list,.art-video-player.art-backdrop .art-volume-inner{-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-video{z-index:10;width:100%;height:100%;cursor:pointer;position:absolute;inset:0}.art-poster{z-index:11;width:100%;height:100%;pointer-events:none;background-position:50%;background-repeat:no-repeat;background-size:cover;position:absolute;inset:0}.art-video-player .art-subtitle{z-index:20;width:100%;text-align:center;pointer-events:none;justify-content:center;align-items:center;gap:var(--art-subtitle-gap);bottom:var(--art-subtitle-bottom);font-size:var(--art-subtitle-font-size);transition:bottom var(--art-transition-duration)ease;text-shadow:var(--art-subtitle-border)1px 0 1px,var(--art-subtitle-border)0 1px 1px,var(--art-subtitle-border)-1px 0 1px,var(--art-subtitle-border)0 -1px 1px,var(--art-subtitle-border)1px 1px 1px,var(--art-subtitle-border)-1px -1px 1px,var(--art-subtitle-border)1px -1px 1px,var(--art-subtitle-border)-1px 1px 1px;flex-direction:column;padding:0 5%;display:none;position:absolute}.art-video-player.art-subtitle-show .art-subtitle{display:flex}.art-video-player.art-control-show .art-subtitle{bottom:calc(var(--art-control-height) + var(--art-subtitle-bottom))}.art-danmuku{z-index:30;width:100%;height:100%;pointer-events:none;position:absolute;inset:0;overflow:hidden}.art-video-player .art-layers{z-index:40;width:100%;height:100%;pointer-events:none;display:none;position:absolute;inset:0}.art-video-player .art-layers .art-layer{pointer-events:auto}.art-video-player.art-layer-show .art-layers{display:flex}.art-video-player .art-mask{z-index:50;width:100%;height:100%;pointer-events:none;justify-content:center;align-items:center;display:flex;position:absolute;inset:0}.art-video-player .art-mask .art-state{opacity:0;width:var(--art-state-size);height:var(--art-state-size);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;display:flex;transform:scale(2)}.art-video-player.art-mask-show .art-state{cursor:pointer;pointer-events:auto;opacity:var(--art-state-opacity);transform:scale(1)}.art-video-player.art-loading-show .art-state{display:none}.art-video-player .art-loading{z-index:70;width:100%;height:100%;pointer-events:none;justify-content:center;align-items:center;display:none;position:absolute;inset:0}.art-video-player.art-loading-show .art-loading{display:flex}.art-video-player .art-bottom{z-index:60;width:100%;height:100%;opacity:0;pointer-events:none;padding:0 var(--art-padding);transition:all var(--art-transition-duration)ease;background-size:100% var(--art-bottom-height);background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x;flex-direction:column;justify-content:flex-end;display:flex;position:absolute;inset:0;overflow:hidden}.art-video-player .art-bottom .art-controls,.art-video-player .art-bottom .art-progress{transform:translateY(var(--art-bottom-offset));transition:transform var(--art-transition-duration)ease}.art-video-player.art-control-show .art-bottom,.art-video-player.art-hover .art-bottom{opacity:1}.art-video-player.art-control-show .art-bottom .art-controls,.art-video-player.art-hover .art-bottom .art-controls,.art-video-player.art-control-show .art-bottom .art-progress,.art-video-player.art-hover .art-bottom .art-progress{transform:translateY(0)}.art-bottom .art-progress{z-index:0;pointer-events:auto;padding-bottom:var(--art-bottom-gap);position:relative}.art-bottom .art-progress .art-control-progress{cursor:pointer;height:var(--art-progress-height);justify-content:center;align-items:center;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner{height:50%;width:100%;transition:height var(--art-transition-duration)ease;background-color:var(--art-progress-color);align-items:center;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-hover{z-index:0;width:100%;height:100%;width:0%;background-color:var(--art-hover-color);display:none;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded{z-index:10;width:100%;height:100%;width:0%;background-color:var(--art-loaded-color);position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played{z-index:20;width:100%;height:100%;width:0%;background-color:var(--art-theme);position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight{z-index:30;width:100%;height:100%;pointer-events:none;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span{z-index:0;width:100%;height:100%;pointer-events:auto;transform:translateX(calc(var(--art-highlight-width)/-2));background-color:var(--art-highlight-color);position:absolute;inset:0 auto 0 0;width:var(--art-highlight-width)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{z-index:40;width:var(--art-indicator-size);height:var(--art-indicator-size);transform:scale(var(--art-indicator-scale));margin-left:calc(var(--art-indicator-size)/-2);transition:transform var(--art-transition-duration)ease;border-radius:50%;justify-content:center;align-items:center;display:flex;position:absolute;left:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon{width:100%;height:100%;pointer-events:none}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover{transform:scale(1.2)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:active{transform:scale(1)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip{z-index:50;border-radius:var(--art-border-radius);white-space:nowrap;background-color:var(--art-tip-background);padding:3px 5px;font-size:12px;line-height:1;display:none;position:absolute;top:-25px;left:0}.art-bottom .art-progress .art-control-progress:hover .art-control-progress-inner{height:100%}.art-bottom .art-progress .art-control-thumbnails{bottom:calc(var(--art-bottom-gap) + 10px);border-radius:var(--art-border-radius);pointer-events:none;background-color:var(--art-widget-background);display:none;position:absolute;left:0;box-shadow:0 1px 3px #0003,0 1px 2px -1px #0003}.art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{transform:scale(1)}.art-controls{z-index:10;pointer-events:auto;height:var(--art-control-height);justify-content:space-between;align-items:center;display:flex;position:relative}.art-controls .art-controls-left,.art-controls .art-controls-right{height:100%;display:flex}.art-controls .art-controls-center{height:100%;flex:1;justify-content:center;align-items:center;padding:0 10px;display:none}.art-controls .art-controls-right{justify-content:flex-end}.art-controls .art-control{cursor:pointer;white-space:nowrap;opacity:var(--art-control-opacity);min-height:var(--art-control-height);min-width:var(--art-control-height);transition:opacity var(--art-transition-duration)ease;flex-shrink:0;justify-content:center;align-items:center;display:flex}.art-controls .art-control .art-icon{height:var(--art-control-icon-size);width:var(--art-control-icon-size);transform:scale(var(--art-control-icon-scale));transition:transform var(--art-transition-duration)ease}.art-controls .art-control .art-icon:active{transform:scale(calc(var(--art-control-icon-scale)*.8))}.art-controls .art-control:hover{opacity:1}.art-control-volume{position:relative}.art-control-volume .art-volume-panel{text-align:center;cursor:default;opacity:0;pointer-events:none;left:0;right:0;bottom:var(--art-control-height);width:var(--art-control-height);height:var(--art-volume-height);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;padding:0 5px;font-size:12px;display:flex;position:absolute;transform:translateY(10px)}.art-control-volume .art-volume-panel .art-volume-inner{height:100%;width:100%;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);flex-direction:column;align-items:center;gap:10px;padding:10px 0 12px;display:flex}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider{width:100%;cursor:pointer;flex:1;justify-content:center;display:flex;position:relative}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle{width:2px;border-radius:var(--art-border-radius);background-color:#ffffff40;justify-content:center;display:flex;position:relative;overflow:hidden}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle .art-volume-loaded{z-index:0;width:100%;height:100%;background-color:var(--art-theme);position:absolute;inset:0}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-indicator{width:var(--art-volume-handle-size);height:var(--art-volume-handle-size);margin-top:calc(var(--art-volume-handle-size)/-2);background-color:var(--art-theme);transition:transform var(--art-transition-duration)ease;border-radius:100%;flex-shrink:0;position:absolute;transform:scale(1)}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider:active .art-volume-indicator{transform:scale(.9)}.art-control-volume:hover .art-volume-panel{opacity:1;pointer-events:auto;transform:translateY(0)}.art-video-player .art-notice{z-index:80;width:100%;height:100%;height:auto;padding:var(--art-padding);pointer-events:none;display:none;position:absolute;inset:0 0 auto}.art-video-player .art-notice .art-notice-inner{border-radius:var(--art-border-radius);background-color:var(--art-tip-background);padding:5px;line-height:1;display:inline-flex}.art-video-player.art-notice-show .art-notice{display:flex}.art-video-player .art-contextmenus{z-index:120;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);min-width:var(--art-contextmenus-min-width);flex-direction:column;padding:5px 0;font-size:12px;display:none;position:absolute}.art-video-player .art-contextmenus .art-contextmenu{cursor:pointer;border-bottom:1px solid #ffffff1a;padding:10px 15px;display:flex}.art-video-player .art-contextmenus .art-contextmenu span{padding:0 8px}.art-video-player .art-contextmenus .art-contextmenu span:hover,.art-video-player .art-contextmenus .art-contextmenu span.art-current{color:var(--art-theme)}.art-video-player .art-contextmenus .art-contextmenu:hover{background-color:#ffffff1a}.art-video-player .art-contextmenus .art-contextmenu:last-child{border-bottom:none}.art-video-player.art-contextmenu-show .art-contextmenus{display:flex}.art-video-player .art-settings{z-index:90;border-radius:var(--art-border-radius);transform-origin:100% 100%;max-height:var(--art-settings-max-height);left:auto;right:var(--art-padding);bottom:var(--art-control-height);transform:scale(var(--art-settings-scale));transition:all var(--art-transition-duration)ease;background-color:var(--art-widget-background);flex-direction:column;display:none;position:absolute;overflow:hidden auto}.art-video-player .art-settings .art-setting-panel{flex-direction:column;display:none}.art-video-player .art-settings .art-setting-panel.art-current{display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item{cursor:pointer;transition:background-color var(--art-transition-duration)ease;justify-content:space-between;align-items:center;padding:0 5px;display:flex;overflow:hidden}.art-video-player .art-settings .art-setting-panel .art-setting-item:hover{background-color:#ffffff1a}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current{color:var(--art-theme)}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check{visibility:hidden;height:15px}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check{visibility:visible}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left{justify-content:center;align-items:center;gap:5px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon{height:var(--art-settings-icon-size);width:var(--art-settings-icon-size);justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right{justify-content:center;align-items:center;gap:5px;font-size:12px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip{white-space:nowrap;color:#ffffff80}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon{min-width:32px;height:24px;justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range{height:3px;width:80px;appearance:none;background-color:#fff3;outline:none}.art-video-player .art-settings .art-setting-panel .art-setting-item-back{border-bottom:1px solid #ffffff1a}.art-video-player.art-setting-show .art-settings{display:flex}.art-video-player .art-info{left:var(--art-padding);top:var(--art-padding);z-index:100;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);padding:10px;font-size:12px;display:none;position:absolute}.art-video-player .art-info .art-info-panel{flex-direction:column;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item{align-items:center;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item .art-info-title{width:100px;text-align:right}.art-video-player .art-info .art-info-panel .art-info-item .art-info-content{width:250px;text-overflow:ellipsis;white-space:nowrap;user-select:all;overflow:hidden}.art-video-player .art-info .art-info-close{cursor:pointer;position:absolute;top:5px;right:5px}.art-video-player.art-info-show .art-info{display:flex}.art-hide-cursor *{cursor:none!important}.art-video-player[data-aspect-ratio]{overflow:hidden}.art-video-player[data-aspect-ratio] .art-video{object-fit:fill;box-sizing:content-box}.art-fullscreen{--art-control-height:60px;--art-control-icon-scale:1.3}.art-fullscreen-web{--art-control-height:60px;--art-control-icon-scale:1.3;z-index:var(--art-fullscreen-web-index);width:100%;height:100%;position:fixed;inset:0}.art-mini-popup{z-index:9999;width:320px;height:180px;border-radius:var(--art-border-radius);cursor:move;user-select:none;background:#000;transition:opacity .2s;position:fixed;overflow:hidden;box-shadow:0 0 5px #00000080}.art-mini-popup svg{fill:#fff}.art-mini-popup .art-video{pointer-events:none}.art-mini-popup .art-mini-close{z-index:20;cursor:pointer;opacity:0;transition:opacity .2s;position:absolute;top:10px;right:10px}.art-mini-popup .art-mini-state{z-index:30;width:100%;height:100%;pointer-events:none;opacity:0;background-color:#00000040;justify-content:center;align-items:center;transition:opacity .2s;display:flex;position:absolute;inset:0}.art-mini-popup .art-mini-state .art-icon{opacity:.75;cursor:pointer;pointer-events:auto;transition:transform .2s;transform:scale(3)}.art-mini-popup .art-mini-state .art-icon:active{transform:scale(2.5)}.art-mini-popup.art-mini-droging{opacity:.9}.art-mini-popup:hover .art-mini-close,.art-mini-popup:hover .art-mini-state{opacity:1}.art-video-player[data-flip=horizontal] .art-video{transform:scaleX(-1)}.art-video-player[data-flip=vertical] .art-video{transform:scaleY(-1)}.art-video-player .art-layer-lock{height:var(--art-lock-size);width:var(--art-lock-size);top:50%;left:var(--art-padding);background-color:var(--art-tip-background);border-radius:50%;justify-content:center;align-items:center;display:none;position:absolute;transform:translateY(-50%)}.art-video-player .art-layer-auto-playback{border-radius:var(--art-border-radius);left:var(--art-padding);bottom:calc(var(--art-control-height) + var(--art-bottom-gap) + 10px);background-color:var(--art-widget-background);align-items:center;gap:10px;padding:10px;line-height:1;display:none;position:absolute}.art-video-player .art-layer-auto-playback .art-auto-playback-close{cursor:pointer;justify-content:center;align-items:center;display:flex}.art-video-player .art-layer-auto-playback .art-auto-playback-close svg{width:15px;height:15px;fill:var(--art-theme)}.art-video-player .art-layer-auto-playback .art-auto-playback-jump{color:var(--art-theme);cursor:pointer}.art-video-player.art-lock .art-subtitle{bottom:var(--art-subtitle-bottom)!important}.art-video-player.art-mini-progress-bar .art-bottom,.art-video-player.art-lock .art-bottom{opacity:1;background-image:none;padding:0}.art-video-player.art-mini-progress-bar .art-bottom .art-controls,.art-video-player.art-lock .art-bottom .art-controls,.art-video-player.art-mini-progress-bar .art-bottom .art-progress,.art-video-player.art-lock .art-bottom .art-progress{transform:translateY(calc(var(--art-control-height) + var(--art-bottom-gap) + var(--art-progress-height)/4))}.art-video-player.art-mini-progress-bar .art-bottom .art-progress-indicator,.art-video-player.art-lock .art-bottom .art-progress-indicator{display:none!important}.art-video-player.art-control-show .art-layer-lock{display:flex}.art-control-selector{position:relative}.art-control-selector .art-selector-list{text-align:center;border-radius:var(--art-border-radius);opacity:0;pointer-events:none;bottom:var(--art-control-height);max-height:var(--art-selector-max-height);background-color:var(--art-widget-background);transition:all var(--art-transition-duration)ease;flex-direction:column;align-items:center;display:flex;position:absolute;overflow:hidden auto;transform:translateY(10px)}.art-control-selector .art-selector-list .art-selector-item{width:100%;flex-shrink:0;justify-content:center;align-items:center;padding:10px 15px;line-height:1;display:flex}.art-control-selector .art-selector-list .art-selector-item:hover{background-color:#ffffff1a}.art-control-selector .art-selector-list .art-selector-item:hover,.art-control-selector .art-selector-list .art-selector-item.art-current{color:var(--art-theme)}.art-control-selector:hover .art-selector-list{opacity:1;pointer-events:auto;transform:translateY(0)}[class*=hint--]{font-style:normal;display:inline-block;position:relative}[class*=hint--]:before,[class*=hint--]:after{visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:all .3s;position:absolute;transform:translate(0,0)}[class*=hint--]:hover:before,[class*=hint--]:hover:after{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:"";z-index:1000001;background:0 0;border:6px solid #0000;position:absolute}[class*=hint--]:after{color:#fff;white-space:nowrap;background:#000;padding:8px 10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:12px}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=""]:before,[aria-label=""]:after,[data-hint=""]:before,[data-hint=""]:after{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#000}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#000}.hint--left:before{border-left-color:#000}.hint--right:before{border-right-color:#000}.hint--top:before{margin-bottom:-11px}.hint--top:before,.hint--top:after{bottom:100%;left:50%}.hint--top:before{left:calc(50% - 6px)}.hint--top:after{transform:translate(-50%)}.hint--top:hover:before{transform:translateY(-8px)}.hint--top:hover:after{transform:translate(-50%)translateY(-8px)}.hint--bottom:before{margin-top:-11px}.hint--bottom:before,.hint--bottom:after{top:100%;left:50%}.hint--bottom:before{left:calc(50% - 6px)}.hint--bottom:after{transform:translate(-50%)}.hint--bottom:hover:before{transform:translateY(8px)}.hint--bottom:hover:after{transform:translate(-50%)translateY(8px)}.hint--right:before{margin-bottom:-6px;margin-left:-11px}.hint--right:after{margin-bottom:-14px}.hint--right:before,.hint--right:after{bottom:50%;left:100%}.hint--right:hover:before,.hint--right:hover:after{transform:translate(8px)}.hint--left:before{margin-bottom:-6px;margin-right:-11px}.hint--left:after{margin-bottom:-14px}.hint--left:before,.hint--left:after{bottom:50%;right:100%}.hint--left:hover:before,.hint--left:hover:after{transform:translate(-8px)}.hint--top-left:before{margin-bottom:-11px}.hint--top-left:before,.hint--top-left:after{bottom:100%;left:50%}.hint--top-left:before{left:calc(50% - 6px)}.hint--top-left:after{margin-left:12px;transform:translate(-100%)}.hint--top-left:hover:before{transform:translateY(-8px)}.hint--top-left:hover:after{transform:translate(-100%)translateY(-8px)}.hint--top-right:before{margin-bottom:-11px}.hint--top-right:before,.hint--top-right:after{bottom:100%;left:50%}.hint--top-right:before{left:calc(50% - 6px)}.hint--top-right:after{margin-left:-12px;transform:translate(0)}.hint--top-right:hover:before,.hint--top-right:hover:after{transform:translateY(-8px)}.hint--bottom-left:before{margin-top:-11px}.hint--bottom-left:before,.hint--bottom-left:after{top:100%;left:50%}.hint--bottom-left:before{left:calc(50% - 6px)}.hint--bottom-left:after{margin-left:12px;transform:translate(-100%)}.hint--bottom-left:hover:before{transform:translateY(8px)}.hint--bottom-left:hover:after{transform:translate(-100%)translateY(8px)}.hint--bottom-right:before{margin-top:-11px}.hint--bottom-right:before,.hint--bottom-right:after{top:100%;left:50%}.hint--bottom-right:before{left:calc(50% - 6px)}.hint--bottom-right:after{margin-left:-12px;transform:translate(0)}.hint--bottom-right:hover:before,.hint--bottom-right:hover:after{transform:translateY(8px)}.hint--small:after,.hint--medium:after,.hint--large:after{white-space:normal;word-wrap:break-word;line-height:1.4em}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}[class*=hint--]:after{text-shadow:0 -1px #000;box-shadow:4px 4px 8px #0000004d}.hint--error:after{text-shadow:0 -1px #592726;background-color:#b34e4d}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{text-shadow:0 -1px #6c5328;background-color:#c09854}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{text-shadow:0 -1px #1a3c4d;background-color:#3986ac}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{text-shadow:0 -1px #1a321a;background-color:#458746}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{transform:translateY(-8px)}.hint--always.hint--top:after{transform:translate(-50%)translateY(-8px)}.hint--always.hint--top-left:before{transform:translateY(-8px)}.hint--always.hint--top-left:after{transform:translate(-100%)translateY(-8px)}.hint--always.hint--top-right:before,.hint--always.hint--top-right:after{transform:translateY(-8px)}.hint--always.hint--bottom:before{transform:translateY(8px)}.hint--always.hint--bottom:after{transform:translate(-50%)translateY(8px)}.hint--always.hint--bottom-left:before{transform:translateY(8px)}.hint--always.hint--bottom-left:after{transform:translate(-100%)translateY(8px)}.hint--always.hint--bottom-right:before,.hint--always.hint--bottom-right:after{transform:translateY(8px)}.hint--always.hint--left:before,.hint--always.hint--left:after{transform:translate(-8px)}.hint--always.hint--right:before,.hint--always.hint--right:after{transform:translate(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:before,.hint--no-animate:after{transition-duration:0s}.hint--bounce:before,.hint--bounce:after{-webkit-transition:opacity .3s,visibility .3s,-webkit-transform .3s cubic-bezier(.71,1.7,.77,1.24);-moz-transition:opacity .3s,visibility .3s,-moz-transform .3s cubic-bezier(.71,1.7,.77,1.24);transition:opacity .3s,visibility .3s,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.hint--no-shadow:before,.hint--no-shadow:after{text-shadow:initial;box-shadow:initial}.hint--no-arrow:before{display:none}.art-video-player.art-mobile{--art-bottom-gap:10px;--art-control-height:38px;--art-control-icon-scale:1;--art-state-size:60px;--art-settings-max-height:180px;--art-selector-max-height:180px;--art-indicator-scale:1;--art-control-opacity:1}.art-video-player.art-mobile .art-controls-left{margin-left:calc(var(--art-padding)/-1)}.art-video-player.art-mobile .art-controls-right{margin-right:calc(var(--art-padding)/-1)}'
    }
    , {}],
    bAWi2: [function(t, e, r) {
        e.exports = function() {
            "use strict";
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(e)
            }
            var e = Object.prototype.toString
              , r = function(r) {
                if (void 0 === r)
                    return "undefined";
                if (null === r)
                    return "null";
                var o = t(r);
                if ("boolean" === o)
                    return "boolean";
                if ("string" === o)
                    return "string";
                if ("number" === o)
                    return "number";
                if ("symbol" === o)
                    return "symbol";
                if ("function" === o)
                    return function(t) {
                        return "GeneratorFunction" === a(t)
                    }(r) ? "generatorfunction" : "function";
                if (function(t) {
                    return Array.isArray ? Array.isArray(t) : t instanceof Array
                }(r))
                    return "array";
                if (function(t) {
                    return !(!t.constructor || "function" != typeof t.constructor.isBuffer) && t.constructor.isBuffer(t)
                }(r))
                    return "buffer";
                if (function(t) {
                    try {
                        if ("number" == typeof t.length && "function" == typeof t.callee)
                            return !0
                    } catch (t) {
                        if (-1 !== t.message.indexOf("callee"))
                            return !0
                    }
                    return !1
                }(r))
                    return "arguments";
                if (function(t) {
                    return t instanceof Date || "function" == typeof t.toDateString && "function" == typeof t.getDate && "function" == typeof t.setDate
                }(r))
                    return "date";
                if (function(t) {
                    return t instanceof Error || "string" == typeof t.message && t.constructor && "number" == typeof t.constructor.stackTraceLimit
                }(r))
                    return "error";
                if (function(t) {
                    return t instanceof RegExp || "string" == typeof t.flags && "boolean" == typeof t.ignoreCase && "boolean" == typeof t.multiline && "boolean" == typeof t.global
                }(r))
                    return "regexp";
                switch (a(r)) {
                case "Symbol":
                    return "symbol";
                case "Promise":
                    return "promise";
                case "WeakMap":
                    return "weakmap";
                case "WeakSet":
                    return "weakset";
                case "Map":
                    return "map";
                case "Set":
                    return "set";
                case "Int8Array":
                    return "int8array";
                case "Uint8Array":
                    return "uint8array";
                case "Uint8ClampedArray":
                    return "uint8clampedarray";
                case "Int16Array":
                    return "int16array";
                case "Uint16Array":
                    return "uint16array";
                case "Int32Array":
                    return "int32array";
                case "Uint32Array":
                    return "uint32array";
                case "Float32Array":
                    return "float32array";
                case "Float64Array":
                    return "float64array"
                }
                if (function(t) {
                    return "function" == typeof t.throw && "function" == typeof t.return && "function" == typeof t.next
                }(r))
                    return "generator";
                switch (o = e.call(r)) {
                case "[object Object]":
                    return "object";
                case "[object Map Iterator]":
                    return "mapiterator";
                case "[object Set Iterator]":
                    return "setiterator";
                case "[object String Iterator]":
                    return "stringiterator";
                case "[object Array Iterator]":
                    return "arrayiterator"
                }
                return o.slice(8, -1).toLowerCase().replace(/\s/g, "")
            };
            function a(t) {
                return t.constructor ? t.constructor.name : null
            }
            function o(t, e) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ["option"];
                return n(t, e, a),
                i(t, e, a),
                function(t, e, a) {
                    var s = r(e)
                      , l = r(t);
                    if ("object" === s) {
                        if ("object" !== l)
                            throw new Error("[Type Error]: '".concat(a.join("."), "' require 'object' type, but got '").concat(l, "'"));
                        Object.keys(e).forEach((function(r) {
                            var s = t[r]
                              , l = e[r]
                              , c = a.slice();
                            c.push(r),
                            n(s, l, c),
                            i(s, l, c),
                            o(s, l, c)
                        }
                        ))
                    }
                    if ("array" === s) {
                        if ("array" !== l)
                            throw new Error("[Type Error]: '".concat(a.join("."), "' require 'array' type, but got '").concat(l, "'"));
                        t.forEach((function(r, s) {
                            var l = t[s]
                              , c = e[s] || e[0]
                              , u = a.slice();
                            u.push(s),
                            n(l, c, u),
                            i(l, c, u),
                            o(l, c, u)
                        }
                        ))
                    }
                }(t, e, a),
                t
            }
            function n(t, e, a) {
                if ("string" === r(e)) {
                    var o = r(t);
                    if ("?" === e[0] && (e = e.slice(1) + "|undefined"),
                    !(-1 < e.indexOf("|") ? e.split("|").map((function(t) {
                        return t.toLowerCase().trim()
                    }
                    )).filter(Boolean).some((function(t) {
                        return o === t
                    }
                    )) : e.toLowerCase().trim() === o))
                        throw new Error("[Type Error]: '".concat(a.join("."), "' require '").concat(e, "' type, but got '").concat(o, "'"))
                }
            }
            function i(t, e, a) {
                if ("function" === r(e)) {
                    var o = e(t, r(t), a);
                    if (!0 !== o) {
                        var n = r(o);
                        throw "string" === n ? new Error(o) : "error" === n ? o : new Error("[Validator Error]: The scheme for '".concat(a.join("."), "' validator require return true, but got '").concat(o, "'"))
                    }
                }
            }
            return o.kindOf = r,
            o
        }()
    }
    , {}],
    "2bGVu": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        r.default = class {
            on(t, e, r) {
                const a = this.e || (this.e = {});
                return (a[t] || (a[t] = [])).push({
                    fn: e,
                    ctx: r
                }),
                this
            }
            once(t, e, r) {
                const a = this;
                function o(...n) {
                    a.off(t, o),
                    e.apply(r, n)
                }
                return o._ = e,
                this.on(t, o, r)
            }
            emit(t, ...e) {
                const r = ((this.e || (this.e = {}))[t] || []).slice();
                for (let t = 0; t < r.length; t += 1)
                    r[t].fn.apply(r[t].ctx, e);
                return this
            }
            off(t, e) {
                const r = this.e || (this.e = {})
                  , a = r[t]
                  , o = [];
                if (a && e)
                    for (let t = 0, r = a.length; t < r; t += 1)
                        a[t].fn !== e && a[t].fn._ !== e && o.push(a[t]);
                return o.length ? r[t] = o : delete r[t],
                this
            }
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    guZOB: [function(t, e, r) {
        r.interopDefault = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ,
        r.defineInteropFlag = function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        r.exportAll = function(t, e) {
            return Object.keys(t).forEach((function(r) {
                "default" === r || "__esModule" === r || e.hasOwnProperty(r) || Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            }
            )),
            e
        }
        ,
        r.export = function(t, e, r) {
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }
    }
    , {}],
    h3rH9: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./dom");
        a.exportAll(o, r);
        var n = t("./error");
        a.exportAll(n, r);
        var i = t("./subtitle");
        a.exportAll(i, r);
        var s = t("./file");
        a.exportAll(s, r);
        var l = t("./property");
        a.exportAll(l, r);
        var c = t("./time");
        a.exportAll(c, r);
        var u = t("./format");
        a.exportAll(u, r);
        var p = t("./compatibility");
        a.exportAll(p, r)
    }
    , {
        "./dom": "XgAQE",
        "./error": "2nFlF",
        "./subtitle": "yqFoT",
        "./file": "1VRQn",
        "./property": "3weX2",
        "./time": "7kBIx",
        "./format": "13atT",
        "./compatibility": "luXC1",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    XgAQE: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r),
        a.export(r, "query", (()=>n)),
        a.export(r, "queryAll", (()=>i)),
        a.export(r, "addClass", (()=>s)),
        a.export(r, "removeClass", (()=>l)),
        a.export(r, "hasClass", (()=>c)),
        a.export(r, "append", (()=>u)),
        a.export(r, "remove", (()=>p)),
        a.export(r, "setStyle", (()=>d)),
        a.export(r, "setStyles", (()=>f)),
        a.export(r, "getStyle", (()=>h)),
        a.export(r, "sublings", (()=>m)),
        a.export(r, "inverseClass", (()=>g)),
        a.export(r, "tooltip", (()=>v)),
        a.export(r, "isInViewport", (()=>y)),
        a.export(r, "includeFromEvent", (()=>b)),
        a.export(r, "replaceElement", (()=>x)),
        a.export(r, "createElement", (()=>w)),
        a.export(r, "getIcon", (()=>j)),
        a.export(r, "setStyleText", (()=>k));
        var o = t("./compatibility");
        function n(t, e=document) {
            return e.querySelector(t)
        }
        function i(t, e=document) {
            return Array.from(e.querySelectorAll(t))
        }
        function s(t, e) {
            return t.classList.add(e)
        }
        function l(t, e) {
            return t.classList.remove(e)
        }
        function c(t, e) {
            return t.classList.contains(e)
        }
        function u(t, e) {
            return e instanceof Element ? t.appendChild(e) : t.insertAdjacentHTML("beforeend", String(e)),
            t.lastElementChild || t.lastChild
        }
        function p(t) {
            return t.parentNode.removeChild(t)
        }
        function d(t, e, r) {
            return t.style[e] = r,
            t
        }
        function f(t, e) {
            for (const r in e)
                d(t, r, e[r]);
            return t
        }
        function h(t, e, r=!0) {
            const a = window.getComputedStyle(t, null).getPropertyValue(e);
            return r ? parseFloat(a) : a
        }
        function m(t) {
            return Array.from(t.parentElement.children).filter((e=>e !== t))
        }
        function g(t, e) {
            m(t).forEach((t=>l(t, e))),
            s(t, e)
        }
        function v(t, e, r="top") {
            o.isMobile || (t.setAttribute("aria-label", e),
            s(t, "hint--rounded"),
            s(t, `hint--${r}`))
        }
        function y(t, e=0) {
            const r = t.getBoundingClientRect()
              , a = window.innerHeight || document.documentElement.clientHeight
              , o = window.innerWidth || document.documentElement.clientWidth
              , n = r.top - e <= a && r.top + r.height + e >= 0
              , i = r.left - e <= o + e && r.left + r.width + e >= 0;
            return n && i
        }
        function b(t, e) {
            return t.composedPath && t.composedPath().indexOf(e) > -1
        }
        function x(t, e) {
            return e.parentNode.replaceChild(t, e),
            t
        }
        function w(t) {
            return document.createElement(t)
        }
        function j(t="", e="") {
            const r = w("i");
            return s(r, "art-icon"),
            s(r, `art-icon-${t}`),
            u(r, e),
            r
        }
        function k(t, e) {
            const r = document.getElementById(t);
            if (r)
                r.textContent = e;
            else {
                const r = w("style");
                r.id = t,
                r.textContent = e,
                document.head.appendChild(r)
            }
        }
    }
    , {
        "./compatibility": "luXC1",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    luXC1: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r),
        a.export(r, "userAgent", (()=>o)),
        a.export(r, "isSafari", (()=>n)),
        a.export(r, "isWechat", (()=>i)),
        a.export(r, "isIE", (()=>s)),
        a.export(r, "isAndroid", (()=>l)),
        a.export(r, "isIOS", (()=>c)),
        a.export(r, "isIOS13", (()=>u)),
        a.export(r, "isMobile", (()=>p)),
        a.export(r, "isBrowser", (()=>d));
        const o = "undefined" != typeof navigator ? navigator.userAgent : ""
          , n = /^((?!chrome|android).)*safari/i.test(o)
          , i = /MicroMessenger/i.test(o)
          , s = /MSIE|Trident/i.test(o)
          , l = /android/i.test(o)
          , c = /iPad|iPhone|iPod/i.test(o) && !window.MSStream
          , u = c || o.includes("Macintosh") && navigator.maxTouchPoints >= 1
          , p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o) || u
          , d = "undefined" != typeof window
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "2nFlF": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r),
        a.export(r, "ArtPlayerError", (()=>o)),
        a.export(r, "errorHandle", (()=>n));
        class o extends Error {
            constructor(t, e) {
                super(t),
                "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e || this.constructor),
                this.name = "ArtPlayerError"
            }
        }
        function n(t, e) {
            if (!t)
                throw new o(e);
            return t
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    yqFoT: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        function o(t) {
            return "WEBVTT \r\n\r\n".concat((e = t,
            e.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, ((t,e,r)=>{
                let a = r.slice(0, 3);
                return 1 === r.length && (a = r + "00"),
                2 === r.length && (a = r + "0"),
                `${e},${a}`
            }
            ))).replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/{[\s\S]*?}/g, "").concat("\r\n\r\n"));
            var e
        }
        function n(t) {
            return URL.createObjectURL(new Blob([t],{
                type: "text/vtt"
            }))
        }
        function i(t) {
            const e = new RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$","i");
            function r(t="") {
                return t.split(/[:.]/).map(((t,e,r)=>{
                    if (e === r.length - 1) {
                        if (1 === t.length)
                            return `.${t}00`;
                        if (2 === t.length)
                            return `.${t}0`
                    } else if (1 === t.length)
                        return (0 === e ? "0" : ":0") + t;
                    return 0 === e ? t : e === r.length - 1 ? `.${t}` : `:${t}`
                }
                )).join("")
            }
            return `WEBVTT\n\n${t.split(/\r?\n/).map((t=>{
                const a = t.match(e);
                return a ? {
                    start: r(a[1].trim()),
                    end: r(a[2].trim()),
                    text: a[5].replace(/{[\s\S]*?}/g, "").replace(/(\\N)/g, "\n").trim().split(/\r?\n/).map((t=>t.trim())).join("\n")
                } : null
            }
            )).filter((t=>t)).map(((t,e)=>t ? `${e + 1}\n${t.start} --\x3e ${t.end}\n${t.text}` : "")).filter((t=>t.trim())).join("\n\n")}`
        }
        a.defineInteropFlag(r),
        a.export(r, "srtToVtt", (()=>o)),
        a.export(r, "vttToBlob", (()=>n)),
        a.export(r, "assToVtt", (()=>i))
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "1VRQn": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        function o(t) {
            return t.includes("?") ? o(t.split("?")[0]) : t.includes("#") ? o(t.split("#")[0]) : t.trim().toLowerCase().split(".").pop()
        }
        function n(t, e) {
            const r = document.createElement("a");
            r.style.display = "none",
            r.href = t,
            r.download = e,
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r)
        }
        a.defineInteropFlag(r),
        a.export(r, "getExt", (()=>o)),
        a.export(r, "download", (()=>n))
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "3weX2": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r),
        a.export(r, "def", (()=>o)),
        a.export(r, "has", (()=>i)),
        a.export(r, "get", (()=>s)),
        a.export(r, "mergeDeep", (()=>l));
        const o = Object.defineProperty
          , {hasOwnProperty: n} = Object.prototype;
        function i(t, e) {
            return n.call(t, e)
        }
        function s(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }
        function l(...t) {
            const e = t=>t && "object" == typeof t && !Array.isArray(t);
            return t.reduce(((t,r)=>(Object.keys(r).forEach((a=>{
                const o = t[a]
                  , n = r[a];
                Array.isArray(o) && Array.isArray(n) ? t[a] = o.concat(...n) : e(o) && e(n) ? t[a] = l(o, n) : t[a] = n
            }
            )),
            t)), {})
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "7kBIx": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        function o(t=0) {
            return new Promise((e=>setTimeout(e, t)))
        }
        function n(t, e) {
            let r;
            return function(...a) {
                clearTimeout(r),
                r = setTimeout((()=>(r = null,
                t.apply(this, a))), e)
            }
        }
        function i(t, e) {
            let r = !1;
            return function(...a) {
                r || (t.apply(this, a),
                r = !0,
                setTimeout((function() {
                    r = !1
                }
                ), e))
            }
        }
        a.defineInteropFlag(r),
        a.export(r, "sleep", (()=>o)),
        a.export(r, "debounce", (()=>n)),
        a.export(r, "throttle", (()=>i))
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "13atT": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        function o(t, e, r) {
            return Math.max(Math.min(t, Math.max(e, r)), Math.min(e, r))
        }
        function n(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        function i(t) {
            return ["string", "number"].includes(typeof t)
        }
        function s(t) {
            if (!t)
                return "00:00";
            const e = Math.floor(t / 3600)
              , r = Math.floor((t - 3600 * e) / 60)
              , a = Math.floor(t - 3600 * e - 60 * r);
            return (e > 0 ? [e, r, a] : [r, a]).map((t=>t < 10 ? `0${t}` : String(t))).join(":")
        }
        function l(t) {
            return t.replace(/[&<>'"]/g, (t=>({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            }[t] || t)))
        }
        function c(t) {
            const e = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&#39;": "'",
                "&quot;": '"'
            }
              , r = new RegExp(`(${Object.keys(e).join("|")})`,"g");
            return t.replace(r, (t=>e[t] || t))
        }
        a.defineInteropFlag(r),
        a.export(r, "clamp", (()=>o)),
        a.export(r, "capitalize", (()=>n)),
        a.export(r, "isStringOrNumber", (()=>i)),
        a.export(r, "secondToTime", (()=>s)),
        a.export(r, "escape", (()=>l)),
        a.export(r, "unescape", (()=>c))
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    AdvwB: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r),
        a.export(r, "ComponentOption", (()=>d));
        var o = t("../utils");
        const n = "array"
          , i = "boolean"
          , s = "string"
          , l = "number"
          , c = "object"
          , u = "function";
        function p(t, e, r) {
            return (0,
            o.errorHandle)(e === s || e === l || t instanceof Element, `${r.join(".")} require '${s}' or 'Element' type`)
        }
        const d = {
            html: p,
            disable: `?${i}`,
            name: `?${s}`,
            index: `?${l}`,
            style: `?${c}`,
            click: `?${u}`,
            mounted: `?${u}`,
            tooltip: `?${s}|${l}`,
            width: `?${l}`,
            selector: `?${n}`,
            onSelect: `?${u}`,
            switch: `?${i}`,
            onSwitch: `?${u}`,
            range: `?${n}`,
            onRange: `?${u}`,
            onChange: `?${u}`
        };
        r.default = {
            id: s,
            container: p,
            url: s,
            poster: s,
            type: s,
            theme: s,
            lang: s,
            volume: l,
            isLive: i,
            muted: i,
            autoplay: i,
            autoSize: i,
            autoMini: i,
            loop: i,
            flip: i,
            playbackRate: i,
            aspectRatio: i,
            screenshot: i,
            setting: i,
            hotkey: i,
            pip: i,
            mutex: i,
            backdrop: i,
            fullscreen: i,
            fullscreenWeb: i,
            subtitleOffset: i,
            miniProgressBar: i,
            useSSR: i,
            playsInline: i,
            lock: i,
            fastForward: i,
            autoPlayback: i,
            autoOrientation: i,
            airplay: i,
            plugins: [u],
            layers: [d],
            contextmenu: [d],
            settings: [d],
            controls: [{
                ...d,
                position: (t,e,r)=>{
                    const a = ["top", "left", "right"];
                    return (0,
                    o.errorHandle)(a.includes(t), `${r.join(".")} only accept ${a.toString()} as parameters`)
                }
            }],
            quality: [{
                default: `?${i}`,
                html: s,
                url: s
            }],
            highlight: [{
                time: l,
                text: s
            }],
            thumbnails: {
                url: s,
                number: l,
                column: l,
                width: l,
                height: l
            },
            subtitle: {
                url: s,
                name: s,
                type: s,
                style: c,
                escape: i,
                encoding: s,
                onVttLoad: u
            },
            moreVideoAttr: c,
            i18n: c,
            icons: c,
            cssVar: c,
            customType: c
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "9Xmqu": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
        r.default = {
            propertys: ["audioTracks", "autoplay", "buffered", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"],
            methods: ["addTextTrack", "canPlayType", "load", "play", "pause"],
            events: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"],
            prototypes: ["width", "height", "videoWidth", "videoHeight", "poster", "webkitDecodedFrameCount", "webkitDroppedFrameCount", "playsInline", "webkitSupportsFullscreen", "webkitDisplayingFullscreen", "onenterpictureinpicture", "onleavepictureinpicture", "disablePictureInPicture", "cancelVideoFrameCallback", "requestVideoFrameCallback", "getVideoPlaybackQuality", "requestPictureInPicture", "webkitEnterFullScreen", "webkitEnterFullscreen", "webkitExitFullScreen", "webkitExitFullscreen"]
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "2gKYH": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("./utils");
        class o {
            constructor(t) {
                this.art = t;
                const {option: e, constructor: r} = t;
                e.container instanceof Element ? this.$container = e.container : (this.$container = (0,
                a.query)(e.container),
                (0,
                a.errorHandle)(this.$container, `No container element found by ${e.container}`));
                const o = this.$container.tagName.toLowerCase();
                (0,
                a.errorHandle)("div" === o, `Unsupported container element type, only support 'div' but got '${o}'`),
                (0,
                a.errorHandle)(r.instances.every((t=>t.template.$container !== this.$container)), "Cannot mount multiple instances on the same dom element"),
                this.query = this.query.bind(this),
                this.$container.dataset.artId = t.id,
                this.init()
            }
            static get html() {
                return '<div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show"><video class="art-video"><track default kind="metadata" src=""></track></video><div class="art-poster"></div><div class="art-subtitle"></div><div class="art-danmuku"></div><div class="art-layers"></div><div class="art-mask"><div class="art-state"></div></div><div class="art-bottom"><div class="art-progress"></div><div class="art-controls"><div class="art-controls-left"></div><div class="art-controls-center"></div><div class="art-controls-right"></div></div></div><div class="art-loading"></div><div class="art-notice"><div class="art-notice-inner"></div></div><div class="art-settings"></div><div class="art-info"><div class="art-info-panel"><div class="art-info-item"><div class="art-info-title">Player version:</div><div class="art-info-content">5.1.1</div></div><div class="art-info-item"><div class="art-info-title">Video url:</div><div class="art-info-content" data-video="src"></div></div><div class="art-info-item"><div class="art-info-title">Video volume:</div><div class="art-info-content" data-video="volume"></div></div><div class="art-info-item"><div class="art-info-title">Video time:</div><div class="art-info-content" data-video="currentTime"></div></div><div class="art-info-item"><div class="art-info-title">Video duration:</div><div class="art-info-content" data-video="duration"></div></div><div class="art-info-item"><div class="art-info-title">Video resolution:</div><div class="art-info-content"><span data-video="videoWidth"></span> x <span data-video="videoHeight"></span></div></div></div><div class="art-info-close">[x]</div></div><div class="art-contextmenus"></div></div>'
            }
            query(t) {
                return (0,
                a.query)(t, this.$container)
            }
            init() {
                const {option: t} = this.art;
                t.useSSR || (this.$container.innerHTML = o.html),
                this.$player = this.query(".art-video-player"),
                this.$video = this.query(".art-video"),
                this.$track = this.query("track"),
                this.$poster = this.query(".art-poster"),
                this.$subtitle = this.query(".art-subtitle"),
                this.$danmuku = this.query(".art-danmuku"),
                this.$bottom = this.query(".art-bottom"),
                this.$progress = this.query(".art-progress"),
                this.$controls = this.query(".art-controls"),
                this.$controlsLeft = this.query(".art-controls-left"),
                this.$controlsCenter = this.query(".art-controls-center"),
                this.$controlsRight = this.query(".art-controls-right"),
                this.$layer = this.query(".art-layers"),
                this.$loading = this.query(".art-loading"),
                this.$notice = this.query(".art-notice"),
                this.$noticeInner = this.query(".art-notice-inner"),
                this.$mask = this.query(".art-mask"),
                this.$state = this.query(".art-state"),
                this.$setting = this.query(".art-settings"),
                this.$info = this.query(".art-info"),
                this.$infoPanel = this.query(".art-info-panel"),
                this.$infoClose = this.query(".art-info-close"),
                this.$contextmenu = this.query(".art-contextmenus"),
                t.backdrop && (0,
                a.addClass)(this.$player, "art-backdrop"),
                a.isMobile && (0,
                a.addClass)(this.$player, "art-mobile")
            }
            destroy(t) {
                t ? this.$container.innerHTML = "" : (0,
                a.addClass)(this.$player, "art-destroy")
            }
        }
        r.default = o
    }
    , {
        "./utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "1AdeF": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("../utils")
          , n = t("./zh-cn")
          , i = a.interopDefault(n);
        r.default = class {
            constructor(t) {
                this.art = t,
                this.languages = {
                    "zh-cn": i.default
                },
                this.language = {},
                this.update(t.option.i18n)
            }
            init() {
                const t = this.art.option.lang.toLowerCase();
                this.language = this.languages[t] || {}
            }
            get(t) {
                return this.language[t] || t
            }
            update(t) {
                this.languages = (0,
                o.mergeDeep)(this.languages, t),
                this.init()
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "./zh-cn": "3ZSKq",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "3ZSKq": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        const a = {
            "Video Info": "统计信息",
            Close: "关闭",
            "Video Load Failed": "加载失败",
            Volume: "音量",
            Play: "播放",
            Pause: "暂停",
            Rate: "速度",
            Mute: "静音",
            "Video Flip": "画面翻转",
            Horizontal: "水平",
            Vertical: "垂直",
            Reconnect: "重新连接",
            "Show Setting": "显示设置",
            "Hide Setting": "隐藏设置",
            Screenshot: "截图",
            "Play Speed": "播放速度",
            "Aspect Ratio": "画面比例",
            Default: "默认",
            Normal: "正常",
            Open: "打开",
            "Switch Video": "切换",
            "Switch Subtitle": "切换字幕",
            Fullscreen: "全屏",
            "Exit Fullscreen": "退出全屏",
            "Web Fullscreen": "网页全屏",
            "Exit Web Fullscreen": "退出网页全屏",
            "Mini Player": "迷你播放器",
            "PIP Mode": "开启画中画",
            "Exit PIP Mode": "退出画中画",
            "PIP Not Supported": "不支持画中画",
            "Fullscreen Not Supported": "不支持全屏",
            "Subtitle Offset": "字幕偏移",
            "Last Seen": "上次看到",
            "Jump Play": "跳转播放",
            AirPlay: "隔空播放",
            "AirPlay Not Available": "隔空播放不可用"
        };
        r.default = a,
        "undefined" != typeof window && (window["artplayer-i18n-zh-cn"] = a)
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "556MW": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./urlMix")
          , n = a.interopDefault(o)
          , i = t("./attrMix")
          , s = a.interopDefault(i)
          , l = t("./playMix")
          , c = a.interopDefault(l)
          , u = t("./pauseMix")
          , p = a.interopDefault(u)
          , d = t("./toggleMix")
          , f = a.interopDefault(d)
          , h = t("./seekMix")
          , m = a.interopDefault(h)
          , g = t("./volumeMix")
          , v = a.interopDefault(g)
          , y = t("./currentTimeMix")
          , b = a.interopDefault(y)
          , x = t("./durationMix")
          , w = a.interopDefault(x)
          , j = t("./switchMix")
          , k = a.interopDefault(j)
          , $ = t("./playbackRateMix")
          , S = a.interopDefault($)
          , I = t("./aspectRatioMix")
          , T = a.interopDefault(I)
          , E = t("./screenshotMix")
          , O = a.interopDefault(E)
          , M = t("./fullscreenMix")
          , C = a.interopDefault(M)
          , F = t("./fullscreenWebMix")
          , H = a.interopDefault(F)
          , B = t("./pipMix")
          , D = a.interopDefault(B)
          , A = t("./loadedMix")
          , R = a.interopDefault(A)
          , z = t("./playedMix")
          , L = a.interopDefault(z)
          , P = t("./playingMix")
          , N = a.interopDefault(P)
          , _ = t("./autoSizeMix")
          , Z = a.interopDefault(_)
          , q = t("./rectMix")
          , V = a.interopDefault(q)
          , W = t("./flipMix")
          , U = a.interopDefault(W)
          , Y = t("./miniMix")
          , K = a.interopDefault(Y)
          , G = t("./posterMix")
          , X = a.interopDefault(G)
          , J = t("./autoHeightMix")
          , Q = a.interopDefault(J)
          , tt = t("./cssVarMix")
          , et = a.interopDefault(tt)
          , rt = t("./themeMix")
          , at = a.interopDefault(rt)
          , ot = t("./typeMix")
          , nt = a.interopDefault(ot)
          , it = t("./stateMix")
          , st = a.interopDefault(it)
          , lt = t("./subtitleOffsetMix")
          , ct = a.interopDefault(lt)
          , ut = t("./airplayMix")
          , pt = a.interopDefault(ut)
          , dt = t("./qualityMix")
          , ft = a.interopDefault(dt)
          , ht = t("./optionInit")
          , mt = a.interopDefault(ht)
          , gt = t("./eventInit")
          , vt = a.interopDefault(gt);
        r.default = class {
            constructor(t) {
                (0,
                n.default)(t),
                (0,
                s.default)(t),
                (0,
                c.default)(t),
                (0,
                p.default)(t),
                (0,
                f.default)(t),
                (0,
                m.default)(t),
                (0,
                v.default)(t),
                (0,
                b.default)(t),
                (0,
                w.default)(t),
                (0,
                k.default)(t),
                (0,
                S.default)(t),
                (0,
                T.default)(t),
                (0,
                O.default)(t),
                (0,
                C.default)(t),
                (0,
                H.default)(t),
                (0,
                D.default)(t),
                (0,
                R.default)(t),
                (0,
                L.default)(t),
                (0,
                N.default)(t),
                (0,
                Z.default)(t),
                (0,
                V.default)(t),
                (0,
                U.default)(t),
                (0,
                K.default)(t),
                (0,
                X.default)(t),
                (0,
                Q.default)(t),
                (0,
                et.default)(t),
                (0,
                at.default)(t),
                (0,
                nt.default)(t),
                (0,
                st.default)(t),
                (0,
                ct.default)(t),
                (0,
                pt.default)(t),
                (0,
                ft.default)(t),
                (0,
                vt.default)(t),
                (0,
                mt.default)(t)
            }
        }
    }
    , {
        "./urlMix": "2mRAc",
        "./attrMix": "2EA19",
        "./playMix": "fD2Tc",
        "./pauseMix": "c3LGJ",
        "./toggleMix": "fVsAa",
        "./seekMix": "dmROF",
        "./volumeMix": "9jtfB",
        "./currentTimeMix": "7NCDR",
        "./durationMix": "YS7JL",
        "./switchMix": "dzUqN",
        "./playbackRateMix": "5I2mT",
        "./aspectRatioMix": "7m6R8",
        "./screenshotMix": "2dgtR",
        "./fullscreenMix": "fKDW8",
        "./fullscreenWebMix": "lNvYI",
        "./pipMix": "8j7oC",
        "./loadedMix": "dwVOT",
        "./playedMix": "dDeLx",
        "./playingMix": "ceoBp",
        "./autoSizeMix": "lcWXX",
        "./rectMix": "f7y88",
        "./flipMix": "l4qt5",
        "./miniMix": "9ZPBQ",
        "./posterMix": "5K8hA",
        "./autoHeightMix": "3T5ls",
        "./cssVarMix": "6KfHs",
        "./themeMix": "7lcSc",
        "./typeMix": "8JgTw",
        "./stateMix": "cebt1",
        "./subtitleOffsetMix": "hJvIy",
        "./airplayMix": "4Tp0U",
        "./qualityMix": "3wZgN",
        "./optionInit": "iPdgW",
        "./eventInit": "3mj0J",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "2mRAc": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {option: e, template: {$video: r}} = t;
            (0,
            a.def)(t, "url", {
                get: ()=>r.src,
                async set(o) {
                    if (o) {
                        const n = t.url
                          , i = e.type || (0,
                        a.getExt)(o)
                          , s = e.customType[i];
                        i && s ? (await (0,
                        a.sleep)(),
                        t.loading.show = !0,
                        s.call(t, r, o, t)) : (URL.revokeObjectURL(n),
                        r.src = o),
                        n !== t.url && (t.option.url = o,
                        t.isReady && n && t.once("video:canplay", (()=>{
                            t.emit("restart", o)
                        }
                        )))
                    } else
                        await (0,
                        a.sleep)(),
                        t.loading.show = !0
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "2EA19": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {template: {$video: e}} = t;
            (0,
            a.def)(t, "attr", {
                value(t, r) {
                    if (void 0 === r)
                        return e[t];
                    e[t] = r
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    fD2Tc: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {i18n: e, notice: r, option: o, constructor: {instances: n}, template: {$video: i}} = t;
            (0,
            a.def)(t, "play", {
                value: async function() {
                    const a = await i.play();
                    if (r.show = e.get("Play"),
                    t.emit("play"),
                    o.mutex)
                        for (let e = 0; e < n.length; e++) {
                            const r = n[e];
                            r !== t && r.pause()
                        }
                    return a
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    c3LGJ: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {template: {$video: e}, i18n: r, notice: o} = t;
            (0,
            a.def)(t, "pause", {
                value() {
                    const a = e.pause();
                    return o.show = r.get("Pause"),
                    t.emit("pause"),
                    a
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    fVsAa: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            (0,
            a.def)(t, "toggle", {
                value: ()=>t.playing ? t.pause() : t.play()
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    dmROF: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {notice: e} = t;
            (0,
            a.def)(t, "seek", {
                set(r) {
                    t.currentTime = r,
                    t.emit("seek", t.currentTime),
                    t.duration && (e.show = `${(0,
                    a.secondToTime)(t.currentTime)} / ${(0,
                    a.secondToTime)(t.duration)}`)
                }
            }),
            (0,
            a.def)(t, "forward", {
                set(e) {
                    t.seek = t.currentTime + e
                }
            }),
            (0,
            a.def)(t, "backward", {
                set(e) {
                    t.seek = t.currentTime - e
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "9jtfB": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {template: {$video: e}, i18n: r, notice: o, storage: n} = t;
            (0,
            a.def)(t, "volume", {
                get: ()=>e.volume || 0,
                set: t=>{
                    e.volume = (0,
                    a.clamp)(t, 0, 1),
                    o.show = `${r.get("Volume")}: ${parseInt(100 * e.volume, 10)}`,
                    0 !== e.volume && n.set("volume", e.volume)
                }
            }),
            (0,
            a.def)(t, "muted", {
                get: ()=>e.muted,
                set: r=>{
                    e.muted = r,
                    t.emit("muted", r)
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "7NCDR": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {$video: e} = t.template;
            (0,
            a.def)(t, "currentTime", {
                get: ()=>e.currentTime || 0,
                set: r=>{
                    r = parseFloat(r),
                    Number.isNaN(r) || (e.currentTime = (0,
                    a.clamp)(r, 0, t.duration))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    YS7JL: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            (0,
            a.def)(t, "duration", {
                get: ()=>{
                    const {duration: e} = t.template.$video;
                    return e === 1 / 0 ? 0 : e || 0
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    dzUqN: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            function e(e, r) {
                return new Promise(((a,o)=>{
                    if (e === t.url)
                        return;
                    const {playing: n, aspectRatio: i, playbackRate: s} = t;
                    t.pause(),
                    t.url = e,
                    t.notice.show = "",
                    t.once("video:error", o),
                    t.once("video:canplay", (async()=>{
                        t.playbackRate = s,
                        t.aspectRatio = i,
                        t.currentTime = r,
                        n && await t.play(),
                        t.notice.show = "",
                        a()
                    }
                    ))
                }
                ))
            }
            (0,
            a.def)(t, "switchQuality", {
                value: r=>e(r, t.currentTime)
            }),
            (0,
            a.def)(t, "switchUrl", {
                value: t=>e(t, 0)
            }),
            (0,
            a.def)(t, "switch", {
                set: t.switchUrl
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "5I2mT": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {template: {$video: e}, i18n: r, notice: o} = t;
            (0,
            a.def)(t, "playbackRate", {
                get: ()=>e.playbackRate,
                set(a) {
                    if (a) {
                        if (a === e.playbackRate)
                            return;
                        e.playbackRate = a,
                        o.show = `${r.get("Rate")}: ${1 === a ? r.get("Normal") : `${a}x`}`
                    } else
                        t.playbackRate = 1
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "7m6R8": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {i18n: e, notice: r, template: {$video: o, $player: n}} = t;
            (0,
            a.def)(t, "aspectRatio", {
                get: ()=>n.dataset.aspectRatio || "default",
                set(i) {
                    if (i || (i = "default"),
                    "default" === i)
                        (0,
                        a.setStyle)(o, "width", null),
                        (0,
                        a.setStyle)(o, "height", null),
                        (0,
                        a.setStyle)(o, "margin", null),
                        delete n.dataset.aspectRatio;
                    else {
                        const t = i.split(":").map(Number)
                          , {clientWidth: e, clientHeight: r} = n
                          , s = e / r
                          , l = t[0] / t[1];
                        s > l ? ((0,
                        a.setStyle)(o, "width", l * r + "px"),
                        (0,
                        a.setStyle)(o, "height", "100%"),
                        (0,
                        a.setStyle)(o, "margin", "0 auto")) : ((0,
                        a.setStyle)(o, "width", "100%"),
                        (0,
                        a.setStyle)(o, "height", e / l + "px"),
                        (0,
                        a.setStyle)(o, "margin", "auto 0")),
                        n.dataset.aspectRatio = i
                    }
                    r.show = `${e.get("Aspect Ratio")}: ${"default" === i ? e.get("Default") : i}`,
                    t.emit("aspectRatio", i)
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "2dgtR": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {notice: e, template: {$video: r}} = t
              , o = (0,
            a.createElement)("canvas");
            (0,
            a.def)(t, "getDataURL", {
                value: ()=>new Promise(((t,a)=>{
                    try {
                        o.width = r.videoWidth,
                        o.height = r.videoHeight,
                        o.getContext("2d").drawImage(r, 0, 0),
                        t(o.toDataURL("image/png"))
                    } catch (t) {
                        e.show = t,
                        a(t)
                    }
                }
                ))
            }),
            (0,
            a.def)(t, "getBlobUrl", {
                value: ()=>new Promise(((t,a)=>{
                    try {
                        o.width = r.videoWidth,
                        o.height = r.videoHeight,
                        o.getContext("2d").drawImage(r, 0, 0),
                        o.toBlob((e=>{
                            t(URL.createObjectURL(e))
                        }
                        ))
                    } catch (t) {
                        e.show = t,
                        a(t)
                    }
                }
                ))
            }),
            (0,
            a.def)(t, "screenshot", {
                value: async()=>{
                    const e = await t.getDataURL();
                    return (0,
                    a.download)(e, `artplayer_${(0,
                    a.secondToTime)(r.currentTime)}.png`),
                    t.emit("screenshot", e),
                    e
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    fKDW8: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("../libs/screenfull")
          , n = a.interopDefault(o)
          , i = t("../utils");
        r.default = function(t) {
            const {i18n: e, notice: r, template: {$video: a, $player: o}} = t;
            t.once("video:loadedmetadata", (()=>{
                n.default.isEnabled ? (t=>{
                    n.default.on("change", (()=>{
                        t.emit("fullscreen", n.default.isFullscreen)
                    }
                    )),
                    (0,
                    i.def)(t, "fullscreen", {
                        get: ()=>n.default.isFullscreen,
                        async set(e) {
                            e ? (t.state = "fullscreen",
                            await n.default.request(o),
                            (0,
                            i.addClass)(o, "art-fullscreen")) : (await n.default.exit(),
                            (0,
                            i.removeClass)(o, "art-fullscreen")),
                            t.emit("resize")
                        }
                    })
                }
                )(t) : document.fullscreenEnabled || a.webkitSupportsFullscreen ? (t=>{
                    (0,
                    i.def)(t, "fullscreen", {
                        get: ()=>a.webkitDisplayingFullscreen,
                        set(e) {
                            e ? (t.state = "fullscreen",
                            a.webkitEnterFullscreen(),
                            t.emit("fullscreen", !0)) : (a.webkitExitFullscreen(),
                            t.emit("fullscreen", !1)),
                            t.emit("resize")
                        }
                    })
                }
                )(t) : (0,
                i.def)(t, "fullscreen", {
                    get: ()=>!1,
                    set() {
                        r.show = e.get("Fullscreen Not Supported")
                    }
                }),
                (0,
                i.def)(t, "fullscreen", (0,
                i.get)(t, "fullscreen"))
            }
            ))
        }
    }
    , {
        "../libs/screenfull": "lUahW",
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    lUahW: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        const a = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]]
          , o = (()=>{
            if ("undefined" == typeof document)
                return !1;
            const t = a[0]
              , e = {};
            for (const r of a) {
                if (r[1]in document) {
                    for (const [a,o] of r.entries())
                        e[t[a]] = o;
                    return e
                }
            }
            return !1
        }
        )()
          , n = {
            change: o.fullscreenchange,
            error: o.fullscreenerror
        };
        let i = {
            request: (t=document.documentElement,e)=>new Promise(((r,a)=>{
                const n = ()=>{
                    i.off("change", n),
                    r()
                }
                ;
                i.on("change", n);
                const s = t[o.requestFullscreen](e);
                s instanceof Promise && s.then(n).catch(a)
            }
            )),
            exit: ()=>new Promise(((t,e)=>{
                if (!i.isFullscreen)
                    return void t();
                const r = ()=>{
                    i.off("change", r),
                    t()
                }
                ;
                i.on("change", r);
                const a = document[o.exitFullscreen]();
                a instanceof Promise && a.then(r).catch(e)
            }
            )),
            toggle: (t,e)=>i.isFullscreen ? i.exit() : i.request(t, e),
            onchange(t) {
                i.on("change", t)
            },
            onerror(t) {
                i.on("error", t)
            },
            on(t, e) {
                const r = n[t];
                r && document.addEventListener(r, e, !1)
            },
            off(t, e) {
                const r = n[t];
                r && document.removeEventListener(r, e, !1)
            },
            raw: o
        };
        Object.defineProperties(i, {
            isFullscreen: {
                get: ()=>Boolean(document[o.fullscreenElement])
            },
            element: {
                enumerable: !0,
                get: ()=>document[o.fullscreenElement]
            },
            isEnabled: {
                enumerable: !0,
                get: ()=>Boolean(document[o.fullscreenEnabled])
            }
        }),
        o || (i = {
            isEnabled: !1
        }),
        r.default = i
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    lNvYI: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {constructor: e, template: {$container: r, $player: o}} = t;
            let n = "";
            (0,
            a.def)(t, "fullscreenWeb", {
                get: ()=>(0,
                a.hasClass)(o, "art-fullscreen-web"),
                set(i) {
                    i ? (n = o.style.cssText,
                    e.FULLSCREEN_WEB_IN_BODY && (0,
                    a.append)(document.body, o),
                    t.state = "fullscreenWeb",
                    (0,
                    a.setStyle)(o, "width", "100%"),
                    (0,
                    a.setStyle)(o, "height", "100%"),
                    (0,
                    a.addClass)(o, "art-fullscreen-web"),
                    t.emit("fullscreenWeb", !0)) : (e.FULLSCREEN_WEB_IN_BODY && (0,
                    a.append)(r, o),
                    n && (o.style.cssText = n,
                    n = ""),
                    (0,
                    a.removeClass)(o, "art-fullscreen-web"),
                    t.emit("fullscreenWeb", !1)),
                    t.emit("resize")
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "8j7oC": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {i18n: e, notice: r, template: {$video: o}} = t;
            document.pictureInPictureEnabled ? function(t) {
                const {template: {$video: e}, proxy: r, notice: o} = t;
                e.disablePictureInPicture = !1,
                (0,
                a.def)(t, "pip", {
                    get: ()=>document.pictureInPictureElement,
                    set(r) {
                        r ? (t.state = "pip",
                        e.requestPictureInPicture().catch((t=>{
                            throw o.show = t,
                            t
                        }
                        ))) : document.exitPictureInPicture().catch((t=>{
                            throw o.show = t,
                            t
                        }
                        ))
                    }
                }),
                r(e, "enterpictureinpicture", (()=>{
                    t.emit("pip", !0)
                }
                )),
                r(e, "leavepictureinpicture", (()=>{
                    t.emit("pip", !1)
                }
                ))
            }(t) : o.webkitSupportsPresentationMode ? function(t) {
                const {$video: e} = t.template;
                e.webkitSetPresentationMode("inline"),
                (0,
                a.def)(t, "pip", {
                    get: ()=>"picture-in-picture" === e.webkitPresentationMode,
                    set(r) {
                        r ? (t.state = "pip",
                        e.webkitSetPresentationMode("picture-in-picture"),
                        t.emit("pip", !0)) : (e.webkitSetPresentationMode("inline"),
                        t.emit("pip", !1))
                    }
                })
            }(t) : (0,
            a.def)(t, "pip", {
                get: ()=>!1,
                set() {
                    r.show = e.get("PIP Not Supported")
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    dwVOT: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {$video: e} = t.template;
            (0,
            a.def)(t, "loaded", {
                get: ()=>t.loadedTime / e.duration
            }),
            (0,
            a.def)(t, "loadedTime", {
                get: ()=>e.buffered.length ? e.buffered.end(e.buffered.length - 1) : 0
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    dDeLx: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            (0,
            a.def)(t, "played", {
                get: ()=>t.currentTime / t.duration
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    ceoBp: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {$video: e} = t.template;
            (0,
            a.def)(t, "playing", {
                get: ()=>!!(e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2)
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    lcWXX: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {$container: e, $player: r, $video: o} = t.template;
            (0,
            a.def)(t, "autoSize", {
                value() {
                    const {videoWidth: n, videoHeight: i} = o
                      , {width: s, height: l} = e.getBoundingClientRect()
                      , c = n / i;
                    if (s / l > c) {
                        const t = l * c / s * 100;
                        (0,
                        a.setStyle)(r, "width", `${t}%`),
                        (0,
                        a.setStyle)(r, "height", "100%")
                    } else {
                        const t = s / c / l * 100;
                        (0,
                        a.setStyle)(r, "width", "100%"),
                        (0,
                        a.setStyle)(r, "height", `${t}%`)
                    }
                    t.emit("autoSize", {
                        width: t.width,
                        height: t.height
                    })
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    f7y88: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            (0,
            a.def)(t, "rect", {
                get: ()=>t.template.$player.getBoundingClientRect()
            });
            const e = ["bottom", "height", "left", "right", "top", "width"];
            for (let r = 0; r < e.length; r++) {
                const o = e[r];
                (0,
                a.def)(t, o, {
                    get: ()=>t.rect[o]
                })
            }
            (0,
            a.def)(t, "x", {
                get: ()=>t.left + window.pageXOffset
            }),
            (0,
            a.def)(t, "y", {
                get: ()=>t.top + window.pageYOffset
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    l4qt5: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {template: {$player: e}, i18n: r, notice: o} = t;
            (0,
            a.def)(t, "flip", {
                get: ()=>e.dataset.flip || "normal",
                set(n) {
                    n || (n = "normal"),
                    "normal" === n ? delete e.dataset.flip : e.dataset.flip = n,
                    o.show = `${r.get("Video Flip")}: ${r.get((0,
                    a.capitalize)(n))}`,
                    t.emit("flip", n)
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "9ZPBQ": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {icons: e, proxy: r, storage: o, template: {$player: n, $video: i}} = t;
            let s = !1
              , l = 0
              , c = 0;
            function u() {
                const {$mini: e} = t.template;
                e && ((0,
                a.removeClass)(n, "art-mini"),
                (0,
                a.setStyle)(e, "display", "none"),
                n.prepend(i),
                t.emit("mini", !1))
            }
            function p(e, r) {
                t.playing ? ((0,
                a.setStyle)(e, "display", "none"),
                (0,
                a.setStyle)(r, "display", "flex")) : ((0,
                a.setStyle)(e, "display", "flex"),
                (0,
                a.setStyle)(r, "display", "none"))
            }
            function d() {
                const {$mini: e} = t.template
                  , r = e.getBoundingClientRect()
                  , n = window.innerHeight - r.height - 50
                  , i = window.innerWidth - r.width - 50;
                o.set("top", n),
                o.set("left", i),
                (0,
                a.setStyle)(e, "top", `${n}px`),
                (0,
                a.setStyle)(e, "left", `${i}px`)
            }
            (0,
            a.def)(t, "mini", {
                get: ()=>(0,
                a.hasClass)(n, "art-mini"),
                set(f) {
                    if (f) {
                        t.state = "mini",
                        (0,
                        a.addClass)(n, "art-mini");
                        const f = function() {
                            const {$mini: n} = t.template;
                            if (n)
                                return (0,
                                a.append)(n, i),
                                (0,
                                a.setStyle)(n, "display", "flex");
                            {
                                const n = (0,
                                a.createElement)("div");
                                (0,
                                a.addClass)(n, "art-mini-popup"),
                                (0,
                                a.append)(document.body, n),
                                t.template.$mini = n,
                                (0,
                                a.append)(n, i);
                                const d = (0,
                                a.append)(n, '<div class="art-mini-close"></div>');
                                (0,
                                a.append)(d, e.close),
                                r(d, "click", u);
                                const f = (0,
                                a.append)(n, '<div class="art-mini-state"></div>')
                                  , h = (0,
                                a.append)(f, e.play)
                                  , m = (0,
                                a.append)(f, e.pause);
                                return r(h, "click", (()=>t.play())),
                                r(m, "click", (()=>t.pause())),
                                p(h, m),
                                t.on("video:playing", (()=>p(h, m))),
                                t.on("video:pause", (()=>p(h, m))),
                                t.on("video:timeupdate", (()=>p(h, m))),
                                r(n, "mousedown", (t=>{
                                    s = 0 === t.button,
                                    l = t.pageX,
                                    c = t.pageY
                                }
                                )),
                                t.on("document:mousemove", (t=>{
                                    if (s) {
                                        (0,
                                        a.addClass)(n, "art-mini-droging");
                                        const e = t.pageX - l
                                          , r = t.pageY - c;
                                        (0,
                                        a.setStyle)(n, "transform", `translate(${e}px, ${r}px)`)
                                    }
                                }
                                )),
                                t.on("document:mouseup", (()=>{
                                    if (s) {
                                        s = !1,
                                        (0,
                                        a.removeClass)(n, "art-mini-droging");
                                        const t = n.getBoundingClientRect();
                                        o.set("left", t.left),
                                        o.set("top", t.top),
                                        (0,
                                        a.setStyle)(n, "left", `${t.left}px`),
                                        (0,
                                        a.setStyle)(n, "top", `${t.top}px`),
                                        (0,
                                        a.setStyle)(n, "transform", null)
                                    }
                                }
                                )),
                                n
                            }
                        }()
                          , h = o.get("top")
                          , m = o.get("left");
                        h && m ? ((0,
                        a.setStyle)(f, "top", `${h}px`),
                        (0,
                        a.setStyle)(f, "left", `${m}px`),
                        (0,
                        a.isInViewport)(f) || d()) : d(),
                        t.emit("mini", !0)
                    } else
                        u()
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "5K8hA": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {template: {$poster: e}} = t;
            (0,
            a.def)(t, "poster", {
                get: ()=>{
                    try {
                        return e.style.backgroundImage.match(/"(.*)"/)[1]
                    } catch (t) {
                        return ""
                    }
                }
                ,
                set(t) {
                    (0,
                    a.setStyle)(e, "backgroundImage", `url(${t})`)
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "3T5ls": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {template: {$container: e, $video: r}} = t;
            (0,
            a.def)(t, "autoHeight", {
                value() {
                    const {clientWidth: o} = e
                      , {videoHeight: n, videoWidth: i} = r
                      , s = n * (o / i);
                    (0,
                    a.setStyle)(e, "height", s + "px"),
                    t.emit("autoHeight", s)
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "6KfHs": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {$player: e} = t.template;
            (0,
            a.def)(t, "cssVar", {
                value: (t,r)=>r ? e.style.setProperty(t, r) : getComputedStyle(e).getPropertyValue(t)
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "7lcSc": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            (0,
            a.def)(t, "theme", {
                get: ()=>t.cssVar("--art-theme"),
                set(e) {
                    t.cssVar("--art-theme", e)
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "8JgTw": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            (0,
            a.def)(t, "type", {
                get: ()=>t.option.type,
                set(e) {
                    t.option.type = e
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    cebt1: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const e = ["mini", "pip", "fullscreen", "fullscreenWeb"];
            (0,
            a.def)(t, "state", {
                get: ()=>e.find((e=>t[e])) || "standard",
                set(r) {
                    for (let a = 0; a < e.length; a++) {
                        const o = e[a];
                        o !== r && t[o] && (t[o] = !1)
                    }
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    hJvIy: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {clamp: e} = t.constructor.utils
              , {notice: r, template: o, i18n: n} = t;
            let i = 0
              , s = [];
            t.on("subtitle:switch", (()=>{
                s = []
            }
            )),
            (0,
            a.def)(t, "subtitleOffset", {
                get: ()=>i,
                set(a) {
                    if (o.$track && o.$track.track) {
                        const l = Array.from(o.$track.track.cues);
                        i = e(a, -5, 5);
                        for (let r = 0; r < l.length; r++) {
                            const a = l[r];
                            s[r] || (s[r] = {
                                startTime: a.startTime,
                                endTime: a.endTime
                            }),
                            a.startTime = e(s[r].startTime + i, 0, t.duration),
                            a.endTime = e(s[r].endTime + i, 0, t.duration)
                        }
                        t.subtitle.update(),
                        r.show = `${n.get("Subtitle Offset")}: ${a}s`,
                        t.emit("subtitleOffset", a)
                    } else
                        t.emit("subtitleOffset", 0)
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "4Tp0U": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {i18n: e, notice: r, proxy: o, template: {$video: n}} = t;
            let i = !0;
            window.WebKitPlaybackTargetAvailabilityEvent && n.webkitShowPlaybackTargetPicker ? o(n, "webkitplaybacktargetavailabilitychanged", (t=>{
                switch (t.availability) {
                case "available":
                    i = !0;
                    break;
                case "not-available":
                    i = !1
                }
            }
            )) : i = !1,
            (0,
            a.def)(t, "airplay", {
                value() {
                    i ? (n.webkitShowPlaybackTargetPicker(),
                    t.emit("airplay")) : r.show = e.get("AirPlay Not Available")
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "3wZgN": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            (0,
            a.def)(t, "quality", {
                set(e) {
                    const {controls: r, notice: a, i18n: o} = t
                      , n = e.find((t=>t.default)) || e[0];
                    r.update({
                        name: "quality",
                        position: "right",
                        index: 10,
                        style: {
                            marginRight: "10px"
                        },
                        html: n ? n.html : "",
                        selector: e,
                        async onSelect(e) {
                            await t.switchQuality(e.url),
                            a.show = `${o.get("Switch Video")}: ${e.html}`
                        }
                    })
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    iPdgW: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {option: e, storage: r, template: {$video: o, $poster: n}} = t;
            for (const r in e.moreVideoAttr)
                t.attr(r, e.moreVideoAttr[r]);
            e.muted && (t.muted = e.muted),
            e.volume && (o.volume = (0,
            a.clamp)(e.volume, 0, 1));
            const i = r.get("volume");
            "number" == typeof i && (o.volume = (0,
            a.clamp)(i, 0, 1)),
            e.poster && (0,
            a.setStyle)(n, "backgroundImage", `url(${e.poster})`),
            e.autoplay && (o.autoplay = e.autoplay),
            e.playsInline && (o.playsInline = !0,
            o["webkit-playsinline"] = !0),
            e.theme && (e.cssVar["--art-theme"] = e.theme);
            for (const r in e.cssVar)
                t.cssVar(r, e.cssVar[r]);
            t.url = e.url
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "3mj0J": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("../config")
          , n = a.interopDefault(o)
          , i = t("../utils");
        r.default = function(t) {
            const {i18n: e, notice: r, option: a, constructor: o, proxy: s, template: {$player: l, $video: c, $poster: u}} = t;
            let p = 0;
            for (let e = 0; e < n.default.events.length; e++)
                s(c, n.default.events[e], (e=>{
                    t.emit(`video:${e.type}`, e)
                }
                ));
            t.on("video:canplay", (()=>{
                p = 0,
                t.loading.show = !1
            }
            )),
            t.once("video:canplay", (()=>{
                t.loading.show = !1,
                t.controls.show = !0,
                t.mask.show = !0,
                t.isReady = !0,
                t.emit("ready")
            }
            )),
            t.on("video:ended", (()=>{
                a.loop ? (t.seek = 0,
                t.play(),
                t.controls.show = !1,
                t.mask.show = !1) : (t.controls.show = !0,
                t.mask.show = !0)
            }
            )),
            t.on("video:error", (async n=>{
                p < o.RECONNECT_TIME_MAX ? (await (0,
                i.sleep)(o.RECONNECT_SLEEP_TIME),
                p += 1,
                t.url = a.url,
                r.show = `${e.get("Reconnect")}: ${p}`,
                t.emit("error", n, p)) : (t.mask.show = !0,
                t.loading.show = !1,
                t.controls.show = !0,
                (0,
                i.addClass)(l, "art-error"),
                await (0,
                i.sleep)(o.RECONNECT_SLEEP_TIME),
                r.show = e.get("Video Load Failed"))
            }
            )),
            t.on("video:loadedmetadata", (()=>{
                t.emit("resize"),
                i.isMobile && (t.loading.show = !1,
                t.controls.show = !0,
                t.mask.show = !0)
            }
            )),
            t.on("video:loadstart", (()=>{
                t.loading.show = !0,
                t.mask.show = !1,
                t.controls.show = !0
            }
            )),
            t.on("video:pause", (()=>{
                t.controls.show = !0,
                t.mask.show = !0
            }
            )),
            t.on("video:play", (()=>{
                t.mask.show = !1,
                (0,
                i.setStyle)(u, "display", "none")
            }
            )),
            t.on("video:playing", (()=>{
                t.mask.show = !1
            }
            )),
            t.on("video:progress", (()=>{
                t.playing && (t.loading.show = !1)
            }
            )),
            t.on("video:seeked", (()=>{
                t.loading.show = !1,
                t.mask.show = !0
            }
            )),
            t.on("video:seeking", (()=>{
                t.loading.show = !0,
                t.mask.show = !1
            }
            )),
            t.on("video:timeupdate", (()=>{
                t.mask.show = !1
            }
            )),
            t.on("video:waiting", (()=>{
                t.loading.show = !0,
                t.mask.show = !1
            }
            ))
        }
    }
    , {
        "../config": "9Xmqu",
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "14IBq": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("../utils")
          , n = t("../utils/component")
          , i = a.interopDefault(n)
          , s = t("./fullscreen")
          , l = a.interopDefault(s)
          , c = t("./fullscreenWeb")
          , u = a.interopDefault(c)
          , p = t("./pip")
          , d = a.interopDefault(p)
          , f = t("./playAndPause")
          , h = a.interopDefault(f)
          , m = t("./progress")
          , g = a.interopDefault(m)
          , v = t("./time")
          , y = a.interopDefault(v)
          , b = t("./volume")
          , x = a.interopDefault(b)
          , w = t("./setting")
          , j = a.interopDefault(w)
          , k = t("./thumbnails")
          , $ = a.interopDefault(k)
          , S = t("./screenshot")
          , I = a.interopDefault(S)
          , T = t("./airplay")
          , E = a.interopDefault(T);
        class O extends i.default {
            constructor(t) {
                super(t),
                this.name = "control",
                this.timer = Date.now();
                const {constructor: e} = t
                  , {$player: r} = this.art.template;
                t.on("mousemove", (()=>{
                    o.isMobile || (this.show = !0)
                }
                )),
                t.on("click", (()=>{
                    o.isMobile ? this.toggle() : this.show = !0
                }
                )),
                t.on("video:timeupdate", (()=>{
                    !t.isInput && t.playing && this.show && Date.now() - this.timer >= e.CONTROL_HIDE_TIME && (this.show = !1)
                }
                )),
                t.on("control", (t=>{
                    t ? ((0,
                    o.removeClass)(r, "art-hide-cursor"),
                    (0,
                    o.addClass)(r, "art-hover"),
                    this.timer = Date.now()) : ((0,
                    o.addClass)(r, "art-hide-cursor"),
                    (0,
                    o.removeClass)(r, "art-hover"))
                }
                )),
                this.init()
            }
            init() {
                const {option: t} = this.art;
                t.isLive || this.add((0,
                g.default)({
                    name: "progress",
                    position: "top",
                    index: 10
                })),
                !t.thumbnails.url || t.isLive || o.isMobile || this.add((0,
                $.default)({
                    name: "thumbnails",
                    position: "top",
                    index: 20
                })),
                this.add((0,
                h.default)({
                    name: "playAndPause",
                    position: "left",
                    index: 10
                })),
                this.add((0,
                x.default)({
                    name: "volume",
                    position: "left",
                    index: 20
                })),
                t.isLive || this.add((0,
                y.default)({
                    name: "time",
                    position: "left",
                    index: 30
                })),
                t.quality.length && (0,
                o.sleep)().then((()=>{
                    this.art.quality = t.quality
                }
                )),
                t.screenshot && !o.isMobile && this.add((0,
                I.default)({
                    name: "screenshot",
                    position: "right",
                    index: 20
                })),
                t.setting && this.add((0,
                j.default)({
                    name: "setting",
                    position: "right",
                    index: 30
                })),
                t.pip && this.add((0,
                d.default)({
                    name: "pip",
                    position: "right",
                    index: 40
                })),
                t.airplay && window.WebKitPlaybackTargetAvailabilityEvent && this.add((0,
                E.default)({
                    name: "airplay",
                    position: "right",
                    index: 50
                })),
                t.fullscreenWeb && this.add((0,
                u.default)({
                    name: "fullscreenWeb",
                    position: "right",
                    index: 60
                })),
                t.fullscreen && this.add((0,
                l.default)({
                    name: "fullscreen",
                    position: "right",
                    index: 70
                }));
                for (let e = 0; e < t.controls.length; e++)
                    this.add(t.controls[e])
            }
            add(t) {
                const e = "function" == typeof t ? t(this.art) : t
                  , {$progress: r, $controlsLeft: a, $controlsRight: n} = this.art.template;
                switch (e.position) {
                case "top":
                    this.$parent = r;
                    break;
                case "left":
                    this.$parent = a;
                    break;
                case "right":
                    this.$parent = n;
                    break;
                default:
                    (0,
                    o.errorHandle)(!1, "Control option.position must one of 'top', 'left', 'right'")
                }
                super.add(e)
            }
        }
        r.default = O
    }
    , {
        "../utils": "h3rH9",
        "../utils/component": "guki8",
        "./fullscreen": "cxHNK",
        "./fullscreenWeb": "66eEC",
        "./pip": "kCFkA",
        "./playAndPause": "iRhgD",
        "./progress": "aBBSH",
        "./time": "7H0CE",
        "./volume": "lMwFm",
        "./setting": "8BrCu",
        "./thumbnails": "2HiWx",
        "./screenshot": "c1GeG",
        "./airplay": "6GRju",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    guki8: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./dom")
          , n = t("./format")
          , i = t("./error")
          , s = t("option-validator")
          , l = a.interopDefault(s)
          , c = t("../scheme");
        r.default = class {
            constructor(t) {
                this.id = 0,
                this.art = t,
                this.cache = new Map,
                this.add = this.add.bind(this),
                this.remove = this.remove.bind(this),
                this.update = this.update.bind(this)
            }
            get show() {
                return (0,
                o.hasClass)(this.art.template.$player, `art-${this.name}-show`)
            }
            set show(t) {
                const {$player: e} = this.art.template
                  , r = `art-${this.name}-show`;
                t ? (0,
                o.addClass)(e, r) : (0,
                o.removeClass)(e, r),
                this.art.emit(this.name, t)
            }
            toggle() {
                this.show = !this.show
            }
            add(t) {
                const e = "function" == typeof t ? t(this.art) : t;
                if (e.html = e.html || "",
                (0,
                l.default)(e, c.ComponentOption),
                !this.$parent || !this.name || e.disable)
                    return;
                const r = e.name || `${this.name}${this.id}`
                  , a = this.cache.get(r);
                (0,
                i.errorHandle)(!a, `Can't add an existing [${r}] to the [${this.name}]`),
                this.id += 1;
                const n = (0,
                o.createElement)("div");
                (0,
                o.addClass)(n, `art-${this.name}`),
                (0,
                o.addClass)(n, `art-${this.name}-${r}`);
                const s = Array.from(this.$parent.children);
                n.dataset.index = e.index || this.id;
                const u = s.find((t=>Number(t.dataset.index) >= Number(n.dataset.index)));
                u ? u.insertAdjacentElement("beforebegin", n) : (0,
                o.append)(this.$parent, n),
                e.html && (0,
                o.append)(n, e.html),
                e.style && (0,
                o.setStyles)(n, e.style),
                e.tooltip && (0,
                o.tooltip)(n, e.tooltip);
                const p = [];
                if (e.click) {
                    const t = this.art.events.proxy(n, "click", (t=>{
                        t.preventDefault(),
                        e.click.call(this.art, this, t)
                    }
                    ));
                    p.push(t)
                }
                return e.selector && ["left", "right"].includes(e.position) && this.addSelector(e, n, p),
                this[r] = n,
                this.cache.set(r, {
                    $ref: n,
                    events: p,
                    option: e
                }),
                e.mounted && e.mounted.call(this.art, n),
                n
            }
            addSelector(t, e, r) {
                const {hover: a, proxy: i} = this.art.events;
                (0,
                o.addClass)(e, "art-control-selector");
                const s = (0,
                o.createElement)("div");
                (0,
                o.addClass)(s, "art-selector-value"),
                (0,
                o.append)(s, t.html),
                e.innerText = "",
                (0,
                o.append)(e, s);
                const l = t.selector.map(((t,e)=>`<div class="art-selector-item ${t.default ? "art-current" : ""}" data-index="${e}">${t.html}</div>`)).join("")
                  , c = (0,
                o.createElement)("div");
                (0,
                o.addClass)(c, "art-selector-list"),
                (0,
                o.append)(c, l),
                (0,
                o.append)(e, c);
                const u = ()=>{
                    const t = (0,
                    o.getStyle)(e, "width") / 2 - (0,
                    o.getStyle)(c, "width") / 2;
                    c.style.left = `${t}px`
                }
                ;
                a(e, u);
                const p = i(c, "click", (async e=>{
                    const r = (e.composedPath() || []).find((t=>(0,
                    o.hasClass)(t, "art-selector-item")));
                    if (!r)
                        return;
                    (0,
                    o.inverseClass)(r, "art-current");
                    const a = Number(r.dataset.index)
                      , i = t.selector[a] || {};
                    if (s.innerText = r.innerText,
                    t.onSelect) {
                        const a = await t.onSelect.call(this.art, i, r, e);
                        (0,
                        n.isStringOrNumber)(a) && (s.innerHTML = a)
                    }
                    u()
                }
                ));
                r.push(p)
            }
            remove(t) {
                const e = this.cache.get(t);
                (0,
                i.errorHandle)(e, `Can't find [${t}] from the [${this.name}]`),
                e.option.beforeUnmount && e.option.beforeUnmount.call(this.art, e.$ref);
                for (let t = 0; t < e.events.length; t++)
                    this.art.events.remove(e.events[t]);
                this.cache.delete(t),
                delete this[t],
                (0,
                o.remove)(e.$ref)
            }
            update(t) {
                const e = this.cache.get(t.name);
                return e && (t = Object.assign(e.option, t),
                this.remove(t.name)),
                this.add(t)
            }
        }
    }
    , {
        "./dom": "XgAQE",
        "./format": "13atT",
        "./error": "2nFlF",
        "option-validator": "bAWi2",
        "../scheme": "AdvwB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    cxHNK: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                tooltip: e.i18n.get("Fullscreen"),
                mounted: t=>{
                    const {proxy: r, icons: o, i18n: n} = e
                      , i = (0,
                    a.append)(t, o.fullscreenOn)
                      , s = (0,
                    a.append)(t, o.fullscreenOff);
                    (0,
                    a.setStyle)(s, "display", "none"),
                    r(t, "click", (()=>{
                        e.fullscreen = !e.fullscreen
                    }
                    )),
                    e.on("fullscreen", (e=>{
                        e ? ((0,
                        a.tooltip)(t, n.get("Exit Fullscreen")),
                        (0,
                        a.setStyle)(i, "display", "none"),
                        (0,
                        a.setStyle)(s, "display", "inline-flex")) : ((0,
                        a.tooltip)(t, n.get("Fullscreen")),
                        (0,
                        a.setStyle)(i, "display", "inline-flex"),
                        (0,
                        a.setStyle)(s, "display", "none"))
                    }
                    ))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "66eEC": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                tooltip: e.i18n.get("Web Fullscreen"),
                mounted: t=>{
                    const {proxy: r, icons: o, i18n: n} = e
                      , i = (0,
                    a.append)(t, o.fullscreenWebOn)
                      , s = (0,
                    a.append)(t, o.fullscreenWebOff);
                    (0,
                    a.setStyle)(s, "display", "none"),
                    r(t, "click", (()=>{
                        e.fullscreenWeb = !e.fullscreenWeb
                    }
                    )),
                    e.on("fullscreenWeb", (e=>{
                        e ? ((0,
                        a.tooltip)(t, n.get("Exit Web Fullscreen")),
                        (0,
                        a.setStyle)(i, "display", "none"),
                        (0,
                        a.setStyle)(s, "display", "inline-flex")) : ((0,
                        a.tooltip)(t, n.get("Web Fullscreen")),
                        (0,
                        a.setStyle)(i, "display", "inline-flex"),
                        (0,
                        a.setStyle)(s, "display", "none"))
                    }
                    ))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    kCFkA: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                tooltip: e.i18n.get("PIP Mode"),
                mounted: t=>{
                    const {proxy: r, icons: o, i18n: n} = e;
                    (0,
                    a.append)(t, o.pip),
                    r(t, "click", (()=>{
                        e.pip = !e.pip
                    }
                    )),
                    e.on("pip", (e=>{
                        (0,
                        a.tooltip)(t, n.get(e ? "Exit PIP Mode" : "PIP Mode"))
                    }
                    ))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    iRhgD: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                mounted: t=>{
                    const {proxy: r, icons: o, i18n: n} = e
                      , i = (0,
                    a.append)(t, o.play)
                      , s = (0,
                    a.append)(t, o.pause);
                    function l() {
                        (0,
                        a.setStyle)(i, "display", "flex"),
                        (0,
                        a.setStyle)(s, "display", "none")
                    }
                    function c() {
                        (0,
                        a.setStyle)(i, "display", "none"),
                        (0,
                        a.setStyle)(s, "display", "flex")
                    }
                    (0,
                    a.tooltip)(i, n.get("Play")),
                    (0,
                    a.tooltip)(s, n.get("Pause")),
                    r(i, "click", (()=>{
                        e.play()
                    }
                    )),
                    r(s, "click", (()=>{
                        e.pause()
                    }
                    )),
                    e.playing ? c() : l(),
                    e.on("video:playing", (()=>{
                        c()
                    }
                    )),
                    e.on("video:pause", (()=>{
                        l()
                    }
                    ))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    aBBSH: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r),
        a.export(r, "getPosFromEvent", (()=>n)),
        a.export(r, "setCurrentTime", (()=>i));
        var o = t("../utils");
        function n(t, e) {
            const {$progress: r} = t.template
              , {left: a} = r.getBoundingClientRect()
              , n = o.isMobile ? e.touches[0].clientX : e.clientX
              , i = (0,
            o.clamp)(n - a, 0, r.clientWidth)
              , s = i / r.clientWidth * t.duration;
            return {
                second: s,
                time: (0,
                o.secondToTime)(s),
                width: i,
                percentage: (0,
                o.clamp)(i / r.clientWidth, 0, 1)
            }
        }
        function i(t, e) {
            if (t.isRotate) {
                const r = e.touches[0].clientY / t.height
                  , a = r * t.duration;
                t.emit("setBar", "played", r),
                t.seek = a
            } else {
                const {second: r, percentage: a} = n(t, e);
                t.emit("setBar", "played", a),
                t.seek = r
            }
        }
        r.default = function(t) {
            return e=>{
                const {icons: r, option: a, proxy: s} = e;
                return {
                    ...t,
                    html: '<div class="art-control-progress-inner"><div class="art-progress-hover"></div><div class="art-progress-loaded"></div><div class="art-progress-played"></div><div class="art-progress-highlight"></div><div class="art-progress-indicator"></div><div class="art-progress-tip"></div></div>',
                    mounted: t=>{
                        let l = !1;
                        const c = (0,
                        o.query)(".art-progress-hover", t)
                          , u = (0,
                        o.query)(".art-progress-loaded", t)
                          , p = (0,
                        o.query)(".art-progress-played", t)
                          , d = (0,
                        o.query)(".art-progress-highlight", t)
                          , f = (0,
                        o.query)(".art-progress-indicator", t)
                          , h = (0,
                        o.query)(".art-progress-tip", t);
                        function m(t, e) {
                            "loaded" === t && (0,
                            o.setStyle)(u, "width", 100 * e + "%"),
                            "played" === t && ((0,
                            o.setStyle)(p, "width", 100 * e + "%"),
                            (0,
                            o.setStyle)(f, "left", 100 * e + "%"))
                        }
                        r.indicator ? (0,
                        o.append)(f, r.indicator) : (0,
                        o.setStyle)(f, "backgroundColor", "var(--art-theme)"),
                        e.on("video:loadedmetadata", (()=>{
                            for (let t = 0; t < a.highlight.length; t++) {
                                const r = a.highlight[t]
                                  , n = (0,
                                o.clamp)(r.time, 0, e.duration) / e.duration * 100
                                  , i = `<span data-text="${r.text}" data-time="${r.time}" style="left: ${n}%"></span>`;
                                (0,
                                o.append)(d, i)
                            }
                        }
                        )),
                        m("loaded", e.loaded),
                        e.on("setBar", ((t,e)=>{
                            m(t, e)
                        }
                        )),
                        e.on("video:progress", (()=>{
                            m("loaded", e.loaded)
                        }
                        )),
                        e.constructor.USE_RAF ? e.on("raf", (()=>{
                            m("played", e.played)
                        }
                        )) : e.on("video:timeupdate", (()=>{
                            m("played", e.played)
                        }
                        )),
                        e.on("video:ended", (()=>{
                            m("played", 1)
                        }
                        )),
                        o.isMobile || (s(t, "click", (t=>{
                            t.target !== f && i(e, t)
                        }
                        )),
                        s(t, "mousemove", (r=>{
                            !function(t) {
                                const {width: r} = n(e, t);
                                (0,
                                o.setStyle)(c, "width", `${r}px`),
                                (0,
                                o.setStyle)(c, "display", "flex")
                            }(r),
                            (0,
                            o.setStyle)(h, "display", "flex"),
                            (0,
                            o.includeFromEvent)(r, d) ? function(r) {
                                const {width: a} = n(e, r)
                                  , {text: i} = r.target.dataset;
                                h.innerHTML = i;
                                const s = h.clientWidth;
                                a <= s / 2 ? (0,
                                o.setStyle)(h, "left", 0) : a > t.clientWidth - s / 2 ? (0,
                                o.setStyle)(h, "left", t.clientWidth - s + "px") : (0,
                                o.setStyle)(h, "left", a - s / 2 + "px")
                            }(r) : function(r) {
                                const {width: a, time: i} = n(e, r);
                                h.innerHTML = i;
                                const s = h.clientWidth;
                                a <= s / 2 ? (0,
                                o.setStyle)(h, "left", 0) : a > t.clientWidth - s / 2 ? (0,
                                o.setStyle)(h, "left", t.clientWidth - s + "px") : (0,
                                o.setStyle)(h, "left", a - s / 2 + "px")
                            }(r)
                        }
                        )),
                        s(t, "mouseleave", (()=>{
                            (0,
                            o.setStyle)(h, "display", "none"),
                            (0,
                            o.setStyle)(c, "display", "none")
                        }
                        )),
                        s(t, "mousedown", (t=>{
                            l = 0 === t.button
                        }
                        )),
                        e.on("document:mousemove", (t=>{
                            if (l) {
                                const {second: r, percentage: a} = n(e, t);
                                m("played", a),
                                e.seek = r
                            }
                        }
                        )),
                        e.on("document:mouseup", (()=>{
                            l && (l = !1)
                        }
                        )))
                    }
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "7H0CE": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                style: a.isMobile ? {
                    fontSize: "12px",
                    padding: "0 5px"
                } : {
                    cursor: "auto",
                    padding: "0 10px"
                },
                mounted: t=>{
                    function r() {
                        const r = `${(0,
                        a.secondToTime)(e.currentTime)} / ${(0,
                        a.secondToTime)(e.duration)}`;
                        r !== t.innerText && (t.innerText = r)
                    }
                    r();
                    const o = ["video:loadedmetadata", "video:timeupdate", "video:progress"];
                    for (let t = 0; t < o.length; t++)
                        e.on(o[t], r)
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    lMwFm: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                mounted: t=>{
                    const {proxy: r, icons: o} = e
                      , n = (0,
                    a.append)(t, o.volume)
                      , i = (0,
                    a.append)(t, o.volumeClose)
                      , s = (0,
                    a.append)(t, '<div class="art-volume-panel"></div>')
                      , l = (0,
                    a.append)(s, '<div class="art-volume-inner"></div>')
                      , c = (0,
                    a.append)(l, '<div class="art-volume-val"></div>')
                      , u = (0,
                    a.append)(l, '<div class="art-volume-slider"></div>')
                      , p = (0,
                    a.append)(u, '<div class="art-volume-handle"></div>')
                      , d = (0,
                    a.append)(p, '<div class="art-volume-loaded"></div>')
                      , f = (0,
                    a.append)(u, '<div class="art-volume-indicator"></div>');
                    function h(t) {
                        const {top: e, height: r} = u.getBoundingClientRect();
                        return 1 - (t.clientY - e) / r
                    }
                    function m() {
                        if (e.muted || 0 === e.volume)
                            (0,
                            a.setStyle)(n, "display", "none"),
                            (0,
                            a.setStyle)(i, "display", "flex"),
                            (0,
                            a.setStyle)(f, "top", "100%"),
                            (0,
                            a.setStyle)(d, "top", "100%"),
                            c.innerText = 0;
                        else {
                            const t = 100 * e.volume;
                            (0,
                            a.setStyle)(n, "display", "flex"),
                            (0,
                            a.setStyle)(i, "display", "none"),
                            (0,
                            a.setStyle)(f, "top", 100 - t + "%"),
                            (0,
                            a.setStyle)(d, "top", 100 - t + "%"),
                            c.innerText = Math.floor(t)
                        }
                    }
                    if (m(),
                    e.on("video:volumechange", m),
                    r(n, "click", (()=>{
                        e.muted = !0
                    }
                    )),
                    r(i, "click", (()=>{
                        e.muted = !1
                    }
                    )),
                    a.isMobile)
                        (0,
                        a.setStyle)(s, "display", "none");
                    else {
                        let t = !1;
                        r(u, "mousedown", (r=>{
                            t = 0 === r.button,
                            e.volume = h(r)
                        }
                        )),
                        e.on("document:mousemove", (r=>{
                            t && (e.muted = !1,
                            e.volume = h(r))
                        }
                        )),
                        e.on("document:mouseup", (()=>{
                            t && (t = !1)
                        }
                        ))
                    }
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "8BrCu": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                tooltip: e.i18n.get("Show Setting"),
                mounted: t=>{
                    const {proxy: r, icons: o, i18n: n} = e;
                    (0,
                    a.append)(t, o.setting),
                    r(t, "click", (()=>{
                        e.setting.toggle(),
                        e.setting.updateStyle()
                    }
                    )),
                    e.on("setting", (e=>{
                        (0,
                        a.tooltip)(t, n.get(e ? "Hide Setting" : "Show Setting"))
                    }
                    ))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "2HiWx": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils")
          , o = t("./progress");
        r.default = function(t) {
            return e=>({
                ...t,
                mounted: t=>{
                    const {option: r, template: {$progress: n, $video: i}, events: {proxy: s, loadImg: l}} = e;
                    let c = null
                      , u = !1
                      , p = !1;
                    s(n, "mousemove", (async s=>{
                        if (!u) {
                            u = !0;
                            const t = await l(r.thumbnails.url);
                            c = t,
                            p = !0
                        }
                        p && ((0,
                        a.setStyle)(t, "display", "flex"),
                        function(s) {
                            const {width: l} = (0,
                            o.getPosFromEvent)(e, s)
                              , {url: u, number: p, column: d, width: f, height: h} = r.thumbnails
                              , m = f || c.naturalWidth / d
                              , g = h || m / (i.videoWidth / i.videoHeight)
                              , v = n.clientWidth / p
                              , y = Math.floor(l / v)
                              , b = Math.ceil(y / d) - 1
                              , x = y % d || d - 1;
                            (0,
                            a.setStyle)(t, "backgroundImage", `url(${u})`),
                            (0,
                            a.setStyle)(t, "height", `${g}px`),
                            (0,
                            a.setStyle)(t, "width", `${m}px`),
                            (0,
                            a.setStyle)(t, "backgroundPosition", `-${x * m}px -${b * g}px`),
                            l <= m / 2 ? (0,
                            a.setStyle)(t, "left", 0) : l > n.clientWidth - m / 2 ? (0,
                            a.setStyle)(t, "left", n.clientWidth - m + "px") : (0,
                            a.setStyle)(t, "left", l - m / 2 + "px")
                        }(s))
                    }
                    )),
                    s(n, "mouseleave", (()=>{
                        (0,
                        a.setStyle)(t, "display", "none")
                    }
                    )),
                    e.on("hover", (e=>{
                        e || (0,
                        a.setStyle)(t, "display", "none")
                    }
                    ))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "./progress": "aBBSH",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    c1GeG: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                tooltip: e.i18n.get("Screenshot"),
                mounted: t=>{
                    const {proxy: r, icons: o} = e;
                    (0,
                    a.append)(t, o.screenshot),
                    r(t, "click", (()=>{
                        e.screenshot()
                    }
                    ))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "6GRju": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>({
                ...t,
                tooltip: e.i18n.get("AirPlay"),
                mounted: t=>{
                    const {proxy: r, icons: o} = e;
                    (0,
                    a.append)(t, o.airplay),
                    r(t, "click", (()=>e.airplay()))
                }
            })
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "7iUum": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("../utils")
          , n = t("../utils/component")
          , i = a.interopDefault(n)
          , s = t("./playbackRate")
          , l = a.interopDefault(s)
          , c = t("./aspectRatio")
          , u = a.interopDefault(c)
          , p = t("./flip")
          , d = a.interopDefault(p)
          , f = t("./info")
          , h = a.interopDefault(f)
          , m = t("./version")
          , g = a.interopDefault(m)
          , v = t("./close")
          , y = a.interopDefault(v);
        class b extends i.default {
            constructor(t) {
                super(t),
                this.name = "contextmenu",
                this.$parent = t.template.$contextmenu,
                o.isMobile || this.init()
            }
            init() {
                const {option: t, proxy: e, template: {$player: r, $contextmenu: a}} = this.art;
                t.playbackRate && this.add((0,
                l.default)({
                    name: "playbackRate",
                    index: 10
                })),
                t.aspectRatio && this.add((0,
                u.default)({
                    name: "aspectRatio",
                    index: 20
                })),
                t.flip && this.add((0,
                d.default)({
                    name: "flip",
                    index: 30
                })),
                this.add((0,
                h.default)({
                    name: "info",
                    index: 40
                })),
                this.add((0,
                g.default)({
                    name: "version",
                    index: 50
                })),
                this.add((0,
                y.default)({
                    name: "close",
                    index: 60
                }));
                for (let e = 0; e < t.contextmenu.length; e++)
                    this.add(t.contextmenu[e]);
                e(r, "contextmenu", (t=>{
                    if (t.preventDefault(),
                    !this.art.constructor.CONTEXTMENU)
                        return;
                    this.show = !0;
                    const e = t.clientX
                      , n = t.clientY
                      , {height: i, width: s, left: l, top: c} = r.getBoundingClientRect()
                      , {height: u, width: p} = a.getBoundingClientRect();
                    let d = e - l
                      , f = n - c;
                    e + p > l + s && (d = s - p),
                    n + u > c + i && (f = i - u),
                    (0,
                    o.setStyles)(a, {
                        top: `${f}px`,
                        left: `${d}px`
                    })
                }
                )),
                e(r, "click", (t=>{
                    (0,
                    o.includeFromEvent)(t, a) || (this.show = !1)
                }
                )),
                this.art.on("blur", (()=>{
                    this.show = !1
                }
                ))
            }
        }
        r.default = b
    }
    , {
        "../utils": "h3rH9",
        "../utils/component": "guki8",
        "./playbackRate": "f1W36",
        "./aspectRatio": "afxZC",
        "./flip": "9jCuX",
        "./info": "k8wIZ",
        "./version": "bb0TU",
        "./close": "9zTkI",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    f1W36: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>{
                const {i18n: r, constructor: {PLAYBACK_RATE: o}} = e
                  , n = o.map((t=>`<span data-value="${t}">${1 === t ? r.get("Normal") : t.toFixed(1)}</span>`)).join("");
                return {
                    ...t,
                    html: `${r.get("Play Speed")}: ${n}`,
                    click: (t,r)=>{
                        const {value: a} = r.target.dataset;
                        a && (e.playbackRate = Number(a),
                        t.show = !1)
                    }
                    ,
                    mounted: t=>{
                        const r = (0,
                        a.query)('[data-value="1"]', t);
                        r && (0,
                        a.inverseClass)(r, "art-current"),
                        e.on("video:ratechange", (()=>{
                            const r = (0,
                            a.queryAll)("span", t).find((t=>Number(t.dataset.value) === e.playbackRate));
                            r && (0,
                            a.inverseClass)(r, "art-current")
                        }
                        ))
                    }
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    afxZC: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>{
                const {i18n: r, constructor: {ASPECT_RATIO: o}} = e
                  , n = o.map((t=>`<span data-value="${t}">${"default" === t ? r.get("Default") : t}</span>`)).join("");
                return {
                    ...t,
                    html: `${r.get("Aspect Ratio")}: ${n}`,
                    click: (t,r)=>{
                        const {value: a} = r.target.dataset;
                        a && (e.aspectRatio = a,
                        t.show = !1)
                    }
                    ,
                    mounted: t=>{
                        const r = (0,
                        a.query)('[data-value="default"]', t);
                        r && (0,
                        a.inverseClass)(r, "art-current"),
                        e.on("aspectRatio", (e=>{
                            const r = (0,
                            a.queryAll)("span", t).find((t=>t.dataset.value === e));
                            r && (0,
                            a.inverseClass)(r, "art-current")
                        }
                        ))
                    }
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "9jCuX": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return e=>{
                const {i18n: r, constructor: {FLIP: o}} = e
                  , n = o.map((t=>`<span data-value="${t}">${r.get((0,
                a.capitalize)(t))}</span>`)).join("");
                return {
                    ...t,
                    html: `${r.get("Video Flip")}: ${n}`,
                    click: (t,r)=>{
                        const {value: a} = r.target.dataset;
                        a && (e.flip = a.toLowerCase(),
                        t.show = !1)
                    }
                    ,
                    mounted: t=>{
                        const r = (0,
                        a.query)('[data-value="normal"]', t);
                        r && (0,
                        a.inverseClass)(r, "art-current"),
                        e.on("flip", (e=>{
                            const r = (0,
                            a.queryAll)("span", t).find((t=>t.dataset.value === e));
                            r && (0,
                            a.inverseClass)(r, "art-current")
                        }
                        ))
                    }
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    k8wIZ: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
        r.default = function(t) {
            return e=>({
                ...t,
                html: e.i18n.get("Video Info"),
                click: t=>{
                    e.info.show = !0,
                    t.show = !1
                }
            })
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    bb0TU: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
        r.default = function(t) {
            return {
                ...t,
                html: '<a href="https://artplayer.org" target="_blank">ArtPlayer 5.1.1</a>'
            }
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "9zTkI": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
        r.default = function(t) {
            return e=>({
                ...t,
                html: e.i18n.get("Close"),
                click: t=>{
                    t.show = !1
                }
            })
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    hD2Lg: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./utils")
          , n = t("./utils/component")
          , i = a.interopDefault(n);
        class s extends i.default {
            constructor(t) {
                super(t),
                this.name = "info",
                o.isMobile || this.init()
            }
            init() {
                const {proxy: t, constructor: e, template: {$infoPanel: r, $infoClose: a, $video: n}} = this.art;
                t(a, "click", (()=>{
                    this.show = !1
                }
                ));
                let i = null;
                const s = (0,
                o.queryAll)("[data-video]", r) || [];
                this.art.on("destroy", (()=>clearTimeout(i))),
                function t() {
                    for (let t = 0; t < s.length; t++) {
                        const e = s[t]
                          , r = n[e.dataset.video]
                          , a = "number" == typeof r ? r.toFixed(2) : r;
                        e.innerText !== a && (e.innerText = a)
                    }
                    i = setTimeout(t, e.INFO_LOOP_TIME)
                }()
            }
        }
        r.default = s
    }
    , {
        "./utils": "h3rH9",
        "./utils/component": "guki8",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    lum0D: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./utils")
          , n = t("./utils/component")
          , i = a.interopDefault(n)
          , s = t("option-validator")
          , l = a.interopDefault(s)
          , c = t("./scheme")
          , u = a.interopDefault(c);
        class p extends i.default {
            constructor(t) {
                super(t),
                this.name = "subtitle",
                this.eventDestroy = ()=>null,
                this.init(t.option.subtitle);
                let e = !1;
                t.on("video:timeupdate", (()=>{
                    if (!this.url)
                        return;
                    const t = this.art.template.$video.webkitDisplayingFullscreen;
                    "boolean" == typeof t && t !== e && (e = t,
                    this.createTrack(t ? "subtitles" : "metadata", this.url))
                }
                ))
            }
            get url() {
                return this.art.template.$track.src
            }
            set url(t) {
                this.switch(t)
            }
            get textTrack() {
                return this.art.template.$video.textTracks[0]
            }
            get activeCue() {
                return this.textTrack.activeCues[0]
            }
            style(t, e) {
                const {$subtitle: r} = this.art.template;
                return "object" == typeof t ? (0,
                o.setStyles)(r, t) : (0,
                o.setStyle)(r, t, e)
            }
            update() {
                const {$subtitle: t} = this.art.template;
                t.innerHTML = "",
                this.activeCue && (this.art.option.subtitle.escape ? t.innerHTML = this.activeCue.text.split(/\r?\n/).map((t=>`<div class="art-subtitle-line">${(0,
                o.escape)(t)}</div>`)).join("") : t.innerHTML = this.activeCue.text,
                this.art.emit("subtitleUpdate", this.activeCue.text))
            }
            async switch(t, e={}) {
                const {i18n: r, notice: a, option: o} = this.art
                  , n = {
                    ...o.subtitle,
                    ...e,
                    url: t
                }
                  , i = await this.init(n);
                return e.name && (a.show = `${r.get("Switch Subtitle")}: ${e.name}`),
                i
            }
            createTrack(t, e) {
                const {template: r, proxy: a, option: n} = this.art
                  , {$video: i, $track: s} = r
                  , l = (0,
                o.createElement)("track");
                l.default = !0,
                l.kind = t,
                l.src = e,
                l.label = n.subtitle.name || "Artplayer",
                l.track.mode = "hidden",
                this.eventDestroy(),
                (0,
                o.remove)(s),
                (0,
                o.append)(i, l),
                r.$track = l,
                this.eventDestroy = a(this.textTrack, "cuechange", (()=>this.update()))
            }
            async init(t) {
                const {notice: e, template: {$subtitle: r}} = this.art;
                if ((0,
                l.default)(t, u.default.subtitle),
                t.url)
                    return this.style(t.style),
                    fetch(t.url).then((t=>t.arrayBuffer())).then((e=>{
                        const r = new TextDecoder(t.encoding).decode(e);
                        switch (this.art.emit("subtitleLoad", t.url),
                        t.type || (0,
                        o.getExt)(t.url)) {
                        case "srt":
                            {
                                const e = (0,
                                o.srtToVtt)(r)
                                  , a = t.onVttLoad(e);
                                return (0,
                                o.vttToBlob)(a)
                            }
                        case "ass":
                            {
                                const e = (0,
                                o.assToVtt)(r)
                                  , a = t.onVttLoad(e);
                                return (0,
                                o.vttToBlob)(a)
                            }
                        case "vtt":
                            {
                                const e = t.onVttLoad(r);
                                return (0,
                                o.vttToBlob)(e)
                            }
                        default:
                            return t.url
                        }
                    }
                    )).then((t=>(r.innerHTML = "",
                    this.url === t || (URL.revokeObjectURL(this.url),
                    this.createTrack("metadata", t),
                    this.art.emit("subtitleSwitch", t)),
                    t))).catch((t=>{
                        throw r.innerHTML = "",
                        e.show = t,
                        t
                    }
                    ))
            }
        }
        r.default = p
    }
    , {
        "./utils": "h3rH9",
        "./utils/component": "guki8",
        "option-validator": "bAWi2",
        "./scheme": "AdvwB",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "1Epl5": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("../utils/error")
          , n = t("./clickInit")
          , i = a.interopDefault(n)
          , s = t("./hoverInit")
          , l = a.interopDefault(s)
          , c = t("./moveInit")
          , u = a.interopDefault(c)
          , p = t("./resizeInit")
          , d = a.interopDefault(p)
          , f = t("./gestureInit")
          , h = a.interopDefault(f)
          , m = t("./viewInit")
          , g = a.interopDefault(m)
          , v = t("./documentInit")
          , y = a.interopDefault(v)
          , b = t("./updateInit")
          , x = a.interopDefault(b);
        r.default = class {
            constructor(t) {
                this.destroyEvents = [],
                this.proxy = this.proxy.bind(this),
                this.hover = this.hover.bind(this),
                this.loadImg = this.loadImg.bind(this),
                (0,
                i.default)(t, this),
                (0,
                l.default)(t, this),
                (0,
                u.default)(t, this),
                (0,
                d.default)(t, this),
                (0,
                h.default)(t, this),
                (0,
                g.default)(t, this),
                (0,
                y.default)(t, this),
                (0,
                x.default)(t, this)
            }
            proxy(t, e, r, a={}) {
                if (Array.isArray(e))
                    return e.map((e=>this.proxy(t, e, r, a)));
                t.addEventListener(e, r, a);
                const o = ()=>t.removeEventListener(e, r, a);
                return this.destroyEvents.push(o),
                o
            }
            hover(t, e, r) {
                e && this.proxy(t, "mouseenter", e),
                r && this.proxy(t, "mouseleave", r)
            }
            loadImg(t) {
                return new Promise(((e,r)=>{
                    let a;
                    if (t instanceof HTMLImageElement)
                        a = t;
                    else {
                        if ("string" != typeof t)
                            return r(new (0,
                            o.ArtPlayerError)("Unable to get Image"));
                        a = new Image,
                        a.src = t
                    }
                    if (a.complete)
                        return e(a);
                    this.proxy(a, "load", (()=>e(a))),
                    this.proxy(a, "error", (()=>r(new (0,
                    o.ArtPlayerError)(`Failed to load Image: ${a.src}`))))
                }
                ))
            }
            remove(t) {
                const e = this.destroyEvents.indexOf(t);
                e > -1 && (t(),
                this.destroyEvents.splice(e, 1))
            }
            destroy() {
                for (let t = 0; t < this.destroyEvents.length; t++)
                    this.destroyEvents[t]()
            }
        }
    }
    , {
        "../utils/error": "2nFlF",
        "./clickInit": "gzL6e",
        "./hoverInit": "kpTJf",
        "./moveInit": "ef6qz",
        "./resizeInit": "9TXOX",
        "./gestureInit": "dePMU",
        "./viewInit": "hDyWF",
        "./documentInit": "7RjDP",
        "./updateInit": "8SmBT",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    gzL6e: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t, e) {
            const {constructor: r, template: {$player: o, $video: n}} = t;
            e.proxy(document, ["click", "contextmenu"], (e=>{
                (0,
                a.includeFromEvent)(e, o) ? (t.isInput = "INPUT" === e.target.tagName,
                t.isFocus = !0,
                t.emit("focus", e)) : (t.isInput = !1,
                t.isFocus = !1,
                t.emit("blur", e))
            }
            ));
            let i = 0;
            e.proxy(n, "click", (e=>{
                const o = Date.now()
                  , {MOBILE_CLICK_PLAY: n, DBCLICK_TIME: s, MOBILE_DBCLICK_PLAY: l, DBCLICK_FULLSCREEN: c} = r;
                o - i <= s ? (t.emit("dblclick", e),
                a.isMobile ? !t.isLock && l && t.toggle() : c && (t.fullscreen = !t.fullscreen)) : (t.emit("click", e),
                a.isMobile ? !t.isLock && n && t.toggle() : t.toggle()),
                i = o
            }
            ))
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    kpTJf: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t, e) {
            const {$player: r} = t.template;
            e.hover(r, (e=>{
                (0,
                a.addClass)(r, "art-hover"),
                t.emit("hover", !0, e)
            }
            ), (e=>{
                (0,
                a.removeClass)(r, "art-hover"),
                t.emit("hover", !1, e)
            }
            ))
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    ef6qz: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
        r.default = function(t, e) {
            const {$player: r} = t.template;
            e.proxy(r, "mousemove", (e=>{
                t.emit("mousemove", e)
            }
            ))
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "9TXOX": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t, e) {
            const {option: r, constructor: o} = t;
            t.on("resize", (()=>{
                const {aspectRatio: e, notice: a} = t;
                "standard" === t.state && r.autoSize && t.autoSize(),
                t.aspectRatio = e,
                a.show = ""
            }
            ));
            const n = (0,
            a.debounce)((()=>t.emit("resize")), o.RESIZE_TIME);
            e.proxy(window, ["orientationchange", "resize"], (()=>n())),
            screen && screen.orientation && screen.orientation.onchange && e.proxy(screen.orientation, "change", (()=>n()))
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    dePMU: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils")
          , o = t("../control/progress");
        function n(t, e, r, a) {
            var o = e - a
              , n = r - t
              , i = 0;
            if (Math.abs(n) < 2 && Math.abs(o) < 2)
                return i;
            var s = function(t, e) {
                return 180 * Math.atan2(e, t) / Math.PI
            }(n, o);
            return s >= -45 && s < 45 ? i = 4 : s >= 45 && s < 135 ? i = 1 : s >= -135 && s < -45 ? i = 2 : (s >= 135 && s <= 180 || s >= -180 && s < -135) && (i = 3),
            i
        }
        r.default = function(t, e) {
            if (a.isMobile && !t.option.isLive) {
                const {$video: r, $progress: i} = t.template;
                let s = null
                  , l = !1
                  , c = 0
                  , u = 0
                  , p = 0;
                const d = e=>{
                    if (1 === e.touches.length && !t.isLock) {
                        s === i && (0,
                        o.setCurrentTime)(t, e),
                        l = !0;
                        const {pageX: r, pageY: a} = e.touches[0];
                        c = r,
                        u = a,
                        p = t.currentTime
                    }
                }
                  , f = e=>{
                    if (1 === e.touches.length && l && t.duration) {
                        const {pageX: o, pageY: i} = e.touches[0]
                          , l = n(c, u, o, i)
                          , d = [3, 4].includes(l)
                          , f = [1, 2].includes(l);
                        if (d && !t.isRotate || f && t.isRotate) {
                            const e = (0,
                            a.clamp)((o - c) / t.width, -1, 1)
                              , n = (0,
                            a.clamp)((i - u) / t.height, -1, 1)
                              , l = t.isRotate ? n : e
                              , d = s === r ? t.constructor.TOUCH_MOVE_RATIO : 1
                              , f = (0,
                            a.clamp)(p + t.duration * l * d, 0, t.duration);
                            t.seek = f,
                            t.emit("setBar", "played", (0,
                            a.clamp)(f / t.duration, 0, 1)),
                            t.notice.show = `${(0,
                            a.secondToTime)(f)} / ${(0,
                            a.secondToTime)(t.duration)}`
                        }
                    }
                }
                  , h = ()=>{
                    l && (c = 0,
                    u = 0,
                    p = 0,
                    l = !1,
                    s = null)
                }
                ;
                e.proxy(i, "touchstart", (t=>{
                    s = i,
                    d(t)
                }
                )),
                e.proxy(r, "touchstart", (t=>{
                    s = r,
                    d(t)
                }
                )),
                e.proxy(r, "touchmove", f),
                e.proxy(i, "touchmove", f),
                e.proxy(document, "touchend", h)
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "../control/progress": "aBBSH",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    hDyWF: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t, e) {
            const {option: r, constructor: o, template: {$container: n}} = t
              , i = (0,
            a.throttle)((()=>{
                t.emit("view", (0,
                a.isInViewport)(n, o.SCROLL_GAP))
            }
            ), o.SCROLL_TIME);
            e.proxy(window, "scroll", (()=>i())),
            t.on("view", (e=>{
                r.autoMini && (t.mini = !e)
            }
            ))
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "7RjDP": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
        r.default = function(t, e) {
            e.proxy(document, "mousemove", (e=>{
                t.emit("document:mousemove", e)
            }
            )),
            e.proxy(document, "mouseup", (e=>{
                t.emit("document:mouseup", e)
            }
            ))
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "8SmBT": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
        r.default = function(t) {
            if (t.constructor.USE_RAF) {
                let e = null;
                !function r() {
                    t.playing && t.emit("raf"),
                    t.isDestroy || (e = requestAnimationFrame(r))
                }(),
                t.on("destroy", (()=>{
                    cancelAnimationFrame(e)
                }
                ))
            }
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    eTow4: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("./utils");
        r.default = class {
            constructor(t) {
                this.art = t,
                this.keys = {},
                t.option.hotkey && !a.isMobile && this.init()
            }
            init() {
                const {proxy: t, constructor: e} = this.art;
                this.add(27, (()=>{
                    this.art.fullscreenWeb && (this.art.fullscreenWeb = !1)
                }
                )),
                this.add(32, (()=>{
                    this.art.toggle()
                }
                )),
                this.add(37, (()=>{
                    this.art.backward = e.SEEK_STEP
                }
                )),
                this.add(38, (()=>{
                    this.art.volume += e.VOLUME_STEP
                }
                )),
                this.add(39, (()=>{
                    this.art.forward = e.SEEK_STEP
                }
                )),
                this.add(40, (()=>{
                    this.art.volume -= e.VOLUME_STEP
                }
                )),
                t(window, "keydown", (t=>{
                    if (this.art.isFocus) {
                        const e = document.activeElement.tagName.toUpperCase()
                          , r = document.activeElement.getAttribute("contenteditable");
                        if (!("INPUT" === e || "TEXTAREA" === e || "" === r || "true" === r || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)) {
                            const e = this.keys[t.keyCode];
                            if (e) {
                                t.preventDefault();
                                for (let r = 0; r < e.length; r++)
                                    e[r].call(this.art, t);
                                this.art.emit("hotkey", t)
                            }
                        }
                    }
                }
                ))
            }
            add(t, e) {
                return this.keys[t] ? this.keys[t].push(e) : this.keys[t] = [e],
                this
            }
            remove(t, e) {
                if (this.keys[t]) {
                    const r = this.keys[t].indexOf(e);
                    -1 !== r && this.keys[t].splice(r, 1)
                }
                return this
            }
        }
    }
    , {
        "./utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "4fDoD": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./utils/component")
          , n = a.interopDefault(o);
        class i extends n.default {
            constructor(t) {
                super(t);
                const {option: e, template: {$layer: r}} = t;
                this.name = "layer",
                this.$parent = r;
                for (let t = 0; t < e.layers.length; t++)
                    this.add(e.layers[t])
            }
        }
        r.default = i
    }
    , {
        "./utils/component": "guki8",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    fE0Sp: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./utils")
          , n = t("./utils/component")
          , i = a.interopDefault(n);
        class s extends i.default {
            constructor(t) {
                super(t),
                this.name = "loading",
                (0,
                o.append)(t.template.$loading, t.icons.loading)
            }
        }
        r.default = s
    }
    , {
        "./utils": "h3rH9",
        "./utils/component": "guki8",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "9PuGy": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("./utils");
        r.default = class {
            constructor(t) {
                this.art = t,
                this.timer = null
            }
            set show(t) {
                const {constructor: e, template: {$player: r, $noticeInner: o}} = this.art;
                t ? (o.innerText = t instanceof Error ? t.message.trim() : t,
                (0,
                a.addClass)(r, "art-notice-show"),
                clearTimeout(this.timer),
                this.timer = setTimeout((()=>{
                    o.innerText = "",
                    (0,
                    a.removeClass)(r, "art-notice-show")
                }
                ), e.NOTICE_TIME)) : (0,
                a.removeClass)(r, "art-notice-show")
            }
        }
    }
    , {
        "./utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "2etr0": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./utils")
          , n = t("./utils/component")
          , i = a.interopDefault(n);
        class s extends i.default {
            constructor(t) {
                super(t),
                this.name = "mask";
                const {template: e, icons: r, events: a} = t
                  , n = (0,
                o.append)(e.$state, r.state)
                  , i = (0,
                o.append)(e.$state, r.error);
                (0,
                o.setStyle)(i, "display", "none"),
                t.on("destroy", (()=>{
                    (0,
                    o.setStyle)(n, "display", "none"),
                    (0,
                    o.setStyle)(i, "display", null)
                }
                )),
                a.proxy(e.$state, "click", (()=>t.play()))
            }
        }
        r.default = s
    }
    , {
        "./utils": "h3rH9",
        "./utils/component": "guki8",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "6dYSr": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("../utils")
          , n = t("bundle-text:./loading.svg")
          , i = a.interopDefault(n)
          , s = t("bundle-text:./state.svg")
          , l = a.interopDefault(s)
          , c = t("bundle-text:./check.svg")
          , u = a.interopDefault(c)
          , p = t("bundle-text:./play.svg")
          , d = a.interopDefault(p)
          , f = t("bundle-text:./pause.svg")
          , h = a.interopDefault(f)
          , m = t("bundle-text:./volume.svg")
          , g = a.interopDefault(m)
          , v = t("bundle-text:./volume-close.svg")
          , y = a.interopDefault(v)
          , b = t("bundle-text:./screenshot.svg")
          , x = a.interopDefault(b)
          , w = t("bundle-text:./setting.svg")
          , j = a.interopDefault(w)
          , k = t("bundle-text:./arrow-left.svg")
          , $ = a.interopDefault(k)
          , S = t("bundle-text:./arrow-right.svg")
          , I = a.interopDefault(S)
          , T = t("bundle-text:./playback-rate.svg")
          , E = a.interopDefault(T)
          , O = t("bundle-text:./aspect-ratio.svg")
          , M = a.interopDefault(O)
          , C = t("bundle-text:./config.svg")
          , F = a.interopDefault(C)
          , H = t("bundle-text:./pip.svg")
          , B = a.interopDefault(H)
          , D = t("bundle-text:./lock.svg")
          , A = a.interopDefault(D)
          , R = t("bundle-text:./unlock.svg")
          , z = a.interopDefault(R)
          , L = t("bundle-text:./fullscreen-off.svg")
          , P = a.interopDefault(L)
          , N = t("bundle-text:./fullscreen-on.svg")
          , _ = a.interopDefault(N)
          , Z = t("bundle-text:./fullscreen-web-off.svg")
          , q = a.interopDefault(Z)
          , V = t("bundle-text:./fullscreen-web-on.svg")
          , W = a.interopDefault(V)
          , U = t("bundle-text:./switch-on.svg")
          , Y = a.interopDefault(U)
          , K = t("bundle-text:./switch-off.svg")
          , G = a.interopDefault(K)
          , X = t("bundle-text:./flip.svg")
          , J = a.interopDefault(X)
          , Q = t("bundle-text:./error.svg")
          , tt = a.interopDefault(Q)
          , et = t("bundle-text:./close.svg")
          , rt = a.interopDefault(et)
          , at = t("bundle-text:./airplay.svg")
          , ot = a.interopDefault(at);
        r.default = class {
            constructor(t) {
                const e = {
                    loading: i.default,
                    state: l.default,
                    play: d.default,
                    pause: h.default,
                    check: u.default,
                    volume: g.default,
                    volumeClose: y.default,
                    screenshot: x.default,
                    setting: j.default,
                    pip: B.default,
                    arrowLeft: $.default,
                    arrowRight: I.default,
                    playbackRate: E.default,
                    aspectRatio: M.default,
                    config: F.default,
                    lock: A.default,
                    flip: J.default,
                    unlock: z.default,
                    fullscreenOff: P.default,
                    fullscreenOn: _.default,
                    fullscreenWebOff: q.default,
                    fullscreenWebOn: W.default,
                    switchOn: Y.default,
                    switchOff: G.default,
                    error: tt.default,
                    close: rt.default,
                    airplay: ot.default,
                    ...t.option.icons
                };
                for (const t in e)
                    (0,
                    o.def)(this, t, {
                        get: ()=>(0,
                        o.getIcon)(t, e[t])
                    })
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "bundle-text:./loading.svg": "fY5Gt",
        "bundle-text:./state.svg": "iNfLt",
        "bundle-text:./check.svg": "jtE9u",
        "bundle-text:./play.svg": "elgfY",
        "bundle-text:./pause.svg": "eKokJ",
        "bundle-text:./volume.svg": "hNB4y",
        "bundle-text:./volume-close.svg": "i9vta",
        "bundle-text:./screenshot.svg": "kB3Mf",
        "bundle-text:./setting.svg": "3MONs",
        "bundle-text:./arrow-left.svg": "iMCpk",
        "bundle-text:./arrow-right.svg": "3oe4L",
        "bundle-text:./playback-rate.svg": "liE22",
        "bundle-text:./aspect-ratio.svg": "8HqYc",
        "bundle-text:./config.svg": "hYAAH",
        "bundle-text:./pip.svg": "jmNrH",
        "bundle-text:./lock.svg": "cIqko",
        "bundle-text:./unlock.svg": "65zy4",
        "bundle-text:./fullscreen-off.svg": "jaJRT",
        "bundle-text:./fullscreen-on.svg": "cRY1X",
        "bundle-text:./fullscreen-web-off.svg": "3aVGL",
        "bundle-text:./fullscreen-web-on.svg": "4DiVn",
        "bundle-text:./switch-on.svg": "kwdKE",
        "bundle-text:./switch-off.svg": "bWfXZ",
        "bundle-text:./flip.svg": "h3zZ9",
        "bundle-text:./error.svg": "7Oyth",
        "bundle-text:./close.svg": "U5Jcy",
        "bundle-text:./airplay.svg": "jK5Fx",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    fY5Gt: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><path fill="none" class="bk" d="M0 0h100v100H0z"/><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(30 105.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(60 75.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(90 65 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(120 58.66 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(150 54.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(180 50 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-150 45.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-120 41.34 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-90 35 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-60 24.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-30 -5.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect></svg>'
    }
    , {}],
    iNfLt: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#fff" d="M9.5 9.325v5.35q0 .575.525.875t1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>'
    }
    , {}],
    jtE9u: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:100%;height:100%"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff"/></svg>'
    }
    , {}],
    elgfY: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M17.982 9.275 8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"/></svg>'
    }
    , {}],
    eKokJ: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"/></svg>'
    }
    , {}],
    hNB4y: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M10.188 4.65 6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zm4.258-.872a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"/><path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"/></svg>'
    }
    , {}],
    i9vta: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"/><path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zm5.195 13.195-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"/></svg>'
    }
    , {}],
    kB3Mf: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50"><path d="M19.402 6a5 5 0 0 0-4.902 4.012L14.098 12H9a5 5 0 0 0-5 5v21a5 5 0 0 0 5 5h32a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5h-5.098l-.402-1.988A5 5 0 0 0 30.598 6ZM25 17c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10Zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Z"/></svg>'
    }
    , {}],
    "3MONs": [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><circle cx="11" cy="11" r="2"/><path d="M19.164 8.861 17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>'
    }
    , {}],
    iMCpk: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m19.41 20.09-4.58-4.59 4.58-4.59L18 9.5l-6 6 6 6z" fill="#fff"/></svg>'
    }
    , {}],
    "3oe4L": [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m12.59 20.34 4.58-4.59-4.58-4.59L14 9.75l6 6-6 6z" fill="#fff"/></svg>'
    }
    , {}],
    liE22: [function(t, e, r) {
        e.exports = '<svg height="24" width="24"><path d="M10 8v8l6-4-6-4zM6.3 5l-.6-.8C7.2 3 9 2.2 11 2l.1 1c-1.8.2-3.4.9-4.8 2zM5 6.3l-.8-.6C3 7.2 2.2 9 2 11l1 .1c.2-1.8.9-3.4 2-4.8zm0 11.4c-1.1-1.4-1.8-3.1-2-4.8L2 13c.2 2 1 3.8 2.2 5.4l.8-.7zm6.1 3.3c-1.8-.2-3.4-.9-4.8-2l-.6.8C7.2 21 9 21.8 11 22l.1-1zM22 12c0-5.2-3.9-9.4-9-10l-.1 1c4.6.5 8.1 4.3 8.1 9s-3.5 8.5-8.1 9l.1 1c5.2-.5 9-4.8 9-10z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>'
    }
    , {}],
    "8HqYc": [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" style="width:100%;height:100%;transform:translate(0,0)"><defs><clipPath id="__lottie_element_216"><path d="M0 0h88v88H0z"/></clipPath></defs><g style="display:block" clip-path="url(\'#__lottie_element_216\')"><path fill="#FFF" d="m12.438-12.702-2.82 2.82c-.79.79-.79 2.05 0 2.83l7.07 7.07-7.07 7.07c-.79.79-.79 2.05 0 2.83l2.82 2.83c.79.78 2.05.78 2.83 0l11.32-11.31c.78-.78.78-2.05 0-2.83l-11.32-11.31c-.78-.79-2.04-.79-2.83 0zm-24.88 0c-.74-.74-1.92-.78-2.7-.12l-.13.12-11.31 11.31a2 2 0 0 0-.12 2.7l.12.13 11.31 11.31a2 2 0 0 0 2.7.12l.13-.12 2.83-2.83c.74-.74.78-1.91.11-2.7l-.11-.13-7.07-7.07 7.07-7.07c.74-.74.78-1.91.11-2.7l-.11-.13-2.83-2.82zM28-28c4.42 0 8 3.58 8 8v40c0 4.42-3.58 8-8 8h-56c-4.42 0-8-3.58-8-8v-40c0-4.42 3.58-8 8-8h56z" style="--darkreader-inline-fill:#a8a6a4" transform="translate(44 44)"/></g></svg>'
    }
    , {}],
    hYAAH: [function(t, e, r) {
        e.exports = '<svg height="24" width="24"><path d="M15 17h6v1h-6v-1zm-4 0H3v1h8v2h1v-5h-1v2zm3-9h1V3h-1v2H3v1h11v2zm4-3v1h3V5h-3zM6 14h1V9H6v2H3v1h3v2zm4-2h11v-1H10v1z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>'
    }
    , {}],
    jmNrH: [function(t, e, r) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="32" width="32"><path d="M25 17h-8v6h8v-6Zm4 8V10.98C29 9.88 28.1 9 27 9H9c-1.1 0-2 .88-2 1.98V25c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2Zm-2 .02H9V10.97h18v14.05Z"/></svg>'
    }
    , {}],
    cIqko: [function(t, e, r) {
        e.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M298.667 426.667v-85.334a213.333 213.333 0 1 1 426.666 0v85.334H768A85.333 85.333 0 0 1 853.333 512v256A85.333 85.333 0 0 1 768 853.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667zM512 213.333a128 128 0 0 0-128 128v85.334h256v-85.334a128 128 0 0 0-128-128z" fill="#fff"/></svg>'
    }
    , {}],
    "65zy4": [function(t, e, r) {
        e.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="m666.752 194.517-49.365 74.112A128 128 0 0 0 384 341.333l.043 85.334h384A85.333 85.333 0 0 1 853.376 512v256a85.333 85.333 0 0 1-85.333 85.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667v-85.334a213.333 213.333 0 0 1 368.085-146.816z" fill="#fff"/></svg>'
    }
    , {}],
    jaJRT: [function(t, e, r) {
        e.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M768 298.667h170.667V384h-256V128H768v170.667zM341.333 384h-256v-85.333H256V128h85.333v256zM768 725.333V896h-85.333V640h256v85.333H768zM341.333 640v256H256V725.333H85.333V640h256z"/></svg>'
    }
    , {}],
    cRY1X: [function(t, e, r) {
        e.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M625.778 256H768v142.222h113.778v-256h-256V256zM256 398.222V256h142.222V142.222h-256v256H256zm512 227.556V768H625.778v113.778h256v-256H768zM398.222 768H256V625.778H142.222v256h256V768z"/></svg>'
    }
    , {}],
    "3aVGL": [function(t, e, r) {
        e.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM896 512a64 64 0 0 1 7.488 127.552L896 640H768v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208l8-.384H896zm-640 0a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144l-8 .448H256z"/></svg>'
    }
    , {}],
    "4DiVn": [function(t, e, r) {
        e.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zm-576 64a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144l8-.448H448zm256 640a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 .384H704z"/></svg>'
    }
    , {}],
    kwdKE: [function(t, e, r) {
        e.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1664 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024zm0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z"/></svg>'
    }
    , {}],
    bWfXZ: [function(t, e, r) {
        e.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1740 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M511.898 1024h670.515c282.419-.41 511.18-229.478 511.18-511.898 0-282.419-228.761-511.488-511.18-511.897H511.898C229.478.615.717 229.683.717 512.102c0 282.42 228.761 511.488 511.18 511.898zm-.564-975.36A464.589 464.589 0 1 1 48.026 513.024 463.872 463.872 0 0 1 511.334 48.435v.205z"/></svg>'
    }
    , {}],
    h3zZ9: [function(t, e, r) {
        e.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M554.667 810.667V896h-85.334v-85.333h85.334zm-384-632.662a42.667 42.667 0 0 1 34.986 18.219l203.904 291.328a42.667 42.667 0 0 1 0 48.896L205.611 827.776A42.667 42.667 0 0 1 128 803.328V220.672a42.667 42.667 0 0 1 42.667-42.667zm682.666 0a42.667 42.667 0 0 1 42.368 37.718l.299 4.949v582.656a42.667 42.667 0 0 1-74.24 28.63l-3.413-4.182-203.904-291.328a42.667 42.667 0 0 1-3.03-43.861l3.03-5.035 203.946-291.328a42.667 42.667 0 0 1 34.944-18.219zM554.667 640v85.333h-85.334V640h85.334zm-358.4-320.896V716.8L335.957 512 196.31 319.104zm358.4 150.23v85.333h-85.334v-85.334h85.334zm0-170.667V384h-85.334v-85.333h85.334zm0-170.667v85.333h-85.334V128h85.334z" fill="#fff"/></svg>'
    }
    , {}],
    "7Oyth": [function(t, e, r) {
        e.exports = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M593.818 168.55 949.82 763.76c26.153 43.746 10.732 99.738-34.447 125.052-14.397 8.069-30.72 12.308-47.37 12.308H155.976c-52.224 0-94.536-40.96-94.536-91.505 0-16.097 4.383-31.928 12.718-45.875l356.004-595.19c26.173-43.724 84.009-58.654 129.208-33.341a93.082 93.082 0 0 1 34.448 33.341zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88zm0-512a72.315 72.315 0 0 0-71.762 81.306l25.723 205.721a46.408 46.408 0 0 0 92.078 0l25.723-205.742A72.315 72.315 0 0 0 512 307.2z"/></svg>'
    }
    , {}],
    U5Jcy: [function(t, e, r) {
        e.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"/></svg>'
    }
    , {}],
    jK5Fx: [function(t, e, r) {
        e.exports = '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/><path d="M4 17h10l-5-6z"/></g></svg>'
    }
    , {}],
    bRHiA: [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("./flip")
          , n = a.interopDefault(o)
          , i = t("./aspectRatio")
          , s = a.interopDefault(i)
          , l = t("./playbackRate")
          , c = a.interopDefault(l)
          , u = t("./subtitleOffset")
          , p = a.interopDefault(u)
          , d = t("../utils/component")
          , f = a.interopDefault(d)
          , h = t("../utils/error")
          , m = t("../utils");
        class g extends f.default {
            constructor(t) {
                super(t);
                const {option: e, controls: r, template: {$setting: a}} = t;
                this.name = "setting",
                this.$parent = a,
                this.option = [],
                this.events = [],
                this.cache = new Map,
                e.setting && (this.init(),
                t.on("blur", (()=>{
                    this.show && (this.show = !1,
                    this.render(this.option))
                }
                )),
                t.on("focus", (t=>{
                    const e = (0,
                    m.includeFromEvent)(t, r.setting)
                      , a = (0,
                    m.includeFromEvent)(t, this.$parent);
                    !this.show || e || a || (this.show = !1,
                    this.render(this.option))
                }
                )))
            }
            static makeRecursion(t, e, r) {
                for (let a = 0; a < t.length; a++) {
                    const o = t[a];
                    o.$parentItem = e,
                    o.$parentList = r,
                    g.makeRecursion(o.selector || [], o, t)
                }
                return t
            }
            get defaultSettings() {
                const t = []
                  , {option: e} = this.art;
                return e.playbackRate && t.push((0,
                c.default)(this.art)),
                e.aspectRatio && t.push((0,
                s.default)(this.art)),
                e.flip && t.push((0,
                n.default)(this.art)),
                e.subtitleOffset && t.push((0,
                p.default)(this.art)),
                t
            }
            init() {
                const {option: t} = this.art
                  , e = [...this.defaultSettings, ...t.settings];
                this.option = g.makeRecursion(e),
                this.destroy(),
                this.render(this.option)
            }
            destroy() {
                for (let t = 0; t < this.events.length; t++)
                    this.art.events.remove(this.events[t]);
                this.$parent.innerHTML = "",
                this.events = [],
                this.cache = new Map
            }
            find(t="", e=this.option) {
                for (let r = 0; r < e.length; r++) {
                    const a = e[r];
                    if (a.name === t)
                        return a;
                    {
                        const e = this.find(t, a.selector || []);
                        if (e)
                            return e
                    }
                }
            }
            remove(t) {
                const e = this.find(t);
                (0,
                h.errorHandle)(e, `Can't find [${t}] from the [setting]`);
                const r = e.$parentItem ? e.$parentItem.selector : this.option;
                return r.splice(r.indexOf(e), 1),
                this.option = g.makeRecursion(this.option),
                this.destroy(),
                this.render(this.option),
                this.option
            }
            update(t) {
                const e = this.find(t.name);
                return e ? (Object.assign(e, t),
                this.option = g.makeRecursion(this.option),
                this.destroy(),
                this.render(this.option)) : this.add(t),
                this.option
            }
            add(t) {
                return this.option.push(t),
                this.option = g.makeRecursion(this.option),
                this.destroy(),
                this.render(this.option),
                this.option
            }
            creatHeader(t) {
                const {icons: e, proxy: r, constructor: a} = this.art
                  , o = (0,
                m.createElement)("div");
                (0,
                m.setStyle)(o, "height", `${a.SETTING_ITEM_HEIGHT}px`),
                (0,
                m.addClass)(o, "art-setting-item"),
                (0,
                m.addClass)(o, "art-setting-item-back");
                const n = (0,
                m.append)(o, '<div class="art-setting-item-left"></div>')
                  , i = (0,
                m.createElement)("div");
                (0,
                m.addClass)(i, "art-setting-item-left-icon"),
                (0,
                m.append)(i, e.arrowLeft),
                (0,
                m.append)(n, i),
                (0,
                m.append)(n, t.$parentItem.html);
                const s = r(o, "click", (()=>this.render(t.$parentList)));
                return this.events.push(s),
                o
            }
            creatItem(t, e) {
                const {icons: r, proxy: a, constructor: o} = this.art
                  , n = (0,
                m.createElement)("div");
                (0,
                m.addClass)(n, "art-setting-item"),
                (0,
                m.setStyle)(n, "height", `${o.SETTING_ITEM_HEIGHT}px`),
                (0,
                m.isStringOrNumber)(e.name) && (n.dataset.name = e.name),
                (0,
                m.isStringOrNumber)(e.value) && (n.dataset.value = e.value);
                const i = (0,
                m.append)(n, '<div class="art-setting-item-left"></div>')
                  , s = (0,
                m.append)(n, '<div class="art-setting-item-right"></div>')
                  , l = (0,
                m.createElement)("div");
                switch ((0,
                m.addClass)(l, "art-setting-item-left-icon"),
                t) {
                case "switch":
                case "range":
                    (0,
                    m.append)(l, (0,
                    m.isStringOrNumber)(e.icon) || e.icon instanceof Element ? e.icon : r.config);
                    break;
                case "selector":
                    e.selector && e.selector.length ? (0,
                    m.append)(l, (0,
                    m.isStringOrNumber)(e.icon) || e.icon instanceof Element ? e.icon : r.config) : (0,
                    m.append)(l, r.check)
                }
                (0,
                m.append)(i, l),
                e.$icon = l,
                (0,
                m.def)(e, "icon", {
                    configurable: !0,
                    get: ()=>l.innerHTML,
                    set(t) {
                        (0,
                        m.isStringOrNumber)(t) && (l.innerHTML = t)
                    }
                });
                const c = (0,
                m.createElement)("div");
                (0,
                m.addClass)(c, "art-setting-item-left-text"),
                (0,
                m.append)(c, e.html || ""),
                (0,
                m.append)(i, c),
                e.$html = c,
                (0,
                m.def)(e, "html", {
                    configurable: !0,
                    get: ()=>c.innerHTML,
                    set(t) {
                        (0,
                        m.isStringOrNumber)(t) && (c.innerHTML = t)
                    }
                });
                const u = (0,
                m.createElement)("div");
                switch ((0,
                m.addClass)(u, "art-setting-item-right-tooltip"),
                (0,
                m.append)(u, e.tooltip || ""),
                (0,
                m.append)(s, u),
                e.$tooltip = u,
                (0,
                m.def)(e, "tooltip", {
                    configurable: !0,
                    get: ()=>u.innerHTML,
                    set(t) {
                        (0,
                        m.isStringOrNumber)(t) && (u.innerHTML = t)
                    }
                }),
                t) {
                case "switch":
                    {
                        const t = (0,
                        m.createElement)("div");
                        (0,
                        m.addClass)(t, "art-setting-item-right-icon");
                        const a = (0,
                        m.append)(t, r.switchOn)
                          , o = (0,
                        m.append)(t, r.switchOff);
                        (0,
                        m.setStyle)(e.switch ? o : a, "display", "none"),
                        (0,
                        m.append)(s, t),
                        e.$switch = e.switch,
                        (0,
                        m.def)(e, "switch", {
                            configurable: !0,
                            get: ()=>e.$switch,
                            set(t) {
                                e.$switch = t,
                                t ? ((0,
                                m.setStyle)(o, "display", "none"),
                                (0,
                                m.setStyle)(a, "display", null)) : ((0,
                                m.setStyle)(o, "display", null),
                                (0,
                                m.setStyle)(a, "display", "none"))
                            }
                        });
                        break
                    }
                case "range":
                    {
                        const t = (0,
                        m.createElement)("div");
                        (0,
                        m.addClass)(t, "art-setting-item-right-icon");
                        const r = (0,
                        m.append)(t, '<input type="range">');
                        r.value = e.range[0] || 0,
                        r.min = e.range[1] || 0,
                        r.max = e.range[2] || 10,
                        r.step = e.range[3] || 1,
                        (0,
                        m.addClass)(r, "art-setting-range"),
                        (0,
                        m.append)(s, t),
                        e.$range = r,
                        (0,
                        m.def)(e, "range", {
                            configurable: !0,
                            get: ()=>r.valueAsNumber,
                            set(t) {
                                r.value = Number(t)
                            }
                        })
                    }
                    break;
                case "selector":
                    if (e.selector && e.selector.length) {
                        const t = (0,
                        m.createElement)("div");
                        (0,
                        m.addClass)(t, "art-setting-item-right-icon"),
                        (0,
                        m.append)(t, r.arrowRight),
                        (0,
                        m.append)(s, t)
                    }
                }
                switch (t) {
                case "switch":
                    if (e.onSwitch) {
                        const t = a(n, "click", (async t=>{
                            e.switch = await e.onSwitch.call(this.art, e, n, t)
                        }
                        ));
                        this.events.push(t)
                    }
                    break;
                case "range":
                    if (e.$range) {
                        if (e.onRange) {
                            const t = a(e.$range, "change", (async t=>{
                                e.tooltip = await e.onRange.call(this.art, e, n, t)
                            }
                            ));
                            this.events.push(t)
                        }
                        if (e.onChange) {
                            const t = a(e.$range, "input", (async t=>{
                                e.tooltip = await e.onChange.call(this.art, e, n, t)
                            }
                            ));
                            this.events.push(t)
                        }
                    }
                    break;
                case "selector":
                    {
                        const t = a(n, "click", (async t=>{
                            if (e.selector && e.selector.length)
                                this.render(e.selector, e.width);
                            else {
                                (0,
                                m.inverseClass)(n, "art-current");
                                for (let t = 0; t < e.$parentItem.selector.length; t++) {
                                    const r = e.$parentItem.selector[t];
                                    r.default = r === e
                                }
                                if (e.$parentList && this.render(e.$parentList),
                                e.$parentItem && e.$parentItem.onSelect) {
                                    const r = await e.$parentItem.onSelect.call(this.art, e, n, t);
                                    e.$parentItem.$tooltip && (0,
                                    m.isStringOrNumber)(r) && (e.$parentItem.$tooltip.innerHTML = r)
                                }
                            }
                        }
                        ));
                        this.events.push(t),
                        e.default && (0,
                        m.addClass)(n, "art-current")
                    }
                }
                return n
            }
            updateStyle(t) {
                const {controls: e, constructor: r, template: {$player: a, $setting: o}} = this.art;
                if (e.setting && !m.isMobile) {
                    const n = t || r.SETTING_WIDTH
                      , {left: i, width: s} = e.setting.getBoundingClientRect()
                      , {left: l, width: c} = a.getBoundingClientRect()
                      , u = i - l + s / 2 - n / 2;
                    u + n > c ? ((0,
                    m.setStyle)(o, "left", null),
                    (0,
                    m.setStyle)(o, "right", null)) : ((0,
                    m.setStyle)(o, "left", `${u}px`),
                    (0,
                    m.setStyle)(o, "right", "auto"))
                }
            }
            render(t, e) {
                const {constructor: r} = this.art;
                if (this.cache.has(t)) {
                    const e = this.cache.get(t);
                    (0,
                    m.inverseClass)(e, "art-current"),
                    (0,
                    m.setStyle)(this.$parent, "width", `${e.dataset.width}px`),
                    (0,
                    m.setStyle)(this.$parent, "height", `${e.dataset.height}px`),
                    this.updateStyle(Number(e.dataset.width))
                } else {
                    const a = (0,
                    m.createElement)("div");
                    (0,
                    m.addClass)(a, "art-setting-panel"),
                    a.dataset.width = e || r.SETTING_WIDTH,
                    a.dataset.height = t.length * r.SETTING_ITEM_HEIGHT,
                    t[0] && t[0].$parentItem && ((0,
                    m.append)(a, this.creatHeader(t[0])),
                    a.dataset.height = Number(a.dataset.height) + r.SETTING_ITEM_HEIGHT);
                    for (let e = 0; e < t.length; e++) {
                        const r = t[e];
                        (0,
                        m.has)(r, "switch") ? (0,
                        m.append)(a, this.creatItem("switch", r)) : (0,
                        m.has)(r, "range") ? (0,
                        m.append)(a, this.creatItem("range", r)) : (0,
                        m.append)(a, this.creatItem("selector", r))
                    }
                    (0,
                    m.append)(this.$parent, a),
                    this.cache.set(t, a),
                    (0,
                    m.inverseClass)(a, "art-current"),
                    (0,
                    m.setStyle)(this.$parent, "width", `${a.dataset.width}px`),
                    (0,
                    m.setStyle)(this.$parent, "height", `${a.dataset.height}px`),
                    this.updateStyle(Number(a.dataset.width)),
                    t[0] && t[0].$parentItem && t[0].$parentItem.mounted && t[0].$parentItem.mounted.call(this.art, a, t[0].$parentItem)
                }
            }
        }
        r.default = g
    }
    , {
        "./flip": "bNOaj",
        "./aspectRatio": "5lAsp",
        "./playbackRate": "e6hsR",
        "./subtitleOffset": "fFNEr",
        "../utils/component": "guki8",
        "../utils/error": "2nFlF",
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    bNOaj: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {i18n: e, icons: r, constructor: {SETTING_ITEM_WIDTH: o, FLIP: n}} = t;
            function i(t, r, o) {
                r && (r.innerText = e.get((0,
                a.capitalize)(o)));
                const n = (0,
                a.queryAll)(".art-setting-item", t).find((t=>t.dataset.value === o));
                n && (0,
                a.inverseClass)(n, "art-current")
            }
            return {
                width: o,
                name: "flip",
                html: e.get("Video Flip"),
                tooltip: e.get((0,
                a.capitalize)(t.flip)),
                icon: r.flip,
                selector: n.map((r=>({
                    value: r,
                    name: `aspect-ratio-${r}`,
                    default: r === t.flip,
                    html: e.get((0,
                    a.capitalize)(r))
                }))),
                onSelect: e=>(t.flip = e.value,
                e.html),
                mounted: (e,r)=>{
                    i(e, r.$tooltip, t.flip),
                    t.on("flip", (()=>{
                        i(e, r.$tooltip, t.flip)
                    }
                    ))
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "5lAsp": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {i18n: e, icons: r, constructor: {SETTING_ITEM_WIDTH: o, ASPECT_RATIO: n}} = t;
            function i(t) {
                return "default" === t ? e.get("Default") : t
            }
            function s(t, e, r) {
                e && (e.innerText = i(r));
                const o = (0,
                a.queryAll)(".art-setting-item", t).find((t=>t.dataset.value === r));
                o && (0,
                a.inverseClass)(o, "art-current")
            }
            return {
                width: o,
                name: "aspect-ratio",
                html: e.get("Aspect Ratio"),
                icon: r.aspectRatio,
                tooltip: i(t.aspectRatio),
                selector: n.map((e=>({
                    value: e,
                    name: `aspect-ratio-${e}`,
                    default: e === t.aspectRatio,
                    html: i(e)
                }))),
                onSelect: e=>(t.aspectRatio = e.value,
                e.html),
                mounted: (e,r)=>{
                    s(e, r.$tooltip, t.aspectRatio),
                    t.on("aspectRatio", (()=>{
                        s(e, r.$tooltip, t.aspectRatio)
                    }
                    ))
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    e6hsR: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {i18n: e, icons: r, constructor: {SETTING_ITEM_WIDTH: o, PLAYBACK_RATE: n}} = t;
            function i(t) {
                return 1 === t ? e.get("Normal") : t.toFixed(1)
            }
            function s(t, e, r) {
                e && (e.innerText = i(r));
                const o = (0,
                a.queryAll)(".art-setting-item", t).find((t=>Number(t.dataset.value) === r));
                o && (0,
                a.inverseClass)(o, "art-current")
            }
            return {
                width: o,
                name: "playback-rate",
                html: e.get("Play Speed"),
                tooltip: i(t.playbackRate),
                icon: r.playbackRate,
                selector: n.map((e=>({
                    value: e,
                    name: `aspect-ratio-${e}`,
                    default: e === t.playbackRate,
                    html: i(e)
                }))),
                onSelect: e=>(t.playbackRate = e.value,
                e.html),
                mounted: (e,r)=>{
                    s(e, r.$tooltip, t.playbackRate),
                    t.on("video:ratechange", (()=>{
                        s(e, r.$tooltip, t.playbackRate)
                    }
                    ))
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    fFNEr: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
        r.default = function(t) {
            const {i18n: e, icons: r, constructor: a} = t;
            return {
                width: a.SETTING_ITEM_WIDTH,
                name: "subtitle-offset",
                html: e.get("Subtitle Offset"),
                icon: r.subtitle,
                tooltip: "0s",
                range: [0, -5, 5, .1],
                onChange: e=>(t.subtitleOffset = e.range,
                e.range + "s")
            }
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    f2Thp: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        r.default = class {
            constructor() {
                this.name = "artplayer_settings",
                this.settings = {}
            }
            get(t) {
                try {
                    const e = JSON.parse(window.localStorage.getItem(this.name)) || {};
                    return t ? e[t] : e
                } catch (e) {
                    return t ? this.settings[t] : this.settings
                }
            }
            set(t, e) {
                try {
                    const r = Object.assign({}, this.get(), {
                        [t]: e
                    });
                    window.localStorage.setItem(this.name, JSON.stringify(r))
                } catch (r) {
                    this.settings[t] = e
                }
            }
            del(t) {
                try {
                    const e = this.get();
                    delete e[t],
                    window.localStorage.setItem(this.name, JSON.stringify(e))
                } catch (e) {
                    delete this.settings[t]
                }
            }
            clear() {
                try {
                    window.localStorage.removeItem(this.name)
                } catch (t) {
                    this.settings = {}
                }
            }
        }
    }
    , {
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "96ThS": [function(t, e, r) {
        var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
        a.defineInteropFlag(r);
        var o = t("../utils")
          , n = t("./miniProgressBar")
          , i = a.interopDefault(n)
          , s = t("./autoOrientation")
          , l = a.interopDefault(s)
          , c = t("./autoPlayback")
          , u = a.interopDefault(c)
          , p = t("./fastForward")
          , d = a.interopDefault(p)
          , f = t("./lock")
          , h = a.interopDefault(f);
        r.default = class {
            constructor(t) {
                this.art = t,
                this.id = 0;
                const {option: e} = t;
                e.miniProgressBar && !e.isLive && this.add(i.default),
                e.lock && o.isMobile && this.add(h.default),
                e.autoPlayback && !e.isLive && this.add(u.default),
                e.autoOrientation && o.isMobile && this.add(l.default),
                e.fastForward && o.isMobile && !e.isLive && this.add(d.default);
                for (let t = 0; t < e.plugins.length; t++)
                    this.add(e.plugins[t])
            }
            add(t) {
                this.id += 1;
                const e = t.call(this.art, this.art);
                return e instanceof Promise ? e.then((e=>this.next(t, e))) : this.next(t, e)
            }
            next(t, e) {
                const r = e && e.name || t.name || `plugin${this.id}`;
                return (0,
                o.errorHandle)(!(0,
                o.has)(this, r), `Cannot add a plugin that already has the same name: ${r}`),
                (0,
                o.def)(this, r, {
                    value: e
                }),
                this
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "./miniProgressBar": "iBx4M",
        "./autoOrientation": "2O9qO",
        "./autoPlayback": "iiOc1",
        "./fastForward": "d9NUE",
        "./lock": "5dnKh",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    iBx4M: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            return t.on("control", (e=>{
                e ? (0,
                a.removeClass)(t.template.$player, "art-mini-progress-bar") : (0,
                a.addClass)(t.template.$player, "art-mini-progress-bar")
            }
            )),
            {
                name: "mini-progress-bar"
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "2O9qO": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {constructor: e, template: {$player: r, $video: o}} = t;
            return t.on("fullscreenWeb", (n=>{
                if (n) {
                    const {videoWidth: n, videoHeight: i} = o
                      , {clientWidth: s, clientHeight: l} = document.documentElement;
                    (n > i && s < l || n < i && s > l) && setTimeout((()=>{
                        (0,
                        a.setStyle)(r, "width", `${l}px`),
                        (0,
                        a.setStyle)(r, "height", `${s}px`),
                        (0,
                        a.setStyle)(r, "transform-origin", "0 0"),
                        (0,
                        a.setStyle)(r, "transform", `rotate(90deg) translate(0, -${s}px)`),
                        (0,
                        a.addClass)(r, "art-auto-orientation"),
                        t.isRotate = !0,
                        t.emit("resize")
                    }
                    ), e.AUTO_ORIENTATION_TIME)
                } else
                    (0,
                    a.hasClass)(r, "art-auto-orientation") && ((0,
                    a.removeClass)(r, "art-auto-orientation"),
                    t.isRotate = !1,
                    t.emit("resize"))
            }
            )),
            t.on("fullscreen", (async t=>{
                const e = screen.orientation.type;
                if (t) {
                    const {videoWidth: t, videoHeight: n} = o
                      , {clientWidth: i, clientHeight: s} = document.documentElement;
                    if (t > n && i < s || t < n && i > s) {
                        const t = e.startsWith("portrait") ? "landscape" : "portrait";
                        await screen.orientation.lock(t),
                        (0,
                        a.addClass)(r, "art-auto-orientation-fullscreen")
                    }
                } else
                    (0,
                    a.hasClass)(r, "art-auto-orientation-fullscreen") && (await screen.orientation.lock(e),
                    (0,
                    a.removeClass)(r, "art-auto-orientation-fullscreen"))
            }
            )),
            {
                name: "autoOrientation",
                get state() {
                    return (0,
                    a.hasClass)(r, "art-auto-orientation")
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    iiOc1: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {i18n: e, icons: r, storage: o, constructor: n, proxy: i, template: {$poster: s}} = t
              , l = t.layers.add({
                name: "auto-playback",
                html: '<div class="art-auto-playback-close"></div><div class="art-auto-playback-last"></div><div class="art-auto-playback-jump"></div>'
            })
              , c = (0,
            a.query)(".art-auto-playback-last", l)
              , u = (0,
            a.query)(".art-auto-playback-jump", l)
              , p = (0,
            a.query)(".art-auto-playback-close", l);
            return t.on("video:timeupdate", (()=>{
                if (t.playing) {
                    const e = o.get("times") || {}
                      , r = Object.keys(e);
                    r.length > n.AUTO_PLAYBACK_MAX && delete e[r[0]],
                    e[t.option.id || t.option.url] = t.currentTime,
                    o.set("times", e)
                }
            }
            )),
            t.on("ready", (()=>{
                const d = (o.get("times") || {})[t.option.id || t.option.url];
                d && d >= n.AUTO_PLAYBACK_MIN && ((0,
                a.append)(p, r.close),
                (0,
                a.setStyle)(l, "display", "flex"),
                c.innerText = `${e.get("Last Seen")} ${(0,
                a.secondToTime)(d)}`,
                u.innerText = e.get("Jump Play"),
                i(p, "click", (()=>{
                    (0,
                    a.setStyle)(l, "display", "none")
                }
                )),
                i(u, "click", (()=>{
                    t.seek = d,
                    t.play(),
                    (0,
                    a.setStyle)(s, "display", "none"),
                    (0,
                    a.setStyle)(l, "display", "none")
                }
                )),
                t.once("video:timeupdate", (()=>{
                    setTimeout((()=>{
                        (0,
                        a.setStyle)(l, "display", "none")
                    }
                    ), n.AUTO_PLAYBACK_TIMEOUT)
                }
                )))
            }
            )),
            {
                name: "auto-playback",
                get times() {
                    return o.get("times") || {}
                },
                clear: ()=>o.del("times"),
                delete(t) {
                    const e = o.get("times") || {};
                    return delete e[t],
                    o.set("times", e),
                    e
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    d9NUE: [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {constructor: e, proxy: r, template: {$player: o, $video: n}} = t;
            let i = null
              , s = !1
              , l = 1;
            const c = ()=>{
                clearTimeout(i),
                s && (s = !1,
                t.playbackRate = l,
                (0,
                a.removeClass)(o, "art-fast-forward"))
            }
            ;
            return r(n, "touchstart", (r=>{
                1 === r.touches.length && t.playing && !t.isLock && (i = setTimeout((()=>{
                    s = !0,
                    l = t.playbackRate,
                    t.playbackRate = e.FAST_FORWARD_VALUE,
                    (0,
                    a.addClass)(o, "art-fast-forward")
                }
                ), e.FAST_FORWARD_TIME))
            }
            )),
            r(document, "touchmove", c),
            r(document, "touchend", c),
            {
                name: "fastForward",
                get state() {
                    return (0,
                    a.hasClass)(o, "art-fast-forward")
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }],
    "5dnKh": [function(t, e, r) {
        t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
        var a = t("../utils");
        r.default = function(t) {
            const {layers: e, icons: r, template: {$player: o}} = t;
            return e.add({
                name: "lock",
                mounted(e) {
                    const o = (0,
                    a.append)(e, r.lock)
                      , n = (0,
                    a.append)(e, r.unlock);
                    (0,
                    a.setStyle)(o, "display", "none"),
                    t.on("lock", (t=>{
                        t ? ((0,
                        a.setStyle)(o, "display", "inline-flex"),
                        (0,
                        a.setStyle)(n, "display", "none")) : ((0,
                        a.setStyle)(o, "display", "none"),
                        (0,
                        a.setStyle)(n, "display", "inline-flex"))
                    }
                    ))
                },
                click() {
                    (0,
                    a.hasClass)(o, "art-lock") ? ((0,
                    a.removeClass)(o, "art-lock"),
                    this.isLock = !1,
                    t.emit("lock", !1)) : ((0,
                    a.addClass)(o, "art-lock"),
                    this.isLock = !0,
                    t.emit("lock", !0))
                }
            }),
            {
                name: "lock",
                get state() {
                    return (0,
                    a.hasClass)(o, "art-lock")
                }
            }
        }
    }
    , {
        "../utils": "h3rH9",
        "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
    }]
}, ["abjMI"], "abjMI", "parcelRequireb749");
