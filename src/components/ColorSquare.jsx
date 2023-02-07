import React from 'react'

const ColorSquare = ({ distance, backgroundColor, col }) => {
  return (
    <div
      className={`${
        col >= 30
          ? col >= 60
            ? col >= 80
              ? 'w-4 h-4'
              : 'w-5 h-5'
            : 'w-8 h-8'
          : 'w-10 h-10'
      }  inline-block relative`}
      style={{ backgroundColor }}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          col >= 30 ? (col >= 60 ? 'hidden' : 'text-xs') : 'text-md'
        } `}
      >
        {distance}
      </div>
    </div>
  )
}

export default ColorSquare
