import { Button, FormLabel, Input, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, {  useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { db } from '../../firebase'
import { FormControl } from 'react-bootstrap'

const EditProduct = () => {

    const {id,name,stock} = useParams()

  const newData = {
    name:name,
    stock:stock
  }
  const [productEdit,setProductEdit] = useState(newData)

  const toast = useToast()
  const toastIdRef = React.useRef()

   const navigate = useNavigate()
  


  const handleChange = (e)=>{
    const {name,value}=  e.target
    setProductEdit({...productEdit,[name]:value})
  }
  
   const handleSubmit = async (e)=>{
   e.preventDefault()
   const product = doc(db, "products", id);
   const data = productEdit;
   await updateDoc(product, data);
   toastIdRef.current = toast({ description: 'Updated product' })
   navigate("/");
  } 
  


  return (
    <Stack h='500px'  justify='center' align='center'>
      <Stack  boxShadow='dark-lg' p='6' rounded='lg' bg='white'>
      <form style={{borderRadius:'20px', display:'flex',flexDirection:'column',gap:'20px',padding:'30px',width:'500px',height:'300px',justifyContent:'center',alignItems:'center'}}  onSubmit={handleSubmit} >
      <Stack><Text fontSize='2xl'>Edit product</Text></Stack>
      <Input padding='20px' w='400px'  onChange={handleChange} name='name' value={productEdit.name}   variant='filled' placeholder='EditName' />
      <Input padding='20px' w='400px' onChange={handleChange} name='stock' value={productEdit.stock} variant='filled' placeholder='Edit Stock' />
       <Button size='lg' type='submit'>submit</Button>
      </form>
      </Stack>
    
         

   
    </Stack>
  )
}

export default EditProduct