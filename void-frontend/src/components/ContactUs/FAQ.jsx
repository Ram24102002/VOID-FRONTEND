import { useState, useRef, useEffect } from "react";
import { ChevronDown, UserRound } from "lucide-react";
import Profile1 from "../../assets/fprofile1.png";
import Profile2 from "../../assets/fprofile2.png";
import Profile3 from "../../assets/fprofile3.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);
  const contentRefs = useRef([]);
  const navigate = useNavigate();

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
    question: "What is this site about?",
    answer:
      "Our site is a dedicated platform for anime lovers to explore and buy high-quality, creative anime-themed t-shirts that celebrate their favorite characters and series.",
  },
  {
    question: "Who are these t-shirts for?",
    answer:
      "They're for anime fans of all ages—whether you're into classic shonen, slice of life, or the latest seasonal hits. Our collections are designed for both casual wearers and die-hard otakus.",
  },
  {
    question: "Are the designs original?",
    answer:
      "Yes! Our designs are crafted by passionate artists and anime enthusiasts to ensure originality, style, and a deep connection to the anime culture. except some of the designs are inspired by popular anime series and characters",
  },
  {
    question: "What sizes are available?",
    answer:
      "We offer a wide range of sizes, typically from XS to 3XL. Each product page includes a detailed size chart to help you pick the perfect fit.",
  },
  {
    question: "How is the quality of the t-shirts?",
    answer:
      "Our t-shirts are made from premium, soft-touch cotton and best GSM with long-lasting prints that won’t fade after washes. Comfort, durability, and style are our top priorities.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Simply browse your favorite collection, choose your size, and click ‘Add to Cart’. Proceed to checkout for secure payment and fast delivery options.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping options and delivery times will be shown at checkout based on your location.",
  },
  ];

  useEffect(() => {
    faqItems.forEach((_, index) => {
      const ref = contentRefs.current[index];
      if (ref) {
        ref.style.maxHeight =
          openItem === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openItem]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-10 md:mt-5 bg-white">
      <div className="text-center mb-8">
        <h2 className="md:text-[60px] text-[30px] md:leading-[60px] leading-[35px] font-bold mb-2">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-gray-500 md:text-[20px] text-[13px]">
          Everything you need to know.
        </p>
      </div>

      <div className="max-w-3xl space-y-4 mb-8 mx-auto">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 md:rounded-2xl rounded-3xl overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left"
              onClick={() => toggleItem(index)}
            >
              <span className="font-medium">{item.question}</span>
              <ChevronDown
                className={`transition-transform duration-500 ${
                  openItem === index ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`overflow-hidden transition-all duration-[700ms] ease-in-out transform ${
                openItem === index
                  ? "opacity-100 translate-y-0 p-4 pt-0"
                  : "opacity-0 -translate-y-2 p-0"
              }`}
              style={{
                maxHeight:
                  openItem === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
              }}
            >
              <div className="text-gray-600">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6 text-center">
        <div className="flex justify-center mb-3">
          <div className="flex -space-x-4 relative">
            <div className="z-10">
              <img
                src={Profile1}
                alt=""
                className="h-[56px] rounded-full border-2 border-white bg-[#abb677]"
              />
            </div>
            <div className="z-30 -mt-1">
              <img
                src={Profile2}
                alt=""
                className="h-[56px] rounded-full border-2 border-white bg-[#c7b9da]"
              />
            </div>
            <div className="z-20">
              <img
                src={Profile3}
                alt=""
                className="h-[56px] rounded-full border-2 border-white bg-[#d9b9bb]"
              />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
        <p className="text-gray-400 text-sm font-medium mb-4">
          Can't find the answer you're looking for? Please chat to our friendly
          team.
        </p>
        <a href="https://wa.me/917305790119">
          <motion.button
          className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md text-sm tracking-wide"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          
        >
          Get in touch
        </motion.button>
        </a>
      </div>
    </div>
  );
};

export default FAQ;
