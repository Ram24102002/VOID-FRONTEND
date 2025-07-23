import LOGO_Black_no from '../../assets/LOGO_Black_no.png';
import LOGO_Gold_no from '../../assets/LOGO_Gold_no.png';
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react"; // Assuming you have lucide-react installed for icons
// import {MessageCircleQuestionMark } from "lucide-react"; // Assuming you have lucide-react installed for icons
import CartDrawer from './CartDrawer'; // Assuming you have a CartDrawer component  

function NavBar() {

  const location = useLocation();
  const current = location.pathname.slice(1); // "" for home

  const links = [
    { name: "", label: "Home" },
    { name: "collections", label: "Collections" },
    { name: "anime", label: "Anime 🗡️" },
  ];


  return (
    <div className="navbar px-10 bg-base-100 lg:shadow-sm sticky top-0 z-30 ">
  <div className="flex-1 flex ">
    <img 
  className='h-9 dark:hidden' 
  src={LOGO_Black_no} 
  alt="" 
/>
<img 
  className='h-9 hidden dark:block' 
  src={LOGO_Gold_no} 
  alt="" 
/>
    <Link to={'/'} 
            onClick={() => window.scrollTo(0, 0)}
             className="btn btn-ghost text-xl">VOID</Link>
  </div>




<div className=" bg-base-100 hidden  lg:flex item-center rounded-box mx-10 p-2 shadow">
         {links.map((link) => {
        const isActive = current === link.name;
        return (
          <Link
            key={link.name}
            to={`/${link.name}`}
            onClick={() => window.scrollTo(0, 0)}
            className={`border-b-2 h-10 text-sm font-medium dark:text-white transition-colors duration-200 w-23  lg:bg-base-100 hidden lg:block flex items-center justify-center lg:rounded-box z-1 p-2 lg:shadow ${
              isActive
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-600 hover:border-indigo-600 hover:text-blue-500"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      </div>


  
  <div className="flex-none">


<div className='px-5 h-full corsor-pointer'>
      {/* <BadgeQuestionMark /> */}
</div>
    

    {/* cart */}
    <div className="dropdown px-5 h-full dropdown-end corsor-pointer">
      <CartDrawer />
    </div>



    {/* Profile */}
    <div className="dropdown  dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar  rounded-full">
        <div className="mb-5 flex items-center justify-center">
          <User />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <li><a className="justify-between">Profile</a></li>
        <li><Link to={'/contact-us'}>Contact Us</Link></li>
        {/* <li><a href='/contact-us'>Contact Us a</a></li> */}
        <li><a>Orders</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

   

    
  </div>
</div>
  )
}

export default NavBar