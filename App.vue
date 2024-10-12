<script setup>
  import { onLaunch } from '@dcloudio/uni-app'
  onLaunch(() => {
    // 获取胶囊按钮的位置
    const buttonPosition = uni.getStorageSync('buttonPosition');
    if (!buttonPosition) {
      const res = uni.getMenuButtonBoundingClientRect()
      uni.setStorageSync('buttonPosition', res)
    }
  })
</script>

<style lang="less">
  image,
  text,
  view {
    display: block;
    box-sizing: border-box;
  }

  button {
    border: none;
    border-radius: 50rpx;

    &::after {
      border: none;
    }
  }

  .text-show {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  /*每个页面公共css */
</style>