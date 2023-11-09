// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"WCGb":[function(require,module,exports) {
var define;
var global = arguments[3];
var _excluded = ["knobs"],
  _excluded2 = ["flow", "styles", "RTL", "position"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
  * @yaireo/knobs - UI knobs controllers for JS/CSS live manipulation of various parameters
  *
  * @version v1.3.6
  * @homepage https://github.com/yairEO/knobs
  */

/*! Knobs 1.3.6 MIT | https://github.com/yairEO/knobs */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Knobs = t();
}(this, function () {
  "use strict";

  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var t = {};
  /*! Color-Picker 0.12.0 MIT | https://github.com/yairEO/color-picker */
  !function (e, t) {
    !function (e) {
      var t = function t(e) {
          return new DOMParser().parseFromString(e.trim(), "text/html").body.firstElementChild;
        },
        o = {
          color: "white",
          onInput: function onInput(e) {
            return e;
          },
          onChange: function onChange(e) {
            return e;
          },
          buttons: {
            undo: {
              icon: "↶",
              title: "Undo"
            },
            format: {
              icon: "⇆",
              title: "Switch Color Format"
            },
            add: {
              icon: "+",
              title: "Add to Swatches"
            }
          }
        };
      var a = function a(e) {
          return e.match(/\((.*)\)/)[1].split(",").map(Number);
        },
        r = function r(e) {
          return Object.assign([0, 0, 0, 1], e.match(/\((.*)\)/)[1].split(",").map(function (e, t) {
            return 3 != t || e.includes("%") ? parseFloat(e) : 100 * parseFloat(e);
          }));
        },
        n = function n(e) {
          return "hsla(".concat(e.h, ", ").concat(e.s, "%, ").concat(e.l, "%, ").concat(e.a, "%)");
        },
        i = function i(e) {
          return e.toFixed(1).replace(".0", "");
        },
        s = function s(e) {
          var _ref = function (e) {
              return e.match(/\w\w/g);
            }(e),
            _ref2 = _slicedToArray(_ref, 4),
            t = _ref2[0],
            o = _ref2[1],
            a = _ref2[2],
            r = _ref2[3],
            _map = [t, o, a].map(function (e) {
              return parseInt(e, 16);
            }),
            _map2 = _slicedToArray(_map, 3),
            n = _map2[0],
            i = _map2[1],
            s = _map2[2];
          return "rgba(".concat(n, ",").concat(i, ",").concat(s, ",").concat(r ? (parseInt(r, 16) / 255).toFixed(2) : 1, ")");
        },
        l = function l(e) {
          var t,
            o = document.createElement("canvas").getContext("2d");
          return o.fillStyle = e, "#" == (t = o.fillStyle)[0] ? t : c(t);
        },
        c = function c(e) {
          var _a = a(e),
            _a2 = _slicedToArray(_a, 4),
            t = _a2[0],
            o = _a2[1],
            r = _a2[2],
            n = _a2[3],
            i = "#" + [t, o, r].map(function (e) {
              return e.toString(16).padStart(2, "0");
            }).join("");
          return 3 == e.length ? i : i + Math.round(255 * n).toString(16).padStart(2, "0");
        },
        h = function h(e) {
          var _a3 = a(e),
            _a4 = _slicedToArray(_a3, 4),
            t = _a4[0],
            o = _a4[1],
            r = _a4[2],
            n = _a4[3];
          t /= 255, o /= 255, r /= 255;
          var s = Math.max(t, o, r),
            l = Math.min(t, o, r),
            c = s - l,
            h = 0,
            d = 0,
            p = ((s + l) / 2).toPrecision(5);
          return c && (d = p > .5 ? c / (2 - s - l) : c / (s + l), h = s == t ? (o - r) / c + (o < r ? 6 : 0) : h = s == o ? (r - t) / c + 2 : (t - o) / c + 4, h /= 6), {
            h: i(360 * h),
            s: i(100 * d),
            l: i(100 * p),
            a: i(100 * n)
          };
        },
        d = function d(e, t) {
          return t = (t + "").toLowerCase(), e = l(e), "hex" == t ? e : t.startsWith("hsl") ? n(h(s(e))) : t.startsWith("rgb") ? s(e) : e;
        };
      function p(_ref3) {
        var e = _ref3.name,
          _ref3$min = _ref3.min,
          t = _ref3$min === void 0 ? 0 : _ref3$min,
          _ref3$max = _ref3.max,
          o = _ref3$max === void 0 ? 100 : _ref3$max,
          a = _ref3.value;
        return "<div class=\"range color-picker__".concat(e, "\" title=\"").concat(e, "\" style=\"--min:").concat(t, "; --max:").concat(o, ";\">\n            <input type=\"range\" name=\"").concat(e, "\" value=\"").concat(a, "\" min=\"").concat(t, "\" max=\"").concat(o, "\">\n            <output></output>\n            <div class='range__progress'></div>\n          </div>");
      }
      function b(e) {
        var _this$settings$button = this.settings.buttons,
          t = _this$settings$button.undo,
          o = _this$settings$button.format;
        return "\n    <div class='color-picker__value cp-checkboard'>\n      <input name='value' inputmode='decimal' placeholder='CSS Color' value='".concat(l(n(e)), "'>\n      <button title='").concat(t.title, "' name=\"undo\">").concat(t.icon, "</button>\n      <button title='").concat(o.title, "' name='format'>").concat(o.icon, "</button>\n      <div></div>\n    </div>\n  ");
      }
      function u(e, t) {
        var o = this.settings.buttons.add;
        return "\n    <div class='color-picker__swatches' style='--initial-len:".concat(t.length, "'>\n      <button name='addSwatch' title='").concat(o.title, "'>").concat(o.icon, "</button>\n      ").concat(e.map(function (e) {
          return g(e, t.includes(e));
        }).join(""), "\n    </div>\n  ");
      }
      function g(e, t) {
        return "<div class=\"cp-checkboard color-picker__swatch\" title=\"".concat(e, "\" style=\"--c:").concat(e, "\">").concat(t ? "" : '<button name="removeSwatch">&times;</button>', "</div>");
      }
      var v = Object.freeze({
        __proto__: null,
        scope: function scope() {
          var _this$color = this.color,
            e = _this$color.h,
            t = _this$color.s,
            o = _this$color.l,
            a = _this$color.a;
          return "\n    <div class='".concat("color-picker ".concat(this.settings.className || "").trim(), "'>\n      ").concat(p({
            name: "hue",
            value: e,
            max: "360"
          }), "\n      ").concat(p({
            name: "saturation",
            value: t
          }), "\n      ").concat(p({
            name: "lightness",
            value: o
          }), "\n      ").concat(p({
            name: "alpha",
            value: a
          }), "\n      <output></output>\n      ").concat(b.call(this, this.color), "\n      ").concat(this.swatches ? u.call(this, this.swatches, this.initialSwatches) : "", "\n    </div>\n  ");
        },
        slider: p,
        swatch: g,
        swatches: u,
        value: b
      });
      function f() {
        this.syncGlobalSwatchesWithLocal();
      }
      function m(e) {
        e.preventDefault();
        var _e$target = e.target,
          t = _e$target.value,
          o = _e$target.max,
          a = -1 * Math.sign(e.deltaY);
        t && o && (e.target.value = Math.min(Math.max(+t + a, 0), +o), x.call(this, e));
      }
      function k(e) {
        "Escape" == e.key && this.settings.onClickOutside(e);
      }
      function _(e) {
        this.DOM.scope.contains(e.target) || this.settings.onClickOutside(e);
      }
      function x(e) {
        var _e$target2 = e.target,
          t = _e$target2.name,
          o = _e$target2.value,
          a = _e$target2.type;
        "range" == a && this.setColor(_objectSpread(_objectSpread({}, this.color), {}, _defineProperty({}, t[0], +o)));
      }
      function y(e) {
        var t = e.target.type;
        "range" != t && "text" != t || (this.history.last = this.color);
      }
      function w(e) {
        this.setColor(this.getHSLA(e.target.value)), this.DOM.value.blur();
      }
      function S(e) {
        var _e$target3 = e.target,
          t = _e$target3.name,
          o = _e$target3.parentNode,
          a = _e$target3.classList,
          r = _e$target3.title;
        "format" == t ? this.swithFormat() : "undo" == t ? this.history.undo() : "addSwatch" == t ? this.addSwatch() : "removeSwatch" == t ? this.removeSwatch(o, o.title) : a.contains("color-picker__swatch") && r && (this.history.last = this.color, this.setColor(this.getHSLA(r)));
      }
      var C = Object.freeze({
        __proto__: null,
        bindEvents: function bindEvents() {
          var _this = this;
          [["scope", "input", x], ["scope", "change", y], ["scope", "click", S], ["scope", "wheel", m], ["value", "change", w]].forEach(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 3),
              e = _ref5[0],
              t = _ref5[1],
              o = _ref5[2];
            return _this.DOM[e].addEventListener(t, o.bind(_this), {
              pasive: !1
            });
          }), window.addEventListener("storage", f.bind(this)), this.settings.onClickOutside && (document.body.addEventListener("click", _.bind(this)), window.addEventListener("keydown", k.bind(this)));
        }
      });
      function z() {
        var _this2 = this;
        var e = function e() {
            return _this2.settings.onChange(_this2.CSSColor);
          },
          t = this.setColor.bind(this);
        return {
          _value: [this.color],
          get pop() {
            return this._value.pop();
          },
          get previous() {
            return this._value[this._value.length - 2];
          },
          set last(t) {
            this._value.push(t), e();
          },
          undo: function undo() {
            if (this._value.length > 1) {
              this.pop;
              var _o = this._value[this._value.length - 1];
              return t(_o), e(), _o;
            }
          }
        };
      }
      var $ = function $(e, t) {
          return e.some(function (e) {
            return l(e) == l(t);
          });
        },
        O = "@yaireo/color-picker/swatches";
      var M = Object.freeze({
        __proto__: null,
        addSwatch: function addSwatch() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.CSSColor;
          if ($(this.swatches, e)) return;
          var o = t(this.templates.swatch(e));
          o.classList.add("cp_remove"), this.DOM.swatches.prepend(o), setTimeout(function () {
            return o.classList.remove("cp_remove");
          }, 0), this.swatches.unshift(e), this.sharedSwatches.unshift(e), this.getSetGlobalSwatches(this.sharedSwatches);
        },
        getSetGlobalSwatches: function getSetGlobalSwatches(e) {
          var _localStorage;
          var t = this.settings.swatchesLocalStorage,
            o = "string" == typeof t ? t : "";
          return t && e && (localStorage.setItem(O + o, e.join(";")), dispatchEvent(new Event("storage"))), ((_localStorage = localStorage[O + o]) === null || _localStorage === void 0 ? void 0 : _localStorage.split(";").filter(String)) || [];
        },
        removeSwatch: function removeSwatch(e, t) {
          e.classList.add("cp_remove"), setTimeout(function () {
            return e.remove();
          }, 200);
          var o = function o(e) {
            return e != t;
          };
          this.swatches = this.swatches.filter(o), this.sharedSwatches = this.sharedSwatches.filter(o), this.getSetGlobalSwatches(this.sharedSwatches);
        },
        syncGlobalSwatchesWithLocal: function syncGlobalSwatchesWithLocal() {
          var _this3 = this;
          this.sharedSwatches = this.getSetGlobalSwatches(), this.swatches = this.sharedSwatches.concat(this.initialSwatches), this.DOM.swatches && setTimeout(function () {
            var e = t(_this3.templates.swatches.call(_this3, _this3.swatches, _this3.initialSwatches));
            _this3.DOM.swatches.replaceWith(e), _this3.DOM.swatches = e;
          }, 500);
        }
      });
      function T(e) {
        this.settings = Object.assign({}, o, e);
        var _this$settings = this.settings,
          t = _this$settings.color,
          a = _this$settings.defaultFormat,
          r = _this$settings.swatches;
        this.DOM = {}, this.sharedSwatches = this.getSetGlobalSwatches(), this.initialSwatches = r || [], this.swatches = r && this.sharedSwatches.concat(this.initialSwatches), this.color = d(t, a), this.history = z.call(this), this.init();
      }
      T.prototype = _objectSpread(_objectSpread(_objectSpread({
        templates: v
      }, M), C), {}, {
        getColorFormat: function getColorFormat(e) {
          return "#" == e[0] ? "hex" : e.indexOf("hsl") ? e.indexOf("rgb") ? "" : "rgba" : "hsla";
        },
        getHSLA: function getHSLA(e) {
          var t;
          if (e) return e + "" == "[object Object]" && Object.keys(e).join("").startsWith("hsl") ? e : (this.colorFormat = this.getColorFormat(e), e.indexOf("hsla") ? (e = l(e), e = s(e), t = h(e)) : (t = r(e), t = {
            h: t[0],
            s: t[1],
            l: t[2],
            a: t[3]
          }), t);
        },
        swithFormat: function swithFormat() {
          switch (this.colorFormat) {
            case "":
            case "hex":
              this.colorFormat = "rgba";
              break;
            case "rgba":
              this.colorFormat = "hsla";
              break;
            case "hsla":
              this.colorFormat = "hex";
          }
          this.setCSSColor(), this.DOM.value.value = this.CSSColor;
        },
        updateRangeSlider: function updateRangeSlider(e, t) {
          var o = this.DOM.scope.querySelector("input[name=\"".concat(e, "\"]"));
          o && (o.value = t, o.parentNode.style.setProperty("--value", t), o.parentNode.style.setProperty("--text-value", JSON.stringify("" + Math.round(t))), this.updateCSSVar(e, t));
        },
        setCSSColor: function setCSSColor() {
          this.CSSColor = l(n(this.color)), "rgba" == this.colorFormat ? this.CSSColor = s(this.CSSColor) : "hsla" == this.colorFormat && (this.CSSColor = n(this.color)), this.DOM.scope && this.DOM.scope.setAttribute("data-color-format", this.colorFormat), this.settings.onInput(this.CSSColor);
        },
        setColor: function setColor(e) {
          e && (e = this.getHSLA(e), this.color = e, this.setCSSColor(), this.DOM.scope && this.updateAllCSSVars(), this.DOM.value && (this.DOM.value.value = this.CSSColor));
        },
        updateCSSVar: function updateCSSVar(e, t) {
          this.DOM.scope.style.setProperty("--".concat(e), t);
        },
        updateAllCSSVars: function updateAllCSSVars() {
          var _this4 = this;
          var e = this.NamedHSLA(this.color);
          Object.entries(e).forEach(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
              e = _ref7[0],
              t = _ref7[1];
            _this4.updateRangeSlider(e, t);
          });
        },
        NamedHSLA: function NamedHSLA(e) {
          return {
            hue: e.h,
            saturation: e.s,
            lightness: e.l,
            alpha: e.a
          };
        },
        build: function build() {
          var e = this.templates.scope.call(this);
          this.DOM.scope = t(e), this.DOM.value = this.DOM.scope.querySelector('input[name="value"]'), this.DOM.swatches = this.DOM.scope.querySelector(".color-picker__swatches");
        },
        init: function init() {
          this.build(), this.setColor(this.color), this.bindEvents();
        }
      }), e.CSStoHSLA = r, e.HSLAtoCSS = n, e.any_to_hex = l, e.changeColorFormat = d, e.default = T, e.hex_rgba = s, e.rgba_hsla = h, Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }(t);
  }(0, t);
  var o = e(t);
  var a = function a(e) {
    var t,
      o = e.target,
      n = e.ref,
      i = e.offset,
      s = e.placement,
      l = e.prevPlacement,
      _e$useRaf = e.useRaf,
      c = _e$useRaf === void 0 ? !0 : _e$useRaf,
      h = e.track,
      d = {
        x: n.x,
        y: n.y,
        h: 0,
        w: 0
      },
      p = n && n.x ? _objectSpread({}, n) : {},
      b = document.documentElement,
      u = b.clientWidth,
      g = b.clientHeight,
      v = {
        w: o.clientWidth,
        h: o.clientHeight
      };
    if (r = c ? r : function (e) {
      return e();
    }, l = l || [], s = (s || " ").split(" ").map(function (e, t) {
      return e || ["center", "below"][t];
    }), i = i ? [i[0] || 0, i[1] || i[0] || 0] : [0, 0], n.parentNode && (t = n.ownerDocument.defaultView, p = n.getBoundingClientRect(), d.x = p.x, d.y = p.y, d.w = p.width, d.h = p.height, t != t.parent)) {
      var _iterator = _createForOfIteratorHelper(t.parent.document.getElementsByTagName("iframe")),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _k = _step.value;
          if (_k.contentWindow === t) {
            var _2 = _k.getBoundingClientRect();
            d.x += _2.x, d.y += _2.y;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    "left" == s[0] ? d.x -= v.w + i[0] : "right" == s[0] ? d.x += d.w + i[0] : d.x -= v.w / 2 - d.w / 2, "above" == s[1] ? d.y -= v.h + i[1] : "below" == s[1] ? d.y += d.h + i[1] : d.y -= v.h / 2 - d.h / 2;
    var f = {
        top: d.y < 0,
        bottom: d.y + v.h > g,
        left: d.x < 0,
        right: d.x + v.w > u
      },
      m = function m(t) {
        return a(_objectSpread(_objectSpread({}, e), {}, {
          placement: t.join(" "),
          prevPlacement: s
        }));
      };
    if (f.left && "right" != l[0]) return m(["right", s[1]]);
    if (f.right && "left" != l[0]) return m(["left", s[1]]);
    if (f.bottom && "above" != l[1]) return m([s[0], "above"]);
    if (f.top && "below" != l[1]) return m([s[0], "below"]);
    if (r(function () {
      o.setAttribute("positioned", !0), o.setAttribute("data-placement", s.join(" ")), o.setAttribute("data-pos-overflow", Object.entries(f).reduce(function (e, _ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
          t = _ref9[0],
          o = _ref9[1];
        return o ? "".concat(e, " ").concat(t) : e;
      }, "").trim()), [["pos-left", f.right ? u - v.w : d.x], ["pos-top", d.y], ["pos-target-width", v.w], ["pos-target-height", v.h], ["pos-ref-width", p.width || 0], ["pos-ref-height", p.height || 0], ["pos-ref-left", p.x], ["pos-ref-top", p.y], ["window-scroll-y", window.scrollY], ["window-scroll-x", window.scrollX]].forEach(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
          e = _ref11[0],
          t = _ref11[1];
        return o.style.setProperty("--" + e, Math.round(t));
      });
    }), h !== null && h !== void 0 && h.scroll && !o.position__trackedScroll) {
      function x(t) {
        t.target.contains(refElement) && a(e);
      }
      o.position__trackedScroll = !0, window.addEventListener("scroll", x, !0);
    }
    return {
      pos: d,
      placement: s
    };
  };
  var r = requestAnimationFrame || function (e) {
    return setTimeout(e, 1e3 / 60);
  };
  var n = function n(e) {
    return e + "" == "[object Object]";
  };
  var i = function i(e) {
    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }
    if (!t.length) return e;
    var o = t.shift();
    if (n(e) && n(o)) for (var _t in o) n(o[_t]) ? (e[_t] || Object.assign(e, _defineProperty({}, _t, {})), i(e[_t], o[_t])) : Object.assign(e, _defineProperty({}, _t, o[_t]));
    return i.apply(void 0, [e].concat(t));
  };
  var s = function s() {
    return Math.random().toString(36).slice(-6);
  };
  var l = "<div class='leversIcon'>\n  <div><b></b></div>\n  <div><b></b></div>\n  <div><b></b></div>\n</div>\n";
  function c(_ref12) {
    var _ref12$withToggler = _ref12.withToggler,
      e = _ref12$withToggler === void 0 ? !0 : _ref12$withToggler;
    var _this$settings2 = this.settings,
      t = _this$settings2.visible,
      o = _this$settings2.live,
      a = _this$settings2.theme;
    return "\n    <aside class='knobs' data-position='".concat(a.position, "' data-flow='").concat(a.flow, "'>\n      ").concat(e ? "<label title='Demo Settings' ".concat(2 == t ? "style='display:none'" : "", " for='knobsToggle'>").concat(l, "</label>") : "", "\n      <div class='knobs__bg'></div>\n      <form class='knobs__labels'>\n        <div class='knobs__groups'>\n          <!-- Knobs goes here -->\n        </div>\n        <section class='knobs__controls'>\n          ").concat(o ? "" : '<input type="submit" value="Apply">', "\n          <input type=\"reset\" value=\"\u21A9 Reset\" title=\"Reset to defaults\">\n          <a class='poweredBy' href='https://github.com/yairEO/knobs' target='_blank'>Get <em>Knobs</em></a>\n        </section>\n      </form>\n    </aside>\n  ");
  }
  function h(e) {
    return e.render && !e.label ? "<div class='knobs__knob ".concat(e.knobClass || "", "'>").concat(e.render, "</div>") : e ? "<div class='knobs__knob ".concat(e.knobClass || "", "' id=\"").concat(e.__name, "\">\n        <input type='checkbox' css-util-before data-for-knob='").concat(e.__name, "' ").concat(!1 === e.isToggled ? "" : "checked", " class='knobs__knob__toggle' title='Temporarily disable the knob' />\n        <label data-type='").concat(e.type || "", "' class='knobs__knob__label'>\n          ").concat(e.label ? "<div class='knobs__knob__label__text' title='".concat(e.labelTitle || "", "' ").concat(e.cssVar && e.cssVar[1] ? "data-units='".concat(e.cssVar[1].replace("-", ""), "'") : "", ">").concat(e.label, "</div>") : "", "\n          <div class='knobs__knob__inputWrap'>\n            ").concat(e.render ? e.render : d.call(this, e), "\n          </div>\n        </label>\n        <button type='button' name='").concat(e.__name, "' class='knobs__knob__reset' title='Reset'>\u21A9</button>\n      </div>\n    ") : void 0;
  }
  function d(e) {
    var _this5 = this;
    var t = e.label,
      o = e.type,
      a = e.step,
      r = e.min,
      n = e.max,
      i = e.value,
      s = e.name,
      l = e.options;
    return "range" == o ? "\n      <div class=\"range-slider\" style=\"--step:".concat(a || 1, "; --min:").concat(r, "; --max:").concat(n, "; --value:").concat(i, "; --text-value:'").concat(i, "'\">\n        <input type=\"range\" ").concat(this.knobAttrs(e), ">\n        <output></output>\n        <div class='range-slider__progress'></div>\n      </div>") : "checkbox" == o ? "\n      <div class=\"switch\">\n        <input type='".concat(o, "' ").concat(this.knobAttrs(e), " class=\"switch__input\">\n        <div class='switch__gfx'></div>\n      </div>") : "radio" == o && l !== null && l !== void 0 && l.length ? (e.name = e.name || t.toLowerCase().replaceAll(" ", "-"), l.map(function (t, o) {
      return "<label title=\"".concat(l[o].value, "\"><input type='radio' ").concat(_this5.knobAttrs(_objectSpread(_objectSpread({}, e), {}, {
        groupValue: e.value
      }, l[o])), "/><div>").concat(t.label, "</div></label>");
    }).join("")) : "select" == o && l !== null && l !== void 0 && l.length ? "\n      <select ".concat(this.knobAttrs(e), ">\n        ").concat(l.map(function (t) {
      return "<option ".concat((Array.isArray(t) ? t[0] : t) == e.value ? "selected" : "", " value='").concat(Array.isArray(t) ? t[0] : t, "'>").concat(Array.isArray(t) ? t[1] : t, "</option>");
    }), "\n      </select>") : ("color" == o && (o = "text"), "<div><input type='".concat(o, "' data-type='").concat(e.type, "' ").concat(this.knobAttrs(e), "></div>"));
  }
  var p = Object.freeze({
    __proto__: null,
    fieldset: function fieldset(e) {
      var t, o;
      if (n(e[0])) o = e;else {
        var _e;
        (_e = _toArray(e), t = _e[0], o = _e.slice(1)), t = function (_ref13) {
          var e = _ref13.label,
            t = _ref13.checked,
            o = _ref13.knobsCount;
          var a = e.replace(/ /g, "-") + Math.random().toString(36).slice(-6);
          return "<input hidden id=\"".concat(a, "\" type=\"checkbox\" ").concat(t ? "checked" : "", " class=\"toggleSection\">\n          <label class=\"knobs__legend\" ").concat(e && "data-has-label", " for=\"").concat(a, "\" title=\"Expand/Collapse\">\n            <div>\n              ").concat(e && "<span>".concat(e, "</span>"), "\n              <span class='knobs__legend__knobsCount' css-util-before>").concat(o, "</span>\n            </div>\n          </label>");
        }(_objectSpread(_objectSpread({}, t instanceof Array ? {
          label: t[0],
          checked: !!t[1]
        } : {
          label: t,
          checked: !0
        }), {}, {
          knobsCount: o.length
        }));
      }
      return "<fieldset ".concat(t ? "data-has-legend" : "", ">\n    ").concat(t || "", "\n    <div class=\"fieldset__group\">\n      <div class=\"fieldset__group__wrap\">\n        ").concat(o.map(h.bind(this)).join(""), "\n      </div>\n    </div>\n  </fieldset>");
    },
    knob: h,
    knobs: c,
    scope: function scope() {
      var e = this.settings.visible;
      return "\n    <input hidden type='checkbox' ".concat(e ? "checked" : "", " id='knobsToggle' />\n    ").concat(c.call(this, {}), "\n  ");
    }
  });
  var b = window.requestAnimationFrame || function (e) {
      return window.setTimeout(e, 1e3 / 60);
    },
    u = function u(e, t) {
      return e.classList.contains(t);
    };
  function g() {
    var e,
      t = this;
    new ResizeObserver(function (o) {
      clearTimeout(e), e = setTimeout(function () {
        t.setIframeProps();
      }, 500);
    }).observe(this.settings.appendTo);
  }
  var v = Object.freeze({
    __proto__: null,
    bindEvents: function bindEvents() {
      var _this6 = this;
      this.eventsRefs = this.eventsRefs || {
        change: function change(e) {
          e.target.dataset.name && this.onChange(e);
        },
        input: function input(e) {
          try {
            var _t2;
            u(e.target, "toggleSection") && e.target.checked && (_t2 = e.target.parentNode.querySelector(".fieldset__group"), this.setIframeProps({
              heightOffset: 9999
            }));
          } catch (e) {}
          e.target.hasAttribute("is-knob-input") ? (this.onInput(e), this.onChange(e)) : u(e.target, "knobs__knob__toggle") && this.toggleKnob(e.target.dataset.forKnob, e.target.checked);
        },
        transitionstart: function transitionstart(e) {
          u(e.target, "fieldset__group__wrap") && e.target.parentNode.setAttribute("transitioned", 1);
        },
        transitionend: function transitionend(e) {
          u(e.target, "fieldset__group__wrap") && (e.target.parentNode.removeAttribute("transitioned"), this.setIframeProps());
        },
        wheel: function wheel(e) {
          var _e$target4 = e.target,
            t = _e$target4.value,
            o = _e$target4.max,
            a = _e$target4.step,
            r = _e$target4.type,
            n = Math.sign(e.deltaY) * (+a || 1) * -1;
          "range" == r && e.preventDefault(), t && o && (e.target.value = Math.min(Math.max(+t + n, 0), +o), this.onInput(e), this.onChange(e));
        },
        mainToggler: function mainToggler(e) {
          this.toggle(e.target.checked);
        },
        reset: this.applyKnobs.bind(this, null, !0),
        submit: this.onSubmit.bind(this),
        click: this.onClick.bind(this),
        focusin: this.onFocus.bind(this)
      }, [["scope", "click"], ["form", "change"], ["form", "input"], ["form", "reset"], ["form", "submit"], ["form", "focusin"], ["form", "transitionend"], ["form", "transitionstart"], ["scope", "wheel"], ["mainToggler", "change", this.eventsRefs.mainToggler.bind(this)]].forEach(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 3),
          e = _ref15[0],
          t = _ref15[1],
          o = _ref15[2];
        return _this6.DOM[e] && _this6.DOM[e].addEventListener(t, o || _this6.eventsRefs[t].bind(_this6), {
          passive: !1
        });
      }), g.call(this);
    },
    onChange: function onChange(e, o) {
      var _this7 = this;
      var a = e.target.dataset.name;
      this.setKnobChangedFlag(this.getKnobElm(a));
      var r = this.getKnobDataByName(a),
        n = "input" == e.type && r && "range" != r.type,
        i = r && "checkbox" == r.type,
        s = {};
      if (!r) return void console.warn("Knob data was not found:", {
        name: a,
        knobData: r
      });
      var l = o ? [] : this.getSimilarKnobs(r);
      l.length && l.forEach(function (e) {
        var t = _this7.getInputByName(e.__name);
        t.value = r.value, _this7.onInput({
          target: t
        });
      }), (i || this.settings.live) && ("input" == e.type && n || (b(function () {
        return _this7.updateDOM(r);
      }), "color" === r.type && (s.hsla = t.CSStoHSLA(t.changeColorFormat(r.value, "HSL"))), "function" == typeof r.onChange && r.onChange(e, r, s)));
    },
    onClick: function onClick(e) {
      var _this8 = this;
      var t = e.target;
      u(t, "knobs__knob__reset") && this.resetKnobByName(t.name), "color" == t.dataset.type && setTimeout(function (e) {
        return _this8.toggleColorPicker(t);
      }, 100);
    },
    onFocus: function onFocus(e) {},
    onInput: function onInput(e) {
      var t = e.target,
        o = t.type,
        a = t.value,
        r = t.checked,
        n = t.dataset.name,
        i = "checkbox" == o,
        _this$getKnobDataByNa = this.getKnobDataByName(n),
        s = _this$getKnobDataByNa.label;
      this.setParentNodeValueVars(t), this.setKnobDataByName(n, i ? {
        checked: r
      } : {
        value: a
      }), null != a && s && this.setPersistedData();
    },
    onSubmit: function onSubmit(e) {
      var _this9 = this;
      e.preventDefault();
      var t = e.target.querySelectorAll("input[data-name]");
      return this.settings.live = !0, t.forEach(function (e) {
        return _this9.onChange({
          target: {
            value: e.value,
            type: e.type,
            dataset: {
              name: e.dataset.name
            }
          }
        });
      }), this.settings.live = !1, !1;
    }
  });
  var f = "@yaireo/knobs/knobs",
    m = function m(e) {
      return "string" == typeof e || "number" == typeof e;
    };
  var k = Object.freeze({
      __proto__: null,
      getPersistedData: function getPersistedData() {
        var e,
          t = this.settings.persist,
          o = m(t) ? "/" + t : "";
        if (1 == localStorage.getItem("".concat(f + o, "/v"))) try {
          e = JSON.parse(localStorage[f + o]);
        } catch (e) {}
        return e;
      },
      setPersistedData: function setPersistedData() {
        var e = this.settings.persist,
          t = m(e) ? "/" + e : "";
        if (e) {
          var _e2 = JSON.stringify(this.knobs);
          localStorage.setItem("".concat(f + t, "/v"), 1), localStorage.setItem(f + t, _e2), dispatchEvent(new Event("storage"));
        }
      }
    }),
    _ = {
      visible: 0,
      live: !0,
      theme: {
        flow: "horizontal",
        styles: "",
        RTL: !1,
        position: "top right",
        primaryColor: "#0366D6",
        "range-value-background": "#FFF",
        "base-color": "#000",
        textColor: "white",
        border: "none"
      }
    };
  function x(e) {
    if (!window.CSS || !CSS.supports("top", "var(--a)")) return this;
    var _ref16 = e || {},
      _ref16$knobs = _ref16.knobs,
      t = _ref16$knobs === void 0 ? [] : _ref16$knobs,
      o = _objectWithoutProperties(_ref16, _excluded);
    this.settings = i(_objectSpread(_objectSpread({}, _), {}, {
      appendTo: document.body
    }), o), i(this, function () {
      var e = document.createTextNode("");
      function t(t, o, a) {
        a && o.split(/\s+/g).forEach(function (o) {
          return e[t + "EventListener"].call(e, o, a);
        });
      }
      return {
        off: function off(e, o) {
          return t("remove", e, o), this;
        },
        on: function on(e, o) {
          return o && "function" == typeof o && t("add", e, o), this;
        },
        trigger: function trigger(t, o, a) {
          var r;
          if (a = a || {
            cloneData: !0
          }, t) {
            try {
              var n = "object" == _typeof(o) ? o : {
                value: o
              };
              if ((n = a.cloneData ? i({}, n) : n).knobs = this, o instanceof Object) for (var s in o) o[s] instanceof HTMLElement && (n[s] = o[s]);
              r = new CustomEvent(t, {
                detail: n
              });
            } catch (e) {
              console.warn(e);
            }
            e.dispatchEvent(r);
          }
        }
      };
    }()), this.knobs = t, this.DOM = {}, this.state = {}, this.build();
  }
  return x.prototype = _objectSpread(_objectSpread(_objectSpread({
    _types: ["range", "color", "checkbox", "text"]
  }, v), k), {}, {
    cloneKnobs: function cloneKnobs(e, t) {
      var _this10 = this;
      return e.map(function (e) {
        if (e && e.type) {
          var _e$label, _ref17, _ref18, _e$defaultValue, _e$defaultChecked, _e$isToggled;
          if (e.__name = e.__name || (((_e$label = e.label) === null || _e$label === void 0 ? void 0 : _e$label.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-").toLowerCase()) || "") + "-" + s(), e.defaultValue = (_ref17 = (_ref18 = (_e$defaultValue = e.defaultValue) !== null && _e$defaultValue !== void 0 ? _e$defaultValue : e.value) !== null && _ref18 !== void 0 ? _ref18 : _this10.getKnobValueFromCSSVar(e)) !== null && _ref17 !== void 0 ? _ref17 : "", e.defaultChecked = (_e$defaultChecked = e.defaultChecked) !== null && _e$defaultChecked !== void 0 ? _e$defaultChecked : !!e.checked, e.isToggled = (_e$isToggled = e.isToggled) !== null && _e$isToggled !== void 0 ? _e$isToggled : !0, t) {
            var _o2 = t.find(function (t) {
              return t.label && t.label == e.label;
            });
            if (_o2) return e.defaultValue && (_o2.defaultValue = e.defaultValue), e.options && (_o2.options = e.options), _o2;
          }
          "range" == e.type ? (e.value = +e.value || e.defaultValue, e.defaultValue = +e.defaultValue) : "checkbox" == e.type ? e.checked = e.checked || e.defaultChecked : e.value = e.value || e.defaultValue;
        }
        return e.render && (e.__name = "custom-" + s()), e.cssVar ? _objectSpread(_objectSpread({}, e), {}, {
          cssVar: _toConsumableArray(e.cssVar)
        }) : n(e) ? _objectSpread({}, e) : e;
      });
    },
    set knobs(e) {
      e && e instanceof Array && (this._knobs = this.cloneKnobs(e, this.getPersistedData()), this.DOM && this.render());
    },
    get knobs() {
      return this._knobs;
    },
    getCSSVariables: function getCSSVariables(_ref19) {
      var e = _ref19.flow,
        o = _ref19.styles,
        a = _ref19.RTL,
        r = _ref19.position,
        n = _objectWithoutProperties(_ref19, _excluded2);
      var i,
        s = "";
      this.settings.knobsToggle && (n["knobs-toggle"] = 1);
      var l = t.changeColorFormat(n["base-color"], "hsl"),
        c = t.CSStoHSLA(l);
      for (i in n["base-color"] = "".concat(c[0], ", ").concat(c[1], "%"), n["base-color-l"] = "".concat(c[2], "%"), n["base-color-a"] = "".concat(c[3], "%"), n) s += "--".concat(i, ":").concat(n[i], "; ");
      return s;
    },
    getKnobValueFromCSSVar: function getKnobValueFromCSSVar(e) {
      var t;
      if (!("value" in e) && e.cssVar && e.cssVar.length) {
        var _o3 = e.cssVar[2] || this.settings.CSSVarTarget;
        return _o3.length && (_o3 = _o3[0]), t = getComputedStyle(_o3).getPropertyValue("--".concat(e.cssVar[0])).trim(), "range" == e.type && (t = parseInt(t)), "color" != e.type || t || (t = "transparent"), t;
      }
    },
    templates: p,
    toggleColorPicker: function toggleColorPicker(e) {
      var t = e.value,
        r = e.dataset.name,
        n = this.getKnobDataByName(r),
        i = this;
      var s = e.colorPicker;
      if (s) return void s.DOM.scope.classList.remove("hidden");
      s = s || new o({
        defaultFormat: n.defaultFormat,
        color: t,
        className: "hidden",
        swatches: n.swatches || [],
        swatchesLocalStorage: !0,
        onClickOutside: function onClickOutside(t) {
          var o = s.DOM.scope.classList.contains("hidden");
          c.observe(document.body), h.observe(s.DOM.scope);
          var a = "add";
          t.target == e && (a = "toggle"), "Escape" == t.key && (a = "add"), o || (c.unobserve(document.body), h.unobserve(s.DOM.scope)), s.DOM.scope.classList[a]("hidden");
        },
        onInput: function onInput(t) {
          e.value = t, i.onInput({
            type: "input",
            target: e
          }), i.onChange({
            type: "change",
            target: e
          });
        }
      }), document.body.contains(s.DOM.scope) || (s.DOM.scope.insertAdjacentHTML("afterbegin", "<h1>".concat(n.label, "</h1>")), e.colorPicker = s, this.DOM.iframe.before(s.DOM.scope));
      var l = function l() {
          a({
            target: s.DOM.scope,
            ref: e
          });
        },
        c = new ResizeObserver(l),
        h = new IntersectionObserver(l, {
          root: document,
          threshold: 1
        });
      c.observe(document.body), h.observe(s.DOM.scope), l(), setTimeout(function () {
        s.DOM.scope.querySelector("input").focus(), s.DOM.scope.classList.remove("hidden");
      }, 100);
    },
    knobAttrs: function knobAttrs(e) {
      var t = "data-name=\"".concat(e.__name, "\" is-knob-input"),
        o = ["label", "type", "onchange", "options", "selected", "cssvar", "__name", "istoggled", "defaultchecked", "defaultvalue"];
      for (var a in "radio" === e.type && e.groupValue === e.value && (e.checked = !0), e) ("checked" != a || e[a]) && (o.includes(a.toLowerCase()) || (t += " ".concat(a, "=\"").concat(e[a], "\"")));
      return t;
    },
    getKnobDataByName: function getKnobDataByName(e) {
      return this.knobs.filter(Boolean).find(function (t) {
        return t.__name == e;
      });
    },
    setKnobDataByName: function setKnobDataByName(e, t) {
      if (e && t && n(t)) {
        var _o4 = this.getKnobDataByName(e);
        for (var _e3 in t) _o4[_e3] = +t[_e3] === t[_e3] ? +t[_e3] : t[_e3];
      }
    },
    getInputByName: function getInputByName(e) {
      var t = this.getKnobElm(e).querySelectorAll("[data-name=\"".concat(e, "\""));
      return t.length > 1 ? t : t[0];
    },
    getKnobElm: function getKnobElm(e) {
      return this.DOM.scope.querySelector("#".concat(e));
    },
    getSimilarKnobs: function getSimilarKnobs(e) {
      return this.knobs.filter(function (t) {
        var _t$cssVar, _t$cssVar2, _e$cssVar;
        return (t === null || t === void 0 || (_t$cssVar = t.cssVar) === null || _t$cssVar === void 0 ? void 0 : _t$cssVar[0]) && (t === null || t === void 0 || (_t$cssVar2 = t.cssVar) === null || _t$cssVar2 === void 0 ? void 0 : _t$cssVar2[0]) == (e === null || e === void 0 || (_e$cssVar = e.cssVar) === null || _e$cssVar === void 0 ? void 0 : _e$cssVar[0]) && t.__name != e.__name;
      });
    },
    setParentNodeValueVars: function setParentNodeValueVars(e) {
      e && [["--value", e.value], ["--text-value", JSON.stringify(e.value)]].forEach(function (_ref20) {
        var _ref21 = _slicedToArray(_ref20, 2),
          t = _ref21[0],
          o = _ref21[1];
        return e === null || e === void 0 ? void 0 : e.parentNode.style.setProperty(t, o);
      });
    },
    updateDOM: function updateDOM(_ref22) {
      var e = _ref22.cssVar,
        o = _ref22.value,
        a = _ref22.type,
        r = _ref22.isToggled,
        n = _ref22.cssVarsHSLA,
        i = _ref22.__name;
      if (e && e.length) {
        var _e4 = _slicedToArray(e, 3),
          s = _e4[0],
          l = _e4[1],
          c = _e4[2],
          h = c || this.settings.CSSVarTarget,
          d = this.getInputByName(i),
          p = "setProperty",
          b = [[s, o]];
        if (l && "-" != l[0] && (b[0][1] += l || ""), (!r || "checkbox" == a && d && !d.checked) && (p = "removeProperty"), "color" == a && n) {
          var _e5 = t.CSStoHSLA(t.changeColorFormat(o, "HSL"));
          b.push(["".concat(s, "-h"), _e5[0]], ["".concat(s, "-s"), _e5[1] + "%"], ["".concat(s, "-l"), _e5[2] + "%"], ["".concat(s, "-a"), _e5[3] + "%"]);
        }
        if (Object.prototype.toString.call(h).includes("Element") && (h = [h]), h && h.length && void 0 !== o && s) {
          var _iterator2 = _createForOfIteratorHelper(h),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _e6 = _step2.value;
              var _iterator3 = _createForOfIteratorHelper(b),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _step3$value = _slicedToArray(_step3.value, 2),
                    _t3 = _step3$value[0],
                    _o5 = _step3$value[1];
                  _e6.style[p]("--".concat(_t3), _o5);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    },
    applyKnobs: function applyKnobs(e, t) {
      var _this11 = this;
      (e || this.knobs).forEach(function (e) {
        if (e && e.__name && !e.render) {
          var o,
            a,
            r = function r(t) {
              return e.type == t;
            },
            n = _this11.getInputByName(e.__name),
            i = t ? "defaultValue" : "value",
            s = t ? "defaultChecked" : "checked";
          r("radio") && (n = _toConsumableArray(n), t ? (n = n.find(function (t) {
            return t.value == e[i];
          })).checked = !0 : n = n.find(function (e) {
            return e.checked;
          })), o = {
            target: n
          }, _this11.setParentNodeValueVars(n), e.type && !1 !== e.isToggled && (r("checkbox") ? (a = n.checked = !!e.checked, n.checked = e[s]) : a = n.value = e[i], _this11.setResetKnobTitle(e.__name, a), "" === n.value && n.value !== e[i] || (_this11.onInput(o), _this11.onChange(o, !0)), setTimeout(function () {
            r("checkbox") || (n.value = e[i]), r("color") && (n.title = n.value);
          }), _this11.setKnobChangedFlag(_this11.getKnobElm(e.__name), e.value != e.defaultValue));
        }
      });
    },
    setResetKnobTitle: function setResetKnobTitle(e, t) {
      try {
        t = "Reset to " + t, this.getKnobElm(e).querySelector(".knobs__knob__reset").title = t;
      } catch (e) {}
    },
    resetKnobByName: function resetKnobByName(e) {
      this.setKnobChangedFlag(this.getKnobElm(e), !1), this.applyKnobs([this.getKnobDataByName(e)], !0);
    },
    calculateGroupsHeights: function calculateGroupsHeights() {
      this.DOM.form.querySelectorAll(".fieldset__group__wrap").forEach(function (e) {
        e.style.setProperty("--height", e.clientHeight);
      });
    },
    setIframeProps: function setIframeProps(e) {
      var t = (0 == this.state.visible ? "remove" : "set") + "Property",
        o = this.DOM.iframe.style,
        _ref23 = e || {},
        _ref23$heightOffset = _ref23.heightOffset,
        a = _ref23$heightOffset === void 0 ? 0 : _ref23$heightOffset;
      "setProperty" == t && (o.setProperty("--knobsWidth", "2000px"), o.setProperty("--knobsHeight", "10000px"));
      var _this$DOM$scope = this.DOM.scope,
        r = _this$DOM$scope.clientWidth,
        n = _this$DOM$scope.clientHeight;
      o[t]("--knobsWidth", r + "px"), o[t]("--knobsHeight", +n + +a + "px");
    },
    toggle: function toggle(e) {
      this.DOM.mainToggler && (void 0 === e && (e = !this.DOM.mainToggler.checked), this.state.visible = e, this.DOM.mainToggler.checked = e, this.setIframeProps());
    },
    toggleKnob: function toggleKnob(e, t) {
      var o = this.getKnobDataByName(e),
        a = "checkbox" == o.type ? "checked" : "value",
        r = t ? "checked" == a ? o.checked : o.value : "checked" == a ? o.defaultChecked : o.value;
      o.isToggled = t, o[a] = r, this.updateDOM(o), "function" == typeof o.onChange && o.onChange(null, o), this.setPersistedData();
    },
    setKnobChangedFlag: function setKnobChangedFlag(e, t) {
      e && e[(0 == t ? "remove" : "set") + "Attribute"]("data-changed", !0);
    },
    build: function build() {
      if (this.settings.standalone) this.DOM.scope = (e = this.templates.knobs.call(this, {
        withToggler: !1
      }), new DOMParser().parseFromString(e.trim(), "text/html").body.firstElementChild);else {
        var _e7 = this.createIframe();
        this.DOM.scope = _e7.body.querySelector(".knobs"), this.DOM.groups = _e7.body.querySelector(".knobs__groups"), this.DOM.mainToggler = _e7.getElementById("knobsToggle");
      }
      var e;
      this.DOM.form = this.DOM.scope.querySelector("form"), this.render(), setTimeout(this.bindEvents.bind(this));
    },
    createIframe: function createIframe() {
      var e,
        t,
        o = this.settings.theme;
      return this.DOM.iframe = document.createElement("iframe"), this.DOM.iframe.setAttribute("class", "knobsIframe"), this.DOM.iframe.style.cssText = "\n        border: none;\n        position: fixed;\n        z-index: 999999;\n        ".concat((o.position + " ").split(" ").join(":0;"), "\n        width: var(--knobsWidth, 56px);\n        height: clamp(56px, var(--knobsHeight, 56px), 100%);\n    "), this.settings.appendTo.appendChild(this.DOM.iframe), (e = this.DOM.iframe.contentWindow.document).open(), e.write(this.templates.scope.call(this)), t = "\uFEFFlabel,button,input{cursor:pointer;font:12px Arial,sans-serif}body,form{padding:0;margin:0}[css-util-before]::before{content:\"\";opacity:.2;position:absolute;top:0;right:0;bottom:0;left:0}#knobsToggle+.knobs>label{--size: calc(var(--toggleSize)/2);--offset: calc(var(--toggleOffset));position:absolute;width:var(--size);height:var(--size);top:var(--offset);right:var(--offset);padding:calc((var(--toggleSize) - var(--size))/2);font-size:20px;line-height:1;z-index:1;color:var(--textColor)}#knobsToggle:not(:checked)+.knobs>label:hover+.knobs__bg{opacity:1;transform:scale(1.15)}#knobsToggle:checked+.knobs{display:inline-block}#knobsToggle:checked+.knobs>label{padding:0}#knobsToggle:checked+.knobs .knobs__bg{--corner-radius: 8px;--offset: calc(var(--corner-radius) * -1);top:var(--offset);right:var(--offset);bottom:var(--offset);left:var(--offset);border-radius:var(--corner-radius);margin:0;width:calc(100% + var(--corner-radius));height:calc(100% + var(--corner-radius));opacity:1;transition:.3s cubic-bezier(0.45, 0, 0.2, 1),margin .2s,border-radius .2s}#knobsToggle:checked+.knobs .knobs__labels{transform:none;transition:calc(var(--in-duration)*1s) var(--in-easing)}#knobsToggle:checked+.knobs .knobs__labels fieldset,#knobsToggle:checked+.knobs .knobs__labels .knobs__controls{transform:none;opacity:1;transition:calc(var(--in-duration)*1s) calc(var(--in-duration)*.5s) ease-out}html,body{overflow:hidden}.knobs{--background: hsla(var(--base-color), var(--base-color-l), var(--base-color-a));--opaqueColor-15: HSL(var(--base-color), calc(var(--base-color-l) + 15%));--range-track-color: var(--primaryColor);--knobs-gap: 3px;--side-pad: 12px;--toggleSize: 40px;--toggleOffset: 6px;--in-easing: cubic-bezier(.75,0,.35,1);--in-duration: .3;--color-size: 20px;--line-height: Max(0px, var(--color-size));--knobs-group-transition: .33s cubic-bezier(.45, 0, .2, 1);--LTR-Bool: 1;font:12px/1 \"Fira Sans Condensed\",sans-serif;color:var(--textColor);position:relative;overflow:hidden}.knobs[data-flow=compact]{--color-size: 16px}.knobs[data-flow=compact] label[data-type=range]{flex-flow:column;gap:var(--knobs-gap);padding-top:6px}.knobs[data-flow=compact] label[data-type=range] .range-slider{--thumb-size: 12px;--track-height: calc(var(--thumb-size)/2);width:100%}.knobs[data-flow=compact] label[data-type=range]~.knobs__knob__reset{align-self:flex-start;margin-top:.5ch}.knobs[data-flow=compact] label[data-type=range] .knobs__label__text{margin:0;padding:0}.knobs label{user-select:none;cursor:pointer}.knobs__bg{pointer-events:none;position:absolute;top:0;right:0;z-index:-1;margin:var(--toggleOffset);width:var(--toggleSize);height:var(--toggleSize);border-radius:50%;background:var(--background);opacity:.8;backdrop-filter:blur(8px);transition:120ms}.knobs__labels{display:flex;flex-flow:column;max-height:100%;border:var(--border);transform:translateX(calc(100.1% * var(--LTR-Bool)))}.knobs__labels fieldset{display:table;border:0;padding:0;margin:0;opacity:0;transform:translateX(calc(22% * var(--LTR-Bool)))}.knobs__labels fieldset:only-of-type>label{pointer-events:none}.knobs__labels fieldset:first-child:not([data-has-legend]){overflow:visible}.knobs__labels .fieldset__group[transition-done]{overflow:visible}.knobs__labels .fieldset__group__wrap{display:flex;flex-flow:column;gap:var(--knobs-gap);padding:var(--side-pad);transition:var(--knobs-group-transition)}.knobs__labels hr{border:0;border-top:1px solid var(--textColor);opacity:.25}.knobs__labels hr:last-of-type{margin-bottom:0}.knobs__labels label:not(.knobs__legend){order:5;flex:1;display:flex;position:relative;z-index:1}.knobs__labels .range-slider,.knobs__labels input[type=text]:not([size]),.knobs__labels input[type=number]:not([size]){min-width:200px}.knobs__labels label:not(.knobs__legend)>:last-child{width:100%;flex:1;text-align:right;align-self:center}.knobs__groups{flex:1;margin-top:calc(var(--side-pad)*2.5);overflow-y:scroll;scrollbar-width:none}.knobs__groups::-webkit-scrollbar{display:none}.knobs__groups>fieldset:first-child .knobs__knob:first-child .range-slider{--value-offset-y: 14px}.knobs__legend{display:flex;align-items:center;font-weight:700;opacity:.66;line-height:1.6;cursor:pointer;transition:.2s cubic-bezier(0.45, 0, 0.2, 1)}.knobs__legend[data-has-label]{gap:2ch}.knobs__legend[data-has-label]:hover{gap:4ch}.knobs__legend::before,.knobs__legend::after{content:\"\";height:1px;background:var(--textColor);flex:1;opacity:.5;transition:inherit}.knobs__legend:hover{opacity:.85}.knobs__legend>div{display:flex;align-items:center;gap:2ch}.knobs__legend__knobsCount{display:inline-block;border-radius:50%;width:1.5em;height:1.5em;line-height:1.6;font-size:.9em;text-align:center;overflow:hidden;position:relative;transition:var(--knobs-group-transition)}.knobs__legend__knobsCount::before{background:var(--textColor);opacity:.3}.knobs__legend__knobsCount:only-child{margin:0 2ch}.knobs .toggleSection:checked~.knobs__legend .knobs__legend__knobsCount{transform:scale(0);margin:0;width:0}.knobs .toggleSection:checked~.fieldset__group[transitioned]{overflow:hidden}.knobs .toggleSection:not(:checked)~.knobs__legend{margin-bottom:1em}.knobs .toggleSection:not(:checked)~.fieldset__group{overflow:hidden}.knobs .toggleSection:not(:checked)~.fieldset__group .fieldset__group__wrap{opacity:0;margin-top:calc(var(--height)*-1px);text-shadow:0px 3px 2px}.knobs[data-flow=compact] .knobs__knob__toggle{align-self:flex-start;margin-top:6px}.knobs__knob{display:flex;justify-content:flex-end;position:relative;line-height:var(--line-height);min-height:24px}.knobs__knob:hover .knobs__knob__label__text{opacity:1}.knobs__knob[data-changed] .knobs__knob__reset{opacity:.75;pointer-events:auto}.knobs__knob[data-changed] .knobs__knob__reset:hover{opacity:1;background:var(--textColor);color:var(--background);transition:0s}.knobs__knob__toggle{display:var(--knobs-toggle, none);order:1;align-self:center;margin:0 5px 0 0;appearance:none;width:12px;height:12px;outline:none;border-radius:50%;position:relative;text-align:center;line-height:10px}.knobs__knob__toggle::before{border:1px solid var(--textColor);opacity:.4;border-radius:3px}.knobs__knob__toggle::after{content:\"\";height:100%;z-index:5;width:999px;position:absolute;left:0;pointer-events:none}.knobs__knob__toggle:hover::before{opacity:1}.knobs__knob__toggle:checked:hover~*{text-decoration:line-through;transition:.15s}.knobs__knob__toggle:checked::after{content:\"\u2714\";color:var(--textColor);font-size:12px;text-shadow:-1px -2px var(--background),3px -2px var(--background);position:relative;z-index:1}.knobs__knob__toggle:not(:checked)~*{pointer-events:none !important;filter:grayscale(50%);opacity:.4;transition:.2s}.knobs__knob__toggle:not(:checked)~* ::-webkit-slider-thumb{pointer-events:none !important}.knobs__knob__toggle:not(:checked)~* ::-moz-slider-thumb{pointer-events:none !important}.knobs__knob__reset{order:0;pointer-events:none;margin-right:.5em;padding:0;align-self:center;color:inherit;background:none;border:0;cursor:pointer;opacity:.33;outline:none;border-radius:50%;width:2ch;height:2ch;user-select:none;transition:.15s ease-out}.knobs__knob__label__text{margin-right:2ch;white-space:nowrap;display:flex;align-items:center;opacity:.8;transition:80ms}.knobs__knob__label__text::after{content:attr(data-units);opacity:.5;margin-left:1ch}.leversIcon{width:56px;transform:scale(0.4);transform-origin:0 0}.leversIcon>div{display:flex;align-items:center;transition:transform .2s ease}.leversIcon>div:nth-child(1)::before{flex:.33;transition-delay:.3s}.leversIcon>div:nth-child(2){margin:2px 0}.leversIcon>div:nth-child(2)::after{flex:.33}.leversIcon>div:nth-child(3)::before{flex:.8;transition-delay:.1s}.leversIcon>div>b{display:inline-block;width:7.5px;height:7.5px;border-radius:50%;border:4px solid currentColor;margin:0 5px}.leversIcon>div::before,.leversIcon>div::after{content:\"\";height:5px;background:currentColor;border-radius:5px;flex:1;transition:flex .1s ease}.leversIcon>div::after{flex:auto;opacity:.33}@keyframes leversIcon{30%{flex:.2}80%{flex:5}}#knobsToggle:not(:checked)+.knobs>label:hover .leversIcon>div:nth-child(1)::before{animation:1s leversIcon ease infinite}#knobsToggle:not(:checked)+.knobs>label:hover .leversIcon>div:nth-child(2){margin:1px 0}#knobsToggle:not(:checked)+.knobs>label:hover .leversIcon>div:nth-child(2)::after{animation:1s .1s leversIcon ease reverse infinite}#knobsToggle:not(:checked)+.knobs>label:hover .leversIcon>div:nth-child(3)::before{animation:1.2s .15s leversIcon ease alternate infinite}#knobsToggle:checked+.knobs>label{--size: 18px;--offset: calc(var(--toggleOffset) + var(--size)/3)}#knobsToggle:checked+.knobs>label .leversIcon{width:65px;color:var(--textColor);transition:color .2s;transform:scale(0.3) translate(0, 6px);opacity:.7}#knobsToggle:checked+.knobs>label .leversIcon:hover{opacity:1}#knobsToggle:checked+.knobs>label .leversIcon b{transform:scale(0);margin:0;width:0}#knobsToggle:checked+.knobs>label .leversIcon>div::after{flex:0}#knobsToggle:checked+.knobs>label .leversIcon>div::before{flex:3;height:8px}#knobsToggle:checked+.knobs>label .leversIcon>div:nth-child(1){transform:rotate(45deg);transform-origin:20% 50%}#knobsToggle:checked+.knobs>label .leversIcon>div:nth-child(2){opacity:0}#knobsToggle:checked+.knobs>label .leversIcon>div:nth-child(3){transform:rotate(-45deg);transform-origin:0 0}#knobsToggle:checked+.knobs[data-position~=top] .knobs__bg{bottom:auto}#knobsToggle:checked+.knobs[data-position~=right] .knobs__bg{left:auto}#knobsToggle:checked+.knobs[data-position~=bottom]>label{top:auto;bottom:var(--offset)}#knobsToggle:checked+.knobs[data-position~=bottom] .knobs__bg{top:auto}#knobsToggle:checked+.knobs[data-position~=left]>label{right:auto;left:var(--offset)}#knobsToggle:checked+.knobs[data-position~=left] .knobs__bg{right:auto}#knobsToggle:checked+.knobs[data-position~=left][data-position~=bottom]{--control-left-pad: var(--toggleSize)}.knobs[data-position~=left]{--LTR-Bool: -1}.knobs label[data-type=select] .knobs__knob__inputWrap::before{--hide: Calc(var(--value) - var(--value));content:\"N/A\";font-style:italic;opacity:var(--hide);filter:opacity(0.5);position:absolute;right:2em;pointer-events:none}.knobs label[data-type=select]::after{content:\"\u276F\";pointer-events:none;align-self:center;transform:translate(-100%, var(--offset-y, -1px)) rotate(90deg) scaleY(0.8);transition:.1s}.knobs label[data-type=select]:hover{--offset-y: 1px}.knobs label[data-type=select] select{font:inherit;background:none;color:var(--textColor);padding:3px 0;cursor:pointer;border:none;outline:none;text-align-last:right;appearance:none;padding:0 1.1em 0 0}.knobs label[data-type=select] option{background:var(--background)}.knobs .range-slider{--fill-color: var(--range-track-color);--primaryColor: var(--range-value-background);--value-active-color: var(--range-track-color);--value-background: transparent;--value-background-hover: white;--value-offset-y: 9px;--progress-background: #444;--thumb-size: 14px;--track-height: calc(var(--thumb-size)/3);--ticks-thickness: 1px;--ticks-height: 0px;--show-min-max: none;--thumb-color: var(--range-track-color);--thumb-shadow: 0 0 3px rgba(0,0,0,.2), 0 0 0 calc(var(--thumb-size)/6) inset white;--thumb-shadow-active: 0 0 3px rgba(0,0,0,.2), 0 0 0 calc(var(--thumb-size)/4) inset white;color:rgba(0,0,0,0)}.knobs .range-slider>input:hover+output{box-shadow:0 0 0 3px var(--value-background),0 0 6px 4px var(--background)}.range-slider{--primary-color: #0366D6;--value-offset-y: var(--ticks-gap);--value-active-color: white;--value-background: transparent;--value-background-hover: var(--primary-color);--value-font: 700 12px/1 Arial;--fill-color: var(--primary-color);--progress-background: #EEE;--progress-radius: 20px;--track-height: calc(var(--thumb-size)/2);--min-max-font: 12px Arial;--min-max-opacity: .5;--min-max-x-offset: 10%;--thumb-size: 22px;--thumb-color: white;--thumb-shadow: 0 0 3px rgba(0,0,0,.4), 0 0 1px rgba(0,0,0,.5) inset, 0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active: 0 0 0 calc(var(--thumb-size)/4) inset var(--thumb-color), 0 0 0 99px var(--primary-color) inset, 0 0 3px rgba(0,0,0,.4);--thumb-shadow-hover: var(--thumb-shadow);--ticks-thickness: 1px;--ticks-height: 5px;--ticks-gap: var(--ticks-height, 0);--ticks-color: silver;--step: 1;--ticks-count: (var(--max) - var(--min)) / var(--step);--maxTicksAllowed: 30;--too-many-ticks: Min(1, Max(var(--ticks-count) - var(--maxTicksAllowed), 0));--x-step: Max( var(--step), var(--too-many-ticks) * (var(--max) - var(--min)) );--tickIntervalPerc_1: Calc( (var(--max) - var(--min)) / var(--x-step) );--tickIntervalPerc: calc( (100% - var(--thumb-size))/var(--tickIntervalPerc_1) * var(--tickEvery, 1) );--value-a: Clamp(var(--min), var(--value, 0), var(--max));--value-b: var(--value, 0);--text-value-a: var(--text-value, \"\");--completed-a: calc((var(--value-a) - var(--min) ) / (var(--max) - var(--min)) * 100);--completed-b: calc((var(--value-b) - var(--min) ) / (var(--max) - var(--min)) * 100);--ca: Min(var(--completed-a), var(--completed-b));--cb: Max(var(--completed-a), var(--completed-b));--thumbs-too-close: Clamp( -1, 1000 * (Min(1, Max(var(--cb) - var(--ca) - 5, -1)) + 0.001), 1 );--thumb-close-to-min: Min(1, Max(var(--ca) - 5, 0));--thumb-close-to-max: Min(1, Max(95 - var(--cb), 0));box-sizing:content-box;display:inline-block;height:max(var(--track-height),var(--thumb-size));background:linear-gradient(to right, var(--ticks-color) var(--ticks-thickness), transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size)/2 - var(--ticks-thickness)/2);background-position-y:var(--flip-y, bottom);padding-bottom:var(--flip-y, var(--ticks-gap));padding-top:calc(var(--flip-y)*var(--ticks-gap));position:relative;z-index:1}.range-slider[data-ticks-position=top]{--flip-y: 1}.range-slider::before,.range-slider::after{--offset: calc(var(--thumb-size)/2);content:counter(x);display:var(--show-min-max, block);font:var(--min-max-font);position:absolute;bottom:var(--flip-y, -2.5ch);top:calc(-2.5ch*var(--flip-y));opacity:clamp(0,var(--at-edge),var(--min-max-opacity));transform:translateX(calc(var(--min-max-x-offset) * var(--before, -1) * -1)) scale(var(--at-edge));pointer-events:none}.range-slider::before{--before: 1;--at-edge: var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}.range-slider::after{--at-edge: var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}.range-slider__values{position:relative;top:50%;line-height:0;text-align:justify;width:100%;pointer-events:none;margin:0 auto;z-index:5}.range-slider__values::after{content:\"\";width:100%;display:inline-block;height:0;background:red}.range-slider__progress{--start-end: calc(var(--thumb-size)/2);--clip-end: calc(100% - (var(--cb) ) * 1%);--clip-start: calc(var(--ca) * 1%);--clip: inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap)*var(--flip-y, 0) + var(--thumb-size)/2 - var(--track-height)/2);height:calc(var(--track-height));background:var(--progress-background, #EEE);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.range-slider__progress::before{content:\"\";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color, black);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}.range-slider__progress::after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}.range-slider>input{-webkit-appearance:none;width:100%;height:var(--thumb-size);margin:0;position:absolute;left:0;top:calc(50% - max(var(--track-height),var(--thumb-size))/2 + var(--ticks-gap)/2*var(--flip-y, -1));cursor:-webkit-grab;cursor:grab;outline:none;background:none}.range-slider>input:not(:only-of-type){pointer-events:none}.range-slider>input::-webkit-slider-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.range-slider>input::-moz-range-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.range-slider>input::-ms-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius, 50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.range-slider>input:hover{--thumb-shadow: var(--thumb-shadow-hover)}.range-slider>input:hover+output{--value-background: var(--value-background-hover);--y-offset: -5px;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}.range-slider>input:active{--thumb-shadow: var(--thumb-shadow-active);cursor:grabbing;z-index:2}.range-slider>input:active+output{transition:0s}.range-slider>input:nth-of-type(1){--is-left-most: Clamp(0, (var(--value-a) - var(--value-b)) * 99999 ,1)}.range-slider>input:nth-of-type(1)+output{--value: var(--value-a);--x-offset: calc(var(--completed-a) * -1%)}.range-slider>input:nth-of-type(1)+output:not(:only-of-type){--flip: calc(var(--thumbs-too-close) * -1)}.range-slider>input:nth-of-type(1)+output::after{content:var(--prefix, \"\") var(--text-value-a) var(--suffix, \"\")}.range-slider>input:nth-of-type(2){--is-left-most: Clamp(0, (var(--value-b) - var(--value-a)) * 99999 ,1)}.range-slider>input:nth-of-type(2)+output{--value: var(--value-b)}.range-slider>input:only-of-type~.range-slider__progress{--clip-start: 0}.range-slider>input+output{--flip: -1;--x-offset: calc(var(--completed-b) * -1%);--pos: calc(((var(--value) - var(--min))/(var(--max) - var(--min))) * 100%);pointer-events:none;position:absolute;z-index:5;background:var(--value-background);border-radius:10px;padding:2px 4px;left:var(--pos);transform:translate(var(--x-offset), calc(150% * var(--flip) - (var(--y-offset, 0px) + var(--value-offset-y)) * var(--flip)));transition:all .12s ease-out,left 0s}.range-slider>input+output::after{content:var(--prefix, \"\") var(--text-value-b) var(--suffix, \"\");font:var(--value-font)}.knobs[data-flow=compact] .switch{--size: 10px;--thumb-scale: 1.3}.knobs[data-flow=compact] .switch__gfx{padding:0}.knobs .switch{--color-bg: #444;--color-bg-on: #444;--thumb-color-off: #d75d4a;--thumb-color-on: #4ec964;--thumb-scale: 1.1;--width-multiplier: 2.5;--thumb-animation-pad: 15%;--size: 1em}.knobs .switch .switch__gfx{background:none;border:1px solid var(--bg, var(--color-bg))}.knobs .switch input:focus+div{outline:none}.switch{--color-bg: #E1E1E1;--color-bg-on: #16B5FF;--thumb-color-on: white;--thumb-color-off: var(--thumb-color-on);--thumb-scale: 1;--size: 16px;--duration: .18s;--width-multiplier: 2.5;--thumb-animation-pad: 15%;user-select:none;display:inline-flex;align-items:center}@keyframes switchMoveThumb{50%{padding:0 var(--thumb-animation-pad)}}@keyframes switchMoveThumb1{50%{padding:0 var(--thumb-animation-pad)}}.switch--textRight .switch__label{order:10;padding:0 0 0 .4em}.switch>div{cursor:pointer}.switch__label{order:0;padding-right:.4em;color:var(--label-color)}.switch__gfx{--thumb-left: 0%;--transform: translateX(calc(var(--thumb-left) * -1)) scale(var(--thumb-scale));order:5;padding:3px;position:relative;background:var(--bg, var(--color-bg));border-radius:50px;width:calc(var(--size)*var(--width-multiplier));transition:var(--duration);background-size:4px 4px}.switch__gfx::before{content:\"\";display:block;position:relative;left:var(--thumb-left);background:var(--thumb-color, var(--thumb-color-off));border-radius:var(--size);width:var(--size);height:var(--size);transform:var(--transform);transition:var(--duration);animation:switchMoveThumb var(--duration) ease 1}.switch input{position:absolute;opacity:0}.switch input[disabled]+div{background-image:linear-gradient(45deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%)}.switch input:disabled~div{cursor:not-allowed}.switch input:indeterminate+div{--thumb-left: 50%}.switch input:checked+div{--bg: var(--color-bg-on);--thumb-left: 100%;--thumb-color: var(--thumb-color-on)}.switch input:checked+div::before{animation-name:switchMoveThumb1}.switch input:focus+div{outline:1px dotted silver}.switch input:focus:not(:focus-visible)+div{outline:none}.knobs__controls{display:flex;align-items:center;opacity:0;flex-direction:row-reverse;margin:var(--side-pad) var(--control-right-pad, var(--side-pad)) 5px var(--control-left-pad, var(--side-pad));position:relative;z-index:1}.knobs__controls>input{color:var(--textColor);border:0;background:none;margin-left:1em;line-height:1;padding:5px 8px;border-radius:3px;position:relative}.knobs__controls>input:hover:not(:active){background:var(--opaqueColor-15)}.poweredBy{margin-right:auto;text-decoration:none;color:inherit;padding:3px;font-size:10px;opacity:.5;transition:.15s}.poweredBy:hover{color:var(--primaryColor);opacity:1}label[data-type=color]>.knobs__knob__inputWrap>div{display:inline-block;border-radius:5px;overflow:hidden;width:calc(var(--color-size)*4);height:calc(var(--color-size) - 2px);transform-origin:center right;background:var(--background) repeating-conic-gradient(rgba(255, 255, 255, 0.2) 0% 25%, transparent 0% 50%) 0/6px 6px}label[data-type=color]:hover>.knobs__knob__inputWrap>div{animation:colorHover .5s ease-out}label[data-type=color] input{width:100%;height:100%;border:0;background:var(--value);color:rgba(0,0,0,0);outline:none;caret-color:rgba(0,0,0,0);text-transform:uppercase;font-weight:600}label[data-type=color] input::selection{color:rgba(0,0,0,0)}@keyframes colorHover{20%{transform:scale(1.2)}40%{transform:scale(1)}60%{transform:scale(1.1)}}label[data-type=text] input,label[data-type=number] input{cursor:text;padding:5px;border-radius:3px;color:var(--textColor);outline:none;border:0;background:var(--opaqueColor-15)}label[data-type=text] input:focus,label[data-type=number] input:focus{box-shadow:0 0 0 1px HSL(var(--base-color), calc(var(--base-color-l) + 22%))}label[data-type=text] input:invalid,label[data-type=number] input:invalid{box-shadow:0 0 0 1px #d75d4a inset}label[data-type=radio]>.knobs__knob__inputWrap{display:flex;gap:var(--radio-group-gap, 1.5em);align-items:center;justify-content:flex-end}label[data-type=radio]>.knobs__knob__inputWrap>label{flex:0;display:inline-flex;gap:.5em;align-items:center}label[data-type=radio]>.knobs__knob__inputWrap>label:hover>*:not(input){opacity:.7}label[data-type=radio]>.knobs__knob__inputWrap>label input{margin:0}label[data-type=radio]>.knobs__knob__inputWrap>label input~*{opacity:.5;transition:.25s}label[data-type=radio]>.knobs__knob__inputWrap>label input:checked~*{opacity:1;transition:0s}label[data-type=radio]>.knobs__knob__inputWrap svg{fill:var(--textColor);height:20px}" + o.styles + ".knobs{ ".concat(this.getCSSVariables(o), " }"), e.head.insertAdjacentHTML("beforeend", "<style>".concat(t, "</style>")), e.close(), e;
    },
    render: function render() {
      var _this12 = this,
        _this$settings3;
      var e = function (e) {
          return e.reduce(function (e, t) {
            return !n(t) && e[e.length - 1].length && e.push([]), e[e.length - 1].push(t), e;
          }, [[]]);
        }(this.knobs),
        t = e.map(this.templates.fieldset.bind(this)).join("");
      this.DOM.groups.innerHTML = t, this.calculateGroupsHeights(), this.DOM.mainToggler && this.toggle(this.DOM.mainToggler.checked), this.applyKnobs(), this.knobs.forEach(function (e) {
        return e && e.script && e.script(_this12, e.__name);
      });
      _toConsumableArray(document.styleSheets).some(function (e) {
        return "@yaireo/knobs" == e.title;
      }) || document.head.insertAdjacentHTML("beforeend", '<style title=\'@yaireo/knobs\'>\n      .color-picker .range{--tickEvery: 400;--primaryColor: #000;--progress-color: transparent;--progress-shadow: unset;--value-active-color: white;--value-background: white;--value-font: 700 12px/1 Arial;--fill-color: var(--primaryColor);--thumb-size: 21px;--track-height: calc(var(--thumb-size)/1.5);--thumb-shadow: 0 0 3px rgba(0,0,0,.2);--step: 1;--completed: calc((var(--value) - var(--min) ) / (var(--max) - var(--min)) * 100);--show-min-max: none;--LTR: 1;display:inline-block;height:max(var(--track-height),var(--thumb-size));background:none;position:relative;z-index:1;padding-bottom:0;padding-top:0;margin:0 0 calc((var(--thumb-size) - var(--track-height))*-1)}.color-picker .range__progress{position:absolute;left:0;top:50%;transform:translateY(-50%) translateZ(0);width:100%;height:calc(var(--track-height));pointer-events:none;z-index:-1;box-shadow:var(--progress-shadow);border-radius:20px;background:var(--fill-color, white)}.color-picker .range__progress::after{content:unset}.color-picker .range>input{--thumb-color: transparent;--inner-shadow: 0 0 0 calc(var(--thumb-size)/8) inset white;-webkit-appearance:none;width:100%;height:var(--thumb-size);margin:0;cursor:-webkit-grab;cursor:grab;outline:none;background:none}.color-picker .range>input::-webkit-slider-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);border-radius:50%;background:var(--thumb-color, white);border:1px solid silver;box-shadow:var(--inner-shadow, 0 0),var(--thumb-shadow)}.color-picker .range>input::-moz-range-thumb{appearance:none;height:var(--thumb-size);width:var(--thumb-size);border-radius:50%;background:var(--thumb-color, white);border:1px solid silver;box-shadow:var(--inner-shadow, 0 0),var(--thumb-shadow)}.color-picker .range>input:active{opacity:.7;cursor:grabbing}.color-picker .range>input:active+output{transition:0s}.color-picker .range>input:hover+output{--value-background: var(--primaryColor);opacity:1;color:var(--value-active-color);transform:translate(var(--x-offset), 0);box-shadow:0 0 0 3px var(--value-background)}.color-picker .range>output{--x-offset: calc(var(--completed) * -1% * var(--LTR));--pos: calc(((var(--value) - var(--min))/(var(--max) - var(--min))) * 100%);opacity:0;pointer-events:none;position:absolute;z-index:5;background:var(--value-background);border-radius:10px;padding:0 4px;top:-3.5ch;left:var(--pos);transform:translate(var(--x-offset), 6px);transition:all .12s ease-out,left 0s,top 0s}.color-picker .range>output::before{--size: 5px;content:"";top:calc(100% + 2px);left:50%;border:solid rgba(0,0,0,0);height:0;width:0;position:absolute;pointer-events:none;border-top-color:var(--value-background);border-width:var(--size);margin-left:calc(var(--size)*-1);transition:inherit}.color-picker .range>output::after{content:var(--text-value);font:var(--value-font)}.color-picker{--hue: 150;--saturation: 100;--lightness: 50;--alpha: 100;--s: calc(var(--saturation) * 1%);--l: calc(var(--lightness) * 1%);--a: calc(var(--alpha) * 1%);--color: hsla(var(--hue), var(--s), var(--l), var(--a));--checkboard-color: #DDD;--checkboard-base-gradient: repeating-conic-gradient(var(--checkboard-color) 0% 25%, transparent 0% 50%);--width: 320;--width-units: 1px;display:flex;flex-flow:column;gap:.5em;width:calc(var(--width)*var(--width-units));position:relative;box-sizing:border-box;transition:opacity .15s;transition-timing-function:ease-out}.color-picker__hue.range{grid-area:hue;--fill-color: linear-gradient(to right, red 0%, #ff0 16.6%, lime 33.3%, cyan 50%, blue 66.6%, #f0f 83.3%, red 100%)}.color-picker__saturation.range{grid-area:saturation;--fill-color: linear-gradient(to right, white, hsl(var(--hue),var(--s), 50%))}.color-picker__lightness.range{grid-area:lightness;--c: hsl(var(--hue), var(--s), 50%);--fill-color: linear-gradient(to right, black, var(--c), white)}.color-picker__alpha.range{grid-area:alpha;--checkboard-size: 8px;--fill-color: linear-gradient(to right, transparent, hsl(var(--hue), var(--s), var(--l))), var(--checkboard-base-gradient) 0 / var(--checkboard-size) var(--checkboard-size)}.color-picker button{cursor:pointer;border:none;background:none;outline:none}.cp-checkboard::before{content:"";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;border-radius:inherit;background:repeating-conic-gradient(var(--checkboard-color) 0% 25%, transparent 0% 50%) 0/12px 12px}.color-picker>output{grid-area:color;border-radius:5px;overflow:hidden;position:relative;width:50px;background:hsla(var(--hue), var(--s), var(--l), var(--a));box-shadow:0 0 8px -5px}.color-picker>output::before{content:"";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:repeating-conic-gradient(var(--checkboard-color) 0% 25%, transparent 0% 50%) 0/12px 12px}.color-picker__value{--isLightColor: Min(1, Max(50 - var(--lightness) - (100 - var(--alpha)), 0));grid-area:value;position:relative;display:inline-flex;align-items:center;overflow:hidden;border-radius:10px;color:hsl(var(--hue), 100%, calc(var(--isLightColor) * 100%));box-shadow:0 0 4px rgba(0,0,0,.2)}.color-picker__value input{flex:1;order:2;cursor:text;width:0;letter-spacing:-0.5px;word-spacing:-3px;font:800 16px/2 monospace;font-size:calc(var(--width)*var(--width-units)/22);text-transform:uppercase;padding:0;text-align:center;border:none;outline:none;background:none;color:inherit;transition:color .2s}.color-picker__value input~div{position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;border-radius:inherit;background:var(--color)}.color-picker__value input:focus{color:#000}.color-picker__value input:focus~button{transform:translateX(100%)}.color-picker__value input:focus+button{transform:translateX(-100%)}.color-picker__value input:focus~div{background:none;transition:background .15s;border:3px solid var(--color)}.color-picker__value>button{order:3;width:1.5em;background:none;border:none;font:22px/1.2 monospace;outline:none;color:inherit;cursor:pointer;user-select:none;transition:color .2s,transform .2s ease-out}.color-picker__value>button[name=undo]{order:1}.color-picker__swatches{display:flex;flex-wrap:wrap;align-items:center;gap:3px}.color-picker__swatches>button{--shadow-size: 2px;order:0;padding:12px;width:0;height:0;border-radius:50%;background:var(--c);font-size:18px;line-height:1px;text-indent:-6px;transition:.1s;box-shadow:0 0 0 var(--shadow-size) inset var(--color)}.color-picker__swatches>button:hover:not(:active){--shadow-size: 4px}.color-picker__swatch{order:1;padding:12px;line-height:0;border-radius:50%;background:var(--c);position:relative;cursor:pointer;transition:.15s ease-in-out}.color-picker__swatch:hover{transition:50ms}.color-picker__swatch:hover>button{opacity:1}.color-picker__swatch.cp_remove{padding:0;pointer-events:none;transition:.2s}.color-picker__swatch>button{opacity:0;position:absolute;top:0;right:0;width:0;height:0;border-radius:50%;line-height:.1;color:#000;font-weight:800;text-shadow:0 3px #fff,-2px 1px #fff}\n      .color-picker h1{margin:0 0 .5em;font-size:1em;text-align:center}.color-picker.hidden{opacity:0;pointer-events:none}.color-picker[positioned]{--x: calc(var(--pos-left) + var(--window-scroll-x));--y: calc(var(--pos-top) + var(--window-scroll-y));position:absolute;z-index:9999991;border-radius:10px;padding:.5em;box-shadow:0 5px 20px rgba(0,0,0,.2666666667);backdrop-filter:blur(3px);background:#fff;top:0;left:0;transform:translate(calc(var(--x) * 1px), calc(var(--y) * 1px))}@media only screen and (max-device-width: 640px){.color-picker[positioned]{max-width:70%}}.color-picker[positioned]:not(.hidden)~.knobsIframe{pointer-events:none;filter:blur(2px)}\n      </style>'), this.trigger("render"), (_this$settings3 = this.settings) === null || _this$settings3 === void 0 || (_this$settings3 = _this$settings3.callbacks) === null || _this$settings3 === void 0 ? void 0 : _this$settings3.render();
    },
    color: {
      format: t.changeColorFormat,
      CSStoHSLA: t.CSStoHSLA
    }
  }), x;
});
},{}],"zPOP":[function(require,module,exports) {
"use strict";

var _knobsMin = _interopRequireDefault(require("./knobs.min.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Counter(selector, settings) {
  this.settings = Object.assign({
    digits: 5,
    delay: 250,
    // ms
    direction: '' // ltr is default
  }, settings || {});
  this.DOM = {};
  this.build(selector);
  this.DOM.scope.addEventListener('transitionend', function (e) {
    if (e.pseudoElement === "::before" && e.propertyName == 'margin-top') {
      e.target.classList.remove('blur');
    }
  });
  this.count();
}
Counter.prototype = {
  // generate digits markup
  build: function build(selector) {
    var scopeElm = typeof selector == 'string' ? document.querySelector(selector) : selector ? selector : this.DOM.scope;
    scopeElm.innerHTML = Array(this.settings.digits + 1).join('<div><b data-value="0"></b></div>');
    this.DOM = {
      scope: scopeElm,
      digits: scopeElm.querySelectorAll('b')
    };
  },
  count: function count(newVal) {
    var countTo,
      className,
      settings = this.settings,
      digitsElms = this.DOM.digits;

    // update instance's value
    this.value = newVal || this.DOM.scope.dataset.value | 0;
    if (!this.value) return;

    // convert value into an array of numbers
    countTo = (this.value + '').split('');
    if (settings.direction == 'rtl') {
      countTo = countTo.reverse();
      digitsElms = [].slice.call(digitsElms).reverse();
    }

    // loop on each number element and change it
    digitsElms.forEach(function (item, i) {
      if (+item.dataset.value != countTo[i] && countTo[i] >= 0) setTimeout(function (j) {
        var diff = Math.abs(countTo[j] - +item.dataset.value);
        item.dataset.value = countTo[j];
        if (diff > 3) item.className = 'blur';
      }, i * settings.delay, i);
    });
  }
};

/////////////// create new counter for this demo ///////////////////////

var counter = new Counter('.numCounter', {
  direction: 'rtl',
  delay: 200,
  digits: 7
});

// change counter value every N seconds
var counterInterval = setInterval(randomCount, 3000);
function randomCount() {
  counter.count(+("" + Math.random()).substring(2, 2 + counter.settings.digits));
}
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/////////////// Controls ///////////////////////

var settings = {
  visible: 0,
  CSSVarTarget: document.querySelector('.numCounter'),
  knobs: [{
    label: 'Number of Digits',
    type: 'range',
    value: 7,
    min: 1,
    max: 12,
    onChange: function onChange(e) {
      clearInterval(counterInterval);
      counter.settings.digits = +e.target.value;
      counter.build();
      counterInterval = setInterval(randomCount, 3000);
      randomCount();
    }
  }, {
    label: 'Delay',
    type: 'range',
    value: 200,
    min: 0,
    max: 400,
    step: 25,
    onChange: function onChange(e) {
      return counter.settings.delay = +e.target.value;
    }
  }, {
    cssVar: ['hide'],
    // alias for the CSS variable
    label: 'Animate Right-To-Left',
    type: 'checkbox',
    checked: true,
    value: 'none',
    onChange: function onChange(e) {
      return counter.settings.direction = e.target.checked ? "rtl" : "";
    }
  }]
};
var myKnobs = new _knobsMin.default(settings);
},{"./knobs.min.js":"WCGb"}]},{},["zPOP"], null)