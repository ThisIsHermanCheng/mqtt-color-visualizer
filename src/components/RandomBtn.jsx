import { useState, useEffect } from 'react'

function RandomBtn({ settings, setTemperature }) {
  const [randomEnable, setRandomEnable] = useState(false)

  useEffect(() => {
    if (!randomEnable) return
    const timer = setInterval(() => {
      setTemperature(
        Array.from({ length: settings.col * settings.row }, () =>
          Math.floor(Math.random() * settings.max)
        )
      )
    }, 200)
    return () => clearInterval(timer)
  }, [settings.row, settings.col, settings.max, randomEnable])

  return (
    <>
      {randomEnable ? (
        <button
          className="bg-orange-800 px-12 mt-4"
          onClick={() => setRandomEnable(false)}
        >
          Stop Random
        </button>
      ) : (
        <button
          className="bg-blue-800 px-12 mt-4"
          onClick={() => setRandomEnable(true)}
        >
          Random
        </button>
      )}
    </>
  )
}

export default RandomBtn
