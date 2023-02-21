import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react";
import {
  AiOutlineShoppingCart, AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle, AiOutlineLogout
} from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'
import SearchProduct from "./SearchProduct";
import Cookies from 'js-cookie'

const Navbar = ({ addToCart, cart, removeFromCart, clearCart, subTotal }) => {

  // console.log("showCategory>>>",showCategory)
  const [status, setStatus] = useState()
  // console.log("status", status)
  useEffect(() => {
    let signdata = localStorage.getItem('login')
    setStatus(signdata)
  })
  const toogleCart = useCallback(() => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  })
  const ref = useRef()

  
  const logouthandler = () => {
    Cookies.remove("loggedin");
    localStorage.removeItem('login')
    setStatus(false)
  }
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center 
    items-center my-2 shadow-md sticky top-0 z-10 bg-white'>

      <div className='logo mx-5'>
        <Link href='/'>
          <Image src='/logo.png' width={50} height={50} alt='logo' /></Link>
      </div>
      <div className='nav'>
    
        <ul className="absolute top-5 text-black  text-center w-full font-bold">

          <SearchProduct />
       
        </ul>
      </div>

      <div className=" cursor-pointer cart absolute right-0 top-4 mx-5 flex">
        {
          !status ? (


            <Link href={'/login'}><MdAccountCircle className="text-xl md:text-2xl mx-3" /></Link>
          ) : 
          <>
          <span onClick={logouthandler} className='mx-3' ><AiOutlineLogout className=" text-xl md:text-2xl mx-3" /></span>
          <AiOutlineShoppingCart onClick={toogleCart} className="text-xl md:text-2xl" />
          </>
        }
      </div>


      <div ref={ref} className={`first-letter:w-72 h-[100vh] sidecart absolute top-0 right-0 bg-pink-100 
      p-10 transform transition-transform  ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`} >
        <h3 className="font-bold text-xl">Shopping cart</h3>
        <span onClick={toogleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
        <ol className="list-decimal font-semibold">
          {
            Object.keys(cart).length == 0 && <div className="my-4 font-semibold">Your cart is Empty</div>
          }
          {
            Object.keys(cart).map((items, index) => {
              return <li key={index}>
                <div className="items flex my-5">
                  <div className="w-2/3 font-semibold">{cart[items].name}</div>
                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                    <AiOutlineMinusCircle onClick={() => removeFromCart(items, 1, cart[items].price,
                      cart[items].name, cart[items].variant, cart[items].size
                    )}
                      className="cursor-pointer text-pink-500" />
                    <span className="mx-2">
                      {cart[items].qty}
                    </span>
                    <AiOutlinePlusCircle onClick={() => addToCart(items, 1, cart[items].price,
                      cart[items].name, cart[items].variant, cart[items].size
                    )} className="cursor-pointer text-pink-500" />
                  </div>
                </div>
              </li>
            })
          }

        </ol>
        <div className="font-bold my-2">Subtotal: ₹{subTotal}</div>
        <div className="flex">
          <Link href={'/checkout'}><button className="flex mr-2 text-white
           bg-pink-500 border-0 py-2 px-2 
           focus:outline-none
           hover:bg-indigo-600 rounded text-sm">Checkout</button></Link>
          <button onClick={clearCart} className="flex mr-2 text-white 
          bg-pink-500 border-0 py-2 px-2 focus:outline-none 
          hover:bg-indigo-600 rounded text-sm">Delete Cart</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar