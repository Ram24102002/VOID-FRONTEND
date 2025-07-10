import { Link, useLocation } from "react-router-dom";

export default function NavbarMobile() {
  const location = useLocation();
  const current = location.pathname.slice(1); // "" for home

  const links = [
    { name: "", label: "Home" },
    { name: "collections", label: "Collections" },
    { name: "anime", label: "Anime 🗡️" },
  ];

  return (
    <nav className="flex space-x-6 border-b border-gray-200 bg-base-100 lg:hidden">
      {links.map((link) => {
        const isActive = current === link.name;
        return (
          <Link
            key={link.name}
            to={`/${link.name}`}
            className={`pb-2 border-b-2 text-sm font-medium transition-colors duration-200 w-full  lg:bg-base-100 lg:hidden flex items-center justify-center lg:rounded-box p-2 lg:shadow ${
              isActive
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-600 hover:border-indigo-600 hover:text-blue-500"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
