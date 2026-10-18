/*!
 * Minimal Mistakes Jekyll Theme 4.24.0 by Michael Rose
 * Copyright 2013-2021 Michael Rose - mademistakes.com | @mmistakes
 * Licensed under MIT
 */
!function(i) {
    "use strict";
    i.fn.fitVids = function(e) {
        var t, n, o = {
            customSelector: null,
            ignore: null
        };
        return document.getElementById("fit-vids-style") || (t = document.head || document.getElementsByTagName("head")[0],
        (n = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
        t.appendChild(n.childNodes[1])),
        e && i.extend(o, e),
        this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            o.customSelector && e.push(o.customSelector);
            var r = ".fitvidsignore";
            o.ignore && (r = r + ", " + o.ignore);
            e = i(this).find(e.join(","));
            (e = (e = e.not("object object")).not(r)).each(function(e) {
                var t, n = i(this);
                0 < n.parents(r).length || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length || (n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9),
                n.attr("width", 16)),
                t = ("object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height()) / (isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10)),
                n.attr("id") || n.attr("id", "fitvid" + e),
                n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"),
                n.removeAttr("height").removeAttr("width"))
            })
        })
    }
}(window.jQuery || window.Zepto),
$(function() {
    var n, r, e, o, t = $("nav.greedy-nav .greedy-nav__toggle"), i = $("nav.greedy-nav .visible-links"), a = $("nav.greedy-nav .hidden-links"), s = $("nav.greedy-nav"), l = $("nav.greedy-nav .site-logo"), u = $("nav.greedy-nav .site-logo img"), c = $("nav.greedy-nav .site-title"), f = $("nav.greedy-nav button.search__toggle");
    function d() {
        function t(e, t) {
            r += t,
            n += 1,
            o.push(r)
        }
        r = n = 0,
        e = 1e3,
        o = [],
        i.children().outerWidth(t),
        a.children().each(function() {
            var e;
            (e = (e = $(this)).clone()).css("visibility", "hidden"),
            i.append(e),
            t(0, e.outerWidth()),
            e.remove()
        })
    }
    d();
    var p, h, m, g, v = $(window).width(), y = v < 768 ? 0 : v < 1024 ? 1 : v < 1280 ? 2 : 3;
    function b() {
        var e = (v = $(window).width()) < 768 ? 0 : v < 1024 ? 1 : v < 1280 ? 2 : 3;
        e !== y && d(),
        y = e,
        h = i.children().length,
        p = s.innerWidth() - (0 !== l.length ? l.outerWidth(!0) : 0) - c.outerWidth(!0) - (0 !== f.length ? f.outerWidth(!0) : 0) - (h !== o.length ? t.outerWidth(!0) : 0),
        m = o[h - 1],
        p < m ? (i.children().last().prependTo(a),
        --h,
        b()) : p + (h === o.length - 1 ? t.outerWidth(!0) : 0) > o[h] && (a.children().first().appendTo(i),
        h += 1,
        b()),
        t.attr("count", n - h),
        h === n ? t.addClass("hidden") : t.removeClass("hidden")
    }
    $(window).resize(function() {
        b()
    }),
    t.on("click", function() {
        a.toggleClass("hidden"),
        $(this).toggleClass("close"),
        clearTimeout(g)
    }),
    a.on("mouseleave", function() {
        g = setTimeout(function() {
            a.addClass("hidden")
        }, e)
    }).on("mouseenter", function() {
        clearTimeout(g)
    }),
    0 === u.length || u[0].complete || 0 !== u[0].naturalWidth ? b() : u.one("load error", b)
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
}(function(u) {
    function e() {}
    function c(e, t) {
        h.ev.on("mfp" + e + x, t)
    }
    function f(e, t, n, r) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e,
        n && (o.innerHTML = n),
        r ? t && t.appendChild(o) : (o = u(o),
        t && o.appendTo(t)),
        o
    }
    function d(e, t) {
        h.ev.triggerHandler("mfp" + e, t),
        h.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1),
        h.st.callbacks[e] && h.st.callbacks[e].apply(h, u.isArray(t) ? t : [t]))
    }
    function p(e) {
        return e === t && h.currTemplate.closeBtn || (h.currTemplate.closeBtn = u(h.st.closeMarkup.replace("%title%", h.st.tClose)),
        t = e),
        h.currTemplate.closeBtn
    }
    function i() {
        u.magnificPopup.instance || ((h = new e).init(),
        u.magnificPopup.instance = h)
    }
    var h, r, m, o, g, t, l = "Close", v = "BeforeClose", y = "MarkupParse", b = "Open", x = ".mfp", w = "mfp-ready", n = "mfp-removing", a = "mfp-prevent-close", s = !!window.jQuery, C = u(window);
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            h.isLowIE = h.isIE8 = document.all && !document.addEventListener,
            h.isAndroid = /android/gi.test(e),
            h.isIOS = /iphone|ipad|ipod/gi.test(e),
            h.supportsTransition = function() {
                var e = document.createElement("p").style
                  , t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition)
                    return !0;
                for (; t.length; )
                    if (t.pop() + "Transition" in e)
                        return !0;
                return !1
            }(),
            h.probablyMobile = h.isAndroid || h.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            m = u(document),
            h.popupsCache = {}
        },
        open: function(e) {
            if (!1 === e.isObj) {
                h.items = e.items.toArray(),
                h.index = 0;
                for (var t, n = e.items, r = 0; r < n.length; r++)
                    if ((t = (t = n[r]).parsed ? t.el[0] : t) === e.el[0]) {
                        h.index = r;
                        break
                    }
            } else
                h.items = u.isArray(e.items) ? e.items : [e.items],
                h.index = e.index || 0;
            if (!h.isOpen) {
                h.types = [],
                g = "",
                e.mainEl && e.mainEl.length ? h.ev = e.mainEl.eq(0) : h.ev = m,
                e.key ? (h.popupsCache[e.key] || (h.popupsCache[e.key] = {}),
                h.currTemplate = h.popupsCache[e.key]) : h.currTemplate = {},
                h.st = u.extend(!0, {}, u.magnificPopup.defaults, e),
                h.fixedContentPos = "auto" === h.st.fixedContentPos ? !h.probablyMobile : h.st.fixedContentPos,
                h.st.modal && (h.st.closeOnContentClick = !1,
                h.st.closeOnBgClick = !1,
                h.st.showCloseBtn = !1,
                h.st.enableEscapeKey = !1),
                h.bgOverlay || (h.bgOverlay = f("bg").on("click" + x, function() {
                    h.close()
                }),
                h.wrap = f("wrap").attr("tabindex", -1).on("click" + x, function(e) {
                    h._checkIfClose(e.target) && h.close()
                }),
                h.container = f("container", h.wrap)),
                h.contentContainer = f("content"),
                h.st.preloader && (h.preloader = f("preloader", h.container, h.st.tLoading));
                var o = u.magnificPopup.modules;
                for (r = 0; r < o.length; r++) {
                    var i = (i = o[r]).charAt(0).toUpperCase() + i.slice(1);
                    h["init" + i].call(h)
                }
                d("BeforeOpen"),
                h.st.showCloseBtn && (h.st.closeBtnInside ? (c(y, function(e, t, n, r) {
                    n.close_replaceWith = p(r.type)
                }),
                g += " mfp-close-btn-in") : h.wrap.append(p())),
                h.st.alignTop && (g += " mfp-align-top"),
                h.fixedContentPos ? h.wrap.css({
                    overflow: h.st.overflowY,
                    overflowX: "hidden",
                    overflowY: h.st.overflowY
                }) : h.wrap.css({
                    top: C.scrollTop(),
                    position: "absolute"
                }),
                !1 !== h.st.fixedBgPos && ("auto" !== h.st.fixedBgPos || h.fixedContentPos) || h.bgOverlay.css({
                    height: m.height(),
                    position: "absolute"
                }),
                h.st.enableEscapeKey && m.on("keyup" + x, function(e) {
                    27 === e.keyCode && h.close()
                }),
                C.on("resize" + x, function() {
                    h.updateSize()
                }),
                h.st.closeOnContentClick || (g += " mfp-auto-cursor"),
                g && h.wrap.addClass(g);
                var a = h.wH = C.height()
                  , s = {};
                h.fixedContentPos && (!h._hasScrollBar(a) || (l = h._getScrollbarSize()) && (s.marginRight = l)),
                h.fixedContentPos && (h.isIE7 ? u("body, html").css("overflow", "hidden") : s.overflow = "hidden");
                var l = h.st.mainClass;
                return h.isIE7 && (l += " mfp-ie7"),
                l && h._addClassToMFP(l),
                h.updateItemHTML(),
                d("BuildControls"),
                u("html").css(s),
                h.bgOverlay.add(h.wrap).prependTo(h.st.prependTo || u(document.body)),
                h._lastFocusedEl = document.activeElement,
                setTimeout(function() {
                    h.content ? (h._addClassToMFP(w),
                    h._setFocus()) : h.bgOverlay.addClass(w),
                    m.on("focusin" + x, h._onFocusIn)
                }, 16),
                h.isOpen = !0,
                h.updateSize(a),
                d(b),
                e
            }
            h.updateItemHTML()
        },
        close: function() {
            h.isOpen && (d(v),
            h.isOpen = !1,
            h.st.removalDelay && !h.isLowIE && h.supportsTransition ? (h._addClassToMFP(n),
            setTimeout(function() {
                h._close()
            }, h.st.removalDelay)) : h._close())
        },
        _close: function() {
            d(l);
            var e = n + " " + w + " ";
            h.bgOverlay.detach(),
            h.wrap.detach(),
            h.container.empty(),
            h.st.mainClass && (e += h.st.mainClass + " "),
            h._removeClassFromMFP(e),
            h.fixedContentPos && (e = {
                marginRight: ""
            },
            h.isIE7 ? u("body, html").css("overflow", "") : e.overflow = "",
            u("html").css(e)),
            m.off("keyup.mfp focusin" + x),
            h.ev.off(x),
            h.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            h.bgOverlay.attr("class", "mfp-bg"),
            h.container.attr("class", "mfp-container"),
            !h.st.showCloseBtn || h.st.closeBtnInside && !0 !== h.currTemplate[h.currItem.type] || h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach(),
            h.st.autoFocusLast && h._lastFocusedEl && u(h._lastFocusedEl).focus(),
            h.currItem = null,
            h.content = null,
            h.currTemplate = null,
            h.prevHeight = 0,
            d("AfterClose")
        },
        updateSize: function(e) {
            var t;
            h.isIOS ? (t = document.documentElement.clientWidth / window.innerWidth,
            t = window.innerHeight * t,
            h.wrap.css("height", t),
            h.wH = t) : h.wH = e || C.height(),
            h.fixedContentPos || h.wrap.css("height", h.wH),
            d("Resize")
        },
        updateItemHTML: function() {
            var e = h.items[h.index];
            h.contentContainer.detach(),
            h.content && h.content.detach();
            var t = (e = !e.parsed ? h.parseEl(h.index) : e).type;
            d("BeforeChange", [h.currItem ? h.currItem.type : "", t]),
            h.currItem = e,
            h.currTemplate[t] || (n = !!h.st[t] && h.st[t].markup,
            d("FirstMarkupParse", n),
            h.currTemplate[t] = !n || u(n)),
            o && o !== e.type && h.container.removeClass("mfp-" + o + "-holder");
            var n = h["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, h.currTemplate[t]);
            h.appendContent(n, t),
            e.preloaded = !0,
            d("Change", e),
            o = e.type,
            h.container.prepend(h.contentContainer),
            d("AfterChange")
        },
        appendContent: function(e, t) {
            (h.content = e) ? h.st.showCloseBtn && h.st.closeBtnInside && !0 === h.currTemplate[t] ? h.content.find(".mfp-close").length || h.content.append(p()) : h.content = e : h.content = "",
            d("BeforeAppend"),
            h.container.addClass("mfp-" + t + "-holder"),
            h.contentContainer.append(h.content)
        },
        parseEl: function(e) {
            var t, n = h.items[e];
            if ((n = n.tagName ? {
                el: u(n)
            } : (t = n.type,
            {
                data: n,
                src: n.src
            })).el) {
                for (var r = h.types, o = 0; o < r.length; o++)
                    if (n.el.hasClass("mfp-" + r[o])) {
                        t = r[o];
                        break
                    }
                n.src = n.el.attr("data-mfp-src"),
                n.src || (n.src = n.el.attr("href"))
            }
            return n.type = t || h.st.type || "inline",
            n.index = e,
            n.parsed = !0,
            h.items[e] = n,
            d("ElementParse", n),
            h.items[e]
        },
        addGroup: function(t, n) {
            function e(e) {
                e.mfpEl = this,
                h._openClick(e, t, n)
            }
            var r = "click.magnificPopup";
            (n = n || {}).mainEl = t,
            n.items ? (n.isObj = !0,
            t.off(r).on(r, e)) : (n.isObj = !1,
            n.delegate ? t.off(r).on(r, n.delegate, e) : (n.items = t).off(r).on(r, e))
        },
        _openClick: function(e, t, n) {
            if ((void 0 !== n.midClick ? n : u.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var r = (void 0 !== n.disableOn ? n : u.magnificPopup.defaults).disableOn;
                if (r)
                    if (u.isFunction(r)) {
                        if (!r.call(h))
                            return !0
                    } else if (C.width() < r)
                        return !0;
                e.type && (e.preventDefault(),
                h.isOpen && e.stopPropagation()),
                n.el = u(e.mfpEl),
                n.delegate && (n.items = t.find(n.delegate)),
                h.open(n)
            }
        },
        updateStatus: function(e, t) {
            var n;
            h.preloader && (r !== e && h.container.removeClass("mfp-s-" + r),
            n = {
                status: e,
                text: t = !t && "loading" === e ? h.st.tLoading : t
            },
            d("UpdateStatus", n),
            e = n.status,
            h.preloader.html(t = n.text),
            h.preloader.find("a").on("click", function(e) {
                e.stopImmediatePropagation()
            }),
            h.container.addClass("mfp-s-" + e),
            r = e)
        },
        _checkIfClose: function(e) {
            if (!u(e).hasClass(a)) {
                var t = h.st.closeOnContentClick
                  , n = h.st.closeOnBgClick;
                if (t && n)
                    return !0;
                if (!h.content || u(e).hasClass("mfp-close") || h.preloader && e === h.preloader[0])
                    return !0;
                if (e === h.content[0] || u.contains(h.content[0], e)) {
                    if (t)
                        return !0
                } else if (n && u.contains(document, e))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            h.bgOverlay.addClass(e),
            h.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            h.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (h.isIE7 ? m.height() : document.body.scrollHeight) > (e || C.height())
        },
        _setFocus: function() {
            (h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus()
        },
        _onFocusIn: function(e) {
            if (e.target !== h.wrap[0] && !u.contains(h.wrap[0], e.target))
                return h._setFocus(),
                !1
        },
        _parseMarkup: function(o, e, t) {
            var i;
            t.data && (e = u.extend(t.data, e)),
            d(y, [o, e, t]),
            u.each(e, function(e, t) {
                return void 0 === t || !1 === t || void (1 < (i = e.split("_")).length ? 0 < (n = o.find(x + "-" + i[0])).length && ("replaceWith" === (r = i[1]) ? n[0] !== t[0] && n.replaceWith(t) : "img" === r ? n.is("img") ? n.attr("src", t) : n.replaceWith(u("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(i[1], t)) : o.find(x + "-" + e).html(t));
                var n, r
            })
        },
        _getScrollbarSize: function() {
            var e;
            return void 0 === h.scrollbarSize && ((e = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
            document.body.appendChild(e),
            h.scrollbarSize = e.offsetWidth - e.clientWidth,
            document.body.removeChild(e)),
            h.scrollbarSize
        }
    },
    u.magnificPopup = {
        instance: null,
        proto: e.prototype,
        modules: [],
        open: function(e, t) {
            return i(),
            (e = e ? u.extend(!0, {}, e) : {}).isObj = !0,
            e.index = t || 0,
            this.instance.open(e)
        },
        close: function() {
            return u.magnificPopup.instance && u.magnificPopup.instance.close()
        },
        registerModule: function(e, t) {
            t.options && (u.magnificPopup.defaults[e] = t.options),
            u.extend(this.proto, t.proto),
            this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    u.fn.magnificPopup = function(e) {
        i();
        var t, n, r, o = u(this);
        return "string" == typeof e ? "open" === e ? (t = s ? o.data("magnificPopup") : o[0].magnificPopup,
        n = parseInt(arguments[1], 10) || 0,
        r = t.items ? t.items[n] : (r = o,
        (r = t.delegate ? o.find(t.delegate) : r).eq(n)),
        h._openClick({
            mfpEl: r
        }, o, t)) : h.isOpen && h[e].apply(h, Array.prototype.slice.call(arguments, 1)) : (e = u.extend(!0, {}, e),
        s ? o.data("magnificPopup", e) : o[0].magnificPopup = e,
        h.addGroup(o, e)),
        o
    }
    ;
    function T() {
        k && (S.after(k.addClass(E)).detach(),
        k = null)
    }
    var E, S, k, A = "inline";
    u.magnificPopup.registerModule(A, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                h.types.push(A),
                c(l + "." + A, function() {
                    T()
                })
            },
            getInline: function(e, t) {
                if (T(),
                e.src) {
                    var n, r = h.st.inline, o = u(e.src);
                    return o.length ? ((n = o[0].parentNode) && n.tagName && (S || (E = r.hiddenClass,
                    S = f(E),
                    E = "mfp-" + E),
                    k = o.after(S).detach().removeClass(E)),
                    h.updateStatus("ready")) : (h.updateStatus("error", r.tNotFound),
                    o = u("<div>")),
                    e.inlineElement = o
                }
                return h.updateStatus("ready"),
                h._parseMarkup(t, {}, e),
                t
            }
        }
    });
    function N() {
        I && u(document.body).removeClass(I)
    }
    function j() {
        N(),
        h.req && h.req.abort()
    }
    var I, L = "ajax";
    u.magnificPopup.registerModule(L, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                h.types.push(L),
                I = h.st.ajax.cursor,
                c(l + "." + L, j),
                c("BeforeChange." + L, j)
            },
            getAjax: function(r) {
                I && u(document.body).addClass(I),
                h.updateStatus("loading");
                var e = u.extend({
                    url: r.src,
                    success: function(e, t, n) {
                        n = {
                            data: e,
                            xhr: n
                        };
                        d("ParseAjax", n),
                        h.appendContent(u(n.data), L),
                        r.finished = !0,
                        N(),
                        h._setFocus(),
                        setTimeout(function() {
                            h.wrap.addClass(w)
                        }, 16),
                        h.updateStatus("ready"),
                        d("AjaxContentAdded")
                    },
                    error: function() {
                        N(),
                        r.finished = r.loadError = !0,
                        h.updateStatus("error", h.st.ajax.tError.replace("%url%", r.src))
                    }
                }, h.st.ajax.settings);
                return h.req = u.ajax(e),
                ""
            }
        }
    });
    var D;
    u.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = h.st.image
                  , t = ".image";
                h.types.push("image"),
                c(b + t, function() {
                    "image" === h.currItem.type && e.cursor && u(document.body).addClass(e.cursor)
                }),
                c(l + t, function() {
                    e.cursor && u(document.body).removeClass(e.cursor),
                    C.off("resize" + x)
                }),
                c("Resize" + t, h.resizeImage),
                h.isLowIE && c("AfterChange", h.resizeImage)
            },
            resizeImage: function() {
                var e, t = h.currItem;
                t && t.img && h.st.image.verticalFit && (e = 0,
                h.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)),
                t.img.css("max-height", h.wH - e))
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                D && clearInterval(D),
                e.isCheckingImgSize = !1,
                d("ImageHasSize", e),
                e.imgHidden && (h.content && h.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(t) {
                var n = 0
                  , r = t.img[0]
                  , o = function(e) {
                    D && clearInterval(D),
                    D = setInterval(function() {
                        0 < r.naturalWidth ? h._onImageHasSize(t) : (200 < n && clearInterval(D),
                        3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500))
                    }, e)
                };
                o(1)
            },
            getImage: function(e, t) {
                var n, r = 0, o = function() {
                    e && (e.img[0].complete ? (e.img.off(".mfploader"),
                    e === h.currItem && (h._onImageHasSize(e),
                    h.updateStatus("ready")),
                    e.hasSize = !0,
                    e.loaded = !0,
                    d("ImageLoadComplete")) : ++r < 200 ? setTimeout(o, 100) : i())
                }, i = function() {
                    e && (e.img.off(".mfploader"),
                    e === h.currItem && (h._onImageHasSize(e),
                    h.updateStatus("error", a.tError.replace("%url%", e.src))),
                    e.hasSize = !0,
                    e.loaded = !0,
                    e.loadError = !0)
                }, a = h.st.image, s = t.find(".mfp-img");
                return s.length && ((n = document.createElement("img")).className = "mfp-img",
                e.el && e.el.find("img").length && (n.alt = e.el.find("img").attr("alt")),
                e.img = u(n).on("load.mfploader", o).on("error.mfploader", i),
                n.src = e.src,
                s.is("img") && (e.img = e.img.clone()),
                0 < (n = e.img[0]).naturalWidth ? e.hasSize = !0 : n.width || (e.hasSize = !1)),
                h._parseMarkup(t, {
                    title: function(e) {
                        if (e.data && void 0 !== e.data.title)
                            return e.data.title;
                        var t = h.st.image.titleSrc;
                        if (t) {
                            if (u.isFunction(t))
                                return t.call(h, e);
                            if (e.el)
                                return e.el.attr(t) || ""
                        }
                        return ""
                    }(e),
                    img_replaceWith: e.img
                }, e),
                h.resizeImage(),
                e.hasSize ? (D && clearInterval(D),
                e.loadError ? (t.addClass("mfp-loading"),
                h.updateStatus("error", a.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"),
                h.updateStatus("ready"))) : (h.updateStatus("loading"),
                e.loading = !0,
                e.hasSize || (e.imgHidden = !0,
                t.addClass("mfp-loading"),
                h.findImageSize(e))),
                t
            }
        }
    });
    var O;
    u.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, t, n, r, o, i, a = h.st.zoom, s = ".zoom";
                a.enabled && h.supportsTransition && (t = a.duration,
                n = function(e) {
                    var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                      , n = "all " + a.duration / 1e3 + "s " + a.easing
                      , r = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }
                      , e = "transition";
                    return r["-webkit-" + e] = r["-moz-" + e] = r["-o-" + e] = r[e] = n,
                    t.css(r),
                    t
                }
                ,
                r = function() {
                    h.content.css("visibility", "visible")
                }
                ,
                c("BuildControls" + s, function() {
                    h._allowZoom() && (clearTimeout(o),
                    h.content.css("visibility", "hidden"),
                    (e = h._getItemToZoom()) ? ((i = n(e)).css(h._getOffset()),
                    h.wrap.append(i),
                    o = setTimeout(function() {
                        i.css(h._getOffset(!0)),
                        o = setTimeout(function() {
                            r(),
                            setTimeout(function() {
                                i.remove(),
                                e = i = null,
                                d("ZoomAnimationEnded")
                            }, 16)
                        }, t)
                    }, 16)) : r())
                }),
                c(v + s, function() {
                    if (h._allowZoom()) {
                        if (clearTimeout(o),
                        h.st.removalDelay = t,
                        !e) {
                            if (!(e = h._getItemToZoom()))
                                return;
                            i = n(e)
                        }
                        i.css(h._getOffset(!0)),
                        h.wrap.append(i),
                        h.content.css("visibility", "hidden"),
                        setTimeout(function() {
                            i.css(h._getOffset())
                        }, 16)
                    }
                }),
                c(l + s, function() {
                    h._allowZoom() && (r(),
                    i && i.remove(),
                    e = null)
                }))
            },
            _allowZoom: function() {
                return "image" === h.currItem.type
            },
            _getItemToZoom: function() {
                return !!h.currItem.hasSize && h.currItem.img
            },
            _getOffset: function(e) {
                var t = e ? h.currItem.img : h.st.zoom.opener(h.currItem.el || h.currItem)
                  , n = t.offset()
                  , r = parseInt(t.css("padding-top"), 10)
                  , e = parseInt(t.css("padding-bottom"), 10);
                n.top -= u(window).scrollTop() - r;
                r = {
                    width: t.width(),
                    height: (s ? t.innerHeight() : t[0].offsetHeight) - e - r
                };
                return (O = void 0 === O ? void 0 !== document.createElement("p").style.MozTransform : O) ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left,
                r.top = n.top),
                r
            }
        }
    });
    function H(e) {
        var t;
        !h.currTemplate[P] || (t = h.currTemplate[P].find("iframe")).length && (e || (t[0].src = "//about:blank"),
        h.isIE8 && t.css("display", e ? "block" : "none"))
    }
    var P = "iframe";
    u.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                h.types.push(P),
                c("BeforeChange", function(e, t, n) {
                    t !== n && (t === P ? H() : n === P && H(!0))
                }),
                c(l + "." + P, function() {
                    H()
                })
            },
            getIframe: function(e, t) {
                var n = e.src
                  , r = h.st.iframe;
                u.each(r.patterns, function() {
                    if (-1 < n.indexOf(this.index))
                        return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)),
                        n = this.src.replace("%id%", n),
                        !1
                });
                var o = {};
                return r.srcAction && (o[r.srcAction] = n),
                h._parseMarkup(t, o, e),
                h.updateStatus("ready"),
                t
            }
        }
    });
    function q(e) {
        var t = h.items.length;
        return t - 1 < e ? e - t : e < 0 ? t + e : e
    }
    function M(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    }
    u.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = h.st.gallery
                  , e = ".mfp-gallery";
                if (h.direction = !0,
                !i || !i.enabled)
                    return !1;
                g += " mfp-gallery",
                c(b + e, function() {
                    i.navigateByImgClick && h.wrap.on("click" + e, ".mfp-img", function() {
                        if (1 < h.items.length)
                            return h.next(),
                            !1
                    }),
                    m.on("keydown" + e, function(e) {
                        37 === e.keyCode ? h.prev() : 39 === e.keyCode && h.next()
                    })
                }),
                c("UpdateStatus" + e, function(e, t) {
                    t.text && (t.text = M(t.text, h.currItem.index, h.items.length))
                }),
                c(y + e, function(e, t, n, r) {
                    var o = h.items.length;
                    n.counter = 1 < o ? M(i.tCounter, r.index, o) : ""
                }),
                c("BuildControls" + e, function() {
                    var e, t;
                    1 < h.items.length && i.arrows && !h.arrowLeft && (t = i.arrowMarkup,
                    e = h.arrowLeft = u(t.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(a),
                    t = h.arrowRight = u(t.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(a),
                    e.click(function() {
                        h.prev()
                    }),
                    t.click(function() {
                        h.next()
                    }),
                    h.container.append(e.add(t)))
                }),
                c("Change" + e, function() {
                    h._preloadTimeout && clearTimeout(h._preloadTimeout),
                    h._preloadTimeout = setTimeout(function() {
                        h.preloadNearbyImages(),
                        h._preloadTimeout = null
                    }, 16)
                }),
                c(l + e, function() {
                    m.off(e),
                    h.wrap.off("click" + e),
                    h.arrowRight = h.arrowLeft = null
                })
            },
            next: function() {
                h.direction = !0,
                h.index = q(h.index + 1),
                h.updateItemHTML()
            },
            prev: function() {
                h.direction = !1,
                h.index = q(h.index - 1),
                h.updateItemHTML()
            },
            goTo: function(e) {
                h.direction = e >= h.index,
                h.index = e,
                h.updateItemHTML()
            },
            preloadNearbyImages: function() {
                for (var e = h.st.gallery.preload, t = Math.min(e[0], h.items.length), n = Math.min(e[1], h.items.length), r = 1; r <= (h.direction ? n : t); r++)
                    h._preloadItem(h.index + r);
                for (r = 1; r <= (h.direction ? t : n); r++)
                    h._preloadItem(h.index - r)
            },
            _preloadItem: function(e) {
                var t;
                e = q(e),
                h.items[e].preloaded || ((t = h.items[e]).parsed || (t = h.parseEl(e)),
                d("LazyLoad", t),
                "image" === t.type && (t.img = u('<img class="mfp-img" />').on("load.mfploader", function() {
                    t.hasSize = !0
                }).on("error.mfploader", function() {
                    t.hasSize = !0,
                    t.loadError = !0,
                    d("LazyLoadError", t)
                }).attr("src", t.src)),
                t.preloaded = !0)
            }
        }
    });
    var _ = "retina";
    u.magnificPopup.registerModule(_, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                var n, r;
                1 < window.devicePixelRatio && (n = h.st.retina,
                r = n.ratio,
                1 < (r = isNaN(r) ? r() : r) && (c("ImageHasSize." + _, function(e, t) {
                    t.img.css({
                        "max-width": t.img[0].naturalWidth / r,
                        width: "100%"
                    })
                }),
                c("ElementParse." + _, function(e, t) {
                    t.src = n.replaceSrc(t, r)
                })))
            }
        }
    }),
    i()
}),
function(e, c) {
    var r, t = e.jQuery || e.Cowboy || (e.Cowboy = {});
    t.throttle = r = function(o, i, a, s) {
        var l, u = 0;
        function e() {
            var e = this
              , t = +new Date - u
              , n = arguments;
            function r() {
                u = +new Date,
                a.apply(e, n)
            }
            s && !l && r(),
            l && clearTimeout(l),
            s === c && o < t ? r() : !0 !== i && (l = setTimeout(s ? function() {
                l = c
            }
            : r, s === c ? o - t : o))
        }
        return "boolean" != typeof i && (s = a,
        a = i,
        i = c),
        t.guid && (e.guid = a.guid = a.guid || t.guid++),
        e
    }
    ,
    t.debounce = function(e, t, n) {
        return n === c ? r(e, t, !1) : r(e, n, !1 !== t)
    }
}(this),
function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function(x) {
    "use strict";
    function w() {
        var n = {};
        return Array.prototype.forEach.call(arguments, function(e) {
            for (var t in e) {
                if (!e.hasOwnProperty(t))
                    return;
                n[t] = e[t]
            }
        }),
        n
    }
    function a(e) {
        "#" === e.charAt(0) && (e = e.substr(1));
        for (var t, n = String(e), r = n.length, o = -1, i = "", a = n.charCodeAt(0); ++o < r; ) {
            if (0 === (t = n.charCodeAt(o)))
                throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            1 <= t && t <= 31 || 127 == t || 0 === o && 48 <= t && t <= 57 || 1 === o && 48 <= t && t <= 57 && 45 === a ? i += "\\" + t.toString(16) + " " : i += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(o) : "\\" + n.charAt(o)
        }
        return "#" + i
    }
    function C() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    }
    function T(e) {
        return e ? parseInt(x.getComputedStyle(e).height, 10) + e.offsetTop : 0
    }
    function E(e, t, n, r) {
        t.emitEvents && "function" == typeof x.CustomEvent && (r = new CustomEvent(e,{
            bubbles: !0,
            detail: {
                anchor: n,
                toggle: r
            }
        }),
        document.dispatchEvent(r))
    }
    var S = {
        ignore: "[data-scroll-ignore]",
        header: null,
        topOnEmptyHash: !0,
        speed: 500,
        speedAsDuration: !1,
        durationMax: null,
        durationMin: null,
        clip: !0,
        offset: 0,
        easing: "easeInOutCubic",
        customEasing: null,
        updateURL: !0,
        popstate: !0,
        emitEvents: !0
    };
    return function(r, e) {
        var v, o, n, y, b = {
            cancelScroll: function(e) {
                cancelAnimationFrame(y),
                y = null,
                e || E("scrollCancel", v)
            }
        };
        b.animateScroll = function(r, o, e) {
            b.cancelScroll();
            var i, a, s, l, u, c, f, d, p, h, m = w(v || S, e || {}), g = "[object Number]" === Object.prototype.toString.call(r), t = g || !r.tagName ? null : r;
            (g || t) && (i = x.pageYOffset,
            m.header && !n && (n = document.querySelector(m.header)),
            e = T(n),
            a = g ? r : function(e, t, n, r) {
                var o = 0;
                if (e.offsetParent)
                    for (; o += e.offsetTop,
                    e = e.offsetParent; )
                        ;
                return o = Math.max(o - t - n, 0),
                o = r ? Math.min(o, C() - x.innerHeight) : o
            }(t, e, parseInt("function" == typeof m.offset ? m.offset(r, o) : m.offset, 10), m.clip),
            s = a - i,
            l = C(),
            u = 0,
            c = function(e, t) {
                e = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);
                return t.durationMax && e > t.durationMax ? t.durationMax : t.durationMin && e < t.durationMin ? t.durationMin : parseInt(e, 10)
            }(s, m),
            p = function(e, t) {
                var n = x.pageYOffset;
                if (e == t || n == t || (i < t && x.innerHeight + n) >= l)
                    return b.cancelScroll(!0),
                    e = t,
                    n = g,
                    0 === (t = r) && document.body.focus(),
                    n || (t.focus(),
                    document.activeElement !== t && (t.setAttribute("tabindex", "-1"),
                    t.focus(),
                    t.style.outline = "none"),
                    x.scrollTo(0, e)),
                    E("scrollStop", m, r, o),
                    !(y = f = null)
            }
            ,
            h = function(e) {
                var t, n, r;
                u += e - (f = f || e),
                d = i + s * (n = d = 1 < (d = 0 === c ? 0 : u / c) ? 1 : d,
                "easeInQuad" === (t = m).easing && (r = n * n),
                "easeOutQuad" === t.easing && (r = n * (2 - n)),
                "easeInOutQuad" === t.easing && (r = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                "easeInCubic" === t.easing && (r = n * n * n),
                "easeOutCubic" === t.easing && (r = --n * n * n + 1),
                "easeInOutCubic" === t.easing && (r = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1),
                "easeInQuart" === t.easing && (r = n * n * n * n),
                "easeOutQuart" === t.easing && (r = 1 - --n * n * n * n),
                "easeInOutQuart" === t.easing && (r = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n),
                "easeInQuint" === t.easing && (r = n * n * n * n * n),
                "easeOutQuint" === t.easing && (r = 1 + --n * n * n * n * n),
                "easeInOutQuint" === t.easing && (r = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n),
                (r = t.customEasing ? t.customEasing(n) : r) || n),
                x.scrollTo(0, Math.floor(d)),
                p(d, a) || (y = x.requestAnimationFrame(h),
                f = e)
            }
            ,
            0 === x.pageYOffset && x.scrollTo(0, 0),
            t = r,
            e = m,
            g || history.pushState && e.updateURL && history.pushState({
                smoothScroll: JSON.stringify(e),
                anchor: t.id
            }, document.title, t === document.documentElement ? "#top" : "#" + t.id),
            "matchMedia" in x && x.matchMedia("(prefers-reduced-motion)").matches ? x.scrollTo(0, Math.floor(a)) : (E("scrollStart", m, r, o),
            b.cancelScroll(!0),
            x.requestAnimationFrame(h)))
        }
        ;
        function t(e) {
            if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (o = e.target.closest(r)) && "a" === o.tagName.toLowerCase() && !e.target.closest(v.ignore) && o.hostname === x.location.hostname && o.pathname === x.location.pathname && /#/.test(o.href)) {
                var t, n;
                try {
                    n = a(decodeURIComponent(o.hash))
                } catch (e) {
                    n = a(o.hash)
                }
                if ("#" === n) {
                    if (!v.topOnEmptyHash)
                        return;
                    t = document.documentElement
                } else
                    t = document.querySelector(n);
                (t = t || "#top" !== n ? t : document.documentElement) && (e.preventDefault(),
                n = v,
                history.replaceState && n.updateURL && !history.state && (e = (e = x.location.hash) || "",
                history.replaceState({
                    smoothScroll: JSON.stringify(n),
                    anchor: e || x.pageYOffset
                }, document.title, e || x.location.href)),
                b.animateScroll(t, o))
            }
        }
        function i(e) {
            var t;
            null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(v) && ("string" == typeof (t = history.state.anchor) && t && !(t = document.querySelector(a(history.state.anchor))) || b.animateScroll(t, null, {
                updateURL: !1
            }))
        }
        b.destroy = function() {
            v && (document.removeEventListener("click", t, !1),
            x.removeEventListener("popstate", i, !1),
            b.cancelScroll(),
            y = n = o = v = null)
        }
        ;
        return function() {
            if (!("querySelector" in document && "addEventListener" in x && "requestAnimationFrame" in x && "closest" in x.Element.prototype))
                throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            b.destroy(),
            v = w(S, e || {}),
            n = v.header ? document.querySelector(v.header) : null,
            document.addEventListener("click", t, !1),
            v.updateURL && v.popstate && x.addEventListener("popstate", i, !1)
        }(),
        b
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(e) : e.Gumshoe = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function(c) {
    "use strict";
    function f(e, t, n) {
        n.settings.events && (n = new CustomEvent(e,{
            bubbles: !0,
            cancelable: !0,
            detail: n
        }),
        t.dispatchEvent(n))
    }
    function n(e) {
        var t = 0;
        if (e.offsetParent)
            for (; e; )
                t += e.offsetTop,
                e = e.offsetParent;
        return 0 <= t ? t : 0
    }
    function d(e) {
        e && e.sort(function(e, t) {
            return n(e.content) < n(t.content) ? -1 : 1
        })
    }
    function a(e, t, n) {
        return e = e.getBoundingClientRect(),
        t = "function" == typeof (t = t).offset ? parseFloat(t.offset()) : parseFloat(t.offset),
        n ? parseInt(e.bottom, 10) < (c.innerHeight || document.documentElement.clientHeight) : parseInt(e.top, 10) <= t
    }
    function s() {
        return c.innerHeight + c.pageYOffset >= Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    }
    function p(e, t) {
        var n, r, o = e[e.length - 1];
        if (n = o,
        r = t,
        !(!s() || !a(n.content, r, !0)))
            return o;
        for (var i = e.length - 1; 0 <= i; i--)
            if (a(e[i].content, t))
                return e[i]
    }
    function h(e, t) {
        var n;
        !e || (n = e.nav.closest("li")) && (n.classList.remove(t.navClass),
        e.content.classList.remove(t.contentClass),
        r(n, t),
        f("gumshoeDeactivate", n, {
            link: e.nav,
            content: e.content,
            settings: t
        }))
    }
    var m = {
        navClass: "active",
        contentClass: "active",
        nested: !1,
        nestedClass: "active",
        offset: 0,
        reflow: !1,
        events: !0
    }
      , r = function(e, t) {
        !t.nested || (e = e.parentNode.closest("li")) && (e.classList.remove(t.nestedClass),
        r(e, t))
    }
      , g = function(e, t) {
        !t.nested || (e = e.parentNode.closest("li")) && (e.classList.add(t.nestedClass),
        g(e, t))
    };
    return function(e, t) {
        var n, o, i, r, a, s = {
            setup: function() {
                n = document.querySelectorAll(e),
                o = [],
                Array.prototype.forEach.call(n, function(e) {
                    var t = document.getElementById(decodeURIComponent(e.hash.substr(1)));
                    t && o.push({
                        nav: e,
                        content: t
                    })
                }),
                d(o)
            }
        };
        s.detect = function() {
            var e, t, n, r = p(o, a);
            r ? i && r.content === i.content || (h(i, a),
            t = a,
            !(e = r) || (n = e.nav.closest("li")) && (n.classList.add(t.navClass),
            e.content.classList.add(t.contentClass),
            g(n, t),
            f("gumshoeActivate", n, {
                link: e.nav,
                content: e.content,
                settings: t
            })),
            i = r) : i && (h(i, a),
            i = null)
        }
        ;
        function l(e) {
            r && c.cancelAnimationFrame(r),
            r = c.requestAnimationFrame(s.detect)
        }
        function u(e) {
            r && c.cancelAnimationFrame(r),
            r = c.requestAnimationFrame(function() {
                d(o),
                s.detect()
            })
        }
        s.destroy = function() {
            i && h(i, a),
            c.removeEventListener("scroll", l, !1),
            a.reflow && c.removeEventListener("resize", u, !1),
            a = r = i = n = o = null
        }
        ;
        return a = function() {
            var n = {};
            return Array.prototype.forEach.call(arguments, function(e) {
                for (var t in e) {
                    if (!e.hasOwnProperty(t))
                        return;
                    n[t] = e[t]
                }
            }),
            n
        }(m, t || {}),
        s.setup(),
        s.detect(),
        c.addEventListener("scroll", l, !1),
        a.reflow && c.addEventListener("resize", u, !1),
        s
    }
}),
$(function() {
    $("#main").fitVids();
    function e() {
        (0 === $(".author__urls-wrapper").find("button").length ? 1024 < $(window).width() : !$(".author__urls-wrapper").find("button").is(":visible")) ? $(".sidebar").addClass("sticky") : $(".sidebar").removeClass("sticky")
    }
    e(),
    $(window).resize(function() {
        e()
    }),
    $(".author__urls-wrapper").find("button").on("click", function() {
        $(".author__urls").toggleClass("is--visible"),
        $(".author__urls-wrapper").find("button").toggleClass("open")
    }),
    $(document).keyup(function(e) {
        27 === e.keyCode && $(".initial-content").hasClass("is--hidden") && ($(".search-content").toggleClass("is--visible"),
        $(".initial-content").toggleClass("is--hidden"))
    }),
    $(".search__toggle").on("click", function() {
        $(".search-content").toggleClass("is--visible"),
        $(".initial-content").toggleClass("is--hidden"),
        setTimeout(function() {
            $(".search-content").find("input").focus()
        }, 400)
    });
    new SmoothScroll('a[href*="#"]',{
        offset: 20,
        speed: 400,
        speedAsDuration: !0,
        durationMax: 500
    });
    0 < $("nav.toc").length && new Gumshoe("nav.toc a",{
        navClass: "active",
        contentClass: "active",
        nested: !1,
        nestedClass: "active",
        offset: 20,
        reflow: !0,
        events: !0
    }),
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").has("> img").addClass("image-popup"),
    $(".image-popup").magnificPopup({
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
        },
        removalDelay: 500,
        mainClass: "mfp-zoom-in",
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
            }
        },
        closeOnContentClick: !0,
        midClick: !0
    }),
    $(".page__content").find("h1, h2, h3, h4, h5, h6").each(function() {
        var e, t = $(this).attr("id");
        t && ((e = document.createElement("a")).className = "header-link",
        e.href = "#" + t,
        e.innerHTML = '<span class="sr-only">Permalink</span><i class="fas fa-link"></i>',
        e.title = "Permalink",
        $(this).append(e))
    })
});

