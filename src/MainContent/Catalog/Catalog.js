import React, { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from './../../Header/use-auth';
import { getUserFavorites } from './../../redux/favoritesSlice';

import firebaseConfig from "./../../firebase"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import "./Catalog.css";

import Card from "./Card/Card"


function Catalog({ breedsArr }) {
  const dispatch = useDispatch();
  const { isAuth, id } = useAuth();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    if (isAuth) {
      const data = onSnapshot(collection(db, 'favorities'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().idUser === id) {
            dispatch(getUserFavorites({
              idUser: doc.data().idUser,
              idBreed: doc.data().idBreed,
            }));
          }
        });
      });
      return () => data();
    }
  }, [isAuth]);

  const CatalogMemoizeed = useMemo(
    () => {
      return (
        <div className="catalog">{breedsArr.map(el => <Card key={el.id} info={el} />)}</div>
      )
    }, [breedsArr]);

  return CatalogMemoizeed;
};

export default Catalog;