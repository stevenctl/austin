/*!
 * vue-fullpage.js v0.1.5
 * https://github.com/alvarotrigo/vue-fullpage.js
 *
 * @license vue-fullpage is released under the MIT license but notice
 * fullPage.js is licensed under GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/vue-fullpage/ - A project by Alvaro Trigo
 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VueFullpageJs = t() : e.VueFullpageJs = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 4)
    }([function(e, t, n) {
        var o;
        /*!
         * fullPage 3.0.8 - Extensions 0.1.9
         * https://github.com/alvarotrigo/fullPage.js
         * @license http://alvarotrigo.com/fullPage/extensions/#license
         *
         * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
         */
        ! function(r, i, l, a, s) {
            void 0 !== (o = function() {
                return r.fullpage = a(i, l), r.fullpage
            }.call(t, n, t, e)) && (e.exports = o)
        }(this, window, document, function(e, t) {
            "use strict";

            function n(t, n) {
                e.console && e.console[t] && e.console[t]("fullPage: " + n)
            }

            function o(e, n) {
                return (n = 1 < arguments.length ? n : t) ? n.querySelectorAll(e) : null
            }

            function r(e) {
                e = e || {};
                for (var t = 1, n = arguments.length; t < n; ++t) {
                    var o = arguments[t];
                    if (o)
                        for (var i in o) o.hasOwnProperty(i) && ("[object Object]" !== Object.prototype.toString.call(o[i]) ? e[i] = o[i] : e[i] = r(e[i], o[i]))
                }
                return e
            }

            function i(e, t) {
                return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
            }

            function l() {
                return "innerHeight" in e ? e.innerHeight : t.documentElement.offsetHeight
            }

            function a() {
                return e.innerWidth
            }

            function s(e, t) {
                var n;
                for (n in e = g(e), t)
                    if (t.hasOwnProperty(n) && null !== n)
                        for (var o = 0; o < e.length; o++) e[o].style[n] = t[n];
                return e
            }

            function c(e, t, n) {
                for (var o = e[n]; o && !N(o, t);) o = o[n];
                return o
            }

            function u(e, t) {
                return c(e, t, "previousElementSibling")
            }

            function f(e, t) {
                return c(e, t, "nextElementSibling")
            }

            function d(e, t) {
                if (null == t) return e.previousElementSibling;
                var n = d(e);
                return n && N(n, t) ? n : null
            }

            function v(e, t) {
                if (null == t) return e.nextElementSibling;
                var n = v(e);
                return n && N(n, t) ? n : null
            }

            function p(e) {
                return e[e.length - 1]
            }

            function h(e, t) {
                e = b(e) ? e[0] : e;
                for (var n = null != t ? o(t, e.parentNode) : e.parentNode.childNodes, r = 0, i = 0; i < n.length; i++) {
                    if (n[i] == e) return r;
                    1 == n[i].nodeType && r++
                }
                return -1
            }

            function g(e) {
                return b(e) ? e : [e]
            }

            function m(e) {
                e = g(e);
                for (var t = 0; t < e.length; t++) e[t].style.display = "none";
                return e
            }

            function S(e) {
                e = g(e);
                for (var t = 0; t < e.length; t++) e[t].style.display = "block";
                return e
            }

            function b(e) {
                return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
            }

            function y(e, t) {
                e = g(e);
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.classList ? o.classList.add(t) : o.className += " " + t
                }
                return e
            }

            function w(e, t) {
                e = g(e);
                for (var n = t.split(" "), o = 0; o < n.length; o++) {
                    t = n[o];
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
                    }
                }
                return e
            }

            function E(e, t) {
                t.appendChild(e)
            }

            function x(e, n, o) {
                var r;
                n = n || t.createElement("div");
                for (var i = 0; i < e.length; i++) {
                    var l = e[i];
                    (o && !i || !o) && (r = n.cloneNode(!0), l.parentNode.insertBefore(r, l)), r.appendChild(l)
                }
                return e
            }

            function A(e, t) {
                x(e, t, !0)
            }

            function L(e, t) {
                for ("string" == typeof t && (t = B(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild)
            }

            function M(e) {
                for (var n = t.createDocumentFragment(); e.firstChild;) n.appendChild(e.firstChild);
                e.parentNode.replaceChild(n, e)
            }

            function O(e, t) {
                return e && 1 === e.nodeType ? N(e, t) ? e : O(e.parentNode, t) : null
            }

            function T(e, t) {
                k(e, e.nextSibling, t)
            }

            function C(e, t) {
                k(e, e, t)
            }

            function k(e, t, n) {
                b(n) || ("string" == typeof n && (n = B(n)), n = [n]);
                for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t)
            }

            function R() {
                var n = t.documentElement;
                return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0)
            }

            function H(e) {
                return Array.prototype.filter.call(e.parentNode.children, function(t) {
                    return t !== e
                })
            }

            function I(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function z(e) {
                if ("function" == typeof e) return !0;
                var t = Object.prototype.toString(e);
                return "[object Function]" === t || "[object GeneratorFunction]" === t
            }

            function j(n, o, r) {
                var i;
                r = void 0 === r ? {} : r, "function" == typeof e.CustomEvent ? i = new CustomEvent(o, {
                    detail: r
                }) : (i = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, r), n.dispatchEvent(i)
            }

            function N(e, t) {
                return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
            }

            function _(e, t) {
                if ("boolean" == typeof t)
                    for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
                return e
            }

            function B(e) {
                var n = t.createElement("div");
                return n.innerHTML = e.trim(), n.firstChild
            }

            function P(e) {
                e = g(e);
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    n && n.parentElement && n.parentNode.removeChild(n)
                }
            }

            function V(e, t, n) {
                for (var o = e[n], r = []; o;)(N(o, t) || null == t) && r.push(o), o = o[n];
                return r
            }

            function D(e, t) {
                return V(e, t, "nextElementSibling")
            }

            function W(e, t) {
                return V(e, t, "previousElementSibling")
            }

            function Y(e, t) {
                e.insertBefore(t, e.firstChild)
            }
            var Z = "fullpage-wrapper",
                X = "." + Z,
                F = "fp-responsive",
                G = "fp-notransition",
                U = "fp-destroyed",
                $ = "fp-enabled",
                Q = "fp-viewing",
                J = "active",
                K = "." + J,
                q = "fp-completely",
                ee = "fp-section",
                te = "." + ee,
                ne = te + K,
                oe = "fp-tableCell",
                re = "." + oe,
                ie = "#fp-nav",
                le = "fp-slide",
                ae = "." + le,
                se = ae + K,
                ce = "fp-slides",
                ue = "." + ce,
                fe = "fp-slidesContainer",
                de = "." + fe,
                ve = "fp-table",
                pe = "fp-slidesNav",
                he = "." + pe,
                ge = he + " a",
                me = ".fp-controlArrow",
                Se = me + ".fp-prev",
                be = me + ".fp-next";
            return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, n) {
                    n = n || e;
                    for (var o = 0; o < this.length; o++) t.call(n, this[o], o, this)
                }), e.fp_utils = {
                    $: o,
                    deepExtend: r,
                    hasClass: i,
                    getWindowHeight: l,
                    css: s,
                    until: c,
                    prevUntil: u,
                    nextUntil: f,
                    prev: d,
                    next: v,
                    last: p,
                    index: h,
                    getList: g,
                    hide: m,
                    show: S,
                    isArrayOrList: b,
                    addClass: y,
                    removeClass: w,
                    appendTo: E,
                    wrap: x,
                    wrapAll: A,
                    wrapInner: L,
                    unwrap: M,
                    closest: O,
                    after: T,
                    before: C,
                    insertBefore: k,
                    getScrollTop: R,
                    siblings: H,
                    preventDefault: I,
                    isFunction: z,
                    trigger: j,
                    matches: N,
                    toggle: _,
                    createElementFromHTML: B,
                    remove: P,
                    filter: function(e, t) {
                        Array.prototype.filter.call(e, t)
                    },
                    untilAll: V,
                    nextAll: D,
                    prevAll: W,
                    showError: n,
                    prependTo: Y,
                    toggleClass: function(e, t, n) {
                        if (e.classList && null == n) e.classList.toggle(t);
                        else {
                            var o = i(e, t);
                            o && null == n || !n ? w(e, t) : (!o && null == n || n) && y(e, t)
                        }
                    }
                },
                function(c, g) {
                    function x(e, t) {
                        e || on(0), dn("autoScrolling", e, t);
                        var n = o(ne)[0];
                        if (g.autoScrolling && !g.scrollBar) s(yn, {
                            overflow: "hidden",
                            height: "100%"
                        }), k(ro.recordHistory, "internal"), s(Rn, {
                            "-ms-touch-action": "none",
                            "touch-action": "none"
                        }), null != n && on(n.offsetTop);
                        else if (s(yn, {
                                overflow: "visible",
                                height: "initial"
                            }), k(!!g.autoScrolling && ro.recordHistory, "internal"), s(Rn, {
                                "-ms-touch-action": "",
                                "touch-action": ""
                            }), an(Rn), null != n) {
                            var r = lt(n.offsetTop);
                            r.element.scrollTo(0, r.options)
                        }
                        j(Rn, "setAutoScrolling", e)
                    }

                    function k(e, t) {
                        dn("recordHistory", e, t)
                    }

                    function V(e, t) {
                        "internal" !== t && sn("fadingEffect") && xn.fadingEffect.update(e), sn("cards") && xn.cards.update(e), dn("scrollingSpeed", e, t)
                    }

                    function ye(e, t) {
                        dn("fitToSection", e, t)
                    }

                    function we(n) {
                        n ? (function() {
                            var n, o = "";
                            e.addEventListener ? n = "addEventListener" : (n = "attachEvent", o = "on");
                            var r = "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                                i = !!eo && {
                                    passive: !1
                                };
                            "DOMMouseScroll" == r ? t[n](o + "MozMousePixelScroll", Ke, i) : t[n](o + r, Ke, i)
                        }(), Rn.addEventListener("mousedown", Ot), Rn.addEventListener("mouseup", Tt)) : (t.addEventListener ? (t.removeEventListener("mousewheel", Ke, !1), t.removeEventListener("wheel", Ke, !1), t.removeEventListener("MozMousePixelScroll", Ke, !1)) : t.detachEvent("onmousewheel", Ke), Rn.removeEventListener("mousedown", Ot), Rn.removeEventListener("mouseup", Tt))
                    }

                    function Ee(e, t) {
                        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function(t) {
                            ln(e, t, "m")
                        }) : ln(e, "all", "m"), j(Rn, "setAllowScrolling", {
                            value: e,
                            directions: t
                        })
                    }

                    function xe(e) {
                        e ? (we(!0), function() {
                            if (Cn || kn) {
                                g.autoScrolling && (En.removeEventListener(Qn.touchmove, Ge, {
                                    passive: !1
                                }), En.addEventListener(Qn.touchmove, Ge, {
                                    passive: !1
                                }));
                                var e = g.touchWrapper;
                                e.removeEventListener(Qn.touchstart, Qe), e.removeEventListener(Qn.touchmove, Ue, {
                                    passive: !1
                                }), e.addEventListener(Qn.touchstart, Qe), e.addEventListener(Qn.touchmove, Ue, {
                                    passive: !1
                                })
                            }
                        }()) : (we(!1), function() {
                            if (Cn || kn) {
                                g.autoScrolling && (En.removeEventListener(Qn.touchmove, Ue, {
                                    passive: !1
                                }), En.removeEventListener(Qn.touchmove, Ge, {
                                    passive: !1
                                }));
                                var e = g.touchWrapper;
                                e.removeEventListener(Qn.touchstart, Qe), e.removeEventListener(Qn.touchmove, Ue, {
                                    passive: !1
                                })
                            }
                        }())
                    }

                    function Ae(e, t) {
                        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function(t) {
                            ln(e, t, "k")
                        }) : (ln(e, "all", "k"), g.keyboardScrolling = e)
                    }

                    function Le() {
                        var e = u(o(ne)[0], te);
                        e || !g.loopTop && !g.continuousVertical || (e = p(o(te))), null != e && nt(e, null, !0)
                    }

                    function Me() {
                        var e = f(o(ne)[0], te);
                        e || !g.loopBottom && !g.continuousVertical || (e = o(te)[0]), null != e && nt(e, null, !1)
                    }

                    function Oe(e, t) {
                        V(0, "internal"), Te(e, t), V(ro.scrollingSpeed, "internal")
                    }

                    function Te(e, t) {
                        var n = Gt(e);
                        void 0 !== t ? Ut(e, t) : null != n && nt(n)
                    }

                    function Ce(e) {
                        qe("right", e)
                    }

                    function ke(e) {
                        qe("left", e)
                    }

                    function Re(t) {
                        if (!i(Rn, U)) {
                            zn = !0, Hn = l(), In = a();
                            for (var n = o(te), r = 0; r < n.length; ++r) {
                                var c = n[r],
                                    u = o(ue, c)[0],
                                    f = o(ae, c);
                                g.verticalCentered && s(o(re, c), {
                                    height: Xt(c) + "px"
                                }), s(c, {
                                    height: Ve(c) + "px"
                                }), 1 < f.length && Ht(u, o(se, u)[0])
                            }
                            g.scrollOverflow && Pn.createScrollBarForAll();
                            var d = h(o(ne)[0], te);
                            d && !sn("fadingEffect") && Oe(d + 1), zn = !1, z(g.afterResize) && t && g.afterResize.call(Rn, e.innerWidth, e.innerHeight), z(g.afterReBuild) && !t && g.afterReBuild.call(Rn), j(Rn, "afterRebuild")
                        }
                    }

                    function He() {
                        return i(En, F)
                    }

                    function Ie(e) {
                        var t = He();
                        e ? t || (x(!1, "internal"), ye(!1, "internal"), m(o(ie)), y(En, F), z(g.afterResponsive) && g.afterResponsive.call(Rn, e), cn("responsiveSlides", "toSections"), j(Rn, "afterResponsive", e), g.scrollOverflow && Pn.createScrollBarForAll()) : t && (x(ro.autoScrolling, "internal"), ye(ro.autoScrolling, "internal"), S(o(ie)), w(En, F), z(g.afterResponsive) && g.afterResponsive.call(Rn, e), cn("responsiveSlides", "toSlides"), j(Rn, "afterResponsive", e))
                    }

                    function ze(e) {
                        var t = e.target;
                        t && O(t, ie + " a") ? function(e) {
                            I(e);
                            var t = h(O(this, ie + " li"));
                            nt(o(te)[t])
                        }.call(t, e) : N(t, ".fp-tooltip") ? function() {
                            j(d(this), "click")
                        }.call(t) : N(t, me) ? function() {
                            var e = O(this, te);
                            i(this, "fp-prev") ? Bn.m.left && ke(e) : Bn.m.right && Ce(e)
                        }.call(t, e) : N(t, ge) || null != O(t, ge) ? function(e) {
                            I(e);
                            var t = o(ue, O(this, te))[0];
                            Ht(t, o(ae, t)[h(O(this, "li"))])
                        }.call(t, e) : O(t, g.menu + " [data-menuanchor]") && function(e) {
                            !o(g.menu)[0] || !g.lockAnchors && g.anchors.length || (I(e), Te(this.getAttribute("data-menuanchor")))
                        }.call(t, e)
                    }

                    function je(e, n) {
                        t["fp_" + e] = n, t.addEventListener(e, Ne, !0)
                    }

                    function Ne(e) {
                        var n = e.type,
                            o = !1,
                            r = g.scrollOverflow,
                            i = "mouseleave" === n ? e.toElement || e.relatedTarget : e.target;
                        if (i == t || !i) return xe(!0), void(r && g.scrollOverflowHandler.setIscroll(i, !0));
                        "touchend" === n && (lo = !1, setTimeout(function() {
                            lo = !0
                        }, 800)), ("mouseenter" !== n || lo) && (g.normalScrollElements.split(",").forEach(function(e) {
                            if (!o) {
                                var t = N(i, e),
                                    n = O(i, e);
                                (t || n) && (xn.shared.isNormalScrollElement || (xe(!1), r && g.scrollOverflowHandler.setIscroll(i, !1)), xn.shared.isNormalScrollElement = !0, o = !0)
                            }
                        }), !o && xn.shared.isNormalScrollElement && (xe(!0), r && g.scrollOverflowHandler.setIscroll(i, !0), xn.shared.isNormalScrollElement = !1))
                    }

                    function _e() {
                        var e = l(),
                            t = a();
                        Hn === e && In === t || (Hn = e, In = t, Re(!0))
                    }

                    function Be(t) {
                        var n = "fp_" + t + "Extension";
                        ao[t] = g[t + "Key"], xn[t] = void 0 !== e[n] ? new e[n] : null, xn[t] && xn[t].c(t)
                    }

                    function Pe(e, n, r) {
                        var i = 100 * r,
                            l = 100 / r,
                            a = t.createElement("div");
                        a.className = ce, A(n, a);
                        var c, u, f = t.createElement("div");
                        f.className = fe, A(n, f), s(o(de, e), {
                            width: i + "%"
                        }), 1 < r && (g.controlArrows && (c = e, u = [B('<div class="fp-controlArrow fp-prev"></div>'), B('<div class="fp-controlArrow fp-next"></div>')], T(o(ue, c)[0], u), "#fff" !== g.controlArrowColor && (s(o(be, c), {
                            "border-color": "transparent transparent transparent " + g.controlArrowColor
                        }), s(o(Se, c), {
                            "border-color": "transparent " + g.controlArrowColor + " transparent transparent"
                        })), g.loopHorizontal || m(o(Se, c))), g.slidesNavigation && function(e, t) {
                            E(B('<div class="' + pe + '"><ul></ul></div>'), e);
                            var n = o(he, e)[0];
                            y(n, "fp-" + g.slidesNavPosition);
                            for (var r = 0; r < t; r++) E(B('<li><a href="#"><span class="fp-sr-only">' + We(r, "Slide") + "</span><span></span></a></li>"), o("ul", n)[0]);
                            s(n, {
                                "margin-left": "-" + n.innerWidth / 2 + "px"
                            }), y(o("a", o("li", n)[0]), J)
                        }(e, r)), n.forEach(function(e) {
                            s(e, {
                                width: l + "%"
                            }), g.verticalCentered && Zt(e)
                        });
                        var d = o(se, e)[0];
                        null != d && (0 !== h(o(ne), te) || 0 === h(o(ne), te) && 0 !== h(d)) ? (nn(d, "internal"), y(d, "fp-initial")) : y(n[0], J)
                    }

                    function Ve(e) {
                        return g.offsetSections && xn.offsetSections ? Math.round(xn.offsetSections.getWindowHeight(e)) : l()
                    }

                    function De(e, t) {
                        t || null != o(ne)[0] || y(e, J), On = o(ne)[0], s(e, {
                            height: Ve(e) + "px"
                        }), g.paddingTop && s(e, {
                            "padding-top": g.paddingTop
                        }), g.paddingBottom && s(e, {
                            "padding-bottom": g.paddingBottom
                        }), void 0 !== g.sectionsColor[t] && s(e, {
                            "background-color": g.sectionsColor[t]
                        }), void 0 !== g.anchors[t] && e.setAttribute("data-anchor", g.anchors[t])
                    }

                    function We(e, t) {
                        return g.navigationTooltips[e] || g.anchors[e] || t + " " + (e + 1)
                    }

                    function Ye() {
                        var e, t, n = o(ne)[0];
                        y(n, q), ut(n), ct(), dt(n), g.scrollOverflow && g.scrollOverflowHandler.afterLoad(), e = At(), t = Gt(e.section), e.section && t && (void 0 === t || h(t) !== h(On)) || !z(g.afterLoad) || ot("afterLoad", {
                            activeSection: n,
                            element: n,
                            direction: null,
                            anchorLink: n.getAttribute("data-anchor"),
                            sectionIndex: h(n, te)
                        }), z(g.afterRender) && ot("afterRender"), j(Rn, "afterRender")
                    }

                    function Ze() {
                        var e;
                        if (j(Rn, "onScroll"), (!g.autoScrolling || g.scrollBar || sn("dragAndMove")) && !fn()) {
                            var t = sn("dragAndMove") ? Math.abs(xn.dragAndMove.getCurrentScroll()) : R(),
                                n = 0,
                                r = t + l() / 2,
                                a = (sn("dragAndMove") ? xn.dragAndMove.getDocumentHeight() : En.offsetHeight - l()) === t,
                                s = o(te);
                            if (a) n = s.length - 1;
                            else if (t)
                                for (var c = 0; c < s.length; ++c) s[c].offsetTop <= r && (n = c);
                            else n = 0;
                            if (!i(e = s[n], J)) {
                                fo = !0;
                                var u, f, d = o(ne)[0],
                                    v = h(d, te) + 1,
                                    p = Wt(e),
                                    m = e.getAttribute("data-anchor"),
                                    S = h(e, te) + 1,
                                    b = o(se, e)[0],
                                    E = {
                                        activeSection: d,
                                        sectionIndex: S - 1,
                                        anchorLink: m,
                                        element: e,
                                        leavingSection: v,
                                        direction: p
                                    };
                                b && (f = b.getAttribute("data-anchor"), u = h(b)), Nn && (y(e, J), w(H(e), J), cn("parallax", "afterLoad"), z(g.onLeave) && ot("onLeave", E), z(g.afterLoad) && ot("afterLoad", E), sn("resetSliders") && xn.resetSliders.apply({
                                    localIsResizing: zn,
                                    leavingSection: v
                                }), pt(d), ut(e), dt(e), Dt(m, S - 1), g.anchors.length && (An = m), Qt(u, f, m)), clearTimeout(Zn), Zn = setTimeout(function() {
                                    fo = !1
                                }, 100)
                            }
                            g.fitToSection && (clearTimeout(Xn), Xn = setTimeout(function() {
                                g.fitToSection && o(ne)[0].offsetHeight <= Hn && Xe()
                            }, g.fitToSectionDelay))
                        }
                    }

                    function Xe() {
                        Nn && (zn = !0, nt(o(ne)[0]), zn = !1)
                    }

                    function Fe(e) {
                        if (Bn.m[e]) {
                            var t = "down" === e ? Me : Le;
                            if (sn("scrollHorizontally") && (t = xn.scrollHorizontally.getScrollSection(e, t)), g.scrollOverflow) {
                                var n = g.scrollOverflowHandler.scrollable(o(ne)[0]),
                                    r = "down" === e ? "bottom" : "top";
                                if (null != n) {
                                    if (!g.scrollOverflowHandler.isScrolled(r, n)) return !0;
                                    t()
                                } else t()
                            } else t()
                        }
                    }

                    function Ge(e) {
                        g.autoScrolling && $e(e) && Bn.m.up && I(e)
                    }

                    function Ue(t) {
                        var n = O(t.target, te) || o(ne)[0];
                        if ($e(t)) {
                            g.autoScrolling && I(t);
                            var r = tn(t);
                            ho = r.y, go = r.x, o(ue, n).length && Math.abs(po - go) > Math.abs(vo - ho) ? !Tn && Math.abs(po - go) > a() / 100 * g.touchSensitivity && (go < po ? Bn.m.right && Ce(n) : Bn.m.left && ke(n)) : g.autoScrolling && Nn && Math.abs(vo - ho) > e.innerHeight / 100 * g.touchSensitivity && (ho < vo ? Fe("down") : vo < ho && Fe("up"))
                        }
                    }

                    function $e(e) {
                        return void 0 === e.pointerType || "mouse" != e.pointerType
                    }

                    function Qe(e) {
                        if (g.fitToSection && (no = !1), $e(e)) {
                            var t = tn(e);
                            vo = t.y, po = t.x
                        }
                    }

                    function Je(e, t) {
                        for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                        return Math.ceil(n / t)
                    }

                    function Ke(t) {
                        var n = (new Date).getTime(),
                            r = i(o(".fp-completely")[0], "fp-normal-scroll");
                        if (!Bn.m.down && !Bn.m.up) return I(t), !1;
                        if (g.autoScrolling && !Mn && !r) {
                            var l = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail,
                                a = Math.max(-1, Math.min(1, l)),
                                s = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                                c = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !s;
                            149 < _n.length && _n.shift(), _n.push(Math.abs(l)), g.scrollBar && I(t);
                            var u = n - mo;
                            if (mo = n, 200 < u && (_n = []), Nn && !un()) {
                                var f = Je(_n, 10);
                                Je(_n, 70) <= f && c && Fe(a < 0 ? "down" : "up")
                            }
                            return !1
                        }
                        g.fitToSection && (no = !1)
                    }

                    function qe(e, t) {
                        var n = null == t ? o(ne)[0] : t,
                            r = o(ue, n)[0];
                        if (!(null == r || un() || Tn || o(ae, r).length < 2)) {
                            var i = o(se, r)[0],
                                l = null;
                            if (null == (l = "left" === e ? u(i, ae) : f(i, ae))) {
                                if (!g.loopHorizontal) return;
                                var a = H(i);
                                l = "left" === e ? a[a.length - 1] : a[0]
                            }
                            Tn = !xn.test.isTesting, Ht(r, l, e)
                        }
                    }

                    function et() {
                        for (var e = o(se), t = 0; t < e.length; t++) nn(e[t], "internal")
                    }

                    function tt(e) {
                        var t = e.offsetHeight,
                            n = e.offsetTop,
                            o = n,
                            r = sn("dragAndMove") && xn.dragAndMove.isGrabbing ? xn.dragAndMove.isScrollingDown() : So < n,
                            i = o - Hn + t,
                            l = g.bigSectionsDestination;
                        return Hn < t ? (r || l) && "bottom" !== l || (o = i) : (r || zn && null == v(e)) && (o = i), g.offsetSections && xn.offsetSections && (o = xn.offsetSections.getSectionPosition(r, o, e)), So = o
                    }

                    function nt(e, t, n) {
                        if (null != e) {
                            var r, l, a = {
                                element: e,
                                callback: t,
                                isMovementUp: n,
                                dtop: tt(e),
                                yMovement: Wt(e),
                                anchorLink: e.getAttribute("data-anchor"),
                                sectionIndex: h(e, te),
                                activeSlide: o(se, e)[0],
                                activeSection: o(ne)[0],
                                leavingSection: h(o(ne), te) + 1,
                                localIsResizing: zn
                            };
                            if (!(a.activeSection == e && !zn || g.scrollBar && R() === a.dtop && !i(e, "fp-auto-height"))) {
                                if (null != a.activeSlide && (r = a.activeSlide.getAttribute("data-anchor"), l = h(a.activeSlide)), !a.localIsResizing) {
                                    var s = a.yMovement;
                                    if (void 0 !== n && (s = n ? "up" : "down"), a.direction = s, z(g.onLeave) && !1 === ot("onLeave", a)) return
                                }
                                var c;
                                cn("parallax", "apply", a), cn("cards", "apply", a), g.autoScrolling && g.continuousVertical && void 0 !== a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && ((u = a).isMovementUp ? C(o(ne)[0], D(u.activeSection, te)) : T(o(ne)[0], W(u.activeSection, te).reverse()), on(o(ne)[0].offsetTop), et(), u.wrapAroundElements = u.activeSection, u.dtop = u.element.offsetTop, u.yMovement = Wt(u.element), u.leavingSection = h(u.activeSection, te) + 1, u.sectionIndex = h(u.element, te), j(o(X)[0], "onContinuousVertical", u), a = u), sn("scrollOverflowReset") && xn.scrollOverflowReset.setPrevious(a.activeSection), a.localIsResizing || pt(a.activeSection), g.scrollOverflow && g.scrollOverflowHandler.beforeLeave(), y(e, J), w(H(e), J), ut(e), g.scrollOverflow && g.scrollOverflowHandler.onLeave(), Nn = xn.test.isTesting, Qt(l, r, a.anchorLink, a.sectionIndex),
                                    function(e) {
                                        if (g.css3 && g.autoScrolling && !g.scrollBar) Ft("translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)", !0), g.scrollingSpeed ? (clearTimeout(Wn), Wn = setTimeout(function() {
                                            at(e)
                                        }, g.scrollingSpeed)) : at(e);
                                        else {
                                            var t = lt(e.dtop);
                                            xn.test.top = -e.dtop + "px", pn(t.element, t.options, g.scrollingSpeed, function() {
                                                g.scrollBar ? setTimeout(function() {
                                                    at(e)
                                                }, 30) : at(e)
                                            })
                                        }
                                    }(a), An = a.anchorLink, Dt(a.anchorLink, null == (c = a).wrapAroundElements ? c.sectionIndex : c.isMovementUp ? o(te).length - 1 : 0)
                            }
                        }
                        var u
                    }

                    function ot(e, t) {
                        var n, r, i, l, a = (r = e, i = t, (l = g.v2compatible ? {
                            afterRender: function() {
                                return [Rn]
                            },
                            onLeave: function() {
                                return [i.activeSection, i.leavingSection, i.sectionIndex + 1, i.direction]
                            },
                            afterLoad: function() {
                                return [i.element, i.anchorLink, i.sectionIndex + 1]
                            },
                            afterSlideLoad: function() {
                                return [i.destiny, i.anchorLink, i.sectionIndex + 1, i.slideAnchor, i.slideIndex]
                            },
                            onSlideLeave: function() {
                                return [i.prevSlide, i.anchorLink, i.sectionIndex + 1, i.prevSlideIndex, i.direction, i.slideIndex]
                            }
                        } : {
                            afterRender: function() {
                                return {
                                    section: rt(o(ne)[0]),
                                    slide: it(o(se, o(ne)[0])[0])
                                }
                            },
                            onLeave: function() {
                                return {
                                    origin: rt(i.activeSection),
                                    destination: rt(i.element),
                                    direction: i.direction
                                }
                            },
                            afterLoad: function() {
                                return l.onLeave()
                            },
                            afterSlideLoad: function() {
                                return {
                                    section: rt(i.section),
                                    origin: it(i.prevSlide),
                                    destination: it(i.destiny),
                                    direction: i.direction
                                }
                            },
                            onSlideLeave: function() {
                                return l.afterSlideLoad()
                            }
                        })[r]());
                        if (g.v2compatible) {
                            if (!1 === g[e].apply(a[0], a.slice(1))) return !1
                        } else if (j(Rn, e, a), !1 === g[e].apply(a[Object.keys(a)[0]], (n = a, Object.keys(n).map(function(e) {
                                return n[e]
                            })))) return !1;
                        return !0
                    }

                    function rt(e) {
                        return e ? new mn(e) : null
                    }

                    function it(e) {
                        return e ? new Sn(e) : null
                    }

                    function lt(t) {
                        var n = {};
                        return g.autoScrolling && !g.scrollBar ? (n.options = -t, n.element = o(X)[0]) : (n.options = t, n.element = e), n
                    }

                    function at(e) {
                        var t;
                        null != (t = e).wrapAroundElements && (t.isMovementUp ? C(o(te)[0], t.wrapAroundElements) : T(o(te)[o(te).length - 1], t.wrapAroundElements), on(o(ne)[0].offsetTop), et(), t.sectionIndex = h(t.element, te), t.leavingSection = h(t.activeSection, te) + 1), z(g.afterLoad) && !e.localIsResizing && ot("afterLoad", e), g.scrollOverflow && g.scrollOverflowHandler.afterLoad(), cn("parallax", "afterLoad"), cn("scrollOverflowReset", "reset"), sn("resetSliders") && xn.resetSliders.apply(e), e.localIsResizing || dt(e.element), y(e.element, q), w(H(e.element), q), ct(), Nn = !0, z(e.callback) && e.callback()
                    }

                    function st(e, t) {
                        e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t)
                    }

                    function ct() {
                        var e = o(".fp-auto-height")[0] || He() && o(".fp-auto-height-responsive")[0];
                        g.lazyLoading && e && o(te + ":not(" + K + ")").forEach(function(e) {
                            var t, n, o;
                            t = e.getBoundingClientRect(), n = t.top, o = t.bottom, (n + 2 < Hn && 0 < n || 2 < o && o < Hn) && ut(e)
                        })
                    }

                    function ut(e) {
                        g.lazyLoading && o("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", ht(e)).forEach(function(t) {
                            if (["src", "srcset"].forEach(function(n) {
                                    var o = t.getAttribute("data-" + n);
                                    null != o && o && (st(t, n), t.addEventListener("load", function() {
                                        ft(e)
                                    }))
                                }), N(t, "source")) {
                                var n = O(t, "video, audio");
                                n && (n.load(), n.onloadeddata = function() {
                                    ft(e)
                                })
                            }
                        })
                    }

                    function ft(e) {
                        g.scrollOverflow && (clearTimeout(oo), oo = setTimeout(function() {
                            Pn.createScrollBar(e)
                        }, 200))
                    }

                    function dt(e) {
                        var t = ht(e);
                        o("video, audio", t).forEach(function(e) {
                            e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                        }), o('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) {
                            e.hasAttribute("data-autoplay") && vt(e), e.onload = function() {
                                e.hasAttribute("data-autoplay") && vt(e)
                            }
                        })
                    }

                    function vt(e) {
                        e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                    }

                    function pt(e) {
                        var t = ht(e);
                        o("video, audio", t).forEach(function(e) {
                            e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                        }), o('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) {
                            /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                        })
                    }

                    function ht(e) {
                        var t = o(se, e);
                        return t.length && (e = t[0]), e
                    }

                    function gt(e) {
                        function t(e) {
                            var t, n, r, i, l, a, s = "",
                                c = 0;
                            for (e = e.replace(/[^A-Za-z0-9+\/=]/g, ""); c < e.length;) t = o.indexOf(e.charAt(c++)) << 2 | (i = o.indexOf(e.charAt(c++))) >> 4, n = (15 & i) << 4 | (l = o.indexOf(e.charAt(c++))) >> 2, r = (3 & l) << 6 | (a = o.indexOf(e.charAt(c++))), s += String.fromCharCode(t), 64 != l && (s += String.fromCharCode(n)), 64 != a && (s += String.fromCharCode(r));
                            return s = function(e) {
                                for (var t, n = "", o = 0, r = 0, i = 0; o < e.length;)(r = e.charCodeAt(o)) < 128 ? (n += String.fromCharCode(r), o++) : 191 < r && r < 224 ? (i = e.charCodeAt(o + 1), n += String.fromCharCode((31 & r) << 6 | 63 & i), o += 2) : (i = e.charCodeAt(o + 1), t = e.charCodeAt(o + 2), n += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & t), o += 3);
                                return n
                            }(s)
                        }

                        function n(e) {
                            return e.slice(3).slice(0, -3)
                        }
                        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        return function(e) {
                            var o = e.split("_");
                            if (1 < o.length) {
                                var r = o[1];
                                return e.replace(n(o[1]), "").split("_")[0] + "_" + t(r.slice(3).slice(0, -3))
                            }
                            return n(e)
                        }(t(e))
                    }

                    function mt(e) {
                        var n = void 0 !== ao[e] && ao[e].length,
                            o = [],
                            r = !1;
                        return b(ao[e]) ? o = ao[e] : o.push(ao[e]), o.forEach(function(o) {
                            var i = function() {
                                    if (t.domain.length) {
                                        for (var e = t.domain.replace(/^(www\.)/, "").split("."); 2 < e.length;) e.shift();
                                        return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
                                    }
                                    return ""
                                }(),
                                l = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN"],
                                a = gt(l[0]),
                                s = gt(l[1]),
                                c = gt(l[2]),
                                u = gt(l[3]),
                                f = [a, s, c].indexOf(i) < 0 && 0 !== i.length;
                            if (!n && f) return !1;
                            var d = n ? gt(o) : "",
                                v = 1 < (d = d.split("_")).length && -1 < d[1].indexOf(e, d[1].length - e.length),
                                p = d[0].indexOf(i, d[0].length - i.length) < 0;
                            r = r || !(p && f && u != d[0]) && v || !f
                        }), r
                    }

                    function St(t) {
                        t.forEach(function(t) {
                            if (t.removedNodes[0] && t.removedNodes[0].isEqualNode(co)) {
                                clearTimeout(uo);
                                var n = gt("bDIwc2V0VGltZW91dDAzbA==");
                                uo = e[n](bt, 900)
                            }
                        })
                    }

                    function bt() {
                        Jn = !1
                    }

                    function yt(n) {
                        if (co = t.createElement("div"), so = gt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), Kn || (so = so.replace("extensions/", "").replace("Extension", "")), co.innerHTML = so, co = co.firstChild, "MutationObserver" in e && new MutationObserver(St).observe(t.body, {
                                childList: !0,
                                subtree: !1
                            }), (!Kn || sn(n) && xn[n]) && (!mt(n) || !Kn)) {
                            wt();
                            var o = gt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                            e[o](wt, 2e3)
                        }
                    }

                    function wt() {
                        co && (Jn || (Math.random() < .5 ? Y(En, co) : E(co, En), Jn = !0), co.setAttribute("style", gt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, gt("MTIzICFpbXBvcnRhbnQ7MzQ1"))))
                    }

                    function Et() {
                        var e = At(),
                            t = e.section,
                            n = e.slide;
                        t && (g.animateAnchor ? Ut(t, n) : Oe(t, n))
                    }

                    function xt() {
                        if (!fo && !g.lockAnchors) {
                            var e = At(),
                                t = e.section,
                                n = e.slide,
                                o = void 0 === An,
                                r = void 0 === An && void 0 === n && !Tn;
                            if (t && t.length) {
                                var i = !sn("dragAndMove") || Ln;
                                (t && t !== An && !o || r || !Tn && Ln != n && i) && Ut(t, n)
                            }
                        }
                    }

                    function At() {
                        var t, n, o = e.location.hash;
                        if (o.length) {
                            var r = o.replace("#", "").split("/"),
                                i = -1 < o.indexOf("#/");
                            t = i ? "/" + r[1] : decodeURIComponent(r[0]);
                            var l = i ? r[2] : r[1];
                            l && l.length && (n = decodeURIComponent(l))
                        }
                        return {
                            section: t,
                            slide: n
                        }
                    }

                    function Lt(e) {
                        clearTimeout(Fn);
                        var n = t.activeElement,
                            r = e.keyCode;
                        9 === r ? function(e) {
                            function n(e) {
                                return I(e), v[0] ? v[0].focus() : null
                            }
                            var r, i, l, a, s, c, u, f = e.shiftKey,
                                d = t.activeElement,
                                v = Ct(ht(o(ne)[0]));
                            r = e, i = Ct(t), l = i.indexOf(t.activeElement), a = r.shiftKey ? l - 1 : l + 1, s = i[a], c = it(O(s, ae)), u = rt(O(s, te)), (c || u) && (d ? null == O(d, ne + "," + ne + " " + se) && (d = n(e)) : n(e), (!f && d == v[v.length - 1] || f && d == v[0]) && I(e))
                        }(e) : N(n, "textarea") || N(n, "input") || N(n, "select") || "true" === n.getAttribute("contentEditable") || "" === n.getAttribute("contentEditable") || !g.keyboardScrolling || !g.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(r) && I(e), Mn = e.ctrlKey, Fn = setTimeout(function() {
                            ! function(e) {
                                var n = e.shiftKey,
                                    r = t.activeElement,
                                    i = N(r, "video") || N(r, "audio");
                                if (Nn || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
                                    case 38:
                                    case 33:
                                        Bn.k.up && Le();
                                        break;
                                    case 32:
                                        if (n && Bn.k.up && !i) {
                                            Le();
                                            break
                                        }
                                        case 40:
                                        case 34:
                                            Bn.k.down && (32 === e.keyCode && i || Me());
                                            break;
                                        case 36:
                                            Bn.k.up && Te(1);
                                            break;
                                        case 35:
                                            Bn.k.down && Te(o(te).length);
                                            break;
                                        case 37:
                                            Bn.k.left && ke();
                                            break;
                                        case 39:
                                            Bn.k.right && Ce()
                                }
                            }(e)
                        }, 150))
                    }

                    function Mt(e) {
                        jn && (Mn = e.ctrlKey)
                    }

                    function Ot(e) {
                        2 == e.which && (bo = e.pageY, Rn.addEventListener("mousemove", Rt))
                    }

                    function Tt(e) {
                        2 == e.which && Rn.removeEventListener("mousemove", Rt)
                    }

                    function Ct(e) {
                        return [].slice.call(o(qn, e)).filter(function(e) {
                            return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
                        })
                    }

                    function kt() {
                        Mn = jn = !1
                    }

                    function Rt(e) {
                        g.autoScrolling && (Nn && (e.pageY < bo && Bn.m.up ? Le() : e.pageY > bo && Bn.m.down && Me()), bo = e.pageY)
                    }

                    function Ht(e, t, n) {
                        var r = O(e, te),
                            l = {
                                slides: e,
                                destiny: t,
                                direction: n,
                                destinyPos: {
                                    left: t.offsetLeft
                                },
                                slideIndex: h(t),
                                section: r,
                                sectionIndex: h(r, te),
                                anchorLink: r.getAttribute("data-anchor"),
                                slidesNav: o(he, r)[0],
                                slideAnchor: Kt(t),
                                prevSlide: o(se, r)[0],
                                prevSlideIndex: h(o(se, r)[0]),
                                localIsResizing: zn
                            };
                        l.xMovement = Yt(l.prevSlideIndex, l.slideIndex), l.direction = l.direction ? l.direction : l.xMovement, l.localIsResizing || (Nn = !1), cn("parallax", "applyHorizontal", l), cn("cards", "apply", l), g.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && z(g.onSlideLeave) && !1 === ot("onSlideLeave", l) ? Tn = !1 : (y(t, J), w(H(t), J), l.localIsResizing || (pt(l.prevSlide), ut(t)), It(l), i(r, J) && !l.localIsResizing && Qt(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), xn.continuousHorizontal && xn.continuousHorizontal.apply(l), fn() ? zt(l) : jt(e, l, !0), g.interlockedSlides && xn.interlockedSlides && (sn("continuousHorizontal") && void 0 !== n && n !== l.xMovement || xn.interlockedSlides.apply(l)))
                    }

                    function It(e) {
                        !g.loopHorizontal && g.controlArrows && (_(o(Se, e.section), 0 !== e.slideIndex), _(o(be, e.section), null != v(e.destiny)))
                    }

                    function zt(e) {
                        var t, n;
                        xn.continuousHorizontal && xn.continuousHorizontal.afterSlideLoads(e), t = e.slidesNav, n = e.slideIndex, g.slidesNavigation && null != t && (w(o(K, t), J), y(o("a", o("li", t)[n]), J)), e.localIsResizing || (cn("parallax", "afterSlideLoads"), cn("scrollOverflowReset", "setPrevious", e.prevSlide), cn("scrollOverflowReset", "reset"), z(g.afterSlideLoad) && ot("afterSlideLoad", e), Nn = !0, dt(e.destiny)), Tn = !1, sn("interlockedSlides") && xn.interlockedSlides.apply(e)
                    }

                    function jt(e, t, n) {
                        var r = t.destinyPos;
                        if (g.css3) {
                            var i = "translate3d(-" + Math.round(r.left) + "px, 0px, 0px)";
                            xn.test.translate3dH[t.sectionIndex] = i, s(Pt(o(de, e)), rn(i)), Yn = setTimeout(function() {
                                n && zt(t)
                            }, g.scrollingSpeed)
                        } else xn.test.left[t.sectionIndex] = Math.round(r.left), pn(e, Math.round(r.left), g.scrollingSpeed, function() {
                            n && zt(t)
                        })
                    }

                    function Nt() {
                        clearTimeout(Vn), Vn = setTimeout(function() {
                            for (var e = 0; e < 4; e++) Dn = setTimeout(_t, 200 * e)
                        }, 200)
                    }

                    function _t() {
                        if (j(Rn, "onResize"), Bt(), Cn) {
                            var e = t.activeElement;
                            if (!N(e, "textarea") && !N(e, "input") && !N(e, "select")) {
                                var n = l();
                                Math.abs(n - yo) > 20 * Math.max(yo, n) / 100 && (Re(!0), yo = n)
                            }
                        } else _e()
                    }

                    function Bt() {
                        var t = g.responsive || g.responsiveWidth,
                            n = g.responsiveHeight,
                            o = t && e.innerWidth < t,
                            r = n && e.innerHeight < n;
                        t && n ? Ie(o || r) : t ? Ie(o) : n && Ie(r)
                    }

                    function Pt(e) {
                        var t = "all " + g.scrollingSpeed + "ms " + g.easingcss3;
                        return w(e, G), s(e, {
                            "-webkit-transition": t,
                            transition: t
                        })
                    }

                    function Vt(e) {
                        return y(e, G)
                    }

                    function Dt(e, t) {
                        var n, r, i, l;
                        n = e, o(g.menu).forEach(function(e) {
                            g.menu && null != e && (w(o(K, e), J), y(o('[data-menuanchor="' + n + '"]', e), J))
                        }), r = e, i = t, l = o(ie)[0], g.navigation && null != l && "none" !== l.style.display && (w(o(K, o(ie)[0]), J), y(r ? o('a[href="#' + r + '"]', o(ie)[0]) : o("a", o("li", o(ie)[0])[i]), J))
                    }

                    function Wt(e) {
                        var t = h(o(ne)[0], te),
                            n = h(e, te);
                        return t == n ? "none" : n < t ? "up" : "down"
                    }

                    function Yt(e, t) {
                        return e == t ? "none" : t < e ? "left" : "right"
                    }

                    function Zt(e) {
                        if (!i(e, ve)) {
                            var n = t.createElement("div");
                            n.className = oe, n.style.height = Xt(e) + "px", y(e, ve), L(e, n)
                        }
                    }

                    function Xt(e) {
                        var t = Ve(e);
                        if (g.paddingTop || g.paddingBottom) {
                            var n = e;
                            i(n, ee) || (n = O(e, te)), t -= parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"])
                        }
                        return t
                    }

                    function Ft(e, t) {
                        t ? Pt(Rn) : Vt(Rn), clearTimeout(Un), s(Rn, rn(e)), xn.test.translate3d = e, Un = setTimeout(function() {
                            w(Rn, G)
                        }, 10)
                    }

                    function Gt(e) {
                        var t = o(te + '[data-anchor="' + e + '"]', Rn)[0];
                        if (!t) {
                            var n = void 0 !== e ? e - 1 : 0;
                            t = o(te)[n]
                        }
                        return t
                    }

                    function Ut(e, t) {
                        var n = Gt(e);
                        if (null != n) {
                            var r, l, a, s = (null == (a = o(ae + '[data-anchor="' + (r = t) + '"]', l = n)[0]) && (r = void 0 !== r ? r : 0, a = o(ae, l)[r]), a);
                            Kt(n) === An || i(n, J) ? $t(s) : nt(n, function() {
                                $t(s)
                            })
                        }
                    }

                    function $t(e) {
                        null != e && Ht(O(e, ue), e)
                    }

                    function Qt(e, t, n, o) {
                        var r = "";
                        g.anchors.length && !g.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), Jt(r + "/" + (Ln = t))) : (null != e && (Ln = t), Jt(n))), qt()
                    }

                    function Jt(t) {
                        if (g.recordHistory) location.hash = t;
                        else if (Cn || kn) e.history.replaceState(void 0, void 0, "#" + t);
                        else {
                            var n = e.location.href.split("#")[0];
                            e.location.replace(n + "#" + t)
                        }
                    }

                    function Kt(e) {
                        if (!e) return null;
                        var t = e.getAttribute("data-anchor"),
                            n = h(e);
                        return null == t && (t = n), t
                    }

                    function qt() {
                        var e = o(ne)[0],
                            t = o(se, e)[0],
                            n = Kt(e),
                            r = Kt(t),
                            i = String(n);
                        t && (i = i + "-" + r), i = i.replace("/", "-").replace("#", "");
                        var l = new RegExp("\\b\\s?" + Q + "-[^\\s]+\\b", "g");
                        En.className = En.className.replace(l, ""), y(En, Q + "-" + i)
                    }

                    function en() {
                        return e.PointerEvent ? {
                            down: "pointerdown",
                            move: "pointermove"
                        } : {
                            down: "MSPointerDown",
                            move: "MSPointerMove"
                        }
                    }

                    function tn(e) {
                        var t = [];
                        return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, kn && $e(e) && g.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
                    }

                    function nn(e, t) {
                        V(0, "internal"), void 0 !== t && (zn = !0), Ht(O(e, ue), e), void 0 !== t && (zn = !1), V(ro.scrollingSpeed, "internal")
                    }

                    function on(e) {
                        var t = Math.round(e);
                        if (g.css3 && g.autoScrolling && !g.scrollBar) Ft("translate3d(0px, -" + t + "px, 0px)", !1);
                        else if (g.autoScrolling && !g.scrollBar) s(Rn, {
                            top: -t + "px"
                        }), xn.test.top = -t + "px";
                        else {
                            var n = lt(t);
                            hn(n.element, n.options)
                        }
                    }

                    function rn(e) {
                        return {
                            "-webkit-transform": e,
                            "-moz-transform": e,
                            "-ms-transform": e,
                            transform: e
                        }
                    }

                    function ln(e, t, n) {
                        "all" !== t ? Bn[n][t] = e : Object.keys(Bn[n]).forEach(function(t) {
                            Bn[n][t] = e
                        })
                    }

                    function an(e) {
                        return s(e, {
                            "-webkit-transition": "none",
                            transition: "none"
                        })
                    }

                    function sn(e) {
                        return null !== g[e] && "[object Array]" === Object.prototype.toString.call(g[e]) ? g[e].length && xn[e] : g[e] && xn[e]
                    }

                    function cn(e, t, n) {
                        if (sn(e)) return xn[e][t](n)
                    }

                    function un() {
                        return sn("dragAndMove") && xn.dragAndMove.isAnimating
                    }

                    function fn() {
                        return sn("dragAndMove") && xn.dragAndMove.isGrabbing
                    }

                    function dn(e, t, n) {
                        g[e] = t, "internal" !== n && (ro[e] = t)
                    }

                    function vn() {
                        var e = g.licenseKey,
                            t = "font-size: 15px;background:yellow;";
                        bn ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t)) : (n("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), n("error", "https://github.com/alvarotrigo/fullPage.js#options.")), i(wn, $) ? n("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (g.continuousVertical && (g.loopTop || g.loopBottom) && (g.continuousVertical = !1, n("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !g.scrollOverflow || !g.scrollBar && g.autoScrolling || n("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !g.continuousVertical || !g.scrollBar && g.autoScrolling || (g.continuousVertical = !1, n("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), g.scrollOverflow && null == g.scrollOverflowHandler && (g.scrollOverflow = !1, n("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), g.anchors.forEach(function(e) {
                            var t = [].slice.call(o("[name]")).filter(function(t) {
                                    return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                                }),
                                r = [].slice.call(o("[id]")).filter(function(t) {
                                    return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                                });
                            if (r.length || t.length) {
                                n("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                                var i = r.length ? "id" : "name";
                                (r.length || t.length) && n("error", '"' + e + '" is is being used by another element `' + i + "` property")
                            }
                        }))
                    }

                    function pn(t, n, o, r) {
                        var l, a = (l = t).self != e && i(l, ce) ? l.scrollLeft : !g.autoScrolling || g.scrollBar ? R() : l.offsetTop,
                            s = n - a,
                            c = 0;
                        no = !0;
                        var u = function() {
                            if (no) {
                                var i = n;
                                c += 20, o && (i = e.fp_easings[g.easing](c, a, s, o)), hn(t, i), c < o ? setTimeout(u, 20) : void 0 !== r && r()
                            } else c < o && r()
                        };
                        u()
                    }

                    function hn(t, n) {
                        !g.autoScrolling || g.scrollBar || t.self != e && i(t, ce) ? t.self != e && i(t, ce) ? t.scrollLeft = n : t.scrollTo(0, n) : t.style.top = n + "px"
                    }

                    function gn(e, t) {
                        this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = h(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index
                    }

                    function mn(e) {
                        gn.call(this, e, te)
                    }

                    function Sn(e) {
                        gn.call(this, e, ae)
                    }
                    var bn = g && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey) || -1 < t.domain.indexOf("alvarotrigo.com"),
                        yn = o("html, body"),
                        wn = o("html")[0],
                        En = o("body")[0];
                    if (!i(wn, $)) {
                        var xn = {};
                        g = r({
                            menu: !1,
                            anchors: [],
                            lockAnchors: !1,
                            navigation: !1,
                            navigationPosition: "right",
                            navigationTooltips: [],
                            showActiveTooltip: !1,
                            slidesNavigation: !1,
                            slidesNavPosition: "bottom",
                            scrollBar: !1,
                            hybrid: !1,
                            css3: !0,
                            scrollingSpeed: 700,
                            autoScrolling: !0,
                            fitToSection: !0,
                            fitToSectionDelay: 1e3,
                            easing: "easeInOutCubic",
                            easingcss3: "ease",
                            loopBottom: !1,
                            loopTop: !1,
                            loopHorizontal: !0,
                            continuousVertical: !1,
                            continuousHorizontal: !1,
                            scrollHorizontally: !1,
                            interlockedSlides: !1,
                            dragAndMove: !1,
                            offsetSections: !1,
                            resetSliders: !1,
                            fadingEffect: !1,
                            normalScrollElements: null,
                            scrollOverflow: !1,
                            scrollOverflowReset: !1,
                            scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
                            scrollOverflowOptions: null,
                            touchSensitivity: 5,
                            touchWrapper: "string" == typeof c ? o(c)[0] : c,
                            bigSectionsDestination: null,
                            keyboardScrolling: !0,
                            animateAnchor: !0,
                            recordHistory: !0,
                            controlArrows: !0,
                            controlArrowColor: "#fff",
                            verticalCentered: !0,
                            sectionsColor: [],
                            paddingTop: 0,
                            paddingBottom: 0,
                            fixedElements: null,
                            responsive: 0,
                            responsiveWidth: 0,
                            responsiveHeight: 0,
                            responsiveSlides: !1,
                            parallax: !1,
                            parallaxOptions: {
                                type: "reveal",
                                percentage: 62,
                                property: "translate"
                            },
                            cards: !1,
                            cardsOptions: {
                                perspective: 100,
                                fadeContent: !0,
                                fadeBackground: !0
                            },
                            sectionSelector: ".section",
                            slideSelector: ".slide",
                            v2compatible: !1,
                            afterLoad: null,
                            onLeave: null,
                            afterRender: null,
                            afterResize: null,
                            afterReBuild: null,
                            afterSlideLoad: null,
                            onSlideLeave: null,
                            afterResponsive: null,
                            lazyLoading: !0
                        }, g);
                        var An, Ln, Mn, On, Tn = !1,
                            Cn = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                            kn = "ontouchstart" in e || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                            Rn = "string" == typeof c ? o(c)[0] : c,
                            Hn = l(),
                            In = a(),
                            zn = !1,
                            jn = !0,
                            Nn = !0,
                            _n = [],
                            Bn = {
                                m: {
                                    up: !0,
                                    down: !0,
                                    left: !0,
                                    right: !0
                                }
                            };
                        Bn.k = r({}, Bn.m);
                        var Pn, Vn, Dn, Wn, Yn, Zn, Xn, Fn, Gn, Un, $n = en(),
                            Qn = {
                                touchmove: "ontouchmove" in e ? "touchmove" : $n.move,
                                touchstart: "ontouchstart" in e ? "touchstart" : $n.down
                            },
                            Jn = !1,
                            Kn = !i(En, gt("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),
                            qn = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                            eo = !1;
                        try {
                            var to = Object.defineProperty({}, "passive", {
                                get: function() {
                                    eo = !0
                                }
                            });
                            e.addEventListener("testPassive", null, to), e.removeEventListener("testPassive", null, to)
                        } catch (c) {}
                        var no, oo, ro = r({}, g),
                            io = !1,
                            lo = !0,
                            ao = {};
                        vn(), e.fp_easings = r(e.fp_easings, {
                            easeInOutCubic: function(e, t, n, o) {
                                return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                            }
                        }), Rn && (xn.version = "3.0.8", xn.setAutoScrolling = x, xn.setRecordHistory = k, xn.setScrollingSpeed = V, xn.setFitToSection = ye, xn.setLockAnchors = function(e) {
                            g.lockAnchors = e
                        }, xn.setMouseWheelScrolling = we, xn.setAllowScrolling = Ee, xn.setKeyboardScrolling = Ae, xn.moveSectionUp = Le, xn.moveSectionDown = Me, xn.silentMoveTo = Oe, xn.moveTo = Te, xn.moveSlideRight = Ce, xn.moveSlideLeft = ke, xn.fitToSection = Xe, xn.reBuild = Re, xn.setResponsive = Ie, xn.getFullpageData = function() {
                            return {
                                options: g,
                                internals: {
                                    container: Rn,
                                    canScroll: Nn,
                                    isScrollAllowed: Bn,
                                    getDestinationPosition: tt,
                                    isTouch: kn,
                                    c: yt,
                                    getXmovement: Yt,
                                    removeAnimation: Vt,
                                    getTransforms: rn,
                                    lazyLoad: ut,
                                    addAnimation: Pt,
                                    performHorizontalMove: jt,
                                    landscapeScroll: Ht,
                                    silentLandscapeScroll: nn,
                                    keepSlidesPosition: et,
                                    silentScroll: on,
                                    styleSlides: Pe,
                                    styleSection: De,
                                    scrollHandler: Ze,
                                    getEventsPage: tn,
                                    getMSPointer: en,
                                    isReallyTouch: $e,
                                    usingExtension: sn,
                                    toggleControlArrows: It,
                                    touchStartHandler: Qe,
                                    touchMoveHandler: Ue
                                }
                            }
                        }, xn.destroy = function(n) {
                            j(Rn, "destroy", n), x(!1, "internal"), Ee(!0), xe(!1), Ae(!1), y(Rn, U), [Yn, Wn, Vn, Zn, Xn, Gn, Dn].forEach(function(e) {
                                clearTimeout(e)
                            }), e.removeEventListener("scroll", Ze), e.removeEventListener("hashchange", xt), e.removeEventListener("resize", Nt), t.removeEventListener("keydown", Lt), t.removeEventListener("keyup", Mt), ["click", "touchstart"].forEach(function(e) {
                                t.removeEventListener(e, ze)
                            }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) {
                                t.removeEventListener(e, Ne, !0)
                            }), cn("dragAndMove", "destroy"), n && (on(0), o("img[data-src], source[data-src], audio[data-src], iframe[data-src]", Rn).forEach(function(e) {
                                st(e, "src")
                            }), o("img[data-srcset]").forEach(function(e) {
                                st(e, "srcset")
                            }), P(o(ie + ", " + he + ", " + me)), s(o(te), {
                                height: "",
                                "background-color": "",
                                padding: ""
                            }), s(o(ae), {
                                width: ""
                            }), s(Rn, {
                                height: "",
                                position: "",
                                "-ms-touch-action": "",
                                "touch-action": ""
                            }), s(yn, {
                                overflow: "",
                                height: ""
                            }), w(wn, $), w(En, F), En.className.split(/\s+/).forEach(function(e) {
                                0 === e.indexOf(Q) && w(En, e)
                            }), o(te + ", " + ae).forEach(function(e) {
                                g.scrollOverflowHandler && g.scrollOverflow && g.scrollOverflowHandler.remove(e), w(e, ve + " " + J + " " + q), e.getAttribute("data-fp-styles") && e.setAttribute("style", e.getAttribute("data-fp-styles")), i(e, ee) && !io && e.removeAttribute("data-anchor")
                            }), an(Rn), [re, de, ue].forEach(function(e) {
                                o(e, Rn).forEach(function(e) {
                                    M(e)
                                })
                            }), e.scrollTo(0, 0), [ee, le, fe].forEach(function(e) {
                                w(o("." + e), e)
                            }))
                        }, xn.getActiveSection = function() {
                            return new mn(o(ne)[0])
                        }, xn.getActiveSlide = function() {
                            return it(o(se, o(ne)[0])[0])
                        }, xn.landscapeScroll = Ht, xn.test = {
                            top: "0px",
                            translate3d: "translate3d(0px, 0px, 0px)",
                            translate3dH: function() {
                                for (var e = [], t = 0; t < o(g.sectionSelector, Rn).length; t++) e.push("translate3d(0px, 0px, 0px)");
                                return e
                            }(),
                            left: function() {
                                for (var e = [], t = 0; t < o(g.sectionSelector, Rn).length; t++) e.push(0);
                                return e
                            }(),
                            options: g,
                            setAutoScrolling: x
                        }, xn.shared = {
                            afterRenderActions: Ye,
                            isNormalScrollElement: !1
                        }, e.fullpage_api = xn, e.fullpage_extensions = !0, g.$ && Object.keys(xn).forEach(function(e) {
                            g.$.fn.fullpage[e] = xn[e]
                        }), Be("continuousHorizontal"), Be("scrollHorizontally"), Be("resetSliders"), Be("interlockedSlides"), Be("responsiveSlides"), Be("fadingEffect"), Be("dragAndMove"), Be("offsetSections"), Be("scrollOverflowReset"), Be("parallax"), Be("cards"), cn("dragAndMove", "init"), g.css3 && (g.css3 = function() {
                            var n, o = t.createElement("p"),
                                r = {
                                    webkitTransform: "-webkit-transform",
                                    OTransform: "-o-transform",
                                    msTransform: "-ms-transform",
                                    MozTransform: "-moz-transform",
                                    transform: "transform"
                                };
                            for (var i in o.style.display = "block", t.body.insertBefore(o, null), r) void 0 !== o.style[i] && (o.style[i] = "translate3d(1px,1px,1px)", n = e.getComputedStyle(o).getPropertyValue(r[i]));
                            return t.body.removeChild(o), void 0 !== n && 0 < n.length && "none" !== n
                        }()), g.scrollBar = g.scrollBar || g.hybrid, function() {
                            if (!g.anchors.length) {
                                var e = "[data-anchor]",
                                    t = o(g.sectionSelector.split(",").join(e + ",") + e, Rn);
                                t.length && (io = !0, t.forEach(function(e) {
                                    g.anchors.push(e.getAttribute("data-anchor").toString())
                                }))
                            }
                            if (!g.navigationTooltips.length) {
                                var n = "[data-tooltip]",
                                    r = o(g.sectionSelector.split(",").join(n + ",") + n, Rn);
                                r.length && r.forEach(function(e) {
                                    g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                                })
                            }
                        }(), function() {
                            s(Rn, {
                                height: "100%",
                                position: "relative"
                            }), y(Rn, Z), y(wn, $), Hn = l(), w(Rn, U), y(o(g.sectionSelector, Rn), ee), y(o(g.slideSelector, Rn), le), cn("parallax", "init");
                            for (var e = o(te), n = 0; n < e.length; n++) {
                                var r = n,
                                    a = e[n],
                                    c = o(ae, a),
                                    u = c.length;
                                a.setAttribute("data-fp-styles", a.getAttribute("style")), De(a, r), f = a, d = r, void 0 !== g.anchors[d] && i(f, J) && Dt(g.anchors[d], d), g.menu && g.css3 && null != O(o(g.menu)[0], X) && o(g.menu).forEach(function(e) {
                                    En.appendChild(e)
                                }), 0 < u ? Pe(a, c, u) : g.verticalCentered && Zt(a)
                            }
                            var f, d;
                            g.fixedElements && g.css3 && o(g.fixedElements).forEach(function(e) {
                                En.appendChild(e)
                            }), g.navigation && function() {
                                var e = t.createElement("div");
                                e.setAttribute("id", "fp-nav");
                                var n = t.createElement("ul");
                                e.appendChild(n), E(e, En);
                                var r = o(ie)[0];
                                y(r, "fp-" + g.navigationPosition), g.showActiveTooltip && y(r, "fp-show-active");
                                for (var i = "", l = 0; l < o(te).length; l++) {
                                    var a = "";
                                    g.anchors.length && (a = g.anchors[l]), i += '<li><a href="#' + a + '"><span class="fp-sr-only">' + We(l, "Section") + "</span><span></span></a>";
                                    var c = g.navigationTooltips[l];
                                    void 0 !== c && "" !== c && (i += '<div class="fp-tooltip fp-' + g.navigationPosition + '">' + c + "</div>"), i += "</li>"
                                }
                                o("ul", r)[0].innerHTML = i, s(o(ie), {
                                    "margin-top": "-" + o(ie)[0].offsetHeight / 2 + "px"
                                }), y(o("a", o("li", o(ie)[0])[h(o(ne)[0], te)]), J)
                            }(), o('iframe[src*="youtube.com/embed/"]', Rn).forEach(function(e) {
                                var t, n, o;
                                n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                            }), cn("fadingEffect", "apply"), cn("cards", "init"), g.scrollOverflow && (Pn = g.scrollOverflowHandler.init(g))
                        }(), Ee(!0), xe(!0), x(g.autoScrolling, "internal"), Bt(), qt(), "complete" === t.readyState && Et(), e.addEventListener("load", Et), g.scrollOverflow || Ye(), function() {
                            for (var e = 1; e < 4; e++) Gn = setTimeout(_e, 350 * e)
                        }(), Kn || yt("l"), e.addEventListener("scroll", Ze), e.addEventListener("hashchange", xt), e.addEventListener("blur", kt), e.addEventListener("resize", Nt), t.addEventListener("keydown", Lt), t.addEventListener("keyup", Mt), ["click", "touchstart"].forEach(function(e) {
                            t.addEventListener(e, ze)
                        }), g.normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) {
                            je(e, !1)
                        }), ["mouseleave", "touchend"].forEach(function(e) {
                            je(e, !0)
                        })), cn("dragAndMove", "turnOffTouch"));
                        var so, co, uo, fo = !1,
                            vo = 0,
                            po = 0,
                            ho = 0,
                            go = 0,
                            mo = (new Date).getTime(),
                            So = 0,
                            bo = 0,
                            yo = Hn;
                        return xn
                    }
                    vn()
                }
        }), window.jQuery && window.fullpage && function(e, t) {
            "use strict";
            e && t ? e.fn.fullpage = function(n) {
                n = e.extend({}, n, {
                    $: e
                }), new t(this[0], n)
            } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
        }(window.jQuery, window.fullpage)
    }, function(e, t, n) {
        var o = n(5)(n(2), n(6), null, null, null);
        e.exports = o.exports
    }, function(e, t, n) {
        "use strict";

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            a = n(0),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            c = n(3),
            u = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(c);
        t.default = {
            methods: {
                build: function() {
                    var e = this.options.slideSelector || ".slide",
                        t = this.options.sectionSelector || ".section",
                        n = fp_utils.index(document.querySelector(t + ".active")),
                        o = document.querySelector(t + ".active " + e + ".active"),
                        r = o ? fp_utils.index(o) : -1;
                    this.destroy(), n > -1 && fp_utils.addClass(document.querySelectorAll(t)[n], "active"), r > -1 && fp_utils.addClass(o, "active"), this.init()
                },
                destroy: function() {
                    "undefined" != typeof fullpage_api && void 0 !== fullpage_api.destroy && fullpage_api.destroy("all")
                },
                emitEvent: function(e, t) {
                    this.$emit.apply(this, [i(e)].concat(r(t))), this.options.hasOwnProperty(e) && this.options[e].apply(this, t)
                },
                init: function() {
                    this.api = new s.default(this.$refs.fullpage, this.options)
                }
            },
            mounted: function() {
                !this.skipInit && this.init()
            },
            beforeDestroy: function() {
                void 0 !== this.api && this.destroy()
            },
            data: function() {
                var e = this;
                return {
                    events: u.EVENTS.reduce(function(t, n) {
                        return l({}, t, o({}, n, function() {
                            for (var t = arguments.length, o = Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                            e.emitEvent(n, o)
                        }))
                    }, {}),
                    api: void 0
                }
            },
            props: {
                options: {
                    type: Object,
                    required: !0
                },
                skipInit: {
                    type: Boolean,
                    default: !1
                }
            },
            watch: {
                options: {
                    deep: !0,
                    handler: function() {
                        this.build()
                    }
                }
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.EVENTS = ["afterLoad", "onLeave", "afterRender", "afterResize", "afterResponsive", "afterSlideLoad", "onSlideLeave"], t.METHODS = ["moveSectionUp", "moveSectionDown", "moveTo", "silentMoveTo", "moveSlideRight", "moveSlideLeft", "setAutoScrolling", "setFitToSection", "fitToSection", "setLockAnchors", "setAllowScrolling", "setKeyboardScrolling", "setRecordHistory", "setScrollingSpeed", "destroy", "reBuild", "setResponsive", "responsiveSlidesToSections", "responsiveSlidesToSlides"]
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            e.component("full-page", l.default)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.version = t.FullPage = void 0;
        var i = n(1),
            l = o(i),
            a = n(0),
            s = o(a);
        "undefined" != typeof window && window.Vue && window.Vue.use(r), window.fullpage_api || (window.fullpage = s.default), t.default = r;
        t.FullPage = l.default, t.version = "__VERSION__"
    }, function(e, t) {
        e.exports = function(e, t, n, o, r) {
            var i, l = e = e || {},
                a = typeof e.default;
            "object" !== a && "function" !== a || (i = e, l = e.default);
            var s = "function" == typeof l ? l.options : l;
            t && (s.render = t.render, s.staticRenderFns = t.staticRenderFns), o && (s._scopeId = o);
            var c;
            if (r ? (c = function(e) {
                    e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                }, s._ssrRegister = c) : n && (c = n), c) {
                var u = s.functional,
                    f = u ? s.render : s.beforeCreate;
                u ? s.render = function(e, t) {
                    return c.call(t), f(e, t)
                } : s.beforeCreate = f ? [].concat(f, c) : [c]
            }
            return {
                esModule: i,
                exports: l,
                options: s
            }
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("div", {
                    ref: "fullpage"
                }, [e._t("default")], 2)
            },
            staticRenderFns: []
        }
    }])
});