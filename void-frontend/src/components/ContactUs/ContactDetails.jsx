import { Phone } from "lucide-react";
import { Mail, MapPin, Globe, Instagram } from "lucide-react";


export default function ContactDetails() {
  return (
    <div className="  flex items-center justify-center py-10 lg:p-10">
      <div className="w-full ">

        {/* Heading */}
        <h2 className="text-3xl text-gray-700 font-bold mb-2">Get in Touch</h2>
        <p className="text-gray-400 text-sm mb-15 line-clamp-3 lg:line-clamp-2">
          We'd love to hear from you — whether you've got questions,  suggestions, or just want to say hi (we love a good hello!)
        </p>

        {/* Contact Info */}
        {[
          {
            icon: <Phone />,
            label: "+91 7305790119",
            link: "tel:+917305790119",
          },
          {
            icon: <Mail />,
            label: "abcdefghijkl@gmail.com",
            link: "mailto:abcdefghijkl@gmail.com",
          },
          {
            icon: <MapPin />,
            label: "Chennai, Tamil Nadu, India",
          },
          {
            icon: <Globe />,
            label: "VoidFassion.com",
            link: "https://google.com",
          },
          {
            icon: <Instagram />,
            label: "Void_Fassion",
            link: "https://instagram.com/",
          },
        ].map((info, idx) => (
          <div key={idx} className="flex items-center gap-8 my-10 text-gray-700">
            <span className="text-white p-2 bg-blue-400 rounded-full">{info.icon}</span>
            {info.link ? (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:underline"
              >
                {info.label}
              </a>
            ) : (
              <span className="text-xl">{info.label}</span>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
