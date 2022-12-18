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

   return (
    <div className='filter'>
      <input type="button" value="Показать избранное" className='filter__button' onClick={() => showFavorities()} disabled={!isAuth}/>
      <NavLink to="/filter/all" className="filter__link">Все</NavLink>
      <NavLink to="/filter/миниатюрные" className='filter__link'>Миниатюрные</NavLink>
      <NavLink to="/filter/мелкие" className='filter__link'>Мелкие</NavLink>
      <NavLink to="/filter/средние" className='filter__link'>Средние</NavLink>
      <NavLink to="/filter/крупные" className='filter__link'>Крупные</NavLink>
    </div>
   )
}

export default Filter;