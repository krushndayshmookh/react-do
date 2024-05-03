import { useState } from 'react'

function Todo() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    //
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    //
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos]
    //
    setTodos(newTodos)
  }

  const fetchTodos = () => {}

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
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
