import { defineStore } from 'pinia';
import { createCompletions } from '@/api/request.js';

export const chatbotMessage = defineStore('chatbotMessage', {
  state: ()=>({
    // {"role": "user", "content":""}
    messages: [],
    receiveText: ''
  }),
  actions: {
    // 接收服务器端大模型返回的数据
    async handleText(obj) {
      // 数组的最后一个
      const last = this.messages.length - 1;
      // 服务器开始响应
      this.messages[last].finish_reason = 'progress';
      // 把大模型返回的文本追加到receiveText
      this.receiveText += obj.choices[0].delta.content || '';
      // 把文本追加AI的回复中
      this.messages[last].content = this.receiveText;
      
      // 判断是否回复完毕
      if(obj.choices[0].finish_reason) {
        // 存储状态
        this.messages[last].finish_reason = obj.choices[0].finish_reason;
        // 如果有联网查询的数据
        this.messages[last].web_search = obj.web_search ? obj.web_search : [];
        // 如果回复气场
        const conditions = [
          {type: 'length', content: '到达token上限,请重新开启新对话'},
          {type: 'sensitive', content: '含有敏感信息，无法回答'},
          {type: 'network_error', content: '推理异常，请重新尝试'}
        ];
        conditions.forEach(item=> {
          if(this.messages[last].finish_reason === item.type) {
            this.messages[last].content = item.content;
          }
        });
        // 对话已完毕
        inProgress().value = false;
        console.log(this.messages);
      }
    },
    // 发送数据到服务器端
    async startSending(content) { // 发送的值
      // 清空上一次的结果
      this.receiveText = '';
      // 数组的最后一个
      const last = this.messages.length - 1;
      
      this.messages.push({"role": "user", content})
      this.messages.push({
        "role": "assistant", 
        "content":"",
        "finish_reason": "start",
        "web_search":[], // 网页搜索
      });
      // 对话进行中
      inProgress().value = true;
      /*
      finish reason:
        start 开始中
        progress 进行中
        stop 代表推理自然结束或触发停止词。
        tool_calls 代表模型命中函数。
        length 代表到达 tokens 长度上限。
        sensitive 代表模型推理内容被安全审核接口拦截。请注意，针对此类内容，请用
        network_error 代表模型推理异常。
      */
      // 请求服务器端进行发送
      try{
        await createCompletions({messages: this.messages})
      }catch(err){
        this.messages[last].finish_reason = 'stop';
        this.messages[last].content = 'AI回复异常';
        // 对话已完毕
        inProgress().value = false;
        console.log(err)
      }
    }
  },
});

// 查询对话是否在进行中
export const inProgress = defineStore('inProgress', {
  state: ()=> ({
    value: false, // false表示对话完毕，true表示正在对话
  }),
  actions: {
    queryValue(){
      if(this.value){
        uni.showToast({
          icon: 'none',
          title: '当前业务正在进行中',
        })
        return true; // TODO 不明白为什么return true
      }
    }
  }
})