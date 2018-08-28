let ws
const connect = (server = 'ws://10.0.0.53:9229') => {
  ws = new WebSocket(server)
  ws.onopen = () => {
    console.log('ws opened')
  }
  ws.onclose = () => {
    console.log('ws cloesd')
  }
}

const consoleOverride = (type) => {
  console[`_${type}`] = console[type]
  console[type] = (...args) => {
    if (ws && ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify({
        type,
        message: args
      }))
    }
    console[`_${type}`](...args)
  }
}

const redirect = () => {
  consoleOverride('debug')
  consoleOverride('error')
  consoleOverride('info')
  consoleOverride('log')
  consoleOverride('warn')
}

module.exports = {
  connect,

  redirect
}