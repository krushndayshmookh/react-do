import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'

import 'primeicons/primeicons.css'

function TodoItem({ todo, index, removeTodo, toggleTodo }) {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
      <Checkbox checked={todo.isDone} onChange={() => toggleTodo(index)} />
      <div>
        <h3
          className={
            todo.isDone
              ? 'line-through text-xl font-semibold'
              : 'text-xl font-semibold'
          }
        >
          {todo.text}
        </h3>
        <p className="text-gray-500">{`Created by: ${todo.username}`}</p>
      </div>

      <Button
        icon="pi pi-times"
        className="p-button-rounded p-button-danger"
        onClick={() => removeTodo(index)}
      />
    </div>
  )
}

export default TodoItem
