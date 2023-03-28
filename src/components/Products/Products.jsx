import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import { deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase'

const Products = ({results}) => {
  
  const toast = useToast()

    const deleteProduct = async (id)=>{
        await deleteDoc(doc(db, "products", id));
        toast({
          title: `Product removed`,
          status: 'error',
          isClosable: true,
        })
     }


  return (
    <div>
  <TableContainer w='auto' >
  <Table size='lg'   >
    <Thead>
      <Tr>
        <Th>Products</Th>
        <Th>Stock</Th>
        <Th>Functions</Th>
      </Tr>
    </Thead>
    <Tbody>
     {  results.map((item)=>(
          <Tr key={item.id}>
        <Td>{item.name.toUpperCase()}</Td>
        <Td>{item.stock}</Td>
        <Td><Button colorScheme='red' variant='outline' onClick={()=>deleteProduct(item.id)}>Delete</Button> <Link to={`editProduct/${item.id}/${item.name}/${item.stock}`}> <Button colorScheme='teal' variant='outline'>Edit</Button></Link> </Td>
      </Tr>
          ))
    }
    </Tbody>

  </Table>
</TableContainer>
    </div>
  )
}

export default Products