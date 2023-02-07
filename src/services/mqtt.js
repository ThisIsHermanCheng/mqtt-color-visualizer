import * as mqtt from 'mqtt/dist/mqtt.min'

let myclient = null
let broker = 'ws://192.168.8.104:8083/mqtt'
let topic = '10008/8101/1/vl53l5'

const setClient = ({ broker: newBrokerUrl, topic: newTopic }) => {
  broker = newBrokerUrl
  topic = newTopic
}

const getClientInfo = () => ({
  broker,
  topic,
})

const getClient = () => myclient

const connect = () => {
  if (myclient) myclient.end()
  return new Promise((resolve, reject) => {
    myclient = mqtt.connect(broker)
    myclient.on('connect', function () {
      myclient.subscribe(topic, function (err) {
        if (err) return reject(err)
        resolve()
      })
    })
  })
}

export default {
  setClient,
  getClientInfo,
  getClient,
  connect,
}
