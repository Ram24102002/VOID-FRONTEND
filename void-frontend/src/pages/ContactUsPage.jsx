import LocateUsOnMaps from '../components/ContactUs/LocateUsOnMaps.jsx';
import ContactUsForm from '../components/ContactUs/ContactUsForm.jsx';
import ContactDetails from '../components/ContactUs/ContactDetails.jsx';
import HeroContactUs from '../components/ContactUs/HeroContactUs.jsx';


function ContactUsPage() {
  return (
    
      <section className='flex flex-col w-full  bg-white items-center justify-center'>
        <div className='w-full '>
          <HeroContactUs />
        </div>
        <div className='w-full   flex-col-reverse lg:flex-row flex mx-auto lg:px-10 pt-2 lg:pt-10 pb-10'>
          <div className='w-full lg:w-2/4 flex justify-center lg:p-10'><LocateUsOnMaps /></div>
          <div className='w-full lg:w-3/4  flex px-10 lg:p-0'>< ContactDetails /></div>
        </div>
        <div className='w-full   flex-col lg:flex-row flex  px-10 pt-2 lg:pt-10 pb-10'>
          <div className='w-full lg:w-2/4'></div>
          <div className='w-full lg:w-3/4'> <ContactUsForm /></div>
        </div>
      </section>
      
    
  );
}

export default ContactUsPage;
