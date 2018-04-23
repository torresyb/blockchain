/**
 * @author yangbin
 * @date 2018/4/17
 * @Description: 我的订单 接口
 */
import {getUrl} from '../env'
import http from '../http'

/**
 * 获取订单列表（已确认和未确认）
 * @returns {*}
 */
export function getOrderlist(){
  let _url = getUrl('/order/getlist')
  return http.get(_url)
}