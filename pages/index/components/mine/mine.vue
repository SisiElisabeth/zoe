<template>
  <view class="intro-view">
    <text class="greeting-text">你好，我是你的智能助手</text>
    <text class="intro-text">作为你的智能助手，我既能写文案，想点子，又能写代码，做表格</text>
    <view class="question-hint">
      <text class="question-text">你可以试着问我：</text>
      <view class="change-btn" @click="randomData('02')">
        <image src="/static/refresh.svg" :class="{'rotate-animation':isRotating}" mode="widthFix"></image>
        <text>换一换</text>
      </view>
    </view>
    <!-- 用户默认问题 -->
    <view class="default-questions">
      <view class="default-question-item" v-for="(item,index) in newData" :key="index">
        <image :src="item.icon" mode="widthFix"></image>
        <view>{{item.title}}</view>
        <text class="text-show">{{item.problem}}</text>
      </view>
    </view>
  </view>

</template>

<script setup>
  import {
    ref
  } from 'vue';
  import {
    onLoad
  } from '@dcloudio/uni-app'
  onLoad(() => {
    randomData('01')
  })
  const isRotating = ref(false);
  const problemData = [{
      icon: '/static/chat-page/m1.svg',
      title: '农夫山泉新品上市策略',
      problem: '请分析近期农夫山泉“绿瓶”纯净水上市的原因，并结合同期农夫山泉的价格战以及纯净水的广告营销话术，并指出对其他矿泉水品牌可能产生的影响，并分析消费者在其中的角色和可能受到的影响。',
    },
    {
      icon: '/static/chat-page/m2.svg',
      title: '2024电动汽车年中大盘点',
      problem: '帮我整理一下2024年电动汽车行业的大动态&大新闻。',
    },
    {
      icon: '/static/chat-page/m3.svg',
      title: '活动方案策划',
      problem: '设计一份党纪学习教育实践活动的方案策划。活动主办方是某市街道办党。',
    },
    {
      icon: '/static/chat-page/m4.svg',
      title: '申论备考干货汇总',
      problem: '基于6篇文档，归纳出详细、具体的申论写作技巧，同时就如何提升申论写。',
    },
    {
      icon: '/static/chat-page/m5.svg',
      title: '心得体会',
      problem: '请帮我写《红岩》心得体会，字数不少于800字。',
    },
    {
      icon: '/static/chat-page/m6.svg',
      title: '评析申论范文',
      problem: '评阅9篇申论范文的优缺点。以国家公务员申论考试为标准，从主题、结构。',
    },
    {
      icon: '/static/chat-page/m7.svg',
      title: '领导发言稿润色',
      problem: '润色这篇讲话稿，要求保留全文主要意思和结构，适当增加引经据典。',
    },
    {
      icon: '/static/chat-page/m8.svg',
      title: '云南热门景点',
      problem: '我来云南旅游，请给我一些热门景点或者路线作参考。',
    },
  ]
  //随机取4项
  const newData = ref([]);
  const randomData = (val) => {
    if (isRotating.value) return;
    newData.value = [...problemData].sort(() => Math.random() - 0.5).splice(0, 4)
    console.log(newData.value)
    if (val === '02') {
      isRotating.value = true;
      setTimeout(() => {
        isRotating.value = false;
      }, 1000)
    }
  }
</script>

<style lang="less" scoped>
  .intro-view {
    background-color: #fff;
    border-radius: 5rpx;
    margin: 20rpx;
    padding: 20rpx;

    .greeting-text {
      font-size: 40rpx;
      font-weight: 700;
    }

    .intro-text {
      color: #777a8d;
      line-height: 1.5;
      padding: 25rpx 0;
    }

    .question-hint {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .question-text {
        color: #777a8d;
      }

      .change-btn {
        display: flex;
        align-items: center;

        image {
          width: 30rpx;
          margin: 0 10rpx;
        }

        text {
          color: #5a56d0;
        }

        .rotate-animation {
          transition: transform 1s;
          transform: rotate(360deg);
        }
      }
    }

    .default-questions {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 20rpx;
      padding: 25rpx;

      .default-question-item {
        background-color: #f7f8fc;
        padding: 20rpx;
        border-radius: 4rpx;

        image {
          width: 50rpx;
        }

        view {
          font-size: 33rpx;
          font-weight: 700;
          padding: 10rpx 0;
        }

        text {
          color: #777a8d;
          line-height: 1.5;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
</style>