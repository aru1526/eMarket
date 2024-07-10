import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const[menu,setMenu]=useState("home"); //to show current menu, here its "home"-> it show underline under home
  //setMenu is function
  
  return (
    <div className='navbar'>
        <div class="navbar-top">
            <span>Welcome to eMarket</span>
        </div>
        <div className='navbar-bottom'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">  
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":" "}>Home</li> 
        <li onClick={()=>setMenu("products")} className={menu==="products"?"active":" "}>Products</li>
        <li onClick={()=>setMenu("best-seller")} className={menu==="best-seller"?"active":" "}>Best Seller</li>
        <li onClick={()=>setMenu("track-your-order")} className={menu==="track-your-order"?"active":" "}>Track Your Order</li>
      </ul>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <img src={assets.search_icon} alt="" />
      </div>
      <div className="navbar-right">
        <button>Sign In</button>
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
