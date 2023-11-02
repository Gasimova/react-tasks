import React from 'react'

export const Img = ({src, alt}) => {
  return (
    <div>
        <img src={src} alt={alt} style={{width:100, height:100}} />
    </div>
  )
}
