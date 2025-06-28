import React from 'react'
import { ShoppingCart } from "lucide-react"; // Assuming you have lucide-react installed for icons

function CartDrawer() {
  return (
    <div>
        <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Button content here */}
    <label htmlFor="my-drawer-4" className="drawer-button">
        <div className="indicator mt-5 flex items-center justify-center">
          <ShoppingCart />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default CartDrawer