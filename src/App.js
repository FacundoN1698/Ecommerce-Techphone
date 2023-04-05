
import './App.css'
import ItemListContainer from './components/ItemList/ItemListContainer'
import Navbar from './components/Navbar/Navbar'


function App() {

  let saludo = "Hola Buenos Días"

  return <div className='App'>
    <Navbar color="blue" />
    <ItemListContainer saludo={saludo} />
  </div>
}

export default App
