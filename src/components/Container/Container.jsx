import React, { useEffect, useState } from "react";
import {collection,deleteDoc,doc,getDocs,} from "firebase/firestore";
import "./Main.scss";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import {Button,ButtonGroup,TableContainer,Thead, Tr,Th,Table,Tbody,Td,Spinner } from "@chakra-ui/react";



const Container = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const productsCollection = collection(db, "products");

  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   
    setLoading(false)
  };
  console.log(products);

  const deleteProduct = async (id) => {
    deleteDoc(doc(db, "products", id));
    await getProducts();
    console.log(id);
  };

  useEffect(() => {
    getProducts();
  }, []);

 

  return (
    <div className="container">
      <div className="col">
      </div>
      <div
        style={{
          with:'100%'
        }}
        className='text-center row'
      >
        <div style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',gap:'30px',marginBottom:'30px'}}>
          <h1 style={{ fontSize: "35px" }}>Products</h1>
              <div style={{marginTop:'10px'}}>
            <Link to={"/Create"}>
          {" "}
          <ButtonGroup variant='outline' >
          <Button colorScheme='blue'>Add Product</Button>
          </ButtonGroup>
        </Link>
        </div>
        </div>
    
      
      </div>
    {loading?<h1><Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></h1>:
    null}
    
    {products.length != 0 ?
         <TableContainer className="TableContainer">
         <Table variant='simple'>
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
                <Td > <Link to={`/edit/${item.id}/${item.product}/${item.stock}`}><Button size='xs' className="button-chackra"> <span className="span">Edit</span></Button></Link>  <Button size='xs' className="button-chackra" onClick={()=>deleteProduct(item.id)}><span className="span">Delete</span></Button></Td>
             </Tr>
             ))}  
            
           </Tbody>
          
         </Table>
       </TableContainer>:
       <span> no hay productos</span>
    }
    </div>
  );
};

export default Container;

