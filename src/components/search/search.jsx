import React from "react";

import "./search.css";

export const Search = ({ placeholder, handleChange }) => {
    return(
        <input 
          type="search" 
          placeholder={placeholder}
          className="search" 
          onChange={handleChange} 
        />
    )
}