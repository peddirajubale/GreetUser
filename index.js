import React from 'react'
import { useState } from 'react'
import './index.css'

export default function User() {
    const [name, setName] = useState("")
    const onChangeName =(event)=>setName(event.target.value)
  return (
    <div className='container'>
      <input type='text' placeholder='Enter text...' value={name} onChange={onChangeName}/>
      <br/>
      <h>User {name}</h>
    </div>
  )
}
