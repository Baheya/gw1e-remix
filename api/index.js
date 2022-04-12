var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/beya/Documents/Programming/gw1e/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links10,
  meta: () => meta
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/components/Footer/index.js
init_react();

// app/components/Footer/Footer.jsx
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/shared/Button/index.js
init_react();

// app/components/shared/Button/Button.jsx
init_react();
var import_remix2 = __toESM(require_remix());

// app/components/shared/Button/Button.css
var Button_default = "/build/_assets/Button-SI24L2HR.css";

// app/components/shared/Button/Button.jsx
function links() {
  return [{ rel: "stylesheet", href: Button_default }];
}
function Button(_a) {
  var _b = _a, {
    children,
    to,
    icon,
    variant,
    label,
    onClick,
    className
  } = _b, delegated = __objRest(_b, [
    "children",
    "to",
    "icon",
    "variant",
    "label",
    "onClick",
    "className"
  ]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, to ? /* @__PURE__ */ React.createElement(import_remix2.Link, __spreadValues({
    to,
    className: variant === "icon" ? "button icon-button" : variant === "primary" ? "button primary-button" : "button"
  }, delegated), icon && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, label), icon), children) : /* @__PURE__ */ React.createElement("button", __spreadValues({
    className: `${className ?? ""}
            ${variant === "icon" ? "button icon-button" : variant === "primary" ? "button primary-button" : "button"}`,
    onClick
  }, delegated), icon && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, label), icon), children));
}

// app/components/shared/Icons/Instagram/index.js
init_react();

// app/components/shared/Icons/Instagram/Instagram.jsx
init_react();
function Instagram(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703 2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
  }));
}

// app/components/Footer/Footer.css
var Footer_default = "/build/_assets/Footer-5DXP5K2D.css";

// app/components/Footer/Footer.jsx
function links2() {
  return [...links(), { rel: "stylesheet", href: Footer_default }];
}
function Footer() {
  const pages2 = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/category/all" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];
  return /* @__PURE__ */ React.createElement("footer", {
    className: "footer"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "footer-navigation",
    "aria-label": "Footer Navigation"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "footer-navigation-links"
  }, pages2.map((page, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: page.path
  }, page.name))))), /* @__PURE__ */ React.createElement(Button, {
    variant: "icon",
    label: "Follow on Instagram",
    icon: /* @__PURE__ */ React.createElement(Instagram, {
      className: "icon"
    })
  }));
}

// app/components/Header/index.js
init_react();

// app/components/Header/Header.jsx
init_react();
var import_remix6 = __toESM(require_remix());
var import_react = require("react");

// app/components/shared/CategoryLink/index.js
init_react();

// app/components/shared/CategoryLink/CategoryLink.jsx
init_react();
var import_remix4 = __toESM(require_remix());

// app/components/shared/CategoryLink/CategoryLink.css
var CategoryLink_default = "/build/_assets/CategoryLink-MZIWHHT7.css";

// app/components/shared/CategoryLink/CategoryLink.jsx
function links3() {
  return [{ rel: "stylesheet", href: CategoryLink_default }];
}
function CategoryLink(_a) {
  var _b = _a, {
    to,
    className,
    children = "doing"
  } = _b, delegated = __objRest(_b, [
    "to",
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React.createElement(import_remix4.NavLink, __spreadValues({
    to,
    className: `${className ?? ""} category-link ${children ? children == null ? void 0 : children.toLowerCase() : ""}`
  }, delegated), /* @__PURE__ */ React.createElement("span", null, children));
}

// app/components/Header/DropdownButton/index.js
init_react();

// app/components/Header/DropdownButton/DropdownButton.jsx
init_react();

// app/components/Header/DropdownButton/DropdownButton.css
var DropdownButton_default = "/build/_assets/DropdownButton-RIT2SFZC.css";

// app/components/Header/DropdownButton/DropdownButton.jsx
function links4() {
  return [...links(), { rel: "stylesheet", href: DropdownButton_default }];
}
function DropdownButton({
  isSubNavVisible,
  setIsSubNavVisible,
  children
}) {
  return /* @__PURE__ */ React.createElement(Button, {
    label: "Toggle Blog Categories Navigation",
    className: "button dropdown-button",
    "aria-expanded": isSubNavVisible,
    "aria-controls": "blog-dropdown",
    onClick: () => setIsSubNavVisible(!isSubNavVisible)
  }, /* @__PURE__ */ React.createElement("span", null, children));
}

// app/components/Header/HamburgerButton/index.js
init_react();

// app/components/Header/HamburgerButton/HamburgerButton.jsx
init_react();

// app/components/shared/Icons/Close/index.js
init_react();

// app/components/shared/Icons/Close/Close.jsx
init_react();
function Close(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "1em",
    height: "1em",
    viewBox: "0 0 72 72",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m17.5 17.5 37 37M54.5 17.5l-37 37"
  })));
}

// app/components/shared/Icons/Hamburger/index.js
init_react();

// app/components/shared/Icons/Hamburger/Hamburger.jsx
init_react();
function Hamburger(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    fill: "#b79289",
    width: "1em",
    height: "1em",
    viewBox: "0 0 72 72",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("g", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16 26h40M16 36h40M16 46h40"
  })));
}

// app/components/Header/HamburgerButton/HamburgerButton.css
var HamburgerButton_default = "/build/_assets/HamburgerButton-YAKX23UO.css";

// app/components/Header/HamburgerButton/HamburgerButton.jsx
function links7() {
  return [...links(), { rel: "stylesheet", href: HamburgerButton_default }];
}
function HamburgerButton({ isNavVisible, setIsNavVisible }) {
  return /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setIsNavVisible(!isNavVisible),
    label: "Toggle Navigation Menu",
    variant: "icon",
    className: "hamburger-button",
    "aria-expanded": isNavVisible,
    icon: !isNavVisible ? /* @__PURE__ */ React.createElement(Hamburger, null) : /* @__PURE__ */ React.createElement(Close, null)
  });
}

// app/components/Header/Logo/index.js
init_react();

// app/components/Header/Logo/Logo.jsx
init_react();
var import_remix5 = __toESM(require_remix());

// public/images/GW1E_Logo.png
var GW1E_Logo_default = "/build/_assets/GW1E_Logo-DRTAR2VW.png";

// app/components/Header/Logo/Logo.css
var Logo_default = "/build/_assets/Logo-J67RJADX.css";

// app/components/Header/Logo/Logo.jsx
function links8() {
  return [{ rel: "stylesheet", href: Logo_default }];
}
function Logo() {
  return /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/",
    className: "logo-wrapper"
  }, /* @__PURE__ */ React.createElement("img", {
    src: GW1E_Logo_default,
    alt: "Logo",
    className: "logo"
  }));
}

// app/utils/keyboardHandler.js
init_react();
function keyboardHandler(e) {
  if (typeof window === "undefined")
    return null;
  const dropdownButton = document.querySelector(".dropdown-button");
  const hamburgerButton = document == null ? void 0 : document.querySelector(".hamburger-button");
  const subNavLinks = document == null ? void 0 : document.querySelectorAll(".sub-navigation-link");
  const mainNavLinks = document == null ? void 0 : document.querySelectorAll(".main-navigation-link");
  const firstFocusableEl = dropdownButton ? dropdownButton.getAttribute("aria-expanded") === "true" ? dropdownButton : hamburgerButton : hamburgerButton;
  const dropdown = dropdownButton ? dropdownButton.getAttribute("aria-expanded") === "true" ? subNavLinks : hamburgerButton.getAttribute("aria-expanded") === "true" && dropdownButton.getAttribute("aria-expanded") === "false" ? mainNavLinks : null : null;
  const lastFocusableEl = dropdown == null ? void 0 : dropdown[dropdown.length - 1];
  if (e.keyCode === 9) {
    if (e.shiftKey && (document == null ? void 0 : document.activeElement) === firstFocusableEl) {
      lastFocusableEl.focus();
    } else if (!e.shiftKey && (document == null ? void 0 : document.activeElement) === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  }
}

// app/components/Header/Header.css
var Header_default = "/build/_assets/Header-6LFMXJXG.css";

// app/components/Header/Header.jsx
var import_react2 = require("@remix-run/react");
function links9() {
  return [
    ...links8(),
    ...links3(),
    ...links7(),
    ...links4(),
    { rel: "stylesheet", href: Header_default }
  ];
}
var categories = [
  { name: "Living", path: "/category/living" },
  { name: "Loving", path: "/category/loving" },
  { name: "Reading", path: "/category/reading" },
  { name: "Doing", path: "/category/doing" },
  { name: "Dying", path: "/category/dying" }
];
var pages = [
  { name: "Home", path: "/", hasChildren: false },
  { name: "Blog", path: "/category/all", hasChildren: true },
  { name: "About", path: "/about", hasChildren: false },
  { name: "Contact", path: "/contact", hasChildren: false }
];
function Header() {
  const [isNavVisible, setIsNavVisible] = (0, import_react.useState)(false);
  const [isSubNavVisible, setIsSubNavVisible] = (0, import_react.useState)(false);
  const { pathname } = (0, import_react2.useLocation)();
  (0, import_react.useEffect)(() => {
    setIsNavVisible(false);
  }, [pathname]);
  (0, import_react.useEffect)(() => {
    addEventListener("keydown", keyboardHandler);
    return () => removeEventListener("keydown", keyboardHandler);
  }, []);
  return /* @__PURE__ */ React.createElement("header", {
    className: isNavVisible ? "header pink" : "header"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "header-navigation",
    "aria-label": "Main Navigation"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(HamburgerButton, {
    setIsNavVisible,
    isNavVisible
  }), /* @__PURE__ */ React.createElement("ul", {
    className: isNavVisible ? "main-navigation-links visible" : "main-navigation-links"
  }, pages.map((page, index) => page.hasChildren ? /* @__PURE__ */ React.createElement("li", {
    className: "dropdown",
    key: index
  }, /* @__PURE__ */ React.createElement(DropdownButton, {
    isSubNavVisible,
    setIsSubNavVisible
  }, page.name), /* @__PURE__ */ React.createElement("ul", {
    className: isSubNavVisible ? "sub-navigation-links visible" : "sub-navigation-links",
    id: "blog-dropdown"
  }, categories.map((category, index2) => /* @__PURE__ */ React.createElement("li", {
    key: index2
  }, /* @__PURE__ */ React.createElement(CategoryLink, {
    className: "sub-navigation-link",
    prefetch: "intent",
    to: category.path
  }, category.name))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.NavLink, {
    className: "sub-navigation-link",
    prefetch: "intent",
    to: "/category/all"
  }, "All Stories")))) : /* @__PURE__ */ React.createElement("li", {
    key: index
  }, /* @__PURE__ */ React.createElement(import_remix6.NavLink, {
    to: page.path,
    className: ({ isActive }) => isActive ? "link-active main-navigation-link" : "main-navigation-link"
  }, page.name))))));
}

// app/styles/shared.css
var shared_default = "/build/_assets/shared-Q3X2ZISA.css";

// route:/Users/beya/Documents/Programming/gw1e/app/root.jsx
var links10 = () => [
  ...links9(),
  ...links2(),
  { rel: "stylesheet", href: shared_default }
];
function meta() {
  return {
    title: "GW1E",
    description: "A blog where all of the musings of a Girl with One Earring live."
  };
}
function App() {
  var _a;
  const matches = (0, import_remix7.useMatches)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    type: "style/css",
    href: "styles/shared.css"
  }), /* @__PURE__ */ React.createElement(import_remix7.Meta, null), /* @__PURE__ */ React.createElement(import_remix7.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: `${((_a = matches == null ? void 0 : matches[1]) == null ? void 0 : _a.id) === "routes/post/$slug" ? "secondary-bg" : "primary-bg"}`
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_remix7.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(import_remix7.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix7.Scripts, null), /* @__PURE__ */ React.createElement(import_remix7.LiveReload, null)));
}

// route:/Users/beya/Documents/Programming/gw1e/app/routes/category/$category/$page.jsx
var page_exports = {};
__export(page_exports, {
  default: () => Posts2,
  links: () => links19,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_graphql_request2 = require("graphql-request");

// app/components/Blog/index.js
init_react();

// app/components/Blog/Blog.jsx
init_react();

// app/components/Blog/Pagination/index.js
init_react();

// app/components/Blog/Pagination/Pagination.jsx
init_react();

// app/components/Blog/Pagination/PaginationItem/index.js
init_react();

// app/components/Blog/Pagination/PaginationItem/PaginationItem.jsx
init_react();
var import_remix8 = __toESM(require_remix());

// app/components/Blog/Pagination/PaginationItem/PaginationItem.css
var PaginationItem_default = "/build/_assets/PaginationItem-7OBQ5VTU.css";

// app/components/Blog/Pagination/PaginationItem/PaginationItem.jsx
function links11() {
  return [{ rel: "stylesheet", href: PaginationItem_default }];
}
function PaginationItem({ index, currentPage, category }) {
  return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix8.NavLink, {
    to: index === 0 ? `/category/${category}` : `/category/${category}/${index + 1}`,
    className: ({ isActive }) => isActive ? "pagination-item active" : "pagination-item",
    "aria-label": "Go to page",
    "aria-current": currentPage === index,
    end: true
  }, index + 1));
}

// app/components/Blog/Pagination/Pagination.css
var Pagination_default = "/build/_assets/Pagination-L32A2QFI.css";

// app/components/Blog/Pagination/Pagination.jsx
function links12() {
  return [...links11(), { rel: "stylesheet", href: Pagination_default }];
}
function Pagination({ pageCount, currentPage, category }) {
  return /* @__PURE__ */ React.createElement("nav", {
    role: "navigation",
    "aria-label": "Pagination",
    className: "pagination"
  }, /* @__PURE__ */ React.createElement("ul", null, Array.from({ length: pageCount }, (_, i) => i + 1).map((_, index) => /* @__PURE__ */ React.createElement(PaginationItem, {
    currentPage,
    key: index,
    index,
    category
  }))));
}

// app/components/shared/Posts/index.js
init_react();

// app/components/shared/Posts/Posts.jsx
init_react();
var import_react3 = require("react");

// app/components/shared/Posts/Divider/index.js
init_react();

// app/components/shared/Posts/Divider/Divider.jsx
init_react();

// app/components/shared/Posts/Divider/Divider.css
var Divider_default = "/build/_assets/Divider-CNANNAEK.css";

// app/components/shared/Posts/Divider/Divider.jsx
function links13() {
  return [{ rel: "stylesheet", href: Divider_default }];
}
function Divider() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "divider-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "divider"
  }));
}

// app/components/shared/PostItem/index.js
init_react();

// app/components/shared/PostItem/PostItem.jsx
init_react();
var import_remix9 = __toESM(require_remix());

// app/components/shared/PostItem/FeaturedImage/index.js
init_react();

// app/components/shared/PostItem/FeaturedImage/FeaturedImage.jsx
init_react();

// app/components/shared/PostItem/FeaturedImage/FeaturedImage.css
var FeaturedImage_default = "/build/_assets/FeaturedImage-VV4HF3MJ.css";

// app/components/shared/PostItem/FeaturedImage/FeaturedImage.jsx
function links14() {
  return [{ rel: "stylesheet", href: FeaturedImage_default }];
}
function FeaturedImage({ layoutType, featured, post }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, layoutType === "spotlight" ? featured ? /* @__PURE__ */ React.createElement("img", {
    className: "featured-image spotlight-grid",
    loading: "eager",
    src: post.featuredImage.image.url,
    alt: post == null ? void 0 : post.featuredImage.alt,
    srcSet: `${post.featuredImage.image.thumbnail} 300w, ${post.featuredImage.image.url} 600w`,
    sizes: "(min-width: 500px) 600px, 100px"
  }) : /* @__PURE__ */ React.createElement("img", {
    className: "featured-image spotlight-grid",
    loading: "lazy",
    src: post.featuredImage.image.thumbnail,
    alt: post == null ? void 0 : post.featuredImage.alt,
    srcSet: `${post.featuredImage.image.thumbnail} 300w, ${post.featuredImage.image.url} 600w`,
    sizes: "(min-width: 800px) 100px, \n            (min-width: 500px) 600px, 100px"
  }) : /* @__PURE__ */ React.createElement("img", {
    className: "featured-image masonry-grid",
    loading: "eager",
    src: post.featuredImage.image.thumbnail,
    style: {
      aspectRatio: `${post.featuredImage.image.width / post.featuredImage.image.height}`
    },
    alt: post == null ? void 0 : post.featuredImage.alt,
    srcSet: `${post.featuredImage.image.thumbnail} 300w, ${post.featuredImage.image.url} 600w`,
    sizes: "(min-width: 500px) 100px, 300px"
  }));
}

// app/components/shared/PostMeta/index.js
init_react();

// app/components/shared/PostMeta/PostMeta.jsx
init_react();

// app/components/shared/PostMeta/PostMeta.css
var PostMeta_default = "/build/_assets/PostMeta-Z3WZUVAW.css";

// app/components/shared/PostMeta/PostMeta.jsx
function links15() {
  return [...links3(), { rel: "stylesheet", href: PostMeta_default }];
}
function PostMeta({ category, date }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "post-meta"
  }, /* @__PURE__ */ React.createElement(CategoryLink, {
    to: `/category/${category.name.toLowerCase()}`
  }, category.name), /* @__PURE__ */ React.createElement("p", {
    className: "date"
  }, new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })));
}

// app/components/shared/Icons/WavyLineMobile/index.js
init_react();

// app/components/shared/Icons/WavyLineMobile/WavyLineMobile.jsx
init_react();
function WavyLineMobile(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "100%",
    height: 60,
    xmlSpace: "preserve"
  }, props), /* @__PURE__ */ React.createElement("image", {
    width: "100%",
    height: 60,
    xlinkHref: "data:image/png;base64,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 MzI6MDArMDA6MDBN+H24AAAAAElFTkSuQmCC"
  }));
}

// app/components/shared/PostItem/PostItem.css
var PostItem_default = "/build/_assets/PostItem-O64QIWIA.css";

// app/components/shared/PostItem/PostItem.jsx
function links16() {
  return [
    ...links15(),
    ...links(),
    ...links14(),
    { rel: "stylesheet", href: PostItem_default }
  ];
}
function PostItem({ post, featured, layoutType }) {
  return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("article", {
    className: featured ? "blog-post-item featured" : "blog-post-item"
  }, /* @__PURE__ */ React.createElement(FeaturedImage, {
    layoutType,
    post,
    featured
  }), /* @__PURE__ */ React.createElement("div", {
    className: "content-wrapper"
  }, layoutType === "spotlight" ? featured ? /* @__PURE__ */ React.createElement("h3", null, post.title) : /* @__PURE__ */ React.createElement(import_remix9.Link, {
    className: "content-link",
    to: `/post/${post.slug}`
  }, /* @__PURE__ */ React.createElement("h3", null, post.title)) : featured ? /* @__PURE__ */ React.createElement("h2", null, post.title) : /* @__PURE__ */ React.createElement(import_remix9.Link, {
    className: "content-link",
    to: `/post/${post.slug}`
  }, /* @__PURE__ */ React.createElement("h2", null, post.title)), !featured ? /* @__PURE__ */ React.createElement(PostMeta, {
    category: post.category,
    date: post.updatedAt
  }) : null, /* @__PURE__ */ React.createElement("p", {
    className: "content-excerpt"
  }, post.excerpt), featured ? /* @__PURE__ */ React.createElement("div", {
    className: "featured-button-wrapper"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "primary",
    to: `/post/${post.slug}`
  }, "Read Post"), /* @__PURE__ */ React.createElement(WavyLineMobile, null)) : null)));
}

// app/utils/calculateMasonryLayout.js
init_react();
var onLayout = function(grids) {
  return function layout() {
    grids.forEach((grid) => {
      let initial_height = grid.items[0]._el.getBoundingClientRect().top;
      grid.items.forEach((c) => {
        let rect = c._el.getBoundingClientRect();
        c.off = rect.left;
        grid.colHeights.set(c.off, initial_height);
      });
      if (grid.ncol === grid.colHeights.size) {
        return;
      }
      grid.ncol = grid.colHeights.size;
      grid.items.forEach((c) => c._el.style.removeProperty("margin-top"));
      if (grid.ncol > 1) {
        grid.items.forEach((grid_item) => {
          let rect = grid_item._el.getBoundingClientRect();
          let col_height = grid.colHeights.get(grid_item.off);
          grid_item._el.style.marginTop = `${col_height - rect.top}px`;
          col_height += grid_item._el.offsetHeight + grid.gap;
          grid.colHeights.set(grid_item.off, col_height);
        });
      }
    });
  };
};
function filterGrids(grids) {
  if (grids.length && getComputedStyle(grids[0]).gridTemplateRows !== "masonry") {
    grids = grids.map((grid) => ({
      _el: grid,
      gap: parseFloat(getComputedStyle(grid).rowGap),
      items: [...grid.childNodes].filter((c) => c.nodeType === 1).map((c) => ({ _el: c })),
      ncol: 0,
      colHeights: /* @__PURE__ */ new Map()
    }));
    return grids;
  }
}

// app/components/shared/Posts/Posts.css
var Posts_default = "/build/_assets/Posts-DWTEZIKD.css";

// app/components/shared/Posts/Posts.jsx
function links17() {
  return [
    ...links16(),
    ...links13(),
    { rel: "stylesheet", href: Posts_default }
  ];
}
function Posts({ layoutType, posts }) {
  const gridRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    let handlers = [];
    if (gridRef.current !== null) {
      setTimeout(() => {
        const filteredMasonryGrids2 = filterGrids([gridRef.current]);
        onLayout(filteredMasonryGrids2)();
        addEventListener("resize", handlers[filteredMasonryGrids2] = onLayout(filteredMasonryGrids2), false);
      }, 300);
    }
    return () => removeEventListener("resize", () => handlers[filteredMasonryGrids], false);
  }, [gridRef.current]);
  return /* @__PURE__ */ React.createElement("ul", {
    ref: layoutType === "masonry" ? gridRef : null,
    className: layoutType === "masonry" ? "blog-grid masonry" : "blog-grid"
  }, posts.length ? posts.map((post, index) => /* @__PURE__ */ React.createElement(import_react3.Fragment, {
    key: index
  }, /* @__PURE__ */ React.createElement(PostItem, {
    layoutType,
    post: post.node ?? post,
    featured: layoutType === "spotlight" && index === 0,
    key: post.id
  }), layoutType === "spotlight" && index === 0 ? /* @__PURE__ */ React.createElement("li", {
    role: "separator"
  }, /* @__PURE__ */ React.createElement(Divider, null)) : null)) : /* @__PURE__ */ React.createElement("p", null, "No posts to display."));
}

// app/components/Blog/Blog.css
var Blog_default = "/build/_assets/Blog-ICQCGS4J.css";

// app/components/Blog/Blog.jsx
function links18() {
  return [
    ...links12(),
    ...links17(),
    { rel: "stylesheet", href: Blog_default }
  ];
}
function Blog({ posts, postsLimit: postsLimit3, currentPage, category }) {
  let pageCount = Math.round(posts.aggregate.count / postsLimit3);
  return /* @__PURE__ */ React.createElement("main", {
    className: "blog-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "visually-hidden"
  }, "Latest Posts"), /* @__PURE__ */ React.createElement(Posts, {
    layoutType: "masonry",
    posts: posts == null ? void 0 : posts.edges
  }), /* @__PURE__ */ React.createElement(Pagination, {
    currentPage,
    pageCount,
    category
  }));
}

// app/utils/graphql.js
init_react();
var import_graphql_request = require("graphql-request");
var graphcms = new import_graphql_request.GraphQLClient("https://api-ap-south-1.graphcms.com/v2/ckypsi3rt0inu01xx6kuecie8/master");

// route:/Users/beya/Documents/Programming/gw1e/app/routes/category/$category/$page.jsx
function links19() {
  return [...links18()];
}
function meta2() {
  return { title: "Girl with One Earring | Blog" };
}
var postsLimit = 6;
var GetPostsQuery = import_graphql_request2.gql`
  query GetPostsQuery(
    $postsLimit: Int!
    $offset: Int!
    $category: PostWhereInput
  ) {
    postsConnection(first: $postsLimit, skip: $offset, where: $category) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
      }
      aggregate {
        count
      }

      edges {
        cursor
        node {
          id
          title
          category {
            name
          }
          excerpt
          updatedAt
          slug
          featuredImage {
            image {
              thumbnail: url(
                transformation: {
                  image: { resize: { height: 300, width: 400 } }
                  document: { output: { format: webp } }
                }
              )
              url(
                transformation: {
                  image: { resize: { height: 400, width: 600 } }
                  document: { output: { format: webp } }
                }
              )
              width
              height
            }
          }
        }
      }
    }
  }
`;
var loader = async ({ params }) => {
  const offset = (params.page - 1) * postsLimit;
  const category = params.category === "all" ? void 0 : params.category.charAt(0).toUpperCase() + params.category.slice(1).toLowerCase();
  const { postsConnection } = await graphcms.request(GetPostsQuery, {
    postsLimit,
    offset,
    category: { category: { name: category } }
  });
  return { postsConnection };
};
function Posts2() {
  let { postsConnection } = (0, import_remix10.useLoaderData)();
  const { category, page } = (0, import_remix10.useParams)();
  return /* @__PURE__ */ React.createElement(Blog, {
    currentPage: page,
    postsLimit,
    posts: postsConnection,
    category
  });
}

// route:/Users/beya/Documents/Programming/gw1e/app/routes/category/$category/index.jsx
var category_exports = {};
__export(category_exports, {
  default: () => Posts3,
  links: () => links20,
  loader: () => loader2,
  meta: () => meta3
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_graphql_request3 = require("graphql-request");
function links20() {
  return [...links18()];
}
function meta3() {
  return { title: "Girl with One Earring | Blog" };
}
var postsLimit2 = 6;
var GetPostsQuery2 = import_graphql_request3.gql`
  query GetPostsQuery(
    $postsLimit: Int!
    $offset: Int!
    $category: PostWhereInput
  ) {
    postsConnection(first: $postsLimit, skip: $offset, where: $category) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
      }
      aggregate {
        count
      }

      edges {
        cursor
        node {
          id
          title
          category {
            name
          }
          excerpt
          updatedAt
          slug
          featuredImage {
            alt
            image {
              thumbnail: url(
                transformation: {
                  image: { resize: { height: 300, width: 400 } }
                  document: { output: { format: webp } }
                }
              )
              url(
                transformation: {
                  image: { resize: { height: 400, width: 600 } }
                  document: { output: { format: webp } }
                }
              )
              width
              height
            }
          }
        }
      }
    }
  }
`;
var loader2 = async ({ params }) => {
  const category = params.category === "all" ? void 0 : params.category.charAt(0).toUpperCase() + params.category.slice(1).toLowerCase();
  const { postsConnection } = await graphcms.request(GetPostsQuery2, {
    postsLimit: postsLimit2,
    offset: 0,
    category: { category: { name: category } }
  });
  return { postsConnection };
};
function Posts3() {
  let { postsConnection } = (0, import_remix11.useLoaderData)();
  const { category } = (0, import_remix11.useParams)();
  return /* @__PURE__ */ React.createElement(Blog, {
    currentPage: 0,
    postsLimit: postsLimit2,
    posts: postsConnection,
    category
  });
}

// route:/Users/beya/Documents/Programming/gw1e/app/routes/post/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  action: () => action,
  default: () => BlogPage,
  links: () => links30,
  loader: () => loader3
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_graphql_request4 = require("graphql-request");

// app/components/Post/index.js
init_react();

// app/components/Post/SinglePost.jsx
init_react();

// app/components/shared/ArabicSignature/index.js
init_react();

// app/components/shared/ArabicSignature/ArabicSignature.jsx
init_react();

// public/images/arabic_logo.png
var arabic_logo_default = "/build/_assets/arabic_logo-AQBFJRTM.png";

// app/components/shared/ArabicSignature/ArabicSignature.css
var ArabicSignature_default = "/build/_assets/ArabicSignature-N4Q7U2FE.css";

// app/components/shared/ArabicSignature/ArabicSignature.jsx
function links21() {
  return [{ rel: "stylesheet", href: ArabicSignature_default }];
}
function ArabicSignature() {
  return /* @__PURE__ */ React.createElement("img", {
    className: "arabic-signature",
    src: arabic_logo_default,
    alt: "Girl With One Earring Signature in Arabic"
  });
}

// app/components/Post/Body/index.js
init_react();

// app/components/Post/Body/Body.jsx
init_react();
var import_rich_text_react_renderer = require("@graphcms/rich-text-react-renderer");

// app/components/Post/Quote/index.js
init_react();

// app/components/Post/Quote/Quote.jsx
init_react();

// app/components/Post/Quote/Quote.css
var Quote_default = "/build/_assets/Quote-6TNGH34P.css";

// app/components/Post/Quote/Quote.jsx
function links22() {
  return [{ rel: "stylesheet", href: Quote_default }];
}
function Quote({ children }) {
  return /* @__PURE__ */ React.createElement("blockquote", {
    className: "quote"
  }, children);
}

// app/components/Post/Body/Body.css
var Body_default = "/build/_assets/Body-DSF7HXO6.css";

// app/components/Post/Body/Body.jsx
function links23() {
  return [...links22(), { rel: "stylesheet", href: Body_default }];
}
function Body({ content }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "body"
  }, /* @__PURE__ */ React.createElement(import_rich_text_react_renderer.RichText, {
    content,
    renderers: { blockquote: ({ children }) => /* @__PURE__ */ React.createElement(Quote, null, children) }
  }));
}

// app/components/shared/Icons/DecorativeIcons/index.js
init_react();

// app/components/shared/Icons/DecorativeIcons/DecorativeIcons.jsx
init_react();

// app/components/shared/Icons/Living/index.js
init_react();

// app/components/shared/Icons/Living/Living.jsx
init_react();
function Living(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.2em",
    height: "1.2em",
    viewBox: "0 0 300 300"
  }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "category_living_svg__a"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h300v300H0z"
  }))), /* @__PURE__ */ React.createElement("g", {
    "data-name": "GW1E_Living Icon",
    clipPath: "url(#category_living_svg__a)"
  }, /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 5861"
  }, /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 34"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 65",
    d: "M209.002 150.332a58.67 58.67 0 1 0-58.671 58.673 58.671 58.671 0 0 0 58.671-58.673Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 35"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 66",
    d: "M150.331 76.804h14.058L150.331 33.05l-14.058 43.754Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 36"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 67",
    d: "m113.568 86.654 12.183-7.028-34.059-30.864 9.7 44.922Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 37"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 68",
    d: "m86.651 113.568 7.03-12.177-44.919-9.7 30.864 34.057Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 38"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 69",
    d: "M76.807 150.332v-14.058L33.05 150.332l43.757 14.061Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 39"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 70",
    d: "m86.651 187.092-7.025-12.171-30.864 34.053 44.919-9.7Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 40"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 71",
    d: "m113.568 214.007-12.177-7.031-9.7 44.923 34.059-30.859Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 41"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 72",
    d: "M150.331 223.859h-14.058l14.058 43.757 14.058-43.757Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 42"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 73",
    d: "m187.089 214.007-12.171 7.033 34.055 30.859-9.7-44.923Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 43"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 74",
    d: "m214.004 187.092-7.028 12.182 44.925 9.7-30.858-34.053Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 44"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 75",
    d: "M223.855 150.332v14.061l43.757-14.061-43.757-14.058Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 45"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 76",
    d: "m214.004 113.568 7.039 12.18 30.858-34.056-44.925 9.7Z",
    fill: "#b79289"
  })), /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 46"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 77",
    d: "m187.089 86.654 12.182 7.031 9.7-44.922-34.053 30.863Z",
    fill: "#b79289"
  })))));
}

// app/components/shared/Icons/Loving/index.js
init_react();

// app/components/shared/Icons/Loving/Loving.jsx
init_react();
function Loving(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.2em",
    height: "1.2em",
    viewBox: "0 0 300 300"
  }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "category_loving_svg__a"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h300v300H0z"
  }))), /* @__PURE__ */ React.createElement("g", {
    "data-name": "GW1E_Loving Icon",
    clipPath: "url(#category_loving_svg__a)"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Icon awesome-heart",
    d: "M234.707 70.829c-22.449-19.131-55.837-15.69-76.443 5.571l-8.07 8.316-8.07-8.316c-20.565-21.264-53.993-24.705-76.443-5.571-25.726 21.955-27.078 61.364-4.055 85.165l79.269 81.85a12.843 12.843 0 0 0 18.558 0l79.264-81.85c23.064-23.8 21.712-63.211-4.015-85.168Z",
    fill: "#b79289"
  })));
}

// app/components/shared/Icons/Doing/index.js
init_react();

