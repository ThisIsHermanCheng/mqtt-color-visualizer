import { useState, useEffect } from 'react'
import SquareDisplay from './components/SquareGroup'
import mqtt from './services/mqtt'
import Form from './components/Form'
import RandomBtn from './components/RandomBtn'

function useLocalStorage(key) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(key)) ?? {
      col: 8,
      row: 8,
      max: 1000,
      fromColor: '#E9446A',
      toColor: '#3F2CAF',
      broker: 'ws://broker.emqx.io:8083/mqtt',
      topic: 'mqtt-color',
      mqttMessageKey: '8x8',
    }
  )
  function setStorage(item) {
    localStorage.setItem(key, JSON.stringify(item))
    setState(item)
  }
  return [state, setStorage]
}

const App = () => {
  const [settings, setSettings] = useLocalStorage('settings')
  const [temperature, setTemperature] = useState(
    Array.from(
      { length: settings.max },
      (_, i) => parseInt(settings.max / (settings.col * settings.row)) * i
    )
  )

  const handleSettingsChange = (newSwttings) => {
    setSettings(newSwttings)
    setTemperature(
      Array.from(
        { length: newSwttings.max },
        (_, i) =>
          parseInt(newSwttings.max / (newSwttings.col * newSwttings.row)) * i
      )
    )
  }

  useEffect(() => {
    mqtt.setClient({ broker: settings.broker, topic: settings.topic })
    mqtt.connect()
    mqtt.getClient().on('message', function (_, message) {
      const raw = JSON.parse(message.toString())
      const data = raw[settings.mqttMessageKey]
      data.map((item) => parseInt(item, 10))
      setTemperature(data)
    })
  }, [settings.broker, settings.topic, settings.mqttMessageKey])

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold">Mqtt Color Visualizer</div>
        <div className="mb-4">
          <Form setSettings={handleSettingsChange} settings={settings}></Form>
        </div>
        <div>
          <SquareDisplay
            temperature={temperature}
            fromColor={settings.fromColor}
            toColor={settings.toColor}
            max={settings.max}
            row={settings.row}
            col={settings.col}
          />
        </div>
        <RandomBtn
          settings={settings}
          setTemperature={setTemperature}
        ></RandomBtn>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
export default App
