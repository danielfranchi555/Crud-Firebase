import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../firebase'

const Edit = () => {

  const [editProduct,setEditProduct]=useState('')
  const navigate= useNavigate()
  const {id} = useParams()
 
  const handleSubmit = async (e) =>{
   e.preventDefault()
   const product = doc(db,'products',id)
   const data = {product:editProduct}
   await updateDoc(product,data)
   navigate('/')
  }

  const handleChange = (e)=>{
     const {value}= e.target
     setEditProduct(value)
  }

   const getProductById = async (id)=>{
      const product= await getDoc(doc(db,'products',id))
      console.log(product)
   }
  
   useEffect(()=>{
    getProductById()
   },[])

  return (
    <div className='container' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className='row'>
      <div className='col'>
         <h1>Edit</h1>
         <div>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" value={editProduct} onChange={handleChange} />
          </form>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Edit