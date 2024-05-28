import React from 'react'

export default function Todocard(props) {
    const {children,deletetodo,index}=props
  return (
    <div>
        <li className='todoItem' >
            {children}<div className='actionsContainer'>

        <button onClick={()=>{deletetodo(index)}}>
            <i class="fa-solid fa-trash"></i>
        </button>
    
        </div>
    </li>
    
    </div>
  )
}
