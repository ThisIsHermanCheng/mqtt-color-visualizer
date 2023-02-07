import React from 'react'
import ColorSquare from './ColorSquare'

const DivLooper = ({ init, col, max, temperature, gradientArray }) => {
  return Array.from({ length: col }, (_, i) => (
    <ColorSquare
      key={init * col + i}
      distance={temperature[init * col + i]}
      col={col}
      backgroundColor={
        temperature[init * col + i] > max
          ? gradientArray.at(-1)
          : gradientArray[temperature[init * col + i]]
      }
    />
  ))
}

export default DivLooper
