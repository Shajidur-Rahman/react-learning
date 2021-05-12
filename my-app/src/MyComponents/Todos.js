import React from 'react'
import TodoItems from "./TodoItmes";
export default function Todos(props) {
    return (
        <div className = 'container'>
            <h3>to dos list</h3>
            <TodoItems Todo={props.Todos}/>
        </div>
    )
}
