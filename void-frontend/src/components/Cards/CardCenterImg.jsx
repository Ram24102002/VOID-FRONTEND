import React from 'react'

// Card with centered content and paddings

function CardCenterImg() {


    const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60",
    title: "Basic Black Tee",
    description: "Classic black cotton T-shirt. Soft, durable, and perfect for everyday wear."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60",
    title: "Basic White Tee",
    description: "Clean and simple white tee for all occasions. Easy to style and comfortable."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60",
    title: "Neutral Grey Tee",
    description: "Versatile grey T-shirt that fits every mood and outfit."
  },
  {
    id: 4,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Naruto Graphic Tee",
    description: "Bold Naruto-themed design on a premium cotton T-shirt. Perfect for anime fans."
  },
  {
    id: 5,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "One Piece Pirate Crew Shirt",
    description: "Join the Straw Hats with this black tee featuring the Jolly Roger emblem."
  },
  {
    id: 6,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Attack on Titan Scout Regiment Tee",
    description: "Show off the Wings of Freedom with this stylish AoT-themed shirt."
  },
  {
    id: 7,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Jujutsu Kaisen Gojo Tee",
    description: "Minimalist tee featuring Gojo Satoru’s silhouette. Sleek and stylish."
  },
  {
    id: 8,
    img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Demon Slayer Tanjiro Tee",
    description: "Inspired by Tanjiro’s breathing technique, this tee bursts with energy and design."
  }
];


  return (
    <div>
      <h1 className='text-center text-2xl font-semibold mt-10'>Premium Collections</h1>
      <div className='flex flex-wrap justify-center gap-5 p-10'>
        {products.map((product) => (
            <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={product.img}
      alt="Shoes"
      className="rounded-xl h-100" />
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