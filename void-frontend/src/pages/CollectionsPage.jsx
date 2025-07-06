import ProductShowcase from '../components/Cards/ProductShowcase';
import CardCenterImg from '../components/Cards/CardCenterImg';
import CardWithImgOnSide from '../components/Cards/CardWithImgOnSide';
import CarouselWithNo from '../components/Carousel/CarouselWithNo';
import ProductList from '../components/Cards/ProductList';
import AutomaticCarousel from '../components/Carousel/AutomaticCarousel';


function CollectionsPage() {
  return (
    <div>
        <AutomaticCarousel />
        <ProductList />
        <CarouselWithNo />
        <ProductShowcase />
        <CardCenterImg />
        <CardWithImgOnSide />
    </div>
  )
} 

export default CollectionsPage