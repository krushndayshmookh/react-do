import { useState } from 'react'

// import './Todo.css'

function Todo() {
  const [todos, setTodos] = useState([])

  const username = 'muffincat'

  const addTodo = (todo) => {
    todo.username = username
    setTodos([...todos, todo])
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isDone = !newTodos[index].isDone
    setTodos(newTodos)
  }

  const [inputText, setInputText] = useState('')

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add todo"
          id="todoInput"
          onChange={(e) => {
            setInputText(e.target.value)
          }}
          value={inputText}
        />
        <button
          onClick={() => {
            addTodo({
              text: inputText,
              isDone: false,
            })
            setInputText('')
          }}>
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleTodo(index)}
            />
            {todo.text} - {todo.username}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
