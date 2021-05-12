import React from 'react'

export const TodoItme = ({todo, ondelet}) => {
    return (
        <div>
            <h1>todos</h1>
            <h4>{todo.title}</h4>
            <p>{todo.des}</p>
            <button className="btn btn-danger" onClick={()=>{ondelet(todo)}}>Delet</button>
        </div>
    )
}
