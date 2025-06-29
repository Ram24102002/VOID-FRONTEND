import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/1-img.png';



export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      title: "150 GSM Floral Print Double Bedsheet with Pillow Covers",
      image: image1,
      rating: 4,
      reviews: "1.4K",
      originalPrice: "₹1,999",
      currentPrice: "₹580",
      discount: "71% off",
      offerPrice: "₹420",
      isBestseller: true
    },
    {
      id: 1,
      title: "150 GSM Floral Print Double Bedsheet with Pillow Covers",
      image: image1,
      rating: 5,
      reviews: "1.4K",
      originalPrice: "₹1,999",
      currentPrice: "₹580",
      discount: "71% off",
      offerPrice: "₹420",
      isBestseller: true
    },
    {
      id: 1,
      title: "150 GSM Floral Print Double Bedsheet with Pillow Covers",
      image: image1,
      rating: 3,
      reviews: "1.4K",
      originalPrice: "₹1,999",
      currentPrice: "₹580",
      discount: "71% off",
      offerPrice: "₹420",
      isBestseller: true
    },
    {
      id: 1,
      title: "150 GSM Floral Print Double Bedsheet with Pillow Covers",
      image: image1,
      rating: 4.5,
      reviews: "1.4K",
      originalPrice: "₹1,999",
      currentPrice: "₹580",
      discount: "71% off",
      offerPrice: "₹420",
      isBestseller: true
    }
  ];

  const StarRating = ({ rating, reviews }) => {
    return (
      <div className="flex items-center gap-1 mb-2">
        <div className="flex items-center gap-1 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-medium">
          <span>{rating}</span>
          <Star className="w-3 h-3 fill-current" />
        </div>
        <span className="text-gray-600 text-sm">| {reviews}</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 text-sm lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative">
              {product.isBestseller && (
                <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 text-xs font-medium rounded z-10">
                  BESTSELLER
                </div>
              )}
              
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-60 lg:h-80 object-cover"
                />
              </div>

              <div className="p-4 flex flex-col justify-between">
                <div className="text-orange-600 text-sm font-medium mb-1">
                  {product.brand}
                </div>
                
                <h3 className="text-gray-800 font-medium mb-3 line-clamp-3 leading-tight">
                  {product.title}
                </h3>

                <StarRating rating={product.rating} reviews={product.reviews} />

                <div className="flex items-center gap-1 text-indigo-600 text-sm">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-indigo-600 text-xs lg:font-medium ">
                    ({product.discount})
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row  gap-2 mb-2">
                  <div>
                    <span className="text-xl font-bold text-gray-900">
                      {product.currentPrice}
                    </span>
                    <span className="text-gray-500 line-through text-sm ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                  {/* Buy Now Button */}
                  <Link
                    to="/ProductDetailsPage"
                    className="bg-indigo-600 text-white text-xs font-medium text-center px-4 py-2 ml-auto rounded hover:bg-indigo-700 transition w-full lg:w-auto"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}