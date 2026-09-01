import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    console.log(todos);
    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div>
            <h1>Todo List</h1>

            {todos.map((todo) => (
                <div key={todo.id}>
                    <p>
                        {todo.id}. {todo.title} <br /> Status := {todo.completed?"Completed":"Not Completed"}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Todo