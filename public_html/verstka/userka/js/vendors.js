var Swiper = (function () {
	"use strict";
	function e(e) {
		 return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
	}
	function t(s, i) {
		 void 0 === s && (s = {}),
			  void 0 === i && (i = {}),
			  Object.keys(i).forEach((a) => {
					void 0 === s[a] ? (s[a] = i[a]) : e(i[a]) && e(s[a]) && Object.keys(i[a]).length > 0 && t(s[a], i[a]);
			  });
	}
	const s = {
		 body: {},
		 addEventListener() {},
		 removeEventListener() {},
		 activeElement: { blur() {}, nodeName: "" },
		 querySelector: () => null,
		 querySelectorAll: () => [],
		 getElementById: () => null,
		 createEvent: () => ({ initEvent() {} }),
		 createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
		 createElementNS: () => ({}),
		 importNode: () => null,
		 location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
	};
	function i() {
		 const e = "undefined" != typeof document ? document : {};
		 return t(e, s), e;
	}
	const a = {
		 document: s,
		 navigator: { userAgent: "" },
		 location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
		 history: { replaceState() {}, pushState() {}, go() {}, back() {} },
		 CustomEvent: function () {
			  return this;
		 },
		 addEventListener() {},
		 removeEventListener() {},
		 getComputedStyle: () => ({ getPropertyValue: () => "" }),
		 Image() {},
		 Date() {},
		 screen: {},
		 setTimeout() {},
		 clearTimeout() {},
		 matchMedia: () => ({}),
		 requestAnimationFrame: (e) => ("undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
		 cancelAnimationFrame(e) {
			  "undefined" != typeof setTimeout && clearTimeout(e);
		 },
	};
	function r() {
		 const e = "undefined" != typeof window ? window : {};
		 return t(e, a), e;
	}
	function n(e) {
		 return (
			  void 0 === e && (e = ""),
			  e
					.trim()
					.split(" ")
					.filter((e) => !!e.trim())
		 );
	}
	function o(e, t) {
		 return void 0 === t && (t = 0), setTimeout(e, t);
	}
	function l() {
		 return Date.now();
	}
	function d(e, t) {
		 void 0 === t && (t = "x");
		 const s = r();
		 let i, a, n;
		 const o = (function (e) {
			  const t = r();
			  let s;
			  return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
		 })(e);
		 return (
			  s.WebKitCSSMatrix
					? ((a = o.transform || o.webkitTransform),
					  a.split(",").length > 6 &&
							(a = a
								 .split(", ")
								 .map((e) => e.replace(",", "."))
								 .join(", ")),
					  (n = new s.WebKitCSSMatrix("none" === a ? "" : a)))
					: ((n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (i = n.toString().split(","))),
			  "x" === t && (a = s.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
			  "y" === t && (a = s.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
			  a || 0
		 );
	}
	function c(e) {
		 return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
	}
	function p() {
		 const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
			  t = ["__proto__", "constructor", "prototype"];
		 for (let i = 1; i < arguments.length; i += 1) {
			  const a = i < 0 || arguments.length <= i ? void 0 : arguments[i];
			  if (null != a && ((s = a), !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
					const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
					for (let t = 0, i = s.length; t < i; t += 1) {
						 const i = s[t],
							  r = Object.getOwnPropertyDescriptor(a, i);
						 void 0 !== r && r.enumerable && (c(e[i]) && c(a[i]) ? (a[i].__swiper__ ? (e[i] = a[i]) : p(e[i], a[i])) : !c(e[i]) && c(a[i]) ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : p(e[i], a[i])) : (e[i] = a[i]));
					}
			  }
		 }
		 var s;
		 return e;
	}
	function u(e, t, s) {
		 e.style.setProperty(t, s);
	}
	function m(e) {
		 let { swiper: t, targetPosition: s, side: i } = e;
		 const a = r(),
			  n = -t.translate;
		 let o,
			  l = null;
		 const d = t.params.speed;
		 (t.wrapperEl.style.scrollSnapType = "none"), a.cancelAnimationFrame(t.cssModeFrameID);
		 const c = s > n ? "next" : "prev",
			  p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
			  u = () => {
					(o = new Date().getTime()), null === l && (l = o);
					const e = Math.max(Math.min((o - l) / d, 1), 0),
						 r = 0.5 - Math.cos(e * Math.PI) / 2;
					let c = n + r * (s - n);
					if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [i]: c }), p(c, s)))
						 return (
							  (t.wrapperEl.style.overflow = "hidden"),
							  (t.wrapperEl.style.scrollSnapType = ""),
							  setTimeout(() => {
									(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [i]: c });
							  }),
							  void a.cancelAnimationFrame(t.cssModeFrameID)
						 );
					t.cssModeFrameID = a.requestAnimationFrame(u);
			  };
		 u();
	}
	function f(e) {
		 return e.querySelector(".swiper-slide-transform") || (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) || e;
	}
	function h(e, t) {
		 return void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t));
	}
	function g(e) {
		 try {
			  return void console.warn(e);
		 } catch (e) {}
	}
	function v(e, t) {
		 void 0 === t && (t = []);
		 const s = document.createElement(e);
		 return s.classList.add(...(Array.isArray(t) ? t : n(t))), s;
	}
	function b(e) {
		 const t = r(),
			  s = i(),
			  a = e.getBoundingClientRect(),
			  n = s.body,
			  o = e.clientTop || n.clientTop || 0,
			  l = e.clientLeft || n.clientLeft || 0,
			  d = e === t ? t.scrollY : e.scrollTop,
			  c = e === t ? t.scrollX : e.scrollLeft;
		 return { top: a.top + d - o, left: a.left + c - l };
	}
	function w(e, t) {
		 return r().getComputedStyle(e, null).getPropertyValue(t);
	}
	function y(e) {
		 let t,
			  s = e;
		 if (s) {
			  for (t = 0; null !== (s = s.previousSibling); ) 1 === s.nodeType && (t += 1);
			  return t;
		 }
	}
	function x(e, t) {
		 const s = [];
		 let i = e.parentElement;
		 for (; i; ) t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
		 return s;
	}
	function S(e, t) {
		 t &&
			  e.addEventListener("transitionend", function s(i) {
					i.target === e && (t.call(e, i), e.removeEventListener("transitionend", s));
			  });
	}
	function E(e, t, s) {
		 const i = r();
		 return s
			  ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
					  parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) +
					  parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom"))
			  : e.offsetWidth;
	}
	let T, M, C;
	function L() {
		 return (
			  T ||
					(T = (function () {
						 const e = r(),
							  t = i();
						 return { smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)) };
					})()),
			  T
		 );
	}
	function P(e) {
		 return (
			  void 0 === e && (e = {}),
			  M ||
					(M = (function (e) {
						 let { userAgent: t } = void 0 === e ? {} : e;
						 const s = L(),
							  i = r(),
							  a = i.navigator.platform,
							  n = t || i.navigator.userAgent,
							  o = { ios: !1, android: !1 },
							  l = i.screen.width,
							  d = i.screen.height,
							  c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
						 let p = n.match(/(iPad).*OS\s([\d_]+)/);
						 const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
							  m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
							  f = "Win32" === a;
						 let h = "MacIntel" === a;
						 return (
							  !p &&
									h &&
									s.touch &&
									["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 &&
									((p = n.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, "13_0_0"]), (h = !1)),
							  c && !f && ((o.os = "android"), (o.android = !0)),
							  (p || m || u) && ((o.os = "ios"), (o.ios = !0)),
							  o
						 );
					})(e)),
			  M
		 );
	}
	function A() {
		 return (
			  C ||
					(C = (function () {
						 const e = r();
						 let t = !1;
						 function s() {
							  const t = e.navigator.userAgent.toLowerCase();
							  return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
						 }
						 if (s()) {
							  const s = String(e.navigator.userAgent);
							  if (s.includes("Version/")) {
									const [e, i] = s
										 .split("Version/")[1]
										 .split(" ")[0]
										 .split(".")
										 .map((e) => Number(e));
									t = e < 16 || (16 === e && i < 2);
							  }
						 }
						 return { isSafari: t || s(), needPerspectiveFix: t, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) };
					})()),
			  C
		 );
	}
	var I = {
		 on(e, t, s) {
			  const i = this;
			  if (!i.eventsListeners || i.destroyed) return i;
			  if ("function" != typeof t) return i;
			  const a = s ? "unshift" : "push";
			  return (
					e.split(" ").forEach((e) => {
						 i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t);
					}),
					i
			  );
		 },
		 once(e, t, s) {
			  const i = this;
			  if (!i.eventsListeners || i.destroyed) return i;
			  if ("function" != typeof t) return i;
			  function a() {
					i.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
					for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
					t.apply(i, r);
			  }
			  return (a.__emitterProxy = t), i.on(e, a, s);
		 },
		 onAny(e, t) {
			  const s = this;
			  if (!s.eventsListeners || s.destroyed) return s;
			  if ("function" != typeof e) return s;
			  const i = t ? "unshift" : "push";
			  return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
		 },
		 offAny(e) {
			  const t = this;
			  if (!t.eventsListeners || t.destroyed) return t;
			  if (!t.eventsAnyListeners) return t;
			  const s = t.eventsAnyListeners.indexOf(e);
			  return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
		 },
		 off(e, t) {
			  const s = this;
			  return !s.eventsListeners || s.destroyed
					? s
					: s.eventsListeners
					? (e.split(" ").forEach((e) => {
							void 0 === t
								 ? (s.eventsListeners[e] = [])
								 : s.eventsListeners[e] &&
									s.eventsListeners[e].forEach((i, a) => {
										 (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && s.eventsListeners[e].splice(a, 1);
									});
					  }),
					  s)
					: s;
		 },
		 emit() {
			  const e = this;
			  if (!e.eventsListeners || e.destroyed) return e;
			  if (!e.eventsListeners) return e;
			  let t, s, i;
			  for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
			  "string" == typeof r[0] || Array.isArray(r[0]) ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e)) : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)), s.unshift(i);
			  return (
					(Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
						 e.eventsAnyListeners &&
							  e.eventsAnyListeners.length &&
							  e.eventsAnyListeners.forEach((e) => {
									e.apply(i, [t, ...s]);
							  }),
							  e.eventsListeners &&
									e.eventsListeners[t] &&
									e.eventsListeners[t].forEach((e) => {
										 e.apply(i, s);
									});
					}),
					e
			  );
		 },
	};
	const z = (e, t) => {
			  if (!e || e.destroyed || !e.params) return;
			  const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
			  if (s) {
					let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
					!t &&
						 e.isElement &&
						 (s.shadowRoot
							  ? (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
							  : requestAnimationFrame(() => {
									  s.shadowRoot && ((t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove());
								 })),
						 t && t.remove();
			  }
		 },
		 k = (e, t) => {
			  if (!e.slides[t]) return;
			  const s = e.slides[t].querySelector('[loading="lazy"]');
			  s && s.removeAttribute("loading");
		 },
		 O = (e) => {
			  if (!e || e.destroyed || !e.params) return;
			  let t = e.params.lazyPreloadPrevNext;
			  const s = e.slides.length;
			  if (!s || !t || t < 0) return;
			  t = Math.min(t, s);
			  const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
					a = e.activeIndex;
			  if (e.params.grid && e.params.grid.rows > 1) {
					const s = a,
						 r = [s - t];
					return (
						 r.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
						 void e.slides.forEach((t, s) => {
							  r.includes(t.column) && k(e, s);
						 })
					);
			  }
			  const r = a + i - 1;
			  if (e.params.rewind || e.params.loop)
					for (let i = a - t; i <= r + t; i += 1) {
						 const t = ((i % s) + s) % s;
						 (t < a || t > r) && k(e, t);
					}
			  else for (let i = Math.max(a - t, 0); i <= Math.min(r + t, s - 1); i += 1) i !== a && (i > r || i < a) && k(e, i);
		 };
	var $ = {
		 updateSize: function () {
			  const e = this;
			  let t, s;
			  const i = e.el;
			  (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth),
					(s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight),
					(0 === t && e.isHorizontal()) ||
						 (0 === s && e.isVertical()) ||
						 ((t = t - parseInt(w(i, "padding-left") || 0, 10) - parseInt(w(i, "padding-right") || 0, 10)),
						 (s = s - parseInt(w(i, "padding-top") || 0, 10) - parseInt(w(i, "padding-bottom") || 0, 10)),
						 Number.isNaN(t) && (t = 0),
						 Number.isNaN(s) && (s = 0),
						 Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
		 },
		 updateSlides: function () {
			  const e = this;
			  function t(t, s) {
					return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
			  }
			  const s = e.params,
					{ wrapperEl: i, slidesEl: a, size: r, rtlTranslate: n, wrongRTL: o } = e,
					l = e.virtual && s.virtual.enabled,
					d = l ? e.virtual.slides.length : e.slides.length,
					c = h(a, `.${e.params.slideClass}, swiper-slide`),
					p = l ? e.virtual.slides.length : c.length;
			  let m = [];
			  const f = [],
					g = [];
			  let v = s.slidesOffsetBefore;
			  "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
			  let b = s.slidesOffsetAfter;
			  "function" == typeof b && (b = s.slidesOffsetAfter.call(e));
			  const y = e.snapGrid.length,
					x = e.slidesGrid.length;
			  let S = s.spaceBetween,
					T = -v,
					M = 0,
					C = 0;
			  if (void 0 === r) return;
			  "string" == typeof S && S.indexOf("%") >= 0 ? (S = (parseFloat(S.replace("%", "")) / 100) * r) : "string" == typeof S && (S = parseFloat(S)),
					(e.virtualSize = -S),
					c.forEach((e) => {
						 n ? (e.style.marginLeft = "") : (e.style.marginRight = ""), (e.style.marginBottom = ""), (e.style.marginTop = "");
					}),
					s.centeredSlides && s.cssMode && (u(i, "--swiper-centered-offset-before", ""), u(i, "--swiper-centered-offset-after", ""));
			  const L = s.grid && s.grid.rows > 1 && e.grid;
			  let P;
			  L ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
			  const A = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e) => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
			  for (let i = 0; i < p; i += 1) {
					let a;
					if (((P = 0), c[i] && (a = c[i]), L && e.grid.updateSlide(i, a, c), !c[i] || "none" !== w(a, "display"))) {
						 if ("auto" === s.slidesPerView) {
							  A && (c[i].style[e.getDirectionLabel("width")] = "");
							  const r = getComputedStyle(a),
									n = a.style.transform,
									o = a.style.webkitTransform;
							  if ((n && (a.style.transform = "none"), o && (a.style.webkitTransform = "none"), s.roundLengths)) P = e.isHorizontal() ? E(a, "width", !0) : E(a, "height", !0);
							  else {
									const e = t(r, "width"),
										 s = t(r, "padding-left"),
										 i = t(r, "padding-right"),
										 n = t(r, "margin-left"),
										 o = t(r, "margin-right"),
										 l = r.getPropertyValue("box-sizing");
									if (l && "border-box" === l) P = e + n + o;
									else {
										 const { clientWidth: t, offsetWidth: r } = a;
										 P = e + s + i + n + o + (r - t);
									}
							  }
							  n && (a.style.transform = n), o && (a.style.webkitTransform = o), s.roundLengths && (P = Math.floor(P));
						 } else (P = (r - (s.slidesPerView - 1) * S) / s.slidesPerView), s.roundLengths && (P = Math.floor(P)), c[i] && (c[i].style[e.getDirectionLabel("width")] = `${P}px`);
						 c[i] && (c[i].swiperSlideSize = P),
							  g.push(P),
							  s.centeredSlides
									? ((T = T + P / 2 + M / 2 + S),
									  0 === M && 0 !== i && (T = T - r / 2 - S),
									  0 === i && (T = T - r / 2 - S),
									  Math.abs(T) < 0.001 && (T = 0),
									  s.roundLengths && (T = Math.floor(T)),
									  C % s.slidesPerGroup == 0 && m.push(T),
									  f.push(T))
									: (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), f.push(T), (T = T + P + S)),
							  (e.virtualSize += P + S),
							  (M = P),
							  (C += 1);
					}
			  }
			  if (
					((e.virtualSize = Math.max(e.virtualSize, r) + b),
					n && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize + S}px`),
					s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + S}px`),
					L && e.grid.updateWrapperSize(P, m),
					!s.centeredSlides)
			  ) {
					const t = [];
					for (let i = 0; i < m.length; i += 1) {
						 let a = m[i];
						 s.roundLengths && (a = Math.floor(a)), m[i] <= e.virtualSize - r && t.push(a);
					}
					(m = t), Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r);
			  }
			  if (l && s.loop) {
					const t = g[0] + S;
					if (s.slidesPerGroup > 1) {
						 const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
							  a = t * s.slidesPerGroup;
						 for (let e = 0; e < i; e += 1) m.push(m[m.length - 1] + a);
					}
					for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), f.push(f[f.length - 1] + t), (e.virtualSize += t);
			  }
			  if ((0 === m.length && (m = [0]), 0 !== S)) {
					const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
					c.filter((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e) => {
						 e.style[t] = `${S}px`;
					});
			  }
			  if (s.centeredSlides && s.centeredSlidesBounds) {
					let e = 0;
					g.forEach((t) => {
						 e += t + (S || 0);
					}),
						 (e -= S);
					const t = e - r;
					m = m.map((e) => (e <= 0 ? -v : e > t ? t + b : e));
			  }
			  if (s.centerInsufficientSlides) {
					let e = 0;
					if (
						 (g.forEach((t) => {
							  e += t + (S || 0);
						 }),
						 (e -= S),
						 e < r)
					) {
						 const t = (r - e) / 2;
						 m.forEach((e, s) => {
							  m[s] = e - t;
						 }),
							  f.forEach((e, s) => {
									f[s] = e + t;
							  });
					}
			  }
			  if ((Object.assign(e, { slides: c, snapGrid: m, slidesGrid: f, slidesSizesGrid: g }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)) {
					u(i, "--swiper-centered-offset-before", -m[0] + "px"), u(i, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
					const t = -e.snapGrid[0],
						 s = -e.slidesGrid[0];
					(e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + s));
			  }
			  if (
					(p !== d && e.emit("slidesLengthChange"),
					m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
					f.length !== x && e.emit("slidesGridLengthChange"),
					s.watchSlidesProgress && e.updateSlidesOffset(),
					!(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
			  ) {
					const t = `${s.containerModifierClass}backface-hidden`,
						 i = e.el.classList.contains(t);
					p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t);
			  }
		 },
		 updateAutoHeight: function (e) {
			  const t = this,
					s = [],
					i = t.virtual && t.params.virtual.enabled;
			  let a,
					r = 0;
			  "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
			  const n = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
			  if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
					if (t.params.centeredSlides)
						 (t.visibleSlides || []).forEach((e) => {
							  s.push(e);
						 });
					else
						 for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
							  const e = t.activeIndex + a;
							  if (e > t.slides.length && !i) break;
							  s.push(n(e));
						 }
			  else s.push(n(t.activeIndex));
			  for (a = 0; a < s.length; a += 1)
					if (void 0 !== s[a]) {
						 const e = s[a].offsetHeight;
						 r = e > r ? e : r;
					}
			  (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
		 },
		 updateSlidesOffset: function () {
			  const e = this,
					t = e.slides,
					s = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
			  for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
		 },
		 updateSlidesProgress: function (e) {
			  void 0 === e && (e = (this && this.translate) || 0);
			  const t = this,
					s = t.params,
					{ slides: i, rtlTranslate: a, snapGrid: r } = t;
			  if (0 === i.length) return;
			  void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
			  let n = -e;
			  a && (n = e),
					i.forEach((e) => {
						 e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass);
					}),
					(t.visibleSlidesIndexes = []),
					(t.visibleSlides = []);
			  let o = s.spaceBetween;
			  "string" == typeof o && o.indexOf("%") >= 0 ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size) : "string" == typeof o && (o = parseFloat(o));
			  for (let e = 0; e < i.length; e += 1) {
					const l = i[e];
					let d = l.swiperSlideOffset;
					s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
					const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
						 p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
						 u = -(n - d),
						 m = u + t.slidesSizesGrid[e],
						 f = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
					((u >= 0 && u < t.size - 1) || (m > 1 && m <= t.size) || (u <= 0 && m >= t.size)) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), i[e].classList.add(s.slideVisibleClass)),
						 f && i[e].classList.add(s.slideFullyVisibleClass),
						 (l.progress = a ? -c : c),
						 (l.originalProgress = a ? -p : p);
			  }
		 },
		 updateProgress: function (e) {
			  const t = this;
			  if (void 0 === e) {
					const s = t.rtlTranslate ? -1 : 1;
					e = (t && t.translate && t.translate * s) || 0;
			  }
			  const s = t.params,
					i = t.maxTranslate() - t.minTranslate();
			  let { progress: a, isBeginning: r, isEnd: n, progressLoop: o } = t;
			  const l = r,
					d = n;
			  if (0 === i) (a = 0), (r = !0), (n = !0);
			  else {
					a = (e - t.minTranslate()) / i;
					const s = Math.abs(e - t.minTranslate()) < 1,
						 o = Math.abs(e - t.maxTranslate()) < 1;
					(r = s || a <= 0), (n = o || a >= 1), s && (a = 0), o && (a = 1);
			  }
			  if (s.loop) {
					const s = t.getSlideIndexByData(0),
						 i = t.getSlideIndexByData(t.slides.length - 1),
						 a = t.slidesGrid[s],
						 r = t.slidesGrid[i],
						 n = t.slidesGrid[t.slidesGrid.length - 1],
						 l = Math.abs(e);
					(o = l >= a ? (l - a) / n : (l + n - r) / n), o > 1 && (o -= 1);
			  }
			  Object.assign(t, { progress: a, progressLoop: o, isBeginning: r, isEnd: n }),
					(s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e),
					r && !l && t.emit("reachBeginning toEdge"),
					n && !d && t.emit("reachEnd toEdge"),
					((l && !r) || (d && !n)) && t.emit("fromEdge"),
					t.emit("progress", a);
		 },
		 updateSlidesClasses: function () {
			  const e = this,
					{ slides: t, params: s, slidesEl: i, activeIndex: a } = e,
					r = e.virtual && s.virtual.enabled,
					n = e.grid && s.grid && s.grid.rows > 1,
					o = (e) => h(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
			  let l, d, c;
			  if (
					(t.forEach((e) => {
						 e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
					}),
					r)
			  )
					if (s.loop) {
						 let t = a - e.virtual.slidesBefore;
						 t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), (l = o(`[data-swiper-slide-index="${t}"]`));
					} else l = o(`[data-swiper-slide-index="${a}"]`);
			  else n ? ((l = t.filter((e) => e.column === a)[0]), (c = t.filter((e) => e.column === a + 1)[0]), (d = t.filter((e) => e.column === a - 1)[0])) : (l = t[a]);
			  l &&
					(l.classList.add(s.slideActiveClass),
					n
						 ? (c && c.classList.add(s.slideNextClass), d && d.classList.add(s.slidePrevClass))
						 : ((c = (function (e, t) {
								 const s = [];
								 for (; e.nextElementSibling; ) {
									  const i = e.nextElementSibling;
									  t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
								 }
								 return s;
							})(l, `.${s.slideClass}, swiper-slide`)[0]),
							s.loop && !c && (c = t[0]),
							c && c.classList.add(s.slideNextClass),
							(d = (function (e, t) {
								 const s = [];
								 for (; e.previousElementSibling; ) {
									  const i = e.previousElementSibling;
									  t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
								 }
								 return s;
							})(l, `.${s.slideClass}, swiper-slide`)[0]),
							s.loop && 0 === !d && (d = t[t.length - 1]),
							d && d.classList.add(s.slidePrevClass))),
					e.emitSlidesClasses();
		 },
		 updateActiveIndex: function (e) {
			  const t = this,
					s = t.rtlTranslate ? t.translate : -t.translate,
					{ snapGrid: i, params: a, activeIndex: r, realIndex: n, snapIndex: o } = t;
			  let l,
					d = e;
			  const c = (e) => {
					let s = e - t.virtual.slidesBefore;
					return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
			  };
			  if (
					(void 0 === d &&
						 (d = (function (e) {
							  const { slidesGrid: t, params: s } = e,
									i = e.rtlTranslate ? e.translate : -e.translate;
							  let a;
							  for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? (i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? (a = e) : i >= t[e] && i < t[e + 1] && (a = e + 1)) : i >= t[e] && (a = e);
							  return s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a;
						 })(t)),
					i.indexOf(s) >= 0)
			  )
					l = i.indexOf(s);
			  else {
					const e = Math.min(a.slidesPerGroupSkip, d);
					l = e + Math.floor((d - e) / a.slidesPerGroup);
			  }
			  if ((l >= i.length && (l = i.length - 1), d === r && !t.params.loop)) return void (l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")));
			  if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
			  const p = t.grid && a.grid && a.grid.rows > 1;
			  let u;
			  if (t.virtual && a.virtual.enabled && a.loop) u = c(d);
			  else if (p) {
					const e = t.slides.filter((e) => e.column === d)[0];
					let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
					Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), (u = Math.floor(s / a.grid.rows));
			  } else if (t.slides[d]) {
					const e = t.slides[d].getAttribute("data-swiper-slide-index");
					u = e ? parseInt(e, 10) : d;
			  } else u = d;
			  Object.assign(t, { previousSnapIndex: o, snapIndex: l, previousRealIndex: n, realIndex: u, previousIndex: r, activeIndex: d }),
					t.initialized && O(t),
					t.emit("activeIndexChange"),
					t.emit("snapIndexChange"),
					(t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"));
		 },
		 updateClickedSlide: function (e, t) {
			  const s = this,
					i = s.params;
			  let a = e.closest(`.${i.slideClass}, swiper-slide`);
			  !a &&
					s.isElement &&
					t &&
					t.length > 1 &&
					t.includes(e) &&
					[...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
						 !a && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (a = e);
					});
			  let r,
					n = !1;
			  if (a)
					for (let e = 0; e < s.slides.length; e += 1)
						 if (s.slides[e] === a) {
							  (n = !0), (r = e);
							  break;
						 }
			  if (!a || !n) return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
			  (s.clickedSlide = a),
					s.virtual && s.params.virtual.enabled ? (s.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10)) : (s.clickedIndex = r),
					i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
		 },
	};
	var D = {
		 getTranslate: function (e) {
			  void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			  const { params: t, rtlTranslate: s, translate: i, wrapperEl: a } = this;
			  if (t.virtualTranslate) return s ? -i : i;
			  if (t.cssMode) return i;
			  let r = d(a, e);
			  return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
		 },
		 setTranslate: function (e, t) {
			  const s = this,
					{ rtlTranslate: i, params: a, wrapperEl: r, progress: n } = s;
			  let o,
					l = 0,
					d = 0;
			  s.isHorizontal() ? (l = i ? -e : e) : (d = e),
					a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
					(s.previousTranslate = s.translate),
					(s.translate = s.isHorizontal() ? l : d),
					a.cssMode
						 ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d)
						 : a.virtualTranslate || (s.isHorizontal() ? (l -= s.cssOverflowAdjustment()) : (d -= s.cssOverflowAdjustment()), (r.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
			  const c = s.maxTranslate() - s.minTranslate();
			  (o = 0 === c ? 0 : (e - s.minTranslate()) / c), o !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
		 },
		 minTranslate: function () {
			  return -this.snapGrid[0];
		 },
		 maxTranslate: function () {
			  return -this.snapGrid[this.snapGrid.length - 1];
		 },
		 translateTo: function (e, t, s, i, a) {
			  void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
			  const r = this,
					{ params: n, wrapperEl: o } = r;
			  if (r.animating && n.preventInteractionOnTransition) return !1;
			  const l = r.minTranslate(),
					d = r.maxTranslate();
			  let c;
			  if (((c = i && e > l ? l : i && e < d ? d : e), r.updateProgress(c), n.cssMode)) {
					const e = r.isHorizontal();
					if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
					else {
						 if (!r.support.smoothScroll) return m({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0;
						 o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
					}
					return !0;
			  }
			  return (
					0 === t
						 ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd")))
						 : (r.setTransition(t),
							r.setTranslate(c),
							s && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")),
							r.animating ||
								 ((r.animating = !0),
								 r.onTranslateToWrapperTransitionEnd ||
									  (r.onTranslateToWrapperTransitionEnd = function (e) {
											r &&
												 !r.destroyed &&
												 e.target === this &&
												 (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
												 (r.onTranslateToWrapperTransitionEnd = null),
												 delete r.onTranslateToWrapperTransitionEnd,
												 s && r.emit("transitionEnd"));
									  }),
								 r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
					!0
			  );
		 },
	};
	function N(e) {
		 let { swiper: t, runCallbacks: s, direction: i, step: a } = e;
		 const { activeIndex: r, previousIndex: n } = t;
		 let o = i;
		 if ((o || (o = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${a}`), s && r !== n)) {
			  if ("reset" === o) return void t.emit(`slideResetTransition${a}`);
			  t.emit(`slideChangeTransition${a}`), "next" === o ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`);
		 }
	}
	var F = {
		 setTransition: function (e, t) {
			  const s = this;
			  s.params.cssMode || ((s.wrapperEl.style.transitionDuration = `${e}ms`), (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")), s.emit("setTransition", e, t);
		 },
		 transitionStart: function (e, t) {
			  void 0 === e && (e = !0);
			  const s = this,
					{ params: i } = s;
			  i.cssMode || (i.autoHeight && s.updateAutoHeight(), N({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
		 },
		 transitionEnd: function (e, t) {
			  void 0 === e && (e = !0);
			  const s = this,
					{ params: i } = s;
			  (s.animating = !1), i.cssMode || (s.setTransition(0), N({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
		 },
	};
	var H = {
		 slideTo: function (e, t, s, i, a) {
			  void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
			  const r = this;
			  let n = e;
			  n < 0 && (n = 0);
			  const { params: o, snapGrid: l, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: f, enabled: h } = r;
			  if ((r.animating && o.preventInteractionOnTransition) || (!h && !i && !a)) return !1;
			  const g = Math.min(r.params.slidesPerGroupSkip, n);
			  let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
			  v >= l.length && (v = l.length - 1);
			  const b = -l[v];
			  if (o.normalizeSlideIndex)
					for (let e = 0; e < d.length; e += 1) {
						 const t = -Math.floor(100 * b),
							  s = Math.floor(100 * d[e]),
							  i = Math.floor(100 * d[e + 1]);
						 void 0 !== d[e + 1] ? (t >= s && t < i - (i - s) / 2 ? (n = e) : t >= s && t < i && (n = e + 1)) : t >= s && (n = e);
					}
			  if (r.initialized && n !== p) {
					if (!r.allowSlideNext && (u ? b > r.translate && b > r.minTranslate() : b < r.translate && b < r.minTranslate())) return !1;
					if (!r.allowSlidePrev && b > r.translate && b > r.maxTranslate() && (p || 0) !== n) return !1;
			  }
			  let w;
			  if ((n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(b), (w = n > p ? "next" : n < p ? "prev" : "reset"), (u && -b === r.translate) || (!u && b === r.translate)))
					return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(b), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;
			  if (o.cssMode) {
					const e = r.isHorizontal(),
						 s = u ? b : -b;
					if (0 === t) {
						 const t = r.virtual && r.params.virtual.enabled;
						 t && ((r.wrapperEl.style.scrollSnapType = "none"), (r._immediateVirtual = !0)),
							  t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
									? ((r._cssModeVirtualInitialSet = !0),
									  requestAnimationFrame(() => {
											f[e ? "scrollLeft" : "scrollTop"] = s;
									  }))
									: (f[e ? "scrollLeft" : "scrollTop"] = s),
							  t &&
									requestAnimationFrame(() => {
										 (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
									});
					} else {
						 if (!r.support.smoothScroll) return m({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0;
						 f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
					}
					return !0;
			  }
			  return (
					r.setTransition(t),
					r.setTranslate(b),
					r.updateActiveIndex(n),
					r.updateSlidesClasses(),
					r.emit("beforeTransitionStart", t, i),
					r.transitionStart(s, w),
					0 === t
						 ? r.transitionEnd(s, w)
						 : r.animating ||
							((r.animating = !0),
							r.onSlideToWrapperTransitionEnd ||
								 (r.onSlideToWrapperTransitionEnd = function (e) {
									  r &&
											!r.destroyed &&
											e.target === this &&
											(r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), (r.onSlideToWrapperTransitionEnd = null), delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, w));
								 }),
							r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
					!0
			  );
		 },
		 slideToLoop: function (e, t, s, i) {
			  if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e)) {
					e = parseInt(e, 10);
			  }
			  const a = this,
					r = a.grid && a.params.grid && a.params.grid.rows > 1;
			  let n = e;
			  if (a.params.loop)
					if (a.virtual && a.params.virtual.enabled) n += a.virtual.slidesBefore;
					else {
						 let e;
						 if (r) {
							  const t = n * a.params.grid.rows;
							  e = a.slides.filter((e) => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column;
						 } else e = a.getSlideIndexByData(n);
						 const t = r ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length,
							  { centeredSlides: s } = a.params;
						 let i = a.params.slidesPerView;
						 "auto" === i ? (i = a.slidesPerViewDynamic()) : ((i = Math.ceil(parseFloat(a.params.slidesPerView, 10))), s && i % 2 == 0 && (i += 1));
						 let o = t - e < i;
						 if ((s && (o = o || e < Math.ceil(i / 2)), o)) {
							  const i = s ? (e < a.activeIndex ? "prev" : "next") : e - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
							  a.loopFix({ direction: i, slideTo: !0, activeSlideIndex: "next" === i ? e + 1 : e - t + 1, slideRealIndex: "next" === i ? a.realIndex : void 0 });
						 }
						 if (r) {
							  const e = n * a.params.grid.rows;
							  n = a.slides.filter((t) => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column;
						 } else n = a.getSlideIndexByData(n);
					}
			  return (
					requestAnimationFrame(() => {
						 a.slideTo(n, t, s, i);
					}),
					a
			  );
		 },
		 slideNext: function (e, t, s) {
			  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			  const i = this,
					{ enabled: a, params: r, animating: n } = i;
			  if (!a) return i;
			  let o = r.slidesPerGroup;
			  "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
			  const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : o,
					d = i.virtual && r.virtual.enabled;
			  if (r.loop) {
					if (n && !d && r.loopPreventsSliding) return !1;
					if ((i.loopFix({ direction: "next" }), (i._clientLeft = i.wrapperEl.clientLeft), i.activeIndex === i.slides.length - 1 && r.cssMode))
						 return (
							  requestAnimationFrame(() => {
									i.slideTo(i.activeIndex + l, e, t, s);
							  }),
							  !0
						 );
			  }
			  return r.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s);
		 },
		 slidePrev: function (e, t, s) {
			  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			  const i = this,
					{ params: a, snapGrid: r, slidesGrid: n, rtlTranslate: o, enabled: l, animating: d } = i;
			  if (!l) return i;
			  const c = i.virtual && a.virtual.enabled;
			  if (a.loop) {
					if (d && !c && a.loopPreventsSliding) return !1;
					i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
			  }
			  function p(e) {
					return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
			  }
			  const u = p(o ? i.translate : -i.translate),
					m = r.map((e) => p(e));
			  let f = r[m.indexOf(u) - 1];
			  if (void 0 === f && a.cssMode) {
					let e;
					r.forEach((t, s) => {
						 u >= t && (e = s);
					}),
						 void 0 !== e && (f = r[e > 0 ? e - 1 : e]);
			  }
			  let h = 0;
			  if (
					(void 0 !== f &&
						 ((h = n.indexOf(f)), h < 0 && (h = i.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && ((h = h - i.slidesPerViewDynamic("previous", !0) + 1), (h = Math.max(h, 0)))),
					a.rewind && i.isBeginning)
			  ) {
					const a = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
					return i.slideTo(a, e, t, s);
			  }
			  return a.loop && 0 === i.activeIndex && a.cssMode
					? (requestAnimationFrame(() => {
							i.slideTo(h, e, t, s);
					  }),
					  !0)
					: i.slideTo(h, e, t, s);
		 },
		 slideReset: function (e, t, s) {
			  return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
		 },
		 slideToClosest: function (e, t, s, i) {
			  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = 0.5);
			  const a = this;
			  let r = a.activeIndex;
			  const n = Math.min(a.params.slidesPerGroupSkip, r),
					o = n + Math.floor((r - n) / a.params.slidesPerGroup),
					l = a.rtlTranslate ? a.translate : -a.translate;
			  if (l >= a.snapGrid[o]) {
					const e = a.snapGrid[o];
					l - e > (a.snapGrid[o + 1] - e) * i && (r += a.params.slidesPerGroup);
			  } else {
					const e = a.snapGrid[o - 1];
					l - e <= (a.snapGrid[o] - e) * i && (r -= a.params.slidesPerGroup);
			  }
			  return (r = Math.max(r, 0)), (r = Math.min(r, a.slidesGrid.length - 1)), a.slideTo(r, e, t, s);
		 },
		 slideToClickedSlide: function () {
			  const e = this,
					{ params: t, slidesEl: s } = e,
					i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
			  let a,
					r = e.clickedIndex;
			  const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
			  if (t.loop) {
					if (e.animating) return;
					(a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
						 t.centeredSlides
							  ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2
									? (e.loopFix(),
									  (r = e.getSlideIndex(h(s, `${n}[data-swiper-slide-index="${a}"]`)[0])),
									  o(() => {
											e.slideTo(r);
									  }))
									: e.slideTo(r)
							  : r > e.slides.length - i
							  ? (e.loopFix(),
								 (r = e.getSlideIndex(h(s, `${n}[data-swiper-slide-index="${a}"]`)[0])),
								 o(() => {
									  e.slideTo(r);
								 }))
							  : e.slideTo(r);
			  } else e.slideTo(r);
		 },
	};
	var R = {
		 loopCreate: function (e) {
			  const t = this,
					{ params: s, slidesEl: i } = t;
			  if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
			  const a = () => {
						 h(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
							  e.setAttribute("data-swiper-slide-index", t);
						 });
					},
					r = t.grid && s.grid && s.grid.rows > 1,
					n = s.slidesPerGroup * (r ? s.grid.rows : 1),
					o = t.slides.length % n != 0,
					l = r && t.slides.length % s.grid.rows != 0,
					d = (e) => {
						 for (let i = 0; i < e; i += 1) {
							  const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
							  t.slidesEl.append(e);
						 }
					};
			  if (o) {
					if (s.loopAddBlankSlides) {
						 d(n - (t.slides.length % n)), t.recalcSlides(), t.updateSlides();
					} else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
					a();
			  } else if (l) {
					if (s.loopAddBlankSlides) {
						 d(s.grid.rows - (t.slides.length % s.grid.rows)), t.recalcSlides(), t.updateSlides();
					} else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
					a();
			  } else a();
			  t.loopFix({ slideRealIndex: e, direction: s.centeredSlides ? void 0 : "next" });
		 },
		 loopFix: function (e) {
			  let { slideRealIndex: t, slideTo: s = !0, direction: i, setTranslate: a, activeSlideIndex: r, byController: n, byMousewheel: o } = void 0 === e ? {} : e;
			  const l = this;
			  if (!l.params.loop) return;
			  l.emit("beforeLoopFix");
			  const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: m } = l,
					{ centeredSlides: f } = m;
			  if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && m.virtual.enabled))
					return (
						 s &&
							  (m.centeredSlides || 0 !== l.snapIndex
									? m.centeredSlides && l.snapIndex < m.slidesPerView
										 ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
										 : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
									: l.slideTo(l.virtual.slides.length, 0, !1, !0)),
						 (l.allowSlidePrev = c),
						 (l.allowSlideNext = p),
						 void l.emit("loopFix")
					);
			  let h = m.slidesPerView;
			  "auto" === h ? (h = l.slidesPerViewDynamic()) : ((h = Math.ceil(parseFloat(m.slidesPerView, 10))), f && h % 2 == 0 && (h += 1));
			  const v = m.slidesPerGroupAuto ? h : m.slidesPerGroup;
			  let b = v;
			  b % v != 0 && (b += v - (b % v)), (b += m.loopAdditionalSlides), (l.loopedSlides = b);
			  const w = l.grid && m.grid && m.grid.rows > 1;
			  d.length < h + b
					? g(
							"Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
					  )
					: w && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
			  const y = [],
					x = [];
			  let S = l.activeIndex;
			  void 0 === r ? (r = l.getSlideIndex(d.filter((e) => e.classList.contains(m.slideActiveClass))[0])) : (S = r);
			  const E = "next" === i || !i,
					T = "prev" === i || !i;
			  let M = 0,
					C = 0;
			  const L = w ? Math.ceil(d.length / m.grid.rows) : d.length,
					P = (w ? d[r].column : r) + (f && void 0 === a ? -h / 2 + 0.5 : 0);
			  if (P < b) {
					M = Math.max(b - P, v);
					for (let e = 0; e < b - P; e += 1) {
						 const t = e - Math.floor(e / L) * L;
						 if (w) {
							  const e = L - t - 1;
							  for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t);
						 } else y.push(L - t - 1);
					}
			  } else if (P + h > L - b) {
					C = Math.max(P - (L - 2 * b), v);
					for (let e = 0; e < C; e += 1) {
						 const t = e - Math.floor(e / L) * L;
						 w
							  ? d.forEach((e, s) => {
									  e.column === t && x.push(s);
								 })
							  : x.push(t);
					}
			  }
			  if (
					((l.__preventObserver__ = !0),
					requestAnimationFrame(() => {
						 l.__preventObserver__ = !1;
					}),
					T &&
						 y.forEach((e) => {
							  (d[e].swiperLoopMoveDOM = !0), u.prepend(d[e]), (d[e].swiperLoopMoveDOM = !1);
						 }),
					E &&
						 x.forEach((e) => {
							  (d[e].swiperLoopMoveDOM = !0), u.append(d[e]), (d[e].swiperLoopMoveDOM = !1);
						 }),
					l.recalcSlides(),
					"auto" === m.slidesPerView
						 ? l.updateSlides()
						 : w &&
							((y.length > 0 && T) || (x.length > 0 && E)) &&
							l.slides.forEach((e, t) => {
								 l.grid.updateSlide(t, e, l.slides);
							}),
					m.watchSlidesProgress && l.updateSlidesOffset(),
					s)
			  )
					if (y.length > 0 && T) {
						 if (void 0 === t) {
							  const e = l.slidesGrid[S],
									t = l.slidesGrid[S + M] - e;
							  o
									? l.setTranslate(l.translate - t)
									: (l.slideTo(S + M, 0, !1, !0), a && ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t), (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t)));
						 } else if (a) {
							  const e = w ? y.length / m.grid.rows : y.length;
							  l.slideTo(l.activeIndex + e, 0, !1, !0), (l.touchEventsData.currentTranslate = l.translate);
						 }
					} else if (x.length > 0 && E)
						 if (void 0 === t) {
							  const e = l.slidesGrid[S],
									t = l.slidesGrid[S - C] - e;
							  o
									? l.setTranslate(l.translate - t)
									: (l.slideTo(S - C, 0, !1, !0), a && ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t), (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t)));
						 } else {
							  const e = w ? x.length / m.grid.rows : x.length;
							  l.slideTo(l.activeIndex - e, 0, !1, !0);
						 }
			  if (((l.allowSlidePrev = c), (l.allowSlideNext = p), l.controller && l.controller.control && !n)) {
					const e = { slideRealIndex: t, direction: i, setTranslate: a, activeSlideIndex: r, byController: !0 };
					Array.isArray(l.controller.control)
						 ? l.controller.control.forEach((t) => {
								 !t.destroyed && t.params.loop && t.loopFix({ ...e, slideTo: t.params.slidesPerView === m.slidesPerView && s });
							})
						 : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({ ...e, slideTo: l.controller.control.params.slidesPerView === m.slidesPerView && s });
			  }
			  l.emit("loopFix");
		 },
		 loopDestroy: function () {
			  const e = this,
					{ params: t, slidesEl: s } = e;
			  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
			  e.recalcSlides();
			  const i = [];
			  e.slides.forEach((e) => {
					const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
					i[t] = e;
			  }),
					e.slides.forEach((e) => {
						 e.removeAttribute("data-swiper-slide-index");
					}),
					i.forEach((e) => {
						 s.append(e);
					}),
					e.recalcSlides(),
					e.slideTo(e.realIndex, 0);
		 },
	};
	var G = {
		 setGrabCursor: function (e) {
			  const t = this;
			  if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
			  const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
			  t.isElement && (t.__preventObserver__ = !0),
					(s.style.cursor = "move"),
					(s.style.cursor = e ? "grabbing" : "grab"),
					t.isElement &&
						 requestAnimationFrame(() => {
							  t.__preventObserver__ = !1;
						 });
		 },
		 unsetGrabCursor: function () {
			  const e = this;
			  (e.params.watchOverflow && e.isLocked) ||
					e.params.cssMode ||
					(e.isElement && (e.__preventObserver__ = !0),
					(e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = ""),
					e.isElement &&
						 requestAnimationFrame(() => {
							  e.__preventObserver__ = !1;
						 }));
		 },
	};
	function X(e, t, s) {
		 const i = r(),
			  { params: a } = e,
			  n = a.edgeSwipeDetection,
			  o = a.edgeSwipeThreshold;
		 return !n || !(s <= o || s >= i.innerWidth - o) || ("prevent" === n && (t.preventDefault(), !0));
	}
	function B(e) {
		 const t = this,
			  s = i();
		 let a = e;
		 a.originalEvent && (a = a.originalEvent);
		 const n = t.touchEventsData;
		 if ("pointerdown" === a.type) {
			  if (null !== n.pointerId && n.pointerId !== a.pointerId) return;
			  n.pointerId = a.pointerId;
		 } else "touchstart" === a.type && 1 === a.targetTouches.length && (n.touchId = a.targetTouches[0].identifier);
		 if ("touchstart" === a.type) return void X(t, a, a.targetTouches[0].pageX);
		 const { params: o, touches: d, enabled: c } = t;
		 if (!c) return;
		 if (!o.simulateTouch && "mouse" === a.pointerType) return;
		 if (t.animating && o.preventInteractionOnTransition) return;
		 !t.animating && o.cssMode && o.loop && t.loopFix();
		 let p = a.target;
		 if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(p)) return;
		 if ("which" in a && 3 === a.which) return;
		 if ("button" in a && a.button > 0) return;
		 if (n.isTouched && n.isMoved) return;
		 const u = !!o.noSwipingClass && "" !== o.noSwipingClass,
			  m = a.composedPath ? a.composedPath() : a.path;
		 u && a.target && a.target.shadowRoot && m && (p = m[0]);
		 const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
			  h = !(!a.target || !a.target.shadowRoot);
		 if (
			  o.noSwiping &&
			  (h
					? (function (e, t) {
							return (
								 void 0 === t && (t = this),
								 (function t(s) {
									  if (!s || s === i() || s === r()) return null;
									  s.assignedSlot && (s = s.assignedSlot);
									  const a = s.closest(e);
									  return a || s.getRootNode ? a || t(s.getRootNode().host) : null;
								 })(t)
							);
					  })(f, p)
					: p.closest(f))
		 )
			  return void (t.allowClick = !0);
		 if (o.swipeHandler && !p.closest(o.swipeHandler)) return;
		 (d.currentX = a.pageX), (d.currentY = a.pageY);
		 const g = d.currentX,
			  v = d.currentY;
		 if (!X(t, a, g)) return;
		 Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
			  (d.startX = g),
			  (d.startY = v),
			  (n.touchStartTime = l()),
			  (t.allowClick = !0),
			  t.updateSize(),
			  (t.swipeDirection = void 0),
			  o.threshold > 0 && (n.allowThresholdMove = !1);
		 let b = !0;
		 p.matches(n.focusableElements) && ((b = !1), "SELECT" === p.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && s.activeElement.blur();
		 const w = b && t.allowTouchMove && o.touchStartPreventDefault;
		 (!o.touchStartForcePreventDefault && !w) || p.isContentEditable || a.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", a);
	}
	function q(e) {
		 const t = i(),
			  s = this,
			  a = s.touchEventsData,
			  { params: r, touches: n, rtlTranslate: o, enabled: d } = s;
		 if (!d) return;
		 if (!r.simulateTouch && "mouse" === e.pointerType) return;
		 let c,
			  p = e;
		 if ((p.originalEvent && (p = p.originalEvent), "pointermove" === p.type)) {
			  if (null !== a.touchId) return;
			  if (p.pointerId !== a.pointerId) return;
		 }
		 if ("touchmove" === p.type) {
			  if (((c = [...p.changedTouches].filter((e) => e.identifier === a.touchId)[0]), !c || c.identifier !== a.touchId)) return;
		 } else c = p;
		 if (!a.isTouched) return void (a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", p));
		 const u = c.pageX,
			  m = c.pageY;
		 if (p.preventedByNestedSwiper) return (n.startX = u), void (n.startY = m);
		 if (!s.allowTouchMove) return p.target.matches(a.focusableElements) || (s.allowClick = !1), void (a.isTouched && (Object.assign(n, { startX: u, startY: m, currentX: u, currentY: m }), (a.touchStartTime = l())));
		 if (r.touchReleaseOnEdges && !r.loop)
			  if (s.isVertical()) {
					if ((m < n.startY && s.translate <= s.maxTranslate()) || (m > n.startY && s.translate >= s.minTranslate())) return (a.isTouched = !1), void (a.isMoved = !1);
			  } else if ((u < n.startX && s.translate <= s.maxTranslate()) || (u > n.startX && s.translate >= s.minTranslate())) return;
		 if (t.activeElement && p.target === t.activeElement && p.target.matches(a.focusableElements)) return (a.isMoved = !0), void (s.allowClick = !1);
		 a.allowTouchCallbacks && s.emit("touchMove", p), (n.previousX = n.currentX), (n.previousY = n.currentY), (n.currentX = u), (n.currentY = m);
		 const f = n.currentX - n.startX,
			  h = n.currentY - n.startY;
		 if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
		 if (void 0 === a.isScrolling) {
			  let e;
			  (s.isHorizontal() && n.currentY === n.startY) || (s.isVertical() && n.currentX === n.startX)
					? (a.isScrolling = !1)
					: f * f + h * h >= 25 && ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI), (a.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle));
		 }
		 if ((a.isScrolling && s.emit("touchMoveOpposite", p), void 0 === a.startMoving && ((n.currentX === n.startX && n.currentY === n.startY) || (a.startMoving = !0)), a.isScrolling)) return void (a.isTouched = !1);
		 if (!a.startMoving) return;
		 (s.allowClick = !1), !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
		 let g = s.isHorizontal() ? f : h,
			  v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
		 r.oneWayMovement && ((g = Math.abs(g) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))), (n.diff = g), (g *= r.touchRatio), o && ((g = -g), (v = -v));
		 const b = s.touchesDirection;
		 (s.swipeDirection = g > 0 ? "prev" : "next"), (s.touchesDirection = v > 0 ? "prev" : "next");
		 const w = s.params.loop && !r.cssMode,
			  y = ("next" === s.touchesDirection && s.allowSlideNext) || ("prev" === s.touchesDirection && s.allowSlidePrev);
		 if (!a.isMoved) {
			  if ((w && y && s.loopFix({ direction: s.swipeDirection }), (a.startTranslate = s.getTranslate()), s.setTransition(0), s.animating)) {
					const e = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
					s.wrapperEl.dispatchEvent(e);
			  }
			  (a.allowMomentumBounce = !1), !r.grabCursor || (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) || s.setGrabCursor(!0), s.emit("sliderFirstMove", p);
		 }
		 if ((new Date().getTime(), a.isMoved && a.allowThresholdMove && b !== s.touchesDirection && w && y && Math.abs(g) >= 1))
			  return Object.assign(n, { startX: u, startY: m, currentX: u, currentY: m, startTranslate: a.currentTranslate }), (a.loopSwapReset = !0), void (a.startTranslate = a.currentTranslate);
		 s.emit("sliderMove", p), (a.isMoved = !0), (a.currentTranslate = g + a.startTranslate);
		 let x = !0,
			  S = r.resistanceRatio;
		 if (
			  (r.touchReleaseOnEdges && (S = 0),
			  g > 0
					? (w &&
							y &&
							a.allowThresholdMove &&
							a.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) &&
							s.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
					  a.currentTranslate > s.minTranslate() && ((x = !1), r.resistance && (a.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + a.startTranslate + g) ** S)))
					: g < 0 &&
					  (w &&
							y &&
							a.allowThresholdMove &&
							a.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) &&
							s.loopFix({ direction: "next", setTranslate: !0, activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10))) }),
					  a.currentTranslate < s.maxTranslate() && ((x = !1), r.resistance && (a.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - a.startTranslate - g) ** S))),
			  x && (p.preventedByNestedSwiper = !0),
			  !s.allowSlideNext && "next" === s.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
			  !s.allowSlidePrev && "prev" === s.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
			  s.allowSlidePrev || s.allowSlideNext || (a.currentTranslate = a.startTranslate),
			  r.threshold > 0)
		 ) {
			  if (!(Math.abs(g) > r.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
			  if (!a.allowThresholdMove)
					return (a.allowThresholdMove = !0), (n.startX = n.currentX), (n.startY = n.currentY), (a.currentTranslate = a.startTranslate), void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
		 }
		 r.followFinger &&
			  !r.cssMode &&
			  (((r.freeMode && r.freeMode.enabled && s.freeMode) || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()),
			  r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
			  s.updateProgress(a.currentTranslate),
			  s.setTranslate(a.currentTranslate));
	}
	function Y(e) {
		 const t = this,
			  s = t.touchEventsData;
		 let i,
			  a = e;
		 a.originalEvent && (a = a.originalEvent);
		 if ("touchend" === a.type || "touchcancel" === a.type) {
			  if (((i = [...a.changedTouches].filter((e) => e.identifier === s.touchId)[0]), !i || i.identifier !== s.touchId)) return;
		 } else {
			  if (null !== s.touchId) return;
			  if (a.pointerId !== s.pointerId) return;
			  i = a;
		 }
		 if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type)) {
			  if (!(["pointercancel", "contextmenu"].includes(a.type) && (t.browser.isSafari || t.browser.isWebView))) return;
		 }
		 (s.pointerId = null), (s.touchId = null);
		 const { params: r, touches: n, rtlTranslate: d, slidesGrid: c, enabled: p } = t;
		 if (!p) return;
		 if (!r.simulateTouch && "mouse" === a.pointerType) return;
		 if ((s.allowTouchCallbacks && t.emit("touchEnd", a), (s.allowTouchCallbacks = !1), !s.isTouched)) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
		 r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
		 const u = l(),
			  m = u - s.touchStartTime;
		 if (t.allowClick) {
			  const e = a.path || (a.composedPath && a.composedPath());
			  t.updateClickedSlide((e && e[0]) || a.target, e), t.emit("tap click", a), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a);
		 }
		 if (
			  ((s.lastClickTime = l()),
			  o(() => {
					t.destroyed || (t.allowClick = !0);
			  }),
			  !s.isTouched || !s.isMoved || !t.swipeDirection || (0 === n.diff && !s.loopSwapReset) || (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
		 )
			  return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
		 let f;
		 if (((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1), (f = r.followFinger ? (d ? t.translate : -t.translate) : -s.currentTranslate), r.cssMode)) return;
		 if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: f });
		 let h = 0,
			  g = t.slidesSizesGrid[0];
		 for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
			  const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
			  void 0 !== c[e + t] ? f >= c[e] && f < c[e + t] && ((h = e), (g = c[e + t] - c[e])) : f >= c[e] && ((h = e), (g = c[c.length - 1] - c[c.length - 2]));
		 }
		 let v = null,
			  b = null;
		 r.rewind && (t.isBeginning ? (b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (v = 0));
		 const w = (f - c[h]) / g,
			  y = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
		 if (m > r.longSwipesMs) {
			  if (!r.longSwipes) return void t.slideTo(t.activeIndex);
			  "next" === t.swipeDirection && (w >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? v : h + y) : t.slideTo(h)),
					"prev" === t.swipeDirection && (w > 1 - r.longSwipesRatio ? t.slideTo(h + y) : null !== b && w < 0 && Math.abs(w) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(h));
		 } else {
			  if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
			  t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
					? a.target === t.navigation.nextEl
						 ? t.slideTo(h + y)
						 : t.slideTo(h)
					: ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + y), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : h));
		 }
	}
	function _() {
		 const e = this,
			  { params: t, el: s } = e;
		 if (s && 0 === s.offsetWidth) return;
		 t.breakpoints && e.setBreakpoint();
		 const { allowSlideNext: i, allowSlidePrev: a, snapGrid: r } = e,
			  n = e.virtual && e.params.virtual.enabled;
		 (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
		 const o = n && t.loop;
		 !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o
			  ? e.params.loop && !n
					? e.slideToLoop(e.realIndex, 0, !1, !0)
					: e.slideTo(e.activeIndex, 0, !1, !0)
			  : e.slideTo(e.slides.length - 1, 0, !1, !0),
			  e.autoplay &&
					e.autoplay.running &&
					e.autoplay.paused &&
					(clearTimeout(e.autoplay.resizeTimeout),
					(e.autoplay.resizeTimeout = setTimeout(() => {
						 e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
					}, 500))),
			  (e.allowSlidePrev = a),
			  (e.allowSlideNext = i),
			  e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
	}
	function W(e) {
		 const t = this;
		 t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
	}
	function V() {
		 const e = this,
			  { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
		 if (!i) return;
		 let a;
		 (e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop), 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
		 const r = e.maxTranslate() - e.minTranslate();
		 (a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r), a !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
	}
	function j(e) {
		 const t = this;
		 z(t, e.target), t.params.cssMode || ("auto" !== t.params.slidesPerView && !t.params.autoHeight) || t.update();
	}
	function U() {
		 const e = this;
		 e.documentTouchHandlerProceeded || ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
	}
	const K = (e, t) => {
		 const s = i(),
			  { params: a, el: r, wrapperEl: n, device: o } = e,
			  l = !!a.nested,
			  d = "on" === t ? "addEventListener" : "removeEventListener",
			  c = t;
		 s[d]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
			  r[d]("touchstart", e.onTouchStart, { passive: !1 }),
			  r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
			  s[d]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
			  s[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
			  s[d]("touchend", e.onTouchEnd, { passive: !0 }),
			  s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
			  s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
			  s[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
			  s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
			  s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
			  s[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
			  (a.preventClicks || a.preventClicksPropagation) && r[d]("click", e.onClick, !0),
			  a.cssMode && n[d]("scroll", e.onScroll),
			  a.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _, !0) : e[c]("observerUpdate", _, !0),
			  r[d]("load", e.onLoad, { capture: !0 });
	};
	var Z = {
		 attachEvents: function () {
			  const e = this,
					{ params: t } = e;
			  (e.onTouchStart = B.bind(e)), (e.onTouchMove = q.bind(e)), (e.onTouchEnd = Y.bind(e)), (e.onDocumentTouchStart = U.bind(e)), t.cssMode && (e.onScroll = V.bind(e)), (e.onClick = W.bind(e)), (e.onLoad = j.bind(e)), K(e, "on");
		 },
		 detachEvents: function () {
			  K(this, "off");
		 },
	};
	const J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
	var Q = {
		 setBreakpoint: function () {
			  const e = this,
					{ realIndex: t, initialized: s, params: i, el: a } = e,
					r = i.breakpoints;
			  if (!r || (r && 0 === Object.keys(r).length)) return;
			  const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
			  if (!n || e.currentBreakpoint === n) return;
			  const o = (n in r ? r[n] : void 0) || e.originalParams,
					l = J(e, i),
					d = J(e, o),
					c = i.enabled;
			  l && !d
					? (a.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses())
					: !l &&
					  d &&
					  (a.classList.add(`${i.containerModifierClass}grid`),
					  ((o.grid.fill && "column" === o.grid.fill) || (!o.grid.fill && "column" === i.grid.fill)) && a.classList.add(`${i.containerModifierClass}grid-column`),
					  e.emitContainerClasses()),
					["navigation", "pagination", "scrollbar"].forEach((t) => {
						 if (void 0 === o[t]) return;
						 const s = i[t] && i[t].enabled,
							  a = o[t] && o[t].enabled;
						 s && !a && e[t].disable(), !s && a && e[t].enable();
					});
			  const u = o.direction && o.direction !== i.direction,
					m = i.loop && (o.slidesPerView !== i.slidesPerView || u),
					f = i.loop;
			  u && s && e.changeDirection(), p(e.params, o);
			  const h = e.params.enabled,
					g = e.params.loop;
			  Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
					c && !h ? e.disable() : !c && h && e.enable(),
					(e.currentBreakpoint = n),
					e.emit("_beforeBreakpoint", o),
					s && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && g ? (e.loopCreate(t), e.updateSlides()) : f && !g && e.loopDestroy()),
					e.emit("breakpoint", o);
		 },
		 getBreakpoint: function (e, t, s) {
			  if ((void 0 === t && (t = "window"), !e || ("container" === t && !s))) return;
			  let i = !1;
			  const a = r(),
					n = "window" === t ? a.innerHeight : s.clientHeight,
					o = Object.keys(e).map((e) => {
						 if ("string" == typeof e && 0 === e.indexOf("@")) {
							  const t = parseFloat(e.substr(1));
							  return { value: n * t, point: e };
						 }
						 return { value: e, point: e };
					});
			  o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
			  for (let e = 0; e < o.length; e += 1) {
					const { point: r, value: n } = o[e];
					"window" === t ? a.matchMedia(`(min-width: ${n}px)`).matches && (i = r) : n <= s.clientWidth && (i = r);
			  }
			  return i || "max";
		 },
	};
	var ee = {
		 addClasses: function () {
			  const e = this,
					{ classNames: t, params: s, rtl: i, el: a, device: r } = e,
					n = (function (e, t) {
						 const s = [];
						 return (
							  e.forEach((e) => {
									"object" == typeof e
										 ? Object.keys(e).forEach((i) => {
												 e[i] && s.push(t + i);
											})
										 : "string" == typeof e && s.push(t + e);
							  }),
							  s
						 );
					})(
						 [
							  "initialized",
							  s.direction,
							  { "free-mode": e.params.freeMode && s.freeMode.enabled },
							  { autoheight: s.autoHeight },
							  { rtl: i },
							  { grid: s.grid && s.grid.rows > 1 },
							  { "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill },
							  { android: r.android },
							  { ios: r.ios },
							  { "css-mode": s.cssMode },
							  { centered: s.cssMode && s.centeredSlides },
							  { "watch-progress": s.watchSlidesProgress },
						 ],
						 s.containerModifierClass
					);
			  t.push(...n), a.classList.add(...t), e.emitContainerClasses();
		 },
		 removeClasses: function () {
			  const { el: e, classNames: t } = this;
			  e.classList.remove(...t), this.emitContainerClasses();
		 },
	};
	var te = {
			  checkOverflow: function () {
					const e = this,
						 { isLocked: t, params: s } = e,
						 { slidesOffsetBefore: i } = s;
					if (i) {
						 const t = e.slides.length - 1,
							  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
						 e.isLocked = e.size > s;
					} else e.isLocked = 1 === e.snapGrid.length;
					!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
			  },
		 },
		 se = {
			  init: !0,
			  direction: "horizontal",
			  oneWayMovement: !1,
			  touchEventsTarget: "wrapper",
			  initialSlide: 0,
			  speed: 300,
			  cssMode: !1,
			  updateOnWindowResize: !0,
			  resizeObserver: !0,
			  nested: !1,
			  createElements: !1,
			  eventsPrefix: "swiper",
			  enabled: !0,
			  focusableElements: "input, select, option, textarea, button, video, label",
			  width: null,
			  height: null,
			  preventInteractionOnTransition: !1,
			  userAgent: null,
			  url: null,
			  edgeSwipeDetection: !1,
			  edgeSwipeThreshold: 20,
			  autoHeight: !1,
			  setWrapperSize: !1,
			  virtualTranslate: !1,
			  effect: "slide",
			  breakpoints: void 0,
			  breakpointsBase: "window",
			  spaceBetween: 0,
			  slidesPerView: 1,
			  slidesPerGroup: 1,
			  slidesPerGroupSkip: 0,
			  slidesPerGroupAuto: !1,
			  centeredSlides: !1,
			  centeredSlidesBounds: !1,
			  slidesOffsetBefore: 0,
			  slidesOffsetAfter: 0,
			  normalizeSlideIndex: !0,
			  centerInsufficientSlides: !1,
			  watchOverflow: !0,
			  roundLengths: !1,
			  touchRatio: 1,
			  touchAngle: 45,
			  simulateTouch: !0,
			  shortSwipes: !0,
			  longSwipes: !0,
			  longSwipesRatio: 0.5,
			  longSwipesMs: 300,
			  followFinger: !0,
			  allowTouchMove: !0,
			  threshold: 5,
			  touchMoveStopPropagation: !1,
			  touchStartPreventDefault: !0,
			  touchStartForcePreventDefault: !1,
			  touchReleaseOnEdges: !1,
			  uniqueNavElements: !0,
			  resistance: !0,
			  resistanceRatio: 0.85,
			  watchSlidesProgress: !1,
			  grabCursor: !1,
			  preventClicks: !0,
			  preventClicksPropagation: !0,
			  slideToClickedSlide: !1,
			  loop: !1,
			  loopAddBlankSlides: !0,
			  loopAdditionalSlides: 0,
			  loopPreventsSliding: !0,
			  rewind: !1,
			  allowSlidePrev: !0,
			  allowSlideNext: !0,
			  swipeHandler: null,
			  noSwiping: !0,
			  noSwipingClass: "swiper-no-swiping",
			  noSwipingSelector: null,
			  passiveListeners: !0,
			  maxBackfaceHiddenSlides: 10,
			  containerModifierClass: "swiper-",
			  slideClass: "swiper-slide",
			  slideBlankClass: "swiper-slide-blank",
			  slideActiveClass: "swiper-slide-active",
			  slideVisibleClass: "swiper-slide-visible",
			  slideFullyVisibleClass: "swiper-slide-fully-visible",
			  slideNextClass: "swiper-slide-next",
			  slidePrevClass: "swiper-slide-prev",
			  wrapperClass: "swiper-wrapper",
			  lazyPreloaderClass: "swiper-lazy-preloader",
			  lazyPreloadPrevNext: 0,
			  runCallbacksOnInit: !0,
			  _emitClasses: !1,
		 };
	function ie(e, t) {
		 return function (s) {
			  void 0 === s && (s = {});
			  const i = Object.keys(s)[0],
					a = s[i];
			  "object" == typeof a && null !== a
					? (!0 === e[i] && (e[i] = { enabled: !0 }),
					  "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
					  ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
					  i in e && "enabled" in a ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), p(t, s)) : p(t, s))
					: p(t, s);
		 };
	}
	const ae = { eventsEmitter: I, update: $, translate: D, transition: F, slide: H, loop: R, grabCursor: G, events: Z, breakpoints: Q, checkOverflow: te, classes: ee },
		 re = {};
	class ne {
		 constructor() {
			  let e, t;
			  for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
			  1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? (t = a[0]) : ([e, t] = a), t || (t = {}), (t = p({}, t)), e && !t.el && (t.el = e);
			  const n = i();
			  if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
					const e = [];
					return (
						 n.querySelectorAll(t.el).forEach((s) => {
							  const i = p({}, t, { el: s });
							  e.push(new ne(i));
						 }),
						 e
					);
			  }
			  const o = this;
			  (o.__swiper__ = !0),
					(o.support = L()),
					(o.device = P({ userAgent: t.userAgent })),
					(o.browser = A()),
					(o.eventsListeners = {}),
					(o.eventsAnyListeners = []),
					(o.modules = [...o.__modules__]),
					t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
			  const l = {};
			  o.modules.forEach((e) => {
					e({ params: t, swiper: o, extendParams: ie(t, l), on: o.on.bind(o), once: o.once.bind(o), off: o.off.bind(o), emit: o.emit.bind(o) });
			  });
			  const d = p({}, se, l);
			  return (
					(o.params = p({}, d, re, t)),
					(o.originalParams = p({}, o.params)),
					(o.passedParams = p({}, t)),
					o.params &&
						 o.params.on &&
						 Object.keys(o.params.on).forEach((e) => {
							  o.on(e, o.params.on[e]);
						 }),
					o.params && o.params.onAny && o.onAny(o.params.onAny),
					Object.assign(o, {
						 enabled: o.params.enabled,
						 el: e,
						 classNames: [],
						 slides: [],
						 slidesGrid: [],
						 snapGrid: [],
						 slidesSizesGrid: [],
						 isHorizontal: () => "horizontal" === o.params.direction,
						 isVertical: () => "vertical" === o.params.direction,
						 activeIndex: 0,
						 realIndex: 0,
						 isBeginning: !0,
						 isEnd: !1,
						 translate: 0,
						 previousTranslate: 0,
						 progress: 0,
						 velocity: 0,
						 animating: !1,
						 cssOverflowAdjustment() {
							  return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
						 },
						 allowSlideNext: o.params.allowSlideNext,
						 allowSlidePrev: o.params.allowSlidePrev,
						 touchEventsData: {
							  isTouched: void 0,
							  isMoved: void 0,
							  allowTouchCallbacks: void 0,
							  touchStartTime: void 0,
							  isScrolling: void 0,
							  currentTranslate: void 0,
							  startTranslate: void 0,
							  allowThresholdMove: void 0,
							  focusableElements: o.params.focusableElements,
							  lastClickTime: 0,
							  clickTimeout: void 0,
							  velocities: [],
							  allowMomentumBounce: void 0,
							  startMoving: void 0,
							  pointerId: null,
							  touchId: null,
						 },
						 allowClick: !0,
						 allowTouchMove: o.params.allowTouchMove,
						 touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
						 imagesToLoad: [],
						 imagesLoaded: 0,
					}),
					o.emit("_swiper"),
					o.params.init && o.init(),
					o
			  );
		 }
		 getDirectionLabel(e) {
			  return this.isHorizontal()
					? e
					: {
							width: "height",
							"margin-top": "margin-left",
							"margin-bottom ": "margin-right",
							"margin-left": "margin-top",
							"margin-right": "margin-bottom",
							"padding-left": "padding-top",
							"padding-right": "padding-bottom",
							marginRight: "marginBottom",
					  }[e];
		 }
		 getSlideIndex(e) {
			  const { slidesEl: t, params: s } = this,
					i = y(h(t, `.${s.slideClass}, swiper-slide`)[0]);
			  return y(e) - i;
		 }
		 getSlideIndexByData(e) {
			  return this.getSlideIndex(this.slides.filter((t) => 1 * t.getAttribute("data-swiper-slide-index") === e)[0]);
		 }
		 recalcSlides() {
			  const { slidesEl: e, params: t } = this;
			  this.slides = h(e, `.${t.slideClass}, swiper-slide`);
		 }
		 enable() {
			  const e = this;
			  e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
		 }
		 disable() {
			  const e = this;
			  e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
		 }
		 setProgress(e, t) {
			  const s = this;
			  e = Math.min(Math.max(e, 0), 1);
			  const i = s.minTranslate(),
					a = (s.maxTranslate() - i) * e + i;
			  s.translateTo(a, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
		 }
		 emitContainerClasses() {
			  const e = this;
			  if (!e.params._emitClasses || !e.el) return;
			  const t = e.el.className.split(" ").filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
			  e.emit("_containerClasses", t.join(" "));
		 }
		 getSlideClasses(e) {
			  const t = this;
			  return t.destroyed
					? ""
					: e.className
							.split(" ")
							.filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
							.join(" ");
		 }
		 emitSlidesClasses() {
			  const e = this;
			  if (!e.params._emitClasses || !e.el) return;
			  const t = [];
			  e.slides.forEach((s) => {
					const i = e.getSlideClasses(s);
					t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
			  }),
					e.emit("_slideClasses", t);
		 }
		 slidesPerViewDynamic(e, t) {
			  void 0 === e && (e = "current"), void 0 === t && (t = !1);
			  const { params: s, slides: i, slidesGrid: a, slidesSizesGrid: r, size: n, activeIndex: o } = this;
			  let l = 1;
			  if ("number" == typeof s.slidesPerView) return s.slidesPerView;
			  if (s.centeredSlides) {
					let e,
						 t = i[o] ? i[o].swiperSlideSize : 0;
					for (let s = o + 1; s < i.length; s += 1) i[s] && !e && ((t += i[s].swiperSlideSize), (l += 1), t > n && (e = !0));
					for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && ((t += i[s].swiperSlideSize), (l += 1), t > n && (e = !0));
			  } else if ("current" === e)
					for (let e = o + 1; e < i.length; e += 1) {
						 (t ? a[e] + r[e] - a[o] < n : a[e] - a[o] < n) && (l += 1);
					}
			  else
					for (let e = o - 1; e >= 0; e -= 1) {
						 a[o] - a[e] < n && (l += 1);
					}
			  return l;
		 }
		 update() {
			  const e = this;
			  if (!e || e.destroyed) return;
			  const { snapGrid: t, params: s } = e;
			  function i() {
					const t = e.rtlTranslate ? -1 * e.translate : e.translate,
						 s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
					e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
			  }
			  let a;
			  if (
					(s.breakpoints && e.setBreakpoint(),
					[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
						 t.complete && z(e, t);
					}),
					e.updateSize(),
					e.updateSlides(),
					e.updateProgress(),
					e.updateSlidesClasses(),
					s.freeMode && s.freeMode.enabled && !s.cssMode)
			  )
					i(), s.autoHeight && e.updateAutoHeight();
			  else {
					if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
						 const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
						 a = e.slideTo(t.length - 1, 0, !1, !0);
					} else a = e.slideTo(e.activeIndex, 0, !1, !0);
					a || i();
			  }
			  s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
		 }
		 changeDirection(e, t) {
			  void 0 === t && (t = !0);
			  const s = this,
					i = s.params.direction;
			  return (
					e || (e = "horizontal" === i ? "vertical" : "horizontal"),
					e === i ||
						 ("horizontal" !== e && "vertical" !== e) ||
						 (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
						 s.el.classList.add(`${s.params.containerModifierClass}${e}`),
						 s.emitContainerClasses(),
						 (s.params.direction = e),
						 s.slides.forEach((t) => {
							  "vertical" === e ? (t.style.width = "") : (t.style.height = "");
						 }),
						 s.emit("changeDirection"),
						 t && s.update()),
					s
			  );
		 }
		 changeLanguageDirection(e) {
			  const t = this;
			  (t.rtl && "rtl" === e) ||
					(!t.rtl && "ltr" === e) ||
					((t.rtl = "rtl" === e),
					(t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
					t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl")) : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")),
					t.update());
		 }
		 mount(e) {
			  const t = this;
			  if (t.mounted) return !0;
			  let s = e || t.params.el;
			  if (("string" == typeof s && (s = document.querySelector(s)), !s)) return !1;
			  (s.swiper = t), s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
			  const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
			  let a = (() => {
					if (s && s.shadowRoot && s.shadowRoot.querySelector) {
						 return s.shadowRoot.querySelector(i());
					}
					return h(s, i())[0];
			  })();
			  return (
					!a &&
						 t.params.createElements &&
						 ((a = v("div", t.params.wrapperClass)),
						 s.append(a),
						 h(s, `.${t.params.slideClass}`).forEach((e) => {
							  a.append(e);
						 })),
					Object.assign(t, {
						 el: s,
						 wrapperEl: a,
						 slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
						 hostEl: t.isElement ? s.parentNode.host : s,
						 mounted: !0,
						 rtl: "rtl" === s.dir.toLowerCase() || "rtl" === w(s, "direction"),
						 rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === w(s, "direction")),
						 wrongRTL: "-webkit-box" === w(a, "display"),
					}),
					!0
			  );
		 }
		 init(e) {
			  const t = this;
			  if (t.initialized) return t;
			  if (!1 === t.mount(e)) return t;
			  t.emit("beforeInit"),
					t.params.breakpoints && t.setBreakpoint(),
					t.addClasses(),
					t.updateSize(),
					t.updateSlides(),
					t.params.watchOverflow && t.checkOverflow(),
					t.params.grabCursor && t.enabled && t.setGrabCursor(),
					t.params.loop && t.virtual && t.params.virtual.enabled
						 ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0)
						 : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
					t.params.loop && t.loopCreate(),
					t.attachEvents();
			  const s = [...t.el.querySelectorAll('[loading="lazy"]')];
			  return (
					t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
					s.forEach((e) => {
						 e.complete
							  ? z(t, e)
							  : e.addEventListener("load", (e) => {
									  z(t, e.target);
								 });
					}),
					O(t),
					(t.initialized = !0),
					O(t),
					t.emit("init"),
					t.emit("afterInit"),
					t
			  );
		 }
		 destroy(e, t) {
			  void 0 === e && (e = !0), void 0 === t && (t = !0);
			  const s = this,
					{ params: i, el: a, wrapperEl: r, slides: n } = s;
			  return (
					void 0 === s.params ||
						 s.destroyed ||
						 (s.emit("beforeDestroy"),
						 (s.initialized = !1),
						 s.detachEvents(),
						 i.loop && s.loopDestroy(),
						 t &&
							  (s.removeClasses(),
							  a.removeAttribute("style"),
							  r.removeAttribute("style"),
							  n &&
									n.length &&
									n.forEach((e) => {
										 e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
									})),
						 s.emit("destroy"),
						 Object.keys(s.eventsListeners).forEach((e) => {
							  s.off(e);
						 }),
						 !1 !== e &&
							  ((s.el.swiper = null),
							  (function (e) {
									const t = e;
									Object.keys(t).forEach((e) => {
										 try {
											  t[e] = null;
										 } catch (e) {}
										 try {
											  delete t[e];
										 } catch (e) {}
									});
							  })(s)),
						 (s.destroyed = !0)),
					null
			  );
		 }
		 static extendDefaults(e) {
			  p(re, e);
		 }
		 static get extendedDefaults() {
			  return re;
		 }
		 static get defaults() {
			  return se;
		 }
		 static installModule(e) {
			  ne.prototype.__modules__ || (ne.prototype.__modules__ = []);
			  const t = ne.prototype.__modules__;
			  "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
		 }
		 static use(e) {
			  return Array.isArray(e) ? (e.forEach((e) => ne.installModule(e)), ne) : (ne.installModule(e), ne);
		 }
	}
	function oe(e, t, s, i) {
		 return (
			  e.params.createElements &&
					Object.keys(i).forEach((a) => {
						 if (!s[a] && !0 === s.auto) {
							  let r = h(e.el, `.${i[a]}`)[0];
							  r || ((r = v("div", i[a])), (r.className = i[a]), e.el.append(r)), (s[a] = r), (t[a] = r);
						 }
					}),
			  s
		 );
	}
	function le(e) {
		 return (
			  void 0 === e && (e = ""),
			  `.${e
					.trim()
					.replace(/([\.:!+\/])/g, "\\$1")
					.replace(/ /g, ".")}`
		 );
	}
	function de(e) {
		 const t = this,
			  { params: s, slidesEl: i } = t;
		 s.loop && t.loopDestroy();
		 const a = (e) => {
			  if ("string" == typeof e) {
					const t = document.createElement("div");
					(t.innerHTML = e), i.append(t.children[0]), (t.innerHTML = "");
			  } else i.append(e);
		 };
		 if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
		 else a(e);
		 t.recalcSlides(), s.loop && t.loopCreate(), (s.observer && !t.isElement) || t.update();
	}
	function ce(e) {
		 const t = this,
			  { params: s, activeIndex: i, slidesEl: a } = t;
		 s.loop && t.loopDestroy();
		 let r = i + 1;
		 const n = (e) => {
			  if ("string" == typeof e) {
					const t = document.createElement("div");
					(t.innerHTML = e), a.prepend(t.children[0]), (t.innerHTML = "");
			  } else a.prepend(e);
		 };
		 if ("object" == typeof e && "length" in e) {
			  for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
			  r = i + e.length;
		 } else n(e);
		 t.recalcSlides(), s.loop && t.loopCreate(), (s.observer && !t.isElement) || t.update(), t.slideTo(r, 0, !1);
	}
	function pe(e, t) {
		 const s = this,
			  { params: i, activeIndex: a, slidesEl: r } = s;
		 let n = a;
		 i.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
		 const o = s.slides.length;
		 if (e <= 0) return void s.prependSlide(t);
		 if (e >= o) return void s.appendSlide(t);
		 let l = n > e ? n + 1 : n;
		 const d = [];
		 for (let t = o - 1; t >= e; t -= 1) {
			  const e = s.slides[t];
			  e.remove(), d.unshift(e);
		 }
		 if ("object" == typeof t && "length" in t) {
			  for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
			  l = n > e ? n + t.length : n;
		 } else r.append(t);
		 for (let e = 0; e < d.length; e += 1) r.append(d[e]);
		 s.recalcSlides(), i.loop && s.loopCreate(), (i.observer && !s.isElement) || s.update(), i.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1);
	}
	function ue(e) {
		 const t = this,
			  { params: s, activeIndex: i } = t;
		 let a = i;
		 s.loop && ((a -= t.loopedSlides), t.loopDestroy());
		 let r,
			  n = a;
		 if ("object" == typeof e && "length" in e) {
			  for (let s = 0; s < e.length; s += 1) (r = e[s]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
			  n = Math.max(n, 0);
		 } else (r = e), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), (n = Math.max(n, 0));
		 t.recalcSlides(), s.loop && t.loopCreate(), (s.observer && !t.isElement) || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
	}
	function me() {
		 const e = this,
			  t = [];
		 for (let s = 0; s < e.slides.length; s += 1) t.push(s);
		 e.removeSlide(t);
	}
	function fe(e) {
		 const { effect: t, swiper: s, on: i, setTranslate: a, setTransition: r, overwriteParams: n, perspective: o, recreateShadows: l, getEffectParams: d } = e;
		 let c;
		 i("beforeInit", () => {
			  if (s.params.effect !== t) return;
			  s.classNames.push(`${s.params.containerModifierClass}${t}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
			  const e = n ? n() : {};
			  Object.assign(s.params, e), Object.assign(s.originalParams, e);
		 }),
			  i("setTranslate", () => {
					s.params.effect === t && a();
			  }),
			  i("setTransition", (e, i) => {
					s.params.effect === t && r(i);
			  }),
			  i("transitionEnd", () => {
					if (s.params.effect === t && l) {
						 if (!d || !d().slideShadows) return;
						 s.slides.forEach((e) => {
							  e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e) => e.remove());
						 }),
							  l();
					}
			  }),
			  i("virtualUpdate", () => {
					s.params.effect === t &&
						 (s.slides.length || (c = !0),
						 requestAnimationFrame(() => {
							  c && s.slides && s.slides.length && (a(), (c = !1));
						 }));
			  });
	}
	function he(e, t) {
		 const s = f(t);
		 return s !== t && ((s.style.backfaceVisibility = "hidden"), (s.style["-webkit-backface-visibility"] = "hidden")), s;
	}
	function ge(e) {
		 let { swiper: t, duration: s, transformElements: i, allSlides: a } = e;
		 const { activeIndex: r } = t;
		 if (t.params.virtualTranslate && 0 !== s) {
			  let e,
					s = !1;
			  (e = a
					? i
					: i.filter((e) => {
							const s = e.classList.contains("swiper-slide-transform")
								 ? ((e) => {
										 if (!e.parentElement) return t.slides.filter((t) => t.shadowRoot && t.shadowRoot === e.parentNode)[0];
										 return e.parentElement;
									})(e)
								 : e;
							return t.getSlideIndex(s) === r;
					  })),
					e.forEach((e) => {
						 S(e, () => {
							  if (s) return;
							  if (!t || t.destroyed) return;
							  (s = !0), (t.animating = !1);
							  const e = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
							  t.wrapperEl.dispatchEvent(e);
						 });
					});
		 }
	}
	function ve(e, t, s) {
		 const i = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`,
			  a = f(t);
		 let r = a.querySelector(`.${i.split(" ").join(".")}`);
		 return r || ((r = v("div", i.split(" "))), a.append(r)), r;
	}
	Object.keys(ae).forEach((e) => {
		 Object.keys(ae[e]).forEach((t) => {
			  ne.prototype[t] = ae[e][t];
		 });
	}),
		 ne.use([
			  function (e) {
					let { swiper: t, on: s, emit: i } = e;
					const a = r();
					let n = null,
						 o = null;
					const l = () => {
							  t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
						 },
						 d = () => {
							  t && !t.destroyed && t.initialized && i("orientationchange");
						 };
					s("init", () => {
						 t.params.resizeObserver && void 0 !== a.ResizeObserver
							  ? t &&
								 !t.destroyed &&
								 t.initialized &&
								 ((n = new ResizeObserver((e) => {
									  o = a.requestAnimationFrame(() => {
											const { width: s, height: i } = t;
											let a = s,
												 r = i;
											e.forEach((e) => {
												 let { contentBoxSize: s, contentRect: i, target: n } = e;
												 (n && n !== t.el) || ((a = i ? i.width : (s[0] || s).inlineSize), (r = i ? i.height : (s[0] || s).blockSize));
											}),
												 (a === s && r === i) || l();
									  });
								 })),
								 n.observe(t.el))
							  : (a.addEventListener("resize", l), a.addEventListener("orientationchange", d));
					}),
						 s("destroy", () => {
							  o && a.cancelAnimationFrame(o), n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", d);
						 });
			  },
			  function (e) {
					let { swiper: t, extendParams: s, on: i, emit: a } = e;
					const n = [],
						 o = r(),
						 l = function (e, s) {
							  void 0 === s && (s = {});
							  const i = new (o.MutationObserver || o.WebkitMutationObserver)((e) => {
									if (t.__preventObserver__) return;
									if (1 === e.length) return void a("observerUpdate", e[0]);
									const s = function () {
										 a("observerUpdate", e[0]);
									};
									o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0);
							  });
							  i.observe(e, { attributes: void 0 === s.attributes || s.attributes, childList: void 0 === s.childList || s.childList, characterData: void 0 === s.characterData || s.characterData }), n.push(i);
						 };
					s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
						 i("init", () => {
							  if (t.params.observer) {
									if (t.params.observeParents) {
										 const e = x(t.hostEl);
										 for (let t = 0; t < e.length; t += 1) l(e[t]);
									}
									l(t.hostEl, { childList: t.params.observeSlideChildren }), l(t.wrapperEl, { attributes: !1 });
							  }
						 }),
						 i("destroy", () => {
							  n.forEach((e) => {
									e.disconnect();
							  }),
									n.splice(0, n.length);
						 });
			  },
		 ]);
	const be = [
		 function (e) {
			  let t,
					{ swiper: s, extendParams: a, on: r, emit: n } = e;
			  a({ virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } });
			  const o = i();
			  s.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] };
			  const l = o.createElement("div");
			  function d(e, t) {
					const i = s.params.virtual;
					if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
					let a;
					return (
						 i.renderSlide ? ((a = i.renderSlide.call(s, e, t)), "string" == typeof a && ((l.innerHTML = a), (a = l.children[0]))) : (a = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass)),
						 a.setAttribute("data-swiper-slide-index", t),
						 i.renderSlide || (a.innerHTML = e),
						 i.cache && (s.virtual.cache[t] = a),
						 a
					);
			  }
			  function c(e) {
					const { slidesPerView: t, slidesPerGroup: i, centeredSlides: a, loop: r } = s.params,
						 { addSlidesBefore: o, addSlidesAfter: l } = s.params.virtual,
						 { from: c, to: p, slides: u, slidesGrid: m, offset: f } = s.virtual;
					s.params.cssMode || s.updateActiveIndex();
					const g = s.activeIndex || 0;
					let v, b, w;
					(v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"), a ? ((b = Math.floor(t / 2) + i + l), (w = Math.floor(t / 2) + i + o)) : ((b = t + (i - 1) + l), (w = (r ? t : i) + o));
					let y = g - w,
						 x = g + b;
					r || ((y = Math.max(y, 0)), (x = Math.min(x, u.length - 1)));
					let S = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
					function E() {
						 s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate");
					}
					if (
						 (r && g >= w ? ((y -= w), a || (S += s.slidesGrid[0])) : r && g < w && ((y = -w), a && (S += s.slidesGrid[0])),
						 Object.assign(s.virtual, { from: y, to: x, offset: S, slidesGrid: s.slidesGrid, slidesBefore: w, slidesAfter: b }),
						 c === y && p === x && !e)
					)
						 return (
							  s.slidesGrid !== m &&
									S !== f &&
									s.slides.forEach((e) => {
										 e.style[v] = S - Math.abs(s.cssOverflowAdjustment()) + "px";
									}),
							  s.updateProgress(),
							  void n("virtualUpdate")
						 );
					if (s.params.virtual.renderExternal)
						 return (
							  s.params.virtual.renderExternal.call(s, {
									offset: S,
									from: y,
									to: x,
									slides: (function () {
										 const e = [];
										 for (let t = y; t <= x; t += 1) e.push(u[t]);
										 return e;
									})(),
							  }),
							  void (s.params.virtual.renderExternalUpdate ? E() : n("virtualUpdate"))
						 );
					const T = [],
						 M = [],
						 C = (e) => {
							  let t = e;
							  return e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t;
						 };
					if (e)
						 s.slides
							  .filter((e) => e.matches(`.${s.params.slideClass}, swiper-slide`))
							  .forEach((e) => {
									e.remove();
							  });
					else
						 for (let e = c; e <= p; e += 1)
							  if (e < y || e > x) {
									const t = C(e);
									s.slides
										 .filter((e) => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))
										 .forEach((e) => {
											  e.remove();
										 });
							  }
					const L = r ? -u.length : 0,
						 P = r ? 2 * u.length : u.length;
					for (let t = L; t < P; t += 1)
						 if (t >= y && t <= x) {
							  const s = C(t);
							  void 0 === p || e ? M.push(s) : (t > p && M.push(s), t < c && T.push(s));
						 }
					if (
						 (M.forEach((e) => {
							  s.slidesEl.append(d(u[e], e));
						 }),
						 r)
					)
						 for (let e = T.length - 1; e >= 0; e -= 1) {
							  const t = T[e];
							  s.slidesEl.prepend(d(u[t], t));
						 }
					else
						 T.sort((e, t) => t - e),
							  T.forEach((e) => {
									s.slidesEl.prepend(d(u[e], e));
							  });
					h(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
						 e.style[v] = S - Math.abs(s.cssOverflowAdjustment()) + "px";
					}),
						 E();
			  }
			  r("beforeInit", () => {
					if (!s.params.virtual.enabled) return;
					let e;
					if (void 0 === s.passedParams.virtual.slides) {
						 const t = [...s.slidesEl.children].filter((e) => e.matches(`.${s.params.slideClass}, swiper-slide`));
						 t &&
							  t.length &&
							  ((s.virtual.slides = [...t]),
							  (e = !0),
							  t.forEach((e, t) => {
									e.setAttribute("data-swiper-slide-index", t), (s.virtual.cache[t] = e), e.remove();
							  }));
					}
					e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), (s.params.watchSlidesProgress = !0), (s.originalParams.watchSlidesProgress = !0), c();
			  }),
					r("setTranslate", () => {
						 s.params.virtual.enabled &&
							  (s.params.cssMode && !s._immediateVirtual
									? (clearTimeout(t),
									  (t = setTimeout(() => {
											c();
									  }, 100)))
									: c());
					}),
					r("init update resize", () => {
						 s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
					}),
					Object.assign(s.virtual, {
						 appendSlide: function (e) {
							  if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
							  else s.virtual.slides.push(e);
							  c(!0);
						 },
						 prependSlide: function (e) {
							  const t = s.activeIndex;
							  let i = t + 1,
									a = 1;
							  if (Array.isArray(e)) {
									for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
									(i = t + e.length), (a = e.length);
							  } else s.virtual.slides.unshift(e);
							  if (s.params.virtual.cache) {
									const e = s.virtual.cache,
										 t = {};
									Object.keys(e).forEach((s) => {
										 const i = e[s],
											  r = i.getAttribute("data-swiper-slide-index");
										 r && i.setAttribute("data-swiper-slide-index", parseInt(r, 10) + a), (t[parseInt(s, 10) + a] = i);
									}),
										 (s.virtual.cache = t);
							  }
							  c(!0), s.slideTo(i, 0);
						 },
						 removeSlide: function (e) {
							  if (null == e) return;
							  let t = s.activeIndex;
							  if (Array.isArray(e))
									for (let i = e.length - 1; i >= 0; i -= 1)
										 s.params.virtual.cache &&
											  (delete s.virtual.cache[e[i]],
											  Object.keys(s.virtual.cache).forEach((t) => {
													t > e && ((s.virtual.cache[t - 1] = s.virtual.cache[t]), s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t]);
											  })),
											  s.virtual.slides.splice(e[i], 1),
											  e[i] < t && (t -= 1),
											  (t = Math.max(t, 0));
							  else
									s.params.virtual.cache &&
										 (delete s.virtual.cache[e],
										 Object.keys(s.virtual.cache).forEach((t) => {
											  t > e && ((s.virtual.cache[t - 1] = s.virtual.cache[t]), s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t]);
										 })),
										 s.virtual.slides.splice(e, 1),
										 e < t && (t -= 1),
										 (t = Math.max(t, 0));
							  c(!0), s.slideTo(t, 0);
						 },
						 removeAllSlides: function () {
							  (s.virtual.slides = []), s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0);
						 },
						 update: c,
					});
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: a, emit: n } = e;
			  const o = i(),
					l = r();
			  function d(e) {
					if (!t.enabled) return;
					const { rtlTranslate: s } = t;
					let i = e;
					i.originalEvent && (i = i.originalEvent);
					const a = i.keyCode || i.charCode,
						 r = t.params.keyboard.pageUpDown,
						 d = r && 33 === a,
						 c = r && 34 === a,
						 p = 37 === a,
						 u = 39 === a,
						 m = 38 === a,
						 f = 40 === a;
					if (!t.allowSlideNext && ((t.isHorizontal() && u) || (t.isVertical() && f) || c)) return !1;
					if (!t.allowSlidePrev && ((t.isHorizontal() && p) || (t.isVertical() && m) || d)) return !1;
					if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || (o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase())))) {
						 if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || f)) {
							  let e = !1;
							  if (x(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === x(t.el, `.${t.params.slideActiveClass}`).length) return;
							  const i = t.el,
									a = i.clientWidth,
									r = i.clientHeight,
									n = l.innerWidth,
									o = l.innerHeight,
									d = b(i);
							  s && (d.left -= i.scrollLeft);
							  const c = [
									[d.left, d.top],
									[d.left + a, d.top],
									[d.left, d.top + r],
									[d.left + a, d.top + r],
							  ];
							  for (let t = 0; t < c.length; t += 1) {
									const s = c[t];
									if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
										 if (0 === s[0] && 0 === s[1]) continue;
										 e = !0;
									}
							  }
							  if (!e) return;
						 }
						 t.isHorizontal()
							  ? ((d || c || p || u) && (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), (((c || u) && !s) || ((d || p) && s)) && t.slideNext(), (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
							  : ((d || c || m || f) && (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), (c || f) && t.slideNext(), (d || m) && t.slidePrev()),
							  n("keyPress", a);
					}
			  }
			  function c() {
					t.keyboard.enabled || (o.addEventListener("keydown", d), (t.keyboard.enabled = !0));
			  }
			  function p() {
					t.keyboard.enabled && (o.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
			  }
			  (t.keyboard = { enabled: !1 }),
					s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
					a("init", () => {
						 t.params.keyboard.enabled && c();
					}),
					a("destroy", () => {
						 t.keyboard.enabled && p();
					}),
					Object.assign(t.keyboard, { enable: c, disable: p });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i, emit: a } = e;
			  const n = r();
			  let d;
			  s({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null, noMousewheelClass: "swiper-no-mousewheel" } }),
					(t.mousewheel = { enabled: !1 });
			  let c,
					p = l();
			  const u = [];
			  function m() {
					t.enabled && (t.mouseEntered = !0);
			  }
			  function f() {
					t.enabled && (t.mouseEntered = !1);
			  }
			  function h(e) {
					return (
						 !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
						 !(t.params.mousewheel.thresholdTime && l() - p < t.params.mousewheel.thresholdTime) &&
						 ((e.delta >= 6 && l() - p < 60) ||
							  (e.direction < 0 ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), a("scroll", e.raw)) : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), a("scroll", e.raw)),
							  (p = new n.Date().getTime()),
							  !1))
					);
			  }
			  function g(e) {
					let s = e,
						 i = !0;
					if (!t.enabled) return;
					if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
					const r = t.params.mousewheel;
					t.params.cssMode && s.preventDefault();
					let n = t.el;
					"container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
					const p = n && n.contains(s.target);
					if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
					s.originalEvent && (s = s.originalEvent);
					let m = 0;
					const f = t.rtlTranslate ? -1 : 1,
						 g = (function (e) {
							  let t = 0,
									s = 0,
									i = 0,
									a = 0;
							  return (
									"detail" in e && (s = e.detail),
									"wheelDelta" in e && (s = -e.wheelDelta / 120),
									"wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
									"wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
									"axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
									(i = 10 * t),
									(a = 10 * s),
									"deltaY" in e && (a = e.deltaY),
									"deltaX" in e && (i = e.deltaX),
									e.shiftKey && !i && ((i = a), (a = 0)),
									(i || a) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (a *= 40)) : ((i *= 800), (a *= 800))),
									i && !t && (t = i < 1 ? -1 : 1),
									a && !s && (s = a < 1 ? -1 : 1),
									{ spinX: t, spinY: s, pixelX: i, pixelY: a }
							  );
						 })(s);
					if (r.forceToAxis)
						 if (t.isHorizontal()) {
							  if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
							  m = -g.pixelX * f;
						 } else {
							  if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
							  m = -g.pixelY;
						 }
					else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * f : -g.pixelY;
					if (0 === m) return !0;
					r.invert && (m = -m);
					let v = t.getTranslate() + m * r.sensitivity;
					if (
						 (v >= t.minTranslate() && (v = t.minTranslate()),
						 v <= t.maxTranslate() && (v = t.maxTranslate()),
						 (i = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate())),
						 i && t.params.nested && s.stopPropagation(),
						 t.params.freeMode && t.params.freeMode.enabled)
					) {
						 const e = { time: l(), delta: Math.abs(m), direction: Math.sign(m) },
							  i = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
						 if (!i) {
							  c = void 0;
							  let n = t.getTranslate() + m * r.sensitivity;
							  const l = t.isBeginning,
									p = t.isEnd;
							  if (
									(n >= t.minTranslate() && (n = t.minTranslate()),
									n <= t.maxTranslate() && (n = t.maxTranslate()),
									t.setTransition(0),
									t.setTranslate(n),
									t.updateProgress(),
									t.updateActiveIndex(),
									t.updateSlidesClasses(),
									((!l && t.isBeginning) || (!p && t.isEnd)) && t.updateSlidesClasses(),
									t.params.loop && t.loopFix({ direction: e.direction < 0 ? "next" : "prev", byMousewheel: !0 }),
									t.params.freeMode.sticky)
							  ) {
									clearTimeout(d), (d = void 0), u.length >= 15 && u.shift();
									const s = u.length ? u[u.length - 1] : void 0,
										 i = u[0];
									if ((u.push(e), s && (e.delta > s.delta || e.direction !== s.direction))) u.splice(0);
									else if (u.length >= 15 && e.time - i.time < 500 && i.delta - e.delta >= 1 && e.delta <= 6) {
										 const s = m > 0 ? 0.8 : 0.2;
										 (c = e),
											  u.splice(0),
											  (d = o(() => {
													t.slideToClosest(t.params.speed, !0, void 0, s);
											  }, 0));
									}
									d ||
										 (d = o(() => {
											  (c = e), u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
										 }, 500));
							  }
							  if ((i || a("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate()))) return !0;
						 }
					} else {
						 const s = { time: l(), delta: Math.abs(m), direction: Math.sign(m), raw: e };
						 u.length >= 2 && u.shift();
						 const i = u.length ? u[u.length - 1] : void 0;
						 if (
							  (u.push(s),
							  i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && h(s) : h(s),
							  (function (e) {
									const s = t.params.mousewheel;
									if (e.direction < 0) {
										 if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
									} else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
									return !1;
							  })(s))
						 )
							  return !0;
					}
					return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
			  }
			  function v(e) {
					let s = t.el;
					"container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", g);
			  }
			  function b() {
					return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
			  }
			  function w() {
					return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
			  }
			  i("init", () => {
					!t.params.mousewheel.enabled && t.params.cssMode && w(), t.params.mousewheel.enabled && b();
			  }),
					i("destroy", () => {
						 t.params.cssMode && b(), t.mousewheel.enabled && w();
					}),
					Object.assign(t.mousewheel, { enable: b, disable: w });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i, emit: a } = e;
			  s({
					navigation: {
						 nextEl: null,
						 prevEl: null,
						 hideOnClick: !1,
						 disabledClass: "swiper-button-disabled",
						 hiddenClass: "swiper-button-hidden",
						 lockClass: "swiper-button-lock",
						 navigationDisabledClass: "swiper-navigation-disabled",
					},
			  }),
					(t.navigation = { nextEl: null, prevEl: null });
			  const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
			  function n(e) {
					let s;
					return e && "string" == typeof e && t.isElement && ((s = t.el.querySelector(e)), s)
						 ? s
						 : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))),
							e && !s ? e : s);
			  }
			  function o(e, s) {
					const i = t.params.navigation;
					(e = r(e)).forEach((e) => {
						 e && (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
					});
			  }
			  function l() {
					const { nextEl: e, prevEl: s } = t.navigation;
					if (t.params.loop) return o(s, !1), void o(e, !1);
					o(s, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind);
			  }
			  function d(e) {
					e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a("navigationPrev"));
			  }
			  function c(e) {
					e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"));
			  }
			  function p() {
					const e = t.params.navigation;
					if (((t.params.navigation = oe(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), !e.nextEl && !e.prevEl)) return;
					let s = n(e.nextEl),
						 i = n(e.prevEl);
					Object.assign(t.navigation, { nextEl: s, prevEl: i }), (s = r(s)), (i = r(i));
					const a = (s, i) => {
						 s && s.addEventListener("click", "next" === i ? c : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
					};
					s.forEach((e) => a(e, "next")), i.forEach((e) => a(e, "prev"));
			  }
			  function u() {
					let { nextEl: e, prevEl: s } = t.navigation;
					(e = r(e)), (s = r(s));
					const i = (e, s) => {
						 e.removeEventListener("click", "next" === s ? c : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "));
					};
					e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
			  }
			  i("init", () => {
					!1 === t.params.navigation.enabled ? m() : (p(), l());
			  }),
					i("toEdge fromEdge lock unlock", () => {
						 l();
					}),
					i("destroy", () => {
						 u();
					}),
					i("enable disable", () => {
						 let { nextEl: e, prevEl: s } = t.navigation;
						 (e = r(e)), (s = r(s)), t.enabled ? l() : [...e, ...s].filter((e) => !!e).forEach((e) => e.classList.add(t.params.navigation.lockClass));
					}),
					i("click", (e, s) => {
						 let { nextEl: i, prevEl: n } = t.navigation;
						 (i = r(i)), (n = r(n));
						 const o = s.target;
						 if (t.params.navigation.hideOnClick && !n.includes(o) && !i.includes(o)) {
							  if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
							  let e;
							  i.length ? (e = i[0].classList.contains(t.params.navigation.hiddenClass)) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
									a(!0 === e ? "navigationShow" : "navigationHide"),
									[...i, ...n].filter((e) => !!e).forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass));
						 }
					});
			  const m = () => {
					t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u();
			  };
			  Object.assign(t.navigation, {
					enable: () => {
						 t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), l();
					},
					disable: m,
					update: l,
					init: p,
					destroy: u,
			  });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i, emit: a } = e;
			  const r = "swiper-pagination";
			  let n;
			  s({
					pagination: {
						 el: null,
						 bulletElement: "span",
						 clickable: !1,
						 hideOnClick: !1,
						 renderBullet: null,
						 renderProgressbar: null,
						 renderFraction: null,
						 renderCustom: null,
						 progressbarOpposite: !1,
						 type: "bullets",
						 dynamicBullets: !1,
						 dynamicMainBullets: 1,
						 formatFractionCurrent: (e) => e,
						 formatFractionTotal: (e) => e,
						 bulletClass: `${r}-bullet`,
						 bulletActiveClass: `${r}-bullet-active`,
						 modifierClass: `${r}-`,
						 currentClass: `${r}-current`,
						 totalClass: `${r}-total`,
						 hiddenClass: `${r}-hidden`,
						 progressbarFillClass: `${r}-progressbar-fill`,
						 progressbarOppositeClass: `${r}-progressbar-opposite`,
						 clickableClass: `${r}-clickable`,
						 lockClass: `${r}-lock`,
						 horizontalClass: `${r}-horizontal`,
						 verticalClass: `${r}-vertical`,
						 paginationDisabledClass: `${r}-disabled`,
					},
			  }),
					(t.pagination = { el: null, bullets: [] });
			  let o = 0;
			  const l = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
			  function d() {
					return !t.params.pagination.el || !t.pagination.el || (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length);
			  }
			  function c(e, s) {
					const { bulletActiveClass: i } = t.params.pagination;
					e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${s}-${s}`));
			  }
			  function p(e) {
					const s = e.target.closest(le(t.params.pagination.bulletClass));
					if (!s) return;
					e.preventDefault();
					const i = y(s) * t.params.slidesPerGroup;
					if (t.params.loop) {
						 if (t.realIndex === i) return;
						 t.slideToLoop(i);
					} else t.slideTo(i);
			  }
			  function u() {
					const e = t.rtl,
						 s = t.params.pagination;
					if (d()) return;
					let i,
						 r,
						 p = t.pagination.el;
					p = l(p);
					const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
						 m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
					if (
						 (t.params.loop
							  ? ((r = t.previousRealIndex || 0), (i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex))
							  : void 0 !== t.snapIndex
							  ? ((i = t.snapIndex), (r = t.previousSnapIndex))
							  : ((r = t.previousIndex || 0), (i = t.activeIndex || 0)),
						 "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0)
					) {
						 const a = t.pagination.bullets;
						 let l, d, u;
						 if (
							  (s.dynamicBullets &&
									((n = E(a[0], t.isHorizontal() ? "width" : "height", !0)),
									p.forEach((e) => {
										 e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
									}),
									s.dynamicMainBullets > 1 && void 0 !== r && ((o += i - (r || 0)), o > s.dynamicMainBullets - 1 ? (o = s.dynamicMainBullets - 1) : o < 0 && (o = 0)),
									(l = Math.max(i - o, 0)),
									(d = l + (Math.min(a.length, s.dynamicMainBullets) - 1)),
									(u = (d + l) / 2)),
							  a.forEach((e) => {
									const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e) => `${s.bulletActiveClass}${e}`)].map((e) => ("string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
									e.classList.remove(...t);
							  }),
							  p.length > 1)
						 )
							  a.forEach((e) => {
									const a = y(e);
									a === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"),
										 s.dynamicBullets && (a >= l && a <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), a === l && c(e, "prev"), a === d && c(e, "next"));
							  });
						 else {
							  const e = a[i];
							  if (
									(e && e.classList.add(...s.bulletActiveClass.split(" ")),
									t.isElement &&
										 a.forEach((e, t) => {
											  e.setAttribute("part", t === i ? "bullet-active" : "bullet");
										 }),
									s.dynamicBullets)
							  ) {
									const e = a[l],
										 t = a[d];
									for (let e = l; e <= d; e += 1) a[e] && a[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
									c(e, "prev"), c(t, "next");
							  }
						 }
						 if (s.dynamicBullets) {
							  const i = Math.min(a.length, s.dynamicMainBullets + 4),
									r = (n * i - n) / 2 - u * n,
									o = e ? "right" : "left";
							  a.forEach((e) => {
									e.style[t.isHorizontal() ? o : "top"] = `${r}px`;
							  });
						 }
					}
					p.forEach((e, r) => {
						 if (
							  ("fraction" === s.type &&
									(e.querySelectorAll(le(s.currentClass)).forEach((e) => {
										 e.textContent = s.formatFractionCurrent(i + 1);
									}),
									e.querySelectorAll(le(s.totalClass)).forEach((e) => {
										 e.textContent = s.formatFractionTotal(m);
									})),
							  "progressbar" === s.type)
						 ) {
							  let a;
							  a = s.progressbarOpposite ? (t.isHorizontal() ? "vertical" : "horizontal") : t.isHorizontal() ? "horizontal" : "vertical";
							  const r = (i + 1) / m;
							  let n = 1,
									o = 1;
							  "horizontal" === a ? (n = r) : (o = r),
									e.querySelectorAll(le(s.progressbarFillClass)).forEach((e) => {
										 (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${o})`), (e.style.transitionDuration = `${t.params.speed}ms`);
									});
						 }
						 "custom" === s.type && s.renderCustom ? ((e.innerHTML = s.renderCustom(t, i + 1, m)), 0 === r && a("paginationRender", e)) : (0 === r && a("paginationRender", e), a("paginationUpdate", e)),
							  t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
					});
			  }
			  function m() {
					const e = t.params.pagination;
					if (d()) return;
					const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
					let i = t.pagination.el;
					i = l(i);
					let r = "";
					if ("bullets" === e.type) {
						 let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
						 t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
						 for (let s = 0; s < i; s += 1) e.renderBullet ? (r += e.renderBullet.call(t, s, e.bulletClass)) : (r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`);
					}
					"fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
						 "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`),
						 (t.pagination.bullets = []),
						 i.forEach((s) => {
							  "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(le(e.bulletClass)));
						 }),
						 "custom" !== e.type && a("paginationRender", i[0]);
			  }
			  function f() {
					t.params.pagination = oe(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
					const e = t.params.pagination;
					if (!e.el) return;
					let s;
					"string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)),
						 s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]),
						 s || (s = e.el),
						 s &&
							  0 !== s.length &&
							  (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && ((s = [...t.el.querySelectorAll(e.el)]), s.length > 1 && (s = s.filter((e) => x(e, ".swiper")[0] === t.el)[0])),
							  Array.isArray(s) && 1 === s.length && (s = s[0]),
							  Object.assign(t.pagination, { el: s }),
							  (s = l(s)),
							  s.forEach((s) => {
									"bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")),
										 s.classList.add(e.modifierClass + e.type),
										 s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
										 "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), (o = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
										 "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass),
										 e.clickable && s.addEventListener("click", p),
										 t.enabled || s.classList.add(e.lockClass);
							  }));
			  }
			  function h() {
					const e = t.params.pagination;
					if (d()) return;
					let s = t.pagination.el;
					s &&
						 ((s = l(s)),
						 s.forEach((s) => {
							  s.classList.remove(e.hiddenClass),
									s.classList.remove(e.modifierClass + e.type),
									s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
									e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", p));
						 })),
						 t.pagination.bullets && t.pagination.bullets.forEach((t) => t.classList.remove(...e.bulletActiveClass.split(" ")));
			  }
			  i("changeDirection", () => {
					if (!t.pagination || !t.pagination.el) return;
					const e = t.params.pagination;
					let { el: s } = t.pagination;
					(s = l(s)),
						 s.forEach((s) => {
							  s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
						 });
			  }),
					i("init", () => {
						 !1 === t.params.pagination.enabled ? g() : (f(), m(), u());
					}),
					i("activeIndexChange", () => {
						 void 0 === t.snapIndex && u();
					}),
					i("snapIndexChange", () => {
						 u();
					}),
					i("snapGridLengthChange", () => {
						 m(), u();
					}),
					i("destroy", () => {
						 h();
					}),
					i("enable disable", () => {
						 let { el: e } = t.pagination;
						 e && ((e = l(e)), e.forEach((e) => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
					}),
					i("lock unlock", () => {
						 u();
					}),
					i("click", (e, s) => {
						 const i = s.target,
							  r = l(t.pagination.el);
						 if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
							  if (t.navigation && ((t.navigation.nextEl && i === t.navigation.nextEl) || (t.navigation.prevEl && i === t.navigation.prevEl))) return;
							  const e = r[0].classList.contains(t.params.pagination.hiddenClass);
							  a(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e) => e.classList.toggle(t.params.pagination.hiddenClass));
						 }
					});
			  const g = () => {
					t.el.classList.add(t.params.pagination.paginationDisabledClass);
					let { el: e } = t.pagination;
					e && ((e = l(e)), e.forEach((e) => e.classList.add(t.params.pagination.paginationDisabledClass))), h();
			  };
			  Object.assign(t.pagination, {
					enable: () => {
						 t.el.classList.remove(t.params.pagination.paginationDisabledClass);
						 let { el: e } = t.pagination;
						 e && ((e = l(e)), e.forEach((e) => e.classList.remove(t.params.pagination.paginationDisabledClass))), f(), m(), u();
					},
					disable: g,
					render: m,
					update: u,
					init: f,
					destroy: h,
			  });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: a, emit: r } = e;
			  const l = i();
			  let d,
					c,
					p,
					u,
					m = !1,
					f = null,
					h = null;
			  function g() {
					if (!t.params.scrollbar.el || !t.scrollbar.el) return;
					const { scrollbar: e, rtlTranslate: s } = t,
						 { dragEl: i, el: a } = e,
						 r = t.params.scrollbar,
						 n = t.params.loop ? t.progressLoop : t.progress;
					let o = c,
						 l = (p - c) * n;
					s ? ((l = -l), l > 0 ? ((o = c - l), (l = 0)) : -l + c > p && (o = p + l)) : l < 0 ? ((o = c + l), (l = 0)) : l + c > p && (o = p - l),
						 t.isHorizontal() ? ((i.style.transform = `translate3d(${l}px, 0, 0)`), (i.style.width = `${o}px`)) : ((i.style.transform = `translate3d(0px, ${l}px, 0)`), (i.style.height = `${o}px`)),
						 r.hide &&
							  (clearTimeout(f),
							  (a.style.opacity = 1),
							  (f = setTimeout(() => {
									(a.style.opacity = 0), (a.style.transitionDuration = "400ms");
							  }, 1e3)));
			  }
			  function w() {
					if (!t.params.scrollbar.el || !t.scrollbar.el) return;
					const { scrollbar: e } = t,
						 { dragEl: s, el: i } = e;
					(s.style.width = ""),
						 (s.style.height = ""),
						 (p = t.isHorizontal() ? i.offsetWidth : i.offsetHeight),
						 (u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0))),
						 (c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10)),
						 t.isHorizontal() ? (s.style.width = `${c}px`) : (s.style.height = `${c}px`),
						 (i.style.display = u >= 1 ? "none" : ""),
						 t.params.scrollbar.hide && (i.style.opacity = 0),
						 t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass);
			  }
			  function y(e) {
					return t.isHorizontal() ? e.clientX : e.clientY;
			  }
			  function x(e) {
					const { scrollbar: s, rtlTranslate: i } = t,
						 { el: a } = s;
					let r;
					(r = (y(e) - b(a)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c)), (r = Math.max(Math.min(r, 1), 0)), i && (r = 1 - r);
					const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
					t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
			  }
			  function S(e) {
					const s = t.params.scrollbar,
						 { scrollbar: i, wrapperEl: a } = t,
						 { el: n, dragEl: o } = i;
					(m = !0),
						 (d = e.target === o ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null),
						 e.preventDefault(),
						 e.stopPropagation(),
						 (a.style.transitionDuration = "100ms"),
						 (o.style.transitionDuration = "100ms"),
						 x(e),
						 clearTimeout(h),
						 (n.style.transitionDuration = "0ms"),
						 s.hide && (n.style.opacity = 1),
						 t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
						 r("scrollbarDragStart", e);
			  }
			  function E(e) {
					const { scrollbar: s, wrapperEl: i } = t,
						 { el: a, dragEl: n } = s;
					m && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), x(e), (i.style.transitionDuration = "0ms"), (a.style.transitionDuration = "0ms"), (n.style.transitionDuration = "0ms"), r("scrollbarDragMove", e));
			  }
			  function T(e) {
					const s = t.params.scrollbar,
						 { scrollbar: i, wrapperEl: a } = t,
						 { el: n } = i;
					m &&
						 ((m = !1),
						 t.params.cssMode && ((t.wrapperEl.style["scroll-snap-type"] = ""), (a.style.transitionDuration = "")),
						 s.hide &&
							  (clearTimeout(h),
							  (h = o(() => {
									(n.style.opacity = 0), (n.style.transitionDuration = "400ms");
							  }, 1e3))),
						 r("scrollbarDragEnd", e),
						 s.snapOnRelease && t.slideToClosest());
			  }
			  function M(e) {
					const { scrollbar: s, params: i } = t,
						 a = s.el;
					if (!a) return;
					const r = a,
						 n = !!i.passiveListeners && { passive: !1, capture: !1 },
						 o = !!i.passiveListeners && { passive: !0, capture: !1 };
					if (!r) return;
					const d = "on" === e ? "addEventListener" : "removeEventListener";
					r[d]("pointerdown", S, n), l[d]("pointermove", E, n), l[d]("pointerup", T, o);
			  }
			  function C() {
					const { scrollbar: e, el: s } = t;
					t.params.scrollbar = oe(t, t.originalParams.scrollbar, t.params.scrollbar, { el: "swiper-scrollbar" });
					const i = t.params.scrollbar;
					if (!i.el) return;
					let a, r;
					if (("string" == typeof i.el && t.isElement && (a = t.el.querySelector(i.el)), a || "string" != typeof i.el)) a || (a = i.el);
					else if (((a = l.querySelectorAll(i.el)), !a.length)) return;
					t.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === s.querySelectorAll(i.el).length && (a = s.querySelector(i.el)),
						 a.length > 0 && (a = a[0]),
						 a.classList.add(t.isHorizontal() ? i.horizontalClass : i.verticalClass),
						 a && ((r = a.querySelector(le(t.params.scrollbar.dragClass))), r || ((r = v("div", t.params.scrollbar.dragClass)), a.append(r))),
						 Object.assign(e, { el: a, dragEl: r }),
						 i.draggable && t.params.scrollbar.el && t.scrollbar.el && M("on"),
						 a && a.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass));
			  }
			  function L() {
					const e = t.params.scrollbar,
						 s = t.scrollbar.el;
					s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && M("off");
			  }
			  s({
					scrollbar: {
						 el: null,
						 dragSize: "auto",
						 hide: !1,
						 draggable: !1,
						 snapOnRelease: !0,
						 lockClass: "swiper-scrollbar-lock",
						 dragClass: "swiper-scrollbar-drag",
						 scrollbarDisabledClass: "swiper-scrollbar-disabled",
						 horizontalClass: "swiper-scrollbar-horizontal",
						 verticalClass: "swiper-scrollbar-vertical",
					},
			  }),
					(t.scrollbar = { el: null, dragEl: null }),
					a("init", () => {
						 !1 === t.params.scrollbar.enabled ? P() : (C(), w(), g());
					}),
					a("update resize observerUpdate lock unlock", () => {
						 w();
					}),
					a("setTranslate", () => {
						 g();
					}),
					a("setTransition", (e, s) => {
						 !(function (e) {
							  t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
						 })(s);
					}),
					a("enable disable", () => {
						 const { el: e } = t.scrollbar;
						 e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass));
					}),
					a("destroy", () => {
						 L();
					});
			  const P = () => {
					t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), L();
			  };
			  Object.assign(t.scrollbar, {
					enable: () => {
						 t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), C(), w(), g();
					},
					disable: P,
					updateSize: w,
					setTranslate: g,
					init: C,
					destroy: L,
			  });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({ parallax: { enabled: !1 } });
			  const a = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
					r = (e, s) => {
						 const { rtl: i } = t,
							  a = i ? -1 : 1,
							  r = e.getAttribute("data-swiper-parallax") || "0";
						 let n = e.getAttribute("data-swiper-parallax-x"),
							  o = e.getAttribute("data-swiper-parallax-y");
						 const l = e.getAttribute("data-swiper-parallax-scale"),
							  d = e.getAttribute("data-swiper-parallax-opacity"),
							  c = e.getAttribute("data-swiper-parallax-rotate");
						 if (
							  (n || o ? ((n = n || "0"), (o = o || "0")) : t.isHorizontal() ? ((n = r), (o = "0")) : ((o = r), (n = "0")),
							  (n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * a + "%" : n * s * a + "px"),
							  (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
							  null != d)
						 ) {
							  const t = d - (d - 1) * (1 - Math.abs(s));
							  e.style.opacity = t;
						 }
						 let p = `translate3d(${n}, ${o}, 0px)`;
						 if (null != l) {
							  p += ` scale(${l - (l - 1) * (1 - Math.abs(s))})`;
						 }
						 if (c && null != c) {
							  p += ` rotate(${c * s * -1}deg)`;
						 }
						 e.style.transform = p;
					},
					n = () => {
						 const { el: e, slides: s, progress: i, snapGrid: n, isElement: o } = t,
							  l = h(e, a);
						 t.isElement && l.push(...h(t.hostEl, a)),
							  l.forEach((e) => {
									r(e, i);
							  }),
							  s.forEach((e, s) => {
									let o = e.progress;
									t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(s / 2) - i * (n.length - 1)),
										 (o = Math.min(Math.max(o, -1), 1)),
										 e.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`).forEach((e) => {
											  r(e, o);
										 });
							  });
					};
			  i("beforeInit", () => {
					t.params.parallax.enabled && ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
			  }),
					i("init", () => {
						 t.params.parallax.enabled && n();
					}),
					i("setTranslate", () => {
						 t.params.parallax.enabled && n();
					}),
					i("setTransition", (e, s) => {
						 t.params.parallax.enabled &&
							  (function (e) {
									void 0 === e && (e = t.params.speed);
									const { el: s, hostEl: i } = t,
										 r = [...s.querySelectorAll(a)];
									t.isElement && r.push(...i.querySelectorAll(a)),
										 r.forEach((t) => {
											  let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
											  0 === e && (s = 0), (t.style.transitionDuration = `${s}ms`);
										 });
							  })(s);
					});
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i, emit: a } = e;
			  const n = r();
			  s({ zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), (t.zoom = { enabled: !1 });
			  let o,
					l,
					c = 1,
					p = !1;
			  const u = [],
					m = { originX: 0, originY: 0, slideEl: void 0, slideWidth: void 0, slideHeight: void 0, imageEl: void 0, imageWrapEl: void 0, maxRatio: 3 },
					f = {
						 isTouched: void 0,
						 isMoved: void 0,
						 currentX: void 0,
						 currentY: void 0,
						 minX: void 0,
						 minY: void 0,
						 maxX: void 0,
						 maxY: void 0,
						 width: void 0,
						 height: void 0,
						 startX: void 0,
						 startY: void 0,
						 touchesStart: {},
						 touchesCurrent: {},
					},
					g = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
			  let v = 1;
			  function w() {
					if (u.length < 2) return 1;
					const e = u[0].pageX,
						 t = u[0].pageY,
						 s = u[1].pageX,
						 i = u[1].pageY;
					return Math.sqrt((s - e) ** 2 + (i - t) ** 2);
			  }
			  function y(e) {
					const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
					return !!e.target.matches(s) || t.slides.filter((t) => t.contains(e.target)).length > 0;
			  }
			  function S(e) {
					if (("mouse" === e.pointerType && u.splice(0, u.length), !y(e))) return;
					const s = t.params.zoom;
					if (((o = !1), (l = !1), u.push(e), !(u.length < 2))) {
						 if (((o = !0), (m.scaleStart = w()), !m.slideEl)) {
							  (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
							  let i = m.slideEl.querySelector(`.${s.containerClass}`);
							  if ((i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), (m.imageEl = i), (m.imageWrapEl = i ? x(m.imageEl, `.${s.containerClass}`)[0] : void 0), !m.imageWrapEl))
									return void (m.imageEl = void 0);
							  m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio;
						 }
						 if (m.imageEl) {
							  const [e, t] = (function () {
									if (u.length < 2) return { x: null, y: null };
									const e = m.imageEl.getBoundingClientRect();
									return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c];
							  })();
							  (m.originX = e), (m.originY = t), (m.imageEl.style.transitionDuration = "0ms");
						 }
						 p = !0;
					}
			  }
			  function E(e) {
					if (!y(e)) return;
					const s = t.params.zoom,
						 i = t.zoom,
						 a = u.findIndex((t) => t.pointerId === e.pointerId);
					a >= 0 && (u[a] = e),
						 u.length < 2 ||
							  ((l = !0),
							  (m.scaleMove = w()),
							  m.imageEl &&
									((i.scale = (m.scaleMove / m.scaleStart) * c),
									i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
									i.scale < s.minRatio && (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** 0.5),
									(m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`)));
			  }
			  function T(e) {
					if (!y(e)) return;
					if ("mouse" === e.pointerType && "pointerout" === e.type) return;
					const s = t.params.zoom,
						 i = t.zoom,
						 a = u.findIndex((t) => t.pointerId === e.pointerId);
					a >= 0 && u.splice(a, 1),
						 o &&
							  l &&
							  ((o = !1),
							  (l = !1),
							  m.imageEl &&
									((i.scale = Math.max(Math.min(i.scale, m.maxRatio), s.minRatio)),
									(m.imageEl.style.transitionDuration = `${t.params.speed}ms`),
									(m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
									(c = i.scale),
									(p = !1),
									i.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : i.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
									1 === i.scale && ((m.originX = 0), (m.originY = 0), (m.slideEl = void 0))));
			  }
			  function M(e) {
					if (
						 !y(e) ||
						 !(function (e) {
							  const s = `.${t.params.zoom.containerClass}`;
							  return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t) => t.contains(e.target)).length > 0;
						 })(e)
					)
						 return;
					const s = t.zoom;
					if (!m.imageEl) return;
					if (!f.isTouched || !m.slideEl) return;
					f.isMoved ||
						 ((f.width = m.imageEl.offsetWidth),
						 (f.height = m.imageEl.offsetHeight),
						 (f.startX = d(m.imageWrapEl, "x") || 0),
						 (f.startY = d(m.imageWrapEl, "y") || 0),
						 (m.slideWidth = m.slideEl.offsetWidth),
						 (m.slideHeight = m.slideEl.offsetHeight),
						 (m.imageWrapEl.style.transitionDuration = "0ms"));
					const i = f.width * s.scale,
						 a = f.height * s.scale;
					if (i < m.slideWidth && a < m.slideHeight) return;
					(f.minX = Math.min(m.slideWidth / 2 - i / 2, 0)),
						 (f.maxX = -f.minX),
						 (f.minY = Math.min(m.slideHeight / 2 - a / 2, 0)),
						 (f.maxY = -f.minY),
						 (f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX),
						 (f.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY);
					if ((Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (t.allowClick = !1), !f.isMoved && !p)) {
						 if (t.isHorizontal() && ((Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x) || (Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)))
							  return void (f.isTouched = !1);
						 if (!t.isHorizontal() && ((Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y) || (Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)))
							  return void (f.isTouched = !1);
					}
					e.cancelable && e.preventDefault(), e.stopPropagation(), (f.isMoved = !0);
					const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
						 { originX: n, originY: o } = m;
					(f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + r * (f.width - 2 * n)),
						 (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY + r * (f.height - 2 * o)),
						 f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
						 f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
						 f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
						 f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
						 g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
						 g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
						 g.prevTime || (g.prevTime = Date.now()),
						 (g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
						 (g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
						 Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
						 Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
						 (g.prevPositionX = f.touchesCurrent.x),
						 (g.prevPositionY = f.touchesCurrent.y),
						 (g.prevTime = Date.now()),
						 (m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
			  }
			  function C() {
					const e = t.zoom;
					m.slideEl &&
						 t.activeIndex !== t.slides.indexOf(m.slideEl) &&
						 (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
						 m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
						 m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
						 (e.scale = 1),
						 (c = 1),
						 (m.slideEl = void 0),
						 (m.imageEl = void 0),
						 (m.imageWrapEl = void 0),
						 (m.originX = 0),
						 (m.originY = 0));
			  }
			  function L(e) {
					const s = t.zoom,
						 i = t.params.zoom;
					if (!m.slideEl) {
						 e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)),
							  m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? (m.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0]) : (m.slideEl = t.slides[t.activeIndex]));
						 let s = m.slideEl.querySelector(`.${i.containerClass}`);
						 s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), (m.imageEl = s), (m.imageWrapEl = s ? x(m.imageEl, `.${i.containerClass}`)[0] : void 0);
					}
					if (!m.imageEl || !m.imageWrapEl) return;
					let a, r, o, l, d, p, u, g, v, w, y, S, E, T, M, C, L, P;
					t.params.cssMode && ((t.wrapperEl.style.overflow = "hidden"), (t.wrapperEl.style.touchAction = "none")),
						 m.slideEl.classList.add(`${i.zoomedSlideClass}`),
						 void 0 === f.touchesStart.x && e ? ((a = e.pageX), (r = e.pageY)) : ((a = f.touchesStart.x), (r = f.touchesStart.y));
					const A = "number" == typeof e ? e : null;
					1 === c && A && ((a = void 0), (r = void 0)),
						 (s.scale = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio),
						 (c = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio),
						 !e || (1 === c && A)
							  ? ((u = 0), (g = 0))
							  : ((L = m.slideEl.offsetWidth),
								 (P = m.slideEl.offsetHeight),
								 (o = b(m.slideEl).left + n.scrollX),
								 (l = b(m.slideEl).top + n.scrollY),
								 (d = o + L / 2 - a),
								 (p = l + P / 2 - r),
								 (v = m.imageEl.offsetWidth),
								 (w = m.imageEl.offsetHeight),
								 (y = v * s.scale),
								 (S = w * s.scale),
								 (E = Math.min(L / 2 - y / 2, 0)),
								 (T = Math.min(P / 2 - S / 2, 0)),
								 (M = -E),
								 (C = -T),
								 (u = d * s.scale),
								 (g = p * s.scale),
								 u < E && (u = E),
								 u > M && (u = M),
								 g < T && (g = T),
								 g > C && (g = C)),
						 A && 1 === s.scale && ((m.originX = 0), (m.originY = 0)),
						 (m.imageWrapEl.style.transitionDuration = "300ms"),
						 (m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`),
						 (m.imageEl.style.transitionDuration = "300ms"),
						 (m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`);
			  }
			  function P() {
					const e = t.zoom,
						 s = t.params.zoom;
					if (!m.slideEl) {
						 t.params.virtual && t.params.virtual.enabled && t.virtual ? (m.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0]) : (m.slideEl = t.slides[t.activeIndex]);
						 let e = m.slideEl.querySelector(`.${s.containerClass}`);
						 e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), (m.imageEl = e), (m.imageWrapEl = e ? x(m.imageEl, `.${s.containerClass}`)[0] : void 0);
					}
					m.imageEl &&
						 m.imageWrapEl &&
						 (t.params.cssMode && ((t.wrapperEl.style.overflow = ""), (t.wrapperEl.style.touchAction = "")),
						 (e.scale = 1),
						 (c = 1),
						 (m.imageWrapEl.style.transitionDuration = "300ms"),
						 (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
						 (m.imageEl.style.transitionDuration = "300ms"),
						 (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
						 m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
						 (m.slideEl = void 0),
						 (m.originX = 0),
						 (m.originY = 0));
			  }
			  function A(e) {
					const s = t.zoom;
					s.scale && 1 !== s.scale ? P() : L(e);
			  }
			  function I() {
					return { passiveListener: !!t.params.passiveListeners && { passive: !0, capture: !1 }, activeListenerWithCapture: !t.params.passiveListeners || { passive: !1, capture: !0 } };
			  }
			  function z() {
					const e = t.zoom;
					if (e.enabled) return;
					e.enabled = !0;
					const { passiveListener: s, activeListenerWithCapture: i } = I();
					t.wrapperEl.addEventListener("pointerdown", S, s),
						 t.wrapperEl.addEventListener("pointermove", E, i),
						 ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
							  t.wrapperEl.addEventListener(e, T, s);
						 }),
						 t.wrapperEl.addEventListener("pointermove", M, i);
			  }
			  function k() {
					const e = t.zoom;
					if (!e.enabled) return;
					e.enabled = !1;
					const { passiveListener: s, activeListenerWithCapture: i } = I();
					t.wrapperEl.removeEventListener("pointerdown", S, s),
						 t.wrapperEl.removeEventListener("pointermove", E, i),
						 ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
							  t.wrapperEl.removeEventListener(e, T, s);
						 }),
						 t.wrapperEl.removeEventListener("pointermove", M, i);
			  }
			  Object.defineProperty(t.zoom, "scale", {
					get: () => v,
					set(e) {
						 if (v !== e) {
							  const t = m.imageEl,
									s = m.slideEl;
							  a("zoomChange", e, t, s);
						 }
						 v = e;
					},
			  }),
					i("init", () => {
						 t.params.zoom.enabled && z();
					}),
					i("destroy", () => {
						 k();
					}),
					i("touchStart", (e, s) => {
						 t.zoom.enabled &&
							  (function (e) {
									const s = t.device;
									if (!m.imageEl) return;
									if (f.isTouched) return;
									s.android && e.cancelable && e.preventDefault(), (f.isTouched = !0);
									const i = u.length > 0 ? u[0] : e;
									(f.touchesStart.x = i.pageX), (f.touchesStart.y = i.pageY);
							  })(s);
					}),
					i("touchEnd", (e, s) => {
						 t.zoom.enabled &&
							  (function () {
									const e = t.zoom;
									if (!m.imageEl) return;
									if (!f.isTouched || !f.isMoved) return (f.isTouched = !1), void (f.isMoved = !1);
									(f.isTouched = !1), (f.isMoved = !1);
									let s = 300,
										 i = 300;
									const a = g.x * s,
										 r = f.currentX + a,
										 n = g.y * i,
										 o = f.currentY + n;
									0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (i = Math.abs((o - f.currentY) / g.y));
									const l = Math.max(s, i);
									(f.currentX = r), (f.currentY = o);
									const d = f.width * e.scale,
										 c = f.height * e.scale;
									(f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
										 (f.maxX = -f.minX),
										 (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
										 (f.maxY = -f.minY),
										 (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
										 (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
										 (m.imageWrapEl.style.transitionDuration = `${l}ms`),
										 (m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
							  })();
					}),
					i("doubleTap", (e, s) => {
						 !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && A(s);
					}),
					i("transitionEnd", () => {
						 t.zoom.enabled && t.params.zoom.enabled && C();
					}),
					i("slideChange", () => {
						 t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
					}),
					Object.assign(t.zoom, { enable: z, disable: k, in: L, out: P, toggle: A });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  function a(e, t) {
					const s = (function () {
						 let e, t, s;
						 return (i, a) => {
							  for (t = -1, e = i.length; e - t > 1; ) (s = (e + t) >> 1), i[s] <= a ? (t = s) : (e = s);
							  return e;
						 };
					})();
					let i, a;
					return (
						 (this.x = e),
						 (this.y = t),
						 (this.lastIndex = e.length - 1),
						 (this.interpolate = function (e) {
							  return e ? ((a = s(this.x, e)), (i = a - 1), ((e - this.x[i]) * (this.y[a] - this.y[i])) / (this.x[a] - this.x[i]) + this.y[i]) : 0;
						 }),
						 this
					);
			  }
			  function r() {
					t.controller.control && t.controller.spline && ((t.controller.spline = void 0), delete t.controller.spline);
			  }
			  s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
					(t.controller = { control: void 0 }),
					i("beforeInit", () => {
						 if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
							  const e = document.querySelector(t.params.controller.control);
							  if (e && e.swiper) t.controller.control = e.swiper;
							  else if (e) {
									const s = (i) => {
										 (t.controller.control = i.detail[0]), t.update(), e.removeEventListener("init", s);
									};
									e.addEventListener("init", s);
							  }
						 } else t.controller.control = t.params.controller.control;
					}),
					i("update", () => {
						 r();
					}),
					i("resize", () => {
						 r();
					}),
					i("observerUpdate", () => {
						 r();
					}),
					i("setTranslate", (e, s, i) => {
						 t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, i);
					}),
					i("setTransition", (e, s, i) => {
						 t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, i);
					}),
					Object.assign(t.controller, {
						 setTranslate: function (e, s) {
							  const i = t.controller.control;
							  let r, n;
							  const o = t.constructor;
							  function l(e) {
									if (e.destroyed) return;
									const s = t.rtlTranslate ? -t.translate : t.translate;
									"slide" === t.params.controller.by &&
										 (!(function (e) {
											  t.controller.spline = t.params.loop ? new a(t.slidesGrid, e.slidesGrid) : new a(t.snapGrid, e.snapGrid);
										 })(e),
										 (n = -t.controller.spline.interpolate(-s))),
										 (n && "container" !== t.params.controller.by) ||
											  ((r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate())), (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1), (n = (s - t.minTranslate()) * r + e.minTranslate())),
										 t.params.controller.inverse && (n = e.maxTranslate() - n),
										 e.updateProgress(n),
										 e.setTranslate(n, t),
										 e.updateActiveIndex(),
										 e.updateSlidesClasses();
							  }
							  if (Array.isArray(i)) for (let e = 0; e < i.length; e += 1) i[e] !== s && i[e] instanceof o && l(i[e]);
							  else i instanceof o && s !== i && l(i);
						 },
						 setTransition: function (e, s) {
							  const i = t.constructor,
									a = t.controller.control;
							  let r;
							  function n(s) {
									s.destroyed ||
										 (s.setTransition(e, t),
										 0 !== e &&
											  (s.transitionStart(),
											  s.params.autoHeight &&
													o(() => {
														 s.updateAutoHeight();
													}),
											  S(s.wrapperEl, () => {
													a && s.transitionEnd();
											  })));
							  }
							  if (Array.isArray(a)) for (r = 0; r < a.length; r += 1) a[r] !== s && a[r] instanceof i && n(a[r]);
							  else a instanceof i && s !== a && n(a);
						 },
					});
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({
					a11y: {
						 enabled: !0,
						 notificationClass: "swiper-notification",
						 prevSlideMessage: "Previous slide",
						 nextSlideMessage: "Next slide",
						 firstSlideMessage: "This is the first slide",
						 lastSlideMessage: "This is the last slide",
						 paginationBulletMessage: "Go to slide {{index}}",
						 slideLabelMessage: "{{index}} / {{slidesLength}}",
						 containerMessage: null,
						 containerRoleDescriptionMessage: null,
						 itemRoleDescriptionMessage: null,
						 slideRole: "group",
						 id: null,
					},
			  }),
					(t.a11y = { clicked: !1 });
			  let a = null;
			  function r(e) {
					const t = a;
					0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
			  }
			  const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
			  function o(e) {
					(e = n(e)).forEach((e) => {
						 e.setAttribute("tabIndex", "0");
					});
			  }
			  function l(e) {
					(e = n(e)).forEach((e) => {
						 e.setAttribute("tabIndex", "-1");
					});
			  }
			  function d(e, t) {
					(e = n(e)).forEach((e) => {
						 e.setAttribute("role", t);
					});
			  }
			  function c(e, t) {
					(e = n(e)).forEach((e) => {
						 e.setAttribute("aria-roledescription", t);
					});
			  }
			  function p(e, t) {
					(e = n(e)).forEach((e) => {
						 e.setAttribute("aria-label", t);
					});
			  }
			  function u(e) {
					(e = n(e)).forEach((e) => {
						 e.setAttribute("aria-disabled", !0);
					});
			  }
			  function m(e) {
					(e = n(e)).forEach((e) => {
						 e.setAttribute("aria-disabled", !1);
					});
			  }
			  function f(e) {
					if (13 !== e.keyCode && 32 !== e.keyCode) return;
					const s = t.params.a11y,
						 i = e.target;
					(t.pagination && t.pagination.el && (i === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(le(t.params.pagination.bulletClass))) ||
						 (t.navigation && t.navigation.nextEl && i === t.navigation.nextEl && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
						 t.navigation && t.navigation.prevEl && i === t.navigation.prevEl && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
						 t.pagination && i.matches(le(t.params.pagination.bulletClass)) && i.click());
			  }
			  function h() {
					return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
			  }
			  function g() {
					return h() && t.params.pagination.clickable;
			  }
			  const b = (e, t, s) => {
						 o(e),
							  "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", f)),
							  p(e, s),
							  (function (e, t) {
									(e = n(e)).forEach((e) => {
										 e.setAttribute("aria-controls", t);
									});
							  })(e, t);
					},
					w = () => {
						 t.a11y.clicked = !0;
					},
					x = () => {
						 requestAnimationFrame(() => {
							  requestAnimationFrame(() => {
									t.destroyed || (t.a11y.clicked = !1);
							  });
						 });
					},
					S = (e) => {
						 if (t.a11y.clicked) return;
						 const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
						 if (!s || !t.slides.includes(s)) return;
						 const i = t.slides.indexOf(s) === t.activeIndex,
							  a = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
						 i || a || (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) || (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0), t.slideTo(t.slides.indexOf(s), 0));
					},
					E = () => {
						 const e = t.params.a11y;
						 e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole);
						 const s = t.slides.length;
						 e.slideLabelMessage &&
							  t.slides.forEach((i, a) => {
									const r = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : a;
									p(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s));
							  });
					},
					T = () => {
						 const e = t.params.a11y;
						 t.el.append(a);
						 const s = t.el;
						 e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
						 const i = t.wrapperEl,
							  r = e.id || i.getAttribute("id") || `swiper-wrapper-${((o = 16), void 0 === o && (o = 16), "x".repeat(o).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`;
						 var o;
						 const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
						 var d;
						 (d = r),
							  n(i).forEach((e) => {
									e.setAttribute("id", d);
							  }),
							  (function (e, t) {
									(e = n(e)).forEach((e) => {
										 e.setAttribute("aria-live", t);
									});
							  })(i, l),
							  E();
						 let { nextEl: u, prevEl: m } = t.navigation ? t.navigation : {};
						 if (((u = n(u)), (m = n(m)), u && u.forEach((t) => b(t, r, e.nextSlideMessage)), m && m.forEach((t) => b(t, r, e.prevSlideMessage)), g())) {
							  (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e) => {
									e.addEventListener("keydown", f);
							  });
						 }
						 t.el.addEventListener("focus", S, !0), t.el.addEventListener("pointerdown", w, !0), t.el.addEventListener("pointerup", x, !0);
					};
			  i("beforeInit", () => {
					(a = v("span", t.params.a11y.notificationClass)), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true");
			  }),
					i("afterInit", () => {
						 t.params.a11y.enabled && T();
					}),
					i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
						 t.params.a11y.enabled && E();
					}),
					i("fromEdge toEdge afterInit lock unlock", () => {
						 t.params.a11y.enabled &&
							  (function () {
									if (t.params.loop || t.params.rewind || !t.navigation) return;
									const { nextEl: e, prevEl: s } = t.navigation;
									s && (t.isBeginning ? (u(s), l(s)) : (m(s), o(s))), e && (t.isEnd ? (u(e), l(e)) : (m(e), o(e)));
							  })();
					}),
					i("paginationUpdate", () => {
						 t.params.a11y.enabled &&
							  (function () {
									const e = t.params.a11y;
									h() &&
										 t.pagination.bullets.forEach((s) => {
											  t.params.pagination.clickable && (o(s), t.params.pagination.renderBullet || (d(s, "button"), p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))),
													s.matches(le(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current");
										 });
							  })();
					}),
					i("destroy", () => {
						 t.params.a11y.enabled &&
							  (function () {
									a && a.remove();
									let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
									(e = n(e)),
										 (s = n(s)),
										 e && e.forEach((e) => e.removeEventListener("keydown", f)),
										 s && s.forEach((e) => e.removeEventListener("keydown", f)),
										 g() &&
											  (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e) => {
													e.removeEventListener("keydown", f);
											  });
									t.el.removeEventListener("focus", S, !0), t.el.removeEventListener("pointerdown", w, !0), t.el.removeEventListener("pointerup", x, !0);
							  })();
					});
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({ history: { enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1 } });
			  let a = !1,
					n = {};
			  const o = (e) =>
						 e
							  .toString()
							  .replace(/\s+/g, "-")
							  .replace(/[^\w-]+/g, "")
							  .replace(/--+/g, "-")
							  .replace(/^-+/, "")
							  .replace(/-+$/, ""),
					l = (e) => {
						 const t = r();
						 let s;
						 s = e ? new URL(e) : t.location;
						 const i = s.pathname
									.slice(1)
									.split("/")
									.filter((e) => "" !== e),
							  a = i.length;
						 return { key: i[a - 2], value: i[a - 1] };
					},
					d = (e, s) => {
						 const i = r();
						 if (!a || !t.params.history.enabled) return;
						 let n;
						 n = t.params.url ? new URL(t.params.url) : i.location;
						 const l = t.slides[s];
						 let d = o(l.getAttribute("data-history"));
						 if (t.params.history.root.length > 0) {
							  let s = t.params.history.root;
							  "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), (d = `${s}/${e ? `${e}/` : ""}${d}`);
						 } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
						 t.params.history.keepQuery && (d += n.search);
						 const c = i.history.state;
						 (c && c.value === d) || (t.params.history.replaceState ? i.history.replaceState({ value: d }, null, d) : i.history.pushState({ value: d }, null, d));
					},
					c = (e, s, i) => {
						 if (s)
							  for (let a = 0, r = t.slides.length; a < r; a += 1) {
									const r = t.slides[a];
									if (o(r.getAttribute("data-history")) === s) {
										 const s = t.getSlideIndex(r);
										 t.slideTo(s, e, i);
									}
							  }
						 else t.slideTo(0, e, i);
					},
					p = () => {
						 (n = l(t.params.url)), c(t.params.speed, n.value, !1);
					};
			  i("init", () => {
					t.params.history.enabled &&
						 (() => {
							  const e = r();
							  if (t.params.history) {
									if (!e.history || !e.history.pushState) return (t.params.history.enabled = !1), void (t.params.hashNavigation.enabled = !0);
									(a = !0),
										 (n = l(t.params.url)),
										 n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p);
							  }
						 })();
			  }),
					i("destroy", () => {
						 t.params.history.enabled &&
							  (() => {
									const e = r();
									t.params.history.replaceState || e.removeEventListener("popstate", p);
							  })();
					}),
					i("transitionEnd _freeModeNoMomentumRelease", () => {
						 a && d(t.params.history.key, t.activeIndex);
					}),
					i("slideChange", () => {
						 a && t.params.cssMode && d(t.params.history.key, t.activeIndex);
					});
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, emit: a, on: n } = e,
					o = !1;
			  const l = i(),
					d = r();
			  s({
					hashNavigation: {
						 enabled: !1,
						 replaceState: !1,
						 watchState: !1,
						 getSlideIndex(e, s) {
							  if (t.virtual && t.params.virtual.enabled) {
									const e = t.slides.filter((e) => e.getAttribute("data-hash") === s)[0];
									if (!e) return 0;
									return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
							  }
							  return t.getSlideIndex(h(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0]);
						 },
					},
			  });
			  const c = () => {
						 a("hashChange");
						 const e = l.location.hash.replace("#", ""),
							  s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
						 if (e !== (s ? s.getAttribute("data-hash") : "")) {
							  const s = t.params.hashNavigation.getSlideIndex(t, e);
							  if (void 0 === s || Number.isNaN(s)) return;
							  t.slideTo(s);
						 }
					},
					p = () => {
						 if (!o || !t.params.hashNavigation.enabled) return;
						 const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
							  s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
						 t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), a("hashSet")) : ((l.location.hash = s || ""), a("hashSet"));
					};
			  n("init", () => {
					t.params.hashNavigation.enabled &&
						 (() => {
							  if (!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled)) return;
							  o = !0;
							  const e = l.location.hash.replace("#", "");
							  if (e) {
									const s = 0,
										 i = t.params.hashNavigation.getSlideIndex(t, e);
									t.slideTo(i || 0, s, t.params.runCallbacksOnInit, !0);
							  }
							  t.params.hashNavigation.watchState && d.addEventListener("hashchange", c);
						 })();
			  }),
					n("destroy", () => {
						 t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c);
					}),
					n("transitionEnd _freeModeNoMomentumRelease", () => {
						 o && p();
					}),
					n("slideChange", () => {
						 o && t.params.cssMode && p();
					});
		 },
		 function (e) {
			  let t,
					s,
					{ swiper: a, extendParams: r, on: n, emit: o, params: l } = e;
			  (a.autoplay = { running: !1, paused: !1, timeLeft: 0 }), r({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !1, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } });
			  let d,
					c,
					p,
					u,
					m,
					f,
					h,
					g,
					v = l && l.autoplay ? l.autoplay.delay : 3e3,
					b = l && l.autoplay ? l.autoplay.delay : 3e3,
					w = new Date().getTime();
			  function y(e) {
					a && !a.destroyed && a.wrapperEl && e.target === a.wrapperEl && (a.wrapperEl.removeEventListener("transitionend", y), g || C());
			  }
			  const x = () => {
						 if (a.destroyed || !a.autoplay.running) return;
						 a.autoplay.paused ? (c = !0) : c && ((b = d), (c = !1));
						 const e = a.autoplay.paused ? d : w + b - new Date().getTime();
						 (a.autoplay.timeLeft = e),
							  o("autoplayTimeLeft", e, e / v),
							  (s = requestAnimationFrame(() => {
									x();
							  }));
					},
					S = (e) => {
						 if (a.destroyed || !a.autoplay.running) return;
						 cancelAnimationFrame(s), x();
						 let i = void 0 === e ? a.params.autoplay.delay : e;
						 (v = a.params.autoplay.delay), (b = a.params.autoplay.delay);
						 const r = (() => {
							  let e;
							  if (((e = a.virtual && a.params.virtual.enabled ? a.slides.filter((e) => e.classList.contains("swiper-slide-active"))[0] : a.slides[a.activeIndex]), !e)) return;
							  return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
						 })();
						 !Number.isNaN(r) && r > 0 && void 0 === e && ((i = r), (v = r), (b = r)), (d = i);
						 const n = a.params.speed,
							  l = () => {
									a &&
										 !a.destroyed &&
										 (a.params.autoplay.reverseDirection
											  ? !a.isBeginning || a.params.loop || a.params.rewind
													? (a.slidePrev(n, !0, !0), o("autoplay"))
													: a.params.autoplay.stopOnLastSlide || (a.slideTo(a.slides.length - 1, n, !0, !0), o("autoplay"))
											  : !a.isEnd || a.params.loop || a.params.rewind
											  ? (a.slideNext(n, !0, !0), o("autoplay"))
											  : a.params.autoplay.stopOnLastSlide || (a.slideTo(0, n, !0, !0), o("autoplay")),
										 a.params.cssMode &&
											  ((w = new Date().getTime()),
											  requestAnimationFrame(() => {
													S();
											  })));
							  };
						 return (
							  i > 0
									? (clearTimeout(t),
									  (t = setTimeout(() => {
											l();
									  }, i)))
									: requestAnimationFrame(() => {
											l();
									  }),
							  i
						 );
					},
					E = () => {
						 (w = new Date().getTime()), (a.autoplay.running = !0), S(), o("autoplayStart");
					},
					T = () => {
						 (a.autoplay.running = !1), clearTimeout(t), cancelAnimationFrame(s), o("autoplayStop");
					},
					M = (e, s) => {
						 if (a.destroyed || !a.autoplay.running) return;
						 clearTimeout(t), e || (h = !0);
						 const i = () => {
							  o("autoplayPause"), a.params.autoplay.waitForTransition ? a.wrapperEl.addEventListener("transitionend", y) : C();
						 };
						 if (((a.autoplay.paused = !0), s)) return f && (d = a.params.autoplay.delay), (f = !1), void i();
						 const r = d || a.params.autoplay.delay;
						 (d = r - (new Date().getTime() - w)), (a.isEnd && d < 0 && !a.params.loop) || (d < 0 && (d = 0), i());
					},
					C = () => {
						 (a.isEnd && d < 0 && !a.params.loop) || a.destroyed || !a.autoplay.running || ((w = new Date().getTime()), h ? ((h = !1), S(d)) : S(), (a.autoplay.paused = !1), o("autoplayResume"));
					},
					L = () => {
						 if (a.destroyed || !a.autoplay.running) return;
						 const e = i();
						 "hidden" === e.visibilityState && ((h = !0), M(!0)), "visible" === e.visibilityState && C();
					},
					P = (e) => {
						 "mouse" === e.pointerType && ((h = !0), (g = !0), a.animating || a.autoplay.paused || M(!0));
					},
					A = (e) => {
						 "mouse" === e.pointerType && ((g = !1), a.autoplay.paused && C());
					};
			  n("init", () => {
					a.params.autoplay.enabled && (a.params.autoplay.pauseOnMouseEnter && (a.el.addEventListener("pointerenter", P), a.el.addEventListener("pointerleave", A)), i().addEventListener("visibilitychange", L), E());
			  }),
					n("destroy", () => {
						 a.el.removeEventListener("pointerenter", P), a.el.removeEventListener("pointerleave", A), i().removeEventListener("visibilitychange", L), a.autoplay.running && T();
					}),
					n("_freeModeStaticRelease", () => {
						 (u || h) && C();
					}),
					n("_freeModeNoMomentumRelease", () => {
						 a.params.autoplay.disableOnInteraction ? T() : M(!0, !0);
					}),
					n("beforeTransitionStart", (e, t, s) => {
						 !a.destroyed && a.autoplay.running && (s || !a.params.autoplay.disableOnInteraction ? M(!0, !0) : T());
					}),
					n("sliderFirstMove", () => {
						 !a.destroyed &&
							  a.autoplay.running &&
							  (a.params.autoplay.disableOnInteraction
									? T()
									: ((p = !0),
									  (u = !1),
									  (h = !1),
									  (m = setTimeout(() => {
											(h = !0), (u = !0), M(!0);
									  }, 200))));
					}),
					n("touchEnd", () => {
						 if (!a.destroyed && a.autoplay.running && p) {
							  if ((clearTimeout(m), clearTimeout(t), a.params.autoplay.disableOnInteraction)) return (u = !1), void (p = !1);
							  u && a.params.cssMode && C(), (u = !1), (p = !1);
						 }
					}),
					n("slideChange", () => {
						 !a.destroyed && a.autoplay.running && (f = !0);
					}),
					Object.assign(a.autoplay, { start: E, stop: T, pause: M, resume: C });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: a } = e;
			  s({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
			  let r = !1,
					n = !1;
			  function o() {
					const e = t.thumbs.swiper;
					if (!e || e.destroyed) return;
					const s = e.clickedIndex,
						 i = e.clickedSlide;
					if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
					if (null == s) return;
					let a;
					(a = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s), t.params.loop ? t.slideToLoop(a) : t.slideTo(a);
			  }
			  function l() {
					const { thumbs: e } = t.params;
					if (r) return !1;
					r = !0;
					const s = t.constructor;
					if (e.swiper instanceof s)
						 (t.thumbs.swiper = e.swiper),
							  Object.assign(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
							  Object.assign(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
							  t.thumbs.swiper.update();
					else if (c(e.swiper)) {
						 const i = Object.assign({}, e.swiper);
						 Object.assign(i, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (t.thumbs.swiper = new s(i)), (n = !0);
					}
					return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0;
			  }
			  function d(e) {
					const s = t.thumbs.swiper;
					if (!s || s.destroyed) return;
					const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
					let a = 1;
					const r = t.params.thumbs.slideThumbActiveClass;
					if (
						 (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView),
						 t.params.thumbs.multipleActiveThumbs || (a = 1),
						 (a = Math.floor(a)),
						 s.slides.forEach((e) => e.classList.remove(r)),
						 s.params.loop || (s.params.virtual && s.params.virtual.enabled))
					)
						 for (let e = 0; e < a; e += 1)
							  h(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e) => {
									e.classList.add(r);
							  });
					else for (let e = 0; e < a; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
					const n = t.params.thumbs.autoScrollOffset,
						 o = n && !s.params.loop;
					if (t.realIndex !== s.realIndex || o) {
						 const a = s.activeIndex;
						 let r, l;
						 if (s.params.loop) {
							  const e = s.slides.filter((e) => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`)[0];
							  (r = s.slides.indexOf(e)), (l = t.activeIndex > t.previousIndex ? "next" : "prev");
						 } else (r = t.realIndex), (l = r > t.previousIndex ? "next" : "prev");
						 o && (r += "next" === l ? n : -1 * n),
							  s.visibleSlidesIndexes &&
									s.visibleSlidesIndexes.indexOf(r) < 0 &&
									(s.params.centeredSlides ? (r = r > a ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1) : r > a && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0));
					}
			  }
			  (t.thumbs = { swiper: null }),
					a("beforeInit", () => {
						 const { thumbs: e } = t.params;
						 if (e && e.swiper)
							  if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
									const s = i(),
										 a = () => {
											  const i = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
											  if (i && i.swiper) (e.swiper = i.swiper), l(), d(!0);
											  else if (i) {
													const s = (a) => {
														 (e.swiper = a.detail[0]), i.removeEventListener("init", s), l(), d(!0), e.swiper.update(), t.update();
													};
													i.addEventListener("init", s);
											  }
											  return i;
										 },
										 r = () => {
											  if (t.destroyed) return;
											  a() || requestAnimationFrame(r);
										 };
									requestAnimationFrame(r);
							  } else l(), d(!0);
					}),
					a("slideChange update resize observerUpdate", () => {
						 d();
					}),
					a("setTransition", (e, s) => {
						 const i = t.thumbs.swiper;
						 i && !i.destroyed && i.setTransition(s);
					}),
					a("beforeDestroy", () => {
						 const e = t.thumbs.swiper;
						 e && !e.destroyed && n && e.destroy();
					}),
					Object.assign(t.thumbs, { init: l, update: d });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, emit: i, once: a } = e;
			  s({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02 } }),
					Object.assign(t, {
						 freeMode: {
							  onTouchStart: function () {
									if (t.params.cssMode) return;
									const e = t.getTranslate();
									t.setTranslate(e), t.setTransition(0), (t.touchEventsData.velocities.length = 0), t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
							  },
							  onTouchMove: function () {
									if (t.params.cssMode) return;
									const { touchEventsData: e, touches: s } = t;
									0 === e.velocities.length && e.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime }),
										 e.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: l() });
							  },
							  onTouchEnd: function (e) {
									let { currentPos: s } = e;
									if (t.params.cssMode) return;
									const { params: r, wrapperEl: n, rtlTranslate: o, snapGrid: d, touchEventsData: c } = t,
										 p = l() - c.touchStartTime;
									if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
									else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
									else {
										 if (r.freeMode.momentum) {
											  if (c.velocities.length > 1) {
													const e = c.velocities.pop(),
														 s = c.velocities.pop(),
														 i = e.position - s.position,
														 a = e.time - s.time;
													(t.velocity = i / a), (t.velocity /= 2), Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (a > 150 || l() - e.time > 300) && (t.velocity = 0);
											  } else t.velocity = 0;
											  (t.velocity *= r.freeMode.momentumVelocityRatio), (c.velocities.length = 0);
											  let e = 1e3 * r.freeMode.momentumRatio;
											  const s = t.velocity * e;
											  let p = t.translate + s;
											  o && (p = -p);
											  let u,
													m = !1;
											  const f = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
											  let h;
											  if (p < t.maxTranslate())
													r.freeMode.momentumBounce ? (p + t.maxTranslate() < -f && (p = t.maxTranslate() - f), (u = t.maxTranslate()), (m = !0), (c.allowMomentumBounce = !0)) : (p = t.maxTranslate()),
														 r.loop && r.centeredSlides && (h = !0);
											  else if (p > t.minTranslate())
													r.freeMode.momentumBounce ? (p - t.minTranslate() > f && (p = t.minTranslate() + f), (u = t.minTranslate()), (m = !0), (c.allowMomentumBounce = !0)) : (p = t.minTranslate()),
														 r.loop && r.centeredSlides && (h = !0);
											  else if (r.freeMode.sticky) {
													let e;
													for (let t = 0; t < d.length; t += 1)
														 if (d[t] > -p) {
															  e = t;
															  break;
														 }
													(p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1]), (p = -p);
											  }
											  if (
													(h &&
														 a("transitionEnd", () => {
															  t.loopFix();
														 }),
													0 !== t.velocity)
											  ) {
													if (((e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity)), r.freeMode.sticky)) {
														 const s = Math.abs((o ? -p : p) - t.translate),
															  i = t.slidesSizesGrid[t.activeIndex];
														 e = s < i ? r.speed : s < 2 * i ? 1.5 * r.speed : 2.5 * r.speed;
													}
											  } else if (r.freeMode.sticky) return void t.slideToClosest();
											  r.freeMode.momentumBounce && m
													? (t.updateProgress(u),
													  t.setTransition(e),
													  t.setTranslate(p),
													  t.transitionStart(!0, t.swipeDirection),
													  (t.animating = !0),
													  S(n, () => {
															t &&
																 !t.destroyed &&
																 c.allowMomentumBounce &&
																 (i("momentumBounce"),
																 t.setTransition(r.speed),
																 setTimeout(() => {
																	  t.setTranslate(u),
																			S(n, () => {
																				 t && !t.destroyed && t.transitionEnd();
																			});
																 }, 0));
													  }))
													: t.velocity
													? (i("_freeModeNoMomentumRelease"),
													  t.updateProgress(p),
													  t.setTransition(e),
													  t.setTranslate(p),
													  t.transitionStart(!0, t.swipeDirection),
													  t.animating ||
															((t.animating = !0),
															S(n, () => {
																 t && !t.destroyed && t.transitionEnd();
															})))
													: t.updateProgress(p),
													t.updateActiveIndex(),
													t.updateSlidesClasses();
										 } else {
											  if (r.freeMode.sticky) return void t.slideToClosest();
											  r.freeMode && i("_freeModeNoMomentumRelease");
										 }
										 (!r.freeMode.momentum || p >= r.longSwipesMs) && (i("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
									}
							  },
						 },
					});
		 },
		 function (e) {
			  let t,
					s,
					i,
					a,
					{ swiper: r, extendParams: n, on: o } = e;
			  n({ grid: { rows: 1, fill: "column" } });
			  const l = () => {
					let e = r.params.spaceBetween;
					return "string" == typeof e && e.indexOf("%") >= 0 ? (e = (parseFloat(e.replace("%", "")) / 100) * r.size) : "string" == typeof e && (e = parseFloat(e)), e;
			  };
			  o("init", () => {
					a = r.params.grid && r.params.grid.rows > 1;
			  }),
					o("update", () => {
						 const { params: e, el: t } = r,
							  s = e.grid && e.grid.rows > 1;
						 a && !s
							  ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), (i = 1), r.emitContainerClasses())
							  : !a && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()),
							  (a = s);
					}),
					(r.grid = {
						 initSlides: (e) => {
							  const { slidesPerView: a } = r.params,
									{ rows: n, fill: o } = r.params.grid,
									l = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
							  (i = Math.floor(l / n)), (t = Math.floor(l / n) === l / n ? l : Math.ceil(l / n) * n), "auto" !== a && "row" === o && (t = Math.max(t, a * n)), (s = t / n);
						 },
						 unsetSlides: () => {
							  r.slides &&
									r.slides.forEach((e) => {
										 e.swiperSlideGridSet && ((e.style.height = ""), (e.style[r.getDirectionLabel("margin-top")] = ""));
									});
						 },
						 updateSlide: (e, a, n) => {
							  const { slidesPerGroup: o } = r.params,
									d = l(),
									{ rows: c, fill: p } = r.params.grid,
									u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
							  let m, f, h;
							  if ("row" === p && o > 1) {
									const s = Math.floor(e / (o * c)),
										 i = e - c * o * s,
										 r = 0 === s ? o : Math.min(Math.ceil((u - s * c * o) / c), o);
									(h = Math.floor(i / r)), (f = i - h * r + s * o), (m = f + (h * t) / c), (a.style.order = m);
							  } else "column" === p ? ((f = Math.floor(e / c)), (h = e - f * c), (f > i || (f === i && h === c - 1)) && ((h += 1), h >= c && ((h = 0), (f += 1)))) : ((h = Math.floor(e / s)), (f = e - h * s));
							  (a.row = h), (a.column = f), (a.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`), (a.style[r.getDirectionLabel("margin-top")] = 0 !== h ? d && `${d}px` : ""), (a.swiperSlideGridSet = !0);
						 },
						 updateWrapperSize: (e, s) => {
							  const { centeredSlides: i, roundLengths: a } = r.params,
									n = l(),
									{ rows: o } = r.params.grid;
							  if (((r.virtualSize = (e + n) * t), (r.virtualSize = Math.ceil(r.virtualSize / o) - n), r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`), i)) {
									const e = [];
									for (let t = 0; t < s.length; t += 1) {
										 let i = s[t];
										 a && (i = Math.floor(i)), s[t] < r.virtualSize + s[0] && e.push(i);
									}
									s.splice(0, s.length), s.push(...e);
							  }
						 },
					});
		 },
		 function (e) {
			  let { swiper: t } = e;
			  Object.assign(t, { appendSlide: de.bind(t), prependSlide: ce.bind(t), addSlide: pe.bind(t), removeSlide: ue.bind(t), removeAllSlides: me.bind(t) });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({ fadeEffect: { crossFade: !1 } }),
					fe({
						 effect: "fade",
						 swiper: t,
						 on: i,
						 setTranslate: () => {
							  const { slides: e } = t;
							  t.params.fadeEffect;
							  for (let s = 0; s < e.length; s += 1) {
									const e = t.slides[s];
									let i = -e.swiperSlideOffset;
									t.params.virtualTranslate || (i -= t.translate);
									let a = 0;
									t.isHorizontal() || ((a = i), (i = 0));
									const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
										 n = he(0, e);
									(n.style.opacity = r), (n.style.transform = `translate3d(${i}px, ${a}px, 0px)`);
							  }
						 },
						 setTransition: (e) => {
							  const s = t.slides.map((e) => f(e));
							  s.forEach((t) => {
									t.style.transitionDuration = `${e}ms`;
							  }),
									ge({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
						 },
						 overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
					});
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
			  const a = (e, t, s) => {
					let i = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
						 a = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
					i || ((i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" "))), e.append(i)),
						 a || ((a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" "))), e.append(a)),
						 i && (i.style.opacity = Math.max(-t, 0)),
						 a && (a.style.opacity = Math.max(t, 0));
			  };
			  fe({
					effect: "cube",
					swiper: t,
					on: i,
					setTranslate: () => {
						 const { el: e, wrapperEl: s, slides: i, width: r, height: n, rtlTranslate: o, size: l, browser: d } = t,
							  c = t.params.cubeEffect,
							  p = t.isHorizontal(),
							  u = t.virtual && t.params.virtual.enabled;
						 let m,
							  f = 0;
						 c.shadow &&
							  (p
									? ((m = t.wrapperEl.querySelector(".swiper-cube-shadow")), m || ((m = v("div", "swiper-cube-shadow")), t.wrapperEl.append(m)), (m.style.height = `${r}px`))
									: ((m = e.querySelector(".swiper-cube-shadow")), m || ((m = v("div", "swiper-cube-shadow")), e.append(m))));
						 for (let e = 0; e < i.length; e += 1) {
							  const t = i[e];
							  let s = e;
							  u && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
							  let r = 90 * s,
									n = Math.floor(r / 360);
							  o && ((r = -r), (n = Math.floor(-r / 360)));
							  const d = Math.max(Math.min(t.progress, 1), -1);
							  let m = 0,
									h = 0,
									g = 0;
							  s % 4 == 0 ? ((m = 4 * -n * l), (g = 0)) : (s - 1) % 4 == 0 ? ((m = 0), (g = 4 * -n * l)) : (s - 2) % 4 == 0 ? ((m = l + 4 * n * l), (g = l)) : (s - 3) % 4 == 0 && ((m = -l), (g = 3 * l + 4 * l * n)),
									o && (m = -m),
									p || ((h = m), (m = 0));
							  const v = `rotateX(${p ? 0 : -r}deg) rotateY(${p ? r : 0}deg) translate3d(${m}px, ${h}px, ${g}px)`;
							  d <= 1 && d > -1 && ((f = 90 * s + 90 * d), o && (f = 90 * -s - 90 * d)), (t.style.transform = v), c.slideShadows && a(t, d, p);
						 }
						 if (((s.style.transformOrigin = `50% 50% -${l / 2}px`), (s.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`), c.shadow))
							  if (p) m.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`;
							  else {
									const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
										 t = 1.5 - (Math.sin((2 * e * Math.PI) / 360) / 2 + Math.cos((2 * e * Math.PI) / 360) / 2),
										 s = c.shadowScale,
										 i = c.shadowScale / t,
										 a = c.shadowOffset;
									m.style.transform = `scale3d(${s}, 1, ${i}) translate3d(0px, ${n / 2 + a}px, ${-n / 2 / i}px) rotateX(-90deg)`;
							  }
						 const h = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -l / 2 : 0;
						 (s.style.transform = `translate3d(0px,0,${h}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s.style.setProperty("--swiper-cube-translate-z", `${h}px`);
					},
					setTransition: (e) => {
						 const { el: s, slides: i } = t;
						 if (
							  (i.forEach((t) => {
									(t.style.transitionDuration = `${e}ms`),
										 t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t) => {
											  t.style.transitionDuration = `${e}ms`;
										 });
							  }),
							  t.params.cubeEffect.shadow && !t.isHorizontal())
						 ) {
							  const t = s.querySelector(".swiper-cube-shadow");
							  t && (t.style.transitionDuration = `${e}ms`);
						 }
					},
					recreateShadows: () => {
						 const e = t.isHorizontal();
						 t.slides.forEach((t) => {
							  const s = Math.max(Math.min(t.progress, 1), -1);
							  a(t, s, e);
						 });
					},
					getEffectParams: () => t.params.cubeEffect,
					perspective: () => !0,
					overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }),
			  });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
			  const a = (e, s) => {
					let i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
						 a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
					i || (i = ve("flip", e, t.isHorizontal() ? "left" : "top")), a || (a = ve("flip", e, t.isHorizontal() ? "right" : "bottom")), i && (i.style.opacity = Math.max(-s, 0)), a && (a.style.opacity = Math.max(s, 0));
			  };
			  fe({
					effect: "flip",
					swiper: t,
					on: i,
					setTranslate: () => {
						 const { slides: e, rtlTranslate: s } = t,
							  i = t.params.flipEffect;
						 for (let r = 0; r < e.length; r += 1) {
							  const n = e[r];
							  let o = n.progress;
							  t.params.flipEffect.limitRotation && (o = Math.max(Math.min(n.progress, 1), -1));
							  const l = n.swiperSlideOffset;
							  let d = -180 * o,
									c = 0,
									p = t.params.cssMode ? -l - t.translate : -l,
									u = 0;
							  t.isHorizontal() ? s && (d = -d) : ((u = p), (p = 0), (c = -d), (d = 0)), (n.style.zIndex = -Math.abs(Math.round(o)) + e.length), i.slideShadows && a(n, o);
							  const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
							  he(0, n).style.transform = m;
						 }
					},
					setTransition: (e) => {
						 const s = t.slides.map((e) => f(e));
						 s.forEach((t) => {
							  (t.style.transitionDuration = `${e}ms`),
									t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t) => {
										 t.style.transitionDuration = `${e}ms`;
									});
						 }),
							  ge({ swiper: t, duration: e, transformElements: s });
					},
					recreateShadows: () => {
						 t.params.flipEffect,
							  t.slides.forEach((e) => {
									let s = e.progress;
									t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), a(e, s);
							  });
					},
					getEffectParams: () => t.params.flipEffect,
					perspective: () => !0,
					overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
			  });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } }),
					fe({
						 effect: "coverflow",
						 swiper: t,
						 on: i,
						 setTranslate: () => {
							  const { width: e, height: s, slides: i, slidesSizesGrid: a } = t,
									r = t.params.coverflowEffect,
									n = t.isHorizontal(),
									o = t.translate,
									l = n ? e / 2 - o : s / 2 - o,
									d = n ? r.rotate : -r.rotate,
									c = r.depth;
							  for (let e = 0, t = i.length; e < t; e += 1) {
									const t = i[e],
										 s = a[e],
										 o = (l - t.swiperSlideOffset - s / 2) / s,
										 p = "function" == typeof r.modifier ? r.modifier(o) : o * r.modifier;
									let u = n ? d * p : 0,
										 m = n ? 0 : d * p,
										 f = -c * Math.abs(p),
										 h = r.stretch;
									"string" == typeof h && -1 !== h.indexOf("%") && (h = (parseFloat(r.stretch) / 100) * s);
									let g = n ? 0 : h * p,
										 v = n ? h * p : 0,
										 b = 1 - (1 - r.scale) * Math.abs(p);
									Math.abs(v) < 0.001 && (v = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(f) < 0.001 && (f = 0), Math.abs(u) < 0.001 && (u = 0), Math.abs(m) < 0.001 && (m = 0), Math.abs(b) < 0.001 && (b = 0);
									const w = `translate3d(${v}px,${g}px,${f}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${b})`;
									if (((he(0, t).style.transform = w), (t.style.zIndex = 1 - Math.abs(Math.round(p))), r.slideShadows)) {
										 let e = n ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
											  s = n ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
										 e || (e = ve("coverflow", t, n ? "left" : "top")), s || (s = ve("coverflow", t, n ? "right" : "bottom")), e && (e.style.opacity = p > 0 ? p : 0), s && (s.style.opacity = -p > 0 ? -p : 0);
									}
							  }
						 },
						 setTransition: (e) => {
							  t.slides
									.map((e) => f(e))
									.forEach((t) => {
										 (t.style.transitionDuration = `${e}ms`),
											  t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t) => {
													t.style.transitionDuration = `${e}ms`;
											  });
									});
						 },
						 perspective: () => !0,
						 overwriteParams: () => ({ watchSlidesProgress: !0 }),
					});
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({
					creativeEffect: {
						 limitProgress: 1,
						 shadowPerProgress: !1,
						 progressMultiplier: 1,
						 perspective: !0,
						 prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
						 next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
					},
			  });
			  const a = (e) => ("string" == typeof e ? e : `${e}px`);
			  fe({
					effect: "creative",
					swiper: t,
					on: i,
					setTranslate: () => {
						 const { slides: e, wrapperEl: s, slidesSizesGrid: i } = t,
							  r = t.params.creativeEffect,
							  { progressMultiplier: n } = r,
							  o = t.params.centeredSlides;
						 if (o) {
							  const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
							  s.style.transform = `translateX(calc(50% - ${e}px))`;
						 }
						 for (let s = 0; s < e.length; s += 1) {
							  const i = e[s],
									l = i.progress,
									d = Math.min(Math.max(i.progress, -r.limitProgress), r.limitProgress);
							  let c = d;
							  o || (c = Math.min(Math.max(i.originalProgress, -r.limitProgress), r.limitProgress));
							  const p = i.swiperSlideOffset,
									u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
									m = [0, 0, 0];
							  let f = !1;
							  t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
							  let h = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
							  d < 0 ? ((h = r.next), (f = !0)) : d > 0 && ((h = r.prev), (f = !0)),
									u.forEach((e, t) => {
										 u[t] = `calc(${e}px + (${a(h.translate[t])} * ${Math.abs(d * n)}))`;
									}),
									m.forEach((e, t) => {
										 m[t] = h.rotate[t] * Math.abs(d * n);
									}),
									(i.style.zIndex = -Math.abs(Math.round(l)) + e.length);
							  const g = u.join(", "),
									v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
									b = c < 0 ? `scale(${1 + (1 - h.scale) * c * n})` : `scale(${1 - (1 - h.scale) * c * n})`,
									w = c < 0 ? 1 + (1 - h.opacity) * c * n : 1 - (1 - h.opacity) * c * n,
									y = `translate3d(${g}) ${v} ${b}`;
							  if ((f && h.shadow) || !f) {
									let e = i.querySelector(".swiper-slide-shadow");
									if ((!e && h.shadow && (e = ve("creative", i)), e)) {
										 const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
										 e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
									}
							  }
							  const x = he(0, i);
							  (x.style.transform = y), (x.style.opacity = w), h.origin && (x.style.transformOrigin = h.origin);
						 }
					},
					setTransition: (e) => {
						 const s = t.slides.map((e) => f(e));
						 s.forEach((t) => {
							  (t.style.transitionDuration = `${e}ms`),
									t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
										 t.style.transitionDuration = `${e}ms`;
									});
						 }),
							  ge({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
					},
					perspective: () => t.params.creativeEffect.perspective,
					overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
			  });
		 },
		 function (e) {
			  let { swiper: t, extendParams: s, on: i } = e;
			  s({ cardsEffect: { slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }),
					fe({
						 effect: "cards",
						 swiper: t,
						 on: i,
						 setTranslate: () => {
							  const { slides: e, activeIndex: s, rtlTranslate: i } = t,
									a = t.params.cardsEffect,
									{ startTranslate: r, isTouched: n } = t.touchEventsData,
									o = i ? -t.translate : t.translate;
							  for (let l = 0; l < e.length; l += 1) {
									const d = e[l],
										 c = d.progress,
										 p = Math.min(Math.max(c, -4), 4);
									let u = d.swiperSlideOffset;
									t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
									let m = t.params.cssMode ? -u - t.translate : -u,
										 f = 0;
									const h = -100 * Math.abs(p);
									let g = 1,
										 v = -a.perSlideRotate * p,
										 b = a.perSlideOffset - 0.75 * Math.abs(p);
									const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
										 y = (w === s || w === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && o < r,
										 x = (w === s || w === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && o > r;
									if (y || x) {
										 const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
										 (v += -28 * p * e), (g += -0.5 * e), (b += 96 * e), (f = -25 * e * Math.abs(p) + "%");
									}
									if (((m = p < 0 ? `calc(${m}px ${i ? "-" : "+"} (${b * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${i ? "-" : "+"} (-${b * Math.abs(p)}%))` : `${m}px`), !t.isHorizontal())) {
										 const e = f;
										 (f = m), (m = e);
									}
									const S = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
										 E = `\n        translate3d(${m}, ${f}, ${h}px)\n        rotateZ(${a.rotate ? (i ? -v : v) : 0}deg)\n        scale(${S})\n      `;
									if (a.slideShadows) {
										 let e = d.querySelector(".swiper-slide-shadow");
										 e || (e = ve("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - 0.5) / 0.5, 0), 1));
									}
									d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
									he(0, d).style.transform = E;
							  }
						 },
						 setTransition: (e) => {
							  const s = t.slides.map((e) => f(e));
							  s.forEach((t) => {
									(t.style.transitionDuration = `${e}ms`),
										 t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
											  t.style.transitionDuration = `${e}ms`;
										 });
							  }),
									ge({ swiper: t, duration: e, transformElements: s });
						 },
						 perspective: () => !0,
						 overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
					});
		 },
	];
	return ne.use(be), ne;
})();

