"use strict";
const common_vendor = require("../common/vendor.js");
const buttonPosition = () => {
  const buttonData = common_vendor.reactive({
    btn_bottom: "0px",
    btn_height: "0px",
    // btn_left: '0px',
    // btn_right: '0px',
    btn_top: "0px"
    // btn_width: ''0px',
  });
  const { bottom, height, top } = common_vendor.index.getStorageSync("buttonPosition");
  buttonData.btn_bottom = `${bottom + 10}px`;
  buttonData.btn_height = `${height}px`;
  buttonData.btn_top = `${top}px`;
  return buttonData;
};
exports.buttonPosition = buttonPosition;
