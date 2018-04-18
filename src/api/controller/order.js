/**
 * @author yangbin
 * @date 2018/4/17
 * @Description: 我的订单 接口
 */
import getUrl from '../env'
import http from '../http'

export function getOrderlist(url){
  let _url = getUrl(url)
  return http.get(_url)
}