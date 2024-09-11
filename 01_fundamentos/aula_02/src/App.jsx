import './App.css'
import FirstHooke from './components/FirstHooke'
import ListRender from './components/ListRender'
import Conditional from './components/conditional'
import Props from './components/Props'
import Props02 from './components/Props02'

function App() {

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Red', km: 0},
    {id: 2, brand: 'KIA', color: 'White', km: 10000},
    {id: 3, brand: 'Renault', color: 'Gray', km: 5000},
  ]

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
      {cars.map((car) => (
        <Props02 brand={car.brand} color={car.color} km={car.km} />
      ))}
    </div>
  )
}

export default App
