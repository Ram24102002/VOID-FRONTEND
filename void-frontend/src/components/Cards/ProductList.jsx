import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error loading products:', err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div key={product._id} className="border p-4 rounded shadow">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-cover mb-2"
          />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.currentPrice}</p>

          {/* ✅ Here's the link to ProductDetailsPage */}
          <Link
            to={`/product/${product._id}`}
            className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
}
