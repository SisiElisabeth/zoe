<template>
	<view class="menu-page">
        <!-- 顶部导航切换 -->
		<view class="">
		    
		</view>
        <view>
            <text  v-for="(item,index) in menu" :key="index">{{item}}</text>
        </view>
	</view>
</template>

<script setup>
    // import { buttonPosition } from '@/api/component.api.js';
	import { ref } from 'vue';

    const menu = ref(['我的','对话','AI对话']);
    // const {button_height, button_top, button_bottom} = buttonPosition();
</script>

<style lang="less">
	page {
        background-color: #f3f3f3;
    }
    .menu-page {
        background: linear-gradient(#fce7cc,#f3f3f3);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 999;
    }
</style>
