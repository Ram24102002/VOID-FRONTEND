 import { Phone, MapPin, Mail, Globe } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: <Phone className="text-blue-600 w-6 h-6" />,
    title: 'Mobile No',
    text: '+91 7305790119',
    to: 'tel:+917305790119',
  },
  {
    icon: <MapPin className="text-blue-600 w-6 h-6" />,
    title: 'Location',
    text: 'Chennai',
    to: 'https://www.google.com/maps/place/Chennai,+Tamil+Nadu/',
  },
  {
    icon: <Mail className="text-blue-600 w-6 h-6" />,
    title: 'Email',
    text: 'Asaninnovators@gmail.com',
    to: 'mailto:ramachandran24102002@gmail.com',
  },
  {
    icon: <Globe className="text-blue-600 w-6 h-6" />,
    title: 'Website',
    text: 'void.in',
    to: 'https://www.void.in',
  },
];

export default function ContactDetails() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = (item) => {
    if (item.title === 'Email') {
      navigator.clipboard.writeText(item.text).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }).catch((err) => {
        console.error('Failed to copy email: ', err);
      });
    } else if (item.to.startsWith('tel:')) {
      window.location.href = item.to;
    } else {
      window.open(item.to, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center gap-6 p-12 md:p-10">
        {contactInfo.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(item)}
            className="w-full lg:w-[250px] cursor-pointer focus:outline-none"
          >
            <div className="bg-indigo-50 text-center text-lg h-[150px] lg:w-[250px] rounded-lg shadow-sm flex flex-col items-center justify-center hover:bg-indigo-100 transition duration-300">
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-700 whitespace-pre-line">{item.text}</p>
            </div>
          </button>
        ))}
      </div>

      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-md text-sm animate-fadeInOut z-50">
          Email Copied ✅
        </div>
      )}
    </div>
  );
}
