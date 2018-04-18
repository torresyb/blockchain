/**
 * @author yangbin
 * @date 2018/4/18
 * @Description: 获取未确认/已确认订单数  未确认/已确认合同数
 */
import {initGetNum} from '../../api/controller/init'

// mutationsType
const GET_NUMBERS = 'GET_NUMBERS'

//state
const state = {
  orderNum: [],
  contractNum: []
}

// mutations
const mutations = {
  [GET_NUMBERS] (state, params) {
    state.orderNum = params.order
    state.contractNum = params.contract
  }
}

//action
const actions = {
  getNumberHandle({commit}, params) {
    initGetNum().then(rst => {
      commit(GET_NUMBERS, rst.data.resultList)
    })
  }
}

const getters = {
  getOrders(state) {
    return state.orderNum
  },
  getContracts(state) {
    return state.contractNum
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
