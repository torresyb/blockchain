let env = {
  dev: 'http://localhost:9093',
  build: '/'
}

const getUrl = url => {
  return process.env.NODE_ENV == 'development' ? (env.dev+url) : (env.build+url)
}

export default getUrl