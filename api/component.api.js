// import {reactive} from 'vue';
// //获取胶囊按钮的位置
// export const buttonPosition = () => {
//     const buttonData = reactive({
//         button_bottom = '0px',
//         button_height = '0px',
//         // button_left = '0px',
//         // button_right = '0px',
//         button_top = '0px',
//         // button_width = '0px',
//     });
//     const {bottom, height, top} = uni.getStorageSync('buttonPosition')
//     buttonData.button_bottom = bottom;
//     buttonData.button_height = height;
//     buttonData.button_top = top;
    
//     return {
//         button_bottom: buttonData.button_bottom,
//         button_height: buttonData.button_height,
//         button_top: buttonData.button_top
//     };
// }