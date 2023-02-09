import { useState } from 'react'

function Form({ setSettings, settings }) {
  const [formData, setFormData] = useState({ ...settings })

  const onChange = (e) => {
    ['row', 'col', 'max'].includes(e.target.name)
      ? setFormData({
          ...formData,
          [e.target.name]: parseInt(e.target.value) || '',
        })
      : setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sumbitHandler = (event) => {
    event.preventDefault()
    setSettings(formData)
  }

  return (
    <div className="md:px-44 lg:px-96">
      <form onSubmit={sumbitHandler}>
        <div className="flex flex-wrap justify-center space-x-5 space-y-3">
          <div className="space-y-3">
            <label className="mx-4">Col:</label>
            <input
              type="text"
              value={formData.col}
              name="col"
              onChange={onChange}
              maxLength="3"
              size="3"
            ></input>
          </div>
          <div className="">
            <label className="mx-4">Row:</label>
            <input
              type="text"
              value={formData.row}
              name="row"
              onChange={onChange}
              maxLength="3"
              size="3"
            ></input>
          </div>
          <div className="">
            <label className="mx-4">Max:</label>
            <input
              type="text"
              value={formData.max}
              name="max"
              onChange={onChange}
              maxLength="5"
              size="5"
            ></input>
          </div>
          <div className="">
            <label className="mx-4">From color:</label>
            <input
              type="text"
              value={formData.fromColor}
              name="fromColor"
              onChange={onChange}
              maxLength="7"
              size="7"
            ></input>
          </div>
          <div className="">
            <label className="mx-4">To color:</label>
            <input
              type="text"
              value={formData.toColor}
              name="toColor"
              onChange={onChange}
              maxLength="7"
              size="7"
            ></input>
          </div>
          <div className="">
            <label className="mx-4">Mqtt broker:</label>
            <input
              type="text"
              value={formData.broker}
              name="broker"
              onChange={onChange}
              size="28"
            ></input>
          </div>
          <div className="">
            <label className="mx-4">MQTT Topic:</label>
            <input
              type="text"
              value={formData.topic}
              name="topic"
              onChange={onChange}
              size="15"
            ></input>
          </div>
          <div className="">
            <label className="mx-4">MQTT Message key:</label>
            <input
              type="text"
              value={formData.mqttMessageKey}
              name="mqttMessageKey"
              onChange={onChange}
              maxLength="10"
              size="10"
            ></input>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="">
            <button type="submit" className="bg-blue-800 px-12">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
