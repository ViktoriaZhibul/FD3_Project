import React from 'react';
import { useEffect } from 'react';

import Catalog from './../MainContent/Catalog/Catalog';
import { Loader } from './../Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { breedsLoad } from "./../redux/breedsLoad";


export const PageMain = () => {
  const dispatch = useDispatch();
  const objState = useSelector( state => state.allBreeds.allBreeds ); 

  useEffect(() => {
    if(objState.length===0) {
        dispatch( breedsLoad );
    }
  }, []);

  if(objState.dataLoadStatus) {
    const arr = objState.allBreeds;
    let currentBreedsShow = arr.slice(0, 50);
    return (
      <Catalog className="catalog" breedsArr={currentBreedsShow}/>
    )
 }

  return(
    <>
      {(!objState.dataLoadStatus)&&(<Loader/>)}
      {(objState.dataLoadStatus)&&(<Catalog className="catalog" breedsArr={objState.allBreeds.slice(0, 50)}/>)}
    </>
  )
};