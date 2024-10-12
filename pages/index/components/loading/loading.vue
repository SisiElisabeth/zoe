<template>
  <view class="circle-container">
    <text class="circle"></text>
    <text class="circle"></text>
    <text class="circle"></text>
  </view>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .circle-container {
    display: flex;
    align-items: center;
    padding: 20rpx 0;

    .circle {
      width: 18rpx;
      height: 18rpx;
      border-radius: 50%;
      background-color: #777a8d;
      margin-right: 10rpx;
      animation: colorChange 1s linear infinite;

      &:nth-child(1) {
        animation-delay: 0s;
      }

      &:nth-child(2) {
        animation-delay: 0.33s;
      }

      &:nth-child(3) {
        animation-delay: 0.67s;
      }
    }

    @keyframes colorChange {
      0% {
        background-color: #ffcc00;
      }

      66.67% {
        background-color: #ffcc00;
      }

      33.33% {
        background-color: #ffcc00;
      }
    }
  }
</style>