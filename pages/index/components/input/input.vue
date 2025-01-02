<template>
  <view class="input-box-area">
    <image @click="showText =!showText" :src="showText? '/static/voice.svg' : '/static/keyboard.svg'" mode="widthFix">
    </image>
    <view class="input-content" v-show="showText" id="input-content">
      <textarea 
        class="textarea-box" 
        :show-confirm-bar="false" 
        :fixed="true" 
        :auto-height="textareaValue.autoHeight"
        placeholder="你有什么想知道的,快来问我" 
        maxlength="500" 
        cursor-spacing="20" 
        @linechange="lineChange"
        v-model="inputContent"
      ></textarea>
    </view>
    <view class="speech-sound" v-show="!showText">按住 说话</view>
    <image src="/static/send.svg" mode="widthFix" @click="sendIng"></image>
  </view>
  <!-- 录制语音弹窗 -->
  <view class="mask-view" v-if="!showText"></view>
  <view class="record-text" v-if="!showText">
    111111111
  </view>
  <view class="record-pop-up" v-if="!showText">
    <text class="text release">松开 发送</text>
    <text class="text in-recognition">正在识别声音...</text>
    <view class="audio-wave">
      <text class="audio-wave-text" v-for="(item,index) in barData" :key="index" :style="{animationDelay: item}"></text>
    </view>
  </view>
</template>

<script setup>
  import {
    reactive,
    ref,
    getCurrentInstance,
    onMounted
  } from 'vue';
  import {
    onLaunch
  } from '@dcloudio/uni-app';
  import { chatbotMessage, inProgress } from '@/store/index.js';
  // 切换键盘输入还是语音合成
  const showText = ref(true);
  const instance = getCurrentInstance();
  const textareaHeight = ref('')

  const textareaValue = reactive({
    autoHeight: true,
    alignItems: 'center',
    height: '0px'
  })

  const lineChange = (event) => {
    const {
      detail: {
        height,
        lineCount
      }
    } = event;
    textareaValue.alignItems = lineCount >= 2 ? 'flex-end' : 'center';
    textareaValue.autoHeight = lineCount >= 6 ? false : true;
    textareaValue.height = `${height}px`
  }
  onMounted(() => {
    const query = uni.createSelectorQuery().in(instance); //.proxy可加可不加
    query.select('#input-content').boundingClientRect((res) => {
      textareaHeight.value = `${res.height}px`
    }).exec()
  })
  // 声波动画
  const barData = ref([
    '1s', '0.9s', '0.8s', '0.7s', '0.6s', '0.5s', '0.4s', '0.3s', '0.2s', '0.1s',
    '1s', '0.9s', '0.8s', '0.7s', '0.6s', '0.5s', '0.4s', '0.3s', '0.2s', '0.1s',
  ]);
  // 输入框的值
  const inputContent = ref('');
  // 发送
  const sendIng = () => {
    if(!inputContent.value.trim()) return; 
    if(inProgress().queryValue()) return;
    chatbotMessage().startSending(inputContent.value);
    console.log(inputContent.value);
  }
</script>

<style lang="less" scoped>
  .input-box-area {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f8f8f8;
    display: flex;
    align-items: v-bind('textareaValue.alignItems');
    padding: 20px 0 68rpx 0;

    image {
      width: 50rpx;
      margin: 0 20rpx;
    }

    .input-content {
      background-color: #fff;
      flex: 1;
      width: 100%;
      border-radius: 15rpx;
      padding: 10rpx;

      .textarea-box {
        width: 100%;
      }
    }

    .speech-sound {
      flex: 1;
      background: linear-gradient(to right, #a2c5fe, #c0e7fd);
      text-align: center;
      border-radius: 15rpx;
      color: #fff;
      height: v-bind('textareaHeight');
      line-height: v-bind('textareaHeight');
    }
  }

  .mask-view {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 1000;
  }

  .record-text {
    position: fixed;
    right: 10rpx;
    bottom: 500rpx;
    left: 10rpx;
    z-index: 1000;
    color: #fff;
    height: 300rpx;
    padding: 10rpx;
    line-height: 1.5;
  }

  .record-pop-up {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 500rpx;
    background: linear-gradient(to right, #07d280, #16cbdc);
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
      color: #fff;
      padding: 30rpx 0;
      font-weight: 700;
    }

    .release {
      font-size: 33rpx;
    }

    .in-recognition {
      font-size: 40rpx;
    }

    .audio-wave {
      padding-top: 50rpx;

      .audio-wave-text {
        display: inline-block;
        background-color: #fff;
        width: 7rpx;
        height: 10rpx;
        margin: 0 5rpx;
        border-radius: 5rpx;
        border: none;
        animation: wave 0.2s ease-in-out infinite alternate;
      }

      @keyframes wave {
        from {
          transform: scaleY(1);
        }

        to {
          transform: scaleY(4);
        }
      }
    }
  }
</style>