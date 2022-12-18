import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useAuth } from './../../Header/use-auth';

import "./Filter.css";

function Filter() {
  const {isAuth} = useAuth();
  let navigate = useNavigate();

  const showFavorities = () => {
    const uri = "/filter/favorites";
    navigate(uri);
}
  function getLinksClass(obj) {
    let className="filter__link";
    if ( obj.isActive )
      className+=" filter_active";
    return className;
  }

   return (
    <div className='filter'>
      <input type="button" value="Показать избранное" className='filter__button' onClick={() => showFavorities()} disabled={!isAuth}/>
      <NavLink to="/filter/all" className={getLinksClass}>Все</NavLink>
      <NavLink to="/filter/миниатюрные" className={getLinksClass}>Миниатюрные</NavLink>
      <NavLink to="/filter/мелкие" className={getLinksClass}>Мелкие</NavLink>
      <NavLink to="/filter/средние" className={getLinksClass}>Средние</NavLink>
      <NavLink to="/filter/крупные" className={getLinksClass}>Крупные</NavLink>
    </div>
   )
}

export default Filter;