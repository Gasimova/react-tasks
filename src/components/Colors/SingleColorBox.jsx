import React, { useState } from 'react'

export const SingleColorBox = ({background, colors}) => {
    const [color, setColor]= useState(background)

    const randomColor=()=>{
        let random = colors[Math.floor(Math.random() * colors.length)]

        setColor(random)
    }
  return (
    <>
        <span role='button' onClick={randomColor} style={{backgroundColor:color}}></span>
    </>
  )
}
