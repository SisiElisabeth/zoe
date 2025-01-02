const requestUrl = 'http://127.0.0.1:3001'; 
import { chatbotMessage } from '@/store/index.js';
// http请求
const request = (url, method, data={}, enableChunked = false) => {
  return new Promise((resolve,reject)=>{
    const requestTask = wx.request({
      url: requestUrl + url,
      method,
      data,
      enableChunked,
      header: {},
      success: res => {
        const status = res.statusCode;
        switch(status){
          case 200:
            resolve(res.data);
            break;
          case 404:
            console.error('404异常');
            reject('404');
            break;
          case 401:
            console.error('401没有访问权限');
            reject('401');
            break
         }
      },
      fail: err => {
        console.log(err);
        uni,showToast({
          icon: "none",
          title: "出现异常"
        })
      }
    })
    let buffer = '';
    // 如果流式返回数据
    requestTask.onChunkReceived((res)=>{
      const arrayBuffer = new Uint8Array(res.data);
      // const decoder = new TextDecoder('utf-8');
      // let chunk = decoder.decode(arrayBuffer);
      let chunk = new TextDecoder().decode(arrayBuffer);
      // console.log(chunk);
      // buffer += chunk;
      
      // const objects = chunk.split('\n');
      chunk.split('data: ').filter(item => item.trim() !== '').map(item => {
        // 解析每个 JSON 字符串为对象
        if(!item.includes('[DONE]')){
          chatbotMessage().handleText(JSON.parse(item));
        }
        // return JSON.parse(item);
      });
      // console.log(objects);
      // if (chunk.includes('[DONE]')) {
      //   processBuffer(buffer);
      //   buffer = ''
      // }
      
      // const lines = buffer.split(/\r?\n/); // 根据换行符切分数据
    });
  })
}
// 文生文接口
export const createCompletions = (params) => {
  return request('/create-completions', 'POST', params, true)
}