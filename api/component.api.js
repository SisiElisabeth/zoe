import {reactive} from 'vue';
//获取胶囊按钮的位置
export const buttonPosition = () => {
    const buttonData = reactive({
        btn_bottom: '0px',
        btn_height: '0px',
        // btn_left: '0px',
        // btn_right: '0px',
        btn_top: '0px', 
        // btn_width: ''0px',
    });
    const {bottom, height, top} = uni.getStorageSync('buttonPosition');
    
    buttonData.btn_bottom = `${bottom + 10}px`;
    buttonData.btn_height = `${height}px`;
    buttonData.btn_top = `${top}px`;
    
    return buttonData;
    
    // return {
    //     btn_bottom: buttonData.btn_bottom,
    //     btn_height: buttonData.btn_height,
    //     btn_top: buttonData.btn_top
    // };
}

// export const buttonPosition = () => {
//     return uni.getStorageSync('buttonPosition');
// }