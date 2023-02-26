import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../firebase'

const Edit = () => {
  const {id,value,stock} = useParams()
  console.log(value)
  const [editProduct,setEditProduct]=useState({
    product:value,
    stock:stock
  })


  
  const navigate= useNavigate()
  const getProductById = async (id)=>{
    const product  = await getDoc(doc(db,'products',id))
    console.log(id)
    console.log(product.id)
 }
 
  const handleChange = (e)=>{
    const {name,value}= e.target
    setEditProduct({...editProduct,[name]:value})
 }

const handleSumbit = async (e) =>{
   e.preventDefault()
   const product = doc(db,'products',id)
   const data = editProduct
   await updateDoc(product,data)
   navigate('/')
  }


  


  
  
   useEffect(()=>{
    getProductById()
   },[])

  return (
    <div className='container' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className='row'>
        <div className='col text-center'>
        <h1 style={{ fontSize: "35px" }}>Edit Product</h1>
         <form action=""  onSubmit={handleSumbit}>
                <input type="text" className='form-control' placeholder=' Product' value={editProduct.product} name='product' onChange={handleChange} />
                <input type="number" className='form-control' placeholder='Nro de stock' value={editProduct.stock} name='stock' onChange={handleChange} />
                <button type='submit'>sumbit</button>
            </form>
        </div> 
    </div>
</div>
  )
}

export default Edit