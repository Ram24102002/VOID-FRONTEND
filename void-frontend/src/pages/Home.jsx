import Banner from '../components/Home/Banner.jsx';
import WhoAreWe from '../components/Home/WhoAreWe.jsx';
import ModelsPreview from '../components/Home/ModelsPreview.jsx';
import Hero from '../components/Home/Hero.jsx';
import HomeCarousel from '../components/Home/HomeCarousel.jsx';
import CardCenterImg from '../components/Cards/CardCenterImg';
import CardWithImgOnSide from '../components/Cards/CardWithImgOnSide.jsx';
import OurIconsCard from '../components/Cards/OurIconsCard.jsx';
import DiffSlider from '../components/Home/DiffSlider.jsx';
import ProductList from '../components/Cards/ProductList.jsx';
import AutomaticCarousel from '../components/Carousel/AutomaticCarousel.jsx';



function Home() {
  return (
    <div className="flex flex-col items-center bgw   bg-gray-100">
      <Hero />
      <div className='hidden w-full flex lg:block'>
        <div className='w-1/2'></div>
      </div>
      
      <AutomaticCarousel />
      <ProductList />
      <OurIconsCard />
      <HomeCarousel />
      <DiffSlider />
      <CardWithImgOnSide />
      <CardCenterImg />
      {/* <ModelsPreview /> */}
      
    </div>

  )
}

export default Home