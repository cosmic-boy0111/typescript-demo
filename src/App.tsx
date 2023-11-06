
import React, { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import Container from './components/Container'
import InputField from './components/InputField'
import { Todo } from './model'

const App : React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = () => {
    if(todo){
      setTodos((pre)=> [...pre, {
        id : Date.now(),
        todo : todo,
        isDone : false
      }])

      setTodo('')
    }
  }

  

  return (
    <div className='App'>
      <AppHeader />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Container todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App