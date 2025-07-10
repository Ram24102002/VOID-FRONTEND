import React, { useState } from 'react';
import { X, Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

// Cart Component
function ShoppingCart({ isOpen, setIsOpen }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'The Organic Cotton Long-Sleeve Turtleneck',
      size: 'Medium',
      color: 'Black',
      originalPrice: 60,
      currentPrice: 35,
      discount: 30,
      quantity: 1,
      image: '/api/placeholder/80/80'
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
      image: '/api/placeholder/80/80'
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);

  return (
    <>
      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-4 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm leading-tight mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.size} | {item.color}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                      <span className="text-sm font-medium">
                        ${item.currentPrice}
                      </span>
                      <span className="text-sm text-red-600">
                        ({item.discount}% Off)
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-100 rounded-l-lg"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-100 rounded-r-lg"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Subtotal:</span>
                <span className="text-lg font-bold">${subtotal}</span>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Checkout
              </button>
              
              <button className="w-full text-center py-3 text-sm text-gray-600 hover:text-gray-800">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Main App Component
export default function Temp() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Store</h1>
            </div>
            
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag size={20} />
              <span>Cart (2)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to our store</h2>
          <p className="text-gray-600 mb-8">Click the cart button in the header to view your items</p>
          
          {/* Additional Cart Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Cart
            </button>
            
            <br />
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Checkout Now
            </button>
          </div>
        </div>
      </main>

      {/* Cart Component */}
      <ShoppingCart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </div>
  );
}