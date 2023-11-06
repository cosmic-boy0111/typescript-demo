import { Plus } from 'lucide-react'
import React, {useRef} from 'react'

interface Props {
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd : () => void;
}

// const InputField = ( {todo , setTodo} : Props) => {
// const InputField = ( props : Props) => {
const InputField : React.FC<Props> = ( {todo , setTodo, handleAdd} ) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div style={{
        width : '450px',
        backgroundColor : 'white',
        padding : '1rem',
        display : 'flex',
        justifyContent : 'space-between'
    }} >
        <input
            ref={inputRef}
            type="text"
            value={todo}
            onChange={(e)=> setTodo(e.target.value) }
            placeholder='Enter your task'
            style={{
                border : '1px solid #AFB4BE',
                outline : 'none',
                padding:'.5rem 1rem',
                color : '#AFB4BE',
                width : '70%',
                borderRadius:'20px',
                fontSize:'17px'
            }}
        />
        <button onClick={handleAdd} style={{
            border : 'none',
            outline : 'none',
            backgroundColor : '#A879E2',
            borderRadius:'30px',
            padding :'.5rem',
            color : 'white',
            fontSize:'16px',
            display:'flex',
            alignItems : 'center',
            justifyContent: 'center',
            cursor : 'pointer',
        }} >
            <Plus />
        </button>
    </div>
  )
}

export default InputField