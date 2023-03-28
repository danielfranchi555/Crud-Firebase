import { Box, Button, Center, Container, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import {db} from '../../firebase'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { PhoneIcon, Search2Icon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import Products from '../Products/Products'



const Home = () => {
  const [products , setProducts] = useState([])
  const [loading , setLoading] = useState(true)
  const [prodFilter , setProdFilter] = useState('')
  
 

 const getProducts = ()=>{
  onSnapshot(collection(db, "products"), (doc) => {
    setProducts(doc.docs.map((item)=>({...item.data(),id:item.id})))
    setLoading(false)
 })
 }


 useEffect(()=>{
  getProducts()
 },[])



 const handleChange = (e)=>{
  const {value}=e.target
   setProdFilter(value)
 }

 const results = !prodFilter ? products : products.filter((dato)=> dato.name.toLowerCase().includes(prodFilter.toLocaleLowerCase()))

  return (
      <>
      {loading ?
         <Center h='300px' m='auto'>
          <Spinner size='xl' />
         </Center> 
        :
       <Container  maxW='100%'>
              <Stack bg='#ececec' border='solid 1px #233142' borderRadius='5px 5px 0px 0px' direction='row' justifyContent='space-between' p={2}  w='100%' >
         <Link to={'/addProduct'}>
         <Button colorScheme='blue' color='white'  >Add product</Button>
          </Link>
          <Box h='50px' w={{base:'190px',md:'250px'}} >
                <InputGroup  w={{base:'auto',md:'300px'}} h='40px'>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon color='black' />}
    />
    <Input w='auto' h='40x' bg='white'  onChange={handleChange} value={prodFilter} variant='unstyled' color='black'  placeholder='search'  />
  </InputGroup>
          </Box>
      
      </Stack>
      
          <Box border='solid 1px gray' w='100%'>
          <Products results={results}/>
        </Box>       
        </Container>

      }
       </> 
  )
}

export default Home