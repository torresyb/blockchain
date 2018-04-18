/**
 * @author yangbin
 * @date 2018/4/18
 * @Description: 初始化数据获取
 */
import getUrl from '../env'
import http from '../http'

/**
 * 初始化获取 订单和合同数量
 * @returns {*}
 */
export function initGetNum () {
  let _url = getUrl('/index/getlistnumber')
  return http.get(_url)
}