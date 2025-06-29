import AnimeImgCarousel from '../components/Anime/AnimeImgCarousel.jsx'
import AnimeHero from '../components/Anime/AnimeHero.jsx'

function AnimePage() {
  return (
    <div> 
      <AnimeHero />
      <div className='flex justify-center items-center  '>
        <AnimeImgCarousel />
      </div>
    </div>
  )
}

export default AnimePage