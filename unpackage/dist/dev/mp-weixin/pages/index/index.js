"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const menu = common_vendor.ref(["我的", "对话", "AI对话"]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menu.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
