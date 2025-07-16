function HeroContactUs() {
  return (
    <section
      className="w-full relative bg-gradient-to-r from-[#F2F4FC] to-[#B4CDF2] 
                        min-h-[45vh] sm:min-h-[60vh] md:min-h-[50vh] lg:min-h-[60vh]
                        py-12 sm:py-16 md:py-20 lg:py-24 
                        px-6 overflow-hidden flex items-center"
    >
      {/* Triangular shapes on the right */}
      <div className="absolute top-0 right-0">
        {/* top-triangle */}
        <div className="absolute top-0 right-0 w-0 h-0 lg:border-r-[550px] lg:border-b-[350px] md:border-r-[400px] md:border-b-[300px] border-r-[300px] border-b-[200px] border-b-transparent border-r-[#1B5BD626] opacity-50"></div>
        {/* bottom-triangle */}
        <div className="absolute top-6 right-6 md:top-8 md:right-16 lg:top-10 lg:right-18 w-0 h-0 lg:border-r-[600px] lg:border-b-[400px] md:border-r-[400px] md:border-b-[300px] border-r-[300px] border-b-[200px] border-b-transparent border-r-[#1B5BD626] opacity-50"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-2 w-full">
        <div className="text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-3 md:mb-5">
            <span className="text-indigo-600">Contact</span> Us
          </h1>
          <p className="text-[#0000008A] text-lg md:text-xl max-w-md">
            Got a question? We won't stop you
          </p>
          <p className="text-[#0000008A] text-lg md:text-xl max-w-md">
            Whatever it is, we're just a message away!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroContactUs;
