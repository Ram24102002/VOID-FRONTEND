import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductShowcase() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("📦 Product ID from URL:", id); // Debug
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log("✅ Product fetched:", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching product:", err);
      });
  }, [id]);

  // ✅ Avoid rendering before product is loaded
  if (!product) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={
            product.image?.startsWith("http")
              ? product.image
              : `/${product.image?.replace(/['"]+/g, "").trim()}`
          }
          alt={product.title}
          className="w-full md:w-1/2 h-96 object-cover rounded"
        />

        <div className="flex-1">
          {product.isBestseller && (
            <span className="inline-block mb-2 bg-indigo-600 text-white px-3 py-1 text-xs font-semibold rounded">
              BESTSELLER
            </span>
          )}

          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>

          <p className="text-sm text-gray-500 mb-4">
            Rating: {product.rating} ({product.reviews} reviews)
          </p>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl text-gray-900 font-bold">{product.currentPrice}</span>
            <span className="line-through text-gray-500">{product.originalPrice}</span>
            <span className="text-green-600 font-semibold text-sm">{product.discount}</span>
          </div>

          <p className="text-sm text-gray-600">
            Offer Price:{" "}
            <span className="text-red-500 font-semibold">{product.offerPrice}</span>
          </p>

          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
