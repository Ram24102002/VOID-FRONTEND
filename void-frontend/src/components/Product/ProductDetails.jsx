import { useState, useEffect } from 'react';

function ProductDetails() {
      const [selectedColor, setSelectedColor] = useState('beige');
      const [selectedSize, setSelectedSize] = useState('M');

      
  const colors = [
    { name: 'beige', class: 'bg-stone-300', selected: selectedColor === 'beige' },
    { name: 'black', class: 'bg-black', selected: selectedColor === 'black' },
    { name: 'blue', class: 'bg-slate-400', selected: selectedColor === 'blue' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];


  return (
    <div>
        {/* Product details */}
    <div className="space-y-6 overflow-auto lg:max-h-[calc(100vh-96px)] pr-2">
          <div>
            <h1 className="text-2xl font-medium text-gray-900 mb-2">
              Alpaca Wool Crewneck Sweater
            </h1>
            <p className="text-2xl font-medium text-gray-900">$248</p>
          </div>

          {/* Color Options */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-900">Product Color: Beige</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Color</p>
            <div className="flex space-x-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 ${color.class} ${
                    color.selected ? 'border-gray-800' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-900">Product Size:</h3>
              <button className="text-sm text-gray-600 underline hover:text-gray-800">
                Size Chart
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-4 text-sm font-medium border rounded ${
                    selectedSize === size
                      ? 'border-gray-800 text-gray-900'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <button className="w-full bg-black text-white py-3 px-6 rounded text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
            Add to Bag
          </button>
        </div>
    </div>
  )
}

export default ProductDetails