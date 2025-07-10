import React from 'react'

function CardWithImgOnSide() {

    const products = [{
        id: 1,
        img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
        title: "New Released!",
        description: "Click the button to Buy on VOID."
    },
    {
        id: 2,
        img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
        title: "New Released!",
        description: "Click the button to Buy on VOID."
    },
    {
        id: 3,
        img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
        title: "New Released!",
        description: "Click the button to Buy on VOID."
    },
    {
        id: 4,
        img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
        title: "New Released!",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    ]
    
  return (
    <div>
        <h1 className='text-center text-2xl font-semibold my-10'>New Arrivals !</h1>
        <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-8 lg:mx-10 p-6 grid grid-cols-1 lg:grid-cols-3 '>
            {products.map((product) => (
            <div key={product.id} className="card  card-side bg-base-100 shadow-sm">
  <figure className='h-full lg:h-55 xl:h-80 w-2/5 xl:w-1/3'>
    <img
        className='h-full w-full object-cover'
      src={product.img}
      alt="Movie" />
  </figure>
  <div className="card-body w-3/5 xl:w-2/3">
    <h2 className="card-title text-sm">{product.title}</h2>
    <p className='line-clamp-3 text-xs'>{product.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy now</button>
    </div>
  </div>
</div>
            ))}
        </div>
    </div>
  )
}

export default CardWithImgOnSide