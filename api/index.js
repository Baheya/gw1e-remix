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
    to: "/category/all"
  }, "All Stories")))) : /* @__PURE__ */ React.createElement("li", {
    key: index
  }, /* @__PURE__ */ React.createElement(import_remix6.NavLink, {
    to: page.path,
    className: ({ isActive }) => isActive ? "link-active main-navigation-link" : "main-navigation-link"
  }, page.name))))));
}

// app/styles/shared.css
var shared_default = "/build/_assets/shared-6TSFH4PI.css";

// route:/Users/beya/Documents/Programming/gw1e/app/root.jsx
var links10 = () => [
  ...links9(),
  ...links2(),
  { rel: "stylesheet", href: shared_default }
];
function meta() {
  return { title: "GW1E" };
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
var import_react2 = require("react");

// app/components/shared/Posts/Divider/index.js
init_react();

// app/components/shared/Posts/Divider/Divider.jsx
init_react();

// app/components/shared/Posts/Divider/Divider.css
var Divider_default = "/build/_assets/Divider-WYZ4XZL2.css";

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
    alt: post == null ? void 0 : post.imageAlt,
    srcSet: `${post.featuredImage.image.thumbnail} 300w, ${post.featuredImage.image.url} 600w`,
    sizes: "(min-width: 500px) 600px, 100px"
  }) : /* @__PURE__ */ React.createElement("img", {
    className: "featured-image spotlight-grid",
    loading: "lazy",
    src: post.featuredImage.image.thumbnail,
    alt: post == null ? void 0 : post.imageAlt,
    srcSet: `${post.featuredImage.image.thumbnail} 300w, ${post.featuredImage.image.url} 600w`,
    sizes: "(min-width: 800px) 100px, \n            (min-width: 500px) 600px, 100px"
  }) : /* @__PURE__ */ React.createElement("img", {
    className: "featured-image masonry-grid",
    loading: "eager",
    src: post.featuredImage.image.thumbnail,
    style: {
      aspectRatio: `${post.featuredImage.image.width / post.featuredImage.image.height}`
    },
    alt: post == null ? void 0 : post.imageAlt,
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
var PostItem_default = "/build/_assets/PostItem-AFQ23C4V.css";

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
  }, featured ? /* @__PURE__ */ React.createElement("h3", null, post.title) : /* @__PURE__ */ React.createElement(import_remix9.Link, {
    className: "content-link",
    to: `/post/${post.slug}`
  }, /* @__PURE__ */ React.createElement("h3", null, post.title)), !featured ? /* @__PURE__ */ React.createElement(PostMeta, {
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
var Posts_default = "/build/_assets/Posts-JXL3FOJV.css";

// app/components/shared/Posts/Posts.jsx
function links17() {
  return [
    ...links16(),
    ...links13(),
    { rel: "stylesheet", href: Posts_default }
  ];
}
function Posts({ layoutType, posts }) {
  (0, import_react2.useEffect)(() => {
    let masonryGrids = [...document.querySelectorAll(".masonry")];
    let handlers = [];
    if (masonryGrids.length) {
      const filteredMasonryGrids2 = filterGrids(masonryGrids);
      onLayout(filteredMasonryGrids2)();
      addEventListener("resize", handlers[filteredMasonryGrids2] = onLayout(filteredMasonryGrids2), false);
    }
    return () => removeEventListener("resize", () => handlers[filteredMasonryGrids], false);
  }, []);
  return /* @__PURE__ */ React.createElement("ul", {
    className: layoutType === "masonry" ? "blog-grid masonry" : "blog-grid"
  }, posts.length ? posts.map((post, index) => /* @__PURE__ */ React.createElement(import_react2.Fragment, {
    key: index
  }, /* @__PURE__ */ React.createElement(PostItem, {
    layoutType,
    post: post.node ?? post,
    featured: layoutType === "spotlight" && index === 0,
    key: post.id
  }), layoutType === "spotlight" && index === 0 ? /* @__PURE__ */ React.createElement(Divider, null) : null)) : /* @__PURE__ */ React.createElement("p", null, "No posts to display."));
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
var import_react3 = require("react");
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
  const [shareLink, setShareLink] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
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
    xlinkHref: "data:image/png;base64,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"
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
var BookClubItem_default = "/build/_assets/BookClubItem-F7DJFFAM.css";

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
    src: book.featuredImage.image.url,
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
    htmlFor: "name"
  }, label), /* @__PURE__ */ React.createElement("input", {
    name,
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
          url
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
var assets_manifest_default = { "version": "512272ac", "entry": { "module": "/build/entry.client-DJSMPXWK.js", "imports": ["/build/_shared/chunk-45WWSOSX.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Q3XQ3SZJ.js", "imports": ["/build/_shared/chunk-SLYAKIVZ.js", "/build/_shared/chunk-6KSWMTHB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-7WHCIXKN.js", "imports": ["/build/_shared/chunk-5QH2KHZM.js", "/build/_shared/chunk-YC3FCOZL.js", "/build/_shared/chunk-5D35VMVU.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category/$page": { "id": "routes/category/$category/$page", "parentId": "root", "path": "category/:category/:page", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/category/$category/$page-IQ5KOHVV.js", "imports": ["/build/_shared/chunk-EFE7F2AT.js", "/build/_shared/chunk-O3M66Y3Q.js", "/build/_shared/chunk-JUGKCY76.js", "/build/_shared/chunk-5D35VMVU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/category/$category/index": { "id": "routes/category/$category/index", "parentId": "root", "path": "category/:category", "index": true, "caseSensitive": void 0, "module": "/build/routes/category/$category/index-S47KBKF7.js", "imports": ["/build/_shared/chunk-EFE7F2AT.js", "/build/_shared/chunk-O3M66Y3Q.js", "/build/_shared/chunk-JUGKCY76.js", "/build/_shared/chunk-5D35VMVU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-7Y6VADWL.js", "imports": ["/build/_shared/chunk-ZFNJL5OS.js", "/build/_shared/chunk-YC3FCOZL.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IVN4YSXR.js", "imports": ["/build/_shared/chunk-O3M66Y3Q.js", "/build/_shared/chunk-JUGKCY76.js", "/build/_shared/chunk-5D35VMVU.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/post/$slug": { "id": "routes/post/$slug", "parentId": "root", "path": "post/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/post/$slug-JR3MAWCU.js", "imports": ["/build/_shared/chunk-ZFNJL5OS.js", "/build/_shared/chunk-5QH2KHZM.js", "/build/_shared/chunk-YC3FCOZL.js", "/build/_shared/chunk-JUGKCY76.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-512272AC.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb290LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0J1dHRvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uL0J1dHRvbi5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0luc3RhZ3JhbS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvSW5zdGFncmFtL0luc3RhZ3JhbS5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9DYXRlZ29yeUxpbmsvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0NhdGVnb3J5TGluay9DYXRlZ29yeUxpbmsuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9Ecm9wZG93bkJ1dHRvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvRHJvcGRvd25CdXR0b24vRHJvcGRvd25CdXR0b24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IYW1idXJnZXJCdXR0b24vaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hhbWJ1cmdlckJ1dHRvbi9IYW1idXJnZXJCdXR0b24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9DbG9zZS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvQ2xvc2UvQ2xvc2UuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9IYW1idXJnZXIvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0hhbWJ1cmdlci9IYW1idXJnZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9Mb2dvL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9Mb2dvL0xvZ28uanN4IiwgIi4uL2FwcC91dGlscy9rZXlib2FyZEhhbmRsZXIuanMiLCAicm91dGU6L1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvJHBhZ2UuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Jsb2cvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQmxvZy9CbG9nLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CbG9nL1BhZ2luYXRpb24vaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQmxvZy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Jsb2cvUGFnaW5hdGlvbi9QYWdpbmF0aW9uSXRlbS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9CbG9nL1BhZ2luYXRpb24vUGFnaW5hdGlvbkl0ZW0vUGFnaW5hdGlvbkl0ZW0uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0cy9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvUG9zdHMvUG9zdHMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0cy9EaXZpZGVyL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0cy9EaXZpZGVyL0RpdmlkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0SXRlbS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvUG9zdEl0ZW0vUG9zdEl0ZW0uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0SXRlbS9GZWF0dXJlZEltYWdlL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0SXRlbS9GZWF0dXJlZEltYWdlL0ZlYXR1cmVkSW1hZ2UuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qb3N0TWV0YS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvUG9zdE1ldGEvUG9zdE1ldGEuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9XYXZ5TGluZU1vYmlsZS9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVNb2JpbGUvV2F2eUxpbmVNb2JpbGUuanN4IiwgIi4uL2FwcC91dGlscy9jYWxjdWxhdGVNYXNvbnJ5TGF5b3V0LmpzIiwgIi4uL2FwcC91dGlscy9ncmFwaHFsLmpzIiwgInJvdXRlOi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5L2luZGV4LmpzeCIsICJyb3V0ZTovVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL3Bvc3QvJHNsdWcuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvQXJhYmljU2lnbmF0dXJlL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9BcmFiaWNTaWduYXR1cmUvQXJhYmljU2lnbmF0dXJlLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3N0L0JvZHkvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9Cb2R5L0JvZHkuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvUXVvdGUvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9RdW90ZS9RdW90ZS5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0RlY29yYXRpdmVJY29ucy9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvRGVjb3JhdGl2ZUljb25zL0RlY29yYXRpdmVJY29ucy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpdmluZy9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTGl2aW5nL0xpdmluZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xvdmluZy9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTG92aW5nL0xvdmluZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0RvaW5nL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9Eb2luZy9Eb2luZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0R5aW5nL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9EeWluZy9EeWluZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9GZWF0dXJlZEltYWdlL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvRmVhdHVyZWRJbWFnZS9GZWF0dXJlZEltYWdlLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3N0L1RhZ3MvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9UYWdzL1RhZ3MuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvVGFncy9UYWcvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUG9zdC9UYWdzL1RhZy9UYWcuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvU2hhcmVQb3N0L2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1Bvc3QvU2hhcmVQb3N0L1NoYXJlUG9zdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0ZhY2Vib29rL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9GYWNlYm9vay9GYWNlYm9vay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpbmsvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpbmsvTGluay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpbmtlZGluL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9MaW5rZWRpbi9MaW5rZWRpbi5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL01haWwvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL01haWwvTWFpbC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1R3aXR0ZXIvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1R3aXR0ZXIvVHdpdHRlci5qc3giLCAicm91dGU6L1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL3JvdXRlcy9jb250YWN0LmpzeCIsICJyb3V0ZTovVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL2Fib3V0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BYm91dC9MaXN0L2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Fib3V0L0xpc3QvTGlzdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQWJvdXQvTGlzdC9JdGVtL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Fib3V0L0xpc3QvSXRlbS9JdGVtLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVMb25nL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9XYXZ5TGluZUxvbmcvV2F2eUxpbmVMb25nLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVTaG9ydC9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVTaG9ydC9XYXZ5TGluZVNob3J0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvVW5pY29ybi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvVW5pY29ybi9Vbmljb3JuLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTW9iaWxlL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9Nb2JpbGUvTW9iaWxlLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvVXRlbnNpbHMvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1V0ZW5zaWxzL1V0ZW5zaWxzLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV29ybGQvaW5kZXguanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1dvcmxkL1dvcmxkLmpzeCIsICJyb3V0ZTovVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL2luZGV4LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbi9Cb29rQ2x1YlNlY3Rpb24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hvbWUvQm9va0NsdWJTZWN0aW9uL0Jvb2tDbHViTGlzdC9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbi9Cb29rQ2x1Ykxpc3QvQm9va0NsdWJMaXN0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL0Jvb2tDbHViU2VjdGlvbi9Cb29rQ2x1Ykxpc3QvQm9va0NsdWJJdGVtL2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hvbWUvQm9va0NsdWJTZWN0aW9uL0Jvb2tDbHViTGlzdC9Cb29rQ2x1Ykl0ZW0vQm9va0NsdWJJdGVtLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL05ld3NsZXR0ZXJGb3JtU2VjdGlvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL05ld3NsZXR0ZXJGb3JtU2VjdGlvbi9OZXdzbGV0dGVyRm9ybVNlY3Rpb24uanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hvbWUvTmV3c2xldHRlckZvcm1TZWN0aW9uL0lucHV0L2luZGV4LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hvbWUvTmV3c2xldHRlckZvcm1TZWN0aW9uL0lucHV0L0lucHV0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL1Bvc3RzU2VjdGlvbi9pbmRleC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Ib21lL1Bvc3RzU2VjdGlvbi9Qb3N0c1NlY3Rpb24uanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL3Jvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LyRwYWdlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS9pbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2JleWEvRG9jdW1lbnRzL1Byb2dyYW1taW5nL2d3MWUvYXBwL3JvdXRlcy9wb3N0LyRzbHVnLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvYmV5YS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvZ3cxZS9hcHAvcm91dGVzL2NvbnRhY3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb3V0ZXMvYWJvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9iZXlhL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9ndzFlL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvJHBhZ2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS8kcGFnZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjYXRlZ29yeS86Y2F0ZWdvcnkvOnBhZ2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNhdGVnb3J5LzpjYXRlZ29yeVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Bvc3QvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bvc3QvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicG9zdC86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY29udGFjdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29udGFjdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb250YWN0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hYm91dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZU1hdGNoZXMsXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IEZvb3RlciwgZm9vdGVyTGlua3MgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IEhlYWRlciwgaGVhZGVyTGlua3MgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcblxuLy8gaW1wb3J0IGZvbnRzIGZyb20gJy4vc3R5bGVzL2ZvbnRzLmNzcyc7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gJy4vc3R5bGVzL3NoYXJlZC5jc3MnO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG4gIC4uLmhlYWRlckxpbmtzKCksXG4gIC4uLmZvb3RlckxpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGdsb2JhbFN0eWxlcyB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiAnR1cxRScgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBtYXRjaGVzID0gdXNlTWF0Y2hlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInN0eWxlL2Nzc1wiIGhyZWY9XCJzdHlsZXMvc2hhcmVkLmNzc1wiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHlcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICBtYXRjaGVzPy5bMV0/LmlkID09PSAncm91dGVzL3Bvc3QvJHNsdWcnXG4gICAgICAgICAgICA/ICdzZWNvbmRhcnktYmcnXG4gICAgICAgICAgICA6ICdwcmltYXJ5LWJnJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgRm9vdGVyLCBsaW5rcyBhcyBmb290ZXJMaW5rcyB9IGZyb20gJy4vRm9vdGVyJztcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBCdXR0b24sIGJ1dHRvbkxpbmtzIH0gZnJvbSAnLi4vc2hhcmVkL0J1dHRvbic7XG5pbXBvcnQgeyBJbnN0YWdyYW0gfSBmcm9tICcuLi9zaGFyZWQvSWNvbnMvSW5zdGFncmFtJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYnV0dG9uTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCBwYWdlcyA9IFtcbiAgICB7IG5hbWU6ICdIb21lJywgcGF0aDogJy8nIH0sXG4gICAgeyBuYW1lOiAnQmxvZycsIHBhdGg6ICcvY2F0ZWdvcnkvYWxsJyB9LFxuICAgIHsgbmFtZTogJ0Fib3V0JywgcGF0aDogJy9hYm91dCcgfSxcbiAgICB7IG5hbWU6ICdDb250YWN0JywgcGF0aDogJy9jb250YWN0JyB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZvb3Rlci1uYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIkZvb3RlciBOYXZpZ2F0aW9uXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbmF2aWdhdGlvbi1saW5rc1wiPlxuICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtwYWdlLnBhdGh9PntwYWdlLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwiaWNvblwiXG4gICAgICAgIGxhYmVsPVwiRm9sbG93IG9uIEluc3RhZ3JhbVwiXG4gICAgICAgIGljb249ezxJbnN0YWdyYW0gY2xhc3NOYW1lPVwiaWNvblwiIC8+fVxuICAgICAgLz5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCdXR0b24sIGxpbmtzIGFzIGJ1dHRvbkxpbmtzIH0gZnJvbSAnLi9CdXR0b24nO1xuXG5leHBvcnQgeyBCdXR0b24sIGJ1dHRvbkxpbmtzIH07XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcbiAgY2hpbGRyZW4sXG4gIHRvLFxuICBpY29uLFxuICB2YXJpYW50LFxuICBsYWJlbCxcbiAgb25DbGljayxcbiAgY2xhc3NOYW1lLFxuICAuLi5kZWxlZ2F0ZWRcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RvID8gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPXt0b31cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgdmFyaWFudCA9PT0gJ2ljb24nXG4gICAgICAgICAgICAgID8gJ2J1dHRvbiBpY29uLWJ1dHRvbidcbiAgICAgICAgICAgICAgOiB2YXJpYW50ID09PSAncHJpbWFyeSdcbiAgICAgICAgICAgICAgPyAnYnV0dG9uIHByaW1hcnktYnV0dG9uJ1xuICAgICAgICAgICAgICA6ICdidXR0b24nXG4gICAgICAgICAgfVxuICAgICAgICAgIHsuLi5kZWxlZ2F0ZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUgPz8gJyd9XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICB2YXJpYW50ID09PSAnaWNvbidcbiAgICAgICAgICAgICAgICA/ICdidXR0b24gaWNvbi1idXR0b24nXG4gICAgICAgICAgICAgICAgOiB2YXJpYW50ID09PSAncHJpbWFyeSdcbiAgICAgICAgICAgICAgICA/ICdidXR0b24gcHJpbWFyeS1idXR0b24nXG4gICAgICAgICAgICAgICAgOiAnYnV0dG9uJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICB7Li4uZGVsZWdhdGVkfVxuICAgICAgICA+XG4gICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCB7IEluc3RhZ3JhbSB9IGZyb20gJy4vSW5zdGFncmFtJztcbiIsICJleHBvcnQgZnVuY3Rpb24gSW5zdGFncmFtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17MjR9IGhlaWdodD17MjR9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDlhMyAzIDAgMSAwIDAgNiAzIDMgMCAwIDAgMC02em0wLTJhNSA1IDAgMSAxIDAgMTAgNSA1IDAgMCAxIDAtMTB6bTYuNS0uMjVhMS4yNSAxLjI1IDAgMCAxLTIuNSAwIDEuMjUgMS4yNSAwIDAgMSAyLjUgMHpNMTIgNGMtMi40NzQgMC0yLjg3OC4wMDctNC4wMjkuMDU4LS43ODQuMDM3LTEuMzEuMTQyLTEuNzk4LjMzMmEyLjg4NiAyLjg4NiAwIDAgMC0xLjA4LjcwMyAyLjg5IDIuODkgMCAwIDAtLjcwNCAxLjA4Yy0uMTkuNDktLjI5NSAxLjAxNS0uMzMxIDEuNzk4QzQuMDA2IDkuMDc1IDQgOS40NjEgNCAxMmMwIDIuNDc0LjAwNyAyLjg3OC4wNTggNC4wMjkuMDM3Ljc4My4xNDIgMS4zMS4zMzEgMS43OTcuMTcuNDM1LjM3Ljc0OC43MDIgMS4wOC4zMzcuMzM2LjY1LjUzNyAxLjA4LjcwMy40OTQuMTkxIDEuMDIuMjk3IDEuOC4zMzNDOS4wNzUgMTkuOTk0IDkuNDYxIDIwIDEyIDIwYzIuNDc0IDAgMi44NzgtLjAwNyA0LjAyOS0uMDU4Ljc4Mi0uMDM3IDEuMzA5LS4xNDIgMS43OTctLjMzMWEyLjkyIDIuOTIgMCAwIDAgMS4wOC0uNzAyYy4zMzctLjMzNy41MzgtLjY1LjcwNC0xLjA4LjE5LS40OTMuMjk2LTEuMDIuMzMyLTEuOC4wNTItMS4xMDQuMDU4LTEuNDkuMDU4LTQuMDI5IDAtMi40NzQtLjAwNy0yLjg3OC0uMDU4LTQuMDI5LS4wMzctLjc4Mi0uMTQyLTEuMzEtLjMzMi0xLjc5OGEyLjkxMSAyLjkxMSAwIDAgMC0uNzAzLTEuMDggMi44ODQgMi44ODQgMCAwIDAtMS4wOC0uNzA0Yy0uNDktLjE5LTEuMDE2LS4yOTUtMS43OTgtLjMzMUMxNC45MjUgNC4wMDYgMTQuNTM5IDQgMTIgNHptMC0yYzIuNzE3IDAgMy4wNTYuMDEgNC4xMjIuMDYgMS4wNjUuMDUgMS43OS4yMTcgMi40MjguNDY1LjY2LjI1NCAxLjIxNi41OTggMS43NzIgMS4xNTNhNC45MDggNC45MDggMCAwIDEgMS4xNTMgMS43NzJjLjI0Ny42MzcuNDE1IDEuMzYzLjQ2NSAyLjQyOC4wNDcgMS4wNjYuMDYgMS40MDUuMDYgNC4xMjIgMCAyLjcxNy0uMDEgMy4wNTYtLjA2IDQuMTIyLS4wNSAxLjA2NS0uMjE4IDEuNzktLjQ2NSAyLjQyOGE0Ljg4MyA0Ljg4MyAwIDAgMS0xLjE1MyAxLjc3MiA0LjkxNSA0LjkxNSAwIDAgMS0xLjc3MiAxLjE1M2MtLjYzNy4yNDctMS4zNjMuNDE1LTIuNDI4LjQ2NS0xLjA2Ni4wNDctMS40MDUuMDYtNC4xMjIuMDYtMi43MTcgMC0zLjA1Ni0uMDEtNC4xMjItLjA2LTEuMDY1LS4wNS0xLjc5LS4yMTgtMi40MjgtLjQ2NWE0Ljg5IDQuODkgMCAwIDEtMS43NzItMS4xNTMgNC45MDQgNC45MDQgMCAwIDEtMS4xNTMtMS43NzJjLS4yNDgtLjYzNy0uNDE1LTEuMzYzLS40NjUtMi40MjhDMi4wMTMgMTUuMDU2IDIgMTQuNzE3IDIgMTJjMC0yLjcxNy4wMS0zLjA1Ni4wNi00LjEyMi4wNS0xLjA2Ni4yMTctMS43OS40NjUtMi40MjhhNC44OCA0Ljg4IDAgMCAxIDEuMTUzLTEuNzcyQTQuODk3IDQuODk3IDAgMCAxIDUuNDUgMi41MjVjLjYzOC0uMjQ4IDEuMzYyLS40MTUgMi40MjgtLjQ2NUM4Ljk0NCAyLjAxMyA5LjI4MyAyIDEyIDJ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBIZWFkZXIsIGxpbmtzIGFzIGhlYWRlckxpbmtzIH0gZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgeyBIZWFkZXIsIGhlYWRlckxpbmtzIH07XG4iLCAiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhdGVnb3J5TGluaywgY2F0ZWdvcnlMaW5rTGlua3MgfSBmcm9tICcuLi9zaGFyZWQvQ2F0ZWdvcnlMaW5rJztcbmltcG9ydCB7IERyb3Bkb3duQnV0dG9uLCBkcm9wZG93bkJ1dHRvbkxpbmtzIH0gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XG5pbXBvcnQgeyBIYW1idXJnZXJCdXR0b24sIGhhbWJ1cmdlckJ1dHRvbkxpbmtzIH0gZnJvbSAnLi9IYW1idXJnZXJCdXR0b24nO1xuaW1wb3J0IHsgTG9nbywgbG9nb0xpbmtzIH0gZnJvbSAnLi9Mb2dvJztcblxuaW1wb3J0IHsga2V5Ym9hcmRIYW5kbGVyIH0gZnJvbSAnfi91dGlscy9rZXlib2FyZEhhbmRsZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICAuLi5sb2dvTGlua3MoKSxcbiAgICAuLi5jYXRlZ29yeUxpbmtMaW5rcygpLFxuICAgIC4uLmhhbWJ1cmdlckJ1dHRvbkxpbmtzKCksXG4gICAgLi4uZHJvcGRvd25CdXR0b25MaW5rcygpLFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdO1xufVxuXG5jb25zdCBjYXRlZ29yaWVzID0gW1xuICB7IG5hbWU6ICdMaXZpbmcnLCBwYXRoOiAnL2NhdGVnb3J5L2xpdmluZycgfSxcbiAgeyBuYW1lOiAnTG92aW5nJywgcGF0aDogJy9jYXRlZ29yeS9sb3ZpbmcnIH0sXG4gIHsgbmFtZTogJ1JlYWRpbmcnLCBwYXRoOiAnL2NhdGVnb3J5L3JlYWRpbmcnIH0sXG4gIHsgbmFtZTogJ0RvaW5nJywgcGF0aDogJy9jYXRlZ29yeS9kb2luZycgfSxcbiAgeyBuYW1lOiAnRHlpbmcnLCBwYXRoOiAnL2NhdGVnb3J5L2R5aW5nJyB9LFxuXTtcblxuY29uc3QgcGFnZXMgPSBbXG4gIHsgbmFtZTogJ0hvbWUnLCBwYXRoOiAnLycsIGhhc0NoaWxkcmVuOiBmYWxzZSB9LFxuICB7IG5hbWU6ICdCbG9nJywgcGF0aDogJy9jYXRlZ29yeS9hbGwnLCBoYXNDaGlsZHJlbjogdHJ1ZSB9LFxuICB7IG5hbWU6ICdBYm91dCcsIHBhdGg6ICcvYWJvdXQnLCBoYXNDaGlsZHJlbjogZmFsc2UgfSxcbiAgeyBuYW1lOiAnQ29udGFjdCcsIHBhdGg6ICcvY29udGFjdCcsIGhhc0NoaWxkcmVuOiBmYWxzZSB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW2lzTmF2VmlzaWJsZSwgc2V0SXNOYXZWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU3ViTmF2VmlzaWJsZSwgc2V0SXNTdWJOYXZWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZEhhbmRsZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZEhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17aXNOYXZWaXNpYmxlID8gJ2hlYWRlciBwaW5rJyA6ICdoZWFkZXInfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwiTWFpbiBOYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxIYW1idXJnZXJCdXR0b25cbiAgICAgICAgICBzZXRJc05hdlZpc2libGU9e3NldElzTmF2VmlzaWJsZX1cbiAgICAgICAgICBpc05hdlZpc2libGU9e2lzTmF2VmlzaWJsZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgaXNOYXZWaXNpYmxlXG4gICAgICAgICAgICAgID8gJ21haW4tbmF2aWdhdGlvbi1saW5rcyB2aXNpYmxlJ1xuICAgICAgICAgICAgICA6ICdtYWluLW5hdmlnYXRpb24tbGlua3MnXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+XG4gICAgICAgICAgICBwYWdlLmhhc0NoaWxkcmVuID8gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGlzU3ViTmF2VmlzaWJsZT17aXNTdWJOYXZWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgc2V0SXNTdWJOYXZWaXNpYmxlPXtzZXRJc1N1Yk5hdlZpc2libGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BhZ2UubmFtZX1cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgaXNTdWJOYXZWaXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyAnc3ViLW5hdmlnYXRpb24tbGlua3MgdmlzaWJsZSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdzdWItbmF2aWdhdGlvbi1saW5rcydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlkPVwiYmxvZy1kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Yi1uYXZpZ2F0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2NhdGVnb3J5LnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXRlZ29yeUxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWItbmF2aWdhdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIvY2F0ZWdvcnkvYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFsbCBTdG9yaWVzXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgLy8gcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgdG89e3BhZ2UucGF0aH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICA/ICdsaW5rLWFjdGl2ZSBtYWluLW5hdmlnYXRpb24tbGluaydcbiAgICAgICAgICAgICAgICAgICAgICA6ICdtYWluLW5hdmlnYXRpb24tbGluaydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGFnZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgQ2F0ZWdvcnlMaW5rLCBsaW5rcyBhcyBjYXRlZ29yeUxpbmtMaW5rcyB9IGZyb20gJy4vQ2F0ZWdvcnlMaW5rJztcbiIsICJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2F0ZWdvcnlMaW5rLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yeUxpbmsoe1xuICB0byxcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbiA9ICdkb2luZycsXG4gIC4uLmRlbGVnYXRlZFxufSkge1xuICByZXR1cm4gKFxuICAgIDxOYXZMaW5rXG4gICAgICB0bz17dG99XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZSA/PyAnJ30gY2F0ZWdvcnktbGluayAke1xuICAgICAgICBjaGlsZHJlbiA/IGNoaWxkcmVuPy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgIH1gfVxuICAgICAgey4uLmRlbGVnYXRlZH1cbiAgICA+XG4gICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuICAgIDwvTmF2TGluaz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBEcm9wZG93bkJ1dHRvbiwgbGlua3MgYXMgZHJvcGRvd25CdXR0b25MaW5rcyB9IGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuIiwgImltcG9ydCB7IEJ1dHRvbiwgYnV0dG9uTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0J1dHRvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYnV0dG9uTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRHJvcGRvd25CdXR0b24oe1xuICBpc1N1Yk5hdlZpc2libGUsXG4gIHNldElzU3ViTmF2VmlzaWJsZSxcbiAgY2hpbGRyZW4sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgbGFiZWw9XCJUb2dnbGUgQmxvZyBDYXRlZ29yaWVzIE5hdmlnYXRpb25cIlxuICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGRyb3Bkb3duLWJ1dHRvblwiXG4gICAgICBhcmlhLWV4cGFuZGVkPXtpc1N1Yk5hdlZpc2libGV9XG4gICAgICBhcmlhLWNvbnRyb2xzPVwiYmxvZy1kcm9wZG93blwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1N1Yk5hdlZpc2libGUoIWlzU3ViTmF2VmlzaWJsZSl9XG4gICAgPlxuICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cbiIsICJleHBvcnQge1xuICBIYW1idXJnZXJCdXR0b24sXG4gIGxpbmtzIGFzIGhhbWJ1cmdlckJ1dHRvbkxpbmtzLFxufSBmcm9tICcuL0hhbWJ1cmdlckJ1dHRvbic7XG4iLCAiaW1wb3J0IHsgQnV0dG9uLCBidXR0b25MaW5rcyB9IGZyb20gJy4uLy4uL3NoYXJlZC9CdXR0b24nO1xuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0Nsb3NlJztcbmltcG9ydCB7IEhhbWJ1cmdlciB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvSGFtYnVyZ2VyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hhbWJ1cmdlckJ1dHRvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYnV0dG9uTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSGFtYnVyZ2VyQnV0dG9uKHsgaXNOYXZWaXNpYmxlLCBzZXRJc05hdlZpc2libGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2VmlzaWJsZSghaXNOYXZWaXNpYmxlKX1cbiAgICAgIGxhYmVsPVwiVG9nZ2xlIE5hdmlnYXRpb24gTWVudVwiXG4gICAgICB2YXJpYW50PVwiaWNvblwiXG4gICAgICBjbGFzc05hbWU9XCJoYW1idXJnZXItYnV0dG9uXCJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzTmF2VmlzaWJsZX1cbiAgICAgIGljb249eyFpc05hdlZpc2libGUgPyA8SGFtYnVyZ2VyIC8+IDogPENsb3NlIC8+fVxuICAgIC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgQ2xvc2UsIGxpbmtzIGFzIGNsb3NlTGlua3MgfSBmcm9tICcuL0Nsb3NlJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2xvc2UuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENsb3NlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNzIgNzJcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGdcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ9ezEwfVxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgID5cbiAgICAgICAgPHBhdGggZD1cIm0xNy41IDE3LjUgMzcgMzdNNTQuNSAxNy41bC0zNyAzN1wiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgSGFtYnVyZ2VyLCBsaW5rcyBhcyBoYW1idXJnZXJMaW5rcyB9IGZyb20gJy4vSGFtYnVyZ2VyJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSGFtYnVyZ2VyLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW1idXJnZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCA3MiA3MlwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Z1xuICAgICAgICBzdHJva2U9XCIjMDAwXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ9ezEwfVxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgID5cbiAgICAgICAgPHBhdGggZD1cIk0xNiAyNmg0ME0xNiAzNmg0ME0xNiA0Nmg0MFwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTG9nbywgbGlua3MgYXMgbG9nb0xpbmtzIH0gZnJvbSAnLi9Mb2dvJztcblxuZXhwb3J0IHsgTG9nbywgbG9nb0xpbmtzIH07XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2ltYWdlcy9HVzFFX0xvZ28ucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ28uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XG4gICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24ga2V5Ym9hcmRIYW5kbGVyKGUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tYnV0dG9uJyk7XG4gIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLWJ1dHRvbicpO1xuICBjb25zdCBzdWJOYXZMaW5rcyA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLW5hdmlnYXRpb24tbGluaycpO1xuICBjb25zdCBtYWluTmF2TGlua3MgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbmF2aWdhdGlvbi1saW5rJyk7XG5cbiAgY29uc3QgZmlyc3RGb2N1c2FibGVFbCA9IGRyb3Bkb3duQnV0dG9uXG4gICAgPyBkcm9wZG93bkJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnXG4gICAgICA/IGRyb3Bkb3duQnV0dG9uXG4gICAgICA6IGhhbWJ1cmdlckJ1dHRvblxuICAgIDogaGFtYnVyZ2VyQnV0dG9uO1xuXG4gIGNvbnN0IGRyb3Bkb3duID0gZHJvcGRvd25CdXR0b25cbiAgICA/IGRyb3Bkb3duQnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSdcbiAgICAgID8gc3ViTmF2TGlua3NcbiAgICAgIDogaGFtYnVyZ2VyQnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZScgJiZcbiAgICAgICAgZHJvcGRvd25CdXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZSdcbiAgICAgID8gbWFpbk5hdkxpbmtzXG4gICAgICA6IG51bGxcbiAgICA6IG51bGw7XG5cbiAgY29uc3QgbGFzdEZvY3VzYWJsZUVsID0gZHJvcGRvd24/Lltkcm9wZG93bi5sZW5ndGggLSAxXTtcbiAgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgIC8vUm90YXRlIEZvY3VzXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0Rm9jdXNhYmxlRWwpIHtcbiAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxhc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZmlyc3RGb2N1c2FibGVFbC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5cbmltcG9ydCB7IEJsb2csIGJsb2dMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9CbG9nJztcblxuaW1wb3J0IHsgZ3JhcGhjbXMgfSBmcm9tICd+L3V0aWxzL2dyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uYmxvZ0xpbmtzKCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdHaXJsIHdpdGggT25lIEVhcnJpbmcgfCBCbG9nJyB9O1xufVxuXG5jb25zdCBwb3N0c0xpbWl0ID0gNjtcblxuY29uc3QgR2V0UG9zdHNRdWVyeSA9IGdxbGBcbiAgcXVlcnkgR2V0UG9zdHNRdWVyeShcbiAgICAkcG9zdHNMaW1pdDogSW50IVxuICAgICRvZmZzZXQ6IEludCFcbiAgICAkY2F0ZWdvcnk6IFBvc3RXaGVyZUlucHV0XG4gICkge1xuICAgIHBvc3RzQ29ubmVjdGlvbihmaXJzdDogJHBvc3RzTGltaXQsIHNraXA6ICRvZmZzZXQsIHdoZXJlOiAkY2F0ZWdvcnkpIHtcbiAgICAgIHBhZ2VJbmZvIHtcbiAgICAgICAgaGFzUHJldmlvdXNQYWdlXG4gICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgIGVuZEN1cnNvclxuICAgICAgfVxuICAgICAgYWdncmVnYXRlIHtcbiAgICAgICAgY291bnRcbiAgICAgIH1cblxuICAgICAgZWRnZXMge1xuICAgICAgICBjdXJzb3JcbiAgICAgICAgbm9kZSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGNhdGVnb3J5IHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgICAgZXhjZXJwdFxuICAgICAgICAgIHVwZGF0ZWRBdFxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgdGh1bWJuYWlsOiB1cmwoXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICAgICAgICAgIGltYWdlOiB7IHJlc2l6ZTogeyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDQwMCB9IH1cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiB7IG91dHB1dDogeyBmb3JtYXQ6IHdlYnAgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHVybChcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IHsgcmVzaXplOiB7IGhlaWdodDogNDAwLCB3aWR0aDogNjAwIH0gfVxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHsgb3V0cHV0OiB7IGZvcm1hdDogd2VicCB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG9mZnNldCA9IChwYXJhbXMucGFnZSAtIDEpICogcG9zdHNMaW1pdDtcbiAgY29uc3QgY2F0ZWdvcnkgPVxuICAgIHBhcmFtcy5jYXRlZ29yeSA9PT0gJ2FsbCdcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHBhcmFtcy5jYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgIHBhcmFtcy5jYXRlZ29yeS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCB7IHBvc3RzQ29ubmVjdGlvbiB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChHZXRQb3N0c1F1ZXJ5LCB7XG4gICAgcG9zdHNMaW1pdCxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBjYXRlZ29yeTogeyBjYXRlZ29yeTogeyBuYW1lOiBjYXRlZ29yeSB9IH0sXG4gIH0pO1xuXG4gIHJldHVybiB7IHBvc3RzQ29ubmVjdGlvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIGxldCB7IHBvc3RzQ29ubmVjdGlvbiB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCB7IGNhdGVnb3J5LCBwYWdlIH0gPSB1c2VQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxCbG9nXG4gICAgICBjdXJyZW50UGFnZT17cGFnZX1cbiAgICAgIHBvc3RzTGltaXQ9e3Bvc3RzTGltaXR9XG4gICAgICBwb3N0cz17cG9zdHNDb25uZWN0aW9ufVxuICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgIC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgQmxvZywgbGlua3MgYXMgYmxvZ0xpbmtzIH0gZnJvbSAnLi9CbG9nJztcbiIsICJpbXBvcnQgeyBQYWdpbmF0aW9uLCBwYWdpbmF0aW9uTGlua3MgfSBmcm9tICcuL1BhZ2luYXRpb24nO1xuaW1wb3J0IHsgUG9zdHMsIHBvc3RzTGlua3MgfSBmcm9tICcuLi9zaGFyZWQvUG9zdHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmxvZy5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4ucGFnaW5hdGlvbkxpbmtzKCksXG4gICAgLi4ucG9zdHNMaW5rcygpLFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQmxvZyh7IHBvc3RzLCBwb3N0c0xpbWl0LCBjdXJyZW50UGFnZSwgY2F0ZWdvcnkgfSkge1xuICBsZXQgcGFnZUNvdW50ID0gTWF0aC5yb3VuZChwb3N0cy5hZ2dyZWdhdGUuY291bnQgLyBwb3N0c0xpbWl0KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJsb2ctY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+TGF0ZXN0IFBvc3RzPC9oMT5cbiAgICAgIDxQb3N0cyBsYXlvdXRUeXBlPVwibWFzb25yeVwiIHBvc3RzPXtwb3N0cz8uZWRnZXN9IC8+XG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIHBhZ2VDb3VudD17cGFnZUNvdW50fVxuICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBQYWdpbmF0aW9uLCBsaW5rcyBhcyBwYWdpbmF0aW9uTGlua3MgfSBmcm9tICcuL1BhZ2luYXRpb24nO1xuIiwgImltcG9ydCB7IFBhZ2luYXRpb25JdGVtLCBwYWdpbmF0aW9uSXRlbUxpbmtzIH0gZnJvbSAnLi9QYWdpbmF0aW9uSXRlbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYWdpbmF0aW9uLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5wYWdpbmF0aW9uSXRlbUxpbmtzKCksIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlQ291bnQsIGN1cnJlbnRQYWdlLCBjYXRlZ29yeSB9KSB7XG4gIHJldHVybiAoXG4gICAgPG5hdiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJQYWdpbmF0aW9uXCIgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgPHVsPlxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogcGFnZUNvdW50IH0sIChfLCBpKSA9PiBpICsgMSkubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgUGFnaW5hdGlvbkl0ZW0sIGxpbmtzIGFzIHBhZ2luYXRpb25JdGVtTGlua3MgfSBmcm9tICcuL1BhZ2luYXRpb25JdGVtJztcbiIsICJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnaW5hdGlvbkl0ZW0uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2luYXRpb25JdGVtKHsgaW5kZXgsIGN1cnJlbnRQYWdlLCBjYXRlZ29yeSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPE5hdkxpbmtcbiAgICAgICAgdG89e1xuICAgICAgICAgIGluZGV4ID09PSAwXG4gICAgICAgICAgICA/IGAvY2F0ZWdvcnkvJHtjYXRlZ29yeX1gXG4gICAgICAgICAgICA6IGAvY2F0ZWdvcnkvJHtjYXRlZ29yeX0vJHtpbmRleCArIDF9YFxuICAgICAgICB9XG4gICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICBpc0FjdGl2ZSA/ICdwYWdpbmF0aW9uLWl0ZW0gYWN0aXZlJyA6ICdwYWdpbmF0aW9uLWl0ZW0nXG4gICAgICAgIH1cbiAgICAgICAgYXJpYS1sYWJlbD1cIkdvIHRvIHBhZ2VcIlxuICAgICAgICBhcmlhLWN1cnJlbnQ9e2N1cnJlbnRQYWdlID09PSBpbmRleH1cbiAgICAgICAgZW5kXG4gICAgICA+XG4gICAgICAgIHtpbmRleCArIDF9XG4gICAgICA8L05hdkxpbms+XG4gICAgPC9saT5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBQb3N0cywgbGlua3MgYXMgcG9zdHNMaW5rcyB9IGZyb20gJy4vUG9zdHMnO1xuIiwgImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERpdmlkZXIsIGRpdmlkZXJMaW5rcyB9IGZyb20gJy4vRGl2aWRlcic7XG5pbXBvcnQgeyBQb3N0SXRlbSwgcG9zdEl0ZW1MaW5rcyB9IGZyb20gJy4uL1Bvc3RJdGVtJztcblxuaW1wb3J0IHsgZmlsdGVyR3JpZHMsIG9uTGF5b3V0IH0gZnJvbSAnfi91dGlscy9jYWxjdWxhdGVNYXNvbnJ5TGF5b3V0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bvc3RzLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICAuLi5wb3N0SXRlbUxpbmtzKCksXG4gICAgLi4uZGl2aWRlckxpbmtzKCksXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0cyh7IGxheW91dFR5cGUsIHBvc3RzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgbWFzb25yeUdyaWRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXNvbnJ5JyldO1xuICAgIGxldCBoYW5kbGVycyA9IFtdO1xuXG4gICAgaWYgKG1hc29ucnlHcmlkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkTWFzb25yeUdyaWRzID0gZmlsdGVyR3JpZHMobWFzb25yeUdyaWRzKTtcbiAgICAgIG9uTGF5b3V0KGZpbHRlcmVkTWFzb25yeUdyaWRzKSgpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIChoYW5kbGVyc1tmaWx0ZXJlZE1hc29ucnlHcmlkc10gPSBvbkxheW91dChmaWx0ZXJlZE1hc29ucnlHcmlkcykpLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT5cbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICAoKSA9PiBoYW5kbGVyc1tmaWx0ZXJlZE1hc29ucnlHcmlkc10sXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWxcbiAgICAgIGNsYXNzTmFtZT17bGF5b3V0VHlwZSA9PT0gJ21hc29ucnknID8gJ2Jsb2ctZ3JpZCBtYXNvbnJ5JyA6ICdibG9nLWdyaWQnfVxuICAgID5cbiAgICAgIHtwb3N0cy5sZW5ndGggPyAoXG4gICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8UG9zdEl0ZW1cbiAgICAgICAgICAgICAgbGF5b3V0VHlwZT17bGF5b3V0VHlwZX1cbiAgICAgICAgICAgICAgcG9zdD17cG9zdC5ub2RlID8/IHBvc3R9XG4gICAgICAgICAgICAgIGZlYXR1cmVkPXtsYXlvdXRUeXBlID09PSAnc3BvdGxpZ2h0JyAmJiBpbmRleCA9PT0gMH1cbiAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtsYXlvdXRUeXBlID09PSAnc3BvdGxpZ2h0JyAmJiBpbmRleCA9PT0gMCA/IDxEaXZpZGVyIC8+IDogbnVsbH1cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPHA+Tm8gcG9zdHMgdG8gZGlzcGxheS48L3A+XG4gICAgICApfVxuICAgIDwvdWw+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgRGl2aWRlciwgbGlua3MgYXMgZGl2aWRlckxpbmtzIH0gZnJvbSAnLi9EaXZpZGVyJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vRGl2aWRlci5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRGl2aWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXItd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBQb3N0SXRlbSwgbGlua3MgYXMgcG9zdEl0ZW1MaW5rcyB9IGZyb20gJy4vUG9zdEl0ZW0nO1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgYnV0dG9uTGlua3MgfSBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgRmVhdHVyZWRJbWFnZSwgZmVhdHVyZWRJbWFnZUxpbmtzIH0gZnJvbSAnLi9GZWF0dXJlZEltYWdlJztcbmltcG9ydCB7IFBvc3RNZXRhLCBwb3N0TWV0YUxpbmtzIH0gZnJvbSAnLi4vUG9zdE1ldGEnO1xuaW1wb3J0IHsgV2F2eUxpbmVNb2JpbGUgfSBmcm9tICcuLi9JY29ucy9XYXZ5TGluZU1vYmlsZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb3N0SXRlbS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4ucG9zdE1ldGFMaW5rcygpLFxuICAgIC4uLmJ1dHRvbkxpbmtzKCksXG4gICAgLi4uZmVhdHVyZWRJbWFnZUxpbmtzKCksXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0SXRlbSh7IHBvc3QsIGZlYXR1cmVkLCBsYXlvdXRUeXBlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICA8YXJ0aWNsZVxuICAgICAgICBjbGFzc05hbWU9e2ZlYXR1cmVkID8gJ2Jsb2ctcG9zdC1pdGVtIGZlYXR1cmVkJyA6ICdibG9nLXBvc3QtaXRlbSd9XG4gICAgICA+XG4gICAgICAgIDxGZWF0dXJlZEltYWdlXG4gICAgICAgICAgbGF5b3V0VHlwZT17bGF5b3V0VHlwZX1cbiAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgIGZlYXR1cmVkPXtmZWF0dXJlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICA8aDM+e3Bvc3QudGl0bGV9PC9oMz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY29udGVudC1saW5rXCIgdG89e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IWZlYXR1cmVkID8gKFxuICAgICAgICAgICAgPFBvc3RNZXRhIGNhdGVnb3J5PXtwb3N0LmNhdGVnb3J5fSBkYXRlPXtwb3N0LnVwZGF0ZWRBdH0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50LWV4Y2VycHRcIj57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgICB7ZmVhdHVyZWQgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLWJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0bz17YC9wb3N0LyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgIFJlYWQgUG9zdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPFdhdnlMaW5lTW9iaWxlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9saT5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBGZWF0dXJlZEltYWdlLCBsaW5rcyBhcyBmZWF0dXJlZEltYWdlTGlua3MgfSBmcm9tICcuL0ZlYXR1cmVkSW1hZ2UnO1xuIiwgImltcG9ydCBzdHlsZXMgZnJvbSAnLi9GZWF0dXJlZEltYWdlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGZWF0dXJlZEltYWdlKHsgbGF5b3V0VHlwZSwgZmVhdHVyZWQsIHBvc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bGF5b3V0VHlwZSA9PT0gJ3Nwb3RsaWdodCcgPyAoXG4gICAgICAgIGZlYXR1cmVkID8gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLWltYWdlIHNwb3RsaWdodC1ncmlkXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXG4gICAgICAgICAgICBzcmM9e3Bvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZS51cmx9XG4gICAgICAgICAgICBhbHQ9e3Bvc3Q/LmltYWdlQWx0fVxuICAgICAgICAgICAgc3JjU2V0PXtgJHtwb3N0LmZlYXR1cmVkSW1hZ2UuaW1hZ2UudGh1bWJuYWlsfSAzMDB3LCAke3Bvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZS51cmx9IDYwMHdgfVxuICAgICAgICAgICAgc2l6ZXM9XCIobWluLXdpZHRoOiA1MDBweCkgNjAwcHgsIDEwMHB4XCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLWltYWdlIHNwb3RsaWdodC1ncmlkXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLmltYWdlLnRodW1ibmFpbH1cbiAgICAgICAgICAgIGFsdD17cG9zdD8uaW1hZ2VBbHR9XG4gICAgICAgICAgICBzcmNTZXQ9e2Ake3Bvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZS50aHVtYm5haWx9IDMwMHcsICR7cG9zdC5mZWF0dXJlZEltYWdlLmltYWdlLnVybH0gNjAwd2B9XG4gICAgICAgICAgICBzaXplcz1cIihtaW4td2lkdGg6IDgwMHB4KSAxMDBweCwgXG4gICAgICAgICAgICAobWluLXdpZHRoOiA1MDBweCkgNjAwcHgsIDEwMHB4XCJcbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtaW1hZ2UgbWFzb25yeS1ncmlkXCJcbiAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxuICAgICAgICAgIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLmltYWdlLnRodW1ibmFpbH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGAke1xuICAgICAgICAgICAgICBwb3N0LmZlYXR1cmVkSW1hZ2UuaW1hZ2Uud2lkdGggLyBwb3N0LmZlYXR1cmVkSW1hZ2UuaW1hZ2UuaGVpZ2h0XG4gICAgICAgICAgICB9YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFsdD17cG9zdD8uaW1hZ2VBbHR9XG4gICAgICAgICAgc3JjU2V0PXtgJHtwb3N0LmZlYXR1cmVkSW1hZ2UuaW1hZ2UudGh1bWJuYWlsfSAzMDB3LCAke3Bvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZS51cmx9IDYwMHdgfVxuICAgICAgICAgIHNpemVzPVwiKG1pbi13aWR0aDogNTAwcHgpIDEwMHB4LCAzMDBweFwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCB7IFBvc3RNZXRhLCBsaW5rcyBhcyBwb3N0TWV0YUxpbmtzIH0gZnJvbSAnLi9Qb3N0TWV0YSc7XG4iLCAiaW1wb3J0IHsgQ2F0ZWdvcnlMaW5rLCBjYXRlZ29yeUxpbmtMaW5rcyB9IGZyb20gJy4uL0NhdGVnb3J5TGluayc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb3N0TWV0YS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uY2F0ZWdvcnlMaW5rTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUG9zdE1ldGEoeyBjYXRlZ29yeSwgZGF0ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LW1ldGFcIj5cbiAgICAgIDxDYXRlZ29yeUxpbmsgdG89e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgIHtjYXRlZ29yeS5uYW1lfVxuICAgICAgPC9DYXRlZ29yeUxpbms+XG4gICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgIHtuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2RlLURFJywge1xuICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9KX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBXYXZ5TGluZU1vYmlsZSB9IGZyb20gJy4vV2F2eUxpbmVNb2JpbGUnO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBXYXZ5TGluZU1vYmlsZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgIGhlaWdodD17NjB9XG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8aW1hZ2VcbiAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFvQUFBQUI0Q0FNQUFBQlZUYk5NQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQVdsQk1WRVVBQUFDM2o0ZTJrb3EzazRtMiBrb20za29pMmtvbTNrWW0vajQrNGtZaTZqNHE0a1lpM2tvaTJrWW0za29pMmtvbTNrb2kza1lpMmtZbTJrb20za1ltM2tvZTNrNGUzIGtZbTJrWWkya29tM2tZaTJrNG0za29uLy8vOUNvOHgvQUFBQUhIUlNUbE1BSUQ5L3I3K1BYeEJ2TUUrZno5REE4Ti92NElCZ1FLQ1EgY0xCUVNVR3pUd0FBQUFGaVMwZEVIZXNEY1pFQUFBQUhkRWxOUlFmbUF3a01JQUNxLzdxakFBQUdZVWxFUVZSNDJ1M2NhNWVhT2hTQSBZUmtFQVZIdUlKTC8venZQRG1ySGFiMGtJZGl1czk3blE5dTFPalhzc0pOc01PbG1Bd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQ0S2ZnS3czQWJpVGdNZDErZmFqYjUyb1Zockp2ZGhtSDZGWHlxM1d3djRlcG0gSS9sOW4zMHUzRFFNYzkxc3JzTk5QdFh1MTk4SjE5UStQcWpac1JEbC9NZHFtNjZkRFZrYTFYTmJqVzcyZUxtRUtGNDcrWk5kZmcxWCBOMXVvYTdpNzFjTU43OE50NWovV1ViaDJOZ1M3YmZWSHVJZDgvN0hrZnlQWlJVcVZSZHYxOTMzVnQ0UDBVQld2ZDFQNlhMcmxlR3I3IHV5YVNmbXlsaCtydGJyMXdVMG0rOHR4T1A4S2Qyck9FZTFneDNIMWU2M0RIL3U2K1M3Z25HWFoxdmwrdDJVQlBMWTJFZTUvbWZkZWUgWlpZNXBQOUFEZ1p4TGQzU1AvNjc4U3dUMGlxNWtPd09xaHk2eC9kN09qV3FEbGZKaFN5WExHZ2Z6em5aS0xtLzdTMC8wU3pjdEZMTiBNRDI4Mzhra1E3MWFKeGY2clV4NzQ1TndXOG45L0M4dnhvRk1mc09yYTBoRzZSei9LUmhLMW5ldmZxQ1gxTSs5MzVNK1V1WHBWV0lIIGJha3E3eW1ZU0xqRnkzQzdRa2FjLzNBclZiWXZ3eDFLRmEweTRndzdKcFlMZkJ2MlZLaUQzNHVjS25WKys0bkJTZTZKMTJhRFhEWGQgMjNDN1JrVitwNFcwVnNQYjZUd2JWTzEzb0dlUmhQdnVoeElKTi8vWWc5OXZwbHFkakVhZFhHVHNiM2dtVzNVMFN1aGdVQWVQcVpEVyBCcU5ORzB2bE1mTmxrU21Nb3NnS0ZYbE1oVkNWbzhuUEpXMVpwLzZhTmFmendQVDJKaWQvQzlOVW0zV00xamZlVWlHUlBEQzl2Y25aIFgrWkwyay9HWGVNdkZiS0RPcHZPR1lGay91ZWZSckpLdFJZLzdpc1ZrbHdkTFlhNVpQN0J5NnpRVzZUOVprNkZ0NnVYMGZWdnpmTmcgTTJmKzFrc3FkQlpwdjlGemZ2M3BTakJWamQwWVR3WWZ3MFFHcGszYWIrWlVzT25LSjJMejJmNGFidUhqR1VpZUFtelNYb3lxV2o3MyB5aWd2N0M0K08vcXNPb3l1MEdaZ1huUmx2YlJ2WlBtMUhtbkJVY1ZMdzQzVXlmb2Z0Y3ZuM3RRMjdVWFdxS1Z6ci8wb241ZWFEeTdEIHdjRjJZRjRDT3k3c20xQWRYWUpjT3ZkbVZlbHkzZjNTZGNsbGxNL0xjTDZvV1pkUnZ0SHppNGU1MTB6dmRvV1hkY205V2FtSEJyZC8gMlMxNkp1aHF5MnJqUnViZUJjOEVpY004ZENGejc0SUJsMW9WMlhleXhrL2RhM0tGenJkendVUXRDNE56Zk5tQ1FqQzJyWWUrU2QzciBYQWhtZG84QlAwenV4WTRVVjROenVNdUxIUk51QzhPTjgwVHR1REJjSmE1RnNsUDU5MjEwTFFTN0JhTjhRYkhqV0Z6ZGVIblFmSHVGIGpndkRsZU5FSGJvdUREZUQwd3VLckZwWXRqb1dnc3RHdVhPeDQxeGMzU3dyZGd4TUN4YUdLNWNYRkRJUE9TOE1ONTNEQzRxdUxwZjIgcDhzTENobmxTNmJkbWNzTDBNV2pmQzUyMWl3RTQrVlh1Sm1MWkx2YktnUFRRMVJaWS9sTUlFODl6dVhmM2FkWXIwc2VSdm5HNFFXbyBqMUh1NndYb1k1bUhnVG5ycmI0eVNzSkY5ZERkQjUydHZpeTFmd3Y4UkdlVkNqcnR2WHg1SXcvaE5sWEg1R1dVYi9UODRuOC8wQ3hVIFBnYm16Q1lWSkEvTXRqd1lHTTB6UDRsdHYrdDVMaXZNVTJHcUZ4YlpkMXBsblBuZTBuNHpMelVlOTU3ODZwaHFZVjM4MjhlVnltai8gbXQ0QzVYRTg2ZS9OalQ1dUozbmdNVnpKZktOS01JZzh6ZllYVW9DYURmVFE3cXZ1Ti9UZUU4OTdRUGVSMXp6WXpLWFIreTJVZXJ1MSB6enpZekZ2RDhyZVI3Q3JETFZER0pQT3IzYnRJc2x5VjNxYS9pN1o4djJrNWtYRFBmdmYwOVlYUEZKejNnL3QvdHBHRjZYWG42UDNnIDczZGlXa2NqOStUd0toZUNzRmFOcjJMakxwcEMxUyszYnU3MGRtdnZTMWR5S2wrZmlnanlXaFgraTdiTzE2bUlMSTJVS3Z6Zmp6bDIgNlp3cWZuaTZLdGxKdnpUdE9udHR1Nk5TVDQ3c1plRkJHV3kzZHBJTit0alN3eU43d1c0cjRZNnJQRDdxVXhIMWt5TjdYL3JJMGJETyBxenQ5S3VLdzVNaWVQbkFielFmUDF0dHluWFQ2ZEZXVWgzZm5lYk45cUU4OWxzT0tMNVQ2a3o2eXQ3MC92cHg4cGJFKzlWaU1LNGFyIFQyblZVWnorREhlckQ1NE42d3p5bVQ2MnBBN2IrL084Z1E1WHlXQmJKK3N2Yll6SGE3aldiYWlyNHRuQk00LzYwL1Vnc1Z6czlmZW0gYUZmZldSR001K052elVxNDArcDdpcWJ2Y0crT3p3NmVlWlNOMTRQRTM4cml0R0xTWHlUVFVOemFzNG14MWZvUEhqYnBPOTNpU2Y4eSBmWEJ6YmRiL2F2YkhnZHVWNmVQTE45TUhEelptMDY5bVB4bHVjQW4zbi92dkZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFQQi84eDhNNW1uTXE2SUJyZ0FBQUNWMFJWaDBaR0YwWlRwamNtVmhkR1VBTWpBeU1pMHcgTXkwd09WUXhNam96TWpvd01Dc3dNRG93TUR5bHhRUUFBQUFsZEVWWWRHUmhkR1U2Ylc5a2FXWjVBREl3TWpJdE1ETXRNRGxVTVRJNiBNekk2TURBck1EQTZNREJOK0gyNEFBQUFBRWxGVGtTdVFtQ0NcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgY29uc3Qgb25MYXlvdXQgPSBmdW5jdGlvbiAoZ3JpZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGxheW91dCgpIHtcbiAgICBncmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XG4gICAgICBsZXQgaW5pdGlhbF9oZWlnaHQgPSBncmlkLml0ZW1zWzBdLl9lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIGdyaWQuaXRlbXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBsZXQgcmVjdCA9IGMuX2VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjLm9mZiA9IHJlY3QubGVmdDtcbiAgICAgICAgZ3JpZC5jb2xIZWlnaHRzLnNldChjLm9mZiwgaW5pdGlhbF9oZWlnaHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChncmlkLm5jb2wgPT09IGdyaWQuY29sSGVpZ2h0cy5zaXplKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZ3JpZC5uY29sID0gZ3JpZC5jb2xIZWlnaHRzLnNpemU7XG5cbiAgICAgIGdyaWQuaXRlbXMuZm9yRWFjaCgoYykgPT4gYy5fZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKSk7XG5cbiAgICAgIC8qIGlmIHdlIGhhdmUgbW9yZSB0aGFuIG9uZSBjb2x1bW4gKi9cbiAgICAgIGlmIChncmlkLm5jb2wgPiAxKSB7XG4gICAgICAgIGdyaWQuaXRlbXMuZm9yRWFjaCgoZ3JpZF9pdGVtKSA9PiB7XG4gICAgICAgICAgbGV0IHJlY3QgPSBncmlkX2l0ZW0uX2VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIC8qIGdldCBoZWlnaHQgb2YgbWFzb25yeS1lZCBjb2x1bW4gKi9cbiAgICAgICAgICBsZXQgY29sX2hlaWdodCA9IGdyaWQuY29sSGVpZ2h0cy5nZXQoZ3JpZF9pdGVtLm9mZik7XG4gICAgICAgICAgLyogc2V0IG1hcmdpblRvcCB0byBkaWZmZXJlbnQgYmV0d2VlbiB3aGVyZSBpdCBpcyBhbmQgd2hlcmUgaXQgc2hvdWxkIGJlICovXG4gICAgICAgICAgZ3JpZF9pdGVtLl9lbC5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtjb2xfaGVpZ2h0IC0gcmVjdC50b3B9cHhgO1xuICAgICAgICAgIC8qIHVwZGF0ZSBjb2xfaGVpZ2h0IHdpdGggZWxlbWVudCBoZWlnaHQgKi9cbiAgICAgICAgICBjb2xfaGVpZ2h0ICs9IGdyaWRfaXRlbS5fZWwub2Zmc2V0SGVpZ2h0ICsgZ3JpZC5nYXA7XG4gICAgICAgICAgZ3JpZC5jb2xIZWlnaHRzLnNldChncmlkX2l0ZW0ub2ZmLCBjb2xfaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyR3JpZHMoZ3JpZHMpIHtcbiAgaWYgKFxuICAgIGdyaWRzLmxlbmd0aCAmJlxuICAgIGdldENvbXB1dGVkU3R5bGUoZ3JpZHNbMF0pLmdyaWRUZW1wbGF0ZVJvd3MgIT09ICdtYXNvbnJ5J1xuICApIHtcbiAgICBncmlkcyA9IGdyaWRzLm1hcCgoZ3JpZCkgPT4gKHtcbiAgICAgIF9lbDogZ3JpZCxcbiAgICAgIGdhcDogcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGdyaWQpLnJvd0dhcCksXG4gICAgICBpdGVtczogWy4uLmdyaWQuY2hpbGROb2Rlc11cbiAgICAgICAgLmZpbHRlcigoYykgPT4gYy5ub2RlVHlwZSA9PT0gMSlcbiAgICAgICAgLm1hcCgoYykgPT4gKHsgX2VsOiBjIH0pKSxcbiAgICAgIG5jb2w6IDAsXG4gICAgICBjb2xIZWlnaHRzOiBuZXcgTWFwKCksXG4gICAgfSkpO1xuICAgIHJldHVybiBncmlkcztcbiAgfVxufVxuIiwgImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuXG5leHBvcnQgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudChcbiAgJ2h0dHBzOi8vYXBpLWFwLXNvdXRoLTEuZ3JhcGhjbXMuY29tL3YyL2NreXBzaTNydDBpbnUwMXh4Nmt1ZWNpZTgvbWFzdGVyJ1xuKTtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VQYXJhbXMgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuXG5pbXBvcnQgeyBCbG9nLCBibG9nTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvQmxvZyc7XG5cbmltcG9ydCB7IGdyYXBoY21zIH0gZnJvbSAnfi91dGlscy9ncmFwaHFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLmJsb2dMaW5rcygpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiAnR2lybCB3aXRoIE9uZSBFYXJyaW5nIHwgQmxvZycgfTtcbn1cblxuY29uc3QgcG9zdHNMaW1pdCA9IDY7XG5cbmNvbnN0IEdldFBvc3RzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IEdldFBvc3RzUXVlcnkoXG4gICAgJHBvc3RzTGltaXQ6IEludCFcbiAgICAkb2Zmc2V0OiBJbnQhXG4gICAgJGNhdGVnb3J5OiBQb3N0V2hlcmVJbnB1dFxuICApIHtcbiAgICBwb3N0c0Nvbm5lY3Rpb24oZmlyc3Q6ICRwb3N0c0xpbWl0LCBza2lwOiAkb2Zmc2V0LCB3aGVyZTogJGNhdGVnb3J5KSB7XG4gICAgICBwYWdlSW5mbyB7XG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxuICAgICAgICBoYXNOZXh0UGFnZVxuICAgICAgICBlbmRDdXJzb3JcbiAgICAgIH1cbiAgICAgIGFnZ3JlZ2F0ZSB7XG4gICAgICAgIGNvdW50XG4gICAgICB9XG5cbiAgICAgIGVkZ2VzIHtcbiAgICAgICAgY3Vyc29yXG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBjYXRlZ29yeSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfVxuICAgICAgICAgIGV4Y2VycHRcbiAgICAgICAgICB1cGRhdGVkQXRcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgIHRodW1ibmFpbDogdXJsKFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICBpbWFnZTogeyByZXNpemU6IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiA0MDAgfSB9XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudDogeyBvdXRwdXQ6IHsgZm9ybWF0OiB3ZWJwIH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB1cmwoXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICAgICAgICAgIGltYWdlOiB7IHJlc2l6ZTogeyBoZWlnaHQ6IDQwMCwgd2lkdGg6IDYwMCB9IH1cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiB7IG91dHB1dDogeyBmb3JtYXQ6IHdlYnAgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9XG4gICAgcGFyYW1zLmNhdGVnb3J5ID09PSAnYWxsJ1xuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogcGFyYW1zLmNhdGVnb3J5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgcGFyYW1zLmNhdGVnb3J5LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG5cbiAgY29uc3QgeyBwb3N0c0Nvbm5lY3Rpb24gfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoR2V0UG9zdHNRdWVyeSwge1xuICAgIHBvc3RzTGltaXQsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGNhdGVnb3J5OiB7IGNhdGVnb3J5OiB7IG5hbWU6IGNhdGVnb3J5IH0gfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcG9zdHNDb25uZWN0aW9uIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cygpIHtcbiAgbGV0IHsgcG9zdHNDb25uZWN0aW9uIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHVzZVBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPEJsb2dcbiAgICAgIGN1cnJlbnRQYWdlPXswfVxuICAgICAgcG9zdHNMaW1pdD17cG9zdHNMaW1pdH1cbiAgICAgIHBvc3RzPXtwb3N0c0Nvbm5lY3Rpb259XG4gICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgLz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VQYXJhbXMgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuXG5pbXBvcnQgeyBncmFwaGNtcyB9IGZyb20gJ34vdXRpbHMvZ3JhcGhxbCc7XG5pbXBvcnQgeyBTaW5nbGVQb3N0LCBzaW5nbGVQb3N0TGlua3MgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uc2luZ2xlUG9zdExpbmtzKCldO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICByZXR1cm4gcmVkaXJlY3QoYC9jYXRlZ29yeS9hbGxgKTtcbn1cblxuY29uc3QgR2V0UG9zdFF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBHZXRQb3N0UXVlcnkoJHNsdWc6IFN0cmluZyEpIHtcbiAgICBwb3N0KHdoZXJlOiB7IHNsdWc6ICRzbHVnIH0pIHtcbiAgICAgIGJvZHkge1xuICAgICAgICByYXdcbiAgICAgIH1cbiAgICAgIGNhdGVnb3J5IHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgIGNhcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHRodW1ibmFpbDogdXJsKFxuICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICAgICAgaW1hZ2U6IHsgcmVzaXplOiB7IGhlaWdodDogMjAwLCB3aWR0aDogMzAwIH0gfVxuICAgICAgICAgICAgICBkb2N1bWVudDogeyBvdXRwdXQ6IHsgZm9ybWF0OiB3ZWJwIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICB1cmwoXG4gICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjoge1xuICAgICAgICAgICAgICBpbWFnZTogeyByZXNpemU6IHsgaGVpZ2h0OiA0MDAsIHdpZHRoOiA2MDAgfSB9XG4gICAgICAgICAgICAgIGRvY3VtZW50OiB7IG91dHB1dDogeyBmb3JtYXQ6IHdlYnAgfSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhZyB7XG4gICAgICAgIC4uLiBvbiBUYWcge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwdWJsaXNoZWRBdFxuICAgICAgaWRcbiAgICAgIHNsdWdcbiAgICAgIHRpdGxlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHNsdWcgPSBwYXJhbXMuc2x1ZztcbiAgY29uc3QgeyBwb3N0IH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KEdldFBvc3RRdWVyeSwge1xuICAgIHNsdWcsXG4gIH0pO1xuXG4gIHJldHVybiB7IHBvc3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQYWdlKCkge1xuICBsZXQgeyBwb3N0IH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIDxTaW5nbGVQb3N0IHBvc3Q9e3Bvc3R9IC8+O1xufVxuIiwgImV4cG9ydCB7IFNpbmdsZVBvc3QsIGxpbmtzIGFzIHNpbmdsZVBvc3RMaW5rcyB9IGZyb20gJy4vU2luZ2xlUG9zdCc7XG4iLCAiaW1wb3J0IHtcbiAgQXJhYmljU2lnbmF0dXJlLFxuICBhcmFiaWNTaWduYXR1cmVMaW5rcyxcbn0gZnJvbSAnLi4vc2hhcmVkL0FyYWJpY1NpZ25hdHVyZSc7XG5pbXBvcnQgeyBCb2R5LCBib2R5TGlua3MgfSBmcm9tICcuL0JvZHknO1xuaW1wb3J0IHtcbiAgRGVjb3JhdGl2ZUljb25zLFxuICBkZWNvcmF0aXZlSWNvbnNMaW5rcyxcbn0gZnJvbSAnLi4vc2hhcmVkL0ljb25zL0RlY29yYXRpdmVJY29ucyc7XG5pbXBvcnQgeyBGZWF0dXJlZEltYWdlLCBmZWF0dXJlZEltYWdlTGlua3MgfSBmcm9tICcuL0ZlYXR1cmVkSW1hZ2UnO1xuaW1wb3J0IHsgVGFncywgdGFnc0xpbmtzIH0gZnJvbSAnLi9UYWdzJztcbmltcG9ydCB7IFBvc3RNZXRhLCBwb3N0TWV0YUxpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9Qb3N0TWV0YSc7XG5pbXBvcnQgeyBTaGFyZVBvc3QsIHNoYXJlUG9zdExpbmtzIH0gZnJvbSAnLi9TaGFyZVBvc3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2luZ2xlUG9zdC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4ucG9zdE1ldGFMaW5rcygpLFxuICAgIC4uLnNoYXJlUG9zdExpbmtzKCksXG4gICAgLi4uZGVjb3JhdGl2ZUljb25zTGlua3MoKSxcbiAgICAuLi5hcmFiaWNTaWduYXR1cmVMaW5rcygpLFxuICAgIC4uLmZlYXR1cmVkSW1hZ2VMaW5rcygpLFxuICAgIC4uLnRhZ3NMaW5rcygpLFxuICAgIC4uLmJvZHlMaW5rcygpLFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2luZ2xlUG9zdCh7IHBvc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgPFBvc3RNZXRhIGNhdGVnb3J5PXtwb3N0LmNhdGVnb3J5fSBkYXRlPXtwb3N0LnB1Ymxpc2hlZEF0fSAvPlxuICAgICAgPFNoYXJlUG9zdCAvPlxuICAgICAgPEZlYXR1cmVkSW1hZ2VcbiAgICAgICAgaW1hZ2U9e3Bvc3QuZmVhdHVyZWRJbWFnZS5pbWFnZX1cbiAgICAgICAgY2FwdGlvbj17cG9zdC5mZWF0dXJlZEltYWdlLmNhcHRpb259XG4gICAgICAvPlxuICAgICAgPEJvZHkgY29udGVudD17cG9zdC5ib2R5LnJhd30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1mb290ZXJcIj5cbiAgICAgICAgPFRhZ3MgdGFncz17cG9zdC50YWd9IC8+XG5cbiAgICAgICAgPFNoYXJlUG9zdCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJzZW5kLW9mZlwiPlRpbGwgTmV4dCBUaW1lITwvcD5cbiAgICAgIDxBcmFiaWNTaWduYXR1cmUgLz5cbiAgICAgIDxEZWNvcmF0aXZlSWNvbnMgLz5cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG4iLCAiZXhwb3J0IHtcbiAgQXJhYmljU2lnbmF0dXJlLFxuICBsaW5rcyBhcyBhcmFiaWNTaWduYXR1cmVMaW5rcyxcbn0gZnJvbSAnLi9BcmFiaWNTaWduYXR1cmUnO1xuIiwgImltcG9ydCBhcmFiaWNMb2dvIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvYXJhYmljX2xvZ28ucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FyYWJpY1NpZ25hdHVyZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXJhYmljU2lnbmF0dXJlKCkge1xuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIGNsYXNzTmFtZT1cImFyYWJpYy1zaWduYXR1cmVcIlxuICAgICAgc3JjPXthcmFiaWNMb2dvfVxuICAgICAgYWx0PVwiR2lybCBXaXRoIE9uZSBFYXJyaW5nIFNpZ25hdHVyZSBpbiBBcmFiaWNcIlxuICAgIC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgQm9keSwgbGlua3MgYXMgYm9keUxpbmtzIH0gZnJvbSAnLi9Cb2R5JztcbiIsICJpbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gJ0BncmFwaGNtcy9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXInO1xuXG5pbXBvcnQgeyBRdW90ZSwgcXVvdGVMaW5rcyB9IGZyb20gJy4uL1F1b3RlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JvZHkuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLnF1b3RlTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9keSh7IGNvbnRlbnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgPFJpY2hUZXh0XG4gICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgICAgIHJlbmRlcmVycz17eyBibG9ja3F1b3RlOiAoeyBjaGlsZHJlbiB9KSA9PiA8UXVvdGU+e2NoaWxkcmVufTwvUXVvdGU+IH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCB7IFF1b3RlLCBsaW5rcyBhcyBxdW90ZUxpbmtzIH0gZnJvbSAnLi9RdW90ZSc7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1F1b3RlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBRdW90ZSh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cInF1b3RlXCI+e2NoaWxkcmVufTwvYmxvY2txdW90ZT47XG59XG4iLCAiZXhwb3J0IHtcbiAgRGVjb3JhdGl2ZUljb25zLFxuICBsaW5rcyBhcyBkZWNvcmF0aXZlSWNvbnNMaW5rcyxcbn0gZnJvbSAnLi9EZWNvcmF0aXZlSWNvbnMnO1xuIiwgImltcG9ydCB7IExpdmluZyB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTGl2aW5nJztcbmltcG9ydCB7IExvdmluZyB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTG92aW5nJztcbmltcG9ydCB7IERvaW5nIH0gZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9Eb2luZyc7XG5pbXBvcnQgeyBEeWluZyB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvRHlpbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGVjb3JhdGl2ZUljb25zLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZWNvcmF0aXZlSWNvbnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZWNvcmF0aXZlLWljb25zLWNvbnRhaW5lclwiPlxuICAgICAgPExpdmluZyAvPlxuICAgICAgPExvdmluZyAvPlxuICAgICAgPERvaW5nIC8+XG4gICAgICA8RHlpbmcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBMaXZpbmcgfSBmcm9tICcuL0xpdmluZyc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIExpdmluZyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxLjJlbVwiXG4gICAgICBoZWlnaHQ9XCIxLjJlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwMCAzMDBcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjYXRlZ29yeV9saXZpbmdfc3ZnX19hXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0wIDBoMzAwdjMwMEgwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8ZyBkYXRhLW5hbWU9XCJHVzFFX0xpdmluZyBJY29uXCIgY2xpcFBhdGg9XCJ1cmwoI2NhdGVnb3J5X2xpdmluZ19zdmdfX2EpXCI+XG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDU4NjFcIj5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA2NVwiXG4gICAgICAgICAgICAgIGQ9XCJNMjA5LjAwMiAxNTAuMzMyYTU4LjY3IDU4LjY3IDAgMSAwLTU4LjY3MSA1OC42NzMgNTguNjcxIDU4LjY3MSAwIDAgMCA1OC42NzEtNTguNjczWlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjYjc5Mjg5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM1XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDY2XCJcbiAgICAgICAgICAgICAgZD1cIk0xNTAuMzMxIDc2LjgwNGgxNC4wNThMMTUwLjMzMSAzMy4wNWwtMTQuMDU4IDQzLjc1NFpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzNlwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA2N1wiXG4gICAgICAgICAgICAgIGQ9XCJtMTEzLjU2OCA4Ni42NTQgMTIuMTgzLTcuMDI4LTM0LjA1OS0zMC44NjQgOS43IDQ0LjkyMlpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzN1wiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA2OFwiXG4gICAgICAgICAgICAgIGQ9XCJtODYuNjUxIDExMy41NjggNy4wMy0xMi4xNzctNDQuOTE5LTkuNyAzMC44NjQgMzQuMDU3WlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjYjc5Mjg5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDM4XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDY5XCJcbiAgICAgICAgICAgICAgZD1cIk03Ni44MDcgMTUwLjMzMnYtMTQuMDU4TDMzLjA1IDE1MC4zMzJsNDMuNzU3IDE0LjA2MVpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCAzOVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA3MFwiXG4gICAgICAgICAgICAgIGQ9XCJtODYuNjUxIDE4Ny4wOTItNy4wMjUtMTIuMTcxLTMwLjg2NCAzNC4wNTMgNDQuOTE5LTkuN1pcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA0MFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA3MVwiXG4gICAgICAgICAgICAgIGQ9XCJtMTEzLjU2OCAyMTQuMDA3LTEyLjE3Ny03LjAzMS05LjcgNDQuOTIzIDM0LjA1OS0zMC44NTlaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNDFcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNzJcIlxuICAgICAgICAgICAgICBkPVwiTTE1MC4zMzEgMjIzLjg1OWgtMTQuMDU4bDE0LjA1OCA0My43NTcgMTQuMDU4LTQzLjc1N1pcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA0MlwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA3M1wiXG4gICAgICAgICAgICAgIGQ9XCJtMTg3LjA4OSAyMTQuMDA3LTEyLjE3MSA3LjAzMyAzNC4wNTUgMzAuODU5LTkuNy00NC45MjNaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNDNcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggNzRcIlxuICAgICAgICAgICAgICBkPVwibTIxNC4wMDQgMTg3LjA5Mi03LjAyOCAxMi4xODIgNDQuOTI1IDkuNy0zMC44NTgtMzQuMDUzWlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjYjc5Mjg5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnIGRhdGEtbmFtZT1cIkdyb3VwIDQ0XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDc1XCJcbiAgICAgICAgICAgICAgZD1cIk0yMjMuODU1IDE1MC4zMzJ2MTQuMDYxbDQzLjc1Ny0xNC4wNjEtNDMuNzU3LTE0LjA1OFpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA0NVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA3NlwiXG4gICAgICAgICAgICAgIGQ9XCJtMjE0LjAwNCAxMTMuNTY4IDcuMDM5IDEyLjE4IDMwLjg1OC0zNC4wNTYtNDQuOTI1IDkuN1pcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZyBkYXRhLW5hbWU9XCJHcm91cCA0NlwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA3N1wiXG4gICAgICAgICAgICAgIGQ9XCJtMTg3LjA4OSA4Ni42NTQgMTIuMTgyIDcuMDMxIDkuNy00NC45MjItMzQuMDUzIDMwLjg2M1pcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2I3OTI4OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IExvdmluZyB9IGZyb20gJy4vTG92aW5nJztcbiIsICJleHBvcnQgZnVuY3Rpb24gTG92aW5nKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjEuMmVtXCJcbiAgICAgIGhlaWdodD1cIjEuMmVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAwIDMwMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNhdGVnb3J5X2xvdmluZ19zdmdfX2FcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgzMDB2MzAwSDB6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxnIGRhdGEtbmFtZT1cIkdXMUVfTG92aW5nIEljb25cIiBjbGlwUGF0aD1cInVybCgjY2F0ZWdvcnlfbG92aW5nX3N2Z19fYSlcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkYXRhLW5hbWU9XCJJY29uIGF3ZXNvbWUtaGVhcnRcIlxuICAgICAgICAgIGQ9XCJNMjM0LjcwNyA3MC44MjljLTIyLjQ0OS0xOS4xMzEtNTUuODM3LTE1LjY5LTc2LjQ0MyA1LjU3MWwtOC4wNyA4LjMxNi04LjA3LTguMzE2Yy0yMC41NjUtMjEuMjY0LTUzLjk5My0yNC43MDUtNzYuNDQzLTUuNTcxLTI1LjcyNiAyMS45NTUtMjcuMDc4IDYxLjM2NC00LjA1NSA4NS4xNjVsNzkuMjY5IDgxLjg1YTEyLjg0MyAxMi44NDMgMCAwIDAgMTguNTU4IDBsNzkuMjY0LTgxLjg1YzIzLjA2NC0yMy44IDIxLjcxMi02My4yMTEtNC4wMTUtODUuMTY4WlwiXG4gICAgICAgICAgZmlsbD1cIiNiNzkyODlcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IERvaW5nIH0gZnJvbSAnLi9Eb2luZyc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIERvaW5nKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjEuMmVtXCJcbiAgICAgIGhlaWdodD1cIjEuMmVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAwIDMwMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNhdGVnb3J5X2RvaW5nX3N2Z19fYVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDMwMHYzMDBIMHpcIiAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgICAgPGcgZGF0YS1uYW1lPVwiR1cxRV9Eb2luZyBJY29uXCIgY2xpcFBhdGg9XCJ1cmwoI2NhdGVnb3J5X2RvaW5nX3N2Z19fYSlcIj5cbiAgICAgICAgPGcgZGF0YS1uYW1lPVwiR3JvdXAgNTg5MFwiIGZpbGw9XCIjYjc5Mjg5XCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTU0MlwiXG4gICAgICAgICAgICBkPVwibTE1OC42MDggMTY5Ljg5OC0yOS4wNDQtMjkuMDQ5YzIuNDU3LTIuODU4IDQuODk0LTUuODk1IDcuNTQzLTguNzM0IDcuMzMyLTcuODU4IDE0LjU5My0xNS43OTMgMjIuMTc3LTIzLjRhMzE0LjI0MyAzMTQuMjQzIDAgMCAxIDMxLjk4Ny0yNy40MjcgNjM3LjYxMSA2MzcuNjExIDAgMCAxIDU1LjExNy0zNy41MDZjNC43NDctMi45IDkuNDc4LTEuMjc1IDExLjUxNSAzLjk4NWE1LjEzIDUuMTMgMCAwIDEtLjM1OSA0LjgyOWMtMTUuMDIyIDI0LjE5NC0zMS4xNjcgNDcuNi00OS42MjEgNjkuMzE3LTYuNzUgNy45NDQtMTMuODI4IDE1LjY2NC0yMS4zMDkgMjIuOTE3LTguODM5IDguNTY5LTE4LjI3NiAxNi41MjItMjcuNDU5IDI0LjczN2EyLjkxOCAyLjkxOCAwIDAgMS0uNTQ3LjMzMVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTU0M1wiXG4gICAgICAgICAgICBkPVwiTTEyNi43MTEgMTkzLjgzMmMtNS41NDMgNy4xNTctMTEuMTY0IDE0LjMyOC0xNC44MTYgMjIuNzkzYTY5LjY0NyA2OS42NDcgMCAwIDAtNS4xODcgMjMuMTQ0Yy0uMDI5LjQxOS0uMDY3LjgzNy0uMTEzIDEuMjU0LS41IDQuNDkzLjUxNyAzLjg5My00Ljc1OSA0LjUzNC05LjI0NSAxLjEyNC0xOC41MTIgMi4wNjgtMjcuNzU3IDMuMi03LjYzMi45MzMtMTQuODUgMy40NjUtMjIuMDUzIDYuMDE4LTIuNzY5Ljk4Mi01LjU1NyAxLjkxLTggMi43NDdsMzUuNTExLTM1LjUxMWExNS45NzYgMTUuOTc2IDAgMCAwIDQuMTA2LS4wNjEgNS4yNjkgNS4yNjkgMCAwIDAgMy41NjMtNi42MyA1LjQxOCA1LjQxOCAwIDAgMC02LjgtMy42IDUuNTE0IDUuNTE0IDAgMCAwLTMuNTExIDYuODM0IDIuMDkyIDIuMDkyIDAgMCAxLS4zMDkgMS43M3EtMTcuMjQ4IDE3LjM2NC0zNC41NzkgMzQuNjQ1YTkuMjEyIDkuMjEyIDAgMCAxLS43NzYuNTcyYzEuMDMxLTMuMDEgMS44MjItNS43MzggMi44ODUtOC4zNTcgNS41NzQtMTMuNzI5IDcuNS0yOC4yMTcgOS4wNTYtNDIuNzkyLjMyOC0zLjA4OC43ODUtNi4xNjIgMS4xLTkuMjUxLjEyOS0xLjI3My42ODgtMS43NzIgMS45NTUtMS45NjUgNC45OTEtLjc1OCAxMC4wMi0xLjM4NyAxNC45MzItMi41MSAxMy4wNDUtMi45ODEgMjQuMTc1LTkuNjE4IDMzLjk2NS0xOC4zODFaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1NDRcIlxuICAgICAgICAgICAgZD1cIm0xMjUuMzQ2IDE0NS41MTEgMjguMzkzIDI4LjM3OGMtMS41MzQgMS4xNzItMy4wNTYgMi40MjQtNC42NjYgMy41NDktNS42MDcgMy45MTctMTEuMjU0IDcuNzc4LTE2Ljg2MyAxMS42OTJhMS43MDkgMS43MDkgMCAwIDEtMi42NDMtLjI2MXEtOS42MDEtOS43NjQtMTkuMzU4LTE5LjM2OGMtLjkwNi0uOS0xLjEzNi0xLjUxMy0uMzI2LTIuNjIgNS4xNzUtNy4wNzkgMTAuMjg4LTE0LjIwNCAxNS40NjMtMjEuMzdaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgRHlpbmcgfSBmcm9tICcuL0R5aW5nJztcbiIsICJleHBvcnQgZnVuY3Rpb24gRHlpbmcocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMS4yZW1cIlxuICAgICAgaGVpZ2h0PVwiMS4yZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAzMDAgMzAwXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2F0ZWdvcnlfZHlpbmdfc3ZnX19hXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0wIDBoMzAwdjMwMEgwelwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8ZyBkYXRhLW5hbWU9XCJHVzFFX0R5aW5nIEljb25cIiBjbGlwUGF0aD1cInVybCgjY2F0ZWdvcnlfZHlpbmdfc3ZnX19hKVwiPlxuICAgICAgICA8ZyBkYXRhLW5hbWU9XCJub3VuX1BhdHRlcm4gTGVhdmVzXzU5NDM4OFwiIGZpbGw9XCIjYjc5Mjg5XCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTQ4OFwiXG4gICAgICAgICAgICBkPVwiTTEyOC4zODYgMjMwLjU2NXMtMTEuOTY0LTcuOTA4LTIzLjM1My0zOC4zNThjMTIuNjQyIDcuMzUgMjUuMjkgNi45NiAyNy4yMDYgNi41MjMtLjYzNi0yLjQzNS0uMTE1LTYuNTA0IDEuOTI0LTEyLjA0OHM2LjIzLTEwLjEzIDIyLjQ3MS0xNi42NThjLTIuODMtNC4yNyA4LjMxMi0xOC42NjYgOC4zMTItMTguNjY2cy0xMi44MSA0LjYyLTEzLjYwMy0xLjMyNmMtNC40MzEgMy4xODktMTYuNTYzIDcuMjUtMTkuODcuMTg2czguMTk4LTI1LjE3IDE0LjM0Ny0zMy4xODVjLTguNDE5LjU1My05LjYwNy0xMC4zMDEtOS43Ni0yMS41NTItMTAuNjY1IDIxLjA1NS0yMi41NDUgNy4xNjMtMjIuNTQ1IDcuMTYzczEuNTQgMTguNzU3LTguMDczIDIwLjA2Mi0xMy43MTQtMTUuNTctMTUuMDIxLTI5LjA1NmMtNi41ODggNi4xLTEwLjgxNyA1LjkzNy0xNS43NTgtMi4yODUtNC42MyAyLjY3LTExLjIxLTIuODQtMTYuOTA4LTEyLjI2IDMuMjUzIDMzLjI3OC04LjY4MiAzMy45ODYtMTUuMDI1IDMzLjc0MiA1Ljk0IDYuOTQ2IDE2LjgxOCAyNS45ODUgMTIuNTg0IDMzLjU2MnMtMTEuMTczIDEuOTA3LTE3LjI3Mi00LjY4Yy03LjQ2OCAxMC4wMDktOC4zODUgOS4xNzEtMjUuMjYgNS41MjkgMjcuMTU1IDIxLjEyNSA4LjE2MSAyNS4xNCA4LjE2MSAyNS4xNHM3LjAyIDMuNTU3IDExLjQ0OCA0LjIzOGM3LjI2IDEuMDgyIDE2Ljg3NCAzLjY0MyAxOC43ODMgMTAuOTQ1IDEuNzUgNy42NjItMyAxMS41NjgtMTcuOTI5IDE5Ljk3NiAxNS4yIDEuNjA2IDE3LjY3MSA1LjcxNyAxOC41ODUgMTAuNDI2IDcuNTA1LTUuMjYgMTguMTYyLTEwLjg0IDI1LjQ2MS04Ljg3OSA3LjQ2IDEuNjAxIDYuMjU2IDEwLjA5OSA2LjI1NiAxMC4wOTlzNy41MDUtNS4yNjEgMTEuODE4LTExLjA4M2MyLjQ3Ni0zLjYyOSA0Ljk5NS0xMC4yNSA2LjAzNS0xNC41MTkgMTIuMzQ1IDMyLjE2NiAyNC42NjggNDAuMjM0IDI1LjM4NiA0MC41NTRsLjM2LjE2YTIuMjAxIDIuMjAxIDAgMCAwIDIuOTUyLS44MzYgMy4wOTQgMy4wOTQgMCAwIDAtMS43MTItMi45MTRaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE0OTRcIlxuICAgICAgICAgICAgZD1cIk0yMzMuNTEyIDg5LjExMWE3OC45IDc4LjkgMCAwIDAtMy43MjggMTIuMDEzYy0uNDE0IDEuNjU3LS44MjkgMy43MjgtMS42NTcgNi4yMTQtMTEuMTg1LjQxNC00Ni44MDkgMy43MjgtNTguNDA5IDI4LjU4MiAyNi41MTIgNS4zODUgNDguMDUyLTEzLjY3IDU3LjE2Ni0yMy4yLTEuNjU3IDYuMjE0LTMuMzE0IDEzLjI1Ni01LjM4NSAyMC4zLTEwLjc3IDIuNDg1LTQ0LjczOCAxMy4yNTYtNTEuMzY2IDM5Ljc2OCAyNC4wMjYgMCA0MC42LTE4LjY0MSA0OC44ODEtMzAuNjU0LS44MjkgMi40ODUtMS4yNDMgNC41NTctMi4wNzEgNy4wNDItOC43IDEyLjAxMy0yOC4xNjkgNDIuNjY3LTE2LjE1NiA2OC43NjUgMjUuMjY5LTIwLjMgMjMuMi01NS45MjMgMjEuMTI3LTY5LjE3OWEyNi43OTQgMjYuNzk0IDAgMCAxIDEuNjU3LTUuMzg1Yy44MjggMTUuMzI3IDQuOTcxIDM5LjM1MyAyMy4yIDUwLjEyNCA4LjI4NS0yOC4xNjktMTIuNDI3LTUzLjAyMy0yMC4zLTYxLjMwOCAxLjY1Ny02LjIxNCAzLjMxNC0xMi40MjcgNC45NzEtMTcuODEzIDMuMzE0IDE0LjUgMTIuMDEzIDQwLjYgMzMuOTY4IDQ4LjA1MiAyLjA3MS0yOS0yMi4zNjktNDguODgxLTMxLjktNTUuNTA5YTQyLjk3IDQyLjk3IDAgMCAxIDEuMjQzLTQuOTcxIDg3LjMyNyA4Ny4zMjcgMCAwIDEgNC4xNDItMTIuNDI3YzQuMTQyIDExLjE4NSAxNS43NDEgMzYuMDM5IDM3LjcgMzkuNzY4LTIuOS0yNS4yNjktMjcuMzQtMzkuMzUzLTM2Ljg2OC00My41YTMzOC44ODMgMzM4Ljg4MyAwIDAgMSAxNS4zMjctMzEuMDY4IDIuMjM5IDIuMjM5IDAgMCAwLS44MjgtMy4zMTRjLS40MTQgMC0uNDE0LS40MTQtLjgyOC0uNDE0YTIuOTUyIDIuOTUyIDAgMCAwLTIuNDg1IDEuMjQzIDMyNC4yNDIgMzI0LjI0MiAwIDAgMC0xNi4xNTYgMzIuNzI1Yy05Ljk0Mi0xLjY1Ny00MS4wMS00Ljk3MS01NS41MDkgMTQuMDg0IDIyLjM3IDkuNTMxIDQ0LjczNi0zLjMxMSA1NC4yNjQtOS45MzhaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE0OTlcIlxuICAgICAgICAgICAgZD1cIk0xNjAuODc1IDIxNC40MzdjNy44MSAxMS45NiAxNi4zODggMTUuOTE1IDIzLjE2NSAxOS40MzgtMy42MzMtNy45MTUuMDA0LTE2Ljc2LTUuMjA1LTI5LjI0MS00LjQ3Mi0xMC43ODMtMTMuMTE1LTEyLjA4OC0xNi42NjktMTIuMzY1bC00LjIxMy03Ljg2MmMtLjM2OC0uODQ5LTEuMjctMS4wNjUtMS44MDItLjQzLS44NS4zNjktMS4wNjUgMS4yNjktLjQzIDEuODAxbDQuMjE2IDcuODY0Yy0xLjgxMiAyLjgwNi01LjIzNCAxMC43NS45MzggMjAuNzk1WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNTAyXCJcbiAgICAgICAgICAgIGQ9XCJNMTQ4LjAxNCA5MS41OTFjMTQuMzE3IDEuNjEzIDIyLjcxMi0yLjcxMyAyOS4yNTYtNS43OTktOC40NzYtMi4wMDgtMTMuMjk0LTEwLjcyMy0yNS44NDQtMTMuOTgyLTExLjI0Ni0zLjExMy0xNy41OTIgMi44OTQtMjAuMDg0IDUuMTE4bC04Ljc5Mi0xLjUxN2MtLjg5Ni0uMjM0LTEuNjIuMzQ0LTEuNDQ4IDEuMTU0cy4zNDUgMS42MiAxLjE1NiAxLjQ0OGw4Ljc5IDEuNTE4YzEuNSAzLjA2OSA1LjI1IDEwLjc0MSAxNi45NjYgMTIuMDZaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgRmVhdHVyZWRJbWFnZSwgbGlua3MgYXMgZmVhdHVyZWRJbWFnZUxpbmtzIH0gZnJvbSAnLi9GZWF0dXJlZEltYWdlJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vRmVhdHVyZWRJbWFnZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRmVhdHVyZWRJbWFnZSh7IGltYWdlLCBjYXB0aW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImZlYXR1cmVkLWltYWdlXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXG4gICAgICAgIHNyYz17aW1hZ2UudGh1bWJuYWlsfVxuICAgICAgICBhbHQ9XCJGZWF0dXJlZCBJbWFnZVwiXG4gICAgICAgIHNyY1NldD17YCR7aW1hZ2UudGh1bWJuYWlsfSAzMDB3LCAke2ltYWdlLnVybH0gNjAwd2B9XG4gICAgICAgIHNpemVzPVwiKG1pbi13aWR0aDogNTAwcHgpIDYwMHB4LCAxMDBweFwiXG4gICAgICAvPlxuICAgICAgPGZpZ2NhcHRpb24+e2NhcHRpb259PC9maWdjYXB0aW9uPlxuICAgIDwvZmlndXJlPlxuICApO1xufVxuIiwgImV4cG9ydCB7IFRhZ3MsIGxpbmtzIGFzIHRhZ3NMaW5rcyB9IGZyb20gJy4vVGFncyc7XG4iLCAiaW1wb3J0IHsgVGFnLCB0YWdMaW5rcyB9IGZyb20gJy4vVGFnJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhZ3MuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLnRhZ0xpbmtzKCksIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhZ3MoeyB0YWdzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwidGFnc1wiPlxuICAgICAge3RhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgPGxpIGtleT17dGFnLmlkfT5cbiAgICAgICAgICA8VGFnIHRhZz17dGFnfSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBUYWcsIGxpbmtzIGFzIHRhZ0xpbmtzIH0gZnJvbSAnLi9UYWcnO1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWcuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhZyh7IHRhZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgY2xhc3NOYW1lPVwidGFnXCIgdG89e2AvdGFnLyR7dGFnLm5hbWUudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICN7dGFnLm5hbWUudG9Mb3dlckNhc2UoKX1cbiAgICA8L0xpbms+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgU2hhcmVQb3N0LCBsaW5rcyBhcyBzaGFyZVBvc3RMaW5rcyB9IGZyb20gJy4vU2hhcmVQb3N0JztcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgRW1haWxTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgTGlua2VkaW5TaGFyZUJ1dHRvbixcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxufSBmcm9tICdyZWFjdC1zaGFyZSc7XG5cbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0ljb25zL0ZhY2Vib29rJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9zaGFyZWQvSWNvbnMvTGluayc7XG5pbXBvcnQgeyBMaW5rZWRpbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9JY29ucy9MaW5rZWRpbic7XG5pbXBvcnQgeyBNYWlsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0ljb25zL01haWwnO1xuaW1wb3J0IHsgVHdpdHRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9JY29ucy9Ud2l0dGVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NoYXJlUG9zdC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2hhcmVQb3N0KCkge1xuICBjb25zdCBbc2hhcmVMaW5rLCBzZXRTaGFyZUxpbmtdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2hhcmVMaW5rKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgIDxwPlNoYXJlPC9wPlxuICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvbiB1cmw9e3NoYXJlTGlua30+XG4gICAgICAgIDxUd2l0dGVyIGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1pY29uXCIgLz5cbiAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxuICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXtzaGFyZUxpbmt9PlxuICAgICAgICA8RmFjZWJvb2sgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWljb25cIiAvPlxuICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxuICAgICAgPExpbmtlZGluU2hhcmVCdXR0b24gdXJsPXtzaGFyZUxpbmt9PlxuICAgICAgICA8TGlua2VkaW4gY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWljb25cIiAvPlxuICAgICAgPC9MaW5rZWRpblNoYXJlQnV0dG9uPlxuICAgICAgPEVtYWlsU2hhcmVCdXR0b24gdXJsPXtzaGFyZUxpbmt9PlxuICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiIC8+XG4gICAgICA8L0VtYWlsU2hhcmVCdXR0b24+XG4gICAgICA8TGluayBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtaWNvblwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgRmFjZWJvb2sgfSBmcm9tICcuL0ZhY2Vib29rJztcbiIsICJleHBvcnQgZnVuY3Rpb24gRmFjZWJvb2socHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzEwIDMxMFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBlbmFibGVCYWNrZ3JvdW5kOiAnbmV3IDAgMCAzMTAgMzEwJyxcbiAgICAgIH19XG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgIC8vIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjAuOGVtXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTgxLjcwMyAxNjUuMTA2aDMzLjk4MVYzMDVhNSA1IDAgMCAwIDUgNUgxNzguM2E1IDUgMCAwIDAgNS01VjE2NS43NjVoMzkuMDY0YTUgNSAwIDAgMCA0Ljk2Ny00LjQyOWw1LjkzMy01MS41MDJhNSA1IDAgMCAwLTQuOTY2LTUuNTcyaC00NC45OTZWNzEuOTc4YzAtOS43MzIgNS4yNC0xNC42NjcgMTUuNTc2LTE0LjY2N2gyOS40MmE1IDUgMCAwIDAgNS01VjUuMDM3YTUgNSAwIDAgMC01LTVoLTQwLjU0NUEzOS43NDYgMzkuNzQ2IDAgMCAwIDE4NS44OTYgMGMtNy4wMzUgMC0zMS40ODggMS4zODEtNTAuODA0IDE5LjE1MS0yMS40MDIgMTkuNjkyLTE4LjQyNyA0My4yNy0xNy43MTYgNDcuMzU4djM3Ljc1Mkg4MS43MDNhNSA1IDAgMCAwLTUgNXY1MC44NDRhNSA1IDAgMCAwIDUgNS4wMDF6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBMaW5rIH0gZnJvbSAnLi9MaW5rJztcbiIsICJleHBvcnQgZnVuY3Rpb24gTGluayhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIC8vIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjAuOGVtXCJcbiAgICAgIHZpZXdCb3g9XCIyIDIgMTYgMTZcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIm03Ljg1OSAxNC42OTEtLjgxLjgwNWExLjgxNCAxLjgxNCAwIDAgMS0yLjU0NSAwIDEuNzYyIDEuNzYyIDAgMCAxIDAtMi41MDRsMi45OC0yLjk1NWMuNjE3LS42MTMgMS43NzktMS41MTUgMi42MjYtLjY3NWEuOTkyLjk5MiAwIDEgMCAxLjM5Ny0xLjQwN2MtMS40MzgtMS40MjgtMy41NjYtMS4xNjQtNS40MTkuNjc1bC0yLjk4IDIuOTU2QTMuNzE5IDMuNzE5IDAgMCAwIDIgMTQuMjQ0YTMuNzIgMy43MiAwIDAgMCAxLjEwOCAyLjY1OGMuNzM2LjczIDEuNzAyIDEuMDk2IDIuNjY5IDEuMDk2czEuOTM0LS4zNjUgMi42NjktMS4wOTZsLjgxMS0uODA1YS45ODguOTg4IDAgMCAwIC4wMDUtMS40Ljk5NS45OTUgMCAwIDAtMS40MDMtLjAwNnptOS4wMzItMTEuNDg0Yy0xLjU0Ny0xLjUzNC0zLjcwOS0xLjYxNy01LjEzOS0uMTk3bC0xLjAwOSAxLjAwMmEuOTkuOTkgMCAxIDAgMS4zOTYgMS40MDZsMS4wMS0xLjAwMWMuNzQtLjczNiAxLjcxMS0uNDMxIDIuMzQ2LjE5Ny4zMzYuMzM1LjUyMi43NzkuNTIyIDEuMjUycy0uMTg2LjkxNy0uNTIyIDEuMjUxbC0zLjE4IDMuMTU0Yy0xLjQ1NCAxLjQ0MS0yLjEzNi43NjYtMi40MjcuNDc3YS45OS45OSAwIDEgMC0xLjM5NiAxLjQwNmMuNjY4LjY2MiAxLjQzLjk5IDIuMjI4Ljk5Ljk3NyAwIDIuMDEtLjQ5MiAyLjk5My0xLjQ2N2wzLjE4LTMuMTUzQTMuNzMyIDMuNzMyIDAgMCAwIDE4IDUuODY2YTMuNzI2IDMuNzI2IDAgMCAwLTEuMTA5LTIuNjU5elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgTGlua2VkaW4gfSBmcm9tICcuL0xpbmtlZGluJztcbiIsICJleHBvcnQgZnVuY3Rpb24gTGlua2VkaW4ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzEwIDMxMFwiXG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgIC8vIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjAuOGVtXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcyLjE2IDk5LjczSDkuOTI3YTUgNSAwIDAgMC01IDV2MTk5LjkyOGE1IDUgMCAwIDAgNSA1SDcyLjE2YTUgNSAwIDAgMCA1LTVWMTA0LjczYTUgNSAwIDAgMC01LTV6TTQxLjA2Ni4zNDFDMTguNDIyLjM0MSAwIDE4Ljc0MyAwIDQxLjM2MiAwIDYzLjk5MSAxOC40MjIgODIuNCA0MS4wNjYgODIuNGMyMi42MjYgMCA0MS4wMzMtMTguNDEgNDEuMDMzLTQxLjAzOEM4Mi4xIDE4Ljc0MyA2My42OTIuMzQxIDQxLjA2Ni4zNDF6TTIzMC40NTQgOTQuNzYxYy0yNC45OTUgMC00My40NzIgMTAuNzQ1LTU0LjY3OSAyMi45NTRWMTA0LjczYTUgNSAwIDAgMC01LTVoLTU5LjU5OWE1IDUgMCAwIDAtNSA1djE5OS45MjhhNSA1IDAgMCAwIDUgNWg2Mi4wOTdhNSA1IDAgMCAwIDUtNVYyMDUuNzRjMC0zMy4zMzMgOS4wNTQtNDYuMzE5IDMyLjI5LTQ2LjMxOSAyNS4zMDYgMCAyNy4zMTcgMjAuODE4IDI3LjMxNyA0OC4wMzR2OTcuMjA0YTUgNSAwIDAgMCA1IDVIMzA1YTUgNSAwIDAgMCA1LTVWMTk0Ljk5NWMwLTQ5LjU2NS05LjQ1MS0xMDAuMjM0LTc5LjU0Ni0xMDAuMjM0elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgTWFpbCB9IGZyb20gJy4vTWFpbCc7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIE1haWwocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDYzLjE1NCA0NTUuODYyIDMyOS41NTRcIlxuICAgICAgLy8gd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMC44ZW1cIlxuICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00NDEuMDg4IDYzLjE1NEgxNC43NzRDNi42MTUgNjMuMTU0IDAgNjkuNzcgMCA3Ny45M3YzMDAuMDAzYzAgOC4xNiA2LjYxNSAxNC43NzUgMTQuNzc0IDE0Ljc3NWg0MjYuMzEzYzguMTYgMCAxNC43NzUtNi42MTQgMTQuNzc1LTE0Ljc3NVY3Ny45M2MwLTguMTYtNi42MTQtMTQuNzc2LTE0Ljc3NC0xNC43NzZ6bS0zNy42OTQgMjUzLjUwNWM2LjI1NiA1LjQzIDYuOTI2IDE0LjkwMyAxLjQ5NyAyMS4xNi01LjQzIDYuMjU0LTE0LjkwMSA2LjkyOC0yMS4xNjEgMS40OTZsLTEwNS40NTItOTEuNTIzLTQwLjUxNSAzNS4xNjRjLTIuODIgMi40NDgtNi4zMjYgMy42NzItOS44MzIgMy42NzJzLTcuMDEyLTEuMjI0LTkuODMyLTMuNjcybC00MC41MTUtMzUuMTY0LTEwNS40NTIgOTEuNTIzYy02LjI1NyA1LjQzLTE1LjczMSA0Ljc2MS0yMS4xNjEtMS40OTYtNS40My02LjI1Ny00Ljc2LTE1LjczIDEuNDk3LTIxLjE2TDE1NC43IDIyNy45MyA1Mi40NjggMTM5LjIwM2MtNi4yNTYtNS40My02LjkyNi0xNC45MDMtMS40OTctMjEuMTYgNS40MzEtNi4yNTYgMTQuOTA0LTYuOTI4IDIxLjE2MS0xLjQ5NmwxNTUuNzk5IDEzNS4yMiAxNTUuNzk5LTEzNS4yMmM2LjI1Ni01LjQzMSAxNS43MzEtNC43NjIgMjEuMTYxIDEuNDk2IDUuNDMgNi4yNTcgNC43NiAxNS43MzEtMS40OTcgMjEuMTZMMzAxLjE2MiAyMjcuOTNsMTAyLjIzMiA4OC43Mjl6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBUd2l0dGVyIH0gZnJvbSAnLi9Ud2l0dGVyJztcbiIsICJleHBvcnQgZnVuY3Rpb24gVHdpdHRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgdmlld0JveD1cIi0wLjAwMSAyOC4wOTcgMzEwIDI1My44MDZcIlxuICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAvLyB3aWR0aD1cIjFlbVwiXG4gICAgICBoZWlnaHQ9XCIwLjhlbVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0zMDIuOTczIDU3LjM4OGExMTcuNTEyIDExNy41MTIgMCAwIDEtMTQuOTkzIDUuNDYzIDY2LjI3NiA2Ni4yNzYgMCAwIDAgMTMuNDk0LTIzLjczIDUgNSAwIDAgMC03LjMxMy01LjgyNCAxMTcuOTk0IDExNy45OTQgMCAwIDEtMzQuODc4IDEzLjc4M2MtMTIuMzgxLTEyLjA5OC0yOS4xOTctMTguOTgzLTQ2LjU4MS0xOC45ODMtMzYuNjk1IDAtNjYuNTQ5IDI5Ljg1My02Ni41NDkgNjYuNTQ3IDAgMi44OS4xODMgNS43NjQuNTQ1IDguNTk4QzEwMS4xNjMgOTkuMjQ0IDU4LjgzIDc2Ljg2MyAyOS43NiA0MS4yMDRhNS4wMDEgNS4wMDEgMCAwIDAtOC4xOTYuNjQyYy01Ljg5NiAxMC4xMTctOS4wMTMgMjEuNjg4LTkuMDEzIDMzLjQ2MSAwIDE2LjAzNSA1LjcyNSAzMS4yNDkgMTUuODM4IDQzLjEzN2E1Ni4zNyA1Ni4zNyAwIDAgMS04LjkwNy0zLjk3NyA1IDUgMCAwIDAtNy40MjcgNC4yNTdjLS4wMDcuMjk1LS4wMDcuNTktLjAwNy44ODkgMCAyMy45MzUgMTIuODgyIDQ1LjQ4NCAzMi41NzcgNTcuMjI5YTU3LjM3MiA1Ny4zNzIgMCAwIDEtNS4wNjMtLjczNSA0Ljk5OCA0Ljk5OCAwIDAgMC01LjY5OSA2LjQzN2M3LjI5IDIyLjc2IDI2LjA1OSAzOS41MDEgNDguNzQ5IDQ0LjYwNS0xOC44MTkgMTEuNzg3LTQwLjM0IDE3Ljk2MS02Mi45MzIgMTcuOTYxYTEyMC40IDEyMC40IDAgMCAxLTE0LjA5NS0uODI2IDUgNSAwIDAgMC0zLjI4NiA5LjE3NGMyOS4wMjMgMTguNjA5IDYyLjU4MiAyOC40NDUgOTcuMDQ3IDI4LjQ0NSA2Ny43NTQgMCAxMTAuMTM5LTMxLjk1IDEzMy43NjQtNTguNzUzIDI5LjQ2LTMzLjQyMSA0Ni4zNTYtNzcuNjU4IDQ2LjM1Ni0xMjEuMzY3IDAtMS44MjYtLjAyOC0zLjY3LS4wODQtNS41MDggMTEuNjIzLTguNzU3IDIxLjYzLTE5LjM1NSAyOS43NzMtMzEuNTM2YTUgNSAwIDAgMC02LjE4Mi03LjM1MXpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQge1xuICBEZWNvcmF0aXZlSWNvbnMsXG4gIGRlY29yYXRpdmVJY29uc0xpbmtzLFxufSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0RlY29yYXRpdmVJY29ucyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnfi9zdHlsZXMvY29udGFjdC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uZGVjb3JhdGl2ZUljb25zTGlua3MoKSwgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdHaXJsIHdpdGggT25lIEVhcnJpbmcgfCBDb250YWN0JyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkNvbnRhY3QgTWU8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNvbnRhaW5lclwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJXHUyMDE5ZCBwcmVmZXIgYSBoYW5kd3JpdHRlbiBsZXR0ZXIgYnV0IHNpbmNlIHRoaXMgaXMgdGhlIGRpZ2l0YWwgYWdlIHlvdVxuICAgICAgICAgIGNhbiBmaW5kIG1lIG9uIEluc3RhZ3JhbXsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9naXJsd2l0aG9uZWVhcnJpbmdibG9nXCI+XG4gICAgICAgICAgICBAZ2lybHdpdGhvbmVlYXJyaW5nYmxvZ1xuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIG9yIHZpYSBlLW1haWx7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Z2lybHdpdGhvbmVlYXJyaW5nLmNvbVwiPlxuICAgICAgICAgICAgZ2lybHdpdGhvbmVlYXJyaW5nQGdtYWlsLmNvbVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPkxldCdzIENvbm5lY3Q8L3A+XG4gICAgICAgIDxEZWNvcmF0aXZlSWNvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBBcmFiaWNTaWduYXR1cmUsXG4gIGFyYWJpY1NpZ25hdHVyZUxpbmtzLFxufSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0FyYWJpY1NpZ25hdHVyZSc7XG5pbXBvcnQgeyBMaXN0LCBsaXN0TGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvQWJvdXQvTGlzdCc7XG5pbXBvcnQgeyBXYXZ5TGluZU1vYmlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1dhdnlMaW5lTW9iaWxlJztcbmltcG9ydCB7IFdhdnlMaW5lTG9uZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL1dhdnlMaW5lTG9uZyc7XG5pbXBvcnQgeyBXYXZ5TGluZVNob3J0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV2F2eUxpbmVTaG9ydCc7XG5pbXBvcnQgeyBMaXZpbmcgfSBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL0ljb25zL0xpdmluZyc7XG5pbXBvcnQgeyBVbmljb3JuIH0gZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9Vbmljb3JuJztcbmltcG9ydCB7IE1vYmlsZSB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvTW9iaWxlJztcbmltcG9ydCB7IFV0ZW5zaWxzIH0gZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9JY29ucy9VdGVuc2lscyc7XG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvSWNvbnMvV29ybGQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL2Fib3V0LmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICAuLi5hcmFiaWNTaWduYXR1cmVMaW5rcygpLFxuICAgIC4uLmxpc3RMaW5rcygpLFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdHaXJsIHdpdGggT25lIEVhcnJpbmcgfCBBYm91dCcgfTtcbn1cblxuY29uc3QgaW50ZXJlc3RzID0gW1xuICB7XG4gICAgY29udGVudDogJ1N1biBDaGFzZXInLFxuICAgIGljb246IDxMaXZpbmcgLz4sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnRmFudGFzeSBMb3ZlcicsXG4gICAgaWNvbjogPFVuaWNvcm4gLz4sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnOTBzIGdyb292ZXInLFxuICAgIGljb246IDxNb2JpbGUgLz4sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnR291cm1ldCBUYXN0ZXInLFxuICAgIGljb246IDxVdGVuc2lscyAvPixcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6ICdBbHdheXMgb24gdGhlIG1vdmVyJyxcbiAgICBpY29uOiA8V29ybGQgLz4sXG4gIH0sXG5dO1xuXG5jb25zdCBmYWN0cyA9IFtcbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICAnIEkgc3BlbnQgbXVjaCBvZiB0aGUgZWFybHkgMjAwMHMgcmVhZGluZyBIYXJyeSBQb3R0ZXIgZmFuZmljdGlvbiBvbmxpbmUuJyxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICAnU3BvdGlmeSBoYXMgZGVzY3JpYmVkIG1lIGFzIG9uZSBvZiB0aGUgb25seSBwZW9wbGUgdGhhdCBnbyBmcm9tIFRyYXAgcXVlZW4gdG8gTmV3IEFtZXJpY2FuYSAoYW5kIHRoYXRcdTIwMTlzIGhvdyBJIHJvbGwpLicsXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnSWYgSSBjb3VsZCBiZSBhbnkgYW5pbWFsLCBJXHUyMDE5ZCBiZSBhIGRvbHBoaW4uJyxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6ICdJIGFtIGFuIEFxdWFyaXVzLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5BYm91dCBNZTwvaDE+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImF1dGhvci1pbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1pbWFnZVwiIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHaXJsd2l0aG9uZWVhcnJpbmcgc3RhcnRlZCBvdXQgYXMgYW4gSW5zdGFncmFtIHBhZ2Ugd2hlcmUgSSB3b3VsZFxuICAgICAgICAgICAgc2hhcmUgbXkgbXVzaW5ncyBhbmQgZmVlbGluZ3Mgd2l0aCBteSBmcmllbmRzLCBzb3J0IG9mIGxpa2UgYW5cbiAgICAgICAgICAgIG9ubGluZSBkaWFyeS4gSSB3YXMgdHJ5aW5nIHRvIGZpbmQgdGhhdCBzcGVjaWFsIG1peCBvZiBnbG9iYWxpemVkXG4gICAgICAgICAgICBjaXRpemVuL3RoaXJkIGN1bHR1cmUga2lkIHRvIGNvbW1pc2VyYXRlIHdpdGggZWxlIGJpZmFrYXJvIHcgeWVrdGVib1xuICAgICAgICAgICAgaW4gdmllbGVuIFNwcmFjaGVuLiBUaGlzIHBhZ2UgaXMgYXR0ZW1wdCB0byB0YWtlIHRoYXQgaW5pdGlhdGl2ZSBhbmRcbiAgICAgICAgICAgIG11bHRpcGx5IGl0IGluIHRoZSBob3BlcyBvZiBmaW5kaW5nIG90aGVyIGdpcmx3aXRob25lZWFycmluZ3MuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLWludGVyZXN0c1wiPlxuICAgICAgICAgICAgPGgyPlJlYWQgbWUgaWYgeW91IGFyZSBhIDwvaDI+XG4gICAgICAgICAgICA8TGlzdCB0eXBlPVwiZmxleFwiIGl0ZW1zPXtpbnRlcmVzdHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPFdhdnlMaW5lTW9iaWxlIGNsYXNzTmFtZT1cIndhdnktbGluZS1tb2JpbGVcIiAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhdXRob3ItZmFjdHNcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMj5Tb21lIGxlc3NlciBrbm93biBmYWN0cyBhYm91dCB0aGUgYXV0aG9yOjwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWNvcmF0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8V2F2eUxpbmVTaG9ydCAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8TGlzdCBpdGVtcz17ZmFjdHN9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPFdhdnlMaW5lTG9uZyBjbGFzc05hbWU9XCJ3YXZ5LWxpbmUtbG9uZ1wiIC8+XG4gICAgICAgIDxXYXZ5TGluZU1vYmlsZSBjbGFzc05hbWU9XCJ3YXZ5LWxpbmUtbW9iaWxlXCIgLz5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgyPlBheWluZyBpdCBiYWNrd2FyZHMgYW5kIGZvcndhcmRzOjwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGVyZSBhcmUgdmVyeSBmZXcgcGxhY2VzIEkgd2lsbCBnZXQgdGhlIGNoYW5jZSB0byB0aGFuayB5b3UsIHNvIElcbiAgICAgICAgICAgIHdpbGwgc3RhcnQgYnkgZG9pbmcgc28gaGVyZS4gVGhhbmsgeW91IGZvciByZWFkaW5nIHRoaXMsIHRoYW5rIHlvdVxuICAgICAgICAgICAgZm9yIHBhcnRpY2lwYXRpbmcsIHRoYW5rIHlvdSBmb3IgYmVpbmcgeW91LiBQbGVhc2Uga25vdyB0aGF0IEkgYW1cbiAgICAgICAgICAgIGFsd2F5cyBncmF0ZWZ1bCBmb3IgeW91ciBpbnB1dC57JyAnfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8cD5Zb3VyIGh1bWJsZSBzZXJ2YW50LDwvcD5cbiAgICAgICAgPEFyYWJpY1NpZ25hdHVyZSAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhdXRob3Itc2lnbmF0dXJlXCI+R2lybCBXaXRoIE9uZSBFYXJyaW5nPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIiwgImV4cG9ydCB7IExpc3QsIGxpbmtzIGFzIGxpc3RMaW5rcyB9IGZyb20gJy4vTGlzdCc7XG4iLCAiaW1wb3J0IHsgSXRlbSwgaXRlbUxpbmtzIH0gZnJvbSAnLi9JdGVtJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpc3QuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLml0ZW1MaW5rcygpLCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaXN0KHsgdHlwZSwgaXRlbXMgfSkge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3R5cGUgPT09ICdmbGV4JyA/ICdhdXRob3ItbGlzdCBmbGV4JyA6ICdhdXRob3ItbGlzdCd9PlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPEl0ZW0ga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgSXRlbSwgbGlua3MgYXMgaXRlbUxpbmtzIH0gZnJvbSAnLi9JdGVtJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSXRlbS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7IGl0ZW0gfSkge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2l0ZW0/Lmljb24gPyAnYXV0aG9yLWxpc3QtaXRlbSBpY29uJyA6ICdhdXRob3ItbGlzdC1pdGVtJ30+XG4gICAgICB7aXRlbT8uaWNvbiAmJiBpdGVtWydpY29uJ119XG4gICAgICB7aXRlbS5jb250ZW50fVxuICAgIDwvbGk+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgV2F2eUxpbmVMb25nIH0gZnJvbSAnLi9XYXZ5TGluZUxvbmcnO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBXYXZ5TGluZUxvbmcocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICBoZWlnaHQ9ezQwfVxuICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGltYWdlXG4gICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFDUHdBQUFCNENBTUFBQUJibDQ3ZUFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOIEFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFXbEJNVkVVQUFBQzNqNGUya29xNGtZaTMgazRtMmtvbTNrb2kya29tNGtZaTNrWW0vajQrNmo0cTNrb2kza1lpM2tvaTJrb20za29pMmtZbTJrWW0ya29tM2tZaTNrWW0za29lMyBrNGUya1lpM2tZbTJrb20yazRtM2tvbi8vLytyNWN4dEFBQUFISFJTVGxNQUlEOXZmNisvajA5ZkVEQ2YzOURBOE0vdjRMQ0FZRUNRIG9IQlF6aEdGVUFBQUFBRmlTMGRFSGVzRGNaRUFBQUFIZEVsTlJRZm1Bd2tNSUFDcS83cWpBQUFNQkVsRVFWUjQydTNkYVh1aVNCUkEgNGNJRkJSZmNFQmYrLysrY0tqU2RwQ2NScUxvWHFwUHpmdXA1cHJ1alI2RXUySUl4QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFLS1JUS2F6Mld5ZU9ndjdxK1ZrNUFjMFdkcEhzV2dlejl6K2FqcEpDUFE1MENTMiBRQm1CK2dYS0l3dTBpaWZRT3JKQWFUeUIxcEVGbWhIb1c2dklBdVYvQmNxaUNUVFN6NS9NMGszOXNDMmMzZk8vMG5VMnhucVJaSXYwICtRaDJ6ZVBaUHY5cms4NUdXVkFuc3ptQkNCUVdhQjlWb09VaVBYd01WSXdkYVBwWG9PTjdvREhXaTVlQnhsZ3ZZZ3VVdndlcW93aTAgZWc5MC9CUm92NTVHRmVpUXpwWUUrbCtnTVlvMHE4VDJWSjZyenp2aHFpb3ZiaGU5bVdkRHZsSjU1cGJSWFhFcHErclQvMGlxYzNsMSBhMWk2R1BTVmVoV29qRExRZnVCQXM1WkFoNkVEcmI4T2xNY1dhRFZtb0RxZVFFa1Q2SGdxYjNFRU1uOEMzYjhOVkhuKzFYNkJwcTJCIHBvTUdXcllIV2tZUzZGYTZSZDRHR3ZRWTQwT2dUeTlNWHQzTGF6RnFvTStiOXA5QTZkQ0IzQ0JXWFA4T05HQ1NtWDJKaXZMKy9ZOWYgM2E2MnpIeW9GMm81dDYvUTlmYjlyamUvbC9hdHMxa005RUoxQ0hSdUFtVkRCVnEzQmFxR0RUUjFnUzRkQWczMEZtOENuVG9FR21oNSBUNmI3MkFJZC9yRkF5ZkNCZHE4Q21jb05ITU1HMnJZRTJnNGY2TVg0TjA2ZzczZDVjUVk2REJVbzd4RG9ZZ09sUXdXcW1rRGxvQWNRIGY4bHNrdE81L2ZtdUxzZjZzTlpmVFpPRjNTMWYydDhRK2Zsa0orY0J4bzNNVHN0RlpJRjJNUVZheGhab1pnTmRJd3UwN1Jpb0hpQlEgM2lmUVpvQkFsUXQwaXkxUWg3M3lzSUhhbjNneWFLQjcrMis4RHhWbzNqRlE2UUxwanh1NVBWN3VGdWpxQXVtUEc1MEQzVndnL1lHayBjeUJGMmFZK2Rrank0RjRvNVMwcnNZZnNuWlBrOW9YUzNySjZCYW9JOU5ycXFyN3I2UmZvYkFOTlZSOVAzMEM3eUFKdDY4MU1kOS9jIEw5QmxWODkxOTgwOUF4WDFRVHZRdmo2V2ZRS2wyb0VPOVNtbVFQYzBya0M1UFQ0dFlncGtoK2ZkSmFaQWRuanVjcnlzNmI3cC9obzEga3RMdW0vVWVjNzd1OFJvOW5rRlJieFRIUnhmbzNPY1BOSUgweHA5ODBUZFFWYWlPUDlXbTN2WUtsT3NIdWtZVmFCOVpvSmxkMlNNTCBkSXdyMENHeVFLbEhvSGxrZ1E1eEJUcldhVlNCVHZWQjhSQ3NmeUI3MEp3cUhvSzVRQ04vMzIxbG0vUWU4UEtMSFZQMW1seDZUMWJWIFVXMU1kWUY2VDFaNXFUZkh1emROLzBCYkFyMWs5ODE3eFVDOWRqdU9XN3kwQWszNzdwY2R4VUNKYjZCRlpJRTJ2eVZRRmx1Z3VXY2cgcllQNGJGT2ZlZ2RhNlIzRUordDYxenVRVVF6a3ppaU1mTGtSZTR6Yy8wM2pKRmVkTjNMbDg2Wnh6a2VWTGQyZFJQZ3hnVFRleUVHQiBOTGIwYXUrNVZXa0ZtdFc3bTg4Zi9FMkJTcTgvZUswUEdvRldOcERYSWVuOVdNODExb3FRUUJvblcrdzBYM2p0Mit3eHFzclpxTmxoIFYvcUVkd2Z4Y1FYYTZweU44ZzVVNnB5TlNud0RDY3A4enJJOGFieVI4N25IYWFpM1A2dnhScjZIQk5vcUJGb0hCQ28xQW0wSTlKSU4gMVA4MDFKUEdydEFGOHA0WU5IYUZWVUNnbFVhZ1JVaWduVXFnazNlZ1FpWFFMaVNRK0VjRzNzZUQ1aEZJK3JNWE44MTdIUTg2TjQxQSBlLzlBaVZJZ3IrTkJRVzc4Q25sZTRsdjYvZUIzaFBNa3ZxWGJXV3diV2FBNnVrQWhBL3hOSTFEQXNYZENvTmQrUlNEdmFkNDBnZmFpIGE0V2J4Y0lDMWJLTGFSVnd1R01scDhnQ25YOURvSkFUcEhlRlFONkhPMUttaDlEeFMzWlhhUGVEb1o4Q3l1NEs3d1I2TGNKQVFjT3Ega1E4VU5LeTZwM1NLTE5DZFFDMVBTWFN0c0F0RmVDREJ4ZFN1cEFSNitiY0Z6bUttK1V4Rk5sRElMR2FhejFUaUNoVE1uZllKMzJrSSByaFhoSzZrUlhVd0ZSZzFEb0ZhaWdVTDNnMFk2VU9oQ1lVU25EWkZBZ3RQR2p3MGt0VllJakJwR2ROb0lIelhNanc4VU9Hb1kwV2xEIFp0UVFITWRFQWdVS1ArM3pJTFZXeUt5a1JtNHhGUmsxRElGYUNRWVMyQThheVVBQ0M0V1JtemJFQWtsTkd6ODRrTXhhSVRKcUdMbHAgUTJiVU1EODZrTXhaRGFscFEyclVrQnJIZnM1cG53ZVJ0VUpxRmpOQ2k2bllxR0dFQWttTkd1Ym5CcExaRHhxaHhWUnNKVFZDMHdhQiAydjRTMFVEaGEwVytsZ3drc0poS2pScEdLcERVTEdia0FrbWQxUkNaTmlSSERaRng3Q2VkOW5rSVgwd2xaekVqc1pobXNRVVNIRFdNIFJDREJXY3hJQkpLY3hZekVZaXE0a2hxSmFVTnkxREFFYW45NndZdXBlS0RBeFZSeTFEQVNnUVJuTVNNVVNQS3NSdmkwSVR0cXVIRXMgN09uRmNOcG5KVHRxbU9DdjU4bk9ZaWI0NjNuQ3M1Z2hVS3ZBNzZTSUJ3cmNGZHBBa2d1RmVhd1ZBVHV5cWVoS2FoNkJBblpraWV5byBZWUlEWlFSNlRTTlF5SVhRaElkVjB3UUt1VkpjNFBjb3YzaUdsN0JBQVJmOStGb1ZkaW05a0t1aUNBbTZDTUYza29BdFBlUWlCTjg2ICsyL3BXb0c4MzhqZUY2VjdKV1JMMTdoS1E4aXVjQlZkSU9sWnpEUVhyUE1QSkQ2c211YUtmdEVGOHYxRzd5cndvaDlmcWdLdUNUa04gdStqSGw5eGk2aHNvOUtvb1g0b3drUGRGTStVUGQ4empVbnIrZ1lTSFZSTjJLYjBrOEpvV0VqS2w4Y3U5a1gzMnIwbklOZGRlY0Z1NiAxK3VVS1YyRXdQZWFrSXFCL043SXZ5bVExMGM3V2NCRjZWNnBQTzlGNUs1c3J4TEk5NUtIOTRDTDByM2lyZ25wc3dEbFhwZis3L0QzIGxwNDNBUXE1YXQvTHY5YzNrTzlWM052NDN1T21Vcm8zd3NyekprQnFWKzF6MTRUMENxUnhQR2dlVjRyekM2Und1Tk8zeVVidHF0SmUgZDVKcHJteXZkQ3JNNjA0eTdrMmpOWi9HRm1qbEZTalZHK0I5N2lUajdoK29HYWozMVBEYkF2VWVvQ3VmbXdsMjVITzMwOXpyWm9MZCBKTDZCdEc3VGZQTU1wSFZST3E5QVhqY1Q3T2pzYzc5Y3pVQ24yQUw1SEtONjNTdFBWcWJZeER6dUpMUG84eFNUaFc2VHV6MVU3dlhHIFdmcmNQN0E3RjZqWGxwWDB2ak53UDlXeDNrY1Y2Tkl6VVA5YkovZGpBL1hiOWZTK2RYSS9ObEMvZmJONm9HMWtnVXFQUUNwbldkNmUgYjkvVjNRYlNPY3Z5Zkw1OTU4TW9BeW1lUlBBS3BIbUx6aVpRbjlHcW11c0g2blArTUo5dUZENHo3U1d4RDBGenQ5UDhqS3ZkOVN3NyAvdWJsdWxZZkIrMll1cGwyL0JrRWFudnd2elhRckU4ZzVaTzdMdEM4VnlEbEQ5cGRvSzZIUE1sMGJ3UHAvcVBINUxxcjUxMVgwMnB0IFYzYnRRSFkrWEhUYzkrY3VrTlo1dXJkQUZ4ZW80ODl3Z2JUdlFIa3U3RUZ6MTBEWlh1OVUrTnZQc0t0NzJqWFFhcUVmcU9vVktQMTkgZ1ZvZXJ0Mm82a0o1NFhMY2xuVll0ejlYdDFIdExnT2NDYk5iVnIxdlg5N2RSbFZ2aHdoVXVrRHRxOWZLQlJyaVZPSDlYdzIwR0NoUSBkZW9ZS0IwbVVGNGVPd2JhUkJab1RpQUMvU3VCdWh5RHVVRDFkWUNUR2k1UWgyT3dKdER4clArVnFpWlFoMk93cEFrMDR1aVRaQXUzIGJ0Mkcrc3p0YmcrOUR2UFo1TnZmTUpuTjNicWwrQUhjNStkLzI5cE5hNTE5Ky94SENaUVNLQ0RRMUFhcUl3cTBkSUdPdnpaUTdnSnQgMmdPVlF3V3FiS0M2UGRCcHNFRG5SNkJ2MThuOEVXaUl3OEhHNmhubzIzVnk5UWcwd0tUeERGUzBCa3Bkb0tFK1BsbGQyZ050WEtDQiB2cnlkbjkzOHM1NUdGT2pvQWkxakNmUjNqc2x5dGtqdEE5aWRCdHZyUEp3dmRsdXYwL2xzT3ZuNFdpU1Q2V3h1WDZGNmV4bHFvM3IrIDROdkp2cFUzNldLMi9QUnUvaE9vS0lmOVRQTGVGdWc2N0h2bUxkQTZya0Q3Tks1QWgzOG4wREd5UUhVMGdiTElBazNHRGpTTExWQVcgUzZBaXRrREhmeVhRT2owTUgraXBmck1ycnJkUi9xMVJmaStMYmYxLzI2SzhqeklMcm03WFl2Zi94eE5Kb01PSFFKZVJBcDAvQmpxOCBCenFORktnaUVJR0N4Qllvc1lHT1h6eWdNUU1WWHp5ZW93MDB5cGR6WGdRYTU3TVRBclVHT3IwSHFqOEdPby8xOWE2eVVZMzdUNnlOIDJ6K2Z5M2ZuYXV6N2VwaFY5ZUh4bE5YWVYxMzZFK2p5RERUeTl3SGZBMTBJUkNEUFFMZklBdDBKUkNDeFFMZllBdDJqQ1ZUR0VnZ0EgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQm84eDlQMTMraWVidVJUd0FBQUNWMFJWaDAgWkdGMFpUcGpjbVZoZEdVQU1qQXlNaTB3TXkwd09WUXhNam96TWpvd01Dc3dNRG93TUR5bHhRUUFBQUFsZEVWWWRHUmhkR1U2Ylc5ayBhV1o1QURJd01qSXRNRE10TURsVU1USTZNekk2TURBck1EQTZNREJOK0gyNEFBQUFBRWxGVGtTdVFtQ0NcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBXYXZ5TGluZVNob3J0IH0gZnJvbSAnLi9XYXZ5TGluZVNob3J0JztcbiIsICJleHBvcnQgZnVuY3Rpb24gV2F2eUxpbmVTaG9ydChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgIGhlaWdodD17MjR9XG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8aW1hZ2VcbiAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJYNEFBQUI0Q0FNQUFBQnk4eHJsQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQVdsQk1WRVVBQUFDM2o0ZTJrb3E0a1lpMyBrNG0ya29tM2tvaTJrb200a1lpM2tZbTZqNHEvajQrM2tvaTNrWWkza29pMmtvbTNrb2kya1ltMmtZbTJrb20za1lpM2tZbTNrb2UzIGs0ZTJrWWkza1ltMmtvbTJrNG0za29uLy8vK1dQS2RtQUFBQUhIUlNUbE1BSUQ5dmY2Ky9qMDlmTUJDZjM5REE4Ty9QNExDQVlFQ1Egb0hCUWREV0RuUUFBQUFGaVMwZEVIZXNEY1pFQUFBQUhkRWxOUlFmbUF3a01JQUNxLzdxakFBQUllRWxFUVZSNDJ1M2Q3WmFhT2hoQSBZVkJRRVJXL0VCWHUvenBQZ3JianRCVko4aWJHT2Z2NTFiUE9hZ2Mya01SV0lFa0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFpbDA2bVdaYmxNMjJ1ZnJXWXZIbURKZ3UxRmZOK2UzTDFxK2trSmREM1FKUFlBaFdSQjFyRyBGcWlNSnRBc25rQ3JmbnRXMFFUSzFOWjQvU0haYk4zZGJDcHRlLyt2MmFwNHh5V2RGdlBaZlF1Mi9mWnM3disxbm1WdnVhUW5XVTZnIGp3cTBtTTkyVVFXYTV2dHZnUTVmZ2Q0eDV2MFZxSG9JOUk0eEw3WkE1VmVnVG0yTnJ4K3o3Qy9remJFK05kK3ZrNmFwei9vcVd1ZEYgeU1OUkZ2cEMzbGJudW1tKy9ZKzBPZFVYZlJYTjVrRVB4MUNnV2dmYWhRNjBlaEZvSHpoUTlpVFE4cDJCdXI4RGxXOE5kRGpXMXpnQyBKYjhEdFU4RE5aWi90SlYwK2pMUU5HaWd4Wk5BMHZ1ZHFSOVQxZTN6ZlZ0ZUwyb2F5aGVoOWp0WGgrRnlmWDUxbEcydDV1bjFQTkNTIEtwMitESFRxQXhXaEFxMWVCV3B1Z1FJTk1PbDByOC9URVlFQ1hUK0wxVTVkeUo4VUtJMHNVUEtHUUpzWGdUYUJBMjJQVis4VFVLSDIgKzNoNnZWUEw4NkhicmZ3UGVPbGNuUmpuMTBlOVBCM1ZCQjFnd0N2VXBGekZGQ2hUSjBaTWdSWXEwQ2EyUUplUmdkWUJBalU2MEhWYyBvQzVBb0xJUDlIcGtDUnpvOVk2blFRTzEvbmU4V0hlSEVmdDkwMTY4NzN5cTFuV2o5N3U4SHJ5ZkhVYUJtdGdDblZTZ3FkZnRNUXUwIDFJSDhMcWdNQTIyNmRlWjFlMHdEYmJ2Yzc1TExNRkRWN1RLL0swNjFBRHpVb3dPZHQ5M01iNkJTTFh5UEFjYmVwRjEzbGRIUFNldHQgdC9KM01NcVZXdGNaRFY5dDVYVUExb0ZPUm51Z0Eva2JnTXU1bXBXTi92akdiNkJtclJhK1JudmdPVkFXV3lBMXRzUVZhTmZGRldobSBFU2lQS1pDbHBkcHg0M21rUEt2WjBOTUdxUjAvRzQvdHpjSGJiS2dER2MrQ1plMXZ1YURQRFBOQW05Z0NiVHVmZ1l3dkhUVys3RDBGIFNrM0hGazBIbW5zS05MVU10UDYvQkNvQ0RiNXFJV1crNDFwNjhYTXcxRUxxYUxYajZoTzJqNE9oVjVvL0pwQ1BqeXg2cFhtMStZMDYga0k4UGQycWxXY1VXcUxiNWpTclF6bGNncTcvNmFROWQ3bU84c3cxVXFrQStWdVJxUFZFRiticEhhN1BTdkZNTFR2SFZmNWxiTE1WLyAvZDZ6aDRQUnJoMENiVHdFV2prRXF2OG5nV3pITEIxSS9PL0kxWFJwL2xubGJxaytzb2dIbXRzSFN1cXRsMEJINjBDVmwwQjJDeTVUIGFzMXZOdzNlaVI4TU5SdFlUWU4zNGdkRHpRYWI2QUk1ckQ5U0g0RmMxZ2xYQWczekVjaDZ1a3o2UUh2UmZ6VFZzNEZMb05PMmsvMWIgME1aaFBXRmt1clA3MVBoRjlteFZwNnJkcDhZdnNtZHJTNkJoanRPbGtoNkZBemxObDNxWElndFV4aGRJY3J4VGc1MTdJTUVKUWMwRyByb0hHMFV0ZjkrTXFlRG03RDNhSjZIZ25NTmdsUHoyUXdLa3FPTjY1RDNhSjZIajNZd05KalhjeWc1M2doT0ErRzR6a3Z2UzlrYnFjIFpRYTdSRzY4RXhuc2toOGRTT1pVbFJydlpBYTdSRzY4KzhHQlpNWTd3VUFpRThLSExYMXZSQzVucWRrZ0VScnZ4QWE3UkNpUTFHeVEgeUFVU08xVkZ4anVwYXprUkd1OStlQ0QzOFU0MmtNQ0U4SEZMM3h2M3kxbHlOa2dreHJzaXNrQ1NzMEVpRVVqd1drNGt4anZKYXptUiBHTzkrZkNEWDhVNDhrT09FRUd6cHU1UWQ3SkwrY25ZNUdMS3pRWEliN3h4U0NzOEdTWlNCWE01VzE2L00vTTN4Y3A2S1hzdko3WEoyICtBZDVGVWo0V203ZDdsSXBZZ3NrT3hza2ZTQ1g3LzJMQjNwQ2Z3dGMvR3R0cWNQQmFQYVc5eEVNT2RrZkRPdjdDSWFvUU5ZM1lTeHQgN3lNWTRuSzIrZ2hVT3R5bElyK2VTUHA3RE93RFNVK1hTWnlCck85U1VZSEVCN3Z5Ykg4YmoveDY0b25DMDlmYW1vUGRQZXFwdzlmayBoMWpmaEZFNGZFMStpTzFkS2pFR3N2NmEvQkI5MzdobG9LMnZRRlovQTlIYTNwZjRRbU41RTRaK2hvcVArd2o2Ryt1dGRzUmpJSnRCIFZOOW9JVDVkUHRseFg3ZlRXZDJDM2QrUTZlbEx6bGIzcU9zYk1uM2RiMmdYYU9jdDBMS3lXQzQwTTdmN0NJYllQTWxKUHh2Rlp5RGogR2FxeGVZYktTRGJQNFNtdG5xRXlUbW9ieU5lVHhLNldnYndzdVA1VWVOeng1SFlMdHRHenovVkRmWDArMlVKOVBESjcwdTNDNXRFZiA0K2xBUm1kSDZ2bTVTNDNwb3pxTkgweGxSaTA0elM0ZjN3K21paTVRSFZ1Z2pYa2duN2YwR2o4cFRnZnlzaFQvZzM1Wmc4OHpvLzhaICtrR3VZOStHb1YvVzRQdXhRdjJUYmtmK0RBSzkydmhBZ1VhL1Q2VVA1UG5aS0RwUVpoSm94QVBWM1FKdHg3OVBSYitzNGVnNzBHYjggQzJmS3FYNm9yK2RBNSszNHQyRXNWYUFBVDljcCs5ZWNCSGlRaE43NTNlcjFEalg2TFI1bUQvVzFjNnE2YnY5NmdDbjE2ejdNbmxsciBHYWpXZ1Y0UE1QckVNSHhtcloxMmJLQlptRUJsZlJnWGFCNG9VSE1jR1NpUExkQ2FRTzhQbEJiei9iaTNlTWhvMWZ5OHl3ZGVJanZKIDhrQnY4Ymp0LzNXalRvK0J0K3krSmREc2t3SXRkS0R4TDJ2d0gyaXFBbzEvV1lOSW9QWHJRS05mMXVDcVVZRzYxNEdDdkt4QksrK0IgbnY2NzF6MVFpUFZXYjNrUDlIUVJ2THdGR3ZGeUxQc29rMFUyMTYrTjN4NkRuUmczcDNQL0d1SThtMDRlajBnNm1XWjUveXJjUzVBbiB1bjM5NE90UnY2ZDVOczhXMzQ3STcwQlZIZllGMXUwdDBHd2dVTkRYdWQ0QzdXYXJ1QUx0UHlaUUYwMmc0aGJvRUV1Z3lic0RaZUVEIGRiOXNxNkZYNFhxa1gwTzg2ZjYyR1h4WHNFZkw2MFcvcC9wUDd3dlVQQWJhUFFRNnZ5blE2VEhRN2l2UWtVQlJCa3BpQzVTcVFJZC8gYk5BN0ExWC8ySjZEQ3VSMVBWcjNtdmZzOUlPeU9kVmZUczFiem9wSHkrWmhlK29teURQdHh3UTYzd09GL1pReUVPaE1vR2VCcnBFRiBhZ24wVVlFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNBRC9NZjV3N282NHRjS0tFQUFBQWwgZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TWpJdE1ETXRNRGxVTVRJNk16STZNREFyTURBNk1EQThwY1VFQUFBQUpYUkZXSFJrWVhSbCBPbTF2WkdsbWVRQXlNREl5TFRBekxUQTVWREV5T2pNeU9qQXdLekF3T2pBd1RmaDl1QUFBQUFCSlJVNUVya0pnZ2c9PVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IFVuaWNvcm4sIGxpbmtzIGFzIHVuaWNvcm5MaW5rcyB9IGZyb20gJy4vVW5pY29ybic7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VuaWNvcm4uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVuaWNvcm4ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIHdpZHRoPVwiMS40ZW1cIlxuICAgICAgaGVpZ2h0PVwiMS40ZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyMDAgMjAwXCJcbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxpbWFnZVxuICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FNQUFBQ2FobDZzQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQVdsQk1WRVVBQUFDMmtZbTNrb2kvajQrMyBrb2UzazRtNGtZaTNrWWkza1ltMmtZbTNrNGUza29pM2tvaTZqNHEzajRlMmtvbTJrb20za1ltMmtvbTJrb3Eza29pNGtZaTNrWWkyIGtvbTJrb20za1ltMmtZaTJrNG0za29uLy8vK1VkUmlrQUFBQUhIUlNUbE1BNzU4UVlIOXYzMS9QUVBDL01DQndqNkN2UDlCUHNNRGcgZ0pCUWtXUDFod0FBQUFGaVMwZEVIZXNEY1pFQUFBQUhkRWxOUlFmbUF3a01JQUNxLzdxakFBQUhMa2xFUVZSNDJ1MmM1NXFySUJDRyBZOVFVYTlwYUV1Ly9PamV4SUlJSXlLZ2t6N3kvem9tTmoyRUtvTHZiSVFpQ0lBaUNJQWlDSUFpQ0lBaUNJQWlDSUloVk9IdDM2eWJBIDRGV08veHRTdktweURsczNBa3BKZFR4dDNRb29KZFU1MkxvWkFBVGhSMHIwQTFMaVdrbTFUL2hENlhmSmE1VlVmQ3lPcTh0WEJiVk8gQ1IrTHd5K0xCSjBTTGhaZlAwSHRtMUlOVWNKWXdHdmszUTd4MWkzVVZ6S0l4Uzc1OVJqNXZuKy9uM3cvaXQ3L1BDWHpuN1dha2lycSArLzlSaVRoZUxMVVNyYVNQeFdrMVFmUzNkYVBsU3BxNEd4L08xU1JIS3hOTk1oaEhqbitLS2psV1RnVGNoMExMV1J3YmpUSkxTV1hqIFBHQ2VrdjNXelFaUWtxVkJrQVJmUDdyeXJWc0xwc1RxNGxoTGlYT3dXSXBiNkxtNm5mbjlnNk1adFp6OXlVcTd1Sm82YXM2WFArdkUgQkhPRTFHTDJKNnNxNG5TdWtKcm9ZczA0SzQyRVZOWGpSNFJZbzhOUXlOTWFIU1pDSHFsTmMza1RaNzlzM1hpYTJlSDNnMDJMeUxNUyBJaVhGbXZDN216VzdvbkdlVzB0b01FMGsxa1RnNUVkMDdIYlpqK2pZeFNZNmNudDBOTnNKTTdIRXoxdVNjTFlReDZwS2ZqUzdLNHF6IFRFbk90MUExQkRpdnJSdFA0L0w5N3lrUHI5dVV2OGNuL3haRnpYYlJmWVVhazYrNE5Fb1gwU3N1eWVIR3JteWNJLzl2SUNjK1JNZjYgZ0Era2tvdGNXcVdMczcrek4veTdpSGRib25idEl2R1AxSzgraUpBWEorU3BJZVNqSmZJUDk4L2d1ZC92L3VVc1BmOTgrZHN6UDhFcyBqM05DWHRLMmdGTkNDR0dpVkdGYTM4OEN3aytZS0pVRDFQZjZYQUdFTUVYd3UvYlFkQklRSUNxM29RRkt6a2FyQUpGZGh4T3MyTEFxIG5nbUV1dy9hSFg1KzJVQUl5SzRZdlZHU2ZYN0laN2RuTmtjSUlmVFlxcGQ1RE9ZcFNoUWpGVGFFRUtweUxEaGxpMURtbk5FaGhGQU4gYjliZEZzL3Q1M2Z2TWIwRklvU01wWFlDYTdRSXFVVEtkUmVNa0RZSHB1My9sbysvdFc4UDhoV1FrRjJTbG1tZlhSY1gwbVJ5MmxHZyBoQXhaWGtqdGpGUjFGSDYxRUNyT0wvU2F5RnBDZW45ZlJzZ0tNNUxXSDBrR2c2amplWllQdjUxdmsxa2R5QnlSdzJ3TFhvVkgreVNTIEZaY1JZclpNcjBMRzJuNlIxVDdUalJNRk9nTVFiMXhrVHpKYVhnZ3hRRGVGV0VDSXV6ZHFvaHBrQmJ4TDd2QkNUa2VqRmlwQ0h0Y3QgZElCdUc4VjMvNmI3TnRvOEN2TE1MbXlCYWJoRTYwaG82UE40RjdaZ1pDVFJpaUtHUXJvSUNXT09OWTFSUTZVL1NDRnIyMk1nSkljVCBza0psTlNIa0NpZGs2Y1dmRWFpaVBZVVRJdCtiVVd2Y3RTekxRTTI4MUhKY2V3SEFIakhBNUNPOHZzZ0doOW9xSmRYdTVnZUF6RzdxIEl1RnowSnRxUW03c0Jac0xlWGpNN1poMU45RUwrQjV6Z2FmWDZERk1saFV6dmlPWlNWa3BDaVdrNWMwaUdzREVpbGdrS3pPdFRiZncgbWt6ZHJpRVhqald5bFZzYkRXRE9UcDU4cnZzbktNczhWeGpvbVRkZXNES3h3eEYvcU5JcGVUYUN6U0YzNWc4Sk51RWVWOCtWMzY2NyBxVXhKSW5pNE5tUkpaaVJ5c0tZSjM5a2ltSjQ3TUplOFE1b3I4cE4yemZ6YW5tY0tlWExLSDJPbTd5cmI0VXlySjNlT2d2NGhxY0t0IFZZV01SWTVzNU1IVGxHTnRGZXg0SC90TE1vVmJxd29aYzdoQVcwZ3dKa1RrYlY3ZlhlYVQzVWtoZzUxU3BkVW5kMVFJODlWMlIydUggVHp3d0gxdkhTU0dEUWFHVXRvcFJJVHQzTkthN1JJbnh2bTdmZzg3WTRaZTJFS0ZicFNOR0lUYStHcHVrSDlQRjJHRjM5TEZUcENJaCB1NFJmaSswenV2Y3dmRVdvanpMajJiVVF0RXBJTEJUeTdqVldDaldnWE1QMTMwd2lKTmNWc2h1TUlQWmdrbWFEQ2dqdXZVMUhJb1RPIEMycnA5em9saEQwRmJLMlV5dDNqcjRtWDBsWk4zRkpZREJLcmdlMG5VUGxyUEd4UXZsc28zcE9xRWtVSk93ZTNDTlhoNHdPSFVxbzYgYWFCOG9KU2Rzb0FRd1ZZM0pVUjFQa29KQ1dTbmdBbTV5dnFicXBKVXk2RmNmZ2s1QlVxSFBINzBKbE11VVBzdGxvZm9GT2tKMnBCMiA1cklUbEVjV1ZReUl2Q3JXN2h3cG5zUWdmZFdvR3JQbzhrd1VYRlBkenBHVHlMb20xMzRtbFJCRkxrTEtDY0FQTXBxR0ZrSkhkbVFtIDQraGRSRFJjWFcwcksxQ1ByVkJZZlBRRFh2V0cxTWdTVmVaa1BJTitjL1l1YjNPeGhWL2FuYWN3c3FMcEhEeVRwSndhTk1UWFZlTUwgVldsbHNsTWdSNVlNc251aXVqcEwxVHlpOFBEVXZTY0FmZjhxK3JyYlR3dEM2U2tyZmwzYTE3NktENlVXSzBTZVRHeTJ6TnRtNDVDUiBwVmhMMEhNUlFRVHBEYkxpWDQ0SXBOM0xFUFU2UlAxZGF0NFNCTjBwNlV2RElNV0tIdEliUk8yOVhNclRwVVZvdU9MSHZ1NVJPazZHIDNPUUdJWFV2WExtbzFTNmw3cU9YNWtUS0k2MmVBY0c5eWNmSkFIcGxMaFE0UUtkMVJRY1p2RXFuNHVvdWZZR2dYRXc2SjFyckczSjMgK0VhZ1VwMUZSVjZoQmM4NkZnYVE0US9mNEZMNmd4djBPNTJpZ1VYT1dlY3Y5c1RNKzVsS2ZqblljUk8wMDVNWkRCYVgrNmhlNGFMQiAxcG9uTzJjZEQrRzNZR0YwSERTenF5bjhhMC95NlErdEkzeEp6MW1ueU9MM1grWFRueGZaRFNwS1lXQW9tNVB5NTJ1ZEhNS05MS1dZIGxhVGxtOWQwWWU0R3dZcUZZajVIaDQwTVpZVGx0K3JZQmEreXpQS2FaMm5SbjVwREVBUkJFQVJCRUFSQkVBUkJFQVJCRUFUNWZmNEIgbWdhM0tVZC9DRFVBQUFBbGRFVllkR1JoZEdVNlkzSmxZWFJsQURJd01qSXRNRE10TURsVU1USTZNekk2TURBck1EQTZNREE4cGNVRSBBQUFBSlhSRldIUmtZWFJsT20xdlpHbG1lUUF5TURJeUxUQXpMVEE1VkRFeU9qTXlPakF3S3pBd09qQXdUZmg5dUFBQUFBQkpSVTVFIHJrSmdnZz09XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgTW9iaWxlLCBsaW5rcyBhcyBtb2JpbGVMaW5rcyB9IGZyb20gJy4vTW9iaWxlJztcbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9iaWxlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNb2JpbGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIHdpZHRoPVwiMS40ZW1cIlxuICAgICAgaGVpZ2h0PVwiMS40ZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyMDAgMjAwXCJcbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxpbWFnZVxuICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FNQUFBQ2FobDZzQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQVVWQk1WRVVBQUFDMmtvcTNrNG0za29pMyBrb2kza1ltL2o0KzJrWW0zazRlMmtvbTNrb2Uya29tM2tZaTJrb20ya1ltNmo0cTJrb20za1ltM2tvaTNrb2kya29tM2tZbTRrWWkzIGo0ZTJrNG0za29uLy8vOUNZZW9rQUFBQUdYUlNUbE1BUDMrL24xOFE3MENQWUsvZmNNOHd3SUR3ME9DZ2J5QlF2eWdPMlFBQUFBRmkgUzBkRUduVm41RElBQUFBSGRFbE5SUWZtQXdrTUZnTzY2bnBzQUFBQnYwbEVRVlI0MnUzZDNVNnJRQmhBVVFTczFZTVZsT3JoL1YvVSBuOFJrV2hxb1plSkh6ZHFYazVtMkt3U21hVklvQ2ttU0pFbVNKRW1TcE4vcXBpeXJSZFhsN1NZYVVXekt1eUZIMVRiV3NjM0QrT3crIDB2R1FqZkhSdjhEamtkTXhESFdVWTlQa2hReFI1OGxqWnNmUUJFRjJ1U0hEVXd4azhqTzFwOWQwazR1NkVNY1c1S2VMUUVEK0l1U2kgUUVCQVFINERzdmp0T3hBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUSBrRDhKYWNxRlZTdUI1QXNFQkdUVmtPYzI2V1UwY3R6WGpENGQ2VmNDYVVlajdleTZnNy9ncjJVZkFRRUJBUUVCQWZub0xyMmgzTzQ4IFNKT3VhVllDK2VHWHYwdlhnWndONmJ1ay9YbVFObDNUcmdUU2prYm5JYXM4MlVGQVFLWWhCNzgwMXFPUjQ3NW1WSDVwQkptSGpEZkUgL21pN083RmxYdUdHMkoyYXNjcVRIUVFFWkJveXN5RldwMmJZRUVIT2dOZ1FreGtnSUNCWEFObmRKTDEranN4dmlIVzZwdjUrcFppNyBsRS9mTi82aUhtTWdMOWtoYnpHUTdNOVdhR01jUmRFdi8rd0hoVDBWNXVrNXEyTWY1Y2o4UkpoQVI5WmpFblRwL1c3VDVUbFI5a0VYIHJJT2owaTN1Zi94enJDUkpraVJKa2lSSmtxNnRkN3czL2ZUYktsREdBQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURJeUxUQXogTFRBNVZERXlPakl5T2pBekt6QXdPakF3ek1NQVdRQUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF5TWkwd015MHdPVlF4TWpveSBNam93TXlzd01Eb3dNTDJldU9VQUFBQUFTVVZPUks1Q1lJST1cIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBVdGVuc2lscywgbGlua3MgYXMgdXRlbnNpbHNMaW5rcyB9IGZyb20gJy4vVXRlbnNpbHMnO1xuIiwgImltcG9ydCBzdHlsZXMgZnJvbSAnLi9VdGVuc2lscy5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXRlbnNpbHMocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIHdpZHRoPVwiMS40ZW1cIlxuICAgICAgaGVpZ2h0PVwiMS40ZW1cIlxuICAgICAgdmlld0JveD1cIjAgMCAyMDAgMjAwXCJcbiAgICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxpbWFnZVxuICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FNQUFBQ2FobDZzQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4gQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQ3hGQk1WRVVBQUFDM2xJdTVrSWkxbEl5MCBsb2Uya3BLNWk0dTRrWW0vbjRDM2tZbTNrb2k0a29pMmtvbTNrNHEza29xNGpvNjRrWWkza1ltM2tvbTJrb20ya29qL2dJQzJrb20yIGtvaTJrNGkyazRlMmtZaTNrb20ya29tMmtvaTNrSW0ya1lpNmtZcTNrb2k0a29pM2tZaTJrWW0yazRtM2tvbXptWUMya29pMmtvbTIga29tM2tvaTRsSXEya29tM2tvbTNrb20ya29pMmtvaTJrWWkza29tMmtvZTJrb2k0a29lM2tvbTNrWWkza29tMmtvbTJrb203bVlpNCBrWW04bElhM2tZbTJrb2kya29pM2tZaTVrNHUza1lpMmtvbTRrWXEza29tMmtZbTJrWW01a1llNWtJYTNrNGkza29pMmtvbTJrb2kyIGtveTNrWW0za1lpMmtZbTRrWWkza0l2Ly8vKzNrWWkya1lpM2tvaThrSVc3ajRtM2s0aTJrb20za1ltM2tZbTRsWWUxbElhM2tvaTIga1lpNGxJaTNrWWkya29pNWxZMjNrWW0xazRtNms0bTNrWW0za29pM2tZbTNrb2kya29hMmtvbS9sWUMya1ltMmtZaTNrNGUya1lpMyBrNGkya29tL2o0KzNrWW0za29tMmtvaTNrWWUya1ltM2tZbTNrNG0ya3BLMmtvbTNrb20za29tNGtZcTJrb2lxcXFxM2tvaTNrWWpWIGdJQzJrWWkya1lpMWxZcTJrb200a29tM2tZaTNrb20za29pNmo0cTJrWWkza1ltMmtvaTNrNG0za1ltM2tZaTJrb2kya29qR2pvNjMga1lpMmtZbTJrb20zazRxMmtvbTNrWW0ya29tM2tvbTJrWW5FaVltMmtvbS9qSXkza29pM2tZbTRrWWkza1lpM2tZaTNrb20za1lpMyBrWW0ya1ltNGtZaTJrb2kza29pM2tJZTFrNGkya1lpOGo0ZTVrNGEya29tMmtvcTNrWW05am9TNWtJbTRrWWk3a1lpM2tvaTJrNHEzIGtvbTRqNFcza1lpMmtvaTJrWW0ya29tM2s0bTNrWWpNbVptMmtvbTNrb2kza1lxM2tZcTJrNHE1bDR1M2tvbTJrb2kza29tNGtZbTIga29tNWtZdTNqNGUza29pMmtvaTRrWW00a1lpMmtZbS9nSUMza1lpM2tvaTJrWWkza1lpM2tvZTNrWW0ya29pMmtvcTNrb20ya1lpMiBrWW0ya29pM2tvbi8vLytsbUhZOUFBQUE2blJTVGxNQU9UNGZFUTRMYUFqWTFDK3ZWVmtTV3FETjQ4NEMvTlZKUXNISlZJRW5wU1hRIFM4cmFVS1lLbmN0czdETGNic1orWHQzK1J2RkUrcExDaitjUFFSTzN2YUZ5SVR3NFNMaXplek0zWFBmRWhTcjBydFpXTGdHcDZKZ1ggS1hpa29ua2tKcCtzSzR1YUhiVTBHbC9ibGI4Vld3enJrRURJUjhBUWdGTFNVZStHWXdkM2RlVms5UU44aHdiOStSajROc1dxOHpCdCB2TzUvbVpSTjZnbmZucWh4NE8zSHNZSU5IQlM3MFUvTW8rTER2dE4ydWJRMUxZa2lLSk1qbkJ0RmF4N1hWNjBac0hxWGpHcU5CWWlEIFNtWTdGcEcyNlgyckxDRHdhV0Z2dWdTT1orSDdZRU5sUDk3azl0bGpRREFOQUFBQUFXSkxSMFJXQ2czcGlRQUFBQWQwU1UxRkIrWUQgQ1F3Z0FLci91cU1BQUFkQlNVUkJWSGphN1ozM2V4UlZGSVpIa0ZCQ2laUWtRSkFhYW9BSUJCQU1LRVZLbENLS0lCcFFBV2xLUWxFUSBFSkFtUlF3RWthWTBBVEZJTHlKSVZWQVF3ZDdBTHVyM1YzalBtZDJRNWRrcHUvck0zRjNQOTh2NWNqZm43SDF6ZDg3TTNwMGtoaUVTIGlVUWlrVWdrRW9sRUlwRklKQktKUkNKUlhPcVdVbVlzSGZqNjFqSWNFc3FXODN0bUVhcDhCUTZKU0RTL3JsaVJReVZVanE1ZWxhVGIgcWxhcjdqMUhqZVFVanFtb2FRN1VxczBoRFhXaUtYZDczV1FvcFhnUFVnLzFPU2FoZ1RuUXNCR0hkRFNPdkZpVHBqQlZ3WHVRVkRUaiAyQnlWeklFS0xUZzBRTU9JYTJXMERIRDRzU0t0MEpwakp1NHdCOXEwNWRBT1daR1dhdDhCUG9KMHhKMGNPNkdzT2RBWmQxSElCcnBFIHplRUhTRmZjemZFZWRETUhzdENkUWcrZ1owU0Y3a1VKK1hDTXRFUXZqcjNSeHh6b2dMNFVjb0Q3SXFtVGMzOUpFTzlYcEVZeWVyUHAgaC83bUFOQ2VZZ1lpNnI4REJzTGZGYWtIUE1CbUVEcHhMQU04U1BFaG9LNzdNb1ByaDNENHNDS3B3TU5zaG1Bb3gwZGdIdlhERUVuLyBmUlIrZzdRQ0htUFRGcmtjdXdQREtZNUFCUDMzOFpzNGZIaHBkUVNlb0pnQVBNa0RJNEZSRkV1cjZWUnhXNlUxZkYrUnJzQm9pazhCIFkzaGdMTkNVNGpnMW5SeVhSY2JEZjVBSndOTVUxYkg5REErVUNoejlFOVYwOHR6VnlKOEUzMTlhcXZ0aU1wa3B3RlFlZVJaNGp1STAgTlozcDdvcjBnZjhyb3JxdmVVZzhEOHpna1prQms0OWdHM0JTd2l6NHZ5S3ErK0lGTXJPQmxqeVNCMVNqT0VjOVV0dFZqYm5RQUVSMSBYL01FL2lJd2owZm1Bd3ZZd0dYL1hUaEVCeERWZmJHSXpFdkFyR0sweFdTV3VPeS9sYUVEaU9xK21FdG1LTENVUitnY3ZZek15OG9zIGQxSGlGUzFBVlBjMUw5OExsT0dST3NvTUlMUENYZjlkQ1IxQXFQdWlrTndxWmZMSmpGS21CNWxYbFZudFhPSTFMVUJHMEpQeU5XSlYgWlNhU1dhUE1XakxyWFBYZjlRdTBBS0h1aTlua05pakRXM1N2S3pPZXpEd0V6NUYybWc4dFFLaEZtZFBPVW1ZWW1UZVUyVWhta3pLYiBIU3RzMFFPRXVpK1N5SkhKSUxOVm1UZkpVQi9BTm9jQzI2RUhDSFZmM3MvYWdlQXgvcFl5YThnTWdvditPMWNURVA2cHB4dUJkMGJ0IGFJaE9DN3pIdUxONHRXeFVYUThRN3I2OFZkcVR6TnZCcWZHK1NoR2MrMjkzNkFIQzNaY1hndHNYYjcrWFIrQmljU29ON2JJdnNGRVQgRUo0K3NnMis1ZzMwNFhlVW1VQm1ONXo3N3lwTlFMajc4akZlU0tZNWpVMEtkdDA5Tk5UQ05uOTlzaFhJWG05QnVQdnlPL05NTXZ0byBqTTdVdkkyOUg0NzlkNllWQjNaNkM4TGRsMDhmazR1UGJCNmFwc3dCZGdmdDhrZGJndXoxRm9TN0x3NHBsMHZtc0RMbGVPaUljaFhoIDJIK3JhUUppZGwrOGE5QVd0dEpSWmFyd0VHMWpGN0RMdE1tdkIwMUF6TzZMOTR6QXU2Tmp5aHpub2ZlVnF3dW4vbnRDRnhDeisrS2sgc3FmSU5DNytLWjgyNkFNVDBoYWIvRE82Z0JTYVQzcldvQzFzcFE4TStwU2FSRzlSanNHcC8yN1dCY1RzdnRoaDBCYTIwbjRqY0syQyBENVU3QjRmK094SzZnSmpkbHo0eXpHZXpXNDNWWkhmK0JxWjEvLzFJR3hDeis2SUpiMkVyRlJuMHFUU0p0ckUvTmgrMXZ2K2hzUTJJIHB5ZkVRUGZGaGVDUk1jaWdPemRJZEJmSFJmUFJUTXY4TnJxc1NLRDcwaTVRTnB0TlJ2QVRnbHJLZldJK21tdVZ2ZzI2Z0tUZUFEbk4gaG5aSVd4V3ZUWC96MGRaVzZaZTBBV2tlZU5KUGpRVHp1Z3BweHJSK3BydHNYRWt4M1RxcjlPbDJJSjRlSTU4Rm4zVkQ4ZDVVbytLWiBwQlM3TWhicEI3UlprYy9oU21NdDByK3dTNXJoSmNnRWR5QVcvWGM3ZEFHcGtld081TXZ3NmVuYWdJeHd4MkhWZjFkckE1THFFc1NpIC8zNmxEVWloU3hDTC9qdElHNUNPTGtIQ1gvOWVXS0lOeUJsM0dNRFg0YklQMmVkNENaTHJGdVNiY05tbjlRRzU2QllrN0IzWjArMXogdkFUSmRzbXhLbXgyZ1Q0Z3hyZnVRTDRMbXp6RFBzblRpOFpGcmppR3pBbWI3SkMxMTB1UUppM2NnSndJbTN2RUljdmJ1NE8rZDhHUiBzakJzcXRObGdjZTNPZFZ5NUVoT0RKLzVnME9leDUrUGRKL2xCR0wxMGR0UnZWYkV5RmxxUDU4Q3E4UXhtb0VFZG4rc3ROOHk3NVJ1IElNWnBtN2RYVnhkYnBqbTlKSDI0eVQvZGt1VHFOY3VrWlU0Z1B2emFoVkhLWWxPOWt6V0hzVnhIRUdOY3VOc1hCcTYxUzBuVEVzUzQgdG0vZ3pSUFpjOUkyWTZNVGlBL0hDT3RrcmRCNTVEbDgvNDk2cm9qU1R5SFQ2T3owN1FYeEF0STZYa0IrMXZVWWlSVGtsemhaRWNmeiBZYXlBWkRpQ3hNaEw2NUlqU0l5c3lLL3hBckl2WGtET3h3dUk4MjVyaklEMGlwZXVWUlF2SzdJaFhrQ3k0dVdsNWNnUkl5dlN4UmtrIE5sYWtuak5JYkt6SXdYZ0IrUzFlWGxwWHBvZlJ1UmdFQ2F2RUdIeHBDWWlBQ0lpQUNJaUFDSWlBQ0lpQUNJaUFDSWlBQ0lpQUNJaUEgQ0lpQUNJaUFDSWlBQ0lpQUNJaUFDSWlBQ0lpQWFBV1NGektOUmxGVUNMMzNxWmxmSUpkRHB0RXJpZ3JyUXlwRThEOVkvbU9GL0orSCAzNk9wRVBLM2hOSjhBMGtxTVl1aXFDcjhVYUxDOWNHK2daUzRUZnpQNDlGVnVQR0x5SC8xOVkvRE1BNEhackczZExRVmd2K281KytWIGZuSVl4dG5odFJkYzN6WGxYMVFZZHJUZmlrMWJ1L21MSVJLSlJDS1JTQ1FTaVVRaWtVZ2tFb24rNS9vSDhLU0Q0QUNDM2ZRQUFBQWwgZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TWpJdE1ETXRNRGxVTVRJNk16STZNREFyTURBNk1EQThwY1VFQUFBQUpYUkZXSFJrWVhSbCBPbTF2WkdsbWVRQXlNREl5TFRBekxUQTVWREV5T2pNeU9qQXdLekF3T2pBd1RmaDl1QUFBQUFCSlJVNUVya0pnZ2c9PVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImV4cG9ydCB7IFdvcmxkLCBsaW5rcyBhcyB3b3JsZExpbmtzIH0gZnJvbSAnLi9Xb3JsZCc7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1dvcmxkLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBXb3JsZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgd2lkdGg9XCIxLjRlbVwiXG4gICAgICBoZWlnaHQ9XCIxLjRlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIlxuICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGltYWdlXG4gICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICB4bGlua0hyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQU1BQUFDYWhsNnNBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTiBBQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBV2xCTVZFVUFBQUMzajRlMmtvcTRrWWkyIGtvbTNrb2kza1lpMmtZbTNrNG0za1ltL2o0KzJrb20ya1ltM2tvaTRrWWkya29tMmtvbTNrWW0za1ltM2s0ZTZqNHEya1lpMmtvbTMga1lpM2tvZTNrb2kyazRtM2tvaTNrb24vLy84NVkySGVBQUFBSEhSU1RsTUFJRDl2ajcvZnozOWZFSy92bjAvZ3dLQ0FRRENRY0xCZyAwRkR3NnRjMGNnQUFBQUZpUzBkRUhlc0RjWkVBQUFBSGRFbE5SUWZtQXdrTUlBQ3EvN3FqQUFBSmJFbEVRVlI0MnUxZDZacWlPaEJ0IHVoVnR4REVTUkJEZS96bXZDWkNOTEZWT0VPZCtPVDk2dXBVbHAvYXM4L1dWa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1Ega1BBL1JmYjlzOXMva1E5UEhOaHZ4OS92WXV0V0lUbjhudmFESGVYKy9PZmZZSlA5bnZNaGdNUHUwOGtVUHdlejBSY3k0bUo4ZnZyZCB1ckZ1L0o2VWhwSnJSV3Y5KzVwV1Y2SlkyWmx1M1dJYnNsMnBzS2pkRjlLYnZDNy8vVFFUeTg2cTJYZ2xYWmZxcGVYeGs2am9OSWJLIGQyMWhob0xQb1ZLY2phWjVHOVpZUXZMUDFoUTRma3V6WVpudjhzb2FqN2QzKzlxUytVcVd4aDFOeXh4SjVyeXhmZTNtaHR3WGJLelggVTJlU0xOc05hV1FpL1YyLzZzNW8yY04yQnhuYzJFNHBEK0VkSGZ1enZtaGM3bGdpdzZIR3ZUOFdkc3RHdDBvaFF0QkV0akd2Z3B2ViBwYjB4TllnR0ZKS0oxZHNQZ3gvbnQvT1kzS1A1WWdHMWs1L1hYbWR2aGhEZXpXU3VNMWpLS0RRckVubkNjdFBldzZDN05OekZEbTkxIGVjNmpmMXJXK05mNDh6aiswenVKUER3OHJ1eUM2N3VadEp4SE0vUktpS1hsb0RkM1FmNm5kUE9ZakpNWHhvY00wb1lZR1BXaHgwcG0gL1NPdFlsTEpUZnYrNkdFeHlLcW1mYWRPT0k5T2YxbFJ6dVl4TmNZSXY2M2Z4YS9pd3NmN21HUVdIbU00bWdJVlhSQ1o2K1BMTXlRWCBWN1BUTy9UcXd6amwvUnQ0OFB6Um16bjRwQmo2Rkp0eXdWeWExZmhCYlJEUit5L3RtNkx3a29kTWNyenNGWCtPV1ZMcmRPMHowVlNKIFppYXNtdVlOM3FMWHdPT0t4bU5PSEdwZlhBcmFsSDYrT3g3MWRIS1pua1Azczh2ekp6NVF6VUxqSVVVOW90alBkclAwNkdZS0FsNzAgczJIbHNxcGgrYVJjTlFoelI5ZE11bElGZTlYYitBdytweEFQS1pWQkVpbFlqaitzU2VRd21GV3Q2Q214and2YVZMZGVOdko4RHZJUSBaa3BWRWZIeVlFVTNZVjdRRzRHM1VvaU1qYmlFV3k4aGJ0dHJNdUpXdWxwSHZyWTlmUzdjWlU2ck1FVHlhVENvR0hRZE1KbmxhK1hGIHZWWGZrM0ZKZ2tVUG90RFI4YzVuYWJYYnM1RFJQMVQvN29iQUFObnJZT3ErV0lURXcyNW5YQmpHamZ1M3plMmxmRmFKWER5U1dzMlcgRXVNTEF1REJSREs1Q1JQKzVXNG1EaFlDVnlsVm1PRHZqdTlxWFhSMXlMZzZRaGh6aXlJVXdiR0hySkFXcytkamU2aXFBMHp1azRHeSBSN3JIRzFnaG1nTmZpTUFWNVh4K0p0TkZoYVg2VkVFOCtub1pYQ0dJY0VnQVJPNkJWRUhYVUFsT0lZRmtzaCtSWHdJamNpdW9CSzZRIGVxeVJmQU1ORS9wN2FHU1JQU1J5eVFWV3lMa2NJdzBOMGVoYWdGd3VRK3hDcFFRcWhMZi9jRDZxRTRwMm5DRVJzUFdFL0pmQUhuaUYgWEhnTnRWOEJwTHBsS29sWmNiSFpEOUJRZVVIYkNsWnF3WXlHeFl3bWZCa1VyRFR0b05jQytpQkdHUFlnaSt2dURVd3UyZmZ2VHZSOCAvV2h2cENjUVViTTZMRjdwZUFEWVFSYnUxVW9RbEF5amRSVXppRUVERW9jQTFFeW5kMGZMN3FCK0o2WmZpTEg2ZTBUYjRqRTFsQTVSIEhWekV5NWx0eFNwVGNvaFpZNGdnVElzUEZJQlNXQmdaU0lvb2pXQm1vdnRvVHRKQWlCd3hQSWFoaEZkUUpKcVQzQUZFRUZrUTZ5WlYgTkNjaHdUZG5vVm5uSmVCMWh6WUUrVmVZWHUwMmhocXZqeDczZmhLRHgrVHI3bklhNWVZVE1MWnlpVlJ1elYya3AxVHNQaGRlQmJBQSBxbzlCTUI3bFFTT0lGSFpUeFJRbkl6cFVGNFBsNHhqTGJlYUpxTEp1RlNMWkR4c0o1dE92bU03VXFBOWNWNG1aYm96K3JoallPUjhrIGtka3Y4c2VVK0JIQUZyT3MxSXNSdHBRUkt2bTRVbngyemlBanZZcFpRWVNieVdCUTFMSGlyOUpPTVdtc2paR1VHQjZ3VWRkSzVQTEMgRkdFVUltSTFxREpYMjVNT3dhT0RlVzBsV3Y0Z2ZTd2loc0JIUjYycSsvZ0dGdUlSaVFSWXgxWks1b2cybjJnMFJVbGxkTEszQXE0VCBBaVdpeENrS3Z3OURSTTFsbzA3b1UvOEVPQU1LSjVMWGFndFdJS0xrcHNsVCtJS3pBamFjQld6UWZWQlZzaEtSVXV6R21WUGw2ZnM3IEUydHBvaEFoYXhDeE9FQyszMyt6cnlndWhRemd2cDdXVVdlMWRlendxK0NtS1FVTVlObjdmR2xaU0I1ckVwbWFoR1ZTd2w2YTlXeEsgbDU3bVZWTnJFcGxtWExFbEk3Q09aZGxES2VKV0pUTDhTQ1lkZUFpZUFGL2JhaytNTVNMdnlkdmxqbW1sdWx5eXI0elM5aDRpd1FHZSA0bGFqVEl3eTNyOGdRNXZSenhwQVhqeUIzMHdwbmRVU1l6d29NQnU0TTY2dWdsd3cwcDI3cHhGNHpJVzBFNmI1RmlIM3g2d2duYnJSIEpBYVJyNEFmTHdYOENOeXhCeHZLM0YySU15RWFTTitXZUpvRnkrR2M3UWwvd2grTWkzbmdMODRBWGNCVVhybEgwWTd2eldMZ0w4NGkgSWY5d2ozMktJT1JZRWg1aHl3SE1PRFBVL2tZNXpCZmUxM0srVjhaOXpIeUtEOTVHT1NRS3I0dWRaYVNzVUdMTmhub0xRNmY1VW1DbiAwZVVsRGVBZFNIaWR4R08rd0RVUTlnVFp3dDZCZ3M5SnZCRWUxdisxajZ3b3BXOHNGeEZ6VmlnTEg1RkJxSVNFRjI4eGlydHVESzk5IEFnUmkyMjFxelIxeGVaQlRyT0ZOcWZWclJFcWc5U0xoU2RTN1FERWJYRXBuSlpJcFg4ZGMxZWhyemVuMVcwY1F5MTFLN01WTU40YmggeXduK2RCVmVOR1Fqb3VUVFNNc2VsaEphd2xlVkF4YjgyMlk2UnlKTk9jUmU2Ty9kU3VHUldYaVAxV0QxRVU2a0FpK2xSTUEzZFZDNiA0Mk1HNEdFandwMkRINkVTZTF1UFZ5V2V1QUloc2l5bGVJUm9tVUpJWkI1K2xYajJFRUdJM0t3dmExWlJTRUFsN3Q0UmhNaEM2bXlYIElPRnM0aXNrRUxoY0tnSDFGQmREOUN6L1ByaDdyWEl1Ui9jQ0VkaDJLK01tWHRVMDlxMXBNZURMMGE3ZUVXd1VWYitIYnovbEk5aVkgRFNzWStJWkc3R2tMRkgxTkE1SmhaYTJOeHo1L3QvY1pnS05DK3MyaVBDRXI4ZkJhdkxYV2hpNTAxRzRXOFFHOE5lMEZ1Q1Zza3g1OCBZWjE2bDRpT2ErNW9keThOV0JJcFFOTzhJOVMwTjF2V3VtY01PTGZsR1VTSzd4L01nazNGU2VhamxYQ0wwL0J3dVlsT1JELzVMd3haIEdjem0ySzkrUkpYRFRYUWkyT1d6TXhGcGptODRvTXJPUkNPQ1hxNDU5YTJvVU9RN0R0cXlPN3hHQkwrQWxuazdsZEZoOWNORTNFdzAgSXVqMUVPeVlFU1hJeGU0Vk9wbFloaUkwSXRqbG1nYmV4Y002dGFZU2VXVnB0c3JqalFkc0xhMUxJU0lQQy94d2ZYQW01a1JPT2NkOSAxTzQzQzk3ajV3ck1LRHhWR2J1WFdpK3h3UUdIUm1pYWlQeWRuL2VibkFPcXJ3c1lGMkxCdXJZdUFGY0ZSNGNldkxoSzBHc0RWYnd6IFhCbFF6WXNUUWU5YzJOcXNabERqeUUvWVlJTU41RzJIR3RwUmlPekgraFNnTVd1ck9sWSs0QXlDZWR0Ri91ZDF5N3A5eHZuZWo4bSsgY3VTdVNtRlZHd1VyQzFyVTRXQUdqZTBQOW81QjVmcFpOQmdvUG1MMTE0MURsUU5GZzluY005dzNUUndCMURlZ2lYWE5ad1FxRDdMMiBHaURUM1I0ZnowS1FxZXg3eU1pOSttZElTTlMwZXVMRy9qOFk5a3REUDlPMUV4SVNFaElTRWhJU0VoSVNFaElTRWhJU0VoSVNFaElTIC9rbjhCN3Nwbm9wWDUwY3pBQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURJeUxUQXpMVEE1VkRFeU9qTXlPakF3S3pBd09qQXcgUEtYRkJBQUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF5TWkwd015MHdPVlF4TWpvek1qb3dNQ3N3TURvd01FMzRmYmdBQUFBQSBTVVZPUks1Q1lJST1cIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcblxuaW1wb3J0IHtcbiAgQm9va0NsdWJTZWN0aW9uLFxuICBib29rQ2x1YlNlY3Rpb25MaW5rcyxcbn0gZnJvbSAnfi9jb21wb25lbnRzL0hvbWUvQm9va0NsdWJTZWN0aW9uJztcbmltcG9ydCB7XG4gIE5ld3NsZXR0ZXJGb3JtU2VjdGlvbixcbiAgbmV3c2xldHRlckZvcm1TZWN0aW9uTGlua3MsXG59IGZyb20gJ34vY29tcG9uZW50cy9Ib21lL05ld3NsZXR0ZXJGb3JtU2VjdGlvbic7XG5pbXBvcnQge1xuICBQb3N0c1NlY3Rpb24sXG4gIHBvc3RzU2VjdGlvbkxpbmtzLFxufSBmcm9tICd+L2NvbXBvbmVudHMvSG9tZS9Qb3N0c1NlY3Rpb24nO1xuXG5pbXBvcnQgeyBncmFwaGNtcyB9IGZyb20gJ34vdXRpbHMvZ3JhcGhxbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICAuLi5ib29rQ2x1YlNlY3Rpb25MaW5rcygpLFxuICAgIC4uLm5ld3NsZXR0ZXJGb3JtU2VjdGlvbkxpbmtzKCksXG4gICAgLi4ucG9zdHNTZWN0aW9uTGlua3MoKSxcbiAgXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgcmV0dXJuIHJlZGlyZWN0KGAvY2F0ZWdvcnkvYWxsYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogJ0dpcmwgd2l0aCBPbmUgRWFycmluZyB8IEhvbWUnIH07XG59XG5cbmNvbnN0IEdldEJsb2dQb3N0c1F1ZXJ5ID0gZ3FsYFxuICB7XG4gICAgcG9zdHMoZmlyc3Q6IDQsIHdoZXJlOiB7IHR5cGU6IEJsb2cgfSkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBjYXRlZ29yeSB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICAgIGV4Y2VycHRcbiAgICAgIHVwZGF0ZWRBdFxuICAgICAgc2x1Z1xuICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB0aHVtYm5haWw6IHVybChcbiAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiB7XG4gICAgICAgICAgICAgIGltYWdlOiB7IHJlc2l6ZTogeyBoZWlnaHQ6IDIwMCwgd2lkdGg6IDMwMCB9IH1cbiAgICAgICAgICAgICAgZG9jdW1lbnQ6IHsgb3V0cHV0OiB7IGZvcm1hdDogd2VicCB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICAgdXJsKFxuICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICAgICAgaW1hZ2U6IHsgcmVzaXplOiB7IGhlaWdodDogNDAwLCB3aWR0aDogNjAwIH0gfVxuICAgICAgICAgICAgICBkb2N1bWVudDogeyBvdXRwdXQ6IHsgZm9ybWF0OiB3ZWJwIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR2V0Qm9va1Jldmlld1Bvc3RzUXVlcnkgPSBncWxgXG4gIHtcbiAgICBwb3N0cyhmaXJzdDogNSwgd2hlcmU6IHsgdHlwZTogUmV2aWV3IH0pIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZXhjZXJwdFxuICAgICAgdXBkYXRlZEF0XG4gICAgICBzbHVnXG4gICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IHBvc3RzOiBibG9nUG9zdHMgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoR2V0QmxvZ1Bvc3RzUXVlcnkpO1xuICBjb25zdCB7IHBvc3RzOiBib29rUmV2aWV3UG9zdHMgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXG4gICAgR2V0Qm9va1Jldmlld1Bvc3RzUXVlcnlcbiAgKTtcblxuICByZXR1cm4geyBibG9nUG9zdHMsIGJvb2tSZXZpZXdQb3N0cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGxldCB7IGJsb2dQb3N0cywgYm9va1Jldmlld1Bvc3RzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5HaXJsIHdpdGggT25lIEVhcnJpbmc8L2gxPlxuICAgICAgPFBvc3RzU2VjdGlvbiBibG9nUG9zdHM9e2Jsb2dQb3N0c30gLz5cbiAgICAgIDxCb29rQ2x1YlNlY3Rpb24gYm9va3M9e2Jvb2tSZXZpZXdQb3N0c30gLz5cbiAgICAgIDxOZXdzbGV0dGVyRm9ybVNlY3Rpb24gLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iLCAiZXhwb3J0IHtcbiAgQm9va0NsdWJTZWN0aW9uLFxuICBsaW5rcyBhcyBib29rQ2x1YlNlY3Rpb25MaW5rcyxcbn0gZnJvbSAnLi9Cb29rQ2x1YlNlY3Rpb24nO1xuIiwgImltcG9ydCB7IEJvb2tDbHViTGlzdCwgQm9va0NsdWJMaXN0TGlua3MgfSBmcm9tICcuL0Jvb2tDbHViTGlzdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb29rQ2x1YlNlY3Rpb24uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLkJvb2tDbHViTGlzdExpbmtzKCksIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tDbHViU2VjdGlvbih7IGJvb2tzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib29rLWNsdWItc2VjdGlvblwiPlxuICAgICAgPGgyPlRoZSBCb29rIENsdWI8L2gyPlxuICAgICAgPGgzPlxuICAgICAgICB7bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgeyBtb250aDogJ2xvbmcnIH0pLmZvcm1hdChuZXcgRGF0ZSgpKX1cbiAgICAgICAgJ3MgUGlja3NcbiAgICAgIDwvaDM+XG4gICAgICA8Qm9va0NsdWJMaXN0IGJvb2tzPXtib29rc30gLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgQm9va0NsdWJMaXN0LCBsaW5rcyBhcyBCb29rQ2x1Ykxpc3RMaW5rcyB9IGZyb20gJy4vQm9va0NsdWJMaXN0JztcbiIsICJpbXBvcnQgeyBCb29rQ2x1Ykl0ZW0sIGJvb2tDbHViSXRlbUxpbmtzIH0gZnJvbSAnLi9Cb29rQ2x1Ykl0ZW0nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQm9va0NsdWJMaXN0LmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5ib29rQ2x1Ykl0ZW1MaW5rcygpLCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCb29rQ2x1Ykxpc3QoeyBib29rcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cImJvb2stY2x1Yi1saXN0XCI+XG4gICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXG4gICAgICAgIDxCb29rQ2x1Ykl0ZW0ga2V5PXtib29rLmlkfSBib29rPXtib29rfSAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBCb29rQ2x1Ykl0ZW0sIGxpbmtzIGFzIGJvb2tDbHViSXRlbUxpbmtzIH0gZnJvbSAnLi9Cb29rQ2x1Ykl0ZW0nO1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb29rQ2x1Ykl0ZW0uY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tDbHViSXRlbSh7IGJvb2sgfSkge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJib29rLWNsdWItaXRlbVwiIGtleT17Ym9vay5pZH0+XG4gICAgICA8TGluayB0bz17YC9wb3N0LyR7Ym9vay5zbHVnfWB9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtib29rLmZlYXR1cmVkSW1hZ2UuaW1hZ2UudXJsfVxuICAgICAgICAgIGFsdD17YEJvb2sgY292ZXIgZm9yICR7Ym9vay5mZWF0dXJlZEltYWdlLm5hbWV9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApO1xufVxuIiwgImV4cG9ydCB7XG4gIE5ld3NsZXR0ZXJGb3JtU2VjdGlvbixcbiAgbGlua3MgYXMgbmV3c2xldHRlckZvcm1TZWN0aW9uTGlua3MsXG59IGZyb20gJy4vTmV3c2xldHRlckZvcm1TZWN0aW9uJztcbiIsICJpbXBvcnQgeyBCdXR0b24sIGJ1dHRvbkxpbmtzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0J1dHRvbic7XG5pbXBvcnQgeyBGb3JtLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgSW5wdXQsIGlucHV0TGlua3MgfSBmcm9tICcuL0lucHV0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05ld3NsZXR0ZXJGb3JtU2VjdGlvbi5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgLi4uYnV0dG9uTGlua3MoKSxcbiAgICAuLi5pbnB1dExpbmtzKCksXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdzbGV0dGVyRm9ybVNlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtLXNlY3Rpb25cIj5cbiAgICAgIDxoMj5cbiAgICAgICAgPHNwYW4+U2lnbiBVcDwvc3Bhbj5cbiAgICAgIDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgU3Vic2NyaWJlIHRvIHRoZSBlbWFpbCBsaXN0IHRvIGdldCBuZXcgcG9zdHMgZGlyZWN0bHkgdG8geW91ciBpbmJveC5cbiAgICAgIDwvcD5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvY2F0ZWdvcnkvYWxsXCIgcmVsb2FkRG9jdW1lbnQ+XG4gICAgICAgIDxJbnB1dCBsYWJlbD1cIkZpcnN0IE5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgIDxJbnB1dCBsYWJlbD1cIkVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImV4cG9ydCB7IElucHV0LCBsaW5rcyBhcyBpbnB1dExpbmtzIH0gZnJvbSAnLi9JbnB1dCc7XG4iLCAiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0LmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dCh7IGxhYmVsLCBuYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZm9ybS1pbnB1dC1maWVsZFwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICA8aW5wdXQgbmFtZT17bmFtZX0gdHlwZT1cInRleHRcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCB7IFBvc3RzU2VjdGlvbiwgbGlua3MgYXMgcG9zdHNTZWN0aW9uTGlua3MgfSBmcm9tICcuL1Bvc3RzU2VjdGlvbic7XG4iLCAiaW1wb3J0IHsgUG9zdHMsIHBvc3RzTGlua3MgfSBmcm9tICcuLi8uLi9zaGFyZWQvUG9zdHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9zdHNTZWN0aW9uLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFsuLi5wb3N0c0xpbmtzKCksIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RzU2VjdGlvbih7IGJsb2dQb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicG9zdHMtc2VjdGlvblwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkxhdGVzdCBCbG9nIFBvc3RzPC9oMj5cbiAgICAgIDxQb3N0cyBsYXlvdXRUeXBlPVwic3BvdGxpZ2h0XCIgcG9zdHM9e2Jsb2dQb3N0c30gLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNTEyMjcyYWMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LURKU01QWFdLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00NVdXU09TWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1RM1hRM1NaSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstU0xZQUtJVlouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02S1NXTVRIQi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWJvdXQnOnsnaWQnOidyb3V0ZXMvYWJvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWJvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWJvdXQtN1dIQ0lYS04uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVRSDJLSFpNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWUMzRkNPWkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01RDM1Vk1WVS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LyRwYWdlJzp7J2lkJzoncm91dGVzL2NhdGVnb3J5LyRjYXRlZ29yeS8kcGFnZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjYXRlZ29yeS86Y2F0ZWdvcnkvOnBhZ2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5LyRwYWdlLUlRNUtPSFZWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FRkU3RjJBVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU8zTTY2WTNRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlVHS0NZNzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01RDM1Vk1WVS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jYXRlZ29yeS8kY2F0ZWdvcnkvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NhdGVnb3J5LzpjYXRlZ29yeScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2F0ZWdvcnkvJGNhdGVnb3J5L2luZGV4LVM0N0tCS0Y3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FRkU3RjJBVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU8zTTY2WTNRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlVHS0NZNzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01RDM1Vk1WVS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb250YWN0Jzp7J2lkJzoncm91dGVzL2NvbnRhY3QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29udGFjdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb250YWN0LTdZNlZBRFdMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aRk5KTDVPUy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlDM0ZDT1pMLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1JVk40WVNYUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTzNNNjZZM1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KVUdLQ1k3Ni5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVEMzVWTVZVLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcG9zdC8kc2x1Zyc6eydpZCc6J3JvdXRlcy9wb3N0LyRzbHVnJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bvc3QvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9zdC8kc2x1Zy1KUjNNQVdDVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWkZOSkw1T1MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01UUgyS0haTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlDM0ZDT1pMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlVHS0NZNzYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQv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QUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxhQUFVO0FBQUEsS0FDWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxhQUFVO0FBQUEsSUFDVixHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEs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
