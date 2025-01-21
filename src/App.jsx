import { BrowserRouter, Routes, Route } from 'react-router'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import Page404 from './components/Page404'
import Cart from './components/Cart'


function App() {

  return (
    <BrowserRouter>
        <NavBar brandName="E-Gian" />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />          
          <Route path='*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