// app/components/shared/Icons/Doing/Doing.jsx
init_react();
function Doing(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.2em",
    height: "1.2em",
    viewBox: "0 0 300 300"
  }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "category_doing_svg__a"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h300v300H0z"
  }))), /* @__PURE__ */ React.createElement("g", {
    "data-name": "GW1E_Doing Icon",
    clipPath: "url(#category_doing_svg__a)"
  }, /* @__PURE__ */ React.createElement("g", {
    "data-name": "Group 5890",
    fill: "#b79289"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 1542",
    d: "m158.608 169.898-29.044-29.049c2.457-2.858 4.894-5.895 7.543-8.734 7.332-7.858 14.593-15.793 22.177-23.4a314.243 314.243 0 0 1 31.987-27.427 637.611 637.611 0 0 1 55.117-37.506c4.747-2.9 9.478-1.275 11.515 3.985a5.13 5.13 0 0 1-.359 4.829c-15.022 24.194-31.167 47.6-49.621 69.317-6.75 7.944-13.828 15.664-21.309 22.917-8.839 8.569-18.276 16.522-27.459 24.737a2.918 2.918 0 0 1-.547.331Z"
  }), /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 1543",
    d: "M126.711 193.832c-5.543 7.157-11.164 14.328-14.816 22.793a69.647 69.647 0 0 0-5.187 23.144c-.029.419-.067.837-.113 1.254-.5 4.493.517 3.893-4.759 4.534-9.245 1.124-18.512 2.068-27.757 3.2-7.632.933-14.85 3.465-22.053 6.018-2.769.982-5.557 1.91-8 2.747l35.511-35.511a15.976 15.976 0 0 0 4.106-.061 5.269 5.269 0 0 0 3.563-6.63 5.418 5.418 0 0 0-6.8-3.6 5.514 5.514 0 0 0-3.511 6.834 2.092 2.092 0 0 1-.309 1.73q-17.248 17.364-34.579 34.645a9.212 9.212 0 0 1-.776.572c1.031-3.01 1.822-5.738 2.885-8.357 5.574-13.729 7.5-28.217 9.056-42.792.328-3.088.785-6.162 1.1-9.251.129-1.273.688-1.772 1.955-1.965 4.991-.758 10.02-1.387 14.932-2.51 13.045-2.981 24.175-9.618 33.965-18.381Z"
  }), /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 1544",
    d: "m125.346 145.511 28.393 28.378c-1.534 1.172-3.056 2.424-4.666 3.549-5.607 3.917-11.254 7.778-16.863 11.692a1.709 1.709 0 0 1-2.643-.261q-9.601-9.764-19.358-19.368c-.906-.9-1.136-1.513-.326-2.62 5.175-7.079 10.288-14.204 15.463-21.37Z"
  }))));
}

// app/components/shared/Icons/Dying/index.js
init_react();

// app/components/shared/Icons/Dying/Dying.jsx
init_react();
function Dying(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.2em",
    height: "1.2em",
    viewBox: "0 0 300 300"
  }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "category_dying_svg__a"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h300v300H0z"
  }))), /* @__PURE__ */ React.createElement("g", {
    "data-name": "GW1E_Dying Icon",
    clipPath: "url(#category_dying_svg__a)"
  }, /* @__PURE__ */ React.createElement("g", {
    "data-name": "noun_Pattern Leaves_594388",
    fill: "#b79289"
  }, /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 1488",
    d: "M128.386 230.565s-11.964-7.908-23.353-38.358c12.642 7.35 25.29 6.96 27.206 6.523-.636-2.435-.115-6.504 1.924-12.048s6.23-10.13 22.471-16.658c-2.83-4.27 8.312-18.666 8.312-18.666s-12.81 4.62-13.603-1.326c-4.431 3.189-16.563 7.25-19.87.186s8.198-25.17 14.347-33.185c-8.419.553-9.607-10.301-9.76-21.552-10.665 21.055-22.545 7.163-22.545 7.163s1.54 18.757-8.073 20.062-13.714-15.57-15.021-29.056c-6.588 6.1-10.817 5.937-15.758-2.285-4.63 2.67-11.21-2.84-16.908-12.26 3.253 33.278-8.682 33.986-15.025 33.742 5.94 6.946 16.818 25.985 12.584 33.562s-11.173 1.907-17.272-4.68c-7.468 10.009-8.385 9.171-25.26 5.529 27.155 21.125 8.161 25.14 8.161 25.14s7.02 3.557 11.448 4.238c7.26 1.082 16.874 3.643 18.783 10.945 1.75 7.662-3 11.568-17.929 19.976 15.2 1.606 17.671 5.717 18.585 10.426 7.505-5.26 18.162-10.84 25.461-8.879 7.46 1.601 6.256 10.099 6.256 10.099s7.505-5.261 11.818-11.083c2.476-3.629 4.995-10.25 6.035-14.519 12.345 32.166 24.668 40.234 25.386 40.554l.36.16a2.201 2.201 0 0 0 2.952-.836 3.094 3.094 0 0 0-1.712-2.914Z"
  }), /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 1494",
    d: "M233.512 89.111a78.9 78.9 0 0 0-3.728 12.013c-.414 1.657-.829 3.728-1.657 6.214-11.185.414-46.809 3.728-58.409 28.582 26.512 5.385 48.052-13.67 57.166-23.2-1.657 6.214-3.314 13.256-5.385 20.3-10.77 2.485-44.738 13.256-51.366 39.768 24.026 0 40.6-18.641 48.881-30.654-.829 2.485-1.243 4.557-2.071 7.042-8.7 12.013-28.169 42.667-16.156 68.765 25.269-20.3 23.2-55.923 21.127-69.179a26.794 26.794 0 0 1 1.657-5.385c.828 15.327 4.971 39.353 23.2 50.124 8.285-28.169-12.427-53.023-20.3-61.308 1.657-6.214 3.314-12.427 4.971-17.813 3.314 14.5 12.013 40.6 33.968 48.052 2.071-29-22.369-48.881-31.9-55.509a42.97 42.97 0 0 1 1.243-4.971 87.327 87.327 0 0 1 4.142-12.427c4.142 11.185 15.741 36.039 37.7 39.768-2.9-25.269-27.34-39.353-36.868-43.5a338.883 338.883 0 0 1 15.327-31.068 2.239 2.239 0 0 0-.828-3.314c-.414 0-.414-.414-.828-.414a2.952 2.952 0 0 0-2.485 1.243 324.242 324.242 0 0 0-16.156 32.725c-9.942-1.657-41.01-4.971-55.509 14.084 22.37 9.531 44.736-3.311 54.264-9.938Z"
  }), /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 1499",
    d: "M160.875 214.437c7.81 11.96 16.388 15.915 23.165 19.438-3.633-7.915.004-16.76-5.205-29.241-4.472-10.783-13.115-12.088-16.669-12.365l-4.213-7.862c-.368-.849-1.27-1.065-1.802-.43-.85.369-1.065 1.269-.43 1.801l4.216 7.864c-1.812 2.806-5.234 10.75.938 20.795Z"
  }), /* @__PURE__ */ React.createElement("path", {
    "data-name": "Path 1502",
    d: "M148.014 91.591c14.317 1.613 22.712-2.713 29.256-5.799-8.476-2.008-13.294-10.723-25.844-13.982-11.246-3.113-17.592 2.894-20.084 5.118l-8.792-1.517c-.896-.234-1.62.344-1.448 1.154s.345 1.62 1.156 1.448l8.79 1.518c1.5 3.069 5.25 10.741 16.966 12.06Z"
  }))));
}

// app/components/shared/Icons/DecorativeIcons/DecorativeIcons.css
var DecorativeIcons_default = "/build/_assets/DecorativeIcons-N5BCA3GS.css";

// app/components/shared/Icons/DecorativeIcons/DecorativeIcons.jsx
function links24() {
  return [{ rel: "stylesheet", href: DecorativeIcons_default }];
}
function DecorativeIcons() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "decorative-icons-container"
  }, /* @__PURE__ */ React.createElement(Living, null), /* @__PURE__ */ React.createElement(Loving, null), /* @__PURE__ */ React.createElement(Doing, null), /* @__PURE__ */ React.createElement(Dying, null));
}

// app/components/Post/FeaturedImage/index.js
init_react();

// app/components/Post/FeaturedImage/FeaturedImage.jsx
init_react();

// app/components/Post/FeaturedImage/FeaturedImage.css
var FeaturedImage_default2 = "/build/_assets/FeaturedImage-OK4LAS6Y.css";

// app/components/Post/FeaturedImage/FeaturedImage.jsx
function links25() {
  return [{ rel: "stylesheet", href: FeaturedImage_default2 }];
}
function FeaturedImage2({ image, caption }) {
  return /* @__PURE__ */ React.createElement("figure", {
    className: "featured-image"
  }, /* @__PURE__ */ React.createElement("img", {
    loading: "eager",
    src: image.thumbnail,
    alt: "Featured Image",
    srcSet: `${image.thumbnail} 300w, ${image.url} 600w`,
    sizes: "(min-width: 500px) 600px, 100px"
  }), /* @__PURE__ */ React.createElement("figcaption", null, caption));
}

// app/components/Post/Tags/index.js
init_react();

// app/components/Post/Tags/Tags.jsx
init_react();

// app/components/Post/Tags/Tag/index.js
init_react();

// app/components/Post/Tags/Tag/Tag.jsx
init_react();
var import_remix12 = __toESM(require_remix());

// app/components/Post/Tags/Tag/Tag.css
var Tag_default = "/build/_assets/Tag-MPHLTYLZ.css";

// app/components/Post/Tags/Tag/Tag.jsx
function links26() {
  return [{ rel: "stylesheet", href: Tag_default }];
}
function Tag({ tag }) {
  return /* @__PURE__ */ React.createElement(import_remix12.Link, {
    className: "tag",
    to: `/tag/${tag.name.toLowerCase()}`
  }, "#", tag.name.toLowerCase());
}

// app/components/Post/Tags/Tags.css
var Tags_default = "/build/_assets/Tags-CCW6REVD.css";

// app/components/Post/Tags/Tags.jsx
function links27() {
  return [...links26(), { rel: "stylesheet", href: Tags_default }];
}
function Tags({ tags }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "tags"
  }, tags.map((tag) => /* @__PURE__ */ React.createElement("li", {
    key: tag.id
  }, /* @__PURE__ */ React.createElement(Tag, {
    tag
  }))));
}

// app/components/Post/SharePost/index.js
init_react();

// app/components/Post/SharePost/SharePost.jsx
init_react();
var import_react4 = require("react");
var import_react_share = require("react-share");

// app/components/shared/Icons/Facebook/index.js
init_react();

// app/components/shared/Icons/Facebook/Facebook.jsx
init_react();
function Facebook(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 310 310",
    style: {
      enableBackground: "new 0 0 310 310"
    },
    xmlSpace: "preserve",
    height: "0.8em"
  }, props), /* @__PURE__ */ React.createElement("path", {
    d: "M81.703 165.106h33.981V305a5 5 0 0 0 5 5H178.3a5 5 0 0 0 5-5V165.765h39.064a5 5 0 0 0 4.967-4.429l5.933-51.502a5 5 0 0 0-4.966-5.572h-44.996V71.978c0-9.732 5.24-14.667 15.576-14.667h29.42a5 5 0 0 0 5-5V5.037a5 5 0 0 0-5-5h-40.545A39.746 39.746 0 0 0 185.896 0c-7.035 0-31.488 1.381-50.804 19.151-21.402 19.692-18.427 43.27-17.716 47.358v37.752H81.703a5 5 0 0 0-5 5v50.844a5 5 0 0 0 5 5.001z"
  }));
}

// app/components/shared/Icons/Link/index.js
init_react();

// app/components/shared/Icons/Link/Link.jsx
init_react();
function Link6(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    height: "0.8em",
    viewBox: "2 2 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("path", {
    d: "m7.859 14.691-.81.805a1.814 1.814 0 0 1-2.545 0 1.762 1.762 0 0 1 0-2.504l2.98-2.955c.617-.613 1.779-1.515 2.626-.675a.992.992 0 1 0 1.397-1.407c-1.438-1.428-3.566-1.164-5.419.675l-2.98 2.956A3.719 3.719 0 0 0 2 14.244a3.72 3.72 0 0 0 1.108 2.658c.736.73 1.702 1.096 2.669 1.096s1.934-.365 2.669-1.096l.811-.805a.988.988 0 0 0 .005-1.4.995.995 0 0 0-1.403-.006zm9.032-11.484c-1.547-1.534-3.709-1.617-5.139-.197l-1.009 1.002a.99.99 0 1 0 1.396 1.406l1.01-1.001c.74-.736 1.711-.431 2.346.197.336.335.522.779.522 1.252s-.186.917-.522 1.251l-3.18 3.154c-1.454 1.441-2.136.766-2.427.477a.99.99 0 1 0-1.396 1.406c.668.662 1.43.99 2.228.99.977 0 2.01-.492 2.993-1.467l3.18-3.153A3.732 3.732 0 0 0 18 5.866a3.726 3.726 0 0 0-1.109-2.659z"
  }));
}

// app/components/shared/Icons/Linkedin/index.js
init_react();

// app/components/shared/Icons/Linkedin/Linkedin.jsx
init_react();
function Linkedin(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 310 310",
    xmlSpace: "preserve",
    height: "0.8em"
  }, props), /* @__PURE__ */ React.createElement("path", {
    d: "M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234z"
  }));
}

// app/components/shared/Icons/Mail/index.js
init_react();

// app/components/shared/Icons/Mail/Mail.jsx
init_react();
function Mail(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 63.154 455.862 329.554",
    height: "0.8em",
    xmlSpace: "preserve"
  }, props), /* @__PURE__ */ React.createElement("path", {
    d: "M441.088 63.154H14.774C6.615 63.154 0 69.77 0 77.93v300.003c0 8.16 6.615 14.775 14.774 14.775h426.313c8.16 0 14.775-6.614 14.775-14.775V77.93c0-8.16-6.614-14.776-14.774-14.776zm-37.694 253.505c6.256 5.43 6.926 14.903 1.497 21.16-5.43 6.254-14.901 6.928-21.161 1.496l-105.452-91.523-40.515 35.164c-2.82 2.448-6.326 3.672-9.832 3.672s-7.012-1.224-9.832-3.672l-40.515-35.164-105.452 91.523c-6.257 5.43-15.731 4.761-21.161-1.496-5.43-6.257-4.76-15.73 1.497-21.16L154.7 227.93 52.468 139.203c-6.256-5.43-6.926-14.903-1.497-21.16 5.431-6.256 14.904-6.928 21.161-1.496l155.799 135.22 155.799-135.22c6.256-5.431 15.731-4.762 21.161 1.496 5.43 6.257 4.76 15.731-1.497 21.16L301.162 227.93l102.232 88.729z"
  }));
}

// app/components/shared/Icons/Twitter/index.js
init_react();

// app/components/shared/Icons/Twitter/Twitter.jsx
init_react();
function Twitter(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-0.001 28.097 310 253.806",
    xmlSpace: "preserve",
    height: "0.8em"
  }, props), /* @__PURE__ */ React.createElement("path", {
    d: "M302.973 57.388a117.512 117.512 0 0 1-14.993 5.463 66.276 66.276 0 0 0 13.494-23.73 5 5 0 0 0-7.313-5.824 117.994 117.994 0 0 1-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 0 0-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 0 1-8.907-3.977 5 5 0 0 0-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 0 1-5.063-.735 4.998 4.998 0 0 0-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 0 1-14.095-.826 5 5 0 0 0-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 0 0-6.182-7.351z"
  }));
}

// app/components/Post/SharePost/SharePost.css
var SharePost_default = "/build/_assets/SharePost-TCC5GORR.css";

// app/components/Post/SharePost/SharePost.jsx
function links28() {
  return [{ rel: "stylesheet", href: SharePost_default }];
}
function SharePost() {
  const [shareLink, setShareLink] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    setShareLink(window.location.href);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "social-media"
  }, /* @__PURE__ */ React.createElement("p", null, "Share"), /* @__PURE__ */ React.createElement(import_react_share.TwitterShareButton, {
    url: shareLink
  }, /* @__PURE__ */ React.createElement(Twitter, {
    className: "social-media-icon"
  })), /* @__PURE__ */ React.createElement(import_react_share.FacebookShareButton, {
    url: shareLink
  }, /* @__PURE__ */ React.createElement(Facebook, {
    className: "social-media-icon"
  })), /* @__PURE__ */ React.createElement(import_react_share.LinkedinShareButton, {
    url: shareLink
  }, /* @__PURE__ */ React.createElement(Linkedin, {
    className: "social-media-icon"
  })), /* @__PURE__ */ React.createElement(import_react_share.EmailShareButton, {
    url: shareLink
  }, /* @__PURE__ */ React.createElement(Mail, {
    className: "social-media-icon"
  })), /* @__PURE__ */ React.createElement(Link6, {
    className: "social-media-icon"
  }));
}

// app/components/Post/SinglePost.css
var SinglePost_default = "/build/_assets/SinglePost-5W5MMFAD.css";

// app/components/Post/SinglePost.jsx
function links29() {
  return [
    ...links15(),
    ...links28(),
    ...links24(),
    ...links21(),
    ...links25(),
    ...links27(),
    ...links23(),
    { rel: "stylesheet", href: SinglePost_default }
  ];
}
function SinglePost({ post }) {
  return /* @__PURE__ */ React.createElement("article", {
    className: "post"
  }, /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement(PostMeta, {
    category: post.category,
    date: post.publishedAt
  }), /* @__PURE__ */ React.createElement(SharePost, null), /* @__PURE__ */ React.createElement(FeaturedImage2, {
    image: post.featuredImage.image,
    caption: post.featuredImage.caption
  }), /* @__PURE__ */ React.createElement(Body, {
    content: post.body.raw
  }), /* @__PURE__ */ React.createElement("div", {
    className: "post-footer"
  }, /* @__PURE__ */ React.createElement(Tags, {
    tags: post.tag
  }), /* @__PURE__ */ React.createElement(SharePost, null)), /* @__PURE__ */ React.createElement("p", {
    className: "send-off"
  }, "Till Next Time!"), /* @__PURE__ */ React.createElement(ArabicSignature, null), /* @__PURE__ */ React.createElement(DecorativeIcons, null));
}

// route:/Users/beya/Documents/Programming/gw1e/app/routes/post/$slug.jsx
function links30() {
  return [...links29()];
}
async function action({ request }) {
  const formData = await request.formData();
  return redirect(`/category/all`);
}
var GetPostQuery = import_graphql_request4.gql`
  query GetPostQuery($slug: String!) {
    post(where: { slug: $slug }) {
      body {
        raw
      }
      category {
        name
      }
      featuredImage {
        caption
        image {
          thumbnail: url(
            transformation: {
              image: { resize: { height: 200, width: 300 } }
              document: { output: { format: webp } }
            }
          )
          url(
            transformation: {
              image: { resize: { height: 400, width: 600 } }
              document: { output: { format: webp } }
            }
          )
          width
          height
        }
      }
      tag {
        ... on Tag {
          id
          name
        }
      }
      publishedAt
      id
      slug
      title
    }
  }
`;
var loader3 = async ({ params }) => {
  const slug = params.slug;
  const { post } = await graphcms.request(GetPostQuery, {
    slug
  });
  return { post };
};
function BlogPage() {
  let { post } = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(SinglePost, {
    post
  });
}

// route:/Users/beya/Documents/Programming/gw1e/app/routes/contact.jsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact,
  links: () => links31,
  meta: () => meta4
});
init_react();

// app/styles/contact.css
var contact_default = "/build/_assets/contact-HS7XSBV7.css";

// route:/Users/beya/Documents/Programming/gw1e/app/routes/contact.jsx
function links31() {
  return [...links24(), { rel: "stylesheet", href: contact_default }];
}
function meta4() {
  return { title: "Girl with One Earring | Contact" };
}
function Contact() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", {
    className: "visually-hidden"
  }, "Contact Me"), /* @__PURE__ */ React.createElement("div", {
    className: "contact-container"
  }, /* @__PURE__ */ React.createElement("p", null, "I\u2019d prefer a handwritten letter but since this is the digital age you can find me on Instagram", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://instagram.com/girlwithoneearringblog"
  }, "@girlwithoneearringblog"), " ", "or via e-mail", " ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:girlwithoneearring.com"
  }, "girlwithoneearring@gmail.com")), /* @__PURE__ */ React.createElement("p", null, "Let's Connect"), /* @__PURE__ */ React.createElement(DecorativeIcons, null)));
}

// route:/Users/beya/Documents/Programming/gw1e/app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  links: () => links38,
  meta: () => meta5
});
init_react();

// app/components/About/List/index.js
init_react();

// app/components/About/List/List.jsx
init_react();

// app/components/About/List/Item/index.js
init_react();

// app/components/About/List/Item/Item.jsx
init_react();

// app/components/About/List/Item/Item.css
var Item_default = "/build/_assets/Item-D23YOGWS.css";

// app/components/About/List/Item/Item.jsx
function links32() {
  return [{ rel: "stylesheet", href: Item_default }];
}
function Item({ item }) {
  return /* @__PURE__ */ React.createElement("li", {
    className: (item == null ? void 0 : item.icon) ? "author-list-item icon" : "author-list-item"
  }, (item == null ? void 0 : item.icon) && item["icon"], item.content);
}

// app/components/About/List/List.css
var List_default = "/build/_assets/List-R7QBWXAI.css";

// app/components/About/List/List.jsx
function links33() {
  return [...links32(), { rel: "stylesheet", href: List_default }];
}
function List({ type, items }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: type === "flex" ? "author-list flex" : "author-list"
  }, items.map((item, index) => /* @__PURE__ */ React.createElement(Item, {
    key: index,
    item
  })));
}

// app/components/shared/Icons/WavyLineLong/index.js
init_react();

// app/components/shared/Icons/WavyLineLong/WavyLineLong.jsx
init_react();
function WavyLineLong(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "100%",
    height: 40,
    xmlSpace: "preserve"
  }, props), /* @__PURE__ */ React.createElement("image", {
    width: "100%",
    height: 40,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACPwAAAB4CAMAAABbl47eAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAWlBMVEUAAAC3j4e2koq4kYi3 k4m2kom3koi2kom4kYi3kYm/j4+6j4q3koi3kYi3koi2kom3koi2kYm2kYm2kom3kYi3kYm3koe3 k4e2kYi3kYm2kom2k4m3kon///+r5cxtAAAAHHRSTlMAID9vf6+/j09fEDCf39DA8M/v4LCAYECQ oHBQzhGFUAAAAAFiS0dEHesDcZEAAAAHdElNRQfmAwkMIACq/7qjAAAMBElEQVR42u3daXuiSBRA 4cIFBRfcEBf+/++cKjSdpCcRqLoXqpPzfup5prujR6Eu2IIxAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAKKRTKaz2WyeOgv7q+Vk5Ac0WdpHsWgez9z+ajpJCPQ50CS2 QBmB+gXKIwu0iifQOrJAaTyB1pEFmhHoW6vIAuV/BcqiCTTSz5/M0k39sC2c3fO/0nU2xnqRZIv0 +Qh2zePZPv9rk85GWVAnszmBCBQWaB9VoOUiPXwMVIwdaPpXoON7oDHWi5eBxlgvYguUvweqowi0 eg90/BRov55GFeiQzpYE+l+gMYo0q8T2VJ6rzzvhqiovbhe9mWdDvlJ55pbRXXEpq+rT/0iqc3l1 a1i6GPSVehWojDLQfuBAs5ZAh6EDrb8OlMcWaDVmoDqeQEkT6Hgqb3EEMn8C3b8NVHn+1X6Bpq2B poMGWrYHWkYS6Fa6Rd4GGvQY40OgTy9MXt3LazFqoM+b9p9A6dCB3CBWXP8ONGCSmX2JivL+/Y9f 3a62zHyoF2o5t6/Q9fb9rje/l/ats1kM9EJ1CHRuAmVDBVq3BaqGDTR1gS4dAg30Fm8CnToEGmh5 T6b72AId/rFAyfCBdq8CmcoNHMMG2rYE2g4f6MX4N06g73d5cQY6DBUo7xDoYgOlQwWqmkDloAcQ f8lsktO5/fmuLsf6sNZfTZOF3S1f2t8Q+flkJ+cBxo3MTstFZIF2MQVaxhZoZgNdIwu07RioHiBQ 3ifQZoBAlQt0iy1Qh73ysIHan3gyaKB7+2+8DxVo3jFQ6QLpjxu5PV7uFujqAumPG50D3Vwg/YGk cyBF2aY+dkjy4F4o5S0rsYfsnZPk9oXS3rJ6BaoI9Nrqqr7r6RfobANNVR9P30C7yAJt681Md9/c L9BlV8919809AxX1QTvQvj6WfQKl2oEO9SmmQPc0rkC5PT4tYgpkh+fdJaZAdnjucrys6b7p/ho1 ktLum/Uec77u8Ro9nkFRbxTHRxfo3OcPNIH0xp980TdQVaiOP9Wm3vYKlOsHukYVaB9ZoJld2SML dIwr0CGyQKlHoHlkgQ5xBTrWaVSBTvVB8RCsfyB70JwqHoK5QCN/321lm/Qe8PKLHVP1mlx6T1bV UW1MdYF6T1Z5qTfHuzdN/0BbAr1k9817xUC9djuOW7y0Ak377pcdxUCJb6BFZIE2vyVQFluguWcg rYP4bFOfegda6R3EJ+t61zuQUQzkziiMfLkRe4zc/03jJFedN3Ll86ZxzkeVLd2dRPgxgTTeyEGB NLb0au+5VWkFmtW7m88f/E2BSq8/eK0PGoFWNpDXIen9WM811oqQQBonW+w0X3jt2+wxqsrZqNlh V/qEdwfxcQXa6pyN8g5U6pyNSnwDCcp8zrI8abyR87nHaai3P6vxRr6HBNoqBFoHBCo1Am0I9JIN 1P801JPGrtAF8p4YNHaFVUCglUagRUignUqgk3egQiXQLiSQ+EcG3seD5hFI+rMXN817HQ86N41A e/9AiVIgr+NBQW78Cnle4lv6/eB3hPMkvqXbWWwbWaA6ukAhA/xNI1DAsXdCoNd+RSDvad40gfai a4WbxcIC1bKLaRVwuGMlp8gCnX9DoJATpHeFQN6HO1Kmh9DxS3ZXaPeDoZ8Cyu4K7wR6LcJAQcOq kQ8UNKy6p3SKLNCdQC1PSXStsAtFeCDBxdSupAR6+bcFzmKm+UxFNlDILGaaz1TiChTMnfYJ32kI rhXhK6kRXUwFRg1DoFaigUL3g0Y6UOhCYUSnDZFAgtPGjw0ktVYIjBpGdNoIHzXMjw8UOGoY0WlD ZtQQHMdEAgUKP+3zILVWyKykRm4xFRk1DIFaCQYS2A8ayUACC4WRmzbEAklNGz84kMxaITJqGLlp Q2bUMD86kMxZDalpQ2rUkBrHfs5pnweRtUJqFjNCi6nYqGGEAkmNGubnBpLZDxqhxVRsJTVC0waB 2v4S0UDha0W+lgwksJhKjRpGKpDULGbkAkmd1RCZNiRHDZFx7Ced9nkIX0wlZzEjsZhmsQUSHDWM RCDBWcxIBJKcxYzEYiq4khqJaUNy1DAEan96wYupeKDAxVRy1DASgQRnMSMUSPKsRvi0ITtquHEs 7OnFcNpnJTtqmOCv58nOYib463nCs5ghUKvA76SIBwrcFdpAkguFeawVATuyqehKah6BAnZkieyo YYIDZQR6TSNQyIXQhIdV0wQKuVJc4Pcov3iGl7BAARf9+FoVdim9kKuiCAm6CMF3koAtPeQiBN86 +2/pWoG838jeF6V7JWRL17hKQ8iucBVdIOlZzDQXrPMPJD6smuaKftEF8v1G7yrwoh9fqgKuCTkN u+jHl9xi6hso9KooX4owkPdFM+UPd8zjUnr+gYSHVRN2Kb0k8JoWEjKl8cu9kX32r0nINddecFu6 1+uUKV2EwPeakIqB/N7IvymQ10c7WcBF6V6pPO9F5K5srxLI95KH94CL0r3irgnpswDlXpf+7/D3 lp43AQq5at/Lv9c3kO9V3Nv43uOmUro3wsrzJkBqV+1z14T0CqRxPGgeV4rzC6RwuNO3yUbtqtJe d5JprmyvdCrM604y7k2jNZ/GFmjlFSjVG+B97iTj7h+oGaj31PDbAvUeoCufmwl25HO309zrZoLd JL6BtG7TfPMMpHVROq9AXjcT7Ojsc79czUCn2AL5HKN63StPVqbYxDzuJLPo8xSThW6Tuz1U7vXG WfrcP7A7F6jXlpX0vjNwP9Wx3kcV6NIzUP9bJ/djA/Xb9fS+dXI/NlC/fbN6oG1kgUqPQCpnWd6e b9/V3QbSOcvyfL5958MoAymeRPAKpHmLziZQn9GqmusH6nP+MJ9uFD4z7SWxD0Fzt9P8jKvd9Sw7 /ublulYfB+2Yupl2/BkEanvwvzXQrE8g5ZO7LtC8VyDlD9pdoK6HPMl0bwPp/qPH5Lqr511X02pt V3btQHY+XHTc9+cukNZ5urdAFxeo489wgbTvQHku7EFz10DZXu9U+NvPsKt72jXQaqEfqOoVKP19 gVoert2o6kJ54XLclnVYtz9Xt1HtLgOcCbNbVr1vX97dRlVvhwhUukDtq9fKBRriVOH9Xw20GChQ deoYKB0mUF4eOwbaRBZoTiAC/SuBuhyDuUD1dYCTGi5Qh2OwJtDxrP+VqiZQh2OwpAk04uiTZAu3 bt2G+sztbg+9DvPZ5NvfMJnN3bql+AHc5+d/29pNa519+/xHCZQSKCDQ1AaqIwq0dIGOvzZQ7gJt 2gOVQwWqbKC6PdBpsEDnR6Bv18n8EWiIw8HG6hno23Vy9Qg0wKTxDFS0BkpdoKE+Plld2gNtXKCB vrydn938s55GFOjoAi1jCfR3jslytkjtA9idBtvrPJwvdluv0/lsOvn4WiST6WxuX6F6exlqo3r+ 4NvJvpU36WK2/PRu/hOoKIf9TPLeFug67HvmLdA6rkD7NK5Ah38n0DGyQHU0gbLIAk3GDjSLLVAW S6AitkDHfyXQOj0MH+ipfrMrrrdR/q1Rfi+Lbf1/26K8jzILrm7XYvf/xxNJoMOHQJeRAp0/Bjq8 BzqNFKgiEIGCxBYosYGOXzygMQMVXzyeow00ypdzXgQa57MTArUGOr0Hqj8GOo/19a6yUY37T6yN 2z+fy3fnauz7ephV9eHxlNXYV136E+jyDDTy9wHfA10IRCDPQLfIAt0JRCCxQLfYAt2jCVTGEggA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABo8x9P13+iebuRTwAAACV0RVh0 ZGF0ZTpjcmVhdGUAMjAyMi0wMy0wOVQxMjozMjowMCswMDowMDylxQQAAAAldEVYdGRhdGU6bW9k aWZ5ADIwMjItMDMtMDlUMTI6MzI6MDArMDA6MDBN+H24AAAAAElFTkSuQmCC"
  }));
}

// app/components/shared/Icons/WavyLineShort/index.js
init_react();

// app/components/shared/Icons/WavyLineShort/WavyLineShort.jsx
init_react();
function WavyLineShort(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "100%",
    height: 24,
    xmlSpace: "preserve"
  }, props), /* @__PURE__ */ React.createElement("image", {
    width: "100%",
    height: 24,
    xlinkHref: "data:image/png;base64,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"
  }));
}

// app/components/shared/Icons/Unicorn/index.js
init_react();

// app/components/shared/Icons/Unicorn/Unicorn.jsx
init_react();
function Unicorn(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1.4em",
    height: "1.4em",
    viewBox: "0 0 200 200",
    xmlSpace: "preserve"
  }, props), /* @__PURE__ */ React.createElement("image", {
    width: 200,
    height: 200,
    xlinkHref: "data:image/png;base64,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 rkJggg=="
  }));
}

// app/components/shared/Icons/Mobile/index.js
init_react();

// app/components/shared/Icons/Mobile/Mobile.jsx
init_react();
function Mobile(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1.4em",
    height: "1.4em",
    viewBox: "0 0 200 200",
    xmlSpace: "preserve"
  }, props), /* @__PURE__ */ React.createElement("image", {
    width: 200,
    height: 200,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEUAAAC2koq3k4m3koi3 koi3kYm/j4+2kYm3k4e2kom3koe2kom3kYi2kom2kYm6j4q2kom3kYm3koi3koi2kom3kYm4kYi3 j4e2k4m3kon///9CYeokAAAAGXRSTlMAP3+/n18Q70CPYK/fcM8wwIDw0OCgbyBQvygO2QAAAAFi S0dEGnVn5DIAAAAHdElNRQfmAwkMFgO66npsAAABv0lEQVR42u3d3U6rQBhAUQSs1YMVlOrh/V/U n8RkWhqoZeJHzdqXk5m2KwSmaVIoCkmSJEmSJEmSpN/qpiyrRdXl7SYaUWzKuyFH1TbWsc3D+Ow+ 0vGQjfHRv8DjkdMxDHWUY9PkhQxR58ljZsfQBEF2uSHDUwxk8jO1p9d0k4u6EMcW5KeLQED+IuSi QEBAQH4DsvjtOxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ kD8JacqFVSuB5AsEBGTVkOc26WU0ctzXjD4d6VcCaUej7ey6g7/gr2UfAQEBAQEBAfnoLr2h3O48 SJOuaVYC+eGXv0vXgZwN6buk/XmQNl3TrgTSjkbnIas82UFAQKYhB7801qOR475mVH5pBJmHjDfE /mi7O7FlXuGG2J2ascqTHQQEZBoysyFWp2bYEEHOgNgQkxkgICBXANndJL1+jsxviHW6pv5+pZi7 lE/fN/6iHmMgL9khbzGQ7M9WaGMcRdEv/+wHhT0V5uk5q2Mf5cj8RJhAR9ZjEnTp/W7T5TlR9kEX rIOj0i3uf/xzrCRJkiRJkiRJkq6td7w3/fTbKlDGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAz LTA5VDEyOjIyOjAzKzAwOjAwzMMAWQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0wOVQxMjoy MjowMyswMDowML2euOUAAAAASUVORK5CYII="
  }));
}

// app/components/shared/Icons/Utensils/index.js
init_react();

