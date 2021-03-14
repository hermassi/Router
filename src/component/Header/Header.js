import React from "react";
import "./Header.css";
// import {NavLink} from "react-router-dom"; 


const Header = ({setSearch}) => {
  return (

    <div className="search-container">
         {/* <nav>
         <NavLink to ='/' exact style={{color: "white",fontSize:"60%", marginLeft :"2%" }} >Home
          </NavLink>
      </nav>  */}

      
   
      <input
        type="text"
        placeholder="Type movie name to search"
        onChange={(e) => setSearch(e.target.value)}
   />

    </div>
  );
};

export default Header;