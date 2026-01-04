import { useState } from "react"

export const TodoList = () => {
    const [todos, setTodos] = useState([
            {"id":1, "task": "Learn React"},
            {"id":2, "task": "Build Apps"},
            {"id":3, "task": "Deploy"}
])

const handleDelete = (id: number) => {
    setTodos(todos => todos.filter((item) => item.id !== id))
}

const handleAddTodo = () => {
    const newTodo = {"id":Date.now(), "task": "get payment"}
    setTodos(todos => [...todos, newTodo]) 
}
    
    return (    
        <div>
            <ul>
                {todos.map((item) => {
                    return <div key={item.id}>
                        <li>{item.task}</li>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                })}
                <button onClick={handleAddTodo}>Add new Todo</button>
            </ul>
        </div>
    )
}