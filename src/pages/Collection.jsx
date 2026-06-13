import React, { useContext , useEffect, useState} from 'react'
import Tittle from '../components/Tittle';
import { ShopContext} from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItems from '../components/ProductItems';

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilters, setshowFilters] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);

  useEffect(()=>{
      setFilterProducts(products);
  },[products]);
   
  console.log(products);
  
  return (
    <>
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t max-w-[1400px] m-auto mb-10  '>

        {/*filter options */}
        <div className='min-w-60  gap-2 flex flex-col m-[5px] sm:ml-[20px]' >
          <p onClick={ ()=>setshowFilters(!showFilters)} className='font-semibold text-gray-700 text-xl my-2 cursor-pointer'>FILTERS <img src={assets.dropdown_icon} className={`h-3 inline-block ml-2  ${showFilters ? 'rotate-90' :''} sm:hidden`} alt="" /></p>
          {/*Category Filter*/}
          <div className={`border border-gray-500 pl-6 py-4 mt-2 w-full ${showFilters? ' ' :'hidden'} sm:block`}>
              <p className='mb-3 sm:text-l text-sm font-medium'>CATEGORIES</p>
              <div className=' flex flex-col gap-2'>
                    <p className='flex gap-2' ><input type="checkbox" value={'Men'} className='w-3'  /> Men</p>
                    <p className='flex gap-2' ><input type="checkbox" value={'Women'} className='w-3'  /> Women</p>
                    <p className='flex gap-2' ><input type="checkbox" value={'Kids'} className='w-3'  /> Kids</p>
              </div>
          </div>

          {/*sub category Filters */}
          <div className={`border border-gray-500 pl-6 py-4 mt-6 w-full ${showFilters? ' ' :'hidden'} sm:block`}>
              <p className='mb-3 sm:text-l text-sm font-medium'>TYPE</p>
              <div className=' flex flex-col gap-2'>
                    <p className='flex gap-2' ><input type="checkbox" className='w-3' value={'Topware'} /> Topware</p>
                    <p className='flex gap-2' ><input type="checkbox" className='w-3' value={'Bottomware'}  /> Bottomware</p>
                    <p className='flex gap-2' ><input type="checkbox" className='w-3' value={'Winterware'}  /> Winterware</p>
              </div>
          </div>

        </div>

        {/*Right side */}
        <div className='flex-1 w-full '>
         <div className='flex justify-between items-center w-full mb-4 '>
          <Tittle text1={'ALL'} text2={'COLLECTIONS'}/>
          {/*product sort */}
          <select className='border-2 border-gray-700 h-5 sm:h-8  mt-3 text-[10px] sm:text-[17px] px-[5px]'>
            <option value="high-low">Sort by : Relavent</option>
            <option value="relavent">Sort by : Low-High</option>
            <option value="low-high">Sort by : High-Low</option>
            
          </select>

        </div>

        {/*Map products  */}          
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 py-2.5'>
      {FilterProducts.map((item, index) => (
        <ProductItems
          key={index}
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>

        </div>   
        </div>
         
       
       
     

       
    <div/>
    
    

    </>
  )
}

export default Collection