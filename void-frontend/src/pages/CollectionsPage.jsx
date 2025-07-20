import ProductShowcase from '../components/Cards/ProductShowcase';
import CardCenterImg from '../components/Cards/CardCenterImg';
import CardWithImgOnSide from '../components/Cards/CardWithImgOnSide';
import CarouselWithNo from '../components/Carousel/CarouselWithNo';
import ProductList from '../components/Cards/ProductList';
import AutomaticCarousel from '../components/Carousel/AutomaticCarousel';
import CardCenterImgHome from '../components/Home/CardCenterImgHome';


function CollectionsPage() {
  return (
    <div>
      
        <ProductList />
        <AutomaticCarousel />
        <CardCenterImgHome />
        <ProductList />
        <CarouselWithNo />
        <CardWithImgOnSide />


        
        {/* <ProductShowcase /> */}
    </div>
  )
} 

export default CollectionsPage