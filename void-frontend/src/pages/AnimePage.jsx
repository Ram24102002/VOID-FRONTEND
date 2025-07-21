import AnimeImgCarousel from '../components/Anime/AnimeImgCarousel.jsx'
import AnimeHero from '../components/Anime/AnimeHero.jsx'
import Hero from '../components/Anime/Hero.jsx'
import AnimeQuality from '../components/Anime/AnimeQuality.jsx'
import CardCenterImgHome from '../components/Home/CardCenterImgHome.jsx'

function AnimePage() {
  return (
    <div> 
      <Hero />
      <AnimeQuality />
      <CardCenterImgHome />
    </div>
  )
}

export default AnimePage