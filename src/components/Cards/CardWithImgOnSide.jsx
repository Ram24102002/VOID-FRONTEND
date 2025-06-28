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
        <div className='flex flex-wrap justify-center gap-5 p-10'>
            {products.map((product) => (
            <div key={product.id} className="card w-1/3 card-side bg-base-100 shadow-sm">
  <figure className='h-50 w-1/3'>
    <img
        className=' '
      src={product.img}
      alt="Movie" />
  </figure>
  <div className="card-body w-2/3">
    <h2 className="card-title">{product.title}</h2>
    <p className='line-clamp-3'>{product.description}</p>
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