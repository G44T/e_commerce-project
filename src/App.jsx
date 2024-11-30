import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer'

function App() {

  const productos = [
    { id: 1, nombre: 'TV' },
    { id: 2, nombre: 'Celulares' },
    { id: 3, nombre: 'PC' }
  ];

  return (
    <>
      <NavBar brandName="E-Gian" productos={productos}/>
      <ItemListContainer distance={50} />
    </>
  )
}

export default App
