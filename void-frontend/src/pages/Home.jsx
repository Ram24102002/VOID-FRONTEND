

// import Banner from '../components/Home/Banner.jsx';
// import WhoAreWe from '../components/Home/WhoAreWe.jsx';
// import ModelsPreview from '../components/Home/ModelsPreview.jsx';
// import ProductList from '../components/Cards/ProductList.jsx';
// import AutomaticCarousel from '../components/Carousel/AutomaticCarousel.jsx';
// import Temp from '../components/common/temp.jsx';
// import CardCenterImg from '../components/Cards/CardCenterImg';
// import CardWithImgOnSide from '../components/Cards/CardWithImgOnSide.jsx';
// import OurIconsCard from '../components/Cards/OurIconsCard.jsx';
import Hero from '../components/Home/Hero.jsx';
import HomeCarousel from '../components/Home/HomeCarousel.jsx';
import DiffSlider from '../components/Home/DiffSlider.jsx';
import QualityBanner from '../components/Home/QualityBanner.jsx';
import TwoImageAndText from '../components/Home/TwoImageAndText.jsx'
import ClientTestimonials from '../components/Home/ClientTestimonials.jsx';
import Stats from '../components/Home/Stats.jsx';
import FAQ from '../components/Home/FAQ.jsx';
import CardCenterImgHome from '../components/Home/CardCenterImgHome.jsx';



function Home() {
  return (
    <div className="flex flex-col items-center bgw   bg-gray-100">
      <Hero />
      <div className='hidden w-full flex lg:block'>
        <div className='w-1/2'></div>
      </div>
      <QualityBanner />
      <div className="border-t hidden md:block  border-gray-300 my-6 h-1 w-full"></div>
      <HomeCarousel />
      <div className="border-t hidden md:block border-gray-300 my-6 h-1 w-full"></div>
      <TwoImageAndText />
      <div className="border-t hidden md:block border-gray-300 my-6 h-1 w-full"></div>
      <CardCenterImgHome />
      <DiffSlider />
      {/* <div className="border-t hidden md:block border-gray-300 my-6 h-1 w-full"></div> */}
      <Stats />
      {/* <div className="border-t hidden md:block border-gray-300 my-6 h-1 w-full"></div> */}
      <ClientTestimonials />

      {/* <SkeletonCard /> */}
      
      {/* <Temp /> */}
      {/* <ProductList /> */}
      {/* <CardCenterImg /> */}
      {/* <CardWithImgOnSide /> */}
      {/* <OurIconsCard /> */}
      {/* <ModelsPreview /> */}


      <FAQ />
      
    </div>

  )
}

export default Home