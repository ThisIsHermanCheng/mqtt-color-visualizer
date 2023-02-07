import { useState, useEffect } from 'react'
import SquareDisplay from './components/SquareGroup'
import mqtt from './services/mqtt'
import Form from './components/Form'
import RandomBtn from './components/RandomBtn'

const App = () => {
  const [settings, setSettings] = useState({
    col: 8,
    row: 8,
    max: 1000,
    fromColor: '#E9446A',
    toColor: '#3F2CAF',
    broker: 'ws://192.168.8.104:8083/mqtt',
    topic: 'test',
    mqttMessageKey: '8x8',
  })

  const [temperature, setTemperature] = useState(
    Array.from(
      { length: settings.max },
      (_, i) => parseInt(settings.max / (settings.col * settings.row)) * i
    )
  )

  useEffect(() => {
    setTemperature(
      Array.from(
        { length: settings.max },
        (_, i) => parseInt(settings.max / (settings.col * settings.row)) * i
      )
    )
  }, [settings])

  useEffect(() => {
    const settingInLocal = window.localStorage.getItem('settings')
    if (settingInLocal) {
      setSettings(JSON.parse(settingInLocal))
    }
  }, [])

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
        <div className="mb-4">
          <Form
            setSettings={setSettings}
            settings={settings}
            key={settings.col}
          ></Form>
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
      </div>
    </div>
  )
}
export default App
