import React from 'react'

const AppHeader : React.FC = () => {
  return (
    <div style={{
        width : '450px',
        backgroundColor : '#A879E2',
        padding : '1rem',
        display : 'flex',
        justifyContent : 'center',
        marginBottom : '1rem'
    }} >
        <h2 style={{
            color : 'white',
            margin : '0',
            padding : '0'
        }} >
            Taskify
        </h2>
    </div>
  )
}

export default AppHeader