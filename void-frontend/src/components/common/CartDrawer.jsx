import React from 'react'
import { ShoppingCart, X } from "lucide-react"; // Assuming you have lucide-react installed for icons
import { useState } from 'react'; // Uncomment if you need state management for cart items
import Yellow from '../../assets/ColorTheme/Yellow.jpg';
import tame from '../../assets/ColorTheme/tame.jpg';

function CartDrawer() {


  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'The Organic Cotton Long-Sleeve Turtleneck',
      size: 'Medium',
      color: 'Black',
      originalPrice: 60,
      currentPrice: 35,
      discount: 30,
      quantity: 5,
      image: Yellow
    },
    {
      id: 2,
      name: 'The ReWool® Oversized Shirt Jacket',
      size: 'Small',
      color: 'Black',
      originalPrice: 238,
      currentPrice: 167,
      discount: 30,
      quantity: 1,
      image: tame
    }
  ]);

  // Function to remove item by id
  const CartItems = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div>
        <div className="drawer drawer-end"></div>
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Button content here */}
    <label htmlFor="my-drawer-4" className="drawer-button">
        <div className="indicator mt-5 flex items-center justify-center">
          <ShoppingCart />
          <span className="badge badge-sm indicator-item">{cartItems.length}</span>
        </div>
    </label>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay "></label>

    <div className="menu p-4 w-3/4 lg:w-1/3 h-screen bg-base-100 text-base-content absolute z-100 ">
      <X className="absolute top-4 right-4 cursor-pointer" size={24} onClick={() => document.getElementById('my-drawer-4').checked = false} />
      {/* Sidebar content here */}
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">You have {cartItems.length} items in your cart.</p>
      {cartItems.map((items) =>
      <ul key={items.id} className="list-none p-0">
      <li className="flex mb-4">

        <article className='flex items-start justify-between w-full '>
          <div className="flex flex-row flex-start">
          <div className='w-16 h-16 mr-4'>
            <img src={items.image} alt={items.name} className="w-full h-full object-cover rounded" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">{items.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Size: {items.size} | Color: {items.color}</p>
            <div className="flex items-center mt-2">
              
              <span className="text-xs text-gray-500 dark:text-gray-200 line-through">₹{items.originalPrice}</span>
              <span className="text-sm font-medium text-gray-900  dark:text-white ml-2">₹{items.currentPrice}</span>
              <span className="text-xs text-green-600 ml-2">-{items.discount}%</span>
            </div>
          </div>
          
          </div>
          <button type="button" onClick={() => CartItems(items.id)}>
            <X className="text-gray-500 hover:text-red-500 ml-4" size={16} />
          </button>
        </article>
        
        {/* Quantity Amount */}
        <div className="flex items-center justify-between w-full mt-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Quantity: {items.quantity}</span>
          <span className="text-sm font-medium text-gray-900  dark:text-white">₹{(items.currentPrice * items.quantity).toFixed(2)}</span>
        </div>
        </li>
      </ul>)}

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{cartItems.reduce((total, item) => total + (item.currentPrice * item.quantity), 0).toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-4 dark:text-gray-200">Shipping and taxes calculated at checkout.</p>
      </div>
        
      <button className="btn btn-primary mt-4 ">Checkout</button>
      </div>
  </div>
</div>
  )
}

export default CartDrawer