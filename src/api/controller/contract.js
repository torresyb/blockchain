/**
 * @author york	
 * @date 2018/4/17
 * @Description: 合同 接口
 */
import getUrl from '../env'
import http from '../http'

/**
 * 获取合同列表（已确认和未确认）
 * @returns {*}
 */
export function getContractlist(){
  let _url = getUrl('/contract/getlist')
  return http.get(_url)
}