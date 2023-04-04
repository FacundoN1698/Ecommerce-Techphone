
import './App.css'
import ItemList from './components/ItemList/ItemList'
import Navbar from './components/Navbar/Navbar'


function App() {

  let saludo = "Hola Buenos Días"
  let edad = 26

  return <div className='App'>
    <Navbar color="blue" />
    <ItemList saludo={saludo}  edad={edad} />
  </div>
}

export default App
