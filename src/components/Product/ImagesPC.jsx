
import swe from '../../assets/swe.png';

function ImagesPC() {
        const images = [swe, swe, swe]; 
  return (
    <div>
        {/* Images */}
    <div className="space-y-4 overflow-auto max-h-[calc(100vh-96px)] pr-2">
      {images.map((img, index) => (
        <div key={index} className="bg-gray-100 rounded-lg">
          <img 
            alt="Product"
            className="w-full object-cover"
            src={img}
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default ImagesPC