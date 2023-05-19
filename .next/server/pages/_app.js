"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 32:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./src/common/mouseEffect.js
const mouseEffect = () => {
  function mousecursor() {
    const cursorInner = document.querySelector(".cursor-inner"),
          cursorOuter = document.querySelector(".cursor-outer");
    let n,
        i = 0,
        o = !1;

    window.onmousemove = function (s) {
      o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
    };

    if (document.querySelector(".cursor-pointer")) {
      document.querySelector(".cursor-pointer").addEventListener("mouseenter", function () {
        cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
      });
      document.querySelector(".cursor-pointer").addEventListener("mouseleave", function () {
        cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
      }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
    }

    document.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
      });
    });
    document.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("mouseleave", function () {
        cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
      });
    }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
  }

  mousecursor();
};

/* harmony default export */ const common_mouseEffect = (mouseEffect);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/cursor/index.jsx






const Cursor = () => {
  external_react_default().useEffect(() => {
    common_mouseEffect();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mouse-cursor cursor-outer"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mouse-cursor cursor-inner"
    })]
  });
};

/* harmony default export */ const cursor = (Cursor);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = () => {
  Pace.on("start", function () {
    document.querySelector("#preloader").classList.remove("isdone");
    document.querySelector(".loading").classList.remove("isdone");
  });
  Pace.on("done", function () {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  });

  if (document.querySelector("body").classList.contains("pace-done")) {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  }

  window.addEventListener("load", () => {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");

    if (document.querySelector('.pace-running.pace-running')) {
      document.querySelector('.pace-running.pace-running').classList.remove('pace-running');
    }
  });
};

/* harmony default export */ const common_loadingPace = (loadingPace);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(806);
;// CONCATENATED MODULE: ./src/components/Loading-Screen/index.jsx








const LoadingScreen = () => {
  external_react_default().useEffect(() => {
    let bodyEl = document.querySelector("body");

    if (app/* showLoading */.QP) {
      common_loadingPace();

      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${app/* showLoading */.QP === true ? "showX" : "hideX"}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "loading",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "L"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "o"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "a"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "d"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "i"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "n"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "g"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "preloader"
      })]
    }), app/* showLoading */.QP ? /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      id: "pace",
      strategy: "beforeInteractive",
      src: "/js/pace.min.js"
    }) : ""]
  });
};

/* harmony default export */ const Loading_Screen = (LoadingScreen);
;// CONCATENATED MODULE: ./src/pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import ScrollToTop from "../components/scrollToTop";







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Vie"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/img/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(cursor, {}), /*#__PURE__*/jsx_runtime_.jsx(Loading_Screen, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      id: "wow",
      src: "/js/wow.min.js"
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      strategy: "beforeInteractive",
      id: "splitting",
      src: "/js/splitting.min.js"
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      id: "simpleParallax",
      src: "/js/simpleParallax.min.js"
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      id: "isotope",
      strategy: "beforeInteractive",
      src: "/js/isotope.pkgd.min.js"
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      id: "wowInit",
      strategy: "lazyOnload",
      children: `new WOW().init();`
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/logo-dark.jpg","Q1":"/img/logo-dark.jpg","QP":true}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(32));
module.exports = __webpack_exports__;

})();