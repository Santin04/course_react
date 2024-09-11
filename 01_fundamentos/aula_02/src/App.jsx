import { useState } from 'react'
import './App.css'
import FirstHooke from './components/FirstHooke'
import ListRender from './components/ListRender'
import Conditional from './components/conditional'
import Props from './components/Props'
import Props02 from './components/Props02'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Aula 02</h1>
      <FirstHooke />
      <hr />
      <ListRender />
      <hr />
      <Conditional />
      <hr />
      <Props name="Mateus"/>
      <hr />
      <Props02 brand="VW" km={10000} color="Azul"/>
    </div>
  )
}

export default App
