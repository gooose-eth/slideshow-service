import { r as reactive, C as unref, y as openBlock, A as createBlock, G as createCommentVNode, a0 as createApp } from "./main2.js";
import { a as _sfc_main$1 } from "./authorization.js";
const _sfc_main = {
  setup(__props, { expose }) {
    let state = reactive({
      authorization: reactive({
        visible: false,
        mode: ""
      })
    });
    function visibleAuthorization(sw, mode) {
      state.authorization.mode = mode;
      state.authorization.visible = sw;
    }
    expose({
      visibleAuthorization
    });
    return (_ctx, _cache) => {
      return unref(state).authorization.visible ? (openBlock(), createBlock(_sfc_main$1, {
        key: 0,
        mode: unref(state).authorization.mode,
        onClose: _cache[0] || (_cache[0] = ($event) => visibleAuthorization(false))
      }, null, 8, ["mode"])) : createCommentVNode("", true);
    };
  }
};
let vm;
function index() {
  initButtonEvents();
  vm = createApp(_sfc_main, {}).mount("#service");
}
function initButtonEvents() {
  function onClickEvent(e) {
    var _a;
    e.preventDefault();
    route((_a = e.target.dataset) == null ? void 0 : _a.link);
  }
  const $elements = document.querySelectorAll("[data-link]");
  for (const $element of $elements) {
    $element.addEventListener("click", onClickEvent);
  }
}
function route(key) {
  switch (key) {
    case "manage":
      vm.visibleAuthorization(true, "manage");
      break;
  }
}
export { index as default };