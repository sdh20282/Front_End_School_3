import React from 'react'
import './three.css'

export default function Three(borderRadius) {
  console.log('three')
  console.log(borderRadius)
  return (
    <div className='three' style={borderRadius}>Three</div>
  )
}