// app/components/shared/Icons/Utensils/Utensils.jsx
init_react();
function Utensils(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1.4em",
    height: "1.4em",
    viewBox: "0 0 200 200",
    xmlSpace: "preserve"
  }, props), /* @__PURE__ */ React.createElement("image", {
    width: 200,
    height: 200,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACxFBMVEUAAAC3lIu5kIi1lIy0 loe2kpK5i4u4kYm/n4C3kYm3koi4koi2kom3k4q3koq4jo64kYi3kYm3kom2kom2koj/gIC2kom2 koi2k4i2k4e2kYi3kom2kom2koi3kIm2kYi6kYq3koi4koi3kYi2kYm2k4m3komzmYC2koi2kom2 kom3koi4lIq2kom3kom3kom2koi2koi2kYi3kom2koe2koi4koe3kom3kYi3kom2kom2kom7mYi4 kYm8lIa3kYm2koi2koi3kYi5k4u3kYi2kom4kYq3kom2kYm2kYm5kYe5kIa3k4i3koi2kom2koi2 koy3kYm3kYi2kYm4kYi3kIv///+3kYi2kYi3koi8kIW7j4m3k4i2kom3kYm3kYm4lYe1lIa3koi2 kYi4lIi3kYi2koi5lY23kYm1k4m6k4m3kYm3koi3kYm3koi2koa2kom/lYC2kYm2kYi3k4e2kYi3 k4i2kom/j4+3kYm3kom2koi3kYe2kYm3kYm3k4m2kpK2kom3kom3kom4kYq2koiqqqq3koi3kYjV gIC2kYi2kYi1lYq2kom4kom3kYi3kom3koi6j4q2kYi3kYm2koi3k4m3kYm3kYi2koi2kojGjo63 kYi2kYm2kom3k4q2kom3kYm2kom3kom2kYnEiYm2kom/jIy3koi3kYm4kYi3kYi3kYi3kom3kYi3 kYm2kYm4kYi2koi3koi3kIe1k4i2kYi8j4e5k4a2kom2koq3kYm9joS5kIm4kYi7kYi3koi2k4q3 kom4j4W3kYi2koi2kYm2kom3k4m3kYjMmZm2kom3koi3kYq3kYq2k4q5l4u3kom2koi3kom4kYm2 kom5kYu3j4e3koi2koi4kYm4kYi2kYm/gIC3kYi3koi2kYi3kYi3koe3kYm2koi2koq3kom2kYi2 kYm2koi3kon///+lmHY9AAAA6nRSTlMAOT4fEQ4LaAjY1C+vVVkSWqDN484C/NVJQsHJVIEnpSXQ S8raUKYKncts7DLcbsZ+Xt3+RvFE+pLCj+cPQRO3vaFyITw4SLizezM3XPfEhSr0rtZWLgGp6JgX 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"
  }));
}

// app/components/shared/Icons/World/index.js
init_react();

// app/components/shared/Icons/World/World.jsx
init_react();
function World(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1.4em",
    height: "1.4em",
    viewBox: "0 0 200 200",
    xmlSpace: "preserve"
  }, props), /* @__PURE__ */ React.createElement("image", {
    width: 200,
    height: 200,
    xlinkHref: "data:image/png;base64,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 SUVORK5CYII="
  }));
}

// app/styles/about.css
var about_default = "/build/_assets/about-U43PQVCV.css";

// route:/Users/beya/Documents/Programming/gw1e/app/routes/about.jsx
function links38() {
  return [
    ...links21(),
    ...links33(),
    { rel: "stylesheet", href: about_default }
  ];
}
function meta5() {
  return { title: "Girl with One Earring | About" };
}
var interests = [
  {
    content: "Sun Chaser",
    icon: /* @__PURE__ */ React.createElement(Living, null)
  },
  {
    content: "Fantasy Lover",
    icon: /* @__PURE__ */ React.createElement(Unicorn, null)
  },
  {
    content: "90s groover",
    icon: /* @__PURE__ */ React.createElement(Mobile, null)
  },
  {
    content: "Gourmet Taster",
    icon: /* @__PURE__ */ React.createElement(Utensils, null)
  },
  {
    content: "Always on the mover",
    icon: /* @__PURE__ */ React.createElement(World, null)
  }
];
var facts = [
  {
    content: " I spent much of the early 2000s reading Harry Potter fanfiction online."
  },
  {
    content: "Spotify has described me as one of the only people that go from Trap queen to New Americana (and that\u2019s how I roll)."
  },
  {
    content: "If I could be any animal, I\u2019d be a dolphin."
  },
  {
    content: "I am an Aquarius."
  }
];
function About() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "about-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "visually-hidden"
  }, "About Me"), /* @__PURE__ */ React.createElement("section", {
    className: "author-introduction"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "author-image"
  }), /* @__PURE__ */ React.createElement("p", null, "Girlwithoneearring started out as an Instagram page where I would share my musings and feelings with my friends, sort of like an online diary. I was trying to find that special mix of globalized citizen/third culture kid to commiserate with ele bifakaro w yektebo in vielen Sprachen. This page is attempt to take that initiative and multiply it in the hopes of finding other girlwithoneearrings."), /* @__PURE__ */ React.createElement("div", {
    className: "author-interests"
  }, /* @__PURE__ */ React.createElement("h2", null, "Read me if you are a "), /* @__PURE__ */ React.createElement(List, {
    type: "flex",
    items: interests
  }))), /* @__PURE__ */ React.createElement(WavyLineMobile, {
    className: "wavy-line-mobile"
  }), /* @__PURE__ */ React.createElement("section", {
    className: "author-facts"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "title-container"
  }, /* @__PURE__ */ React.createElement("h2", null, "Some lesser known facts about the author:"), /* @__PURE__ */ React.createElement("span", {
    className: "decoration-container"
  }, /* @__PURE__ */ React.createElement(WavyLineShort, null))), /* @__PURE__ */ React.createElement(List, {
    items: facts
  })), /* @__PURE__ */ React.createElement(WavyLineLong, {
    className: "wavy-line-long"
  }), /* @__PURE__ */ React.createElement(WavyLineMobile, {
    className: "wavy-line-mobile"
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h2", null, "Paying it backwards and forwards:"), /* @__PURE__ */ React.createElement("p", null, "There are very few places I will get the chance to thank you, so I will start by doing so here. Thank you for reading this, thank you for participating, thank you for being you. Please know that I am always grateful for your input.", " ")), /* @__PURE__ */ React.createElement("p", null, "Your humble servant,"), /* @__PURE__ */ React.createElement(ArabicSignature, null), /* @__PURE__ */ React.createElement("p", {
    className: "author-signature"
  }, "Girl With One Earring")));
}

// route:/Users/beya/Documents/Programming/gw1e/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index,
  links: () => links45,
  loader: () => loader4,
  meta: () => meta6
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_graphql_request5 = require("graphql-request");

// app/components/Home/BookClubSection/index.js
init_react();

// app/components/Home/BookClubSection/BookClubSection.jsx
init_react();

// app/components/Home/BookClubSection/BookClubList/index.js
init_react();

// app/components/Home/BookClubSection/BookClubList/BookClubList.jsx
init_react();

// app/components/Home/BookClubSection/BookClubList/BookClubItem/index.js
init_react();

// app/components/Home/BookClubSection/BookClubList/BookClubItem/BookClubItem.jsx
init_react();
var import_remix14 = __toESM(require_remix());

// app/components/Home/BookClubSection/BookClubList/BookClubItem/BookClubItem.css
var BookClubItem_default = "/build/_assets/BookClubItem-TKVRZIH7.css";

// app/components/Home/BookClubSection/BookClubList/BookClubItem/BookClubItem.jsx
function links39() {
  return [{ rel: "stylesheet", href: BookClubItem_default }];
}
function BookClubItem({ book }) {
  return /* @__PURE__ */ React.createElement("li", {
    className: "book-club-item",
    key: book.id
  }, /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: `/post/${book.slug}`
  }, /* @__PURE__ */ React.createElement("img", {
    loading: "lazy",
    src: book.featuredImage.image.thumbnail,
    alt: `Book cover for ${book.featuredImage.name}`
  })));
}

// app/components/Home/BookClubSection/BookClubList/BookClubList.css
var BookClubList_default = "/build/_assets/BookClubList-AXRSU2Q7.css";

// app/components/Home/BookClubSection/BookClubList/BookClubList.jsx
function links40() {
  return [...links39(), { rel: "stylesheet", href: BookClubList_default }];
}
function BookClubList({ books }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "book-club-list"
  }, books.map((book) => /* @__PURE__ */ React.createElement(BookClubItem, {
    key: book.id,
    book
  })));
}

// app/components/Home/BookClubSection/BookClubSection.css
var BookClubSection_default = "/build/_assets/BookClubSection-XBAYNDKK.css";

// app/components/Home/BookClubSection/BookClubSection.jsx
function links41() {
  return [...links40(), { rel: "stylesheet", href: BookClubSection_default }];
}
function BookClubSection({ books }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "book-club-section"
  }, /* @__PURE__ */ React.createElement("h2", null, "The Book Club"), /* @__PURE__ */ React.createElement("h3", null, new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date()), "'s Picks"), /* @__PURE__ */ React.createElement(BookClubList, {
    books
  }));
}

// app/components/Home/NewsletterFormSection/index.js
init_react();

// app/components/Home/NewsletterFormSection/NewsletterFormSection.jsx
init_react();
var import_remix15 = __toESM(require_remix());

// app/components/Home/NewsletterFormSection/Input/index.js
init_react();

// app/components/Home/NewsletterFormSection/Input/Input.jsx
init_react();

// app/components/Home/NewsletterFormSection/Input/Input.css
var Input_default = "/build/_assets/Input-OXPW55JP.css";

// app/components/Home/NewsletterFormSection/Input/Input.jsx
function links42() {
  return [{ rel: "stylesheet", href: Input_default }];
}
function Input({ label, name }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "newsletter-form-input-field"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: name
  }, label), /* @__PURE__ */ React.createElement("input", {
    name,
    id: name,
    type: "text"
  }));
}

// app/components/Home/NewsletterFormSection/NewsletterFormSection.css
var NewsletterFormSection_default = "/build/_assets/NewsletterFormSection-T2RASGWE.css";

// app/components/Home/NewsletterFormSection/NewsletterFormSection.jsx
function links43() {
  return [
    ...links(),
    ...links42(),
    { rel: "stylesheet", href: NewsletterFormSection_default }
  ];
}
function NewsletterFormSection() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "newsletter-form-section"
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", null, "Sign Up")), /* @__PURE__ */ React.createElement("p", null, "Subscribe to the email list to get new posts directly to your inbox."), /* @__PURE__ */ React.createElement(import_remix15.Form, {
    method: "post",
    action: "/category/all",
    reloadDocument: true
  }, /* @__PURE__ */ React.createElement(Input, {
    label: "First Name",
    name: "name"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Email",
    name: "email"
  }), /* @__PURE__ */ React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Submit")));
}

// app/components/Home/PostsSection/index.js
init_react();

// app/components/Home/PostsSection/PostsSection.jsx
init_react();

// app/components/Home/PostsSection/PostsSection.css
var PostsSection_default = "/build/_assets/PostsSection-YQBHGQWU.css";

// app/components/Home/PostsSection/PostsSection.jsx
function links44() {
  return [...links17(), { rel: "stylesheet", href: PostsSection_default }];
}
function PostsSection({ blogPosts }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "posts-section"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "visually-hidden"
  }, "Latest Blog Posts"), /* @__PURE__ */ React.createElement(Posts, {
    layoutType: "spotlight",
    posts: blogPosts
  }));
}

