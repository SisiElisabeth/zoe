<template>
  <view class="login-page">
    <image class="login-image" src="/static/login.svg" mode="widthFix"></image>
    <text class="login-tips">登录体验更多AI功能</text>
    <view class="login-view">
      <button class="avatar-wrapper" open-type="chooseAvatar" bind:chooseavatar="onChooseAvatar">
        <image class="avatar" src="/static/camera.svg"></image>
      </button>
      <form class="form-submit">
        <input type="nickname" class="weui-input" placeholder="请输入昵称" />
        <button class="submit-btn" form-type="submit" @click="login">登录</button>
      </form>
    </view>
  </view>

</template>

<script setup>
  const login = () => {
    uni.login({
      success: res => {
        console.log(res);
      }
    })
  }
</script>

<style lang="less" scoped>
  .login-page {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 1000;

    .login-image {
      width: 100%;
    }

    .login-tips {
      font-size: 33rpx;
      font-weight: 900;
      padding: 40rpx 20rpx;
    }

    .login-view {
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatar-wrapper {
        width: 150rpx;
        height: 150rpx;
        border-radius: 50%;
        padding: 15rpx;

        .avatar {
          width: 120rpx;
          height: 120rpx;
          border-radius: 50%;
          padding: 0;
        }
      }

      .form-submit {
        width: 100%;

        .weui-input {
          padding: 20rpx 0;
          margin: 20rpx;
          border-bottom: 1px solid #f2f2f2;
        }

        .submit-btn {
          background: linear-gradient(to right, #a2c5fe, #c0e7fd);
          // padding: 15rpx 0;
          margin: 55rpx 20rpx 0;
        }
      }
    }
  }
</style>