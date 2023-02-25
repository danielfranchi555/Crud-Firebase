import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { db } from '../../firebase'

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
            console.log(productAdd)
        navigate('/')
         }
        
    }


   

  return (
    <div className='container' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className='row'>
            <div className='col text-center'>
            <h1 style={{ fontSize: "35px" }}>Add Product</h1>
             <form action=""  onSubmit={handleSumbit}>
                    <input type="text" className='form-control' placeholder=' Product' name='product' onChange={handleChange} />
                    <input type="number" className='form-control' placeholder='Nro de stock' name='stock' onChange={handleChange} />
                    <button type='submit'>sumbit</button>
                </form>
            </div> 
        </div>
   </div>
  )
}

export default Create