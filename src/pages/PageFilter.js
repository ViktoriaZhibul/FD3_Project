import React, { useMemo } from 'react';
import { useEffect } from 'react';

import Catalog from './../MainContent/Catalog/Catalog';

import { useDispatch, useSelector } from 'react-redux';
import { breedsLoad } from "./../redux/breedsLoad";
import { Loader } from './../Loader/Loader';

import { useParams } from "react-router-dom";

export const PageFilter = () => {
  const dispatch = useDispatch();
  const objState = useSelector( state => state.allBreeds.allBreeds ); 
  const favorites = useSelector( state => state.favorites.idBreed ); 

  useEffect(() => {
    if(objState.length===0) {
        dispatch( breedsLoad );
    }
  }, []);

  const params = useParams();
  const paramsFilter = params.filterParams;

  const PageFilterMemoizeed=useMemo(
    ()=>{
    function setFavorites() {
      let arr = [];
      objState.allBreeds.filter(el => {
        for (let i=0; i<favorites.length;i++){
          if(el.id === favorites[i]) {
            arr.push(el);
          }
        }
    })
    return <Catalog className="catalog" breedsArr={arr}/> 
    }

    return (
        <>
       {(!objState.dataLoadStatus)&&(<Loader/>)}
       {(objState.dataLoadStatus)&&(paramsFilter==="all")&&(<Catalog className="catalog" breedsArr={objState.allBreeds}/>)}
       {(objState.dataLoadStatus)&&(paramsFilter!="all")&&(paramsFilter!="favorites")&&(<Catalog className="catalog" breedsArr={objState.allBreeds.filter(el => el.size.toLowerCase()===paramsFilter)}/>)}
       {(favorites.length!==0)&&(paramsFilter==="favorites")&&(setFavorites())}
        </>
    );
    }, [objState, paramsFilter]);

    return PageFilterMemoizeed;
};