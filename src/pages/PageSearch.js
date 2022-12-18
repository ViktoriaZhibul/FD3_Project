import React from 'react';
import { useEffect } from 'react';

import Catalog from './../MainContent/Catalog/Catalog';

import { useDispatch, useSelector } from 'react-redux';
import { breedsLoad } from "./../redux/breedsLoad";
import { Loader } from './../Loader/Loader';

import {useParams} from "react-router-dom";

export const PageSearch = () => {
  const dispatch = useDispatch();
  const objState = useSelector( state => state.allBreeds.allBreeds ); 

  useEffect(() => {
    if(objState.length===0) {
        dispatch( breedsLoad );
    }
  }, []);

  const params = useParams();
  const breedName=params.breedname.toLowerCase();

  return(
    <>
      {(!objState.dataLoadStatus)&&(<Loader/>)}
      {(objState.dataLoadStatus)&&(<Catalog className="catalog" breedsArr={objState.allBreeds.filter(el => el.name.toLowerCase().includes(breedName))}/>)}
      {(objState.dataLoadStatus)&&(objState.allBreeds.filter(el => el.name.toLowerCase().includes(breedName)).length===0)&&(<div className="catalog card__title">По Вашему запросу: { params.breedname } начего не найдено!</div>)}
    </>
  )
};