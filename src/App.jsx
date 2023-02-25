import './App.css'
import Container from './components/Container/Container'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './components/Edit/Edit'
import Create from './components/CreateUser/Create'
function App() {

  return (
    <ChakraProvider>
          <div style={{display:'flex',justifyContent:'center'}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </ChakraProvider>


   
    
    
  )
}

export default App
