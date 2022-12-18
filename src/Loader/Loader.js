import React from 'react';
import loader from "../img/loader.gif"

import "./Loader.css"

export const Loader = () => {

  return(
    <div className="loader-shadow">
        <img src={loader} className="loader" ></img>
    </div>
  )
};