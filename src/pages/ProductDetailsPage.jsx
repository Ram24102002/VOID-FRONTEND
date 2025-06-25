import { useState, useEffect } from 'react';
import ImagesPC from '../components/Product/ImagesPC';
import ProductDetails from '../components/Product/ProductDetails';
import ImagesMobile from '../components/Product/ImagesMobile';

export default function ProductDetailsPage() {




  return (
    <div className="max-w-6xl lg:min-h-screen mx-auto p-6 bg-white">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
    

    <div className='hidden lg:block'>
      <ImagesPC />
    </div>
    <div className='lg:hidden'>
      <ImagesMobile />
    </div>
    <ProductDetails />

      </div>
    </div>
  );
}
