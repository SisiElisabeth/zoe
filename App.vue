<script setup>
	import { onLaunch } from '@dcloudio/uni-app'
    onLaunch(()=>{
        // 获取胶囊按钮的位置
        const buttonPosition = uni.getStorageSync('buttonPosition');
        if(!buttonPosition) {
            const res = uni.getMenuButtonBoundingClientRect()
            uni.setStorageSync('buttonPosition', res)
        }
        
    })
</script>

<style>
    image,text {
        display: block;
    }
	/*每个页面公共css */
</style>
