import React from 'react'
import {assets} from '../assets/assets'
import { NavLink , Link } from 'react-router-dom'
import styles from '../components/STYLE/Nav.module.css'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from 'react';
import { ImCross } from "react-icons/im";
import { RiAccountCircleFill } from "react-icons/ri";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
   
   const [isOpen, setisOpen] = useState(false);
   const toggle = ()=>{
       setisOpen(!isOpen);
   }
   
   


  return (

    <>
        <div className={`${styles.sideMenu} ${isOpen? styles.active: styles.menu}`}>
          <div className={styles.cross} ><span><RxCross2 onClick={toggle} className='text-5xl'/></span></div>
          <div className={styles.hi_user}>
              <span>Hi Abhay kumar</span>
          </div>

          <div className={styles.mid}>
              <div> <span><MdOutlineAccountCircle /></span> <Link className={styles.description} to="myAccount">My Account</Link> </div>
              <div><span><FaBoxOpen /></span> <Link className={styles.description} to="orders">My Orders</Link></div>
              <div><span><IoPricetags /></span> <Link className={styles.description} to="offers">Offers</Link></div>
              <div><span><CiShop /></span><Link className={styles.description} to="/products">Products</Link></div>
              <div><span><MdOutlineLocalOffer /></span><Link to="/offer" className={styles.description}>Offers</Link></div>
              <div><span><LuHeartHandshake /></span><Link to="/support" className={styles.description}>Support</Link></div>

          </div>
          <div className={styles.lower}>
              <div className='flex mt-2 justify-center'><h1 className='text-xl uppercase underline decoration-purple-500 decoration-2 underline-offset-8'>Category</h1></div>
              <div onClick={toggle} className={styles.options}><Link to='/men'>Mens</Link> </div>
              <div onClick={toggle} className={styles.options}><Link to='/women'>Womens</Link></div>
              <div onClick={toggle} className={styles.options}><Link to="/kids">Kids</Link></div>
              <div onClick={toggle} className={styles.options}><Link to="/genz">Genz</Link> </div>
              <div onClick={toggle} className={styles.options}><Link to="/trending">Treding</Link></div>
              <div onClick={toggle} className={styles.options}><Link to="/collection">Collection</Link></div>
              
          </div>
          <div className={styles.downloads}>
            <h1>Downlaod App</h1>

            <div><img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" /></div>
            <div><img src="https://blinkit.com/d61019073b700ca49d22.png" alt="" /></div>
          </div>

         
             
        </div>
       
        <div className={styles.main}>

          <div className={styles.logo}><HiMiniBars3CenterLeft onClick={toggle} className={`text-4xl ${styles.bars}`}/><Link to="/"><h1>Trendz</h1></Link></div>


          <div className={styles.search}>
             <input type="text" placeholder='Search Products , Prands or Category ' />
          </div>

          <div className={styles.right}>
             <div className={styles.account}>
                 <RiAccountCircleFill />
             </div>
             <div className={styles.cart}>
                   <h1><FaCartShopping /></h1>
             </div>
          </div>
           
        </div>
    </>
  )
}

export default Navbar