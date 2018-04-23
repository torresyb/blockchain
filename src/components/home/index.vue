<template>
  <div class="empty">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  import {getOrderlist} from '../../api/controller/order'

  export default {
    name: 'index',
    data () {
      return {
        msg: ' :) 选择要查看的项目(:'
      }
    },
    mounted() {
      // getOrderlist().then(rst => {
      //   console.log('rst:', rst)
      // })
    }
  }
</script>

<style scoped>
.empty{
  text-align: center;
  position: relative;
}
.empty h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-weight: normal;
  font-size: 18px;
}
</style>
