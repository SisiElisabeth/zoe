"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const login = () => {
      common_vendor.index.login({
        success: (res) => {
          console.log(res);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_assets._imports_1,
        c: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
exports.MiniProgramPage = MiniProgramPage;
