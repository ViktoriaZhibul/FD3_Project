import React from 'react';
import { useEffect } from 'react';

import Catalog from './../MainContent/Catalog/Catalog';

import { useDispatch, useSelector } from 'react-redux';
import { breedsLoad } from "./../redux/breedsLoad";
import { Loader } from './../Loader/Loader';

export const Page1NavAllBreeds = () => {
  const dispatch = useDispatch();
  const objState = useSelector( state => state.allBreeds.allBreeds ); 

  useEffect(() => {
    if(objState.length===0) {
        dispatch( breedsLoad );
    }
  }, []);

  return(
    <>
      {(!objState.dataLoadStatus)&&(<Loader/>)}
      {(objState.dataLoadStatus)&&(<Catalog className="catalog" breedsArr={objState.allBreeds.slice(0, 50)}/>)}
    </>
  )
};
