import img1 from "../../assets/1-img.png";
import img2 from "../../assets/2-img.png";
import img3 from "../../assets/3-img.png";
import img4 from "../../assets/4-img.png";
import img5 from "../../assets/5-img.png";
// import img6 from "../../assets/6-img.jpg";


const categories = [
  {
    label: "Plane",
    image: img1, 
  },
  {
    label: "Acid Wash",
    image: img2, 
  },
  {
    label: "TEES",
    image: img3, 
  },
  {
    label: "PANTS",
    image: img4, 
  },
];

export default function ModelsPreview() {
  return (
    <section className="py-10 px-4 mb-20 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-10">Shop by Category</h2>
      <div className="grid w-full  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col items-center">
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full aspect-[3/4] object-cover rounded"
            />
            <p className="mt-2 text-sm font-medium underline">{cat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
