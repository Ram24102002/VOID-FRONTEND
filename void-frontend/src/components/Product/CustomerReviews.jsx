import { BadgeCheck } from 'lucide-react';
import { useState } from 'react';

function CustomerReviews() {
    const [showAll, setShowAll] = useState(false);
    const initialDisplay = 3;

    const StarRating = ({ rating, size = 'md' }) => {
        const sizeClasses = {
            sm: 'w-4 h-4',
            md: 'w-5 h-5',
            lg: 'w-6 h-6'
        };

        return (
            <div className="flex items-center gap-1 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        className={`${sizeClasses[size]} ${
                            star <= rating ? 'text-indigo-600' : 'text-gray-300'
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

    const ratingData = [
        {
            id: 1,
            stars: 5,
            Name: 'John Doe',
            title: 'Great Product!',
            content: 'This product exceeded my expectations. Highly recommend!',
            Verified: true,
            date: '2023-10-01'
        },
        {
            id: 2,
            stars: 4,
            Name: 'Jane Smith',
            title: 'Good Quality',
            content: 'The quality is good, but it could be improved.',
            Verified: false,
            date: '2023-10-02'
        },
        {
            id: 3,
            stars: 3,
            Name: 'Alice Johnson',
            title: 'Average Experience',
            content: 'It was okay, nothing special.',
            Verified: true,
            date: '2023-10-03'
        },
        {
            id: 4,
            stars: 2,
            Name: 'Bob Brown',
            title: 'Not Satisfied',
            content: 'I expected better quality for the price.',
            Verified: false,
            date: '2023-10-04'
        },
        {
            id: 5,
            stars: 1,
            Name: 'Charlie White',
            title: 'Very Disappointed',
            content: 'The product did not match the description at all.',
            Verified: true,
            date: '2023-10-05'
        }
    ];

    return (
        <div className='customer-reviews p-5 lg:p-20'>
            <h1 className='text-2xl'>Customer Reviews</h1>
            <p className='text-sm'>Here you can find reviews from our customers about the products.</p>
            
            {ratingData
                   .slice(0, showAll ? ratingData.length : initialDisplay)
                .map((review) => (
                    <section key={review.id} className='flex flex-col lg:flex-row align-center p-4 lg:py-6 border-b border-gray-200'>
                        <div className='lg:w-1/4'>
                            <h3 className='lg:text-xl py-1'>{review.Name}</h3>
                            {review.Verified && 
                                <div className='flex py-1'>
                                    <p>Verified user</p>
                                    <BadgeCheck className='mx-2' size={18} />
                                </div>
                            }
                        </div>
                        <div className='lg:w-1/4 flex flex-start lg:justify-center py-1 '>
                            <StarRating rating={review.stars} size='md' />
                        </div>
                        <div className='lg:w-1/4'>
                            <div className=''>
                                 <p className='text-xl py-1'>{review.title}</p>
                            </div>
                            <p className='text-sm'>{review.content}</p>
                        </div>
                        <div className='lg:w-1/4 flex flex-start lg:justify-center item-center py-1 text-xs'>{review.date}</div>
                    </section>
                ))}

            {ratingData.length > initialDisplay && (
                <div className='text-center mt-4'>
                    <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-4 px-4 py-2 underline cursor-pointer"
                >
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
                </div>
            )}
        </div>
    );
}

export default CustomerReviews;