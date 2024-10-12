<template>
  <view class="menu-view">
    <!-- 顶部导航切换 -->
    <!-- <view class="button-top"></view> -->
    <view class="menu-style">
      <text v-for="(item,index) in menu" :key="index">{{item}}</text>
    </view>
  </view>
  <view class="menu-view-height"></view>
  <!-- <mineVue></mineVue> -->
  <!-- 对话组件 -->
  <!-- <chatVue></chatVue> -->
  <!-- 绘图组件 -->
  <!-- <drawVue></drawVue> -->
  <!-- 底部输入框 -->
  <!-- <inputVue></inputVue> -->
  <!-- 个人中心 -->
  <!-- <personalCenterVue></personalCenterVue> -->
  <!-- 登录 -->
  <loginVue></loginVue>

</template>

<script setup>
  import {
    buttonPosition
  } from '@/api/component.api.js';
  import mineVue from './components/mine/mine.vue';
  import chatVue from './components/chat/chat.vue';
  import drawVue from './components/draw/draw.vue';
  import inputVue from './components/input/input.vue';
  import personalCenterVue from '@/pages/personalCenter/personalCenter.vue';
  import loginVue from '@/pages/login/login.vue';

  import {
    ref
  } from 'vue';

  const menu = ref(['我的', '对话', 'AI绘画']);
  const {
    btn_height,
    btn_top,
    btn_bottom
  } = buttonPosition();
</script>

<style lang="less">
  page {
    background-color: #f3f3f3;
  }

  .menu-view {
    background: linear-gradient(#fce7cc, #f3f3f3);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    height: v-bind('btn_bottom');

    .button-top {
      height: v-bind('btn_top');
    }

    .menu-style {
      display: flex;
      align-items: center;
      padding-left: 20rpx;
      margin-top: v-bind('btn_top');
      height: v-bind('btn_height');
      font-size: 32rpx;
      color: #9d9486;
      font-weight: 700;

      text:nth-child(2) {
        padding: 0 60rpx;
      }
    }
  }

  .menu-view-height {
    height: v-bind('btn_bottom');
  }

  .content {}
</style>