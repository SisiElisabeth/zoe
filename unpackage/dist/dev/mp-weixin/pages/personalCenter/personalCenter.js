"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_component_api = require("../../api/component.api.js");
const _sfc_main = {
  __name: "personalCenter",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "68509d5d": common_vendor.unref(btn_bottom)
    }));
    const { btn_height, btn_top, btn_bottom } = api_component_api.buttonPosition();
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7b035f71"]]);
wx.createPage(MiniProgramPage);
