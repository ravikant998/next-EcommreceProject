
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Link from 'next/link';
const Checkout = ({ cart, subTotal,addToCart }) => {
  return (
    <div className="container px-2 sm:mx-auto">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type='text' id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type='text' id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className="px-2 w-full">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea col='30' rows='2' id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>          </div>
      </div>

      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type='text' id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type='text' id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type='text' id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">

        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type='text' id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type='text' id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-xl">1. Review Card Items & Pay</h2>

      <div className="sidecart bg-pink-100 p-10 " >

        <ol className="list-decimal font-semibold">
          {
            Object.keys(cart).length == 0 && <div className="my-4 font-semibold">Your cart is Empty</div>
          }
          {
            Object.keys(cart).map((items, index) => {
              return <li key={index}>
                <div className="items flex my-2">
                  <div className="font-semibold">{cart[items].name}</div>
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
        <span className='font-bold'>Subtotal: ₹{subTotal}</span>
      </div>
      <div className='mx-3 my-1'>
        <Link href={'/checkout'}><button className="flex mr-2 text-white
           bg-pink-500 border-0 py-2 px-2 
           focus:outline-none
           hover:bg-indigo-600 rounded text-sm">Pay ₹{subTotal}</button></Link>
      </div>
    </div>
  )
}

export default Checkout