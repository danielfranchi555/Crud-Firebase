
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct'
import EditProduct from './components/EditProduct/EditProduct'
import Home from './components/Home/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/editProduct/:id/:name/:stock' element={<EditProduct/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
