import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import ProductItems from './ProductItems';
import { useState , useEffect } from 'react';

const LatestCollection = () => {
 
    const {products} = useContext(ShopContext);
    const [latestProducts, setlatestProducts] = useState([]);
    useEffect(()=>{
       setlatestProducts(products.slice(0,8));
    },[]);
    
   

  return (
    <div>
      <Tittle text1={'LATEST'} text2={'COLLECTIONS'} />

      {/*randering products ........ */}
      <div className=' max-w-[1300px] m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-y-5 p-5'>
          {latestProducts.map((item , index)=>(
               <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))}
      </div>
       
    </div>

  )
}

export default LatestCollection