// route:/Users/beya/Documents/Programming/gw1e/app/routes/index.jsx
function links45() {
  return [
    ...links41(),
    ...links43(),
    ...links44()
  ];
}
async function action2({ request }) {
  const formData = await request.formData();
  return redirect(`/category/all`);
}
function meta6() {
  return { title: "Girl with One Earring | Home" };
}
var GetBlogPostsQuery = import_graphql_request5.gql`
  {
    posts(first: 4, where: { type: Blog }) {
      id
      title
      category {
        name
      }
      excerpt
      updatedAt
      slug
      featuredImage {
        alt
        image {
          thumbnail: url(
            transformation: {
              image: { resize: { height: 200, width: 300 } }
              document: { output: { format: webp } }
            }
          )
          url(
            transformation: {
              image: { resize: { height: 400, width: 600 } }
              document: { output: { format: webp } }
            }
          )
        }
      }
    }
  }
`;
var GetBookReviewPostsQuery = import_graphql_request5.gql`
  {
    posts(first: 5, where: { type: Review }) {
      id
      title
      excerpt
      updatedAt
      slug
      featuredImage {
        image {
          thumbnail: url(
            transformation: {
              image: { resize: { height: 200, width: 300 } }
              document: { output: { format: webp } }
            }
          )
          url(
            transformation: {
              image: { resize: { height: 400, width: 600 } }
              document: { output: { format: webp } }
            }
          )
        }
        name
      }
    }
  }
`;
var loader4 = async () => {
  const { posts: blogPosts } = await graphcms.request(GetBlogPostsQuery);
  const { posts: bookReviewPosts } = await graphcms.request(GetBookReviewPostsQuery);
  return { blogPosts, bookReviewPosts };
};
function Index() {
  let { blogPosts, bookReviewPosts } = (0, import_remix16.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", {
    className: "visually-hidden"
  }, "Girl with One Earring"), /* @__PURE__ */ React.createElement(PostsSection, {
    blogPosts
  }), /* @__PURE__ */ React.createElement(BookClubSection, {
    books: bookReviewPosts
  }), /* @__PURE__ */ React.createElement(NewsletterFormSection, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "39c14b23", "entry": { "module": "/build/entry.client-LEROQASB.js", "imports": ["/build/_shared/chunk-P6U2FPSF.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-IILGXT67.js", "imports": ["/build/_shared/chunk-2QJ7GQMY.js", "/build/_shared/chunk-IMETRG3O.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-7WHCIXKN.js", "imports": ["/build/_shared/chunk-5QH2KHZM.js", "/build/_shared/chunk-YC3FCOZL.js", "/build/_shared/chunk-5D35VMVU.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category/$page": { "id": "routes/category/$category/$page", "parentId": "root", "path": "category/:category/:page", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category/$page-XPM3NA6J.js", "imports": ["/build/_shared/chunk-O4T4QG3Z.js", "/build/_shared/chunk-HV5OZMRI.js", "/build/_shared/chunk-SYKBPUYU.js", "/build/_shared/chunk-5D35VMVU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category/index": { "id": "routes/category/$category/index", "parentId": "root", "path": "category/:category", "index": true, "caseSensitive": void 0, "module": "/build/routes/category/$category/index-HAVWL2KR.js", "imports": ["/build/_shared/chunk-O4T4QG3Z.js", "/build/_shared/chunk-HV5OZMRI.js", "/build/_shared/chunk-SYKBPUYU.js", "/build/_shared/chunk-5D35VMVU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-WYOPYFO6.js", "imports": ["/build/_shared/chunk-ZFNJL5OS.js", "/build/_shared/chunk-YC3FCOZL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WW4QFNXL.js", "imports": ["/build/_shared/chunk-HV5OZMRI.js", "/build/_shared/chunk-SYKBPUYU.js", "/build/_shared/chunk-5D35VMVU.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/post/$slug": { "id": "routes/post/$slug", "parentId": "root", "path": "post/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/post/$slug-PRRJH2FP.js", "imports": ["/build/_shared/chunk-ZFNJL5OS.js", "/build/_shared/chunk-5QH2KHZM.js", "/build/_shared/chunk-YC3FCOZL.js", "/build/_shared/chunk-SYKBPUYU.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-39C14B23.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/category/$category/$page": {
    id: "routes/category/$category/$page",
    parentId: "root",
    path: "category/:category/:page",
    index: void 0,
    caseSensitive: void 0,
    module: page_exports
  },
  "routes/category/$category/index": {
    id: "routes/category/$category/index",
    parentId: "root",
    path: "category/:category",
    index: true,
    caseSensitive: void 0,
    module: category_exports
  },
  "routes/post/$slug": {
    id: "routes/post/$slug",
    parentId: "root",
    path: "post/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb290LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0J1dHRvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uL0J1dHRvbi5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0luc3RhZ3JhbS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvSW5zdGFncmFtL0luc3RhZ3JhbS5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9DYXRlZ29yeUxpbmsvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0NhdGVnb3J5TGluay9DYXRlZ29yeUxpbmsuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9Ecm9wZG93bkJ1dHRvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvRHJvcGRvd25CdXR0b24vRHJvcGRvd25CdXR0b24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IYW1idXJnZXJCdXR0b24vaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlckJ1dHRvbi9IYW1idXJnZXJCdXR0b24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9DbG9zZS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvQ2xvc2UvQ2xvc2UuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9IYW1idXJnZXIvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0hhbWJ1cmdlci9IYW1idXJnZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9Mb2dvL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9Mb2dvL0xvZ28uanN4IiwgIi4uL2FwcC91dGlscy9rZXlib2FyZEhhbmRsZXIuanMiLCAicm91dGU6L1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvJHBhZ2UuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Jsb2cvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQmxvZy9CbG9nLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CbG9nL1BhZ2luYXRpb24vaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQmxvZy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Jsb2cvUGFnaW5hdGlvbi9QYWdpbmF0aW9uSXRlbS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9CbG9nL1BhZ2luYXRpb24vUGFnaW5hdGlvbkl0ZW0vUGFnaW5hdGlvbkl0ZW0uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0cy9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvUG9zdHMvUG9zdHMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0cy9EaXZpZGVyL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0cy9EaXZpZGVyL0RpdmlkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0SXRlbS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvUG9zdEl0ZW0vUG9zdEl0ZW0uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0SXRlbS9GZWF0dXJlZEltYWdlL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0SXRlbS9GZWF0dXJlZEltYWdlL0ZlYXR1cmVkSW1hZ2UuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0TWV0YS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvUG9zdE1ldGEvUG9zdE1ldGEuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9XYXZ5TGluZU1vYmlsZS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVNb2JpbGUvV2F2eUxpbmVNb2JpbGUuanN4IiwgIi4uL2FwcC91dGlscy9jYWxjdWxhdGVNYXNvbnJ5TGF5b3V0LmpzIiwgIi4uL2FwcC91dGlscy9ncmFwaHFsLmpzIiwgInJvdXRlOi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5L2luZGV4LmpzeCIsICJyb3V0ZTovVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL3Bvc3QvJHNsdWcuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvQXJhYmljU2lnbmF0dXJlL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9BcmFiaWNTaWduYXR1cmUvQXJhYmljU2lnbmF0dXJlLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3N0L0JvZHkvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9Cb2R5L0JvZHkuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvUXVvdGUvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9RdW90ZS9RdW90ZS5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0RlY29yYXRpdmVJY29ucy9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvRGVjb3JhdGl2ZUljb25zL0RlY29yYXRpdmVJY29ucy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpdmluZy9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTGl2aW5nL0xpdmluZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xvdmluZy9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTG92aW5nL0xvdmluZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0RvaW5nL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9Eb2luZy9Eb2luZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0R5aW5nL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9EeWluZy9EeWluZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9GZWF0dXJlZEltYWdlL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvRmVhdHVyZWRJbWFnZS9GZWF0dXJlZEltYWdlLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3N0L1RhZ3MvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9UYWdzL1RhZ3MuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvVGFncy9UYWcvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9UYWdzL1RhZy9UYWcuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvU2hhcmVQb3N0L2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvU2hhcmVQb3N0L1NoYXJlUG9zdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0ZhY2Vib29rL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9GYWNlYm9vay9GYWNlYm9vay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpbmsvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpbmsvTGluay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpbmtlZGluL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9MaW5rZWRpbi9MaW5rZWRpbi5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL01haWwvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL01haWwvTWFpbC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1R3aXR0ZXIvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1R3aXR0ZXIvVHdpdHRlci5qc3giLCAicm91dGU6L1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL3JvdXRlcy9jb250YWN0LmpzeCIsICJyb3V0ZTovVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL2Fib3V0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BYm91dC9MaXN0L2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Fib3V0L0xpc3QvTGlzdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQWJvdXQvTGlzdC9JdGVtL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Fib3V0L0xpc3QvSXRlbS9JdGVtLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVMb25nL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9XYXZ5TGluZUxvbmcvV2F2eUxpbmVMb25nLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVTaG9ydC9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVTaG9ydC9XYXZ5TGluZVNob3J0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvVW5pY29ybi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvVW5pY29ybi9Vbmljb3JuLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTW9iaWxlL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9Nb2JpbGUvTW9iaWxlLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvVXRlbnNpbHMvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1V0ZW5zaWxzL1V0ZW5zaWxzLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV29ybGQvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1dvcmxkL1dvcmxkLmpzeCIsICJyb3V0ZTovVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL2luZGV4LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbi9Cb29rQ2x1YlNlY3Rpb24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hvbWUvQm9va0NsdWJTZWN0aW9uL0Jvb2tDbHViTGlzdC9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbi9Cb29rQ2x1Ykxpc3QvQm9va0NsdWJMaXN0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbi9Cb29rQ2x1Ykxpc3QvQm9va0NsdWJJdGVtL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hvbWUvQm9va0NsdWJTZWN0aW9uL0Jvb2tDbHViTGlzdC9Cb29rQ2x1Ykl0ZW0vQm9va0NsdWJJdGVtLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL05ld3NsZXR0ZXJGb3JtU2VjdGlvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL05ld3NsZXR0ZXJGb3JtU2VjdGlvbi9OZXdzbGV0dGVyRm9ybVNlY3Rpb24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hvbWUvTmV3c2xldHRlckZvcm1TZWN0aW9uL0lucHV0L2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hvbWUvTmV3c2xldHRlckZvcm1TZWN0aW9uL0lucHV0L0lucHV0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL1Bvc3RzU2VjdGlvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL1Bvc3RzU2VjdGlvbi9Qb3N0c1NlY3Rpb24uanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL3Jvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LyRwYWdlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS9pbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL3JvdXRlcy9wb3N0LyRzbHVnLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL2NvbnRhY3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb3V0ZXMvYWJvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvJHBhZ2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS8kcGFnZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjYXRlZ29yeS86Y2F0ZWdvcnkvOnBhZ2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNhdGVnb3J5LzpjYXRlZ29yeVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3QvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3QvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdC86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY29udGFjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29udGFjdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb250YWN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hYm91dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZU1hdGNoZXMsXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IEZvb3RlciwgZm9vdGVyTGlua3MgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IEhlYWRlciwgaGVhZGVyTGlua3MgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcblxuLy8gaW1wb3J0IGZvbnRzIGZyb20gJy4vc3R5bGVzL2ZvbnRzLmNzcyc7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gJy4vc3R5bGVzL3NoYXJlZC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG4gIC4uLmhlYWRlckxpbmtzKCksXG4gIC4uLmZvb3RlckxpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGdsb2JhbFN0eWxlcyB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdHVzFFJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdBIGJsb2cgd2hlcmUgYWxsIG9mIHRoZSBtdXNpbmdzIG9mIGEgR2lybCB3aXRoIE9uZSBFYXJyaW5nIGxpdmUuJyxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBtYXRjaGVzID0gdXNlTWF0Y2hlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInN0eWxlL2Nzc1wiIGhyZWY9XCJzdHlsZXMvc2hhcmVkLmNzc1wiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHlcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICBtYXRjaGVzPy5bMV0/LmlkID09PSAncm91dGVzL3Bvc3QvJHNsdWcnXG4gICAgICAgICAgICA/ICdzZWNvbmRhcnktYmcnXG4gICAgICAgICAgICA6ICdwcmltYXJ5LWJnJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgRm9vdGVyLCBsaW5rcyBhcyBmb290ZXJMaW5rcyB9IGZyb20gJy4vRm9vdGVyJztcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBCdXR0b24sIGJ1dHRvbkxpbmtzIH0gZnJvbSAnLi4vc2hhcmVkL0J1dHRvbic7XG5pbXBvcnQgeyBJbnN0YWdyYW0gfSBmcm9tICcuLi9zaGFyZWQvSWNvbnMvSW5zdGFncmFtJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYnV0dG9uTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCBwYWdlcyA9IFtcbiAgICB7IG5hbWU6ICdIb21lJywgcGF0aDogJy8nIH0sXG4gICAgeyBuYW1lOiAnQmxvZycsIHBhdGg6ICcvY2F0ZWdvcnkvYWxsJyB9LFxuICAgIHsgbmFtZTogJ0Fib3V0JywgcGF0aDogJy9hYm91dCcgfSxcbiAgICB7IG5hbWU6ICdDb250YWN0JywgcGF0aDogJy9jb250YWN0JyB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZvb3Rlci1uYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIkZvb3RlciBOYXZpZ2F0aW9uXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbmF2aWdhdGlvbi1saW5rc1wiPlxuICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtwYWdlLnBhdGh9PntwYWdlLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwiaWNvblwiXG4gICAgICAgIGxhYmVsPVwiRm9sbG93IG9uIEluc3RhZ3JhbVwiXG4gICAgICAgIGljb249ezxJbnN0YWdyYW0gY2xhc3NOYW1lPVwiaWNvblwiIC8+fVxuICAgICAgLz5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCdXR0b24sIGxpbmtzIGFzIGJ1dHRvbkxpbmtzIH0gZnJvbSAnLi9CdXR0b24nO1xuXG5leHBvcnQgeyBCdXR0b24sIGJ1dHRvbkxpbmtzIH07XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcbiAgY2hpbGRyZW4sXG4gIHRvLFxuICBpY29uLFxuICB2YXJpYW50LFxuICBsYWJlbCxcbiAgb25DbGljayxcbiAgY2xhc3NOYW1lLFxuICAuLi5kZWxlZ2F0ZWRcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RvID8gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPXt0b31cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgdmFyaWFudCA9PT0gJ2ljb24nXG4gICAgICAgICAgICAgID8gJ2J1dHRvbiBpY29uLWJ1dHRvbidcbiAgICAgICAgICAgICAgOiB2YXJpYW50ID09PSAncHJpbWFyeSdcbiAgICAgICAgICAgICAgPyAnYnV0dG9uIHByaW1hcnktYnV0dG9uJ1xuICAgICAgICAgICAgICA6ICdidXR0b24nXG4gICAgICAgICAgfVxuICAgICAgICAgIHsuLi5kZWxlZ2F0ZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUgPz8gJyd9XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICB2YXJpYW50ID09PSAnaWNvbidcbiAgICAgICAgICAgICAgICA/ICdidXR0b24gaWNvbi1idXR0b24nXG4gICAgICAgICAgICAgICAgOiB2YXJpYW50ID09PSAncHJpbWFyeSdcbiAgICAgICAgICAgICAgICA/ICdidXR0b24gcHJpbWFyeS1idXR0b24nXG4gICAgICAgICAgICAgICAgOiAnYnV0dG9uJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICB7Li4uZGVsZWdhdGVkfVxuICAgICAgICA+XG4gICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCB7IEluc3RhZ3JhbSB9IGZyb20gJy4vSW5zdGFncmFtJztcbiIsICJleHBvcnQgZnVuY3Rpb24gSW5zdGFncmFtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17MjR9IGhlaWdodD17MjR9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDlhMyAzIDAgMSAwIDAgNiAzIDMgMCAwIDAgMC02em0wLTJhNSA1IDAgMSAxIDAgMTAgNSA1IDAgMCAxIDAtMTB6bTYuNS0uMjVhMS4yNSAxLjI1IDAgMCAxLTIuNSAwIDEuMjUgMS4yNSAwIDAgMSAyLjUgMHpNMTIgNGMtMi40NzQgMC0yLjg3OC4wMDctNC4wMjkuMDU4LS43ODQuMDM3LTEuMzEuMTQyLTEuNzk4LjMzMmEyLjg4NiAyLjg4NiAwIDAgMC0xLjA4LjcwMyAyLjg5IDIuODkgMCAwIDAtLjcwNCAxLjA4Yy0uMTkuNDktLjI5NSAxLjAxNS0uMzMxIDEuNzk4QzQuMDA2IDkuMDc1IDQgOS40NjEgNCAxMmMwIDIuNDc0LjAwNyAyLjg3OC4wNTggNC4wMjkuMDM3Ljc4My4xNDIgMS4zMS4zMzEgMS43OTcuMTcuNDM1LjM3Ljc0OC43MDIgMS4wOC4zMzcuMzM2LjY1LjUzNyAxLjA4LjcwMy40OTQuMTkxIDEuMDIuMjk3IDEuOC4zMzNDOS4wNzUgMTkuOTk0IDkuNDYxIDIwIDEyIDIwYzIuNDc0IDAgMi44NzgtLjAwNyA0LjAyOS0uMDU4Ljc4Mi0uMDM3IDEuMzA5LS4xNDIgMS43OTctLjMzMWEyLjkyIDIuOTIgMCAwIDAgMS4wOC0uNzAyYy4zMzctLjMzNy41MzgtLjY1LjcwNC0xLjA4LjE5LS40OTMuMjk2LTEuMDIuMzMyLTEuOC4wNTItMS4xMDQuMDU4LTEuNDkuMDU4LTQuMDI5IDAtMi40NzQtLjAwNy0yLjg3OC0uMDU4LTQuMDI5LS4wMzctLjc4Mi0uMTQyLTEuMzEtLjMzMi0xLjc5OGEyLjkxMSAyLjkxMSAwIDAgMC0uNzAzLTEuMDggMi44ODQgMi44ODQgMCAwIDAtMS4wOC0uNzA0Yy0uNDktLjE5LTEuMDE2LS4yOTUtMS43OTgtLjMzMUMxNC45MjUgNC4wMDYgMTQuNTM5IDQgMTIgNHptMC0yYzIuNzE3IDAgMy4wNTYuMDEgNC4xMjIuMDYgMS4wNjUuMDUgMS43OS4yMTcgMi40MjguNDY1LjY2LjI1NCAxLjIxNi41OTggMS43NzIgMS4xNTNhNC45MDggNC45MDggMCAwIDEgMS4xNTMgMS43NzJjLjI0Ny42MzcuNDE1IDEuMzYzLjQ2NSAyLjQyOC4wNDcgMS4wNjYuMDYgMS40MDUuMDYgNC4xMjIgMCAyLjcxNy0uMDEgMy4wNTYtLjA2IDQuMTIyLS4wNSAxLjA2NS0uMjE4IDEuNzktLjQ2NSAyLjQyOGE0Ljg4MyA0Ljg4MyAwIDAgMS0xLjE1MyAxLjc3MiA0LjkxNSA0LjkxNSAwIDAgMS0xLjc3MiAxLjE1M2MtLjYzNy4yNDctMS4zNjMuNDE1LTIuNDI4LjQ2NS0xLjA2Ni4wNDctMS40MDUuMDYtNC4xMjIuMDYtMi43MTcgMC0zLjA1Ni0uMDEtNC4xMjItLjA2LTEuMDY1LS4wNS0xLjc5LS4yMTgtMi40MjgtLjQ2NWE0Ljg5IDQuODkgMCAwIDEtMS43NzItMS4xNTMgNC45MDQgNC45MDQgMCAwIDEtMS4xNTMtMS43NzJjLS4yNDgtLjYzNy0uNDE1LTEuMzYzLS40NjUtMi40MjhDMi4wMTMgMTUuMDU2IDIgMTQuNzE3IDIgMTJjMC0yLjcxNy4wMS0zLjA1Ni4wNi00LjEyMi4wNS0xLjA2Ni4yMTctMS43OS40NjUtMi40MjhhNC44OCA0Ljg4IDAgMCAxIDEuMTUzLTEuNzcyQTQuODk3IDQuODk3IDAgMCAxIDUuNDUgMi41MjVjLjYzOC0uMjQ4IDEuMzYyLS40MTUgMi40MjgtLjQ2NUM4Ljk0NCAyLjAxMyA5LjI4MyAyIDEyIDJ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBIZWFkZXIsIGxpbmtzIGFzIGhlYWRlckxpbmtzIH0gZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgeyBIZWFkZXIsIGhlYWRlckxpbmtzIH07XG4iLCAiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhdGVnb3J5TGluaywgY2F0ZWdvcnlMaW5rTGlua3MgfSBmcm9tICcuLi9zaGFyZWQvQ2F0ZWdvcnlMaW5rJztcbmltcG9ydCB7IERyb3Bkb3duQnV0dG9uLCBkcm9wZG93bkJ1dHRvbkxpbmtzIH0gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XG5pbXBvcnQgeyBIYW1idXJnZXJCdXR0b24sIGhhbWJ1cmdlckJ1dHRvbkxpbmtzIH0gZnJvbSAnLi9IYW1idXJnZXJCdXR0b24nO1xuaW1wb3J0IHsgTG9nbywgbG9nb0xpbmtzIH0gZnJvbSAnLi9Mb2dvJztcblxuaW1wb3J0IHsga2V5Ym9hcmRIYW5kbGVyIH0gZnJvbSAnfi91dGlscy9rZXlib2FyZEhhbmRsZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLmNzcyc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4ubG9nb0xpbmtzKCksXG4gICAgLi4uY2F0ZWdvcnlMaW5rTGlua3MoKSxcbiAgICAuLi5oYW1idXJnZXJCdXR0b25MaW5rcygpLFxuICAgIC4uLmRyb3Bkb3duQnV0dG9uTGlua3MoKSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgXTtcbn1cblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgeyBuYW1lOiAnTGl2aW5nJywgcGF0aDogJy9jYXRlZ29yeS9saXZpbmcnIH0sXG4gIHsgbmFtZTogJ0xvdmluZycsIHBhdGg6ICcvY2F0ZWdvcnkvbG92aW5nJyB9LFxuICB7IG5hbWU6ICdSZWFkaW5nJywgcGF0aDogJy9jYXRlZ29yeS9yZWFkaW5nJyB9LFxuICB7IG5hbWU6ICdEb2luZycsIHBhdGg6ICcvY2F0ZWdvcnkvZG9pbmcnIH0sXG4gIHsgbmFtZTogJ0R5aW5nJywgcGF0aDogJy9jYXRlZ29yeS9keWluZycgfSxcbl07XG5cbmNvbnN0IHBhZ2VzID0gW1xuICB7IG5hbWU6ICdIb21lJywgcGF0aDogJy8nLCBoYXNDaGlsZHJlbjogZmFsc2UgfSxcbiAgeyBuYW1lOiAnQmxvZycsIHBhdGg6ICcvY2F0ZWdvcnkvYWxsJywgaGFzQ2hpbGRyZW46IHRydWUgfSxcbiAgeyBuYW1lOiAnQWJvdXQnLCBwYXRoOiAnL2Fib3V0JywgaGFzQ2hpbGRyZW46IGZhbHNlIH0sXG4gIHsgbmFtZTogJ0NvbnRhY3QnLCBwYXRoOiAnL2NvbnRhY3QnLCBoYXNDaGlsZHJlbjogZmFsc2UgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtpc05hdlZpc2libGUsIHNldElzTmF2VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N1Yk5hdlZpc2libGUsIHNldElzU3ViTmF2VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc05hdlZpc2libGUoZmFsc2UpO1xuICB9LCBbcGF0aG5hbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZEhhbmRsZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZEhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17aXNOYXZWaXNpYmxlID8gJ2hlYWRlciBwaW5rJyA6ICdoZWFkZXInfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwiTWFpbiBOYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxIYW1idXJnZXJCdXR0b25cbiAgICAgICAgICBzZXRJc05hdlZpc2libGU9e3NldElzTmF2VmlzaWJsZX1cbiAgICAgICAgICBpc05hdlZpc2libGU9e2lzTmF2VmlzaWJsZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgaXNOYXZWaXNpYmxlXG4gICAgICAgICAgICAgID8gJ21haW4tbmF2aWdhdGlvbi1saW5rcyB2aXNpYmxlJ1xuICAgICAgICAgICAgICA6ICdtYWluLW5hdmlnYXRpb24tbGlua3MnXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+XG4gICAgICAgICAgICBwYWdlLmhhc0NoaWxkcmVuID8gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGlzU3ViTmF2VmlzaWJsZT17aXNTdWJOYXZWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgc2V0SXNTdWJOYXZWaXNpYmxlPXtzZXRJc1N1Yk5hdlZpc2libGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BhZ2UubmFtZX1cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgaXNTdWJOYXZWaXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyAnc3ViLW5hdmlnYXRpb24tbGlua3MgdmlzaWJsZSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdzdWItbmF2aWdhdGlvbi1saW5rcydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlkPVwiYmxvZy1kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Yi1uYXZpZ2F0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2NhdGVnb3J5LnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXRlZ29yeUxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWItbmF2aWdhdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIvY2F0ZWdvcnkvYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFsbCBTdG9yaWVzXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgLy8gcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgdG89e3BhZ2UucGF0aH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICA/ICdsaW5rLWFjdGl2ZSBtYWluLW5hdmlnYXRpb24tbGluaydcbiAgICAgICAgICAgICAgICAgICAgICA6ICdtYWluLW5hdmlnYXRpb24tbGluaydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGFnZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgQ2F0ZWdvcnlMaW5rLCBsaW5rcyBhcyBjYXRlZ29yeUxpbmtMaW5rcyB9IGZyb20gJy4vQ2F0ZWdvcnlMaW5rJztcbiIsICJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2F0ZWdvcnlMaW5rLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yeUxpbmsoe1xuICB0byxcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbiA9ICdkb2luZycsXG4gIC4uLmRlbGVnYXRlZFxufSkge1xuICByZXR1cm4gKFxuICAgIDxOYXZMaW5rXG4gICAgICB0bz17dG99XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZSA/PyAnJ30gY2F0ZWdvcnktbGluayAke1xuICAgICAgICBjaGlsZHJlbiA/IGNoaWxkcmVuPy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgIH1gfVxuICAgICAgey4uLmRlbGVnYXRlZH1cbiAgICA+XG4gICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuICAgIDwvTmF2TGluaz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBEcm9wZG93bkJ1dHRvbiwgbGlua3MgYXMgZHJvcGRvd25CdXR0b25MaW5rcyB9IGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuIiwgImltcG9ydCB7IEJ1dHRvbiwgYnV0dG9uTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0J1dHRvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYnV0dG9uTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRHJvcGRvd25CdXR0b24oe1xuICBpc1N1Yk5hdlZpc2libGUsXG4gIHNldElzU3ViTmF2VmlzaWJsZSxcbiAgY2hpbGRyZW4sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgbGFiZWw9XCJUb2dnbGUgQmxvZyBDYXRlZ29yaWVzIE5hdmlnYXRpb25cIlxuICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGRyb3Bkb3duLWJ1dHRvblwiXG4gICAgICBhcmlhLWV4cGFuZGVkPXtpc1N1Yk5hdlZpc2libGV9XG4gICAgICBhcmlhLWNvbnRyb2xzPVwiYmxvZy1kcm9wZG93blwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1N1Yk5hdlZpc2libGUoIWlzU3ViTmF2VmlzaWJsZSl9XG4gICAgPlxuICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cbiIsICJleHBvcnQge1xuICBIYW1idXJnZXJCdXR0b24sXG4gIGxpbmtzIGFzIGhhbWJ1cmdlckJ1dHRvbkxpbmtzLFxufSBmcm9tICcuL0hhbWJ1cmdlckJ1dHRvbic7XG4iLCAiaW1wb3J0IHsgQnV0dG9uLCBidXR0b25MaW5rcyB9IGZyb20gJy4uLy4uL3NoYXJlZC9CdXR0b24nO1xuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0Nsb3NlJztcbmltcG9ydCB7IEhhbWJ1cmdlciB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvSGFtYnVyZ2VyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hhbWJ1cmdlckJ1dHRvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYnV0dG9uTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSGFtYnVyZ2VyQnV0dG9uKHsgaXNOYXZWaXNpYmxlLCBzZXRJc05hdlZpc2libGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2VmlzaWJsZSghaXNOYXZWaXNpYmxlKX1cbiAgICAgIGxhYmVsPVwiVG9nZ2xlIE5hdmlnYXRpb24gTWVudVwiXG4gICAgICB2YXJpYW50PVwiaWNvblwiXG4gICAgICBjbGFzc05hbWU9XCJoYW1idXJnZXItYnV0dG9uXCJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzTmF2VmlzaWJsZX1cbiAgICAgIGljb249eyFpc05hdlZpc2libGUgPyA8SGFtYnVyZ2VyIC8+IDogPENsb3NlIC8+fVxuICAgIC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgQ2xvc2UsIGxpbmtzIGFzIGNsb3NlTGlua3MgfSBmcm9tICcuL0Nsb3NlJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2xvc2UuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENsb3NlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNzIgNzJcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGdcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ9ezEwfVxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgID5cbiAgICAgICAgPHBhdGggZD1cIm0xNy41IDE3LjUgMzcgMzdNNTQuNSAxNy41bC0zNyAzN1wiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgSGFtYnVyZ2VyLCBsaW5rcyBhcyBoYW1idXJnZXJMaW5rcyB9IGZyb20gJy4vSGFtYnVyZ2VyJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSGFtYnVyZ2VyLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW1idXJnZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA3MiA3MlwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Z1xuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ9ezEwfVxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgID5cbiAgICAgICAgPHBhdGggZD1cIk0xNiAyNmg0ME0xNiAzNmg0ME0xNiA0Nmg0MFwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTG9nbywgbGlua3MgYXMgbG9nb0xpbmtzIH0gZnJvbSAnLi9Mb2dvJztcblxuZXhwb3J0IHsgTG9nbywgbG9nb0xpbmtzIH07XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2ltYWdlcy9HVzFFX0xvZ28ucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ28uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XG4gICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24ga2V5Ym9hcmRIYW5kbGVyKGUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tYnV0dG9uJyk7XG4gIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLWJ1dHRvbicpO1xuICBjb25zdCBzdWJOYXZMaW5rcyA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLW5hdmlnYXRpb24tbGluaycpO1xuICBjb25zdCBtYWluTmF2TGlua3MgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbmF2aWdhdGlvbi1saW5rJyk7XG5cbiAgY29uc3QgZmlyc3RGb2N1c2FibGVFbCA9IGRyb3Bkb3duQnV0dG9uXG4gICAgPyBkcm9wZG93bkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnXG4gICAgICA/IGRyb3Bkb3duQnV0dG9uXG4gICAgICA6IGhhbWJ1cmdlckJ1dHRvblxuICAgIDogaGFtYnVyZ2VyQnV0dG9uO1xuXG4gIGNvbnN0IGRyb3Bkb3duID0gZHJvcGRvd25CdXR0b25cbiAgICA/IGRyb3Bkb3duQnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSdcbiAgICAgID8gc3ViTmF2TGlua3NcbiAgICAgIDogaGFtYnVyZ2VyQnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZScgJiZcbiAgICAgICAgZHJvcGRvd25CdXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZSdcbiAgICAgID8gbWFpbk5hdkxpbmtzXG4gICAgICA6IG51bGxcbiAgICA6IG51bGw7XG5cbiAgY29uc3QgbGFzdEZvY3VzYWJsZUVsID0gZHJvcGRvd24/Lltkcm9wZG93bi5sZW5ndGggLSAxXTtcbiAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgIC8vUm90YXRlIEZvY3VzXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0Rm9jdXNhYmxlRWwpIHtcbiAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxhc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZmlyc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5cbmltcG9ydCB7IEJsb2csIGJsb2dMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9CbG9nJztcblxuaW1wb3J0IHsgZ3JhcGhjbXMgfSBmcm9tICd+L3V0aWxzL2dyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYmxvZ0xpbmtzKCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdHaXJsIHdpdGggT25lIEVhcnJpbmcgfCBCbG9nJyB9O1xufVxuXG5jb25zdCBwb3N0c0xpbWl0ID0gNjtcblxuY29uc3QgR2V0UG9zdHNRdWVyeSA9IGdxbGBcbiAgcXVlcnkgR2V0UG9zdHNRdWVyeShcbiAgICAkcG9zdHNMaW1pdDogSW50IVxuICAgICRvZmZzZXQ6IEludCFcbiAgICAkY2F0ZWdvcnk6IFBvc3RXaGVyZUlucHV0XG4gICkge1xuICAgIHBvc3RzQ29ubmVjdGlvbihmaXJzdDogJHBvc3RzTGltaXQsIHNraXA6ICRvZmZzZXQsIHdoZXJlOiAkY2F0ZWdvcnkpIHtcbiAgICAgIHBhZ2VJbmZvIHtcbiAgICAgICAgaGFzUHJldmlvdXNQYWdlXG4gICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgIGVuZEN1cnNvclxuICAgICAgfVxuICAgICAgYWdncmVnYXRlIHtcbiAgICAgICAgY291bnRcbiAgICAgIH1cblxuICAgICAgZWRnZXMge1xuICAgICAgICBjdXJzb3JcbiAgICAgICAgbm9kZSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGNhdGVnb3J5IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgIHVwZGF0ZWRBdFxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgdGh1bWJuYWlsOiB1cmwoXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICAgICAgICAgIGltYWdlOiB7IHJlc2l6ZTogeyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDQwMCB9IH1cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiB7IG91dHB1dDogeyBmb3JtYXQ6IHdlYnAgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHVybChcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IHsgcmVzaXplOiB7IGhlaWdodDogNDAwLCB3aWR0aDogNjAwIH0gfVxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHsgb3V0cHV0OiB7IGZvcm1hdDogd2VicCB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG9mZnNldCA9IChwYXJhbXMucGFnZSAtIDEpICogcG9zdHNMaW1pdDtcbiAgY29uc3QgY2F0ZWdvcnkgPVxuICAgIHBhcmFtcy5jYXRlZ29yeSA9PT0gJ2FsbCdcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHBhcmFtcy5jYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgIHBhcmFtcy5jYXRlZ29yeS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCB7IHBvc3RzQ29ubmVjdGlvbiB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChHZXRQb3N0c1F1ZXJ5LCB7XG4gICAgcG9zdHNMaW1pdCxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBjYXRlZ29yeTogeyBjYXRlZ29yeTogeyBuYW1lOiBjYXRlZ29yeSB9IH0sXG4gIH0pO1xuXG4gIHJldHVybiB7IHBvc3RzQ29ubmVjdGlvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIGxldCB7IHBvc3RzQ29ubmVjdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNhdGVnb3J5LCBwYWdlIH0gPSB1c2VQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxCbG9nXG4gICAgICBjdXJyZW50UGFnZT17cGFnZX1cbiAgICAgIHBvc3RzTGltaXQ9e3Bvc3RzTGltaXR9XG4gICAgICBwb3N0cz17cG9zdHNDb25uZWN0aW9ufVxuICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgIC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgQmxvZywgbGlua3MgYXMgYmxvZ0xpbmtzIH0gZnJvbSAnLi9CbG9nJztcbiIsICJpbXBvcnQgeyBQYWdpbmF0aW9uLCBwYWdpbmF0aW9uTGlua3MgfSBmcm9tICcuL1BhZ2luYXRpb24nO1xuaW1wb3J0IHsgUG9zdHMsIHBvc3RzTGlua3MgfSBmcm9tICcuLi9zaGFyZWQvUG9zdHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmxvZy5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4ucGFnaW5hdGlvbkxpbmtzKCksXG4gICAgLi4ucG9zdHNMaW5rcygpLFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQmxvZyh7IHBvc3RzLCBwb3N0c0xpbWl0LCBjdXJyZW50UGFnZSwgY2F0ZWdvcnkgfSkge1xuICBsZXQgcGFnZUNvdW50ID0gTWF0aC5yb3VuZChwb3N0cy5hZ2dyZWdhdGUuY291bnQgLyBwb3N0c0xpbWl0KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJsb2ctY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+TGF0ZXN0IFBvc3RzPC9oMT5cbiAgICAgIDxQb3N0cyBsYXlvdXRUeXBlPVwibWFzb25yeVwiIHBvc3RzPXtwb3N0cz8uZWRnZXN9IC8+XG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIHBhZ2VDb3VudD17cGFnZUNvdW50fVxuICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBQYWdpbmF0aW9uLCBsaW5rcyBhcyBwYWdpbmF0aW9uTGlua3MgfSBmcm9tICcuL1BhZ2luYXRpb24nO1xuIiwgImltcG9ydCB7IFBhZ2luYXRpb25JdGVtLCBwYWdpbmF0aW9uSXRlbUxpbmtzIH0gZnJvbSAnLi9QYWdpbmF0aW9uSXRlbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYWdpbmF0aW9uLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5wYWdpbmF0aW9uSXRlbUxpbmtzKCksIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlQ291bnQsIGN1cnJlbnRQYWdlLCBjYXRlZ29yeSB9KSB7XG4gIHJldHVybiAoXG4gICAgPG5hdiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJQYWdpbmF0aW9uXCIgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgPHVsPlxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogcGFnZUNvdW50IH0sIChfLCBpKSA9PiBpICsgMSkubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgUGFnaW5hdGlvbkl0ZW0sIGxpbmtzIGFzIHBhZ2luYXRpb25JdGVtTGlua3MgfSBmcm9tICcuL1BhZ2luYXRpb25JdGVtJztcbiIsICJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbkl0ZW0uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2luYXRpb25JdGVtKHsgaW5kZXgsIGN1cnJlbnRQYWdlLCBjYXRlZ29yeSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPE5hdkxpbmtcbiAgICAgICAgdG89e1xuICAgICAgICAgIGluZGV4ID09PSAwXG4gICAgICAgICAgICA/IGAvY2F0ZWdvcnkvJHtjYXRlZ29yeX1gXG4gICAgICAgICAgICA6IGAvY2F0ZWdvcnkvJHtjYXRlZ29yeX0vJHtpbmRleCArIDF9YFxuICAgICAgICB9XG4gICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICBpc0FjdGl2ZSA/ICdwYWdpbmF0aW9uLWl0ZW0gYWN0aXZlJyA6ICdwYWdpbmF0aW9uLWl0ZW0nXG4gICAgICAgIH1cbiAgICAgICAgYXJpYS1sYWJlbD1cIkdvIHRvIHBhZ2VcIlxuICAgICAgICBhcmlhLWN1cnJlbnQ9e2N1cnJlbnRQYWdlID09PSBpbmRleH1cbiAgICAgICAgZW5kXG4gICAgICA+XG4gICAgICAgIHtpbmRleCArIDF9XG4gICAgICA8L05hdkxpbms+XG4gICAgPC9saT5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBQb3N0cywgbGlua3MgYXMgcG9zdHNMaW5rcyB9IGZyb20gJy4vUG9zdHMnO1xuIiwgImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGl2aWRlciwgZGl2aWRlckxpbmtzIH0gZnJvbSAnLi9EaXZpZGVyJztcbmltcG9ydCB7IFBvc3RJdGVtLCBwb3N0SXRlbUxpbmtzIH0gZnJvbSAnLi4vUG9zdEl0ZW0nO1xuXG5pbXBvcnQgeyBmaWx0ZXJHcmlkcywgb25MYXlvdXQgfSBmcm9tICd+L3V0aWxzL2NhbGN1bGF0ZU1hc29ucnlMYXlvdXQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9zdHMuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIC4uLnBvc3RJdGVtTGlua3MoKSxcbiAgICAuLi5kaXZpZGVyTGlua3MoKSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RzKHsgbGF5b3V0VHlwZSwgcG9zdHMgfSkge1xuICBjb25zdCBncmlkUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGhhbmRsZXJzID0gW107XG5cbiAgICBpZiAoZ3JpZFJlZi5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRNYXNvbnJ5R3JpZHMgPSBmaWx0ZXJHcmlkcyhbZ3JpZFJlZi5jdXJyZW50XSk7XG4gICAgICAgIG9uTGF5b3V0KGZpbHRlcmVkTWFzb25yeUdyaWRzKSgpO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdyZXNpemUnLFxuICAgICAgICAgIChoYW5kbGVyc1tmaWx0ZXJlZE1hc29ucnlHcmlkc10gPSBvbkxheW91dChmaWx0ZXJlZE1hc29ucnlHcmlkcykpLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PlxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgICgpID0+IGhhbmRsZXJzW2ZpbHRlcmVkTWFzb25yeUdyaWRzXSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gIH0sIFtncmlkUmVmLmN1cnJlbnRdKTtcblxuICByZXR1cm4gKFxuICAgIDx1bFxuICAgICAgcmVmPXtsYXlvdXRUeXBlID09PSAnbWFzb25yeScgPyBncmlkUmVmIDogbnVsbH1cbiAgICAgIGNsYXNzTmFtZT17bGF5b3V0VHlwZSA9PT0gJ21hc29ucnknID8gJ2Jsb2ctZ3JpZCBtYXNvbnJ5JyA6ICdibG9nLWdyaWQnfVxuICAgID5cbiAgICAgIHtwb3N0cy5sZW5ndGggPyAoXG4gICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8UG9zdEl0ZW1cbiAgICAgICAgICAgICAgbGF5b3V0VHlwZT17bGF5b3V0VHlwZX1cbiAgICAgICAgICAgICAgcG9zdD17cG9zdC5ub2RlID8/IHBvc3R9XG4gICAgICAgICAgICAgIGZlYXR1cmVkPXtsYXlvdXRUeXBlID09PSAnc3BvdGxpZ2h0JyAmJiBpbmRleCA9PT0gMH1cbiAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtsYXlvdXRUeXBlID09PSAnc3BvdGxpZ2h0JyAmJiBpbmRleCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIj5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxwPk5vIHBvc3RzIHRvIGRpc3BsYXkuPC9wPlxuICAgICAgKX1cbiAgICA8L3VsPlxuICApO1xufVxuIiwgImV4cG9ydCB7IERpdmlkZXIsIGxpbmtzIGFzIGRpdmlkZXJMaW5rcyB9IGZyb20gJy4vRGl2aWRlcic7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RpdmlkZXIuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERpdmlkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgUG9zdEl0ZW0sIGxpbmtzIGFzIHBvc3RJdGVtTGlua3MgfSBmcm9tICcuL1Bvc3RJdGVtJztcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBCdXR0b24sIGJ1dHRvbkxpbmtzIH0gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IEZlYXR1cmVkSW1hZ2UsIGZlYXR1cmVkSW1hZ2VMaW5rcyB9IGZyb20gJy4vRmVhdHVyZWRJbWFnZSc7XG5pbXBvcnQgeyBQb3N0TWV0YSwgcG9zdE1ldGFMaW5rcyB9IGZyb20gJy4uL1Bvc3RNZXRhJztcbmltcG9ydCB7IFdhdnlMaW5lTW9iaWxlIH0gZnJvbSAnLi4vSWNvbnMvV2F2eUxpbmVNb2JpbGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9zdEl0ZW0uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIC4uLnBvc3RNZXRhTGlua3MoKSxcbiAgICAuLi5idXR0b25MaW5rcygpLFxuICAgIC4uLmZlYXR1cmVkSW1hZ2VMaW5rcygpLFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUG9zdEl0ZW0oeyBwb3N0LCBmZWF0dXJlZCwgbGF5b3V0VHlwZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPGFydGljbGVcbiAgICAgICAgY2xhc3NOYW1lPXtmZWF0dXJlZCA/ICdibG9nLXBvc3QtaXRlbSBmZWF0dXJlZCcgOiAnYmxvZy1wb3N0LWl0ZW0nfVxuICAgICAgPlxuICAgICAgICA8RmVhdHVyZWRJbWFnZVxuICAgICAgICAgIGxheW91dFR5cGU9e2xheW91dFR5cGV9XG4gICAgICAgICAgcG9zdD17cG9zdH1cbiAgICAgICAgICBmZWF0dXJlZD17ZmVhdHVyZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAge2xheW91dFR5cGUgPT09ICdzcG90bGlnaHQnID8gKFxuICAgICAgICAgICAgZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY29udGVudC1saW5rXCIgdG89e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgICAgICA8aDM+e3Bvc3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiBmZWF0dXJlZCA/IChcbiAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJjb250ZW50LWxpbmtcIiB0bz17YC9wb3N0LyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICA8UG9zdE1ldGEgY2F0ZWdvcnk9e3Bvc3QuY2F0ZWdvcnl9IGRhdGU9e3Bvc3QudXBkYXRlZEF0fSAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnQtZXhjZXJwdFwiPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgIHtmZWF0dXJlZCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHRvPXtgL3Bvc3QvJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgUmVhZCBQb3N0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8V2F2eUxpbmVNb2JpbGUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2xpPlxuICApO1xufVxuIiwgImV4cG9ydCB7IEZlYXR1cmVkSW1hZ2UsIGxpbmtzIGFzIGZlYXR1cmVkSW1hZ2VMaW5rcyB9IGZyb20gJy4vRmVhdHVyZWRJbWFnZSc7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZlYXR1cmVkSW1hZ2UuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZlYXR1cmVkSW1hZ2UoeyBsYXlvdXRUeXBlLCBmZWF0dXJlZCwgcG9zdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYXlvdXRUeXBlID09PSAnc3BvdGxpZ2h0JyA/IChcbiAgICAgICAgZmVhdHVyZWQgPyAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtaW1hZ2Ugc3BvdGxpZ2h0LWdyaWRcIlxuICAgICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcbiAgICAgICAgICAgIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLmltYWdlLnVybH1cbiAgICAgICAgICAgIGFsdD17cG9zdD8uZmVhdHVyZWRJbWFnZS5hbHR9XG4gICAgICAgICAgICBzcmNTZXQ9e2Ake3Bvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZS50aHVtYm5haWx9IDMwMHcsICR7cG9zdC5mZWF0dXJlZEltYWdlLmltYWdlLnVybH0gNjAwd2B9XG4gICAgICAgICAgICBzaXplcz1cIihtaW4td2lkdGg6IDUwMHB4KSA2MDBweCwgMTAwcHhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtaW1hZ2Ugc3BvdGxpZ2h0LWdyaWRcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgc3JjPXtwb3N0LmZlYXR1cmVkSW1hZ2UuaW1hZ2UudGh1bWJuYWlsfVxuICAgICAgICAgICAgYWx0PXtwb3N0Py5mZWF0dXJlZEltYWdlLmFsdH1cbiAgICAgICAgICAgIHNyY1NldD17YCR7cG9zdC5mZWF0dXJlZEltYWdlLmltYWdlLnRodW1ibmFpbH0gMzAwdywgJHtwb3N0LmZlYXR1cmVkSW1hZ2UuaW1hZ2UudXJsfSA2MDB3YH1cbiAgICAgICAgICAgIHNpemVzPVwiKG1pbi13aWR0aDogODAwcHgpIDEwMHB4LCBcbiAgICAgICAgICAgIChtaW4td2lkdGg6IDUwMHB4KSA2MDBweCwgMTAwcHhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgICkgOiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1pbWFnZSBtYXNvbnJ5LWdyaWRcIlxuICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXG4gICAgICAgICAgc3JjPXtwb3N0LmZlYXR1cmVkSW1hZ2UuaW1hZ2UudGh1bWJuYWlsfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYCR7XG4gICAgICAgICAgICAgIHBvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZS53aWR0aCAvIHBvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZS5oZWlnaHRcbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgIH19XG4gICAgICAgICAgYWx0PXtwb3N0Py5mZWF0dXJlZEltYWdlLmFsdH1cbiAgICAgICAgICBzcmNTZXQ9e2Ake3Bvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZS50aHVtYm5haWx9IDMwMHcsICR7cG9zdC5mZWF0dXJlZEltYWdlLmltYWdlLnVybH0gNjAwd2B9XG4gICAgICAgICAgc2l6ZXM9XCIobWluLXdpZHRoOiA1MDBweCkgMTAwcHgsIDMwMHB4XCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgUG9zdE1ldGEsIGxpbmtzIGFzIHBvc3RNZXRhTGlua3MgfSBmcm9tICcuL1Bvc3RNZXRhJztcbiIsICJpbXBvcnQgeyBDYXRlZ29yeUxpbmssIGNhdGVnb3J5TGlua0xpbmtzIH0gZnJvbSAnLi4vQ2F0ZWdvcnlMaW5rJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bvc3RNZXRhLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5jYXRlZ29yeUxpbmtMaW5rcygpLCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0TWV0YSh7IGNhdGVnb3J5LCBkYXRlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbWV0YVwiPlxuICAgICAgPENhdGVnb3J5TGluayB0bz17YC9jYXRlZ29yeS8ke2NhdGVnb3J5Lm5hbWUudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICA8L0NhdGVnb3J5TGluaz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAge25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZGUtREUnLCB7XG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH0pfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCB7IFdhdnlMaW5lTW9iaWxlIH0gZnJvbSAnLi9XYXZ5TGluZU1vYmlsZSc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFdhdnlMaW5lTW9iaWxlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxpbWFnZVxuICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICB4bGlua0hyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQW9BQUFBQjRDQU1BQUFCVlRiTk1BQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTiBBQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBV2xCTVZFVUFBQUMzajRlMmtvcTNrNG0yIGtvbTNrb2kya29tM2tZbS9qNCs0a1lpNmo0cTRrWWkza29pMmtZbTNrb2kya29tM2tvaTNrWWkya1ltMmtvbTNrWW0za29lM2s0ZTMga1ltMmtZaTJrb20za1lpMms0bTNrb24vLy85Q284eC9BQUFBSEhSU1RsTUFJRDkvcjcrUFh4QnZNRStmejlEQThOL3Y0SUJnUUtDUSBjTEJRU1VHelR3QUFBQUZpUzBkRUhlc0RjWkVBQUFBSGRFbE5SUWZtQXdrTUlBQ3EvN3FqQUFBR1lVbEVRVlI0MnUzY2E1ZWFPaFNBIFlSa0VBVkh1SUpMLy96dlBEbXJIYWIwa0lkaXVzOTduUTl1MU9qWHNzSk5zTU9sbUF3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRDRLZmdLdzNBYmlUZ01kMStmYWpiNTJvVmhySnZkaG1INkZYeXEzV3d2NGVwbSBJL2w5bjMwdTNEUU1jOTFzcnNOTlB0WHUxOThKMTlRK1BxalpzUkRsL01kcW02NmREVmthMVhOYmpXNzJlTG1FS0Y0NytaTmRmZzFYIE4xdW9hN2k3MWNNTjc4TnQ1ai9XVWJoMk5nUzdiZlZIdUlkOC83SGtmeVBaUlVxVlJkdjE5MzNWdDRQMFVCV3ZkMVA2WExybGVHcjcgdXlhU2ZteWxoK3J0YnIxd1UwbSs4dHhPUDhLZDJyT0VlMWd4M0gxZTYzREgvdTYrUzdnbkdYWjF2bCt0MlVCUExZMkVlNS9tZmRlZSBaWlk1cFA5QURnWnhMZDNTUC82NzhTd1QwaXE1a093T3FoeTZ4L2Q3T2pXcURsZkpoU3lYTEdnZnp6blpLTG0vN1MwLzBTemN0RkxOIE1EMjgzOGtrUTcxYUp4ZjZyVXg3NDVOd1c4bjkvQzh2eG9GTWZzT3JhMGhHNlJ6L0tSaEsxbmV2ZnFDWDFNKzkzNU0rVXVYcFZXSUggYmFrcTd5bVlTTGpGeTNDN1FrYWMvM0FyVmJZdnd4MUtGYTB5NGd3N0pwWUxmQnYyVktpRDM0dWNLblYrKzRuQlNlNkoxMmFEWERYZCAyM0M3UmtWK3A0VzBWc1BiNlR3YlZPMTNvR2VSaFB2dWh4SUpOLy9ZZzk5dnBscWRqRWFkWEdUc2IzZ21XM1UwU3VoZ1VBZVBxWkRXIEJxTk5HMHZsTWZObGtTbU1vc2dLRlhsTWhWQ1ZvOG5QSlcxWnAvNmFOYWZ6d1BUMkppZC9DOU5VbTNXTTFqZmVVaUdSUERDOXZjblogWCtaTDJrL0dYZU12RmJLRE9wdk9HWUZrL3VlZlJySkt0UlkvN2lzVmtsd2RMWWE1WlA3Qnk2elFXNlQ5Wms2RnQ2dVgwZlZ2emZOZyBNMmYrMWtzcWRCWnB2OUZ6ZnYzcFNqQlZqZDBZVHdZZncwUUdwazNhYitaVXNPbktKMkx6MmY0YWJ1SGpHVWllQW16U1hveXFXajczIHlpZ3Y3QzQrTy9xc09veXUwR1pnWG5SbHZiUnZaUG0xSG1uQlVjVkx3NDNVeWZvZnRjdm4zdFEyN1VYV3FLVnpyLzBvbjVlYUR5N0Qgd2NGMllGNENPeTdzbTFBZFhZSmNPdmRtVmVseTNmM1NkY2xsbE0vTGNMNm9XWmRSdnRIemk0ZTUxMHp2ZG9XWGRjbTlXYW1IQnJkLyAyUzE2SnVocXkycmpSdWJlQmM4RWljTThkQ0Z6NzRJQmwxb1YyWGV5eGsvZGEzS0Z6cmR6d1VRdEM0TnpmTm1DUWpDMnJZZStTZDNyIFhBaG1kbzhCUDB6dXhZNFVWNE56dU11TEhSTnVDOE9OODBUdHVEQmNKYTVGc2xQNTkyMTBMUVM3QmFOOFFiSGpXRnpkZUhuUWZIdUYgamd2RGxlTkVIYm91RERlRDB3dUtyRnBZdGpvV2dzdEd1WE94NDF4YzNTd3JkZ3hNQ3hhR0s1Y1hGRElQT1M4TU41M0RDNHF1THBmMiBwOHNMQ2hubFM2YmRtY3NMME1XamZDNTIxaXdFNCtWWHVKbUxaTHZiS2dQVFExUlpZL2xNSUU4OXp1WGYzYWRZcjBzZVJ2bkc0UVdvIGoxSHU2d1hvWTVtSGdUbnJyYjR5U3NKRjlkRGRCNTJ0dml5MWZ3djhSR2VWQ2pydHZYeDVJdy9oTmxYSDVHV1ViL1Q4NG44LzBDeFUgUGdibXpDWVZKQS9NdGp3WUdNMHpQNGx0dit0NUxpdk1VMkdxRnhiWmQxcGxuUG5lMG40ekx6VWU5NTc4NnBocVlWMzgyOGVWeW1qLyBtdDRDNVhFODZlL05qVDV1SjNuZ01WekpmS05LTUlnOHpmWVhVb0NhRGZUUTdxdnVOL1RlRTg5N1FQZVIxenpZektYUit5MlVlcnUxIHp6ell6RnZEOHJlUjdDckRMVkRHSlBPcjNidElzbHlWM3FhL2k3Wjh2Mms1a1hEUGZ2ZjA5WVhQRkp6M2cvdC90cEdGNlhYbjZQM2cgNzNkaVdrY2o5K1R3S2hlQ3NGYU5yMkxqTHBwQzFTKzNidTcwZG12dlMxZHlLbCtmaWdqeVdoWCtpN2JPMTZtSUxJMlVLdnpmanpsMiA2WndxZm5pNkt0bEp2elR0T250dHU2TlNUNDdzWmVGQkdXeTNkcElOK3RqU3d5Tjd3VzRyNFk2clBEN3FVeEgxa3lON1gvckkwYkRPIHF6dDlLdUt3NU1pZVBuQWJ6UWZQMXR0eW5YVDZkRldVaDNmbmViTjlxRTg5bHNPS0w1VDZrejZ5dDcwL3ZweDhwYkUrOVZpTUs0YXIgVDJuVlVaeitESGVyRDU0TjZ3enltVDYycEE3YisvTzhnUTVYeVdCYkorc3ZiWXpIYTdqV2JhaXI0dG5CTTQvNjAvVWdzVnpzOWZlbSBhRmZmV1JHTTUrTnZ6VXE0MCtwN2lxYnZjRytPenc2ZWVaU04xNFBFMzhyaXRHTFNYeVRUVU56YXM0bXgxZm9QSGpicE85M2lTZjh5IGZYQnpiZGIvYXZiSGdkdVY2ZVBMTjlNSER6Wm0wNjltUHhsdWNBbjNuL3Z2RkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVBCLzh4OE01bW5NcTZJQnJnQUFBQ1YwUlZoMFpHRjBaVHBqY21WaGRHVUFNakF5TWkwdyBNeTB3T1ZReE1qb3pNam93TUNzd01Eb3dNRHlseFFRQUFBQWxkRVZZZEdSaGRHVTZiVzlrYVdaNUFESXdNakl0TURNdE1EbFVNVEk2IE16STZNREFyTURBNk1EQk4rSDI0QUFBQUFFbEZUa1N1UW1DQ1wiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCBjb25zdCBvbkxheW91dCA9IGZ1bmN0aW9uIChncmlkcykge1xuICByZXR1cm4gZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgIGdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgIGxldCBpbml0aWFsX2hlaWdodCA9IGdyaWQuaXRlbXNbMF0uX2VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgZ3JpZC5pdGVtcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGxldCByZWN0ID0gYy5fZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGMub2ZmID0gcmVjdC5sZWZ0O1xuICAgICAgICBncmlkLmNvbEhlaWdodHMuc2V0KGMub2ZmLCBpbml0aWFsX2hlaWdodCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGdyaWQubmNvbCA9PT0gZ3JpZC5jb2xIZWlnaHRzLnNpemUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBncmlkLm5jb2wgPSBncmlkLmNvbEhlaWdodHMuc2l6ZTtcblxuICAgICAgZ3JpZC5pdGVtcy5mb3JFYWNoKChjKSA9PiBjLl9lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpKTtcblxuICAgICAgLyogaWYgd2UgaGF2ZSBtb3JlIHRoYW4gb25lIGNvbHVtbiAqL1xuICAgICAgaWYgKGdyaWQubmNvbCA+IDEpIHtcbiAgICAgICAgZ3JpZC5pdGVtcy5mb3JFYWNoKChncmlkX2l0ZW0pID0+IHtcbiAgICAgICAgICBsZXQgcmVjdCA9IGdyaWRfaXRlbS5fZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgLyogZ2V0IGhlaWdodCBvZiBtYXNvbnJ5LWVkIGNvbHVtbiAqL1xuICAgICAgICAgIGxldCBjb2xfaGVpZ2h0ID0gZ3JpZC5jb2xIZWlnaHRzLmdldChncmlkX2l0ZW0ub2ZmKTtcbiAgICAgICAgICAvKiBzZXQgbWFyZ2luVG9wIHRvIGRpZmZlcmVudCBiZXR3ZWVuIHdoZXJlIGl0IGlzIGFuZCB3aGVyZSBpdCBzaG91bGQgYmUgKi9cbiAgICAgICAgICBncmlkX2l0ZW0uX2VsLnN0eWxlLm1hcmdpblRvcCA9IGAke2NvbF9oZWlnaHQgLSByZWN0LnRvcH1weGA7XG4gICAgICAgICAgLyogdXBkYXRlIGNvbF9oZWlnaHQgd2l0aCBlbGVtZW50IGhlaWdodCAqL1xuICAgICAgICAgIGNvbF9oZWlnaHQgKz0gZ3JpZF9pdGVtLl9lbC5vZmZzZXRIZWlnaHQgKyBncmlkLmdhcDtcbiAgICAgICAgICBncmlkLmNvbEhlaWdodHMuc2V0KGdyaWRfaXRlbS5vZmYsIGNvbF9oZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJHcmlkcyhncmlkcykge1xuICBpZiAoXG4gICAgZ3JpZHMubGVuZ3RoICYmXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZShncmlkc1swXSkuZ3JpZFRlbXBsYXRlUm93cyAhPT0gJ21hc29ucnknXG4gICkge1xuICAgIGdyaWRzID0gZ3JpZHMubWFwKChncmlkKSA9PiAoe1xuICAgICAgX2VsOiBncmlkLFxuICAgICAgZ2FwOiBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZ3JpZCkucm93R2FwKSxcbiAgICAgIGl0ZW1zOiBbLi4uZ3JpZC5jaGlsZE5vZGVzXVxuICAgICAgICAuZmlsdGVyKChjKSA9PiBjLm5vZGVUeXBlID09PSAxKVxuICAgICAgICAubWFwKChjKSA9PiAoeyBfZWw6IGMgfSkpLFxuICAgICAgbmNvbDogMCxcbiAgICAgIGNvbEhlaWdodHM6IG5ldyBNYXAoKSxcbiAgICB9KSk7XG4gICAgcmV0dXJuIGdyaWRzO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5cbmV4cG9ydCBjb25zdCBncmFwaGNtcyA9IG5ldyBHcmFwaFFMQ2xpZW50KFxuICAnaHR0cHM6Ly9hcGktYXAtc291dGgtMS5ncmFwaGNtcy5jb20vdjIvY2t5cHNpM3J0MGludTAxeHg2a3VlY2llOC9tYXN0ZXInXG4pO1xuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5cbmltcG9ydCB7IEJsb2csIGJsb2dMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9CbG9nJztcblxuaW1wb3J0IHsgZ3JhcGhjbXMgfSBmcm9tICd+L3V0aWxzL2dyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYmxvZ0xpbmtzKCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdHaXJsIHdpdGggT25lIEVhcnJpbmcgfCBCbG9nJyB9O1xufVxuXG5jb25zdCBwb3N0c0xpbWl0ID0gNjtcblxuY29uc3QgR2V0UG9zdHNRdWVyeSA9IGdxbGBcbiAgcXVlcnkgR2V0UG9zdHNRdWVyeShcbiAgICAkcG9zdHNMaW1pdDogSW50IVxuICAgICRvZmZzZXQ6IEludCFcbiAgICAkY2F0ZWdvcnk6IFBvc3RXaGVyZUlucHV0XG4gICkge1xuICAgIHBvc3RzQ29ubmVjdGlvbihmaXJzdDogJHBvc3RzTGltaXQsIHNraXA6ICRvZmZzZXQsIHdoZXJlOiAkY2F0ZWdvcnkpIHtcbiAgICAgIHBhZ2VJbmZvIHtcbiAgICAgICAgaGFzUHJldmlvdXNQYWdlXG4gICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgIGVuZEN1cnNvclxuICAgICAgfVxuICAgICAgYWdncmVnYXRlIHtcbiAgICAgICAgY291bnRcbiAgICAgIH1cblxuICAgICAgZWRnZXMge1xuICAgICAgICBjdXJzb3JcbiAgICAgICAgbm9kZSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGNhdGVnb3J5IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgIHVwZGF0ZWRBdFxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIGFsdFxuICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICB0aHVtYm5haWw6IHVybChcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IHsgcmVzaXplOiB7IGhlaWdodDogMzAwLCB3aWR0aDogNDAwIH0gfVxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHsgb3V0cHV0OiB7IGZvcm1hdDogd2VicCB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgdXJsKFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICBpbWFnZTogeyByZXNpemU6IHsgaGVpZ2h0OiA0MDAsIHdpZHRoOiA2MDAgfSB9XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudDogeyBvdXRwdXQ6IHsgZm9ybWF0OiB3ZWJwIH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB3aWR0aFxuICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgY2F0ZWdvcnkgPVxuICAgIHBhcmFtcy5jYXRlZ29yeSA9PT0gJ2FsbCdcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHBhcmFtcy5jYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgIHBhcmFtcy5jYXRlZ29yeS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGNvbnN0IHsgcG9zdHNDb25uZWN0aW9uIH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KEdldFBvc3RzUXVlcnksIHtcbiAgICBwb3N0c0xpbWl0LFxuICAgIG9mZnNldDogMCxcbiAgICBjYXRlZ29yeTogeyBjYXRlZ29yeTogeyBuYW1lOiBjYXRlZ29yeSB9IH0sXG4gIH0pO1xuXG4gIHJldHVybiB7IHBvc3RzQ29ubmVjdGlvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIGxldCB7IHBvc3RzQ29ubmVjdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNhdGVnb3J5IH0gPSB1c2VQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxCbG9nXG4gICAgICBjdXJyZW50UGFnZT17MH1cbiAgICAgIHBvc3RzTGltaXQ9e3Bvc3RzTGltaXR9XG4gICAgICBwb3N0cz17cG9zdHNDb25uZWN0aW9ufVxuICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgIC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcblxuaW1wb3J0IHsgZ3JhcGhjbXMgfSBmcm9tICd+L3V0aWxzL2dyYXBocWwnO1xuaW1wb3J0IHsgU2luZ2xlUG9zdCwgc2luZ2xlUG9zdExpbmtzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLnNpbmdsZVBvc3RMaW5rcygpXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgcmV0dXJuIHJlZGlyZWN0KGAvY2F0ZWdvcnkvYWxsYCk7XG59XG5cbmNvbnN0IEdldFBvc3RRdWVyeSA9IGdxbGBcbiAgcXVlcnkgR2V0UG9zdFF1ZXJ5KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgcG9zdCh3aGVyZTogeyBzbHVnOiAkc2x1ZyB9KSB7XG4gICAgICBib2R5IHtcbiAgICAgICAgcmF3XG4gICAgICB9XG4gICAgICBjYXRlZ29yeSB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICBjYXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB0aHVtYm5haWw6IHVybChcbiAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiB7XG4gICAgICAgICAgICAgIGltYWdlOiB7IHJlc2l6ZTogeyBoZWlnaHQ6IDIwMCwgd2lkdGg6IDMwMCB9IH1cbiAgICAgICAgICAgICAgZG9jdW1lbnQ6IHsgb3V0cHV0OiB7IGZvcm1hdDogd2VicCB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICAgdXJsKFxuICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICAgICAgaW1hZ2U6IHsgcmVzaXplOiB7IGhlaWdodDogNDAwLCB3aWR0aDogNjAwIH0gfVxuICAgICAgICAgICAgICBkb2N1bWVudDogeyBvdXRwdXQ6IHsgZm9ybWF0OiB3ZWJwIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICB3aWR0aFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YWcge1xuICAgICAgICAuLi4gb24gVGFnIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHVibGlzaGVkQXRcbiAgICAgIGlkXG4gICAgICBzbHVnXG4gICAgICB0aXRsZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWc7XG4gIGNvbnN0IHsgcG9zdCB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChHZXRQb3N0UXVlcnksIHtcbiAgICBzbHVnLFxuICB9KTtcblxuICByZXR1cm4geyBwb3N0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUGFnZSgpIHtcbiAgbGV0IHsgcG9zdCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiA8U2luZ2xlUG9zdCBwb3N0PXtwb3N0fSAvPjtcbn1cbiIsICJleHBvcnQgeyBTaW5nbGVQb3N0LCBsaW5rcyBhcyBzaW5nbGVQb3N0TGlua3MgfSBmcm9tICcuL1NpbmdsZVBvc3QnO1xuIiwgImltcG9ydCB7XG4gIEFyYWJpY1NpZ25hdHVyZSxcbiAgYXJhYmljU2lnbmF0dXJlTGlua3MsXG59IGZyb20gJy4uL3NoYXJlZC9BcmFiaWNTaWduYXR1cmUnO1xuaW1wb3J0IHsgQm9keSwgYm9keUxpbmtzIH0gZnJvbSAnLi9Cb2R5JztcbmltcG9ydCB7XG4gIERlY29yYXRpdmVJY29ucyxcbiAgZGVjb3JhdGl2ZUljb25zTGlua3MsXG59IGZyb20gJy4uL3NoYXJlZC9JY29ucy9EZWNvcmF0aXZlSWNvbnMnO1xuaW1wb3J0IHsgRmVhdHVyZWRJbWFnZSwgZmVhdHVyZWRJbWFnZUxpbmtzIH0gZnJvbSAnLi9GZWF0dXJlZEltYWdlJztcbmltcG9ydCB7IFRhZ3MsIHRhZ3NMaW5rcyB9IGZyb20gJy4vVGFncyc7XG5pbXBvcnQgeyBQb3N0TWV0YSwgcG9zdE1ldGFMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvUG9zdE1ldGEnO1xuaW1wb3J0IHsgU2hhcmVQb3N0LCBzaGFyZVBvc3RMaW5rcyB9IGZyb20gJy4vU2hhcmVQb3N0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpbmdsZVBvc3QuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIC4uLnBvc3RNZXRhTGlua3MoKSxcbiAgICAuLi5zaGFyZVBvc3RMaW5rcygpLFxuICAgIC4uLmRlY29yYXRpdmVJY29uc0xpbmtzKCksXG4gICAgLi4uYXJhYmljU2lnbmF0dXJlTGlua3MoKSxcbiAgICAuLi5mZWF0dXJlZEltYWdlTGlua3MoKSxcbiAgICAuLi50YWdzTGlua3MoKSxcbiAgICAuLi5ib2R5TGlua3MoKSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpbmdsZVBvc3QoeyBwb3N0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgIDxQb3N0TWV0YSBjYXRlZ29yeT17cG9zdC5jYXRlZ29yeX0gZGF0ZT17cG9zdC5wdWJsaXNoZWRBdH0gLz5cbiAgICAgIDxTaGFyZVBvc3QgLz5cbiAgICAgIDxGZWF0dXJlZEltYWdlXG4gICAgICAgIGltYWdlPXtwb3N0LmZlYXR1cmVkSW1hZ2UuaW1hZ2V9XG4gICAgICAgIGNhcHRpb249e3Bvc3QuZmVhdHVyZWRJbWFnZS5jYXB0aW9ufVxuICAgICAgLz5cbiAgICAgIDxCb2R5IGNvbnRlbnQ9e3Bvc3QuYm9keS5yYXd9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtZm9vdGVyXCI+XG4gICAgICAgIDxUYWdzIHRhZ3M9e3Bvc3QudGFnfSAvPlxuXG4gICAgICAgIDxTaGFyZVBvc3QgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwic2VuZC1vZmZcIj5UaWxsIE5leHQgVGltZSE8L3A+XG4gICAgICA8QXJhYmljU2lnbmF0dXJlIC8+XG4gICAgICA8RGVjb3JhdGl2ZUljb25zIC8+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufVxuIiwgImV4cG9ydCB7XG4gIEFyYWJpY1NpZ25hdHVyZSxcbiAgbGlua3MgYXMgYXJhYmljU2lnbmF0dXJlTGlua3MsXG59IGZyb20gJy4vQXJhYmljU2lnbmF0dXJlJztcbiIsICJpbXBvcnQgYXJhYmljTG9nbyBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2FyYWJpY19sb2dvLnBuZyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcmFiaWNTaWduYXR1cmUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFyYWJpY1NpZ25hdHVyZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBjbGFzc05hbWU9XCJhcmFiaWMtc2lnbmF0dXJlXCJcbiAgICAgIHNyYz17YXJhYmljTG9nb31cbiAgICAgIGFsdD1cIkdpcmwgV2l0aCBPbmUgRWFycmluZyBTaWduYXR1cmUgaW4gQXJhYmljXCJcbiAgICAvPlxuICApO1xufVxuIiwgImV4cG9ydCB7IEJvZHksIGxpbmtzIGFzIGJvZHlMaW5rcyB9IGZyb20gJy4vQm9keSc7XG4iLCAiaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdAZ3JhcGhjbXMvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJztcblxuaW1wb3J0IHsgUXVvdGUsIHF1b3RlTGlua3MgfSBmcm9tICcuLi9RdW90ZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb2R5LmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5xdW90ZUxpbmtzKCksIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvZHkoeyBjb250ZW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgIDxSaWNoVGV4dFxuICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICByZW5kZXJlcnM9e3sgYmxvY2txdW90ZTogKHsgY2hpbGRyZW4gfSkgPT4gPFF1b3RlPntjaGlsZHJlbn08L1F1b3RlPiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBRdW90ZSwgbGlua3MgYXMgcXVvdGVMaW5rcyB9IGZyb20gJy4vUXVvdGUnO1xuIiwgImltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdW90ZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUXVvdGUoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJxdW90ZVwiPntjaGlsZHJlbn08L2Jsb2NrcXVvdGU+O1xufVxuIiwgImV4cG9ydCB7XG4gIERlY29yYXRpdmVJY29ucyxcbiAgbGlua3MgYXMgZGVjb3JhdGl2ZUljb25zTGlua3MsXG59IGZyb20gJy4vRGVjb3JhdGl2ZUljb25zJztcbiIsICJpbXBvcnQgeyBMaXZpbmcgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpdmluZyc7XG5pbXBvcnQgeyBMb3ZpbmcgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xvdmluZyc7XG5pbXBvcnQgeyBEb2luZyB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvRG9pbmcnO1xuaW1wb3J0IHsgRHlpbmcgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0R5aW5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RlY29yYXRpdmVJY29ucy5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRGVjb3JhdGl2ZUljb25zKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVjb3JhdGl2ZS1pY29ucy1jb250YWluZXJcIj5cbiAgICAgIDxMaXZpbmcgLz5cbiAgICAgIDxMb3ZpbmcgLz5cbiAgICAgIDxEb2luZyAvPlxuICAgICAgPER5aW5nIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgTGl2aW5nIH0gZnJvbSAnLi9MaXZpbmcnO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBMaXZpbmcocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMS4yZW1cIlxuICAgICAgaGVpZ2h0PVwiMS4yZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzMDAgMzAwXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2F0ZWdvcnlfbGl2aW5nX3N2Z19fYVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDMwMHYzMDBIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgICAgPGcgZGF0YS1uYW1lPVwiR1cxRV9MaXZpbmcgSWNvblwiIGNsaXBQYXRoPVwidXJsKCNjYXRlZ29yeV9saXZpbmdfc3ZnX19hKVwiPlxuICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA1ODYxXCI+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzRcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNjVcIlxuICAgICAgICAgICAgICBkPVwiTTIwOS4wMDIgMTUwLjMzMmE1OC42NyA1OC42NyAwIDEgMC01OC42NzEgNTguNjczIDU4LjY3MSA1OC42NzEgMCAwIDAgNTguNjcxLTU4LjY3M1pcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA2NlwiXG4gICAgICAgICAgICAgIGQ9XCJNMTUwLjMzMSA3Ni44MDRoMTQuMDU4TDE1MC4zMzEgMzMuMDVsLTE0LjA1OCA0My43NTRaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzZcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNjdcIlxuICAgICAgICAgICAgICBkPVwibTExMy41NjggODYuNjU0IDEyLjE4My03LjAyOC0zNC4wNTktMzAuODY0IDkuNyA0NC45MjJaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzdcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNjhcIlxuICAgICAgICAgICAgICBkPVwibTg2LjY1MSAxMTMuNTY4IDcuMDMtMTIuMTc3LTQ0LjkxOS05LjcgMzAuODY0IDM0LjA1N1pcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzOFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA2OVwiXG4gICAgICAgICAgICAgIGQ9XCJNNzYuODA3IDE1MC4zMzJ2LTE0LjA1OEwzMy4wNSAxNTAuMzMybDQzLjc1NyAxNC4wNjFaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgMzlcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNzBcIlxuICAgICAgICAgICAgICBkPVwibTg2LjY1MSAxODcuMDkyLTcuMDI1LTEyLjE3MS0zMC44NjQgMzQuMDUzIDQ0LjkxOS05LjdaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNDBcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNzFcIlxuICAgICAgICAgICAgICBkPVwibTExMy41NjggMjE0LjAwNy0xMi4xNzctNy4wMzEtOS43IDQ0LjkyMyAzNC4wNTktMzAuODU5WlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjYjc5Mjg5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDQxXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDcyXCJcbiAgICAgICAgICAgICAgZD1cIk0xNTAuMzMxIDIyMy44NTloLTE0LjA1OGwxNC4wNTggNDMuNzU3IDE0LjA1OC00My43NTdaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNDJcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNzNcIlxuICAgICAgICAgICAgICBkPVwibTE4Ny4wODkgMjE0LjAwNy0xMi4xNzEgNy4wMzMgMzQuMDU1IDMwLjg1OS05LjctNDQuOTIzWlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjYjc5Mjg5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDQzXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDc0XCJcbiAgICAgICAgICAgICAgZD1cIm0yMTQuMDA0IDE4Ny4wOTItNy4wMjggMTIuMTgyIDQ0LjkyNSA5LjctMzAuODU4LTM0LjA1M1pcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA0NFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA3NVwiXG4gICAgICAgICAgICAgIGQ9XCJNMjIzLjg1NSAxNTAuMzMydjE0LjA2MWw0My43NTctMTQuMDYxLTQzLjc1Ny0xNC4wNThaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNDVcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNzZcIlxuICAgICAgICAgICAgICBkPVwibTIxNC4wMDQgMTEzLjU2OCA3LjAzOSAxMi4xOCAzMC44NTgtMzQuMDU2LTQ0LjkyNSA5LjdaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNDZcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNzdcIlxuICAgICAgICAgICAgICBkPVwibTE4Ny4wODkgODYuNjU0IDEyLjE4MiA3LjAzMSA5LjctNDQuOTIyLTM0LjA1MyAzMC44NjNaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBMb3ZpbmcgfSBmcm9tICcuL0xvdmluZyc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIExvdmluZyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxLjJlbVwiXG4gICAgICBoZWlnaHQ9XCIxLjJlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwMCAzMDBcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjYXRlZ29yeV9sb3Zpbmdfc3ZnX19hXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0wIDBoMzAwdjMwMEgwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8ZyBkYXRhLW5hbWU9XCJHVzFFX0xvdmluZyBJY29uXCIgY2xpcFBhdGg9XCJ1cmwoI2NhdGVnb3J5X2xvdmluZ19zdmdfX2EpXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZGF0YS1uYW1lPVwiSWNvbiBhd2Vzb21lLWhlYXJ0XCJcbiAgICAgICAgICBkPVwiTTIzNC43MDcgNzAuODI5Yy0yMi40NDktMTkuMTMxLTU1LjgzNy0xNS42OS03Ni40NDMgNS41NzFsLTguMDcgOC4zMTYtOC4wNy04LjMxNmMtMjAuNTY1LTIxLjI2NC01My45OTMtMjQuNzA1LTc2LjQ0My01LjU3MS0yNS43MjYgMjEuOTU1LTI3LjA3OCA2MS4zNjQtNC4wNTUgODUuMTY1bDc5LjI2OSA4MS44NWExMi44NDMgMTIuODQzIDAgMCAwIDE4LjU1OCAwbDc5LjI2NC04MS44NWMyMy4wNjQtMjMuOCAyMS43MTItNjMuMjExLTQuMDE1LTg1LjE2OFpcIlxuICAgICAgICAgIGZpbGw9XCIjYjc5Mjg5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBEb2luZyB9IGZyb20gJy4vRG9pbmcnO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBEb2luZyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxLjJlbVwiXG4gICAgICBoZWlnaHQ9XCIxLjJlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwMCAzMDBcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjYXRlZ29yeV9kb2luZ19zdmdfX2FcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgzMDB2MzAwSDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxnIGRhdGEtbmFtZT1cIkdXMUVfRG9pbmcgSWNvblwiIGNsaXBQYXRoPVwidXJsKCNjYXRlZ29yeV9kb2luZ19zdmdfX2EpXCI+XG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDU4OTBcIiBmaWxsPVwiI2I3OTI4OVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1NDJcIlxuICAgICAgICAgICAgZD1cIm0xNTguNjA4IDE2OS44OTgtMjkuMDQ0LTI5LjA0OWMyLjQ1Ny0yLjg1OCA0Ljg5NC01Ljg5NSA3LjU0My04LjczNCA3LjMzMi03Ljg1OCAxNC41OTMtMTUuNzkzIDIyLjE3Ny0yMy40YTMxNC4yNDMgMzE0LjI0MyAwIDAgMSAzMS45ODctMjcuNDI3IDYzNy42MTEgNjM3LjYxMSAwIDAgMSA1NS4xMTctMzcuNTA2YzQuNzQ3LTIuOSA5LjQ3OC0xLjI3NSAxMS41MTUgMy45ODVhNS4xMyA1LjEzIDAgMCAxLS4zNTkgNC44MjljLTE1LjAyMiAyNC4xOTQtMzEuMTY3IDQ3LjYtNDkuNjIxIDY5LjMxNy02Ljc1IDcuOTQ0LTEzLjgyOCAxNS42NjQtMjEuMzA5IDIyLjkxNy04LjgzOSA4LjU2OS0xOC4yNzYgMTYuNTIyLTI3LjQ1OSAyNC43MzdhMi45MTggMi45MTggMCAwIDEtLjU0Ny4zMzFaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1NDNcIlxuICAgICAgICAgICAgZD1cIk0xMjYuNzExIDE5My44MzJjLTUuNTQzIDcuMTU3LTExLjE2NCAxNC4zMjgtMTQuODE2IDIyLjc5M2E2OS42NDcgNjkuNjQ3IDAgMCAwLTUuMTg3IDIzLjE0NGMtLjAyOS40MTktLjA2Ny44MzctLjExMyAxLjI1NC0uNSA0LjQ5My41MTcgMy44OTMtNC43NTkgNC41MzQtOS4yNDUgMS4xMjQtMTguNTEyIDIuMDY4LTI3Ljc1NyAzLjItNy42MzIuOTMzLTE0Ljg1IDMuNDY1LTIyLjA1MyA2LjAxOC0yLjc2OS45ODItNS41NTcgMS45MS04IDIuNzQ3bDM1LjUxMS0zNS41MTFhMTUuOTc2IDE1Ljk3NiAwIDAgMCA0LjEwNi0uMDYxIDUuMjY5IDUuMjY5IDAgMCAwIDMuNTYzLTYuNjMgNS40MTggNS40MTggMCAwIDAtNi44LTMuNiA1LjUxNCA1LjUxNCAwIDAgMC0zLjUxMSA2LjgzNCAyLjA5MiAyLjA5MiAwIDAgMS0uMzA5IDEuNzNxLTE3LjI0OCAxNy4zNjQtMzQuNTc5IDM0LjY0NWE5LjIxMiA5LjIxMiAwIDAgMS0uNzc2LjU3MmMxLjAzMS0zLjAxIDEuODIyLTUuNzM4IDIuODg1LTguMzU3IDUuNTc0LTEzLjcyOSA3LjUtMjguMjE3IDkuMDU2LTQyLjc5Mi4zMjgtMy4wODguNzg1LTYuMTYyIDEuMS05LjI1MS4xMjktMS4yNzMuNjg4LTEuNzcyIDEuOTU1LTEuOTY1IDQuOTkxLS43NTggMTAuMDItMS4zODcgMTQuOTMyLTIuNTEgMTMuMDQ1LTIuOTgxIDI0LjE3NS05LjYxOCAzMy45NjUtMTguMzgxWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNTQ0XCJcbiAgICAgICAgICAgIGQ9XCJtMTI1LjM0NiAxNDUuNTExIDI4LjM5MyAyOC4zNzhjLTEuNTM0IDEuMTcyLTMuMDU2IDIuNDI0LTQuNjY2IDMuNTQ5LTUuNjA3IDMuOTE3LTExLjI1NCA3Ljc3OC0xNi44NjMgMTEuNjkyYTEuNzA5IDEuNzA5IDAgMCAxLTIuNjQzLS4yNjFxLTkuNjAxLTkuNzY0LTE5LjM1OC0xOS4zNjhjLS45MDYtLjktMS4xMzYtMS41MTMtLjMyNi0yLjYyIDUuMTc1LTcuMDc5IDEwLjI4OC0xNC4yMDQgMTUuNDYzLTIxLjM3WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IER5aW5nIH0gZnJvbSAnLi9EeWluZyc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIER5aW5nKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjEuMmVtXCJcbiAgICAgIGhlaWdodD1cIjEuMmVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAwIDMwMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNhdGVnb3J5X2R5aW5nX3N2Z19fYVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDMwMHYzMDBIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgICAgPGcgZGF0YS1uYW1lPVwiR1cxRV9EeWluZyBJY29uXCIgY2xpcFBhdGg9XCJ1cmwoI2NhdGVnb3J5X2R5aW5nX3N2Z19fYSlcIj5cbiAgICAgICAgPGcgZGF0YS1uYW1lPVwibm91bl9QYXR0ZXJuIExlYXZlc181OTQzODhcIiBmaWxsPVwiI2I3OTI4OVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE0ODhcIlxuICAgICAgICAgICAgZD1cIk0xMjguMzg2IDIzMC41NjVzLTExLjk2NC03LjkwOC0yMy4zNTMtMzguMzU4YzEyLjY0MiA3LjM1IDI1LjI5IDYuOTYgMjcuMjA2IDYuNTIzLS42MzYtMi40MzUtLjExNS02LjUwNCAxLjkyNC0xMi4wNDhzNi4yMy0xMC4xMyAyMi40NzEtMTYuNjU4Yy0yLjgzLTQuMjcgOC4zMTItMTguNjY2IDguMzEyLTE4LjY2NnMtMTIuODEgNC42Mi0xMy42MDMtMS4zMjZjLTQuNDMxIDMuMTg5LTE2LjU2MyA3LjI1LTE5Ljg3LjE4NnM4LjE5OC0yNS4xNyAxNC4zNDctMzMuMTg1Yy04LjQxOS41NTMtOS42MDctMTAuMzAxLTkuNzYtMjEuNTUyLTEwLjY2NSAyMS4wNTUtMjIuNTQ1IDcuMTYzLTIyLjU0NSA3LjE2M3MxLjU0IDE4Ljc1Ny04LjA3MyAyMC4wNjItMTMuNzE0LTE1LjU3LTE1LjAyMS0yOS4wNTZjLTYuNTg4IDYuMS0xMC44MTcgNS45MzctMTUuNzU4LTIuMjg1LTQuNjMgMi42Ny0xMS4yMS0yLjg0LTE2LjkwOC0xMi4yNiAzLjI1MyAzMy4yNzgtOC42ODIgMzMuOTg2LTE1LjAyNSAzMy43NDIgNS45NCA2Ljk0NiAxNi44MTggMjUuOTg1IDEyLjU4NCAzMy41NjJzLTExLjE3MyAxLjkwNy0xNy4yNzItNC42OGMtNy40NjggMTAuMDA5LTguMzg1IDkuMTcxLTI1LjI2IDUuNTI5IDI3LjE1NSAyMS4xMjUgOC4xNjEgMjUuMTQgOC4xNjEgMjUuMTRzNy4wMiAzLjU1NyAxMS40NDggNC4yMzhjNy4yNiAxLjA4MiAxNi44NzQgMy42NDMgMTguNzgzIDEwLjk0NSAxLjc1IDcuNjYyLTMgMTEuNTY4LTE3LjkyOSAxOS45NzYgMTUuMiAxLjYwNiAxNy42NzEgNS43MTcgMTguNTg1IDEwLjQyNiA3LjUwNS01LjI2IDE4LjE2Mi0xMC44NCAyNS40NjEtOC44NzkgNy40NiAxLjYwMSA2LjI1NiAxMC4wOTkgNi4yNTYgMTAuMDk5czcuNTA1LTUuMjYxIDExLjgxOC0xMS4wODNjMi40NzYtMy42MjkgNC45OTUtMTAuMjUgNi4wMzUtMTQuNTE5IDEyLjM0NSAzMi4xNjYgMjQuNjY4IDQwLjIzNCAyNS4zODYgNDAuNTU0bC4zNi4xNmEyLjIwMSAyLjIwMSAwIDAgMCAyLjk1Mi0uODM2IDMuMDk0IDMuMDk0IDAgMCAwLTEuNzEyLTIuOTE0WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNDk0XCJcbiAgICAgICAgICAgIGQ9XCJNMjMzLjUxMiA4OS4xMTFhNzguOSA3OC45IDAgMCAwLTMuNzI4IDEyLjAxM2MtLjQxNCAxLjY1Ny0uODI5IDMuNzI4LTEuNjU3IDYuMjE0LTExLjE4NS40MTQtNDYuODA5IDMuNzI4LTU4LjQwOSAyOC41ODIgMjYuNTEyIDUuMzg1IDQ4LjA1Mi0xMy42NyA1Ny4xNjYtMjMuMi0xLjY1NyA2LjIxNC0zLjMxNCAxMy4yNTYtNS4zODUgMjAuMy0xMC43NyAyLjQ4NS00NC43MzggMTMuMjU2LTUxLjM2NiAzOS43NjggMjQuMDI2IDAgNDAuNi0xOC42NDEgNDguODgxLTMwLjY1NC0uODI5IDIuNDg1LTEuMjQzIDQuNTU3LTIuMDcxIDcuMDQyLTguNyAxMi4wMTMtMjguMTY5IDQyLjY2Ny0xNi4xNTYgNjguNzY1IDI1LjI2OS0yMC4zIDIzLjItNTUuOTIzIDIxLjEyNy02OS4xNzlhMjYuNzk0IDI2Ljc5NCAwIDAgMSAxLjY1Ny01LjM4NWMuODI4IDE1LjMyNyA0Ljk3MSAzOS4zNTMgMjMuMiA1MC4xMjQgOC4yODUtMjguMTY5LTEyLjQyNy01My4wMjMtMjAuMy02MS4zMDggMS42NTctNi4yMTQgMy4zMTQtMTIuNDI3IDQuOTcxLTE3LjgxMyAzLjMxNCAxNC41IDEyLjAxMyA0MC42IDMzLjk2OCA0OC4wNTIgMi4wNzEtMjktMjIuMzY5LTQ4Ljg4MS0zMS45LTU1LjUwOWE0Mi45NyA0Mi45NyAwIDAgMSAxLjI0My00Ljk3MSA4Ny4zMjcgODcuMzI3IDAgMCAxIDQuMTQyLTEyLjQyN2M0LjE0MiAxMS4xODUgMTUuNzQxIDM2LjAzOSAzNy43IDM5Ljc2OC0yLjktMjUuMjY5LTI3LjM0LTM5LjM1My0zNi44NjgtNDMuNWEzMzguODgzIDMzOC44ODMgMCAwIDEgMTUuMzI3LTMxLjA2OCAyLjIzOSAyLjIzOSAwIDAgMC0uODI4LTMuMzE0Yy0uNDE0IDAtLjQxNC0uNDE0LS44MjgtLjQxNGEyLjk1MiAyLjk1MiAwIDAgMC0yLjQ4NSAxLjI0MyAzMjQuMjQyIDMyNC4yNDIgMCAwIDAtMTYuMTU2IDMyLjcyNWMtOS45NDItMS42NTctNDEuMDEtNC45NzEtNTUuNTA5IDE0LjA4NCAyMi4zNyA5LjUzMSA0NC43MzYtMy4zMTEgNTQuMjY0LTkuOTM4WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNDk5XCJcbiAgICAgICAgICAgIGQ9XCJNMTYwLjg3NSAyMTQuNDM3YzcuODEgMTEuOTYgMTYuMzg4IDE1LjkxNSAyMy4xNjUgMTkuNDM4LTMuNjMzLTcuOTE1LjAwNC0xNi43Ni01LjIwNS0yOS4yNDEtNC40NzItMTAuNzgzLTEzLjExNS0xMi4wODgtMTYuNjY5LTEyLjM2NWwtNC4yMTMtNy44NjJjLS4zNjgtLjg0OS0xLjI3LTEuMDY1LTEuODAyLS40My0uODUuMzY5LTEuMDY1IDEuMjY5LS40MyAxLjgwMWw0LjIxNiA3Ljg2NGMtMS44MTIgMi44MDYtNS4yMzQgMTAuNzUuOTM4IDIwLjc5NVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTUwMlwiXG4gICAgICAgICAgICBkPVwiTTE0OC4wMTQgOTEuNTkxYzE0LjMxNyAxLjYxMyAyMi43MTItMi43MTMgMjkuMjU2LTUuNzk5LTguNDc2LTIuMDA4LTEzLjI5NC0xMC43MjMtMjUuODQ0LTEzLjk4Mi0xMS4yNDYtMy4xMTMtMTcuNTkyIDIuODk0LTIwLjA4NCA1LjExOGwtOC43OTItMS41MTdjLS44OTYtLjIzNC0xLjYyLjM0NC0xLjQ0OCAxLjE1NHMuMzQ1IDEuNjIgMS4xNTYgMS40NDhsOC43OSAxLjUxOGMxLjUgMy4wNjkgNS4yNSAxMC43NDEgMTYuOTY2IDEyLjA2WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IEZlYXR1cmVkSW1hZ2UsIGxpbmtzIGFzIGZlYXR1cmVkSW1hZ2VMaW5rcyB9IGZyb20gJy4vRmVhdHVyZWRJbWFnZSc7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZlYXR1cmVkSW1hZ2UuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZlYXR1cmVkSW1hZ2UoeyBpbWFnZSwgY2FwdGlvbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJmZWF0dXJlZC1pbWFnZVwiPlxuICAgICAgPGltZ1xuICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxuICAgICAgICBzcmM9e2ltYWdlLnRodW1ibmFpbH1cbiAgICAgICAgYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIlxuICAgICAgICBzcmNTZXQ9e2Ake2ltYWdlLnRodW1ibmFpbH0gMzAwdywgJHtpbWFnZS51cmx9IDYwMHdgfVxuICAgICAgICBzaXplcz1cIihtaW4td2lkdGg6IDUwMHB4KSA2MDBweCwgMTAwcHhcIlxuICAgICAgLz5cbiAgICAgIDxmaWdjYXB0aW9uPntjYXB0aW9ufTwvZmlnY2FwdGlvbj5cbiAgICA8L2ZpZ3VyZT5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBUYWdzLCBsaW5rcyBhcyB0YWdzTGlua3MgfSBmcm9tICcuL1RhZ3MnO1xuIiwgImltcG9ydCB7IFRhZywgdGFnTGlua3MgfSBmcm9tICcuL1RhZyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWdzLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi50YWdMaW5rcygpLCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWdzKHsgdGFncyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cInRhZ3NcIj5cbiAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3RhZy5pZH0+XG4gICAgICAgICAgPFRhZyB0YWc9e3RhZ30gLz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgVGFnLCBsaW5rcyBhcyB0YWdMaW5rcyB9IGZyb20gJy4vVGFnJztcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFnLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWcoeyB0YWcgfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGNsYXNzTmFtZT1cInRhZ1wiIHRvPXtgL3RhZy8ke3RhZy5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAje3RhZy5uYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgPC9MaW5rPlxuICApO1xufVxuIiwgImV4cG9ydCB7IFNoYXJlUG9zdCwgbGlua3MgYXMgc2hhcmVQb3N0TGlua3MgfSBmcm9tICcuL1NoYXJlUG9zdCc7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEVtYWlsU2hhcmVCdXR0b24sXG4gIEZhY2Vib29rU2hhcmVCdXR0b24sXG4gIExpbmtlZGluU2hhcmVCdXR0b24sXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbn0gZnJvbSAncmVhY3Qtc2hhcmUnO1xuXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJy4uLy4uL3NoYXJlZC9JY29ucy9GYWNlYm9vayc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0ljb25zL0xpbmsnO1xuaW1wb3J0IHsgTGlua2VkaW4gfSBmcm9tICcuLi8uLi9zaGFyZWQvSWNvbnMvTGlua2VkaW4nO1xuaW1wb3J0IHsgTWFpbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9JY29ucy9NYWlsJztcbmltcG9ydCB7IFR3aXR0ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvSWNvbnMvVHdpdHRlcic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaGFyZVBvc3QuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlUG9zdCgpIHtcbiAgY29uc3QgW3NoYXJlTGluaywgc2V0U2hhcmVMaW5rXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNoYXJlTGluayh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICA8cD5TaGFyZTwvcD5cbiAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b24gdXJsPXtzaGFyZUxpbmt9PlxuICAgICAgICA8VHdpdHRlciBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiIC8+XG4gICAgICA8L1R3aXR0ZXJTaGFyZUJ1dHRvbj5cbiAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uIHVybD17c2hhcmVMaW5rfT5cbiAgICAgICAgPEZhY2Vib29rIGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCIgLz5cbiAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgIDxMaW5rZWRpblNoYXJlQnV0dG9uIHVybD17c2hhcmVMaW5rfT5cbiAgICAgICAgPExpbmtlZGluIGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCIgLz5cbiAgICAgIDwvTGlua2VkaW5TaGFyZUJ1dHRvbj5cbiAgICAgIDxFbWFpbFNoYXJlQnV0dG9uIHVybD17c2hhcmVMaW5rfT5cbiAgICAgICAgPE1haWwgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWljb25cIiAvPlxuICAgICAgPC9FbWFpbFNoYXJlQnV0dG9uPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWljb25cIiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnLi9GYWNlYm9vayc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIEZhY2Vib29rKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMxMCAzMTBcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZW5hYmxlQmFja2dyb3VuZDogJ25ldyAwIDAgMzEwIDMxMCcsXG4gICAgICB9fVxuICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAvLyB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIwLjhlbVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk04MS43MDMgMTY1LjEwNmgzMy45ODFWMzA1YTUgNSAwIDAgMCA1IDVIMTc4LjNhNSA1IDAgMCAwIDUtNVYxNjUuNzY1aDM5LjA2NGE1IDUgMCAwIDAgNC45NjctNC40MjlsNS45MzMtNTEuNTAyYTUgNSAwIDAgMC00Ljk2Ni01LjU3MmgtNDQuOTk2VjcxLjk3OGMwLTkuNzMyIDUuMjQtMTQuNjY3IDE1LjU3Ni0xNC42NjdoMjkuNDJhNSA1IDAgMCAwIDUtNVY1LjAzN2E1IDUgMCAwIDAtNS01aC00MC41NDVBMzkuNzQ2IDM5Ljc0NiAwIDAgMCAxODUuODk2IDBjLTcuMDM1IDAtMzEuNDg4IDEuMzgxLTUwLjgwNCAxOS4xNTEtMjEuNDAyIDE5LjY5Mi0xOC40MjcgNDMuMjctMTcuNzE2IDQ3LjM1OHYzNy43NTJIODEuNzAzYTUgNSAwIDAgMC01IDV2NTAuODQ0YTUgNSAwIDAgMCA1IDUuMDAxelwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgTGluayB9IGZyb20gJy4vTGluayc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICAvLyB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIwLjhlbVwiXG4gICAgICB2aWV3Qm94PVwiMiAyIDE2IDE2XCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJtNy44NTkgMTQuNjkxLS44MS44MDVhMS44MTQgMS44MTQgMCAwIDEtMi41NDUgMCAxLjc2MiAxLjc2MiAwIDAgMSAwLTIuNTA0bDIuOTgtMi45NTVjLjYxNy0uNjEzIDEuNzc5LTEuNTE1IDIuNjI2LS42NzVhLjk5Mi45OTIgMCAxIDAgMS4zOTctMS40MDdjLTEuNDM4LTEuNDI4LTMuNTY2LTEuMTY0LTUuNDE5LjY3NWwtMi45OCAyLjk1NkEzLjcxOSAzLjcxOSAwIDAgMCAyIDE0LjI0NGEzLjcyIDMuNzIgMCAwIDAgMS4xMDggMi42NThjLjczNi43MyAxLjcwMiAxLjA5NiAyLjY2OSAxLjA5NnMxLjkzNC0uMzY1IDIuNjY5LTEuMDk2bC44MTEtLjgwNWEuOTg4Ljk4OCAwIDAgMCAuMDA1LTEuNC45OTUuOTk1IDAgMCAwLTEuNDAzLS4wMDZ6bTkuMDMyLTExLjQ4NGMtMS41NDctMS41MzQtMy43MDktMS42MTctNS4xMzktLjE5N2wtMS4wMDkgMS4wMDJhLjk5Ljk5IDAgMSAwIDEuMzk2IDEuNDA2bDEuMDEtMS4wMDFjLjc0LS43MzYgMS43MTEtLjQzMSAyLjM0Ni4xOTcuMzM2LjMzNS41MjIuNzc5LjUyMiAxLjI1MnMtLjE4Ni45MTctLjUyMiAxLjI1MWwtMy4xOCAzLjE1NGMtMS40NTQgMS40NDEtMi4xMzYuNzY2LTIuNDI3LjQ3N2EuOTkuOTkgMCAxIDAtMS4zOTYgMS40MDZjLjY2OC42NjIgMS40My45OSAyLjIyOC45OS45NzcgMCAyLjAxLS40OTIgMi45OTMtMS40NjdsMy4xOC0zLjE1M0EzLjczMiAzLjczMiAwIDAgMCAxOCA1Ljg2NmEzLjcyNiAzLjcyNiAwIDAgMC0xLjEwOS0yLjY1OXpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IExpbmtlZGluIH0gZnJvbSAnLi9MaW5rZWRpbic7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIExpbmtlZGluKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMxMCAzMTBcIlxuICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAvLyB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIwLjhlbVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03Mi4xNiA5OS43M0g5LjkyN2E1IDUgMCAwIDAtNSA1djE5OS45MjhhNSA1IDAgMCAwIDUgNUg3Mi4xNmE1IDUgMCAwIDAgNS01VjEwNC43M2E1IDUgMCAwIDAtNS01ek00MS4wNjYuMzQxQzE4LjQyMi4zNDEgMCAxOC43NDMgMCA0MS4zNjIgMCA2My45OTEgMTguNDIyIDgyLjQgNDEuMDY2IDgyLjRjMjIuNjI2IDAgNDEuMDMzLTE4LjQxIDQxLjAzMy00MS4wMzhDODIuMSAxOC43NDMgNjMuNjkyLjM0MSA0MS4wNjYuMzQxek0yMzAuNDU0IDk0Ljc2MWMtMjQuOTk1IDAtNDMuNDcyIDEwLjc0NS01NC42NzkgMjIuOTU0VjEwNC43M2E1IDUgMCAwIDAtNS01aC01OS41OTlhNSA1IDAgMCAwLTUgNXYxOTkuOTI4YTUgNSAwIDAgMCA1IDVoNjIuMDk3YTUgNSAwIDAgMCA1LTVWMjA1Ljc0YzAtMzMuMzMzIDkuMDU0LTQ2LjMxOSAzMi4yOS00Ni4zMTkgMjUuMzA2IDAgMjcuMzE3IDIwLjgxOCAyNy4zMTcgNDguMDM0djk3LjIwNGE1IDUgMCAwIDAgNSA1SDMwNWE1IDUgMCAwIDAgNS01VjE5NC45OTVjMC00OS41NjUtOS40NTEtMTAwLjIzNC03OS41NDYtMTAwLjIzNHpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IE1haWwgfSBmcm9tICcuL01haWwnO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBNYWlsKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB2aWV3Qm94PVwiMCA2My4xNTQgNDU1Ljg2MiAzMjkuNTU0XCJcbiAgICAgIC8vIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjAuOGVtXCJcbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNDQxLjA4OCA2My4xNTRIMTQuNzc0QzYuNjE1IDYzLjE1NCAwIDY5Ljc3IDAgNzcuOTN2MzAwLjAwM2MwIDguMTYgNi42MTUgMTQuNzc1IDE0Ljc3NCAxNC43NzVoNDI2LjMxM2M4LjE2IDAgMTQuNzc1LTYuNjE0IDE0Ljc3NS0xNC43NzVWNzcuOTNjMC04LjE2LTYuNjE0LTE0Ljc3Ni0xNC43NzQtMTQuNzc2em0tMzcuNjk0IDI1My41MDVjNi4yNTYgNS40MyA2LjkyNiAxNC45MDMgMS40OTcgMjEuMTYtNS40MyA2LjI1NC0xNC45MDEgNi45MjgtMjEuMTYxIDEuNDk2bC0xMDUuNDUyLTkxLjUyMy00MC41MTUgMzUuMTY0Yy0yLjgyIDIuNDQ4LTYuMzI2IDMuNjcyLTkuODMyIDMuNjcycy03LjAxMi0xLjIyNC05LjgzMi0zLjY3MmwtNDAuNTE1LTM1LjE2NC0xMDUuNDUyIDkxLjUyM2MtNi4yNTcgNS40My0xNS43MzEgNC43NjEtMjEuMTYxLTEuNDk2LTUuNDMtNi4yNTctNC43Ni0xNS43MyAxLjQ5Ny0yMS4xNkwxNTQuNyAyMjcuOTMgNTIuNDY4IDEzOS4yMDNjLTYuMjU2LTUuNDMtNi45MjYtMTQuOTAzLTEuNDk3LTIxLjE2IDUuNDMxLTYuMjU2IDE0LjkwNC02LjkyOCAyMS4xNjEtMS40OTZsMTU1Ljc5OSAxMzUuMjIgMTU1Ljc5OS0xMzUuMjJjNi4yNTYtNS40MzEgMTUuNzMxLTQuNzYyIDIxLjE2MSAxLjQ5NiA1LjQzIDYuMjU3IDQuNzYgMTUuNzMxLTEuNDk3IDIxLjE2TDMwMS4xNjIgMjI3LjkzbDEwMi4yMzIgODguNzI5elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgVHdpdHRlciB9IGZyb20gJy4vVHdpdHRlcic7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFR3aXR0ZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCItMC4wMDEgMjguMDk3IDMxMCAyNTMuODA2XCJcbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgLy8gd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMC44ZW1cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMzAyLjk3MyA1Ny4zODhhMTE3LjUxMiAxMTcuNTEyIDAgMCAxLTE0Ljk5MyA1LjQ2MyA2Ni4yNzYgNjYuMjc2IDAgMCAwIDEzLjQ5NC0yMy43MyA1IDUgMCAwIDAtNy4zMTMtNS44MjQgMTE3Ljk5NCAxMTcuOTk0IDAgMCAxLTM0Ljg3OCAxMy43ODNjLTEyLjM4MS0xMi4wOTgtMjkuMTk3LTE4Ljk4My00Ni41ODEtMTguOTgzLTM2LjY5NSAwLTY2LjU0OSAyOS44NTMtNjYuNTQ5IDY2LjU0NyAwIDIuODkuMTgzIDUuNzY0LjU0NSA4LjU5OEMxMDEuMTYzIDk5LjI0NCA1OC44MyA3Ni44NjMgMjkuNzYgNDEuMjA0YTUuMDAxIDUuMDAxIDAgMCAwLTguMTk2LjY0MmMtNS44OTYgMTAuMTE3LTkuMDEzIDIxLjY4OC05LjAxMyAzMy40NjEgMCAxNi4wMzUgNS43MjUgMzEuMjQ5IDE1LjgzOCA0My4xMzdhNTYuMzcgNTYuMzcgMCAwIDEtOC45MDctMy45NzcgNSA1IDAgMCAwLTcuNDI3IDQuMjU3Yy0uMDA3LjI5NS0uMDA3LjU5LS4wMDcuODg5IDAgMjMuOTM1IDEyLjg4MiA0NS40ODQgMzIuNTc3IDU3LjIyOWE1Ny4zNzIgNTcuMzcyIDAgMCAxLTUuMDYzLS43MzUgNC45OTggNC45OTggMCAwIDAtNS42OTkgNi40MzdjNy4yOSAyMi43NiAyNi4wNTkgMzkuNTAxIDQ4Ljc0OSA0NC42MDUtMTguODE5IDExLjc4Ny00MC4zNCAxNy45NjEtNjIuOTMyIDE3Ljk2MWExMjAuNCAxMjAuNCAwIDAgMS0xNC4wOTUtLjgyNiA1IDUgMCAwIDAtMy4yODYgOS4xNzRjMjkuMDIzIDE4LjYwOSA2Mi41ODIgMjguNDQ1IDk3LjA0NyAyOC40NDUgNjcuNzU0IDAgMTEwLjEzOS0zMS45NSAxMzMuNzY0LTU4Ljc1MyAyOS40Ni0zMy40MjEgNDYuMzU2LTc3LjY1OCA0Ni4zNTYtMTIxLjM2NyAwLTEuODI2LS4wMjgtMy42Ny0uMDg0LTUuNTA4IDExLjYyMy04Ljc1NyAyMS42My0xOS4zNTUgMjkuNzczLTMxLjUzNmE1IDUgMCAwIDAtNi4xODItNy4zNTF6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHtcbiAgRGVjb3JhdGl2ZUljb25zLFxuICBkZWNvcmF0aXZlSWNvbnNMaW5rcyxcbn0gZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9EZWNvcmF0aXZlSWNvbnMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL2NvbnRhY3QuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLmRlY29yYXRpdmVJY29uc0xpbmtzKCksIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiAnR2lybCB3aXRoIE9uZSBFYXJyaW5nIHwgQ29udGFjdCcgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5Db250YWN0IE1lPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSVx1MjAxOWQgcHJlZmVyIGEgaGFuZHdyaXR0ZW4gbGV0dGVyIGJ1dCBzaW5jZSB0aGlzIGlzIHRoZSBkaWdpdGFsIGFnZSB5b3VcbiAgICAgICAgICBjYW4gZmluZCBtZSBvbiBJbnN0YWdyYW17JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vZ2lybHdpdGhvbmVlYXJyaW5nYmxvZ1wiPlxuICAgICAgICAgICAgQGdpcmx3aXRob25lZWFycmluZ2Jsb2dcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBvciB2aWEgZS1tYWlseycgJ31cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmdpcmx3aXRob25lZWFycmluZy5jb21cIj5cbiAgICAgICAgICAgIGdpcmx3aXRob25lZWFycmluZ0BnbWFpbC5jb21cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5MZXQncyBDb25uZWN0PC9wPlxuICAgICAgICA8RGVjb3JhdGl2ZUljb25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQXJhYmljU2lnbmF0dXJlLFxuICBhcmFiaWNTaWduYXR1cmVMaW5rcyxcbn0gZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9BcmFiaWNTaWduYXR1cmUnO1xuaW1wb3J0IHsgTGlzdCwgbGlzdExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL0Fib3V0L0xpc3QnO1xuaW1wb3J0IHsgV2F2eUxpbmVNb2JpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9XYXZ5TGluZU1vYmlsZSc7XG5pbXBvcnQgeyBXYXZ5TGluZUxvbmcgfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9XYXZ5TGluZUxvbmcnO1xuaW1wb3J0IHsgV2F2eUxpbmVTaG9ydCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1dhdnlMaW5lU2hvcnQnO1xuaW1wb3J0IHsgTGl2aW5nIH0gZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9MaXZpbmcnO1xuaW1wb3J0IHsgVW5pY29ybiB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvVW5pY29ybic7XG5pbXBvcnQgeyBNb2JpbGUgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL01vYmlsZSc7XG5pbXBvcnQgeyBVdGVuc2lscyB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvVXRlbnNpbHMnO1xuaW1wb3J0IHsgV29ybGQgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1dvcmxkJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9hYm91dC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4uYXJhYmljU2lnbmF0dXJlTGlua3MoKSxcbiAgICAuLi5saXN0TGlua3MoKSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiAnR2lybCB3aXRoIE9uZSBFYXJyaW5nIHwgQWJvdXQnIH07XG59XG5cbmNvbnN0IGludGVyZXN0cyA9IFtcbiAge1xuICAgIGNvbnRlbnQ6ICdTdW4gQ2hhc2VyJyxcbiAgICBpY29uOiA8TGl2aW5nIC8+LFxuICB9LFxuICB7XG4gICAgY29udGVudDogJ0ZhbnRhc3kgTG92ZXInLFxuICAgIGljb246IDxVbmljb3JuIC8+LFxuICB9LFxuICB7XG4gICAgY29udGVudDogJzkwcyBncm9vdmVyJyxcbiAgICBpY29uOiA8TW9iaWxlIC8+LFxuICB9LFxuICB7XG4gICAgY29udGVudDogJ0dvdXJtZXQgVGFzdGVyJyxcbiAgICBpY29uOiA8VXRlbnNpbHMgLz4sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnQWx3YXlzIG9uIHRoZSBtb3ZlcicsXG4gICAgaWNvbjogPFdvcmxkIC8+LFxuICB9LFxuXTtcblxuY29uc3QgZmFjdHMgPSBbXG4gIHtcbiAgICBjb250ZW50OlxuICAgICAgJyBJIHNwZW50IG11Y2ggb2YgdGhlIGVhcmx5IDIwMDBzIHJlYWRpbmcgSGFycnkgUG90dGVyIGZhbmZpY3Rpb24gb25saW5lLicsXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OlxuICAgICAgJ1Nwb3RpZnkgaGFzIGRlc2NyaWJlZCBtZSBhcyBvbmUgb2YgdGhlIG9ubHkgcGVvcGxlIHRoYXQgZ28gZnJvbSBUcmFwIHF1ZWVuIHRvIE5ldyBBbWVyaWNhbmEgKGFuZCB0aGF0XHUyMDE5cyBob3cgSSByb2xsKS4nLFxuICB9LFxuICB7XG4gICAgY29udGVudDogJ0lmIEkgY291bGQgYmUgYW55IGFuaW1hbCwgSVx1MjAxOWQgYmUgYSBkb2xwaGluLicsXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnSSBhbSBhbiBBcXVhcml1cy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+QWJvdXQgTWU8L2gxPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhdXRob3ItaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3ItaW1hZ2VcIiAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2lybHdpdGhvbmVlYXJyaW5nIHN0YXJ0ZWQgb3V0IGFzIGFuIEluc3RhZ3JhbSBwYWdlIHdoZXJlIEkgd291bGRcbiAgICAgICAgICAgIHNoYXJlIG15IG11c2luZ3MgYW5kIGZlZWxpbmdzIHdpdGggbXkgZnJpZW5kcywgc29ydCBvZiBsaWtlIGFuXG4gICAgICAgICAgICBvbmxpbmUgZGlhcnkuIEkgd2FzIHRyeWluZyB0byBmaW5kIHRoYXQgc3BlY2lhbCBtaXggb2YgZ2xvYmFsaXplZFxuICAgICAgICAgICAgY2l0aXplbi90aGlyZCBjdWx0dXJlIGtpZCB0byBjb21taXNlcmF0ZSB3aXRoIGVsZSBiaWZha2FybyB3IHlla3RlYm9cbiAgICAgICAgICAgIGluIHZpZWxlbiBTcHJhY2hlbi4gVGhpcyBwYWdlIGlzIGF0dGVtcHQgdG8gdGFrZSB0aGF0IGluaXRpYXRpdmUgYW5kXG4gICAgICAgICAgICBtdWx0aXBseSBpdCBpbiB0aGUgaG9wZXMgb2YgZmluZGluZyBvdGhlciBnaXJsd2l0aG9uZWVhcnJpbmdzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1pbnRlcmVzdHNcIj5cbiAgICAgICAgICAgIDxoMj5SZWFkIG1lIGlmIHlvdSBhcmUgYSA8L2gyPlxuICAgICAgICAgICAgPExpc3QgdHlwZT1cImZsZXhcIiBpdGVtcz17aW50ZXJlc3RzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxXYXZ5TGluZU1vYmlsZSBjbGFzc05hbWU9XCJ3YXZ5LWxpbmUtbW9iaWxlXCIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXV0aG9yLWZhY3RzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDI+U29tZSBsZXNzZXIga25vd24gZmFjdHMgYWJvdXQgdGhlIGF1dGhvcjo8L2gyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVjb3JhdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPFdhdnlMaW5lU2hvcnQgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPExpc3QgaXRlbXM9e2ZhY3RzfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxXYXZ5TGluZUxvbmcgY2xhc3NOYW1lPVwid2F2eS1saW5lLWxvbmdcIiAvPlxuICAgICAgICA8V2F2eUxpbmVNb2JpbGUgY2xhc3NOYW1lPVwid2F2eS1saW5lLW1vYmlsZVwiIC8+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMj5QYXlpbmcgaXQgYmFja3dhcmRzIGFuZCBmb3J3YXJkczo8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlcmUgYXJlIHZlcnkgZmV3IHBsYWNlcyBJIHdpbGwgZ2V0IHRoZSBjaGFuY2UgdG8gdGhhbmsgeW91LCBzbyBJXG4gICAgICAgICAgICB3aWxsIHN0YXJ0IGJ5IGRvaW5nIHNvIGhlcmUuIFRoYW5rIHlvdSBmb3IgcmVhZGluZyB0aGlzLCB0aGFuayB5b3VcbiAgICAgICAgICAgIGZvciBwYXJ0aWNpcGF0aW5nLCB0aGFuayB5b3UgZm9yIGJlaW5nIHlvdS4gUGxlYXNlIGtub3cgdGhhdCBJIGFtXG4gICAgICAgICAgICBhbHdheXMgZ3JhdGVmdWwgZm9yIHlvdXIgaW5wdXQueycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHA+WW91ciBodW1ibGUgc2VydmFudCw8L3A+XG4gICAgICAgIDxBcmFiaWNTaWduYXR1cmUgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXV0aG9yLXNpZ25hdHVyZVwiPkdpcmwgV2l0aCBPbmUgRWFycmluZzwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBMaXN0LCBsaW5rcyBhcyBsaXN0TGlua3MgfSBmcm9tICcuL0xpc3QnO1xuIiwgImltcG9ydCB7IEl0ZW0sIGl0ZW1MaW5rcyB9IGZyb20gJy4vSXRlbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0LmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5pdGVtTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGlzdCh7IHR5cGUsIGl0ZW1zIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXt0eXBlID09PSAnZmxleCcgPyAnYXV0aG9yLWxpc3QgZmxleCcgOiAnYXV0aG9yLWxpc3QnfT5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxJdGVtIGtleT17aW5kZXh9IGl0ZW09e2l0ZW19IC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuIiwgImV4cG9ydCB7IEl0ZW0sIGxpbmtzIGFzIGl0ZW1MaW5rcyB9IGZyb20gJy4vSXRlbSc7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0l0ZW0uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEl0ZW0oeyBpdGVtIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtpdGVtPy5pY29uID8gJ2F1dGhvci1saXN0LWl0ZW0gaWNvbicgOiAnYXV0aG9yLWxpc3QtaXRlbSd9PlxuICAgICAge2l0ZW0/Lmljb24gJiYgaXRlbVsnaWNvbiddfVxuICAgICAge2l0ZW0uY29udGVudH1cbiAgICA8L2xpPlxuICApO1xufVxuIiwgImV4cG9ydCB7IFdhdnlMaW5lTG9uZyB9IGZyb20gJy4vV2F2eUxpbmVMb25nJztcbiIsICJleHBvcnQgZnVuY3Rpb24gV2F2eUxpbmVMb25nKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxpbWFnZVxuICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICB4bGlua0hyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQ1B3QUFBQjRDQU1BQUFCYmw0N2VBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTiBBQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBV2xCTVZFVUFBQUMzajRlMmtvcTRrWWkzIGs0bTJrb20za29pMmtvbTRrWWkza1ltL2o0KzZqNHEza29pM2tZaTNrb2kya29tM2tvaTJrWW0ya1ltMmtvbTNrWWkza1ltM2tvZTMgazRlMmtZaTNrWW0ya29tMms0bTNrb24vLy8rcjVjeHRBQUFBSEhSU1RsTUFJRDl2ZjYrL2owOWZFRENmMzlEQThNL3Y0TENBWUVDUSBvSEJRemhHRlVBQUFBQUZpUzBkRUhlc0RjWkVBQUFBSGRFbE5SUWZtQXdrTUlBQ3EvN3FqQUFBTUJFbEVRVlI0MnUzZGFYdWlTQlJBIDRjSUZCUmZjRUJmKy8rK2NLalNkcENjUnFMb1hxcFB6ZnVwNXBydWpSNkV1MklJeEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS0tSVEthejJXeWVPZ3Y3cStWazVBYzBXZHBIc1dnZXo5eithanBKQ1BRNTBDUzIgUUJtQitnWEtJd3UwaWlmUU9ySkFhVHlCMXBFRm1oSG9XNnZJQXVWL0JjcWlDVFRTejUvTTBrMzlzQzJjM2ZPLzBuVTJ4bnFSWkl2MCArUWgyemVQWlB2OXJrODVHV1ZBbnN6bUJDQlFXYUI5Vm9PVWlQWHdNVkl3ZGFQcFhvT043b0RIV2k1ZUJ4bGd2WWd1VXZ3ZXFvd2kwIGVnOTAvQlJvdjU1R0ZlaVF6cFlFK2wrZ01ZbzBxOFQyVko2cnp6dmhxaW92YmhlOW1XZER2bEo1NXBiUlhYRXBxK3JULzBpcWMzbDEgYTFpNkdQU1ZlaFdvakRMUWZ1QkFzNVpBaDZFRHJiOE9sTWNXYURWbW9EcWVRRWtUNkhncWIzRUVNbjhDM2I4TlZIbisxWDZCcHEyQiBwb01HV3JZSFdrWVM2RmE2UmQ0R0d2UVk0ME9nVHk5TVh0M0xhekZxb00rYjlwOUE2ZENCM0NCV1hQOE9OR0NTbVgySml2TCsvWTlmIDNhNjJ6SHlvRjJvNXQ2L1E5ZmI5cmplL2wvYXRzMWtNOUVKMUNIUnVBbVZEQlZxM0JhcUdEVFIxZ1M0ZEFnMzBGbThDblRvRUdtaDUgVDZiNzJBSWQvckZBeWZDQmRxOENtY29OSE1NRzJyWUUyZzRmNk1YNE4wNmc3M2Q1Y1FZNkRCVW83eERvWWdPbFF3V3Fta0Rsb0FjUSBmOGxza3RPNS9mbXVMc2Y2c05aZlRaT0YzUzFmMnQ4UStmbGtKK2NCeG8zTVRzdEZaSUYyTVFWYXhoWm9aZ05kSXd1MDdSaW9IaUJRIDNpZlFab0JBbFF0MGl5MVFoNzN5c0lIYW4zZ3lhS0I3KzIrOER4Vm8zakZRNlFMcGp4dTVQVjd1RnVqcUF1bVBHNTBEM1Z3Zy9ZR2sgY3lCRjJhWStka2p5NEY0bzVTMHJzWWZzblpQazlvWFMzcko2QmFvSTlOcnFxcjdyNlJmb2JBTk5WUjlQMzBDN3lBSnQ2ODFNZDkvYyBMOUJsVjg5MTk4MDlBeFgxUVR2UXZqNldmUUtsMm9FTzlTbW1RUGMwcmtDNVBUNHRZZ3BraCtmZEphWkFkbmp1Y3J5czZiN3AvaG8xIGt0THVtL1VlYzc3dThSbzlua0ZSYnhUSFJ4Zm8zT2NQTklIMHhwOTgwVGRRVmFpT1A5V20zdllLbE9zSHVrWVZhQjlab0psZDJTTUwgZEl3cjBDR3lRS2xIb0hsa2dRNXhCVHJXYVZTQlR2VkI4UkNzZnlCNzBKd3FIb0s1UUNOLzMyMWxtL1FlOFBLTEhWUDFtbHg2VDFiViBVVzFNZFlGNlQxWjVxVGZIdXpkTi8wQmJBcjFrOTgxN3hVQzlkanVPVzd5MEFrMzc3cGNkeFVDSmI2QkZaSUUydnlWUUZsdWd1V2NnIHJZUDRiRk9mZWdkYTZSM0VKK3Q2MXp1UVVRemt6aWlNZkxrUmU0emMvMDNqSkZlZE4zTGw4Nlp4emtlVkxkMmRSUGd4Z1RUZXlFR0IgTkxiMGF1KzVWV2tGbXRXN204OGYvRTJCU3E4L2VLMFBHb0ZXTnBEWEllbjlXTTgxMW9xUVFCb25XK3cwWDNqdDIrd3hxc3JacU5saCBWL3FFZHdmeGNRWGE2cHlOOGc1VTZweU5TbndEQ2NwOHpySThhYnlSODduSGFhaTNQNnZ4UnI2SEJOb3FCRm9IQkNvMUFtMEk5SklOIDFQODAxSlBHcnRBRjhwNFlOSGFGVlVDZ2xVYWdSVWlnblVxZ2szZWdRaVhRTGlTUStFY0czc2VENWhGSStyTVhOODE3SFE4Nk40MUEgZS85QWlWSWdyK05CUVc3OENubGU0bHY2L2VCM2hQTWt2cVhiV1d3YldhQTZ1a0FoQS94TkkxREFzWGRDb05kK1JTRHZhZDQwZ2ZhaSBhNFdieGNJQzFiS0xhUlZ3dUdNbHA4Z0NuWDlEb0pBVHBIZUZRTjZITzFLbWg5RHhTM1pYYVBlRG9aOEN5dTRLN3dSNkxjSkFRY09xIGtROFVOS3k2cDNTS0xOQ2RRQzFQU1hTdHNBdEZlQ0RCeGRTdXBBUjYrYmNGem1LbStVeEZObERJTEdhYXoxVGlDaFRNbmZZSjMya0kgcmhYaEs2a1JYVXdGUmcxRG9GYWlnVUwzZzBZNlVPaENZVVNuRFpGQWd0UEdqdzBrdFZZSWpCcEdkTm9JSHpYTWp3OFVPR29ZMFdsRCBadFFRSE1kRUFnVUtQKzN6SUxWV3lLeWtSbTR4RlJrMURJRmFDUVlTMkE4YXlVQUNDNFdSbXpiRUFrbE5Hejg0a014YUlUSnFHTGxwIFEyYlVNRDg2a014WkRhbHBRMnJVa0JySGZzNXBud2VSdFVKcUZqTkNpNm5ZcUdHRUFrbU5HdWJuQnBMWkR4cWh4VlJzSlRWQzB3YUIgMnY0UzBVRGhhMFcrbGd3a3NKaEtqUnBHS3BEVUxHYmtBa21kMVJDWk5pUkhEWkZ4N0NlZDlua0lYMHdsWnpFanNaaG1zUVVTSERXTSBSQ0RCV2N4SUJKS2N4WXpFWWlxNGtocUphVU55MURBRWFuOTZ3WXVwZUtEQXhWUnkxREFTZ1FSbk1TTVVTUEtzUnZpMElUdHF1SEVzIDdPbkZjTnBuSlR0cW1PQ3Y1OG5PWWliNDYzbkNzNWdoVUt2QTc2U0lCd3JjRmRwQWtndUZlYXdWQVR1eXFlaEthaDZCQW5aa2lleW8gWVlJRFpRUjZUU05ReUlYUWhJZFYwd1FLdVZKYzRQY292M2lHbDdCQUFSZjkrRm9WZGltOWtLdWlDQW02Q01GM2tvQXRQZVFpQk44NiArMi9wV29HODM4amVGNlY3SldSTDE3aEtROGl1Y0JWZElPbFp6RFFYclBNUEpENnNtdWFLZnRFRjh2MUc3eXJ3b2g5ZnFnS3VDVGtOIHUrakhsOXhpNmhzbzlLb29YNG93a1BkRk0rVVBkOHpqVW5yK2dZU0hWUk4yS2IwazhKb1dFaktsOGN1OWtYMzJyMG5JTmRkZWNGdTYgMSt1VUtWMkV3UGVha0lxQi9ON0l2eW1RMTBjN1djQkY2VjZwUE85RjVLNXNyeExJOTVLSDk0Q0wwcjNpcmducHN3RGxYcGYrNy9EMyBscDQzQVFxNWF0L0x2OWMza085VjNOdjQzdU9tVXJvM3dzcnpKa0JxVisxejE0VDBDcVJ4UEdnZVY0cnpDNlJ3dU5PM3lVYnRxdEplIGQ1SnBybXl2ZENyTTYwNHk3azJqTlovR0ZtamxGU2pWRytCOTdpVGo3aCtvR2FqMzFQRGJBdlVlb0N1Zm13bDI1SE8zMDl6clpvTGQgSkw2QnRHN1RmUE1NcEhWUk9xOUFYamNUN09qc2M3OWN6VUNuMkFMNUhLTjYzU3RQVnFiWXhEenVKTFBvOHhTVGhXNlR1ejFVN3ZYRyBXZnJjUDdBN0Y2alhscFgwdmpOd1A5V3gza2NWNk5JelVQOWJKL2RqQS9YYjlmUytkWEkvTmxDL2ZiTjZvRzFrZ1VxUFFDcG5XZDZlIGI5L1YzUWJTT2N2eWZMNTk1OE1vQXltZVJQQUtwSG1MemlaUW45R3FtdXNINm5QK01KOXVGRDR6N1NXeEQwRnp0OVA4akt2ZDlTdzcgL3VibHVsWWZCKzJZdXBsMi9Ca0VhbnZ3dnpYUXJFOGc1Wk83THRDOFZ5RGxEOXBkb0s2SFBNbDBid1BwL3FQSDVMcXI1MTFYMDJwdCBWM2J0UUhZK1hIVGM5K2N1a05aNXVyZEFGeGVvNDg5d2diVHZRSGt1N0VGejEwRFpYdTlVK052UHNLdDcyalhRYXFFZnFPb1ZLUDE5IGdWb2VydDJvNmtKNTRYTGNsblZZdHo5WHQxSHRMZ09jQ2JOYlZyMXZYOTdkUmxWdmh3aFV1a0R0cTlmS0JScmlWT0g5WHcyMEdDaFEgZGVvWUtCMG1VRjRlT3diYVJCWm9UaUFDL1N1QnVoeUR1VUQxZFlDVEdpNVFoMk93SnREeHJQK1ZxaVpRaDJPd3BBazA0dWlUWkF1MyBidDJHK3N6dGJnKzlEdlBaNU52Zk1Kbk4zYnFsK0FIYzUrZC8yOXBOYTUxOSsveEhDWlFTS0NEUTFBYXFJd3EwZElHT3Z6WlE3Z0p0IDJnT1ZRd1dxYktDNlBkQnBzRURuUjZCdjE4bjhFV2lJdzhIRzZobm8yM1Z5OVFnMHdLVHhERlMwQmtwZG9LRStQbGxkMmdOdFhLQ0IgdnJ5ZG45MzhzNTVHRk9qb0FpMWpDZlIzanNseXRranRBOWlkQnR2clBKd3ZkbHV2MC9sc092bjRXaVNUNld4dVg2RjZleGxxbzNyKyA0TnZKdnBVMzZXSzIvUFJ1L2hPb0tJZjlUUExlRnVnNjdIdm1MZEE2cmtEN05LNUFoMzhuMERHeVFIVTBnYkxJQWszR0RqU0xMVkFXIFM2QWl0a0RIZnlYUU9qME1IK2lwZnJNcnJyZFIvcTFSZmkrTGJmMS8yNks4anpJTHJtN1hZdmYveHhOSm9NT0hRSmVSQXAwL0JqcTggQnpxTkZLZ2lFSUdDeEJZb3NZR09YenlnTVFNVlh6eWVvdzAweXBkelhnUWE1N01UQXJVR09yMEhxajhHT28vMTlhNnlVWTM3VDZ5TiAyeitmeTNmbmF1ejdlcGhWOWVIeGxOWFlWMTM2RStqeUREVHk5d0hmQTEwSVJDRFBRTGZJQXQwSlJDQ3hRTGZZQXQyakNWVEdFZ2dBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJvOHg5UDEzK2llYnVSVHdBQUFDVjBSVmgwIFpHRjBaVHBqY21WaGRHVUFNakF5TWkwd015MHdPVlF4TWpvek1qb3dNQ3N3TURvd01EeWx4UVFBQUFBbGRFVllkR1JoZEdVNmJXOWsgYVdaNUFESXdNakl0TURNdE1EbFVNVEk2TXpJNk1EQXJNREE2TURCTitIMjRBQUFBQUVsRlRrU3VRbUNDXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgV2F2eUxpbmVTaG9ydCB9IGZyb20gJy4vV2F2eUxpbmVTaG9ydCc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFdhdnlMaW5lU2hvcnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICBoZWlnaHQ9ezI0fVxuICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGltYWdlXG4gICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFCWDRBQUFCNENBTUFBQUJ5OHhybEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFXbEJNVkVVQUFBQzNqNGUya29xNGtZaTMgazRtMmtvbTNrb2kya29tNGtZaTNrWW02ajRxL2o0KzNrb2kza1lpM2tvaTJrb20za29pMmtZbTJrWW0ya29tM2tZaTNrWW0za29lMyBrNGUya1lpM2tZbTJrb20yazRtM2tvbi8vLytXUEtkbUFBQUFISFJTVGxNQUlEOXZmNisvajA5Zk1CQ2YzOURBOE8vUDRMQ0FZRUNRIG9IQlFkRFdEblFBQUFBRmlTMGRFSGVzRGNaRUFBQUFIZEVsTlJRZm1Bd2tNSUFDcS83cWpBQUFJZUVsRVFWUjQydTNkN1phYU9oaEEgWVZCUUVSVy9FQlh1L3pwUGdyYmp0QlZKOGliR09mdjUxYlBPYWdjMmtNUldJRWtBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBaWwwNm1XWmJsTTIydWZyV1l2SG1ESmd1MUZmTitlM0wxcStra0pkRDNRSlBZQWhXUkIxckcgRnFpTUp0QXNua0NyZm50VzBRVEsxTlo0L1NIWmJOM2RiQ3B0ZS8rdjJhcDR4eVdkRnZQWmZRdTIvZlpzN3YrMW5tVnZ1YVFuV1U2ZyBqd3EwbU05MlVRV2E1dnR2Z1E1ZmdkNHg1djBWcUhvSTlJNHhMN1pBNVZlZ1RtMk5yeCt6N0Mva3piRStOZCt2azZhcHovb3FXdWRGIHlNTlJGdnBDM2xibnVtbSsvWSswT2RVWGZSWE41a0VQeDFDZ1dnZmFoUTYwZWhGb0h6aFE5aVRROHAyQnVyOERsVzhOZERqVzF6Z0MgSmI4RHRVOEROWlovdEpWMCtqTFFOR2lneFpOQTB2dWRxUjlUMWUzemZWdGVMMm9heWhlaDlqdFhoK0Z5Zlg1MWxHMnQ1dW4xUE5DUyBLcDIrREhUcUF4V2hBcTFlQldwdWdRSU5NT2wwcjgvVEVZRUNYVCtMMVU1ZHlKOFVLSTBzVVBLR1FKc1hnVGFCQTIyUFYrOFRVS0gyICszaDZ2VlBMODZIYnJmd1BlT2xjblJqbjEwZTlQQjNWQkIxZ3dDdlVwRnpGRkNoVEowWk1nUllxMENhMlFKZVJnZFlCQWpVNjBIVmMgb0M1QW9MSVA5SHBrQ1J6bzlZNm5RUU8xL25lOFdIZUhFZnQ5MDE2ODczeXExbldqOTd1OEhyeWZIVWFCbXRnQ25WU2dxZGZ0TVF1MCAxSUg4THFnTUEyMjZkZVoxZTB3RGJidmM3NUxMTUZEVjdUSy9LMDYxQUR6VW93T2R0OTNNYjZCU0xYeVBBY2JlcEYxM2xkSFBTZXR0IHQvSjNNTXFWV3RjWkRWOXQ1WFVBMW9GT1JudWdBL2tiZ011NW1wV04vdmpHYjZCbXJSYStSbnZnT1ZBV1d5QTF0c1FWYU5mRkZXaG0gRVNpUEtaQ2xwZHB4NDNta1BLdlowTk1HcVIwL0c0L3R6Y0hiYktnREdjK0NaZTF2dWFEUERQTkFtOWdDYlR1ZmdZd3ZIVFcrN0QwRiBTazNIRmswSG1uc0tOTFVNdFA2L0JDb0NEYjVxSVdXKzQxcDY4WE13MUVMcWFMWGo2aE8yajRPaFY1by9KcENQanl4NnBYbTErWTA2IGtJOFBkMnFsV2NVV3FMYjVqU3JRemxjZ3E3LzZhUTlkN21POHN3MVVxa0ErVnVScVBWRUYrYnBIYTdQU3ZGTUxUdkhWZjVsYkxNVi8gL2Q2emg0UFJyaDBDYlR3RVdqa0VxdjhuZ1d6SExCMUkvTy9JMVhScC9sbmxicWsrc29nSG10c0hTdXF0bDBCSDYwQ1ZsMEIyQ3k1VCBhczF2TnczZWlSOE1OUnRZVFlOMzRnZER6UWFiNkFJNXJEOVNINEZjMWdsWEFnM3pFY2g2dWt6NlFIdlJmelRWczRGTG9OTzJrLzFiIDBNWmhQV0ZrdXJQNzFQaEY5bXhWcDZyZHA4WXZzbWRyUzZCaGp0T2xraDZGQXpsTmwzcVhJZ3RVeGhkSWNyeFRnNTE3SU1FSlFjMEcgcm9IRzBVdGY5K01xZURtN0QzYUo2SGduTU5nbFB6MlF3S2txT042NUQzYUo2SGozWXdOSmpYY3lnNTNnaE9BK0c0emt2dlM5a2JxYyBaUWE3Ukc2OEV4bnNraDhkU09aVWxScnZaQWE3Ukc2OCs4R0JaTVk3d1VBaUU4S0hMWDF2UkM1bnFka2dFUnJ2eEFhN1JDaVExR3lRIHlBVVNPMVZGeGp1cGF6a1JHdTkrZUNEMzhVNDJrTUNFOEhGTDN4djN5MWx5Tmtna3hyc2lza0NTczBFaUVVandXazRreGp2SmF6bVIgR085K2ZDRFg4VTQ4a09PRUVHenB1NVFkN0pMK2NuWTVHTEt6UVhJYjd4eFNDczhHU1pTQlhNNVcxNi9NL00zeGNwNktYc3ZKN1hKMiArQWQ1RlVqNFdtN2Q3bElwWWdza094c2tmU0NYNy8yTEIzcENmd3RjL0d0dHFjUEJhUGFXOXhFTU9ka2ZET3Y3Q0lhb1FOWTNZU3h0IDd5TVk0bksyK2doVU90eWxJcitlU1BwN0RPd0RTVStYU1p5QnJPOVNVWUhFQjd2eWJIOGJqL3g2NG9uQzA5ZmFtb1BkUGVxcHc5ZmsgaDFqZmhGRTRmRTEraU8xZEtqRUdzdjZhL0JCOTM3aGxvSzJ2UUZaL0E5SGEzcGY0UW1ONUU0Witob3FQK3dqNkcrdXRkc1JqSUp0QiBWTjlvSVQ1ZFB0bHhYN2ZUV2QyQzNkK1E2ZWxMemxiM3FPc2JNbjNkYjJnWGFPY3QwTEt5V0M0ME03ZjdDSWJZUE1sSlB4dkZaeURqIEdhcXhlWWJLU0RiUDRTbXRucUV5VG1vYnlOZVR4SzZXZ2J3c3VQNVVlTnp4NUhZTHR0R3p6L1ZEZlgwKzJVSjlQREo3MHUzQzV0RWYgNCtsQVJtZEg2dm01UzQzcG96cU5IMHhsUmkwNHpTNGYzdyttaWk1UUhWdWdqWGtnbjdmMEdqOHBUZ2Z5c2hUL2czNVpnODh6by84WiAra0d1WTkrR29WL1c0UHV4UXYyVGJrZitEQUs5MnZoQWdVYS9UNlVQNVBuWktEcFFaaEpveEFQVjNRSnR4NzlQUmIrczRlZzcwR2I4IEMyZktxWDZvcitkQTUrMzR0MkVzVmFBQVQ5Y3ArOWVjQkhpUWhONzUzZXIxRGpYNkxSNW1EL1cxYzZxNmJ2OTZnQ24xNno3TW5sbHIgR2FqV2dWNFBNUHJFTUh4bXJaMTJiS0JabUVCbGZSZ1hhQjRvVUhNY0dTaVBMZENhUU84UGxCYnovYmkzZU1obzFmeTh5d2RlSWp2SiA4a0J2OGJqdC8zV2pUbytCdCt5K0pkRHNrd0l0ZEtEeEwydndIMmlxQW8xL1dZTklvUFhyUUtOZjF1Q3FVWUc2MTRHQ3ZLeEJLKytCIG52NjcxejFRaVBWV2Iza1A5SFFSdkx3Rkd2RnlMUHNvazBVMjE2K04zeDZEblJnM3AzUC9HdUk4bTA0ZWowZzZtV1o1L3lyY1M1QW4gdW4zOTRPdFJ2NmQ1TnM4VzM0N0k3MEJWSGZZRjF1MHQwR3dnVU5EWHVkNEM3V2FydUFMdFB5WlFGMDJnNGhib0VFdWd5YnNEWmVFRCBkYjlzcTZGWDRYcWtYME84NmY2MkdYeFhzRWZMNjBXL3AvcFA3d3ZVUEFiYVBRUTZ2eW5RNlRIUTdpdlFrVUJSQmtwaUM1U3FRSWQvIGJOQTdBMVgvMko2REN1UjFQVnIzbXZmczlJT3lPZFZmVHMxYnpvcEh5K1poZStvbXlEUHR4d1E2M3dPRi9aUXlFT2hNb0dlQnJwRUYgYWduMFVZRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDQUQvTWY1dzdvNjR0Y0tLRUFBQUFsIGRFVllkR1JoZEdVNlkzSmxZWFJsQURJd01qSXRNRE10TURsVU1USTZNekk2TURBck1EQTZNREE4cGNVRUFBQUFKWFJGV0hSa1lYUmwgT20xdlpHbG1lUUF5TURJeUxUQXpMVEE1VkRFeU9qTXlPakF3S3pBd09qQXdUZmg5dUFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBVbmljb3JuLCBsaW5rcyBhcyB1bmljb3JuTGlua3MgfSBmcm9tICcuL1VuaWNvcm4nO1xuIiwgImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vbmljb3JuLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVbmljb3JuKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB3aWR0aD1cIjEuNGVtXCJcbiAgICAgIGhlaWdodD1cIjEuNGVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiXG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8aW1hZ2VcbiAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFESUNBTUFBQUNhaGw2c0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFXbEJNVkVVQUFBQzJrWW0za29pL2o0KzMga29lM2s0bTRrWWkza1lpM2tZbTJrWW0zazRlM2tvaTNrb2k2ajRxM2o0ZTJrb20ya29tM2tZbTJrb20ya29xM2tvaTRrWWkza1lpMiBrb20ya29tM2tZbTJrWWkyazRtM2tvbi8vLytVZFJpa0FBQUFISFJTVGxNQTc1OFFZSDl2MzEvUFFQQy9NQ0J3ajZDdlA5QlBzTURnIGdKQlFrV1AxaHdBQUFBRmlTMGRFSGVzRGNaRUFBQUFIZEVsTlJRZm1Bd2tNSUFDcS83cWpBQUFITGtsRVFWUjQydTJjNTVxcklCQ0cgWTlRVWE5cGFFdS8vT2pleElJSUl5S2drejd5L3pvbU5qMkVLb0x2YklRaUNJQWlDSUFpQ0lBaUNJQWlDSUFpQ0lJaFZPSHQzNnliQSA0RldPL3h0U3ZLcHlEbHMzQWtwSmRUeHQzUW9vSmRVNTJMb1pBQVRoUjByMEExTGlXa20xVC9oRDZYZkphNVZVZkN5T3E4dFhCYlZPIENSK0x3eStMQkowU0xoWmZQMEh0bTFJTlVjSll3R3ZrM1E3eDFpM1VWektJeFM3NTlSajV2bisvbjN3L2l0Ny9QQ1h6bjdXYWtpcnEgKy85UmlUaGVMTFVTcmFTUHhXazFRZlMzZGFQbFNwcTRHeC9PMVNSSEt4Tk5NaGhIam4rS0tqbFdUZ1RjaDBMTFdSd2JqVEpMU1dYaiBQR0Nla3YzV3pRWlFrcVZCa0FSZlA3cnlyVnNMcHNUcTRsaExpWE93V0lwYjZMbTZuZm45ZzZNWnRaejl5VXE3dUpvNmFzNlhQK3ZFIEJIT0UxR0wySjZzcTRuU3VrSnJvWXMwNEs0MkVWTlhqUjRSWW84TlF5Tk1hSFNaQ0hxbE5jM2tUWjc5czNYaWEyZUgzZzAyTHlMTVMgSWlYRm12Qzdtelc3b25HZVcwdG9NRTBrMWtUZzVFZDA3SGJaaitqWXhTWTZjbnQwTk5zSk03SEV6MXVTY0xZUXg2cEtmalM3SzRxeiBURW5PdDFBMUJEaXZyUnRQNC9MOTd5a1ByOXVVdjhjbi94WkZ6WGJSZllVYWs2KzRORW9YMFNzdXllSEdybXljSS85dklDYytSTWY2IGdBK2trb3RjV3FXTHM3K3pOL3k3aUhkYm9uYnRJdkdQMUs4K2lKQVhKK1NwSWVTakpmSVA5OC9ndWQvdi91VXNQZjk4K2RzelA4RXMgajNOQ1h0SzJnRk5DQ0dHaVZHRmEzODhDd2srWUtKVUQxUGY2WEFHRU1FWHd1L2JRZEJJUUlDcTNvUUZLemthckFKRmRoeE9zMkxBcSBuZ21FdXcvYUhYNSsyVUFJeUs0WXZWR1NmWDdJWjdkbk5rY0lJZlRZcXBkNURPWXBTaFFqRlRhRUVLcHlMRGhsaTFEbW5ORWhoRkFOIGI5YmRGcy90NTNmdk1iMEZJb1NNcFhZQ2E3UUlxVVRLZFJlTWtEWUhwdTMvbG8rL3RXOFA4aFdRa0YyU2xtbWZYUmNYMG1SeTJsR2cgaEF4WlhranRqRlIxRkg2MUVDck9ML1NheUZwQ2VuOWZSc2dLTTVMV0gwa0dnNmpqZVpZUHY1MXZrMWtkeUJ5Uncyd0xYb1ZIK3lTUyBGWmNSWXJaTXIwTEcybjZSMVQ3VGpSTUZPZ01RYjF4a1R6SmFYZ2d4UURlRldFQ0l1emRxb2hwa0JieEw3dkJDVGtlakZpcENIdGN0IGRJQnVHOFYzLzZiN050bzhDdkxNTG15QmFiaEU2MGhvNlBONEY3WmdaQ1RSaWlLR1Fyb0lDV09PTlkxUlE2VS9TQ0ZyMjJNZ0pJY1Qgc2tKbE5TSGtDaWRrNmNXZkVhaWlQWVVUSXQrYlVXdmN0U3pMUU0yODFISmNld0hBSGpIQTVDTzh2c2dHaDlvcUpkWHU1Z2VBekc3cSBJdUZ6MEp0cVFtN3NCWnNMZVhqTTdaaDFOOUVMK0I1emdhZlg2REZNbGhVenZpT1pTVmtwQ2lXazVjMGlHc0RFaWxna0t6T3RUYmZ3IG1remRyaUVYampXeWxWc2JEV0RPVHA1OHJ2c25LTXM4Vnhqb21UZGVzREt4d3hGL3FOSXBlVGFDelNGMzVnOEpOdUVlVjgrVjM2NjcgcVV4SkluaTRObVJKWmlSeXNLWUozOWtpbUo0N01KZThRNW9yOHBOMnpmemFubWNLZVhMS0gyT203eXJiNFV5ckozZU9ndjRocWNLdCBWWVdNUlk1czVNSFRsR050RmV4NEgvdExNb1ZicXdvWmM3aEFXMGd3SmtUa2JWN2ZYZWFUM1VraGc1MVNwZFVuZDFRSTg5VjJSMnVIIFR6d3dIMXZIU1NHRFFhR1V0b3BSSVR0M05LYTdSSW54dm03Zmc4N1k0WmUyRUtGYnBTTkdJVGErR3B1a0g5UEYyR0YzOUxGVHBDSWggdTRSZmkrMHp1dmN3ZkVXb2p6TGoyYlVRdEVwSUxCVHk3alZXQ2pXZ1hNUDEzMHdpSk5jVnNodU1JUFpna21hRENnanV2VTFISW9UTyBDMnJwOXpvbGhEMEZiSzJVeXQzanI0bVgwbFpOM0ZKWURCS3JnZTBuVVBsclBHeFF2bHNvM3BPcUVrVUpPd2UzQ05YaDR3T0hVcW82IGFhQjhvSlNkc29BUXdWWTNKVVIxUGtvSkNXU25nQW01eXZxYnFwSlV5NkZjZmdrNUJVcUhQSDcwSmxNdVVQc3Rsb2ZvRk9rSjJwQjIgNXJJVGxFY1dWUXlJdkNyVzdod3Buc1FnZmRXb0dyUG84a3dVWEZQZHpwR1R5TG9tMTM0bWxSQkZMa0xLQ2NBUE1wcUdGa0pIZG1RbSA0K2hkUkRSY1hXMHJLMUNQclZCWWZQUURYdldHMU1nU1ZlWmtQSU4rYy9ZdWIzT3hoVi9hbmFjd3NxTHBIRHlUcEp3YU5NVFhWZU1MIFZXbGxzbE1nUjVZTXNudWl1anBMMVR5aThQRFV2U2NBZmY4cStycmJUd3RDNlNrcmZsM2ExNzZLRDZVV0swU2VUR3kyek50bTQ1Q1IgcFZoTDBITVJRUVRwRGJMaVg0NElwTjNMRVBVNlJQMWRhdDRTQk4wcDZVdkRJTVdLSHRJYlJPMjlYTXJUcFVWb3VPTEh2dTVST2s2RyAzT1FHSVhVdlhMbW8xUzZsN3FPWDVrVEtJNjJlQWNHOXljZkpBSHBsTGhRNFFLZDFSUWNadkVxbjR1b3VmWUdnWEV3NkoxcnJHM0ozICtFYWdVcDFGUlY2aEJjODZGZ2FRNFEvZjRGTDZneHYwTzUyaWdVWE9XZWN2OXNUTSs1bEtmam5ZY1JPMDA1TVpEQmFYKzZoZTRhTEIgMXBvbk8yY2REK0czWUdGMEhEU3pxeW44YTAveTZRK3RJM3hKejFtbnlPTDNYK1hUbnhmWkRTcEtZV0FvbTVQeTUydWRITUtOTEtXWSBsYVRsbTlkMFllNEd3WXFGWWo1SGg0ME1aWVRsdCtyWUJhK3l6UEthWjJuUm41cERFQVJCRUFSQkVBUkJFQVJCRUFSQkVBVDVmZjRCIG1nYTNLVWQvQ0RVQUFBQWxkRVZZZEdSaGRHVTZZM0psWVhSbEFESXdNakl0TURNdE1EbFVNVEk2TXpJNk1EQXJNREE2TURBOHBjVUUgQUFBQUpYUkZXSFJrWVhSbE9tMXZaR2xtZVFBeU1ESXlMVEF6TFRBNVZERXlPak15T2pBd0t6QXdPakF3VGZoOXVBQUFBQUJKUlU1RSBya0pnZ2c9PVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IE1vYmlsZSwgbGlua3MgYXMgbW9iaWxlTGlua3MgfSBmcm9tICcuL01vYmlsZSc7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vYmlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9iaWxlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB3aWR0aD1cIjEuNGVtXCJcbiAgICAgIGhlaWdodD1cIjEuNGVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiXG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8aW1hZ2VcbiAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFESUNBTUFBQUNhaGw2c0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFVVkJNVkVVQUFBQzJrb3EzazRtM2tvaTMga29pM2tZbS9qNCsya1ltM2s0ZTJrb20za29lMmtvbTNrWWkya29tMmtZbTZqNHEya29tM2tZbTNrb2kza29pMmtvbTNrWW00a1lpMyBqNGUyazRtM2tvbi8vLzlDWWVva0FBQUFHWFJTVGxNQVAzKy9uMThRNzBDUFlLL2ZjTTh3d0lEdzBPQ2dieUJRdnlnTzJRQUFBQUZpIFMwZEVHblZuNURJQUFBQUhkRWxOUlFmbUF3a01GZ082Nm5wc0FBQUJ2MGxFUVZSNDJ1M2QzVTZyUUJoQVVRU3MxWU1WbE9yaC9WL1UgbjhSa1docW9aZUpIemRxWGs1bTJLd1NtYVZJb0NrbVNKRW1TSkVtU3BOL3FwaXlyUmRYbDdTWWFVV3pLdXlGSDFUYldzYzNEK093KyAwdkdRamZIUnY4RGprZE14REhXVVk5UGtoUXhSNThsalpzZlFCRUYydVNIRFV3eGs4ak8xcDlkMGs0dTZFTWNXNUtlTFFFRCtJdVNpIFFFQkFRSDREc3ZqdE94QVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVEga0Q4SmFjcUZWU3VCNUFzRUJHVFZrT2MyNldVMGN0elhqRDRkNlZjQ2FVZWo3ZXk2ZzcvZ3IyVWZBUUVCQVFFQkFmbm9McjJoM080OCBTSk91YVZZQytlR1h2MHZYZ1p3TjZidWsvWG1RTmwzVHJnVFNqa2JuSWFzODJVRkFRS1loQjc4MDFxT1I0NzVtVkg1cEJKbUhqRGZFIC9taTdPN0ZsWHVHRzJKMmFzY3FUSFFRRVpCb3lzeUZXcDJiWUVFSE9nTmdRa3hrZ0lDQlhBTm5kSkwxK2pzeHZpSFc2cHY1K3BaaTcgbEUvZk4vNmlIbU1nTDlraGJ6R1E3TTlXYUdNY1JkRXYvK3dIaFQwVjV1azVxMk1mNWNqOFJKaEFSOVpqRW5UcC9XN1Q1VGxSOWtFWCBySU9qMGkzdWYveHpyQ1JKa2lSSmtpUkprcTZ0ZDd3My9mVGJLbERHQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ESXlMVEF6IExUQTVWREV5T2pJeU9qQXpLekF3T2pBd3pNTUFXUUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeU1pMHdNeTB3T1ZReE1qb3kgTWpvd015c3dNRG93TUwyZXVPVUFBQUFBU1VWT1JLNUNZSUk9XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgVXRlbnNpbHMsIGxpbmtzIGFzIHV0ZW5zaWxzTGlua3MgfSBmcm9tICcuL1V0ZW5zaWxzJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vVXRlbnNpbHMuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFV0ZW5zaWxzKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB3aWR0aD1cIjEuNGVtXCJcbiAgICAgIGhlaWdodD1cIjEuNGVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiXG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8aW1hZ2VcbiAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFESUNBTUFBQUNhaGw2c0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUN4RkJNVkVVQUFBQzNsSXU1a0lpMWxJeTAgbG9lMmtwSzVpNHU0a1ltL240QzNrWW0za29pNGtvaTJrb20zazRxM2tvcTRqbzY0a1lpM2tZbTNrb20ya29tMmtvai9nSUMya29tMiBrb2kyazRpMms0ZTJrWWkza29tMmtvbTJrb2kza0ltMmtZaTZrWXEza29pNGtvaTNrWWkya1ltMms0bTNrb216bVlDMmtvaTJrb20yIGtvbTNrb2k0bElxMmtvbTNrb20za29tMmtvaTJrb2kya1lpM2tvbTJrb2Uya29pNGtvZTNrb20za1lpM2tvbTJrb20ya29tN21ZaTQga1ltOGxJYTNrWW0ya29pMmtvaTNrWWk1azR1M2tZaTJrb200a1lxM2tvbTJrWW0ya1ltNWtZZTVrSWEzazRpM2tvaTJrb20ya29pMiBrb3kza1ltM2tZaTJrWW00a1lpM2tJdi8vLysza1lpMmtZaTNrb2k4a0lXN2o0bTNrNGkya29tM2tZbTNrWW00bFllMWxJYTNrb2kyIGtZaTRsSWkza1lpMmtvaTVsWTIza1ltMWs0bTZrNG0za1ltM2tvaTNrWW0za29pMmtvYTJrb20vbFlDMmtZbTJrWWkzazRlMmtZaTMgazRpMmtvbS9qNCsza1ltM2tvbTJrb2kza1llMmtZbTNrWW0zazRtMmtwSzJrb20za29tM2tvbTRrWXEya29pcXFxcTNrb2kza1lqViBnSUMya1lpMmtZaTFsWXEya29tNGtvbTNrWWkza29tM2tvaTZqNHEya1lpM2tZbTJrb2kzazRtM2tZbTNrWWkya29pMmtvakdqbzYzIGtZaTJrWW0ya29tM2s0cTJrb20za1ltMmtvbTNrb20ya1luRWlZbTJrb20vakl5M2tvaTNrWW00a1lpM2tZaTNrWWkza29tM2tZaTMga1ltMmtZbTRrWWkya29pM2tvaTNrSWUxazRpMmtZaThqNGU1azRhMmtvbTJrb3Eza1ltOWpvUzVrSW00a1lpN2tZaTNrb2kyazRxMyBrb200ajRXM2tZaTJrb2kya1ltMmtvbTNrNG0za1lqTW1abTJrb20za29pM2tZcTNrWXEyazRxNWw0dTNrb20ya29pM2tvbTRrWW0yIGtvbTVrWXUzajRlM2tvaTJrb2k0a1ltNGtZaTJrWW0vZ0lDM2tZaTNrb2kya1lpM2tZaTNrb2Uza1ltMmtvaTJrb3Eza29tMmtZaTIga1ltMmtvaTNrb24vLy8rbG1IWTlBQUFBNm5SU1RsTUFPVDRmRVE0TGFBalkxQyt2VlZrU1dxRE40ODRDL05WSlFzSEpWSUVucFNYUSBTOHJhVUtZS25jdHM3RExjYnNaK1h0MytSdkZFK3BMQ2orY1BRUk8zdmFGeUlUdzRTTGl6ZXpNM1hQZkVoU3IwcnRaV0xnR3A2SmdYIEtYaWtvbmtrSnArc0s0dWFIYlUwR2wvYmxiOFZXd3pya0VESVI4QVFnRkxTVWUrR1l3ZDNkZVZrOVFOOGh3YjkrUmo0TnNXcTh6QnQgdk81L21aUk42Z25mbnFoeDRPM0hzWUlOSEJTNzBVL01vK0xEdnROMnViUTFMWWtpS0pNam5CdEZheDdYVjYwWnNIcVhqR3FOQllpRCBTbVk3RnBHMjZYMnJMQ0R3YVdGdnVnU09aK0g3WUVObFA5N2s5dGxqUURBTkFBQUFBV0pMUjBSV0NnM3BpUUFBQUFkMFNVMUZCK1lEIENRd2dBS3IvdXFNQUFBZEJTVVJCVkhqYTdaMzNleFJWRklaSGtGQkNpWlFrUUpBYWFvQUlCQkFNS0VWS2xDS0tJQnBRQVdsS1FsRVEgRUpBbVJRd0VrYVkwQVRGSUx5SklWVkFRd2Q3QUx1cjNWM2pQbWQyUTVka3B1L3JNM0YzUDk4djVjamZuN0gxemQ4N00zcDBraGlFUyBpVVFpa1Vna0VvbEVJcEZJSkJLSlJDSlJYT3FXVW1Zc0hmajYxakljRXNxVzgzdG1FYXA4QlE2SlNEUy9ybGlSUXlWVWpxNWVsYVRiIHFsYXI3ajFIamVRVWpxbW9hUTdVcXMwaERYV2lLWGQ3M1dRb3BYZ1BVZy8xT1NhaGdUblFzQkdIZERTT3ZGaVRwakJWd1h1UVZEVGogMkJ5VnpJRUtMVGcwUU1PSWEyVzBESEQ0c1NLdDBKcGpKdTR3QjlxMDVkQU9XWkdXYXQ4QlBvSjB4SjBjTzZHc09kQVpkMUhJQnJwRSB6ZUVIU0ZmY3pmRWVkRE1Ic3RDZFFnK2daMFNGN2tVSitYQ010RVF2anIzUnh4em9nTDRVY29EN0lxbVRjMzlKRU85WHBFWXllclBwIGgvN21BTkNlWWdZaTZyOERCc0xmRmFrSFBNQm1FRHB4TEFNOFNQRWhvSzc3TW9QcmgzRDRzQ0twd01Oc2htQW94MGRnSHZYREVFbi8gZlJSK2c3UUNIbVBURnJrY3V3UERLWTVBQlAzMzhaczRmSGhwZFFTZW9KZ0FQTWtESTRGUkZFdXI2VlJ4VzZVMWZGK1Jyc0JvaWs4QiBZM2hnTE5DVTRqZzFuUnlYUmNiRGY1QUp3Tk1VMWJIOURBK1VDaHo5RTlWMDh0elZ5SjhFMzE5YXF2dGlNcGtwd0ZRZWVSWjRqdUkwIE5aM3A3b3IwZ2Y4cm9ycXZlVWc4RDh6Z2taa0JrNDlnRzNCU3dpejR2eUtxKytJRk1yT0JsanlTQjFTak9FYzlVdHRWamJuUUFFUjEgWC9NRS9pSXdqMGZtQXd2WXdHWC9YVGhFQnhEVmZiR0l6RXZBckdLMHhXU1d1T3kvbGFFRGlPcSttRXRtS0xDVVIrZ2N2WXpNeThvcyBkMUhpRlMxQVZQYzFMOThMbE9HUk9zb01JTFBDWGY5ZENSMUFxUHVpa053cVpmTEpqRkttQjVsWGxWbnRYT0kxTFVCRzBKUHlOV0pWIFpTYVNXYVBNV2pMclhQWGY5UXUwQUtIdWk5bmtOaWpEVzNTdkt6T2V6RHdFejVGMm1nOHRRS2hGbWRQT1VtWVltVGVVMlVobWt6S2IgSFN0czBRT0V1aStTeUpISklMTlZtVGZKVUIvQU5vY0MyNkVIQ0hWZjNzL2FnZUF4L3BZeWE4Z01nb3YrTzFjVEVQNnBweHVCZDBidCBhSWhPQzd6SHVMTjR0V3hVWFE4UTdyNjhWZHFUek52QnFmRytTaEdjKzI5MzZBSEMzWmNYZ3RzWGI3K1hSK0JpY1NvTjdiSXZzRkVUIEVKNCtzZzIrNWczMDRYZVVtVUJtTjV6Nzd5cE5RTGo3OGpGZVNLWTVqVTBLZHQwOU5OVENObjk5c2hYSVhtOUJ1UHZ5Ty9OTU12dG8gak03VXZJMjlINDc5ZDZZVkIzWjZDOExkbDA4Zms0dVBiQjZhcHN3QmRnZnQ4a2RiZ3V6MUZvUzdMdzRwbDB2bXNETGxlT2lJY2hYaCAySCtyYVFKaWRsKzhhOUFXdHRKUlphcndFRzFqRjdETHRNbXZCMDFBek82TDk0ekF1Nk5qeWh6bm9mZVZxd3VuL250Q0Z4Q3orK0trIHNxZklOQzcrS1o4MjZBTVQwaGFiL0RPNmdCU2FUM3JXb0Mxc3BROE0rcFNhUkc5UmpzR3AvMjdXQmNUc3Z0aGgwQmEyMG40amNLMkMgRDVVN0I0ZitPeEs2Z0pqZGx6NHl6R2V6VzQzVlpIZitCcVoxLy8xSUd4Q3orNklKYjJFckZSbjBxVFNKdHJFL05oKzF2ditoc1EySSBweWZFUVBmRmhlQ1JNY2lnT3pkSWRCZkhSZlBSVE12OE5ycXNTS0Q3MGk1UU5wdE5SdkFUZ2xyS2ZXSSttbXVWdmcyNmdLVGVBRG5OIGhuWklXeFd2VFgvejBkWlc2WmUwQVdrZWVOSlBqUVR6dWdwcHhyUitwcnRzWEVreDNUcXI5T2wySUo0ZUk1OEZuM1ZEOGQ1VW8rS1ogcEJTN01oYnBCN1Jaa2MvaFNtTXQwcit3UzVyaEpjZ0VkeUFXL1hjN2RBR3BrZXdPNU12dzZlbmFnSXh3eDJIVmYxZHJBNUxxRXNTaSAvMzZsRFVpaFN4Q0wvanRJRzVDT0xrSENYLzllV0tJTnlCbDNHTURYNGJJUDJlZDRDWkxyRnVTYmNObW45UUc1NkJZazdCM1owKzF6IHZBVEpkc214S214MmdUNGd4cmZ1UUw0TG16ekRQc25UaThaRnJqaUd6QW1iN0pDMTEwdVFKaTNjZ0p3SW0zdkVJY3ZidTRPK2Q4R1Igc2pCc3F0TmxnY2UzT2RWeTVFaE9ESi81ZzBPZXg1K1BkSi9sQkdMMTBkdFJ2VmJFeUZscVA1OENxOFF4bW9FRWRuK3N0Tjh5NzVSdSBJTVpwbTdkWFZ4ZGJwam05SkgyNHlUL2RrdVRxTmN1a1pVNGdQdnphaFZIS1lsTzlreldIc1Z4SEVHTmN1TnNYQnE2MVMwblRFc1M0IHRtL2d6UlBaYzlJMlk2TVRpQS9IQ090a3JkQjU1RGw4LzQ5NnJvalNUeUhUNk96MDdRWHhBdEk2WGtCKzF2VVlpUlRrbHpoWkVjZnogWWF5QVpEaUN4TWhMNjVJalNJeXN5Sy94QXJJdlhrRE94d3VJODI1cmpJRDBpcGV1VlJRdks3SWhYa0N5NHVXbDVjZ1JJeXZTeFJrayBObGFrbmpOSWJLekl3WGdCK1MxZVhscFhwb2ZSdVJnRUNhdkVHSHhwQ1lpQUNJaUFDSWlBQ0lpQUNJaUFDSWlBQ0lpQUNJaUFDSWlBIENJaUFDSWlBQ0lpQUNJaUFDSWlBQ0lpQUNJaUFhQVdTRnpLTlJsRlVDTDMzcVpsZklKZERwdEVyaWdyclF5cEU4RDlZL21PRi9KK0ggMzZPcEVQSzNoTko4QTBrcU1ZdWlxQ3I4VWFMQzljRytnWlM0VGZ6UDQ5RlZ1UEdMeUgvMTlZL0RNQTRIWnJHM2RMUVZnditvNSsrViBmbklZeHRuaHRSZGMzelhsWDFRWWRyVGZpazFidS9tTElSS0pSQ0tSU0NRU2lVUWlrVWdrRW9uKzUvb0g4S1NENEFDQzNmUUFBQUFsIGRFVllkR1JoZEdVNlkzSmxZWFJsQURJd01qSXRNRE10TURsVU1USTZNekk2TURBck1EQTZNREE4cGNVRUFBQUFKWFJGV0hSa1lYUmwgT20xdlpHbG1lUUF5TURJeUxUQXpMVEE1VkRFeU9qTXlPakF3S3pBd09qQXdUZmg5dUFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBXb3JsZCwgbGlua3MgYXMgd29ybGRMaW5rcyB9IGZyb20gJy4vV29ybGQnO1xuIiwgImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Xb3JsZC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gV29ybGQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIHdpZHRoPVwiMS40ZW1cIlxuICAgICAgaGVpZ2h0PVwiMS40ZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyMDAgMjAwXCJcbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxpbWFnZVxuICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FNQUFBQ2FobDZzQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQVdsQk1WRVVBQUFDM2o0ZTJrb3E0a1lpMiBrb20za29pM2tZaTJrWW0zazRtM2tZbS9qNCsya29tMmtZbTNrb2k0a1lpMmtvbTJrb20za1ltM2tZbTNrNGU2ajRxMmtZaTJrb20zIGtZaTNrb2Uza29pMms0bTNrb2kza29uLy8vODVZMkhlQUFBQUhIUlNUbE1BSUQ5dmo3L2Z6MzlmRUsvdm4wL2d3S0NBUURDUWNMQmcgMEZEdzZ0YzBjZ0FBQUFGaVMwZEVIZXNEY1pFQUFBQUhkRWxOUlFmbUF3a01JQUNxLzdxakFBQUpiRWxFUVZSNDJ1MWQ2WnFpT2hCdCB1aFZ0eERFU1JCRGUvem12Q1pDTkxGVk9FT2QrT1Q5NnVwVWxwL2FzOC9XVmtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRIGtQQS9SZmI5czlzL2tROVBITmh2eDkvdll1dFdJVG44bnZhREhlWCsvT2ZmWUpQOW52TWhnTVB1MDhrVVB3ZXowUmN5NG1KOGZ2cmQgdXJGdS9KNlVocEpyUld2OSs1cFdWNkpZMlpsdTNXSWJzbDJwc0tqZEY5S2J2QzcvL1RRVHk4NnEyWGdsWFpmcXBlWHhrNmpvTkliSyBkMjFoaG9MUG9WS2NqYVo1RzlaWVF2TFAxaFE0Zmt1ellabnY4c29hajdkMys5cVMrVXFXeGgxTnl4eEo1cnl4ZmUzbWh0d1hiS3pYIFUyZVNMTnNOYVdRaS9WMi82czVvMmNOMkJ4bmMyRTRwRCtFZEhmdXp2bWhjN2xnaXc2SEd2VDhXZHN0R3Qwb2hRdEJFdGpHdmdwdlYgcGIweE5ZZ0dGSktKMWRzUGd4L250L09ZM0tQNVlnRzFrNS9YWG1kdmhoRGV6V1N1TTFqS0tEUXJFbm5DY3RQZXc2QzdOTnpGRG05MSBlYzZqZjFyVytOZjQ4emorMHp1SlBEdzhydXlDNjd1WnRKeEhNL1JLaUtYbG9EZDNRZjZuZFBPWWpKTVh4b2NNMG9ZWUdQV2h4MHBtIC9TT3RZbExKVGZ2KzZHRXh5S3FtZmFkT09JOU9mMWxSenVZeE5jWUl2NjNmeGEvaXdzZjdtR1FXSG1NNG1nSVZYUkNaNitQTE15UVggVjdQVE8vVHF3empsL1J0NDhQelJtem40cEJqNkZKdHl3VnlhMWZoQmJSRFIreS90bTZMd2tvZE1jcnpzRlgrT1dWTHJkTzB6MFZTSiBaaWFzbXVZTjNxTFh3T09LeG1OT0hHcGZYQXJhbEg2K094NzFkSEtabmtQM3M4dnpKejVRelVMaklVVTlvdGpQZHJQMDZHWUtBbDcwIHMySGxzcXBoK2FSY05RaHpSOWRNdWxJRmU5WGIrQXcrcHhBUEtaVkJFaWxZamorc1NlUXdtRld0NkNteGp3dmFWTGRlTnZKOER2SVEgWmtwVkVmSHlZRVUzWVY3UUc0RzNVb2lNamJpRVd5OGhidHRyTXVKV3VscEh2clk5ZlM3Y1pVNnJNRVR5YVRDb0dIUWRNSm5sYStYRiB2VlhmazNGSmdrVVBvdERSOGM1bmFiWGJzNURSUDFULzdvYkFBTm5yWU9xK1dJVEV3MjVuWEJqR2pmdTN6ZTJsZkZhSlhEeVNXczJXIEV1TUxBdURCUkRLNUNSUCs1VzRtRGhZQ1Z5bFZtT0R2anU5cVhYUjF5TGc2UWhoeml5SVV3YkdIckpBV3MrZGplNmlxQTB6dWs0R3kgUjdySEcxZ2htZ05maU1BVjVYeCtKdE5GaGFYNlZFRTgrbm9aWENHSWNFZ0FSTzZCVkVIWFVBbE9JWUZrc2grUlh3SWpjaXVvQks2USBlcXlSZkFNTkUvcDdhR1NSUFNSeXlRVld5TGtjSXcwTjBlaGFnRnd1USt4Q3BRUXFoTGYvY0Q2cUU0cDJuQ0VSc1BXRS9KZkFIbmlGIFhIZ050VjhCcExwbEtvbFpjYkhaRDlCUWVVSGJDbFpxd1l5R3hZd21mQmtVckRUdG9OY0MraUJHR1BZZ2krdnVEVXd1MmZmdlR2UjggL1dodnBDY1FVYk02TEY3cGVBRFlRUmJ1MVVvUWxBeWpkUlV6aUVFREVvY0ExRXluZDBmTDdxQitKNlpmaUxINmUwVGI0akUxbEE1UiBIVnpFeTVsdHhTcFRjb2haWTRnZ1RJc1BGSUJTV0JnWlNJb29qV0Jtb3Z0b1R0SkFpQnd4UElhaGhGZFFKSnFUM0FGRUVGa1E2eVpWIE5DY2h3VGRub1ZubkplQjFoellFK1ZlWVh1MDJoaHF2ang3M2ZoS0R4K1RyN25JYTVlWVRNTFp5aVZSdXpWMmtwMVRzUGhkZUJiQUEgcW85Qk1CN2xRU09JRkhaVHhSUW5JenBVRjRQbDR4akxiZWFKcUxKdUZTTFpEeHNKNXRPdm1NN1VxQTljVjRtWmJveityaGpZT1I4ayBrZGt2OHNlVStCSEFGck9zMUlzUnRwUVJLdm00VW54MnppQWp2WXBaUVlTYnlXQlExTEhpcjlKT01XbXNqWkdVR0I2d1VkZEs1UExDIEZHRVVJbUkxcURKWDI1TU93YU9EZVcwbFd2NGdmU3dpaHNCSFI2MnErL2dHRnVJUmlRUll4MVpLNW9nMm4yZzBSVWxsZExLM0FxNFQgQWlXaXhDa0t2dzlEUk0xbG8wN29VLzhFT0FNS0o1TFhhZ3RXSUtMa3BzbFQrSUt6QWphY0JXelFmVkJWc2hLUlV1ekdtVlBsNmZzNyBFMnRwb2hBaGF4Q3hPRUMrMzMrenJ5Z3VoUXpndnA3V1VXZTFkZXp3cStDbUtRVU1ZTm43ZkdsWlNCNXJFcG1haEdWU3dsNmE5V3hLIGw1N21WVk5yRXBsbVhMRWxJN0NPWmRsREtlSldKVEw4U0NZZGVBaWVBRi9iYWsrTU1TTHZ5ZHZsam1tbHVseXlyNHpTOWg0aXdRR2UgNGxhalRJd3kzcjhnUTV2Unp4cEFYanlCMzB3cG5kVVNZendvTUJ1NE02NnVnbHd3MHAyN3B4RjR6SVcwRTZiNUZpSDN4NndnbmJyUiBKQWFScjRBZkx3WDhDTnl4Qnh2SzNGMklNeUVhU04rV2VKb0Z5K0djN1FsL3doK01pM25nTDg0QVhjQlVYcmxIMFk3dnpXTGdMODRpIElmOXdqMzJLSU9SWUVoNWh5d0hNT0RQVS9rWTV6QmZlMTNLK1Y4Wjl6SHlLRDk1R09TUUtyNHVkWmFTc1VHTE5obm9MUTZmNVVtQ24gMGVVbERlQWRTSGlkeEdPK3dEVVE5Z1Rad3Q2QmdzOUp2QkVlMXYrMWo2d29wVzhzRnhGelZpZ0xINUZCcUlTRUYyOHhpcnR1REs5OSBBZ1JpMjIxcXpSMXhlWkJUck9GTnFmVnJSRXFnOVNMaFNkUzdRREViWEVwbkpaSXBYOGRjMWVocnplbjFXMGNReTExSzdNVk1ONGJoIHl3bitkQlZlTkdRam91VFRTTXNlbGhKYXdsZVZBeGI4MjJZNlJ5Sk5PY1JlNk8vZFN1R1JXWGlQMVdEMUVVNmtBaStsUk1BM2RWQzYgNDJNRzRHRWp3cDJESDZFU2UxdVBWeVdldUFJaHNpeWxlSVJvbVVKSVpCNStsWGoyRUVHSTNLd3ZhMVpSU0VBbDd0NFJoTWhDNm15WCBJT0ZzNGlza0VMaGNLZ0gxRkJkRDlDei9Qcmg3clhJdVIvY0NFZGgySytNbVh0VTA5cTFwTWVETDBhN2VFV3dVVmIrSGJ6L2xJOWlZIERTc1krSVpHN0drTEZIMU5BNUpoWmEyTnh6NS90L2NaZ0tOQytzMmlQQ0VyOGZCYXZMWFdoaTUwMUc0VzhRRzhOZTBGdUNWc2t4NTggWVoxNmw0aU9hKzVvZHk4TldCSXBRTk84STlTME4xdld1bWNNT0xmbEdVU0s3eC9NZ2szRlNlYWpsWENMMC9Cd3VZbE9SRC81THd4WiBHY3ptMks5K1JKWERUWFFpMk9Xek14RnBqbTg0b01yT1JDT0NYcTQ1OWEyb1VPUTdEdHF5Tzd4R0JMK0Fsbms3bGRGaDljTkUzRXcwIEl1ajFFT3lZRVNYSXhlNFZPcGxZaGlJMEl0amxtZ2JleGNNNnRhWVNlV1ZwdHNyampRZHNMYTFMSVNJUEMveHdmWEFtNWtST09jZDkgMU80M0M5N2o1d3JNS0R4VkdidVhXaSt4d1FHSFJtaWFpUHlkbi9lYm5BT3Fyd3NZRjJMQnVyWXVBRmNGUjRjZXZMaEswR3NEVmJ3eiBYQmxRellzVFFlOWMyTnFzWmxEanlFL1lZSU1ONUcySEd0cFJpT3pIK2hTZ01XdXJPbFkrNEF5Q2VkdEYvdWQxeTdwOXh2bmVqOG0rIGN1U3VTbUZWR3dVckMxclU0V0FHamUwUDlvNUI1ZnBaTkJnb1BtTDExNDFEbFFORmc5bmNNOXczVFJ3QjFEZWdpWFhOWndRcUQ3TDIgR2lEVDNSNGZ6MEtRcWV4N3lNaTkrbWRJU05TMGV1TEcvajhZOWt0RFA5TzFFeElTRWhJU0VoSVNFaElTRWhJU0VoSVNFaElTRWhJUyAva244QjdzcG5vcFg1MGN6QUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ESXlMVEF6TFRBNVZERXlPak15T2pBd0t6QXdPakF3IFBLWEZCQUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeU1pMHdNeTB3T1ZReE1qb3pNam93TUNzd01Eb3dNRTM0ZmJnQUFBQUEgU1VWT1JLNUNZSUk9XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5cbmltcG9ydCB7XG4gIEJvb2tDbHViU2VjdGlvbixcbiAgYm9va0NsdWJTZWN0aW9uTGlua3MsXG59IGZyb20gJ34vY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbic7XG5pbXBvcnQge1xuICBOZXdzbGV0dGVyRm9ybVNlY3Rpb24sXG4gIG5ld3NsZXR0ZXJGb3JtU2VjdGlvbkxpbmtzLFxufSBmcm9tICd+L2NvbXBvbmVudHMvSG9tZS9OZXdzbGV0dGVyRm9ybVNlY3Rpb24nO1xuaW1wb3J0IHtcbiAgUG9zdHNTZWN0aW9uLFxuICBwb3N0c1NlY3Rpb25MaW5rcyxcbn0gZnJvbSAnfi9jb21wb25lbnRzL0hvbWUvUG9zdHNTZWN0aW9uJztcblxuaW1wb3J0IHsgZ3JhcGhjbXMgfSBmcm9tICd+L3V0aWxzL2dyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4uYm9va0NsdWJTZWN0aW9uTGlua3MoKSxcbiAgICAuLi5uZXdzbGV0dGVyRm9ybVNlY3Rpb25MaW5rcygpLFxuICAgIC4uLnBvc3RzU2VjdGlvbkxpbmtzKCksXG4gIF07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIHJldHVybiByZWRpcmVjdChgL2NhdGVnb3J5L2FsbGApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdHaXJsIHdpdGggT25lIEVhcnJpbmcgfCBIb21lJyB9O1xufVxuXG5jb25zdCBHZXRCbG9nUG9zdHNRdWVyeSA9IGdxbGBcbiAge1xuICAgIHBvc3RzKGZpcnN0OiA0LCB3aGVyZTogeyB0eXBlOiBCbG9nIH0pIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgY2F0ZWdvcnkge1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgICBleGNlcnB0XG4gICAgICB1cGRhdGVkQXRcbiAgICAgIHNsdWdcbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICBhbHRcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHRodW1ibmFpbDogdXJsKFxuICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICAgICAgaW1hZ2U6IHsgcmVzaXplOiB7IGhlaWdodDogMjAwLCB3aWR0aDogMzAwIH0gfVxuICAgICAgICAgICAgICBkb2N1bWVudDogeyBvdXRwdXQ6IHsgZm9ybWF0OiB3ZWJwIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICB1cmwoXG4gICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjoge1xuICAgICAgICAgICAgICBpbWFnZTogeyByZXNpemU6IHsgaGVpZ2h0OiA0MDAsIHdpZHRoOiA2MDAgfSB9XG4gICAgICAgICAgICAgIGRvY3VtZW50OiB7IG91dHB1dDogeyBmb3JtYXQ6IHdlYnAgfSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBHZXRCb29rUmV2aWV3UG9zdHNRdWVyeSA9IGdxbGBcbiAge1xuICAgIHBvc3RzKGZpcnN0OiA1LCB3aGVyZTogeyB0eXBlOiBSZXZpZXcgfSkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBleGNlcnB0XG4gICAgICB1cGRhdGVkQXRcbiAgICAgIHNsdWdcbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdGh1bWJuYWlsOiB1cmwoXG4gICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjoge1xuICAgICAgICAgICAgICBpbWFnZTogeyByZXNpemU6IHsgaGVpZ2h0OiAyMDAsIHdpZHRoOiAzMDAgfSB9XG4gICAgICAgICAgICAgIGRvY3VtZW50OiB7IG91dHB1dDogeyBmb3JtYXQ6IHdlYnAgfSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICAgIHVybChcbiAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiB7XG4gICAgICAgICAgICAgIGltYWdlOiB7IHJlc2l6ZTogeyBoZWlnaHQ6IDQwMCwgd2lkdGg6IDYwMCB9IH1cbiAgICAgICAgICAgICAgZG9jdW1lbnQ6IHsgb3V0cHV0OiB7IGZvcm1hdDogd2VicCB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgcG9zdHM6IGJsb2dQb3N0cyB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChHZXRCbG9nUG9zdHNRdWVyeSk7XG4gIGNvbnN0IHsgcG9zdHM6IGJvb2tSZXZpZXdQb3N0cyB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChcbiAgICBHZXRCb29rUmV2aWV3UG9zdHNRdWVyeVxuICApO1xuXG4gIHJldHVybiB7IGJsb2dQb3N0cywgYm9va1Jldmlld1Bvc3RzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IHsgYmxvZ1Bvc3RzLCBib29rUmV2aWV3UG9zdHMgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkdpcmwgd2l0aCBPbmUgRWFycmluZzwvaDE+XG4gICAgICA8UG9zdHNTZWN0aW9uIGJsb2dQb3N0cz17YmxvZ1Bvc3RzfSAvPlxuICAgICAgPEJvb2tDbHViU2VjdGlvbiBib29rcz17Ym9va1Jldmlld1Bvc3RzfSAvPlxuICAgICAgPE5ld3NsZXR0ZXJGb3JtU2VjdGlvbiAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJleHBvcnQge1xuICBCb29rQ2x1YlNlY3Rpb24sXG4gIGxpbmtzIGFzIGJvb2tDbHViU2VjdGlvbkxpbmtzLFxufSBmcm9tICcuL0Jvb2tDbHViU2VjdGlvbic7XG4iLCAiaW1wb3J0IHsgQm9va0NsdWJMaXN0LCBCb29rQ2x1Ykxpc3RMaW5rcyB9IGZyb20gJy4vQm9va0NsdWJMaXN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jvb2tDbHViU2VjdGlvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uQm9va0NsdWJMaXN0TGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9va0NsdWJTZWN0aW9uKHsgYm9va3MgfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvb2stY2x1Yi1zZWN0aW9uXCI+XG4gICAgICA8aDI+VGhlIEJvb2sgQ2x1YjwvaDI+XG4gICAgICA8aDM+XG4gICAgICAgIHtuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7IG1vbnRoOiAnbG9uZycgfSkuZm9ybWF0KG5ldyBEYXRlKCkpfVxuICAgICAgICAncyBQaWNrc1xuICAgICAgPC9oMz5cbiAgICAgIDxCb29rQ2x1Ykxpc3QgYm9va3M9e2Jvb2tzfSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBCb29rQ2x1Ykxpc3QsIGxpbmtzIGFzIEJvb2tDbHViTGlzdExpbmtzIH0gZnJvbSAnLi9Cb29rQ2x1Ykxpc3QnO1xuIiwgImltcG9ydCB7IEJvb2tDbHViSXRlbSwgYm9va0NsdWJJdGVtTGlua3MgfSBmcm9tICcuL0Jvb2tDbHViSXRlbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb29rQ2x1Ykxpc3QuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLmJvb2tDbHViSXRlbUxpbmtzKCksIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tDbHViTGlzdCh7IGJvb2tzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwiYm9vay1jbHViLWxpc3RcIj5cbiAgICAgIHtib29rcy5tYXAoKGJvb2spID0+IChcbiAgICAgICAgPEJvb2tDbHViSXRlbSBrZXk9e2Jvb2suaWR9IGJvb2s9e2Jvb2t9IC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuIiwgImV4cG9ydCB7IEJvb2tDbHViSXRlbSwgbGlua3MgYXMgYm9va0NsdWJJdGVtTGlua3MgfSBmcm9tICcuL0Jvb2tDbHViSXRlbSc7XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jvb2tDbHViSXRlbS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9va0NsdWJJdGVtKHsgYm9vayB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cImJvb2stY2x1Yi1pdGVtXCIga2V5PXtib29rLmlkfT5cbiAgICAgIDxMaW5rIHRvPXtgL3Bvc3QvJHtib29rLnNsdWd9YH0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3JjPXtib29rLmZlYXR1cmVkSW1hZ2UuaW1hZ2UudGh1bWJuYWlsfVxuICAgICAgICAgIGFsdD17YEJvb2sgY292ZXIgZm9yICR7Ym9vay5mZWF0dXJlZEltYWdlLm5hbWV9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApO1xufVxuIiwgImV4cG9ydCB7XG4gIE5ld3NsZXR0ZXJGb3JtU2VjdGlvbixcbiAgbGlua3MgYXMgbmV3c2xldHRlckZvcm1TZWN0aW9uTGlua3MsXG59IGZyb20gJy4vTmV3c2xldHRlckZvcm1TZWN0aW9uJztcbiIsICJpbXBvcnQgeyBCdXR0b24sIGJ1dHRvbkxpbmtzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0J1dHRvbic7XG5pbXBvcnQgeyBGb3JtLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgSW5wdXQsIGlucHV0TGlua3MgfSBmcm9tICcuL0lucHV0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05ld3NsZXR0ZXJGb3JtU2VjdGlvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4uYnV0dG9uTGlua3MoKSxcbiAgICAuLi5pbnB1dExpbmtzKCksXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdzbGV0dGVyRm9ybVNlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtLXNlY3Rpb25cIj5cbiAgICAgIDxoMj5cbiAgICAgICAgPHNwYW4+U2lnbiBVcDwvc3Bhbj5cbiAgICAgIDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgU3Vic2NyaWJlIHRvIHRoZSBlbWFpbCBsaXN0IHRvIGdldCBuZXcgcG9zdHMgZGlyZWN0bHkgdG8geW91ciBpbmJveC5cbiAgICAgIDwvcD5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvY2F0ZWdvcnkvYWxsXCIgcmVsb2FkRG9jdW1lbnQ+XG4gICAgICAgIDxJbnB1dCBsYWJlbD1cIkZpcnN0IE5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgIDxJbnB1dCBsYWJlbD1cIkVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImV4cG9ydCB7IElucHV0LCBsaW5rcyBhcyBpbnB1dExpbmtzIH0gZnJvbSAnLi9JbnB1dCc7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0LmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dCh7IGxhYmVsLCBuYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZm9ybS1pbnB1dC1maWVsZFwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxuICAgICAgPGlucHV0IG5hbWU9e25hbWV9IGlkPXtuYW1lfSB0eXBlPVwidGV4dFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgUG9zdHNTZWN0aW9uLCBsaW5rcyBhcyBwb3N0c1NlY3Rpb25MaW5rcyB9IGZyb20gJy4vUG9zdHNTZWN0aW9uJztcbiIsICJpbXBvcnQgeyBQb3N0cywgcG9zdHNMaW5rcyB9IGZyb20gJy4uLy4uL3NoYXJlZC9Qb3N0cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb3N0c1NlY3Rpb24uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLnBvc3RzTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUG9zdHNTZWN0aW9uKHsgYmxvZ1Bvc3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3N0cy1zZWN0aW9uXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+TGF0ZXN0IEJsb2cgUG9zdHM8L2gyPlxuICAgICAgPFBvc3RzIGxheW91dFR5cGU9XCJzcG90bGlnaHRcIiBwb3N0cz17YmxvZ1Bvc3RzfSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOiczOWMxNGIyMycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtTEVST1FBU0IuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVA2VTJGUFNGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUlJTEdYVDY3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yUUo3R1FNWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlNRVRSRzNPLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hYm91dCc6eydpZCc6J3JvdXRlcy9hYm91dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhYm91dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hYm91dC03V0hDSVhLTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVFIMktIWk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZQzNGQ09aTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVEMzVWTVZVLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvJHBhZ2UnOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LyRwYWdlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NhdGVnb3J5LzpjYXRlZ29yeS86cGFnZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvJHBhZ2UtWFBNM05BNkouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU80VDRRRzNaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSFY1T1pNUkkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TWUtCUFVZVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVEMzVWTVZVLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS9pbmRleCc6eydpZCc6J3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2F0ZWdvcnkvOmNhdGVnb3J5JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvaW5kZXgtSEFWV0wyS1IuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU80VDRRRzNaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSFY1T1pNUkkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TWUtCUFVZVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVEMzVWTVZVLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvbnRhY3QnOnsnaWQnOidyb3V0ZXMvY29udGFjdCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb250YWN0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvbnRhY3QtV1lPUFlGTzYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpGTkpMNU9TLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWUMzRkNPWkwuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVdXNFFGTlhMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1IVjVPWk1SSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNZS0JQVVlVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUQzNVZNVlUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb3N0LyRzbHVnJzp7J2lkJzoncm91dGVzL3Bvc3QvJHNsdWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncG9zdC86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb3N0LyRzbHVnLVBSUkpIMkZQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aRk5KTDVPUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVRSDJLSFpNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWUMzRkNPWkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TWUtCUFVZVS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0zOUMxNEIyMy5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMs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SUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUE7QUFB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
