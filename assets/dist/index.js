import { r as reactive, Q as computed, x as unref, ay as openBlock, U as createBlock, V as createCommentVNode, b9 as createApp } from "./main2.js";
import { a as _sfc_main$1 } from "./authorization.js";
const _sfc_main = {
  setup(__props, { expose }) {
    const { Custom } = window;
    let state = reactive({
      authorization: reactive({
        visible: false,
        mode: null
      })
    });
    let action = computed(() => {
      return `${Custom.path}${state.authorization.mode}/`;
    });
    function submitAuthorization(e) {
      e.target.submit();
    }
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
        action: unref(action),
        mode: unref(state).authorization.mode,
        onSubmit: submitAuthorization,
        onClose: _cache[0] || (_cache[0] = ($event) => visibleAuthorization(false))
      }, null, 8, ["action", "mode"])) : createCommentVNode("", true);
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
