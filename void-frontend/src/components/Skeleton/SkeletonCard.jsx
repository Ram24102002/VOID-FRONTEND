import React from 'react'
import { useState } from 'react';

// function () {
//   return (
//     <div>
//         <div className="flex w-52 flex-col gap-4">
//   <div className="skeleton h-32 w-full">hi</div>
//   <div className="skeleton h-4 w-28"></div>
//   <div className="skeleton h-4 w-full"></div>
//   <div className="skeleton h-4 w-full"></div>
// </div>
//     </div>
//   )
// }


function LoadingCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {/* Skeleton for image */}
      <div className="skeleton h-48 w-full"></div>
      
      <div className="card-body">
        {/* Skeleton for title */}
        <div className="skeleton h-8 w-full"></div>
        
        {/* Skeleton for text content */}
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-3/4"></div>
      </div>
    </div>
  );
}

// Usage example with loading state
function SkeletonCard() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <LoadingCard />
      ) : (
        // Your actual content
        <ProductList />
      )}
    </div>
  );
}


export default SkeletonCard