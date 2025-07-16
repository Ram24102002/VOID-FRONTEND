import React from 'react';

const ReviewBox = () => {
  const ratingData = [
    { stars: 5, count: 2 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 }
  ];

  const totalReviews = ratingData.reduce((sum, item) => sum + item.count, 0);

  const StarRating = ({ rating, size = 'md' }) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    return (
      <div className="flex items-center  gap-1 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating ? 'text-black' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-8">Reviews</h2>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side - Overall rating */}
        <div className="flex-1">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5.0 Overall Rating</div>
            <StarRating rating={5} size="lg" />
          </div>
        </div>

        {/* Middle - Rating breakdown */}
        <div className="flex-1">
          <div className="space-y-2">
            {ratingData.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="text-sm font-medium w-2">{item.stars}</span>
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-black h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: totalReviews > 0 ? `${(item.count / totalReviews) * 100}%` : '0%'
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-4">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ReviewBox;