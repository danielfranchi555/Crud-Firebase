import React, { useEffect, useState } from "react";
import {collection,deleteDoc,doc,getDocs,onSnapshot} from "firebase/firestore";
import "./Main.scss";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import {Button,ButtonGroup,TableContainer,Thead, Tr,Th,Table,Tbody,Td,Spinner, Tfoot } from "@chakra-ui/react";



const Container = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const productsCollection = collection(db, "products");



  const getProducts = async () => {
    onSnapshot(  (productsCollection),(prod)=>{
      setProducts(prod.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       setLoading(false) 
    })
      

  };


  const deleteProduct = async (id) => {
    deleteDoc(doc(db, "products", id));
    await getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="col">
             <div
        style={{
          with:'100%'
        }}
        className='text-center row'
      >
        <div style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',gap:'30px',marginBottom:'50px',marginTop:'50px'}}>
          <h1 style={{ fontSize: "35px",color:'white',fontWeight:'600' }}>Products</h1>
              <div >
            <Link to={"/Create"}>
          {" "}
          <ButtonGroup variant='outline' >
          <Button style={{backgroundColor:'#ececec'}}>Add Product</Button>
          </ButtonGroup>
        </Link>
        </div>
        </div>
    
      
      </div>
      </div>
     {products.length === 0 ?
      <h1 style={{color:'white',fontSize:'30px'}}>No hay productos</h1>:
       loading? <h1><Spinner color='white' size='lg' /></h1>:
      
     <TableContainer className="TableContainer">
         <Table  variant='sm'>
           <Thead>
             <Tr>
               <Th>Product</Th>
               <Th>Stock</Th>
               <Th isNumeric>Functions</Th>
             </Tr>
           </Thead>
           <Tbody>
               {products.map((item)=>(
                <Tr key={item.id}>
                <Td className="item-product">{item.product.toUpperCase()}</Td>
                <Td  className="item-product" isNumeric> {item.stock}</Td>
                <Td > <Link to={`/edit/${item.id}/${item.product}/${item.stock}`}><Button size='sm' style={{backgroundColor:'#9fd3c7'}} className="button-chackra"> <span className="span" style={{color:'black'}}>Edit</span></Button></Link>  <Button size='sm' style={{backgroundColor:' #142d4c'}} className="button-chackra" onClick={()=>deleteProduct(item.id)}><span className="span">Delete</span></Button></Td>
             </Tr>
             ))}  
            
           </Tbody>
     
         </Table>
       </TableContainer>
     
     }
    
    
     
    
    
  
   
        
  
    </div>
  );
};

export default Container;

