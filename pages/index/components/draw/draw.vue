<template>
  <view class="style-title">生成风格</view>
  <scroll-view class="srcoll-height" scroll-x scroll-with-animation>
    <view class="style-list" v-for="(item,index) in styleList" :key="index" :class="{'select':selectIndex === index}"
      @click="selectIndex = index">
      <view class="style-content">
        <image :src="item.icon" mode="aspectFill"></image>
        <text :style="{backgroundColor: item.color}">{{item.style}}</text>
      </view>
    </view>
  </scroll-view>
  <view class="keyword-title">画面关键词</view>
  <view class="textarea-view">
    <textarea :show-confirm-bar="false" placeholder="请输入一段文字" class="textarea-style"></textarea>
  </view>
  <!-- 生成效果 -->
  <view class="creative-tips">AI正在绘图中</view>
  <view class="creative-view">
    <image src="../../../../static/refresh.svg" mode="widthFix"></image>
  </view>
  <!-- 提交生成 -->
  <button class="submit-create">生成图片</button>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  const styleList = ref([{
      icon: '/static/draw-page/001.svg',
      style: '无风格',
      color: '#1f9be5'
    },
    {
      icon: '/static/draw-page/001.svg',
      style: '动漫风格',
      color: '#4f965e'
    },
    {
      icon: '/static/draw-page/003.svg',
      style: '写实风格',
      color: '#b09783'
    },
    {
      icon: '/static/draw-page/004.svg',
      style: '油画风格',
      color: '#5b89e1'
    },
    {
      icon: '/static/draw-page/005.svg',
      style: '水墨风格',
      color: '#98f32a'
    },
    {
      icon: '/static/draw-page/006.svg',
      style: '素描风格',
      color: '#72a09d'
    },
    {
      icon: '/static/draw-page/007.svg',
      style: '机甲风格',
      color: '#b98275'
    },
    {
      icon: '/static/draw-page/008.svg',
      style: '机甲风格',
      color: '#b3136f'
    }
  ]);
  const selectIndex = ref(0)
</script>

<style lang="less" scoped>
  .style-title {
    padding: 15rpx;
  }

  .srcoll-height {
    height: 130rpx;
    white-space: nowrap;
  }

  .style-list {
    display: inline-flex;
    width: 130rpx;
    height: 130rpx;
    border-radius: 10rpx;
    margin-right: 10rpx;
    padding: 8rpx;
    border: 2rpx solid transparent;

    &:first-child {
      margin-left: 10rpx;
    }

    &.select {
      border-color: #f00;
    }

    .style-content {
      position: relative;

      image {
        width: 110rpx;
        height: 110rpx;
        border-radius: 10rpx;

      }

      text {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 5rpx 0;
        border-bottom-left-radius: 10rpx;
        border-bottom-right-radius: 10rpx;
        font-size: 22rpx;
        color: #333;
        text-align: center;
      }
    }
  }

  .keyword-title {
    padding: 50rpx 20rpx 20rpx 20rpx;
  }

  .textarea-view {
    background-color: #fff;
    margin: 0 20rpx;
    border-radius: 15rpx;
    padding: 10rpx;

    .textarea-style {
      width: 100%;
      line-height: 1.5;
    }
  }

  .creative-tips {
    text-align: center;
    padding: 30rpx 20rpx;
    color: darkorange;
    font-weight: 700;
    line-height: 1.5;
  }

  .creative-view {
    margin: 0 20rpx;

    image {
      width: 100%;
      border-radius: 5rpx;
    }
  }

  .submit-create {
    position: fixed;
    right: 20rpx;
    bottom: 68px;
    left: 20rpx;
    background: linear-gradient(to right, #a2c5fe, #c0e7fd);
  }
</style>