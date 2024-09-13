import { useState } from 'react'
import MyComponent from './components/MyComponent'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
      {/* Mostrando um exemplo de como colocar css sem o arquivo css */}
      <p style={{ color: 'blue' }}>Css diretamente do HTML</p>
    </>
  )
}

export default App
