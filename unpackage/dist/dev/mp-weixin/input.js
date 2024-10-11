"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const _sfc_main = {
  __name: "input",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "84aaf980": textareaValue.alignItems,
      "14d9a3e2": textareaHeight.value
    }));
    const showText = common_vendor.ref(true);
    const instance = common_vendor.getCurrentInstance();
    const textareaHeight = common_vendor.ref("");
    const textareaValue = common_vendor.reactive({
      autoHeight: true,
      alignItems: "center",
      height: "0px"
    });
    const lineChange = (event) => {
      const { detail: { height, lineCount } } = event;
      textareaValue.alignItems = lineCount >= 2 ? "flex-end" : "center";
      textareaValue.autoHeight = lineCount >= 6 ? false : true;
      textareaValue.height = `${height}px`;
    };
    common_vendor.onMounted(() => {
      const query = common_vendor.index.createSelectorQuery().in(instance);
      query.select("#input-content").boundingClientRect((res) => {
        textareaHeight.value = `${res.height}px`;
      }).exec();
    });
    const barData = common_vendor.ref([
      "1s",
      "0.9s",
      "0.8s",
      "0.7s",
      "0.6s",
      "0.5s",
      "0.4s",
      "0.3s",
      "0.2s",
      "0.1s",
      "1s",
      "0.9s",
      "0.8s",
      "0.7s",
      "0.6s",
      "0.5s",
      "0.4s",
      "0.3s",
      "0.2s",
      "0.1s"
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => showText.value = !showText.value),
        b: showText.value ? "/static/voice-1.svg" : "/static/keyboard.svg",
        c: textareaValue.autoHeight,
        d: common_vendor.o(lineChange),
        e: showText.value,
        f: !showText.value,
        g: common_assets._imports_0$1,
        h: common_vendor.s(_ctx.__cssVars()),
        i: common_vendor.s(_ctx.__cssVars()),
        j: common_vendor.s(_ctx.__cssVars()),
        k: common_vendor.f(barData.value, (item, index, i0) => {
          return {
            a: index,
            b: item
          };
        }),
        l: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-436a79f2"]]);
exports.MiniProgramPage = MiniProgramPage;
