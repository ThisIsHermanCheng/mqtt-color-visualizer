import React from 'react'
import Gradient from 'javascript-color-gradient'
import DivLooper from './SquareLooper'

const SquareDisplay = ({ row, col, temperature, max, fromColor, toColor }) => {
  const gradientArray = new Gradient()
    .setColorGradient(fromColor, toColor)
    .setMidpoint(parseInt(max) + 1)
    .getColors()
  return (
    <div className="m-auto flex flex-col p-0 space-x-0 space-y-0">
      {Array.from({ length: row }, (_, i) => (
        <div className="leading-3" key={i}>
          <DivLooper
            init={i}
            col={col}
            temperature={temperature}
            gradientArray={gradientArray}
            max={max}
          ></DivLooper>
        </div>
      ))}
    </div>
  )
}

export default SquareDisplay
