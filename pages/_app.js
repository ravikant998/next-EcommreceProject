import { useCallback, useEffect, useState } from 'react'
import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Roboto } from '@next/font/google';
import dynamic from "next/dynamic"
import { Provider } from 'react-redux'
import { store } from '../store/index'
import Header from '../components/Header';

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'optional'
})
const Navbar = dynamic(() => import("../components/Navbar"), {
  loading: () => <p>Loding.....</p>,
  ssr: true
})

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

  const saveCart = useCallback((myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart);
    for (const element of keys) {
      subt = myCart[element]['price'] * myCart[element].qty
    }
    setSubTotal(subt)
  })

  const addToCart = useCallback((itemCode, qty, price, name, variant, size) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty, name, price, variant, size }

    }
    setCart(newCart)
    saveCart(newCart)
  })

  const removeFromCart = useCallback((itemCode, qty, price, name, variant, size) => {
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
  })

  const clearCart = useCallback(() => {
    setCart({})
    saveCart({})
  })
  // console.log("store",store)

  return <>
    <main className={roboto.className} >

      <Provider store={store}>
      <Navbar key={subTotal} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
<Header/>

        <Component {...pageProps} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />

      <Footer />
      </Provider>
    </main>
  </>
}
