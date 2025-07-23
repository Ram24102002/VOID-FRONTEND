import AnimeImgCarousel from '../components/Anime/AnimeImgCarousel.jsx'
import AnimeHero from '../components/Anime/AnimeHero.jsx'
import Hero from '../components/Anime/Hero.jsx'
import AnimeQuality from '../components/Anime/AnimeQuality.jsx'
import CardCenterImgHome from '../components/Home/CardCenterImgHome.jsx'
import ProductList from '../components/Cards/ProductList.jsx'

function AnimePage() {
  return (
    <div> 
      <Hero />
      <AnimeQuality />
      <CardCenterImgHome />
      <ProductList />
    </div>
  )
}

export default AnimePage