import AnimeImgCarousel from '../components/Anime/AnimeImgCarousel.jsx'
import AnimeHero from '../components/Anime/AnimeHero.jsx'
import Hero from '../components/Anime/Hero.jsx'

function AnimePage() {
  return (
    <div> 
      <Hero />
      <AnimeHero />
      <div className='flex justify-center items-center  '>
        <AnimeImgCarousel />
      </div>
    </div>
  )
}

export default AnimePage