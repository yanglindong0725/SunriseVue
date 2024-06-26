import type { AxiosRequestConfig } from 'axios'
import { request } from '@/utils/request'

export default {
  // 获取对话列表
  getChatListApi: (data: any) =>
    request.get('/api/conversations', { noNeedTip: true, params: data } as AxiosRequestConfig),

  // 发送验证码
  sendCodeApi: (data: any) =>
    request.post('/api/verifications', data, { noNeedTip: true, noNeedToken: true } as AxiosRequestConfig),

  // 更新对话
  updateChatApi: (id: number, data: any) =>
    request.put(`/api/conversations/${id}`, data, { noNeedTip: true } as AxiosRequestConfig),
}
