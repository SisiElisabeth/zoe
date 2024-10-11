"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  __name: "draw",
  setup(__props) {
    const styleList = common_vendor.ref([
      {
        icon: "/static/draw-page/001.svg",
        style: "无风格",
        color: "#1f9be5"
      },
      {
        icon: "/static/draw-page/001.svg",
        style: "动漫风格",
        color: "#4f965e"
      },
      {
        icon: "/static/draw-page/003.svg",
        style: "写实风格",
        color: "#b09783"
      },
      {
        icon: "/static/draw-page/004.svg",
        style: "油画风格",
        color: "#5b89e1"
      },
      {
        icon: "/static/draw-page/005.svg",
        style: "水墨风格",
        color: "#98f32a"
      },
      {
        icon: "/static/draw-page/006.svg",
        style: "素描风格",
        color: "#72a09d"
      },
      {
        icon: "/static/draw-page/007.svg",
        style: "机甲风格",
        color: "#b98275"
      },
      {
        icon: "/static/draw-page/008.svg",
        style: "机甲风格",
        color: "#b3136f"
      }
    ]);
    const selectIndex = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(styleList.value, (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.style),
            c: item.color,
            d: index,
            e: selectIndex.value === index ? 1 : "",
            f: common_vendor.o(($event) => selectIndex.value = index, index)
          };
        }),
        b: common_assets._imports_0
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-376e6662"]]);
wx.createPage(MiniProgramPage);
