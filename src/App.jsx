import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App (){

const [todos,setTodos]=useState([]);

function handle(newtodos){
  const newtotlist=[...todos,newtodos];
  setTodos(newtotlist)
}

function deletetodo(index){
  const newTodo =todos.filter((todo,todoindex)=>{
    return index!=todoindex
  })
  setTodos(newTodo)
}

  return (
    <main>   
    <TodoInput handle={handle}/>
    <div className='summa'></div>
    <TodoList deletetodo={deletetodo} todos={todos}/>
    
    </main>
 
  );
}

export default App