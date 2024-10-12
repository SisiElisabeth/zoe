<template>
  <view class="modal-backdrop">
    <view class="personal-center">
      <view class="user-info">
        <image src="../../static/send.svg"></image>
        <text>昵称</text>
      </view>
      <text class="new-dialog">开启新对话</text>
      <text class="history">对话历史</text>
      <!-- 消息列表 -->
      <scroll-view class="srcoll-height" scroll-y type="nested" scroll-with-animation>
        <view class="history-list">
          <text class="tes">消息消息消息消息消息消息消息消息消息消息</text>
          <text>2024-10-11</text>
        </view>
      </scroll-view>
    </view>
  </view>

</template>

<script setup>
  import {
    buttonPosition
  } from '@/api/component.api.js';
  const {
    btn_height,
    btn_top,
    btn_bottom
  } = buttonPosition();
</script>

<style lang="less" scoped>
  .modal-backdrop {
    position: fixed;
    top: v-bind('btn_bottom');
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);

    .personal-center {
      height: 100%;
      width: 80%;
      transform: translate(-80%, 0);
      background-color: #f8f8f8;
      animation: slideInForm 0.5s forwards;

      @keyframes slideInForm {
        from {
          transform: translate(-80%, 0);
        }

        to {
          transform: translate(0, 0);
        }
      }

      .user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30rpx 0;

        image {
          width: 90rpx;
          height: 90rpx;
          border-radius: 50%;
        }

        text {
          padding-top: 10rpx;
          font-size: 35rpx;
          font-weight: 700;
        }
      }

      .new-dialog {
        margin: 45rpx 20rpx;
      }

      .history {
        margin: 30rpx 20rpx;
        padding-bottom: 20rpx;
        border-bottom: 1px solid rgba(218, 218, 218, 0.6);
      }

      .srcoll-height {
        height: 800rpx;

        .history-list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #fff;
          border-radius: 20rpx;
          margin: 20rpx;
          padding: 20rpx;

          text:nth-child(1) {
            flex: 1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          text:nth-child(2) {
            color: #9d9eab;
            font-size: 26rpx;
            padding-left: 20rpx;
          }
        }
      }
    }
  }
</style>