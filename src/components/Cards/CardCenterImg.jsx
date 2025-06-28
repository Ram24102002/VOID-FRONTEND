import React from 'react'

// Card with centered content and paddings

function CardCenterImg() {


    const products = [{
        id: 1 ,
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", 
        title: "Card Title", 
        description: "A card component has a figure, a body part, and inside body there are title and actions parts"
    },
    {
        id: 2 ,
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", 
        title: "Card Title", 
        description: "A card component has a figure, a body part, and inside body there are title and actions parts"
    },
    {        id: 3 ,
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", 
        title: "Card Title",
        description: "A card component has a figure, a body part, and inside body there are title and actions parts"
    }
    ]

  return (
    <div>
      <h1 className='text-center text-2xl font-semibold my-10'>Our Bestsellers 🛒</h1>
      <div className='flex flex-wrap justify-center gap-5 p-10'>
        {products.map((product) => (
            <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={product.img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.title}</h2>
    <p>{product.description}</p>
    <div className="card-actions">
      <button className="btn bg-indigo-600 text-white ">Buy Now</button>
    </div>
  </div>
</div>
        ))}
    </div>
    </div>
  )
}

export default CardCenterImg