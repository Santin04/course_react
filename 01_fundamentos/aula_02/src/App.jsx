import { useState } from 'react'
import './App.css'
import FirstHooke from './components/FirstHooke'
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Aula 02</h1>
      <FirstHooke />
      <ListRender />
    </div>
  )
}

export default App
