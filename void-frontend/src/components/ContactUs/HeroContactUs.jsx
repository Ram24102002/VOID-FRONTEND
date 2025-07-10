import HeroContactUsImg from '../../assets/HeroContactUsImg.png'

function HeroContactUs() {
  return (
    <section className=" bg-indigo-50 px-7 flex-col lg:flex-row bg-opacity-110 flex justify-around items-center">
      <div >
        <div className="max-w-6xl mx-auto px-2 pt-10 lg:pt-30 ">
          <p className="text-4xl lg:text-6xl font-bold mt-1 mb-6 text-blue-700">Contact Us</p>
          <p className="text-lg text-gray-400 max-w-160 mb-8 ">
            Got a question? (we won’t stop you)? <br />
            Whatever it is, we’re just a message away!
          </p>
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto px-2  lg:md:pt-30 pb-10">
          <img
            src={HeroContactUsImg}
            alt="Image"
            className="w-full h-60 lg:h-90"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroContactUs