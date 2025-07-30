import React, { useState } from 'react';
import { X, Minus, Plus , IndianRupee , SendHorizontal  } from 'lucide-react';

export default function CheckOut() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Alpaca Wool Crewneck Sweater",
      color: "Beige",
      price: 248,
      quantity: 1,
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Single Origin Cashmere Crop Cashmere Crop",
      color: "Apricot / Large",
      price: 298,
      quantity: 1,
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Single Origin Cashmere Crop Cashmere Crop",
      color: "Apricot / Large",
      price: 298,
      quantity: 1,
      image: "/api/placeholder/200/200"
    },
    {
      id: 4,
      name: "Single Origin Cashmere Crop Cashmere Crop",
      color: "Apricot / Large",
      price: 298,
      quantity: 1,
      image: "/api/placeholder/200/200"
    }
  ]);

  const updateQuantity = (id, change) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <section className='flex flex-col lg:flex-row justify-center'>
        <aside className=" grid grid-cols-1 lg:grid-cols-2 gap-6 p-10 px-15 min-h-screen w-full lg:w-1/2">
      {items.map((item) => (
        <div key={item.id} className=" bg-gray-200 rounded-lg shadow-sm max-h-130 border border-gray-200 p-6 w-80">
          {/* Header with title and close button */}
          <div className="flex justify-between items-start  mb-4">
            <div>
              <h3 className="font-medium text-gray-900 text-lg leading-tight line-clamp-1">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.color}</p>
            </div>
            <button 
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X size={16} />
            </button>
          </div>

          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg mb-6 aspect-square flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-300 rounded-md opacity-60"></div>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center mb-6">
            <button 
              onClick={() => updateQuantity(item.id, -1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <Minus size={14} className="text-gray-600" />
            </button>
            <span className="mx-4 text-lg font-medium w-8 text-gray-600 text-center">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <Plus size={14} className="text-gray-600" />
            </button>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-lg text-black">${item.price * item.quantity}</span>
          </div>
        </div>
      ))}
    </aside>


    <aside className='lg:h-screen w-full lg:w-1/2 p-20 '>
      {/* Header */}
      <h2 className="text-center text-gray-900 dark:text-white font-medium text-lg mb-6">
        Order Summary
      </h2>
      
      {/* Subtotal Row */}
      <div className="flex justify-between items-center py-3 border-b border-gray-200 ">
        <span className="text-gray-700 dark:text-white">Subtotal</span>
        <span className="text-gray-900 dark:text-white font-medium ">₹396</span>
      </div>

      {/* SGST Row */}
      <div className="flex justify-between items-center py-3  border-b border-gray-200 ">
        <span className="text-gray-700 dark:text-white">SGST 18%</span>
        <span className="text-gray-900 dark:text-white font-medium ">₹396</span>
      </div>

      {/* CGST Row */}
      <div className="flex justify-between items-center py-3 border-b border-gray-400 ">
        <span className="text-gray-700 dark:text-white">CGST 18%</span>
        <span className="text-gray-900 dark:text-white font-medium ">₹396</span>
      </div>
      
      {/* Bag Total Row */}
      <div className="flex justify-between items-center py-3 mb-6 dark:text-white border-b border-gray-400 dark:border-white">
        <span className="text-gray-700 dark:text-white">Bag Total</span>
        <span className="text-gray-500 dark:text-white text-lg">₹396</span>
      </div>
      
      {/* Gift Message Section */}
        <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border mb-6">
  <input type="checkbox" />
  <div className="collapse-title font-semibold">Add a gift message to your order</div>
  <div className="collapse-content ">
    <textarea
          className="w-full h-20 p-3 border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder=""
        />
        <button className='p-5 btn w-1/2 m-5 bg-indigo-600 text-white'>
    save <SendHorizontal   size={16} />
  </button>
  </div>
  
</div>
      
      
      
      {/* Checkout Button */}
      <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex justify-center item-center">
        <p>Checkout and Pay </p> <IndianRupee className='mx-2' />
      </button>
    </aside>

    </section>
  );
}
