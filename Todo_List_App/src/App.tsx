import { useState, type SubmitEvent } from 'react'

type Todo = {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodo(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const taskText = task.trim()

    if (taskText === '') {
      return
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: taskText,
      completed: false,
    }

    setTodos([...todos, newTodo])
    setTask('')
  }

  function toggleTodo(id: number) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  function deleteTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-800">
      <div className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-md sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-indigo-700">
          Todo List
        </h1>
        <p className="mb-6 text-center text-slate-500">
          Add a task and check it off when it is done.
        </p>

        <form className="mb-6 flex gap-2" onSubmit={addTodo}>
          <label className="sr-only" htmlFor="todo-input">
            New task
          </label>
          <input
            id="todo-input"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
          >
            Add
          </button>
        </form>

        {todos.length === 0 ? (
          <p className="rounded-md bg-slate-50 p-4 text-center text-slate-500">
            Your tasks will appear here.
          </p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center gap-3 rounded-md border border-slate-200 p-3"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  aria-label={`Mark ${todo.text} as ${todo.completed ? 'not done' : 'done'}`}
                  className="size-4 accent-indigo-600"
                />
                <span
                  className={`min-w-0 flex-1 break-words ${
                    todo.completed ? 'text-slate-400 line-through' : ''
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  type="button"
                  onClick={() => deleteTodo(todo.id)}
                  className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50"
                  aria-label={`Delete ${todo.text}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        {todos.length > 0 && (
          <p className="mt-5 text-right text-sm text-slate-500">
            {todos.filter((todo) => !todo.completed).length} task(s) left
          </p>
        )}
      </div>
    </main>
  )
}

export default App
