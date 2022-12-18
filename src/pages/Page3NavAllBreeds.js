import React from 'react';
import { useEffect } from 'react';

import Catalog from './../MainContent/Catalog/Catalog';
import { Loader } from './../Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { breedsLoad } from "./../redux/breedsLoad";


export const Page3NavAllBreeds = () => {
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
      {(objState.dataLoadStatus)&&(<Catalog className="catalog" breedsArr={objState.allBreeds.slice(100, objState.allBreeds.length-1)}/>)}      
    </>
  )
};