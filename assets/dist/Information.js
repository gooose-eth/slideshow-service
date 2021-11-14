import { i as i18n, s as store } from "./main3.js";
import { y as openBlock, z as createElementBlock, F as createBaseVNode, C as unref, R as toDisplayString, _ as createTextVNode } from "./main2.js";
import "./authorization.js";
const name = "slideshow-service";
const version = "1.0.0";
const scripts = {
  setup: "./scripts.sh setup",
  start: "./scripts.sh start 5000",
  dev: "vite build --watch --config assets/config/vite.dev.config.js",
  build: "rm -rf assets/dist/ && vite build --config assets/config/vite.prod.config.js"
};
const repository = "https://github.com/redgoose-dev/slideshow-service.git";
const author = "redgoose <scripter@me.com>";
const license = "MIT";
const devDependencies = {
  "@vitejs/plugin-vue": "^1.9.3",
  sass: "^1.43.2",
  vite: "^2.6.7"
};
const dependencies = {
  vue: "^3.2.20",
  "vue-i18n": "^9.2.0-beta.12",
  vuex: "^4.0.2"
};
var pkg = {
  name,
  version,
  scripts,
  repository,
  author,
  license,
  devDependencies,
  dependencies
};
var Information_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("legend", null, "information fields", -1);
const _hoisted_2 = { class: "information" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["srcset"];
const _hoisted_5 = ["src"];
const _hoisted_6 = ["src"];
const _hoisted_7 = /* @__PURE__ */ createTextVNode("URL: ");
const _hoisted_8 = ["href"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://redgoose.me",
  target: "_blank"
}, "https://redgoose.me", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("GitHub: "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/redgoose-dev/slideshow-service",
    target: "_blank"
  }, "https://github.com/redgoose-dev/slideshow-service")
], -1);
const _hoisted_11 = ["innerHTML"];
const _sfc_main = {
  setup(__props) {
    const { t } = i18n.global;
    const version2 = pkg.version;
    const { Custom } = window;
    const signatures = {
      light: `${Custom.path}assets/images/signature-light.png`,
      dark: `${Custom.path}assets/images/signature-dark.png`
    };
    const url = Custom.url;
    const { screenColor } = store.state.preference.style;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("fieldset", null, [
        _hoisted_1,
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("figure", null, [
            unref(screenColor) === "system" ? (openBlock(), createElementBlock("picture", _hoisted_3, [
              createBaseVNode("source", {
                srcset: signatures.dark,
                media: "(prefers-color-scheme: dark)"
              }, null, 8, _hoisted_4),
              createBaseVNode("img", {
                src: signatures.light,
                alt: "slideshow"
              }, null, 8, _hoisted_5)
            ])) : (openBlock(), createElementBlock("img", {
              key: 1,
              src: signatures[unref(screenColor)],
              alt: "slideshow"
            }, null, 8, _hoisted_6))
          ]),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              _hoisted_7,
              createBaseVNode("a", {
                href: unref(url),
                target: "_blank"
              }, toDisplayString(unref(url)), 9, _hoisted_8)
            ]),
            createBaseVNode("li", null, [
              createTextVNode(toDisplayString(unref(t)("base.version")) + ": ", 1),
              createBaseVNode("strong", null, toDisplayString(unref(version2)), 1)
            ]),
            createBaseVNode("li", null, [
              createTextVNode(toDisplayString(unref(t)("base.author")) + ": ", 1),
              _hoisted_9
            ]),
            _hoisted_10
          ]),
          createBaseVNode("p", {
            innerHTML: unref(t)("description.information", { link: `<a href='https://github.com/redgoose-dev/slideshow-service/issues' target='_blank'>GitHub Issues</a>` })
          }, null, 8, _hoisted_11)
        ])
      ]);
    };
  }
};
export { _sfc_main as default };
