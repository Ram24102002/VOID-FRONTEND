
import React, { useState } from 'react';
import { Star, Truck, RotateCcw, Gift, Scale, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import orange from '../../assets/ColorTheme/orange.jpg'
import whitishGray from '../../assets/ColorTheme/WhitishGray.jpg'
import black from '../../assets/ColorTheme/black.jpg'
import Yellow from '../../assets/ColorTheme/Yellow.jpg'
import tame from '../../assets/ColorTheme/tame.jpg'
import chessboard from '../../assets/ColorTheme/chessboard.jpg'
export default function Main() {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const colors = [
    { name: 'black', value: 'Black / Olive', bgColor: 'bg-gray-900' },
    { name: 'brown', value: 'Brown', bgColor: 'bg-amber-800' }
  ];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const productImages = [
    whitishGray, // Full body shot
    orange, // Product flat lay
    chessboard, // Model wearing - front
    Yellow, // Model wearing - back
    black, // Detail shot
    tame // Back view
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Left side - Product Images */}
        <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto pb-2">
  {productImages.map((image, index) => (
    <div
      key={index}
      className="w-full h-[400px] md:min-h-100 md:aspect-[2/5] bg-gray-100 rounded-lg overflow-hidden flex-shrink-0"
    >
      <img
        src={image}
        alt={`Product ${index}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>



        {/* Right side - Product Details */}
        <div className="space-y-6">
          {/* Product Title and Price */}
          <div>
            <h1 className="text-2xl font-medium mb-2">The ReWool® Oversized Shirt Jacket</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">5.0 (5 Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 line-through">₹238</span>
              <span className="text-2xl font-medium">₹167</span>
            </div>
          </div>
          {/* Color Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">Color</label>
            </div>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.name ? 'border-blue-500' : 'border-gray-300'
                  }`}
                >
                  <div className={`w-full h-full rounded-full ${color.bgColor}`} />
                </button>
              ))}
            </div>
          </div>
          {/* Size Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">Size</label>
              <button className="text-sm text-gray-600 underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-3 border rounded text-sm font-medium ${
                    selectedSize === size
                      ? 'border-black bg-black text-white hover:bg-indigo-600'
                      : 'border-gray-300 hover:border-indigo-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Add to Bag Button */}
          <button className="w-full bg-black text-white py-3 font-medium rounded hover:bg-indigo-600 transition-colors">
            ADD TO BAG
          </button>
          {/* Shipping and Returns Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 mt-0.5" />
              <div>
                <div className="font-medium">Free Shipping</div>
                <div className="text-sm text-gray-600">On all U.S. orders over ₹300. <button className="underline">Learn more.</button></div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <RotateCcw className="w-5 h-5 mt-0.5" />
              <div>
                <div className="font-medium">Easy Returns</div>
                <div className="text-sm text-gray-600">Extended returns through January 31. <button className="underline">Returns Details.</button></div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Gift className="w-5 h-5 mt-0.5" />
              <div>
                <div className="font-medium">Send It As A Gift</div>
                <div className="text-sm text-gray-600">Add a free personalized note during checkout.</div>
              </div>
            </div>
          </div>
          {/* Product Description */}
          <div>
            <h3 className="font-medium mb-2">Part shirt, part jacket, all style.</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla sunt laboriosam soluta inventore explicabo odit possimus atque mollitia modi delectus, corrupti quo, porro nesciunt id illum natus expedita similique?
              </p>
            </div>
          </div>
          {/* Model and Fit Info */}
          <div className="space-y-3">
            <div className="flex">
              <span className="font-medium w-16">Model</span>
              <span className="text-sm text-gray-700">Model is 6'2", wearing a size M</span>
            </div>
            <div className="flex">
              <span className="font-medium w-16">Fit</span>
              <div className="text-sm text-gray-700">
                <span>Questions about fit?</span>
                <br />
                <Link to='/contact-us' ><button className="underline cursor-pointer">Contact Us</button></Link>
                <br />
                <button className="underline">Size Guide</button>
              </div>
            </div>
          </div>
          {/* Sustainability */}
          <div>
            <h3 className="font-medium mb-3">Sustainability</h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                <span className="text-sm">RENEWED MATERIALS</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                <span className="text-sm">CLEANER CHEMISTRY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
