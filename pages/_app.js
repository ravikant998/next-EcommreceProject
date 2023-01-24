import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }
    }
    catch (error) {
      // console.error(error)
      localStorage.clear()
    }
  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt = myCart[keys[i]]['price'] * myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }

  const addToCart = (itemCode, qty, price, name, variant, size) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty, name, price, variant, size }

    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode, qty, price, name, variant, size) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    // console.log("tttt", newCart)
    if (newCart[itemCode]['qty'] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }
// console.log("store",store)

  return <>
    <Navbar key={subTotal} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  
    <Component {...pageProps} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
   
    <Footer />
  </>
}
