import React from 'react'

// Card with centered content and paddings

function CardCenterImgHome() {


    const products = [
  
  {
    id: 1,
    img: "https://images3.alphacoders.com/135/135625.jpg",
    title: "Naruto Graphic Tee",
    description: "Bold Naruto-themed design on a premium cotton T-shirt. Perfect for anime fans."
  },
  {
    id: 2,
    img: "https://images2.alphacoders.com/516/516664.jpg",
    title: "One Piece Pirate Crew Shirt",
    description: "Join the Straw Hats with this black tee featuring the Jolly Roger emblem."
  },
  {
    id: 3,
    img: "https://images8.alphacoders.com/120/1206570.jpg",
    title: "Attack on Titan Scout Regiment Tee",
    description: "Show off the Wings of Freedom with this stylish AoT-themed shirt."
  },
  {
    id: 4,
    img: "https://images3.alphacoders.com/137/thumb-1920-1371543.jpeg",
    title: "Jujutsu Kaisen Gojo Tee",
    description: "Minimalist tee featuring Gojo Satoru’s silhouette. Sleek and stylish."
  }
];


  return (
    <div>
      <h1 className='text-center text-2xl font-semibold mt-10'>Our Anime Themes</h1>
      <div className='flex flex-wrap justify-center gap-5  p-5 md:p-10'>
        {products.map((product) => (
            <div key={product.id} className="card bg-base-100  shadow-sm">
  <figure className="px-5 md:px-10 pt-10">
    <img
      src={product.img}
      alt="Shoes"
      className="rounded-xl h-50" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.title}</h2>
    <p>{product.description}</p>
    <div className="card-actions">
      <button className="btn bg-indigo-600 text-white ">Explore Collections</button>
    </div>
  </div>
</div>
        ))}
    </div>
    </div>
  )
}

export default CardCenterImgHome