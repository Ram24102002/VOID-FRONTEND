import React from 'react'

function OurIconsCard() {

    const products =[
        {
            id: 1,
            name: 'Product 1',
            img: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp',
            title: 'T-Shirt 1',
            description: 'BestSeller of Void',
        },
        {
            id: 2,
            name: 'Product 1',
            img: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp',
            title: 'T-Shirt 1',
            description: 'BestSeller of Void',
        }
    ]


  return (

    <div>
       <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 m-10">
        {products.map((product) => (
             <div key={product.id} className="card lg:card-side bg-base-100 shadow-sm">
  <figure className='h-100 w-full lg:w-1/2'>
    <img
      src={product.img}
      alt="Album" />
  </figure>
  <div className="card-body w-1/2">
    <h2 className="card-title">{product.title}</h2>
    <p>{product.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        ))}
       
       </section>
    </div>
  )
}

export default OurIconsCard