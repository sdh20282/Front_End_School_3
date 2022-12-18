import React from 'react'
import './one.css'

export default function One(borderRadius) {
  console.log('one')
  console.log(borderRadius)
  return (
    <div className='one' style={borderRadius}>One</div>
  )
}
