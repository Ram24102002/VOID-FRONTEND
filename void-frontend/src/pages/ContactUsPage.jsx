import HeroContactUs from '../../src/components/ContactUs/HeroContactUs';
import ContactDetails from '../../src/components/ContactUs/ContactDetails';
import ContactUsForm from '../../src/components/ContactUs/ContactUsForm';
import LocateUsOnMaps from '../../src/components/ContactUs/LocateUsOnMaps';
import SocialMedia from '../../src/components/ContactUs/SocialMedia';
import FAQ from '../../src/components/ContactUs/FAQ';

function ContactUsPage() {
  return (
    
      <section className='flex flex-col w-full  bg-white items-center justify-center'>
        <div className='w-full '>
          <HeroContactUs />
        </div>
        < ContactDetails />
        <div className='w-full   flex-col lg:flex-row flex mx-auto lg:px-10 pt-2 lg:pt-10 pb-10'>
          <div className='w-full lg:w-2/4 flex flex-col justify-center lg:p-10'><LocateUsOnMaps /><SocialMedia /></div>
          <div className='w-full lg:w-3/4'> <ContactUsForm /></div>
        </div>
        
        
        <FAQ />
      </section>
      
    
  );
}

export default ContactUsPage;
