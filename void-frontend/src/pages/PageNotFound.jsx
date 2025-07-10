import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react'; // Optional icon

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="text-center"
      >
        <motion.h1
          className="text-9xl font-bold mb-4"
          animate={{ rotate: [0, 5, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          404
        </motion.h1>
        <p className="text-xl mb-6">
          Uh-oh! The T-shirt you’re looking for is out of stock... or never existed 😅
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.5 }}
        >
          <Shirt size={64} className="text-indigo-600 mb-4" />
        </motion.div>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Go Back to Store
        </Link>
      </motion.div>
    </div>
  );
}
