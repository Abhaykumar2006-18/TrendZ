import React from 'react'
import styles from './STYLE/Products.module.css'
const Shirts = () => {

   let shirts = [
  {
    "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    "name": "Classic White Cotton Shirt",
    "description": "Slim fit cotton shirt perfect for office and casual wear.",
    "rating": 4.5,
    "price": 899,
    "priceBeforeDiscount": 1299,
    "discount": "31%"
  },
  {
    "url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    "name": "Blue Denim Shirt",
    "description": "Stylish denim shirt with durable premium fabric.",
    "rating": 4.3,
    "price": 1199,
    "priceBeforeDiscount": 1599,
    "discount": "25%"
  },
  {
    "url": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    "name": "Black Formal Shirt",
    "description": "Elegant formal shirt suitable for meetings and events.",
    "rating": 4.6,
    "price": 999,
    "priceBeforeDiscount": 1399,
    "discount": "29%"
  },
  {
    "url": "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
    "name": "Checked Casual Shirt",
    "description": "Trendy checked shirt made with breathable cotton fabric.",
    "rating": 4.2,
    "price": 799,
    "priceBeforeDiscount": 1099,
    "discount": "27%"
  },
  {
    "url": "https://images.unsplash.com/photo-1593032465171-8e17b86cb3c6",
    "name": "Grey Slim Fit Shirt",
    "description": "Modern slim-fit shirt with lightweight smooth fabric.",
    "rating": 4.4,
    "price": 949,
    "priceBeforeDiscount": 1349,
    "discount": "30%"
  },
  {
    "url": "https://images.unsplash.com/photo-1520975922327-0c97c4b2c6f3",
    "name": "Striped Office Shirt",
    "description": "Professional striped shirt designed for office wear.",
    "rating": 4.3,
    "price": 899,
    "priceBeforeDiscount": 1199,
    "discount": "25%"
  },
  {
    "url": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "name": "Olive Green Casual Shirt",
    "description": "Soft cotton olive shirt perfect for everyday style.",
    "rating": 4.1,
    "price": 849,
    "priceBeforeDiscount": 1199,
    "discount": "29%"
  },
  {
    "url": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
    "name": "Light Blue Formal Shirt",
    "description": "Classic light blue shirt ideal for business meetings.",
    "rating": 4.5,
    "price": 999,
    "priceBeforeDiscount": 1399,
    "discount": "29%"
  },
  {
    "url": "https://images.unsplash.com/photo-1618354691431-3e2b2d7d86d6",
    "name": "Flannel Checked Shirt",
    "description": "Warm flannel shirt perfect for casual outings.",
    "rating": 4.4,
    "price": 1099,
    "priceBeforeDiscount": 1499,
    "discount": "27%"
  },
  {
    "url": "https://images.unsplash.com/photo-1562158070-622a2e2f3f6b",
    "name": "Beige Linen Shirt",
    "description": "Lightweight linen shirt perfect for summer comfort.",
    "rating": 4.2,
    "price": 1049,
    "priceBeforeDiscount": 1499,
    "discount": "30%"
  }
]
  return (
    <div className={styles.main}>




        <div className={styles.container}>
            <div className={styles.img_cont}>
               
            </div>
            <div className={styles.info}>
                <p>Rodster</p>
                <h3>this is cotton shirt</h3>
            </div>
            <div className={styles.price}>
               <p>Rs.999</p> <del>1499</del> <span>22% off</span> 
            </div>
           
        </div>
        
         
    </div>
  )
}

export default Shirts