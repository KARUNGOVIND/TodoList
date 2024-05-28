import React, { useState } from 'react'

export default function TodoInput(props) {
    const {handle}=props

    const[newto,setnewto]=useState('')
  return (
    <header>
        <input value={newto} onChange={(e)=>{
            setnewto(e.target.value)
            
        }}placeholder='Enter ...'></input>
        <button onClick={()=>
            {handle(newto)
            setnewto('')
            }}>Add</button>
    </header>
  )
}
