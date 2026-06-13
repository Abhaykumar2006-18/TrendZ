import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import styles from '../src/main.module.css'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import Trending from './pages/Trending'
import Footer from './pages/Footer'
import OurPolicy from './components/OurPolicy'
import MyAccount from './pages/MyAccount'
import Support from './pages/Support'

const App = () => {
  return (
    <>
    <Navbar/>
    
     

      <div className={styles.container}>
        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/collection' element={<Collection/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/products/:productId' element={<Products/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/men' element={<Mens/>}/>
            <Route path='/womens' element={<Womens/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/ourPolicy' element={<OurPolicy/>}/>
            <Route path='/myAccount' element={<MyAccount/>}/>
            <Route path='/support' element={<Support/>}/>

        </Routes>
       </div>

       
    </>
  )
}

export default App