import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { db } from '../../firebase'
import './Create.scss'
const Create = () => {
    const [productAdd,setProductAdd] = useState({
        product:'',
        stock:''
    })
    

    const productsCollection = collection(db,'products')
    const navigate = useNavigate()

   const handleChange = (e)=>{
         const{name,value}= e.target
         setProductAdd({...productAdd,[name]:value})
    }

    console.log(productAdd)
 
    const handleSumbit = async (e)=>{
         e.preventDefault()
         if(productAdd.product === '' || productAdd.stock === ''){
            alert('Ingresa los datos correctamente')
         }else{
           await addDoc(productsCollection,productAdd)
           swal({
            text: `Producto ${productAdd.product} agregado `,
            icon: "success",
          });
        navigate('/')
         }
        
    }


   

  return (
    <div className='container' >
        <div className='row'>
            <div className='col main-col text-center'>
            <h1 className='title'>Add Product</h1>
             <form action="" className='form' onSubmit={handleSumbit}>
                    <input type="text" className='form-control text-center' placeholder='Add Product' name='product' onChange={handleChange} />
                    <input type="number" className='form-control text-center' placeholder='Nro de stock' name='stock' onChange={handleChange} />
                    <ButtonGroup variant='outline' >
          <Button  type='sumbit' style={{backgroundColor:'#9fd3c7',color:'black',fontWeight:'600'}} >Add</Button>
          </ButtonGroup>
                </form>
            </div> 
        </div>
   </div>
  )
}

export default Create