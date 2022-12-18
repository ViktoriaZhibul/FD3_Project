import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import "./Search.css";

function Search() {
    let [breedName, setBreedName] = useState("");

    let navigate = useNavigate();

    function goToBreedDetails() {
      const uri = "/search/" + breedName;
      navigate(uri);
    }
    return (
        <div className='search__wrap'>
            <div className='search__input-wrap'>
                <input type="search" value={breedName} placeholder="Введите название породы" className="search__input" onChange={ eo => setBreedName(eo.target.value) }/>
            </div>
            <input type="button" value="Найти" className="search__button" onClick={goToBreedDetails} />
        </div>
    )
 }
 
 export default Search;

