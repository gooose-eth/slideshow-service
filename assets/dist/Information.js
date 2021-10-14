import { _ as _export_sfc, i as i18n, o as openBlock, c as createElementBlock, a as createBaseVNode, f as createTextVNode, t as toDisplayString, u as unref, p as pushScopeId, g as popScopeId } from "./slideshow.js";
const name = "slideshow-service";
const version = "1.0.0";
const scripts = {
  ready: "php ./resource/tool.php ready",
  setup: "php ./resource/tool.php install",
  start: "./scripts.sh start",
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
  "vue-i18n": "^9.1.9",
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
var Information_scss_vue_type_style_index_0_src_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-c3b151a0"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("legend", null, "information fields", -1));
const _hoisted_2 = { class: "information" };
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("GitHub: "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/redgoose-dev/slideshow",
    target: "_blank"
  }, "https://github.com/redgoose-dev/slideshow")
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://redgoose.me",
  target: "_blank"
}, "https://redgoose.me", -1));
const _hoisted_7 = ["innerHTML"];
const _sfc_main = {
  setup(__props) {
    const { t } = i18n.global;
    const version2 = pkg.version;
    const signatures = {
      light: "https://raw.githubusercontent.com/redgoose-dev/slideshow/main/resource/github/signature-light.png",
      dark: "https://raw.githubusercontent.com/redgoose-dev/slideshow/main/resource/github/signature-dark.png"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("fieldset", null, [
        _hoisted_1,
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("figure", null, [
            createBaseVNode("img", {
              src: signatures.light,
              alt: "slideshow"
            }, null, 8, _hoisted_3),
            createBaseVNode("img", {
              src: signatures.dark,
              alt: "slideshow"
            }, null, 8, _hoisted_4)
          ]),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createTextVNode(toDisplayString(unref(t)("base.version")) + ": ", 1),
              createBaseVNode("strong", null, toDisplayString(unref(version2)), 1)
            ]),
            _hoisted_5,
            createBaseVNode("li", null, [
              createTextVNode(toDisplayString(unref(t)("base.author")) + ": ", 1),
              _hoisted_6
            ])
          ]),
          createBaseVNode("p", {
            innerHTML: unref(t)("description.information", { link: `<a href='https://github.com/redgoose-dev/slideshow/issues' target='_blank'>GitHub Issues</a>` })
          }, null, 8, _hoisted_7)
        ])
      ]);
    };
  }
};
var Information = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3b151a0"]]);
export { Information as default };
//# sourceMappingURL=Information.js.map
