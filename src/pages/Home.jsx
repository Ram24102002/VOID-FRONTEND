import Banner from '../components/Home/Banner.jsx';
import WhoAreWe from '../components/Home/WhoAreWe.jsx';
import ModelsPreview from '../components/Home/ModelsPreview.jsx';
import Hero from '../components/Home/Hero.jsx';
import HomeCarousel from '../components/Home/HomeCarousel.jsx';
import CardCenterImg from '../components/Cards/CardCenterImg';
import CardWithImgOnSide from '../components/Cards/CardWithImgOnSide.jsx';


function Home() {
  return (
    <div className="flex flex-col items-center bgw   bg-gray-100">
      <Banner />
      <div className='hidden w-full flex lg:block'>
        <div className='w-1/2'></div>
      </div>
      <HomeCarousel />
      <CardWithImgOnSide />
      <CardCenterImg />
      {/* <ModelsPreview /> */}
      <Hero />
    </div>

  )
}

export default Home