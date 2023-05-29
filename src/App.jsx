import { useState } from "react"
import { useEffect } from "react"

const tarefas = [
  { id: "1", title: "primeira" },
  { id: "2", title: "segunda" },
  { id: "3", title: "terceira" }
]

export default function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function queryData() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(res => setTarefas(res))
    }

    queryData()
  }, [])

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return <li key={tarefa.id}>{tarefa.title} {tarefa.completed ? "- Task completed" : null}</li>
        })}
      </ol>
    </div>
      
  )
}
