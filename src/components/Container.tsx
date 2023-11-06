import React from 'react'
import { Plus } from 'lucide-react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Container : React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div style={{
        width : '450px',
        display:'flex',
        padding : '1rem',
        backgroundColor:'white',
        color : 'black',
        flexDirection : 'column',
    }} > 
        <div style={{
            padding : '1.5rem 2rem',
            color : '#AFB4BE',
            height : '40vh',
            overflowY : 'scroll',
            fontSize:'17px'
        }} >
            {todos.length === 0 ? <div>Enter your todos</div> : 
                todos.map((todo : Todo) => {
                    return <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                })
            }
        </div>
    </div>
  )
}

export default Container