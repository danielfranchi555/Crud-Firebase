import { Box, Button, Center, Input, Stack, Stat, Text, useToast } from '@chakra-ui/react'
import {db} from '../../firebase'
import {addDoc, collection} from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const statuses = ['success', 'error', 'warning', 'info']

    const initialState = {
        name:'',
        stock:''
    }
  const [product,setProduct]=useState(initialState)
  const productsCollection = collection(db,'products')
  const navigate =  useNavigate()
  const toast = useToast()


  const handleChange = (e)=>{
     const {value ,name} = e.target
     setProduct({...product,[name]:value})
 }

  const handleSubmit = (e)=>{
   e.preventDefault()
   if(!product.name || !product.stock){
    toast({
      title: `Please complete the fields`,
      status: 'warning',
      isClosable: true,
    })
   }else{
    addDoc(productsCollection,product)
    toast({
      title: `${product.name.toUpperCase()} Added`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
   navigate('/')
   }
   
  }

  return (
        <Stack  h='500px'  justify='center' align='center'>
          <Stack boxShadow='dark-lg' p='6' rounded='lg' bg='white' >
            <form onSubmit={handleSubmit} style={{borderRadius:'20px', display:'flex',flexDirection:'column',gap:'20px',padding:'30px',width:'500px',height:'300px',justifyContent:'center',alignItems:'center'}} >
            <Stack><Text fontSize='2xl'>Add product</Text></Stack>
              <Input padding='20px' onChange={handleChange} name='name' w='400px' variant='filled' placeholder='Add product' />
              <Input padding='20px' onChange={handleChange} name='stock'w='400px' type='number' variant='filled' placeholder='Add stock' />
              <Button size='lg'  type='submit'>submit</Button>
            </form>
          </Stack>
            
        
        </Stack>
  )
}

export default AddProduct