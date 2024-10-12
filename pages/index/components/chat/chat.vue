<template>
  <view class="message user-message">用户发送</view>
  <view class="message robot-message">
    AI机器的回复
    <!-- <loadingVue></loadingVue> -->
    <!-- 联网查询的数据 -->
    <view>
      <text class="recommend-common recommend-tips">我还为你推荐以下内容</text>
      <view class="recommend-common recommend-content">
        <text class="recommend-item text-show">123456</text>
      </view>
    </view>
  </view>

</template>

<script setup>
  import loadingVue from '../loading/loading.vue';
</script>

<style lang="less" scoped>
  .message {
    border-radius: 4px;
    padding: 15rpx;
    margin: 30rpx 20rpx 0 20rpx;
  }

  .user-message {
    background-color: #20c57d;
    color: #fff;
    display: inline-block;
  }

  .robot-message {
    background-color: #fff;
    color: #333;

    .recommend-common {
      background-color: #f3f3f3;
      border-radius: 10rpx;
      padding: 15rpx;
    }

    .recommend-tips {
      margin: 20rpx 0;
      font-weight: 700;
    }

    .recommend-content {
      .recommend-item {
        margin-bottom: 15rpx;
        color: #006c45;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>