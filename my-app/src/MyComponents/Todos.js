import React from 'react'
import { TodoItme } from "./TodoItme";
export const Todos = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center'>Todos</h1>
            {props.todos.map((todo) => {

                return <TodoItme todo={todo} key={todo.sno} ondelet={props.ondelet} />
            })}
        </div>
    )
}
