import orange from '../../assets/ColorTheme/orange.jpg'
import whitishGray from '../../assets/ColorTheme/WhitishGray.jpg'
import black from '../../assets/ColorTheme/black.jpg'
import Yellow from '../../assets/ColorTheme/Yellow.jpg'
import tame from '../../assets/ColorTheme/tame.jpg'
import chessboard from '../../assets/ColorTheme/chessboard.jpg'


function HomeCarousel() {

  const object =[
    { id: 1, image: orange, alt: "Orange Theme" },
    { id: 2, image: whitishGray, alt: "Whitish Gray Theme" },
    { id: 3, image: black, alt: "Black Theme" },
    { id: 4, image: Yellow, alt: "Yellow Theme" },
    { id: 5, image: tame, alt: "Tame Theme" },
    { id: 6, image: chessboard, alt: "Chessboard Theme" }
  ]
  
  return (
    <div className='py-10'>
        <h1 className='text-center text-2xl font-semibold mb-10'>What is Your Theme</h1>
    <div className=' flex justify-center  items-center mb-30 px-10'>
        
        <div className="carousel w-full h-110 lg:h-110 lg:w-full rounded-box">
  {object.map((object,index) => (
    <div key={index} className="carousel-item">
    <img
      className='h-full w-70 lg:w-100 object-cover'
      src={object.image}
      alt="Burger" />
  </div>
  ))}
  
</div>
    </div>
    </div>
  )
}

export default HomeCarousel