import { useState } from "react"

export const TodoList = () => {
    const [todos, setTodos] = useState([
            {"id":1, "task": "Learn React", "done": false},
            {"id":2, "task": "Build Apps", "done": false},
            {"id":3, "task": "Deploy", "done": false}
])

const handleDelete = (id: number) => {
    setTodos(todos => todos.filter((item) => item.id !== id))
}

const handleAddTodo = () => {
    const newTodo = {"id":Date.now(), "task": "get payment", "done": false}
    setTodos(todos => [...todos, newTodo]) 
}

const toggleDone = (id) => {
    setTodos(todos.map((todo) => {
        if(todo.id === id) {
            return {...todo, done: !todo.done}
        }
        return todo;
    }))
}
    
    return (    
        <div>
            <ul>
                {todos.map((item) => {
                    return <div key={item.id}>
                        <li style={{textDecoration: item.done ? "line-through" : "none"}}>{item.task}</li>
                        <button onClick={() => toggleDone(item.id)}>{item.done ? "Undo" : "Done"}</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                })}
                <button onClick={handleAddTodo}>Add new Todo</button>
            </ul>
        </div>
    )
}