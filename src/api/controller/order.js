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
export function getOrderDetail(params){
  let str = getParams(params)
  let _url = getUrl('/order/get?'+str)
  return http.get(_url)
}

/**
 * 确认 未确认订单
 * @param data
 * @returns {*}
 */
export function confirmOrder(data) {
  let _url = getUrl('/order/confirm')
  return http.post(_url, data)
}

/**
 * 新建订单
 * @param data
 * @returns {*}
 */
export function createOrder(data){
  let _url = getUrl('/order/new')
  return http.post(_url, data)
}