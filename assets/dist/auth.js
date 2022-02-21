import { a as _sfc_main$1 } from "./authorization.js";
import { r as reactive, ay as openBlock, U as createBlock, x as unref } from "./main2.js";
const _sfc_main = {
  setup(__props) {
    const { address } = window.Custom;
    let state = reactive({
      address
    });
    function onSubmit(e) {
      location.reload();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        type: "watch",
        mode: "watch",
        address: unref(state).address,
        onSubmit
      }, null, 8, ["address"]);
    };
  }
};
export { _sfc_main as default };