/* map start - подключение карты с реализацией её загрузки только когда доскроллили до секции: section-contacts */
/* ; (function () {
	var sectionContacts = document.querySelector('.section-contacts');

	var ymapInit = function () {
		if (typeof ymaps === 'undefined') {
			return;
		}

		ymaps.ready(function () {

			var ymap = document.querySelector('.contacts__map');
			var coordinates = ymap.getAttribute('data-coordinates');
			var address = ymap.getAttribute('data-address');

			var myMap = new ymaps.Map('ymap', {
				center: coordinates.split(','),
				zoom: 18
			}, {
				searchControlProvider: 'yandex#search'
			}),

				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					balloonContent: address
				}, {
					iconLayout: 'default#image',
					iconImageHref: pathForJS.siteUrl + 'images/head-slider/осень жизни.jpg',
					iconImageSize: [100, 70],
					iconImageOffset: [25, -55]
				});

			myMap.geoObjects.add(myPlacemark);

			myMap.behaviors.disable('scrollZoom');
		});
	};


	var ymapLoad = function () {
		var script = document.createElement('script');
		script.src = 'https://api-maps.yandex.ru/2.1/?lang=RU';
		myLib.body.appendChild(script);
		script.addEventListener('load', ymapInit);
	};


	var checkYmapInit = function () {
		var sectionContactsTop = sectionContacts.getBoundingClientRect().top;
		var scrollTop = window.pageYOffset;
		var sectionContactsOffsetTop = scrollTop + sectionContactsTop;

		if (scrollTop + window.innerHeight > sectionContactsOffsetTop) {
			ymapLoad();
			window.removeEventListener('scroll', checkYmapInit);
		}
	};


	window.addEventListener('scroll', checkYmapInit);
	checkYmapInit();
})(); */
/* map end */

console.log('vendors');