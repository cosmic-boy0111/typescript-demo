import React, { useState } from 'react'
import { Todo } from '../model'
import { ArrowUpToLine, Check, Delete, Edit, Hash, Pencil, Trash, X } from 'lucide-react'

interface Props {
  todo: Todo;
  todos : Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos , setTodos }) => {

  const [show, setShow] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<Todo>(todo)

  const updateToto = () => {
    console.log('under update');
    
    const update : Todo[] =  todos.map((todo) => (todo.id === editTodo.id ? editTodo : todo))
    setTodos(update)

    setIsEdit(false)
  }

  const deleteTodo = () => {
    setTodos(todos.filter((t)=> t.id !== todo.id))
  }

  const markDone = () => {
    const update : Todo[] =  todos.map((t) => (t.id === todo.id ? {...t, isDone : !t.isDone} : t))
    setTodos(update)
  }

  return (
    <div 
      key={todo.id} 
      onMouseEnter={() => !isEdit && setShow(true)} 
      onMouseLeave={() => !isEdit && setShow(false)} 
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
      }} 
    >
      <Hash size={'17px'} style={{
        color: todo.isDone ? '#A879E2' : '',
        alignSelf: 'flex-start',
        marginTop: '.25rem'
      }} />
      <div style={{
        marginLeft: '.5rem',
        width: show ? '70%' : '90%',
        wordWrap: 'break-word',
        fontSize: '17px'
      }} >
        {isEdit ?
          <input
            type="text"
            value={editTodo.todo}
            onChange={(e) => setEditTodo({ ...editTodo, todo: e.target.value })}
            style={{
              border: 'none',
              outline: 'none',
              borderBottom :'1px solid #A879E2',
              // padding:'.5rem 1rem',
              color: '#AFB4BE',
              width: '100%',
              // borderRadius:'20px',
              fontSize: '17px',
              padding: 'none'
            }}
          />
          : todo.isDone ? <s>{todo.todo}</s> :  <span>{todo.todo}</span>}
        {/* {todo.todo} */}
      </div>
      
      {show &&
        <div style={{
          width: '20%',
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: '10',
          backgroundColor: 'white',
          marginLeft: '.5rem'
        }} >
          
          <div onClick={() => {
            setIsEdit(!isEdit)
            setShow(true);
          }} >
            {isEdit ? <X size={'17px'} style={{
                cursor: 'pointer',
                color: '#e57373'
              }} /> :  
              <Pencil size={'17px'} style={{
                cursor: 'pointer',
                color: '#4fc3f7'
              }} />
            }
          </div>
          { !isEdit && 
            <div onClick={deleteTodo} >
              <Trash size={'17px'} style={{
                cursor: 'pointer',
                color: '#e57373'
              }} />
            </div>
          }
          {!isEdit ?
          <div>
            <Check onClick={markDone} size={'17px'} style={{
              cursor: 'pointer',
              color: '#81c784'
            }} />
          </div> :
          <div onClick={updateToto}>
            <ArrowUpToLine size={'17px'} style={{
              cursor: 'pointer',
              color: '#81c784'
            }} />
          </div> 
          }
        </div>
      }
    </div>
  )
}

export default SingleTodo