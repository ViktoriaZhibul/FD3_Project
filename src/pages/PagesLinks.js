import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

export const PagesLinks = () => {
          
    function getLinkClass(obj) {
      let className="pagination";
      if ( obj.isActive )
        className+=" pagination_active";
      return className;
    }

    return (
      <div className='nav'>
        <NavLink to="/" end className={getLinkClass}></NavLink>
        <NavLink to="/allBreeds/page=1" className={getLinkClass}>1</NavLink>
        <NavLink to="/allBreeds/page=2" className={getLinkClass}>2</NavLink>
        <NavLink to="/allBreeds/page=3" className={getLinkClass}>3</NavLink>
      </div>
    );

};
