"use strict";
const common_vendor = require("../../common/vendor.js");
const api_component_api = require("../../api/component.api.js");
if (!Math) {
  loginVue();
}
const loginVue = () => "../login/login2.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "269153fc": common_vendor.unref(btn_bottom),
      "a5b07db8": common_vendor.unref(btn_top),
      "303c4af8": common_vendor.unref(btn_height)
    }));
    const menu = common_vendor.ref(["我的", "对话", "AI绘画"]);
    const { btn_height, btn_top, btn_bottom } = api_component_api.buttonPosition();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menu.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        b: common_vendor.s(_ctx.__cssVars()),
        c: common_vendor.s(_ctx.__cssVars()),
        d: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
wx.createPage(_sfc_main);
