import React, { useEffect } from 'react'
import { useContext , useState} from 'react'
import {ShopContext} from '../context/ShopContext'
import Tittle from '../components/Tittle';
import ProductItems from '../components/ProductItems';
import { CiLogin } from 'react-icons/ci';


const Trending = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setbestSeller] = useState([]);
    useEffect(()=>{
        const bestProduct = products.filter((item)=>item.bestseller).slice(1,7);
        setbestSeller(bestProduct);

        

    },[products]);
     
  
  
  return (
    <div>
        <Tittle text1={'Trending'} text2={'Products'}/>
        <div className='mt-8 gap-8 max-w-[1300px] m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5'>
            {bestSeller.map((item , index)=>
                  <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            )}
        </div>

    </div>
  )
}

export default Trending