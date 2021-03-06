let env = {
  dev: 'http://192.168.9.22:9093',
  build: 'http://192.168.9.22:9093'
}

export const getUrl = url => {
  return process.env.NODE_ENV == 'development' ? (env.dev+url) : (env.build+url)
}

export const getParams = parmas => {
  let str = ''
  for(let i in parmas){
    str += i+'='+ parmas[i]+'&'
  }
  return str.substring(0, str.length-1)
}
