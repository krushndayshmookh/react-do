import { useState } from 'react'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel'
import { Card } from 'primereact/card'

import TodoItem from './TodoItem'

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
      <Card className="p-6 rounded-xl max-w-md mx-auto bg-slate-200 mt-8">
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <FloatLabel>
              <InputText
                type="text"
                placeholder="Add todo"
                id="todoInput"
                onChange={(e) => {
                  setInputText(e.target.value)
                }}
                value={inputText}
                className="w-full"
              />
              <label htmlFor="todoInput" className="text-gray-500">
                New Todo...
              </label>
            </FloatLabel>
            <Button
              className="w-full"
              onClick={() => {
                addTodo({
                  text: inputText,
                  isDone: false,
                })
                setInputText('')
              }}>
              Add
            </Button>

            <ul className="w-full mt-4">
              {todos.map((todo, index) => (
                <TodoItem
                  key={index}
                  todo={todo}
                  index={index}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </>
  )
}

export default Todo
