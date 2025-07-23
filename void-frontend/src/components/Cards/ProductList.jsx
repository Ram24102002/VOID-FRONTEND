// ProductList.jsx
import React from 'react';

import orange from '../../assets/ColorTheme/orange.jpg'
import whitishGray from '../../assets/ColorTheme/WhitishGray.jpg'
import black from '../../assets/ColorTheme/black.jpg'
import Yellow from '../../assets/ColorTheme/Yellow.jpg'
import tame from '../../assets/ColorTheme/tame.jpg'
import chessboard from '../../assets/ColorTheme/chessboard.jpg'
// import { Link } from 'lucide-react';
import { Link } from 'react-router-dom';



const products = [
  {
    id: 1,
    img: orange,
    title: "Basic Black Tee",
    description: "Classic black cotton T-shirt. Soft, durable, and perfect for everyday wear.",
    price: 999,
    discountedPrice: 799,
    rating: 4.2
  },
  {
    id: 2,
    img: whitishGray,
    title: "Basic White Tee",
    description: "Clean and simple white tee for all occasions. Easy to style and comfortable.",
    price: 999,
    discountedPrice: 749,
    rating: 4.0
  },
  {
    id: 3,
    img: black,
    title: "Neutral Grey Tee",
    description: "Versatile grey T-shirt that fits every mood and outfit.",
    price: 1099,
    discountedPrice: 849,
    rating: 4.3
  },
  {
    id: 4,
    img: Yellow,
    title: "Naruto Graphic Tee",
    description: "Bold Naruto-themed design on a premium cotton T-shirt. Perfect for anime fans.",
    price: 1299,
    discountedPrice: 999,
    rating: 4.5
  },
  {
    id: 5,
    img: tame,
    title: "One Piece Pirate Crew Shirt",
    description: "Join the Straw Hats with this black tee featuring the Jolly Roger emblem.",
    price: 1399,
    discountedPrice: 1099,
    rating: 4.7
  },
  {
    id: 6,
    img: chessboard,
    title: "Attack on Titan Scout Regiment Tee",
    description: "Show off the Wings of Freedom with this stylish AoT-themed shirt.",
    price: 1499,
    discountedPrice: 1199,
    rating: 4.8
  },
  
  
  // ... Add more as needed
];

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
    </svg>
  ));
  return <div className="flex">{stars}</div>;
};

const ProductList = () => {
  return (
   
    <div>
      <h1 className="text-center text-2xl font-semibold mt-10">Our Bestsellers 🛒</h1>
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 p-15">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-2xl max-w-100 overflow-hidden hover:scale-[1.02] transition-transform">
          <img src={product.img} alt={product.title} className="w-full h-66 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1 dark:text-black">{product.title}</h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-1">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-red-600 font-semibold mr-2">₹{product.discountedPrice}</span>
                <span className="line-through text-gray-400 text-sm">₹{product.price}</span>
              </div>
              <StarRating rating={product.rating} />
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link to={'/Product'} onClick={() => {window.scrollTo(0,0)}} className="mt-4 w-full bg-black text-white py-2 rounded-sm m-2 hover:bg-gray-800 transition">
                 <button className='text-center w-full'>
                    View Product
                 </button>
              </Link>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-sm m-2 hover:bg-gray-800 transition">
              Add to Cart
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
