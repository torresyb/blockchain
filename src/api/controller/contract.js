/**
 * @author yangbin
 * @date 2018/4/17
 * @Description: 我的订单 接口
 */
import {getUrl, getParams} from '../env'
import http from '../http'

/**
 * 根据 id 获取订单详情
 * @returns {*}
 */
export function getContractDetail(params){
  let str = getParams(params)
  let _url = getUrl('/contract/get?'+str)
  return http.get(_url)
}

/**
 * 新建合同
 * @param data
 * @returns {*}
 */
export function createContract(data){
  let _url = getUrl('/contract/new')
  return http.post(_url, data)
}

/**
 * 确认合同
 * @returns {*}
 */
export function confirmContract(data) {
  let _url = getUrl('/contract/confirm')
  return http.post(_url, data)
}